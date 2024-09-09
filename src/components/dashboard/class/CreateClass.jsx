import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import "./class.css"
import Navbar from '../../common/Navbar'
import AuthContext from '../../../context/AuthContext'
import { CircularProgress } from '@mui/material'

const CreateClass = ({ toggleShowMenu }) => {
    const [name, setName] = useState("")
    const [tutor, setTutor] = useState()
    const [duration, setDuration] = useState("")
    const [price, setPrice] = useState("")

    const [loading, setLoading] = useState(false)


    const { allTutors, getTutors, authTokens } = useContext(AuthContext)


    const createClass = async (e) => {
        setLoading(true)
        e.preventDefault();

        try {
            let response = await fetch("https://welearnapi.fun/api/classes/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens.access}`
                },
                body: JSON.stringify({
                    class_name: name,
                    duration: duration,
                    price: price,
                    instructor: tutor
                })
            })

            const data = await response.json()
            console.log(data)

            if (response.status === 201) {
                toast.success(`Class Created Successfully ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#E3FDCA",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                setDuration("")
                setPrice("")
                setName("")
                setTutor("")
            } else {
                toast.error(`Failed to create a class ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#FFCCCC",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                console.log("Failed to fetch pending tutors:", data);
            }
        } catch (error) {
            console.error("Failed to create class", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getTutors()
    }, [allTutors])

    return (
        <>
            <Toaster />
            <div className='main__container'>
                <Navbar toggleShowMenu={toggleShowMenu} />
                <div className="main__content">
                    <div className='main__content-table-container'>
                        <div className='main__content-table-head'>
                            <h2>Create Class</h2>
                        </div>
                    </div>

                    <div className='create__class-container'>
                        <form className='create__class'>
                            <div>
                                <input type="text" placeholder='Enter name of class' onChange={(e) => setName(e.target.value)} />
                                <select onChange={(e) => setTutor(e.target.value)}>
                                    <option>Select a tutor</option>
                                    {allTutors.map((tutor, index) => (
                                        <option key={index} value={tutor.id}>{tutor.user.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <select onChange={(e) => setDuration(e.target.value)}>
                                    <option>Select class duration</option>
                                    <option value="TWO WEEKS">TWO WEEKS</option>
                                    <option value="ONE MONTHS">ONE MONTHS</option>
                                    <option value="TWO MONTHS">TWO MONTHS</option>
                                    <option value="THREE MONTHS">THREE MONTHS</option>
                                    <option value="FOUR MONTHS">FOUR MONTHS</option>
                                    <option value="FIVE MONTHS">FIVE MONTHS</option>
                                    <option value="SIX MONTHS">SIX MONTHS</option>
                                    <option value="ONE YEAR ABOVE">ONE YEAR ABOVE</option>
                                </select>
                                <input type="text" placeholder='Enter price of class' onChange={(e) => setPrice(e.target.value)} />
                            </div>

                            <button onClick={createClass}>
                                {loading ? (
                                    <CircularProgress color="inherit" size="20px" />
                                ) : "Create"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateClass
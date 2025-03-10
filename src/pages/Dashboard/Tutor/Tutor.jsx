import React, { useContext, useEffect, useState } from 'react'


import "../../../components/dashboard/tutor/tutor.css"
import Navbar from '../../../components/common/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import { CircularProgress } from '@mui/material'

const Tutor = ({ toggleShowMenu }) => {
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [tutorDetails, setTutorDetails] = useState({})

    console.log('Tutor Details:', tutorDetails)

    const { authTokens } = useContext(AuthContext)

    const { tutorId } = useParams()
    const navigate = useNavigate();

    const fetchDetails = async () => {
        setLoading(true)

        try {
            let response = await fetch(`https://welearnapi.fun/api/instructor-profiles/update/${tutorId}/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens.access}`
                }
            })

            const data = await response.json()
            console.log(data)

            if (response.ok) {
                setTutorDetails(data)
                console.log("Tutor Data Fetch Successfully")
            } else {
                toast.error(`Failed to fetch tutor ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#FFCCCC",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                console.log("Failed to fetch tutors data", response.statusText);
            }
        } catch (error) {
            console.log("Failed to fetch tutor details", error)
        } finally {
            setLoading(false)
        }
    }

    const deactiveAccount = async () => {
        setIsLoading(true)

        try {
            let response = await fetch(`https://welearnapi.fun/api/instructor-profiles/update/${tutorId}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens.access}`
                },
                body: JSON.stringify({
                    is_verified: false
                })
            })

            if (response.ok) {
                toast.success(`Tutor Deactivated Successfully ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#E3FDCA",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                navigate("/tutors")
            } else {
                toast.error(`Failed to deactive tutors ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#FFCCCC",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                console.log("Failed to deactive tutors:", response.statusText);
            }
        } catch (error) {
            console.log("Failed to active tutor", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async () => {
        try {
            let response = await fetch(`https://welearnapi.fun/api/user/update/${tutorDetails?.user?.id}/`, {
                method: "DELETE",
            })

            const data = await response.json()

            if (response.status === 204 || response.ok) {
                toast.success(`Tutor Delete Successfully`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#E3FDCA",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                navigate("/tutors")
            } else {
                toast.error(`Failed to delete tutor account ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#FFCCCC",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                console.log("Failed to delete tutor account:", data);
            }
        } catch (error) {
            console.log("Failed to delete tutor account", error)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [tutorId])


    const formatDate = (dateString) => {
        if (!dateString) {
          return "Not available";
        }
        
        try {
          const date = new Date(dateString);
          
          // Check if date is valid
          if (isNaN(date.getTime())) {
            return "Invalid date";
          }
          
          return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }).format(date);
        } catch (error) {
          console.error("Error formatting date:", error);
          return "Date format error";
        }
      };

    if (loading) {
        return (
            <div className='loading'>
                <CircularProgress color="primary" size="30px" />
            </div>
        )
    }

    return (
        <>
            <Toaster />
            <div className='main__container'>
                <Navbar toggleShowMenu={toggleShowMenu} />
                <div className='main__content'>
                    <div className='main__content-table-container'>
                        <div className='main__content-table-head'>
                            <h2>Tutor</h2>
                        </div>
                        <div className='tutor__head'>
                            <div className='tutor__head-left'>
                                <img src={tutorDetails?.profile_pic} alt="Parent Profile" />
                                <h2>{tutorDetails?.user?.name}</h2>
                                <p>{tutorDetails?.user?.email}</p>
                                <p><span style={{color: 'gray', fontSize: '14px'}}>Date Joined: </span> {formatDate(tutorDetails?.user?.date_joined)}</p>
                            </div>
                            <div className="tutor__head-right">
                                {/* <button>Review</button> */}
                                {tutorDetails?.is_verified && (
                                    <button className='activate' onClick={deactiveAccount}>
                                        {isLoading ? (
                                            <CircularProgress color="inherit" size="20px" />
                                        ) : "Deactivate"}
                                    </button>
                                )}
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                        <div className='tutor__bio'>
                            <h2>Bio Data</h2>
                            <p>{tutorDetails?.bio_data || "Empty"}</p>
                        </div>
                        <div className='tutor__work'>
                            <h2>Work Data</h2>
                            <p>Trained <span>{tutorDetails?.number_of_trained_students || "0"} Users</span></p>
                            <p>Experience <span>{tutorDetails?.years_of_experience || "0"} Years</span></p>
                            <p>Location <span>{tutorDetails?.location}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tutor
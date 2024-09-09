import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../components/common/Navbar"
import DataTable from 'react-data-table-component';
import Checkbox from '@mui/material/Checkbox';
import toast, { Toaster } from 'react-hot-toast';

import AuthContext from '../../context/AuthContext';

const Home = ({ toggleShowMenu }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const { approvableTutors, getUnApprovedTutors, getParents, getTutors, allParents, allTutors, authTokens } = useContext(AuthContext)

    useEffect(() => {
        getUnApprovedTutors()
        getParents()
        getTutors()
    }, [approvableTutors, allParents, allTutors])

    const customColumns = [
        {
            name: 'Tutors',
            selector: "Tutors",
            cell: row => (
                <div className='table__merchants'>
                    <img src={row.profile_pic} alt="Profile" width={70} />
                    <div>
                        <p>{row.user.name}</p>
                    </div>
                </div>
            ),
            center: true
        },
        {
            name: 'Email',
            selector: row => row.user.email,
            style: {
                color: "#000",
                fontFamily: "Avenir Next LT Pro, sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                width: "350px"
            },
            center: true
        },
        {
            name: 'Status',
            selector: row => row.is_verified === false ? "Pending" : "Active",
            style: {
                color: "#000",
                fontFamily: "Avenir Next LT Pro, sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                textTransform: "capitalize",
                width: "250px"
            },
            center: true
        },
        {
            name: 'Action',
            cell: row => (
                <>
                    {row.is_verified === false && (
                        <div className='table__action-btns'>
                            <button onClick={(e) => handleApprove(row.id, e)}>Approve</button>
                        </div>
                    )}
                </>
            ),
            button: true,
            width: '250px',
            center: true
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '65px',
                border: "none",
                backgroundColor: "#f9fafb"
            },
        },
        headCells: {
            style: {
                minHeight: '65px',
                fontSize: '13px',
                backgroundColor: "#d4d4d4",
                color: "#383838"
            },
        },
        cells: {
            borderBottomStyle: "none",
            borderBottomWidth: "0px"
        },
        pagination: {
            style: {
                backgroundColor: "#f9fafb"
            }
        },
        head: {
            style: {
                borderRadius: "10px"
            }
        }
    };

    const handleApprove = async (id, e) => {
        try {
            e.preventDefault()

            let response = await fetch(`https://welearnapi.fun/api/instructor-profiles/update/${id}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    is_verified: true
                })
            })
            if (response.ok) {
                toast.success(`Tutor Approved Successfully ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#E3FDCA",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
            } else {
                toast.error(`Failed to approve pending tutors ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#FFCCCC",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                console.log("Failed to fetch pending tutors:", response.statusText);
            }
        } catch (error) {
            console.log("Failed to approve tutor", error)
        }
    };

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows)
    };

    return (
        <>
            <Toaster />
            <div className='main__container'>
                <Navbar toggleShowMenu={toggleShowMenu} />
                <div className="main__content">
                    <div className="main__content-assets-container">
                        <div className='main__content-assets-head'>
                            <h2>Dashboard</h2>
                        </div>
                        <div className='main__content-assets'>
                            <div className='main__content-asset users'>
                                <p>Pending Tutors</p>
                                <h2>{approvableTutors.length}</h2>
                            </div>

                            <div className='main__content-asset merchants'>
                                <p>Total Tutors</p>
                                <h2>{allTutors.length}</h2>
                            </div>

                            <div className='main__content-asset riders'>
                                <p>Total Parents</p>
                                <h2>{allParents.length}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='main__content-table-container'>
                        <div className='main__content-table-head'>
                            <h2>Approve Tutors</h2>
                            {/* <div>
                            <input type="text" placeholder='Search' />
                            <IoIosSearch />
                        </div> */}
                        </div>
                        <div className='main__content-table'>
                            <DataTable
                                title=""
                                columns={customColumns}
                                data={approvableTutors}
                                customStyles={customStyles}
                                responsive
                                selectableRows
                                onSelectedRowsChange={handleChange}
                                pagination
                                paginationPerPage={5}
                                selectableRowsComponent={Checkbox}
                                highlightOnHover
                                pointerOnHover
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
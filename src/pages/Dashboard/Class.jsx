import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { PiTrashSimpleBold } from 'react-icons/pi';
import DataTable from 'react-data-table-component';
import { Checkbox, CircularProgress } from '@mui/material';
import { HiPlus } from "react-icons/hi";


import AuthContext from '../../context/AuthContext';
import Navbar from '../../components/common/Navbar';
import { Link } from 'react-router-dom';

const Class = ({ toggleShowMenu }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [loading, setLoading] = useState(false)

    const { classes, getClasses, authTokens } = useContext(AuthContext)

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows)
    };

    useEffect(() => {
        getClasses()
    }, [classes])

    const customColumns = [
        {
            name: 'Classes',
            selector: "Classes",
            cell: row => (
                <div className='table__merchants'>
                    {/* <img src={row.profile_pic} alt="Profile" width={70} /> */}
                    <div>
                        <p>{row.class_name}</p>
                        {/* <span>{row.lastname}</span> */}
                    </div>
                </div>
            ),
            center: true
        },
        {
            name: 'Duration',
            selector: row => row.duration,
            style: {
                color: "#000",
                fontFamily: "Avenir Next LT Pro, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                width: "350px"
            },
            center: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            style: {
                color: "#000",
                fontFamily: "Avenir Next LT Pro, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                width: "350px"
            },
            center: true
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='table__user__action-btns'>
                    {loading ? (
                        <CircularProgress color="inherit" size="20px" />
                    ) : (
                        <PiTrashSimpleBold className='trash' onClick={() => handleDelete(row.id)} />
                    )}
                </div>
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

    const handleDelete = async (id) => {
        setLoading(true)

        try {
            let response = await fetch(`https://welearnapi.fun/api/classes/update/${id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens.access}`
                }
            })

            const data = await response.json()

            if (response.status === 204 || response.status === 200) {
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
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Toaster />
            <div className='main__container'>
                <Navbar toggleShowMenu={toggleShowMenu} />
                <div className="main__content">
                    <div className='main__content-table-container'>
                        <div className='main__content-table-head'>
                            <h2>Classes</h2>
                            <Link to="/create-class">
                                <button>
                                    <HiPlus />
                                    Create Class
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='main__content-table'>
                        <DataTable
                            title=""
                            columns={customColumns}
                            data={classes}
                            customStyles={customStyles}
                            responsive
                            selectableRows
                            onSelectedRowsChange={handleChange}
                            pagination
                            paginationPerPage={10}
                            selectableRowsComponent={Checkbox}
                            highlightOnHover
                            pointerOnHover
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Class
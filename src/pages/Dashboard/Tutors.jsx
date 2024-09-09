import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { PiTrashSimpleBold } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';
import { Checkbox } from '@mui/material';
import DataTable from 'react-data-table-component';

import Navbar from '../../components/common/Navbar'
import AuthContext from '../../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Tutors = ({ toggleShowMenu }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const { allTutors, getTutors } = useContext(AuthContext)

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows)
    };

    useEffect(() => {
        getTutors()
    }, [allTutors])

    const customColumns = [
        {
            name: 'Parents',
            selector: "Parents",
            cell: row => (
                <Link to={`${row.id}`} className='table__merchants'>
                    <img src={row.profile_pic} alt="Profile" width={70} />
                    <div>
                        <p>{row.user.name}</p>
                        <span>{row.lastname}</span>
                    </div>
                </Link>
            ),
            center: true
        },
        {
            name: 'Email',
            selector: row => row.user.email,
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
                    <PiTrashSimpleBold className='trash' onClick={() => handleDelete(row.user.id)} />
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
        try {
            let response = await fetch(`https://welearnapi.fun/api/user/update/${id}/`, {
                method: "DELETE",
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
                            <h2>Tutors</h2>
                            <div>
                                <input type="text" placeholder='Search' />
                                <IoIosSearch />
                            </div>
                        </div>
                    </div>
                    <div className='main__content-table'>
                        <DataTable
                            title=""
                            columns={customColumns}
                            data={allTutors}
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

export default Tutors
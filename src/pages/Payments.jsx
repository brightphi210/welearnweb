import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import { IoIosSearch } from 'react-icons/io'
import AuthContext from '../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import DataTable from 'react-data-table-component';
import { Checkbox } from '@mui/material';

const Payments = ({ toggleShowMenu }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const { pendingPayment, getPendingPayments, authTokens } = useContext(AuthContext)

    useEffect(() => {
        getPendingPayments()
    }, [pendingPayment])

    const customColumns = [
        {
            name: 'Parents',
            selector: "Parents",
            cell: row => (
                <div className='table__merchants'>
                    <img src={row.student.profile_pic} alt="Profile" width={70} />
                    <div>
                        <p>{row.student.user.name}</p>
                    </div>
                </div>
            ),
            center: true
        },
        {
            name: 'Class',
            selector: row => row.class_booked.class_name,
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
            name: 'Tutor',
            cell: row => (
                <div className='table__merchants'>
                    <img src={row.instructor.profile_pic} alt="Profile" width={70} />
                    <div>
                        <p>{row.instructor.user.name}</p>
                    </div>
                </div>
            ),
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
            name: 'Price',
            selector: row => row.class_booked.price,
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
            name: 'Action',
            cell: row => (
                <>
                    {row.isPayed === null && (
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

            let response = await fetch(`https://welearnapi.fun/api/payment/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    isPaymentSuccessful: true,
                    booking: id,
                })
            })
            if (response.ok) {
                toast.success(`Payment Approved Successfully ${response.statusText}`, {
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
                toast.error(`Failed to approve pending payment ${response.statusText}`, {
                    duration: 4000,
                    position: "top-center",
                    style: {
                        backgroundColor: "#FFCCCC",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bolder",
                        fontSize: "0.9rem",
                    },
                });
                console.log("Failed to fetch pending payment:", response.statusText);
            }
        } catch (error) {
            console.log("Failed to approve payment", error)
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
                    <div className='main__content-table-container'>
                        <div className='main__content-table-head'>
                            <h2>Payments</h2>
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
                            data={pendingPayment}
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

export default Payments
import React, { useState } from 'react'
import Navbar from "../../components/common/Navbar"
import DataTable from 'react-data-table-component';
import Checkbox from '@mui/material/Checkbox';
import approveMerchants from '../../components/lib/approveMerchants';

const Home = ({ toggleShowMenu }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const customColumns = [
        {
            name: 'Tutors',
            selector: "Tutors",
            cell: row => (
                <div className='table__merchants'>
                    <img src={row.pictureAddress} alt="Profile" width={70} />
                    <div>
                        <p>{row.firstname}</p>
                        <span>{row.lastname}</span>
                    </div>
                </div>
            ),
            center: true
        },
        {
            name: 'Email',
            selector: row => row.email,
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
            selector: row => row.verificationStatus,
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
                    {row.verificationStatus === 'false' && (
                        <div className='table__action-btns'>
                            <button onClick={(e) => handleDecline(row._id, e)}>Decline</button>
                            <button onClick={(e) => handleApprove(row._id, e)}>Approve</button>
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

    };

    const handleDecline = async (id, e) => {

    };

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows)
    };

    return (
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
                            <h2>9</h2>
                        </div>

                        <div className='main__content-asset merchants'>
                            <p>Total Tutors</p>
                            <h2>4</h2>
                        </div>

                        <div className='main__content-asset riders'>
                            <p>Total Parents</p>
                            <h2>5</h2>
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
                            data={approveMerchants}
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
    )
}

export default Home
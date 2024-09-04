import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/Navbar'
import { IoIosSearch } from 'react-icons/io'
import DataTable from 'react-data-table-component'
import { Switch } from '@mui/material'
import { PiTrashSimpleBold } from 'react-icons/pi'
import { RiCircleFill } from 'react-icons/ri'
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom'

import UserData from "../../components/lib/UserData"

const Parents = ({ toggleShowMenu }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [switchStatus, setSwitchStatus] = useState({});

    useEffect(() => {
        const storedSwitchStatus = JSON.parse(localStorage.getItem('UserSwitchStatus')) || {};
        setSwitchStatus(storedSwitchStatus);
    }, []);

    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows)
    };
    const handleSwitchChange = async (e, id) => {

    };

    const customColumns = [
        {
            name: 'Parents',
            selector: "Parents",
            cell: row => (
                <Link to={`${row.id}`} className='table__merchants'>
                    <img src={row.pictureAddress} alt="Profile" width={70} />
                    <div>
                        <p>{row.firstname}</p>
                        <span>{row.lastname}</span>
                    </div>
                </Link>
            ),
            center: true
        },
        {
            name: 'Email',
            selector: row => row.email,
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
            name: 'Status',
            selector: "Status",
            cell: row => (
                <div className='status__state'>
                    <p>{row.isSuspended}</p>
                    {row.isSuspended === "true" ? <RiCircleFill className='status__active' /> : <RiCircleFill className='status__deactive' />}
                </div>
            ),
            style: {
                color: "#000",
                fontFamily: "Avenir Next LT Pro, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                textTransform: "capitalize",
                width: "250px"
            },
            center: true
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='table__user__action-btns'>
                    <Switch
                        size="small"
                        checked={switchStatus[row._id] || false}
                        onChange={(e) => handleSwitchChange(e, row._id)}
                    />
                    <PiTrashSimpleBold className='trash' />
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

    return (
        <div className='main__container'>
            <Navbar toggleShowMenu={toggleShowMenu} />
            <div className="main__content">
                <div className='main__content-table-container'>
                    <div className='main__content-table-head'>
                        <h2>Parents</h2>
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
                        data={UserData}
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
    )
}

export default Parents
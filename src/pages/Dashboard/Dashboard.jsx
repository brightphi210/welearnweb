import React, { useState } from 'react'

import "../../components/dashboard/dashboard.css"
import Sidebar from '../../components/common/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from "../Dashboard/Home"
import Parents from "../Dashboard/Parents"
import Tutors from "../Dashboard/Tutors"

const Dashboard = () => {
    const [removeMenu, setShowMenu] = useState('sidebar__close')

    const toggleRemoveMenu = () => {
        setShowMenu((curr) => (curr === "sidebar" ? "sidebar__close" : "sidebar"));
    };

    return (
        <div className='dashboard'>
            <Sidebar removeMenu={removeMenu} toggleRemoveMenu={toggleRemoveMenu} />
            <Routes>
                <Route path='dashboard' element={<Home toggleShowMenu={toggleRemoveMenu} />} />
                <Route path='parents' element={<Parents toggleShowMenu={toggleRemoveMenu} />} />
                <Route path='tutors' element={<Tutors toggleShowMenu={toggleRemoveMenu} />} />
            </Routes>
        </div>
    )
}

export default Dashboard
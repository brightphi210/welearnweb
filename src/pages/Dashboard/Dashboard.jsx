import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import "../../components/dashboard/dashboard.css"
import Sidebar from '../../components/common/Sidebar'
import Home from "../Dashboard/Home"

import Parents from "../Dashboard/Parents"
import Parent from "./Parent/Parent"

import Tutors from "../Dashboard/Tutors"
import Tutor from "./Tutor/Tutor"

import Payments from '../Payments'

import Class from './Class'
import CreateClass from "../../components/dashboard/class/CreateClass"

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
                <Route path='tutors/:tutorId' element={<Tutor toggleShowMenu={toggleRemoveMenu} />} />

                <Route path='payments' element={<Payments toggleShowMenu={toggleRemoveMenu} />} />

                <Route path='class' element={<Class toggleShowMenu={toggleRemoveMenu} />} />
                <Route path='create-class' element={<CreateClass toggleShowMenu={toggleRemoveMenu} />} />
            </Routes>
        </div>
    )
}

export default Dashboard
import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Navabar } from '../components/navbar/Navbar'

export const TutorsPage = () => {
  return (
    <div className={"dashBody"}>
    <Sidebar/>
      <div className={"dashboardbox"}>
        <Navabar /> 
      </div>
    </div>
  )
}
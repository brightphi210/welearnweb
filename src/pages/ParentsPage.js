import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Navabar } from '../components/navbar/Navbar'

export const ParentsPage = () => {
  return (
    <div className={"dashBody"}>
      <Sidebar/>
      <div className={"dashboardbox"}>
        <Navabar/>
      </div>
    </div>
  )
}
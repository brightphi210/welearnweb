import React from 'react'
import { Sidebar } from '../components/dashboard/Sidebar'
import { Navabar } from '../components/navbar/Navbar'
import { Overview } from '../components/dashboard/Overview'

export const DashboardPage = () => {
  return (
    <div className={"dashBody"}>
      <Sidebar />
      <div className='dashboardbox'>
      <Navabar/>
      <Overview/>
      </div>
    </div>
  )
}
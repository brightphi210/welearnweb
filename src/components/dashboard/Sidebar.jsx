import React from 'react'
import LOGO from "../media/WELEARN png.png"
import "./sidebar.css"

export const Sidebar = () => {
  return (
    <div>
      <div className={"sidebar"}>
      <div>
      <div className='logo'>
      <img src={LOGO} alt='' />
      </div>

      <div>
        <p>Dashboard</p>
      </div>

      <div>
        <p>Parents</p>
      </div>

      <div>
        <p>Tutors</p>
      </div>
      </div>
      </div>

      <div>
        <div className={'admin'} > 
        <div>
          <img src={""}  alt=''/>
        </div>
        </div>
      </div>
      
    </div>
  )
}
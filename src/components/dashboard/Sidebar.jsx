import React, { useEffect, useState } from 'react'
import LOGO from "../media/WELEARN png.png"
import "./sidebar.css"
import { Link, useLocation } from 'react-router-dom'
import { GrHomeRounded } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";



export const Sidebar = () => {
  const location = useLocation()
  const [active, setActive] = useState()
  
  const [buttonStyles, setButtonStyles] = useState({
    box1: {},
    box2: {},
    box3: {},
    box4: {},
  })
  useEffect(()=>{
    const path = window.location.pathname;
    const defaultStyles= {backgroundColor: 'none'}
    const activeStlyes = {backgroundColor: 'var(--blue)', color:'#fff'}

    switch (active){
      case 'box1':
        setButtonStyles({...buttonStyles, box1: activeStlyes})
        break
      case 'box2':
        setButtonStyles({...buttonStyles, box2: activeStlyes})
        break
      case 'box3':
        setButtonStyles({...buttonStyles, box3: activeStlyes})
        break
      case 'box4':
        setButtonStyles({...buttonStyles, box4: activeStlyes})
      default:
        if (path === '/dashboard'){
          setButtonStyles({
            box1:activeStlyes,
            box2:defaultStyles,
            box3:defaultStyles,
            box4:defaultStyles,
          });
        }
        else if(path === '/parents'){
          setButtonStyles({
            box1:defaultStyles,
            box2:activeStlyes,
            box3:defaultStyles,
            box4:defaultStyles,
          });
        }
        else if(path === '/tutors'){
          setButtonStyles({
            box1:defaultStyles,
            box2:defaultStyles,
            box3:activeStlyes,
            box4:defaultStyles,
          });
        } 
        else if(path === '/admin'){
          setButtonStyles({
            box1:defaultStyles,
            box2:defaultStyles,
            box3:defaultStyles,
            box4:activeStlyes,
          })
        }
    }
  }, [location.pathname, active])

  return (
    <div>
      <div className={"sidebar"}>
      <div className={"sidebarSec1"}>
      <Link to={'/' + 'dashboard'} className='logo'>
      <div className='logo'>
      <img src={LOGO} alt='' />
      </div>
      </Link>
      <Link to={"/" + 'dashboard'}>
      <div className={"box"} onClick={()=>{
        setActive('box1')
      }}
      style={buttonStyles.box1}>
       <GrHomeRounded/> 
       <p>Dashboard</p>
      </div>
      </Link>

      <Link to={'/'+ 'parents'}>
      <div className={'box'} onClick={()=>{
        setActive('box2')
      }}
      style={buttonStyles.box2}
      >
       <BsPeople/> 
       <p>Parents</p>
      </div>
      </Link>

      <Link to={'/'+'tutors'}>
      <div className={"box"} onClick={()=>{
        setActive('box3')
      }}
      style={buttonStyles.box3}
      >
        <IoPerson/>
        <p>Tutors</p>
      </div>
      </Link>
      </div>
      </div>

      <div>
        <div className={'admin'} > 
        <div >
          <img src={""}  alt=''/>
        </div>
        <p>Administrator</p>
        <p>@admin</p>
        </div>
      </div>
      
    </div>
  )
}
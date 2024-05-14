import React from 'react'
import WeLearn from "../media/WELEARN png.png"
import "./login.css"


export const Login = () => {
  return (
    <div className={"loginbox"}>
      <div className={"login"}>
      <img src={WeLearn} alt='' className={"logo"}/>
      <h1 className={"txt2"}>Hello, Admin </h1>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import WeLearn from "../media/WELEARN png.png"
import "./login.css"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [vissible, setVissible]= useState(false)
  const [click, setClick] = useState(false)
  const [error, setError] = useState({
    email:'',
    password:""
  })
  const [input, setInput]= useState({
    email: "",
    password:""
  })

  const onInputChange = (e)=>{
    const{name,value}= e.target;
    setInput(prev =>({
      ...prev,
      [name]: value
    }));
  }
  const onBlurValidate = e =>{
    validateInput(e)
  }

  const validateInput = (e) =>{
    let {name,value}= e.target;
    setError(prev =>{
      const stateObj = {...prev, [name]:''}
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      switch (name){
        
        case "email":
        if (!value) {
          stateObj[name] = "Please enter an email.";
        } else if (!emailPattern.test(value)) {
          stateObj[name] = "Please enter a valid email address.";
        } else {
          stateObj[name] = "";
        }
        break;

        case 'password':
          if(!value){
            stateObj[name] = "please enter a password"
          }else {
            stateObj[name]=""
          }
        break;

        default:
          break

      }
      return stateObj;
    })
  }

  const handleClick = ()=> {
    setClick(!click)
  }

  const handleVissible = ()=>{
    setVissible(!vissible)
  }

  const handleSubmit = async (e)=>{
    e.prventDefault()

    validateInput({ target: { name: 'email', value: input.email } });
    validateInput({target: {name: 'password', value:input.password}})

    setError(prevError =>({
      email: error.email,
      password: error.password 
    }))

    try{
      const response = await fetch('https://welearnapi.fun/api/token/',{
        method: 'POST',
        headers:{
        'content-Type':'application/json'
        },
        body: JSON.stringify({
          email:input.email,
          password: input.password,
        })
      })
      if (response.ok){
        throw new Error('Login Failed')
      }
      console.log(response.data)
      navigate('/dashboard')
    }
    catch (error){
      console.error('login Failed', error)
    }
  }


  return (
    <div className={"loginbox"}>
      <div className={"login"}>
      <img src={WeLearn} alt='' className={"logo"}/>
      <h1 className={"txt2"}>Hello, Admin </h1>
      <p className={'subtxt'}>Good to see you again</p>

          <form
      method='POST'
      onSubmit={handleSubmit}
      className={"loginform"}
      >
        <input
          placeholder='Email address'
          name='email'
          value={input.email}
          onBlur={onBlurValidate}
          onChange={onInputChange}
          type='text'
          required
        />
        {error.email && <span className='err'>{error.email}</span>}
        <div className={"pass"}>
        <input
          placeholder='password'
          type={vissible? 'text':'password'}
          onChange={onInputChange}
          name='password'
          value={input.password}
          onBlur={onBlurValidate}
          required
        />
         {error.password && <span className='err'>{error.password}</span>}
        <div className={"eye"}>
        <FaRegEyeSlash className={click? "unsee":"see"} onClick={()=>{
          handleClick()
          handleVissible()
        }} />
        <FaRegEye className={click ? "see" : "unsee"} 
          onClick={()=>{
            handleClick()
            handleVissible()
          }}
        />
        </div>
        </div>
        <button type='submit' className={"loginBtn"}>
          Login
        </button>
      </form>
      </div>

  
    </div>
  )
}
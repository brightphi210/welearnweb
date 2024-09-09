import React, { useContext, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Toaster } from 'react-hot-toast';

import "../components/auth/Auth.css"
import logo from "../components/media/WELEARN png.png"
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import AuthContext from '../context/AuthContext'

const Login = () => {
  const [visible, setVisible] = useState(true)

  const { email, password, setEmail, setPassoword, loading, loginUser } = useContext(AuthContext)
  const handleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Toaster />
      <div className='login'>
        <div className="login__container">
          <img src={logo} alt="Logo" />

          <div>
            <h1>Hello, Admin</h1>
            <p>Good to see you again</p>
          </div>

          <form>
            <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus autoComplete="email" aria-autocomplete="both" />
            <div>
              <input type={visible ? "password" : "text"} placeholder='Password' value={password} onChange={(e) => setPassoword(e.target.value)} autoComplete="current-password" />
              {visible ? (
                <VscEye id='visible' onClick={handleVisible} />
              ) : (
                <VscEyeClosed id='visible' onClick={handleVisible} />
              )}
            </div>

            <button onClick={loginUser}>
              {loading ? (
                <CircularProgress color="inherit" size="20px" />
              ) : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
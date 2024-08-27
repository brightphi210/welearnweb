import React, { useState } from 'react'

import "../components/auth/Auth.css"
import logo from "../components/media/WELEARN png.png"
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassoword] = useState("")

  const [visible, setVisible] = useState(true)
  const handleVisible = () => {
    setVisible(!visible)
  }

  return (
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

          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
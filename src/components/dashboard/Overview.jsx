import React from 'react'
import "./overview.css"


export const Overview = () => {
  return (
    <div>
      <section className={"overviewSec1"}>
      <p className={'txt1'}>Dashboard</p>
      <div className={"overviewDetials"}>
      <div className={"bal card"}>
      <p className={'txt3'}>Avialable Balance</p>
      <p className={'txt4'}>₦ 100,000<span>.00</span></p>
      </div>
      <div className={"PTutor card"}>
      <p className={'txt3'}>Pending Tutors</p>
      <p className={'txt4'}>0</p>
      </div>
      <div className={"tTutors card"}>
      <p className={'txt3'}>Total Tutors</p>
      <p className={'txt4'}>0</p>
      </div>
      <div className={"tUsers card"}>
      <p className={'txt3'}>Total Users</p>
      <p className={'txt4'}>0</p>
      </div>
      </div>
      </section>
    </div>
  )
}
import React from 'react'
import { Navbar } from '../components/navabar/Navbar'
import { Header } from '../components/home/header'
import { Service } from '../components/home/service';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Service />
    </div>
  )
}
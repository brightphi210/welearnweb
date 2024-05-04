import React from 'react'
import { Navbar } from '../components/navabar/Navbar'
import { Header } from '../components/home/header'
import { Service } from '../components/home/service';
import { Howitworks } from '../components/home/howitworks';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <Service />
      <Howitworks />
    </div>
  )
}
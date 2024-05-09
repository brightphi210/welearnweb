import React from 'react'
import { Navbar } from '../components/navabar/Navbar'
import { Header } from '../components/home/header'
import { About } from '../components/home/About';
import { Service } from '../components/home/service';
import { Howitworks } from '../components/home/howitworks';
import { Testimonials } from '../components/home/Testimonials';
import { Waitlist } from '../components/home/Waitlist';
import { Footer } from '../components/home/Footer';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About />
      <Service />
      <Howitworks />
      <Testimonials />
      <Waitlist />
      <Footer />
    </div>
  )
}
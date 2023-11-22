// import { useState } from 'react'
import BarraSuperior from "../components/BarraSuperior/BarraSuperior"
import Profile from "../components/Profile/Profile"
import About from "../pages/Main/About"

function Home() {

  return (
    <>
      <div>
        <BarraSuperior />
        <Profile />
        <About />
      </div>
    </>
  )
}

export default Home

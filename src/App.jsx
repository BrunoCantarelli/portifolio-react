// import { useState } from 'react'
import BarraSuperior from "./components/BarraSuperior/BarraSuperior"
import Profile from "./components/Profile/Profile"
import Main from "./components/Main/Main"

function Home() {

  return (
    <>
      <div>
        <BarraSuperior/>
        <Profile/>
        <Main/>
      </div>
    </>
  )
}

export default Home

import React from 'react'
import img from '../images/img.png'
import { NavLink } from "react-router-dom"


export const HomePage = () => {
  return (
    <>
      <h1 className='h1-h'>GameBro<i id='i-h' class="fa-solid fa-gamepad"></i></h1>
      
      <div className='img-h-c'>
        <img className='img-h' src={img} alt="" />
      </div>
      <div className='btn-h-c'>
        <NavLink className='a-h' to={'/games'}><button className='btn-h'>Get Started</button></NavLink>
      </div>
    </>
  )
}

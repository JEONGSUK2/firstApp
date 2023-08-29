import React from 'react'
import { NavLink } from 'react-router-dom'

function Notpage() {
  return (
    <div>
        <p className='text-7xl text-center font-bold'>404 Not Fuond</p>
        <p className='text-5xl text-center'>페이지를 찾을 수 없습니다.</p>
        <NavLink to="/"></NavLink>
    </div>
  )
}

export default Notpage
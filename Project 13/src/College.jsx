import React from 'react'
import { NavLink, Outlet } from 'react-router'


export default function College() {
  return (
    <>
        <h1>College Page</h1>
        <NavLink to={"Department"}>Department</NavLink>
        <NavLink to={"Faculty"}>Faculty</NavLink>
        <NavLink to={"Student"}>Student</NavLink>

        <Outlet />
    </>
  )
}

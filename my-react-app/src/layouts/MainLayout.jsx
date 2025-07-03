import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/nav'

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>My footer </footer>
    </div>
  )
}

export default MainLayout

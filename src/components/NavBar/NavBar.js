import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <h1 className='menu-title'>Mi tienda Online</h1>
        <ul className='menu-items'>
            <li>
                <a href=''className='menu-list'>Productos</a>
            </li>
            <li>
                <a href=''className='menu-list'>Buscar</a>
            </li>
            <li>
                <a href=''className='menu-list'>Mis pedidos</a>
            </li>
        </ul>
        
    </div>
  )
}

export default NavBar
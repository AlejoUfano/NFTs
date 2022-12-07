import React, { useRef, useEffect } from 'react'
import './header.css'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const NAV__LINKS = [
  {
    display: 'Home',
    url: '/home'
  },
  {
    display: 'Market',
    url: '/market'
  },
  {
    display: 'Create',
    url: '/create'
  },
  {
    display: 'Contact',
    url: '/contact'
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('headerShrink')
      } else {
        headerRef.current.classList.remove('headerShrink')
      }
    })

    return ()=>{
      window.removeEventListener('scroll')
    }

  },[])
  
  const toggleMenu = () => menuRef.current.classList.toggle('activeMenu')

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='navigation'>
          <div className='logo'>
            <h2 className='d-flex gap-2 align-items-center'>
              <span>
                <i class='ri-fire-fill'></i>  
              </span>
              NFTs
            </h2>
          </div>
          <div className='navMenu' ref={menuRef} onClick={toggleMenu}>
            <ul className='navList'>
              {
                NAV__LINKS.map((item,index)=> <li className='navItem' key={index}>
                <NavLink to={item.url} className= { navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
              </li>)
              }             
            </ul>
          </div>
          <div className='navRight d-flex align-items-center gap-5'>
            <button className='btn d-flex align-items-center gap-2'>
              <span>
                <i class='ri-wallet-line'></i>
              </span>
              <Link to='/wallet'>Connect Wallet</Link>
            </button>
            <span className="mobileMenu"><i class="ri-menu-line" onClick={toggleMenu}></i></span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: FC = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4'>
      <div>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div>
        <NavLink to='/about'>
          <a className='mx-2'>About</a>
        </NavLink>
        <NavLink to='/pricing'>
          <a className='mx-2'>Pricing</a>
        </NavLink>
        <NavLink to='/contact'>
          <a className='mx-2'>Contact</a>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar

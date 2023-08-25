import { FC } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar: FC = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4 mb-24'>
      <div>
        {/* <NavLink to='/'>
          <a className='text-2xl font-bold bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Home
          </a>
        </NavLink> */}
        <AnchorLink href='#home'>
        <a className='text-2xl font-bold bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Home
          </a>
        </AnchorLink>
      </div>
      <div>
        <AnchorLink href='#about'>
          <a className='ml-4 bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            About
          </a>
        </AnchorLink>
        <AnchorLink href='#pricing'>
          <a className='ml-4 bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Pricing
          </a>
        </AnchorLink>
        <AnchorLink href='#contact'>
          <a className='ml-4 bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Contact
          </a>
        </AnchorLink>
        {/* <NavLink to='/about'>
          <a className='ml-4 bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            About
          </a>
        </NavLink>
        <NavLink to='/pricing'>
          <a className='ml-4 bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Pricing
          </a>
        </NavLink>
        <NavLink to='/contact'>
          <a className='ml-4 bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Contact
          </a>
        </NavLink> */}
      </div>
    </nav>
  )
}

export default Navbar

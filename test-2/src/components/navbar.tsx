import { FC } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
          <a className='mx-4 bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Contact
          </a>
        </AnchorLink>
      <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
        <div className='text-[16px] bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
           Login
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mx-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Login</h4>
            <p className="text-sm text-muted-foreground">
              Login to your account
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder='Your username'
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder='Your password'
                className="col-span-2 h-8"
              />
            </div>
            <Button className='bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff]'>Login</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
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

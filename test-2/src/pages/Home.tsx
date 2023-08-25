import { FC } from 'react'
import Navbar from '@/components/navbar'
import Art from '../../public/art.svg'
import About from './About'
import Pricing from './Pricing'
import Contact from './Contact'
import { Helmet } from 'react-helmet'

const Home: FC = () => {
  return (
    <>
      <Helmet>
            <title>{`ERP App`}</title>
            <meta name='description' content='ERP Home Page' />
      </Helmet>
      <Navbar />
      <main className='flex-wrap justify-center items-center gap-28 sm:flex mb-20' id='home'>
        <div>
          <img
            src={Art}
            className='w-96 mb-12 mx-auto sm:mb-0 px-4 sm:px-0'
          />
        </div>
        <div className='text-center lg:text-justify'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Welcome to Kedatech ERP
          </h1>
          <br />
          <p className='text-2xl font-bold bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>
            Your trusted ERP
          </p>
        </div>
      </main>
      <About />
      <Pricing />
      <Contact />
    </>
  )
}

export default Home

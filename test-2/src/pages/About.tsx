import { FC } from 'react'
import Art2 from '../../public/art2.svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const About: FC = () => {
  return (
    <>
      <main className='mb-20' id='about'>
        <div>
          <img
            src={Art2}
            className='w-96 mb-12 mx-auto px-4 sm:px-0'
          />
        </div>
        <div className='text-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text px-10 mb-4'>
            About Us
        </h1>
        </div>
        <div className='text-center sm:w-1/2 mx-auto'>
          <Accordion
            type='single'
            collapsible
            className='w-full text-justify px-10'
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger>What is KeDA-Tech?</AccordionTrigger>
              <AccordionContent>
              KeDA Tech emerged in 2018. Throughout its development, KeDA Tech believes that digital 
              transformation will bring many changes in all aspects of life, especially in the 
              business field of companies, communities, and society.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>What is ERP?</AccordionTrigger>
              <AccordionContent>
                ERP (Enterprise Resource Planning) is an information system model 
                that enables organizations to automate and integrate their core business processes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Why do you need ERP?</AccordionTrigger>
              <AccordionContent>
                ERP assists companies with day-to-day operations by eliminating the 
                potential for data duplications and inaccuracies and generally maximizing efficiency. 
                Improved efficiency: ERP automates business processes across departments 
                to avoid costly, unnecessary repetitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </>
  )
}

export default About

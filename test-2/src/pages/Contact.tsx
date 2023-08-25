import { FC } from 'react'
import Art4 from '../../public/art4.svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


const Contact: FC = () => {
  return (
    <>
      <main className='mb-20' id='contact'>
        <div>
          <img
            src={Art4}
            className='w-96 mb-12 mx-auto px-4 sm:px-0'
          />
        </div>
        <div className='text-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text px-10 mb-4'>
            Contact Us
        </h1>
        </div>
        <div className='text-center sm:w-1/2 mx-auto'>
          <Accordion
            type='single'
            collapsible
            className='w-full text-justify px-10'
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger>Whatsapp</AccordionTrigger>
              <AccordionContent>
                +62811-1234-5678
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Instagram</AccordionTrigger>
              <AccordionContent>
                @erp_keda
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Email</AccordionTrigger>
              <AccordionContent>
                erp@keda.com
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </>
  )
}

export default Contact

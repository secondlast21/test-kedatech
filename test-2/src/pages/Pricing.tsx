import { FC } from 'react'
import Art3 from '../../public/art3.svg'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Pricing: FC = () => {
  return (
    <>
      <main className='mb-20' id='pricing'>
        <div>
          <img
            src={Art3}
            className='w-96 mb-12 mx-auto px-4 sm:px-0'
          />
        </div>
        <div className='text-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text px-10 mb-4'>
            Price
        </h1>
        </div>
        <div className='flex-wrap sm:flex text-center mx-0 gap-y-4 sm:m-auto justify-center'>
          <Card className='w-[280px] lg:w-[400px] mb-4 sm:mb-0 mx-auto'>
            <CardHeader>
              <CardTitle className='bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>TIER 1 - Basic</CardTitle>
              <CardDescription>Rp 500.000,00</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>Mencatat barang masuk</li>
                <li>Mencatat barang keluar</li>
                <li>Mencatat hasil keuntungan</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='w-[280px] lg:w-[400px] mb-4 sm:mb-0 mx-auto'>
            <CardHeader>
              <CardTitle className='bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>TIER 2 - Business</CardTitle>
              <CardDescription>Rp 750.000,00</CardDescription>
            </CardHeader>
            <CardContent>
            <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat keuntungan</li>
                <li>Analisa hasil penjualan</li>
                <li>Support 7x24 jam</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='w-[280px] lg:w-[400px] mb-4 sm:mb-0 mx-auto'>
            <CardHeader>
              <CardTitle className='bg-gradient-to-r from-[#03e8fc] via-[#0324fc] to-[#d375ff] inline-block text-transparent bg-clip-text'>TIER 3 - Entrepreneur</CardTitle>
              <CardDescription>Rp 1.000.000,00</CardDescription>
            </CardHeader>
            <CardContent>
            <ul>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat keuntungan</li>
                <li>Analisa hasil penjualan</li>
                <li>Support 7x24 jam</li>
                <li>Export data ke Excel</li>
                <li>AI untuk prediksi penghasilan</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}

export default Pricing

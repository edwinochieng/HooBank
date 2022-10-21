import Head from 'next/head'
import {Navbar,Hero,Billing,Business,CTA,CardDeal,Clients,Footer,Stats,Testimonials} from '../components'

export default function Home() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Head>
        <title>HooBank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar/>
        </div>
      </div>
      <div className='bg-primary flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero/>
        </div>
      </div>
      <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

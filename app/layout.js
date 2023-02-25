import Image from 'next/image'
import './globals.css'
import Next from '../public/qrcode.jpg'
import Link from 'next/link'
export default function RootLayout({ children }) {
  const nav =(
    <nav className='sticky flex flex-row justify-between items-center top-0 z-10 w-screen  bg-slate-200 px-10 py-3'>
      <Link href={'/'}>
      <h1 className='cursor-pointer w-fit text-3xl font-bold'>OmniBlog</h1>
      </Link>
      <div>
      <Link href={'/about'}>
      <h1 className='cursor-pointer w-fit text-l font-bold'>About</h1>
      </Link>
      </div>
    </nav>
  )
  const authorCard = (
    // 
    <div className='text-center md:text-start mx-auto my-5 max-w-2xl px-6  bg-[#FAFBFF] rounded-[20px] p-[50px]'>
   <div className='mb-5 md:flex md:flex-row md:items-center md:gap-4 '>
    <div className='grid mb-2'>
    <Image className=' w-[100px] h-[100px] rounded-full justify-self-center'
    src={Next}
    alt='avater'
    height='auto'
    width='auto'
    />
    </div> 
   
    
    <div>
      <h3 className='text-[16px] tracking-[2px] font-extrabold text-[#2F1C6A]'>The author</h3>
      <h1 className='text-[44px] font-extrabold text-[#2F1C6A] '>Amedzro E.</h1>
    </div>
   </div>
   <div className='mb-5'>Edward is a content editor with years of experience in IT writing, marketing, and Linux system administration. His goal is to encourage readers to establish an impactful online presence. He also really loves dogs, guitars, and everything related to space.</div>
   <div>More from Amedzro</div>
    </div>
  )
  
  const footer =(
    <footer className='border-t w-screen border-slate-500 mt-6 py-6 text-center text-slate-400'>
      <div>
        <br/>
        <h3>develop by Eli</h3>
        &copy; 2023 OmniBlog
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          {nav}
          <div className=''>
          {children}
          </div>
          {authorCard}
          {footer}
        </main>
        </body>
    </html>
  )
}

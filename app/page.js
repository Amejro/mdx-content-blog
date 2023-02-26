// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {allPosts} from 'contentlayer/generated' 
import Link from 'next/link'
import LazyImage from 'components/lazyImage'

export const metadata = {
  description: 'Read my thoughts on software development, design, and more.',
};

export default function Home() {


  return (
    <>
    <header className='flex items-center justify-center w-screen py-[85px] bg-slate-200'>
      <div>
        <h1 className='mx-auto my-5 max-w-2xl px-5 text-3xl font-bold text-[#2F1C6A]'>Discover the world of knowledge with Omniblog.</h1>
      <h2 className='mx-auto my-5 max-w-2xl px-5 text-l font-bold text-[#2F1C6A]'>Your ultimate source for trends, stories and insights from our team of experts!</h2>
      </div>
    </header>
    <div className='mx-auto max-w-2xl px-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 mt-10'>
      {allPosts.map((post, index)=>(
        
        <div className='rounded-lg bg-gray-200'>
          <Link  
        key={index}
        href={`${post.url}`}
        >
          <LazyImage img={post.image}/>
         <div className='px-3'> 
        <h1 className="text-[#2F1C6A] mt-5 text-3xl leading-[120%] font-bold">{post.title}</h1>
        <h3 className="">{post.subtitle}</h3>
        <p className='text-sm pb-3 font-extrabold text-[#2F1C6A]'>{post.date}</p>
        </div>
        </Link>
        </div>
        
      ))}
     
    </div>
  </>
  )
}

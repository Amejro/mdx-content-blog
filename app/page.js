import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {allPosts} from 'contentlayer/generated' 
import Link from 'next/link'
import Image from 'next/image'
import LazyImage from 'components/lazyImage'
export default function Home() {

  
 
  return (
    <>
    <header className='flex items-center justify-center w-screen h-[500px] bg-slate-200'>
      <div>
      <h1>I am the header</h1>
      </div>
    </header>
    <div className='mx-auto max-w-2xl px-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 mt-5'>
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

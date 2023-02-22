import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {allPosts} from 'contentlayer/generated' 
import Link from 'next/link'


export default function Home() {
 
  return (
    <main className={styles.main}>
      {allPosts.map((post, index)=>(
        <Link
        key={index}
        href={`${post.url}`}
        // href={`/blog/${post.slug}`}
        >
        <p>{post.title}</p>
        </Link>
      ))}
    </main>
  )
}

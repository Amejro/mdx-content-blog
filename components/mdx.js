

import {useMDXComponent}  from 'next-contentlayer/hooks';
import React from 'react'

function mdx({code}) {
  
    const Component = useMDXComponent(code);
  return (
    <article className="prose prose-stone prose-heading:text-[#2F1C6A] prose-p:text-[#36344D]
    prose-p:font-[400px] prose-a:text-[#673DE6] prose-a:no-underline hover:prose-a:underline
    ">
      <Component/>
    </article>
    
  )
}

export default mdx
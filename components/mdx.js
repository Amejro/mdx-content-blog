

import {useMDXComponent}  from 'next-contentlayer/hooks';
import React from 'react'

function mdx({code}) {
    const Component = useMDXComponent(code);
  return (
    <Component/>
  )
}

export default mdx
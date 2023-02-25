
import { allPosts } from "contentlayer/generated"
import Mdx from "components/mdx";
import Image from "next/image";
export async function generateStaticParams(){
    return allPosts.map((post)=>({
        slug:post.slug
    } ))
   
}

export async function generateMetada({params}) {
    
    const post = allPosts.find((post)=>post.slug === params.slug)
    const {
        title,
        subtitle,
        date
    } = post
  return {
    title,
    subtitle,
    date
  }
}

async function page({params}){
    const post = allPosts?.find((post)=>post?.slug === params?.slug)
    return (
        <div className="mx-auto max-w-2xl px-6">
         <h1 className="text-[#2F1C6A] mt-5 text-3xl leading-[120%] font-extrabold">{post.title}</h1>
            <div className="aspect-w-3 aspect-h-2 my-5">
            <Image className="rounded-lg"
             alt="leeerob"
             src={post.image}
             fill
            />
            </div>
            
            <h3>{post?.subtitle}</h3>
            <Mdx code={post.body.code}/>
          
        </div>
      )
}

export default page
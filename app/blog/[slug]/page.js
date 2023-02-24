
import { allPosts } from "contentlayer/generated"
import Mdx from "components/mdx";
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
        <div>
            <h1>{post?.title}</h1>
            <h3>{post?.subtitle}</h3>
           
            <Mdx code={post.body.code} />
          
        </div>
      )
}

export default page
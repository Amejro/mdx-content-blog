
import { allPosts } from "contentlayer/generated"
import Mdx from "components/mdx";
import Image from "next/image";
import Next from '/public/qrcode.jpg'


export async function generateStaticParams(){
    return allPosts.map((post)=>({
        slug:post.slug
    } ))
   
}

export async function generateMetadata({params}) {
    const post = allPosts.find((post)=>post.slug === params?.slug)
    if (!post) {
      return;
    }
    const {
        title,
        subtitle: description, 
        date:publishedTime
    } = post
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      // url: `https://leerob.io/blog/${slug}`,
      images: [
        {
          // url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // images: [ogImage],
    },
  };
  }

  const authorCard = (
    // 
    <div className='text-center md:text-start mx-auto mt-10 max-w-2xl px-6  bg-[#FAFBFF] rounded-[20px] p-[50px]'>
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
   <div className='mb-5'>Amedzro is a content editor with years of experience in IT writing.
    His goal is to encourage readers to establish an impactful online presence.
     He also really loves women, and everything related 
    to space.
    </div>
   <div>More from Amedzro</div>
    </div>
  )


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

          {authorCard}
        </div>
      )
}

export default page
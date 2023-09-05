import styles from "./page.module.css";
import { allPosts } from "contentlayer/generated";
import PostsList from "components/postsList";

// const notionData = async () => {
//   const res = await fetch("http://localhost:3000/api/notion");
//   const data = await res.json();
//   return data;
// };
export const metadata = {
  description: "Read my thoughts on software development, design, and more.",
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();
  console.log(await data.response.results[1].properties.content);

  return (
    <>
      <header className="flex items-center justify-center w-screen py-[85px] bg-slate-200">
        <div>
          <h1 className="mx-auto my-5 max-w-2xl px-5 text-3xl font-bold text-[#2F1C6A]">
            Discover the world of knowledge with VerbVibes.
          </h1>
          <h2 className="mx-auto my-5 max-w-2xl px-5 text-l font-bold text-[#2F1C6A]">
            Your ultimate source for trends, stories and insights from our team
            of experts!
          </h2>
        </div>
      </header>
      <PostsList allPosts={allPosts} />
    </>
  );
}

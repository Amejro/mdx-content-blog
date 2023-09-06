import styles from "./page.module.css";
import { allPosts } from "contentlayer/generated";
import PostsList from "components/postsList";

import Link from "next/link";
import Image from "next/image";
import ListCard from "components/cards/ListCard";
import HeroCard from "components/cards/HeroCard";
import CategoryCard from "components/cards/CategoryCard";
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
    <div className="h-full">
      <main className=" grid grid-cols-12 max-w-[1140px] lg:mx-auto gap-x-[32px] lg:gap-[32px]  ">
        <div className="flex flex-col items-center relative w-full col-span-12 ">
          <section className="grid grid-cols-12 w-full gap-x-[16px] lg:gap-[16px]">
            {/* 1 */}
            <div className="flex justify-between  items-center min-h-[72px] col-span-12 bg-[#fff] lg:bg-[#f6f8fc] px-4">
              <div className="flex flex-col">
                <h1 className="mb-[8px] text-xl font-semibold"> Discover</h1>

                <div>Date</div>
              </div>
              <div>hello</div>
            </div>
            {/* 2 */}
            <div className="col-span-12 lg:col-span-8  mb-5">
              <div className="col-span-12 flex flex-col rounded-b-[18px] lg:rounded-[18px] border-b border-[#e3e3e3] bg-[#fff] px-4">
                <div className="flex justify-between items-center py-[30px]     w-full ">
                  <div className="flex items-center lg:border-b lg:border-[#e3e3e3] w-full pb-3">
                    <h3 className="text-[#1867DC]  text-xl font-bold">
                      Top stories
                    </h3>
                  </div>
                </div>

                <div className="lg:flex lg:flex-row">
                  <HeroCard />
                  <div className="lg:flex flex-col flex-grow lg:ml-4">
                    <ListCard />
                    <ListCard />
                  </div>
                </div>
                {/* old list */}
                <div className="border-t border-[#e3e3e3] py-5">
                  <ListCard />
                  <ListCard />
                  <ListCard />
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="hidden lg:block lg:col-span-4">
              <CategoryCard />
            </div>
          </section>
        </div>
        <div className="flex flex-col items-center relative w-full col-span-12">
          <section className="grid lg:grid-cols-12 w-full gap-x-[16px] lg:gap-[16px]">
            <div className="lg:col-span-4">
              <CategoryCard />
            </div>
            <div className="lg:col-span-4">
              <CategoryCard />
            </div>
            <div className="lg:col-span-4">
              <CategoryCard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import VerbVibes from "/public/verbVibes.svg";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Amejro",
    template: "%s | Amejro",
  },
  description: "Developer, writer, and creator.",
  // openGraph: {
  //   title: "Amejro",
  //   description: "Developer, writer, and creator.",
  //   url: "http://localhost:3000/",
  //   siteName: "Amejro",
  //   images: [
  //     {
  //       url: "https://leerob.io/og.jpg",
  //       width: 1920,
  //       height: 1080,
  //     },
  //   ],
  //   locale: "en-US",
  //   type: "website",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // twitter: {
  //   title: "Amejro",
  //   card: "summary_large_image",
  // },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({ children }) {
  const nav = (
    <nav className="sticky flex flex-row justify-between items-center top-0 z-10 w-full  bg-slate-200 px-6 py-3">
      <Link href={"/"} className="flex items-center">
        <Image
          className="h-7 w-7 sm:h-6"
          src={Amejro}
          width="auto"
          height="auto"
          alt="Amejro"
        />
        <span className="hidden sm:block text-3xl text-[#2F1C6A] font-extrabold">
          Amejro
        </span>
      </Link>
      <div>
        <Link href={"/about"}>
          <h1 className="cursor-pointer w-fit text-l font-bold">About</h1>
        </Link>
      </div>
    </nav>
  );

  const footer = (
    <footer className="bg-[#f4f5ff] mt-6 py-6 text-center text-slate-400">
      <div className="border-b  border-slate-500  py-6">
        <address>
          contact:
          <br />
          Accra, Ghana <br />
          <a href="mailto:hansonnewton@gmail.com">
            hansonnewton@gmail.com
          </a>{" "}
          <br />
          <a href="tel:+233240809067">(+233) 240809067</a>
        </address>
      </div>

      <div>
        <br />
        <div className="flex gap-5 justify-center">
          <Link href={"/about"}>
            <h1 className="">About</h1>
          </Link>
          <Link href={"/privacy_policy"}>
            <h1 className="">Privacy</h1>
          </Link>
          <Link href={"/terms-of-service"}>
            <h1 className="">Terms</h1>
          </Link>
        </div>

        <h3>Develop by Eli</h3>
        <div className="flex justify-center">
          &copy; 2023
          <Image
            className="ml-2"
            src={Amejro}
            width={20}
            height={20}
            alt="VerbVibes"
          />
          <span>VerbVibes</span>
        </div>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <head />
      <body className="bg-[#f6f8fc]">
        <main>
          <NavBar />
          <div className="">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

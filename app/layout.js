import Image from "next/image";
import "./globals.css";
import Link from "next/link";
// import Amejro from "/public/verbVibes.svg";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Amejro",
    template: "%s | Amejro",
  },
  description: "Read more",
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
  return (
    <html lang="en">
      <head />
      <body className="bg-[#f6f8fc]">
        <main>
          <NavBar />
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

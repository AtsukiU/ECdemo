import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../public/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className=" flex items-center flex-col min-h-screen text-sm ">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* 1段目のヘッダー */}
        <div className="flex justify-between w-screen h-14 bg-gray-700 pr-3  ">
          <div className="flex items-center">
            {/* ヘッダーロゴ */}
            <Link href="/">
              <div className="flex pl-1 min-w-full w-">
                <Image src={logoImage} width={56} height={56} alt="logo" />
              </div>
            </Link>
            {/* 検索インプット */}
            <div className="flex items-center invisible sm:invisible md:visible lg:visible ">
              <span className="text-md absolute text-gray-400 ml-9 z-10">
                <FaSearch />
              </span>
              <input
                className="rounded py-1 pr-2 pl-6 ml-8 w-67 relative w-90"
                placeholder="Search"
              />
            </div>
          </div>
          {/* ショッピングカートとメニュー */}
          <div className="flex">
            <div className="flex  items-center  my-2 px-2 hover:bg-gray-600 rounded">
              <Link href="/">
                <a className="text-2xl text-gray-300 visible sm:visible md:invisible lg:invisible">
                  <AiOutlineMenu />
                </a>
              </Link>
            </div>
            <div className="flex  items-center  my-2 px-2 hover:bg-gray-600 rounded">
              <Link href="/ShopingCart">
                <a src="/" className="text-gray-300 text-2xl flex items-center">
                  <FiShoppingCart />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* 2段目のヘッダー */}
        <nav className="bg-gray-800 w-screen invisible sm:invisible md:visible lg:visible">
          <div className="flex mx-auto items-center justify-center pl-8 h-14 w-xl">
            <div className="flex space-x-10">
              <Link href="/Mens">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Plants
                </a>
              </Link>
              <Link href="/Ladies">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Flowers
                </a>
              </Link>
              <Link href="/Accessories">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Others
                </a>
              </Link>
              <Link href="/Accessories">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* メインページ */}
      <main className=" flex flex-1 my-10 mx-10 flex-col  w-screen">
        {children}
      </main>
      {/* フッター */}
      <footer className=" w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

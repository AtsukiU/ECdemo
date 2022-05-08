import Head from "next/head";
import footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../public/logo.png";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Footer from "./Footer";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className=" min-h-screen  text-sm overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        {/* 1段目のヘッダー */}
        <div className="flex justify-between items-center bg-gray-700">
          <div className="flex items-center">
            {/* ヘッダーロゴ */}
            <Link href="/">
              <div className="flex w-16 h-15 ">
                <Image src={logoImage} width={56} height={56} alt="logo" />
              </div>
            </Link>
          </div>
          {/* ショッピングカートとメニュー */}
          <div className="flex flex-end">
            {/* 検索 */}
            <div className="hidden md:block">
              <div className="flex items-center mr-2">
                <span className="text-md absolute text-gray-400 ml-1 z-10">
                  <FaSearch />
                </span>
                <input
                  className="rounded py-1  pl-6 relative "
                  placeholder="Search"
                />
              </div>
            </div>
            {/* 検索 */}
            <div className="flex  items-center   hover:bg-gray-600 rounded">
              <Link href="/">
                <a className="text-2xl  p-1 text-gray-300 block md:hidden">
                  <FiSearch />
                </a>
              </Link>
            </div>

            <div className="flex  items-center p-1  mr-1 hover:bg-gray-600 rounded">
              <Link href="/ShopingCart">
                <a src="/" className="text-gray-300 text-2xl flex items-center">
                  <FiShoppingCart />
                </a>
              </Link>
            </div>
            <div className="flex  items-center mr-1  hover:bg-gray-600 rounded">
              <Link href="/">
                <a className="text-2xl  p-1 text-gray-300 block md:hidden">
                  <AiOutlineMenu />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* 2段目のヘッダー */}
        <div className="bg-gray-800  hidden md:block">
          <nav>
            <div className="flex items-center justify-center h-10">
              <div className="space-x-10">
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
        </div>
      </header>
      {/* メインページ */}
      <main className=" flex flex-1 flex-co min-w-0">{children}</main>
      {/* フッター */}

      <footer className="px-4 mt-10 m-auto divide-y w-4/5 lg:w-3/5 ">
        <Footer />
      </footer>
    </div>
  );
}

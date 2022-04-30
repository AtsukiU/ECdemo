import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logoImage from "/public/f1a36111695c36bee04976e545c2f67e.png";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className=" flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* 1段目のヘッダー */}
        <div className="flex justify-between h-14 bg-gray-700 px-3  ">
          <div className="flex items-center">
            {/* ヘッダーロゴ */}
            <Link href="/">
              <Image src={logoImage} width={100} height={50} alt="logo" />
            </Link>
            {/* 検索インプット */}
            <div className="flex items-center ">
              <span className="text-md absolute text-gray-400 ml-9 z-10">
                <FaSearch />
              </span>
              <input
                className="rounded py-1 pr-2 pl-6 ml-8 w-67 relative w-90"
                placeholder="Search"
              />
            </div>
          </div>
          {/* ショッピングカートとカウント */}
          <div className="flex  items-center  my-2 px-1 hover:bg-gray-600 rounded">
            <Link href="/ShopingCart">
              <a src="/" className="text-gray-300 text-2xl flex items-center">
                <FiShoppingCart />
                <p className="pt-1 pl-2 text-xl text-orange-300">0</p>
              </a>
            </Link>
          </div>
        </div>
        {/* 2段目のヘッダー */}
        <nav className="bg-gray-800 w-screen">
          <div className="flex mx-auto items-center pl-8 h-14 w-xl">
            <div className="flex space-x-6">
              <Link href="/Mens">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  メンズ
                </a>
              </Link>
              <Link href="/Ladies">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  レディース
                </a>
              </Link>
              <Link href="/Accessories">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  アクセサリー
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* メインページ */}
      <main className=" flex flex-1 my-10 mx-10 flex-col max-w-screen-lg  w-screen bg-gray-100">
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

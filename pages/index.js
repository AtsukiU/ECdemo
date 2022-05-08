import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import PlanstGrid from "../components/PlanstGrid";
import FlowerGrid from "../components/FlowerGrid";
import Others from "../components/Others";
import BannarLogo from "../public/twitter_header_photo_2.png";

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto">
        <div className="mx-auto  w-11/12 mt-4">
          
          
          <Image
            src={BannarLogo}
            alt="logo"
            width={1500}
            height={260}
            objectFit="cover"
          />
          <h2 className=" flex justify-center text-gray-500 pt-2">5000円以上お買い上げで送料無料。翌日配達可能。ラッピング・メッセージカードの注文も承っています。</h2>
        </div>
        <PlanstGrid />
        <FlowerGrid />
        <Others />
      </div>
    </Layout>
  );
}

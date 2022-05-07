import Image from "next/image";
import Layout from "../components/Layout"
import styles from "../styles/Home.module.css";
import PlanstGrid from "../components/PlanstGrid";


export default function Home() {
  return (
    <Layout>
      
      <PlanstGrid/>
    </Layout>
  );
}

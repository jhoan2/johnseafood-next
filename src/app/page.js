'use client'
import Head from "next/head";
import HeroImage from "@/components/HeroImage";
import Navbar from "@/components/Navbar";
import FoodCarousel from "@/components/FoodCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (
    <>
      <Head>
        <title>John Seafood</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="any" type="image/png" />
      </Head>
      <main>
      <HeroImage />
      <Navbar />
      <FoodCarousel />
      <Menu />
      <Footer />
    </main>
    </>

  );
}

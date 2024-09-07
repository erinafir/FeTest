'use client'

import { CarouselImg } from "@/components/Carousel";
import CategoryGrid3 from "@/components/CatGrid3";
import CategoryGrid6 from "@/components/CatGrid6";
import { TabsTopUp } from "@/components/Tabs";
import Image from "next/image";
import PayDay from "../../public/assets/paydaywebsite.png";
import DiscountedCard from "@/components/DiscountedCard";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductCardNoDiscount from "@/components/ProductCardNoDisc";

export default function Home() {
  return (
    <section className="p-4 sm:p-16" style={{ backgroundColor: "#F9F9F9" }}>
      <div className="">
        <CarouselImg />
      </div>
      <h3 className="font-semibold">Kategori</h3>
      <CategoryGrid3 />
      <CategoryGrid6 />
      <h3 className="font-semibold mt-5">Top Up dan Tagihan</h3>
      <TabsTopUp />
      <div className="flex justify-center py-4">
        <div className="flex flex-col gap-2 ">
          <div className="w-[340px] max-w-[735px] rounded-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-auto flex flex-col gap-5 items-center sm:flex-row content-center sm:justify-center sm:w-[1048px] sm:h-[232px]" style={{ backgroundColor: "#FFC045" }}>
            <Image className="w-[300px] h-[140px] sm:w-[383px] sm:h-[200px]" src={PayDay} alt="..." />
            <div className="flex flex-col gap-3 px-2">
              <h1 className="text-3xl">PAY DAY SALE!!!</h1>
              <h6 className="">Nikmati promo spektakuler <span>idshop</span> setiap tanggal 25!</h6>
              <button className="w-full h-[44px] rounded-md mb-5" style={{ backgroundColor: "#0A91AB" }}><p className="text-white">Ikuti Event</p></button>
            </div>
          </div>
          <div className="w-[340px] max-w-[735px] rounded-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-auto flex flex-col gap-5 items-center sm:flex-row content-center sm:justify-center sm:w-[1048px] sm:h-[232px]" style={{ backgroundColor: "#0A91AB" }}>
            <Image className="w-[300px] h-[140px] sm:w-[383px] sm:h-[200px]" src={PayDay} alt="..." />
            <div className="flex flex-col gap-3 px-2">
              <h1 className="text-3xl" style={{ color: "#FFC045" }}>GRATIS ONGKIR 50%</h1>
              <h6 className="text-white">Klaim voucher gratis ongkos kirim Kamu.</h6>
              <button className="w-full h-[44px] rounded-md mb-5" style={{ backgroundColor: "#FFC045" }}><p className="text-white">Klaim Voucher</p></button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <h3 className="font-semibold mt-5">Diskon Hari Ini</h3>
        <Link href="">
          <p className="text-sm" style={{ color: "#0A91AB" }}>Lihat Semua</p>
        </Link>
      </div>
      <div className="flex flex-nowrap gap-2 overflow-x-auto no-scrollbar bg-white py-5 rounded-sm">
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
        <DiscountedCard />
      </div>
      <h3 className="font-semibold mt-5">Rekomendasi untuk Kamu</h3>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
        <ProductCardNoDiscount />
        <ProductCard />
        <ProductCard />
        <ProductCardNoDiscount />
        <ProductCard />
        <ProductCard />
        <ProductCardNoDiscount />
        <ProductCard />
        <ProductCard />
        <ProductCardNoDiscount />
        <ProductCardNoDiscount />
        <ProductCard />
      </div>
    </section>
  );
}

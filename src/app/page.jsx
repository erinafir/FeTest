'use client'

import { CarouselImg } from "@/components/Carousel";
import CategoryGrid3 from "@/components/CatGrid3";
import CategoryGrid6 from "@/components/CatGrid6";
import { TabsTopUp } from "@/components/Tabs";


export default function Home() {
  return (
    <section className="p-4 sm:p-16">
      <div >
        <CarouselImg />
      </div>
      <h3 className="font-semibold">Kategori</h3>
      <CategoryGrid3 />
      <CategoryGrid6 />
      <h3 className="font-semibold">Top Up dan Tagihan</h3>
      <TabsTopUp />

    </section>
  );
}

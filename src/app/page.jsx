'use client'

import { CarouselImg } from "@/components/Carousel";

export default function Home() {
  return (
    <section className="p-4 sm:p-16">
      <div >
        <CarouselImg />
      </div>
      <h3 className="font-semibold">Kategori</h3>
    </section>
  );
}

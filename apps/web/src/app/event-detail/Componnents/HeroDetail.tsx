import Image from 'next/image';
import React from 'react';

const HeroDetail = () => {
  return (
    <section>
      <div className="min-w-full min-h-full rounded-3xl overflow-hidden shadow-lg bg-lightbrown ">
        <div className="flex justify-between px-6 pt-4">
          <div className="font-semibold">
            <p>kota</p>
          </div>
          <div className="font-semibold pr-10">
            <p>26 februari</p>
          </div>
        </div>
        <h1 className="px-6 py-4 text-5xl font-mono font-bold">
          THEATER ROUNDUP: AUTUMN 2023
        </h1>
        <div className="container w-full h-[400px] relative ">
          <Image
            className="object-cover px-6 rounded-[40px] "
            src="/img1.jpg"
            quality={100}
            alt="Sunset in the mountains"
            fill
          />
        </div>
        <div className="px-6 py-6 ">
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet,</p>
        </div>
      </div>
    </section>
  );
};

export default HeroDetail;

import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';
import Category from '@/app/(landingpage)/Components/Category';

const HeroDetail = ({ event }: any) => {
  let startDate = '';
  if (event.startDate) {
    startDate = format(new Date(event?.startDate), 'dd MMMM yyyy');
  }
  console.log(startDate);

  return (
    <section>
      <div className="min-w-full min-h-full rounded-3xl overflow-hidden shadow-lg bg-lightbrown ">
        <div className="flex justify-between px-6 pt-4">
          <div className="font-semibold">
            <p>{event.location?.city}</p>
          </div>
          <div className="font-semibold pr-10">
            <p>{startDate}</p>
          </div>
        </div>
        <h1 className="px-6 py-4 text-5xl font-mono font-bold"></h1>
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
          <div className=" flex gap-2">
            {event?.Event_category?.map((value: any) => {
              return <Category key={value.id} value={value} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDetail;

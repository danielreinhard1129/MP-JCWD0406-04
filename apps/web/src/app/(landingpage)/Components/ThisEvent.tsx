import React, { useEffect, useState } from 'react';
import CardEvent from './CardEvent';
import CardEventLanding from './CardEventLanding';
import axios from 'axios';
import { baseUrl } from '@/app/utils/baseUrl';
import Link from 'next/link';

const ThisEvent = () => {
  const [events, setEvents] = useState([]);


  console.log('cek event data', events);

  useEffect(() => {
    allEvents();
  }, []);

  const allEvents = async () => {
    try {
      const {data} = await axios.get(`${baseUrl}/events/events`);
      console.log("huhuh9h8",data);
      
      setEvents(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container bg-lightbrown pb-10">
        <div className="px-44">
          <div className="flex  justify-between">
            <h1 className="text-5xl py-10  font-mono font-semibold">
              FIND YOUR NEXT EVENT
            </h1>
            <Link href={'/event-discovery'}>
              <p className="pt-24 text-orangee underline">More</p>
            </Link>
          </div>
          <div className=" grid grid-cols-3 gap-2 ">
            <div className=" col-span-2">
              {events?.length > 0 && (
                <CardEventLanding key={events[0]} event={events[0]} />
              )}
            </div>

            {events?.slice(1, 5).map((event) => {
              return <CardEvent key={event} event={event} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThisEvent;

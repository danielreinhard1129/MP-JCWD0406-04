import React, { useEffect, useState } from 'react';
import CardEventUniq from './CardEventUniq';

import axios from 'axios';
import { baseUrl } from '@/app/utils/baseUrl';

const UniqEvent = () => {
  const [events, setEvents] = useState([]);
  const allEvents = async () => {
    try {
      const result = await axios.get(`${baseUrl}/events/events-thisweekend`);
      setEvents(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('cek event data', events);

  useEffect(() => {
    allEvents();
  }, []);

  return (
    <section>
      <div className="container  bg-milk pb-10">
        <div className="px-44">
          <h1 className="text-5xl py-10 font-mono font-semibold">
            THINGS TO DO THIS WEEKEND
          </h1>
          <div className=" grid grid-cols-3 gap-2 ">
            {events.slice(1, 7).map((event) => (
              <CardEventUniq key={event} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqEvent;

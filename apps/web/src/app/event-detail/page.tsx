import React from 'react';
import HeroDetail from './Componnents/HeroDetail';
import AboutEvent from './Componnents/AboutEvent';
import AdditionalInformation from './Componnents/AdditionalInformation';
import BookingCard from './Componnents/BookingCard';

const EventDetail = () => {
  return (
    <section className="bg-milk pt-[-20]">
      <div className="px-44 py-4">
        <HeroDetail />
        <div className="grid grid-cols-5  grid-flow-row py-2 gap-2">
          <div className="col-span-4">
            <div>
              <AboutEvent />
            </div>
            <div>
              <AdditionalInformation />
            </div>
          </div>
          <div className="sticky top-[75px] h-fit">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;

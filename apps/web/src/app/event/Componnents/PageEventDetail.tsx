import React from 'react';
import HeroDetail from './HeroDetail';
import AboutEvent from './AboutEvent';
import AdditionalInformation from './AdditionalInformation';
import BookingCard from './BookingCard';

const PageEventDetail = ({ event }: any) => {
  console.log(event, 'adakaaahhhh');

  return (
    <section className="bg-milk pt-[-20]">
      <div className="px-44 py-4">
        <HeroDetail event={event} />
        <div className="grid grid-cols-5  grid-flow-row py-2 gap-2">
          <div className="col-span-4">
            <div>
              <AboutEvent event={event} />
            </div>
            <div>
              <AdditionalInformation event={event} />
            </div>
          </div>
          <div className="sticky top-[75px] h-fit">
            <BookingCard event={event} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageEventDetail;

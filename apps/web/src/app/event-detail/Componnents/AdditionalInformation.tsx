import React from 'react';
import { MdDateRange, MdAccessTime, MdEventNote } from 'react-icons/md';

const AdditionalInformation = () => {
  return (
    <section className="py-6">
      <h1 className="text-5xl font-semibold py-4">Additional Information</h1>
      <div className="py-2">
        <div className="flex space-x-2 py-2">
          <div className="text-2xl pt-2">
            <MdAccessTime />
          </div>
          <div>
            <h3 className="font-semibold">Running Time</h3>
            <p>2h 30min</p>
          </div>
        </div>
        <div className="flex space-x-2 py-2">
          <div className="text-2xl pt-2">
            <MdDateRange />
          </div>
          <div>
            <h3 className="font-semibold">Perforamance Date</h3>
            <p>start date - end date</p>
          </div>
        </div>
        <div className="flex space-x-2 py-2">
          <div className="text-2xl pt-2">
            <MdEventNote />
          </div>
          <div>
            <h3 className="font-semibold">Content</h3>
            <p>
              contains adults themes, theater, musical, audio describe
              performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;

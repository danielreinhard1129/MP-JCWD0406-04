import React from 'react';

const BookingCard = () => {
  return (
    <section>
      <div className="min-w-full min-h-full rounded-3xl overflow-hidden shadow-lg bg-lightbrown ">
        <h1 className="px-6 py-4 text-5xl font-mono font-bold">$600</h1>

        <div className="px-6 py-6 min-w-full ">
          <button
            type="button"
            className="text-white bg-orangee hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Booking Tickets
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingCard;

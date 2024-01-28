'use client';
import CardEventUniq from '@/app/(landingpage)/Components/CardEventUniq';
import { baseUrl } from '@/app/utils/baseUrl';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Kbd } from 'flowbite-react';

export interface IEvent {
  id: number;
  title: string;
  description: string;
  locationId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  userId: number;
  createAt: Date;
  updateAt: Date;
}
const PageEventDiscovery: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  const handlePreviousClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{
          data: IEvent[];
        }>(
          `${baseUrl}/events/events-discovery?page=${page}&pageSize=${pageSize}`,
        );
        setEvents(response.data.data);
        setTotalPages(response.data.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page, pageSize]);

  console.log(events, 'akkggghhh');
  return (
    <section>
      <div className="container  bg-milk pb-10">
        <div className="px-44">
          <h1 className="text-5xl py-10 font-mono font-semibold">
            RECENTLY ADDED
          </h1>
          <div className=" grid grid-cols-3 gap-2 ">
            {events.map((event) => (
              <CardEventUniq key={event.id} event={event} />
            ))}
          </div>
          <div>
            <div className="pagination-controls flex gap-6  mt-10">
              <Button
                className="bg-orangee"
                onClick={handlePreviousClick}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Kbd className="current-page text-lg w-auto items-center">
                {page}
              </Kbd>
              <Button
                className="bg-orangee"
                onClick={handleNextClick}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageEventDiscovery;

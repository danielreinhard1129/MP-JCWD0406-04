'use client';
import { baseUrl } from '@/lib/baseUrl';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import PageEventDetail from '../Componnents/PageEventDetail';

// interface Props {
//   params: {
//     id: string;
//   };
// }
// { params }: Props
const EventDetail = () => {
  const [event, setEvent] = useState([]);
  const params = useParams();

  const getEvent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/event/${params.id}`);
      setEvent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvent();
  }, [params.id]);

  return (
    <div>
      <PageEventDetail event={event} />
    </div>
  );
};

export default EventDetail;

import React from 'react';

interface Props {
  params: {
    id: string;
  };
}
const EventDetail = ({ params }: Props) => {
  // get data berdasarkan id event dari arams.id
  return <div>EventDetail {params.id}</div>;
};

export default EventDetail;

'use client';
import { Button } from 'flowbite-react';
import React from 'react';
import Select from 'react-select';
import { FiSearch } from 'react-icons/fi';

import { useParams, useRouter } from 'next/navigation';

const AutoComplete = ({ event }: any) => {
  const router = useRouter();
  const params = useParams();
  console.log('dobounceeeeeeeee', event);

  const options = event.map((event: any) => {
    return { value: event.id, label: event.title };
  });

  const handleChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.value) {
      router.push(`/event/${selectedOption.value}`);
    }
  };

  return (
    <div className="pt-6">
      <Select
        className=" w-[250px]  relative p-2 lg:p-4 lg:w-full  rounded-full bg-milk"
        options={options}
        isClearable={true}
        isSearchable={true}
        placeholder="Find your Event"
        onChange={handleChange}
      />
    </div>
    // <div className="mt-6">
    //   <form className="w-[250px] lg:w-auto relative">
    //     <div className="relative">
    //       <input
    //         type="search"
    //         placeholder="Search Event"
    //         className="w-full p-4 rounded-full bg-milk"
    //       />
    //       <Button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-orangee rounded-full text-black text-xl   ">
    //         <FiSearch />
    //       </Button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default AutoComplete;

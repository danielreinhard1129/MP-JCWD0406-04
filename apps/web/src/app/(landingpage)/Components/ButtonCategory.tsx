import { PiMicrophoneStageDuotone } from 'react-icons/pi';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdSportsHandball } from 'react-icons/md';

export const ButtonCategory = () => {
  return (
    <section className="flex gap-3 w-full p-2 rounded-full bg-white shadow-lg">
      <div className="text-3xl text-white rounded-full p-6 bg-orangee">
        <PiMicrophoneStageDuotone />
      </div>
      <div className="text-3xl text-white rounded-full p-6 bg-orangee">
        <IoCarSportOutline />
      </div>
      <div className="text-3xl text-white rounded-full p-6 bg-orangee">
        <MdSportsHandball />
      </div>
      <div className="text-3xl text-white rounded-full p-6 bg-orangee">
        <IoCarSportOutline />
      </div>
    </section>
  );
};

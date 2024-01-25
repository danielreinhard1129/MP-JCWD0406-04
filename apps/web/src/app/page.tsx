import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'flowbite-react';
import LandingPage from './landingpage/page';

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}

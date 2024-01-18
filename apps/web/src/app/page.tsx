import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <main className="container max-w-7xl px-4 mx-auto">
      <section className="mt-20 flex flex-col items-center justify-center text-center md:mt-32">
        <h1 className="mb-4 text-4xl font-semibold md:text-4xl">Homepage</h1>
      </section>
    </main>
  );
}

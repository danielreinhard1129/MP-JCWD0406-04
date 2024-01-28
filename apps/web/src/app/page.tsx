'use client';
import { CustomerGuard } from '@/lib/HOC/CustomerGuard';
import Hero from './(landingpage)/Components/Hero';
import ThisEvent from './(landingpage)/Components/ThisEvent';
import UniqEvent from './(landingpage)/Components/UniqEvent';

function Home() {
  return (
    <main>
      <Hero />
      <ThisEvent />
      <UniqEvent />
    </main>
  );
}

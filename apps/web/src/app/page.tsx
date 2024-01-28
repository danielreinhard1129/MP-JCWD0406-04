'use client';
import { CustomerGuard } from '@/lib/HOC/CustomerGuard';


import LandingPage from './landingpage/LandingPage';

function Home() {

  return (
    <main>
      <LandingPage />
    </main>
  );
}

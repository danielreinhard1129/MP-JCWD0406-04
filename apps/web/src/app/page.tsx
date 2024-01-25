'use client';
import { CustomerGuard } from '@/lib/HOC/CustomerGuard';

function Home() {
  return <main className="container max-w-7xl px-4 mx-auto"></main>;
}

export default CustomerGuard(Home);

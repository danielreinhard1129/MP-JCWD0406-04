'use client';
import { CustomerGuard } from '@/lib/HOC/CustomerGuard';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';
import Hero from './(landingpage)/Components/Hero';
import ThisEvent from './(landingpage)/Components/ThisEvent';
import UniqEvent from './(landingpage)/Components/UniqEvent';

export default function Home() {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (user.role.name === 'customer') {
      router.push('/');
    }
    if (user.role.name === 'promoter') {
      router.push('/promoters');
    }
  }, []);

  return (
    <main>
      <Hero />
      <ThisEvent />
      <UniqEvent />
    </main>
  );
}

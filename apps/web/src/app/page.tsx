'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';

export default function Home() {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (user.role === 'customer') {
      router.push('/');
    }
    if (user.role === 'promoter') {
      router.push('/promoters');
    }
  }, []);

  return <main className="container max-w-7xl px-4 mx-auto"></main>;
}

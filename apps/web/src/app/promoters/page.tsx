'use client';
import PromoterDashboard from './components/PromoterDashboard';
import { PromoterGuard } from '@/lib/HOC/PromotersGuard';

const Promoters = () => {
  return (
    <div>
      <PromoterDashboard />
    </div>
  );
};

export default PromoterGuard(Promoters);

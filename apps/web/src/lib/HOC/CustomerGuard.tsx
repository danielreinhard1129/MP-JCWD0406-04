import { useAppSelector } from '@/lib/hooks';
import { redirect } from 'next/navigation';

export const CustomerGuard = (Component: any) => {
  return function IsCustomer(props: any) {
    const role = useAppSelector((state) => state.user.role.name);

    if (role === 'promoter') {
      redirect('/promoters');
    } else {
      return <Component {...props} />;
    }
  };
};

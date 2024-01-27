import { useAppSelector } from '@/lib/hooks';
import { redirect } from 'next/navigation';

export const AuthGuard = (Component: any) => {
  return function IsCustomer(props: any) {
    const role = useAppSelector((state) => state.user.role.name);

    if (role === 'customer') {
      return redirect('/');
    }
    if (role === 'promoter') {
      return redirect('/promoters');
    }

    return <Component {...props} />;
  };
};

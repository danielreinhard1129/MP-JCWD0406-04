import { useAppSelector } from '@/lib/hooks'
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

export const PromoterGuard = (Component: any) => {
  return function IsCustomer(props: any) {
    const role = useAppSelector((state) => state.user.role.name);
    useEffect(() =>{
        if(role === "customer" || !role){
            return redirect("/")
        }
    },[role])
    return <Component {...props}/>
  }
}
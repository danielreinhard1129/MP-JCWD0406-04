'use client';
import { logoutAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavbarComp = () => {
  const user = useAppSelector((state) => state.user);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    transition: 'background-color 0.6s ease',
    backgroundColor: scrollPosition > 0 ? 'black' : 'transparent',
  };

  const textStyle = {
    color: scrollPosition > 0 ? 'white' : 'black',
  };

  const linkClassName =
    scrollPosition > 0
      ? 'hover:border-white hover:border-b text-white text-lg'
      : 'hover:border-black hover:border-b text-black text-lg';
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token_auth');
    dispatch(logoutAction());
  };
  return (
    <div className="sticky top-0 z-50 " style={navbarStyle}>
      <Navbar fluid className="container mx-auto max-w-7xl bg-transparent p-5 ">
        <NavbarBrand as={Link} href="/">
          <span
            style={textStyle}
            className="self-center whitespace-nowrap text-[40px] font-semibold dark:text-white "
          >
            TICKETS.UK
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink
            as={Link}
            href="/"
            style={textStyle}
            className={linkClassName}
          >
            Home
          </NavbarLink>

          {!user.id ? (
            <>
              <NavbarLink
                as={Link}
                href="/login"
                style={textStyle}
                className={linkClassName}
              >
                Login
              </NavbarLink>
              <NavbarLink
                as={Link}
                href="/register"
                style={textStyle}
                className={linkClassName}
              >
                Register
              </NavbarLink>
            </>
          ) : (
            <>
              <NavbarLink
                as={Link}
                href="/login"
                style={textStyle}
                className={linkClassName}
              >
                Profile
              </NavbarLink>
              <NavbarLink
                onClick={handleLogout}
                style={textStyle}
                className={linkClassName}
              >
                Logout
              </NavbarLink>
            </>
          )}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {navLinks.map((link: NavLink) => {
        const isActive = link.href === pathname;

        return (
          <Link href={link.href} key={link.label} className={isActive ? 'active' : ''}>
            {link.label}
          </Link>
        );
      })}
      {session.data && <Link href="/profile">Profile</Link>}
      {session.data ? (
        <Link
          href="#"
          onClick={() => {
            signOut({ callbackUrl: '/' });
          }}>
          Sign out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </>
  );
};

export default Navigation;

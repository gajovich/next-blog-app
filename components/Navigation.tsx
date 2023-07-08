'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type NavigationProps = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname();

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
    </>
  );
};

export default Navigation;

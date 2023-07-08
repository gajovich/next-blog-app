import Link from 'next/link';
import Navigation from './Navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

function Header() {
  return (
    <header className="header">
      <nav className="header__menu container">
        <Navigation navLinks={navLinks} />
      </nav>
    </header>
  );
}

export default Header;

import Link from 'next/link';

function Header() {
  return (
    <header className="header">
      <nav className="header__menu container">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;

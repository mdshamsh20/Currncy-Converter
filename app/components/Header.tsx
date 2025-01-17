import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <h1 className="page-title">Currency Converter</h1>
      <h2 className="page-subtitle">
        Crafted with love &#8212; by{' '}
        <Link target="_blank" href="https://linktr.ee/dhruvikn">
          Md Shamsuzzama Siddique
        </Link>
      </h2>
    </>
  );
};

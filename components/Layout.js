import { Sora } from '@next/font/google';
import React from 'react';
import Nav from './Nav';
import TopLeftImg from './TopLeftImg';
import Header from './Header';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '700', '600', '500'],
});

// components 



import ParticlesContainer from './ParticlesContainer';

const Layout = ({ children }) => {
  const [headerVisible, setHeaderVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const handleScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat  ${sora.variable} font-sora relative `}
    >
      <TopLeftImg />
      <Nav />
      <Header visible={headerVisible} />
      <ParticlesContainer />
      <div
        onScroll={handleScroll}
        className="h-full w-full overflow-y-auto overflow-x-hidden content-scroll relative z-10 pt-[40px] md:pt-[60px] bg-primary/10"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;

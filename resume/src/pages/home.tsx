import Profile from '../components/my_profile';
import Profile_mobile from '../components/my_profile_mobile';
import Intro_slide from '../components/intro_slide';
import Nav_bar from '../components/nav_bar';
import About_us_slide from '../components/about_us_slide';

import { useState, useEffect } from 'react';
export default function home() {
  const [useMobile, setMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      var flag = window.innerWidth < 1087 ? true : false;
      setMobile(flag);
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);

    return () => {
      window.removeEventListener('resize', updateMobile);
    };
  }, []);

  return (
    <>
      <div className="slide-deck mx-10 grid h-full grid-cols-[repeat(3,minmax(0,1fr))_100px] gap-x-[100px] gap-y-[500px]">
        {useMobile ? <Profile_mobile /> : <Profile />}
        <Intro_slide />
        <Nav_bar />
        <About_us_slide />
      </div>
    </>
  );
}

import Profile from '../components/my_profile';
import Profile_mobile from '../components/my_profile_mobile';
import Intro_slide from '../components/intro_slide';
import Nav_bar from '../components/nav_bar';
import About_us_slide from '../components/about_us_slide';
import Time_line_slide from '../components/time_line_slide';
import Services_slide from '../components/services_slide';
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
    if(!useMobile){
      return(
        <>
          <div className="mt-[10%]" />
          <div className="slide-deck mx-10 grid h-full grid-cols-[repeat(3,minmax(0,1fr))_100px] gap-x-[100px] gap-y-[300px]">
            <Profile />
            <Intro_slide />
            <Nav_bar />
            <About_us_slide />
            <Time_line_slide />
            <Services_slide />
          </div>
        </>
      );
    } else {
      return(
        <>
          <div className="mt-[10%]" />
          <Profile_mobile />
          <Intro_slide />
          <About_us_slide />
          <Time_line_slide />
          <Services_slide />
        </>
      );
    }
}

import Profile from '../components/my_profile';
import Profile_mobile from '../components/my_profile_mobile';
import Intro_slide from '../components/intro_slide';
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
      <div className="h-[10%]" /> 
      <div className="mx-10 grid gap-10 grid-cols-4">
        {useMobile ? <Profile_mobile /> : <Profile />}
        <Intro_slide />
      </div>
    </>
  );
}

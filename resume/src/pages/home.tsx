import Profile from '../components/my_profile';
import Profile_mobile from '../components/my_profile_mobile';
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
    <>{useMobile ? <Profile_mobile /> : <Profile />}</>
  );
}

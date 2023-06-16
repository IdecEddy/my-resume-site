import Profile from '../components/my_profile';
import Profile_mobile from '../components/my_profile_mobile';
import Intro_slide from '../components/intro_slide';
import Nav_bar from '../components/nav_bar';
import About_us_slide from '../components/about_us_slide';
import Time_line_slide from '../components/time_line_slide';
import Services_slide from '../components/services_slide';
import Contact_slide from '../components/contact_slide';
import { useState, useEffect, useRef } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { api } from '../utils/api';

const Home = () => {
  const [useMobile, setMobile] = useState(false);
  useEffect(() => {
    const updateMobile = () => {
      const flag = window.innerWidth < 1280 ? true : false;
      setMobile(flag);
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);

    return () => {
      window.removeEventListener('resize', updateMobile);
    };
  }, []);
  const add_session = api.session.add_session.useMutation();
  const [session_created, set_session_created] =
    useState(0);
  useEffect(() => {
    const create_session = async () => {
      const session = await add_session.mutateAsync();
      set_session_created(session['id'] as number);
    };
    create_session().catch(() => {
      console.log('something happend');
    });
  }, []);
  const update_session =
    api.session.update_session.useMutation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (session_created != 0) {
        console.log('updateing: ', session_created);
        update_session.mutate({
          session_id: session_created,
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [session_created]);
  if (!useMobile) {
    return (
      <>
        <GoogleReCaptchaProvider
          reCaptchaKey={
            process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!
          }
          scriptProps={{
            async: false,
            defer: false,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          <div className="mt-[10%]" />
          <div className="slide-deck mx-10 grid h-full grid-cols-[repeat(3,minmax(0,1fr))_100px] gap-x-[100px] gap-y-[300px]">
            <Profile />
            <Intro_slide />
            <Nav_bar />
            <About_us_slide />
            <Time_line_slide />
            <Services_slide />
            <Contact_slide />
          </div>
        </GoogleReCaptchaProvider>
      </>
    );
  } else {
    return (
      <>
        <GoogleReCaptchaProvider
          reCaptchaKey={
            process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!
          }
          scriptProps={{
            async: false,
            defer: false,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          <div className="mt-[10%]" />
          <Profile_mobile />
          <Intro_slide />
          <About_us_slide />
          <Time_line_slide />
          <Services_slide />
          <Contact_slide />
        </GoogleReCaptchaProvider>
      </>
    );
  }
};

export default Home;

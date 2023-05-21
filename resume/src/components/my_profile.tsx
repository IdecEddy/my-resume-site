// Colors
// Borders - #707070
import Image from 'next/image';
import {
  faLinkedinIn,
  faYoutube,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile_pic from '../public/profile3.jpg';
import styles from '../styles/profile.module.css';
import { useEffect } from 'react';
const Profile = () => {
  useEffect(() => {
    function update_grid_cell_size() {
      let gap = 300;
      let nav_width = 100;
      let element =
        document.getElementsByClassName('slide-deck');
      if (element[0]) {
        let grid_bounding =
          element[0].getBoundingClientRect();
        let left_pad = grid_bounding.left;
        let cell_width =
          (grid_bounding.width - gap - nav_width) / 3;
        let profile =
          document.getElementById('profile_box');
        if (profile) {
          profile.style.maxWidth = cell_width + 'px';
          let profile_bounding =
            profile.getBoundingClientRect();
          let profile_width = profile_bounding.width;
          let profile_left =
            (cell_width - profile_width) / 2 + left_pad;
          let profile_top_pos =
            window.innerHeight / 2 -
            profile_bounding.height / 2;
          profile.style.left = profile_left + 'px';
          profile.style.top = profile_top_pos + 'px';
        }
      }
    }
    update_grid_cell_size();
    window.addEventListener(
      'resize',
      update_grid_cell_size
    );

    return () => {
      window.removeEventListener(
        'resize',
        update_grid_cell_size
      );
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-[40px] justify-self-center"
        id="profile_box"
      >
        <div
          className={
            'px-30 ' +
            'box-border ' +
            'flex ' +
            'flex-col ' +
            'justify-center ' +
            'overflow-hidden ' +
            'rounded-3xl ' +
            'border ' +
            'border-neutral-400 ' +
            'max-w-[510px] ' +
            'px-5 ' +
            'py-2 ' +
            'pb-10 '
          }
        >
          <div
            className="
              flex
              flex-col
              pb-10
              pt-5
              2xl:flex-row"
          >
            <p
              className="
                pb-1 
                text-center 
                text-2xl 
                font-bold 
                text-violet-400 
                2xl:self-center
                2xl:text-[30px]"
            >
              Edwin Mundo
            </p>
            <div className="text-center 2xl:ml-auto">
              <p className="pb-1 text-center text-xs font-bold 2xl:text-lg 2xl:font-normal">
                {' '}
                Software & Systems
              </p>
              <p className="text-xs font-bold 2xl:float-right 2xl:text-lg 2xl:font-normal">
                Engineer
              </p>
            </div>
          </div>
          <Image
            src={profile_pic}
            alt="this is me"
            width="0"
            height="0"
            className="
                    aspect-square
                    w-full
                    place-self-center
                    rounded-3xl
                    grayscale"
          />
          <div className={styles.contact_rows}>
            <p
              className="
                        text-center
                        text-base
                        font-bold
                        2xl:text-2xl"
            >
              {' '}
              Welcome to EdwinMundo.Dev{' '}
            </p>
            <p
              className="
                        text-center
                        text-sm
                        font-bold
                        2xl:text-2xl"
            >
              {' '}
              Based in Orlando, FL{' '}
            </p>
            <p
              className="
                        py-2
                        text-center
                        text-xs
                        text-[#979797]
                        2xl:text-base"
            >
              © 2023 EdwinM. All Rights Reserved{' '}
            </p>
          </div>
          <div className="flex flex-row justify-center px-10">
            <a
              href="https://www.linkedin.com/in/edwinmundo/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="
                        mx-2
                        place-self-center
                        overflow-hidden
                        rounded-full
                        border
                        border-neutral-400
                        p-2
                        text-center
                        text-sm
                        2xl:p-3
                        2xl:text-xl"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwk7dHR4W1aN7g5bgKXqpOQ"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="
                        text-smi
                        mx-2
                        place-self-center
                        overflow-hidden
                        rounded-full
                        border
                        border-neutral-400
                        p-2
                        text-center
                        2xl:p-3
                        2xl:text-xl"
              />
            </a>
            <a
              href="https://github.com/IdecEddy"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="
                        text-smi
                        mx-2
                        place-self-center
                        overflow-hidden
                        rounded-full
                        border
                        border-neutral-400
                        p-2
                        text-center
                        2xl:p-3
                        2xl:text-xl"
              />
            </a>
            <a
              href="https://twitter.com/TheDebateLord"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="
                        text-smi
                        mx-2
                        place-self-center
                        overflow-hidden
                        rounded-full
                        border
                        border-neutral-400
                        p-2
                        text-center
                        2xl:p-3
                        2xl:text-xl"
              />
            </a>
          </div>
          <div className="flex justify-center text-center">
            <button
              type="button"
              className={
                'felx-row ' +
                'text-15 ' +
                'mt-10 ' +
                'flex ' +
                'w-4/5 ' +
                'items-center ' +
                'justify-center ' +
                'overflow-hidden ' +
                'rounded-full ' +
                'border-neutral-400 ' +
                'bg-violet-400 ' +
                'hover:bg-violet-500 ' +
                'text-center ' +
                'font-bold ' +
                'px-5 ' +
                'py-1 ' +
                'h-12 ' +
                styles.email_button
              }
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="
                            bg-inherit
                            pr-2
                            text-[15px]
                            font-bold
                            2xl:text-[22px]"
              />
              <p className="bg-inherit"> Hire Me! </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

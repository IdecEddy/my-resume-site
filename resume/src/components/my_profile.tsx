// Colors
// Borders - #707070
import Image from 'next/image';
import {
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile_pic from '../public/profile3.jpg';
import styles from '../styles/profile.module.css';
const Profile = () => {
  return (
    <>
      <div
        className="
            flex
            h-full
            w-auto
            items-center
            p-5"
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
            'h-full ' +
            'border-neutral-400 ' +
            styles.profile_container
          }
        >
          <div className="flex flex-col py-10 py-5">
            <p className="pb-1 text-center text-2xl font-bold text-violet-500">
              Edwin Mundo
            </p>
            <div className="text-center">
              <p className="pb-1 text-center text-xs font-bold">
                {' '}
                Software & Systems
              </p>
              <p className="text-xs font-bold">Engineer</p>
            </div>
          </div>
          <Image
            src={profile_pic}
            alt="this is me"
            width="0"
            height="0"
            className="
                    h-[150px]
                    w-[150px]
                    place-self-center
                    rounded-3xl
                    grayscale
                    2xl:h-[500px]
                    2xl:w-[500px]"
          />
          <div className={styles.contact_rows}>
            <p
              className="
                        text-center
                        text-base
                        font-bold"
            >
              {' '}
              Welcome to EdwinMundo.Dev{' '}
            </p>
            <p
              className="
                        text-center
                        text-sm
                        font-bold"
            >
              {' '}
              Based in Orlando, FL{' '}
            </p>
            <p
              className="
                        py-2
                        text-center
                        text-xs
                        text-[#979797]"
            >
              © 2023 EdwinM. All Rights Reserved{' '}
            </p>
          </div>
          <div className="flex flex-row justify-center px-10">
            <a href="https://www.linkedin.com/in/edwinmundo/">
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
                        text-sm"
            />
            </a>
            <a href="https://www.youtube.com/channel/UCwk7dHR4W1aN7g5bgKXqpOQ">
            <FontAwesomeIcon
              icon={faYoutube}
              className="
                        mx-2
                        place-self-center
                        overflow-hidden
                        rounded-full
                        border
                        border-neutral-400
                        p-2
                        text-center
                        text-sm"
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
                'flex w-4/5 ' +
                'items-center ' +
                'justify-center ' +
                'overflow-hidden ' +
                'rounded-full ' +
                'border-neutral-400 ' +
                'bg-violet-500 ' +
                'text-center ' +
                'font-bold ' +
                'px-5 ' +
                'py-1 ' +
                styles.email_button
              }
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="
                            bg-violet-500
                            pr-2
                            text-[15px]
                            font-bold"
              />
              <p className="bg-violet-500"> Hire Me! </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

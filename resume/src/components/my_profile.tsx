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
            w-[25%]
            max-w-[555px]
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
            'border-neutral-400 ' +
            'max-w-[510px] ' +
            styles.profile_container
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
                    h-[150px]
                    w-[150px]
                    place-self-center
                    rounded-3xl
                    grayscale
                    2xl:h-[450px]
                    2xl:w-[450px]"
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
                        text-sm
                        2xl:p-3
                        2xl:text-xl"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCwk7dHR4W1aN7g5bgKXqpOQ">
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

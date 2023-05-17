import Image from 'next/image';
import {
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile_pic from '../public/profile3.jpg';
import styles from '../styles/profile.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
const Profile_mobile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex h-40 w-5/6 flex-row overflow-hidden rounded-lg border border-neutral-400">
          <div className="h-40 w-3/5 overflow-hidden md:w-[30%]">
            <Image
              src={profile_pic}
              width="0"
              height="0"
              alt="This is me"
              className="
                    h-full
                    w-full
                    rounded-l-lg
                    grayscale
                "
            />
          </div>
          <div className="flex w-full flex-col justify-center text-xs">
            <p className="w-full text-center text-lg text-violet-400">
              {' '}
              Edwin Mundo{' '}
            </p>
            <p className="w-full text-center">
              {' '}
              Software & Systems Engineer{' '}
            </p>
            <p className="w-full text-center">
              {' '}
              Based in Orlando, FL{' '}
            </p>
            <div className="flex flex-row justify-center pt-2">
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
                    p-1
                    text-center
                    text-sm
                    hover:cursor-pointer"
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
                    p-1
                    text-center
                    text-sm
                    hover:cursor-pointer"
              />
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className={
                  'flex-row ' +
                  'text-15 ' +
                  'mt-4 ' +
                  'flex ' +
                  'w-4/5 ' +
                  'items-center ' +
                  'justify-center ' +
                  'overflow-hidden ' +
                  'rounded-full ' +
                  'border-natural-400 ' +
                  'bg-violet-500 ' +
                  'text-center ' +
                  'font-bold ' +
                  'px-5 ' +
                  'py-1 '
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
            <p
              className="
                mt-1
                text-center
                text-[6px]
                text-[#979797]"
            >
              © 2023 EdwinM. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_mobile;
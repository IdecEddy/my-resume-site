import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Session_record_mobile = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    record: {
      sessionDuration: number;
      ipAddress: string;
      dateCreated: Date;
      userAgent: string;
      country: string;
      state: string;
      city: string;
      id: number;
    };
  }
) => {
  const {
    sessionDuration,
    ipAddress,
    dateCreated,
    userAgent,
    country,
    state,
    city,
    id,
  } = props.record;
  const [expanded, setExpanded] = useState(false);
  const expand = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };
  if (expanded == false) {
    return (
      <>
        <div className="my-5 grid grid-cols-[20px_1fr_30px] gap-10 rounded-2xl border border-stone-800 py-5 pl-5">
          <span className="inline-block h-5 w-5 self-center rounded-full bg-green-300" />
          <div>
            <p className="font-bold text-violet-300">
              {' '}
              IP Address{' '}
            </p>
            <p> {ipAddress} </p>
          </div>
          <div className="self-center" onClick={expand}>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="text-white"
            />
          </div>
        </div>
      </>
    );
  } else {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (sessionDuration > 0) {
      const sessionDurationSeconds = Math.floor(
        sessionDuration / 1000
      );
      hours = Math.floor(sessionDurationSeconds / 3600);
      minutes = Math.floor(
        (sessionDurationSeconds % 3600) / 60
      );
      seconds = sessionDurationSeconds % 60;
    }
    const sessionDurationFormated = `${hours}:${minutes}:${seconds}`;
    return (
      <>
        <div className="my-5 grid grid-cols-[20px_1fr_30px] gap-10 rounded-2xl border border-stone-800 py-5 pl-5">
          <span className="inline-block h-5 w-5 self-center rounded-full bg-green-300" />
          <div>
            <p className="font-bold text-violet-300">
              {' '}
              IP Address{' '}
            </p>
            <p className="text-stone-300"> {ipAddress} </p>
          </div>
          <div className="col-start-2 row-start-2">
            <p className="font-bold text-violet-300">
              {' '}
              Session Duration{' '}
            </p>
            <p className="text-stone-300">
              {' '}
              {sessionDuration != 0
                ? sessionDurationFormated
                : '00:00:00'}{' '}
            </p>
          </div>
          <div className="col-start-2 row-start-3">
            <p className="font-bold text-violet-300">
              {' '}
              Date Created{' '}
            </p>
            <p className="text-stone-300">
              {' '}
              {dateCreated.toDateString()}{' '}
            </p>
          </div>
          <div className="col-start-2 row-start-4">
            <p className="font-bold text-violet-300">
              {' '}
              Session Location{' '}
            </p>
            <div className='flex flex-col'>
            <p className="text-stone-300">
              {`Country: ${country}`}
            </p>
            <p className="text-stone-300">
              {`State: ${state}`}
            </p>
            <p className='text-stone-300'>
              {`City: ${city}`}
            </p>
            </div>
          </div>
          <div className="col-start-2 row-start-5">
            <p className="font-bold text-violet-300">
              {' '}
              User Agent{' '}
            </p>
            <p className="text-stone-300"> {userAgent} </p>
          </div>
          <div className="self-center" onClick={expand}>
            <FontAwesomeIcon
              icon={faAngleUp}
              className="text-white"
            />
          </div>
        </div>
      </>
    );
  }
};

export default Session_record_mobile;

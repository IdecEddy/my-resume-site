import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { expandContext } from './session_record';
import React from 'react';
const Session_record_large = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    record: {
      sessionDuration: number;
      ipAddress: string;
      dateCreated: Date;
      userAgent: string;
      id: number;
    };
  }
) => {
  interface ExpandContextType {
    itemExpanded: boolean;
    setItemExpanded: React.Dispatch<
      React.SetStateAction<boolean>
    >;
  }
  const { itemExpanded, setItemExpanded } =
    useContext<ExpandContextType>(
      expandContext as React.Context<ExpandContextType>
    );
  const expand = () => {
    const value = itemExpanded ? false : true;
    setItemExpanded(value);
  };
  const {
    sessionDuration,
    ipAddress,
    dateCreated,
    userAgent,
    id,
  } = props.record;
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
      <div className="mb-5 grid h-auto w-full rounded-2xl border border-stone-800 bg-[#0D0D0D] pt-10">
        <div className="mx-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
          <div>
            <p className="mb-2 font-bold text-violet-300">
              IP Address
            </p>
            <p>{ipAddress}</p>
          </div>
          <div>
            <p className="mb-2 font-bold text-violet-300">
              Sessin Start Date
            </p>
            <p>{dateCreated.toDateString()}</p>
          </div>
          <div>
            <p className="mb-2 font-bold text-violet-300">
              Session Duration
            </p>
            <p>{sessionDurationFormated}</p>
          </div>
          <div>
            <p className="mb-2 font-bold text-violet-300">
              User Agent
            </p>
            <p>{userAgent}</p>
          </div>
        </div>
        <div
          onClick={expand}
          className="self-ende w-full cursor-pointer pb-5 pt-5 text-center"
        >
          <FontAwesomeIcon
            className="text-slate-300"
            icon={faAngleUp}
          />
        </div>
      </div>
    </>
  );
};

export default Session_record_large;

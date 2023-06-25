import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleUp,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { expandContext } from './session_record';

const Session_record_desktop = (
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
  const expand = () => {
    const value = itemExpanded ? false : true;
    setItemExpanded(value);
  };
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (props.record.sessionDuration > 0) {
    const sessionDurationSeconds = Math.floor(
      props.record.sessionDuration / 1000
    );
    hours = Math.floor(sessionDurationSeconds / 3600);
    minutes = Math.floor(
      (sessionDurationSeconds % 3600) / 60
    );
    seconds = sessionDurationSeconds % 60;
  }
  const sessionDurationFormated = `${hours}:${minutes}:${seconds}`;
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
  if (!itemExpanded) {
    return (
      <>
        <div className="my-1 flex h-auto w-full flex-col overflow-hidden rounded-2xl border border-stone-800 bg-[#0D0D0D] pt-10">
          <div className="mb-2 flex flex-row">
            <div className="mx-auto ml-10 flex h-full flex-col justify-center">
              <p className="mb-2 font-bold text-violet-300">
                {' '}
                IP Address{' '}
              </p>
              <p> {props.record.ipAddress} </p>
            </div>
            <div className="m-auto flex h-full flex-col justify-center self-center">
              <p className="mb-2 font-bold text-violet-300">
                {' '}
                Session Start Date{' '}
              </p>
              <p>
                {' '}
                {props.record.dateCreated.toDateString()}{' '}
              </p>
            </div>
            <div className="ml-auto mr-10 flex h-full flex-col justify-center self-end">
              <p className="mb-2 font-bold text-violet-300">
                {' '}
                Session Duration{' '}
              </p>
              <p>
                {props.record.sessionDuration > 0
                  ? sessionDurationFormated
                  : '00:00:00'}{' '}
              </p>
            </div>
          </div>
          <div
            onClick={expand}
            className="w-full cursor-pointer pb-5 pt-5 text-center"
          >
            <FontAwesomeIcon
              icon={faAngleDown}
              className="text-white"
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="my-1 grid h-auto w-full rounded-2xl border border-stone-800 bg-[#0D0D0D] pt-10">
          <div className="mx-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
            <div>
              <p className="mb-2 font-bold text-violet-300">
                IP Address
              </p>
              <p>{props.record.ipAddress}</p>
            </div>
            <div>
              <p className="mb-2 font-bold text-violet-300">
                Sessin Start Date
              </p>
              <p>
                {props.record.dateCreated.toDateString()}
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold text-violet-300">
                Session Duration
              </p>
              <p>{sessionDurationFormated}</p>
            </div>
            <div>
              <p className="font-bold text-violet-300">
                {' '}
                Session Location{' '}
              </p>
              <div className="flex flex-col">
                <p className="text-stone-300">
                  {`Country: ${decodeURIComponent(
                    props.record.country
                  )}`}
                </p>
                <p className="text-stone-300">
                  {`State: ${decodeURIComponent(
                    props.record.state
                  )}`}
                </p>
                <p className="text-stone-300">
                  {`City: ${decodeURIComponent(
                    props.record.city
                  )}`}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold text-violet-300">
                User Agent
              </p>
              <p>{props.record.userAgent}</p>
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
  }
};

export default Session_record_desktop;

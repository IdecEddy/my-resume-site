import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Session_record_mobile = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    record: { sessionDuration: number; ipAddress: string };
  }
) => {
  const { sessionDuration, ipAddress } = props.record;
  return (
    <>
      <div className="my-10 flex h-20 w-full flex-row overflow-hidden rounded-2xl border border-stone-800 ">
        <div className="ml-5 self-center">
          <span className="inline-block h-5 w-5 rounded-full bg-green-300"></span>
        </div>
        <div className="ml-5 self-center">
          <p className="font-bold text-violet-300">
            {' '}
            IP Address{' '}
          </p>
          <p> {ipAddress} </p>
        </div>
        <div className="ml-auto mr-5 self-center">
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Session_record_mobile;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Session_record_mobile = (props: React.HTMLAttributes<HTMLDivElement> & { record: { sessionDuration: number; ipAddress: string } }) => {
  const { sessionDuration, ipAddress } = props.record;
  return(
    <>
      <div className="w-full h-20 my-10 border rounded-2xl border-stone-800 overflow-hidden flex flex-row ">
        <div className='ml-5 self-center'>
          <span className='h-5 w-5 bg-green-300 rounded-full inline-block'></span>
        </div>
        <div className='ml-5 self-center'>
          <p className='font-bold text-violet-300'> IP Address </p>
          <p> {ipAddress} </p>
        </div>
        <div className='self-center ml-auto mr-5'>
          <FontAwesomeIcon icon={faAngleRight} className='text-white' />
        </div>
      </div>
    </>
  )
};

export default Session_record_mobile;

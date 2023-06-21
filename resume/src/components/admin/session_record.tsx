import React from 'react';

const Session_record = (props: React.HTMLAttributes<HTMLDivElement> & { record: { sessionDuration: number; ipAddress: string } }) => {
  const { sessionDuration, ipAddress } = props.record;
  return(
    <>
      <div className="w-full h-20 my-10 border rounded-2xl border-stone-800 overflow-hidden flex flex-row">
        <div className='h-full ml-10 flex flex-col justify-center mx-auto'>
          <p className="font-bold mb-2 text-violet-300"> IP Address </p>
          <p> {ipAddress} </p>
        </div>
        <div className='h-full flex flex-col justify-center self-end ml-auto mr-10'>
          <p className="font-bold mb-2 text-violet-300"> Session Duration </p>
          <p> {sessionDuration} </p>
        </div>
      </div>
    </>
  )
};

export default Session_record;

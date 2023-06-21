const Session_record = ({record}) => {
  return(
    <>
      <div className="w-full h-20 my-10 border rounded-2xl border-stone-800 overflow-hidden flex flex-row">
        <div className='h-full ml-10 flex flex-col justify-center'>
          <p className="font-bold mb-2 text-violet-300"> IP Address </p>
          <p> {record.ipAddress.ipAddress} </p>
        </div>
        <div className='h-full ml-10 flex flex-col justify-center justify-self-center'>
          <p className="font-bold mb-2 text-violet-300"> Session Duration </p>
          <p> {record.sessionDuration} </p>
        </div>
      </div>
    </>
  )
};

export default Session_record;

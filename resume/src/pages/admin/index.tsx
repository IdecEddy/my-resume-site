import { api } from '~/utils/api';
import { useState, useEffect } from 'react';

const AdminIndex = () => {

  const session_count = api.session.get_count.useQuery();
  const ip_count = api.session.get_ip_count.useQuery();
  return ( 
    <>
    <div className='flex flex-row justify-center'>
      <div className='w-1/5 flex flex-col justify-center items-center p-[40px] m-[40px] border rounded'>
        <p className='color-white text-2xl'>{ session_count.data } </p>
        <p className='color-white text-2xl'> Page Views </p>
      </div>
      <div className='w-1/5 flex flex-col justify-center items-center p-[40px] m-[40px] border rounded'>
        <p className='color-white text-2xl'>{ ip_count.data } </p>
        <p className='color-white text-2xl'> Unique Views </p>
      </div>
    </div>
    </>
  );
}

export default AdminIndex; 

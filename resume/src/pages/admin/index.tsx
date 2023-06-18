import { api } from '~/utils/api';
import { useState, useEffect } from 'react';

const AdminIndex = () => {
  const session_count = api.session.get_count.useQuery();
  const ip_count = api.session.get_ip_count.useQuery();
  const ip_table = api.session.get_top_five_ips.useQuery();
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="m-[40px] flex w-1/5 flex-col items-center justify-center rounded border p-[40px]">
          <p className="color-white text-2xl">
            {session_count.data}{' '}
          </p>
          <p className="color-white text-2xl">
            {' '}
            Page Views{' '}
          </p>
        </div>
        <div className="m-[40px] flex w-1/5 flex-col items-center justify-center rounded border p-[40px]">
          <p className="color-white text-2xl">
            {ip_count.data}{' '}
          </p>
          <p className="color-white text-2xl">
            {' '}
            Unique Views{' '}
          </p>
        </div>
      </div>
      <div className="pl-10 pr-10">
        <table className="table-auto border-collapse border border-slate-400 text-white">
          <thead>
            <tr>
              <th className="border border-slate-300 pl-5 pr-5">
                IP Address
              </th>
              <th className="border border-slate-300 pl-5 pr-5">
                Number of Visits
              </th>
            </tr>
          </thead>
          <tbody>
            { ip_table.data?.map((record, index) => (
              <tr key={index}>
                <td className="border border-slate-300 pl-5 pr-5">
                  {record.ip}
                </td>
                <td className="border border-slate-300 pl-5 pr-5 text-center">
                  {record.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminIndex;

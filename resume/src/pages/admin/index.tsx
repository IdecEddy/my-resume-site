import { api } from '~/utils/api';
import { useState, useEffect } from 'react';

const AdminIndex = () => {
  const session_count = api.session.get_count.useQuery();
  const ip_count = api.session.get_ip_count.useQuery();
  const ip_table = api.session.get_top_five_ips.useQuery();
  const avg_session =
    api.session.get_avg_session_duration.useQuery();
  const total_session =
    api.session.get_total_session_duration.useQuery();
  const all_sessions = api.session.get_all.useQuery();
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
        <div className="m-[40px] flex w-1/5 flex-col items-center justify-center rounded border p-[40px]">
          <p className="color-white text-2xl">
            {avg_session.data}{' '}
          </p>
          <p className="color-white text-2xl">
            {' '}
            Avarage Session Duration{' '}
          </p>
        </div>
        <div className="m-[40px] flex w-1/5 flex-col items-center justify-center rounded border p-[40px]">
          <p className="color-white text-2xl">
            {total_session.data}{' '}
          </p>
          <p className="color-white text-2xl">
            {' '}
            Total View Time{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-row pl-10 pr-10">
        <table className="border-collapse border border-slate-400 text-white">
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
            {ip_table.data?.map((record, index) => (
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
        <table className="ml-10 border-collapse border border-slate-400 text-white">
          <thead>
            <tr>
              <th className="border border-slate-300 pl-5 pr-5">
                Session IP
              </th>
              <th className="border border-slate-300 pl-5 pr-5">
                Session User Agent
              </th>
              <th className="border border-slate-300 pl-5 pr-5">
                Session Duration
              </th>
              <th className="border border-slate-300 pl-5 pr-5">
                Date Created
              </th>
            </tr>
          </thead>
          <tbody>
            {all_sessions.data?.map((record, index) => (
              <tr key={index}>
                <th className="border border-slate-300 pl-5 pr-5">
                  {record.ipAddress.ipAddress}
                </th>
                <th className="border border-slate-300 pl-5 pr-5">
                  {record.userAgent}
                </th>
                <th className="border border-slate-300 pl-5 pr-5">
                  {record.sessionDuration}
                </th>
                <th className="border border-slate-300 pl-5 pr-5">
                  {record.dateCreated.toString()}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminIndex;

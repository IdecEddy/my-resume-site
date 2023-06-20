import { api } from '~/utils/api';

const Session_table = () => {
  const all_sessions = api.session.get_all.useQuery();
  return (
    <>
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
                {' '}
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
    </>
  );
};

export default Session_table;

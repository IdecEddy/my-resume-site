import { api } from '~/utils/api';

const Session_table = () => {
  const all_sessions = api.session.get_all.useQuery();
  return (
    <>
      <div className="overflow-hidden rounded-xl border border-stone-800">
        <table className="font-normal text-slate-300">
          <thead>
            <tr className="bg-stone-950 font-bold drop-shadow-[4px_4px_14px_#323131]">
              <th className="bg-stone-950 p-5 text-violet-300">
                Session IP
              </th>
              <th className="box-shadow-2xl bg-stone-950 p-5 text-violet-300">
                Session User Agent
              </th>
              <th className="box-shadow-2xl bg-stone-950 p-5 text-violet-300">
                Session Duration
              </th>
              <th className="box-shadow-2xl bg-stone-950 p-5 text-violet-300">
                Date Created
              </th>
            </tr>
          </thead>
          <tbody>
            {all_sessions.data?.map((record, index) => (
              <tr
                key={index}
                className="drop-shadow-[4px_2px_5px_#323131] hover:cursor-pointer hover:text-slate-100"
              >
                <th
                  className={
                    index % 2 == 0
                      ? 'px-10 py-5'
                      : 'bg-stone-950 p-5 px-10'
                  }
                >
                  {record.ipAddress.ipAddress}{' '}
                </th>
                <th
                  className={
                    index % 2 == 0
                      ? 'p-5 px-10'
                      : 'bg-stone-950 p-5 px-10'
                  }
                >
                  {record.userAgent}
                </th>
                <th
                  className={
                    index % 2 == 0
                      ? 'p-5 px-10'
                      : 'bg-stone-950 p-5 px-10'
                  }
                >
                  {record.sessionDuration}
                </th>
                <th
                  className={
                    index % 2 == 0
                      ? 'p-5 px-10'
                      : 'bg-stone-950 p-5 px-10'
                  }
                >
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

export default Session_table;

import { api } from '~/utils/api';
import TotalSessionDurationGraph from './total_session_duration_graph';

const Total_session_duration = () => {
  const total_session =
    api.session.get_total_session_duration.useQuery();
  return (
    <>
      <div className="grid w-full grid-cols-1 overflow-hidden rounded-xl bg-[#0D0D0D]">
        <div className="col-start-4 row-start-1 h-[200px] w-full overflow-hidden rounded-xl border border-stone-800">
          <div className="ml-10 flex h-4/5 flex-col justify-center">
            <p className="pointer-events-none z-10 mb-2 font-bold text-violet-400 xl:text-4xl">
              {' '}
              {total_session.data}{' '}
            </p>
            <p className="pointer-events-none z-10 font-bold">
              Total Session View Time
            </p>
          </div>
          <div className="h-1/5 bg-gradient-to-r from-violet-500 to-violet-400"></div>
        </div>
        <TotalSessionDurationGraph />
      </div>
    </>
  );
};

export default Total_session_duration;

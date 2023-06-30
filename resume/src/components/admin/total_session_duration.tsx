import { api } from '~/utils/api';
import TotalSessionDurationGraph from './total_session_duration_graph';

const Total_session_duration = () => {
  const total_session =
    api.session.get_total_session_duration.useQuery();
  return (
    <>
      <div className='grid grid-cols-1 w-full'>
        <div className="h-[200px] w-full overflow-hidden rounded-xl border border-stone-800 bg-[#0D0D0D] col-start-4 row-start-1">
          <div className="ml-10 flex h-4/5 flex-col justify-center bg-[#0D0D0D]">
            <p className="mb-2 bg-[#0D0D0D] font-bold text-violet-400 xl:text-4xl">
              {' '}
              {total_session.data}{' '}
            </p>
           <p className="bg-[#0D0D0D] font-bold">
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

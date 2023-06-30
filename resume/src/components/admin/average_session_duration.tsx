import { api } from '~/utils/api';
import AverageSessionDurationGraph from './average_session_duration_graph';
const Average_session_duration = () => {
  const avg_session =
    api.session.get_avg_session_duration.useQuery();
  return (
    <>
      <div className='grid rounded-xl overflow-hidden grid-cols-1 w-full bg-[#0D0D0D]'>
        <AverageSessionDurationGraph />
        <div className="h-[200px] w-full overflow-hidden rounded-xl border border-stone-800 col-start-3 row-start-1">
          <div className="ml-10 flex h-4/5 flex-col justify-center">
            <p className="mb-2 font-bold text-violet-400 xl:text-4xl z-10 pointer-events-none">
              {' '}
              {avg_session.data}{' '}
            </p>
            <p className="font-bold z-10 pointer-events-none">
              Average Session Duration{' '}
            </p>
          </div>
          <div className="h-1/5 bg-gradient-to-r from-violet-500 to-violet-400"></div>
        </div>
      </div>
    </>
  );
};

export default Average_session_duration;

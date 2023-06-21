import { api } from '~/utils/api';

const Total_session_duration = () => {
  const total_session =
    api.session.get_total_session_duration.useQuery();
  return (
    <>
      <div className="h-[200px] w-full overflow-hidden rounded-xl border border-stone-800 bg-stone-950">
        <div className="ml-10 flex h-4/5 flex-col justify-center bg-stone-950">
          <p className="mb-2 bg-stone-950 font-bold text-violet-400 xl:text-4xl">
            {' '}
            {total_session.data}{' '}
          </p>
          <p className="bg-stone-950 text-slate-300">
            Total Session View Time
          </p>
        </div>
        <div className="h-1/5 bg-gradient-to-r from-violet-500 to-violet-400"></div>
      </div>
    </>
  );
};

export default Total_session_duration;
import { api } from '~/utils/api';

const Unique_page_views = () => {
  const ip_count = api.session.get_ip_count.useQuery();
  return (
    <>
      <div className="m-10 h-[200px] w-1/5 max-w-[370px] min-w-[300px] overflow-hidden rounded-xl border border-stone-800 bg-stone-950">
        <div className="ml-10 flex h-4/5 flex-col justify-center bg-stone-950">
          <p className="mb-2 bg-stone-950 font-bold text-violet-400 xl:text-4xl">
            {' '}
            {ip_count.data}+{' '}
          </p>
          <p className="bg-stone-950 text-slate-300">
            {' '}
            Unique Views{' '}
          </p>
        </div>
        <div className="h-1/5 bg-gradient-to-r from-violet-500 to-violet-400"></div>
      </div>
    </>
  );
};

export default Unique_page_views;

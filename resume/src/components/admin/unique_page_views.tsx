import { api } from '~/utils/api';
import UniqePageViewsGraph from './unique_page_views_graph';
const Unique_page_views = () => {
  const ip_count = api.session.get_ip_count.useQuery();
  return (
    <>
      <div className="grid w-full grid-cols-1 overflow-hidden rounded-xl bg-[#0D0D0D]">
        <div className="col-start-2 row-start-1 h-[200px] w-full overflow-hidden rounded-xl border border-stone-800">
          <div className="ml-10 flex h-4/5 flex-col justify-center">
            <p className="pointer-events-none z-10 mb-2 font-bold text-violet-400 xl:text-4xl">
              {' '}
              {ip_count.data}+{' '}
            </p>
            <p className="pointer-events-none z-10 font-bold">
              {' '}
              Unique Views{' '}
            </p>
          </div>
          <div className="h-1/5 bg-gradient-to-r from-violet-500 to-violet-400"></div>
        </div>
        <UniqePageViewsGraph />
      </div>
    </>
  );
};

export default Unique_page_views;

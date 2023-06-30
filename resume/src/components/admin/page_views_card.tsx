import { api } from '~/utils/api';
import PageViewsGraph from './page_views_graph';
const Page_views_card = () => {
  const session_count = api.session.get_count.useQuery();
  return (
    <>
      <div className="grid rounded-xl overflow-hidden grid-cols-1 w-full bg-[#0D0D0D]"> 
        <div className="h-[200px] w-full overflow-hidden rounded-xl border border-stone-800 col-start-1 row-start-1">
          <div id="page-view-card" className="pl-10 flex h-4/5 flex-col justify-center">
            <p className="mb-2 font-bold text-violet-400 xl:text-4xl z-10 pointer-events-none">
              {' '}
              {session_count.data}+{' '}
            </p>
            <p className="font-bold z-10 pointer-events-none">
              {' '}
              Page Views{' '}
            </p>
          </div>
          <div className="h-1/5 bg-gradient-to-r from-violet-500 to-violet-400"></div>
        </div>
        <PageViewsGraph />
      </div>
    </>
  );
};

export default Page_views_card;

import { api } from '~/utils/api';
import PageViewsGraph from './page_views_graph';
const Page_views_card = () => {
  const session_count = api.session.get_count.useQuery();
  return (
    <>
      <div className="grid w-full grid-cols-1 overflow-hidden rounded-xl bg-[#0D0D0D]">
        <div className="col-start-1 row-start-1 h-[200px] w-full overflow-hidden rounded-xl border border-stone-800">
          <div
            id="page-view-card"
            className="flex h-4/5 flex-col justify-center pl-10"
          >
            <p className="pointer-events-none z-10 mb-2 font-bold text-violet-400 xl:text-4xl">
              {' '}
              {session_count.data}+{' '}
            </p>
            <p className="pointer-events-none z-10 font-bold">
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

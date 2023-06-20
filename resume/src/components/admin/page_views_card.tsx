import { api } from '~/utils/api';

const Page_views_card = () => {
  const session_count = api.session.get_count.useQuery();
  return (
    <>
      <div className="m-[40px] h-[200px] w-1/5 overflow-hidden rounded-xl border border-stone-800 bg-stone-950">
        <div className="ml-10 flex h-4/5 flex-col justify-center bg-stone-950">
          <p className="mb-2 bg-stone-950 font-bold text-violet-400 xl:text-4xl">
            {' '}
            {session_count.data}+{' '}
          </p>
          <p className="bg-stone-950 text-slate-300">
            {' '}
            Page Views{' '}
          </p>
        </div>
        <div className="h-1/5 bg-gradient-to-r from-violet-500 to-violet-400"></div>
      </div>
    </>
  );
};

export default Page_views_card;

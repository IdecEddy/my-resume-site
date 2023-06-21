import { api } from '~/utils/api';

const Page_views_card = () => {
  const session_count = api.session.get_count.useQuery();
  return (
    <>
      <div className="h-[200px] w-full overflow-hidden rounded-xl border border-stone-800 bg-[#0D0D0D]">
        <div className="ml-10 flex h-4/5 flex-col justify-center bg-[#0D0D0D]">
          <p className="mb-2 bg-[#0D0D0D] font-bold text-violet-400 xl:text-4xl">
            {' '}
            {session_count.data}+{' '}
          </p>
          <p className="bg-[#0D0D0D] text-slate-300">
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

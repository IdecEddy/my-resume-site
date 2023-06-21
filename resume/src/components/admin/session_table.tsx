import { api } from '~/utils/api';
import Session_record from '~/components/admin/session_record';

const Session_table = () => {
  const all_sessions = api.session.get_all.useQuery();
  return (
    <>
      <div className='mx-10'>
        { all_sessions.data?.map((record, index) => (
          <Session_record key={index} record={record} />
        ))}
      </div>
    </>
  );
};

export default Session_table;

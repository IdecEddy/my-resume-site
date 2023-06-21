import { api } from '~/utils/api';
import Session_record from '~/components/admin/session_record';
import Session_record_mobile from './session_record_mobile';
import { useEffect, useState } from 'react';
const Session_table = () => {
  const all_sessions = api.session.get_all.useQuery();
  const [useMobile, setMobile] = useState(false);
  useEffect(() => {
    const updateMobile = () => {
      const flag = window.innerWidth < 696 ? false : true;
      setMobile(flag);
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);

    return () => {
      window.removeEventListener('resize', updateMobile);
    };
  }, []);

  return (
    <>
      <div className="mx-8 pb-10">
        {all_sessions.data?.map((record, index) => (
          <>
            {useMobile ? (
              <Session_record
                key={index.toString()}
                record={{
                  sessionDuration: record.sessionDuration,
                  ipAddress: record.ipAddress.ipAddress,
                  dateCreated: record.dateCreated,
                }}
              />
            ) : (
              <Session_record_mobile
                key={index.toString()}
                record={{
                  sessionDuration: record.sessionDuration,
                  ipAddress: record.ipAddress.ipAddress,
                }}
              />
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Session_table;

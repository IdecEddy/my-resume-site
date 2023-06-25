import { api } from '~/utils/api';
import Session_record from '~/components/admin/session_record';
import Session_record_mobile from './session_record_mobile';
import { useEffect, useState } from 'react';
const Session_table = () => {
  const all_sessions = api.session.get_all.useQuery();
  return (
    <>
      {all_sessions.data?.map((record, index) => (
        <>
          <Session_record
            key={index.toString()}
            record={{
              sessionDuration: record.sessionDuration,
              ipAddress: record.ipAddress.ipAddress,
              dateCreated: record.dateCreated,
              userAgent: record.userAgent,
              country: record.ipCountry,
              state: record.ipState,
              city: record.ipCity,
              id: record.id,
            }}
          />
        </>
      ))}
    </>
  );
};

export default Session_table;

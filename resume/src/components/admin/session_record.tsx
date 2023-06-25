import { useState, useEffect, createContext } from 'react';
import Session_record_desktop from './session_record_desktop';
import Session_record_mobile from './session_record_mobile';

export const expandContext = createContext(null);

const Session_record = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    record: {
      sessionDuration: number;
      ipAddress: string;
      dateCreated: Date;
      userAgent: string;
      country: string;
      state: string;
      city: string;
      id: number;
    };
  }
) => {
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
  const [itemExpanded, setItemExpanded] = useState(false);
  return (
    <>
      <div className="mx-8">
        <>
          {useMobile ? (
            <expandContext.Provider
              value={{ itemExpanded, setItemExpanded }}
            >
              <Session_record_desktop
                record={{
                  sessionDuration:
                    props.record.sessionDuration,
                  ipAddress: props.record.ipAddress,
                  dateCreated: props.record.dateCreated,
                  userAgent: props.record.userAgent,
                  country: props.record.country,
                  state: props.record.state,
                  city: props.record.city,
                  id: props.record.id,
                }}
              />
            </expandContext.Provider>
          ) : (
            <expandContext.Provider
              value={{ itemExpanded, setItemExpanded }}
            >
              <Session_record_mobile
                record={{
                  sessionDuration:
                    props.record.sessionDuration,
                  ipAddress: props.record.ipAddress,
                  dateCreated: props.record.dateCreated,
                  userAgent: props.record.userAgent,
                  country: props.record.country,
                  state: props.record.state,
                  city: props.record.city,
                  id: props.record.id,
                }}
              />
            </expandContext.Provider>
          )}
        </>
        )
      </div>
    </>
  );
};

export default Session_record;

import React from 'react';
import Session_record_small from './session_record_small';
import Session_record_large from './session_record_large';
import { useState, useContext, createContext } from 'react';

interface ExpandContextType {
    itemExpanded: boolean;
    setItemExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const expandContext = createContext(null);
const Session_record = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    record: {
      sessionDuration: number;
      ipAddress: string;
      dateCreated: Date;
      userAgent: string;
      id: number;
    };
  }
) => {
  const [itemExpanded, setItemExpanded] = useState(false);

  return (
    <>
      <div>
        {itemExpanded ? (
          <expandContext.Provider
            value={{ itemExpanded, setItemExpanded }}
          >
            <Session_record_large
              record={{
                sessionDuration:
                  props.record.sessionDuration,
                ipAddress: props.record.ipAddress,
                dateCreated: props.record.dateCreated,
                userAgent: props.record.userAgent,
                id: props.record.id,
              }}
            />
          </expandContext.Provider>
        ) : (
          <expandContext.Provider
            value={{ itemExpanded, setItemExpanded }}
          >
            <Session_record_small
              record={{
                sessionDuration:
                  props.record.sessionDuration,
                ipAddress: props.record.ipAddress,
                dateCreated: props.record.dateCreated,
                id: props.record.id,
              }}
            />
          </expandContext.Provider>
        )}
      </div>
    </>
  );
};

export default Session_record;

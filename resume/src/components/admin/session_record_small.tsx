import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { expandContext } from './session_record';
import { useContext } from 'react';
const Session_record_small = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    record: {
      sessionDuration: number;
      ipAddress: string;
      dateCreated: Date;
      id: number;
    };
  }
) => {
  interface ExpandContextType {
    itemExpanded: boolean;
    setItemExpanded: React.Dispatch<
      React.SetStateAction<boolean>
    >;
  }
  const { itemExpanded, setItemExpanded } =
    useContext<ExpandContextType>(
      expandContext as React.Context<ExpandContextType>
    );
  const expand = () => {
    const value = itemExpanded ? false : true;
    setItemExpanded(value);
  };
  const { sessionDuration, ipAddress, dateCreated, id } =
    props.record;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (sessionDuration > 0) {
    const sessionDurationSeconds = Math.floor(
      sessionDuration / 1000
    );
    hours = Math.floor(sessionDurationSeconds / 3600);
    minutes = Math.floor(
      (sessionDurationSeconds % 3600) / 60
    );
    seconds = sessionDurationSeconds % 60;
  }
  const sessionDurationFormated = `${hours}:${minutes}:${seconds}`;
  return (
    <>
      <div className="my-5 flex h-auto w-full flex-col overflow-hidden rounded-2xl border border-stone-800 bg-[#0D0D0D] pt-10">
        <div className="mb-2 flex flex-row">
          <div className="mx-auto ml-10 flex h-full flex-col justify-center">
            <p className="mb-2 font-bold text-violet-300">
              {' '}
              IP Address{' '}
            </p>
            <p> {ipAddress} </p>
          </div>
          <div className="m-auto flex h-full flex-col justify-center self-center">
            <p className="mb-2 font-bold text-violet-300">
              {' '}
              Session Start Date{' '}
            </p>
            <p> {dateCreated.toDateString()} </p>
          </div>
          <div className="ml-auto mr-10 flex h-full flex-col justify-center self-end">
            <p className="mb-2 font-bold text-violet-300">
              {' '}
              Session Duration{' '}
            </p>
            <p>
              {sessionDuration > 0
                ? sessionDurationFormated
                : '00:00:00'}{' '}
            </p>
          </div>
        </div>
        <div
          onClick={expand}
          className="w-full cursor-pointer pb-5 pt-5 text-center"
        >
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Session_record_small;
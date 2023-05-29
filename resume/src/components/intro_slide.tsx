import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Intro_slide = () => {
  return (
    <>
      <div
        id="intro_slide"
        className="sm:px-0 px-10 sm:relative sm:col-start-2 sm:col-end-4 sm:bg-transparent"
      >
        <div
          id="page_home_marker"
          className="text-sm mb-[20px] flex w-[100px] sm:w-[130px] flex-row justify-center rounded-full border border-neutral-400 sm:px-4 sm:py-2 hover:cursor-pointer"
        >
          <p className="text-center text-neutral-400">
            <FontAwesomeIcon
              icon={faHome}
              className="pr-[10px]"
            />
            Home{' '}
          </p>
        </div>

        <p className="font-bold sm:text-[60px]">
          Hello I'm{' '}
          <span className="font-bold text-violet-400">
            Edwin Mundo
          </span>
          ,
        </p>
        <p className="font-bold sm:text-[60px]">
          A Software and Systems Engineer Skilled in
          Full-stack Web Development.
        </p>
        <p className="text-stone-400 mt-[30px] sm:mt-[50px] sm:text-2xl">
          With expertise in creating robust and scalable
          solutions, I strive to deliver impactful and
          efficient applications.
        </p>
        <div className="mt-24 sm:mt-60 flex flex-row">
          <div className="pr-[50px]">
            <p className="sm:text-[100px] text-[2.5rem] font-bold text-violet-400">
              {' '}
              10+{' '}
            </p>
            <p className="text-stone-400">
              {' '}
              YEARS OF EXPERIENCE{' '}
            </p>
          </div>
          <div className="pr-[50px]">
            <p className="sm:text-[100px] text-[2.5rem]  font-bold text-violet-400">
              {' '}
              4+{' '}
            </p>
            <p className="text-stone-400">
              {' '}
              YEARS OF CONTRACTING{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro_slide;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Intro_slide = () => {
  return (
    <>
      <div
        id="intro_slide"
        className="px-10 xl:relative xl:col-start-2 xl:col-end-4 xl:bg-transparent xl:px-0"
      >
        <div
          id="page_home_marker"
          className="mb-[20px] flex w-[100px] flex-row justify-center rounded-full border border-neutral-400 text-sm hover:cursor-pointer xl:w-[130px] xl:px-4 xl:py-2"
        >
          <p className="text-center text-neutral-400">
            <FontAwesomeIcon
              icon={faHome}
              className="pr-[10px]"
            />
            Home{' '}
          </p>
        </div>

        <p className="font-bold xl:text-[60px]">
          Hello I'm{' '}
          <span className="font-bold text-violet-400">
            Edwin Mundo
          </span>
          ,
        </p>
        <p className="font-bold xl:text-[60px]">
          A Software and Systems Engineer Skilled in
          Full-stack Web Development.
        </p>
        <p className="mt-[30px] text-stone-400 xl:mt-[50px] xl:text-2xl">
          With expertise in creating robust and scalable
          solutions, I strive to deliver impactful and
          efficient applications.
        </p>
        <div className="mt-24 flex flex-row xl:mt-60">
          <div className="pr-[50px]">
            <p className="text-[2.5rem] font-bold text-violet-400 xl:text-[100px]">
              {' '}
              10+{' '}
            </p>
            <p className="text-stone-400">
              {' '}
              YEARS OF EXPERIENCE{' '}
            </p>
          </div>
          <div className="pr-[50px]">
            <p className="text-[2.5rem] font-bold  text-violet-400 xl:text-[100px]">
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const About_us_slide = () => {
  return (
    <>
      <div
        id="about_us_content"
        className="mt-[50px] px-10 xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:mt-0 xl:px-0"
      >
        <div
          id="page_about_marker"
          className="mb-[20px] flex w-[100px] cursor-default flex-row justify-center rounded-full border border-neutral-400 hover:cursor-pointer xl:w-[130px] xl:px-4 xl:py-2"
        >
          <p className="text-center text-neutral-400">
            <FontAwesomeIcon
              className="pr-[10px]"
              icon={faUser}
            />
            About
          </p>
        </div>
        <p className="font-bold xl:pt-[20px] xl:text-[60px]">
          {' '}
          Finding{' '}
          <span className="text-violet-400">
            simple solutions
          </span>{' '}
          and favoring straightforward designes is a
          fundamental.
        </p>
        <p className="text-neutral-400 xl:mt-[50px] xl:text-2xl">
          Seeking simple solutions and straightforward
          designs, is a guiding philosophy for me. Simple
          code is easier to understand, maintain, and debug,
          leading to improved collaboration, efficiency in
          development, and robust software. Simple solutions
          and straightforward designs make code easier to
          comprehend. This ultimately leads to better
          outcomes in the software development process.
        </p>
        <p className="mt-[10px] text-neutral-400 xl:text-2xl">
          <span className="font-bold text-neutral-400 underline">
            This is what I strive for.
          </span>
        </p>
      </div>
    </>
  );
};

export default About_us_slide;

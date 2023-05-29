import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const About_us_slide = () => {
  return (
    <>
      <div
        id="about_us_content"
        className="sm:col-start-2 sm:col-end-4 sm:row-start-2 mt-[50px] sm:mt-0 px-10 sm:px-0"
      >
        <div
          id="page_about_marker"
          className="mb-[20px] flex w-[100px] sm:w-[130px] cursor-default flex-row justify-center rounded-full border border-neutral-400 sm:px-4 sm:py-2 hover:cursor-pointer"
        >
          <p className="text-center text-neutral-400">
            <FontAwesomeIcon
              className="pr-[10px]"
              icon={faUser}
            />
            About
          </p>
        </div>
        <p className="sm:pt-[20px] sm:text-[60px] font-bold">
          {' '}
          Finding{' '}
          <span className="text-violet-400">
            simple solutions
          </span>{' '}
          and favoring straightforward designes is a
          fundamental.
        </p>
        <p className="sm:mt-[50px] sm:text-2xl text-neutral-400">
          Seeking simple solutions and straightforward
          designs, is a guiding philosophy for me. Simple
          code is easier to understand, maintain, and debug,
          leading to improved collaboration, efficiency in
          development, and robust software. Simple solutions
          and straightforward designs make code easier to
          comprehend. This ultimately leads to better
          outcomes in the software development process.
        </p>
        <p className="mt-[10px] sm:text-2xl text-neutral-400">
          <span className="font-bold text-neutral-400 underline">
            This is what I strive for.
          </span>
        </p>
      </div>
    </>
  );
};

export default About_us_slide;

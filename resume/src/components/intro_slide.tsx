import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Intro_slide = () => {
  useEffect(() => {
    function update_grid_cell_size() {
      let intro_slide_element =
        document.getElementById('intro_slide');
      let profile_box_element =
        document.getElementById('profile_box');
      if (intro_slide_element) {
        if (profile_box_element) {
          let profile_bounding =
            profile_box_element.getBoundingClientRect();
          intro_slide_element.style.top =
            profile_bounding.top - 30 + 'px';
        }
      }
    }

    update_grid_cell_size();
    window.addEventListener(
      'resize',
      update_grid_cell_size
    );

    return () => {
      window.removeEventListener(
        'resize',
        update_grid_cell_size
      );
    };
  }, []);

  return (
    <>
      <div
        id="intro_slide"
        className="relative col-start-2 col-end-4 bg-transparent"
      >
        <div
          id="page_home_marker"
          className="mb-[20px] flex w-[130px] flex-row justify-center rounded-full border border-neutral-400 px-4 py-2"
        >
          <p className="text-center text-neutral-400">
            <FontAwesomeIcon
              icon={faHome}
              className="pr-[10px]"
            />
            Home{' '}
          </p>
        </div>

        <p className="font-bold xl:text-[30px]  2xl:text-[60px]">
          Hello I'm{' '}
          <span className="font-bold text-violet-400">
            Edwin Mundo
          </span>
          ,
        </p>
        <p className="font-bold xl:text-[30px] 2xl:text-[60px]">
          A Software and Systems Engineer Skilled in
          Full-stack Web Development.
        </p>
        <p className="text-stone-400 xl:mt-[30px] xl:text-2xl 2xl:mt-[50px] 2xl:text-2xl">
          With expertise in creating robust and scalable
          solutions, I strive to deliver impactful and
          efficient applications.
        </p>
        <div className="mt-60 flex flex-row">
          <div className="pr-[50px]">
            <p className="text-[100px] text-violet-400">
              {' '}
              10+{' '}
            </p>
            <p className="text-stone-400">
              {' '}
              YEARS OF EXPERIENCE{' '}
            </p>
          </div>
          <div className="pr-[50px]">
            <p className="text-[100px] text-violet-400">
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

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faBolt,
  faList,
} from '@fortawesome/free-solid-svg-icons';
const Nav_bar = () => {
  useEffect(() => {
    function update_grid_cell_size() {
      let element =
        document.getElementsByClassName('slide-deck');
      if (element[0]) {
        let grid_bounding =
          element[0].getBoundingClientRect();
        let grid_width = grid_bounding.width;
        let nav_pos = grid_width - 45;
        let nav_element =
          document.getElementById('nav_bar');
        if (nav_element) {
          let nav_bounding =
            nav_element.getBoundingClientRect();
          let nav_top_pos =
            window.innerHeight / 2 -
            nav_bounding.height / 2;
          nav_element.style.top = nav_top_pos + 'px';
          nav_element.style.left = nav_pos + 'px';
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
        className="h-200px fixed flex flex-col rounded-full border px-[20px] py-[20px]"
        id="nav_bar"
      >
        <FontAwesomeIcon
          icon={faHome}
          className="cursor-pointer py-[10px] text-2xl text-white"
        />
        <FontAwesomeIcon
          icon={faUser}
          className="cursor-pointer py-[10px] text-2xl text-white"
        />
        <FontAwesomeIcon
          icon={faBolt}
          className="cursor-pointer py-[10px] text-2xl text-white"
        />
        <FontAwesomeIcon
          icon={faList}
          className="cursor-pointer py-[10px] text-2xl text-white"
        />
      </div>
    </>
  );
};

export default Nav_bar;

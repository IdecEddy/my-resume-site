import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faBolt,
  faList,
} from '@fortawesome/free-solid-svg-icons';
const Nav_bar = () => {
  // This is used to move the navbar with the resizeing of the screen.
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

  const [menu_state_list, set_state_list] = useState<
    string[]
  >(['unset', 'unset']);

  useEffect(() => {
    console.log(menu_state_list);
    const enabled_element = document.getElementById(
      menu_state_list[0]!
    );
    const disabled_element = document.getElementById(
      menu_state_list[1]!
    );

    if (enabled_element != null) {
      enabled_element.style.color = 'rgb(167 139 250)';
    }
    if (disabled_element != null) {
      disabled_element.style.color = 'rgb(163 163 163)';
    }
  }, [menu_state_list]);

  function navTo(nav_to_id: string, index: number) {
    const tmp_state_list = [...menu_state_list];
    tmp_state_list[0] = 'nav_' + index;
    tmp_state_list[1] = menu_state_list[0] as string;
    set_state_list(tmp_state_list);
    if (typeof window !== 'undefined') {
      const scroll_to_element =
        document.getElementById(nav_to_id);
      if (scroll_to_element) {
        scroll_to_element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }

  const menuIcons = [
    {
      icon_name: faHome,
      active: false,
      nav_to_link: 'page_home_marker',
    },
    {
      icon_name: faUser,
      active: false,
      nav_to_link: 'page_about_marker',
    },
    {
      icon_name: faBolt,
      active: false,
      nav_to_link: 'page_timeline_marker',
    },
    {
      icon_name: faList,
      active: false,
      nav_to_link: 'page_services_marker',
    },
  ];

  return (
    <>
      <div
        className="h-200px fixed flex flex-col rounded-full border border-neutral-400 px-[20px] py-[20px]"
        id="nav_bar"
      >
        {menuIcons.map((item, index) => (
          <FontAwesomeIcon
            key={index}
            id={'nav_' + index}
            icon={item.icon_name}
            className={
              'cursor-pointer py-[10px] text-2xl hover:text-violet-400 ' +
              (item.active
                ? 'text-violet-400'
                : 'text-neutral-400')
            }
            onClick={() => navTo(item.nav_to_link, index)}
          />
        ))}
      </div>
    </>
  );
};

export default Nav_bar;

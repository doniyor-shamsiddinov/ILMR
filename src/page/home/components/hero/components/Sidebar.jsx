import React from 'react';
import SidebarBtn from '../../../../../components/SidebarBtn';
import SidebarEye from '../../../../../components/SidebarEye';
import SidebarLanguage from '../../../../../components/SidebarLanguage';
import SidebarScroll from './SidebarScroll';
import SidebarSocials from './SidebarSocials';

import './Sidebar.scss';

const Sidebar = () => {
  return (
	  <div className="sidebar">
		  <SidebarBtn/>
		  <SidebarEye/>
		  <SidebarLanguage/>
		  <SidebarSocials/>
		  <SidebarScroll/>
	  </div>
  )
};

export default Sidebar;

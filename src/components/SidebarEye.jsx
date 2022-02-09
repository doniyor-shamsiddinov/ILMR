import React, { useState } from 'react';
import './SidebarEye.scss';

const SidebarEye = () => {
	const [eyeToggle, setEyeToggle] = useState(false);
  return (
	<div className='sidebar__eye' onClick={()=> setEyeToggle(!eyeToggle)} >
	  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/	svg">
		  <path id='eye-outer' d="M1.5 18C1.5 18 7.5 6 18 6C28.5 6 34.5 18 34.5 18C34.5 18 28.5 30 18 30C7.5 30 1.5 18 1.5 18Z" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
		  <path id='eye-inner' d="M18 22.5C20.4853 22.5 22.5 20.4853 22.5 18C22.5 15.5147 20.4853 13.5 18 13.5C15.5147 13.5 13.5 15.5147 13.5 18C13.5 20.4853 15.5147 22.5 18 22.5Z" stroke="" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
	  </svg>
	  <div className={`${eyeToggle ? 'eye__options eye__show': 'eye__options'}`}>
		  <div className="eye__option">A+</div>
		  <div className="eye__option">A-</div>
	  </div>
	</div>
  )
};

export default SidebarEye;

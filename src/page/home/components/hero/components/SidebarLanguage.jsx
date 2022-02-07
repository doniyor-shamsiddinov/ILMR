import React, { useState } from 'react';

const SidebarLanguage = () => {
	const [langToggle, setLangToggle] = useState(false)
  return (
	<div className="sidebar__language" onClick={() => setLangToggle(!langToggle)} >
		<span>UZB</span>
			<div className={`${langToggle ? 'language__options lang__show': 'language__options'}`}>
				<div class="language__option">ENG</div>
				<div class="language__option">RUS</div>
	  		</div>
	</div>
  )
};

export default SidebarLanguage;

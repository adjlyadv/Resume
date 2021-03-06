import React from 'react';
import { Avatar } from 'antd';
import './style/Education.less';

const Education = () => {
  return(
    <div className="education">
      <Avatar
        className="hdu-icon"
        src="src/assets/hdu.jpg"
        size={120}
      />
      <span className="m-b-20" >杭州电子科技大学</span>
      <span className="hdu-title m-b-20" >笃学力行，守正求新</span>
      <span className="m-b-20">2016.9 - 2020.6</span>
      <span>计算机科学与技术应届毕业生</span>

    </div>
  )
}

export default Education;
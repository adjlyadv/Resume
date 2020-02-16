import React from 'react';
import { Avatar } from 'antd';
import './style/AboutMe.less';

const AboutMe = () => {
  return (
    <div
      className="about-me"
    >
      <Avatar
        className="avatar"
        src="src/assets/avatar.jpg"
        size={160}
      />
      <p className="aboutme-title" key="title">
        所谓人的成长，就是战胜自己不成熟的过去
      </p>
      <div className="split" key="split" />
      <p key="name">我的名字是张琳</p>
      <p key="work">20年应届毕业生，前端工程师</p>
      <a className="email" href="mailto: adjlyadv@gmail.com">adjlyadv@gmail.com</a>
    </div>
  )
}

export default AboutMe;
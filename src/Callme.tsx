import React from 'react';
import { Icon, Tooltip } from 'antd';
import qrcode from './assets/wechat-qrcode.png';
import './style/Callme.less';

const Callme = () => {
  return(
    <div className="callme-container">
      <div className="callme-title">
        雄关漫道真如铁，而今迈步从头越
      </div>
      <div className="callme-text">
        所见即所得
      </div>
      <div className="callme-text">
        用代码改变这个世界
      </div>
      <div className="call-me-icons">
        <a href="https://github.com/adjlyadv" target="_blank"><Icon  className="callme-icon" type="github" /></a>
        <a href="mailto: adj.lin@foxmail.com"> <Icon className="callme-icon" type="mail" /></a>
        <a href="https://www.linkedin.com/in/%E7%90%B3-%E5%BC%A0-bb257a1a2/" target="_blank"><Icon className="callme-icon" type="linkedin" /></a>
        <Tooltip className="wechat-img" title={<img className="wechat-qrcode" src={qrcode} />} ><Icon className="callme-icon" type="wechat" /></Tooltip>
      </div>
    </div>
  )
}

export default Callme;
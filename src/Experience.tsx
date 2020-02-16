import React from 'react';
import ExperienceCard from './ExperienceCard';
import './style/Experience.less'
import { Carousel } from 'antd';

const Experience = () => {
  return(
      <div className="experience-container">
        <Carousel
          autoplay={true}
        >
          <ExperienceCard
            key="company"
            title="九章算法（杭州）科技有限公司"
          >
            <ul>
              <li>修复一些遗留下来的bug，前端和后端</li>
              <li>后台一些接口的设计和实现，使用Django框架完成</li>
              <li>前端新功能的开发和原型图实现，使用React, Mobx， antd完成</li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            key="cat"
            title="LintCode 领扣CAT（Coding Ability Test）项目"
          >
            <ul>
              <li>数据库和model设计</li>
              <li>基本的事务逻辑设计，包括判定用户是否挑战成功或者失败，以及后续的处理</li>
              <li>项目首页原型图的实现，使用响应式布局。</li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            title="九章算法帐号与微信帐号绑定并使用微信扫码登陆"
            key="wechat"
          >
            <ul>
              <li>查阅微信文档，熟悉微信接入的大致流程，在数据库中加入微信openid字段</li>
              <li>确定接入方案，设计restful接口，返回需要的数据。</li>
              <li>使用轮询方式，用户微信扫码后自动与帐号绑定，将负责部分组件化，以便后续调用。</li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            title="Chat Bot 聊天与工单机器人的前后端搭建"
            key="chat bot"
          >
            <ul>
              <li>设计工单的数据库Model</li>
              <li>设计交互逻辑，使用axios完成前后端数据交互</li>
              <li>使用webpack进行打包，按需引入antd</li>
            </ul>
            <a onClick={() => window.open("https://github.com/Doragd/Chinese-Chatbot-PyTorch-Implementation")}>点击在github上查看</a>
          </ExperienceCard>
        </Carousel>
      </div>
  )
}

export default Experience;
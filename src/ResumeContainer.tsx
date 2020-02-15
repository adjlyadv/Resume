import React from 'react';
import { Tooltip } from 'antd';
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Callme from './Callme';
import './style/ResumeContainer.less'

class ResumeContainer extends React.Component {

  state = {
    currentIndex: 0
  }

  onWheel = (e: { deltaY: number; }) => {

    if (e.deltaY < 0 && this.state.currentIndex !== 0) {
      this.setState({ currentIndex: (this.state.currentIndex - 1) % this.cardList.length });
    }
    if (e.deltaY > 0 && this.state.currentIndex !== this.cardList.length - 1) {
      this.setState({ currentIndex: (this.state.currentIndex + 1) % this.cardList.length})
    }
  }
  
  cardList = [
    {component: <AboutMe />, title: "", background: "#87b0a5"},
    {component: <Education />, title: "教育经历", background: "#945c4c"},
    {component: <Experience />, title: "工作和项目经历", background: "#a29971"},
    {component: <Callme />, title: "关于我", background: "#758a99"}
  ]

  dots = [
    "首页",
    "教育经历",
    "工作和项目经历",
    "关于我"
  ]
  
  changePage = (value: number) => {
    this.setState({ currentIndex: value })
  }

  render() {
    const screenHeight = document.documentElement.clientHeight;

    return(
      <div className="resume-container" onWheel={this.onWheel}>
        {this.cardList.map((item, index) => 
          <div className="resume-item" key={index} style={{transform: `translateY(${screenHeight * (index - this.state.currentIndex)}px)`, background: item.background}}>
            <div className="title">
              {item.title}
            </div>
            {item.component}
          </div>
        )}
        <div className="dots">{this.dots.map((item, index) => (
          <Tooltip placement="left" title={item} >
          <div key={index + "dot"} onClick={() => this.changePage(index)} className={`nav-dot ${this.state.currentIndex === index && "nav-dot-selected"}`} />
          </Tooltip>)
          )}</div>
      </div>
    )
  }
}

export default ResumeContainer
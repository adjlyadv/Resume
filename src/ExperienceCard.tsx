import React from 'react';
import { Card } from 'antd';
import './style/Experience.less'

interface props {
  title: String,
  
} 
class ExperienceCard extends React.Component<props> {
  render() {
    return(
      <Card className="experience-card">
        <div className="experience-card-title">{this.props.title}</div>
        <div className="experience-card-content">{this.props.children}</div>
      </Card>
    )
  }
}


export default ExperienceCard;
import React,{Component} from 'react'
import "assets/sass/App.scss";
import "antd/dist/antd.css";
import {Row,Col,Card,Typography, Avatar} from 'antd'
import Skill from 'components/Skill'
import pic from 'assets/images/coding.svg'
import webdesign from 'assets/images/webdesign.png'
import softdev from 'assets/images/softdev.png'
import { Icon} from '@iconify/react';
/* import codeOutlined from '@iconify/icons-ant-design/code-outlined'; 
 */
 const{Title} = Typography;
const{Meta} = Card; 
class About extends Component{
    render(){
        return (
          <div className="about">
            <Row>
              <Col span={8} offset={4}>
                <img src={pic} className="profile__about" />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <div className="about-content">
                  <h1 className="about-header">About me</h1>
                  <span>
                    Hello, I’m Soe Thiha, web-developer based on Pyin Oo Lwin. I
                    have rich experience in web site design & building and
                    customization. Also I am good at
                  </span>
                  <Skill />
                </div>
              </Col>
            </Row>

            <div className="service">
              <Title className="service-header">What I Do</Title>
              <Row gutter={16}>
                <Col xs={{ span: 20 }} lg={{ span: 6 ,offset:5}} >
                  <Card bordered={false} hoverable={true}>
                    <Meta
                      avatar={<Avatar src={webdesign} />}
                      title="Web Design"
                      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
                    />
                  </Card>
                </Col>
                <Col xs={{ span: 20 }} lg={{ span: 6 }}>
                  <Card bordered={false} hoverable={true}>
                    <Meta
                      avatar={
                        <Icon
/*                           icon={codeOutlined}
 */                          style={{ color: "#1890ff", fontSize: "30px" }}
                        />
                      }
                      title="Web Development"
                      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
                    />
                  </Card>
                </Col>
                <Col xs={{ span: 20 }} lg={{ span: 6 }}>
                  <Card bordered={false} hoverable={true}>
                    <Meta
                      avatar={<Avatar src={softdev} />}
                      title="App Devlopment"
                      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
            <Row gutter={16}>
              <Col xs={{span:20}} lg={{span:9 , offset:5}} >
                <Card bordered ={false} hoverable={true}>
                  
                </Card>
              </Col>
            </Row>
          </div>
        );
    }
}

export default About
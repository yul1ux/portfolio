import React,{Component} from 'react'
import "assets/sass/App.css";
import "antd/dist/antd.css";
import profilepic from "assets/images/profile3.png";
import { Row,Col} from "antd";
import Typewriter from "typewriter-effect";

class Home extends Component{
    render(){
        return (
          <div className="home">
            <Row justify="end">
              <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                <h1 className="hello">Soe Thiha</h1>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,

                    wrapperClassName: "text",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Hello,my name is Soe Thiha.I'm 17 years old <span style='color:#1890ff;font-size:35px;'><strong>Web/Android </strong></span>developer"
                      )
                      .pauseFor(25000)
                      .deleteAll()

                      .start();
                  }}
                />
              </Col>
              <Col span={8}>
                <img src={profilepic} />
                {/*                 <Avatar src={profilepic} size={500} className="profile" />
                 */}{" "}
              </Col>
              
            </Row>
            <Row justify="center">
              <Col>
                <button className="home-btn"><a href="./contents/thiha.pdf" download>Download CV</a></button>
              </Col>
            </Row>
          </div>
        );
    }
}

export default Home
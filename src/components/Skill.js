import React,{Component} from 'react';
import {Progress,Row,Col} from 'antd';

const tskill = [
      
        {
            name : 'Javascript',
            percent : 80
        },
        {
            name : 'Php',
            percent : 30
        },
        {
            name : 'React',
            percent : 85
        },
        {
          name: 'Node',
          percent:60
        },
        {
          name: 'MongoDB',
          percent:'70'
        },
        {
          name :'Linux',
          percent:'40'
        }
    ];
const pskill = [
    {
        name : 'Team Work',
        percent : 80
    },
    {
        name : 'Communication',
        percent : 65
    },
    {
        name : 'Creative',
        percent :70
    },
    {
        name : 'Handsome',
        percent : 100
    }
]

const TechSkill = () =>{
    return (
      <div>
        {tskill.map((s) => (
          <div>
            <span>{s.name}</span>
            <Progress percent={s.percent} status="active" />
          </div>
        ))}
        
      </div>
    );
}
const ProSkill = () => {
    return (
      <div>
        {pskill.map((p) => (
          <div>
            <span>{p.name}</span>
            <Progress type="circle" percent={p.percent} />
          </div>
        ))}
      </div>
    );
}
class Skill extends Component {
    
    render(){
        return (
          <Row>
            <Col xs={{span:24}} md={{span:24}} lg={{span:18}}>
              <TechSkill />
            </Col>
            
          </Row>
        );
    }
}    

export default Skill
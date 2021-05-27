import React,{Component} from 'react';
import {Layout} from 'antd';
import { Icon, InlineIcon } from '@iconify/react';
import facebookIcon from '@iconify/icons-et/facebook';
import twitterIcon from "@iconify/icons-et/twitter";
import githubFilled from "@iconify/icons-ant-design/github-filled"; 
import 'assets/sass/App.scss';
import "antd/dist/antd.css";
const{Header} = Layout
class Social extends Component {
    render(){
        return (
          <Header className="social">
            <a href="https://web.facebook.com/zay.xtuncovra" target="_blank">
              <Icon icon={facebookIcon} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Icon icon={twitterIcon} />
            </a>
             <a href="https://github.com/yul1ux" target="_blank">
              <Icon icon={githubFilled} style={{ fontSize: "32px" }} />
            </a> 
          </Header>
        );
    }
}

export default Social
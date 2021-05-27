
import React,{Component} from "react";
import "assets/sass/App.scss";
import "antd/dist/antd.css";
import {Layout} from 'antd';
import SiderDemo from 'components/Menu'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from "pages/Home"
import Social from "components/Social"
import About from "pages/About"  

class App extends Component{
  render(){
    return (
      <div className="App">
        <Layout>
          <Router>
            <SiderDemo />
             <Layout>
              <Route exact path="/">
                <Social /> 
                <Home />
              </Route>
               <Route path="/about">
                <About />
              </Route>  
            </Layout> 
          </Router>
        </Layout>
      </div>
    );
  }
  
   
  

}

export default App;

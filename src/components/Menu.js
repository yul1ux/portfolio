import React from 'react';
import {NavLink} from 'react-router-dom';
import 'antd/dist/antd.css';
import 'assets/sass/App.scss';
import { Layout, Menu, } from 'antd';



const {Sider } = Layout;
const navItem = [
  {
    key: "/",
    name: "Home",
    path: "/",
  },
  {
    key: "/about",
    name: "About",
    path: "/about",
  },
  {
    key: "/portfolio",
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    key: "/service",
    name: "Service",
    path: "/service",
  },
  {
    key: "/blog",
    name: "Blog",
    path: "/blog",
  },
  {
    key: "/contact",
    name: "Contact",
    path: "/contact",
  },
];

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          position: "fixed",
          background: "#343090",
          width: "150px",
          maxWidth: "150px",
          minWidth: "150px",
          zIndex: 1,
        }}
      >
        <div className="navbar">
          <Menu
            style={{
              height: "100vh",
              width: "150px",
              border: "none",
              background: "#343090",
              marginTop: "10vh",
            }}
            mode="inline"
            defaultSelectedKeys={["/"]}
          >
            {navItem.map((i) => (
              <Menu.Item
                key={i.key}
                style={{ background: "none", textAlign: "center" }}
              >
                <NavLink
                  to={i.path}
                  exact={true}
                  activeClassName="selected"
                  className="menu-item"
                >
                  {i.name}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
    );
  }
}

export default SiderDemo

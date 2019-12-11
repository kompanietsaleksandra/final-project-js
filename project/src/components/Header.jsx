import React from "react";
import  {Menu, Layout} from "antd";
import {Link, NavLink} from "react-router-dom";

const {Header} = Layout;

export const  HeaderComponent = () => (
        <Header>
            <Link to="/" className="logo"/>
             <Menu
             theme="dark"
             node="horizontal"
             defaultSelectedKeys={['1']}
             >
                 <NavLink to="/" className="nav-film" activeClassName="active">Films</NavLink>
                 <NavLink  to="/schedule" className="nav-schedule" activeClassName="active">Schedule</NavLink>
             </Menu>

           </Header>
);
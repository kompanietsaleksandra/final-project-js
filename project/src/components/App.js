import React from 'react';
import {Layout} from "antd";

import {HeaderComponent} from "./index";
import {MainContainer} from "../routes";

const  {Footer} = Layout;


export const App = () => (
    <Layout className="Layout">
        <HeaderComponent/>
        <MainContainer/>
        <Footer>Ant Design</Footer>
    </Layout>
);



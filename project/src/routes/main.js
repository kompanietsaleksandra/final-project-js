import React from "react";
import {connect} from "react-redux";
import {Layout, Spin, Icon} from "antd";
import {Switch, Route} from "react-router-dom";

import {getMovies} from "../actions";
import {MainPageContainer, MovieContainer, ScheduleContainer} from "../containers";

const {Content} = Layout;

 class Main extends React.Component {

     componentDidMount() {
         this.props.getMovies();
     }

     render() {

        return (
            <Content style={{
                padding: '0 50px'
            }}>
                     <Switch>
                        <Route exact path={"/"} component={MainPageContainer}/>
                         <Route  path={"/movie/:id"} component={MovieContainer}/>
                        <Route  path={"/schedule"} component={ScheduleContainer}/>
                    </Switch>
            </Content>
        )
    }
}

const mapDispatchToProps = {
    getMovies
};



export const MainContainer = connect(null, mapDispatchToProps)(Main);
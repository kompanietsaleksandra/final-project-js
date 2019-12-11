import React from "react";
import {Icon, Spin} from "antd";

import { connect } from "react-redux";
import { getSessions } from "../actions";
import  { dateOptions } from "../constants";
import { SessionsBlock } from "../components";


class Schedule extends React.Component{
    componentDidMount() {
        this.props.getSessions();
    }

    getSessions = () => {
        const {movies, sessions, rooms} = this.props;

        const sessionArr = movies.length && sessions.length && rooms.length ? sessions.map(item => {
            return item.map(elem => ({
                ...elem,
                room: rooms.find(room => room._id === elem.room).name,
                movie: movies.find(movie => movie._id === elem.movie)
            }))
        }) : [];
        return sessionArr.map(item => {
            return item.filter(elem => elem.movie);
        });
    };

    render() {
        const { isLoading } = this.props;

        if (isLoading) {
            return <Spin
                indicator={<Icon
                    type="loading-3-quarters"
                    style={{fontSize: 76}}
                    spin />}/>
        }

        return (
            <div className="schedule">
                {
                    this.getSessions().map((item, i) => (
                        <div className="date-block" key={i}>
                            <h2>{new Date(item[0].date).toLocaleString("ru", dateOptions)}</h2>
                            <SessionsBlock  moviesOnDate={item}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sessions: state.data.sessions,
    isLoading: state.loading.isLoading,
    movies: state.data.movies,
    rooms: state.data.rooms
});

const mapDispatchToProps = {
    getSessions
};

export const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);
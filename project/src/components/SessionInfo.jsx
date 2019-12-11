import  React from "react";

export const SessionInfo = ({room, date}) => (
    <div className="session-info">
        <div>{room}</div>
        <div>{new Date(date).toLocaleTimeString().slice(0, -3)}</div>
    </div>
);
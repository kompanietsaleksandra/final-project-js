import React from "react";

export const InfoBlock = ({ title, content}) => (
    <div className="info-block">
        <div>{title}</div>
        <div>{content}</div>
    </div>
);
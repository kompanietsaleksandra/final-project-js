import React from "react";

export const  Poster = ({ posterLink}) => (
    <div>
        <img src={posterLink} alt="poster"/>
        <div className="btn-buy">Buy ticket</div>
    </div>
);
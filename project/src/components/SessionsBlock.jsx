import React from "react";

import { MovieSession } from "./MovieSessions";

export const SessionsBlock = ({moviesOnDate}) => {
    return moviesOnDate.map((elem) => (
        <MovieSession key={elem._id} session={elem} />))
};


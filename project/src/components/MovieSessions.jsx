import  React, {useState} from "react";

import {ModalBuyTicket} from "./ModalBuyTicket";
import  { SessionInfo} from "./SessionInfo";

export const MovieSession = ({ session}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModel = () => {
        setShowModal(!showModal);
    };

    return (
        <React.Fragment>
            <div className="movie-session">
                <div className="movie-info">
                    <div>
                        <h3>{session.movie.title}</h3>
                        <SessionInfo room={session.room} date={session.date}/>
                        <div className="btn-buy" onClick={toggleShowModel}>Buy ticket</div>
                    </div>
                </div>
                <div>{session.movie.description}</div>
            </div>
            {showModal && <ModalBuyTicket session={session} handleCloseModal={toggleShowModel}/>}
        </React.Fragment>
    );
};
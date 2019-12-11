import axios from "axios";

import  {URL_SESSIONS, SET_SESSIONS, URL_ROOMS, SET_ROOMS} from  "../constants";
import  {loadingFail, isLoading} from "./general";

export const setSessions = (sessions) => ({type: SET_SESSIONS, payload: sessions});
export const setRooms = (rooms) => ({type: SET_ROOMS, payload: rooms});

export const getSessions = () => {
    return dispatch => {
        dispatch(isLoading());

        Promise.all([axios.get(URL_SESSIONS), axios.get(URL_ROOMS)])
            .then(([sessions, rooms]) => {
                dispatch(setSessions(sessions.data.session));
                dispatch(setRooms(rooms.data.rooms));
            })
            .catch((error) => {
                dispatch(loadingFail());
                console.error(error)
            });
    }
};
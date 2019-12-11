import React from "react";
import {Spin, Icon} from "antd";

import  axios from "axios";
import {URL_SPACE_SHADOW} from "../constants";
import { getSortedPlaces, getRowsArray, getRandomInt} from "../utils";
import {Places, SessionInfo, Form} from "./index";


export class  ModalContent extends React.Component {
    state = {
        isLoading: true,
        space: [],
        chosenPlace: null,
        showForm: false,
        user: null
    };

     componentDidMount() {
        axios.get(`${URL_SPACE_SHADOW}?session=${this.props.session._id}`)
            .then(({ data }) => {
                this.setLoadingDone();
                this.getPlaceArray(data.space);
                })
            .catch((error) => {
                this.setLoadingDone();
                console.error(error)
            });
    }

    setLoadingDone = () => this.setState({isLoading: false});

     getPlaceArray = (arr) => {
         const sortedByRow = getSortedPlaces(arr, "row");
         const rows = getRowsArray(sortedByRow);
         const rowsSortedByPlace = rows.map(item => {
             return getSortedPlaces(item, "place")
         });
         this.setState({space: rowsSortedByPlace.map((item => {
             const random = getRandomInt(2,6);
             return  item.map(elem => {
                 if (elem.place % random === 0){
                     return {
                         ...elem,
                         booked: true
                     }
                 }
                 return elem;
             });
         }))
     });
     };

     handleChosePlace = (data) => {
        this.setState({chosenPlace: data});
     };

    handleOpenForm = () => {
        this.setState({showForm: true});
    };

    handleClickBuy = (data) => {
        this.setState({user: data})
    };

    render() {
        const { isLoading, space, chosenPlace, showForm, user } = this.state;
        const  {session, handleCloseModal} = this.props;

        return (
            <div className="modal-background">
                <div className="modal-content">
                    {isLoading
                    ? <Spin indicator={<Icon type="loading-3-quarters" style={{fontSize: 76}} spin /> }/>
                        : <div>
                            <h2>{session.movie.title}</h2>
                            <SessionInfo room={session.room} date={session.date}/>
                            {
                                user
                                    ? <div>
                                    <h2>{user.name} Благодарим за покупку</h2>
                                    <p>Ваш билет на ряд: {chosenPlace.row} ,место: {chosenPlace.place} был отправлен
                                    на указанный вами e-mail {user.email}
                                    </p>
                                    </div>
                                    : <React.Fragment>
                                        <Places space={space} handleChosePlace={this.handleChosePlace}/>
                                        {
                                            chosenPlace &&
                                            <div>
                                                <h2>Выбрано ряд: {chosenPlace.row} место: {chosenPlace.place}</h2>
                                                {
                                                    showForm
                                                        ? <Form handleSubmitForm={this.handleClickBuy}/>
                                                        : <div className="btn-buy" onClick={this.handleOpenForm}>Оформить билет</div>
                                                }
                                            </div>
                                        }
                                    </React.Fragment>
                            }
                            <span className="btn-close" onClick={handleCloseModal}>
                                <Icon type="close"/>
                            </span>
                        </div>
                    }
                </div>
            </div>
        )
    }

}
import  React, {useState} from "react";
import {connect} from "react-redux";
import { Spin, Icon } from "antd";

import {MovieList, Filter} from "../components";

const  MainPage = ({movies, genres, isLoading}) => {
    const [filteredMovies, setFilteredMovies] = useState([]);

    if (isLoading) {
        return <Spin indicator={<Icon type="loading-3-quartes" style={{fontSize: 76}} spin />}/>
    }

    return (

        <React.Fragment>
            <Filter movies={movies} genres={genres} setFilteredMovies={setFilteredMovies}/>
            <div className={`movie-list${filteredMovies.length ? " jc-fs" : ""}`}>
                {filteredMovies.length
                    ? filteredMovies.map(item => (<MovieList key={item._id} movie={item}/>))
                    : movies.map(item => (<MovieList key={item._id} movie={item}/>))
                }
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres,
    isLoading: state.loading.isLoading
});

export  const  MainPageContainer = connect(mapStateToProps)(MainPage);
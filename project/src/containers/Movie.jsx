import  React, {Component} from "react";
import {connect} from "react-redux";

import {InfoBlock, Poster} from "../components";

class Movie extends Component {
    state = {
        movie: {}
    };

    componentDidMount() {
        const {match, movies} = this.props;
        const movieId = match.params.id;
        const movie = movies.find(item => item._id === movieId);

        this.setState({movie});
    }

    getInfoByArray = (arr) => {
        if (arr[arr.length-1]) {
            return arr.join(", ");
        } else {
            return arr.join(", ").slice(0, -2);
        }
    };

    render() {
        const { movie } = this.state;

        return (
            <div className="movie-page">
                <h1>{movie.title}</h1>
                <div className="movie-info">
                    <Poster posterLink={movie.poster}/>
                    <div>
                        <InfoBlock
                            title="Actors: "
                            content={movie.actors ? this.getInfoByArray(movie.actors) : ""}
                        />
                        <InfoBlock
                            title="Genre: "
                            content={movie.genre ? this.getInfoByArray(movie.genre) : ""}
                        />
                        <InfoBlock
                            title="Country: "
                            content={movie.country ? this.getInfoByArray(movie.country) : ""}
                        />
                        <InfoBlock
                            title="Language: "
                            content={movie.language}
                        />
                        <InfoBlock
                            title="Age: "
                            content={movie.age ? `${movie.age} + `: "No age restrictions"}
                        />
                        <InfoBlock
                            title="Description: "
                            content={movie.description}
                        />
                        <InfoBlock
                            title="Trailer: "
                            content={<iframe
                            width="100%"
                            height="400px"
                            src={movie.trailer}
                            allowFullScreen/>}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie);
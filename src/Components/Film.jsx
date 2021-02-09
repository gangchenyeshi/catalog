import React from 'react';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";

class Film extends React.Component {

    render () {
        return (
            <div>
                {this.props.movieEach.map((movie) => {
                    return (
                        <div>
                        <p>{movie.title}</p>
                        <p>{movie.director}</p>
                        <p>{movie.stars}</p>
                        <img src={`${movie.image}`}></img>
                        <p>{movie.description}</p>
                        </div>
                    )
                    
                })}
            </div>
        );
    }
}
export default Film;
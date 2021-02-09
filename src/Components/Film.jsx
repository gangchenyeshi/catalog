import React from 'react';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";

class Film extends React.Component {

    render () {
        return (
            <div>
                {this.props.movieEach.map((movieDetail) => {
                    return (
                        <div>
                        <p>{movieDetail.title}</p>
                        <p>{movieDetail.director}</p>
                        <p>{movieDetail.stars}</p>
                        <img src={`${movieDetail.image}`}></img>
                        <p>{movieDetail.description}</p>
                        </div>
                    )
                    
                })}
            </div>
        );
    }
}
export default Film;
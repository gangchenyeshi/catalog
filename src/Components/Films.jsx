import React from 'react';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";

class Films extends React.Component {
    render(){
        return(
            <div>
                <ol>
                    {/* <li>{this.state.movies}</li> */}
                    {this.props.mymovie.map((movielist) => { 
                        return <li>
                            <Link to={`/${movielist.id}`}>
                            {movielist.title}
                            </Link>
                            </li>   

                        })
                      }
                
                </ol>
            </div>
        );
    }
}

export default Films
import React, { Component } from 'react';

class Scores extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <ul>
                {this.props.score.map(
                    e => <li><h2 className="names">{e.name}</h2>
                        <span className="likes">Likes : {e.likes} Dislikes : {e.dislikes}</span></li>
                )}
            </ul>
            </>
        );
    }
}
 
export default Scores;
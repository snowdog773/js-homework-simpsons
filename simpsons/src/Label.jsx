import React, { Component } from 'react';

class Label extends Component {
    state = {  } 
    render() { 
        return (
            <span>{this.props.names}</span>
        );
    }
}
 
export default Label;
import React, { Component } from 'react';
import Label from './Label'

class Button extends Component {
    state = {}
    render() { 
        return (
            <button onClick={ () => console.log(this.props.names) }><Label names = {this.props.names}/></button>
        );
    }
}
 
export default Button;

import React, { Component } from 'react';
// import Label from './Label';


class Button extends Component {
    state = {}
    
    
     
    render() { 
        return (
            <>
            <button onClick={ () => this.getQuote() }>
                Button
               
            </button>
            </>
            
        );
    }
}
  /* /* <Label names = {this.props.names}/> */
export default Button;

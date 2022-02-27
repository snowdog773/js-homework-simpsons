import React, { Component } from 'react';
import Button from './Button'

class Main extends Component {
    state = { names : ['Homer', 'Marge', 'Bart']  } 
    render() { 
        return (
            <>
            {this.state.names.map((names) => {
            return <Button names = {names} />
    })}
            </>
        );
    }
}
 
export default Main;
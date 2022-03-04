import React, { Component } from 'react';
// import Button from './Button';
import axios from "axios";

class Main extends Component {
    state = { quote : {}} 

    getQuote = () => { axios.get("https://thesimpsonsquoteapi.glitch.me/quotes").then( 
        (response) => {
        this.setState({quote : response.data[0]});
        console.log(response.data[0]);
    })

        }


        render() {
            return(
                <>
                    <button onClick= {() => this.getQuote() } >Eat My Shorts</button>
                    <div className="text">
                        <p>{this.state.quote.quote}</p>
                        <p>{this.state.quote.character}</p>
                    </div>
                    <img src={this.state.quote.image} alt={this.state.quote.character} />
                </>
            )
        }

    // render() { 
    //     return (
    //         <>
    //         {this.state.names.map((names) => {
    //         return <Button names = {names} getQuote = {getQuote()} />
    // })}
    //         <p>{this.state.quote}</p>
    //         </>
    //     );
    // }
}
 
export default Main;
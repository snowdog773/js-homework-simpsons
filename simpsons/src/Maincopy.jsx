import React, { Component } from 'react';
import Likebutton from './Button';
import axios from "axios";

class Main extends Component {
    state = { quote : {}, style : {}, flexy : "off", score : { homer : {likes:0,dislikes:0}}} 

    getQuote = async () => { await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(  (response) => {
                        this.setState({quote : response.data[0]});
                        console.log(response.data[0]);
                        this.setState({ flexy : "flexy"});
// before the first quote renders there was an empty container on the page. I created a class of "off" for the
// initial render, this sets it to its "flexy" active state.
                        this.state.quote.characterDirection === "Left" ? 
                        this.setState({style : {flexDirection:"row-reverse"}}) :
                        this.setState({style : {flexDirection:"row"}});
  

    this.state.score.push({name: this.state.response.data[0].character,
        likes : 0,
        dislikes : 0});
console.log(this.state.score)


    })
};

                       

        updateLike = (action) => {
            let {likes, dislikes} = this.state.score.homer;
            if (action === "like") likes++;
            if (action === "dislike") dislikes++;
            this.setState({ score: { homer: { likes, dislikes } } });
            console.log(this.state.score.homer)

        
        };
            
        

        render() {
            return(
                <>
                    
                    <div className={this.state.flexy} style={this.state.style}>
                        <div className="text">
                            <p>{this.state.quote.quote}</p>
                            <p>{this.state.quote.character}</p>
                        </div>
                        <img src={this.state.quote.image} alt={this.state.quote.character} />
                    </div>
                    <button onClick= {() => this.getQuote() } >Eat My Shorts</button>
                    <Likebutton updateLike={this.updateLike} />

                    <p>{this.state.counter}</p>
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

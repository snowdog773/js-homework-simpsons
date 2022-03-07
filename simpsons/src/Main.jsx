import React, { Component } from 'react';
import Likebutton from './Button';
import Scores from './Scores'
import axios from "axios";

class Main extends Component {
    state = { quote : {}, style : {}, flexy : "off", score : []} 

    getQuote = async () => { 
                        await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes").then( 
                            (response) =>  {
                        this.setState({quote : response.data[0]});
                        this.setState({ flexy : "flexy"});
// before the first quote renders there was an empty container on the page. I created a class of "off" for the
// initial render, this sets it to its "flexy" active state.
                        this.state.quote.characterDirection === "Left" ? 
                        this.setState({style : {flexDirection:"row-reverse"}}) :
                        this.setState({style : {flexDirection:"row"}});
                       
      }
      )
    };

    updateScore = () => {
// function to check the score array for the current character, and create a character score
// object if one doesn't already exist. NB can I simplify the if statement???
        if (this.state.score.find(e => e.name === this.state.quote.character) === undefined ) 
    {
        this.state.score.push(
        {name: this.state.quote.character,
        likes : 0,
        dislikes : 0}
        
    );
    }
    }

        updateLike = (action) => {

                this.updateScore();
                this.state.score.map( (e) => {
                    if (e.name === this.state.quote.character && action === "like") e.likes++;
                    if (e.name === this.state.quote.character && action === "dislike") e.dislikes++;
                    
                })
                this.setState({});
                //this.setstate is there to force a re-render. Is there a cleaner way to do this?
            }  
            
                

        //** BUG -- The like / dislike keys create an entry in scores with likes and dislikes but
        //** no name when the keys are pressed before the firs quote has been rendered. I need a ternary
        //** to disable the keys when the scores array is empty. */
        
            
        

        render() {
            return(
                <>
                    <div className="outer">
                        <div className={this.state.flexy} style={this.state.style}>
                            <div className="text">
                                <p>{this.state.quote.quote}</p>
                                <p>{this.state.quote.character}</p>
                            </div>
                            <img src={this.state.quote.image} alt={this.state.quote.character} />
                        </div>
                        <div className="scores">
                            <Scores score={this.state.score} />
                        </div>
                    </div>
                    <button onClick= {() => this.getQuote() } >Eat My Shorts</button>
                    <Likebutton updateLike={this.updateLike} />
                </>
            )
        
        }
    }

export default Main;

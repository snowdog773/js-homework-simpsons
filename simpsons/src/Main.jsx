import React, { Component } from "react";
import Likebutton from "./Button";
import Scores from "./Scores";
import axios from "axios";

class Main extends Component {
  state = { quote: undefined, style: {}, flexy: "off", score: [], votes: {} };

  getQuote = async () => {
    await axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => {
        // before the first quote renders there was an empty container on the page. I created a
        //  class of "off" for the initial render, this sets it to its "flexy" active state.
        window.screen.width < 600
          ? this.setState({
              style: { flexDirection: "column-reverse" },
              quote: response.data[0],
              flexy: "flexy",
            })
          : response.data[0].characterDirection === "Left"
          ? this.setState({
              style: { flexDirection: "row-reverse" },
              quote: response.data[0],
              flexy: "flexy",
            })
          : this.setState({
              style: { flexDirection: "row" },
              quote: response.data[0],
              flexy: "flexy",
            });
      });
  };

  updateLike = (action) => {
    const votes = { ...this.state.votes };
    // spread operator creates a exact clone of this.state.votes to work on

    const { character } = this.state.quote;
    if (action === "like") {
      votes[character + "like"] = votes[character + "like"]
        ? votes[character + "like"] + 1
        : 1;
    } else {
      votes[character + "dislike"] = votes[character + "dislike"]
        ? votes[character + "dislike"] + 1
        : 1;
    }
    this.setState({ votes });
  };

  render() {
    return (
      <>
        {this.state.quote && ( // this whole section up to line 80 only renders if this.state.quote is truthy
          <>
            <div className={this.state.flexy} style={this.state.style}>
              <div className="text">
                <p>{this.state.quote.quote}</p>
                <p>{this.state.quote.character}</p>
              </div>
              <img
                src={this.state.quote.image}
                alt={this.state.quote.character}
              />
            </div>
            <div className="scores">
              {(this.state.votes[this.state.quote.character + "like"] ||
                this.state.votes[this.state.quote.character + "dislike"]) && (
                <Scores
                  like={this.state.votes[this.state.quote.character + "like"]}
                  dislike={
                    this.state.votes[this.state.quote.character + "dislike"]
                  }
                />
              )}
            </div>

            <Likebutton updateLike={this.updateLike} />
          </>
        )}
        <button className="button" onClick={() => this.getQuote()}>
          Eat My Shorts
        </button>
      </>
    );
  }
}

export default Main;

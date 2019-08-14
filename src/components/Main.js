import React, { Component } from "react";
import Beer from "./Beer";

export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     similarBeers: []
  //   }
  //   this.similarBeer = this.similarBeer.bind(this);
  // }

  // similarBeer() {
  //   let ranArray = [];
  //   for (let i=0; i<3; i++) {
  //     ranArray.push(this.props.allBeers[Math.floor(Math.random() * 80)])
  //   }
  //   // console.log(ranArray);
  //   return ranArray;
  // }

  render() {
    return (
      <div className="flex-container">
        <div className="flex-container inner">
          {this.props.allBeers ? (
            this.props.allBeers.map(item => {
              return (
                <Beer
                  key={item.title}
                  image_url={item.image_url}
                  name={item.title}
                  tagline={item.tagline}
                  toggleFavor={this.props.toggleFavor}
                  id={item.id}
                  favored={item.favored}
                  ibu={item.ibu}
                  abv={item.abv}
                  ebc={item.ebc}
                  description={item.description}
                  bestServed={item.bestServed}
                  similar={item.similar}
                  similarCall={this.props.similarCall}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

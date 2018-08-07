import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
// import Test from "./Test"

// let data = [
//   {
//     id: 1,
//     name: "Louis"
//   },
//   {
//     id: 2,
//     name: "Steven"
//   }]

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map( (datum) => {
      return <MovieCard title= {datum.title} IMDBRating= {datum.IMDBRating} genres = {datum.genres} poster={datum.poster}/>
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
//{this.generateMovieCards()}
// <Test number={2}/>
// <Test number={3}/>
// <Test number={4}/>
// <Test number={5}/>

import React, { Component } from 'react'
import { connect } from 'react-redux' //burda rootReducer`a baglanir
import PropTypes from 'prop-types'
import MoviesList from './MoviesList'
import { fetchMovies, deleteMovie } from '../../redux/actions/movies'

export class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.object.isRequired,
    deleteMovie: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchMovies()
  }

  render () {
    return (
      <div>
        <h2>Movies </h2>
        <MoviesList
          deleteMovie={this.props.deleteMovie}
          movies={this.props.movies}
        />
      </div>
    )
  }
}

// ---burda Redux Store`a baglanip State degerlerini Props olarak kullanabilme
function mapStateToProps (state) {
  return {
    movies: state.moviesRootReducer
  }
}
// ---burda herhangi bir cekim islemini(veritabani) burda yapilir
function mapDispatchToProps () {
  return {
    fetchMovies,
    deleteMovie
  }
}

// ---componentleri store baglayan nesnedir
export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)

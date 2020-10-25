import React, { Component } from 'react'
import NewMovieForm from './NewMovieForm'
import { connect } from 'react-redux'
import { onNewMovieSubmit } from '../../redux/actions/newMovie'

class NewMoviesPages extends Component {
  render () {
    return (
      <div>
        <h2>New Movie </h2>
        <NewMovieForm
          newMovie={this.props.newMovie}
          onNewMovieSubmit={this.props.onNewMovieSubmit}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    newMovie: state.newMovieRootReducer
  }
}

function mapDispatchToProps () {
  onNewMovieSubmit
}
export default connect(mapStateToProps, mapDispatchToProps)(NewMoviesPages)

import PropTypes from 'prop-types'
import movieses from '../../redux/reducers/moviesReducer'
import MovieCard from './MovieCard'
import { Grid } from 'semantic-ui-react'
import { HashLoader } from 'react-spinners'

// ---statless component (state kavrami olmayan component turleri)
function MoviesList (props) {
  console.log(props.movieses) // == movieList

  const emptyMessage = <p>there are no movies yet</p>

  const moviesList = (
    <div>
      <HashLoader
        size={40}
        color={'#36bdb3'}
        loading={props.movieses.fetching}
      />

      {props.movieses.error.response ? (
        <h3>Error retriving data!</h3>
      ) : (
        <Grid stackable columns={3}>
          {props.movieses.map(movie => (
            <MovieCard 
            key={movie._id} 
            deleteMovie={props.deleteMovie}
            movie={movie} />
          ))}
        </Grid>
      )}
    </div>
  )

  return <div>{props.movieses.length === 0 ? emptyMessage : moviesList}</div>
}

MoviesList.propTypes = {
  movieses: PropTypes.shape({
    movies: PropTypes.array.isRequired
  }).isRequired
}

export default MoviesList

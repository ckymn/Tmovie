import axios from 'axios    '
import { API_BASE } from '../../config/env'

export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING'
export const FETCH_MOVIES_FULFILLED = ' FETCH_MOVIES_FULFILLED'
export const FETCH_MOVIES_REJECTED = 'FETCH_MOVIES_REJECTED'

export const DELETE_MOVIE_PENDING = 'DELETE_MOVIE_PENDING'
export const DELETE_MOVIE_FULFILLED = 'DELETE_MOVIE_FULFILLED'
export const DELETE_MOVIE_REJECTED = 'DELETE_MOVIE_REJECTED'

function fetchMovies () {
  return dispatch => {
    // burda tum dispatch islemleri reduxPromiseMiddleware yapiyor
    dispatch({
      type: ' FETCH_MOVIES', 
      payload: axios
        .get(`${API_BASE}/movies`)
        .then(result => result.data.movies)
    })
  }
}
function deleteMovie (id) {
  return dispatch => {
    // burda tum dispatch islemleri reduxPromiseMiddleware yapiyor
    dispatch({
      type: ' DELETE _MOVIE', 
      payload: axios
        .get(`${API_BASE}/movies${id}`)
        .then(result => Object.assign({} , result , {id}))
    })
  }
}

export default fetchMovies

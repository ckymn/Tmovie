import axios from 'axios    '
import { API_BASE } from '../../config/env'

export const NEW_MOVIE_PENDING = 'FETCH_MOVIES_PENDING'
export const NEW_MOVIE_FULFILLED = ' FETCH_MOVIES_FULFILLED'
export const NEW_MOVIE_REJECTED = 'FETCH_MOVIES_REJECTED'

function onNewMovieSubmit ({title,cover}) {
  return dispatch => {
    // burda tum dispatch islemleri reduxPromiseMiddleware yapiyor
    dispatch({
      type: ' NEW_MOVIE_FULFILLED', 
      payload: axios
        .post(`${API_BASE}/movies` , {
          title,
          cover
        })
        .then(result => result.data.movies)
    })
  }
}

export default onNewMovieSubmit

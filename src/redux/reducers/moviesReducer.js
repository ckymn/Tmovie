import { FETCH_MOVIES_FULFILLED } from '../actions/movies' // bu actiondaki cektigimiz payloadu doneer
import { FETCH_MOVIES_REJECTED } from '../actions/movies'
import { FETCH_MOVIES_PENDING } from '../actions/movies'

import { DELETE_MOVIE_PENDING } from '../actions/movies' // bu actiondaki cektigimiz payloadu doneer
import { DELETE_MOVIE_FULFILLED } from '../actions/movies'
import { DELETE_MOVIE_REJECTED } from '../actions/movies'

const initialState = {
  fetching: false,
  movies: [],
  error: {}
}

function movieses (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        fetching:true
      }
    case FETCH_MOVIES_FULFILLED:
      return {
        ...state,
        movies: action.payload,
        fetching:false
      }
    case FETCH_MOVIES_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching:false
      }

      // Delete Movie
      case DELETE_MOVIE_PENDING:
      return {
        ...state,
      }
    case DELETE_MOVIE_FULFILLED:
      return {
        ...state,
        movies: state.movies.filter(item => item._id !== action.payload.id),
      }
    case DELETE_MOVIE_REJECTED :
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default movieses

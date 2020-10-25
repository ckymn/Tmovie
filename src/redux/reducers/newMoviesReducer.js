import { NEW_MOVIE_FULFILLED } from '../actions/newMovie' // bu actiondaki cektigimiz payloadu doneer
import { NEW_MOVIE_REJECTED } from '../actions/newMovie'
import { NEW_MOVIE_PENDING } from '../actions/newMovie'

const initialState = {
  fetching: false,
  done: false,
  movies: [],
  error: {}
}

function movieses (state = initialState, action) {
  switch (action.type) {
    case NEW_MOVIE_PENDING:
      return {
        ...state,
        fetching: true
      }
    case NEW_MOVIE_FULFILLED:
      return {
        ...state,
        movies: action.payload,
        fetching: false,
        done:true
      }
    case NEW_MOVIE_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }
    default:
      return state
  }
}

export default movieses

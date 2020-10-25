import {combineReducers} from 'redux'
import moviesReducer from './moviesReducer'
import newMovieReducer from './newMoviesReducer ';

const rootReducer = combineReducers({
    moviesRootReducer:moviesReducer,
    newMovieRootReducer:newMovieReducer
})

export default rootReducer
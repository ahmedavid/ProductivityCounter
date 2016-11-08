import {combineReducers} from 'redux';
import ExercisesReducer from './ExercisesReducer';

export default combineReducers({
    exercises:ExercisesReducer
})
import firebase from 'firebase';
import {EXERCISES_FETCH} from './types';

export const exercisesFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/exercises').on('value',snapshot=>{
            dispatch({
                type:EXERCISES_FETCH,
                payload:snapshot.val()
            })
        })
    }
};

export const exercisesAdd = (exercise) => {
    return () => {
        firebase.database().ref('/exercises').push(exercise);
    }
};

export const exercisesDelete = (id) => {
    return () => {
        firebase.database().ref(`/exercises/${id}`).remove();
    }
};

export const exercisesToggleActive = (exercise) => {
    return () => {
        firebase.database().ref(`/exercises/${exercise.id}`).set({name:exercise.name,is_active:!exercise.is_active});
    }
};
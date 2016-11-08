import React , {Component} from 'react';
import { connect } from 'react-redux';
import { exercisesFetch,exercisesAdd,exercisesDelete,exercisesToggleActive } from '../actions';

class Profile extends Component{
    componentWillMount(){
        this.props.exercisesFetch();
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.exercisesAdd({name:this.refs.newExercise.value.trim(),is_active:false});
        this.refs.newExercise.value = ''
    }
    render(){
        const exercisesList = this.props.exercises.map((exercise)=>{
            return (
                <li key={exercise.id} className="list-group-item">
                    <span onClick={()=>this.props.exercisesDelete(exercise.id)} className="glyphicon glyphicon-remove glyphicon-remove-exe" aria-hidden="true"></span>
                        {exercise.name}
                    <input className="pull-right" type="checkbox" onChange={()=>{this.props.exercisesToggleActive(exercise)}} defaultChecked={exercise.is_active}/>
                </li>
            );
        });

        return(

            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control" ref='newExercise' placeholder="new task..." required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success btn-lg btn-block" type="submit">Save</button>
                        </div>
                    </form>
                    <ul className="list-group">
                        {exercisesList}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const arr = [];
    for(var key in state.exercises){
        arr.push({...state.exercises[key],id:key});
    }
    return {exercises:arr};
};

export default connect(mapStateToProps,{exercisesFetch,exercisesAdd,exercisesDelete,exercisesToggleActive})(Profile);
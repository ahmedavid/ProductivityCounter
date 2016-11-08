import React , {Component} from 'react';
import { connect } from 'react-redux';
import { exercisesFetch,daysCreate } from '../actions';

import GaugeGroup from '../components/GaugeGroup';

class Home extends Component{
    componentWillMount(){
        this.props.exercisesFetch();
    }
    render(){
        return <GaugeGroup exercises={this.props.exercises} exerciseDo={()=>daysCreate()}/>
    }
}

const mapStateToProps = (state) => {
    const arr = [];
    for(var key in state.exercises){
        arr.push({...state.exercises[key],id:key});
    }

    console.log(arr);
    return {exercises:arr};
};

export default connect(mapStateToProps,{exercisesFetch,daysCreate})(Home);
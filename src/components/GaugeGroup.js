import React,{Component} from 'react';
import Gauge from './Gauge';

export default class GaugeGroup extends Component{
    render(){
        console.log(this.props)
        const callback = this.props.exerciseDo;
        const gauges = this.props.exercises.map(function (exercise) {
            return(
                <Gauge name={exercise.name} reps={3} key={exercise.id} exerciseDo={callback}/>
            )
        });
        return (
            <div>
                {gauges}
            </div>
        )
    }
}
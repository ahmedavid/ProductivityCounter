import React,{Component} from 'react';

export default class Gauge extends Component{
    createGauge(start,end,update){
        var tau = 2 * Math.PI;
        var text = String(20*end) + '%';
        var w = 200;
        var h = 200;
        var element = d3.select(this.refs.gaugeMountElement);
        if(update) {
            element.remove();
            console.log(element)
        }
        var element = d3.select(this.refs.gaugeMountElement);
        var canvas = element
            .append('svg')
            .attr('width',w)
            .attr('height',h);

        var arc = d3.arc()
            .innerRadius(60)
            .outerRadius(85)
            .startAngle(0);

        var g = canvas.append("g").attr('transform','translate(100,100)');

        g.append('text')
            .attr("x", 0)
            .attr("dy", ".35em")
            .attr('text-anchor','middle')
            .style("font-size", "32")
            .text(text);

        var background = g.append("path")
            .datum({endAngle: tau})
            //.style("fill", "#ddd")
            .style("fill", "#4F4554")
            .attr("d", arc);

        var foreground = g.append("path")
            .datum({endAngle: (start/5) * tau})
            .style("fill", "#0BCC1A")
            //.style("fill", "orange")
            .attr("d", arc);

        foreground.transition()
            .duration(750)
            .attrTween("d", arcTween(tau*(end/5)));

        function arcTween(newAngle) {
            return function(d) {
                var interpolate = d3.interpolate(d.endAngle, newAngle);
                return function(t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            };
        }
    }
    componentDidMount(){
        this.createGauge(0,this.props.reps,false);
    }

    render(){
        return (
            <div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">{this.props.name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="gauge" ref="gaugeMountElement"></div>
                            <button className="btn btn-primary btn-block btn-lg btn-do" onClick={this.props.exerciseDo.bind(this)}>Do</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
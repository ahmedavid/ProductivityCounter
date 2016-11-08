import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';
import firebase from 'firebase';

export default class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDMA0yG5uqsNsfML7BNzXCQe9ybKaQlHvk",
            authDomain: "habitrack-bbe4b.firebaseapp.com",
            databaseURL: "https://habitrack-bbe4b.firebaseio.com",
            storageBucket: "habitrack-bbe4b.appspot.com",
            messagingSenderId: "720585221222"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/*<a className="navbar-brand" href="#">React Fitness</a>*/}
                            <Link to='/' className="navbar-brand">React Fitness</Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><IndexLink to='/' activeClassName="active">Home</IndexLink></li>
                                <li><Link to='/profile' activeClassName="active">Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
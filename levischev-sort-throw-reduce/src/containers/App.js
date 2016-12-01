import React, { Component, PropTypes } from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import { Link } from 'react-router';

class App extends Component {
	render () {
		return (
			   <div>
		      	<Link to="todo" activeStyle={{color:'#666'}} >todo</Link>
			   	<br />
			   	<br />
			   	<Link to="counter" activeStyle={{color:'#666'}} >counter</Link>
			   	<br />
			   	<br />
			   	
		          {this.props.children}
		        </div>
		);
	}
} 

export default App;
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../AC/counter'
import Counter from '../containers/Counter';

class CounterContainer extends Component {

	static propTypes = {
		num: PropTypes.number,
		increment: PropTypes.func,
		decrement: PropTypes.func 
	};

	incrementHandler () {
		console.log(this);
		this.props.increment();

	}

	// decrementHandler () {
	// 	if(this.props.num <= 0) {
	// 		return false;
	// 	}
	// 	this.props.decrement();
	// }

	decrementHandler () {
		console.log(this);
		this.props.decrement();
	}

	render () {
		return ( 

			<div> 
				<Counter num = {this.props.num} />
				<br/>
				<br/>
				<button onClick={::this.incrementHandler}>+</button>
				<button onClick={this.decrementHandler.bind(this)}>-</button>
			</div>

		);
	}
}


export default connect(
	(state) => {
		return {
			num: state.counter.num
		};
	}, {
		increment,
		decrement
	}
)(CounterContainer);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../AC/counter'

class Counter extends Component {

	static propTypes = {
		num: PropTypes.number,
		increment: PropTypes.func,
		decrement: PropTypes.func
	};

	incrementHandler () {
		this.props.increment();
	}

	decrementHandler () {
		this.props.decrement();
	}


	render () {

 		
		const num  = this.props.num;

		if (typeof num === 'undefined') {
			return null;
		}
	

		return (
			<div>
				<b>{num}</b>
				<br/>
				<br/>
				<button onClick={::this.incrementHandler}>+</button>
				<button onClick={::this.decrementHandler}>-</button>
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
)(Counter);
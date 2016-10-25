import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	state = {
		count: 0
	}
	incrementHandler() {
		const state = this.state;
		this.setState({
			...state,
			 count: state.count +1
		});
	}
	decrementHandler() {
		const state = this.state;
		this.setState({
			...state,
			 count:  this.checkState( state.count -1)

		});
	}

	checkState (value) {
		return value < 0 ? 0 : value

	}

	render () {
		return (
			<div>
			{this.state.count}
			<br />
			<br />
		
			<button onClick={::this.incrementHandler}>increment</button>
			<button onClick={::this.decrementHandler}>decrement</button>
				
			</div>
			
		);
	}
}

export default Counter;
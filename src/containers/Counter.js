import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../AC/counter'

class Counter extends Component {
	render () {
		return (
			<div> 
				<b>{this.props.num}</b>
				<br/>
				<br/>
				<button onClick={this.props.incrementHandler}>+</button>
				<button onClick={this.props.decrementHandler}>-</button>
			</div>
		);
	}
}

export default Counter;

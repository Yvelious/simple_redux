import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../AC/counter'

class Counter extends Component {
	render () {
		return (
			<b>{this.props.num}</b>		 
		);
	}
}

export default Counter;

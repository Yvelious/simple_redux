import React, { Component, PropTypes } from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import CounterContainer from '../containers/CounterContainer';
import Todo from '../containers/Todo';
import { ACTIVE, DONE,  ALPHA_ORDER, OMEGA_ORDER } from '../constants/index';


class pageTodo extends Component { 
	render () {
		return (
			<div>
				<Todo filterValue = { this.props.params.filterValue } />
			</div>	 
		);
	}
}

export default pageTodo;
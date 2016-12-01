import React, { Component, PropTypes } from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import CounterContainer from '../containers/CounterContainer';
import Todo from '../containers/Todo';
import { ACTIVE, DONE,  ALPHA_ORDER, OMEGA_ORDER } from '../constants/index';


class App extends Component {
	render () {
		return (
			<div>
				<CounterContainer />	
			</div>
		);
	}
}

export default App;
import React, { Component, PropTypes } from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import CounterContainer from '../containers/CounterContainer';
import Todo from '../containers/Todo';

class App extends Component {
	render () {
		return (
			<Provider store={store}>
			<div>
				<CounterContainer />
				<br />
				<br />
				<br />
				<br /> 
				<Todo />
			</div>
			</Provider>
		);
	}
}

export default App;
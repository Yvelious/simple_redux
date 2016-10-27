import React, { Component, PropTypes } from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import CounterContainer from '../containers/CounterContainer';

class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<CounterContainer />
			</Provider>
		);
	}
}

export default App;
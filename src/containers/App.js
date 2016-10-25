import React, { Component, PropTypes } from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import Counter from '../containers/Counter';

class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Counter />
			</Provider>
		);
	}
}

export default App;
import React, { Component, PropTypes } from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import AppContainer from '../containers/AppContainer';

class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};
	
	render() {
		return (
			<Provider store={store}>
				<AppContainer>
					{this.props.children}
				</AppContainer>
			</Provider>
		);
	}
}

export default App;
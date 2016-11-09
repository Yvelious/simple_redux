import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index'; 
import App from './containers/App';
import pageTodo from './containers/pageTodo';
import pageCounter from './containers/pageCounter';
import { Router, Route, browserHistory } from 'react-router';


render(
<Provider store={store}>
  <Router history = { browserHistory }>
       <Route path="/" component={App} >
		   <Route path="todo/(:filterValue)" component={pageTodo} />
		   <Route path="counter" component={pageCounter} />
       </Route> 
  </Router>
</Provider>, document.getElementById('root')); 


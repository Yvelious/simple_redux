import {SIGN_IN, SIGN_OUT, SUCCESS, INIT, FAIL, USER, ADD_AUTO_RELOAD, PING, SERVER, SET, CHANGE, HOST_URI_SETTINGS, VIEW_MODE, SHOW, HIDE, MESSAGE_BOX, DEFAULT, API_REQUEST_JSON_HEADER, LOADING_OVERLAY } from '../constants/index';
import axios from 'axios';
import { apiUrl, apiUri, apiHost, setApiHost, setApiUri, userData, collectMessageData } from '../utils';

export function checkLogin(login = '', password = '') {
	return (dispatch) => {

		dispatch({
			type: SIGN_IN + INIT
		});

		let authRequestHeader = userData('getHeader');

		if (login && password) {
			authRequestHeader = {
				'Authorization': 'Basic ' + btoa(login + ':' + password)
			};
		}

		if (authRequestHeader) {
			/* PING */
			axios({
				method: 'POST',
				url: '/ping',
				baseURL: apiUrl(),
				headers: {
					...API_REQUEST_JSON_HEADER,
					...authRequestHeader
				},
				data: {}
			}).then(() => {
				userData('setHeader', authRequestHeader);

				dispatch({
					type: SIGN_IN + SUCCESS
				});
			}).catch((error) => {
				dispatch(
					checkRequestError(error,[{
						type: SIGN_IN + FAIL
					}])
				);
			});
		} else {
			dispatch(logOut());
		}
	};
}

export function ping() {
	return (dispatch) => {
		let authRequestHeader = userData('getHeader');

		axios({
			method: 'POST',
			url: '/ping',
			baseURL: apiUrl(),
			headers: {
				...API_REQUEST_JSON_HEADER,
				...authRequestHeader
			},
			data: {}
		}).then(function() {
			dispatch({
				type: SERVER + SUCCESS
			});
		}).catch((error) => {
			dispatch(
				checkRequestError(error)
			);
		});
	};
}

export function addPing(autoPing) {
	return {
		type: PING + ADD_AUTO_RELOAD,
		payload: {
			autoPing: autoPing
		}
	};
}

export function actualizeUserData() {
	return (dispatch) => {

		const userDataObj = userData('getData');

		if (userDataObj !== null) {
			dispatch({
				type: USER + SET, /* Set user data from localStorage to the Store */
				payload: {
					user: userDataObj
				}
			});
		}
	};
}

export function logOut () {
	return (dispatch, getState) => {

		/* clear auto ping */
		const state = getState();
		const autoPing = state.user.get('autoPing');
		clearInterval(autoPing);

		userData('clear');

		dispatch({
			type: SIGN_OUT
		});
	};
}

export function changeSettings (type = '', value = '') {
	return {
		type: CHANGE + HOST_URI_SETTINGS,
		payload: {
			type,
			value
		}
	};
}

export function showHostUriSettings () {
	return {
		type: SHOW + HOST_URI_SETTINGS
	};
}

export function hideHostUriSettings () {
	return {
		type: HIDE + HOST_URI_SETTINGS
	};
}

export function changeViewMode (viewModeClass = '') {
	return (dispatch) => {

		const userDataObj = userData('getData');
		userData('setData', {
			...userDataObj,
			viewModeClass
		});

		dispatch({
			type: CHANGE + VIEW_MODE,
			payload: {
				viewModeClass
			}
		});
	};
}

export function saveSettings (host = '', uri = '') {
	return (dispatch) => {

		setApiHost(host);
		setApiUri(uri);

		dispatch({
			type: SET + HOST_URI_SETTINGS,
			payload: {
				apiHost: host,
				apiUri: uri
			}
		});

		dispatch({
			type: MESSAGE_BOX + SHOW,
			payload: {
				'title': 'Success',
				'details': 'Settings have been successfully saved'
			}
		});
	};
}

export function setDefaultSettings () {
	return {
		type: DEFAULT + HOST_URI_SETTINGS
	};
}

export function setHostUriSettings () {
	return (dispatch) => {
		const host = apiHost();
		const uri = apiUri();
		dispatch({
			type: SET + HOST_URI_SETTINGS,
			payload: {
				apiHost: host,
				apiUri: uri,
				default_apiHost: host,
				default_apiUri: uri
			}
		});
	};
}

export function checkRequestError (requestError, elseToDo = []) {
	return (dispatch) => {

		let status = 0;
		if (typeof requestError === 'object') { /* in some rare cases requestError can be a string */
			const { response } = requestError;
			status = response ? parseInt(response.status) : 0;
		}

		if (!status) {

			dispatch({
				type: LOADING_OVERLAY + HIDE
			});

			dispatch({
				type: SERVER + FAIL,
				payload: {
					title: 'Service Unavailable',
					details: 'Service Unavailable. The Application deployment is in progress. Please wait.'
				}
			});

		} else if (status >= 500) {

			dispatch({
				type: SERVER + FAIL,
				payload: collectMessageData(requestError)
			});

		} else if (status === 401) {

			dispatch(logOut());

		} else {

			if (elseToDo.length > 0) {
				for (let i = 0; i < elseToDo.length; ++i) {
					dispatch(elseToDo[i]);
				}
			}
		}
	};
}
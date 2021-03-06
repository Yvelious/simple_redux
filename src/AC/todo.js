import {TODO, INPUT, ADD, CHANGE_STATUS, ACTIVE, DONE, SHOW_FILTER, SHOW_SORT, ALPHA_ORDER, OMEGA_ORDER} from '../constants/index';

export function inputTodo (value = '') {
	return {
		type: INPUT + TODO,
		payload: value
	};
}
export function addTodo () {
	return {
		type: ADD + TODO
	};
}
export function changeStatusTodo (id) {
	return {
		type: CHANGE_STATUS + TODO,
		payload: id
	};
}

export function showFilterTodo (filter) {
	return {
		type: SHOW_FILTER + TODO,
		payload: {
			filter
		}
	};
}

export function showBySort (todosort) {
	return {
		type: SHOW_SORT + TODO,
		payload: {
			todosort
		}
	};
}
import {TODO, INPUT, ADD, CHANGE_STATUS, ACTIVE, DONE } from '../constants/index';

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
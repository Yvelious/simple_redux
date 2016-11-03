import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { inputTodo, addTodo, changeStatusTodo, showFilterTodo} from '../AC/todo'
import { ACTIVE, DONE } from '../constants/index';

class Todo extends Component {

	static propTypes = {

	};

	inputHandler (e) {
		this.props.inputTodo(e.target.value);
	}

	addHandler (e) {
		e.preventDefault();
		this.props.addTodo();
	}

	changeStatusTodoHandler (e) {
		this.props.changeStatusTodo(e.target.id);
	}


	showFilterTodoHandler(e) {
		this.props.showFilterTodo(e.target.value);
	}

	render () {

		const { todo } = this.props;

		if (typeof todo === 'undefined') {
			return null;
		}

		const { todoList, todoFilter, tmpValue } = todo;

		let todoListHTML = [];

		for (let i in todoList) {
			if (todoFilter == DONE && todoList[i].status == DONE || todoFilter == ACTIVE && todoList[i].status == "" || !todoFilter) {
				todoListHTML.push( <li
					key = { todoList[i].id }
					id = { todoList[i].id }
					onClick = {::this.changeStatusTodoHandler }
					className = { todoList[i].status ? 'done' : '' }>
					{ todoList[i].name }
				</li>);
			}
		}

		return (
			<div>
				<ul>
					{todoListHTML}
				</ul>
				<div>
					<button onClick = {::this.showFilterTodoHandler} className={todoFilter ? '' : 'active'} value={''}>All</button>,
					<button onClick = {::this.showFilterTodoHandler} className={todoFilter == ACTIVE ? 'active' : ''} value={ACTIVE}>Active</button>,
					<button onClick = {::this.showFilterTodoHandler} className={todoFilter == DONE ? 'active' : ''} value={DONE}>Done</button>
				</div>
				<br/>
				<form onSubmit={::this.addHandler}>
					<input name="add" value={tmpValue} onChange={::this.inputHandler} />
					<button type="submit">Add</button>
				</form>
			</div> 
		);
	}
}

export default connect(
	(state) => {
		return {
			todo: state.todo
		};
	}, {
		inputTodo,
		addTodo,
		changeStatusTodo,
		showFilterTodo
	}
)(Todo);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { inputTodo, addTodo, changeStatusTodo } from '../AC/todo'

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

	render () {

		const { todo } = this.props;
		console.log(todo);
		console.log(this.props);

		if (typeof todo === 'undefined') {
			return null;
		}

		const { todoList, todoFilter, tmpValue } = todo;
		console.log(tmpValue);

		let todoListHTML = [];

		for (let i in todoList) {
			todoListHTML.push(<li key={todoList[i].id} id={todoList[i].id} onClick={::this.changeStatusTodoHandler} className={todoList[i].status ? 'done' : ''}>
				{todoList[i].name}
			</li>);
		}
		console.log(todoListHTML);

		return (
			<div>
				<ul>
					{todoListHTML}
				</ul>
				<div>
					<b>All</b>,
					Active,
					Done
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
		changeStatusTodo
	}
)(Todo);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { inputTodo, addTodo, changeStatusTodo, showFilterTodo} from '../AC/todo'

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


	showFilterTodoHandler(filter) {
		this.props.showFilterTodo(filter);
	}

	render () {

		const { todo } = this.props;

		if (typeof todo === 'undefined') {
			return null;
		}

		const { todoList, todoFilter, tmpValue } = todo;

		let todoListHTML = [];

		for (let i in todoList) {
			if (todoFilter == 'done') {
				if (todoList[i].status == "DONE") {
					todoListHTML.push( < li 
						key = { todoList[i].id }
						id = { todoList[i].id }
						onClick = {::this.changeStatusTodoHandler }
						className = { todoList[i].status ? 'done' : '' } > { todoList[i].name } 
					< /li>);
				}	
			} else if (todoFilter == 'active') {
				if (todoList[i].status == "") {
					todoListHTML.push( < li 
						key = { todoList[i].id }
						id = { todoList[i].id }
						onClick = {::this.changeStatusTodoHandler }
						className = { todoList[i].status ? 'done' : '' } > { todoList[i].name } 
					< /li>);
				}
			} else {
				todoListHTML.push( < li 
					key = { todoList[i].id }
					id = { todoList[i].id }
					onClick = {::this.changeStatusTodoHandler }
					className = { todoList[i].status ? 'done' : '' } > { todoList[i].name } 
				< /li>);
			}
		}

		return (
			<div>
				<ul>
					{todoListHTML}
				</ul>
				<div>
					<b onClick = {this.showFilterTodoHandler.bind(this)}>All</b>, 
					<span onClick = {this.showFilterTodoHandler.bind(this, 'active')}>Active</span>, 
					<span onClick = {this.showFilterTodoHandler.bind(this, 'done')}>Done</span>
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
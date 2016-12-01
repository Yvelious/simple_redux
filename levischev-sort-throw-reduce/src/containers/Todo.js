import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { inputTodo, addTodo, changeStatusTodo, showFilterTodo, showBySort} from '../AC/todo';
import { ACTIVE, DONE,  ALPHA_ORDER, OMEGA_ORDER } from '../constants/index';
import { Link } from 'react-router';

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

	showBySortHandler(e) {
		console.log(e.target.value);
		this.props.showBySort(e.target.value);
	}

	render () {

		const { todo, filterValue } = this.props;

		if (typeof todo === 'undefined') {
			return null;
		}

		const { todoList, todoFilter, tmpValue, todoSort } = todo;

		let todoListHTML = [];


		for (let i in todoList) {
			if (filterValue == DONE && todoList[i].status == DONE || filterValue == ACTIVE  && todoList[i].status == "" || !filterValue) {
			
					todoListHTML.push( <li
					key = { todoList[i].id }
					id = { todoList[i].id }
					onClick = {::this.changeStatusTodoHandler }
					className = { todoList[i].status ? 'done' : '' }>
					{ todoList[i].name }
				</li>);
		
			}
		}


	

		// if (todoSort != '') {
		// 	todoListHTML.sort(function(a, b){
		// 		let x = a.props.children,
		// 			y = b.props.children;

		// 		return todoSort == ALPHA_ORDER ? x.localeCompare(y) : y.localeCompare(x);
		// 	});
		// }

		return (
			<div>
				<select name="" id="" onChange={::this.showBySortHandler} disabled={todoListHTML.length ? '' : 'disabled'} defaultValue={todoSort}>
					<option value=''>по дефолту</option>
					<option value={ALPHA_ORDER}>По алфавиту</option>
					<option value={OMEGA_ORDER}>По алфавиту в обратном порядке</option>
				</select>

				<ul>
					{todoListHTML}
				</ul>
				<div>
					<button onClick = {::this.showFilterTodoHandler} className={todoFilter ? '' : 'active'} value={''}>All</button>,
					<button onClick = {::this.showFilterTodoHandler} className={todoFilter == ACTIVE ? 'active' : ''} value={ACTIVE}>Active</button>,
					<button onClick = {::this.showFilterTodoHandler} className={todoFilter == DONE ? 'active' : ''} value={DONE}>Done</button>

					<br/>
					<br/>
					<br/>
					<Link to={`/todo/`} activeStyle={{'color':'#f00'}}>All</Link><br/>
					<Link to={`/todo/${ACTIVE}`} activeStyle={{'color':'#f00'}}>{ACTIVE}</Link><br/>
					<Link to={`/todo/${DONE}`} activeStyle={{'color':'#f00'}}>{DONE}</Link>
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
		showFilterTodo,
		showBySort
	}
)(Todo);
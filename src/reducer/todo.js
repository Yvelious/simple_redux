import { INPUT, TODO, ADD, CHANGE_STATUS, ACTIVE, DONE, SHOW_ACT, SHOW_FILTER, SHOW_SORT,  ALPHA_ORDER, OMEGA_ORDER} from '../constants/index';
const defaultState = {
	todoList: {},
	todoFilter: '', // '', 'DONE', 'ACTIVE'
	tmpValue: '',
	todoSort: ''

};

export default (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case INPUT + TODO:
			return {
				...state,
				tmpValue: payload
			};

		case ADD + TODO:
			let stateTMP;
			if (state.tmpValue) {
				const id = (new Date()).getTime();
				stateTMP = {
					...state,
					tmpValue: ''
				};
				stateTMP.todoList[id] = {
					id: id,
					name: state.tmpValue,
					status: ''
				};
			}
			return stateTMP ? stateTMP : state;

		case CHANGE_STATUS + TODO:
			let stateTMP1 = {
				...state,
			};
			stateTMP1.todoList[payload].status = stateTMP1.todoList[payload].status !== DONE ? DONE : '';
			return stateTMP1;

		case SHOW_FILTER + TODO:
			return {
				...state,
				todoFilter: payload.filter
			};

		case SHOW_SORT + TODO:
			return {
				...state,
				todoSort: payload.todosort
			};
	}

	return state;
};
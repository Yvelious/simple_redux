import { INPUT, TODO, ADD, CHANGE_STATUS, ACTIVE, DONE, SHOW_ACT, SHOW_FILTER, SHOW_SORT,  ALPHA_ORDER, OMEGA_ORDER} from '../constants/index';
const defaultState = {
	todoList: {},
	todoFilter: '', // '', 'DONE', 'ACTIVE'
	tmpValue: '',
	todoSort: ''

};

function sortObj (obj, type) {
	var temp_array = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			temp_array.push(obj[key]);
		}
	}

	if (typeof type === 'function') {
		temp_array.sort(type);
	}  else {
		temp_array.sort();
	}
	var temp_obj = {};
	for (var i = 0; i < temp_array.length; i++) {
		temp_obj[temp_array[i]] = temp_array[i];
	}
	return temp_obj;
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
				todoSort: payload.todosort,
				todoList: function(){
					return sortObj(state.todoList, 
						function(a,b) {
							var x = a.name,
							     y = b.name;
							if(payload.todosort =='') {
								x = a.id;
								y = b.id;
								return x-y;
							}  
							return payload.todosort == ALPHA_ORDER  ? x.localeCompare(y) : y.localeCompare(x);
						}
					)
				}()
			};
	}

	return state;
};
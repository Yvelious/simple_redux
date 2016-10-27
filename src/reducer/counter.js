import { INCREMENT, DECREMENT } from '../constants/index';
const defaultState = {
	num: 0
};

export default (state = defaultState, action) => {

	const { type } = action;

	switch (type) {
		case INCREMENT:

			return {
				...state,
				num: state.num + 1
			};

		case DECREMENT: 

			return {
				...state,
				num: state.num <=0 ? 0 : state.num - 1
			}
	}

	return state;
};
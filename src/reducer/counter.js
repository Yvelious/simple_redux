import { INCREMENT, DECREMENT } from '../constants/index';
const defaultState = {
	num: 0
};

function checkValue (value) {
	return value <= 0 ? 0 : value;
}

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
				num: checkValue(state.num - 1)
			}
	}

	return state;
};
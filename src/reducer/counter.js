import { INIT, SUCCESS, START } from '../constants/index';
import { Map } from 'immutable';
const defaultState = Map({
	count: 0
});

export default (state = defaultState, action) => {
	const { type } = action;

	switch (type) {
		case INIT + START:
			return state.set('loading', true);

		case INIT + SUCCESS:
			return state.set('loading', false);
	}

	return state;
};
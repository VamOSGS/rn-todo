import { FILTER } from '../constants';
const initialState = 'DONE';

export default (state = initialState, action) => {
	switch (action.type) {
		case FILTER:
			return action.filter;

		default:
			return state;
	}
};

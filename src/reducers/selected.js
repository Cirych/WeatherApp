import {
	SELECTED_LOCATION
} from '../actions';

const initialState = null;

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECTED_LOCATION:
			return action.id;
		default:
			return state;
	}
};
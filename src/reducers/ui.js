import {
	ADD_CITY_WINDOW,
	CITY_INFO_WINDOW,
	UPDATE_FAIL
} from '../actions';

const initialState = {
	addCityWindowOpen: false,
	infoCityWindowOpen: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_CITY_WINDOW:
			return {
				...state,
				addCityWindowOpen: !state.addCityWindowOpen
			};
		case CITY_INFO_WINDOW:
			return {
				...state,
				infoCityWindowOpen: action.isInfoCityOpen
			};
		case UPDATE_FAIL:
			return {
				...state,
				updateError: action.error
			}; 
		default:
			return state;
	}
};
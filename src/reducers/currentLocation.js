import {
	CURRENT_LOCATION
} from '../actions';

export default (state = 'Moscow', {type, currentLocation}) => {
	switch (type) {
		case CURRENT_LOCATION:
			return currentLocation;
		default:
			return state;
	}
};

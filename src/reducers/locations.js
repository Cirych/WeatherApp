import {
	ADD_LOCATION,
	ADD_CURRENT_LOCATION,
	REMOVE_LOCATION,
	UPDATE_LOCATION,
	UPDATE_LOCATIONS,
	UPDATE_FORECAST
} from '../actions';
import unionBy from 'lodash/unionBy';

const addHomeProp = location => ({
	...location,
	isHome: true
});


const filterState = (id, state) =>
	state.filter(location => location.id !== id);

export default (
	state = [],
	{
		type,
		id,
		location,
		locations,
		forecast
	}
) => {
	switch (type) {
		case ADD_LOCATION:
			return [
				...filterState(location.id, state),
				location
			];
		case ADD_CURRENT_LOCATION:
			return [
				addHomeProp(location),
				...filterState(location.id, state)
			];
		case REMOVE_LOCATION:
			return filterState(id, state);
		case UPDATE_LOCATION:
			return state.map(
				city =>
					city.id === location.id
						? { ...city, ...location }
						: city
			);
		case UPDATE_LOCATIONS:
			return unionBy(locations.list, state, 'id');
		case UPDATE_FORECAST:
			return state.map(
				city =>
					city.id === forecast.city.id
						? {...city, forecast: forecast.list}
						: city
			)
		default:
			return state;
	}
};

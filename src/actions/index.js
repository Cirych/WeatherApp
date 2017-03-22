import getLocation from '../api/locationApi';
import {
	getWeatherByLocation,
	getWeatherById,
	getWeatherByIds,
	getForecastById
} from '../api/weatherApi';
// Location actions
export const ADD_LOCATION = 'ADD_LOCATION';
export const ADD_CURRENT_LOCATION = 'ADD_CURRENT_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_LOCATIONS = 'UPDATE_LOCATIONS';
export const UPDATE_FORECAST = 'UPDATE_FORECAST';

// UI actions
export const ADD_CITY_WINDOW = 'ADD_CITY_WINDOW';
export const CITY_INFO_WINDOW = 'CITY_INFO_WINDOW';
export const REFRESH_LOCATION = 'REFRESH_LOCATION';

// System actions
export const UPDATE_FAIL = 'UPDATE_FAIL';

// Misc
export const SELECTED_LOCATION = 'SELECTED_LOCATION';

export const addLocation = location => ({
	type: ADD_LOCATION,
	location
});

export const updateLocation = location => ({
	type: UPDATE_LOCATION,
	location
});

export const updateLocations = locations => ({
	type: UPDATE_LOCATIONS,
	locations
});

export const updateForecast = forecast => ({
	type: UPDATE_FORECAST,
	forecast
});

export const addCurrentLocation = location => ({
	type: ADD_CURRENT_LOCATION,
	location
});

export const removeLocation = id => ({
	type: REMOVE_LOCATION,
	id
});

//
export const addCityWindow = () => ({
	type: ADD_CITY_WINDOW
});

export const cityInfoWindowToggle = isInfoCityOpen => ({
	type: CITY_INFO_WINDOW,
	isInfoCityOpen
});

export const failUpdate = error => ({
	type: UPDATE_FAIL,
	error
});

//
export const selectedLocation = id => ({
	type: SELECTED_LOCATION,
	id
});

export const selectLocation = id =>
	(dispatch, getState) => {
		dispatch(cityInfoWindowToggle(true));
		dispatch(selectedLocation(id));
	};

/*
export const addCurrentLocation = city => ({
	type: CURRENT_LOCATION,
	currentLocation: city
});
*/

export const getWeatherBy = (fn, query, cb) =>
	(dispatch, getState) =>
		fn(query)
			.then(result =>
				dispatch(cb(result)))
			.catch(error =>
				dispatch(failUpdate('getWeatherBy: ' + error)));

export const addNewLocation = city =>
	(dispatch, getState) =>
		dispatch(getWeatherBy(getWeatherByLocation, city, addLocation));

export const getCurrentLocation = () =>
	(dispatch, getState) =>
		getLocation()
			.then(city =>
				dispatch(getWeatherBy(getWeatherByLocation, city, addCurrentLocation)))
			.catch(error =>
				dispatch(failUpdate('getCurrentLocation: ' + error)));

export const refreshLocation = id =>
	(dispatch, getState) =>
		dispatch(getWeatherBy(getWeatherById, id, updateLocation));

export const refreshLocations = () =>
	(dispatch, getState) =>
		dispatch(
			getWeatherBy(
				getWeatherByIds,
				getState().locations.map(({ id }) => id),
				updateLocations
			));

export const getForecast = id =>
	(dispatch, getState) =>
		dispatch(
			getWeatherBy(
				getForecastById,
				id,
				updateForecast
			));

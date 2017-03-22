import { loadState, saveState } from './localStorage';
import getLocation from './locationApi';
import { getWeatherByLocation, getWeatherByIds } from './weatherApi';

export {
	loadState,
	saveState,
	getLocation,
	getWeatherByLocation,
	getWeatherByIds
};
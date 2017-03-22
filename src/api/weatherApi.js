//import pick from 'lodash/pick';

const apiKey = 'e8e6d80ef3378865c984fb0450b49254';
const apiUrl = 'http://api.openweathermap.org/data/2.5';
const queryUnits = 'metric';

const buildUrl = ({
	type = 'weather',
	units = queryUnits,
	apiId = apiKey,
	query
}) => `${apiUrl}/${type}?units=${units}&appid=${apiId}&${query}`;


/*
const pickWeather = json =>
	pick(json, [
		'id',
		'name',
		'weather',
		'main',
		'wind',
		'visibility'
	]);
*/
export const getWeather = url =>
	fetch(url)
		.then(response => {
			if (response.ok)
				return response.json();
			throw new Error('openweathermap not responding');
		})
		.then(json => {
			if (json.cod === 200)
				return json; // TODO pickWeather
			if (json.cnt)
				return json; // TODO pickWeather: []
			throw new Error('No weather data');
		})
		.catch(error =>
			console.log(`Can't retrieve weather: ${error.message}`)
		);

export const getWeatherByLocation = location =>
	getWeather(
		buildUrl({
			query: `q=${location.trim()}`
		})
	);

export const getWeatherById = id =>
	getWeather(
		buildUrl({
			query: `id=${id}`
		})
	);

export const getWeatherByIds = ids =>
	getWeather(
		buildUrl({
			type: 'group',
			query: `id=${ids.toString()}`
		})
	);

export const getForecastById = id =>
	getWeather(
		buildUrl({
			type: 'forecast',
			query: `id=${id}`
		})
	);

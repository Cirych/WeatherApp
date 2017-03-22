const apiUrl = 'http://ipinfo.io/json';

const getLocation = (url = apiUrl) => fetch(url)
	.then(response => {
		if(response.ok)
			return response.json();
		throw new Error('ipinfo not responding');
	})
	.then(({city}) => {
		if(city)
			return city;
		throw new Error('Location not found');
	})
	.catch(error =>
		console.log(`Can't retrieve location: ${error.message}`)
	);

export default getLocation;

export const loadState = () => {
	try {
		const serialState = localStorage.getItem('state');
		if (serialState === null)
			return undefined;
		return JSON.parse(serialState);
	} catch (error) {
		return undefined;
	}
};

export const saveState = state => {
	try {
		const serialState = JSON.stringify(state);
		localStorage.setItem('state', serialState);
	} catch (error) {
		// log error
	}
};
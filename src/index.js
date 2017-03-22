import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './api'

injectTapEventPlugin();

const persistedState = loadState();

const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(throttle(() =>
	saveState({
		locations: store.getState().locations
	})
), 1000);

import { getCurrentLocation } from './actions';
store.dispatch(getCurrentLocation());

import { mediaQueryTracker } from 'redux-mediaquery';
store.dispatch(mediaQueryTracker({
	isPhone: "screen and (max-width: 767px)",
	isTablet: "screen and (max-width: 1024px)",
	innerWidth: true,
	innerHeight: true,
}));

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);

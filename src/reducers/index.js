import { combineReducers } from 'redux';
import locations from './locations';
import ui from './ui';
import selected from './selected';
import { reducer as responsive } from 'redux-mediaquery';

export default combineReducers({
	locations,
	ui,
	selected,
	responsive
});
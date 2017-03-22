import React from 'react';
import { connect } from 'react-redux';
import { refreshLocations } from '../../actions';
import AppBar from 'material-ui/AppBar';
import { pink500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';

export const Header = ({ onRefresh }) =>
	<AppBar
		title='Weather'
		onRightIconButtonTouchTap={onRefresh}
		iconElementRight={
			<IconButton>
				<NavigationRefresh />
			</IconButton>
		}
		style={{ backgroundColor: pink500 }}
	/>

const mapStateToProps = ({
	ui: { addCityWindowOpen }
}) => (
		{ addCityWindowOpen }
	);

const mapDispatchToProps = (dispatch) => (
	{
		onRefresh: () => {
			dispatch(refreshLocations())
		}
	}
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);

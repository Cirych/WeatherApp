import React from 'react';
import { connect } from 'react-redux';
import {
	removeLocation,
	refreshLocation,
	selectLocation
} from '../../actions';
import { City } from '../../components';

export const CityList = ({locations, ...props}) =>
	<div>
		{
			locations.map(({id, ...location}) =>
				<City
					key={id}
					id={id}
					{...location}
					{...props}
				/>
			)
		}
	</div>

const mapStateToProps = ({locations}) => (
	{ locations }
);

const mapDispatchToProps = (dispatch) => (
	{
		removeLocation: (id) => {
			dispatch(removeLocation(id))
		},
		refreshLocation: (id) => {
			dispatch(refreshLocation(id))
		},
		selectLocation: (id) => {
			dispatch(selectLocation(id))
		}
	}
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CityList);
import React from 'react';
import { connect } from 'react-redux';
import { cityInfoWindowToggle, getForecast } from '../../actions';
import { DrawerRight } from '../../components';
import { CityInfo } from '../../components';

export const CityinfoWindow = ({
	selected,
	locations,
	infoCityWindowOpen,
	close,
	refresh,
	innerWidth
}) => {
	const city = locations.find(({ id }) => id === selected);

	return (
		<DrawerRight
			isOpen={infoCityWindowOpen}
			close={close}
			refresh={()=>refresh(selected)}
			innerWidth={innerWidth}
		>
			<CityInfo city={city} />
		</DrawerRight>
	)
};

const mapStateToProps = ({
	ui: { infoCityWindowOpen },
	selected,
	locations,
	responsive: { innerWidth }
}) => (
		{
			infoCityWindowOpen,
			selected,
			locations,
			innerWidth
		}
	);

const mapDispatchToProps = (dispatch) => (
	{
		close: () => {
			dispatch(cityInfoWindowToggle(false))
		},
		refresh: (id) => {
			dispatch(getForecast(id))
		}
	}
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CityinfoWindow);
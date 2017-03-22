// @flow
import React from 'react';
import CardCity from '../CardCity';
import CardMenu from '../CardMenu';
import Swiper from '../Swiper';

const styles = {
	Swiper: {
		margin: 8
	},
	CardCity: {
		cardStyle: {
			backgroundColor: 'rgba(0, 0, 0, 0)',
			border: '1px solid white',
			overflow: 'hidden'
		},
		cardHeaderStyle: {
			titleStyle: {
				color: 'white'
			},
			subTitleStyle: {
				color: 'silver'
			}
		}
	},
	CardMenu: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		border: '1px solid white',
		height: '100%'
	}
};

const City = ({id, selectLocation, removeLocation, refreshLocation, ...props}) =>
	<Swiper style={styles.Swiper}>
		<CardCity
			style={styles.CardCity}
			id={id}
			selectLocation={selectLocation}
			{...props}
		/>
		<CardMenu
			style={styles.CardMenu}
			id={id}
			removeLocation={removeLocation}
			refreshLocation={refreshLocation}
		/>
	</Swiper>

export default City;

/*
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
	<IconButton
		touch={true}
		tooltip="more"
		tooltipPosition="bottom-left"
	>
		<MoreVertIcon color={grey400} />
	</IconButton>
);

const rightIconMenu = (
	<IconMenu
		iconButtonElement={iconButtonElement}
		targetOrigin={{ vertical: 'top', horizontal: 'right' }}
	>
		<MenuItem>Reply</MenuItem>
		<MenuItem>Forward</MenuItem>
		<MenuItem>Delete</MenuItem>
	</IconMenu>
);
//, justifyContent: 'flex-end'
const Tmp = ({city, ...props}) => (
	<div {...props} style={{ display: 'flex', flexDirection: 'row' }}>
		<div style={{ height: '24px', width: '100%' }}>{city}</div>
		<ContentInbox style={{ width: '50px' }} />
		<div style={{ height: '24px', width: '50px' }}>50C</div>
	</div>
);

export { Tmp };


export default ({city, temp, icon, menu, isHome}) =>
	<ListItem
		//leftIcon = {<Tmp />}
		primaryText={<Tmp city={city} />} //{'city'}
		//secondaryText = {isHome ? 'Home' : ''}
		rightIconButton={rightIconMenu}
		style={{
			height: '100px',
			background: 'grey'
		}}
	/>

import './style.css';
const ListCss = ({children}) => (
	<div className='listCss'>
		{children}
	</div>
)
export { ListCss };

/////////////////


/////////////////////
*/
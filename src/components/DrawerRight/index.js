import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { pink500, blueGrey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';

const DrawerRight = ({
	title,
	isOpen = false,
	close,
	refresh,
	innerWidth,
	children
}) =>
	<Drawer
		width={innerWidth}
		openSecondary={true}
		//docked={false}
		open={isOpen}
		//containerStyle={{ margin: '8px', height: '97vh' }}
		containerStyle={{ backgroundColor: blueGrey400 }}
	>
		<AppBar
			title={title}
			iconElementLeft={<IconButton onClick={close}><NavigationClose /></IconButton>}
			iconElementRight={<IconButton onClick={refresh}><NavigationRefresh /></IconButton>}
			style={{ backgroundColor: pink500 }}
		/>
		{children}
	</Drawer>;

export default DrawerRight;

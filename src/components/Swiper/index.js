// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const Swiper = ({children, style}) =>
	<SwipeableViews
		index={0}
		//onChangeIndex={this.handleChange}
		//style={{ margin: '8px' }}
		style={style}
	>
		{children}
	</SwipeableViews>

export default Swiper;
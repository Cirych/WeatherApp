import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MobileTearSheet from './MobileTearSheet';

const MobileDecorator = story => (
	<MuiThemeProvider>
		<MobileTearSheet customColor="lightgreen">
			{story()}
		</MobileTearSheet>
	</MuiThemeProvider>
);

import { AddCity } from '../../containers/AddCity'

storiesOf('Mobile.AddCity', module)
	.addDecorator(MobileDecorator)
	.add('Form', () => (
		<AddCity
			onClick={action('ADD_CITY_WINDOW')}
			onSubmit={(city) => console.log('city '+ city)}
			addCityWindowOpen={true}
			/>
	));
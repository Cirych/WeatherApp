import React from 'react';
import { storiesOf } from '@kadira/storybook';

import * as weatherIcons from '../../components/WeatherIcons';

const decorator = story => (
	<div style={{ backgroundColor: 'lightblue' }}>
		{story()}
	</div>
);

storiesOf('UI.WeatherIconsAll', module)
	.addDecorator(decorator)
	.add('All', () => (
		<div>
			{
				Object.values(weatherIcons).map(WI => <WI />)
			}
		</div>
	))
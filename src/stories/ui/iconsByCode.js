import React from 'react';
import { storiesOf } from '@kadira/storybook';

import * as weatherIcons from '../../components/WeatherIcons';

const decorator = story => (
	<div style={{backgroundColor: 'lightgreen'}}>
		{story()}
	</div>
);

const WI01d = weatherIcons['WI01d'];
const WI13d = weatherIcons['WI13d'];

storiesOf('UI.WeatherIconsByCode', module)
	.addDecorator(decorator)
	.add('01d', () => (
		<WI01d />
	))
	.add('13d', () => (
		<WI13d size='48' />
	))
	.add('var', () => {
		const code = '10d'
		const WI = weatherIcons[`WI${code}`];
		return <WI />
	})
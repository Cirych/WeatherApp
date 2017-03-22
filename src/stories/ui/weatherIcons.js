import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {
	WI01d,
	WI02d,
	WI03d,
	WI04d,
	WI09d,
	WI10d,
	WI11d,
	WI13d
} from '../../components/WeatherIcons';

const decorator = story => (
	<div style={{backgroundColor: 'lightgreen'}}>
		{story()}
	</div>
);

storiesOf('UI.WeatherIcons', module)
	.addDecorator(decorator)
	.add('01d', () => (
		<WI01d />
	))
	.add('02d', () => (
		<WI02d />
	))
	.add('03d', () => (
		<WI03d />
	))
	.add('04d', () => (
		<WI04d />
	))
	.add('09d', () => (
		<WI09d />
	))
	.add('10d', () => (
		<WI10d />
	))
	.add('11d', () => (
		<WI11d />
	))
	.add('13d', () => (
		<WI13d />
	))
	.add('13d Big', () => (
		<WI13d size='48' />
	))
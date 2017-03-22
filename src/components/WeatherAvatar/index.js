import React from 'react';
import * as weatherIcons from '../../components/WeatherIcons';

const styles = {
	default: {
		wrapper: {
			width: 'auto',
			height: 50,
			display: 'inline-block',
			paddingRight: 20,
			position: 'relative'
		},
		temp: {
			display: 'inline-block',
			width: 50,
			fontSize: 24,
			verticalAlign: 'middle',
			color: 'white'
		}
	},
	small: {
		wrapper: {
			width: 30,
			height: 30
		},
		temp: {
			fontSize: 16,
			verticalAlign: 'middle',
			color: 'white'
		}
	},
	big: {
		wrapper: {
			width: 'auto',
			height: 72,
			//display: 'inline-block',
			//paddingRight: 20,
			//position: 'relative'
		},
		temp: {
			//display: 'inline-block',
			width: 50,
			marginTop: 20,
			fontSize: 28,
			verticalAlign: 'middle',
			color: 'white'
		}
	}
}

export const WeatherAvatar = ({
	iconCode = 'Default',
	temp,
	style,
	styleType = 'default'
}) => {
	const WeatherIcon = weatherIcons[`WI${iconCode}`] || weatherIcons[`WIDefault`];

	return (
		<div style={{...style, ...styles[styleType].wrapper}}>
			<WeatherIcon />
			<div style={styles[styleType].temp}>
				{temp}°
			</div>
		</div>
	);
};

export default WeatherAvatar;

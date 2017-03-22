import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import WeatherAvatar from '../WeatherAvatar';

const styles = {
	cardStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	cardHeaderStyle: {
		titleStyle: {
			color: 'white'
		},
		subTitleStyle: {
			color: 'silver'
		}
	}
};

export const CardCity = ({
	id,
	name,
	main: {temp} = 0,
	weather = [{"icon": "01d"}],
	selectLocation,
	style: {
		cardStyle,
		cardHeaderStyle: {
			titleStyle,
			subTitleStyle
		}
	} = styles
}) =>
	<Card
		style={cardStyle}
		onClick={()=>selectLocation(id)}
		>
		<CardHeader
			title={name}
			subtitle="18:00"
			titleStyle={titleStyle}
			subtitleStyle={subTitleStyle}
			avatar={
				<WeatherAvatar
					temp={temp}
					iconCode={weather[0].icon}
					/>
				}
		>
		</CardHeader>
	</Card>

export default CardCity;

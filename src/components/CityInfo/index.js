import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import WeatherAvatar from '../WeatherAvatar';
import { grey50, grey400 } from 'material-ui/styles/colors';

const styles = {
	text: {
		common: {
			//color: grey50
		},
		primaryText: {
			color: grey50
		},
		secondaryText: {
			color: grey400
		},
	},
	currentItem: {
		//padding: 0,
		height: 150,
		//textAlign: 'right',
		//borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
	}
}

const PrimaryText = ({ text, fontSize, style }) =>
	<div style={{...style, ...styles.text.primaryText, fontSize}}>
		{text}
	</div>

const SecondaryText = ({ text, style }) =>
	<div style={{...style, ...styles.text.secondaryText}}>
		{text}
	</div>

const ListItemForecasts = ({
	weather = [{ icon: 'default', description: '' }],
	main: {
		temp = 0,
		pressure = 0
	} = {},
	clouds = {},
	wind = {},
	rain = {},
	dt_txt = ''
},
	idx = 0
) =>
	<div key={idx}><ListItem
		primaryText={<PrimaryText text={weather[0].description} />}
		secondaryText={<SecondaryText text={dt_txt} />}
		leftIcon={
			<WeatherAvatar
				temp={temp}
				iconCode={weather[0].icon}
				styleType='small'
			/>
		}
		//style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}
	/>
	<Divider inset={true} />
	</div>

const CityInfo = ({
	city: {
		weather = [{ icon: 'default', description: '' }],
	main: {
			temp = 0,
		pressure = 0
		} = {},
	name = '',
	forecast = []
	} = {}
}) =>
	<List>
		<ListItem
			primaryText={<PrimaryText text={name} fontSize={28} />}
			secondaryText={<SecondaryText text={weather[0].description} />}
			rightIcon={
				<WeatherAvatar
					temp={temp}
					iconCode={weather[0].icon}
					styleType='big'
				/>
			}
			style={styles.currentItem}
		/>
		<Divider />
		{
			forecast.map(ListItemForecasts)
		}
	</List>

/*

class CityInfo extends Component {

	componentWillUpdate({
		city: { id = null } = {}
	}) {
		console.log(id);
		// TODO refresh forecast
	};

	render() {
		return (
			<List>
				<ListItem
					primaryText="Inbox"
					leftIcon={<ContentInbox />}
				/>
				{
					this.props.city.forecast.map(ListForecasts)
				}
			</List>
		);
	};
}*/

export default CityInfo;
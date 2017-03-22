// @flow
import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
	CardRoot: {
		height: '100%',
		width: '100%',
		display: 'table'
	},
	CardContainer: {
		display: 'table-cell',
		verticalAlign: 'middle'
	},
	CardActions: {
		textAlign: 'right'
	}
}

const CardMenu = ({id, removeLocation, refreshLocation, style}) =>
	<Card
		style={{ ...styles.CardRoot, ...style }}
		containerStyle={styles.CardContainer}
	>
		<CardActions style={styles.CardActions}>
			<FlatButton label="Remove" onClick={() => removeLocation(id)} />
			<FlatButton label="Refresh" onClick={() => refreshLocation(id)} />
		</CardActions>
	</Card>

export default CardMenu;
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const cities = [
	'Moscow',
	'Saint Petersburg',
	'Riga',
	'Barcelona'
];

const AddCityForm = ({ onUpdateInput }) =>
	<AutoComplete
		floatingLabelText="New City"
		filter={AutoComplete.caseInsensitiveFilter}
		dataSource={cities}
		onUpdateInput={onUpdateInput}
	/>;

export default AddCityForm;
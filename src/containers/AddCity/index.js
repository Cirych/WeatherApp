import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCityWindow, addNewLocation } from '../../actions';
import { updateInput } from '../stateChanges';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import Modal from '../../components/Modal';
import AddCityForm from '../../components/AddCityForm';

const style = {
	position: 'fixed',
	right: '30px',
	bottom: '30px'
};

export class AddCity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		};
	};

	handleUpdateInput = (searchText) => {
		this.setState(updateInput(searchText));
	};

	handleSubmit = () => {
		this.props.onSubmit(this.state.searchText);
		this.props.onClick();
	};

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.props.onClick}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleSubmit}
				disabled={!Boolean(this.state.searchText.length)}
			/>
		];
		return (
			<div>
				<FloatingActionButton
					secondary={true}
					onClick={this.props.onClick}
					style={style}
				>
					<ContentAdd />
				</FloatingActionButton>
				<Modal
					title='Add City'
					isOpen={this.props.addCityWindowOpen}
					close={this.props.onClick}
					actions={actions}
				>
					<AddCityForm onUpdateInput={this.handleUpdateInput} />
				</Modal>
			</div>);
	};
}

const mapStateToProps = ({ ui: { addCityWindowOpen } }) => (
	{ addCityWindowOpen }
);

const mapDispatchToProps = (dispatch) => (
	{
		onClick: () => {
			dispatch(addCityWindow())
		},
		onSubmit: (city) => {
			dispatch(addNewLocation(city))
		}
	}
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCity);

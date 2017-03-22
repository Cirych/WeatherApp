import React from 'react';
import Dialog from 'material-ui/Dialog';

const style = {
  width: '100%',
  maxWidth: 'none'
};

const Modal = ({
	title,
	isOpen = false,
	close,
	actions,
	children
}) =>
	<Dialog
		title={title}
		open={isOpen}
		modal={false}
		onRequestClose={close}
		actions={actions}
		contentStyle={style}
	>
		{children}
	</Dialog>;

export default Modal;
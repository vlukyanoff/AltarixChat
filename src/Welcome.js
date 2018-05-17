import React from 'react';

export default class Welcome extends React.PureComponent {
	render() {
		console.log('I`m updating!');
		
		return (<div>{this.props.name}</div>)
	}
}
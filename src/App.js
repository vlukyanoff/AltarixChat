import React, { Component } from 'react';

import { db } from './firebase.js';

class App extends Component {
	constructor() {
		super();
		
		this.state = {
			messages: [],
			text: '',
		}
	}
	
	componentDidMount() {
		const messagesRef = db.ref('messages');

		messagesRef.on('value', (snapshot) => {
			this.setState({ messages: Object.values(snapshot.val()) });
		});
	}
	
	handleChange = (e) => {
		this.setState({ text: e.target.value })
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		
		const now = Date.now();
		const message = {
			id: now,
			name: 'Лукьянов Вячеслав',
			text: this.state.text
		};
		
		db.ref(`/messages/${now}`).set(message);
		
		this.setState({ text: '' });
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.messages.map(({ id, name, text }) => (
						<li key={id}>{name}: {text}</li>
					))}
				</ul>
				<form onSubmit={this.handleSubmit}>
					<textarea value={this.state.text} onChange={this.handleChange} />
					<br />
					<input type="submit" value="Отправить" />
				</form>
			</div>
		);
	}
}

export default App;

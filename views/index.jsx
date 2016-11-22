import React from 'react';

export default class TodoBox extends React.Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList />
				<TodoForm />
			</div>
		);
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<div className="todoList">
				<table style={{ border: "2px solid black" }}>
					<tbody>
						<Todo title="Shopping">Milk</Todo>
						<Todo title="Hair cut">13:00</Todo>
						<Todo title="Learn React">15:00</Todo>
					</tbody>
				</table>
			</div>
		);
	}
}

class Todo extends React.Component {
	constructor(props) {
		super(props);
		//Lo stato va inizializzato nel costruttore
		this.state = {
			checked: false
		}
	}

//per gestire le modifiche al click vengono creati dei 
//metodi javascript duri e puri e assegnati ai metodi del dom (vedi render())
	handleChange() {
		console.log("checkbox: " + state.checked);
		this.state.checked = !this.state.checked;
	}


//lo stato viene richiamato con this.state
// mentre le props vengono recuperate da this.props
	render() {
		return (
			<tr>
				<td style={style.tableContent}>
					<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)} />
				</td> 
				<td style={style.tableContent}>{this.props.title}</td>
				<td style={style.tableContent}>{this.props.children}</td>
			</tr>
		);
	}
}
Todo.propTypes = {
	title: React.PropTypes.string.isRequired
};


class TodoForm extends React.Component {
	render() {
		return (
			<div className="todoForm">
				I am a TodoForm.
			</div>
		)
	}
}

let style = {
	tableContent: {
		border: "1px solid black"
	}
};

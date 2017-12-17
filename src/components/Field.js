import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Icon, Button } from '@shoutem/ui';

export default class Field extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: ''
		};
	}
	handleChange(e) {
		this.setState({ value: e.target.value });
	}
	handleSubmit() {
		this.props.onAdd(this.state.values);
	}
	render() {
		return (
			<View>
				<TextInput
					placeholder={'Username or email'}
					onChange={this.handleChange}
				/>
				<TouchableOpacity onPress={this.handleSubmit}>
					<View>
						<Button>
							<Icon name="plus-buttont" />
							<Text>ADD</Text>
						</Button>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

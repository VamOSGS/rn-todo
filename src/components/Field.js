import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
	View,
	Text,
	TextInput,
	Icon,
	Button,
	Caption,
	Divider
} from '@shoutem/ui';
import { TouchableOpacity, Dimensions } from 'react-native';
const w = Dimensions.get('window');

export default class Field extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			value: ''
		};
	}
	handleChange(e) {
		this.setState({ value: e.target.value });
	}
	handleSubmit() {
		if (this.state.value != '') {
			console.log('FUCK');
			this.props.onAdd(this.state.value);
			this.setState({ value: '' });
		}
	}
	render() {
		return (
			<View>
				<Divider styleName="section-header">
					<Caption>ADD TASK</Caption>
				</Divider>
				<View styleName={'horizontal'}>
					<TextInput
						style={{ width: w.width - 100, height: 50 }}
						placeholder={'Enter your task text'}
						onChange={this.handleChange}
					/>
					<Button
						style={{ marginTop: -10 }}
						onPress={this.handleSubmit}
						styleName="confirmation dark"
					>
						<Icon name="plus-button" />
						<Text>ADD</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

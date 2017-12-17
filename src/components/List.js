import React, { Component } from 'react';
import {
	View,
	ListView,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { Row, Caption, Button, Icon, Divider } from '@shoutem/ui';

export default class List extends Component {
	toggleTask = id => e => {
		this.props.onToggle(id);
	};
	render() {
		const todos = this.props.tasks;
		let list = todos;
		let message = 'Nothing to do';
		switch (this.props.filter) {
			case 'DONE':
				list = list.filter(i => i.done);
				message = `You don't have completed tasks`;
				break;
			case 'ACTIVE':
				list = list.filter(i => !i.done);
				break;
			default:
				break;
		}
		return (
			<View style={styles.m}> 
				<Divider styleName="section-header">
					<Caption>TASKS</Caption>
				</Divider>
				{list.map((item, key) => (
					<TouchableOpacity key={key} onPress={this.toggleTask(item.id)}>
						<View>
							<Row styleName="small">
								<Icon name={item.done ? 'checkbox-on' : 'checkbox-off'} />
								<Text style={item.done ? styles.done : styles.notDone}>
									{item.task}
								</Text>
							</Row>
							<Divider styleName="line" />
						</View>
					</TouchableOpacity>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	m: {
		height: 400,
	},
	notDone: {},
	done: {
		textDecorationLine: 'line-through'
	}
});

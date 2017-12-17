import React, { Component } from 'react';
import {
	View,
	ListView,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { Row, Button, Icon, Divider } from '@shoutem/ui';

export default class List extends Component {
	toggleTask = id => e => {
		this.props.onToggle(id);
	};
	render() {
		let list = this.props.tasks;
		console.log(list)
		switch (this.props.filter) {
			case 'ALL':
				let list = this.props.tasks;
				break;
			case 'DONE':
				list = [{name: 'a', done: true, id: 0}];
				break;
			case 'ACTIVE':
				list = list.filter(item => !item.done);
				break;
			default:
				break;
		}
		return (
			<View>
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
	notDone: {},
	done: {
		textDecorationLine: 'line-through'
	}
});

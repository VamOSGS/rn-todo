import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Title } from '@shoutem/ui';
import { Caption, Divider, TouchableOpacity } from '@shoutem/ui';

export default class Nav extends Component {
	state = {
		nav: ['ALL', 'ACTIVE', 'DONE']
	};
	changeFilter = f => e => {
		this.props.onFilter(f);
	};
	render() {
		const { filter } = this.props;
		return (
			<View>
				<Divider styleName="section-header">
					<Caption>FILTERS</Caption>
				</Divider>
				<View style={styles.main}>
					{this.state.nav.map((item, i) => (
						<TouchableOpacity key={i} onPress={this.changeFilter(item)}>
							<View>
								<Text style={filter == item ? styles.active : styles.text}>
									{item}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		margin: 5,
		fontWeight: '100'
	},
	active: {
		margin: 5,
		color: '#333',
		fontWeight: '900'
	}
});

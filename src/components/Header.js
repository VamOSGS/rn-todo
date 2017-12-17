import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationBar, Button, Icon, Title } from '@shoutem/ui';

export default class componentName extends Component {
	render() {
		return (
			<View style={styles.main}>
				<NavigationBar
					leftComponent={
						<Button>
							<Icon name="close" />
						</Button>
					}
					centerComponent={<Title>TODO</Title>}
					
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		height: 80,
		borderWidth: 1, 
		marginTop: 1, 
		marginBottom: -8,
		borderColor: '#d6d7da', 
	}	 
})
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
					share={{
						link: 'https://github.com/VamOSGS',
						text: 'My Github',
						title: 'Gegham Samvelyan (VamOSGS)'
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		height: 80,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	}	
})
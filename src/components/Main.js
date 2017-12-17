import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

export default class componentName extends Component {
	render() {
		return (
			<View style={styles.main}>
				<Header/>
                <ListContainer style={styles.list}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		marginTop: 23,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	list: {
		height: 100,
		padding: 10,
		backgroundColor: 'red'
	}
})
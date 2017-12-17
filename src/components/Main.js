import React, { Component } from 'react';
import ListContainer from '../containers/ListContainer';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import NavContainer from '../containers/NavContainer';
import FieldContainer from '../containers/FieldContainer';

export default class componentName extends Component {
	render() {
		return (
			<View style={styles.main}>
				<Header />
				<FieldContainer /> 
				<NavContainer />
				<ListContainer style={styles.list} />
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
	}
});

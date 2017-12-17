import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';

const store = configureStore();
export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}

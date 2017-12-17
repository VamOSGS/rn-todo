import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font, AppLoading } from 'expo';
import Root from './src/Root';
import {Spinner} from '@shoutem/ui';

export default class App extends React.Component {
	state = {
		fontsLoaded: false
	};

	async componentWillMount() {
		await Font.loadAsync({
			'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
			'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
			'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
			'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
			'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
			'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
			'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
			'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
			'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
			'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
			'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf')
		});

		this.setState({ fontsLoaded: true });
	}

	render() {
		if (!this.state.fontsLoaded) {
			return (
				<View>
					<Spinner />
				</View>
			);
		}
		return (
			<View>
				<Root />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	spin: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
import 'react-native-gesture-handler'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigator/StackNavigator'
import { BasicSideMenu } from './src/navigator/BasicSideMenu'
import { SideMenu } from './src/navigator/SideMenu'

const App = () => {
	return (
		// <View style={styles.container}>
		<NavigationContainer>
			{/* <StackNavigator /> */}
			{/* <BasicSideMenu /> */}
			<SideMenu />
		</NavigationContainer>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	}
// })

export default App

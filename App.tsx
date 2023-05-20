import 'react-native-gesture-handler'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigator/StackNavigator'
import { BasicSideMenu } from './src/navigator/BasicSideMenu'
import { SideMenu } from './src/navigator/SideMenu'
import { Tabs } from './src/navigator/Tabs'

const App = () => {
	return (
		// <View style={styles.container}>
		<NavigationContainer>
			{/* <StackNavigator /> */}
			{/* <BasicSideMenu /> */}
			<SideMenu />
			{/* <Tabs /> */}
		</NavigationContainer>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	}
// })

export default App

import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SideMenu } from './src/navigator/SideMenu'
import { AuthProvider } from './src/context/AuthContext'
// import { StyleSheet, Text, View } from 'react-native'
// import { StackNavigator } from './src/navigator/StackNavigator'
// import { BasicSideMenu } from './src/navigator/BasicSideMenu'
// import { Tabs } from './src/navigator/Tabs'

const App = () => {
	return (
		// <View style={styles.container}>
		<NavigationContainer>
			<AppState>
				{/* <StackNavigator /> */}
				{/* <BasicSideMenu /> */}
				<SideMenu />
				{/* <Tabs /> */}
			</AppState>
		</NavigationContainer>
	)
}

// const AppState = ({children}: {children: JSX.Element[]}) => {
const AppState = ({children}: any) => {
	return (
		<AuthProvider>
			{children}
		</AuthProvider>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	}
// })

export default App

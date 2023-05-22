import React from 'react'
import { Platform, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1Screen } from '../screens/Tab1Screen'
import { Tab2Screen } from '../screens/Tab2Screen'
// import { Tab3Screen } from '../screens/Tab3Screen'
import { StackNavigator } from './StackNavigator'
import { colors } from '../theme/appTheme'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { TopTabNavigator } from './TopTabNavigator'

export type StackTabsParams = {
  Tab1Screen: undefined,
  Tab2Screen: undefined,
  StackNavigator: undefined,
  TopTabNavigator: undefined,
}

export const Tabs = () => {
	return Platform.OS === 'ios'
		? <TabsIOS />
		: <TabsAndroid />

}

const BottomTabAndroid = createMaterialBottomTabNavigator<StackTabsParams>()

const TabsAndroid = () => {
	return (
		<BottomTabAndroid.Navigator
			sceneAnimationEnabled={true}
			barStyle={{
				backgroundColor: colors.primary,
			}}
			screenOptions={ ({route}) => ({
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: {
					borderTopColor: colors.primary,
					borderTopWidth: 0,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15
				},
				tabBarIcon: ({color, focused}) => {
					// console.log(route)

					let iconName = ''
					switch (route.name) {
					case 'Tab1Screen':
						iconName = 'T1'
						break
					case 'Tab2Screen':
						iconName = 'T2'
						break
					case 'StackNavigator':
						iconName = 'T3'
						break
					case 'TopTabNavigator':
						iconName = 'TN'
						break
					}
          
					return <Text style={{color}}>{iconName}</Text>
				}
			})}
		>
			<BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
			<BottomTabAndroid.Screen name="TopTabNavigator" options={{title:'Tab2'}} component={TopTabNavigator} />
			<BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
		</BottomTabAndroid.Navigator>
	)
}

const BottomTabIOS = createBottomTabNavigator<StackTabsParams>()

const TabsIOS = () => {
	return (
		<BottomTabIOS.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white'
			}}
			screenOptions={ ({route}) => ({
				tabBarActiveTintColor: colors.primary,
				tabBarStyle: {
					borderTopColor: colors.primary,
					borderTopWidth: 0,
					elevation: 0
				},
				tabBarLabelStyle: {
					fontSize: 15
				},
				tabBarIcon: ({color, focused, size}) => {
					// console.log(route)

					let iconName = ''
					switch (route.name) {
					case 'Tab1Screen':
						iconName = 'T1'
						break
					case 'Tab2Screen':
						iconName = 'T2'
						break
					case 'StackNavigator':
						iconName = 'T3'
						break
					case 'TopTabNavigator':
						iconName = 'T3'
						break
					}

					return <Text style={{color}}>{iconName}</Text>
				}
			})}
		>
			{/* <Tab.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
			<BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
			<BottomTabIOS.Screen name="TopTabNavigator" options={{title:'Tab2'}} component={TopTabNavigator} />
			<BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
		</BottomTabIOS.Navigator>
	)
}

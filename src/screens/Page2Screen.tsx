import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { style } from '../theme/appTheme'

export const Page2Screen = () => {

	const navigator = useNavigation()

	useEffect(() => {
		navigator.setOptions({
			title: 'Page 2',
			headerBackTitle: 'Back'
		})
	}, [])
  

	return (
		<View style={style.globalMargin}>
			<Text style={style.title}>
        Page2Screen
			</Text>

			<Button
				title='Go Pag 3'
				onPress={() => navigator.navigate('Page3Screen')}
			/>
		</View>
	)
}

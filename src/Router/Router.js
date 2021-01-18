import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import {useSelector} from 'react-redux';

export default function Router() {
	const Stack = createStackNavigator();
	const isSigned = useSelector(state => state.loginReducer).isSigned;

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{
					isSigned ?
						<Stack.Screen name="Home" component={Home}/>
						:
						<Stack.Screen name="Login" component={Login}/>
				}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

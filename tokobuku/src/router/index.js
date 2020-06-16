import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Splash, GetStarted, Login, Register, Home, Cart, Dashboard, Account } from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Splash, GetStarted, Login, Register, UploadPhoto } from '../pages'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}


const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Register'>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            <Stack.Screen name='UploadPhoto' component={UploadPhoto} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router
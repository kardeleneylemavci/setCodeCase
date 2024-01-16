import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsStack from "./BottomTabsStack";
import ProfileScreen from '../src/screens/ProfileScreen';
import FavoriteScreen from "../src/screens/FavoriteScreen";
import OnBoardingScreen from "../src/screens/OnBoardingScreen";
import HomeScreen from "../src/screens/HomeScreen";
import DetailScreen from "../src/screens/DetailScreen"
import NotificationScreen from "../src/screens/NotificationScreen";
const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#555FD2',
                    height: 100,
                },
                headerTitleAlign: "center",
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabsStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Favorite' component={FavoriteScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />

        </Stack.Navigator>
    );
}
export default MainStack;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import ProfileScreen from '../src/screens/ProfileScreen';
import FavoriteScreen from "../src/screens/FavoriteScreen";
import OnBoardingScreen from "../src/screens/OnBoardingScreen";
import HomeScreen from "../src/screens/HomeScreen";
import NotificationScreen from '../src/screens/NotificationScreen';
import { Image, SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabsStack() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2B2B2B',
          tabBarInactiveTintColor: '#9A9A9A',
          tabBarStyle: {
            backgroundColor: '#fff',
            padding: 1,
            marginHorizontal: 15,
            elevation: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../assets/home.png')}
                style={{
                  width: 27,
                  height: 27,
                }}
              />
            ),
          }}
        />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/heart.png')}
              style={{
                width: 27,
                height: 27,
              }}
            />
          ),
        }} />
        <Tab.Screen name="Notification" cityId={1} component={NotificationScreen} options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/bell.png')}
              style={{
                width: 27,
                height: 27,

              }}
            />
          ),
        }} />
        <Tab.Screen name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../assets/user.png')}
                style={{
                  width: 27,
                  height: 27,
                }}
              />
            ),
          }} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
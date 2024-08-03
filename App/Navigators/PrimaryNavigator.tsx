import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Containers/HomeScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import { Feather } from '@expo/vector-icons';
import { Text } from 'react-native'

const Tab = createBottomTabNavigator()

const PrimaryNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#0078be',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#121212',
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default PrimaryNavigator

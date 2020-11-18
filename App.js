/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator from './src/screens/NewsFeedScreen/HomeNavigator';
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Search Screen - Coming Soon 😀</Text>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Add Screen - Coming Soon 😀</Text>
    </View>
  );
}

function ActivityScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Activity Screen - Coming Soon 😀 </Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Accounts Screen - Coming Soon 😀</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

///

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-outline' : 'search-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person-outline' : 'person-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'heart-outline' : 'heart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {backgroundColor: 'black'},
          showLabel: false,
          //labelPosition: 'below-icon',
          activeTintColor: '#FFF',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//heart-outline

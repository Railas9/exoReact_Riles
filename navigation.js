/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useCallback, useEffect, useMemo, useState} from 'react';
 import ToDoListScreen from './toDoListScreen';
 import ItemDetail from './item';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Image,
   useColorScheme,
   View,
   TextInput,
   Button,
   Alert,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const AppNavigator = () => {
   return (
     
       <Stack.Navigator initialRouteName = 'list'   
       screenOptions={{
       headerShown: false
      }}>
           <Stack.Screen name='list' component={ToDoListScreen}/>
           <Stack.Screen name='item' component={ItemDetail}/>
       </Stack.Navigator>
     
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer1: {
     flex: 1,
     flexDirection: 'column',
   },
   title: {
     fontSize: 25,
     textAlign: 'center',
   },
   tinyLogo: {
     width: 30,
     height: 30,
   },
   centerView: {
     flex: 1,
     justifyContent: 'center',
   },
   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },
   inputInvalid: {
     height: 40,
     margin: 12,
     borderColor: 'red',
     borderWidth: 1,
     padding: 10,
   },
 });
 
 export default AppNavigator;
 
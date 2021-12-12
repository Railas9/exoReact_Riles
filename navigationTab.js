/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Exo1 from './exo/exo1/exercice1';
import Exo2 from './exo/exo2/exercice2';
import Exo3 from './exo/exo3/exercice3';
import ToDoListScreen from './exo/exo4_5/toDoListScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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

const AppNavigatorTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="exo1" component={Exo1} />
      <Tab.Screen name="exo2" component={Exo2} />
      <Tab.Screen name="exo3" component={Exo3} />
      <Tab.Screen name="exo4_5" component={ToDoListScreen} />
    </Tab.Navigator>
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

export default AppNavigatorTab;

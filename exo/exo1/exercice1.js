/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Exo1 = () => {
  return (
    <SafeAreaView style={styles.sectionContainer1}>
      <View style={styles.view1} />
      <View style={styles.view2}>
        <View style={styles.childrenView} />
        <View style={styles.childrenView} />
        <View style={styles.childrenView} />
      </View>

      <View style={styles.view3} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer1: {
    flex: 1,
    flexDirection: 'column',
  },
  view1: {
    flex: 1,
    backgroundColor: 'red',
  },
  view2: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  view3: {
    flex: 3,
    backgroundColor: 'blue',
  },
  childrenView: {
    width: 20,
    height: 20,
    backgroundColor: 'yellow',
  },
});

export default Exo1;

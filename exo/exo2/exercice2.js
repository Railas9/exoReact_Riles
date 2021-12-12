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

const Exo2 = () => {
  return (
    <SafeAreaView style={styles.sectionContainer1}>
      <View>
        <Text style={styles.title}>Inscription</Text>
        <View style={styles.centerView}>
          <Image
            style={styles.tinyLogo}
            source={require('../../public/profil.png')}
          />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Nom" />
          <TextInput style={styles.input} placeholder="Prenom" />
          <TextInput style={styles.input} placeholder="Mot de passe" />
          <TextInput
            style={styles.input}
            placeholder="Confirmation de mot de passe"
          />
          <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
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
});

export default Exo2;

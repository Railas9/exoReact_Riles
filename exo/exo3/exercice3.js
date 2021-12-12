/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo, useState} from 'react';

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

const Exo3 = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [motDePasse, setMdp] = useState('');
  const [motDePasseConf, setMdpConf] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (motDePasse.length <= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [motDePasse]);

  const isValidConfirm = useMemo(() => {
    return motDePasse === motDePasseConf;
  }, [motDePasse, motDePasseConf]);

  const checkForm = useCallback(() => {
    console.log(prenom);
    Alert.alert('Bonjour ' + prenom + ' ' + nom);
  }, [prenom, nom]);

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
          <TextInput
            value={nom}
            onChangeText={setPrenom}
            style={styles.input}
            placeholder="Nom"
          />
          <TextInput
            value={prenom}
            onChangeText={setNom}
            style={styles.input}
            placeholder="Prenom"
          />
          <TextInput
            onChangeText={setMdp}
            secureTextEntry={true}
            style={isValid ? styles.inputInvalid : styles.input}
            placeholder="Mot de passe"
          />
          <TextInput
            onChangeText={setMdpConf}
            secureTextEntry={true}
            style={isValidConfirm ? styles.input : styles.inputInvalid}
            placeholder="Confirmation de mot de paasse"
          />
          <Button title="Press me" onPress={() => checkForm()} />
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
  inputInvalid: {
    height: 40,
    margin: 12,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
  },
});

export default Exo3;

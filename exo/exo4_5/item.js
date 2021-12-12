import React, {useCallback, useEffect, useState} from 'react';
import ToDoListItem from './toDoListItem';
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
  FlatList,
  checkForm,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ItemDetail = ({navigation, route}) => {
  const {item} = route.params;
  const goBack = useCallback(
    item => {
      navigation.goBack();
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Button title="Go Back" onPress={goBack} />
        <Text>To do List</Text>
        <Text>{item}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  inputContainer: {
    flex: 1,
  },
});

export default ItemDetail;

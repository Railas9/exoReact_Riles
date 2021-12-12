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

const ToDoListScreen = props => {
  const {navigation} = props;
  const [item, itemChange] = useState('');
  const [toDoList, updateList] = useState([]);
  const [filtered, updateFiltered] = useState('');

  const checkForm = useCallback(() => {
    updateList([...toDoList, item]);
  }, [item, toDoList]);

  const goToItem = useCallback(
    i => {
      navigation.navigate('item', {item: i});
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <TextInput
            value={filtered}
            placeholder="recherche"
            onChangeText={updateFiltered}
          />
        </View>

        <View>
          <FlatList
            data={toDoList}
            renderItem={({item, index}) => {
              return item.includes(filtered) ? (
                <TouchableOpacity onPress={() => goToItem(item)}>
                  <ToDoListItem
                    tab={item}
                    index={index}
                    updateList={updateList}
                    toDoList={toDoList}
                  />
                </TouchableOpacity>
              ) : null;
            }}
          />
        </View>

        <TextInput
          value={item}
          placeholder="enter something"
          onChangeText={itemChange}
        />

        <Button title="Press me" onPress={() => checkForm()} />
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

export default ToDoListScreen;

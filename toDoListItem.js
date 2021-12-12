import React, {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StyleSheet, View, Text, Button} from 'react-native';

const ToDoListItem = ({tab, updateList, toDoList, index}) => {
  const setData = async () => {
    const value = JSON.stringify(toDoList);
    AsyncStorage.setItem('toDoList', value);
  };
  const deleteItem = useCallback(
    e => {
      toDoList.splice(e, 1);
      updateList([...toDoList]);
      setData();
    },
    [toDoList]
  );

  return (
    <View style={styles.div}>
      <Text>{tab}</Text>
      <Button title="delete" onPress={() => deleteItem(index)} />
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ToDoListItem;

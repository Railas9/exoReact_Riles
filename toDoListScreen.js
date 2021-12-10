import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ToDoListScreen = (props) => {
  
  const {navigation} = props
  const [item, itemChange] = useState('');
  const [toDoList, updateList] = useState([])
  const [filtered, updateFiltered] = useState('')

  
  const getData = async () => {
   try{
      const value = await AsyncStorage.getItem('toDoList')
      console.log(JSON.parse(value))
      return JSON.parse(value)
   }
    catch(e){
      console.error(e)
    }
  }

  const setData = async () => {

      const value = JSON.stringify(toDoList)
       AsyncStorage.setItem('toDoList', value)
   }
  
  
  function checkForm (){
      updateList([...toDoList, item])
  }
  useEffect(()=>{
    if (toDoList.length != 0){
      setData();
      getData();
    }

  },[toDoList])
  
  const goToItem = useCallback((i)=>{
    navigation.navigate('item', {item : i})
  },[navigation])



  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>

      <View >

        <TextInput 
        value={filtered}
        placeholder="recherche"
        onChangeText={updateFiltered}
        />
       
      </View>

      <View>

      <FlatList data={toDoList} renderItem={({item, index})=>{
        return item.includes(filtered) ? 
        <TouchableOpacity onPress={() => goToItem(item)}>
        <ToDoListItem tab={item} index={index} updateList={updateList} toDoList={toDoList}/> 
        </TouchableOpacity> : null
      }}
       />
      </View>

      <TextInput 
      value = {item}
      placeholder = 'enter something'
      onChangeText = {itemChange}
      />

      <Button title="Press me" onPress={() => checkForm()} />

    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  inputContainer:{
    flex:1
  }
});

export default ToDoListScreen;

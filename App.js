import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Todo from './Todo'
import NewTodo from './NewTodo'
export default function App() {

  const [todos, setTodos] = useState([])
  
  useEffect(()=> {
    // const self = this;
   
      var xhttp = new XMLHttpRequest();
     
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var theTodos = JSON.parse(this.responseText);
          // theTodos.sort(function (a, b) {
          //   return a.text.localeCompare(b.text);
          // })
          setTodos( theTodos);
      }
    }
      xhttp.open("GET", "https://cse204.work/todos", true);
      xhttp.setRequestHeader("x-api-key","9b1408-7fb3b5-265bc1-fd7469-03c537");
      xhttp.send();

  })
  return (
    <SafeAreaView style={styles.container}>
      <View style ={styles.input}>
      <NewTodo />
      </View>
      <View style={{flex:3}}>
      <ScrollView contentContainerStyle={styles.output} scrollsToTop={false}>
      {todos.map((todo, index) =>
  <Todo key={index} id={todo.id} completed={todo.completed}
    text={todo.text}  />
)}
</ScrollView>
</View>
{/* //  removeDeletedTodo={this.removeDeletedTodo} completedTodo={this.completedTodo} */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  output:{
    flex: 4,
    alignItems: 'center',
    //justifyContent: 'center',
   overflow: 'visible',
    margin: 10,
    
  },
  input:{
    flex: 1,
  },
});

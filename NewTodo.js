import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function NewTodo() {
   const [todo, setTodo] = useState(" ")
 
   const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(todo)
    const newTodoText = todo;
    var data = {
      text: newTodoText
    }
    var createRequest = new XMLHttpRequest();
    createRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // save new Todo to state
        console.log(JSON.parse(this.responseText))
        
      
      }
    }
    createRequest.open("POST", "https://cse204.work/todos", true);
  
    createRequest.setRequestHeader("Content-type", "application/json");
    createRequest.setRequestHeader("x-api-key", "9b1408-7fb3b5-265bc1-fd7469-03c537");
    createRequest.send(JSON.stringify(data));
}

    
  return (
    <View style={styles.container}>
        
        <Text style={{alignSelf: "center", fontSize: 20, fontWeight: "bold"}}> Add a todo</Text>
      <TextInput onChangeText={text => setTodo(text)} value = {todo} style={{ margin: "2%", height: 40, borderColor: 'gray', borderWidth: 1 }}/> 
        <Button title="Submit" onPress = {evt => handleSubmit(evt)}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      marginTop: "5%",
    justifyContent: 'center',
    
  },
});

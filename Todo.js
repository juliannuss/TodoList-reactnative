import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Switch } from 'react-native';

export default function Todo(props) {
    const completedTodo  = () => {
        
    var ids = props.id
    var data = {
      completed: !props.completed 
  }
  

  var xhttp4 = new XMLHttpRequest();
  xhttp4.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
       console.log("completed!")
          
      } else if (this.readyState == 4) {
          console.log(this.responseText);
      }
  }
  xhttp4.open("PUT", "https://cse204.work/todos/"+ids, true);
  xhttp4.setRequestHeader("Content-type", "application/json");
  xhttp4.setRequestHeader("x-api-key", "9b1408-7fb3b5-265bc1-fd7469-03c537");
  xhttp4.send(JSON.stringify(data));  
    }

    const deleteTodo = () => {
       
    var ids = props.id
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
          console.log("deleted")
          
            
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    }
    xhttp3.open("DELETE", "https://cse204.work/todos/"+ids, true);
    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", "9b1408-7fb3b5-265bc1-fd7469-03c537");
    xhttp3.send(); 
    

    }
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>{props.text}</Text>
      {/* <Text> Completed: </Text> */}
     <Switch style={{marginLeft:'auto'}} onValueChange={completedTodo} value={props.completed}/>
     <Button style={{marginLeft:'auto'}} title="delete" onPress={deleteTodo}/>

    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  textstyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '10%'
  }
});

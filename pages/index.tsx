import * as React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
// importing states
import {useState} from 'react'

 
function App(){
  //Creating state
  const [name, setName] = useState("")
 
  function handleText(val : string){
    setName(val)
  }
  //create instance of state hook
  return (
      <View>
        {/* binding the state component with the input component  */}
        <TextInput value={name} onChangeText={handleText} style={style.textInput}/>
        <Text>{name}</Text>
      </View>
  )
}
 
const style = StyleSheet.create({
  textInput : {
    borderColor: "#00ff00",
    borderRadius: 15,
    borderWidth: 2,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginVertical: 10
  }
})
 
export default App
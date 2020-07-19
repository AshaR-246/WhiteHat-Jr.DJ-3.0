import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'





export default class HomeScreen extends React.Component {

  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }
  render(){
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>this.goToBuzzerScreen("red")}>
            <Text style={styles.buttonText}>DJ 1</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("blue")}>
            <Text style={styles.buttonText}>DJ 2</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"skyblue"}]} 
            onPress={()=>this.goToBuzzerScreen("green")}>
            <Text style={styles.buttonText}>DJ 3</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"indigo"}]} 
            onPress={()=>this.goToBuzzerScreen("indigo")}>
            <Text style={styles.buttonText}>Dj 4</Text>
          </TouchableOpacity>
          </View>

    )
  }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 4,
    borderRadius :200,
    marginTop:50,
    width : 200,
    height:50,
    fontSize: 60,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'

  }
})





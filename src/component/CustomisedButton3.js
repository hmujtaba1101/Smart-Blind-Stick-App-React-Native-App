import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
export class CustomisedButton3 extends React.Component{
  render(){
    let {text, onPress}=this.props
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={{borderRadius: 200,paddingVertical: 15,paddingHorizontal:0,backgroundColor: '#00FF00',margin:25}}>
          <Text style={{color: 'white',fontWeight: 'bold',textTransform: 'uppercase',fontSize: 16,textAlign: 'center',}}>{text}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

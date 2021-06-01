import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
export class CustomisedButton extends React.Component{
  render(){
    let {text, onPress}=this.props
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={{borderRadius: 500,paddingVertical: 14,paddingHorizontal: 10,backgroundColor: '#4233FF'}}>
          <Text style={{color: 'white',fontWeight: 'bold',textTransform: 'uppercase',fontSize: 16,textAlign: 'center',}}>{text}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

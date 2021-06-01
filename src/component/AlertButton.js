import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export class AlertButton extends React.Component{
  render(){
    let {text}=this.props
    return(
      <TouchableOpacity >
        <View style={{borderRadius: 8,paddingVertical: 14,paddingHorizontal: 10,backgroundColor: 'red',}}>
          <Text style={{ color: 'white',fontWeight: 'bold',textTransform: 'uppercase',fontSize: 16,textAlign: 'center',}}>{text}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

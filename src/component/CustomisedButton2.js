import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IMAGE2} from './auth/Image2';

export class CustomisedButton2 extends React.Component{
  render(){
    let {text, onPress}=this.props
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={{borderRadius: 200,paddingVertical: 15,paddingHorizontal:0,backgroundColor: '#107A9E',margin:25}}>
          <Text style={{color: 'white',fontWeight: 'bold',textTransform: 'uppercase',fontSize: 16,textAlign: 'center',}}>{text}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

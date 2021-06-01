import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View,Image } from 'react-native';
import {IMAGE2} from '../component/auth/Image2';

export class ContactButton extends React.Component{
  render(){
    let {text, onPress}=this.props
    return(
      <TouchableOpacity onPress={onPress}>

        <View style={{borderRadius: 200,paddingVertical: 8,paddingHorizontal: 40,backgroundColor: '#107A9E'}}>
            <Image source={IMAGE2.ICON_USE}
            style={{height:35,width:35,marginLeft:30,alignItems:'center',paddingLeft:30}}/>    
            <Text style={{color: 'white',fontWeight: 'bold',textTransform: 'uppercase',fontSize: 16,textAlign: 'center',}}>{text}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}

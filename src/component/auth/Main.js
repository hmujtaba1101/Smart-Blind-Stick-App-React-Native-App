import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";

import { IMAGE2 } from './Image2';
import { CustomisedButton3 } from '../CustomisedButton3';
export class Main extends React.Component{
  render(){
    return (
      <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
          <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
            <Image source={IMAGE2.ICON_BLIND}
            style={{height:200,width:150,borderRadius:120}}/>

          </View>
          <View  >
            <Text style={{color:'#107A9E',marginLeft:80,fontSize:16}}>Welcome To The Blind Stick App!</Text>
          </View>  
          <View style={{width:20,height:20}} />
          <CustomisedButton3 text="Login" onPress={()=>this.props.navigation.navigate('Login')}/>

          <View style={{width:20,height:20}} />
          <CustomisedButton3 text="Signup" onPress={()=>this.props.navigation.navigate('Signup')}/>



          

      </View>
    
  );
  }
}
  

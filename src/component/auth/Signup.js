import React from 'react';
import { StyleSheet, View, Text, Button,TextInput,TouchableOpacity,Alert,Image } from 'react-native';
import { CustomisedButton } from '../CustomisedButton';
import { Item, Input, Label } from 'native-base';
import * as firebase from 'firebase';
import { IMAGE2 } from './Image2';
import { CustomisedButton2 } from '../CustomisedButton2';

export class Signup extends React.Component{
  state= {

    email:"",
    password:""

  }
  userSignunp(email,passw){
    firebase.auth().createUserWithEmailAndPassword(email, passw)
    .then(()=>{
      this.props.navigation.navigate('app')

    })
    .catch(error=>{
      Alert.alert(error.message)

    })
  
  
    
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
        <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
        <Image source={IMAGE2.ICON_BLIND}
        style={{height:200,width:150,borderRadius:120}}/>

        </View>
        <Item floatingLabel>
          <Label>
            Email
          </Label>
          <Input
          value={this.state.email}
          onChangeText={(text)=>this.setState({email:text})}/>
        </Item>
        <Item floatingLabel>
          <Label>
            Password
          </Label>
          <Input
          value={this.state.password}
          onChangeText={(text)=>this.setState({password:text})}/>
        </Item>
         
      
        <View style={{width:20,height:20}} /> 
        <CustomisedButton2 text="Submit" onPress={()=>this.props.navigation.navigate('app')}/>
      
        <View style={{width:20,height:20}} /> 
        <CustomisedButton2 text="SignUp" onPress={()=>this.userSignunp(this.state.email,this.state.password)}/>

      </View>

    )
  }
}


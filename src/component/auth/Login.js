import React from 'react';
import {  View, Text, TouchableOpacity, TextInput,Platform,StyleSheet ,StatusBar,Alert, Image} from 'react-native';
import { Item, Input, Label } from 'native-base';
import { CustomisedButton } from '../CustomisedButton';
import { IMAGE2 } from './Image2';
import * as firebase from 'firebase';
import { CustomisedButton2 } from '../CustomisedButton2';

export class Login extends React.Component{
  state= {

    email:"",
    password:""

  }
  userSignin(email,passw){
    firebase.auth().signInWithEmailAndPassword(email, passw)
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
        <CustomisedButton2 text="Login" onPress ={()=>this.userSignin(this.state.email,this.state.password)}/>
       
       

        <View style={{width:20,height:20}}/>
        <CustomisedButton2 text="Signup" onPress={()=>this.props.navigation.navigate('Signup')}/>
        
    </View>
      
    )

      
   }
}

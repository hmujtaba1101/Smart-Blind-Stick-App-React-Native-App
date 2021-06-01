import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CustomHeader } from '../CustomHeader';
import { AlertButton } from '../AlertButton';

export class Alert extends React.Component{
    render(){
        return(
            <View  style={{flex:1}}>
                <CustomHeader title="Profile" navigation={this.props.navigation}/>
                <View style={{flexDirection:'column',height: '100%',width: '100%',backgroundColor:'#fff',alignItems:'center',paddingTop:2,justifyContent: 'center'}}>
                    <MaterialIcons name="add-alert" size={200} color="black" height='100% '/>   
                    
                    <View style={{width:20,height:20}}/>  
                    <AlertButton text="STOP" />    


                </View>


            </View>
        )
    }
}
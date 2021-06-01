import React from 'react';
import { View } from 'react-native';
import { CustomisedButton } from '../CustomisedButton';
import { FontAwesome } from '@expo/vector-icons';
import { CustomHeader } from '../CustomHeader';
export class Home extends React.Component{
  
  render(){

    return(
      <View style={{flex:1}}> 
        <CustomHeader title="Profile" navigation={this.props.navigation}/>
       
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
          <CustomisedButton text="WHERE IS MY WALK" onPress={()=>this.props.navigation.navigate('Map')}/>
          <View style={{ width:20,height:20}} /> 
     
          <CustomisedButton text="GET NAVIGATIONS" onPress={()=>this.props.navigation.navigate('Alert')}/>
          <View style={{ width:20,height:20}} /> 
      
          <CustomisedButton text="NEARBY STOPS" onPress={()=>this.props.navigation.navigate('Nearby')}/>
          <View style={{ width:20,height:20}} /> 
     
          <CustomisedButton text="CURRENT LOCATIONS" onPress={()=>this.props.navigation.navigate('Map')}/>
          <View style={{ width:20,height:20}} /> 
  
          <View style={{flexDirection:'column',backgroundColor:'#fff',alignItems:'center',justifyContent: 'center'}}>
        
            <FontAwesome  name="blind" size={200} color="grey" />
        
           </View>
        
        </View>

      </View>
    )
  }
}


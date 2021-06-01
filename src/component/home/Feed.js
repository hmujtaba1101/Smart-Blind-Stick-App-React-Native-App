import { View,Image } from 'react-native';
import { Text,Button } from 'native-base';
import { CustomHeader} from '../CustomHeader';
import { CustomisedButton } from '../CustomisedButton';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { IMAGE2 } from '../auth/Image2';

export class Feed extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <CustomHeader title="Feed" navigation={this.props.navigation}/>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFF'}}>
                    <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
                         <Image source={IMAGE2.ICON_BLIND}
                         style={{height:200,width:150,borderRadius:120}}/>

                    </View>

                    <CustomisedButton text="WHERE IS MY WALK" onPress={()=>this.props.navigation.navigate('Map')}/>
                    <View style={{width:20,height:20}} /> 

                    <CustomisedButton text="GET NAVIGATIONS" onPress={()=>this.props.navigation.navigate('Alert')}/>
                    <View style={{width:20,height:20}} /> 

                    <CustomisedButton text="NEARBY STOPS" onPress={()=>this.props.navigation.navigate('Nearby')}/>
                    <View style={{width:20,height:20}} /> 

                    <CustomisedButton text="CURRENT LOCATIONS" onPress={()=>this.props.navigation.navigate('Map')}/>
                    <View style={{width:20,height:20}} /> 

                   


                </View>
               
            </View>
        );
    }

}
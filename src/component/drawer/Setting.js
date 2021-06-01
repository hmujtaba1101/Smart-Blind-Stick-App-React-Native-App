import { Form } from 'native-base';
import React from 'react';
import { View, Text,Image} from 'react-native';
import { CustomHeader } from '../CustomHeader';
import { CustomisedButton } from '../CustomisedButton';
import { ContactButton } from '../ContactButton';
import { IMAGE2 } from '../auth/Image2';
import { AboutButton } from '../AboutButton';
export class Setting extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                <CustomHeader title="Profile" navigation={this.props.navigation}/>
                <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
                    <Image source={IMAGE2.ICON_BLIND}
                    style={{height:200,width:150,borderRadius:120}}/>

                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    
        
    
                    <ContactButton text="Contact Us" onPress={()=>this.props.navigation.navigate('ContactUs')} />
                    <AboutButton  text="About Us" onPress={()=>this.props.navigation.navigate('About')}/>


                </View>


            </View>
        )
    }
}
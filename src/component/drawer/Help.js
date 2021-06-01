import React from 'react';
import { View,Text,Dimensions ,Image} from 'react-native';
import { CustomHeader } from '../CustomHeader';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { CustomisedButton } from '../CustomisedButton';
import { ContactButton } from '../ContactButton';
import { LogoutButton } from '../Signout';
import { IMAGE2 } from '../auth/Image2';
import { AboutButton } from '../AboutButton';
import { ScrollView } from 'react-native';
export class Help extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                <CustomHeader title="Profile" navigation={this.props.navigation}/>
                <View style={{width:20,height:20}} /> 
                
                <Image source={IMAGE2.ICON_BLIND}
                style={{height:200,width:150,marginLeft:100}}/>
                <ScrollView>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Card style={{ width: Dimensions.get('window').width - 50, borderRadius: 30, shadowColor: "#000", shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84, elevation: 5,backgroundColor:'#87ceeb'}}>
                            <Card.Content>
                                <Title style={{color:"#FFFFFF"}}>About Us</Title>
                                    <Paragraph style={{color:'#FFFFFF'}}>You Can Contact Us By Clicking on the Contact Us Options </Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1575908906110-6be79061f273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1923&q=80' }} />
                        </Card>

                        <View style={{width:20,height:20}} /> 
                
                        <ContactButton text="ContactUs" onPress={()=>this.props.navigation.navigate('ContactUs')}/>
                        <View style={{width:20,height:20}} /> 
                        <LogoutButton text="Signout" onPress={()=>this.props.navigation.navigate('auth')}/>
                        <View style={{width:20,height:20}} /> 
                        <AboutButton  text="About" onPress={()=>this.props.navigation.navigate('About')}/>
                    </View>
                </ScrollView>
                
                


            </View>
        )
    }
}
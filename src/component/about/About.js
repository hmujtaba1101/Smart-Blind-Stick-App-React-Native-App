import React from 'react';
import { View , Text,Dimensions,SafeAreaView,StyleSheet,Image } from 'react-native';
import { CustomHeader } from '../CustomHeader';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { IMAGE2 } from '../auth/Image2'; 

export class About extends React.Component{
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'#FFFFFF'}}>
                <CustomHeader title="About" navigation={this.props.navigation}/>
                <View style={{width:20,height:20}} />  
                <ScrollView > 
                    <View style={{alignItems:'center'}}>
                         <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
                            <Image source={IMAGE2.ICON_BLIND}
                            style={{height:200,width:150,borderRadius:120}}/>

                         </View>    
                    <Card style={{ width: Dimensions.get('window').width - 50, borderRadius: 30, shadowColor: "#000", shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84, elevation: 5,backgroundColor:'#87ceeb'}}>
                        <Card.Content>
                            <Title style={{color:'#040404'}}>About Us</Title>
                            <Paragraph style={{color:'#FFFFFF'}}>As We Are Providing Stick For Blind Person To Help Them Survive In This World Without Getting Help From Others For Small Work </Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1575908906110-6be79061f273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1923&q=80' }} />
                     </Card>
                    <View style={{width:20,height:20}} />  
                    <Card style={{ width: Dimensions.get('window').width - 50, borderRadius: 30, shadowColor: "#000", shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84, elevation: 5,backgroundColor:'#C5B4E3'}}>
                        <Card.Content>
                            <Title style={{color:'#FFFFFF'}}>About App</Title>
                            <Paragraph style={{color:'#040404'}}>The App Will Be Used By The Care Takers Of The Blind Person To Know Where The Person Is </Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1575908906110-6be79061f273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1923&q=80' }} />
                    </Card>

                    </View>


                </ScrollView>
                

            </SafeAreaView>

            
        )
    }

}

import React from 'react';
import { Image ,Dimensions } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {IMAGE} from './src/constants/Image';
import{SideMenu,About,Login,Signup,Help,Setting,Alert,Map,Nearby,Main,ContactUs } from './src/component';
import { Feed } from './src/component/home/Feed';
import { Home } from './src/component/home/Home';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp( firebaseConfig );



const navOptionHandler = (navigation)=>{
  {
    header: null
  }
}
const HomeStack=createStackNavigator({
  Home:{
    screen:Feed,
    navigationOptions:navOptionHandler
  },
  Alert:{
    screen:Alert,
    navigationOptions:navOptionHandler

  },
  Map:{
    screen:Map,
    navigationOptions:navOptionHandler
  },
  Nearby:{
    screen:Nearby,
    navigationOptions:navOptionHandler


  }

})
const MainTabs=createBottomTabNavigator({
  Home:{
    screen:HomeStack,
    navigationOptions:{
     
      tabBarIcon:({ tintcolor }) =>(
        <Image
          source={IMAGE.ICON_WHITE_HOME}
          resizeMode='contain'
          style={{width:20,height:20}}
        
        />

      )
    }
  },
  About:{
    screen:About,
    navigationOptions:{

      tabBarIcon:({ tintcolor }) =>(
        <Image
          source={IMAGE.ICON_WHITE_ABOUT}
          resizeMode='contain'
          style={{width:20,height:20}}
        
        />

      )
    }
  },
  Setting:{
    screen:Setting,
    navigationOptions:{
     
      tabBarIcon:({ tintcolor }) =>(
        <Image
          source={IMAGE.ICON_WHITE_SETTING}
          resizeMode='contain'
          style={{width:20,height:20}}
        
        />

      )
    }
},
  
  

});
const MainStack = createStackNavigator(
  {
    Homes:{
      screen:MainTabs,
      navigationOptions:navOptionHandler
    },
    Setting:{
      screen:Setting,
      navigationOptions:navOptionHandler
    },
    Help:{
      screen:Help,
      navigationOptions:navOptionHandler
    },
    ContactUs:{
      screen:ContactUs,
      navigationOptions:navOptionHandler
    }
  },
  {initialRouteName:'Homes'}
)

const appDrawer =createDrawerNavigator(
  {
  drawer:MainStack
  },
  {
    contentComponent:SideMenu,
    drawerWidth:Dimensions.get('window').width * 3/4
  }
)
const authStack = createStackNavigator(
  {
    Main:{
      screen:Main,
      navigationOptions:navOptionHandler


    },
    Login:{
      screen:Login,
      navigationOptions:navOptionHandler
    },
    Signup:{
      screen:Signup,
      navigationOptions:navOptionHandler
    }
  }
)
const MainApp = createSwitchNavigator(
  {
    app:appDrawer,
    auth:authStack
  },
  {
    initialRouteName:'auth'
  }
)
export default createAppContainer(MainApp)
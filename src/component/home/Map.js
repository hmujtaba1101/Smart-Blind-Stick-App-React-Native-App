import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export class Map extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <MapView style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,}} />

      </View>
    )
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });

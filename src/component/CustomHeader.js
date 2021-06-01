import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export  class CustomHeader extends React.Component {
  render() {
      let {title, isHome}=this.props
    return (
        <Header>
          <Left>
           {   
                // isHome?
                <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                    <Icon name='menu' />
                </Button>
              
                
            }     
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      
    );
  }
}
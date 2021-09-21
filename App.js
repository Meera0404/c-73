import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Transactionscreen from './screens/Bookstranscreen';
import Search from './screens/Searchscreen';


export default class App extends React.Component{
  render(){
    return (
       <AppContainer/>

     
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:Transactionscreen},
  Search : {screen:Search},
},
{
  defaultNavigationOptions:({navigation})=> ({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName==="Transaction"){
        return(
          <Image source ={require("./assets/book.png")} style={{width:40,height:40}}/>
        )
      }
      else if (routeName === "Search"){
        return(
        <Image source={require("./assets/searchingbook.png")} style={{width:40,height:40}}/>
        )
      }
    }
  })
}
)


const AppContainer = createAppContainer(TabNavigator)
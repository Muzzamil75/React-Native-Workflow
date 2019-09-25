import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import FlatListC from "./src/components/FlatListC";
import HomeScreen from "./src/components/HomeScreen";
import SectionListC from "./src/components/SectionList";
import FetchData from "./src/components/FetchData";
import ChatScreen from "./src/components/ChatScreen";

const AppNavigator = createStackNavigator(
  {
    HomeAlias: HomeScreen,
    FlatListC: FlatListC,
    SectionListC:SectionListC,
    FetchData : FetchData,
    ChatScreen : ChatScreen
  },
  {
    initialRouteName: "FetchData",
    //to make same header in the entire app
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2D1EFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    
  }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Main extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

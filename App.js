import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import FlatListC from "./src/components/FlatListC";
import HomeScreen from "./src/components/HomeScreen";
import SectionListC from "./src/components/SectionList";

const AppNavigator = createStackNavigator(
  {
    HomeAlias: HomeScreen,
    FlatListC: FlatListC,
    SectionListC:SectionListC
  },
  {
    initialRouteName: "FlatListC"
    
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

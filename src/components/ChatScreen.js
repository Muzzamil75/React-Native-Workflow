import React, { Component } from "react";
import { Text, View, Image,Button } from "react-native";
import FetchData from "./FetchData";

export default class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => (
        <>
          <Image
            source={{uri: navigation.getParam('picture')}}
            style={{ width: 35, height: 35, borderRadius: 50 }}
          />
          <Text style= {{marginLeft:10,color:'white'}}>{navigation.state.params.name.toUpperCase()}</Text>
        </>
      ),
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
        />
      ),
      
    };
  };
  render() {
    return (
      <View style={{ padding: 10, flex: 1 }}>
        {/* <FetchData /> */}
      </View>
    );
  }
}

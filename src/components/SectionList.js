import React, { Component } from "react";
import { SectionList, Text,View, StyleSheet,ImageBackground, Alert,TouchableNativeFeedback } from "react-native";
import {  Divider } from "react-native-paper";

export default class SectionListC extends Component {
  static navigationOptions = {
    title: "Oh yeah ! SectionList",

    headerStyle: {
      backgroundColor: "brown"
    },
    headerTitleStyle: {
      color: "#fff"
    }
  };
  state = {
    data: [
      {
        title: "Android",
        data: ['Oreo','5.23','4.12']
      },
      {
        title: "Fruits",
        data: ['mango','pineapple','banana']
      }
      
    ]
  };
  handleItem =(item) =>{
    Alert.alert(item)
  };
  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 3 }}>
            <SectionList
              sections={this.state.data}
              renderItem={({ item }) => (
                <Text style={styles.item} onPress={() => Alert.alert(item.key)}>
                  {item}
                </Text>
              )}
              renderSectionHeader={({section :{title}}) => <Text>{title}</Text>}
              // sectionSeparatorComponent={() => <Divider />}
              // onPress ={()=>this.handleItem}
            />
          </View>

          {/* <TouchableNativeFeedback style={{ flex: 2 }} onPress ={()=>this.props.navigation.navigate('FetchData')}>
            <ImageBackground
              source={require("../../assets/helpful.jpg")}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </TouchableNativeFeedback> */}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: "black",
    height: 44
  }
});

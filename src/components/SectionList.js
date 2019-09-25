import React, { Component } from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { Divider } from "react-native-paper";

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
        data: ["Oreo", "5.23", "4.12"]
      },
      {
        title: "Fruitsa",
        data: ["mango", "pineapple", "banana"]
      },
      {
        title: "Fruitss",
        data: ["mango", "pineapple", "banana"]
      },
      {
        title: "Fruits",
        data: ["mango2", "pineapple3", "banana2"]
      }
    ]
  };

  renderItem = item => {
    return (
      <Text style={styles.item} onPress={() => Alert.alert(item.key)}>
        {item}
      </Text>
    );
  };

  sectionHeader = title => {
    return <Text style={styles.header}>{title}</Text>;
  };

  render() {
    return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <SectionList
              keyExtractor={(item, index) => console.log(item)}
              sections={this.state.data}
              renderItem={({ item }) => this.renderItem(item)}
              renderSectionHeader={({ section: { title } }) =>
                this.sectionHeader(title)
              }
              ItemSeparatorComponent={() => null}
              SectionSeparatorComponent={() => <Divider />}
              onPress={title => Alert.alert(title)}
              refreshing
            />
          </View>

          <View style={{ flex: 2 }}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate("FetchData")}
            >
              <ImageBackground
                source={require("../../assets/helpful.jpg")}
                style={{ width: "100%", height: "100%" }}
              ></ImageBackground>
            </TouchableWithoutFeedback>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor : 'brown',
    padding: 15,
    marginVertical: 4,
    fontSize : 18
  },
  header: {
    fontSize: 32
  }
});

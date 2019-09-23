import React, { Component } from "react";
import { FlatList, Text, StyleSheet, Alert } from "react-native";
import { Button, Divider } from "react-native-paper";

export default class FlatListC extends Component {
  static navigationOptions = {
    title: "Oh yeah ! Flatlist",

    headerStyle: {
      backgroundColor: "brown"
    },
    headerTitleStyle: {
      color: "#fff"
    }
  };
  state = {
    data: [
      { key: "Android" },
      { key: "iOS" },
      { key: "Java" },
      { key: "Swift" },
      { key: "Php" },
      { key: "Hadoop" },
      { key: "Sap" },
      { key: "Python" },
      { key: "Ajax" },
     
    ]
  };
  render() {
    return (
      <>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
         
              <Text style={styles.item} onPress={()=>Alert.alert(item.key)}>
                {item.key}
              </Text>
            
          )}
          ItemSeparatorComponent={()=> <Divider />}  

        />
     

         <Button
          style={{
            width: 160,
            height: 40,
            marginTop: 10,
            alignSelf: "center",
            color: "#fff"
          }}
          contentStyle={{ color: "#fff" }}
          mode="contained"
          onPress={() => {
            this.props.navigation.navigate("SectionListC");
          }}
        >
          --> Section List
        </Button>
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

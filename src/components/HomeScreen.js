import React, { Component } from "react";
import { StyleSheet, View, TextInput, ImageBackground } from "react-native";
import {  Button } from "react-native-paper";


export default class HomeScreen extends Component {
  static navigationOptions = {  
    title: 'Home Login',  
    headerStyle: {  
        backgroundColor: '#f4511e',  
    },  
    headerTitleStyle: {  
       fontWeight: 'bold',  
    },  
};  
  state = {
    name: "",
    psw: ""
  };

  handleName = n => this.setState({ name: n });

  render() {
    return (
       <ImageBackground source={require('../../assets/pic.jpg')} style={{ width: '100%', height: '100%' }} >
       <View style={{ flex: 2 }}/>

        <View style={styles.innerView}>
          <TextInput
            onChangeText={this.handleName}
            placeholder="Enter name"
            label="Name"
            style={{width:'100%',marginHorizontal:20,marginBottom:10 }}
          />

          <TextInput
            onChangeText={psw => this.setState({ psw })}
            placeholder="Enter password"
            style={{ width:'100%',marginHorizontal:20,marginBottom:10 }}
            label="Password"
          />

          <Button
              style={{ width: 100, height: 40,marginTop:10, alignSelf:'center', color: '#fff' }}
              contentStyle={{ color: '#fff' }}
              mode="contained"
              onPress={() => {
                this.props.navigation.navigate('FlatListC')
              }}>
              Submit
            </Button>
        </View>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: "row"
  },
  innerView: {
    // width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    flex:3
  },
  skyblue: {
    width: 60,
    height: 60,
    backgroundColor: "skyblue"
  },
  steelblue: {
    width: 60,
    height: 60,
    backgroundColor: "steelblue"
  }
});

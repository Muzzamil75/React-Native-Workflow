import React, { Component } from "react";
import { TextInput,Text,View } from "react-native";
import { Button,Modal } from "react-native-paper";

export default class ModalC extends Component {
    
handleSubmit =()=>{
    this.props.submit();
    this.setState({display : false})
}
state = {
    display : this.props.display
}
  render() {
    return (
      <Modal
        visible={this.state.display}
        animationType="slide"
        ani
      >
      <View style={{marginHorizontal:30,padding:15 ,backgroundColor:'#7DF3FF'}}>
      <Text style= {{color: 'white',alignSelf:'center',fontWeight : 'bold',fontSize : 25}}>Add New User </Text>
        <TextInput
          onChangeText={name => this.props.handleName(name)}
          placeholder="Enter Name"
          style={{ width: "100%", marginHorizontal: 20, marginBottom: 10 }}
          label="Password"
        />

         <TextInput
          onChangeText={psw => this.props.handleLastName(psw)}
          placeholder="Enter Password"
          style={{ width: "100%", marginHorizontal: 20, marginBottom: 10 }}
          label="Password"
        />

         <Button
              style={{ alignSelf:'center', color: '#fff' }}
              contentStyle={{ color: 'red' }}
              mode="contained"
              onPress={this.handleSubmit}
            >
              Add
            </Button>
            </View>
       
      </Modal>
    );
  }
}

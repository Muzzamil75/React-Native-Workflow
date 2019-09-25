import React, { Component } from "react";
import { Text, View, Image, ScrollView ,Alert,Divider} from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import ModalC from "./ModalC";

const DATA = [
  {
    name: {
      first: "Muzamil",
      last: "ijaz"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/92.jpg"
    }
  }
];
export default class FetchData extends Component {
  static navigationOptions = {
    title: "People Fetcher"
  };
  state = {
    data: [],
    openModal: false,
    newUser: {},
    display: false
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=7")
      .then(res => res.json())
      .then(res => this.setState({ data: res.results }));
  }

  handleName = (name = "") => {
    let obj = {
      name: {
        ...this.state.newUser.name,
        first: name
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/95.jpg"
      }
    };
    this.setState({ newUser: obj }, () => console.log(this.state.newUser));
  };

  handleLastName = (lastname = "") => {
    let obj = {
      name: {
        ...this.state.newUser.name,
        last: lastname
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/96.jpg"
      }
    };
    this.setState({ newUser: obj }, () => console.log(this.state.newUser));
  };

  submit = () => {

      let array = [...this.state.data];
      console.log("length of array ", array.push(this.state.newUser));
      this.setState({ openModal: false });
      this.setState({ data: array }, () =>
        console.log("latest :", this.state.data)
      );
      this.setState({ newUser: {} });
  };

  render() {
    return (
      <>
        <ScrollView>
          <View style={{marginHorizontal:10  }}>
            {this.state.data.map((item, key) => {
              return (
                <TouchableRipple
                onPress={()=>this.props.navigation.navigate('ChatScreen',{name : item.name.first +' ' + item.name.last,picture:item.picture.large})}
                key={key}
                >
                <View
                  style={{ flexDirection: "row", marginVertical: 6 }}
                  testID='simple flex row view'
                  >
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    source={{ uri: item.picture.large }}
                  />
                  <Text style={{ marginLeft: 15, alignSelf: "center" }}>
                    {item.name.first + " " + item.name.last}
                  </Text>
                </View>
                    </TouchableRipple>
              );
            })}
          </View>
        </ScrollView>

        {this.state.openModal && (
          <ModalC
            display={this.state.display}
            handleName={this.handleName}
            handleLastName={this.handleLastName}
            submit={this.submit}
          />
        )}

        <View
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            bottom: 0,
            padding: 20
          }}
        >
          <Button
            style={{ borderRadius: 100}}
            contentStyle={{ color: "#fff", alignContent: "center" }}
            mode="contained"
            onPress={() => {
              this.setState({ openModal: true, display: true });
            }}
          >
            + Add
          </Button>
        </View>
      </>
    );
  }
}

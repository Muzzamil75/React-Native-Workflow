import React, { Component } from 'react'

export default class ProfileScreen extends Component {
static navigationOptions = {
    headerTitle : 'i am the title'
}

  render() {
    return (
     <View style= {{flex:1}}>
        <Text>Helloe i am profile screen</Text>
     </View>
    )
  }
}

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state={
      counter:0
    }
  }


componentDidMount()
{
  console.log("app comp has mounted")
}


incrementcounter=()=>{
  this.setState({counter :this.state.counter + 2})
}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
         {this.state.counter}
        </Text>
        <Button title = "click me" color="blue" onPress={this.incrementcounter}/>
      </View>
    );
  }
}

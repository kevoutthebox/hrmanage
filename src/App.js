import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'

class App extends Component {
  componentWIllMount() {
    const config = {
      apiKey: "AIzaSyBvCUOhR4jOl9tcJEgHx6z5j2jSqgYeeTE",
      authDomain: "hrmanage-c8c12.firebaseapp.com",
      databaseURL: "https://hrmanage-c8c12.firebaseio.com",
      projectId: "hrmanage-c8c12",
      storageBucket: "hrmanage-c8c12.appspot.com",
      messagingSenderId: "373789808912"
    };

firebase.initializeApp(config);
  }
  render() {

    const store = {createStore(reducers)};

    return (
      <Provider store={store}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}


export default App;

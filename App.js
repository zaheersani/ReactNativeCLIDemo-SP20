/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const App = () => {

  const buttonPressed = (msg) => {
    alert(msg);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Hello from RN CLI</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 10 }}>
          <Button title="Button 1" onPress={buttonPressed.bind(this, "Hi from Button 1")} />
        </View>
        <View style={{ padding: 10 }}>
          <Button title="Button 2" onPress={buttonPressed.bind(this, "Hi from Button 2")} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1
  }
});

export default App;

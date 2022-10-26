/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const App = function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          // flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
        }}>
        <Text
          style={{
            // flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          This is the app
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

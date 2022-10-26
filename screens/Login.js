/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('News')}>
        <Text>Navigate to News</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

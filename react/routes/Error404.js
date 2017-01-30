import React from 'react';
import { View, Text } from 'react-native';
import Link from 'AwesomeProject/react/components/Link';

export default Error404 = () => (
  <View>
    <Text>Page not Found.</Text>
    <Link to="/">Back to Home</Link>
  </View>
);
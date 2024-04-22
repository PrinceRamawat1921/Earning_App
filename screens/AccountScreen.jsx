// AccountScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="user" size={100} color="#333" />
      <Text style={styles.title}>Account Screen</Text>
      <Text style={styles.text}>This is the account screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});

export default AccountScreen;

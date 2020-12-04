import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity2: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
        Child One
      </Text>
      <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
        Child Two
      </Text>
      <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
        Child Three
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
  },
  child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Activity2;

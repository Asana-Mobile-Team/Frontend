import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const Goals = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>My Goals</Text>

        <View style={styles.taskBox}>
          <Text>Goal 1</Text>
        </View>

        <View style={styles.taskBox}>
          <Text>Goal 2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
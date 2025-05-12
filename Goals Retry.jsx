import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const goalsData = [
  { id: '1', title: 'Put in Goal #1' },
  { id: '2', title: 'Put in Goal #2' },
  { id: '3', title: 'Put in Goal #3' },
  { id: '4', title: 'Put in Goal #4' },
];

const Goals = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Goals</Text>
      <FlatList
        data={goalsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>• {item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goalItem: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  goalText: {
    fontSize: 18,
  },
});

export default Goals;
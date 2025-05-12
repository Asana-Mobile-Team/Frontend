
import React from 'react';
import {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { ChevronLeftIcon, ShareIcon, AdjustmentsVerticalIcon, PlusIcon } from 'react-native-heroicons/solid';
const Tasks = () => {
  const columns = ['Name', 'Due Date', 'Collaborators', 'Task Visibility'];
  const tasks = [
    { name: 'Task 1', dueDate: 'May 15', collaborators: 'John, Jane', visibility: 'Public' },
    { name: 'Task 2', dueDate: 'May 20', collaborators: 'Alice, Bob', visibility: 'Private' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <ChevronLeftIcon size={24} color="black" />
          <Text style={styles.headerText}>My Tasks</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity style={[styles.button,{flexDirection:'row'}]} >Share <ShareIcon size={20} color="black" /></TouchableOpacity>
          <TouchableOpacity style={[styles.button,{flexDirection:'row'}]}> Customize<AdjustmentsVerticalIcon size={20} color="black" /></TouchableOpacity>
        </View>
      </View>

      {/* Navigation */}
      <View style={styles.nav}>
        {['List', 'Board', 'Calendar', 'Files'].map((item) => (
          <Text key={item} style={styles.navItem}>{item}</Text>
        ))}
        <PlusIcon size={20} color="black" />
      </View>
      <View style={styles.horizontalLine} />

      {/* Dropdown */}
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Add Task</Text>
      </TouchableOpacity>

      {/* Kanban Board */}
      <View style={styles.kanbanBoard}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.taskRow}>
              <Text style={styles.taskText}>{item.name}</Text>
              <Text style={styles.taskText}>{item.dueDate}</Text>
              <Text style={styles.taskText}>{item.collaborators}</Text>
              <Text style={styles.taskText}>{item.visibility}</Text>
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.headerRow}>
              {columns.map((col) => (
                <Text key={col} style={styles.headerText}>{col}</Text>
              ))}
            </View>
          )}
        />
      </View>
         
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' , width:'100%', margin:'3%'},
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  leftHeader: { flexDirection: 'row', alignItems: 'center' },
  headerText: { fontSize: 13, fontWeight: 'bold', marginLeft: 10 },
  rightHeader: { flexDirection: 'row' },
  button: { borderWidth: 1, borderColor: '#ccc',borderRadius:6, padding: 3, marginLeft: 10 },
  nav: { flexDirection: 'row', alignItems: 'center', marginVertical: 10,marginLeft:'2%' },
  navItem: { marginRight: 15, fontSize: 16 },
  horizontalLine: { height: 1, backgroundColor: '#ccc', marginVertical: 10 },
  dropdown: { backgroundColor: 'blue', padding: 10,width:'20%', borderRadius: 5, alignItems: 'center',margin:'3%' },
  dropdownText: { color: 'white', fontSize: 12 },
  kanbanBoard: { marginTop: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, backgroundColor: '#ddd' },
  taskRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10,margin:'3%', borderBottomWidth: 1, borderBottomColor: '#ccc' },
  taskText: { fontSize: 14 },
});

export default Tasks;

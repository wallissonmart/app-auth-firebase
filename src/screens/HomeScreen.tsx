import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from '@styles/index';
import HomeInput from '@components/HomeInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Task, useHome} from '@hooks/useHome';
import TaskItem from '@components/TaskItem';
import ToastMessage from '@components/ToastMessage';

interface RenderTaskItemProps {
  index: number;
  item: Task;
}

const HomeScreen = () => {
  const {
    setTaskName,
    getTasks,
    getTasksPrivate,
    addNewTask,
    editTask,
    deleteTask,
    toggleTask,
    editTaskName,
    loading,
    taskName,
    tasks,
  } = useHome();
  const userUid = auth().currentUser?.uid;

  useEffect(() => {
    if (userUid) {
      if (
        userUid === 'Vr90ngjP4XWagcJVyoXY7IinTLr1' ||
        userUid === 'ZhmI9wRSe6PqEXjmgwuHGEyA1j63'
      ) {
        getTasksPrivate();
      } else {
        getTasks(userUid);
      }
    }
  }, []);

  if (loading) {
    return (
      <View style={stylesHome.containerLoad}>
        <ActivityIndicator color="#000" size={20} />
      </View>
    );
  }

  const renderItem = ({index, item}: RenderTaskItemProps) => (
    <TaskItem
      index={index}
      item={item}
      toggleTask={toggleTask}
      editTaskName={editTaskName}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  );

  function signOut() {
    auth().signOut();
  }

  return (
    <View style={styles.container}>
      <ToastMessage />

      <Text style={styles.title}>Gerenciador de tarefas</Text>

      <Button title="Sair" onPress={signOut} />

      <View style={stylesHome.row}>
        <HomeInput
          placeholder="Nome da tarefa"
          value={taskName}
          onChangeText={setTaskName}
          style={stylesHome.homeInput}
        />
        <TouchableOpacity
          style={stylesHome.buttonAddTask}
          onPress={() => addNewTask(userUid!!)}>
          <MaterialCommunityIcons name="plus" style={stylesHome.icon} />
        </TouchableOpacity>
      </View>

      <FlatList data={tasks} renderItem={renderItem} style={{width: '100%'}} />
    </View>
  );
};

export default HomeScreen;

const stylesHome = StyleSheet.create({
  containerLoad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  homeInput: {
    borderRadius: 8,
    borderColor: '#a59e9e',
    paddingHorizontal: 10,
    color: '#000',
    borderWidth: 1,
    width: '82%',
    height: 40,
    marginRight: 10,
    fontSize: 16,
  },
  buttonAddTask: {
    borderRadius: 8,
    height: 40,
    width: '14%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4fbb10',
  },
  icon: {
    fontSize: 26,
    color: '#fff',
    alignSelf: 'center',
  },
});

import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
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
    setRefreshing,
    getTasks,
    getTasksPrivate,
    addNewTask,
    editTask,
    deleteTask,
    toggleTask,
    editTaskName,
    refreshing,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <View style={stylesHome.containerLoad}>
        <ActivityIndicator color="#000" size={20} />
      </View>
    );
  }

  const onRefresh = () => {
    setRefreshing(true);

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

    setRefreshing(false);
  };

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

      <TouchableOpacity onPress={signOut} style={stylesHome.buttonOut}>
        <Text style={stylesHome.TextButtonOut}>Sair</Text>
      </TouchableOpacity>

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

      <FlatList
        data={tasks}
        renderItem={renderItem}
        style={stylesHome.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
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
  list: {
    width: '100%',
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
    padding: 10,
    color: '#000',
    borderWidth: 1,
    width: '82%',
    height: 44,
    marginRight: 10,
    fontSize: 20,
  },
  buttonOut: {
    marginTop: 5,
  },
  TextButtonOut: {
    fontSize: 20,
    color: '#dd0f0f',
    alignSelf: 'center',
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
    fontSize: 28,
    color: '#fff',
    alignSelf: 'center',
  },
});

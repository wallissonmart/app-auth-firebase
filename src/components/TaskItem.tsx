import React from 'react';
import {Task} from '@hooks/useHome';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {CheckBox} from 'react-native-btr';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface TaskItemProps {
  index: number;
  item: Task;
  toggleTask: (index: number) => void;
  editTaskName: (index: number, newName: string) => void;
  editTask: (taskId: string, newName: string, newChecked: boolean) => void;
  deleteTask: (taskId: string) => void;
}

const TaskItem = ({
  index,
  item,
  toggleTask,
  editTaskName,
  editTask,
  deleteTask,
}: TaskItemProps) => {
  function checkItem() {
    toggleTask(index);
    editTask(item.idTask, item.name, item.checked);
  }

  return (
    <View style={stylesTaskItem.row}>
      <CheckBox
        checked={item.checked}
        color={item.checked ? '#28c110' : '#a59e9e'}
        onPress={checkItem}
      />
      <TextInput
        value={item.name}
        autoCapitalize="none"
        placeholder="Nova tarefa"
        placeholderTextColor="#a59e9e"
        onChangeText={text => editTaskName(index, text)}
        onBlur={() => editTask(item.idTask, item.name, item.checked)}
        style={stylesTaskItem.nameInput}
      />
      <View style={stylesTaskItem.actions}>
        <TouchableOpacity onPress={() => deleteTask(item.idTask)}>
          <MaterialCommunityIcons
            name="delete"
            style={stylesTaskItem.iconDelete}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;

const stylesTaskItem = StyleSheet.create({
  row: {
    height: 44,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 2,
    paddingHorizontal: 5,
  },
  nameInput: {
    marginLeft: 6,
    fontSize: 20,
    color: '#000',
    padding: 0,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  iconDelete: {
    fontSize: 22,
    color: '#dd0f0f',
  },
});

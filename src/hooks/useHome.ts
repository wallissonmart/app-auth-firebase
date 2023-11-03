import {useState} from 'react';
import {firebase} from '@react-native-firebase/firestore';

export interface Task {
  idTask: string;
  name: string;
  checked: boolean;
  idUser: string;
}

export const useHome = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [loading, setLoading] = useState(true);

  function toggleTask(index: number) {
    const item = tasks[index];
    item.checked = !item.checked;
    setTasks([...tasks]);
  }

  function getTasksPrivate() {
    const subscriber = firebase
      .firestore()
      .collection('tasks')
      .where('idUser', 'in', [
        'ZhmI9wRSe6PqEXjmgwuHGEyA1j63',
        'Vr90ngjP4XWagcJVyoXY7IinTLr1',
      ])
      .orderBy('name')
      .onSnapshot(
        querySnapshot => {
          const newTasks: Task[] = [];

          querySnapshot.forEach(documentSnapshot => {
            newTasks.push({
              idTask: documentSnapshot.id,
              name: documentSnapshot.data().name,
              checked: documentSnapshot.data().checked,
              idUser: documentSnapshot.data().idUser,
            });
          });

          setTasks(newTasks);
          setLoading(false); // Indica que os dados foram carregados
        },
        error => {
          console.error('Erro ao buscar tarefas:', error);
          setLoading(false); // Indica que ocorreu um erro no carregamento
        },
      );

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }
  function getTasks(idUser: string) {
    const subscriber = firebase
      .firestore()
      .collection('tasks')
      .where('idUser', '==', idUser)
      .orderBy('name') // Filtra as tarefas para o usuário especificado
      .onSnapshot(
        querySnapshot => {
          const newTasks: Task[] = [];

          querySnapshot.forEach(documentSnapshot => {
            newTasks.push({
              idTask: documentSnapshot.id,
              name: documentSnapshot.data().name,
              checked: documentSnapshot.data().checked,
              idUser: documentSnapshot.data().idUser,
            });
          });

          setTasks(newTasks);
          setLoading(false); // Indica que os dados foram carregados
        },
        error => {
          console.error('Erro ao buscar tarefas:', error);
          setLoading(false); // Indica que ocorreu um erro no carregamento
        },
      );

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }

  function addNewTask(idUser: string) {
    const taskData = {
      name: taskName,
      checked: false,
      idUser,
    };

    firebase
      .firestore()
      .collection('tasks')
      .add(taskData)
      .then(doc => {
        console.log('Nova tarefa adicionada com ID:', doc.id);
      })
      .catch(error => {
        console.error('Erro ao adicionar nova tarefa:', error);
      });
  }

  function editTask(taskId: string, newName: string, newChecked: boolean) {
    // Acesse a coleção "tasks" e o documento da tarefa específica
    const taskRef = firebase.firestore().collection('tasks').doc(taskId);

    // Use o método 'update' para atualizar os campos da tarefa
    taskRef
      .update({
        name: newName,
        checked: newChecked,
      })
      .then(() => {
        console.log('Tarefa atualizada com sucesso');
      })
      .catch(error => {
        console.error('Erro ao atualizar a tarefa:', error);
      });
  }

  function deleteTask(taskId: string) {
    const taskRef = firebase.firestore().collection('tasks').doc(taskId);

    taskRef
      .delete()
      .then(() => {
        console.log('Tarefa excluída com sucesso');
      })
      .catch(error => {
        console.error('Erro ao excluir tarefa:', error);
      });
  }

  function editTaskName(index: number, newName: string) {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = newName;
    setTasks(updatedTasks);
  }

  return {
    setTaskName,
    getTasks,
    getTasksPrivate,
    addNewTask,
    editTask,
    deleteTask,
    toggleTask,
    editTaskName,
    taskName,
    loading,
    tasks,
  };
};

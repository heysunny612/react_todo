import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'use State 이해하기',
      status: 'active',
    },
    {
      id: 2,
      text: 'props이해하기 ',
      status: 'completed',
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      status: 'completed',
    },
  ]);
  // todo 삭제
  const handleDelete = (deleted) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== deleted.id));
  };
  //active 핸들링
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  //newTodo 추가
  const handleSubmit = (newTodo) => setTodos([...todos, newTodo]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          );
        })}
      </ul>
      <AddTodo onAdd={handleSubmit} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

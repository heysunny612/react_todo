import React, { useEffect, useState } from 'react';
import styles from './Todos.module.css';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';

export default function Todos({ filter }) {
  const [todos, setTodos] = useState(() => fromLocalStorage());

  //로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //새로운 투두 추가
  const handleAdd = (added) => setTodos([...todos, added]);
  //투두 삭제
  const handleDelete = (deleted) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== deleted.id));
  //투두 status 업데이트
  const handleUpdate = (uptated) => {
    setTodos(todos.map((todo) => (todo.id === uptated.id ? uptated : todo)));
  };
  //투두 수정하기
  const handleEdited = (edited) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === edited.id ? edited : todo))
    );
  };

  //투두 필터
  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filtered.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onEdit={handleEdited}
            />
          ))}
        </ul>
      </section>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function fromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

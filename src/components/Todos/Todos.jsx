import React, { useState } from 'react';
import styles from './Todos.module.css';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';

export default function Todos() {
  const todoList = [
    { id: 1, text: '투두입니다1.', status: 'active' },
    { id: 2, text: '투두입니다2.', status: 'active' },
    { id: 3, text: '투두입니다3.', status: 'active' },
  ];
  const [todos, setTodos] = useState(todoList);
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
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {todos.map((todo) => (
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

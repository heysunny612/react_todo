import React from 'react';
import styles from './AddTodo.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [newTodo, setNewToDo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    onAdd({ id: uuidv4(), text: newTodo, status: 'active' });
    setNewToDo('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewToDo(e.target.value)}
        className={styles.input}
        placeholder='Add Todo'
      />
      <button type='submit' className={styles.button}>
        ADD
      </button>
    </form>
  );
}

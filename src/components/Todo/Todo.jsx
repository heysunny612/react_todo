import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, text, status } = todo;
  const handleDelte = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        id={id}
        value={text}
        checked={status === 'completed'}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelte} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

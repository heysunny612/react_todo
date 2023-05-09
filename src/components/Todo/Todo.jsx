import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleDelte = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        id='checkbox'
        value={text}
        checked={status === 'completed'}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor='checkbox' className={styles.text}>
        {text} {status}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelte} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

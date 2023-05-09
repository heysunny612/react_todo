import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleDelte = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <li>
      <input
        type='checkbox'
        id='checkbox'
        value={text}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>
        {text} {status}
      </label>
      <button onClick={handleDelte}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

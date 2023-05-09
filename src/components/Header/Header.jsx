// import Header.module.css from
import { useContext } from 'react';
import styles from './Header.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';
export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.header}>
      <button onClick={() => toggleDarkMode()}>
        {darkMode ? '다크모드' : '그냥모드'}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} 
              ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

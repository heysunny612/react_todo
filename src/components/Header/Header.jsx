import styles from './Header.module.css';
import { useDarkMode } from '../../context/Themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <div className={styles.darkmode}>
        <button className={styles.mode} onClick={toggleDarkMode}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
      <div className={styles.filter}>
        {filters.map((value, index) => (
          <button
            key={index}
            onClick={() => onFilterChange(value)}
            className={`${styles.button} ${
              filter === value && styles['active']
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </header>
  );
}

import { useState } from 'react';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import { ThemeProvider } from './context/Themes';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <ThemeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todos filter={filter} />
    </ThemeProvider>
  );
}

export default App;

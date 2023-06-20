# 리액트 프로젝트 투두리스트

![ZZ](https://github.com/heysunny612/react_todo/assets/127499117/6f8ad4d2-0a7a-4d1a-99c3-5272600678db)



## 로컬스토리지를 이용한 투두 저장

 <br/>

```js
 const [todos, setTodos] = useState(() => fromLocalStorage());
 // todos를 가지고 있는 state의 초기 값을 로컬스토리지에 저장된 값으로 설정

  //로컬스토리지에 사용자가 입력한 투두 업데이트
  //todos에 입력된게 없다면, 저장하지 않도록 useEffect 사용
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

function fromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

```

## context hook 이용한 Theme 적용

<br/>

```js

 const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  //저장된 데이터는 마운트시 한번만 실행 될 수있도록 useEffect 사용
  useEffect(() => {
    const isDark = localStorage.theme === 'dark';
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    //애플리케이션 전반적으로 사용할 수 있도록 context 사용
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useDarkMode = () => useContext(ThemeContext);

//사용자가 theme 아이콘을 클릭시 로컬스토리지에 데이터 저장
const updateDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
};


```

<br/>




# 리액트 프로젝트 투두리스트

<p align="center">
    <img src="https://github.com/heysunny612/react_todo/assets/127499117/6f8ad4d2-0a7a-4d1a-99c3-5272600678db" alt="ZZ">
</p>

<br/>

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

<p align="center">
    <img src="https://github.com/heysunny612/react_todo/assets/127499117/28a3acc5-dca8-43e2-b186-d40bbf6fc67d" alt="ZZZZ">
</p>

<br/>

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

| 제목 | 설명 |
| --- | --- |
| 구현 사항 | -CRUD <br/> -로컬스토리지 데이터저장 <br/> -라이트모드 다크모드 테마 적용<br/> -필터 메소드를 사용한 필터 구현 |
| 라이브러리 | 투두의 고유한 아이디 값을 부여하기 위해 **UUID** 사용 |
| css 및 반응형  | Post CSS 사용, 반응형 미구현 |
| 배포 주소  | Netlify https://sunny-todos.netlify.app |
| 소스 코드  | Github  https://github.com/heysunny612/react_todo |



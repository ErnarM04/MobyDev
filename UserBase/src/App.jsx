import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import UserCard from './UserCard';

function App() {
  const users = [
    { id: 1, name: "Alex Johnson", age: 25, email: "alex.johnson@example.com", isFav: true },
    { id: 2, name: "Maria Petrova", age: 30, email: "maria.petrova@example.com", isFav: false },
    { id: 3, name: "John Smith", age: 22, email: "john.smith@example.com", isFav: true },
    { id: 4, name: "Aigerim Nur", age: 27, email: "aigerim.nur@example.com", isFav: true },
    { id: 5, name: "Daniel Kim", age: 35, email: "daniel.kim@example.com", isFav: false },
    { id: 6, name: "Olga Ivanova", age: 29, email: "olga.ivanova@example.com", isFav: true },
    { id: 7, name: "Michael Brown", age: 31, email: "michael.brown@example.com", isFav: false },
    { id: 8, name: "Sophie Lee", age: 24, email: "sophie.lee@example.com", isFav: true },
    { id: 9, name: "Timur Bek", age: 28, email: "timur.bek@example.com", isFav: true },
    { id: 10, name: "Emma Wilson", age: 26, email: "emma.wilson@example.com", isFav: false }
  ];
  const [usersList, setUsersList] = useState([...users]);
  const categories = ["Все", "Избранные"];
  const [category, setCategory] = useState("Все");
  const filteredList = useMemo(() => usersList.filter((user) => user.isFav), [usersList]);

  const changeStatus = useCallback((id) => {
    const updated = usersList.map((user) => 
      user.id === id ? {...user, isFav: !user.isFav} : user
    );
    setUsersList(updated);
    console.log(updated);
    
  }, [])

  return (
    <div
      style={{
        padding: "16px 140px",
        display: "flex",
        flexDirection: "column",
        gap: "32px"
      }}
    >
      <div
        style={{
          fontSize: "21px",
          fontWeight: 600,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "48px",
        }}
      >
        {categories.map((category) => (
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
        gap: "8px",
      }}
    >
      {category === "Все" ?
        usersList.map((user) => (
          <UserCard
            user={user}
            changeStatus={changeStatus}
            key={user.id}
          />
        )) : 
        filteredList.map((user) => (
          <UserCard
            user={user}
            changeStatus={changeStatus}
            key={user.id}
          />
        ))
        }
    </div>
    </div>
  );
}

export default App;

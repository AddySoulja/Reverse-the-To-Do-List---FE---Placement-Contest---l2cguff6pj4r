import React, { useState } from "react";
import "../styles/App.css";

function ToDo({ task, setTodos }) {
  const { id, createdAt } = task;
  return (
    <tr>
      <td>
        <p>{id}</p>
      </td>
      <td>
        <input />
      </td>
      <td>
        <p>{createdAt}</p>
      </td>
    </tr>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "20:30",
    },
    {
      id: "todo2",
      createdAt: "18:00",
    },
  ]);

  const reverseOrder = () => {
    let revArr = [];
    while (todos.length != 0) {
      revArr.push(todos.pop());
    }
    setTodos(revArr);
  };

  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((task, i) => (
            <ToDo task={task} setTodos={setTodos} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

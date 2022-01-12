import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { useState } from 'react';
import { Container, List, Paper } from '@material-ui/core';
import AddTodo from './AddTodo';

const App = () => {

  const [state, setState] = useState({
    items: [
      { id: "0", title: "myWorld1", done: true },
      { id: "1", title: "myWorld2", done: false },
      { id: "2", title: "myWorld1", done: true },
      { id: "3", title: "myWorld2", done: false }
    ]
  });

  let todoItems = state.items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {state.items.map((item, idx) => (
          <Todo item={item} />
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div >
  );
}

export default App;

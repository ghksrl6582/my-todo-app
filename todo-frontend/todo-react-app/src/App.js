import './App.css';
import Todo from './Todo';
import { useState } from 'react';
import { Container, List, Paper } from '@material-ui/core';
import AddTodo from './AddTodo';

const App = () => {

  const [state, setState] = useState({
    items: []
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

  const add = (item) => {
    const thisItems = state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    setState({ items: thisItems });
  };

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={add} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div >
  );
}

export default App;

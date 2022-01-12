import './App.css';
import Todo from './Todo';
import { useState } from 'react';
import { Container, List, Paper } from '@material-ui/core';
import AddTodo from './AddTodo';

const App = () => {

  const [state, setState] = useState({
    items: []
  });

  const add = (item) => {
    const thisItems = state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    setState({ items: thisItems });
  };

  const deleteItem = (item) => {
    const thisItems = state.items;
    const newItems = thisItems.filter(e => e.id !== item.id);
    setState({ items: newItems }, () => {
      console.log("Update Items : ", state.items)
    });
  };

  let todoItems = state.items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {state.items.map((item, idx) => (
          <Todo item={item} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  );

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

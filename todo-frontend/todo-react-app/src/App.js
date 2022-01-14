import { Container, List, Paper } from "@material-ui/core";
import React from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems });
  }

  deleteItem = (item) => {
    const thisItems = this.state.items;
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({ items: newItems });
  }

  render() {

    let todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} deleteItem={this.deleteItem} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="sm">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const items = [
  {
    name: '',
    id: Date.now(),
    completed: false
  },

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: items
    };
  }

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items: [
        ...this.state.items,
        newItem
      ]

    })
  }

  toggleItem = itemId => {
    this.setState({
      items: this.state.items.map(item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList items={this.state.items} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;

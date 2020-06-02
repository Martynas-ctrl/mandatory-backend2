import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listID: [{ title: 'Incompleted', id: '0' },{ title: 'In Progress', id: '1' },{ title: 'Completed', id: '2' }],
    };
  };

  render() {
    return (
      <div className='listContainer'>
        {this.state.listID.map((list, index) =>
          <div style={{ display:'flex', flexDirection:'row' }} key={index}>
            <TodoList listTitle={list.title} listId={list.id} />
          </div>
        )}
      </div>
    );
  };
};

export default App;
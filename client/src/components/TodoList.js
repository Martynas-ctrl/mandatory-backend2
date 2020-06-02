import React, { Component } from 'react';
import axios from 'axios';
import '../css/TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: '',
      description: '',
      id: '',
      listId: this.props.listId,
    };
  };

  componentDidMount() {
    this.getTodo();
  };

  getTodo = () => {
    axios.get('http://localhost:8080/api/todos', 
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        let todos = this.state.todos;
        todos.push(response.data);
        this.setState({
          todos: response.data,
        });
      })
      .catch((error) =>{
        let err = 'Something went wrong! Look if todo you want to get from the server still exist! Try to refresh the page!';
        console.log(err + ' ' + error);
      });
  };

  postTodo = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = ' ' + date + ' ' + time;
  
    let {title, description, id, listId} = this.state;

    let data = {
      title: title,
      description: description,
      date: dateTime,
      id: id,
      listId: listId,
    };
  
    axios.post('http://localhost:8080/api/todo', data,
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        let err = 'Error! Something went wrong! Look if todos you want to post are not empty! Try to refresh the page!';
        console.log(err + ' ' + error);
      });
  };

  updateTodo = () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = ' ' + date + ' ' + time;
  
    let {title, description, id, listId} = this.state;

    let data = {
      title: title,
      description: description,
      date: dateTime,
      id: id,
      listId: listId,
    };
    
    axios.patch(`http://localhost:8080/api/todo/${id}`, data,
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        let err = 'Error! Something went wrong! Look if id you want to update exist! Try to refresh page';
        console.log(err + ' ' + error);
      });
  };

  deleteTodo = (id) => {
    let data = [...this.state.todos];
    data.filter((todo, index) => {
      if (todo[1] === id) {
        data.splice(index, 1);
      }
	      return true;
    });

    this.setState({ 
      todos: [...data],
    });

    axios.delete('http://localhost:8080/api/todo/' + id,
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeTitle = (e) => {
    this.setState({ 
      title: e.target.value,
    });
  };

  changeDescription = (e) => {
    this.setState({ 
      description: e.target.value,
    });
  };

  submitTodo = (e) => {
    e.preventDefault();
    this.postTodo();
    this.getTodo();
    this.setState({
      title: '',
      description: '',
    });
  };

  updTodo = (e) => {
    e.preventDefault();
    this.updateTodo();
    this.getTodo();
    this.setState({
      title: '',
      description: '',
    });
  };

  editTodo = (title, description, id, listId, e) => {
    e.preventDefault();
    this.setState({
      title: title,
      description: description,
      id: id,
      listId: listId,
    });
  };

  moveToList1 = (e) => {
    e.preventDefault();
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = ' ' + date + ' ' + time;
  
    let {title, description, id} = this.state;

    let data = {
      title: title,
      description: description,
      date: dateTime,
      id: id,
      listId: '0',
    };
    
    axios.patch(`http://localhost:8080/api/todo/${id}`, data,
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        let err = 'Error! Something went wrong! Look if id you want to update exist! Try to refresh page';
        console.log(err + ' ' + error);
      });
  }

  moveToList2 = (e) => {
    e.preventDefault();
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = ' ' + date + ' ' + time;
  
    let {title, description, id} = this.state;

    let data = {
      title: title,
      description: description,
      date: dateTime,
      id: id,
      listId: '1',
    };
    
    axios.patch(`http://localhost:8080/api/todo/${id}`, data,
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        let err = 'Error! Something went wrong! Look if id you want to update exist! Try to refresh page';
        console.log(err + ' ' + error);
      });
  }

  moveToList3 = (e) => {
    e.preventDefault();
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = ' ' + date + ' ' + time;
  
    let {title, description, id} = this.state;

    let data = {
      title: title,
      description: description,
      date: dateTime,
      id: id,
      listId: '2',
    };
    
    axios.patch(`http://localhost:8080/api/todo/${id}`, data,
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        let err = 'Error! Something went wrong! Look if id you want to update exist! Try to refresh page';
        console.log(err + ' ' + error);
      });
  }

  render() {
    return (
      <div className='cardTodo'>
        <header>
          <h2>{this.props.listTitle}</h2>
        </header> 
        <body>
          <table className='table'>
            <tr>
              <th>
                {this.state.todos.map((todo, index) => {
                  if(this.props.listId === todo[4]) {
                    return(
                      <div style={{display:'flex', flexDirection:'column' }} key={index}>
                        <h6>Todo name</h6>
                        <p>{todo[0]}</p>
                        <h6>Description</h6>
                        <p>{todo[2]}</p>
                        <h6>Date</h6>
                        <p>{todo[3]}</p>
                        <button className='btn_edit' onClick={this.editTodo.bind(this, todo[0], todo[2], todo[1], todo[4])}>Edit</button>
                        <button className='btn_update' onClick={this.updTodo}>Update</button>
                        <button className='btn_delete' onClick={this.deleteTodo.bind(this, todo[1])} key={todo[1]}>Delete</button>
                        <div style={{display:'flex', flexDirection:'row' }}>
                          <button className='btn_move' onClick={this.moveToList1}>Uncompleted</button>
                          <button className='btn_move' onClick={this.moveToList2}>In Progress</button>
                          <button className='btn_move' onClick={this.moveToList3}>Completed</button>
                        </div>
                      </div>
                  )}
                  return;
                })}
              </th>
            </tr>
          </table>
          <form onSubmit={this.submitTodo}>
            <input type='text' className='form_input' value={this.state.title} onChange={this.changeTitle} placeholder='Add Title...'/>
            <textarea name='textareafortodos' rows='4' cols='50' type='text' className='form_input' value={this.state.description} onChange={this.changeDescription} placeholder='Add Description...' />
            <input type='submit' className='btn_add' onClick={this.submitTodo} value='Add Todo' required />
          </form>
        </body>
      </div>
    );
  };
};

export default TodoList;
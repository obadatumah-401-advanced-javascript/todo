import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Header from '../header';

import './todo.scss';

function ToDo(props) {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }
  const [list, setList] = useState([]);

  const addItem = (item) => {
    // item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
    fetch('https://lab32-401.herokuapp.com/todo', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
        console.log('saved----------', savedItem);
      })
      .catch(console.error);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list1 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list1);
    }
    let item2 = list.filter(i => i._id === id)[0] || {};
    console.log('item222',item2);
    
    fetch(`https://lab32-401.herokuapp.com/todo/${id}`,{
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item2) 
    })
      .then(response => response.json())
      .then(savedItem => {
        console.log('saveditemsssssss',savedItem)
      })
      .catch(console.error);

  };

  const deleteFun = id =>{
    fetch(`https://lab32-401.herokuapp.com/todo/${id}`,{
      method: 'delete'
    })
      .then(response => response.json())
      .then(savedItem => {
        // setList(savedItem)
        let finalResult
        list.forEach((val,i)=>{
          if(id === val._id)  {
            finalResult=list.splice(i,1);
            console.log('listtttttt',list);
            
          }
        });
        setList([...list]);
        console.log('result----------', savedItem);
      })
      .catch(console.error);
      

  };

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];


    setList(list);

    fetch('https://lab32-401.herokuapp.com/todo')
      .then(response => response.json())
      .then(savedItem => {
        setList(savedItem)
        console.log('result----------', savedItem);
      })
      .catch(console.error);


  }, []);

  return (
    <>
      <header>
        <Header />
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            deleteFun={deleteFun}
          />
        </div>
      </section>
    </>
  );
}


export default ToDo;


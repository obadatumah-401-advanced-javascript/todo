
import React, { useState } from 'react';
import Button from 'react-bootstrap/button';


import 'bootstrap/dist/css/bootstrap.min.css';
function TodoForm(props) {


  // constructor(props) {
  //   super(props);
  //   this.state = { item: {} };
  // }
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    // const item1 = {};
    setItem({});
  };



  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </label>
        <Button variant="danger" type='submit'>Add Item</Button>
      </form>
    </>
  );
}


export default TodoForm;
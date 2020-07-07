import React from 'react';


function TodoList(props) {



  return (
    <ul>
      {props.list.map(item => (
        <li

          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <button onClick={(event) => props.deleteFun(item._id)}>X</button>

        </li>
      ))}
    </ul>
  );
}


export default TodoList;
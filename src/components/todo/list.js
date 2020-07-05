
import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }



function TodoList({list,handleComplete}){
  console.log(list); 

  return (
    <ListGroup className="ul">
      {list.map(item => (
        <ListGroup.Item
          className={`complete-${item.complete.toString()} li ` }
          key={item._id}
        >
          <span onClick={() => handleComplete(item._id)}>
            {item.text}  By   {item.assignee} 
          </span>
          </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;

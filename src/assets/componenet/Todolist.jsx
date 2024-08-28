import React from 'react'
import '../componenet/input.css'

const Todolist = (props) => {
  return (
    <>
   <li className='list-item'>
      {props.item}
      <img 
        src='./src/assets/delete_6861362.png' 
        alt='Delete'
        onClick={() => props.deletListitem(props.index)} 
      />
    </li>
    </>
  )
}

export default Todolist
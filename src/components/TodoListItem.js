import React from 'react';
import cn from 'classnames';
import '../App.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
  
    return (
        <div className="TodoListItem">
          <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
            <div className="text">{text}</div>
          </div>
          <div className="remove" onClick={() => onRemove(id)}>
            -
          </div>
        </div>
      );
    };
  
  export default TodoListItem;
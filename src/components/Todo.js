import React from 'react';

const Todo = props => {
    return (
        <div
            className={`item.${props.item.completed ? 'completed' : ''}`}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <h4>{props.item.name}</h4>
        </div>
    )
}

export default Todo;
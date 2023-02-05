import React from 'react';

const CompletedTodo = ({title, time}) => {
    return ( 
        <div className="task-item completed-task">
                <p>{title}</p>
                <span className="checkmark"></span>
            <span className="date-time">{time}</span>
        </div>
     );
}
 
export default CompletedTodo;
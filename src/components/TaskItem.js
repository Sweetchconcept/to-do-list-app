import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskItem({ task, editTask, deleteTask }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            deleteTask(task.id);
        }
    };

    const handleComplete = () => {
        editTask({ ...task, completed: !task.completed });
    };

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <TaskForm existingTask={task} editTask={editTask} />
            ) : (
                <>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <button onClick={handleComplete}>
                        {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                    </button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
}

export default TaskItem;

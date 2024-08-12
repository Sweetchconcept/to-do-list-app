import React, { useState } from 'react';

function TaskForm({ addTask, existingTask, editTask }) {
    const [taskName, setTaskName] = useState(existingTask ? existingTask.name : '');
    const [taskDescription, setTaskDescription] = useState(existingTask ? existingTask.description : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() === '' || taskDescription.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        const newTask = {
            id: existingTask ? existingTask.id : Date.now(),
            name: taskName,
            description: taskDescription,
            completed: existingTask ? existingTask.completed : false,
        };

        if (existingTask) {
            editTask(newTask);
        } else {
            addTask(newTask);
        }

        setTaskName('');
        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
            />
            <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Task Description"
            ></textarea>
            <button type="submit">{existingTask ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
}

export default TaskForm;

# To-Do List Application

This is a simple **To-Do List** web application that allows users to manage tasks by adding, marking them as completed, and deleting them. The application also uses **localStorage** to persist tasks between page reloads.

## Features

- **Add new tasks**: Users can input tasks and add them to the task list.
- **Mark tasks as complete**: Tasks can be marked as completed using checkboxes. Completed tasks are visually crossed out.
- **Delete tasks**: Users can delete tasks from the list.
- **Persistent storage**: All tasks are stored in the browser's `localStorage`, so they remain even after the page is reloaded.
  
## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Basic styling and layout of the application.
- **JavaScript (ES6)**: Core functionality, including task management and localStorage integration.
- **LocalStorage**: Persistent storage to save and retrieve tasks between sessions.

## How It Works

### Task Creation

- When a user types a task into the input field and clicks the **Add Task** button, the task is added to the list and also stored in `localStorage`. 
- The task appears in the list with an associated checkbox and delete button.

### Marking a Task as Completed

- Each task has a checkbox that can be used to mark the task as completed. When checked, the task's text is visually crossed out using the `line-through` style.
- The state of the task (completed or not) is saved in `localStorage`, so even after a page reload, the task retains its completed status.

### Deleting a Task

- Each task has a delete button (red "X"), which allows users to remove a task from the list. Once a task is deleted, it is also removed from `localStorage`.

### Persistent Storage with LocalStorage

- Tasks are stored as an array of objects in `localStorage`. Each object contains:
  - `name`: The text of the task.
  - `completed`: A boolean indicating if the task is completed.

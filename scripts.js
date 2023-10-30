document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const prioritySelect = document.getElementById("priority-select");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        const taskPriority = prioritySelect.value;
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            const taskTextSpan = document.createElement("span");
            taskTextSpan.classList.add("task-text");
            taskTextSpan.textContent = taskText;
            const prioritySpan = document.createElement("span");
            prioritySpan.classList.add("priority");
            prioritySpan.textContent = taskPriority.charAt(0).toUpperCase() + taskPriority.slice(1);
            prioritySpan.style.display = "none";
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.classList.add("edit-input");
            editInput.value = taskText;
            editInput.style.display = "none";
            const editPrioritySelect = document.createElement("select");
            editPrioritySelect.innerHTML = prioritySelect.innerHTML;
            editPrioritySelect.value = taskPriority;
            editPrioritySelect.classList.add("edit-priority-select");
            editPrioritySelect.style.display = "none";
            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("edit-btn");
            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.classList.add("edit-save-btn");
            saveBtn.style.display = "none";
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.style.marginLeft = "10px";

            editBtn.addEventListener("click", function() {
                taskTextSpan.style.display = "none";
                prioritySpan.style.display = "none";
                editInput.style.display = "inline";
                editPrioritySelect.style.display = "inline";
                editBtn.style.display = "none";
                saveBtn.style.display = "inline";
                deleteBtn.style.display = "inline";
            });

            saveBtn.addEventListener("click", function() {
                const newTaskText = editInput.value.trim();
                const newTaskPriority = editPrioritySelect.value;
                if (newTaskText !== "") {
                    taskTextSpan.textContent = newTaskText;
                    prioritySpan.textContent = newTaskPriority.charAt(0).toUpperCase() + newTaskPriority.slice(1);
                    taskTextSpan.style.display = "inline";
                    editInput.style.display = "none";
                    editPrioritySelect.style.display = "none";
                    editBtn.style.display = "inline";
                    saveBtn.style.display = "none";
                    deleteBtn.style.display = "inline";
                    prioritySpan.style.display = "none";

                    // Remove the old priority class and add the new one based on the selected value
                    taskItem.classList.remove("low", "medium", "high");
                    taskItem.classList.add(newTaskPriority);
                }
            });

            deleteBtn.addEventListener("click", function() {
                taskItem.remove();
            });

            taskItem.classList.add(taskPriority);
            taskItem.appendChild(taskTextSpan);
            taskItem.appendChild(prioritySpan);
            taskItem.appendChild(editInput);
            taskItem.appendChild(editPrioritySelect);
            taskItem.appendChild(editBtn);
            taskItem.appendChild(saveBtn);
            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });
});
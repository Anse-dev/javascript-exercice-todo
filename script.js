// Sélectionner les éléments du DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Initialiser un tableau pour stocker les tâches
let tasks = [];

// Fonction pour ajouter une tâche
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = {
            text: taskText,
            completed: false,
        };
        tasks.push(task);
        taskInput.value = ""; // Réinitialiser le champ d'entrée
        displayTasks();
    }
}

// Fonction pour afficher les tâches
function displayTasks() {
    taskList.innerHTML = ""; // Réinitialiser la liste des tâches
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow mb-2";

        taskItem.innerHTML = `
            <span class="${task.completed ? "line-through text-gray-500" : "text-gray-800"}">${task.text}</span>
            <div>
                <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200" onclick="deleteTask(${index})">Supprimer</button>
                <button class="bg-green-500 text-white px-2 py-1 rounded ml-2 hover:bg-green-600 transition duration-200" onclick="toggleComplete(${index})">
                    ${task.completed ? "Réinitialiser" : "Terminer"}
                </button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Fonction pour supprimer une tâche
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Fonction pour marquer une tâche comme terminée ou non
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Écouter l'événement de clic sur le bouton "Ajouter Tâche"
addTaskButton.addEventListener("click", addTask);

// Écouter l'événement "Entrée" sur le champ de saisie
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

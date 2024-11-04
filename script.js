// Adiciona evento para o formulário de tarefas
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
  });
  
  // Carrega as tarefas ao iniciar
  document.addEventListener('DOMContentLoaded', loadTasks);
  
  // Adiciona uma nova tarefa
  function addTask() {
    const name = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;
  
    const task = { name, date, priority, completed: false };
    saveTask(task);
    displayTask(task);
    document.getElementById('taskForm').reset();
  }
  
  // Exibe uma tarefa na lista
  function displayTask(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = `${task.name} - ${task.date} - Prioridade: ${task.priority}`;
    li.classList.toggle('urgent', isUrgent(task));
    li.addEventListener('click', () => editTask(task));
    taskList.appendChild(li);
  }
  
  // Verifica se a tarefa é urgente
  function isUrgent(task) {
    const taskDate = new Date(task.date);
    const currentDate = new Date();
    const diffDays = (taskDate - currentDate) / (1000 * 60 * 60 * 24);
    return diffDays < 3 && !task.completed;
  }
  
  // Salva a tarefa no localStorage
  function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Carrega as tarefas do localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => displayTask(task));
  }
  
  // Filtra tarefas por status
  document.getElementById('filterStatus').addEventListener('click', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(task => !task.completed);
    updateTaskList(filteredTasks);
  });
  
  // Filtra tarefas por prioridade
  document.getElementById('filterPriority').addEventListener('click', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.sort((a, b) => a.priority.localeCompare(b.priority));
    updateTaskList(tasks);
  });
  
  // Atualiza a lista de tarefas exibida
  function updateTaskList(tasks) {
    document.getElementById('taskList').innerHTML = '';
    tasks.forEach(task => displayTask(task));
  }
  
  // Edita uma tarefa
  function editTask(task) {
    const newName = prompt("Editar Nome:", task.name);
    const newDate = prompt("Editar Data:", task.date);
    const newPriority = prompt("Editar Prioridade (alta, média, baixa):", task.priority);
  
    task.name = newName || task.name;
    task.date = newDate || task.date;
    task.priority = newPriority || task.priority;
  
    saveTaskChanges();
    loadTasks();
  }
  
  // Salva as mudanças de tarefa no localStorage
  function saveTaskChanges() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
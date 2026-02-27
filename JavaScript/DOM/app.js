// Seleccion de elementos
const taskInput = document.getElementById('task-input');
const btnAdd = document.getElementById('btn-add');
const taskList = document.getElementById('task-list');
const counterTotal = document.getElementById('counter-total');
const counterPending = document.getElementById('counter-pending');
const counterCompleted = document.getElementById('counter-completed');
const emptyMessage = document.getElementById('empty-message');
const filterBtns = document.querySelectorAll('.filter-btn');

const STORAGE_KEY = 'todo-list-reto1';
let currentFilter = 'all'; // 'all' | 'pending' | 'completed'

// Estado en memoria (array de { id, text, completed })
let tasks = [];

// Cargar desde LocalStorage
function loadFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw); // parsea las tareas desde el localStorage por ejemplo JSON.parse('[{ id: '1740432000000-0.1234567890', text: 'Tarea 1', completed: false }, { id: '1740432000000-0.1234567891', text: 'Tarea 2', completed: false }]')
            if (Array.isArray(parsed)) tasks = parsed; // si las tareas son un array, se guardan en el estado tasks
        }
    } catch (_) {
        tasks = [];
    }
}

function saveToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); // guarda las tareas en el localStorage por ejemplo localStorage.setItem('todo-list-reto1', JSON.stringify([{ id: '1740432000000-0.1234567890', text: 'Tarea 1', completed: false }, { id: '1740432000000-0.1234567891', text: 'Tarea 2', completed: false }]));
    } catch (_) {}
}

// Generar ID único
function nextId() {
    return String(Date.now()) + '-' + Math.random().toString(36).slice(2, 9); // crea un id único para la tarea por ejemplo 1740432000000-0.1234567890
}

// Crear elemento <li> para una tarea
function createTaskElement(task) {
    const li = document.createElement('li'); // crea un elemento li
    li.className = 'task-item'; // añade una clase al elemento li por ejemplo class="task-item"
    li.dataset.taskId = task.id; // añade un id al elemento li por ejemplo data-task-id="1234567890"
    li.setAttribute('role', 'listitem'); // añade un rol de lista para el elemento li por ejemplo role="listitem"

    if (task.completed) li.classList.add('completed');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;

    const btnDelete = document.createElement('button');
    btnDelete.type = 'button';
    btnDelete.className = 'btn-delete';
    btnDelete.setAttribute('aria-label', 'Eliminar tarea');
    btnDelete.textContent = '×';

    li.appendChild(span);
    li.appendChild(btnDelete);
    return li;
}

// Actualizar visibilidad según filtro
function applyFilter() {
    const items = taskList.querySelectorAll('.task-item');
    const taskMap = new Map(tasks.map(t => [t.id, t]));

    items.forEach((li) => {
        const id = li.dataset.taskId;
        const task = taskMap.get(id);
        if (!task) return;

        const matches =
            currentFilter === 'all' ||
            (currentFilter === 'pending' && !task.completed) ||
            (currentFilter === 'completed' && task.completed);

        li.dataset.hidden = matches ? 'false' : 'true';
    });
}

// Actualizar contador
function updateCounter() {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;

    counterTotal.textContent = 'Total: ' + total;
    counterPending.textContent = 'Pendientes: ' + pending;
    counterCompleted.textContent = 'Completadas: ' + completed;
}

// Mostrar/ocultar mensaje vacío
function updateEmptyMessage() {
    const hasTasks = tasks.length > 0;
    emptyMessage.hidden = hasTasks;
}

// Refrescar lista en el DOM a partir del estado
function renderList() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const el = createTaskElement(task);
        taskList.appendChild(el);
    });
    applyFilter();
    updateCounter();
    updateEmptyMessage();
}

// Agregar tarea
function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const task = { id: nextId(), text, completed: false };
    tasks.push(task);
    taskInput.value = '';

    const el = createTaskElement(task);
    taskList.appendChild(el);
    applyFilter();
    updateCounter();
    updateEmptyMessage();
    saveToStorage();
}

// Alternar completada (por id)
function toggleCompleted(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    task.completed = !task.completed;

    const li = taskList.querySelector(`[data-task-id="${taskId}"]`);
    if (li) li.classList.toggle('completed', task.completed);
    updateCounter();
    saveToStorage();
}

// Eliminar tarea
function removeTask(taskId) {
    tasks = tasks.filter((t) => t.id !== taskId);
    const li = taskList.querySelector(`[data-task-id="${taskId}"]`);
    if (li) li.remove();
    updateCounter();
    updateEmptyMessage();
    saveToStorage();
}

// Iniciar edición (doble clic en texto)
function startEdit(taskId) {
    const li = taskList.querySelector(`[data-task-id="${taskId}"]`);
    const span = li && li.querySelector('.task-text');
    if (!li || !span) return;

    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'task-edit-input';
    input.value = task.text;

    function finishEdit() {
        const newText = input.value.trim();
        if (newText) task.text = newText;
        span.textContent = task.text;
        li.replaceChild(span, input);
        saveToStorage();
        input.removeEventListener('blur', finishEdit);
        input.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            finishEdit();
        }
        if (e.key === 'Escape') {
            input.value = task.text;
            finishEdit();
        }
    }

    input.addEventListener('blur', finishEdit);
    input.addEventListener('keydown', onKey);
    li.replaceChild(input, span);
    input.focus();
}

    // Event Delegation: lista (marcar completada / eliminar / editar)
taskList.addEventListener('click', function (e) {
    const li = e.target.closest('.task-item');
    if (!li) return;
    const taskId = li.dataset.taskId;
    if (!taskId) return;

    if (e.target.classList.contains('btn-delete')) {
        e.stopPropagation();
        removeTask(taskId);
        return;
    }

    if (e.target.classList.contains('task-text')) {
        e.preventDefault();
        startEdit(taskId);
        return;
    }

    // Alternar completada
    if (!e.target.classList.contains('btn-delete') && !e.target.classList.contains('task-edit-input')) {
        toggleCompleted(taskId);
    }
});

// Editar
taskList.addEventListener('dblclick', function (e) {
    if (e.target.classList.contains('task-text')) {
        e.preventDefault();
        const li = e.target.closest('.task-item');
        if (li && li.dataset.taskId) startEdit(li.dataset.taskId);
    }
});

// Botón Agregar
btnAdd.addEventListener('click', addTask);

// Enter en el input
taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
});

// Filtros
filterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        const filter = this.dataset.filter;
        if (!filter) return;
        currentFilter = filter;
        filterBtns.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
        applyFilter();
    });
});

// Inicialización
loadFromStorage();
renderList();

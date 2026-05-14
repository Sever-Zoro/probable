const input = document.querySelector(".form-add__input");
const addButton = document.querySelector(".form-add__button");

const container = document.querySelector(".tasks");
const searchInput = document.querySelector(".footer__search");
const footer = document.querySelector(".footer-controls");
const sortSelect = document.querySelector(".toolbar__sort");
const form = document.querySelector(".form-add");
/*const tasks = [
    {
        title: "Купить хлеб",
        date: "13.03.25, 05:25",
        done: true,
    },
    {
        title: "Купить чёрный хлеб",
        date: "13.03.25, 14:35",
        done: false,
    }
];*/
const tasks = [];
function formatDate(date) {
    const DD = date.getDate().toString().padStart(2, '0');
    const MM = (date.getMonth() + 1).toString().padStart(2, '0');
    const GG = date.getFullYear();
    const HH = date.getHours().toString().padStart(2, '0');
    const MIN = date.getMinutes().toString().padStart(2, '0');
    return `${DD}.${MM}.${GG}, ${HH}:${MIN}`;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});

function addTask() {
    const text = input.value.trim();
    if (text === "" || text.length < 3) {
        input.classList.add("input--error");
        return;
    };

    input.classList.remove("input--error");


    /*const newTask = {
        id: tasks.length + 1,
        title: text,
        done: false,
        date: "12.06.1999"
    };*/
    const newTask = {
        id: Date.now (),
        title: text,
        done: false,
        date: formatDate(new Date())
    };

    tasks.push(newTask);

    input.value = "";
    renderAll();
}
function renderTask(task) {
    //container.innerHTML = '';

    //tasks.forEach((task) => {
    const item = document.createElement("div");
    item.classList.add("task");

    const content = document.createElement("div");
    content.classList.add("task__content");
    item.append(content);

    const title = document.createElement("div");
    const meta = document.createElement("div");

    title.classList.add("task__title");
    meta.classList.add("task__meta");

    title.textContent = task.title;
    meta.textContent = task.date;

    content.append(title, meta);

    const actions = document.createElement("div");
    actions.classList.add("task__actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("task__action", "task__action--edit");
    editBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#6f64a3"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>`;

    editBtn.addEventListener("click", () => {
        const newText = prompt("Изменить задачу:", task.title);
        if (newText && newText.trim() !== "") {
            task.title = newText.trim();
            renderAll();
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("task__action", "task__action--delete");
    deleteBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#cb6e6e"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>`;

    deleteBtn.addEventListener("click", () => {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        renderAll();
    });

    item.addEventListener("click", (event) => {
        if (event.target.closest(".task__action")) return;
        task.done = !task.done;
        renderAll();
    });

    actions.append(editBtn, deleteBtn);
    item.append(actions);

    if (task.done) item.classList.add("task--done");

    //container.append(item); 
    return item;
    //});

    //console.log(tasks);
}


function renderAll() {
    container.innerHTML = "";
    tasks.forEach((task) => {
        const card = renderTask(task);
        container.append(card);
    })
}
renderAll();


const now = new Date();
console.log(now);

const day = now.getDate();
const mouth = now.getMonth() + 1;
const year = now.getFullYear();
console.log(`${day}.${mouth}.${year}`);

const hours = now.getHours();
const minutes = now.getMinutes();
const seconda = now.getSeconds();
console.log(`${hours}:${minutes}:${seconda}`);

console.log(now.toLocaleDateString());

/*function DDMM(date) {
    const DD = date.getDate().toString().padStart(2, '0');
    const MM = (date.getMonth() + 1).toString().padStart(2, '0');
    const GG = date.getFullYear();
    const HH = date.getHours().toString().padStart(2, '0');
    const MIN = date.getMinutes().toString().padStart(2, '0');
    return `${DD}.${MM}.${GG}, ${HH}:${MIN}`;
}*/

console.log(formatDate(new Date()));

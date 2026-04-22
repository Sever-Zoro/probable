let title = "";
if (title === "") {
    console.log("НАзвание задачи не указана")
} else {
    console.log("Задача", title)
}

let taskCount = 5;
if (taskCount === 0) {
    console.log("Список пуст")
} else if (taskCount <= 0) {
    console.log("")
} else {
    console.log("Задач очень много")
}

let tasks = [
    {
        id: 1,
        title: "Купить Молоко",
        status: "активна",
    },
    {
        id: 2,
        title: "Сделать Уроки",
        status: "выполнена",
    },
    {
        id: 3,
        title: "Погулять С собакой",
        status: "активна",
    },
]
for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].id + ":" + tasks[i].title)
}

for (let task of tasks) {
    console.log(task.id + ":" + task.title)
}

let i = 0;
let total = 0;
let active = 0;
let done = 0;
while (i < tasks.length) {
    total++;
    if (tasks[i].status === "выполнена") {
        done++;
    } else {
        active++;
    }
    i++;
}
console.log("Всего: ", total, "Активных", active, "выполненных", done)

for (let task of tasks) {
    if (task.status === "активна") {
        console.log("Активная задача: ", task.title)
    }
}

tasks.forEach((task) => {
    console.log(task.id + ":" + task.title + "(" + task.status + ")");
})

let searchTitle = "Купить Молоко"
let found = null

for (let task of tasks){
    if ( task.title === searchTitle) {
        found = task;
        break;
    }
}
if (found) {
    console.log("найденная задача: ", found)
} else {
    console.log("задача не найдена")
}


let activeTasks = []

for ( let task of tasks) {
    if (task.status === "активна") {
        activeTasks.push(task)
    }
}

console.log("активные задачи: ", activeTasks)
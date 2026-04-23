

const input = document.querySelector(".form-add__input")
const addButton = document.querySelector(".form-add__batton")

const container = document.querySelector(".tasks")

const task = document.createElement("div")
task.classList.add("task")

const content = document.createElement("div")
content.classList.add("task__content")

task.append(content)

const title = document.createElement("div")
const meta = document.createElement("div")

title.classList.add("task__title")
meta.classList.add("task__meta")

content.append(title, meta)

const actions = document.createElement("div")
actions.classList.add("task__actions")

task.append(actions)

console.log(task)
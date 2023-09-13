const buttonNewTask = document.querySelector(".new-task button")
buttonNewTask.addEventListener("click", addTask)

function addTask() {
    event.preventDefault()
    console.log("add")
}
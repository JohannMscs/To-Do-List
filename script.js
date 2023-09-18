const buttonNewTask = document.querySelector(".new-task button")
const taskBox = document.querySelector(".task-box")
buttonNewTask.addEventListener("click", addTask)
const newTaskInput = document.querySelector(".new-task input")

function addTask() {

    event.preventDefault()
    console.log(newTaskInput.value)
    const taskItem = document.createElement("div")
    taskItem.classList.add("task-item")

    const inputItem = document.createElement("input")
    inputItem.type = "checkbox"

     const taskItemText = document.createElement("p")
    taskItemText.innerText = newTaskInput.value

    const buttonTrash = document.createElement("button")
    
    const trashItem = document.createElement("i")
    trashItem.classList.add("fa-solid")
    
    
    taskItem.appendChild(inputItem)
    taskItem.appendChild(taskItemText)
    taskItem.appendChild(buttonTrash)
    buttonTrash.appendChild(trashItem)
    taskBox.appendChild(taskItem)

    newTaskInput.value = ""

} 

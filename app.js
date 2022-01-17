onload = function() {
    let taskList = localStorage.getItem("taskList")
}

function insertTask(element) {
    const value = document.getElementById("taskInput").value

    let taskList = document.getElementById("taskList")

    let task = `
        <li>
            <div class="taskBox">
                <input type="checkbox" name="checkbox" id="checkbox">
                <span>${value}</span>
                <button class="btnDeleteTask" onclick="deleteTask(this)">X</button>
            </div>
        </li>
    `
    
    taskList.innerHTML += task

    localStorage.setItem("taskList", taskList)
}

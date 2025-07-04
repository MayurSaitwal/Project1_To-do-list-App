const inputBox = document.getElementById("input-box")
const task = document.getElementById("task")


function addtask() {
    if (inputBox.value == '') {
        alert("You must write something")
    }
    
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        task.appendChild(li)
    }

    inputBox.value = ""
    saveData();


    
}

task.addEventListener("click" , function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")     /* java script for checked the particular task and unchecked it by clicking the button */
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
} , false)

function saveData() {
    localStorage.setItem("data" , task.innerHTML );
}

function showTask() {
    task.innerHTML = localStorage.getItem("data");
}

showTask();



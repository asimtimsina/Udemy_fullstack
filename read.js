let data = [];
let form = document.getElementById('form');
let title = document.getElementById('titleInput');
let date = document.getElementById('dateInput');
let description = document.getElementById('descriptionInput');
let tasks = document.getElementById('tasks');
let addButton = document.getElementById('addButton');
let msg = document.getElementById('msg');

let GetData = () => {
    data = JSON.parse(localStorage.getItem('testdata'));
    createTask();
}

let createTask = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML +=
            `
            <div>
             <span class='small'>${x.title}</span>
             <span class='small'>${x.date}</span>
             <p>${x.description}</p>
              <span class="options">
                    <i onClick='EditTask(this)' data-bs-toggle='modal' data-bs-target='#form' class='fas fa-edit'></i>
                    <i onClick='DeleteTask(this);createTasks()' class='fas fa-trash-alt'></i>
              </span>
            </div>
            `
        )
    });
}

GetData();
createTask();


let formValidation = () => {
    if (title.value == "") {
        msg.innerHTML = "Title is required";
    }
    else {
        StoreData();
        addButton.setAttribute('data-bs-dismiss', 'modal');
        addButton.click();
        createTask();
        ResetForm();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let StoreData = () => {
    data.push({
        title: title.value,
        date: date.value,
        description: description.value
    });

    localStorage.setItem('testdata', JSON.stringify(data));
}


let ResetForm = () => {
    title.value = "",
        date.value = "",
        description.value = ""
}

let DeleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("testdata", JSON.stringify(data));
};

let EditTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
    title.value = selectedTask.children[0].innerHTML;
    date.value = selectedTask.children[1].innerHTML;
    description.value = selectedTask.children[2].innerHTML;
    DeleteTask(e);
}
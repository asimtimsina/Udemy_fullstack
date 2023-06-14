
let choice = prompt("What would you like to do?").toLowerCase();
let todo = [];

while (choice !== 'quit' && choice !== 'q') {

    console.log(choice);
    if (choice == 'add') {
        addtodo = prompt("Enter the todo item: ")
        todo.push(addtodo);
        console.log(`${addtodo} added to the list.`)
    }
    else if (choice == 'list') {
        console.log('***************');
        for (let eachtodo in todo) {
            console.log(eachtodo, ": ", todo[eachtodo]);
        }
        console.log('***************');
    }
    else if (choice == 'delete') {
        let deletetodo = parseInt(prompt("Enter the index which you want to delete ?"));
        if (!Number.isNaN(deletetodo)) {
            console.log(`deleated ${todo[deletetodo]}`);
            todo.splice(deletetodo, 1);
        } else {
            console.log("Unknown Index")
        }



    }

    choice = prompt("What would you like to do?").toLowerCase();
}
console.log("Quit the App.");

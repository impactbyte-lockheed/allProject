// const submitForm = event => {
//     event.preventDefault();
// };

if (localStorage.getItem("registerData") !== null) {
    const getDataUser = JSON.parse(localStorage.getItem("registerData"));
    const addName = document.getElementById("titleName");
    // const name = document.createElement("p");
    addName.innerText = `Welcome ${getDataUser.firstName}`;
    // addName.appendChild(addName);
}

function submitForm(event) {
    event.preventDefault();

    const firstNameValue = document.getElementById("firstName").value;
    const lastNameValue = document.getElementById("lastName").value;

    const registerData = {
        firstName: firstNameValue,
        lastName: lastNameValue
    };

    localStorage.setItem("registerData", JSON.stringify(registerData));
    localStorage.setItem("testing", true);
}

const deleteStorage = () => {
    // localStorage.removeItem("registerData");
    localStorage.clear();
};

// TODOS
const get = () => {
    const todos = localStorage.getItem("todos");

    if (todos !== null) {
        const parseTodos = JSON.parse(todos);

        return parseTodos;
    } else {
        localStorage.setItem("todos", "[]");
        return [];
    }
};

const set = todos => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const templateTodos = (index, todo) => {
    if (todo.text === null) {
        todo.text = "[FALSE]";
    } else {
        return `<span id=todo-${index} class="edit-todo" onclick="edit(event)"> 
        ${todo.text}</span> 
        <span id="destroy-${index}" class="delete" onclick="destroy(event)">X</span>
        `;
    }
};

const addTodo = event => {
    event.preventDefault();

    const todos = get();

    const text = document.getElementById("todos").value;
    document.getElementById("todos").value = "";

    if (text) {
        todos.push({
            text: text
        });
        set(todos);
        showTodo();
    } else {
        alert("Your input is empty");
    }
};

const showTodo = (todos = get()) => {
    const listTodos = document.getElementById("list-todos");
    listTodos.innerHTML = "";

    todos.forEach((todo, index) => {
        const element = document.createElement("div");
        element.innerHTML = templateTodos(index, todo);

        listTodos.append(element);
    });
};

const destroy = event => {
    if (event.target.matches(".delete")) {
        const id = event.target.id.replace("destroy-", "");

        const todos = get();

        todos.splice(id, 1);
        set(todos);
        showTodo();
    }
};

const edit = event => {
    if (event.target.matches(".edit-todo")) {
        const id = event.target.id.replace("todo-", "");
        const todos = get();
        const text = prompt(`Update Todo: ${todos[id].text}: `);

        if (text) {
            todos[id] = {
                text: text
            };
            set(todos);
            showTodo();
        } else {
            alert("Your input is empty");
        }
    }
};

showTodo();

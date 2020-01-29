const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
const list = document.createElement("li");
const link = document.createElement("a");

if (loginStatus === true) {
    list.setAttribute("class", "nav-item");
    list.setAttribute("id", "newList");
    document.getElementById("listMenu").appendChild(list);

    link.setAttribute("href", "#");
    link.setAttribute("class", "nav-link");
    link.setAttribute("onclick", "logout()");
    link.innerText = "Logout";
    document.getElementById("newList").appendChild(link);
}

const login = event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const registeredMember = JSON.parse(localStorage.getItem("data"));

    if (registeredMember === null) {
        alert("You account is not registered");
        window.location.href = "http://127.0.0.1:5502/index.html";
    } else if (
        username !== registeredMember.username ||
        password !== registeredMember.password
    ) {
        alert("Username/Password is incorrect");
    } else {
        window.location.href = "http://127.0.0.1:5502/todos.html";
        list.setAttribute("class", "nav-item");
        list.setAttribute("id", "newList");
        document.getElementById("listMenu").appendChild(list);

        link.setAttribute("href", "#");
        link.setAttribute("class", "nav-link");
        link.setAttribute("onclick", "logout()");
        link.innerText = "Logout";
        document.getElementById("newList").appendChild(link);

        localStorage.setItem("loginStatus", true);
    }
};

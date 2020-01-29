const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));

if (loginStatus === true) {
    const list = document.createElement("li");
    list.setAttribute("class", "nav-item");
    list.setAttribute("id", "newList");
    document.getElementById("listMenu").appendChild(list);

    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("class", "nav-link");
    link.setAttribute("onclick", "logout()");
    link.innerText = "Logout";
    document.getElementById("newList").appendChild(link);
}

const submitForm = event => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("rePassword").value;

    const data = {
        username: username,
        password: password
    };

    if (firstName === "") {
        alert("Please input your first name");
    }

    if (password !== rePassword) {
        alert("Password is not valid");
    } else {
        localStorage.setItem("data", JSON.stringify(data));
        window.location.href = "http://127.0.0.1:5502/login.html";
    }
};

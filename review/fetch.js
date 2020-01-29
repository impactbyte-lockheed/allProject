// AJAX

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/thoriqnf");

xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
        alert(`Error ${xhr.status}:${xhr.statusText}`);
    } else {
        const data = JSON.parse(xhr.response);

        console.log(data);

        const name = document.getElementById("titleName");
        name.innerText = data.login;

        const profileImage = document.getElementById("profile-image");
        const image = document.createElement("img");
        image.setAttribute("src", data.avatar_url);

        profileImage.appendChild(image);
    }
};

// FETCH

fetch("https://api.github.com/users/miftahmfaris")
    .then(response => {
        return response.json();
    })
    .then(result => {
        const name = document.getElementById("titleName");
        name.innerText = result.login;

        const profileImage = document.getElementById("profile-image");
        const image = document.createElement("img");
        image.setAttribute("src", result.avatar_url);

        profileImage.appendChild(image);
    });

const fetchData = async () => {
    const response = await fetch("https://api.github.com/users");

    const datas = await response.json();

    const list = document.getElementById("list-person");
    datas.forEach((data, index) => {
        const person = document.createElement("p");
        person.innerText = data.login;
        list.appendChild(person);
    });
};

fetchData();

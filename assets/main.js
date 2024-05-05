const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");



form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    };
    
    const jsonData = JSON.stringify(userData); //converte o objeto para uma string json


    fetch('http://localhost:8080/users',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: jsonData
    }
    )
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Se a resposta estiver OK, retorna os dados JSON
    })
    .then(data => {
        // Processa os dados recebidos do servidor
        console.log(data); // Exemplo de como lidar com os dados recebidos
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
})




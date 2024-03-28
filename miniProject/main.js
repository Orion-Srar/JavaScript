fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        constructor(users);
    });

function constructor(users) {
    const wrapper = document.getElementById('wrapper');

    users.forEach(user => {
        const divUser = document.createElement('div');
        divUser.classList.add('user')

        const p = document.createElement('p');
        p.innerText = `${user.id}.${user.name}`

        const buttonElement = document.createElement('button');
        buttonElement.innerText = 'Click';
        buttonElement.addEventListener("click", () => {
            localStorage.setItem('user', JSON.stringify(user))
            location.href = 'user-details.html' + `?id=${user.id}`
        })

        divUser.append(p, buttonElement)
        wrapper.appendChild(divUser)

    })

}





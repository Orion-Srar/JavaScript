const user = JSON.parse(localStorage.getItem('user'));

const wrapper = document.getElementsByClassName('wrapper')[0];

const userDiv = document.createElement('div');
userDiv.classList.add('user_details');

const buttonElement = document.createElement('button');
buttonElement.innerText = 'POST OF CURRENT USER';

wrapper.append(userDiv, buttonElement);
buttonElement.addEventListener("click", () => {
    const div = document.getElementsByClassName('post_cont')[0];

    if (div) {
        div.classList.toggle('block')
    } else {
        callPost(user.id)
    }

});

constructorUser(user);

function constructorUser(obj) {
    let userDiv = document.getElementsByClassName('user_details')[0];


    for (const objElement in obj) {

        if (typeof obj[objElement] === "object") {
            constructorUser(obj[objElement])
        } else {
            const divElement = document.createElement("div");
            divElement.classList.add('property')

            const p = document.createElement('p');
            p.innerText = `${objElement}: ${obj[objElement]}`

            divElement.appendChild(p)
            userDiv.appendChild(divElement);
        }
    }
}

function callPost(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
        .then(posts => {
            constructorPosts(posts)
        })
}

function constructorPosts(posts) {

    const wrapper = document.getElementsByClassName('wrapper')[0];
    const postsContainer = document.createElement('div');
    postsContainer.classList.add('post_cont');
    wrapper.appendChild(postsContainer);

    posts.forEach(post => {
        const divElement = document.createElement('div');
        divElement.classList.add('post');
        const pElement = document.createElement('p');
        pElement.innerText = `${post.title}`;
        const buttonElement = document.createElement('button');
        buttonElement.innerText = 'Post details';
        buttonElement.onclick = function () {
            localStorage.setItem('post', JSON.stringify(post))
            location.href = 'post-details.html';

        }
        divElement.append(pElement, buttonElement);
        postsContainer.appendChild(divElement);
    })
}


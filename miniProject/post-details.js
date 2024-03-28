const post = JSON.parse(localStorage.getItem('post'));
function constructorPost(obj) {
    let wrapperDiv = document.getElementsByClassName('wrapper')[0];

    for (const objElement in obj) {

        if (typeof obj[objElement] === "object") {
            constructorPost(obj[objElement])
        } else {
            const divElement = document.createElement("div");

            const p = document.createElement('p');
            p.innerText = `${objElement}: ${obj[objElement]}`

            divElement.appendChild(p)
            wrapperDiv.appendChild(divElement);
        }
    }
}

constructorPost(post);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => constructorComments(comments));

function constructorComments(comments) {
    const divElement = document.createElement('div');
    divElement.classList.add('comments_cont');
    document.body.appendChild(divElement);

    comments.forEach(comment => {
        const divComment = document.createElement('div');
        divComment.classList.add('comment');
        divElement.appendChild(divComment);

        const p = document.createElement('p');
        p.innerText = `${comment.body}`
        divComment.appendChild(p);
    })
}
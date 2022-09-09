let allPostArray = []

let inputTitle = document.getElementById("post-title")
let inputBody = document.getElementById("post-body")
let form = document.getElementById("new-post");

function RenderPost() {
    let htmlData = ""
    for(post of allPostArray) {
        htmlData += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>`
    }
    document.getElementById("blog-list").innerHTML = htmlData
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(data => {
    allPostArray = data.slice(0,5)
    RenderPost()
})


form.addEventListener("submit",function(s) {
    s.preventDefault()
    let Postinput = inputTitle.value
    let Postbody = inputBody.value
    const data = {
        title:Postinput,
        body:Postbody
    }

    const option = {
        method:"POST",
        body:JSON.stringify(data),
        headers: {
        "Content-Type":"application/json"
        }}
    fetch("https://apis.scrimba.com/jsonplaceholder/posts",option)
    .then(res => res.json())
    .then(post => {
    allPostArray.unshift(post)
    RenderPost()
    // inputTitle.value
    // inputBody.value
    form.reset()
    })
})
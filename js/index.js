document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector("#github-container")
    
    //grabbing what is typed in the search bar
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        const search = document.getElementById("search").value
        const orginalName = search.split(' ').join('')

        fetch("https://api.github.com/users/" + orginalName)
        .then(Response => Response.json())
        .then(data => renderUser(data))

        function renderUser(data){
            console.log(data)
            document.getElementById("user-list").innerHTML = ` 
            <img src = "${data.avatar_url}"/> 
            <p> Username: ${data.login}</p>
            <a href = "https://www.github.com/${orginalName}"> Link to profile: ${data.avatar_url}</a>
            `          
        }

        form.reset()
    })
    const img = document.querySelector("img")
    img.addEventListener("click", console.log('hi'))
    




});
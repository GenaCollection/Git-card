name = 'GenaCollection'//prompt()
async function func(){
    let git = await fetch(`https://api.github.com/users/${name}`)
    let user = await git.json()
    let repoUrl = await fetch(`https://api.github.com/users/${name}/subscriptions`)
    let repo = await repoUrl.json()

    document.getElementById("up").innerHTML += `<img src = ${user.avatar_url}>`
    let date = `${user.created_at.slice(8,10)+ user.created_at.slice(4,7)  + "-" + user.created_at.slice(0,4)}`
    document.getElementById('up').innerHTML += `<div id = "nameDate"><p><p>User name: ${user.login}</p><p>Account created: ${date}</p></div></div>`
    document.getElementById("up").innerHTML += `<div id ="followers"><p>followers ${user.followers}</p><p>following
    ${user.following}</p> </div>`
    
    document.getElementById("down").innerHTML += `<H2 id ="title">Repositories</H2>`

    document.getElementById("down").innerHTML += `<table id ="table">  <tr>
    <th>№</th>
    <th>Name of repo</th>
    <th>Repo created</th>
  </tr></table>`
    let table = document.getElementById('table')
    let num = 1
    repo.map(obj => {
        table.innerHTML +=`<tr> <td>${num++}</td>
                            <td>${obj.name}</td> 
                            <td>${obj.created_at.slice(8,10)+obj.created_at.slice(4,7)+ "-" + obj.created_at.slice(0,4)}</td></tr>`
    })
   
}

func()
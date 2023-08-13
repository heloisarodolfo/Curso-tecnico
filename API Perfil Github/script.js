function submit() {
    let userName = document.getElementById("username").value

    let outputImg = document.getElementById("img")
    let outputName = document.getElementById("name")
    let outputNickname = document.getElementById("nickname")
    let outputQttRepos = document.getElementById("qttRepos")
    let outputQttFollowers = document.getElementById("qttFollowers")
    let outputQttFollowing = document.getElementById("qttFollowing")
    let outputReposLink = document.getElementById("reposLink")

    
    let url = "https://api.github.com/users/" + userName
    fetch(url)
        .then(res => res.json())

        .then (data => {
            outputImg.innerHTML = `<img src= "${data.avatar_url}">`

            outputName.value = data.name
            outputNickname.value = data.login
            outputQttRepos.value = data.public_repos
            outputQttFollowers.value = data.followers
            outputQttFollowing.value = data.following
            outputReposLink.value = data.html_url + "/?tab=repositories"
        })
}

function clean() {
    let userName = document.getElementById("username")


    let outputImg = document.getElementById("img")
    let outputName = document.getElementById("name")
    let outputNickname = document.getElementById("nickname")
    let outputQttRepos = document.getElementById("qttRepos")
    let outputQttFollowers = document.getElementById("qttFollowers")
    let outputQttFollowing = document.getElementById("qttFollowing")
    let outputReposLink = document.getElementById("reposLink")
    

    outputName.value = ("")
    outputNickname.value = ("")
    outputQttRepos.value = ("")
    outputQttFollowers.value = ("")
    outputQttFollowing.value = ("")
    outputReposLink.value = ("")
}
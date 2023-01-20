let data = []

document.querySelector('#user-button')
        .addEventListener('click', getInfos)


async function getInfos(){
    const user = document.querySelector('#user').value
    const url = `https://api.github.com/users/${user}`

    await fetch(url, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }
    })
     .then((resp) => resp.json())
     .then((resp) => {
        if(resp.hasOwnProperty('message')){
            let error = document.querySelector('.error')
            error.innerText = 'Usuário não encontrado!'
        }
        else{
        data.push(resp)
        render(data)}
    })

   await fetch(`https://api.github.com/users/${user}/repos`, {
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        }
    })
     .then((resp) => resp.json())
     .then((resp) => {
        renderRepos(resp)
    }) 
    
    
}











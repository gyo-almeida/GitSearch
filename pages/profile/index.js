const body = document.querySelector('body')

function createProfile(element){
    const { id, avatar_url, name, bio, email } = element

    let section    = document.createElement('section')
    let ul         = document.createElement('ul')
    let mainDiv    = document.createElement('div')
    let firstDiv   = document.createElement('div')
    let image      = document.createElement('img')
    let secDiv     = document.createElement('div')
    let user       = document.createElement('h3')
    let desc       = document.createElement('p')
    let thirdDiv   = document.createElement('div')
    let mail       = document.createElement('button')
    let link       = document.createElement('a')
    let change     = document.createElement('button')

    section.classList  = 'user-page'
    ul.classList       = 'repos-list'
    mainDiv.classList  = 'main-div'
    firstDiv.classList = 'first-div'
    secDiv.classList   = 'second-div'
    thirdDiv.classList = 'third-div'
    mail.classList     = 'mail-btn'
    change.classList   = 'change-btn'

    section.id       = id
    link.href        = "mailto" + email
    image.src        = avatar_url
    user.innerText   = name
    desc.innerText   = bio
    mail.innerText   = 'Email'
    change.innerText = 'Trocar usuário'

    change.addEventListener('click', () => location.reload())
    
    mail.addEventListener('click', () => link)

    thirdDiv.append(mail, change)
    mail.appendChild(link)
    firstDiv.append(image, secDiv)
    secDiv.append(user, desc)
    mainDiv.append(firstDiv, thirdDiv)
    section.append(mainDiv, ul)

    return section
}

function render(arr){
    const main = document.querySelector('main')
    main.innerHTML = ''

    arr.forEach(element => {
        const profile = createProfile(element)
        main.appendChild(profile)
    });
}


function createRepos(element){
    const { name, description, html_url } = element

    let li       = document.createElement('li')
    let title    = document.createElement('p')
    let desc     = document.createElement('p')
    let div      = document.createElement('div')
    let repo     = document.createElement('button')
    let linkRepo = document.createElement('a')
    let demo     = document.createElement('button')
    let linkGit  = document.createElement('a')

    title.classList    = 'repo-title'
    desc.classList     = 'repo-desc'
    div.classList      = 'btn-list'
    repo.classList     = 'btn-repo'
    demo.classList     = 'btn-demo'

    title.innerText    = name
    desc.innerText     = description
    repo.innerText     = 'link repositório'
    demo.innerText     = 'demo'
    linkRepo.href      =  html_url
    linkRepo.target    ='_blank'
    linkGit.href       = 'https://github.com'
    linkGit.target     = '_blank'


    li.append(title, desc, div)
    div.append(linkGit, linkRepo)
    linkGit.appendChild(demo)
    linkRepo.appendChild(repo)

    return li
}

function renderRepos(arr){
    const ul = document.querySelector('.repos-list')

    arr.forEach(element => {
        const repo = createRepos(element)
        ul.appendChild(repo)
    });
}


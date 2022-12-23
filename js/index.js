
function display(){
    data.users.forEach(user=>{
        console.log(`Title: ${data.title} ,Subtitle: ${data.subtitle},User: ${user.username}`)
        const divData = document.getElementById('show-panel')
        li.addEventListener('click',()=>{
            const h3 = document.createElement('h3');
            h3.textContent =data.subtitle
            const p = document.createElement('p')
            p.textContent = data.description
            const li = document.createElement('li')
            li.textContent = user.username
            divData.appendChild(h3)
            divData.appendChild(p)
            divData.appendChild(li)
            
        })
    })

}




document.addEventListener("DOMContentLoaded", function() {

    fetch('http://localhost:3000/books')
    .then(response=>response.json())
    .then(data=>{
        const divData = document.getElementById('show-panel')
        data.forEach(data=>{
            const list = document.getElementById('list')
            const li = document.createElement('li')
            list.appendChild(li) 
            li.textContent = data.title
            const titles = li.textContent
            console.log(titles)
            li.addEventListener('click', ()=>{
                console.log(data.users)
                const h3 = document.createElement('h3');
                h3.textContent =data.subtitle
                const p = document.createElement('p')
                p.textContent = data.description
                const ul = document.createElement('ul')
                const li2 = document.createElement('li')
                ul.appendChild(li2)
                data.users.forEach(user=>{
                    console.log(user.username)
                    ul.innerHTML += `<li>${user.username}</li>`
                })
             if (divData.innerHTML === ''){
                divData.appendChild(h3)
                divData.appendChild(p)
                divData.appendChild(ul)
             }else {
                divData.innerHTML = '';
                divData.appendChild(h3)
                divData.appendChild(p)
                divData.appendChild(ul)
             }
            
                

            })
        })
    
    })
});

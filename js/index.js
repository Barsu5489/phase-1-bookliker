
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

function update(id){
   
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
            const btn = document.createElement('button')
            li.addEventListener('click', ()=>{
                 const idN = data.id
                console.log(data.users)
                const h3 = document.createElement('h3');
                h3.textContent =data.subtitle
                const p = document.createElement('p')
                p.textContent = data.description
                const ul = document.createElement('ul')
                const li2 = document.createElement('li')
                
                btn.textContent = 'like'
                ul.appendChild(li2)
                data.users.forEach(user=>{
                    console.log(user.username)
                    ul.innerHTML += `<li>${user.username}</li>`
                })
             if (divData.innerHTML === '')
             {
                divData.appendChild(h3)
                divData.appendChild(p)
                divData.appendChild(ul)
                divData.appendChild(btn)
             }else {
                divData.innerHTML = '';
                divData.appendChild(h3)
                divData.appendChild(p)
                divData.appendChild(ul)
                divData.appendChild(btn)
             }
          
               

            })
            btn.addEventListener('click', ()=>{
                console.log('CLICKED')
                fetch(`http://localhost:3000/books/:${data.id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        id:1,
                        username:"pouros"
                    }),
                    headers:{
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json',
                    }
                })
                .then(res=>res.json())
                .then(data=>console.log(data))
            })
        })
    
    })
});

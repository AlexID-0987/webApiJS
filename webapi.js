(async function getApi(){
    const resp = await fetch('http://localhost:3000/posts')
    const resp1=await resp.json()
    console.log(resp1)
    const item=document.querySelector('.name')
    for (const it of resp1){
        item.innerHTML+=`
        <article>
        <div class="cardItem">
        <div>${it.id}${it.name}
        <div class="im">
        <img src="${it.src}">
        </div>
        </div>
        <button onClick='put(${it.id})' class='btn btn-primary'>PUT</button>
        <button class="btn btn-danger" onClick='deleteItem(${it.id})'>Delete</button>
        </div>
        </article>
        `
    }
   
})()
const pers=document.getElementById('addName')
pers.addEventListener('click', function(){
    (async function addApi(){
        let id=document.getElementById('id1').value
        let name=document.getElementById('name').value
        let photo=document.getElementById('photo').value
    let posts={
        "id":id,
        "name":name,
        "src":photo
        }
    try{
    const responce= await fetch('http://localhost:3000/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(posts),
        
    })
    const promise=await responce.json()
    console.log('Okey',JSON.stringify(promise))
    
}
catch(error){
    console.error('Error',error)
}
    

})()
})
const clearBut=document.getElementById('clear')
clearBut.onclick=function(){
    document.getElementById('id1').value=''
    document.getElementById('name').value=''
    document.getElementById('photo').value=''
}

async function put(a){
    
               try{
                const nameAdd=prompt("Enter name")
                const photoAdd=prompt("Enter image")
                let posts={
                    "name":nameAdd,
                    "src":photoAdd
                    }
                const re=await fetch('http://localhost:3000/posts/'+`${a}`,{
                    method: 'PUT',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(posts)
                })
                const js=await re.json()
                console.log("Okeyy", JSON.stringify(js))
               }
               catch(error){
                console.error("Mistake",error)
               }

              console.log(a)  
            }
        
async function deleteItem(id){
    try{
    const deletefunc=await fetch('http://localhost:3000/posts/'+`${id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type':'application/json'
        },  
    })
    const reqw=await deletefunc.json()
    console.log("OK",JSON.stringify(reqw))
   }catch(error){
        console.error("Mistake",error)
   }
}

 

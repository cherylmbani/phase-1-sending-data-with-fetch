// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
            

        })

    })
    .then(response=>response.json())
    .then(object=>{
        const newId = object.id;
        const p=document.createElement("p");
        p.textContent = newId;
        document.body.appendChild(p);
        
    })
    .catch(error => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
    });
}
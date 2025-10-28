const loadBtn=document.getElementById('loadBtn');
const searchInput=document.getElementById('searchInput');
const userList=document.getElementById('userList');

let allUsers=[];

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        if(!response.ok){
            throw new Error('Network Error');
        }
        return response.json();
    })
    .then(users =>{
        allUsers=users;
        displayList(users);
    })
    .catch(error=>{
        userList.innerHTML=<p class="error">Error:${error.message}</p>;
    })
}

function displayList(users){
    userList.innerHTML="";
    if(users.length == 0){
        userList.innerHTML='<p>No users found</p>';
        return;
    }
    users.forEach(user =>{
    const div=document.createElement('div');
    div.className='user';
    div.innerHTML=`<b>${user.name}</b><br/>${user.email}<br/>${user.address.city}`;
    userList.appendChild(div);
});
}
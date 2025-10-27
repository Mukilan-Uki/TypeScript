async function fetchUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users= await response.json();
        //console.log(users);
        //users.forEach(users => console.log(users));
        console.log(JSON.stringify(users, null, 2));
    }
    catch (error){
        console.log('Error fetching data:',error);
    }
}
fetchUsers();
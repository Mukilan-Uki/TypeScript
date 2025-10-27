const jsonString = '{"name":"Mukilan","age":20}';
const user = JSON.parse(jsonString);
console.log(`Name of the user is ${user.name}`);
console.log(`Age of the user is ${user.age}`);
// let axios = require('axios');
import axios from 'axios';

export default class Users {
    static all() {
        return axios('https://jsonplaceholder.typicode.com/users').then(data=>data.data);
        // return axios.get('https://jsonplaceholder.typicode.com/users').then(data=>data.data);
    }
};

// module.exports = users;




// let axios = require('axios');

// let users = () => {
//     return axios('https://jsonplaceholder.typicode.com/users').then(data=>data.data);
// };

// module.exports = users;

// console.log(users().then(data=>console.log(data)));
// console.log(users());

/**
 * 
 * 
 // let users = () => {
//     // return axios('https://jsonplaceholder.typicode.com/users').then(data=>data.data).then(data=>{
//     //     // console.log(data);
//     //     let names = data.map(user => user.name);
//     //     // console.log(names)
//     //     return names;
//     // });

//     // return axios('https://jsonplaceholder.typicode.com/users').then(data=>data.data).then(data=>{
//     //     // console.log(data);
//     //     let names = data.map(user => user.name);
//     //     // console.log(names)
//     //     return names;
//     // }).then(data=>console.log(data))

//     // return axios('https://jsonplaceholder.typicode.com/users').then(data=>data.data).then(data=>console.log(data));
    
//     // return axios('https://jsonplaceholder.typicode.com/users').then(data=>data.data);
// }
 */
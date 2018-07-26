import axios from 'axios';

const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
]

export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people);
    }, 3000);
  })
}

export const fetchUsers2 = () => {
  return axios({
    method: 'GET',
    url: 'https://randomuser.me/api/?results=5'
  }).then(res => res).catch(error => error);
}

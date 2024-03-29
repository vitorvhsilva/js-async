// fetch('https://reqres.in/api/users/1')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('ERRO'))


fetch('https://reqres.in/api/users/1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Vitor'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERRO'))
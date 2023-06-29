const userList = document.getElementById('user-list');

fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Falhou a requisição: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    data.map(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('infelizmente ocorreu o seguinte erro:', error);
  });
'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const callId = document.getElementById('target');

for (let i = 0; i<students.length; i++){
  const list = document.createElement('option');
  list.value = students[i].id;
  list.textContent =students[i].name;

  callId.appendChild(list);

}


'use strict';
const names = ['John', 'Paul', 'Jones'];
const idCall = document.getElementById("target");

for (let i = 0; i<names.length; i++){
    const list = document.createElement('li');
    const personName = document.createTextNode(names[i]);
    list.append(personName);
    idCall.append(list);
}

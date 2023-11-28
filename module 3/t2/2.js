const idCall = document.getElementById('target');
const list = document.createElement('li');
const sentence = document.createTextNode("First item");
list.appendChild(sentence)
idCall.appendChild(list)

const list2 =document.createElement('li');
const sentence2 = document.createTextNode("Second item");
list2.appendChild(sentence2);
idCall.appendChild(list2)

const list3 =document.createElement('li');
const sentence3 = document.createTextNode("Third item");
list3.appendChild(sentence3);
idCall.appendChild(list3)
const dogs = [];
for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`Enter the name of dog ${i+1}:`));
}

dogs.sort().reverse();

let list = document.createElement("ul");
for (let i = 0; i < dogs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(dogs[i]));
    list.appendChild(item);
}

document.body.appendChild(list);
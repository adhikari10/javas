 "use strict"
    const participants = [];
    let numParticipants =  prompt("Enter number of participants: ")

    for (let i = 0;  i < numParticipants; i++) {
        participants.push(prompt(`Enter the name of the participants ${i+1}:`));
    }
    participants.sort();

    const orderedList = document.createElement('ol');

for (let participantName of participants ) {
    const listItem = document.createElement('li');
    listItem.textContent = participantName;
    orderedList.appendChild(listItem);
}


document.body.appendChild(orderedList);






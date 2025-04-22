const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

console.log(people);

let currentElementName = "";
for (let i = 0; i < people.length; i++) {
  currentElementName += people[i].name;
}
console.log(currentElementName);

// const namePeople = people.filter((person) => {
//   currentName = person.name;
//   return currentName;
// });

// console.log(namePeople);

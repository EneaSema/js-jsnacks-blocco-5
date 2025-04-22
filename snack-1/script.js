const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

names.forEach(function (name) {
  console.log(name);
});

// // consigli uso forEach
// for (let i = 0; i < names.length; i++){
//     const current = names[i];
//     console.log(current);
//  }

// for (let current of names) {
//     console.log(current);
// }

// names.forEach(function (name, index) {
//   console.log(name, index);
// });

// names.forEach((current, index) => {
//     console.log(current, index);
// })

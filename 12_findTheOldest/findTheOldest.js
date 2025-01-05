// const findTheOldest = function(people) {
//     let oldest = 0;
//     let maxAge = 1;
//     let idx = 0;
//     let ansIdx = 0;
//     people.forEach((person) => {
//         let yearOfDeath = 0;
//         if (!('yearOfDeath' in person)) {
//             yearOfDeath = 2025;
//           }
//           else{
//             yearOfDeath = person.yearOfDeath;
//           }
//         let age = yearOfDeath - person.yearOfBirth;
//         if(age > maxAge){
//             maxAge = age;
//             ansIdx = idx;
//         }
//         idx++;
//       });
//       return people[ansIdx];
// };
const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear(); // Get the current year dynamically
    return people.reduce((oldest, person) => {
      let yearOfDeath = person.yearOfDeath || currentYear; // Use current year if yearOfDeath is missing
      let age = yearOfDeath - person.yearOfBirth;
      let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
  
      return age > oldestAge ? person : oldest; // Update oldest if current person is older
    }, people[0]); // Initialize with the first person in the array
  };

// Do not edit below this line
module.exports = findTheOldest;

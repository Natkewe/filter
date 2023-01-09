  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);
// searching through to find the people over the age of 21

const paul = people.filter(person => person.name === "Paul")[0];
console.log(paul);
// trying to just get the name of Paul to filter through
// you can shorten it even more by just using just 'p' instead of person
//having the 0 takes the name out of the array and into the object


//
// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const candidates = students.filter(student => {
let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
return strongSkills.length > 0;
})
console.log(candidates);

// or

const hasStrongSkills = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
  return strongSkills.length > 0;
}

const candidates = students.filter(hasStrongSkills)
  console.log(candidates);
  // instead seperate the functions and then pass the first function to the second


 const has5yearsExp = skill => skill.yrsExperience >=5;
 const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
 const candidates = students.filter(hasStrongSkills);
 console.log(candidates);
 // to simplify it even further you can write it on one line
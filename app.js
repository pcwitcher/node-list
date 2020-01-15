const fs = require('fs');

const genders = ['M', 'F'];
console.log('genders:', genders);

const maleNames = [
    'Liam',
    'Noah',
    'William',
    'James',
    'Oliver',
    'Benjamin',
    'Elijah',
    'Lucas',
    'Mason',
    'Logan',
    'Alexander',
    'Ethan',
    'Jacob',
    'Michael',
    'Daniel',
    'Henry',
    'Jackson',
    'Sebastian',
    'Aiden',
    'Matthew',
    'Samuel',
    'David',
    'Joseph',
    'Carter',
    'Owen',
    'Wyatt',
    'John',
    'Jack',
    'Luke',
    'Jayden',
    'Dylan',
    'Grayson',
    'Levi',
    'Isaac',
    'Gabriel',
    'Julian',
    'Mateo',
    'Anthony',
    'Jaxon',
    'Lincoln',
    'Joshua',
    'Christopher',
    'Andrew',
    'Theodore',
    'Caleb',
    'Ryan',
    'Asher',
    'Nathan',
    'Thomas',
    'Leo'
];
console.log('maleNames:', maleNames);

const femaleNames = [
    'Emma',
    'Olivia',
    'Ava',
    'Isabella',
    'Sophia',
    'Charlotte',
    'Mia',
    'Amelia',
    'Harper',
    'Evelyn',
    'Abigail',
    'Emily',
    'Elizabeth',
    'Mila',
    'Ella',
    'Avery',
    'Sofia',
    'Camila',
    'Aria',
    'Scarlett',
    'Victoria',
    'Madison',
    'Luna',
    'Grace',
    'Chloe',
    'Penelope',
    'Layla',
    'Riley',
    'Zoey',
    'Nora',
    'Lily',
    'Eleanor',
    'Hannah',
    'Lillian',
    'Addison',
    'Aubrey',
    'Ellie',
    'Stella',
    'Natalie',
    'Zoe',
    'Leah',
    'Hazel',
    'Violet',
    'Aurora',
    'Savannah',
    'Audrey',
    'Brooklyn',
    'Bella',
    'Claire',
    'Skylar'
];
console.log('femalenames:', femaleNames);

const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
    'Anderson',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Thompson',
    'Garcia',
    'Martinez',
    'Robinson',
    'Clark',
    'Rodriguez',
    'Lewis',
    'Lee',
    'Walker',
    'Hall',
    'Allen',
    'Young',
    'Hernandez',
    'King',
    'Wright',
    'Lopez',
    'Hill',
    'Scott',
    'Green',
    'Adams',
    'Baker',
    'Gonzalez',
    'Nelson',
    'Carter',
    'Mitchell',
    'Perez',
    'Roberts',
    'Turner',
    'Phillips',
    'Campbell',
    'Parker',
    'Evans',
    'Edwards',
    'Collins',
    'Stewart',
    'Sanchez',
    'Morris',
    'Rogers',
    'Reed',
    'Cook',
    'Morgan',
    'Bell',
    'Murphy',
    'Bailey',
    'Rivera',
    'Cooper',
    'Richardson',
    'Cox',
    'Howard',
    'Ward',
    'Torres',
    'Peterson',
    'Gray',
    'Ramirez',
    'James',
    'Watson',
    'Brooks',
    'Kelly',
    'Sanders',
    'Price',
    'Bennett',
    'Wood',
    'Barnes',
    'Ross',
    'Henderson',
    'Coleman',
    'Jenkins',
    'Perry',
    'Powell',
    'Long',
    'Patterson',
    'Hughes',
    'Flores',
    'Washington',
    'Butler',
    'Simmons',
    'Foster',
    'Gonzales',
    'Bryant',
    'Alexander',
    'Russell',
    'Griffin',
    'Diaz',
    'Hayes'
];
console.log('lastNames:', lastNames);

const people = [];

const ages = { min: 18, max: 78 };
const phones = { min: 100000000, max: 999999999 };

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const randChoiceNum = ({ min, max }) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);

    let firstName;
    if (gender === 'M') {
        firstName = randChoice(maleNames);
    } else {
        firstName = randChoice(femaleNames);
    }

    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    const age = randChoiceNum(ages);

    const phone = randChoiceNum(phones);

    const email =
        firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@gmail.com';

    const personalData = { gender, firstName, lastName, age, phone, email };
    people.push(personalData);
}

const jsonPeople = JSON.stringify(people);

fs.writeFile('people.json', jsonPeople, err => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
});
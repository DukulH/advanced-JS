const students = [
    {id: 21, name: 'Omor Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Dipjol'},
]

const names = students.map(s => s.name);
const bigger = students.filter(s => s.id>40)
console.log(names);
console.log(bigger);
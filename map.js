const student=[
    {id:21, name:'asad'},
    {id:24, name:'kalam'},
    {id:11, name:'nashid'},
    {id:31, name:'aajh'},
];

  


const name = student.map(x=>x.name)
// console.log(name);

const ids = student.map(x=>x.id)
// console.log(ids);

const elder = student.filter(x=>x.id>20);
// console.log(elder);

const one = student.find(x=>x.id>20);
console.log(one);





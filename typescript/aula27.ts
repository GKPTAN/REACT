interface curso{
    titulo:string;
    des:string;
    aulas:number;
    maxAlunos?:number;
};

let curso1:curso;
let curso2:curso;
let curso3:curso;

curso1={titulo:"Typescript",des:"Curso de Typescript",aulas:100,maxAlunos:50};
curso2={titulo:"Javascript",des:"Curso de Javascript",aulas:150,maxAlunos:100};
curso3={titulo:"C++",des:"Curso de C++",aulas:200};
console.log(curso1);
console.log(curso2);
console.log(curso3);
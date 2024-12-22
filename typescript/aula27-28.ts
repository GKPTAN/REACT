interface curso{
    titulo:string;
    des:string;
    aulas:number;
    maxAlunos?:number;
    iniciarCurso?(teste:string):void;
};

interface cursoProg extends curso{
    aulas:number;
    maxAlunos?:number;
};

interface cursoArtes extends curso{
    aulas:number;
    maxAlunos?:number;
};

let curso1:cursoProg;
let curso2:cursoProg;
let curso3:cursoArtes;

function iniciarCurso(t:string):void{
    console.log("teste");
};

curso1={titulo:"Typescript",des:"Curso de Typescript",aulas:100,maxAlunos:50};
curso2={titulo:"Javascript",des:"Curso de Javascript",aulas:150,maxAlunos:100};
curso3={titulo:"C++",des:"Curso de C++",aulas:200};
console.log(curso1);
console.log(curso2);
console.log(curso3);
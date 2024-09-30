const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Daniel', nota: 7 },
    { nome: 'Eva', nota: 4 }
];

function get_aprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = get_aprovados(alunos);
console.log(alunosAprovados);

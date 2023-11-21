function imprimirObjeto() {
    //Prática 1
    const estudante = {
        nome: "Bruno", // String
        sobrenome: "Carlos", // String
        numeroMatricula: 41128741, // Number
        notasSemestre: [8.5, 9, 7.8, 8] // Array
    }
    console.log(estudante);

    //Prática 2
    estudante.modulo = "Módulo 1 - Fundamentos";
    console.log(estudante);
    console.log(estudante.nome);
    console.log(estudante.notasSemestre[1]);
    console.log(estudante.modulo);

    //Prática 3
    const estudanteCopia = {
        ...estudante
    }
    console.log(estudanteCopia);
    estudanteCopia.nome = "Astrodev";
    estudanteCopia.notasSemestre.push(9);
    estudanteCopia.modulo = "Módulo 2 - Frontend";
    console.log(estudanteCopia);

    const estudanteLabenu = [estudante, estudanteCopia];
    console.log(estudanteLabenu);
}
imprimirObjeto()
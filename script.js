function imprimirObjeto() {
    //Prática 1
    const estudante = {
        nome: "Bruno", // String
        numeroMatricula: 456983164, // Number
        notasSemestre: [8.5, 9, 7.8, 8] // Array
    }
    console.log(estudante);

    //Prática 2
    estudante.modulo = "Fundamentos";
    console.log(estudante);
    console.log(estudante.nome);
    console.log(estudante.notasSemestre[1]);
    console.log(estudante.modulo);

    //Prática 3
    const estudanteCopia = {
        ...estudante,
        nome: "Astrodev",
        notasSemestre: [...estudante.notasSemestre, 9],
        modulo: "FrontEnd"
    }
    console.log(estudanteCopia);

    const estudantesLabenu = [estudante, estudanteCopia];
    //ou podemos fazer a declaração utilizando o método '.push' no arrya vazio.
    console.log(estudantesLabenu);
}

imprimirObjeto()
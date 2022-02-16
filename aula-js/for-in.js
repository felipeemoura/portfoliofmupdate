let pessoa = {
    nome: "Felipe",
    idade: 18,
    sexo: "Masculino",
}

for (let p in pessoa) {
    console.log("Dados da pessoa: ", p + ": ", pessoa[p]);
}
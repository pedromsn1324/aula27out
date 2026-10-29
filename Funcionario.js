export class Funcionario{
    constructor(matricula,nome,salarioBase){
        this.matricula=matricula;
        this.nome=nome;
        this.salarioBase=salarioBase;
    }
    calcularSalario(){
        return this.salarioBase;
    }
    mostrarDados(){
        const salarioBaseFormatado=this.salarioBase.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'});
        console.log(`-----Dados do Funcionario-----`)
        console.log(`Matricula: ${this.matricula}\nNome: ${this.nome}\nSalario Base: ${salarioBaseFormatado}`)
    }
}

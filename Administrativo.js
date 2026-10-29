import { Funcionario } from "./Funcionario.js";

export class Administrativo extends Funcionario{
    constructor(matricula,nome,salarioBase,gratificacao){
        super(matricula,nome,salarioBase);
        this.gratificacao=gratificacao;
    }
    calcularSalario(){
        return this.salarioBase+this.gratificacao;
    }
    mostrarDados(){
        super.mostrarDados();
        console.log(`Gratificação: ${this.gratificacao}`)
    }
}
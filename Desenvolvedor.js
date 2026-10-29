import { Funcionario } from "./Funcionario.js";

export class Desenvolvedor extends Funcionario{
    constructor(matricula,nome,salarioBase,linguagemPrincipal,bonusProjeto){
        super(matricula,nome,salarioBase);
        this.linguagemPrincipal=linguagemPrincipal;
        this.bonusProjeto=bonusProjeto;
    }
    calcularSalario(){
        return this.salarioBase+this.bonusProjeto;
    }
    mostrarDados(){
        super.mostrarDados();
        console.log(`Linguagem Principal: ${this.linguagemPrincipal}`);
        console.log(`Salário: ${this.calcularSalario()}`);
    }
}
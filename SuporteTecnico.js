import { Funcionario } from "./Funcionario.js";

export class SuporteTecnico extends Funcionario{
    constructor(matricula,nome,salarioBase,quantidadeAtendimentos,valorPorAtendimentos){
        super(matricula,nome,salarioBase);
        this.quantidadeAtendimentos=quantidadeAtendimentos;
        this.valorPorAtendimentos=valorPorAtendimentos;
    }
    calcularSalario(){
        const salarioFinal=this.salarioBase+(this.quantidadeAtendimentos*this.valorPorAtendimentos);
        return salarioFinal;
    }
    mostrarDados(){
        super.mostrarDados();
        const salarioTotalFormatado=this.calcularSalario().toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'});
        console.log(`Quantidade de Atendimentos: ${this.quantidadeAtendimentos}\nValor por Atendimentos: ${this.valorPorAtendimentos}`)
        console.log(`Salario Total: ${salarioTotalFormatado}`);
    }
}
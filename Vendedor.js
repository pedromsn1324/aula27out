import { Funcionario } from "./Funcionario.js";

export class Vendedor extends Funcionario{
    constructor(matricula,nome,salarioBase,totalVendas){
        super(matricula,nome,salarioBase);
        this.totalVendas=totalVendas;
    }
    calcularSalario(){
        const comissao=this.totalVendas*0.05;
        return super.calcularSalario()+comissao;
    }
    mostrarDados(){
        super.mostrarDados();
        const vendasFormatadas=this.totalVendas.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'});
        console.log(`Total de Vendas: ${vendasFormatadas}`);
        const salarioFinalFormatado=this.calcularSalario().toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'});
        console.log(`Salario Total: ${salarioFinalFormatado}`);
    }

}
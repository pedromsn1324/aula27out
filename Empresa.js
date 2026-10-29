export class Empresa{
    constructor(){
        this.funcionarios=[];
    }
    adicionarFuncionario(funcionario){
        funcionarios.push(funcionario);
    }
    calcularFolhaPagamento(){
        let total=0;
        for(const funcionario of this.funcionarios){
            total+=funcionario.calcularSalario();
        }
        return total;
    }
    listarFuncionarios(){
        for(const funcionario of this.funcionarios){
            funcionario.mostrarDados();
        }
    }
}


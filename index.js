import { Administrativo } from "./Administrativo.js";
import { Desenvolvedor } from "./Desenvolvedor.js";
import { Vendedor } from "./Vendedor.js";
import { SuporteTecnico } from "./SuporteTecnico.js";

const adm1=new Administrativo("ADM001","Pedro",2000,400);
const adm2=new Administrativo("ADM002","Caio",1900,200);

const dev1=new Desenvolvedor("DEV001","Matheus",3000,"Java",500);
const dev2=new Desenvolvedor("DEV002","Danilo",4000,"PHP",600);

const seller1=new Vendedor("SELL001","Carlos",1700,5000);
const seller2=new Vendedor("SELL002","Derick",1700,3000);

const sup1=new SuporteTecnico("SUP001","Romeu",2200,20,10);
const sup2=new SuporteTecnico("SUP002","Gabriel",2200,10,10);

const funcionarios=[]
funcionarios.push(adm1,adm2,dev1,dev2,seller1,seller2,sup1,sup2);

for(const funcionario of funcionarios){
    funcionario.mostrarDados();
}
const totalFolhaPagamento=funcionarios.reduce((acumulador,funcionario)=>{
    return acumulador+funcionario.calcularSalario();
},0)
const valorFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(totalFolhaPagamento);

console.log(`Valor total da folha de pagamento: ${valorFormatado}`);
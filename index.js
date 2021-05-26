import {Cliente} from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("joao", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Maria", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Jennifer", 45612378900);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente);

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
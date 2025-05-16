/*
 * Antes de rodar, instalar:
 * 1) node.js (https://nodejs.org/en)
 * 2) npm install -g json-server
 * 3) Na raiz do projeto, criar "db/db.json":
 {
    "cidades": [
      {"id": 1, "cidade": "Belo Horizonte", "estado": "MG", "população": 3800000},
      {"id": 2, "cidade": "São Paulo", "estado": "SP", "população": 11800000},
      {"id": 3, "cidade": "Rio de Janeiro", "estado": "RJ", "população": 5300000},
      {"id": 4, "cidade": "Curitiba", "estado": "PR", "população": 1200000},
      {"id": 5, "cidade": "Fortaleza", "estado": "CE", "população": 2100000}
    ]
  }
 *  
 * Para rodar, executar o comando abaixo:
 * 4) json-server --watch db/db.json --port 3333
*/

const url = "https://9184a615-58dc-476b-9b6b-37318556498e-00-2bnic1duw2m7u.picard.replit.dev:3000";
const urlCidades = url + "/cidades"; 
console.log(urlCidades);
let cidades = [];

function carregarDadosJSONServer(funcaoImprimirDadosDoBancoDeDados) {
  fetch(urlCidades)
    .then(function(response) { return response.json(); })
    .then(function(dados) {
      //cidades = dados.cidades;
      cidades = dados;
      console.log('Dados carregados:');
      console.log(cidades);
      funcaoImprimirDadosDoBancoDeDados();
    })
}
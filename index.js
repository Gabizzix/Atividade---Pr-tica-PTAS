const http = require("http");

//Endereço local da máquina que será o servidor.
const host = "localhost";

//A porta é um número que dá acesso ao servidor, ela pode ir de 1 até 65235.
const porta = 3000;

const resposta = function(req, res){
    res.end(`
    <html>
        <head>
        <style>
        body {
            background: #7676
        }
        </style>
        </head>
        </body>
    <p> Nome: Gabriela Mattos. </p>
    <p> Idade: 17 anos </>
    <p> Escola: Instituto Federal de Mato Grosso do Sul. </p>
        </body>
    </html>
    `)
}

const servidor = http.createServer(resposta)

//Um servidor, nada mais é do que um "programa" que tem como finalidade escuta uma porta e dar uma resposta.
servidor.listen(porta, host,function(){
    console.log("O servidorzinho está funcionando de boa.");
})
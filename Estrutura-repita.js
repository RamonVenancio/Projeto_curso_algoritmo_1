/*
Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
       escreva("Digite o primeiro valor: ")
       leia(valor01)
       escreva("Digite o segundo valor: ")
       leia(valor02)
       escreval("Resultado: ", valor01 + valor02)
       escreval("Deseja sair? S/N")
       leia(sairLoop)
   ate sairLoop <> "N"
*/

function acaoBotao() {
    var sairLoop, valo01, valor02
    do{
        valor01 = prompt("Digite o primeiro numero: ")
        valor02 = prompt("Digite o segundo numero: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt( valor02 ) )
        sairLoop = prompt("Deseja sair? S/N")
    }while(sairLoop == "N")
}

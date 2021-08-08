const ValorConta = document.querySelector('.ValorConta')
const Npessoas = document.querySelector('.Npessoas')
const Porcentagem = document.querySelectorAll('.Porcentagem')
const PorcentagemCustom = document.querySelector('.btn-text')
const ValorGorjeta = document.querySelector('.ValorGorjeta')
const ValorTotal = document.querySelector('.ValorTotal')
const BotaoResetar = document.querySelector('.btn-reset')
let CalcularPercent;

function Percent(e) {
    CalcularPercent = e.target.value
    CalcularPercent = parseFloat( CalcularPercent/ 100).toFixed(2)
  CalcularGorjeta()
}

function CalcularGorjeta() {
    let Total;
    let TotalGorjeta;
    let TotalConta;

    if(ValorConta.value > 0  && Npessoas.value > 0){
      Total = ValorConta.value / Npessoas.value
      TotalGorjeta = CalcularPercent * Total
      TotalConta = Total + TotalGorjeta

        if(TotalGorjeta > 0 && TotalConta > 0) {
          
          ValorGorjeta.innerHTML = '$ ' + parseFloat(TotalGorjeta).toFixed(2) 
          ValorTotal.innerHTML = '$ ' + parseFloat(TotalConta).toFixed(2)
      }       
  }
}

function Resetar() {
  ValorConta.value = ''
  Npessoas.value = ''
  PorcentagemCustom.value = ''
  ValorGorjeta.innerHTML = '$ ' + parseFloat(0.00).toFixed(2)
  ValorTotal.innerHTML = '$ ' + parseFloat(0.00).toFixed(2)
}

Porcentagem.forEach(tip => {
  tip.addEventListener('click', Percent)
})

ValorConta.addEventListener('input', CalcularGorjeta)
Npessoas.addEventListener('input', CalcularGorjeta)
PorcentagemCustom.addEventListener('input', Percent)
BotaoResetar.addEventListener('click', Resetar)
// Fa�a seu exerc�cio neste arquivo


// Alguns elementos importantes na p�gina (index.html):
// #rolar: Bot�o rolar
var rolar = document.getElementById('rolar');
//	 - voc� deve atribuir um _handler_ de evento a ele para fazer o c�lculo da rolagem dos dados
rolar.addEventListener('click', RolarDados, false);

// #resultado: Elemento cujo conte�do deve ser uma string com os resultados
var resultado = document.getElementById('resultado');
//	 - voc� deve definir seu conte�do (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados: 
var recipienteResultados = document.getElementById('recipienteResultados');
//	 - voc� deve torn�-lo vis�vel removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

function RolarDados() {
    recipienteResultados.className = '';

    var qtdeD = [document.getElementById('quantidadeD4').value, document.getElementById('quantidadeD6').value,
        document.getElementById('quantidadeD8').value, document.getElementById('quantidadeD10').value,
        document.getElementById('quantidadeD12').value, document.getElementById('quantidadeD20').value
    ];

    var result = '',
        total = 0,
        max = [4, 6, 8, 10, 12, 20];
    for (var i = 0; i < qtdeD.length; i++) {
        for (var j = 0; j < qtdeD[i]; j++) {
            var rand = Math.ceil(Math.random() * max[i]);
            if (result === '') {
                result = rand;
            }
            else {
                result = result + '+' + rand;
            }
            total = total + rand;
        }
    }
    resultado.innerHTML = result + ' = ' + total;
}
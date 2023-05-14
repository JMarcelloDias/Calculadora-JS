function modoClaro(){
    window.document.getElementById('claro').style.display = 'none'
    window.document.getElementById('escuro').style.display = 'flex'
    window.document.querySelector('body').style.background = 'white'
    window.document.querySelector('body').style.color = 'black'
    window.document.getElementById('titulo').style.color = 'black'
    window.document.getElementById('calculadora').style.color = 'black'
    window.document.getElementById('calculadora').style.borderColor = 'black'
}

function modoEscuro(){
    window.document.getElementById('escuro').style.display = 'none'
    window.document.getElementById('claro').style.display = 'flex'
    window.document.querySelector('body').style.background = 'black'
    window.document.querySelector('body').style.color = 'black'
    window.document.getElementById('titulo').style.color = 'white'
    window.document.getElementById('calculadora').style.color = 'white'
    window.document.getElementById('calculadora').style.borderColor = 'white' 
}

function calcular(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);

    var opselect = document.getElementById('selecao');
    var op = opselect.selectedIndex;

    var result;
 
    switch (op)
    {
        case 1:
            result=(n1+n2);
            alert("O resultado é: "+result);
        break;
        case 2:
            result=(n1-n2);
            alert("O resultado é: "+result);
        break;
        case 3:
            result=(n1*n2);
            alert("O resultado é: "+result);
        break;
        case 4:
            result=(n1/n2);
            alert("O resultado é: "+result);
        break;
    }
}

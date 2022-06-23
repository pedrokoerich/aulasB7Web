//Transformando elementos em objetos
var div = $('#text'); //div
var segundoItem = $('li').eq(1); //Lista 

//Navegando entre elementos (filho>pai)
$('.filha').parent(); //1
$('.filha').parent().parent(); //2

//Navegando entre elementos (pai>filho)
$('.site').find('.filha');
$('.site').find('.topo').find('.subtopo');

$('.irmao').closest('.site').find('.conteudo'); //Voltou ao pai e foi até um outro elemento filho.

//Verificar se um elemento tem uma classe:
if($('h1').hasClass('fundoVermelho')){
    alert('TEM');
}else{
    alert('NÃO TEM');
}
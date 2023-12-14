var data = new Date();

var horas = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();

var datanova = new Date("March 10, 2018");

var milissegundos = Date.parse(datanova);

var data2 = new Date(1520650800000);

var dia = datanova.getDate();
var mes = datanova.getMonth() + 1;
var semana = datanova.getDay();
var ano = datanova.getFullYear();

var dataFormatada = dia + "/" + mes + "/" + ano;

datanova.setDate(dia + 5);

var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

var hoje = dias[semana];

var horario = horas + ":" + minutos + ":" + segundos;
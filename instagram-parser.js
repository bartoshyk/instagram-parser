
try {
// Объявление переменных ------------------------------------------------------------
var x = document.getElementsByClassName("isgrP");           	// класс тега div списка аккаунтов
var a = document.getElementsByClassName("jSC57  _6xe7A");   	// класс тега ul списка аккаунтов
var n = document.getElementsByClassName("wo9IH");           	// класс тега li списка тег аккаунтов
var timeoutID ='';
var t = 1;

// Выборка кол-ва подписчиков и подписок по языку RU-EN ---------
// Классы расположены на главной странице Подписчики-Подписки

titleH1 = document.getElementsByClassName("m82CD")[0];	// класс тега h1 заголовка окна
titleDIV = titleH1.getElementsByTagName("div")[0];		  // тег div заголовка
title = titleDIV.innerHTML;

if (title=="Подписчики" || title=="Followers" ){
var i = document.getElementsByClassName("g47SY")[1].innerHTML;
}else{
var i = document.getElementsByClassName("g47SY")[2].innerHTML;
}

// --------------------------------------------------------------------------------------------

i = i.match(/[^"]+/g);
i = i.join('');
i = i.match(/[^\s]+/g);
i = i.join('');
i = i.match(/[^,]+/g);
i = i.join('');
console.log('%cПАРСЕР ПОДПИСЧИКОВ INSTAGRAM', 'color: #1d6ba3; font-size:28px;');
console.log('%c--------------------------------------------------------------------------------------------//', 'color: #a22e1c; font-size:16px;');
console.log('%c--------------------------------------------------------------------------------------------//', 'color: #a22e1c; font-size:16px;');
console.log('%cКол-во аккаунтов для сбора: '+i +' шт.', 'color: #13a555; font-size:20px;');
console.log('%cНачался сбор данных, дождитесь выполнения...', 'color: #13a555; font-size:20px;');
function start() {
  t++;
if (i == t){
off();
  console.log('%cАккаунтов собрано: '+n.length +' шт.', 'color: #13a555; font-size:20px;');
  if (i>n.length){console.log('%cСтранно, но '+(i - n.length) +' шт. не определились, ну и ладно=)', 'color: #13a555; font-size:20px;')};
  var text =  a[0].innerHTML;
  var result = text.match(/title="[^"]+"/g);
  result = result.join(' ');
  result = result.match(/"[^"]+"/g);
  result = result.join(' ');
  result = result.match(/[^"]+/g);
  result = result.join('"');
  result = result.match(/[^\s]+/g);
  result = result.join(', ');
console.log('%c//--------------------------------------------------------------------------------------------', 'color: #a22e1c; font-size:16px;');
  console.log(result);
console.log('%c//--------------------------------------------------------------------------------------------', 'color: #a22e1c; font-size:16px;');
  console.log('%cПоздравляю! Выделите собранные имена аккаунтов выше и нажмите CTRL-C, чтобы скопировать. Перейдите в любой текстовый редактор и нажмите CTRL-V, чтобы вставить данные.', 'color: #13a555; font-size:24px;');
console.log('%c//--------------------------------------------------------------------------------------------', 'color: #13a555; font-size:16px;');
  console.log('%cЗаходите подписывайтесь! Ставьте лайки! =) http://Instagram.com/leoneed.pro | www.leoneed.pro ', 'color: #1d6ba3; font-size:14px;');
}else{
x[0].scrollTop = x[0].scrollHeight;
run()
}
}

function run() {
 timeoutID = setTimeout(start, 100);
}
start();
}catch(e){
console.log('%cНажмите на странице Instagram на Подписчиков или Подписки, и запустите заново скрипт)', 'color: #a22e1c; font-size:28px;');
}
function off() {
    clearTimeout(timeoutID);
    timeoutID = null;
}
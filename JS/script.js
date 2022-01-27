
var botaoCodificar = document.querySelector("#btn-codificar");

botaoCodificar.addEventListener("click",function(event){
  event.preventDefault();

  var inputEntrada = document.querySelector("#input-texto");
  var inputSaida = document.querySelector("#copiar-text");
  var palavra = inputEntrada.value;
  var letras = palavra.split('');
  var saida = [];
  var vogais = ["a","e","i","o","u"]
  var cod = ["ai","enter","imes","ober","ufat"];

  for(i=0;i<letras.length;i++){
    if(letras[i]=="a"){
      saida.push(cod[0]);
    }
    if(letras[i]=="e"){
      saida.push(cod[1]);
    }
    if(letras[i]=="i"){
      saida.push(cod[2]);
    }
    if(letras[i]=="o"){
      saida.push(cod[3]);
    }
    if(letras[i]=="u"){
      saida.push(cod[4]);
    }
    if(letras[i]!="a" &&
      letras[i]!="e" &&
      letras[i]!="i" &&
      letras[i]!="o" &&
      letras[i]!="u") {
      saida.push(letras[i]);
    }
  }

  inputSaida.value= saida.join('');
  console.log(saida);
});

var botaoDecodificar = document.querySelector("#btn-decodificar");

botaoDecodificar.addEventListener("click",function(event){
  event.preventDefault();

  var inputEntrada = document.querySelector("#input-texto");
  var palavra = inputEntrada.value;
  var inputSaida = document.querySelector("#copiar-text");

  saida = palavra.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
  inputSaida.value = ''
  inputSaida.value = saida;
  console.log(saida);
});

function copiar(){
  var copiaTexto = document.querySelector("#copiar-text");
  copiaTexto.select();
  document.execcomand("copy");
}
botaoCopiar = document.querySelector("#btn-copy");
botaoCopiar.addEventListener("click",copiar);
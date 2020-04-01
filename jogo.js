var largura = 0
var altura = 0
var vidas = 0
var tempo = 90
var nivel = window.location.search
nivel = nivel.replace("?","")
var mosquitoTempo = 0

if (nivel === "normal") 
{
    mosquitoTempo = 1500

}else if(nivel === "dificil"){

   mosquitoTempo = 1000

}else if(nivel === "chucknorris"){

  mosquitoTempo = 750

}



function ajustaTela() {
	largura = window.innerWidth;
    altura = window.innerHeight;

console.log("Largura: "+largura+"<br>")
console.log("Altura: "+altura)
}

ajustaTela()

var cronometro = setInterval(function () {
    tempo--
    document.getElementById('cronometro').innerHTML = tempo
    if (tempo < 0) 
    {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria.html";
    }

},1000)




function posicaoRandomica() {
    
    if(document.getElementById('mosquito')){
        vidas++
        document.getElementById('mosquito').remove()
       
        console.log(vidas)
        if(vidas <= 3) 
        {
        	 document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"
        }else{
            window.location.href ='gameover.html'
        }

    }
    	
   
    

	var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)


var mosquito = document.createElement('img')
mosquito.src = "imagens/mosca.png"
mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = "absolute"
mosquito.id = 'mosquito'
mosquito.onclick = function () {
	this.remove()
}


document.body.appendChild(mosquito)


tamanhoAleatorio()

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
      case 0:
        return 'mosquito1'
      case 1:
        return 'mosquito2'
      case 2:
        return 'mosquito3'
 
	}
}

function ladoAleatorio() {
	var lado = Math.floor(Math.random() * 2)

	switch(lado){
		case 0:
           return 'ladoA'
		case 1:
		   return 'ladoB'
	}
}













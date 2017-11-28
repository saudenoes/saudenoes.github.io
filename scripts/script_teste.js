

$(document).ready( function(){

	var numPergunta = 0;
	var clicouOpcao = false;
	var valorResposta = 0;
	var respostas = [];

   	var perguntas = [ 'Está ligado à Internet mais tempo do que pretendia?',
                      'Negligencia tarefas domésticas para passar mais tempo ligado?',
                      'Prefere a excitação da Internet à intimidade com o seu parceiro?',
                      'Estabelece novas relações com outros utilizadores na Internet?',
                      'As pessoas próximas de si se queixam sobre o tempo que passa ligado?',
                      'Os seus afazeres são alterados devido ao tempo que passa ligado?',
                      'Verifica o correio electrónico antes de qualquer outra coisa que precise  fazer?',
                      'O seu desempenho ou produtividade no trabalho sofre devido à Internet?',
                      'Tem uma atitude defensiva ou de secretismo quando alguém lhe pergunta o que está a fazer na Internet?',
                      'Bloqueia os pensamentos perturbantes sobre a sua vida com pensamentos reconfortantes da Internet?',
                      'Encontra-se a desejar voltar a estar ligado à Internet novamente?',
                      'Tem receio de que a vida sem Internet seja aborrecida, vazia e sem alegria?',
                      'Refila, grita ou fica irritado (a) se alguém o (a) incomoda enquanto está na Internet?',
                      'Perde o sono devido a estar na Internet até muito tarde?',
                      'Fica preocupado com a Internet quando não está ligado ou fantasia com estar na Internet?',
                      'Diz a si mesmo “só mais uns minutos” quando está na Internet?',
                      'Tenta reduzir a quantidade de tempo que passa na Internet e não consegue?',
                      'Tenta esconder a quantidade de tempo que passou na Internet?',
                      'Escolhe passar mais tempo na Internet em detrimento de sair com outras pessoas?',
                      'Se sente deprimido (a), instável ou nervoso (a) quando não está  na Internet e isso desaparece quando volta a estar ligado?'];   	

    var linksMemes = ['https://humorpolitico.com.br/wp-content/uploads/2012/10/bom-dia-viciados-em-celular-sponholz-humor-politico.jpg',
                      'http://gabrielabez.com.br/wp-content/uploads/2015/10/celualar.jpg',
                      'https://img.ibxk.com.br/2015/12/29/29162528499576.jpg?w=1040',
                      'https://i.pinimg.com/736x/17/ce/cf/17cecf43e7504102626b91d7651f55cd--comic-book-what-artist.jpg',
                      'http://mentirinhas.com.br/wp-content/uploads/2014/10/mentirinhas_702b.jpg',
                      'http://gabrielabez.com.br/wp-content/uploads/2015/10/cel32.png'];

    $('.opcao').click( function(){
    	clicouOpcao = true;
    	valorResposta = $(this).val();
    	estadoBotoes();
    })

    $('#btn-prox').click( function(){

    	if(numPergunta == 18){
    		$(this).html('FINALIZAR')
    	}

    	if(numPergunta == 19){
    		respostaArray();
    		calculaResposta();
    	} else {
    		clicouOpcao = false;
	    	respostaArray();
	    	numPergunta++;
	    	mostraPergunta();
	    	estadoBotoes();
    	}
    	
    })

    $('#btn-ant').click( function(){
    	numPergunta--;
    	mostraPergunta();
    	estadoBotoes();
    })

    function calculaResposta(){
    	var soma = 0;
    	for(var i = 0; i <= 19; i++){
    		soma = soma + parseInt(respostas[i]);
    	}
    	$('.sua_pontuacao').html(soma);
    	var frase = '';
    	if(soma < 20){
    		frase = 'Você não utiliza quase nada da tecnologia digital. Poderia se adaptar a esse novo mundo e usufruir mais de suas possibilidades.'
    	} else {
    		if(soma <= 49){
    			frase = 'Você é um utilizador médio. Por vezes poderá até navegar na Internet um pouco demais, no entanto, tem controle sobre a sua utilização.'
    		} else {
    			if(soma <= 79){
    				frase = 'Você começa a ter problemas ocasionais ou frequentes devido ao uso da Internet. Deve considerar o impacto na sua vida por ficar ligado à Internet com frequência.'
    			} else {
    				frase = 'A utilização da Internet está causando problemas significativos na sua vida. Deve avaliar as consequências destes impactos e aprender a lidar com a internet de modo mais saudável e produtivo.'
    			}
    		}
    	}

      var meme = linksMemes[getRandomIntInclusive(0, 5)];

    	$('.frase').html(frase);
      $('.meme').attr('src', meme);
    	$('#questions').hide();
    	$('#resultado').show();
    }

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function respostaArray(){
    	respostas[numPergunta] = valorResposta;
    	//console.log(respostas);
    }

    function mostraPergunta(){
    	$('.num_pergunta').html((numPergunta+1) + '/20 - ');
    	$('.pergunta').html(perguntas[numPergunta])
    	$('.opcao').attr('checked', false)
    }

    function estadoBotoes(){
    	if(!numPergunta){
    		$('#btn-ant').attr('disabled', true);
    	} else {
    		$('#btn-ant').attr('disabled', false);
    	}

    	if(clicouOpcao){
    		$('#btn-prox').attr('disabled', false);
    	} else {
    		$('#btn-prox').attr('disabled', true);
    	}
    }

    mostraPergunta();
    estadoBotoes();

    // Add smooth scrolling to all links in navbar + footer link
  	$(".navbar a, footer a[href='#home']").on('click', function(event) {
    	// Make sure this.hash has a value before overriding default behavior
    	if (this.hash !== ""){
     	 // Prevent default anchor click behavior
     	 event.preventDefault();

     	 // Store hash
     	 var hash = this.hash;

     	 // Using jQuery's animate() method to add smooth page scroll
     	 // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
     		$('html, body').animate({
      	  		scrollTop: $(hash).offset().top
      		}, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        	window.location.hash = hash;
      		});
    	} // End if
 	});


});

$(document).ready( function(){

	var numPergunta = 0;
	var clicouOpcao = false;
	var valorResposta = 0;
	var respostas = [];

   	var perguntas = [ 'Are you connected to the Internet longer than you intended?',
                      'Negligence Housekeeping to Spend More Time On?',
                      'Do you prefer the excitement of the Internet to intimacy with your partner?',
                      'Establish new relationships with other users on the Internet?',
                      'Do the people close to you complain about the time you spend connected?',
                      'Are your affairs changed due to the time you spend connected?',
                      'Check email before anything else you need to do?',
                      'Does your performance or productivity at work suffer from the Internet?',
                      'Do you have a defensive or secretive attitude when someone asks you what you are doing on the Internet?',
                      'Blocks disturbing thoughts about your life with comforting thoughts of the Internet?',
                      'Do you want to be connected to the Internet again?',
                      'Are you afraid that life without Internet will be boring, empty and without joy?',
                      'Does it pop up, scream or get annoyed if someone bothers you while on the Internet?',
                      'Do you lose sleep due to being on the Internet until very late?',
                      'Are you worried about the Internet when you are not connected or fantasy about being on the Internet?',
                      'Tell yourself "just a few more minutes" when you are on the Internet?',
                      'Do you try to reduce the amount of time you spend on the Internet and can not?',
                      'Try to hide the amount of time you spent on the Internet?',
                      'Do you choose to spend more time on the Internet rather than going out with other people?',
                      'Do you feel depressed, unstable or nervous when you are not on the Internet and it disappears when you are connected again?'];   	

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

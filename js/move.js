
document.onkeyup = function(event){
	if(direcao!='pula'){
		direcao = 0;
		anima_anda('normal'+lado+tamanho);
	}
	}
document.onkeydown = function(event){

var tecla; //variavel pra receber a tecla que foi pressionada

	if(event==null){ tecla=window.event.keyCode;} //recebe a tecla que foi pressionada (dei ctr+c ctrl+v então não sei pq as duas linhas, deve ser
	else{ tecla=event.keyCode;} 				  // para funcionar em todos navegadores)
	
	if(window.event.ctrlKey){mov=4;}else{mov=2;}
	
	//switch para identivificar a tecla pressionada e realizar a ação
	switch(tecla){ 
		
		//esquerda
		case 37: 
			move(boneco,'esquerda');
			break;
		//direita
		case 39:
			move(boneco,'direita');
			break;
		
		//cima
		case 38: 
		//espaço
		//case 32: 
			move(boneco,'cima');				 
				break;
		
		//baixo
		case 40:
				boneco.className= "baixo"+lado+tamanho;
				//y=y+mov;
				//boneco.style.top=y+"px";
				//direcao = 'baixo';
						
				break;
				
	}
}

function move(melemento,mdirecao){
			if(mdirecao=='esquerda'){
				lado='esquerda';
				direcao = 'esquerda';
				if(nochao==1){
				anima_anda(lado+tamanho);	
	
					if(!colide(x-mov,y, largura, altura)){
						x=x-mov;
						melemento.style.left=x+"px";
					}
					if(!colide(x,y+1, largura, altura)){
						cai(boneco);
					}
				}
			}
			if(mdirecao=='direita'){
				lado='direita';
				direcao = 'direita';
				if(nochao==1){
				anima_anda(lado+tamanho);				
				
					if(!colide(x+mov,y,largura,altura)){
						x=x+mov;
						melemento.style.left=x+"px";
					}
					
					if(!colide(x,y+1,largura,altura)){
						cai(boneco);
					}
				
				}

			}
			if(mdirecao=='cima'){
				melemento.className= "cima"+lado+tamanho;
				//y=y-mov;
				//boneco.style.top=y+"px";
				if(direcao!='pula' && nochao!=0){
					pula();
				}
				direcao = 'pula';

			}
}


function pula(){
	var velocidade = 5;
	var p = 1;
	var p_topo = 70;
	cont_pula =0;
	nochao = 0;
	
	var tempo_pula = setInterval(function(){
		cont_pula++;
			y = y-/*cont_pula*/p;
			boneco.style.top=y+"px";
				if(direcao=='esquerda' && x-mov>0 && !colide(x-p,y-p,largura,altura)){
					x = x-p;
					boneco.style.left=x+"px";
				}
				if(direcao=='direita' && x+mov+largura<largura_mapa && !colide(x+p,y-p,largura,altura)){
					x = x+p;
					boneco.style.left=x+"px";
				}

			if(cont_pula>p_topo || (colide(x,y-p,largura,altura) && y>0)){
				clearInterval(tempo_pula);
				cont_pula =0;
				cai(boneco);	
			}
		},velocidade);

		
}


function anima_anda(direcao){


				if(cont_anda==0){
					setTimeout(function(){ 
						boneco.className= direcao;
						cont_anda++;
					},100);
				}else{
					setTimeout(function(){ 
						boneco.className= "normal"+lado+tamanho;
						cont_anda=0;
					},100);
					
				}


	}
	
function cai(celemento){
var velocidade = 5;
var p =1;
//var cont_cai = 0;
nochao=0;		
direca = 'cai';		
				var tempo_pula2 = setInterval(function(){
					//cont_cai++;
						y = y+/*(cont_cai)*/p;
						
						celemento.style.top=y+"px";
						
						if(direcao=='esquerda' && x-mov>0 && !colide(x-p,y,largura,altura)){
							x = x-p;
							celemento.style.left=x+"px";
						}
						if(direcao=='direita' && x+mov+largura<largura_mapa && !colide(x+p,y,largura,altura)){
							x = x+p;
							celemento.style.left=x+"px";
						}
						
						if(colide(x,y+p,largura,altura) && y>0){
							//cont_cai =0;
							direcao =0;
							anima_anda('normal'+lado+tamanho);
							nochao=1;
							clearInterval(tempo_pula2);

						}
				
				},velocidade);
}
	
function colide(px,py,largura_colide,altura_colide){
	var col=0;
	for(c=0;c<largura_colide;c++){
		for(i=0;i<altura_colide;i++){
			if(posicao[px+c][py+i]!=false){
				col++;
				if(cont_pula>0 && bloco[posicao[px+c][py+i]]['tipo']=='in'){window.open('http://br.linkedin.com/in/omarjadalla','_blank');}
				if(cont_pula>0 && bloco[posicao[px+c][py+i]]['tipo']=='tt'){window.open('http://br.twitter.com/omarjadalla','_blank');}
				if(cont_pula>0 && bloco[posicao[px+c][py+i]]['tipo']=='fb'){window.open('http://fb.com/omarmedeirosjadalla','_blank');}				
			}
		}
	}
	if(col==0){return false;}
	else{return true;}
}	


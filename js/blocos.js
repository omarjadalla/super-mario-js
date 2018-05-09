function iniciablocos(){
	bloco = new Array();
	
	posicao = new Array();
	var c,i;
	for(c=0;c<largura_mapa;c++){
		posicao[c] = new Array();
			for(i=0;i<altura_mapa;i++){
				posicao[c][i] = false;
			}
	}
		

}

function criabloco(btipo,bx,by){
	var blargura, baltura, bclasse, bnome;
	
	cblocos++;
	bnome = 'b'+cblocos;


	if(btipo=='chao'){
		blargura = 20;
		baltura = 20;
		bclasse = 'chao';
	}
	if(btipo=='blocoazul'){
		blargura = 16;
		baltura = 16;
		bclasse = 'blocoazul';
	}

	if(btipo=='bloco'){
		blargura = 16;
		baltura = 16;
		bclasse = 'bloco';
	}
	if(btipo=='fb'){
		blargura = 16;
		baltura = 16;
		bclasse = 'blocofb';
	}
	if(btipo=='tt'){
		blargura = 16;
		baltura = 16;
		bclasse = 'blocott';
	}
	if(btipo=='in'){
		blargura = 16;
		baltura = 16;
		bclasse = 'blocoin';
	}


				var divTag = document.createElement ("div");
					divTag.style.top=by+"px";
					divTag.style.left=bx+"px";
					divTag.style.width=blargura+"px";
					divTag.style.height=baltura+"px";
					divTag.className = bclasse; 
					divTag.id = bnome; 
					document.getElementById('mapa').appendChild(divTag);

	bloco[cblocos] = new Array();	
	bloco[cblocos]['tipo'] = btipo;
	bloco[cblocos]['x'] = bx;
	bloco[cblocos]['y'] = by;
	
	
	posicao[bx][by]=cblocos;
	posicao[bx][by+baltura]=cblocos;
	posicao[bx+blargura][by]=cblocos;
	posicao[bx+blargura][by+baltura]=cblocos;

		for(c=0;c<=blargura;c=c+largura){
			for(i=0;i<=baltura;i=i+altura){
				posicao[bx+c][by+i]=cblocos;
				
			}
		}
	

}
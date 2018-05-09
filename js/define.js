var x,y,boneco;

function define(){
	nochao=1;//se ele nao ta pulando ou caindo
	cblocos=0; 
	boneco = document.getElementById("boneco");
	mapa = document.getElementById("mapa");
	altura_mapa = 600;
	largura_mapa = 800;
	tamanho = 'pequeno';
//	altura = 39; largura = 26;
	altura = 21; largura = 17;
	x = 100;
	y = altura_mapa-altura; 
	//mov = 2;
	direcao = 0;
	lado='direita';
	cont_anda=0;
	
	boneco.style.height=altura+'px'; boneco.style.width=largura+'px';
	boneco.style.top = y+"px"; 	boneco.style.left = x+"px"; 
	
	mapa.style.height = altura_mapa+"px";	mapa.style.width=largura_mapa+"px";
	
	
	anima_anda('normal'+lado+tamanho);
	
	cria_mapa();
}

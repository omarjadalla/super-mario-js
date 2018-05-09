function cria_mapa(){
	iniciablocos();
	var c;
	
	for(c_chao=0;c_chao<largura_mapa-20;c_chao=c_chao+19){
		criabloco('chao',c_chao,altura_mapa);
	}
	
//	for(c=0;c<largura_mapa-60;c=c+17){
//		criabloco('bloco',c,altura_mapa-56);
//	}

	criabloco('fb',50,530);
	criabloco('tt',80,530);
	criabloco('in',110,530);


	criabloco('bloco',50,50);
	criabloco('bloco',120,70);
	criabloco('bloco',220,70);
	criabloco('bloco',190,130);
	criabloco('bloco',250,150)
	criabloco('bloco',120,170);
	criabloco('bloco',220,200);
	criabloco('bloco',150,270);	
	criabloco('bloco',80,270);	
	
}
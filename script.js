function abrirFísica(){

document.getElementById(
"Capa"
).style.display="none";

 document.getElementById(
"Sexual"
).style.display="none";
  
document.getElementById(
"Fisica"
).style.display="block";

}

function abrirSexual(){

document.getElementById(
"Capa"
).style.display="none";

document.getElementById(
"Sexual"
).style.display="block";

}




function abrirMoral(){

document.getElementById(
"Capa"
).style.display="none";

document.getElementById(
"Moral"
).style.display="block";

}

function abrirPsyco(){

document.getElementById(
"Capa"
).style.display="none";

document.getElementById(
"Psyco"
).style.display="block";

}

function voltarCapa(){

document.getElementById(
"Fisica"
).style.display="none";

document.getElementById(
"Capa"
).style.display="block";
  
}

function voltarCapa2(){

document.getElementById(
"Sexual"
).style.display="none";

document.getElementById(
"Capa"
).style.display="block";
  
}

function voltarCapa3(){

document.getElementById(
"Moral"
).style.display="none";

document.getElementById(
"Capa"
).style.display="block";
  
}

function voltarCapa4(){

document.getElementById(
"Psyco"
).style.display="none";

document.getElementById(
"Capa"
).style.display="block";
  
}

/* RESETA OPÇÃO 1 */

document.getElementById(
"conteudoEx"
).classList.remove(
"ativo"
);

document.getElementById(
"setaEx"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 2 */

document.getElementById(
"conteudoSinais"
).classList.remove(
"ativo"
);

document.getElementById(
"setaSinais"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 3 */

document.getElementById(
"conteudoDefesa"
).classList.remove(
"ativo"
);

document.getElementById(
"setaDefesa"
).classList.remove(
"girar"
);


/* VOLTA ALTURA ORIGINAL */

document.getElementById(
"Fisica"
).style.minHeight=
"842px";




/* opção 1 */

function abrirTopico(){

let conteudo=
document.getElementById(
"conteudoEx"
);

let seta=
document.getElementById(
"setaEx"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAltura();

}


/* opção 2 */

function abrirTopico2(){

let conteudo=
document.getElementById(
"conteudoSinais"
);

let seta=
document.getElementById(
"setaSinais"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAltura();

}


/* opção 3 */

function abrirTopico3(){

let conteudo=
document.getElementById(
"conteudoDefesa"
);

let seta=
document.getElementById(
"setaDefesa"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAltura();

}



/* aumenta página conforme abre */

function ajustarAltura(){

let pagina=
document.getElementById(
"Fisica"
);

let altura=842;


if(
document
.getElementById(
"conteudoEx"
)
.classList.contains(
"ativo"
)
){

altura+=148;

}


if(
document
.getElementById(
"conteudoSinais"
)
.classList.contains(
"ativo"
)
){

altura+=328;

}


if(
document
.getElementById(
"conteudoDefesa"
)
.classList.contains(
"ativo"
)
){

altura+=315;

}


pagina.style.minHeight=
altura+"px";

}

/* SEXUAL OPÇÃO 1 */

function abrirTopicoSexual(){

let conteudo=
document.getElementById(
"conteudoExSexual"
);

let seta=
document.getElementById(
"setaExSexual"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaSexual();

}



/* SEXUAL OPÇÃO 2 */

function abrirTopico2Sexual(){

let conteudo=
document.getElementById(
"conteudoSinaisSexual"
);

let seta=
document.getElementById(
"setaSinaisSexual"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaSexual();

}



/* SEXUAL OPÇÃO 3 */

function abrirTopico3Sexual(){

let conteudo=
document.getElementById(
"conteudoDefesaSexual"
);

let seta=
document.getElementById(
"setaDefesaSexual"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaSexual();

}



/* ALTURA */

function ajustarAlturaSexual(){

let pagina=
document.getElementById(
"Sexual"
);

let altura=842;


if(
document
.getElementById(
"conteudoExSexual"
)
.classList.contains(
"ativo"
)
){

altura+=218;

}


if(
document
.getElementById(
"conteudoSinaisSexual"
)
.classList.contains(
"ativo"
)
){

altura+=268;

}


if(
document
.getElementById(
"conteudoDefesaSexual"
)
.classList.contains(
"ativo"
)
){

altura+=315;

}


pagina.style.minHeight=
altura+"px";

}

/* ABRIR PÁGINA MORAL */

function abrirMoral(){

document.getElementById(
"Capa"
).style.display="none";

document.getElementById(
"Moral"
).style.display="block";

}



/* VOLTAR */

function voltarCapa3(){

document.getElementById(
"Moral"
).style.display="none";

document.getElementById(
"Capa"
).style.display="block";


/* RESETA OPÇÃO 1 */

document.getElementById(
"conteudoExMoral"
).classList.remove(
"ativo"
);

document.getElementById(
"setaExMoral"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 2 */

document.getElementById(
"conteudoSinaisMoral"
).classList.remove(
"ativo"
);

document.getElementById(
"setaSinaisMoral"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 3 */

document.getElementById(
"conteudoDefesaMoral"
).classList.remove(
"ativo"
);

document.getElementById(
"setaDefesaMoral"
).classList.remove(
"girar"
);


/* VOLTA ALTURA */

document.getElementById(
"Moral"
).style.minHeight=
"842px";

}



/* OPÇÃO 1 */

function abrirTopicoMoral(){

let conteudo=
document.getElementById(
"conteudoExMoral"
);

let seta=
document.getElementById(
"setaExMoral"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaMoral();

}



/* OPÇÃO 2 */

function abrirTopico2Moral(){

let conteudo=
document.getElementById(
"conteudoSinaisMoral"
);

let seta=
document.getElementById(
"setaSinaisMoral"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaMoral();

}



/* OPÇÃO 3 */

function abrirTopico3Moral(){

let conteudo=
document.getElementById(
"conteudoDefesaMoral"
);

let seta=
document.getElementById(
"setaDefesaMoral"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaMoral();

}



/* AJUSTE DE ALTURA */

function ajustarAlturaMoral(){

let pagina=
document.getElementById(
"Moral"
);

let altura=842;


if(
document
.getElementById(
"conteudoExMoral"
)
.classList.contains(
"ativo"
)
){

altura+=350;

}


if(
document
.getElementById(
"conteudoSinaisMoral"
)
.classList.contains(
"ativo"
)
){

altura+=210;

}


if(
document
.getElementById(
"conteudoDefesaMoral"
)
.classList.contains(
"ativo"
)
){

altura+=330;

}


pagina.style.minHeight=
altura+"px";

}

/* ABRIR PÁGINA */

function abrirPsyco(){

document.getElementById(
"Capa"
).style.display="none";

document.getElementById(
"Psyco"
).style.display="block";

}



/* VOLTAR */

function voltarCapa4(){

document.getElementById(
"Psyco"
).style.display="none";

document.getElementById(
"Capa"
).style.display="block";


/* RESETA OPÇÃO 1 */

document.getElementById(
"conteudoExPsyco"
).classList.remove(
"ativo"
);

document.getElementById(
"setaExPsyco"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 2 */

document.getElementById(
"conteudoSinaisPsyco"
).classList.remove(
"ativo"
);

document.getElementById(
"setaSinaisPsyco"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 3 */

document.getElementById(
"conteudoDefesaPsyco"
).classList.remove(
"ativo"
);

document.getElementById(
"setaDefesaPsyco"
).classList.remove(
"girar"
);


/* ALTURA ORIGINAL */

document.getElementById(
"Psyco"
).style.minHeight=
"842px";

}



/* OPÇÃO 1 */

function abrirTopicoPsyco(){

let conteudo=
document.getElementById(
"conteudoExPsyco"
);

let seta=
document.getElementById(
"setaExPsyco"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaPsyco();

}



/* OPÇÃO 2 */

function abrirTopico2Psyco(){

let conteudo=
document.getElementById(
"conteudoSinaisPsyco"
);

let seta=
document.getElementById(
"setaSinaisPsyco"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaPsyco();

}



/* OPÇÃO 3 */

function abrirTopico3Psyco(){

let conteudo=
document.getElementById(
"conteudoDefesaPsyco"
);

let seta=
document.getElementById(
"setaDefesaPsyco"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaPsyco();

}



/* AJUSTA ALTURA */

function ajustarAlturaPsyco(){

let pagina=
document.getElementById(
"Psyco"
);

let altura=842;


if(
document
.getElementById(
"conteudoExPsyco"
)
.classList.contains(
"ativo"
)
){

altura+=310;

}


if(
document
.getElementById(
"conteudoSinaisPsyco"
)
.classList.contains(
"ativo"
)
){

altura+=180;

}


if(
document
.getElementById(
"conteudoDefesaPsyco"
)
.classList.contains(
"ativo"
)
){

altura+=320;

}


pagina.style.minHeight=
altura+"px";

}

/* ABRIR PÁGINA */

function abrirPatrimonial(){

document.getElementById(
"Capa"
).style.display="none";

document.getElementById(
"Patrimonial"
).style.display="block";

}



/* VOLTAR */

function voltarCapa5(){

document.getElementById(
"Patrimonial"
).style.display="none";

document.getElementById(
"Capa"
).style.display="block";


/* RESETA OPÇÃO 1 */

document.getElementById(
"conteudoExPatrimonial"
).classList.remove(
"ativo"
);

document.getElementById(
"setaExPatrimonial"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 2 */

document.getElementById(
"conteudoSinaisPatrimonial"
).classList.remove(
"ativo"
);

document.getElementById(
"setaSinaisPatrimonial"
).classList.remove(
"girar"
);


/* RESETA OPÇÃO 3 */

document.getElementById(
"conteudoDefesaPatrimonial"
).classList.remove(
"ativo"
);

document.getElementById(
"setaDefesaPatrimonial"
).classList.remove(
"girar"
);


/* VOLTA ALTURA ORIGINAL */

document.getElementById(
"Patrimonial"
).style.minHeight=
"842px";

}



/* OPÇÃO 1 */

function abrirTopicoPatrimonial(){

let conteudo=
document.getElementById(
"conteudoExPatrimonial"
);

let seta=
document.getElementById(
"setaExPatrimonial"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaPatrimonial();

}



/* OPÇÃO 2 */

function abrirTopico2Patrimonial(){

let conteudo=
document.getElementById(
"conteudoSinaisPatrimonial"
);

let seta=
document.getElementById(
"setaSinaisPatrimonial"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaPatrimonial();

}



/* OPÇÃO 3 */

function abrirTopico3Patrimonial(){

let conteudo=
document.getElementById(
"conteudoDefesaPatrimonial"
);

let seta=
document.getElementById(
"setaDefesaPatrimonial"
);

conteudo.classList.toggle(
"ativo"
);

seta.classList.toggle(
"girar"
);

ajustarAlturaPatrimonial();

}



/* AJUSTA ALTURA */

function ajustarAlturaPatrimonial(){

let pagina=
document.getElementById(
"Patrimonial"
);

let altura=842;


if(
document
.getElementById(
"conteudoExPatrimonial"
)
.classList.contains(
"ativo"
)
){

altura+=240;

}


if(
document
.getElementById(
"conteudoSinaisPatrimonial"
)
.classList.contains(
"ativo"
)
){

altura+=220;

}


if(
document
.getElementById(
"conteudoDefesaPatrimonial"
)
.classList.contains(
"ativo"
)
){

altura+=310;

}


pagina.style.minHeight=
altura+"px";

}

function voltarCapa2(){

document.getElementById("Sexual").style.display="none";
document.getElementById("Capa").style.display="block";

/* fecha conteúdo 1 */
document
.getElementById("conteudoExSexual")
.classList.remove("ativo");

document
.getElementById("setaExSexual")
.classList.remove("girar");


/* fecha conteúdo 2 */
document
.getElementById("conteudoSinaisSexual")
.classList.remove("ativo");

document
.getElementById("setaSinaisSexual")
.classList.remove("girar");


/* fecha conteúdo 3 */
document
.getElementById("conteudoDefesaSexual")
.classList.remove("ativo");

document
.getElementById("setaDefesaSexual")
.classList.remove("girar");

}
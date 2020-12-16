import cipher from './cipher.js';

//cipher.encode(3,"ABC");
//cipher.decode(3,"DEF");

document.querySelector("#encodebtn").addEventListener('click', function() {
    //let offsetTxt=parseInt(document.getElementById('offset').value);
    let offsetTxt=parseInt(document.querySelector("#offset").value); 
    let stringTxt=document.querySelector("#string").value;
    document.querySelector("#viewOptions").style.display="none";
    document.querySelector("#viewDate").style.display="block";
    let divCurp=document.querySelector(".curp") //esto es html el cual se accede desde el DOM
    let stringEncode=cipher.encode(offsetTxt,stringTxt);
    //console.log(stringEncode);
    divCurp.innerHTML=`<h2>${stringEncode}</h2>` //aqui se añáde HTML al DOM, el texto viene de la variable llamada ALGO
})

let returnView= function(){
    location.reload();
}

document.querySelector("#btnReturn").addEventListener('click',returnView);

let functDecode=function(){
    let offsetTxt=parseInt(document.querySelector("#offset").value); 
    let stringTxt=document.querySelector("#string").value;
    document.querySelector("#viewOptions").style.display="none";
    document.querySelector("#viewDate").style.display="block";
    let divCurp=document.querySelector(".curp") 
    let stringEncode=cipher.decode(offsetTxt,stringTxt);
    divCurp.innerHTML=`<h2>${stringEncode}</h2>`
}

document.querySelector("#decodebtn").addEventListener('click',functDecode);

// let alfalfa=document.querySelector(".rayos") //esto es html el cual se accede desde el DOM
// let algo=cipher.lavida(" Asi se rie malefica") //Esto es el valor del RETUN 
// alfalfa.innerHTML=`<h1>${algo}</h1>` //aqui se añáde HTML al DOM, el texto viene de la variable llamada ALGO

// en HTML debe haber un <div class="rayos"></div>



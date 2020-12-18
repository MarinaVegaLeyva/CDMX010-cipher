import cipher from './cipher.js';
document.querySelector("#encodebtn").addEventListener('click', function() {
    let offsetTxt=parseInt(document.querySelector("#offset").value); 
    let stringTxt=document.querySelector("#string").value;
    let name=document.querySelector("#name").value;
    let lastName=document.querySelector("#lastName").value;
    let secondLastName=document.querySelector("#secondLastName").value;
    document.querySelector("#viewOptions").style.display="none";
    document.querySelector("#viewDate").style.display="block";
    document.querySelector(".divName").innerHTML =`<h2>${cipher.encode(offsetTxt,name)}</h2>`;
    document.querySelector(".divLastName").innerHTML =`<h2>${cipher.encode(offsetTxt,lastName)}</h2>`;
    document.querySelector(".divSecLastName").innerHTML =`<h2>${cipher.encode(offsetTxt,secondLastName)}</h2>`;
    let divCurp=document.querySelector(".curp") ;
    let stringEncode=cipher.encode(offsetTxt,stringTxt);
    divCurp.innerHTML=`<h2>${stringEncode}</h2>`;
});
let returnView= function(){
    location.reload();
}
document.querySelector("#btnReturn").addEventListener('click',returnView);
let functDecode=function(){
    let offsetTxt=parseInt(document.querySelector("#offset").value); 
    let stringTxt=document.querySelector("#string").value;
    let name=document.querySelector("#name").value;
    let lastName=document.querySelector("#lastName").value;
    let secondLastName=document.querySelector("#secondLastName").value;
    document.querySelector("#viewOptions").style.display="none";
    document.querySelector("#viewDate").style.display="block";
    document.querySelector(".divName").innerHTML =cipher.decode(offsetTxt,name);
    document.querySelector(".divLastName").innerHTML =cipher.decode(offsetTxt,lastName);
    document.querySelector(".divSecLastName").innerHTML =cipher.decode(offsetTxt,secondLastName);
    let divCurp=document.querySelector(".curp") ;
    let stringEncode=cipher.decode(offsetTxt,stringTxt);
    divCurp.innerHTML=`<h2>${stringEncode}</h2>`;
}
document.querySelector("#decodebtn").addEventListener('click',functDecode);
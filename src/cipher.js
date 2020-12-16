/*const cipher = {
  // ...
};*/

const cipher = {
  encode: function(offset, string) {
    // eslint-disable-next-line no-console
    let newString=""; 
    for (let i = 0; i < string.length; i++) {		
      let codeAscii=string.charCodeAt(i);
      let newAscii=(codeAscii-65+offset)%26 +65;
      newString+=String.fromCharCode(newAscii);
    }
      //console.log(newString);
      return newString;
  },
  decode: function (offset,string){

    let newString=""; 
    for (let i = 0; i < string.length; i++) {
      let codeAscii=string.charCodeAt(i);
      //let formula = (ascii - 65 + (offset - 1)) % 26 + 65;
      //let newAscii=(ascii - 65 + (offset - 1)) % 26 + 65;
      let newAscii=(codeAscii+65-offset)%26 +65;
      newString+=String.fromCharCode(newAscii);
    }
      //console.log(newString);
      return newString;
  },
  lavida:(mensaje)=>{
    let mmmmm=mensaje+'jajajja'
    return `jajaja ${mmmmm}`
  }
};


export default cipher;

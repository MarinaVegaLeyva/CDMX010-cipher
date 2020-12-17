const cipher = {
  encode: function (offset, string) {
    if (offset === null && string === null) {
      // && typeof(string) != String
      throw new TypeError("Debes ingresar un número y texto");
    } else if (offset === null || string === []) {
      throw new TypeError("Debes ingresar un parametros validos");
    } else if (offset === 0 || string === 0) {
      throw new TypeError("Valores no validos");
    } else {
      // eslint-disable-next-line no-console
      let newString = "";
      for (let i = 0; i < string.length; i++) {
        let codeAscii = string.charCodeAt(i);
        let newAscii = ((codeAscii - 65 + offset) % 26) + 65;
        newString += String.fromCharCode(newAscii);
      }
      return newString;
    }
  },
  decode: function (offset, string) {
    if (offset === null && string === null) {
      // && typeof(string) != String
      throw new TypeError("Debes ingresar un número y texto");
    } else if (offset === null || string === []) {
      throw new TypeError("Debes ingresar un parametros validos");
    } else if (offset === 0 || string === 0) {
      throw new TypeError("Valores no validos");
    } else {
      let newString = "";
      for (let i = 0; i < string.length; i++) {
        let codeAscii = string.charCodeAt(i);
        let newAscii = ((codeAscii + 65 - offset) % 26) + 65;
        newString += String.fromCharCode(newAscii);
      }
      return newString;
    }
  },
  lavida: (mensaje) => {
    //funcion ejemplo
    let mmmmm = mensaje + "jajajja";
    return `jajaja ${mmmmm}`;
  },
};

export default cipher;

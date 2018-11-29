window.cipher = {
    encode: (text, displace) => {
        
        let result = "";

        for (let i = 0; i < text.length; i++) {
            let ascii = text.charCodeAt(i);
            if (ascii >= 65 && ascii <= 90) {
                result += String.fromCharCode((ascii - 65 + displace) % 26 + 65);
            } else if (ascii >= 97 && ascii <= 122) {
                result += String.fromCharCode((ascii - 97 + displace) % 26 + 97);
            } else {
                result += text.charAt(i);
            }
        }
        return result;
    },
    decode: (text, displace) => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let ascii = text.charCodeAt(i);
            const newDisplace = (26 - (displace % 26))
            if (ascii >= 65 && ascii <= 90) {
                result += String.fromCharCode((ascii - 65 + newDisplace) % 26 + 65);

            } else if (ascii >= 97 && ascii <= 122) {
                result += String.fromCharCode((ascii - 97 + newDisplace) % 26 + 97);
            } else {
                result += text.charAt(i);
            }
        }

        return result;
    },


    createCipherWithOffset: (displace) => {
        const result = {
          encode(string) {return cipher.encode(string, displace);},
          decode(string) {return cipher.decode(string, displace);}
        }
        return result;
      }
};

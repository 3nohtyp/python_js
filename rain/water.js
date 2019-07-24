//ajaxData = dataDecode(ajaxData),
// function dataDecode(data) {
//         for (var i in data)
//             if (data[i] != "")
//                 data[i] = WoTeEncode.Go(data[i]);
//         return data
//     }

String.prototype.gblen = function() {
    var len = 0;
    the = this;
    for (var i = 0; i < the.length; i++) if (the.charCodeAt(i) > 127 || the.charCodeAt(i) == 94) len += 2;
    else len++;
    return len
};
function utf16to8(str) {
     var out, i, len, c;

     out = "";
     len = str.length;
     for(i = 0; i < len; i++) {   c = str.charCodeAt(i);   if ((c >= 0x0001) && (c <= 0x007F)) {       out += str.charAt(i);   } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
  } else {
      out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
  }
     }
     return out;
 }
 var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 255;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 3) << 4);
            out += "\x3d\x3d";
            break
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
            out += base64EncodeChars.charAt((c2 & 15) << 2);
            out += "\x3d";
            break
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
        out += base64EncodeChars.charAt((c2 & 15) << 2 | (c3 & 192) >> 6);
        out += base64EncodeChars.charAt(c3 & 63)
    }
    return out
}
var WoTeEncode= {
    version: "2.1",
    JOchange: function(data) {
        console.log(data);
    var newData = "";
    for (var i = 0; i < data.length; i += 2) {
        newData += data[i + 1];
        newData += data[i]
    }
    return newData;
    },
    print:  function(data) {
        return ;
        //$("body").append("\x3cp\x3e" + this.index++ + "--\x3e" + data + "\x3c/p\x3e")
    },
    Go: function(val) {
        return this.Convert(val)
    },
    Convert: function(data) {
        this.print(data);
        if (data + "" == "")
            return "";
        data = encodeURI(data + "");
        var len= data.gblen();
        if (len % 2 != 0)
            data += "*";
        this.print(data);
        data = this.JOchange(data);
        this.print(data);
        var result = this.version + utf16to8(base64encode(data));
        this.print(result);
        return result},
};
var x = function dataDecode(data) {
       for (var i in data)
                if (data[i] != "")
                    data[i] = WoTeEncode.Go(data[i]);
        return data
    };

// function print(data) {
//         return;
//         $("body").append("\x3cp\x3e" + this.index++ + "--\x3e" + data + "\x3c/p\x3e")
//     }
// String.prototype.gblen = function() {
//     var len = 0;
//     for (var i = 0; i < this.length; i++) if (this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) len += 2;
//     else len++;
//     return len
// },
// function JOchange(data) {
//     var newData = "";
//     for (var i = 0; i < data.length; i += 2) {
//         newData += data[i + 1];
//         newData += data[i]
//     }
//     return newData;

// function base64encode(str) {
//     var out, i, len;
//     var c1, c2, c3;
//     len = str.length;
//     i = 0;
//     out = "";
//     while (i < len) {
//         c1 = str.charCodeAt(i++) & 255;
//         if (i == len) {
//             out += base64EncodeChars.charAt(c1 >> 2);
//             out += base64EncodeChars.charAt((c1 & 3) << 4);
//             out += "\x3d\x3d";
//             break
//         }
//         c2 = str.charCodeAt(i++);
//         if (i == len) {
//             out += base64EncodeChars.charAt(c1 >> 2);
//             out += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
//             out += base64EncodeChars.charAt((c2 & 15) << 2);
//             out += "\x3d";
//             break
//         }
//         c3 = str.charCodeAt(i++);
//         out += base64EncodeChars.charAt(c1 >> 2);
//         out += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
//         out += base64EncodeChars.charAt((c2 & 15) << 2 | (c3 & 192) >> 6);
//         out += base64EncodeChars.charAt(c3 & 63)
//     }
//
// }
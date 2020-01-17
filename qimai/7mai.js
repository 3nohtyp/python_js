// 0: "all"
// 1: "cn"
// 2: "iphone"
// 3: "5000"
// 4: "2020-01-15"
// 5: 8
// 63929348982  可不变
// k:"00000008d78d46a"  不变
var i = "MjAyMC0wMS0xNjU1MDAwYWxsY25pcGhvbmU=@#/rank/indexPlus/brand_id/1@#64025515547@#1",k = "00000008d78d46a";
// i = "MjAyMC0wMS0xNjU1MDAwYWxsY25pcGhvbmU=@#/rank/indexPlus/brand_id/1@#64025515547@#1"
// "dQ51TyxzAEd9YwBIdg5iCSlwdxZpZ0hDaQIFSAdwUBJWWzQNcBMfQlFeU0teVgBRTjFcRUMfUkJRVgBoUQAbByETBgQAAgUFCVECDFN0FVA="
// r = n[q](h[vn])(n[q](h[Uw])(i, k)),

function get_t() {
     e = +new Date - (307 ? 307 : 0) - 1515125653845
    return e
}


function get_r1(page, date){
    i = date+'5000'+page+'allcniphone'
    i =Buffer.from(i).toString('base64')+'@#/rank/indexPlus/brand_id/2@#64041766679@#1'
    k = "00000008d78d46a";

    r = C(w(i,k))
    return r
    // console.log(r)
}

function get_r2(i){

    // i = date+'5000'+page+'allcniphone'
    // i =Buffer.from(i).toString('base64')+'@#/rank/indexPlus/brand_id/1@#64027613068@#1'
    k = "00000008d78d46a";
    // console.log(i)
    r = C(w(i,k));
    // console.log(r)
    return r

}

// get_r('6','2020-01-16')
// page = 7
// da = '2020-01-16';
// ii = da+'5000'+page+'allcniphone';
// ii = Buffer.from(ii).toString('base64')
// console.log(ii)
//



function w(n, a) {
    // a || (a = u()),
        // n = n[Aa](P);
        n = n['split']("")
    // for (var t = n[kh], e = a[kh], r = Xg, i = m; i < t; i++)
        for (var t = n['length'], e = a['length'], r = "charCodeAt", i = 0; i < t; i++)
            n[i] = s(n[i]["charCodeAt"](0) ^ a[(i + 10) % e]["charCodeAt"](0));
        // console.log(n)
        return n["join"]("")

}

function s(a) {
    // var t = o();
   // return n["String"]["fromCharCode"](a)    //   n 是Windows对象
    return String.fromCharCode(a)
}


function C(a) {
    // return z()(n[xh](a)[_t](/%([0-9A-F]{2})/g, function(n, a) {
    //     return s(Kg + a)
    // }))
     return n(a)

    // return n(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function (a) {      // n ?
    //         return s('0x'+a)


    // }))

}

// z()----t ?"12020-01-1535000cniphonepaid"
function n(t) {
    var n;
    // return n = t instanceof e ? t : e.from(t.toString(), "binary"),
    return n =from(t.toString(), "binary"),       // e?

       // n.toString2("base64")
    toString2(n)
}

function from(t, e, n) {
    return s2(null, t, e, n)
}



function s2(t, e, n, i) {
    if ("number" == typeof e)
        throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, i) : "string" == typeof e ? d(t, e, n) : p(t, e)
}

function d(t, e, n) {
    if ("string" == typeof n && "" !== n || (n = "utf8"),
        !isEncoding(n))
        throw new TypeError('"encoding" must be a valid string encoding');
    var i = 0 | m(e, n);
    t = o(t, i);
    var r = write(t,e, n);
    return r !== i && (t = t.slice(0, r)),
        t
}


function isEncoding(t) {
    switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
    }
}


function m(t, e) {
    if (isBuffer(t))
        return t.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
        return t.byteLength;
    "string" != typeof t && (t = "" + t);
    var n = t.length;
    if (0 === n)
        return 0;
    for (var i = !1; ; )
        switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
            case void 0:
                return q(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return Y(t).length;
            default:
                if (i)
                    return q(t).length;
                e = ("" + e).toLowerCase(),
                    i = !0
        }
}




function isBuffer(t) {
    return !(null == t || !t._isBuffer)
}

function o(t, e) {
    if (r() < e)
        throw new RangeError("Invalid typed array length");
     t = new Uint8Array(e)

         return t
}

function r() {
    return 2147483647
}


function write(obj,t, e, n, i) {
    if (void 0 === e)
        i = "utf8",
            n = obj.length,
            e = 0;
    else if (void 0 === n && "string" == typeof e)
        i = e,
            n = obj.length,
            e = 0;
    else {
        if (!isFinite(e))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0,
            isFinite(n) ? (n |= 0,
            void 0 === i && (i = "utf8")) : (i = n,
                n = void 0)
    }
    var r = obj.length - e;
    if ((void 0 === n || n > r) && (n = r),
    t.length > 0 && (n < 0 || e < 0) || e > obj.length)
        throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    for (var o = !1; ; )
        switch (i) {
            case "hex":
                return w(obj, t, e, n);
            case "utf8":
            case "utf-8":
                return S(obj, t, e, n);
            case "ascii":
                return M(obj, t, e, n);
            case "latin1":
            case "binary":
                return C2(obj, t, e, n);
            case "base64":
                return T(obj, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return k(obj, t, e, n);
            default:
                if (o)
                    throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(),
                    o = !0
        }
}


// case "binary":
// return C(this, t, e, n);
    function C2(t, e, n, i) {
        return M(t, e, n, i)
    }



    function M(t, e, n, i) {
        return X(G(e), t, n, i)
    }



    function G(t) {
        for (var e = [], n = 0; n < t.length; ++n)
            e.push(255 & t.charCodeAt(n));
        return e
    }

//
//  ->return X(G(e):
function X(t, e, n, i) {
    for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r)
        e[r + n] = t[r];
    return r
}


// function toString2() {
function toString2(n) {
    var t = 0 | n.length;    // t = 80
 //   return 0 === t ? "" : 0 === arguments.length ? D(this, 0, t) : y.apply(this, arguments)
    return 0 === t ? "" : 0 === 1 ? D(n, 0, t) : y.apply(n,["base64"])   //这里 要用数组

}

//
// apply方法能劫持另外一个对象的方法，继承另外一个对象的属性
//
// Function.apply(obj,args)方法能接收两个参数
//
//
// obj：这个对象将代替Function类里this对象
//
// args：这个是数组，它将作为参数传给Function（args-->arguments）



// y,apply

    function y(t, e, n) {
        var i = !1;
        if ((void 0 === e || e < 0) && (e = 0),
        e > this.length)
            return "";
        if ((void 0 === n || n > this.length) && (n = this.length),   // this 应该是数组 长80
        n <= 0)
            return "";
        if (n >>>= 0,
            e >>>= 0,
        n <= e)
            return "";
        for (t || (t = "utf8"); ; )
            switch (t) {
                case "hex":
                    return L(this, e, n);
                case "utf8":
                case "utf-8":
                    return D(this, e, n);
                case "ascii":
                    return A(this, e, n);
                case "latin1":
                case "binary":
                    return I(this, e, n);
                case "base64":
                    return P(this, e, n);    // p
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return E(this, e, n);
                default:
                    if (i)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                        i = !0
            }
    }



// case "base64":
// return P(this, e, n);
function P(t, e, n) {
    return 0 === e && n === 80 ? l(t) : l(t.slice(e, n))
}


function l(t) {
    u = ["A","B","C","D","E","F","G","H","I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]

    for (var e, n = t.length, i = n % 3, r = "", o = [], a = 16383, l = 0, c = n - i; l < c; l += a)
        o.push(s3(t, l, l + a > c ? c : l + a));
        return 1 === i ? (e = t[n - 1],
                r += u[e >> 2],
        r += u[e << 4 & 63],
        r += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
        r += u[e >> 10],
        r += u[e >> 4 & 63],
        r += u[e << 2 & 63],
        r += "="),
        o.push(r),
            // dQ51TyxzAEd9YwBIdg5iTylwd1JpZ0hDaQIFSAdwUBJWWzQNcBMfQlFeU0teVgBRTjFcRUMfUkJRVgBoUQAbByETBgQABAEHDlIBD110
            // dQ51TyxzAEd9YwBIdg5UCSlwdxZpZ0hDaQIFSAdwUBJWWzQNcBMfQlFeU0teVgBRTjFcRUMfUkJRVgBoUQAbByETBgQABAEHDlIBD110
        o.join("")
         // console.log(o)
}


function s3(t, e, n) {
    for (var i, r = [], o = e; o < n; o += 3)
        i = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
            r.push(a(i));
    return r.join("")
}


function a(t) {
    return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
}
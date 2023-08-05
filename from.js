//扣'b639'
var sm2;
var e_;
!function(e) {
    // function t(t) {
    // for (var n, i, o = t[0], a = t[1], s = 0, l = []; s < o.length; s++)
    // i = o[s],
    // Object.prototype.hasOwnProperty.call(r, i) && r[i] && l.push(r[i][0]),
    // r[i] = 0;
    // for (n in a)
    // Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    // for (u && u(t); l.length;)
    // l.shift()()
    // }
    var n = {}
      , i = {
        app: 0
    }
      , r = {
        app: 0
    };

    function o(t) {
        if (n[t])
            return n[t].exports;
        // console.log('--> ', t)
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, o),
        i.l = !0,
        i.exports
    }
    o.e = function(e) {
        var t = [];
        i[e] ? t.push(i[e]) : 0 !== i[e] && {
            DetailModule: 1,
            ServiceCatalog: 1,
            ServiceSearchModule: 1,
            "announcement-list": 1,
            "download-page": 1,
            home: 1,
            personLogin: 1,
            search: 1
        }[e] && t.push(i[e] = new Promise((function(t, n) {
            for (var r = "static/css/" + ({
                DetailModule: "DetailModule",
                ServiceCatalog: "ServiceCatalog",
                ServiceSearchModule: "ServiceSearchModule",
                "announcement-list": "announcement-list",
                "download-page": "download-page",
                home: "home",
                personLogin: "personLogin",
                redirect: "redirect",
                search: "search",
                pdfjsWorker: "pdfjsWorker"
            }[e] || e) + "." + {
                DetailModule: "2a51bf5b",
                ServiceCatalog: "ad522408",
                ServiceSearchModule: "324eac2c",
                "announcement-list": "0c52b923",
                "download-page": "912854ca",
                home: "52bd21ff",
                personLogin: "2f54ee3f",
                redirect: "31d6cfe0",
                search: "77d664d7",
                pdfjsWorker: "31d6cfe0"
            }[e] + ".css", a = o.p + r, s = document.getElementsByTagName("link"), l = 0; l < s.length; l++) {
                var u = (h = s[l]).getAttribute("data-href") || h.getAttribute("href");
                if ("stylesheet" === h.rel && (u === r || u === a))
                    return t()
            }
            var c = document.getElementsByTagName("style");
            for (l = 0; l < c.length; l++) {
                var h;
                if ((u = (h = c[l]).getAttribute("data-href")) === r || u === a)
                    return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet",
            d.type = "text/css",
            d.onload = t,
            d.onerror = function(t) {
                var r = t && t.target && t.target.src || a
                  , o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = r,
                delete i[e],
                d.parentNode.removeChild(d),
                n(o)
            }
            ,
            d.href = a,
            document.getElementsByTagName("head")[0].appendChild(d)
        }
        )).then((function() {
            i[e] = 0
        }
        )));
        var n = r[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var a = new Promise((function(t, i) {
                    n = r[e] = [t, i]
                }
                ));
                t.push(n[2] = a);
                var s, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                o.nc && l.setAttribute("nonce", o.nc),
                l.src = function(e) {
                    return o.p + "" + ({
                        DetailModule: "DetailModule",
                        ServiceCatalog: "ServiceCatalog",
                        ServiceSearchModule: "ServiceSearchModule",
                        "announcement-list": "announcement-list",
                        "download-page": "download-page",
                        home: "home",
                        personLogin: "personLogin",
                        redirect: "redirect",
                        search: "search",
                        pdfjsWorker: "pdfjsWorker"
                    }[e] || e) + ".1690458912312.js"
                }(e);
                var u = new Error;
                s = function(t) {
                    l.onerror = l.onload = null,
                    clearTimeout(c);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")",
                            u.name = "ChunkLoadError",
                            u.type = i,
                            u.request = o,
                            n[1](u)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var c = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = s,
                document.head.appendChild(l)
            }
        return Promise.all(t)
    }
    ,
    o.m = e,
    o.c = n,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                o.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o.oe = function(e) {
        throw e
    }
    ;
    // var a = window.webpackJsonp = window.webpackJsonp || [],
    // s = a.push.bind(a);
    // a.push = t,
    // a = a.slice();
    // for (var l = 0; l < a.length; l++)
    // t(a[l]);
    // var u = s;
    // o(o.s = 0)
    sm2 = o('4d09');
    e_ = o('b639');
}({
    "4d09": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "doEncrypt", (function() {
            return m
        }
        )),
        n.d(t, "doDecrypt", (function() {
            return v
        }
        )),
        n.d(t, "doSignature", (function() {
            return g
        }
        )),
        n.d(t, "doVerifySignature", (function() {
            return y
        }
        )),
        n.d(t, "doSm3Hash", (function() {
            return b
        }
        )),
        n.d(t, "getPublicKeyFromPrivateKey", (function() {
            return A
        }
        )),
        n.d(t, "getPoint", (function() {
            return w
        }
        ));
        // n("6b54");
        var i = n("f33e").BigInteger
          , // r = n("53ea"),
        // o = r.encodeDer,
        //         a = r.decodeDer,
        s = n("4d2d").SM3Digest
          , // l = n("c747").SM2Cipher,
        u = n("b381")
          , c = u.generateEcparam()
          , h = c.G
          , d = c.curve
          , f = c.n
          , p = 0;

        function m(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , i = new l;
            e = u.hexToArray(u.parseUtf8StringToHex(e)),
            t.length > 128 && (t = t.substr(t.length - 128));
            var r = t.substr(0, 64)
              , o = t.substr(64);
            t = i.createPoint(r, o);
            var a = i.initEncipher(t);
            i.encryptBlock(e);
            var s = u.arrayToHex(e)
              , c = new Array(32);
            return i.doFinal(c),
            c = u.arrayToHex(c),
            n === p ? a + s + c : a + c + s
        }

        function v(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , r = new l;
            t = new i(t,16);
            var o = e.substr(0, 64)
              , a = e.substr(0 + o.length, 64)
              , s = o.length + a.length
              , c = e.substr(s, 64)
              , h = e.substr(s + 64);
            n === p && (c = e.substr(e.length - 64),
            h = e.substr(s, e.length - s - 64));
            var d = u.hexToArray(h)
              , f = r.createPoint(o, a);
            r.initDecipher(t, f),
            r.decryptBlock(d);
            var m = new Array(32);
            return r.doFinal(m),
            u.arrayToHex(m) === c ? u.arrayToUtf8(d) : ""
        }

        function g(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.pointPool
              , a = n.der
              , s = n.hash
              , l = n.publicKey
              , c = "string" == typeof e ? u.parseUtf8StringToHex(e) : u.parseArrayBufferToHex(e);
            s && (c = b(c, l = l || A(t)));
            var h = new i(t,16)
              , d = new i(c,16)
              , p = null
              , m = null
              , v = null;
            do {
                do {
                    var g = void 0;
                    p = (g = r && r.length ? r.pop() : w()).k,
                    m = d.add(g.x1).mod(f)
                } while (m.equals(i.ZERO) || m.add(p).equals(f));
                v = h.add(i.ONE).modInverse(f).multiply(p.subtract(m.multiply(h))).mod(f)
            } while (v.equals(i.ZERO));
            return a ? o(m, v) : u.leftPad(m.toString(16), 64) + u.leftPad(v.toString(16), 64)
        }

        function y(e, t, n) {
            var r, o, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = s.der, c = s.hash, p = "string" == typeof e ? u.parseUtf8StringToHex(e) : u.parseArrayBufferToHex(e);
            if (c && (p = b(p, n)),
            l) {
                var m = a(t);
                r = m.r,
                o = m.s
            } else
                r = new i(t.substring(0, 64),16),
                o = new i(t.substring(64),16);
            var v = d.decodePointHex(n)
              , g = new i(p,16)
              , y = r.add(o).mod(f);
            if (y.equals(i.ZERO))
                return !1;
            var A = h.multiply(o).add(v.multiply(y))
              , w = g.add(A.getX().toBigInteger()).mod(f);
            return r.equals(w)
        }

        function b(e, t) {
            var n = new s
              , i = (new s).getZ(h, t.substr(2, 128))
              , r = u.hexToArray(u.arrayToHex(i).toString())
              , o = e
              , a = u.hexToArray(o)
              , l = new Array(n.getDigestSize());
            return n.blockUpdate(r, 0, r.length),
            n.blockUpdate(a, 0, a.length),
            n.doFinal(l, 0),
            u.arrayToHex(l).toString()
        }

        function A(e) {
            var t = h.multiply(new i(e,16));
            return "04" + u.leftPad(t.getX().toBigInteger().toString(16), 64) + u.leftPad(t.getY().toBigInteger().toString(16), 64)
        }

        function w() {
            var e = u.generateKeyPairHex()
              , t = d.decodePointHex(e.publicKey);
            return e.k = new i(e.privateKey,16),
            e.x1 = t.getX().toBigInteger(),
            e
        }
        t["default"] = {
            generateKeyPairHex: u.generateKeyPairHex,
            doEncrypt: m,
            doDecrypt: v,
            doSignature: g,
            doVerifySignature: y,
            getPoint: w
        }
    },
    b381: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "getGlobalCurve", (function() {
            return g
        }
        )),
        n.d(t, "generateEcparam", (function() {
            return y
        }
        )),
        n.d(t, "generateKeyPairHex", (function() {
            return b
        }
        )),
        n.d(t, "parseUtf8StringToHex", (function() {
            return A
        }
        )),
        n.d(t, "parseArrayBufferToHex", (function() {
            return w
        }
        )),
        n.d(t, "leftPad", (function() {
            return x
        }
        )),
        n.d(t, "arrayToHex", (function() {
            return C
        }
        )),
        n.d(t, "arrayToUtf8", (function() {
            return _
        }
        )),
        n.d(t, "hexToArray", (function() {
            return S
        }
        ));
        // n("34ef"),
        // n("6b54");
        var i = n("d225")
          , r = n("b0b4")
          , o = n("f33e").BigInteger
          , a = new o("3")
          , s = function() {
            function e(t, n) {
                Object(i.a)(this, e),
                this.x = n,
                this.q = t
            }
            return Object(r.a)(e, [{
                key: "equals",
                value: function(e) {
                    return e === this || this.q.equals(e.q) && this.x.equals(e.x)
                }
            }, {
                key: "toBigInteger",
                value: function() {
                    return this.x
                }
            }, {
                key: "negate",
                value: function() {
                    return new e(this.q,this.x.negate().mod(this.q))
                }
            }, {
                key: "add",
                value: function(t) {
                    return new e(this.q,this.x.add(t.toBigInteger()).mod(this.q))
                }
            }, {
                key: "subtract",
                value: function(t) {
                    return new e(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))
                }
            }, {
                key: "multiply",
                value: function(t) {
                    return new e(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))
                }
            }, {
                key: "divide",
                value: function(t) {
                    return new e(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
                }
            }, {
                key: "square",
                value: function() {
                    return new e(this.q,this.x.square().mod(this.q))
                }
            }]),
            e
        }()
          , l = function() {
            function e(t, n, r, a) {
                Object(i.a)(this, e),
                this.curve = t,
                this.x = n,
                this.y = r,
                this.z = null == a ? o.ONE : a,
                this.zinv = null
            }
            return Object(r.a)(e, [{
                key: "getX",
                value: function() {
                    return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }
            }, {
                key: "getY",
                value: function() {
                    return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                    this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }
            }, {
                key: "equals",
                value: function(e) {
                    return e === this || (this.isInfinity() ? e.isInfinity() : e.isInfinity() ? this.isInfinity() : !!e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(o.ZERO) && e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(o.ZERO))
                }
            }, {
                key: "isInfinity",
                value: function() {
                    return null === this.x && null === this.y || this.z.equals(o.ZERO) && !this.y.toBigInteger().equals(o.ZERO)
                }
            }, {
                key: "negate",
                value: function() {
                    return new e(this.curve,this.x,this.y.negate(),this.z)
                }
            }, {
                key: "add",
                value: function(t) {
                    if (this.isInfinity())
                        return t;
                    if (t.isInfinity())
                        return this;
                    var n = this.x.toBigInteger()
                      , i = this.y.toBigInteger()
                      , r = this.z
                      , a = t.x.toBigInteger()
                      , s = t.y.toBigInteger()
                      , l = t.z
                      , u = this.curve.q
                      , c = n.multiply(l).mod(u)
                      , h = a.multiply(r).mod(u)
                      , d = c.subtract(h)
                      , f = i.multiply(l).mod(u)
                      , p = s.multiply(r).mod(u)
                      , m = f.subtract(p);
                    if (o.ZERO.equals(d))
                        return o.ZERO.equals(m) ? this.twice() : this.curve.infinity;
                    var v = c.add(h)
                      , g = r.multiply(l).mod(u)
                      , y = d.square().mod(u)
                      , b = d.multiply(y).mod(u)
                      , A = g.multiply(m.square()).subtract(v.multiply(y)).mod(u)
                      , w = d.multiply(A).mod(u)
                      , x = m.multiply(y.multiply(c).subtract(A)).subtract(f.multiply(b)).mod(u)
                      , C = b.multiply(g).mod(u);
                    return new e(this.curve,this.curve.fromBigInteger(w),this.curve.fromBigInteger(x),C)
                }
            }, {
                key: "twice",
                value: function() {
                    if (this.isInfinity())
                        return this;
                    if (!this.y.toBigInteger().signum())
                        return this.curve.infinity;
                    var t = this.x.toBigInteger()
                      , n = this.y.toBigInteger()
                      , i = this.z
                      , r = this.curve.q
                      , o = this.curve.a.toBigInteger()
                      , s = t.square().multiply(a).add(o.multiply(i.square())).mod(r)
                      , l = n.shiftLeft(1).multiply(i).mod(r)
                      , u = n.square().mod(r)
                      , c = u.multiply(t).multiply(i).mod(r)
                      , h = l.square().mod(r)
                      , d = s.square().subtract(c.shiftLeft(3)).mod(r)
                      , f = l.multiply(d).mod(r)
                      , p = s.multiply(c.shiftLeft(2).subtract(d)).subtract(h.shiftLeft(1).multiply(u)).mod(r)
                      , m = l.multiply(h).mod(r);
                    return new e(this.curve,this.curve.fromBigInteger(f),this.curve.fromBigInteger(p),m)
                }
            }, {
                key: "multiply",
                value: function(e) {
                    if (this.isInfinity())
                        return this;
                    if (!e.signum())
                        return this.curve.infinity;
                    for (var t = e.multiply(a), n = this.negate(), i = this, r = t.bitLength() - 2; r > 0; r--) {
                        i = i.twice();
                        var o = t.testBit(r);
                        o !== e.testBit(r) && (i = i.add(o ? this : n))
                    }
                    return i
                }
            }]),
            e
        }()
          , u = function() {
            function e(t, n, r) {
                Object(i.a)(this, e),
                this.q = t,
                this.a = this.fromBigInteger(n),
                this.b = this.fromBigInteger(r),
                this.infinity = new l(this,null,null)
            }
            return Object(r.a)(e, [{
                key: "equals",
                value: function(e) {
                    return e === this || this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b)
                }
            }, {
                key: "fromBigInteger",
                value: function(e) {
                    return new s(this.q,e)
                }
            }, {
                key: "decodePointHex",
                value: function(e) {
                    switch (parseInt(e.substr(0, 2), 16)) {
                    case 0:
                        return this.infinity;
                    case 2:
                    case 3:
                        return null;
                    case 4:
                    case 6:
                    case 7:
                        var t = (e.length - 2) / 2
                          , n = e.substr(2, t)
                          , i = e.substr(t + 2, t);
                        return new l(this,this.fromBigInteger(new o(n,16)),this.fromBigInteger(new o(i,16)));
                    default:
                        return null
                    }
                }
            }]),
            e
        }()
          , c = n("f33e")
          , h = c.BigInteger
          , d = new (0,
        c.SecureRandom)
          , f = y()
          , p = f.curve
          , m = f.G
          , v = f.n;
        function g() {
            return p
        }
        function y() {
            var e = new h("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",16)
              , t = new h("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",16)
              , n = new h("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",16)
              , i = new u(e,t,n);
            return {
                curve: i,
                G: i.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"),
                n: new h("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",16)
            }
        }
        function b() {
            var e = new h(v.bitLength(),d).mod(v.subtract(h.ONE)).add(h.ONE)
              , t = x(e.toString(16), 64)
              , n = m.multiply(e);
            return {
                privateKey: t,
                publicKey: "04" + x(n.getX().toBigInteger().toString(16), 64) + x(n.getY().toBigInteger().toString(16), 64)
            }
        }
        function A(e) {
            for (var t = (e = unescape(encodeURIComponent(e))).length, n = [], i = 0; i < t; i++)
                n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
            for (var r = [], o = 0; o < t; o++) {
                var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                r.push((a >>> 4).toString(16)),
                r.push((15 & a).toString(16))
            }
            return r.join("")
        }
        function w(e) {
            return Array.prototype.map.call(new Uint8Array(e), (function(e) {
                return ("00" + e.toString(16)).slice(-2)
            }
            )).join("")
        }
        function x(e, t) {
            return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
        }
        function C(e) {
            for (var t = [], n = 0, i = 0; i < 2 * e.length; i += 2)
                t[i >>> 3] |= parseInt(e[n], 10) << 24 - i % 8 * 4,
                n++;
            for (var r = [], o = 0; o < e.length; o++) {
                var a = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                r.push((a >>> 4).toString(16)),
                r.push((15 & a).toString(16))
            }
            return r.join("")
        }
        function _(e) {
            for (var t = [], n = 0, i = 0; i < 2 * e.length; i += 2)
                t[i >>> 3] |= parseInt(e[n], 10) << 24 - i % 8 * 4,
                n++;
            try {
                for (var r = [], o = 0; o < e.length; o++) {
                    var a = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    r.push(String.fromCharCode(a))
                }
                return decodeURIComponent(escape(r.join("")))
            } catch (e) {
                throw new Error("Malformed UTF-8 data")
            }
        }
        function S(e) {
            var t = []
              , n = e.length;
            n % 2 != 0 && (e = x(e, n + 1)),
            n = e.length;
            for (var i = 0; i < n; i += 2)
                t.push(parseInt(e.substr(i, 2), 16));
            return t
        }
        t.default = {
            getGlobalCurve: g,
            generateEcparam: y,
            generateKeyPairHex: b,
            parseUtf8StringToHex: A,
            parseArrayBufferToHex: w,
            leftPad: x,
            arrayToHex: C,
            arrayToUtf8: _,
            hexToArray: S
        }
    },
    f33e: function(e, t, n) {
        (function() {
            var t;
            function n(e, t, n) {
                null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
            }
            function i() {
                return new n(null)
            }
            var r = "undefined" != typeof navigator;
            r && "Microsoft Internet Explorer" == navigator.appName ? (n.prototype.am = function(e, t, n, i, r, o) {
                for (var a = 32767 & t, s = t >> 15; --o >= 0; ) {
                    var l = 32767 & this[e]
                      , u = this[e++] >> 15
                      , c = s * l + u * a;
                    r = ((l = a * l + ((32767 & c) << 15) + n[i] + (1073741823 & r)) >>> 30) + (c >>> 15) + s * u + (r >>> 30),
                    n[i++] = 1073741823 & l
                }
                return r
            }
            ,
            t = 30) : r && "Netscape" != navigator.appName ? (n.prototype.am = function(e, t, n, i, r, o) {
                for (; --o >= 0; ) {
                    var a = t * this[e++] + n[i] + r;
                    r = Math.floor(a / 67108864),
                    n[i++] = 67108863 & a
                }
                return r
            }
            ,
            t = 26) : (n.prototype.am = function(e, t, n, i, r, o) {
                for (var a = 16383 & t, s = t >> 14; --o >= 0; ) {
                    var l = 16383 & this[e]
                      , u = this[e++] >> 14
                      , c = s * l + u * a;
                    r = ((l = a * l + ((16383 & c) << 14) + n[i] + r) >> 28) + (c >> 14) + s * u,
                    n[i++] = 268435455 & l
                }
                return r
            }
            ,
            t = 28),
            n.prototype.DB = t,
            n.prototype.DM = (1 << t) - 1,
            n.prototype.DV = 1 << t,
            n.prototype.FV = Math.pow(2, 52),
            n.prototype.F1 = 52 - t,
            n.prototype.F2 = 2 * t - 52;
            var o, a, s = "0123456789abcdefghijklmnopqrstuvwxyz", l = new Array;
            for (o = "0".charCodeAt(0),
            a = 0; a <= 9; ++a)
                l[o++] = a;
            for (o = "a".charCodeAt(0),
            a = 10; a < 36; ++a)
                l[o++] = a;
            for (o = "A".charCodeAt(0),
            a = 10; a < 36; ++a)
                l[o++] = a;
            function u(e) {
                return s.charAt(e)
            }
            function c(e, t) {
                var n = l[e.charCodeAt(t)];
                return null == n ? -1 : n
            }
            function h(e) {
                var t = i();
                return t.fromInt(e),
                t
            }
            function d(e) {
                var t, n = 1;
                return 0 != (t = e >>> 16) && (e = t,
                n += 16),
                0 != (t = e >> 8) && (e = t,
                n += 8),
                0 != (t = e >> 4) && (e = t,
                n += 4),
                0 != (t = e >> 2) && (e = t,
                n += 2),
                0 != (t = e >> 1) && (e = t,
                n += 1),
                n
            }
            function f(e) {
                this.m = e
            }
            function p(e) {
                this.m = e,
                this.mp = e.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << e.DB - 15) - 1,
                this.mt2 = 2 * e.t
            }
            function m(e, t) {
                return e & t
            }
            function v(e, t) {
                return e | t
            }
            function g(e, t) {
                return e ^ t
            }
            function y(e, t) {
                return e & ~t
            }
            function b(e) {
                if (0 == e)
                    return -1;
                var t = 0;
                return 0 == (65535 & e) && (e >>= 16,
                t += 16),
                0 == (255 & e) && (e >>= 8,
                t += 8),
                0 == (15 & e) && (e >>= 4,
                t += 4),
                0 == (3 & e) && (e >>= 2,
                t += 2),
                0 == (1 & e) && ++t,
                t
            }
            function A(e) {
                for (var t = 0; 0 != e; )
                    e &= e - 1,
                    ++t;
                return t
            }
            function w() {}
            function x(e) {
                return e
            }
            function C(e) {
                this.r2 = i(),
                this.q3 = i(),
                n.ONE.dlShiftTo(2 * e.t, this.r2),
                this.mu = this.r2.divide(e),
                this.m = e
            }
            f.prototype.convert = function(e) {
                return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
            }
            ,
            f.prototype.revert = function(e) {
                return e
            }
            ,
            f.prototype.reduce = function(e) {
                e.divRemTo(this.m, null, e)
            }
            ,
            f.prototype.mulTo = function(e, t, n) {
                e.multiplyTo(t, n),
                this.reduce(n)
            }
            ,
            f.prototype.sqrTo = function(e, t) {
                e.squareTo(t),
                this.reduce(t)
            }
            ,
            p.prototype.convert = function(e) {
                var t = i();
                return e.abs().dlShiftTo(this.m.t, t),
                t.divRemTo(this.m, null, t),
                e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t),
                t
            }
            ,
            p.prototype.revert = function(e) {
                var t = i();
                return e.copyTo(t),
                this.reduce(t),
                t
            }
            ,
            p.prototype.reduce = function(e) {
                for (; e.t <= this.mt2; )
                    e[e.t++] = 0;
                for (var t = 0; t < this.m.t; ++t) {
                    var n = 32767 & e[t]
                      , i = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                    for (e[n = t + this.m.t] += this.m.am(0, i, e, t, 0, this.m.t); e[n] >= e.DV; )
                        e[n] -= e.DV,
                        e[++n]++
                }
                e.clamp(),
                e.drShiftTo(this.m.t, e),
                e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
            }
            ,
            p.prototype.mulTo = function(e, t, n) {
                e.multiplyTo(t, n),
                this.reduce(n)
            }
            ,
            p.prototype.sqrTo = function(e, t) {
                e.squareTo(t),
                this.reduce(t)
            }
            ,
            n.prototype.copyTo = function(e) {
                for (var t = this.t - 1; t >= 0; --t)
                    e[t] = this[t];
                e.t = this.t,
                e.s = this.s
            }
            ,
            n.prototype.fromInt = function(e) {
                this.t = 1,
                this.s = e < 0 ? -1 : 0,
                e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
            }
            ,
            n.prototype.fromString = function(e, t) {
                var i;
                if (16 == t)
                    i = 4;
                else if (8 == t)
                    i = 3;
                else if (256 == t)
                    i = 8;
                else if (2 == t)
                    i = 1;
                else if (32 == t)
                    i = 5;
                else {
                    if (4 != t)
                        return void this.fromRadix(e, t);
                    i = 2
                }
                this.t = 0,
                this.s = 0;
                for (var r = e.length, o = !1, a = 0; --r >= 0; ) {
                    var s = 8 == i ? 255 & e[r] : c(e, r);
                    s < 0 ? "-" == e.charAt(r) && (o = !0) : (o = !1,
                    0 == a ? this[this.t++] = s : a + i > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - a) - 1) << a,
                    this[this.t++] = s >> this.DB - a) : this[this.t - 1] |= s << a,
                    (a += i) >= this.DB && (a -= this.DB))
                }
                8 == i && 0 != (128 & e[0]) && (this.s = -1,
                a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
                this.clamp(),
                o && n.ZERO.subTo(this, this)
            }
            ,
            n.prototype.clamp = function() {
                for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
                    --this.t
            }
            ,
            n.prototype.dlShiftTo = function(e, t) {
                var n;
                for (n = this.t - 1; n >= 0; --n)
                    t[n + e] = this[n];
                for (n = e - 1; n >= 0; --n)
                    t[n] = 0;
                t.t = this.t + e,
                t.s = this.s
            }
            ,
            n.prototype.drShiftTo = function(e, t) {
                for (var n = e; n < this.t; ++n)
                    t[n - e] = this[n];
                t.t = Math.max(this.t - e, 0),
                t.s = this.s
            }
            ,
            n.prototype.lShiftTo = function(e, t) {
                var n, i = e % this.DB, r = this.DB - i, o = (1 << r) - 1, a = Math.floor(e / this.DB), s = this.s << i & this.DM;
                for (n = this.t - 1; n >= 0; --n)
                    t[n + a + 1] = this[n] >> r | s,
                    s = (this[n] & o) << i;
                for (n = a - 1; n >= 0; --n)
                    t[n] = 0;
                t[a] = s,
                t.t = this.t + a + 1,
                t.s = this.s,
                t.clamp()
            }
            ,
            n.prototype.rShiftTo = function(e, t) {
                t.s = this.s;
                var n = Math.floor(e / this.DB);
                if (n >= this.t)
                    t.t = 0;
                else {
                    var i = e % this.DB
                      , r = this.DB - i
                      , o = (1 << i) - 1;
                    t[0] = this[n] >> i;
                    for (var a = n + 1; a < this.t; ++a)
                        t[a - n - 1] |= (this[a] & o) << r,
                        t[a - n] = this[a] >> i;
                    i > 0 && (t[this.t - n - 1] |= (this.s & o) << r),
                    t.t = this.t - n,
                    t.clamp()
                }
            }
            ,
            n.prototype.subTo = function(e, t) {
                for (var n = 0, i = 0, r = Math.min(e.t, this.t); n < r; )
                    i += this[n] - e[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                if (e.t < this.t) {
                    for (i -= e.s; n < this.t; )
                        i += this[n],
                        t[n++] = i & this.DM,
                        i >>= this.DB;
                    i += this.s
                } else {
                    for (i += this.s; n < e.t; )
                        i -= e[n],
                        t[n++] = i & this.DM,
                        i >>= this.DB;
                    i -= e.s
                }
                t.s = i < 0 ? -1 : 0,
                i < -1 ? t[n++] = this.DV + i : i > 0 && (t[n++] = i),
                t.t = n,
                t.clamp()
            }
            ,
            n.prototype.multiplyTo = function(e, t) {
                var i = this.abs()
                  , r = e.abs()
                  , o = i.t;
                for (t.t = o + r.t; --o >= 0; )
                    t[o] = 0;
                for (o = 0; o < r.t; ++o)
                    t[o + i.t] = i.am(0, r[o], t, o, 0, i.t);
                t.s = 0,
                t.clamp(),
                this.s != e.s && n.ZERO.subTo(t, t)
            }
            ,
            n.prototype.squareTo = function(e) {
                for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; )
                    e[n] = 0;
                for (n = 0; n < t.t - 1; ++n) {
                    var i = t.am(n, t[n], e, 2 * n, 0, 1);
                    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, i, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV,
                    e[n + t.t + 1] = 1)
                }
                e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
                e.s = 0,
                e.clamp()
            }
            ,
            n.prototype.divRemTo = function(e, t, r) {
                var o = e.abs();
                if (!(o.t <= 0)) {
                    var a = this.abs();
                    if (a.t < o.t)
                        return null != t && t.fromInt(0),
                        void (null != r && this.copyTo(r));
                    null == r && (r = i());
                    var s = i()
                      , l = this.s
                      , u = e.s
                      , c = this.DB - d(o[o.t - 1]);
                    c > 0 ? (o.lShiftTo(c, s),
                    a.lShiftTo(c, r)) : (o.copyTo(s),
                    a.copyTo(r));
                    var h = s.t
                      , f = s[h - 1];
                    if (0 != f) {
                        var p = f * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0)
                          , m = this.FV / p
                          , v = (1 << this.F1) / p
                          , g = 1 << this.F2
                          , y = r.t
                          , b = y - h
                          , A = null == t ? i() : t;
                        for (s.dlShiftTo(b, A),
                        r.compareTo(A) >= 0 && (r[r.t++] = 1,
                        r.subTo(A, r)),
                        n.ONE.dlShiftTo(h, A),
                        A.subTo(s, s); s.t < h; )
                            s[s.t++] = 0;
                        for (; --b >= 0; ) {
                            var w = r[--y] == f ? this.DM : Math.floor(r[y] * m + (r[y - 1] + g) * v);
                            if ((r[y] += s.am(0, w, r, b, 0, h)) < w)
                                for (s.dlShiftTo(b, A),
                                r.subTo(A, r); r[y] < --w; )
                                    r.subTo(A, r)
                        }
                        null != t && (r.drShiftTo(h, t),
                        l != u && n.ZERO.subTo(t, t)),
                        r.t = h,
                        r.clamp(),
                        c > 0 && r.rShiftTo(c, r),
                        l < 0 && n.ZERO.subTo(r, r)
                    }
                }
            }
            ,
            n.prototype.invDigit = function() {
                if (this.t < 1)
                    return 0;
                var e = this[0];
                if (0 == (1 & e))
                    return 0;
                var t = 3 & e;
                return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
            }
            ,
            n.prototype.isEven = function() {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }
            ,
            n.prototype.exp = function(e, t) {
                if (e > 4294967295 || e < 1)
                    return n.ONE;
                var r = i()
                  , o = i()
                  , a = t.convert(this)
                  , s = d(e) - 1;
                for (a.copyTo(r); --s >= 0; )
                    if (t.sqrTo(r, o),
                    (e & 1 << s) > 0)
                        t.mulTo(o, a, r);
                    else {
                        var l = r;
                        r = o,
                        o = l
                    }
                return t.revert(r)
            }
            ,
            n.prototype.toString = function(e) {
                if (this.s < 0)
                    return "-" + this.negate().toString(e);
                var t;
                if (16 == e)
                    t = 4;
                else if (8 == e)
                    t = 3;
                else if (2 == e)
                    t = 1;
                else if (32 == e)
                    t = 5;
                else {
                    if (4 != e)
                        return this.toRadix(e);
                    t = 2
                }
                var n, i = (1 << t) - 1, r = !1, o = "", a = this.t, s = this.DB - a * this.DB % t;
                if (a-- > 0)
                    for (s < this.DB && (n = this[a] >> s) > 0 && (r = !0,
                    o = u(n)); a >= 0; )
                        s < t ? (n = (this[a] & (1 << s) - 1) << t - s,
                        n |= this[--a] >> (s += this.DB - t)) : (n = this[a] >> (s -= t) & i,
                        s <= 0 && (s += this.DB,
                        --a)),
                        n > 0 && (r = !0),
                        r && (o += u(n));
                return r ? o : "0"
            }
            ,
            n.prototype.negate = function() {
                var e = i();
                return n.ZERO.subTo(this, e),
                e
            }
            ,
            n.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this
            }
            ,
            n.prototype.compareTo = function(e) {
                var t = this.s - e.s;
                if (0 != t)
                    return t;
                var n = this.t;
                if (0 != (t = n - e.t))
                    return this.s < 0 ? -t : t;
                for (; --n >= 0; )
                    if (0 != (t = this[n] - e[n]))
                        return t;
                return 0
            }
            ,
            n.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + d(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            n.prototype.mod = function(e) {
                var t = i();
                return this.abs().divRemTo(e, null, t),
                this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t),
                t
            }
            ,
            n.prototype.modPowInt = function(e, t) {
                var n;
                return n = e < 256 || t.isEven() ? new f(t) : new p(t),
                this.exp(e, n)
            }
            ,
            n.ZERO = h(0),
            n.ONE = h(1),
            w.prototype.convert = x,
            w.prototype.revert = x,
            w.prototype.mulTo = function(e, t, n) {
                e.multiplyTo(t, n)
            }
            ,
            w.prototype.sqrTo = function(e, t) {
                e.squareTo(t)
            }
            ,
            C.prototype.convert = function(e) {
                if (e.s < 0 || e.t > 2 * this.m.t)
                    return e.mod(this.m);
                if (e.compareTo(this.m) < 0)
                    return e;
                var t = i();
                return e.copyTo(t),
                this.reduce(t),
                t
            }
            ,
            C.prototype.revert = function(e) {
                return e
            }
            ,
            C.prototype.reduce = function(e) {
                for (e.drShiftTo(this.m.t - 1, this.r2),
                e.t > this.m.t + 1 && (e.t = this.m.t + 1,
                e.clamp()),
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; )
                    e.dAddOffset(1, this.m.t + 1);
                for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
                    e.subTo(this.m, e)
            }
            ,
            C.prototype.mulTo = function(e, t, n) {
                e.multiplyTo(t, n),
                this.reduce(n)
            }
            ,
            C.prototype.sqrTo = function(e, t) {
                e.squareTo(t),
                this.reduce(t)
            }
            ;
            var _, S, k, O = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], E = (1 << 26) / O[O.length - 1];
            function D() {
                var e;
                e = (new Date).getTime(),
                S[k++] ^= 255 & e,
                S[k++] ^= e >> 8 & 255,
                S[k++] ^= e >> 16 & 255,
                S[k++] ^= e >> 24 & 255,
                k >= F && (k -= F)
            }
            if (n.prototype.chunkSize = function(e) {
                return Math.floor(Math.LN2 * this.DB / Math.log(e))
            }
            ,
            n.prototype.toRadix = function(e) {
                if (null == e && (e = 10),
                0 == this.signum() || e < 2 || e > 36)
                    return "0";
                var t = this.chunkSize(e)
                  , n = Math.pow(e, t)
                  , r = h(n)
                  , o = i()
                  , a = i()
                  , s = "";
                for (this.divRemTo(r, o, a); o.signum() > 0; )
                    s = (n + a.intValue()).toString(e).substr(1) + s,
                    o.divRemTo(r, o, a);
                return a.intValue().toString(e) + s
            }
            ,
            n.prototype.fromRadix = function(e, t) {
                this.fromInt(0),
                null == t && (t = 10);
                for (var i = this.chunkSize(t), r = Math.pow(t, i), o = !1, a = 0, s = 0, l = 0; l < e.length; ++l) {
                    var u = c(e, l);
                    u < 0 ? "-" == e.charAt(l) && 0 == this.signum() && (o = !0) : (s = t * s + u,
                    ++a >= i && (this.dMultiply(r),
                    this.dAddOffset(s, 0),
                    a = 0,
                    s = 0))
                }
                a > 0 && (this.dMultiply(Math.pow(t, a)),
                this.dAddOffset(s, 0)),
                o && n.ZERO.subTo(this, this)
            }
            ,
            n.prototype.fromNumber = function(e, t, i) {
                if ("number" == typeof t)
                    if (e < 2)
                        this.fromInt(1);
                    else
                        for (this.fromNumber(e, i),
                        this.testBit(e - 1) || this.bitwiseTo(n.ONE.shiftLeft(e - 1), v, this),
                        this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t); )
                            this.dAddOffset(2, 0),
                            this.bitLength() > e && this.subTo(n.ONE.shiftLeft(e - 1), this);
                else {
                    var r = new Array
                      , o = 7 & e;
                    r.length = 1 + (e >> 3),
                    t.nextBytes(r),
                    o > 0 ? r[0] &= (1 << o) - 1 : r[0] = 0,
                    this.fromString(r, 256)
                }
            }
            ,
            n.prototype.bitwiseTo = function(e, t, n) {
                var i, r, o = Math.min(e.t, this.t);
                for (i = 0; i < o; ++i)
                    n[i] = t(this[i], e[i]);
                if (e.t < this.t) {
                    for (r = e.s & this.DM,
                    i = o; i < this.t; ++i)
                        n[i] = t(this[i], r);
                    n.t = this.t
                } else {
                    for (r = this.s & this.DM,
                    i = o; i < e.t; ++i)
                        n[i] = t(r, e[i]);
                    n.t = e.t
                }
                n.s = t(this.s, e.s),
                n.clamp()
            }
            ,
            n.prototype.changeBit = function(e, t) {
                var i = n.ONE.shiftLeft(e);
                return this.bitwiseTo(i, t, i),
                i
            }
            ,
            n.prototype.addTo = function(e, t) {
                for (var n = 0, i = 0, r = Math.min(e.t, this.t); n < r; )
                    i += this[n] + e[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                if (e.t < this.t) {
                    for (i += e.s; n < this.t; )
                        i += this[n],
                        t[n++] = i & this.DM,
                        i >>= this.DB;
                    i += this.s
                } else {
                    for (i += this.s; n < e.t; )
                        i += e[n],
                        t[n++] = i & this.DM,
                        i >>= this.DB;
                    i += e.s
                }
                t.s = i < 0 ? -1 : 0,
                i > 0 ? t[n++] = i : i < -1 && (t[n++] = this.DV + i),
                t.t = n,
                t.clamp()
            }
            ,
            n.prototype.dMultiply = function(e) {
                this[this.t] = this.am(0, e - 1, this, 0, 0, this.t),
                ++this.t,
                this.clamp()
            }
            ,
            n.prototype.dAddOffset = function(e, t) {
                if (0 != e) {
                    for (; this.t <= t; )
                        this[this.t++] = 0;
                    for (this[t] += e; this[t] >= this.DV; )
                        this[t] -= this.DV,
                        ++t >= this.t && (this[this.t++] = 0),
                        ++this[t]
                }
            }
            ,
            n.prototype.multiplyLowerTo = function(e, t, n) {
                var i, r = Math.min(this.t + e.t, t);
                for (n.s = 0,
                n.t = r; r > 0; )
                    n[--r] = 0;
                for (i = n.t - this.t; r < i; ++r)
                    n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
                for (i = Math.min(e.t, t); r < i; ++r)
                    this.am(0, e[r], n, r, 0, t - r);
                n.clamp()
            }
            ,
            n.prototype.multiplyUpperTo = function(e, t, n) {
                --t;
                var i = n.t = this.t + e.t - t;
                for (n.s = 0; --i >= 0; )
                    n[i] = 0;
                for (i = Math.max(t - this.t, 0); i < e.t; ++i)
                    n[this.t + i - t] = this.am(t - i, e[i], n, 0, 0, this.t + i - t);
                n.clamp(),
                n.drShiftTo(1, n)
            }
            ,
            n.prototype.modInt = function(e) {
                if (e <= 0)
                    return 0;
                var t = this.DV % e
                  , n = this.s < 0 ? e - 1 : 0;
                if (this.t > 0)
                    if (0 == t)
                        n = this[0] % e;
                    else
                        for (var i = this.t - 1; i >= 0; --i)
                            n = (t * n + this[i]) % e;
                return n
            }
            ,
            n.prototype.millerRabin = function(e) {
                var t = this.subtract(n.ONE)
                  , r = t.getLowestSetBit();
                if (r <= 0)
                    return !1;
                var o = t.shiftRight(r);
                (e = e + 1 >> 1) > O.length && (e = O.length);
                for (var a = i(), s = 0; s < e; ++s) {
                    a.fromInt(O[Math.floor(Math.random() * O.length)]);
                    var l = a.modPow(o, this);
                    if (0 != l.compareTo(n.ONE) && 0 != l.compareTo(t)) {
                        for (var u = 1; u++ < r && 0 != l.compareTo(t); )
                            if (0 == (l = l.modPowInt(2, this)).compareTo(n.ONE))
                                return !1;
                        if (0 != l.compareTo(t))
                            return !1
                    }
                }
                return !0
            }
            ,
            n.prototype.clone = function() {
                var e = i();
                return this.copyTo(e),
                e
            }
            ,
            n.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t)
                        return this[0] - this.DV;
                    if (0 == this.t)
                        return -1
                } else {
                    if (1 == this.t)
                        return this[0];
                    if (0 == this.t)
                        return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }
            ,
            n.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }
            ,
            n.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }
            ,
            n.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }
            ,
            n.prototype.toByteArray = function() {
                var e = this.t
                  , t = new Array;
                t[0] = this.s;
                var n, i = this.DB - e * this.DB % 8, r = 0;
                if (e-- > 0)
                    for (i < this.DB && (n = this[e] >> i) != (this.s & this.DM) >> i && (t[r++] = n | this.s << this.DB - i); e >= 0; )
                        i < 8 ? (n = (this[e] & (1 << i) - 1) << 8 - i,
                        n |= this[--e] >> (i += this.DB - 8)) : (n = this[e] >> (i -= 8) & 255,
                        i <= 0 && (i += this.DB,
                        --e)),
                        0 != (128 & n) && (n |= -256),
                        0 == r && (128 & this.s) != (128 & n) && ++r,
                        (r > 0 || n != this.s) && (t[r++] = n);
                return t
            }
            ,
            n.prototype.equals = function(e) {
                return 0 == this.compareTo(e)
            }
            ,
            n.prototype.min = function(e) {
                return this.compareTo(e) < 0 ? this : e
            }
            ,
            n.prototype.max = function(e) {
                return this.compareTo(e) > 0 ? this : e
            }
            ,
            n.prototype.and = function(e) {
                var t = i();
                return this.bitwiseTo(e, m, t),
                t
            }
            ,
            n.prototype.or = function(e) {
                var t = i();
                return this.bitwiseTo(e, v, t),
                t
            }
            ,
            n.prototype.xor = function(e) {
                var t = i();
                return this.bitwiseTo(e, g, t),
                t
            }
            ,
            n.prototype.andNot = function(e) {
                var t = i();
                return this.bitwiseTo(e, y, t),
                t
            }
            ,
            n.prototype.not = function() {
                for (var e = i(), t = 0; t < this.t; ++t)
                    e[t] = this.DM & ~this[t];
                return e.t = this.t,
                e.s = ~this.s,
                e
            }
            ,
            n.prototype.shiftLeft = function(e) {
                var t = i();
                return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t),
                t
            }
            ,
            n.prototype.shiftRight = function(e) {
                var t = i();
                return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t),
                t
            }
            ,
            n.prototype.getLowestSetBit = function() {
                for (var e = 0; e < this.t; ++e)
                    if (0 != this[e])
                        return e * this.DB + b(this[e]);
                return this.s < 0 ? this.t * this.DB : -1
            }
            ,
            n.prototype.bitCount = function() {
                for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
                    e += A(this[n] ^ t);
                return e
            }
            ,
            n.prototype.testBit = function(e) {
                var t = Math.floor(e / this.DB);
                return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
            }
            ,
            n.prototype.setBit = function(e) {
                return this.changeBit(e, v)
            }
            ,
            n.prototype.clearBit = function(e) {
                return this.changeBit(e, y)
            }
            ,
            n.prototype.flipBit = function(e) {
                return this.changeBit(e, g)
            }
            ,
            n.prototype.add = function(e) {
                var t = i();
                return this.addTo(e, t),
                t
            }
            ,
            n.prototype.subtract = function(e) {
                var t = i();
                return this.subTo(e, t),
                t
            }
            ,
            n.prototype.multiply = function(e) {
                var t = i();
                return this.multiplyTo(e, t),
                t
            }
            ,
            n.prototype.divide = function(e) {
                var t = i();
                return this.divRemTo(e, t, null),
                t
            }
            ,
            n.prototype.remainder = function(e) {
                var t = i();
                return this.divRemTo(e, null, t),
                t
            }
            ,
            n.prototype.divideAndRemainder = function(e) {
                var t = i()
                  , n = i();
                return this.divRemTo(e, t, n),
                new Array(t,n)
            }
            ,
            n.prototype.modPow = function(e, t) {
                var n, r, o = e.bitLength(), a = h(1);
                if (o <= 0)
                    return a;
                n = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6,
                r = o < 8 ? new f(t) : t.isEven() ? new C(t) : new p(t);
                var s = new Array
                  , l = 3
                  , u = n - 1
                  , c = (1 << n) - 1;
                if (s[1] = r.convert(this),
                n > 1) {
                    var m = i();
                    for (r.sqrTo(s[1], m); l <= c; )
                        s[l] = i(),
                        r.mulTo(m, s[l - 2], s[l]),
                        l += 2
                }
                var v, g, y = e.t - 1, b = !0, A = i();
                for (o = d(e[y]) - 1; y >= 0; ) {
                    for (o >= u ? v = e[y] >> o - u & c : (v = (e[y] & (1 << o + 1) - 1) << u - o,
                    y > 0 && (v |= e[y - 1] >> this.DB + o - u)),
                    l = n; 0 == (1 & v); )
                        v >>= 1,
                        --l;
                    if ((o -= l) < 0 && (o += this.DB,
                    --y),
                    b)
                        s[v].copyTo(a),
                        b = !1;
                    else {
                        for (; l > 1; )
                            r.sqrTo(a, A),
                            r.sqrTo(A, a),
                            l -= 2;
                        l > 0 ? r.sqrTo(a, A) : (g = a,
                        a = A,
                        A = g),
                        r.mulTo(A, s[v], a)
                    }
                    for (; y >= 0 && 0 == (e[y] & 1 << o); )
                        r.sqrTo(a, A),
                        g = a,
                        a = A,
                        A = g,
                        --o < 0 && (o = this.DB - 1,
                        --y)
                }
                return r.revert(a)
            }
            ,
            n.prototype.modInverse = function(e) {
                var t = e.isEven();
                if (this.isEven() && t || 0 == e.signum())
                    return n.ZERO;
                for (var i = e.clone(), r = this.clone(), o = h(1), a = h(0), s = h(0), l = h(1); 0 != i.signum(); ) {
                    for (; i.isEven(); )
                        i.rShiftTo(1, i),
                        t ? (o.isEven() && a.isEven() || (o.addTo(this, o),
                        a.subTo(e, a)),
                        o.rShiftTo(1, o)) : a.isEven() || a.subTo(e, a),
                        a.rShiftTo(1, a);
                    for (; r.isEven(); )
                        r.rShiftTo(1, r),
                        t ? (s.isEven() && l.isEven() || (s.addTo(this, s),
                        l.subTo(e, l)),
                        s.rShiftTo(1, s)) : l.isEven() || l.subTo(e, l),
                        l.rShiftTo(1, l);
                    i.compareTo(r) >= 0 ? (i.subTo(r, i),
                    t && o.subTo(s, o),
                    a.subTo(l, a)) : (r.subTo(i, r),
                    t && s.subTo(o, s),
                    l.subTo(a, l))
                }
                return 0 != r.compareTo(n.ONE) ? n.ZERO : l.compareTo(e) >= 0 ? l.subtract(e) : l.signum() < 0 ? (l.addTo(e, l),
                l.signum() < 0 ? l.add(e) : l) : l
            }
            ,
            n.prototype.pow = function(e) {
                return this.exp(e, new w)
            }
            ,
            n.prototype.gcd = function(e) {
                var t = this.s < 0 ? this.negate() : this.clone()
                  , n = e.s < 0 ? e.negate() : e.clone();
                if (t.compareTo(n) < 0) {
                    var i = t;
                    t = n,
                    n = i
                }
                var r = t.getLowestSetBit()
                  , o = n.getLowestSetBit();
                if (o < 0)
                    return t;
                for (r < o && (o = r),
                o > 0 && (t.rShiftTo(o, t),
                n.rShiftTo(o, n)); t.signum() > 0; )
                    (r = t.getLowestSetBit()) > 0 && t.rShiftTo(r, t),
                    (r = n.getLowestSetBit()) > 0 && n.rShiftTo(r, n),
                    t.compareTo(n) >= 0 ? (t.subTo(n, t),
                    t.rShiftTo(1, t)) : (n.subTo(t, n),
                    n.rShiftTo(1, n));
                return o > 0 && n.lShiftTo(o, n),
                n
            }
            ,
            n.prototype.isProbablePrime = function(e) {
                var t, n = this.abs();
                if (1 == n.t && n[0] <= O[O.length - 1]) {
                    for (t = 0; t < O.length; ++t)
                        if (n[0] == O[t])
                            return !0;
                    return !1
                }
                if (n.isEven())
                    return !1;
                for (t = 1; t < O.length; ) {
                    for (var i = O[t], r = t + 1; r < O.length && i < E; )
                        i *= O[r++];
                    for (i = n.modInt(i); t < r; )
                        if (i % O[t++] == 0)
                            return !1
                }
                return n.millerRabin(e)
            }
            ,
            n.prototype.square = function() {
                var e = i();
                return this.squareTo(e),
                e
            }
            ,
            n.prototype.Barrett = C,
            null == S) {
                var T;
                if (S = new Array,
                k = 0,
                "undefined" != typeof window && window.crypto)
                    if (window.crypto.getRandomValues) {
                        var P = new Uint8Array(32);
                        for (window.crypto.getRandomValues(P),
                        T = 0; T < 32; ++T)
                            S[k++] = P[T]
                    } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                        var I = window.crypto.random(32);
                        for (T = 0; T < I.length; ++T)
                            S[k++] = 255 & I.charCodeAt(T)
                    }
                for (; k < F; )
                    T = Math.floor(65536 * Math.random()),
                    S[k++] = T >>> 8,
                    S[k++] = 255 & T;
                k = 0,
                D()
            }
            function j() {
                if (null == _) {
                    for (D(),
                    (_ = new N).init(S),
                    k = 0; k < S.length; ++k)
                        S[k] = 0;
                    k = 0
                }
                return _.next()
            }
            function M() {}
            function N() {
                this.i = 0,
                this.j = 0,
                this.S = new Array
            }
            M.prototype.nextBytes = function(e) {
                var t;
                for (t = 0; t < e.length; ++t)
                    e[t] = j()
            }
            ,
            N.prototype.init = function(e) {
                var t, n, i;
                for (t = 0; t < 256; ++t)
                    this.S[t] = t;
                for (n = 0,
                t = 0; t < 256; ++t)
                    n = n + this.S[t] + e[t % e.length] & 255,
                    i = this.S[t],
                    this.S[t] = this.S[n],
                    this.S[n] = i;
                this.i = 0,
                this.j = 0
            }
            ,
            N.prototype.next = function() {
                var e;
                return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                e = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = e,
                this.S[e + this.S[this.i] & 255]
            }
            ;
            var F = 256;
            n.SecureRandom = M,
            n.BigInteger = n,
            e.exports = n
        }
        ).call(this)
    },
    b0b4: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var i = n("85f2")
          , r = n.n(i);
        //           , o = n("a6fa");
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0)
                r()(e, i.key, i)
                //                 r()(e, Object(o.a)(i.key), i)
            }
        }
        function s(e, t, n) {
            return t && a(e.prototype, t),
            n && a(e, n),
            r()(e, "prototype", {
                writable: !1
            }),
            e
        }
    },
    "85f2": function(e, t, n) {
        e.exports = n("454f")
    },
    "454f": function(e, t, n) {
        n("46a7");
        var i = n("584a").Object;
        e.exports = function(e, t, n) {
            return i.defineProperty(e, t, n)
        }
    },
    a6fa: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var i = n("7618");
        //           , r = n("650f")
        //           , o = n.n(r);
        function a(e) {
            var t = function(e, t) {
                if ("object" !== Object(i.a)(e) || null === e)
                    return e;
                var n = e[o.a];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Object(i.a)(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Object(i.a)(t) ? t : String(t)
        }
    },
    "584a": function(e, t) {
        var n = e.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n)
    },
    "46a7": function(e, t, n) {
        var i = n("63b6");
        i(i.S + i.F * !n("8e60"), "Object", {
            defineProperty: n("d9f6").f
        })
    },
    "63b6": function(e, t, n) {
        var i = n("e53d")
          , r = n("584a")//           , o = n("d864")
        //           , a = n("35e8")
          , s = n("07e3")
          , l = function(e, t, n) {
            var u, c, h, d = e & l.F, f = e & l.G, p = e & l.S, m = e & l.P, v = e & l.B, g = e & l.W, y = f ? r : r[t] || (r[t] = {}), b = y.prototype, A = f ? i : p ? i[t] : (i[t] || {}).prototype;
            for (u in f && (n = t),
            n)
                (c = !d && A && void 0 !== A[u]) && s(y, u) || (h = c ? A[u] : n[u],
                y[u] = f && "function" != typeof A[u] ? n[u] : v && c ? o(h, i) : g && A[u] == h ? function(e) {
                    var t = function(t, n, i) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t,n)
                            }
                            return new e(t,n,i)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype,
                    t
                }(h) : m && "function" == typeof h ? o(Function.call, h) : h,
                m && ((y.virtual || (y.virtual = {}))[u] = h,
                e & l.R && b && !b[u] && a(b, u, h)))
        };
        l.F = 1,
        l.G = 2,
        l.S = 4,
        l.P = 8,
        l.B = 16,
        l.W = 32,
        l.U = 64,
        l.R = 128,
        e.exports = l
    },
    "8e60": function(e, t, n) {
        e.exports = !n("294c")((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    },
    "294c": function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    d9f6: function(e, t, n) {
        var i = n("e4ae")
          , r = n("794b")
          , o = n("1bc3")
          , a = Object.defineProperty;
        t.f = n("8e60") ? Object.defineProperty : function(e, t, n) {
            if (i(e),
            t = o(t, !0),
            i(n),
            r)
                try {
                    return a(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
            e
        }
    },
    e4ae: function(e, t, n) {
        var i = n("f772");
        e.exports = function(e) {
            if (!i(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    },
    f772: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    "794b": function(e, t, n) {
        e.exports = !n("8e60") && !n("294c")((function() {
            return 7 != Object.defineProperty(n("1ec9")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    },
    "1bc3": function(e, t, n) {
        var i = n("f772");
        e.exports = function(e, t) {
            if (!i(e))
                return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e)))
                return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    e53d: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    "07e3": function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    d225: function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(t, "a", (function() {
            return i
        }
        ))
    },
    "4d2d": function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "SM3Digest", (function() {
            return u
        }
        ));
        //         n("ac6a"),
        //         n("456d");
        var i = n("d225")
          , r = n("b0b4")// o = (n("6b54"), n("c5f6"), n("f33e").BigInteger)
          , o = (n("f33e").BigInteger)
          , a = n("b381")
          , s = function(e, t, n, i, r) {
            for (var o = 0; o < r; o++)
                n[i + o] = e[t + o]
        }
          , l = {
            minValue: -2147483648,
            maxValue: 2147483647,
            parse: function(e) {
                if (e < this.minValue) {
                    for (var t = Number(-e).toString(2), n = t.substr(t.length - 31, 31), i = "", r = 0; r < n.length; r++)
                        i += "0" === n.substr(r, 1) ? "1" : "0";
                    return parseInt(i, 2) + 1
                }
                if (e > this.maxValue) {
                    for (var o = Number(e).toString(2), a = o.substr(o.length - 31, 31), s = "", l = 0; l < a.length; l++)
                        s += "0" === a.substr(l, 1) ? "1" : "0";
                    return -(parseInt(s, 2) + 1)
                }
                return e
            },
            parseByte: function(e) {
                if (e < 0) {
                    for (var t = Number(-e).toString(2), n = t.substr(t.length - 8, 8), i = "", r = 0; r < n.length; r++)
                        i += "0" === n.substr(r, 1) ? "1" : "0";
                    return (parseInt(i, 2) + 1) % 256
                }
                if (e > 255) {
                    var o = Number(e).toString(2);
                    return parseInt(o.substr(o.length - 8, 8), 2)
                }
                return e
            }
        }
          , u = function() {
            function e() {
                Object(i.a)(this, e),
                this.xBuf = [],
                this.xBufOff = 0,
                this.byteCount = 0,
                this.DIGEST_LENGTH = 32,
                this.v0 = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214],
                this.v0 = [1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082],
                this.v = new Array(8),
                this.v_ = new Array(8),
                this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                this.X = new Array(68),
                this.xOff = 0,
                this.T_00_15 = 2043430169,
                this.T_16_63 = 2055708042,
                arguments.length > 0 ? this.initDigest(arguments.length <= 0 ? void 0 : arguments[0]) : this.init()
            }
            return Object(r.a)(e, [{
                key: "init",
                value: function() {
                    this.xBuf = new Array(4),
                    this.reset()
                }
            }, {
                key: "initDigest",
                value: function(e) {
                    this.xBuf = [].concat(e.xBuf),
                    this.xBufOff = e.xBufOff,
                    this.byteCount = e.byteCount,
                    s(e.X, 0, this.X, 0, e.X.length),
                    this.xOff = e.xOff,
                    s(e.v, 0, this.v, 0, e.v.length)
                }
            }, {
                key: "getDigestSize",
                value: function() {
                    return this.DIGEST_LENGTH
                }
            }, {
                key: "reset",
                value: function() {
                    this.byteCount = 0,
                    this.xBufOff = 0;
                    for (var e = Object.keys(this.xBuf), t = 0, n = e.length; t < n; t++)
                        this.xBuf[e[t]] = null;
                    s(this.v0, 0, this.v, 0, this.v0.length),
                    this.xOff = 0,
                    s(this.X0, 0, this.X, 0, this.X0.length)
                }
            }, {
                key: "processBlock",
                value: function() {
                    var e, t = this.X, n = new Array(64);
                    for (e = 16; e < 68; e++)
                        t[e] = this.p1(t[e - 16] ^ t[e - 9] ^ this.rotate(t[e - 3], 15)) ^ this.rotate(t[e - 13], 7) ^ t[e - 6];
                    for (e = 0; e < 64; e++)
                        n[e] = t[e] ^ t[e + 4];
                    var i, r, o, a, u, c = this.v, h = this.v_;
                    for (s(c, 0, h, 0, this.v0.length),
                    e = 0; e < 16; e++)
                        u = this.rotate(h[0], 12),
                        i = l.parse(l.parse(u + h[4]) + this.rotate(this.T_00_15, e)),
                        r = (i = this.rotate(i, 7)) ^ u,
                        o = l.parse(l.parse(this.ff_00_15(h[0], h[1], h[2]) + h[3]) + r) + n[e],
                        a = l.parse(l.parse(this.gg_00_15(h[4], h[5], h[6]) + h[7]) + i) + t[e],
                        h[3] = h[2],
                        h[2] = this.rotate(h[1], 9),
                        h[1] = h[0],
                        h[0] = o,
                        h[7] = h[6],
                        h[6] = this.rotate(h[5], 19),
                        h[5] = h[4],
                        h[4] = this.p0(a);
                    for (e = 16; e < 64; e++)
                        u = this.rotate(h[0], 12),
                        i = l.parse(l.parse(u + h[4]) + this.rotate(this.T_16_63, e)),
                        r = (i = this.rotate(i, 7)) ^ u,
                        o = l.parse(l.parse(this.ff_16_63(h[0], h[1], h[2]) + h[3]) + r) + n[e],
                        a = l.parse(l.parse(this.gg_16_63(h[4], h[5], h[6]) + h[7]) + i) + t[e],
                        h[3] = h[2],
                        h[2] = this.rotate(h[1], 9),
                        h[1] = h[0],
                        h[0] = o,
                        h[7] = h[6],
                        h[6] = this.rotate(h[5], 19),
                        h[5] = h[4],
                        h[4] = this.p0(a);
                    for (e = 0; e < 8; e++)
                        c[e] ^= l.parse(h[e]);
                    this.xOff = 0,
                    s(this.X0, 0, this.X, 0, this.X0.length)
                }
            }, {
                key: "processWord",
                value: function(e, t) {
                    var n = e[t] << 24;
                    n |= (255 & e[++t]) << 16,
                    n |= (255 & e[++t]) << 8,
                    n |= 255 & e[++t],
                    this.X[this.xOff] = n,
                    16 == ++this.xOff && this.processBlock()
                }
            }, {
                key: "processLength",
                value: function(e) {
                    this.xOff > 14 && this.processBlock(),
                    this.X[14] = this.urShiftLong(e, 32),
                    this.X[15] = 4294967295 & e
                }
            }, {
                key: "intToBigEndian",
                value: function(e, t, n) {
                    t[n] = 255 & l.parseByte(this.urShift(e, 24)),
                    t[++n] = 255 & l.parseByte(this.urShift(e, 16)),
                    t[++n] = 255 & l.parseByte(this.urShift(e, 8)),
                    t[++n] = 255 & l.parseByte(e)
                }
            }, {
                key: "doFinal",
                value: function(e, t) {
                    this.finish();
                    for (var n = 0; n < 8; n++)
                        this.intToBigEndian(this.v[n], e, t + 4 * n);
                    return this.reset(),
                    this.DIGEST_LENGTH
                }
            }, {
                key: "update",
                value: function(e) {
                    this.xBuf[this.xBufOff++] = e,
                    this.xBufOff === this.xBuf.length && (this.processWord(this.xBuf, 0),
                    this.xBufOff = 0),
                    this.byteCount++
                }
            }, {
                key: "blockUpdate",
                value: function(e, t, n) {
                    for (; 0 !== this.xBufOff && n > 0; )
                        this.update(e[t]),
                        t++,
                        n--;
                    for (; n > this.xBuf.length; )
                        this.processWord(e, t),
                        t += this.xBuf.length,
                        n -= this.xBuf.length,
                        this.byteCount += this.xBuf.length;
                    for (; n > 0; )
                        this.update(e[t]),
                        t++,
                        n--
                }
            }, {
                key: "finish",
                value: function() {
                    var e = this.byteCount << 3;
                    for (this.update(128); 0 !== this.xBufOff; )
                        this.update(0);
                    this.processLength(e),
                    this.processBlock()
                }
            }, {
                key: "rotate",
                value: function(e, t) {
                    return e << t | this.urShift(e, 32 - t)
                }
            }, {
                key: "p0",
                value: function(e) {
                    return e ^ this.rotate(e, 9) ^ this.rotate(e, 17)
                }
            }, {
                key: "p1",
                value: function(e) {
                    return e ^ this.rotate(e, 15) ^ this.rotate(e, 23)
                }
            }, {
                key: "ff_00_15",
                value: function(e, t, n) {
                    return e ^ t ^ n
                }
            }, {
                key: "ff_16_63",
                value: function(e, t, n) {
                    return e & t | e & n | t & n
                }
            }, {
                key: "gg_00_15",
                value: function(e, t, n) {
                    return e ^ t ^ n
                }
            }, {
                key: "gg_16_63",
                value: function(e, t, n) {
                    return e & t | ~e & n
                }
            }, {
                key: "urShift",
                value: function(e, t) {
                    return (e > l.maxValue || e < l.minValue) && (e = l.parse(e)),
                    e >>> t
                }
            }, {
                key: "urShiftLong",
                value: function(e, t) {
                    var n, i = new o;
                    if (i.fromInt(e),
                    i.signum() >= 0)
                        n = i.shiftRight(t).intValue();
                    else {
                        var r = new o;
                        r.fromInt(2);
                        var a = ~t
                          , s = "";
                        if (a < 0) {
                            for (var l = 64 + a, u = 0; u < l; u++)
                                s += "0";
                            var c = new o;
                            c.fromInt(e >> t);
                            var h = new o("10" + s,2);
                            s = h.toRadix(10),
                            n = h.add(c).toRadix(10)
                        } else
                            n = (e >> t) + (s = r.shiftLeft(~t).intValue())
                    }
                    return n
                }
            }, {
                key: "getZ",
                value: function(e, t) {
                    var n = a.parseUtf8StringToHex("1234567812345678")
                      , i = 4 * n.length;
                    this.update(i >> 8 & 255),
                    this.update(255 & i);
                    var r = a.hexToArray(n);
                    this.blockUpdate(r, 0, r.length);
                    var o = a.hexToArray(e.curve.a.toBigInteger().toRadix(16))
                      , s = a.hexToArray(e.curve.b.toBigInteger().toRadix(16))
                      , l = a.hexToArray(e.getX().toBigInteger().toRadix(16))
                      , u = a.hexToArray(e.getY().toBigInteger().toRadix(16))
                      , c = a.hexToArray(t.substr(0, 64))
                      , h = a.hexToArray(t.substr(64, 64));
                    this.blockUpdate(o, 0, o.length),
                    this.blockUpdate(s, 0, s.length),
                    this.blockUpdate(l, 0, l.length),
                    this.blockUpdate(u, 0, u.length),
                    this.blockUpdate(c, 0, c.length),
                    this.blockUpdate(h, 0, h.length);
                    var d = new Array(this.getDigestSize());
                    return this.doFinal(d, 0),
                    d
                }
            }]),
            e
        }()
    },
    b639: function(e, t, n) {
        "use strict";
        (function(e) {
                        var i = n("1fb5")
//                           , r = n("9152")
//                           , o = n("e3db")
            ;
            function a() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function s(e, t) {
                if (a() < t)
                    throw new RangeError("Invalid typed array length");
                return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)),
                e.length = t),
                e
            }
            function l(e, t, n) {
                if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
                    return new l(e,t,n);
                if ("number" == typeof e) {
                    if ("string" == typeof t)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, e)
                }
                return u(this, e, t, n)
            }
            function u(e, t, n, i) {
                if ("number" == typeof t)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
                    if (t.byteLength,
                    n < 0 || t.byteLength < n)
                        throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (i || 0))
                        throw new RangeError("'length' is out of bounds");
                    return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t,n) : new Uint8Array(t,n,i),
                    l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = d(e, t),
                    e
                }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"),
                    !l.isEncoding(n))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | p(t, n)
                      , r = (e = s(e, i)).write(t, n);
                    return r !== i && (e = e.slice(0, r)),
                    e
                }(e, t, n) : function(e, t) {
                    if (l.isBuffer(t)) {
                        var n = 0 | f(t.length);
                        return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n),
                        e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                            return "number" != typeof t.length || (i = t.length) != i ? s(e, 0) : d(e, t);
                        if ("Buffer" === t.type && o(t.data))
                            return d(e, t.data)
                    }
                    var i;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }
            function c(e) {
                if ("number" != typeof e)
                    throw new TypeError('"size" argument must be a number');
                if (e < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function h(e, t) {
                if (c(t),
                e = s(e, t < 0 ? 0 : 0 | f(t)),
                !l.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n)
                        e[n] = 0;
                return e
            }
            function d(e, t) {
                var n = t.length < 0 ? 0 : 0 | f(t.length);
                e = s(e, n);
                for (var i = 0; i < n; i += 1)
                    e[i] = 255 & t[i];
                return e
            }
            function f(e) {
                if (e >= a())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }
            function p(e, t) {
                if (l.isBuffer(e))
                    return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                    return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n)
                    return 0;
                for (var i = !1; ; )
                    switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return V(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return H(e).length;
                    default:
                        if (i)
                            return V(e).length;
                        t = ("" + t).toLowerCase(),
                        i = !0
                    }
            }
            function m(e, t, n) {
                var i = e[t];
                e[t] = e[n],
                e[n] = i
            }
            function v(e, t, n, i, r) {
                if (0 === e.length)
                    return -1;
                if ("string" == typeof n ? (i = n,
                n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                n = +n,
                isNaN(n) && (n = r ? 0 : e.length - 1),
                n < 0 && (n = e.length + n),
                n >= e.length) {
                    if (r)
                        return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!r)
                        return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = l.from(t, i)),
                l.isBuffer(t))
                    return 0 === t.length ? -1 : g(e, t, n, i, r);
                if ("number" == typeof t)
                    return t &= 255,
                    l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, i, r);
                throw new TypeError("val must be string, number or Buffer")
            }
            function g(e, t, n, i, r) {
                var o, a = 1, s = e.length, l = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2)
                        return -1;
                    a = 2,
                    s /= 2,
                    l /= 2,
                    n /= 2
                }
                function u(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (r) {
                    var c = -1;
                    for (o = n; o < s; o++)
                        if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                            if (-1 === c && (c = o),
                            o - c + 1 === l)
                                return c * a
                        } else
                            -1 !== c && (o -= o - c),
                            c = -1
                } else
                    for (n + l > s && (n = s - l),
                    o = n; o >= 0; o--) {
                        for (var h = !0, d = 0; d < l; d++)
                            if (u(e, o + d) !== u(t, d)) {
                                h = !1;
                                break
                            }
                        if (h)
                            return o
                    }
                return -1
            }
            function y(e, t, n, i) {
                n = Number(n) || 0;
                var r = e.length - n;
                i ? (i = Number(i)) > r && (i = r) : i = r;
                var o = t.length;
                if (o % 2 != 0)
                    throw new TypeError("Invalid hex string");
                i > o / 2 && (i = o / 2);
                for (var a = 0; a < i; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s))
                        return a;
                    e[n + a] = s
                }
                return a
            }
            function b(e, t, n, i) {
                return $(V(t, e.length - n), e, n, i)
            }
            function A(e, t, n, i) {
                return $(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n)
                        t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, i)
            }
            function w(e, t, n, i) {
                return A(e, t, n, i)
            }
            function x(e, t, n, i) {
                return $(H(t), e, n, i)
            }
            function C(e, t, n, i) {
                return $(function(e, t) {
                    for (var n, i, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                        n = e.charCodeAt(a),
                        i = n >> 8,
                        r = n % 256,
                        o.push(r),
                        o.push(i);
                    return o
                }(t, e.length - n), e, n, i)
            }
            function _(e, t, n) {
                return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
            }
            function S(e, t, n) {
                n = Math.min(e.length, n);
                for (var i = [], r = t; r < n; ) {
                    var o, a, s, l, u = e[r], c = null, h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (r + h <= n)
                        switch (h) {
                        case 1:
                            u < 128 && (c = u);
                            break;
                        case 2:
                            128 == (192 & (o = e[r + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (c = l);
                            break;
                        case 3:
                            o = e[r + 1],
                            a = e[r + 2],
                            128 == (192 & o) && 128 == (192 & a) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (c = l);
                            break;
                        case 4:
                            o = e[r + 1],
                            a = e[r + 2],
                            s = e[r + 3],
                            128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (c = l)
                        }
                    null === c ? (c = 65533,
                    h = 1) : c > 65535 && (c -= 65536,
                    i.push(c >>> 10 & 1023 | 55296),
                    c = 56320 | 1023 & c),
                    i.push(c),
                    r += h
                }
                return function(e) {
                    var t = e.length;
                    if (t <= k)
                        return String.fromCharCode.apply(String, e);
                    for (var n = "", i = 0; i < t; )
                        n += String.fromCharCode.apply(String, e.slice(i, i += k));
                    return n
                }(i)
            }
            t.Buffer = l,
            t.SlowBuffer = function(e) {
                return +e != e && (e = 0),
                l.alloc(+e)
            }
            ,
            t.INSPECT_MAX_BYTES = 50,
            l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(),
            t.kMaxLength = a(),
            l.poolSize = 8192,
            l._augment = function(e) {
                return e.__proto__ = l.prototype,
                e
            }
            ,
            l.from = function(e, t, n) {
                return u(null, e, t, n)
            }
            ,
            l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype,
            l.__proto__ = Uint8Array,
            "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0
            })),
            l.alloc = function(e, t, n) {
                return function(e, t, n, i) {
                    return c(t),
                    t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof i ? s(e, t).fill(n, i) : s(e, t).fill(n) : s(e, t)
                }(null, e, t, n)
            }
            ,
            l.allocUnsafe = function(e) {
                return h(null, e)
            }
            ,
            l.allocUnsafeSlow = function(e) {
                return h(null, e)
            }
            ,
            l.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }
            ,
            l.compare = function(e, t) {
                if (!l.isBuffer(e) || !l.isBuffer(t))
                    throw new TypeError("Arguments must be Buffers");
                if (e === t)
                    return 0;
                for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r)
                    if (e[r] !== t[r]) {
                        n = e[r],
                        i = t[r];
                        break
                    }
                return n < i ? -1 : i < n ? 1 : 0
            }
            ,
            l.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
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
            ,
            l.concat = function(e, t) {
                if (!o(e))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length)
                    return l.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0,
                    n = 0; n < e.length; ++n)
                        t += e[n].length;
                var i = l.allocUnsafe(t)
                  , r = 0;
                for (n = 0; n < e.length; ++n) {
                    var a = e[n];
                    if (!l.isBuffer(a))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(i, r),
                    r += a.length
                }
                return i
            }
            ,
            l.byteLength = p,
            l.prototype._isBuffer = !0,
            l.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2)
                    m(this, t, t + 1);
                return this
            }
            ,
            l.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4)
                    m(this, t, t + 3),
                    m(this, t + 1, t + 2);
                return this
            }
            ,
            l.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8)
                    m(this, t, t + 7),
                    m(this, t + 1, t + 6),
                    m(this, t + 2, t + 5),
                    m(this, t + 3, t + 4);
                return this
            }
            ,
            l.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : function(e, t, n) {
                    var i = !1;
                    if ((void 0 === t || t < 0) && (t = 0),
                    t > this.length)
                        return "";
                    if ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                        return "";
                    if ((n >>>= 0) <= (t >>>= 0))
                        return "";
                    for (e || (e = "utf8"); ; )
                        switch (e) {
                        case "hex":
                            return D(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return S(this, t, n);
                        case "ascii":
                            return O(this, t, n);
                        case "latin1":
                        case "binary":
                            return E(this, t, n);
                        case "base64":
                            return _(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return T(this, t, n);
                        default:
                            if (i)
                                throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(),
                            i = !0
                        }
                }
                .apply(this, arguments)
            }
            ,
            l.prototype.equals = function(e) {
                if (!l.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === l.compare(this, e)
            }
            ,
            l.prototype.inspect = function() {
                var e = ""
                  , n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                this.length > n && (e += " ... ")),
                "<Buffer " + e + ">"
            }
            ,
            l.prototype.compare = function(e, t, n, i, r) {
                if (!l.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0),
                void 0 === n && (n = e ? e.length : 0),
                void 0 === i && (i = 0),
                void 0 === r && (r = this.length),
                t < 0 || n > e.length || i < 0 || r > this.length)
                    throw new RangeError("out of range index");
                if (i >= r && t >= n)
                    return 0;
                if (i >= r)
                    return -1;
                if (t >= n)
                    return 1;
                if (t >>>= 0,
                n >>>= 0,
                i >>>= 0,
                r >>>= 0,
                this === e)
                    return 0;
                for (var o = r - i, a = n - t, s = Math.min(o, a), u = this.slice(i, r), c = e.slice(t, n), h = 0; h < s; ++h)
                    if (u[h] !== c[h]) {
                        o = u[h],
                        a = c[h];
                        break
                    }
                return o < a ? -1 : a < o ? 1 : 0
            }
            ,
            l.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }
            ,
            l.prototype.indexOf = function(e, t, n) {
                return v(this, e, t, n, !0)
            }
            ,
            l.prototype.lastIndexOf = function(e, t, n) {
                return v(this, e, t, n, !1)
            }
            ,
            l.prototype.write = function(e, t, n, i) {
                if (void 0 === t)
                    i = "utf8",
                    n = this.length,
                    t = 0;
                else if (void 0 === n && "string" == typeof t)
                    i = t,
                    n = this.length,
                    t = 0;
                else {
                    if (!isFinite(t))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0,
                    isFinite(n) ? (n |= 0,
                    void 0 === i && (i = "utf8")) : (i = n,
                    n = void 0)
                }
                var r = this.length - t;
                if ((void 0 === n || n > r) && (n = r),
                e.length > 0 && (n < 0 || t < 0) || t > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var o = !1; ; )
                    switch (i) {
                    case "hex":
                        return y(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return b(this, e, t, n);
                    case "ascii":
                        return A(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return w(this, e, t, n);
                    case "base64":
                        return x(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return C(this, e, t, n);
                    default:
                        if (o)
                            throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(),
                        o = !0
                    }
            }
            ,
            l.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            var k = 4096;
            function O(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var r = t; r < n; ++r)
                    i += String.fromCharCode(127 & e[r]);
                return i
            }
            function E(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var r = t; r < n; ++r)
                    i += String.fromCharCode(e[r]);
                return i
            }
            function D(e, t, n) {
                var i = e.length;
                (!t || t < 0) && (t = 0),
                (!n || n < 0 || n > i) && (n = i);
                for (var r = "", o = t; o < n; ++o)
                    r += B(e[o]);
                return r
            }
            function T(e, t, n) {
                for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2)
                    r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                return r
            }
            function P(e, t, n) {
                if (e % 1 != 0 || e < 0)
                    throw new RangeError("offset is not uint");
                if (e + t > n)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function I(e, t, n, i, r, o) {
                if (!l.isBuffer(e))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > r || t < o)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + i > e.length)
                    throw new RangeError("Index out of range")
            }
            function j(e, t, n, i) {
                t < 0 && (t = 65535 + t + 1);
                for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r)
                    e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
            }
            function M(e, t, n, i) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r)
                    e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
            }
            function N(e, t, n, i, r, o) {
                if (n + i > e.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function F(e, t, n, i, o) {
                return o || N(e, 0, n, 4),
                r.write(e, t, n, i, 23, 4),
                n + 4
            }
            function L(e, t, n, i, o) {
                return o || N(e, 0, n, 8),
                r.write(e, t, n, i, 52, 8),
                n + 8
            }
            l.prototype.slice = function(e, t) {
                var n, i = this.length;
                if (e = ~~e,
                t = void 0 === t ? i : ~~t,
                e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
                t < e && (t = e),
                l.TYPED_ARRAY_SUPPORT)
                    (n = this.subarray(e, t)).__proto__ = l.prototype;
                else {
                    var r = t - e;
                    n = new l(r,void 0);
                    for (var o = 0; o < r; ++o)
                        n[o] = this[o + e]
                }
                return n
            }
            ,
            l.prototype.readUIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
                    i += this[e + o] * r;
                return i
            }
            ,
            l.prototype.readUIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); )
                    i += this[e + --t] * r;
                return i
            }
            ,
            l.prototype.readUInt8 = function(e, t) {
                return t || P(e, 1, this.length),
                this[e]
            }
            ,
            l.prototype.readUInt16LE = function(e, t) {
                return t || P(e, 2, this.length),
                this[e] | this[e + 1] << 8
            }
            ,
            l.prototype.readUInt16BE = function(e, t) {
                return t || P(e, 2, this.length),
                this[e] << 8 | this[e + 1]
            }
            ,
            l.prototype.readUInt32LE = function(e, t) {
                return t || P(e, 4, this.length),
                (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }
            ,
            l.prototype.readUInt32BE = function(e, t) {
                return t || P(e, 4, this.length),
                16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }
            ,
            l.prototype.readIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
                    i += this[e + o] * r;
                return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)),
                i
            }
            ,
            l.prototype.readIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256); )
                    o += this[e + --i] * r;
                return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)),
                o
            }
            ,
            l.prototype.readInt8 = function(e, t) {
                return t || P(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }
            ,
            l.prototype.readInt16LE = function(e, t) {
                t || P(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            l.prototype.readInt16BE = function(e, t) {
                t || P(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            l.prototype.readInt32LE = function(e, t) {
                return t || P(e, 4, this.length),
                this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }
            ,
            l.prototype.readInt32BE = function(e, t) {
                return t || P(e, 4, this.length),
                this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }
            ,
            l.prototype.readFloatLE = function(e, t) {
                return t || P(e, 4, this.length),
                r.read(this, e, !0, 23, 4)
            }
            ,
            l.prototype.readFloatBE = function(e, t) {
                return t || P(e, 4, this.length),
                r.read(this, e, !1, 23, 4)
            }
            ,
            l.prototype.readDoubleLE = function(e, t) {
                return t || P(e, 8, this.length),
                r.read(this, e, !0, 52, 8)
            }
            ,
            l.prototype.readDoubleBE = function(e, t) {
                return t || P(e, 8, this.length),
                r.read(this, e, !1, 52, 8)
            }
            ,
            l.prototype.writeUIntLE = function(e, t, n, i) {
                e = +e,
                t |= 0,
                n |= 0,
                i || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var r = 1
                  , o = 0;
                for (this[t] = 255 & e; ++o < n && (r *= 256); )
                    this[t + o] = e / r & 255;
                return t + n
            }
            ,
            l.prototype.writeUIntBE = function(e, t, n, i) {
                e = +e,
                t |= 0,
                n |= 0,
                i || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var r = n - 1
                  , o = 1;
                for (this[t + r] = 255 & e; --r >= 0 && (o *= 256); )
                    this[t + r] = e / o & 255;
                return t + n
            }
            ,
            l.prototype.writeUInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 1, 255, 0),
                l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                this[t] = 255 & e,
                t + 1
            }
            ,
            l.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 2, 65535, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : j(this, e, t, !0),
                t + 2
            }
            ,
            l.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 2, 65535, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : j(this, e, t, !1),
                t + 2
            }
            ,
            l.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 4, 4294967295, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                this[t + 2] = e >>> 16,
                this[t + 1] = e >>> 8,
                this[t] = 255 & e) : M(this, e, t, !0),
                t + 4
            }
            ,
            l.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 4, 4294967295, 0),
                l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : M(this, e, t, !1),
                t + 4
            }
            ,
            l.prototype.writeIntLE = function(e, t, n, i) {
                if (e = +e,
                t |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    I(this, e, t, n, r - 1, -r)
                }
                var o = 0
                  , a = 1
                  , s = 0;
                for (this[t] = 255 & e; ++o < n && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                    this[t + o] = (e / a >> 0) - s & 255;
                return t + n
            }
            ,
            l.prototype.writeIntBE = function(e, t, n, i) {
                if (e = +e,
                t |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    I(this, e, t, n, r - 1, -r)
                }
                var o = n - 1
                  , a = 1
                  , s = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                    e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                    this[t + o] = (e / a >> 0) - s & 255;
                return t + n
            }
            ,
            l.prototype.writeInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 1, 127, -128),
                l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                e < 0 && (e = 255 + e + 1),
                this[t] = 255 & e,
                t + 1
            }
            ,
            l.prototype.writeInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 2, 32767, -32768),
                l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : j(this, e, t, !0),
                t + 2
            }
            ,
            l.prototype.writeInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 2, 32767, -32768),
                l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : j(this, e, t, !1),
                t + 2
            }
            ,
            l.prototype.writeInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 4, 2147483647, -2147483648),
                l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8,
                this[t + 2] = e >>> 16,
                this[t + 3] = e >>> 24) : M(this, e, t, !0),
                t + 4
            }
            ,
            l.prototype.writeInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || I(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : M(this, e, t, !1),
                t + 4
            }
            ,
            l.prototype.writeFloatLE = function(e, t, n) {
                return F(this, e, t, !0, n)
            }
            ,
            l.prototype.writeFloatBE = function(e, t, n) {
                return F(this, e, t, !1, n)
            }
            ,
            l.prototype.writeDoubleLE = function(e, t, n) {
                return L(this, e, t, !0, n)
            }
            ,
            l.prototype.writeDoubleBE = function(e, t, n) {
                return L(this, e, t, !1, n)
            }
            ,
            l.prototype.copy = function(e, t, n, i) {
                if (n || (n = 0),
                i || 0 === i || (i = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                i > 0 && i < n && (i = n),
                i === n)
                    return 0;
                if (0 === e.length || 0 === this.length)
                    return 0;
                if (t < 0)
                    throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (i < 0)
                    throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                e.length - t < i - n && (i = e.length - t + n);
                var r, o = i - n;
                if (this === e && n < t && t < i)
                    for (r = o - 1; r >= 0; --r)
                        e[r + t] = this[r + n];
                else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                    for (r = 0; r < o; ++r)
                        e[r + t] = this[r + n];
                else
                    Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                return o
            }
            ,
            l.prototype.fill = function(e, t, n, i) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t,
                    t = 0,
                    n = this.length) : "string" == typeof n && (i = n,
                    n = this.length),
                    1 === e.length) {
                        var r = e.charCodeAt(0);
                        r < 256 && (e = r)
                    }
                    if (void 0 !== i && "string" != typeof i)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !l.isEncoding(i))
                        throw new TypeError("Unknown encoding: " + i)
                } else
                    "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n)
                    throw new RangeError("Out of range index");
                if (n <= t)
                    return this;
                var o;
                if (t >>>= 0,
                n = void 0 === n ? this.length : n >>> 0,
                e || (e = 0),
                "number" == typeof e)
                    for (o = t; o < n; ++o)
                        this[o] = e;
                else {
                    var a = l.isBuffer(e) ? e : V(new l(e,i).toString())
                      , s = a.length;
                    for (o = 0; o < n - t; ++o)
                        this[o + t] = a[o % s]
                }
                return this
            }
            ;
            var R = /[^+\/0-9A-Za-z-_]/g;
            function B(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            function V(e, t) {
                var n;
                t = t || 1 / 0;
                for (var i = e.length, r = null, o = [], a = 0; a < i; ++a) {
                    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                        if (!r) {
                            if (n > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === i) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            r = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189),
                            r = n;
                            continue
                        }
                        n = 65536 + (r - 55296 << 10 | n - 56320)
                    } else
                        r && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (r = null,
                    n < 128) {
                        if ((t -= 1) < 0)
                            break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0)
                            break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0)
                            break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((t -= 4) < 0)
                            break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }
            function H(e) {
                return i.toByteArray(function(e) {
                    if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(R, "")).length < 2)
                        return "";
                    for (; e.length % 4 != 0; )
                        e += "=";
                    return e
                }(e))
            }
            function $(e, t, n, i) {
                for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r)
                    t[r + n] = e[r];
                return r
            }
        }
        ).call(this, n("c8ba"))
    },
    c8ba: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    "1fb5": function(e, t, n) {
        "use strict";
        t.byteLength = function(e) {
            var t = u(e)
              , n = t[0]
              , i = t[1];
            return 3 * (n + i) / 4 - i
        }
        ,
        t.toByteArray = function(e) {
            var t, n, i = u(e), a = i[0], s = i[1], l = new o(function(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, a, s)), c = 0, h = s > 0 ? a - 4 : a;
            for (n = 0; n < h; n += 4)
                t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)],
                l[c++] = t >> 16 & 255,
                l[c++] = t >> 8 & 255,
                l[c++] = 255 & t;
            return 2 === s && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4,
            l[c++] = 255 & t),
            1 === s && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2,
            l[c++] = t >> 8 & 255,
            l[c++] = 255 & t),
            l
        }
        ,
        t.fromByteArray = function(e) {
            for (var t, n = e.length, r = n % 3, o = [], a = 0, s = n - r; a < s; a += 16383)
                o.push(c(e, a, a + 16383 > s ? s : a + 16383));
            return 1 === r ? (t = e[n - 1],
            o.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1],
            o.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=")),
            o.join("")
        }
        ;
        for (var i = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s)
            i[s] = a[s],
            r[a.charCodeAt(s)] = s;
        function u(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t),
            [n, n === t ? 0 : 4 - n % 4]
        }
        function c(e, t, n) {
            for (var r, o, a = [], s = t; s < n; s += 3)
                r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
                a.push(i[(o = r) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
            return a.join("")
        }
        r["-".charCodeAt(0)] = 62,
        r["_".charCodeAt(0)] = 63
    },
});

function _doSignature() {
    r = 'appCode=T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ&data={"pageNum":"2","pageSize":"10","queryDataSource":"es","regnCode":"110000"}&encType=SM4&signType=SM2&timestamp=1690878065&version=1.0.0&key=NMVFVILMKT13GEMD3BKPKCTBOQBPZR2P'
    d = '009c4a35d9aca4c68f1a3fa89c93684347205a4d84dc260558a049869709ac0b42'
    a = sm2.doSignature(r, d, {
        hash: true
    });
    return a
}

console.log(_doSignature())

function _from() {
    a = "424fc2079e3687268d6d2f252f5ecdff5f88aa26572bc89dc6df6469f66d1f11448f4f8c2ac1d2419bb7a75b04c4bcd17170ad015413e997e75aa57bc9da2d9d"
    return e_.Buffer.from(a, "hex").toString("base64")
}

console.log(_from())

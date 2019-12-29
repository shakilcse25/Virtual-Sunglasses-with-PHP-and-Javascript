"use strict";
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(t) {
    var xa = 0;
    return function() {
        return xa < t.length ? {
            done: !1,
            value: t[xa++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(t) {
    return {
        next: $jscomp.arrayIteratorImpl(t)
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, xa, ua) {
    t != Array.prototype && t != Object.prototype && (t[xa] = ua.value)
};
$jscomp.getGlobal = function(t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.SymbolClass = function(t, xa) {
    this.$jscomp$symbol$id_ = t;
    $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: xa
    })
};
$jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_
};
$jscomp.Symbol = function() {
    function t(ua) {
        if (this instanceof t) throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (ua || "") + "_" + xa++, ua)
    }
    var xa = 0;
    return t
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.iterator;
    t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.asyncIterator;
    t || (t = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {}
};
$jscomp.iteratorPrototype = function(t) {
    $jscomp.initSymbolIterator();
    t = {
        next: t
    };
    t[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return t
};
var JEEFITAPI = function() {
    function t(a) {
        return 3 === arguments.length ? this.Oa(arguments) : this.set(a)
    }

    function xa(a, b) {
        b = Math.floor(b);
        a.r = (b >> 16 & 255) / 255;
        a.P = (b >> 8 & 255) / 255;
        a.F = (b & 255) / 255
    }

    function ua(a, b) {
        function c(a) {
            void 0 !== a && 1 > parseFloat(a) && console.warn("THREE.Color: Alpha component of " + b + " will be ignored.")
        }
        var e;
        if (e = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(b)) {
            var x = e[2];
            switch (e[1]) {
                case "rgb":
                case "rgba":
                    if (e = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(x)) {
                        a.r = Math.min(255, parseInt(e[1], 10)) / 255;
                        a.P = Math.min(255, parseInt(e[2], 10)) / 255;
                        a.F = Math.min(255, parseInt(e[3], 10)) / 255;
                        c(e[5]);
                        return
                    }
                    if (e = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(x)) {
                        a.r = Math.min(100, parseInt(e[1], 10)) / 100;
                        a.P = Math.min(100, parseInt(e[2], 10)) / 100;
                        a.F = Math.min(100, parseInt(e[3], 10)) / 100;
                        c(e[5]);
                        return
                    }
                    break;
                case "hsl":
                case "hsla":
                    if (e = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(x)) {
                        x = parseFloat(e[1]) / 360;
                        var k = parseInt(e[2], 10) / 100,
                            f = parseInt(e[3], 10) / 100;
                        c(e[5]);
                        a.lk(x, k, f);
                        return
                    }
            }
        } else if (e = /^#([A-Fa-f0-9]+)$/.exec(b)) {
            e = e[1];
            x = e.length;
            if (3 === x) {
                a.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255;
                a.P = parseInt(e.charAt(1) + e.charAt(1), 16) / 255;
                a.F = parseInt(e.charAt(2) + e.charAt(2), 16) / 255;
                return
            }
            if (6 === x) {
                a.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255;
                a.P = parseInt(e.charAt(2) + e.charAt(3), 16) / 255;
                a.F = parseInt(e.charAt(4) + e.charAt(5), 16) / 255;
                return
            }
        }
        b && 0 < b.length && (e = pb[b], void 0 !== e ? xa(a, e) : console.warn("THREE.Color: Unknown color " +
            b))
    }

    function q(a, b, c, r) {
        this.m = a || 0;
        this.o = b || 0;
        this.s = c || 0;
        this.C = void 0 !== r ? r : 1
    }

    function ca(a, b, c) {
        var e = b.m,
            w = b.o,
            k = b.s;
        b = b.C;
        var f = c.m,
            y = c.o,
            Q = c.s;
        c = c.C;
        a.m = e * c + b * f + w * Q - k * y;
        a.o = w * c + b * y + k * f - e * Q;
        a.s = k * c + b * Q + e * y - w * f;
        a.C = b * c - e * f - w * y - k * Q;
        return a
    }

    function Y(a, b) {
        this.x = a || 0;
        this.y = b || 0
    }

    function V(a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    }

    function E(a, b, c, r) {
        this.m = a || 0;
        this.o = b || 0;
        this.s = c || 0;
        this.Ha = r || E.fh
    }

    function Z(a, b) {
        this.min = void 0 !== a ? a : new V(Infinity, Infinity, Infinity);
        this.max = void 0 !== b ? b : new V(-Infinity, -Infinity, -Infinity)
    }

    function fa(a) {
        return (new V).jc(a.min, a.max).sa(.5)
    }

    function sb(a, b) {
        a.min.min(b);
        a.max.max(b)
    }

    function Ca() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function Ya(a, b, c) {
        var e = b.elements,
            w = c.elements;
        c = a.elements;
        b = e[0];
        var k = e[4],
            f = e[8],
            y = e[12],
            Q = e[1],
            F = e[5],
            T = e[9],
            g = e[13],
            I = e[2],
            h = e[6],
            ra = e[10],
            la = e[14],
            ha = e[3],
            B = e[7],
            C = e[11];
        e = e[15];
        var A = w[0],
            N = w[4],
            Pa = w[8],
            hb = w[12],
            na = w[1],
            W = w[5],
            U = w[9],
            l = w[13],
            u = w[2],
            ma = w[6],
            m = w[10],
            p = w[14],
            G = w[3],
            M = w[7],
            H = w[11];
        w = w[15];
        c[0] = b * A + k * na + f * u + y * G;
        c[4] = b * N + k * W + f * ma + y * M;
        c[8] = b * Pa + k * U + f * m + y * H;
        c[12] = b * hb + k * l + f * p + y * w;
        c[1] = Q * A + F * na + T * u + g * G;
        c[5] = Q * N + F * W + T * ma + g * M;
        c[9] = Q * Pa + F * U + T * m + g * H;
        c[13] = Q * hb + F * l + T * p + g * w;
        c[2] = I * A + h * na + ra * u + la * G;
        c[6] = I * N + h * W + ra * ma + la * M;
        c[10] = I * Pa + h * U + ra * m + la * H;
        c[14] = I * hb + h * l + ra * p + la * w;
        c[3] = ha * A + B * na + C * u + e * G;
        c[7] = ha * N + B * W + C * ma + e * M;
        c[11] = ha * Pa + B * U + C * m + e * H;
        c[15] = ha * hb + B * l + C * p + e * w;
        return a
    }

    function Sa(a, b, c, r, x, k) {
        this.xa = a;
        this.F = b;
        this.Aa = c;
        this.qb = r instanceof V ? r : new V;
        this.Zc = Array.isArray(r) ? r : [];
        this.color = x instanceof t ? x : new t;
        this.He = Array.isArray(x) ? x : [];
        this.mb = void 0 !== k ? k : 0
    }

    function da(a, b, c) {
        var e = new XMLHttpRequest;
        e.open("GET", a, !0);
        var w = e.withCredentials = !1;
        e.onreadystatechange = function() {
            404 !== e.status || w || (w = !0, c && c(404));
            if (4 === e.readyState && 200 === e.status) {
                var a = !1;
                try {
                    a = JSON.parse(e.responseText)
                } catch (Ab) {
                    c && c(-1)
                }
                b && a && b(a)
            }
        };
        e.onerror = function() {
            c && c(0)
        };
        e.send()
    }

    function X(a, b, c) {
        da(a, b, c)
    }

    function h(a, b) {
        for (var c = new V, e = new V, x = 0, k = b.length; x < k; x++) {
            var f = b[x],
                y = a[f.xa],
                Q = a[f.F];
            c.zb(a[f.Aa], Q);
            e.zb(y, Q);
            y = c.x;
            Q = c.y;
            var F = c.z;
            c.x = Q * e.z - F * e.y;
            c.y = F * e.x - y * e.z;
            c.z = y * e.y - Q * e.x;
            0 !== c.Vd() && (c.normalize(), f.qb.B(c))
        }
    }

    function p(a, b) {
        var c, e = Array(a.length),
            x = 0;
        for (c = a.length; x < c; x++) e[x] = new V;
        x = 0;
        for (c = b.length; x < c; x++) {
            var k = b[x];
            e[k.xa].add(k.qb);
            e[k.F].add(k.qb);
            e[k.Aa].add(k.qb)
        }
        x = 0;
        for (c = a.length; x < c; x++) e[x].normalize();
        x = 0;
        for (c = b.length; x < c; x++) k = b[x], a = k.Zc, 3 === a.length ? (a[0].B(e[k.xa]), a[1].B(e[k.F]), a[2].B(e[k.Aa])) : (a[0] = e[k.xa].clone(), a[1] = e[k.F].clone(), a[2] = e[k.Aa].clone());
        return e
    }

    function M(a, b, c, r) {
        function e(a) {
            N.B(b[a]);
            Pa.B(N);
            na = y[a];
            C.B(na);
            C.sub(N.sa(N.qc(na))).normalize();
            var c = A,
                e = Pa.x,
                w = Pa.y,
                k = Pa.z,
                r = na.x,
                x = na.y,
                F = na.z;
            c.x = w * F - k * x;
            c.y = k * r - e * F;
            c.z = e * x - w * r;
            W = A.qc(Q[a]);
            hb = 0 > W ? -1 : 1;
            f[4 * a] = C.x;
            f[4 * a + 1] = C.y;
            f[4 * a + 2] = C.z;
            f[4 * a + 3] = hb
        }
        for (var w = a.length, f = new Float32Array(4 * w), y = [], Q = [], F = 0; F < w; F++) y[F] = new V, Q[F] = new V;
        var T = new V,
            g = new V,
            I = new V,
            h = new Y,
            ra = new Y,
            la = new Y,
            ha = new V,
            B = new V;
        r.forEach(function(b) {
            var e = b.xa,
                w = b.F;
            b = b.Aa;
            T.B(a[e]);
            g.B(a[w]);
            I.B(a[b]);
            h.B(c[e]);
            ra.B(c[w]);
            la.B(c[b]);
            var k = g.x - T.x,
                r = I.x - T.x,
                A = g.y - T.y,
                Pa = I.y - T.y,
                x = g.z - T.z,
                W = I.z - T.z,
                C = ra.x - h.x,
                F = la.x - h.x,
                f = ra.y - h.y,
                N = la.y - h.y,
                Ab = 1 / (C * N - F * f);
            ha.set((N * k - f * r) * Ab, (N * A - f * Pa) * Ab, (N * x - f * W) * Ab);
            B.set((C * r - F * k) * Ab, (C * Pa - F * A) * Ab, (C * W - F * x) * Ab);
            y[e].add(ha);
            y[w].add(ha);
            y[b].add(ha);
            Q[e].add(B);
            Q[w].add(B);
            Q[b].add(B)
        });
        var C = new V,
            A = new V,
            N = new V,
            Pa = new V,
            hb, na, W;
        r.forEach(function(a) {
            e(a.xa);
            e(a.F);
            e(a.Aa)
        });
        return f
    }

    function K(a, b, c, r) {
        return Math.sqrt((a - c) * (a - c) + (b - r) * (b - r))
    }

    function l(a, b) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !0);
        c.withCredentials = !1;
        c.onreadystatechange = function() {
            4 === c.readyState && 200 === c.status && b(c.responseText)
        };
        c.send()
    }

    function v(a) {
        return .5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
    }

    function ea(a) {
        switch (a) {
            case "relu":
                return "gl_FragColor=max(vec4(0.,0.,0.,0.),gl_FragColor);";
            case "elu":
                return "gl_FragColor=mix(exp(-abs(gl_FragColor))-vec4(1.,1.,1.,1.),gl_FragColor,step(0.,gl_FragColor));";
            case "elu01":
                return "gl_FragColor=mix(0.1*exp(-abs(gl_FragColor))-vec4(0.1,0.1,0.1,0.1),gl_FragColor,step(0.,gl_FragColor));";
            case "arctan":
                return "gl_FragColor=atan(3.14159265359*texture2D(u123,vUV))/3.14159265359;";
            case "copy":
                return "";
            default:
                return !1
        }
    }

    function P(a, b) {
        var c = b % 8;
        return a[(b - c) / 8] >> 7 - c & 1
    }

    function Ja(a, b, c) {
        var e = 1,
            w = 0;
        for (c = b + c - 1; c >= b; --c) w += e * P(a, c), e *= 2;
        return w
    }

    function ja(a) {
        a = "undefined" === typeof btoa ? Buffer.from(a.data, "base64").toString("latin1") : atob(a.data);
        var b = a.length,
            c, r = new Uint8Array(b);
        for (c = 0; c < b; ++c) r[c] = a.charCodeAt(c);
        return r
    }

    function R(a) {
        var b = JSON.parse(a);
        a = b.nb;
        var c = b.n;
        b = ja(b);
        for (var r = new Uint32Array(c), x = 0; x < c; ++x) r[x] = Ja(b, x * a, a);
        return r
    }

    function ba(a) {
        var b = JSON.parse(a);
        a = b.ne;
        var c = b.nf,
            r = b.n;
        b = ja(b);
        var x = new Float32Array(r),
            k = new Float32Array(c),
            f = a + c + 1,
            y;
        for (y = 0; y < r; ++y) {
            var Q = f * y,
                F = 0 === P(b, Q) ? 1 : -1,
                g = Ja(b, Q + 1, a),
                Fb = b,
                I = Q + 1 + a,
                h = k,
                ra = 0,
                la = h.length;
            for (Q = I; Q < I + la; ++Q) h[ra] = P(Fb, Q), ++ra;
            for (Q = Fb = 0; Q < c; ++Q) Fb += k[Q] * Math.pow(2, -Q - 1);
            F = 0 === Fb && 0 === g ? 0 : F * (1 + Fb) * Math.pow(2, 1 + g - Math.pow(2, a - 1));
            x[y] = F
        }
        return x
    }

    function vb() {
        var a = {},
            b, c;
        a || (a = {});
        this.Pi = function(a) {
            return b[a]
        };
        this.mk = function(a) {
            var e = !1;
            b = a.map(function(a, b) {
                return e = ib.a({
                    index: b,
                    parent: this,
                    Mk: a,
                    Ua: e
                })
            });
            c = b[b.length - 1];
            b.forEach(function(a, b) {
                0 !== b && a.Xj()
            })
        };
        this.ka = function(a, c) {
            var e = c;
            b.forEach(function(b) {
                e = b.ka(e, a)
            });
            return e
        };
        this.yc = function() {
            return c.Si()
        };
        this.zk = function(a) {
            c.bi(a)
        };
        this.xf = function() {
            return c.xf()
        }
    }

    function Ia(a, b) {
        a[b] = !0;
        a.setAttribute(b, "true")
    }

    function lb() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    }

    function wb() {
        var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)]
    }

    function oa() {
        var a = navigator.userAgent.toLowerCase();
        return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") ? !0 : !1
    }

    function bb(a) {
        if (!a) return a;
        var b = !1;
        if (a.video) {
            var c = function(a) {
                var b = {};
                "undefined" !== typeof a.min && (b.min = a.min);
                "undefined" !== typeof a.max && (b.max = a.max);
                "undefined" !== typeof a.ideal && (b.ideal = a.ideal);
                return b
            };
            b = {};
            "undefined" !== typeof a.video.width && (b.width = c(a.video.width));
            "undefined" !== typeof a.video.height && (b.height = c(a.video.height));
            "undefined" !== typeof a.video.facingMode && (b.facingMode = a.video.facingMode)
        }
        b = {
            audio: a.audio,
            video: b
        };
        "undefined" !== typeof a.deviceId && (b.deviceId = a.deviceId);
        return b
    }

    function xb(a) {
        var b = a.video.width;
        a.video.width = a.video.height;
        a.video.height = b;
        return a
    }

    function Ua(a) {
        function b(a) {
            return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function(b, c) {
                return Math.abs(b - a) - Math.abs(c - a)
            })
        }

        function c(b) {
            var c = bb(a);
            r.push(b(c))
        }
        var r = [];
        if (!a || !a.video) return r;
        if (a.video.width && a.video.height) {
            if (a.video.width.ideal && a.video.height.ideal)
                for (var x = b(a.video.width.ideal).slice(0, 3), k = b(a.video.height.ideal).slice(0, 3), f = 0, y; f < x.length; ++f) {
                    y = x[f];
                    for (var Q = 0, F; Q < k.length; ++Q)
                        if (F = k[Q], y !== a.video.width.ideal || F !== a.video.height.ideal) {
                            var g = Math.max(y, F) / Math.min(y, F);
                            g < 4 / 3 - .1 || g > 16 / 9 + .1 || c(function(a) {
                                a.video.width.ideal = y;
                                a.video.height.ideal = F;
                                return a
                            })
                        }
                }
            c(function(a) {
                return xb(a)
            })
        }
        a.video.width && a.video.height && (a.video.width.ideal && a.video.height.ideal && c(function(a) {
            delete a.video.width.ideal;
            delete a.video.height.ideal;
            return a
        }), c(function(a) {
            delete a.video.width;
            delete a.video.height;
            return a
        }));
        a.video.facingMode && (c(function(a) {
            delete a.video.facingMode;
            return a
        }), a.video.width && a.video.height && c(function(a) {
            xb(a);
            delete a.video.facingMode;
            return a
        }));
        r.push({
            audio: a.audio,
            video: !0
        });
        return r
    }

    function Db(a) {
        try {
            var b = window.matchMedia("(orientation: portrait)").matches ? !0 : !1
        } catch (r) {
            b = window.innerHeight > window.innerWidth
        }
        if (b && a && a.video) {
            b = a.video.width;
            var c = a.video.height;
            b && c && b.ideal && c.ideal && b.ideal > c.ideal && (a.video.height = b, a.video.width = c)
        }
    }

    function Za(a) {
        a.volume = 0;
        Ia(a, "muted");
        if (oa()) {
            if (1 === a.volume) {
                var b = function() {
                    a.volume = 0;
                    window.removeEventListener("mousemove", b, !1);
                    window.removeEventListener("touchstart", b, !1)
                };
                window.addEventListener("mousemove", b, !1);
                window.addEventListener("touchstart", b, !1)
            }
            setTimeout(function() {
                a.volume = 0;
                Ia(a, "muted")
            }, 5)
        }
    }

    function jb(a, b, c, r) {
        function e(a) {
            k || (k = !0, c(a))
        }
        var k = !1;
        navigator.mediaDevices.getUserMedia(r).then(function(c) {
            function w() {
                setTimeout(function() {
                    if (a.currentTime) {
                        var w = a.videoWidth,
                            r = a.videoHeight;
                        if (0 === w || 0 === r) e("VIDEO_NULLSIZE");
                        else {
                            w && (a.style.width = w.toString() + "px");
                            r && (a.style.height = r.toString() + "px");
                            w = {
                                $h: null,
                                we: null,
                                Lj: null
                            };
                            try {
                                var y = c.getVideoTracks()[0];
                                y && (w.Lj = y, w.$h = y.getCapabilities(), w.we = y.getSettings())
                            } catch (Fb) {}
                            oa() || lb() ? a.parentNode && null !== a.parentNode ? (k || b(a, c, w), setTimeout(function() {
                                a.play()
                            }, 100)) : (document.body.appendChild(a), Za(a), k || b(a, c, w), setTimeout(function() {
                                a.style.transform = "scale(0.0001,0.0001)";
                                a.style.position = "fixed";
                                a.style.bottom = "0px";
                                a.style.right = "0px";
                                Za(a);
                                setTimeout(function() {
                                    a.play()
                                }, 100)
                            }, 80)) : k || b(a, c, w)
                        }
                    } else e("VIDEO_NOTSTARTED")
                }, 700)
            }
            "undefined" !== typeof a.srcObject ? a.srcObject = c : (a.src = window.URL.createObjectURL(c), a.videoStream = c);
            Za(a);
            a.addEventListener("loadeddata", function() {
                var b = a.play();
                Za(a);
                "undefined" === typeof b ? w() : b.then(function() {
                    w()
                }).catch(function() {
                    e("VIDEO_PLAYPROMISEREJECTED")
                })
            }, !1)
        }).catch(function(a) {
            e(a)
        })
    }

    function qb(a, b, c) {
        var e = navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? document.createElement("video") : !1;
        if (e)
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                if (c && c.video) {
                    if (lb()) {
                        var w = wb();
                        (12 > w[0] || 12 === w[0] && 2 > w[1]) && Db(c)
                    }
                    c.video.width && c.video.width.ideal && (e.style.width = c.video.width.ideal + "px");
                    c.video.height && c.video.height.ideal && (e.style.height = c.video.height.ideal + "px")
                }
                Ia(e, "autoplay");
                Ia(e, "playsinline");
                c && c.audio ? e.volume = 0 : Ia(e, "muted");
                jb(e, a, function() {
                    function k(c) {
                        if (0 === c.length) b("INVALID_FALLBACKCONSTRAINS");
                        else {
                            var w = c.shift();
                            jb(e, a, function() {
                                k(c)
                            }, w)
                        }
                    }
                    var w = Ua(c);
                    k(w)
                }, c)
            } else b && b("MEDIASTREAMAPI_NOTFOUND");
        else b && b("VIDEO_NOTPROVIDED")
    }

    function Eb(a) {
        navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(b) {
            (b = b.filter(function(a) {
                return a.kind && -1 !== a.kind.toLowerCase().indexOf("video") && a.label && a.deviceId
            })) && b.length && 0 < b.length ? a(b, !1) : a(!1, "NODEVICESFOUND")
        }).catch(function() {
            a(!1, "PROMISEREJECTED")
        }) : a(!1, "NOTSUPPORTED")
    }

    function Va() {
        if (!window.navigator.userAgent) return !1;
        var a = window.navigator.userAgent.split(";");
        if (3 > a.length) return !1;
        a = a[2].match(/\s*([^\s\)]*)/i);
        return !a || 2 > a ? !1 : a[1]
    }

    function fb() {
        return Math.min(g.eg.Kj, window.devicePixelRatio ? window.devicePixelRatio : 1)
    }

    function cb() {
        var a = g.eg,
            b = Va(),
            c = !1;
        b && Object.keys(a.gg).forEach(function(e) {
            (new RegExp("^" + e.split("*").join(".*") + "$")).test(b) && (r = a.gg[e], c = !0)
        });
        if (!c) var r = a.ge;
        return r
    }

    function yb() {
        function a() {
            var d = g.fg;
            Hb = d * g.width;
            Ib = d * g.height
        }

        function c() {
            ++Ea;
            3 === Ea && (Fa.ye(), g.lb && (qa.reset(), ka.Xa.Rh(Jb), ka.Xa.Qh()), g.Bi || J.oi(), Kb = !0, m.ready = Lb && Kb, n = 0, r(), Ea = 0)
        }

        function w(d) {
            oa = setTimeout(x.bind(null, d), R)
        }

        function r() {
            Aa.timestamp = Date.now();
            D && window.cancelAnimationFrame(D);
            x(0)
        }

        function x(d) {
            ia ? Aa.ob = Y : Z ? Aa.ob = Ja : P ? (y(), Aa.ob = ya === sa.V ? Aa.Jc : 1) : (Aa.ob = g.hc, y());
            qa.fa();
            for (var a = 0; a < Aa.ob; ++a) H.set("s101"), tb.J(), ba.b(0), ab.b(1), O.h(!1, !1), tb.b(0), v.ka(!1, tb);
            if (ia) fa(), ia = !1, b.flush(), D = window.requestAnimationFrame(x);
            else if (J.animate(d), !Z) {
                if (P) {
                    d = Date.now();
                    a = d - Aa.timestamp;
                    var c = .2 * g.md;
                    Aa.timestamp = d;
                    Aa.Yf = Aa.ob / a;
                    Aa.Kc = Aa.Yf * c + Aa.Kc * (1 - c);
                    Aa.Zf = 1E3 / a;
                    Aa.pb = Aa.Zf * g.md + Aa.pb * (1 - g.md);
                    Aa.pb > g.cb[1] ? (++Aa.Jc, Aa.pb = (g.cb[0] + g.cb[1]) / 2) : Aa.pb < g.cb[0] && (Aa.Jc = Math.max(Aa.Jc - 1, g.hc), Aa.pb = (g.cb[0] + g.cb[1]) / 2);
                    Aa.Mb = g.Kh / Math.max(Aa.Kc, .001);
                    db = Math.min(Math.max(Aa.Mb, g.Pe[0]), g.Pe[1]);
                    g.lb && ya === sa.V && (kb = g.Nf + (g.Of - g.Nf) * Aa.Mb, mb = g.Mf + (g.Bj - g.Mf) * Aa.Mb, mb = Math.min(mb, .5))
                }
                n = d;
                ya !== sa.ra && (D = window.requestAnimationFrame(w))
            }
        }

        function k() {
            n = Date.now();
            P = !0
        }

        function f() {
            oa && (clearTimeout(oa), oa = !1);
            D && (window.cancelAnimationFrame(D), D = !1)
        }

        function y() {
            var d = Wa.currentTime - Ca;
            0 > d && (Ca = Wa.currentTime);
            1E3 * d < g.gl || (Jb.refresh(), Ca += d, H.set("s100"), qa.fa(), ba.J(), Jb.b(0), O.h(!1, !0))
        }
        var Q, F, T, h, I, p, ra, la, ha, B, C;
        Yb = [0, g.Da[1], g.Da[2]];
        var A, N = !1,
            Pa = !1,
            hb, na, W, U = !1,
            M = [],
            R = g.Hb,
            ma = !1,
            v, za = [.5, 0, 0, .5];
        a();
        var t = [0, 0, 0],
            ea = 1,
            E = 0,
            ba, tb, Gb, ab, ub, Ta, Bb, K, d, n = 0,
            D = !1,
            z, S, aa, va = 0,
            Xa, db = 1,
            kb = g.Of,
            mb = .1,
            Ea = 0,
            P = !0,
            Lb = !1,
            Kb = !1,
            Aa = {
                timestamp: 0,
                Yf: 0,
                Kc: 0,
                Jc: g.hc,
                ob: g.hc,
                Zf: 0,
                pb: 0,
                Mb: 1
            },
            sa = {
                ra: -1,
                V: 0,
                va: 1,
                Ab: 2,
                Bb: 3
            },
            ya = sa.V,
            q = !1,
            V = sa.V,
            X = !1,
            ia = !1,
            Y = 1,
            fa = !1,
            Z = !1,
            Ma = !1,
            ca = !1,
            Ja = 0,
            ja, ta, Ka = !1,
            nc = !1,
            oc = !1,
            pc = [0, 0, 0],
            qc = 1,
            ua, wa, xa, Na = {
                Da: [0, 0, 0],
                sb: 1,
                Mc: 0,
                za: 0,
                oa: 0,
                la: g.la
            },
            Ia = [0, 0, 0],
            da = {
                scale: 1,
                offsetX: 0,
                offsetY: 0
            },
            oa, Ca = 0,
            Fa = {
                Ff: function() {
                    a();
                    var d = Hb / g.Ac;
                    hb = g.minScale * d;
                    na = g.maxScale * d;
                    I = (1 - 2 * g.borderWidth) / g.nStepsX;
                    p = (1 - 2 * g.borderHeight) / g.nStepsY;
                    ra = (na - hb) / g.nStepsScale;
                    la = g.borderWidth;
                    ha = g.borderHeight;
                    B = 1 - g.borderWidth;
                    C = 1 - g.borderHeight;
                    W = [g.Ac / Hb, g.Ac / Ib];
                    Q = 0;
                    F = g.borderWidth;
                    T = g.borderHeight;
                    h = hb;
                    ta = [g.width / g.height, 1];
                    U = !0
                },
                i: function() {
                    H.Ne([{
                        id: "s100",
                        name: "_",
                        l: "attribute vec2 a0;uniform mat2 u149;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u149*a0;}",
                        D: ["a0"],
                        L: [2],
                        c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                        f: ["u0", "u149"],
                        precision: "lowp"
                    }, {
                        id: "s101",
                        name: "_",
                        c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                        l: "attribute vec2 a0;uniform sampler2D u25;uniform vec2 u79;uniform float u150;const vec2 k=vec2(.25,.5),j=vec2(.75,.5),e=vec2(.5,.5);varying vec2 vv0;void main(){vec4 a=texture2D(u25,k);vec2 d=a.gb,b=a.a*u79;vec4 c=texture2D(u25,j);float l=c.a,g=c.y;vec2 f=vec2(mix(1.,1./cos(g),u150),1.);b*=f;vec2 i=a0*.5+e;vv0=d+(i-e)*b,gl_Position=vec4(a0,0.,1.);}",
                        D: ["a0"],
                        L: [2],
                        f: ["u0", "u25", "u79", "u150"],
                        precision: "lowp"
                    }, {
                        id: "s102",
                        name: "_",
                        l: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                        c: "uniform sampler2D u151,u25;uniform vec3 u152,u153;uniform float u154,u155,u156;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 c=texture2D(u151,vec2(.625,.625)),d=texture2D(u151,vec2(.875,.625)),a=texture2D(u25,vec2(.25,.5));float b=dot(c,e),g=dot(d,e);bool h=b>u155&&b>g+u156;h?a.r=2.:a.r>u154?a.r=0.:a.r>1.9?a.r+=1.:0.;if(a.r<.9)a=vec4(1.,u152);else{float i=dot(e,texture2D(u151,vec2(.875,.875))),j=dot(e,texture2D(u151,vec2(.125,.625))),f=dot(e,texture2D(u151,vec2(.375,.625)));a.r*=step(1.9,a.r),a.gba+=vec3(i,j,f)*u153*a.a;}gl_FragColor=a;}",
                        f: "u151 u25 u152 u154 u153 u155 u156".split(" ")
                    }, {
                        id: "s103",
                        name: "_",
                        l: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                        c: "uniform sampler2D u151,u25;uniform vec3 u157,u158;uniform vec2 u159;const vec4 l=vec4(1.,1.,1.,1.),f=vec4(0.,0.,0.,0.),e=vec4(.25,.25,.25,.25);void main(){vec4 m=texture2D(u151,vec2(.5,.5)),n=texture2D(u151,vec2(.75,.5));float c=dot(texture2D(u151,vec2(0.,0.)),e),a=smoothstep(u159.x,u159.y,c);vec4 h=texture2D(u25,vec2(.25,.5)),b=texture2D(u25,vec2(.75,.5));float i=b.a;a=mix(a,i,.3);if(h.r<1.9){gl_FragColor=f;return;}float j=dot(e,texture2D(u151,vec2(0.,.75))),k=dot(e,texture2D(u151,vec2(.25,.75))),g=dot(e,texture2D(u151,vec2(.5,.75)));vec3 d=u158+vec3(j,k,g)*u157;gl_FragColor=vec4(d,a);}",
                        f: "u151 u25 u159 u157 u158 u160".split(" ")
                    }, {
                        id: "s104",
                        name: "_",
                        c: "uniform sampler2D u25,u161;uniform float u162,u163,u164,u165;const vec4 f=vec4(1.,1.,1.,1.),h=vec4(1.,0.,0.,0.),i=vec4(0.,0.,0.,1.);varying vec2 vv0;void main(){vec4 c=texture2D(u25,vv0),d=texture2D(u161,vv0),j=texture2D(u25,vec2(.75,.5));float k=pow(j.a,u165),l=(1.-k)*(u163-u162)+u162,a=step(.5,vv0.x);vec4 m=mix(h,i,a),b=max(l*f,m);b*=mix(f,u164*vec4(1.,1.,1.,0.)+vec4(0.,0.,0.,1.),a);vec4 g=c-d;gl_FragColor=g*b;}",
                        f: "u25 u161 u162 u163 u164 u165".split(" "),
                        precision: "highp"
                    }, {
                        id: "s105",
                        name: "_",
                        c: "uniform sampler2D u161,u167,u160;const vec4 g=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 c=texture2D(u161,vv0),d=texture2D(u167,vv0),a=c+d;float f=step(.5,vv0.x),b=a.a;b*=texture2D(u160,vec2(.25,.5)).a,b*=texture2D(u160,vec2(.75,.5)).a,a.a=mix(a.a,b,f),gl_FragColor=a;}",
                        f: ["u161", "u167", "u160"],
                        precision: "highp"
                    }, {
                        id: "s106",
                        name: "_",
                        c: "uniform sampler2D u25;uniform float u166;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u25,vv0);float b=step(.5,vv0.x),c=texture2D(u25,vec2(.75,.5)).g;a.a+=(1.-b)*u166*abs(sin(c)),gl_FragColor=a;}",
                        f: ["u25", "u166"],
                        precision: "highp"
                    }, {
                        id: "s107",
                        name: "_",
                        c: "uniform sampler2D u25,u160,u151;uniform vec3 u157,u158;uniform float u168,u169;const vec3 i=vec3(.02,.02,.02),h=vec3(.3,.3,.3);const vec4 e=vec4(.25,.25,.25,.25);varying vec2 vv0;void main(){float a=step(.5,vv0.x);vec4 q=texture2D(u160,vv0);float c=texture2D(u25,vec2(.75,.5)).a;vec2 d=mix(vec2(.75,.75),vec2(0.,.75),a),p=mix(vec2(0.,.5),vec2(.25,.75),a),o=mix(vec2(.25,.5),vec2(.5,.75),a);float n=dot(e,texture2D(u151,d)),m=dot(e,texture2D(u151,p)),l=dot(e,texture2D(u151,o));vec3 k=mix(vec3(1.,1.,.2),u157,a),b=k*vec3(n,m,l);if(a>.5){vec3 j=texture2D(u25,vec2(.75,.5)).rgb;b=u158+b-j;}b*=c/u169;vec3 g=min(i*u168,h);vec4 r=mix(q,vec4(b,0.),vec4(g,0.));gl_FragColor=r;}",
                        f: "u25 u160 u151 u168 u169 u157 u158".split(" "),
                        precision: "highp"
                    }, {
                        id: "s108",
                        name: "_",
                        c: "uniform sampler2D u160;const vec4 h=vec4(.25,.25,.25,.25);varying vec2 vv0;void main(){float a=step(.5,vv0.x),c=mix(.02,5e-4,a),d=mix(.05,1e-3,a);vec3 b=texture2D(u160,vv0).rgb;float g=length(b),f=1.-smoothstep(c,d,g);gl_FragColor=vec4(b,f);}",
                        f: ["u160"],
                        precision: "highp"
                    }, {
                        id: "s109",
                        name: "_",
                        l: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                        c: "uniform sampler2D u151;const vec4 g=vec4(1.,1.,1.,1.),h=vec4(0.,0.,0.,0.),e=vec4(.25,.25,.25,.25);const float f=3.1415;void main(){float a=dot(texture2D(u151,vec2(.25,.25)),e),b=dot(texture2D(u151,vec2(.5,.25)),e),c=f/2.*dot(texture2D(u151,vec2(.75,.25)),e),d=4.18*dot(texture2D(u151,vec2(0.,.25)),e);gl_FragColor=vec4(d,a,b,c);}",
                        f: ["u151"]
                    }]);
                    Fa.Gf();
                    Gb = G.a({
                        isPot: !0,
                        Cj: !0,
                        isFloat: !1,
                        url: g.T + g.hl
                    });
                    ba = G.a({
                        isPot: !1,
                        Cj: !0,
                        isFloat: !1,
                        width: Hb,
                        height: Ib
                    });
                    M.push(ba);
                    tb = G.a({
                        isPot: !0,
                        isFloat: !1,
                        width: g.Ac
                    });
                    g.Fc && (ja = G.a({
                        isPot: !1,
                        isFloat: !1,
                        isLinear: !0,
                        url: (-1 === g.de.indexOf("//") ? g.T : "") + g.de
                    }));
                    var a = {
                            width: 2,
                            height: 1,
                            isFloat: !0,
                            isPot: !1,
                            array: new Float32Array([0, g.borderWidth, g.borderHeight, 0, 0, 0, 0, 0])
                        },
                        D = {
                            width: 2,
                            height: 1,
                            isFloat: !0,
                            isPot: !1,
                            array: new Float32Array([0, 0, 0, 0, 0, 0, 0, 0])
                        };
                    ab = G.a(a);
                    ub = G.a(a);
                    Ta = fc.a(a);
                    Bb = G.a(D);
                    K = G.a(D);
                    d = G.a(D);
                    Xa = G.a({
                        width: 1,
                        height: 1,
                        isFloat: !0,
                        isPot: !1,
                        array: new Float32Array([0, 0, 0, 0])
                    });
                    l(g.T + g.save, function(a) {
                        a = JSON.parse(a);
                        v = new vb;
                        v.mk(a.layers);
                        v.zk({
                            dg: "gpuRawAvg",
                            Sj: function(a) {
                                H.set("s107");
                                K.J();
                                ab.b(1);
                                d.b(2);
                                H.A("u168", Aa.Mb);
                                H.A("u169", 1 / Aa.Kc);
                                O.h(!1, !1);
                                H.set("s108");
                                d.j();
                                K.b(0);
                                O.h(!1, !1);
                                a.b(0);
                                ab.j();
                                b.viewport(0, 0, 1, 1);
                                H.set("s102");
                                H.Rc("u152", F, T, h * g.fg);
                                Ta.b(1);
                                O.h(!1, !1);
                                H.set("s103");
                                b.viewport(1, 0, 1, 1);
                                O.h(!1, !1);
                                1 !== ++Q % 2 && (h += ra, h > na && (F += I, h = hb, F > B && (F = la, T += p, T > C && (T = ha))));
                                Bb.J();
                                H.set("s104");
                                H.A("u162", g.kd * db);
                                ab.b(0);
                                Ta.b(1);
                                O.h(!1, !1);
                                H.set("s105");
                                Ta.Bk(1);
                                Bb.b(0);
                                d.b(2);
                                O.h(!1, !1);
                                H.set("s106");
                                Ta.b(0);
                                ub.j();
                                O.h(!1, !1);
                                n - va > kb && g.lb && ya === sa.V && (va = n, Xa.j(), H.set("s109"), a.b(0), O.h(!1, !1), ka.Xa.Zg(Jb, Xa, mb))
                            }
                        });
                        c()
                    });
                    m.set_videoRotation = function(d) {
                        Ga.rotate = d;
                        m.ready && ($a.ve(Wa.videoWidth, Wa.videoHeight), $a.ze())
                    };
                    m.set_viewRotation = function() {};
                    m.resize = function(d, a) {
                        function b() {
                            f();
                            N && (clearTimeout(N), N = !1);
                            if (!Pa)
                                if (g.width === n && g.height === c) r();
                                else if (ya !== sa.V && ya !== sa.va) N = setTimeout(b, g.tg);
                            else {
                                var d = "undefined" === typeof nb ? !1 : nb.get_mode(),
                                    a = ya;
                                ya = sa.ra;
                                ia = Pa = !0;
                                fa = function() {
                                    Pa = ia = !1;
                                    k();
                                    R = g.Hb;
                                    ma && clearTimeout(ma);
                                    ma = !1;
                                    ya = a
                                };
                                g.width = n;
                                g.height = c;
                                Fa.Ff();
                                Fa.Gf();
                                M.forEach(function(d) {
                                    d.resize(n, c)
                                });
                                L.resize(Hb, Ib);
                                Fa.ye();
                                $a.ve(Wa.videoWidth ? Wa.videoWidth : Wa.width, Wa.videoHeight ? Wa.videoHeight : Wa.height);
                                $a.ze();
                                $a.Sg();
                                r();
                                ya === sa.va && (ya = sa.V, m.switch_viewer3D(!0, !1));
                                d && nb.switch_mode(d)
                            }
                        }
                        if (m.ready) {
                            N && (clearTimeout(N), N = !1);
                            f();
                            var n = d * fb(),
                                c = a * fb();
                            N = setTimeout(b, g.tg)
                        }
                    }
                },
                Gf: function() {
                    H.g("s101", [{
                        type: "1i",
                        name: "u0",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u25",
                        value: 1
                    }, {
                        type: "2f",
                        name: "u79",
                        value: W
                    }, {
                        type: "1f",
                        name: "u150",
                        value: g.df
                    }]);
                    H.g("s102", [{
                        type: "1i",
                        name: "u151",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u25",
                        value: 1
                    }, {
                        type: "1f",
                        name: "u154",
                        value: g.Sk
                    }, {
                        type: "1f",
                        name: "u155",
                        value: g.ih
                    }, {
                        type: "1f",
                        name: "u156",
                        value: g.eh
                    }, {
                        type: "3f",
                        name: "u153",
                        value: [g.Be[0] * W[0], g.Be[1] * W[1], g.Be[2]]
                    }]);
                    H.g("s103", [{
                        type: "1i",
                        name: "u151",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u25",
                        value: 1
                    }, {
                        type: "1i",
                        name: "u160",
                        value: 2
                    }, {
                        type: "2f",
                        name: "u159",
                        value: g.og
                    }, {
                        type: "3f",
                        name: "u157",
                        value: [-g.ia[0], -g.ia[1], g.ia[2]]
                    }, {
                        type: "3f",
                        name: "u158",
                        value: g.Ug
                    }]);
                    H.g("s104", [{
                        type: "1i",
                        name: "u25",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u161",
                        value: 1
                    }, {
                        type: "1f",
                        name: "u163",
                        value: g.Oe
                    }, {
                        type: "1f",
                        name: "u162",
                        value: g.kd
                    }, {
                        type: "1f",
                        name: "u164",
                        value: g.ug
                    }, {
                        type: "1f",
                        name: "u165",
                        value: g.ng
                    }]);
                    H.g("s105", [{
                        type: "1i",
                        name: "u161",
                        value: 1
                    }, {
                        type: "1i",
                        name: "u167",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u160",
                        value: 2
                    }]);
                    H.g("s106", [{
                        type: "1i",
                        name: "u25",
                        value: 0
                    }, {
                        type: "1f",
                        name: "u166",
                        value: g.hk
                    }]);
                    H.g("s107", [{
                        type: "1i",
                        name: "u151",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u25",
                        value: 1
                    }, {
                        type: "1i",
                        name: "u160",
                        value: 2
                    }, {
                        type: "3f",
                        name: "u157",
                        value: [-g.ia[0], -g.ia[1], g.ia[2]]
                    }, {
                        type: "3f",
                        name: "u158",
                        value: g.Ug
                    }]);
                    H.g("s108", [{
                        type: "1i",
                        name: "u160",
                        value: 0
                    }]);
                    H.g("s109", [{
                        type: "1i",
                        name: "u151",
                        value: 0
                    }])
                },
                ye: function() {
                    J.Cg(ub, ba, Xa, Gb)
                },
                Ri: function() {
                    return da
                },
                Hg: function(d) {
                    da = d
                },
                Xc: function() {
                    Ia[0] = t[0] - da.offsetX;
                    Ia[1] = t[1] + da.offsetY;
                    Ia[2] = t[2];
                    J.zg(Yb, Na.Da, Ia)
                },
                Yc: function() {
                    J.Ag(ea * g.sb, Na.sb, da.scale)
                },
                Yg: function() {
                    J.Bg(E + Na.Mc)
                },
                Xk: function() {
                    J.yg(g.za + Na.za, g.oa + Na.oa)
                },
                Zk: function() {
                    J.nk((0 === Na.la[0] && 0 === Na.la[1] ? g : Na).la)
                },
                Fe: function() {
                    Fa.Xc();
                    Fa.Yc();
                    Fa.Yg();
                    Fa.Xk();
                    Fa.Zk()
                },
                gk: function() {
                    f();
                    q && (clearInterval(q), q = !1);
                    Z = !0;
                    Ja = 0;
                    Ka = J.Qi();
                    nc = Qa.wf();
                    oc = Qa.uf();
                    qc = Na.sb;
                    pc = Na.Da;
                    ua = Na.la;
                    wa = Na.za;
                    xa = Na.oa;
                    ia = !1;
                    J.Wc(!1)
                },
                fk: function(d) {
                    function a() {
                        2 === ++b && (Z = !1, Na.sb = qc, Na.Da = pc, Na.la = ua, Na.za = wa, Na.oa = xa, Fa.Fe(), J.ha(Ka), r(), d && d())
                    }
                    var b = 0;
                    ya === sa.Ab ? ya = sa.va : ya === sa.Bb && (ya = sa.V);
                    J.ub(ya === sa.V ? 0 : 1);
                    Qa.replace(nc, a);
                    Qa.re(oc, a);
                    Fa.ye();
                    J.Wc(!0)
                },
                Sg: function() {
                    var d = Math.tan(Vb / 2);
                    J.oe({
                        Gd: g.Gd / d,
                        ik: d,
                        Yj: Mb,
                        ta: g.ta,
                        Hc: g.Hc,
                        dh: W,
                        hh: g.kl,
                        Rb: g.Rb,
                        Rd: g.Rd,
                        Pd: g.Pd,
                        Qd: g.Qd,
                        la: g.la,
                        ld: g.ld,
                        vd: g.vd,
                        ke: g.ke,
                        xb: g.xb,
                        Gk: g.Mg,
                        Hk: g.Ng,
                        Vc: g.Vc,
                        yb: g.yb,
                        pc: g.pc,
                        zd: g.zd,
                        yd: g.yd,
                        xd: g.xd,
                        pd: g.pd,
                        od: g.T + g.od,
                        za: g.za,
                        oa: g.oa,
                        Nd: g.Nd,
                        Le: g.Le,
                        Ke: g.Ke,
                        $c: g.$c,
                        rl: g.ql,
                        ol: Zb,
                        Fc: g.Fc,
                        Ej: ja,
                        Ec: g.Ec,
                        ee: g.ee,
                        ce: g.ce,
                        Dj: ta,
                        Ae: g.Ae
                    })
                },
                ai: function() {
                    var d = Ga.ed,
                        a = Ga.dd,
                        b = 1 / Math.tan(Vb / 2),
                        n = Ha.S() / Ha.H();
                    Mb = [b, 0, 0, 0, 0, b / n, 0, 0, 0, 0, -(a + d) / (a - d), -1, 0, 0, -2 * d * a / (a - d), 0];
                    Zb = 1 / Math.tan(g.nl * Math.PI / 360) / b
                },
                ve: function(d, a) {
                    A = [.5, .5];
                    d = a / d;
                    a = Ha.S() / Ha.H();
                    90 === Math.abs(Ga.rotate) && (d = 1 / d);
                    d > a ? A[1] *= a / d : A[0] *= d / a;
                    za[0] = 0;
                    za[1] = 0;
                    za[2] = 0;
                    za[3] = 0;
                    switch (Ga.rotate) {
                        case 0:
                            za[0] = A[0];
                            za[3] = A[1];
                            break;
                        case 180:
                            za[0] = -A[0];
                            za[3] = -A[1];
                            break;
                        case 90:
                            za[1] = A[0];
                            za[2] = -A[1];
                            break;
                        case -90:
                            za[1] = -A[0], za[2] = A[1]
                    }
                    d = 1 < d ? Ga.gh : Ga.FOVdesktop;
                    d *= Math.PI / 180;
                    Vb = 2 * Math.atan(2 * A[0] * Math.tan(d / 2));
                    Fa.ai()
                },
                ze: function() {
                    H.g("s100", [{
                        type: "1i",
                        name: "u0",
                        value: 0
                    }, {
                        type: "mat2",
                        name: "u149",
                        value: za
                    }])
                },
                Sb: function(d, a) {
                    U || Fa.Ff();
                    Fa.nj(d, a);
                    Fa.i();
                    if (!Fa.lj()) return m.wa && m.wa("GL_INCOMPATIBLE", "Cannot init JEEFITAPI"), !1;
                    Fa.Df();
                    return !0
                },
                nj: function(d, a) {
                    m.Za = document.createElement("canvas");
                    m.Ya = document.createElement("canvas");
                    m.Ya.width = g.width;
                    m.Ya.height = g.height;
                    m.jh = m.Ya.getContext("2d");
                    m.replace_video = function(d) {
                        Wa = d;
                        Nb.ga_ = Wa;
                        return !0
                    };
                    m.Gb = m.Za.getContext("2d");
                    m.capture_background = function(b, n) {
                        b = "undefined" === typeof b ? d : b;
                        n = "undefined" === typeof n ? a : n;
                        m.Za.width = b;
                        m.Za.height = n;
                        var c = b / n,
                            D = 0,
                            z = 0;
                        if (d / a > c) {
                            var e = a * c;
                            c = a;
                            D = Math.round((d - e) / 2)
                        } else e = d, c = d / c, z = Math.round((a - c) / 2);
                        m.Gb.save();
                        m.Gb.translate(b, 0);
                        m.Gb.scale(-1, 1);
                        m.Gb.drawImage(Wa, D, z, e, c, 0, 0, b, n);
                        m.Gb.restore();
                        b = document.createElement("canvas");
                        b.width = m.Za.width;
                        b.height = m.Za.height;
                        b.getContext("2d").drawImage(m.Za, 0, 0);
                        return b
                    }
                },
                Df: function() {
                    window.CanvasListeners && (nb.init({
                        ba: Ha.Qa()
                    }), m.init_listeners = Fa.Df, m.add_listener = nb.add_listener, m.remove_listener = nb.remove_listener, m.animate_swipe = nb.animate_swipe, m.switch_modeInteractor = nb.switch_mode, m.get_modeInteractor = nb.get_mode, nb.add_listener("move", function(d, a) {
                        ya === sa.V && (g.Fj && (da.offsetX -= a[0] * g.Qf, da.offsetX = Math.min(Math.max(da.offsetX, -g.Gc), g.Gc)), da.offsetY -= a[1] * g.Qf, da.offsetY = Math.min(Math.max(da.offsetY, -g.Gc), g.Gc), Fa.Xc())
                    }, !0).add_listener("pinch", function(d, a) {
                        ya === sa.V && (da.scale += a * g.Gj, da.scale = Math.min(Math.max(da.scale, g.Rf[0]), g.Rf[1]), Fa.Yc())
                    }, !0))
                },
                lj: function() {
                    return L.i({
                        Bc: !1,
                        Zh: !1,
                        expand: !1,
                        ba: Ha.Qa(),
                        Ra: Ha,
                        onload: function() {
                            S = Ba.a({
                                Ma: g.T + La.il,
                                ab: g.T + La.jl,
                                $a: La.ah,
                                bb: La.bh
                            });
                            g.lb ? (z = Ba.a({}), ka.Xa.ha(z)) : z = S;
                            J.ha(z);
                            aa = g.lb ? pa.a({
                                Aj: z,
                                yj: S
                            }) : S;
                            Fa.Sg();
                            u.Yb && Fa.Pf(u.Yb);
                            m.load_model = function(d, a, b) {
                                if (m.isBusy) return !1;
                                m.isBusy = !0;
                                if (u.Yb) m.set_model(d, function() {
                                    m.set_materials(a, function() {
                                        m.isBusy = !1;
                                        b && b()
                                    })
                                }, function() {
                                    m.isBusy = !1
                                });
                                else {
                                    var n = g.T + g.Sf + "/",
                                        c = Array(a.length);
                                    a.forEach(function(d, a) {
                                        c[a] = n + d
                                    });
                                    u.Yb = {
                                        url: g.T + g.Wf + "/" + d,
                                        Xb: c,
                                        Jb: !1,
                                        Ib: !1
                                    };
                                    Fa.Pf(u.Yb, function() {
                                        m.isBusy = !1;
                                        b && b()
                                    })
                                }
                                return !0
                            };
                            m.set_offset = function(d) {
                                t = d;
                                Fa.Xc()
                            };
                            m.set_scale = function(d) {
                                ea = d;
                                Fa.Yc()
                            };
                            m.set_rx = function(d) {
                                E = d;
                                Fa.Yg()
                            };
                            m.switch_shadow = J.Qk;
                            m.switch_bgBlur = J.Pk;
                            m.set_zoom = J.uk;
                            m.is_viewer3D = function() {
                                return ya === sa.va
                            };
                            m.switch_viewer3D = function(d, a) {
                                if (ya === sa.Ab || ya === sa.Bb || ya === sa.V && !d || ya === sa.va && d || ia) return !1;
                                if (ya === sa.ra) return V !== sa.va || d ? V === sa.V && d ? (V = sa.va, J.ha(S), J.ub(1), a && a(), !0) : !1 : (V = sa.V, J.ha(z), J.ub(0), a && a(), !0);
                                var b = 0,
                                    n = 0;
                                if (ya === sa.V) {
                                    ya = sa.Ab;
                                    var c = g.pl
                                } else ya === sa.va && (ya = sa.Bb, c = g.sl);
                                var D = Date.now();
                                q = setInterval(function() {
                                    var d = Date.now();
                                    b += (d - D) / c;
                                    1 <= b && (b = 1, ya === sa.Ab ? (ya = sa.va, J.ha(S)) : (ya = sa.V, J.ha(z)), a && a(), clearInterval(q), q = !1);
                                    var e = ya === sa.Bb || ya === sa.V ? 1 - g.ml(b) : g.ll(b);
                                    J.ub(e);
                                    ya !== sa.Bb && ya !== sa.Ab || 0 !== n++ % 2 || (J.ha(aa), aa.Ck(e));
                                    D = d
                                }, .016);
                                return !0
                            };
                            m.capture_image = function(d, a, n, c) {
                                Y = d;
                                ia = !0;
                                "undefined" === typeof isAllocate && (n = !1);
                                (c = "undefined" === typeof c ? !1 : c) && J.Wc(!1);
                                y();
                                fa = function() {
                                    J.qg(0);
                                    b.flush();
                                    var d = Ha.sf(n);
                                    a(d);
                                    c && J.Wc(!0)
                                }
                            };
                            m.capture_detection = function(d, a) {
                                Y = d;
                                ia = !0;
                                fa = function() {
                                    var d = $b.a({
                                        wd: ub.clone(),
                                        Vf: Qa.wf(),
                                        Tf: Qa.uf(),
                                        background: ba.clone(),
                                        Wd: ka.Xa.dj().clone(),
                                        fe: da
                                    });
                                    a(d)
                                }
                            };
                            m.process_offlineRendering = function(d, a, b, n, c) {
                                function D() {
                                    if (2 === ++z) {
                                        ca || (ca = Ba.a({}));
                                        d.tf() && (ca.Gg(d.tf()), g.Ql ? J.ha(S) : J.ha(ca));
                                        Ma.set();
                                        r();
                                        Ma = !1;
                                        Fa.fk(n ? function() {
                                            Ha.Qa().parentNode.removeChild(m.Ya)
                                        } : !1);
                                        var a = Ha.sf(!1);
                                        setTimeout(function() {
                                            c(a)
                                        }, 1)
                                    }
                                }
                                Fa.gk();
                                n && (m.jh.drawImage(Ha.Qa(), 0, 0), Ha.Qa().parentNode.insertBefore(m.Ya, Ha.Qa()), m.Ya.setAttribute("class", "jeefitMask"));
                                Ma = d;
                                var z = 0;
                                m.set_model(a, function() {
                                    D();
                                    m.set_materials(b, function() {
                                        setTimeout(D, 1)
                                    })
                                })
                            };
                            m.serialize_detection = function(d) {
                                return d.$b()
                            };
                            m.unserialize_detection = function(d, a, b) {
                                return $b.fc(d, a, b)
                            };
                            m.do_instantDetection = function(d, a) {
                                ac.i(ub);
                                ac.start(d, a)
                            };
                            m.relieve_DOM = function(d) {
                                if (Pa) return !1;
                                R = 160;
                                P = !1;
                                ma && clearTimeout(ma);
                                ma = setTimeout(function() {
                                    R = g.Hb;
                                    ma = !1;
                                    k()
                                }, d);
                                return !0
                            };
                            m.switch_slow = function(d, a) {
                                if (Pa) return !1;
                                "undefined" === typeof a && (a = g.ji);
                                ma && (R = g.Hb, k(), clearTimeout(ma), ma = !1);
                                d ? P = !1 : k();
                                R = d ? a : g.Hb;
                                return !0
                            };
                            m.switch_deepSleep = function(d) {
                                if (X === d) return !1;
                                X = !1;
                                m.switch_sleep(d);
                                X = d;
                                return !0
                            };
                            m.switch_sleep = function(d) {
                                if (!Pa && !X) {
                                    if (d && ya === sa.ra || !d && ya !== sa.ra) return !1;
                                    q && (clearInterval(q), q = !1);
                                    ya === sa.Bb ? (ya = sa.V, J.ha(z), J.ub(0)) : ya === sa.Ab && (ya = sa.va, J.ha(S), J.ub(1));
                                    f();
                                    d ? (D = !1, V = ya, ya = sa.ra) : (ya = V, r());
                                    return !0
                                }
                            };
                            c();
                            m.Eb.forEach(function(d) {
                                d()
                            });
                            m.Eb.splice(0, m.Eb.length)
                        }
                    })
                },
                Pf: function(d, a) {
                    Qa = Wb.a({
                        Z: function() {
                            c();
                            var d = cb();
                            L.Ee(d);
                            Fa.Fe();
                            J.Nk();
                            m.set_model = function(d, a, b) {
                                Qa.replace("http" === d.substring(0, 4).toLowerCase() ? d : g.T + g.Wf + "/" + d, a, b)
                            };
                            m.set_tweaker = function(d, a) {
                                function b(d) {
                                    m.Me(d);
                                    a && a()
                                }
                                "string" === typeof d ? l(g.T + g.Tk + "/" + d, b) : b(d)
                            };
                            Lb = !0;
                            m.ready = Lb && Kb;
                            a && a();
                            m.Fb.forEach(function(d) {
                                d()
                            });
                            m.Fb.splice(0, m.Fb.length)
                        },
                        url: d.url,
                        Xb: d.Xb,
                        Jb: d.Jb,
                        Ib: d.Ib
                    });
                    m.Me = function(d) {
                        d && (d.preOffset && (Na.Da = d.preOffset), d.preScale && (Na.sb = d.preScale), d.rx && (Na.Mc = d.rx), d.beginBendZ && (Na.za = d.beginBendZ), d.bendStrength && (Na.oa = d.bendStrength), d.maskBranchStartEnd && (Na.la = d.maskBranchStartEnd), m.ready && Fa.Fe())
                    };
                    m.set_materials = function(d, a) {
                        var b = g.T + g.Sf + "/";
                        d = d.map(function(d) {
                            var a = d;
                            "string" === typeof d && (a = b + d, a = a.replace(/([^:])\/\//, "$1/"));
                            return a
                        });
                        Qa.re(d, a)
                    };
                    J.mh(Qa)
                },
                Rk: function() {
                    g.lb && ka.Xa.se(La)
                }
            };
        return Fa
    }
    var u = {
            cf: !0,
            Ol: !1,
            Pl: !1,
            ii: !1,
            bf: !1,
            Nl: !1,
            Ca: !1,
            Zj: !1,
            Bc: !1,
            $f: !1,
            T: "",
            Jj: "",
            Hh: 700,
            Gh: 200,
            ef: !1,
            cl: !1,
            dl: !1,
            bl: !1,
            oh: 3,
            gb: !1,
            Qe: !0,
            Ma: "images/backgrounds/interior2.jpg",
            ab: "images/backgrounds/interior_light.jpg",
            Jh: [256, 256, 512, 512],
            $a: 2.1,
            bb: 8,
            Ih: [64, 128, 256, 256],
            qj: [60, 96, 160, 250],
            pj: [8, 12, 18, 40],
            rb: 2.2,
            Lc: 1,
            qd: 300,
            Ue: 500,
            rd: 50,
            Sh: 0,
            Th: 0,
            Fl: 45,
            Hl: 1,
            Gl: 1E3,
            Ve: 20,
            tl: 10,
            ul: 10,
            vl: 5,
            Vj: .1,
            hg: 20,
            jg: 100,
            kg: 100,
            Uj: -Math.PI / 3,
            Tj: Math.PI / 3,
            ig: 0,
            Tg: 0,
            zi: [40, 32, 16, 16],
            nh: [0, .87, .92, .9],
            ge: 2,
            Oj: 100,
            Y: !1,
            ph: 16,
            qh: .4,
            sh: [.72, .73, .72, .74],
            Ch: 1.2,
            zh: [.5, .5, .5, 1],
            Eh: 140,
            Dh: 280,
            Fh: 1.2,
            th: 20,
            uh: 40,
            Bh: [6, 9, 9, 12],
            yh: [.03, .02, .02, .018],
            xh: [.35, .35, .4, .5],
            vh: [.2, .2, .2, .2],
            rh: [.1, .15, .15, .15],
            Ah: [200, 200, 150, 120],
            wh: [1, 2, 3, 5],
            Ik: 1.1,
            Dm: [.25, .5, 1, 2],
            Em: 256,
            Cm: 256,
            Bm: 200,
            Jk: [40, 80, 200, 500],
            Kk: [35, 45, 80, 120],
            ci: !0,
            di: "CCW"
        },
        ob = {};
    t.prototype = {
        constructor: t,
        r: 1,
        P: 1,
        F: 1,
        set: function(a) {
            a instanceof t ? this.B(a) : "number" === typeof a ? xa(this, a) : "string" === typeof a && ua(this, a);
            return this
        },
        lk: function() {
            function a(a, b, c) {
                0 > c && (c += 1);
                1 < c && --c;
                return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a
            }
            return function(b, c, r) {
                b = ob.Math.Tl(b, 1);
                c = ob.Math.sd(c, 0, 1);
                r = ob.Math.sd(r, 0, 1);
                0 === c ? this.r = this.P = this.F = r : (c = .5 >= r ? r * (1 + c) : r + c - r * c, r = 2 * r - c, this.r = a(r, c, b + 1 / 3), this.P = a(r, c, b), this.F = a(r, c, b - 1 / 3));
                return this
            }
        }(),
        clone: function() {
            return new this.constructor(this.r, this.P, this.F)
        },
        B: function(a) {
            this.r = a.r;
            this.P = a.P;
            this.F = a.F;
            return this
        },
        add: function(a) {
            this.r += a.r;
            this.P += a.P;
            this.F += a.F;
            return this
        },
        multiply: function(a) {
            this.r *= a.r;
            this.P *= a.P;
            this.F *= a.F;
            return this
        },
        sa: function(a) {
            this.r *= a;
            this.P *= a;
            this.F *= a;
            return this
        },
        Oa: function(a, b) {
            void 0 === b && (b = 0);
            this.r = a[b];
            this.P = a[b + 1];
            this.F = a[b + 2];
            return this
        }
    };
    var pb = {};
    q.prototype = {
        constructor: q,
        get x() {
            return this.m
        },
        set x(a) {
            this.m = a
        },
        get y() {
            return this.o
        },
        set y(a) {
            this.o = a
        },
        get z() {
            return this.s
        },
        set z(a) {
            this.s = a
        },
        get ad() {
            return this.C
        },
        set ad(a) {
            this.C = a
        },
        set: function(a, b, c, r) {
            this.m = a;
            this.o = b;
            this.s = c;
            this.C = r;
            return this
        },
        clone: function() {
            return new this.constructor(this.m, this.o, this.s, this.C)
        },
        B: function(a) {
            this.m = a.x;
            this.o = a.y;
            this.s = a.z;
            this.C = a.ad;
            return this
        },
        inverse: function() {
            this.m *= -1;
            this.o *= -1;
            this.s *= -1;
            this.normalize();
            return this
        },
        qc: function(a) {
            return this.m * a.m + this.o * a.o + this.s * a.s + this.C * a.C
        },
        Vd: function() {
            return this.m * this.m + this.o * this.o + this.s * this.s + this.C * this.C
        },
        length: function() {
            return Math.sqrt(this.m * this.m + this.o * this.o + this.s * this.s + this.C * this.C)
        },
        normalize: function() {
            var a = this.length();
            0 === a ? (this.s = this.o = this.m = 0, this.C = 1) : (a = 1 / a, this.m *= a, this.o *= a, this.s *= a, this.C *= a);
            return this
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), ca(this, a, b)) : ca(this, this, a)
        },
        Og: function(a, b) {
            if (0 === b) return this;
            if (1 === b) return this.B(a);
            var c = this.m,
                e = this.o,
                x = this.s,
                k = this.C,
                f = k * a.C + c * a.m + e * a.o + x * a.s;
            0 > f ? (this.C = -a.C, this.m = -a.m, this.o = -a.o, this.s = -a.s, f = -f) : this.B(a);
            if (1 <= f) return this.C = k, this.m = c, this.o = e, this.s = x, this;
            a = Math.acos(f);
            var y = Math.sqrt(1 - f * f);
            if (.001 > Math.abs(y)) return this.C = .5 * (k + this.C), this.m = .5 * (c + this.m), this.o = .5 * (e + this.o), this.s = .5 * (x + this.s), this;
            f = Math.sin((1 - b) * a) / y;
            b = Math.sin(b * a) / y;
            this.C = k * f + this.C * b;
            this.m = c * f + this.m * b;
            this.o = e * f + this.o * b;
            this.s = x * f + this.s * b;
            return this
        },
        Oa: function(a, b) {
            void 0 === b && (b = 0);
            this.m = a[b];
            this.o = a[b + 1];
            this.s = a[b + 2];
            this.C = a[b + 3];
            return this
        }
    };
    q.Og = function(a, b, c, r) {
        return c.B(a).Og(b, r)
    };
    Y.prototype = {
        constructor: Y,
        get width() {
            return this.x
        },
        set width(a) {
            this.x = a
        },
        get height() {
            return this.y
        },
        set height(a) {
            this.y = a
        },
        set: function(a, b) {
            this.x = a;
            this.y = b;
            return this
        },
        wg: function(a) {
            this.x = a;
            return this
        },
        xg: function(a) {
            this.y = a;
            return this
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        B: function(a) {
            this.x = a.x;
            this.y = a.y;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.jc(a, b);
            this.x += a.x;
            this.y += a.y;
            return this
        },
        jc: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.zb(a, b);
            this.x -= a.x;
            this.y -= a.y;
            return this
        },
        zb: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            return this
        },
        multiply: function(a) {
            this.x *= a.x;
            this.y *= a.y;
            return this
        },
        sa: function(a) {
            isFinite(a) ? (this.x *= a, this.y *= a) : this.y = this.x = 0;
            return this
        },
        Ad: function(a) {
            return this.sa(1 / a)
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            return this
        },
        sd: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            return this
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        },
        qc: function(a) {
            return this.x * a.x + this.y * a.y
        },
        Vd: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        normalize: function() {
            return this.Ad(this.length())
        },
        Oa: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            return this
        }
    };
    V.prototype = {
        constructor: V,
        set: function(a, b, c) {
            this.x = a;
            this.y = b;
            this.z = c;
            return this
        },
        wg: function(a) {
            this.x = a;
            return this
        },
        xg: function(a) {
            this.y = a;
            return this
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        B: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            return this
        },
        add: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.jc(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this
        },
        jc: function(a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this
        },
        sub: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.zb(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this
        },
        zb: function(a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            return this
        },
        multiply: function(a, b) {
            if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.x = a.x * b.x, this.y = a.y * b.y, this.z = a.z * b.z, this;
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
            return this
        },
        sa: function(a) {
            isFinite(a) ? (this.x *= a, this.y *= a, this.z *= a) : this.z = this.y = this.x = 0;
            return this
        },
        Ad: function(a) {
            return this.sa(1 / a)
        },
        min: function(a) {
            this.x = Math.min(this.x, a.x);
            this.y = Math.min(this.y, a.y);
            this.z = Math.min(this.z, a.z);
            return this
        },
        max: function(a) {
            this.x = Math.max(this.x, a.x);
            this.y = Math.max(this.y, a.y);
            this.z = Math.max(this.z, a.z);
            return this
        },
        sd: function(a, b) {
            this.x = Math.max(a.x, Math.min(b.x, this.x));
            this.y = Math.max(a.y, Math.min(b.y, this.y));
            this.z = Math.max(a.z, Math.min(b.z, this.z));
            return this
        },
        floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            return this
        },
        ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            return this
        },
        round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            return this
        },
        qc: function(a) {
            return this.x * a.x + this.y * a.y + this.z * a.z
        },
        Vd: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        normalize: function() {
            return this.Ad(this.length())
        },
        Oa: function(a, b) {
            void 0 === b && (b = 0);
            this.x = a[b];
            this.y = a[b + 1];
            this.z = a[b + 2];
            return this
        }
    };
    E.yl = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
    E.fh = "XYZ";
    E.prototype = {
        constructor: E,
        get x() {
            return this.m
        },
        set x(a) {
            this.m = a
        },
        get y() {
            return this.o
        },
        set y(a) {
            this.o = a
        },
        get z() {
            return this.s
        },
        set z(a) {
            this.s = a
        },
        get order() {
            return this.Ha
        },
        set order(a) {
            this.Ha = a
        },
        set: function(a, b, c, r) {
            this.m = a;
            this.o = b;
            this.s = c;
            this.Ha = r || this.Ha;
            return this
        },
        clone: function() {
            return new this.constructor(this.m, this.o, this.s, this.Ha)
        },
        B: function(a) {
            this.m = a.m;
            this.o = a.o;
            this.s = a.s;
            this.Ha = a.Ha;
            return this
        },
        Oa: function(a) {
            this.m = a[0];
            this.o = a[1];
            this.s = a[2];
            void 0 !== a[3] && (this.Ha = a[3]);
            return this
        }
    };
    Z.prototype = {
        constructor: Z,
        set: function(a, b) {
            this.min.B(a);
            this.max.B(b);
            return this
        },
        clone: function() {
            return (new this.constructor).B(this)
        },
        B: function(a) {
            this.min.B(a.min);
            this.max.B(a.max);
            return this
        },
        empty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        size: function(a) {
            return (a || new V).zb(this.max, this.min)
        },
        getParameter: function(a, b) {
            return (b || new V).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
        },
        translate: function(a) {
            this.min.add(a);
            this.max.add(a);
            return this
        }
    };
    Ca.prototype = {
        constructor: Ca,
        set: function(a, b, c, r, f, k, g, y, Q, F, T, h, I, l, ra, la) {
            var e = this.elements;
            e[0] = a;
            e[4] = b;
            e[8] = c;
            e[12] = r;
            e[1] = f;
            e[5] = k;
            e[9] = g;
            e[13] = y;
            e[2] = Q;
            e[6] = F;
            e[10] = T;
            e[14] = h;
            e[3] = I;
            e[7] = l;
            e[11] = ra;
            e[15] = la;
            return this
        },
        clone: function() {
            return (new Ca).Oa(this.elements)
        },
        B: function(a) {
            this.elements.set(a.elements);
            return this
        },
        multiply: function(a, b) {
            return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), Ya(this, a, b)) : Ya(this, this, a)
        },
        sa: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[4] *= a;
            b[8] *= a;
            b[12] *= a;
            b[1] *= a;
            b[5] *= a;
            b[9] *= a;
            b[13] *= a;
            b[2] *= a;
            b[6] *= a;
            b[10] *= a;
            b[14] *= a;
            b[3] *= a;
            b[7] *= a;
            b[11] *= a;
            b[15] *= a;
            return this
        },
        setPosition: function(b) {
            var a = this.elements;
            a[12] = b.x;
            a[13] = b.y;
            a[14] = b.z;
            return this
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        scale: function(b) {
            var a = this.elements,
                c = b.x,
                r = b.y;
            b = b.z;
            a[0] *= c;
            a[4] *= r;
            a[8] *= b;
            a[1] *= c;
            a[5] *= r;
            a[9] *= b;
            a[2] *= c;
            a[6] *= r;
            a[10] *= b;
            a[3] *= c;
            a[7] *= r;
            a[11] *= b;
            return this
        },
        Oa: function(b) {
            this.elements.set(b);
            return this
        }
    };
    Sa.prototype = {
        constructor: Sa,
        clone: function() {
            return (new this.constructor).B(this)
        },
        B: function(b) {
            this.xa = b.xa;
            this.F = b.F;
            this.Aa = b.Aa;
            this.qb.B(b.qb);
            this.color.B(b.color);
            this.mb = b.mb;
            for (var a = 0, c = b.Zc.length; a < c; a++) this.Zc[a] = b.Zc[a].clone();
            a = 0;
            for (c = b.He.length; a < c; a++) this.He[a] = b.He[a].clone();
            return this
        }
    };
    var f = function() {
            function a(a, c) {
                a = b.createShader(a);
                b.shaderSource(a, c);
                b.compileShader(a);
                return b.getShaderParameter(a, b.COMPILE_STATUS) ? a : !1
            }

            function c(c) {
                L.N() && (c.c = c.c.replace(/gl_FragData\[([0-3])\]/g, "gbuf$1"));
                c.Je = a(b.VERTEX_SHADER, c.l, c.name + " VERTEX");
                c.Id = a(b.FRAGMENT_SHADER, c.c, c.name + " FRAGMENT");
                var e = b.createProgram();
                b.attachShader(e, c.Je);
                b.attachShader(e, c.Id);
                b.linkProgram(e);
                return e
            }

            function w(b) {
                b.l = "#version 300 es\n" + b.l.replace(/varying/g, "out");
                b.c = "#version 300 es\n" + b.c.replace(/varying/g, "in");
                b.l = b.l.replace(/texture2D\(/g, "texture(");
                b.c = b.c.replace(/texture2D\(/g, "texture(");
                b.$ || (b.c = b.c.replace(/void main/g, "out vec4 FragColor;\nvoid main"), b.c = b.c.replace(/gl_FragColor/g, "FragColor"));
                var a = 0,
                    c = [];
                b.l = b.l.replace(/attribute ([a-z]+[0-4]*) ([_a-zA-Z,0-9\s]+);/g, function(b, e, k) {
                    var A = "";
                    k.split(",").forEach(function(b) {
                        b = b.trim();
                        A += "layout(location = " + a + ") in " + e + " " + b + ";\n";
                        c.push(b);
                        ++a
                    });
                    return A
                });
                b.kh = c
            }

            function r(a) {
                if (a.Ud) return !1;
                u.hm || I || b.enableVertexAttribArray(0);
                void 0 === a.$ && (a.$ = !1);
                a.$ && (a.Hd = l, a.ic = la, a.om = ra);
                a.id = C++;
                void 0 === a.ic && (a.ic = 2);
                void 0 === a.Hd && (a.Hd = "");
                void 0 === a.$g && (a.$g = "");
                void 0 === a.precision && (a.precision = "highp");
                "none" !== a.precision && (a.c = "precision " + a.precision + " float;\n" + a.c);
                a.c = a.Hd + a.c;
                void 0 === a.l && (a.l = "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}");
                a.l = a.$g + a.l;
                I && 3 <= a.ic && w(a);
                a.ua && a.ua.forEach(function(b) {
                    a.l = a.l.replace(b.search, b.replace);
                    a.c = a.c.replace(b.search, b.replace)
                });
                a.pa = c(a);
                a.w = {};
                a.f.forEach(function(c) {
                    a.w[c] = b.getUniformLocation(a.pa, c)
                });
                a.attributes = {};
                a.na = [];
                a.Ge = 0;
                void 0 === a.D && (a.D = ["a0"]);
                void 0 === a.L && (a.L = [2]);
                a.D.forEach(function(c, e) {
                    var k = I && 3 <= a.ic ? a.kh.indexOf(c) : b.getAttribLocation(a.pa, c);
                    a.attributes[c] = k;
                    a.na.push(k);
                    a.Ge += 4 * a.L[e]
                });
                a.set = function() {
                    ha !== a.id && (-1 !== ha && B.K(), ha = a.id, B = a, b.useProgram(a.pa), a.na.forEach(function(a) {
                        0 !== a && b.enableVertexAttribArray(a)
                    }))
                };
                a.K = function() {
                    ha = -1;
                    a.na.forEach(function(a) {
                        0 !== a && b.disableVertexAttribArray(a)
                    })
                };
                a.Ud = !0
            }

            function f() {
                N.g("s32", [{
                    type: "1i",
                    name: "u0",
                    value: 0
                }]);
                N.g("s33", [{
                    type: "1i",
                    name: "u86",
                    value: 0
                }]);
                N.g("s34", [{
                    type: "1i",
                    name: "u2",
                    value: 0
                }])
            }

            function k() {
                var a = "u25 u75 u76 u77 u78 u79 u6".split(" ").concat(T, h);
                A.s35 = {
                    name: "_",
                    c: "varying vec3 vv0;varying float vv1;void main(){gl_FragColor=vec4(vv0,vv1);}",
                    l: "attribute vec3 a0;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u82,u83,u77,u78,u85;varying vec3 vv0;varying float vv1;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 w=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 v(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*m;vec2 t=mix(c.a*u79,e,f),d=(2.*c.gb-e)*(1.-f);d.x*=-1.;vec3 g=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 r=v(g);vec3 q=mix(u75,u11,a);float n=mix(u76,u14,u13);vec3 l=mix(u6,u12,a);float k=mix(u9,1.,u13);vec2 i=u8/t;vec3 h=a0;float s=max(0.,-a0.z-u77)*u78;h.x+=s*sign(a0.x)*(1.-u13);vec3 b=r*(h+q)*n+l;b.x+=u5*sin(g.y);vec2 j=i*k;vec3 u=vec3(d*j,-i)+b*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(u,1.)),vv0=b,vv1=smoothstep(u82,u83,a0.z);}",
                    f: ["u82", "u83"].concat(a),
                    D: ["a0"],
                    precision: "highp"
                };
                A.s36 = {
                    name: "_",
                    c: "uniform sampler2D u0;uniform vec3 u80;uniform float u1;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);vec3 b=mix(u80,a.rgb,a.a);vec4 c=vec4(mix(a.rgb*u80,b,u1),a.a);gl_FragColor=c;}",
                    l: "attribute vec3 a0;attribute vec2 a1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u77,u78,u85;varying vec2 vv0;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 v=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 u(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*m;vec2 s=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 r=u(d);vec3 q=mix(u75,u11,a);float p=mix(u76,u14,u13);vec3 n=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 g=u8/s;vec3 i=a0;float t=max(0.,-a0.z-u77)*u78;i.x+=t*sign(a0.x)*(1.-u13);vec3 h=r*(i+q)*p+n;h.x+=u5*sin(d.y);vec2 j=g*l;vec3 k=vec3(c*j,-g)+h*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.)),vv0=a1;}",
                    f: ["u80"].concat(Q, a),
                    D: ["a0", "a1"],
                    L: [3, 2],
                    precision: "lowp"
                };
                A.s37 = {
                    name: "_",
                    c: "uniform vec3 u80;void main(){gl_FragColor=vec4(u80,0.);}",
                    l: "attribute vec3 a0;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u77,u78,u85;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 u=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 t(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*m;vec2 r=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 q=t(d);vec3 p=mix(u75,u11,a);float o=mix(u76,u14,u13);vec3 n=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 g=u8/r;vec3 i=a0;float s=max(0.,-a0.z-u77)*u78;i.x+=s*sign(a0.x)*(1.-u13);vec3 h=q*(i+p)*o+n;h.x+=u5*sin(d.y);vec2 j=g*l;vec3 k=vec3(c*j,-g)+h*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.));}",
                    f: ["u80"].concat(a),
                    L: [3],
                    precision: "lowp"
                };
                A.s38 = {
                    name: "_",
                    c: "uniform vec4 u17;varying vec3 vv0;varying float vv1;void main(){float a=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv1);gl_FragColor=vec4(normalize(vv0),a);}",
                    l: "attribute vec3 a0,a2;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u77,u78,u85;varying vec3 vv0;varying float vv1;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 w=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 v(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 t=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 g=v(d);vec3 r=mix(u75,u11,a);float o=mix(u76,u14,u13);vec3 m=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 h=u8/t;vec3 i=a0;float s=max(0.,-a0.z-u77)*u78;i.x+=s*sign(a0.x)*(1.-u13);vec3 j=g*(i+r)*o+m;j.x+=u5*sin(d.y);vec2 u=h*l;vec3 k=vec3(c*u,-h)+j*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.)),vv0=g*a2*vec3(1.,-1.,-1.),vv1=a0.y;}",
                    f: ["u17", "u6"].concat(a),
                    D: ["a0", "a2"],
                    precision: "highp"
                };
                A.s39 = {
                    name: "_",
                    c: "uniform sampler2D u86;uniform vec4 u17;varying vec4 vv0;varying vec3 vv1;varying vec2 vv2;varying float vv3;const vec3 j=vec3(1.,1.,1.);void main(){vec3 k=vec3(0.,0.,-1.),c=normalize(vv1),b=texture2D(u86,vv2).xyz;b=normalize(b*255./127.-1.007874*j);vec3 d=vv0.xyz,l=cross(c,d)*vv0.w;mat3 m=mat3(d,l,c);vec3 a=m*b;a=dot(a,k)>0.?vv1:a;float g=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv3);gl_FragColor=vec4(a,g);}",
                    l: "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u77,u78,u85;varying vec4 vv0;varying vec3 vv1;varying vec2 vv2;varying float vv3;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 x(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 v=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 g=x(d);vec3 t=mix(u75,u11,a);float o=mix(u76,u14,u13);vec3 m=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 h=u8/v;vec3 i=a0;float u=max(0.,-a0.z-u77)*u78;i.x+=u*sign(a0.x)*(1.-u13);vec3 j=g*(i+t)*o+m;j.x+=u5*sin(d.y);vec2 w=h*l;vec3 k=vec3(c*w,-h)+j*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.)),vv1=g*a2*vec3(1.,-1.,-1.),vv0=a3,vv2=a1,vv3=a0.y;}",
                    f: ["u17", "u6", "u86"].concat(a),
                    D: ["a3", "a0", "a2", "a1"],
                    L: [4, 3, 3, 2],
                    precision: "highp"
                };
                A.s40 = {
                    name: "_",
                    c: "uniform vec4 u44;uniform float u81;void main(){float b=u81;vec4 a=u44;float c=floor(15.99*b),d=floor(15.99*a.b);a.b=(c+16.*d)/255.,gl_FragColor=a;}",
                    l: "attribute vec3 a0;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u77,u78,u85;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 u=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 t(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*m;vec2 r=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 q=t(d);vec3 p=mix(u75,u11,a);float o=mix(u76,u14,u13);vec3 n=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 g=u8/r;vec3 i=a0;float s=max(0.,-a0.z-u77)*u78;i.x+=s*sign(a0.x)*(1.-u13);vec3 h=q*(i+p)*o+n;h.x+=u5*sin(d.y);vec2 j=g*l;vec3 k=vec3(c*j,-g)+h*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.));}",
                    f: ["u44", "u81"].concat(a),
                    precision: "lowp"
                };
                A.s41 = {
                    name: "_",
                    c: "uniform sampler2D u2;uniform vec4 u44,u3;uniform float u81;varying vec2 vv0;vec2 i(float d,float e){float g=floor(d*255.+.01),a=pow(2.,e),h=256./a,b=g/a,c=floor(b),f=(b-c)*a;return vec2(c/(h-1.),f/(a-1.));}void main(){float c=u81;vec4 b=u44,d=texture2D(u2,vv0);vec2 a=i(d.b,4.);float f=1.-a.x,g=a.y;a=i(d.a,1.);float l=a.x,e=a.y;vec4 m=vec4(d.rg,g,l);float n=f;b=mix(b,m,u3*e),c=mix(c,n,u3.b*e);float k=floor(15.99*c),h=floor(15.99*b.b);b.b=(k+16.*h)/255.,gl_FragColor=b;}",
                    l: "attribute vec3 a0;attribute vec2 a1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u77,u78,u85;varying vec2 vv0;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 v=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 u(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*m;vec2 s=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 r=u(d);vec3 q=mix(u75,u11,a);float p=mix(u76,u14,u13);vec3 n=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 g=u8/s;vec3 i=a0;float t=max(0.,-a0.z-u77)*u78;i.x+=t*sign(a0.x)*(1.-u13);vec3 h=r*(i+q)*p+n;h.x+=u5*sin(d.y);vec2 j=g*l;vec3 k=vec3(c*j,-g)+h*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.)),vv0=a1;}",
                    f: ["u44", "u81"].concat(F, a),
                    D: ["a0", "a1"],
                    L: [3, 2],
                    precision: "lowp"
                };
                a = ["u68", "u56", "u69"];
                A.s42 = {
                    name: "_",
                    c: "varying vec3 vv0;varying float vv1;void main(){gl_FragColor=vec4(vv0,vv1);}",
                    l: "attribute vec3 a0;uniform mat4 u68,u56,u69;varying vec3 vv0;varying float vv1;void main(){vec4 a=u69*vec4(a0,1.);gl_Position=u68*u56*a,vv0=a.xyz,vv1=1.;}",
                    f: a,
                    precision: "highp"
                };
                A.s43 = {
                    name: "_",
                    c: "varying vec3 vv0;void main(){gl_FragColor=vec4(normalize(vv0),1.);}",
                    l: "attribute vec3 a0,a2;uniform mat4 u68,u56,u69;varying vec3 vv0;varying float vv1;void main(){vec4 a=u69*vec4(a2,0.);gl_Position=u68*u56*u69*vec4(a0,1.),vv0=a.xyz,vv1=a0.y;}",
                    f: a,
                    D: ["a0", "a2"],
                    precision: "highp"
                };
                A.s33 = {
                    name: "_",
                    c: "uniform sampler2D u86;uniform vec3 u87;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;const vec3 j=vec3(1.,1.,1.);void main(){vec3 k=normalize(vv1+u87),c=normalize(vv2),b=texture2D(u86,vv3).xyz;b=normalize(b*255./127.-1.007874*j);vec3 d=vv0.xyz,l=cross(c,d)*vv0.w;mat3 g=mat3(d,l,c);vec3 a=g*b;a=dot(a,k)>0.?vv2:a,gl_FragColor=vec4(a,1.);}",
                    l: "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u68,u56,u69;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;void main(){vec4 b=u69*vec4(a2,0.),a=u69*vec4(a0,1.);gl_Position=u68*u56*a,vv0=a3,vv2=b.xyz,vv3=a1,vv1=a.xyz;}",
                    f: ["u86", "u87"].concat(a),
                    D: ["a0", "a2", "a1", "a3"],
                    precision: "highp"
                };
                A.s32 = {
                    name: "_",
                    c: "uniform sampler2D u0;uniform vec3 u80;uniform float u1;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);vec3 b=mix(u80,a.rgb,a.a);vec4 c=vec4(mix(a.rgb*u80,b,u1),a.a);gl_FragColor=c;}",
                    l: "attribute vec3 a0;attribute vec2 a1;uniform mat4 u68,u56,u69;varying vec2 vv0;const vec4 f=vec4(0.,0.,5e-4,0.);void main(){gl_Position=u68*u56*u69*vec4(a0,1.)+f,vv0=a1;}",
                    f: ["u80"].concat(Q, a),
                    D: ["a0", "a1"],
                    ua: [{
                        search: "0.0005",
                        replace: wa.U() ? "0.0005" : "0.0"
                    }],
                    precision: "lowp"
                };
                A.s44 = {
                    name: "_",
                    c: "uniform vec4 u44;uniform float u81;void main(){float b=u81;vec4 a=u44;float c=floor(15.99*b),d=floor(15.99*a.b);a.b=(c+16.*d)/255.,gl_FragColor=a;}",
                    l: "attribute vec3 a0;uniform mat4 u68,u56,u69;void main(){gl_Position=u68*u56*u69*vec4(a0,1.);}",
                    f: ["u44"].concat(a),
                    precision: "highp"
                };
                A.s34 = {
                    name: "_",
                    c: "uniform sampler2D u2;uniform vec4 u44,u3;uniform float u81;varying vec2 vv0;vec2 i(float d,float e){float g=floor(d*255.+.01),a=pow(2.,e),h=256./a,b=g/a,c=floor(b),f=(b-c)*a;return vec2(c/(h-1.),f/(a-1.));}void main(){float c=u81;vec4 b=u44,d=texture2D(u2,vv0);vec2 a=i(d.b,4.);float f=1.-a.x,g=a.y;a=i(d.a,1.);float l=a.x,e=a.y;vec4 m=vec4(d.rg,g,l);float n=f;b=mix(b,m,u3*e),c=mix(c,n,u3.b*e);float k=floor(15.99*c),h=floor(15.99*b.b);b.b=(k+16.*h)/255.,gl_FragColor=b;}",
                    l: "attribute vec3 a0;attribute vec2 a1;uniform mat4 u68,u56,u69;varying vec2 vv0;void main(){gl_Position=u68*u56*u69*vec4(a0,1.),vv0=a1;}",
                    f: ["u44"].concat(F, a),
                    D: ["a0", "a1"],
                    L: [3, 2],
                    precision: "highp"
                }
            }

            function g() {
                for (var a in A) r(A[a])
            }
            var y = !1,
                Q = ["u0", "u1"],
                F = ["u2", "u3"],
                T = "u4 u5 u6 u7 u8 u9".split(" "),
                h = "u10 u11 u12 u13 u14 u15".split(" "),
                I = !1,
                l, ra, la, ha = -1,
                B = !1,
                C = 0,
                A = {},
                N = {
                    Ii: function() {
                        return L.N() ? "precision highp float;\n                        layout(location = 0) out vec4 gbuf0;\n                        layout(location = 1) out vec4 gbuf1;\n                        layout(location = 2) out vec4 gbuf2;\n                        layout(location = 3) out vec4 gbuf3;\n" : "#extension GL_EXT_draw_buffers : require\n"
                    },
                    ea: function(a, b) {
                        A[a] = b;
                        y && r(A[a])
                    },
                    sm: function(a, b) {
                        A[a] = b;
                        b.Ud = !1;
                        r(A[a])
                    },
                    Dc: function() {
                        return y
                    },
                    i: function() {
                        I = L.N();
                        l = N.Ii();
                        ra = I ? "none" : "highp";
                        la = I ? 3 : 2;
                        A.s0 = {
                            name: "_",
                            c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                            f: ["u0"],
                            precision: "highp"
                        };
                        A.s1 = {
                            name: "_",
                            c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                            f: ["u0"],
                            precision: "lowp"
                        };
                        A.s2 = {
                            name: "_",
                            c: "uniform sampler2D u0,u16;uniform float u17;varying vec2 vv0;const vec3 f=vec3(1.,1.,1.);void main(){gl_FragColor=vec4(mix(texture2D(u16,vv0).rgb,texture2D(u0,vv0).rgb,u17*f),1.);}",
                            f: ["u0", "u16", "u17"],
                            precision: "highp"
                        };
                        A.s3 = {
                            name: "_",
                            c: "uniform sampler2D u0,u16;uniform float u17;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){gl_FragColor=mix(texture2D(u16,vv0),texture2D(u0,vv0),u17*f);}",
                            f: ["u0", "u16", "u17"],
                            precision: "highp"
                        };
                        A.s4 = {
                            name: "_",
                            c: "uniform sampler2D u0,u18;uniform vec2 u19;uniform float u20,u21;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 b=texture2D(u18,vv0*u19),c=texture2D(u0,vv0*u19);float a=smoothstep(u20,0.,vv0.y);a+=smoothstep(1.-u20,1.,vv0.y),gl_FragColor=pow(mix(c,b,a*f),u21*f);}",
                            f: ["u0", "u19", "u18", "u20", "u21"]
                        };
                        A.s5 = {
                            name: "_",
                            c: "uniform sampler2D u0,u18;uniform vec2 u19;uniform float u20,u21;varying vec2 vv0;const vec3 g=vec3(1.,1.,1.);vec4 h(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),f=exp2(c);vec3 i=clamp(b/f,0.,1.);return vec4(i,(c+128.)/256.);}void main(){vec3 b=texture2D(u18,vv0*u19).rgb,c=texture2D(u0,vv0*u19).rgb;float a=smoothstep(u20,0.,vv0.y);a+=smoothstep(1.-u20,1.,vv0.y);vec3 d=mix(c,b,a*g);vec4 f=h(pow(d,u21*g));gl_FragColor=f;}",
                            f: ["u0", "u19", "u18", "u20", "u21"],
                            precision: "highp"
                        };
                        A.s6 = {
                            name: "_",
                            c: "uniform sampler2D u0;varying vec2 vv0;const vec3 f=vec3(1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);if(a.a<.5)discard;gl_FragColor=a;}",
                            f: ["u0"],
                            precision: "lowp"
                        };
                        A.s7 = {
                            name: "_",
                            c: "uniform sampler2D u0,u23;uniform vec2 u24;varying vec2 vv0;const vec2 g=vec2(-.9,.4),h=vec2(.4,.9),i=vec2(-.4,-.9),e=vec2(.9,-.4);void main(){vec2 a=vv0;vec3 b=texture2D(u0,a).rgb+texture2D(u0,a+u24*g).rgb+texture2D(u0,a+u24*h).rgb+texture2D(u0,a+u24*i).rgb+texture2D(u0,a+u24*e).rgb;gl_FragColor=vec4(b/5.,1.);}",
                            f: ["u0", "u24"],
                            precision: "lowp"
                        };
                        A.s8 = {
                            name: "_",
                            c: "uniform sampler2D u0,u23,u25;uniform vec2 u24,u26;varying vec2 vv0;const vec3 k=vec3(1.,1.,1.);const vec2 g=vec2(-.9,.4),h=vec2(.4,.9),i=vec2(-.4,-.9),j=vec2(.9,-.4);void main(){vec2 a=vv0;vec3 b=texture2D(u0,a).rgb+texture2D(u0,a+u24*g).rgb+texture2D(u0,a+u24*h).rgb+texture2D(u0,a+u24*i).rgb+texture2D(u0,a+u24*j).rgb;float c=texture2D(u25,vec2(.75,.5)).a,d=u26.x+pow(c,2.)*(u26.y-u26.x);vec3 e=mix(b/5.,texture2D(u23,a).rgb,d);gl_FragColor=vec4(e,1.);}",
                            f: ["u0", "u23", "u24", "u25", "u26"],
                            precision: "lowp"
                        };
                        A.s9 = {
                            name: "_",
                            c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;const vec3 f=vec3(.299,.587,.114);const float s=.007813,m=.125,h=8.;void main(){vec2 x=vv0;vec3 n=texture2D(u0,vv0+vec2(-1.,-1.)*u24).xyz,o=texture2D(u0,vv0+vec2(1.,-1.)*u24).xyz,p=texture2D(u0,vv0+vec2(-1.,1.)*u24).xyz,q=texture2D(u0,vv0+vec2(1.,1.)*u24).xyz,r=texture2D(u0,vv0).xyz;float c=dot(n,f),e=dot(o,f),g=dot(p,f),b=dot(q,f),k=dot(r,f),t=min(k,min(min(c,e),min(g,b))),u=max(k,max(max(c,e),max(g,b)));vec2 a;a.x=-(c+e-(g+b)),a.y=c+g-(e+b);float v=max((c+e+g+b)*(.25*m),s),w=1./(min(abs(a.x),abs(a.y))+v);a=min(vec2(h,h),max(vec2(-h,-h),a*w))*u24;vec3 j=.5*(texture2D(u0,vv0+a*-.166667).rgb+texture2D(u0,vv0+a*.166667).rgb),l=j*.5+.25*(texture2D(u0,vv0+a*-.5).rgb+texture2D(u0,vv0+a*.5).rgb);float i=dot(l,f);gl_FragColor=i<t||i>u?vec4(j,1.):vec4(l,1.);}",
                            f: ["u0", "u24"],
                            precision: "lowp"
                        };
                        A.s10 = {
                            name: "_",
                            c: "uniform sampler2D u0;varying vec2 vv0;const vec3 g=vec3(0.,0.,0.);vec4 h(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),i=exp2(c);vec3 e=clamp(b/i,0.,1.);return vec4(e,(c+128.)/256.);}void main(){vec3 a=texture2D(u0,vv0).rgb;gl_FragColor=h(max(a,g));}",
                            f: ["u0"],
                            precision: "highp"
                        };
                        A.s11 = {
                            name: "_",
                            c: "uniform sampler2D u27,u28;uniform float u29,u30;varying vec2 vv0;void main(){vec3 a=texture2D(u28,vv0).rgb,b=texture2D(u27,vv0).rgb;gl_FragColor=vec4(b*u30+u29*a,1.);}",
                            f: ["u27", "u28", "u29", "u30"],
                            precision: "highp"
                        };
                        A.s12 = {
                            name: "_",
                            c: "uniform sampler2D u31,u32;uniform float u21;varying vec2 vv0;const int j=8888;const float e=3.141592;const vec2 k=vec2(0.,0.);const vec3 n=vec3(1.,1.,1.),o=vec3(0.,0.,0.);void main(){float p=e*(vv0.x*2.-1.),q=e/2.*(vv0.y*2.-1.),c,d,r,l,m;vec4 h;vec3 g=o;vec2 f=k,a=k;for(int b=0;b<j;b+=1)a.x=float(b),a.y=floor(a.x/64.),h=texture2D(u32,a/64.),c=e*h.r,d=2.*asin(sqrt(.25+h.g*.25)),l=p+d*cos(c),m=q+d*sin(c),f.x=.5+.5*l/e,f.y=.5+m/e,g+=pow(texture2D(u31,f).rgb,u21*n);g/=float(j),gl_FragColor=vec4(g,1.);}",
                            f: ["u31", "u32", "u21"],
                            precision: "lowp",
                            ua: [{
                                search: "8888",
                                replace: u.qj[L.R()]
                            }]
                        };
                        A.s13 = {
                            name: "_",
                            c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);float b=.031496*texture2D(u0,vv0-3.*u24).a+.110236*texture2D(u0,vv0-2.*u24).a+.220472*texture2D(u0,vv0-u24).a+.275591*a.a+.220472*texture2D(u0,vv0+u24).a+.110236*texture2D(u0,vv0+2.*u24).a+.031496*texture2D(u0,vv0+3.*u24).a;gl_FragColor=vec4(a.rgb,4.*b);}",
                            f: ["u0", "u24"],
                            precision: "lowp"
                        };
                        A.s14 = {
                            name: "_",
                            c: "uniform sampler2D u0;varying vec2 vv0;const vec3 e=vec3(1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=.3*pow(a.a,2.);gl_FragColor=vec4(a.rgb+b*e,1.);}",
                            f: ["u0"],
                            precision: "lowp"
                        };
                        A.s15 = {
                            name: "_",
                            c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;void main(){vec4 a=.031496*texture2D(u0,vv0-3.*u24)+.110236*texture2D(u0,vv0-2.*u24)+.220472*texture2D(u0,vv0-u24)+.275591*texture2D(u0,vv0)+.220472*texture2D(u0,vv0+u24)+.110236*texture2D(u0,vv0+2.*u24)+.031496*texture2D(u0,vv0+3.*u24);gl_FragColor=a;}",
                            f: ["u0", "u24"],
                            precision: "lowp"
                        };
                        A.s16 = {
                            name: "_",
                            c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0-3.*u24)+texture2D(u0,vv0-2.*u24)+texture2D(u0,vv0-u24)+texture2D(u0,vv0)+texture2D(u0,vv0+u24)+texture2D(u0,vv0+2.*u24)+texture2D(u0,vv0+3.*u24);gl_FragColor=a/7.;}",
                            f: ["u0", "u24"],
                            precision: "lowp"
                        };
                        A.s17 = {
                            name: "_",
                            c: "uniform sampler2D u0;varying vec2 vv0;const vec4 g=vec4(0.,0.,0.,0.);const float e=256.;void main(){vec4 b=g;float c=0.;vec2 d;for(float a=0.;a<e;a+=1.)d=vec2(a/512.,vv0.y),b+=texture2D(u0,d),c+=1.;gl_FragColor=b/c;}",
                            f: ["u0"],
                            precision: "highp"
                        };
                        A.s18 = {
                            name: "_",
                            c: "uniform sampler2D u0,u18;varying vec2 vv0;const vec4 h=vec4(1.,1.,1.,1.);const float f=0.,g=.3;void main(){vec4 b=texture2D(u18,vv0),c=texture2D(u0,vv0);float a=smoothstep(g,f,vv0.y);a+=smoothstep(1.-g,1.-f,vv0.y),gl_FragColor=mix(c,b,a*h);}",
                            f: ["u0", "u18"],
                            precision: "highp"
                        };
                        A.s19 = {
                            name: "_",
                            c: "uniform sampler2D u0,u18;varying vec2 vv0;const vec3 h=vec3(1.,1.,1.);const float g=0.,f=.3;vec4 j(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),k=exp2(c);vec3 i=clamp(b/k,0.,1.);return vec4(i,(c+128.)/256.);}void main(){vec3 b=texture2D(u18,vv0).rgb,c=texture2D(u0,vv0).rgb;float a=smoothstep(f,g,vv0.y);a+=smoothstep(1.-f,1.-g,vv0.y),gl_FragColor=j(mix(c,b,a*h));}",
                            f: ["u0", "u18"],
                            precision: "highp"
                        };
                        A.s20 = {
                            name: "_",
                            c: "uniform sampler2D u0,u33,u34,u35;uniform vec4 u36;uniform vec2 u37;uniform float u38,u39,u40;varying vec2 vv0;const vec2 g=vec2(1.,1.),n=vec2(.5,.5);const float d=3.141592;void main(){vec4 e=texture2D(u0,vv0),l=texture2D(u33,vec2(1.-vv0.x,vv0.y));float k=step(texture2D(u35,vec2(.25,.5)).r,1.);vec2 a=vv0*2.-g;float j=texture2D(u34,a*u37*.5+n).r,i=atan(a.x,a.y),h=-(mod(u38,2.*d)-d),b=mod(i-h+d,2.*d)-d,c=1.-smoothstep(0.,u39,b);c*=(sign(b)+1.)/2.;vec4 m=l+c*u36*j;gl_FragColor=mix(e,m,k*u40);}",
                            f: "u0 u34 u35 u33 u36 u38 u39 u40 u37".split(" "),
                            precision: "lowp"
                        };
                        var a = "u41 u42 u43 u44 u31 u45 u46 u47 u33 u48 u49 u50 u51".split(" ");
                        u.Y && (A.s21 = {
                            name: "_",
                            c: "uniform sampler2D u41,u42,u43,u44,u31,u45,u52,u33;uniform vec3 u47,u49;uniform float u46,u53,u48,u50;varying vec2 vv0;const float h=3.141592;const vec3 B=vec3(0.,0.,0.),A=vec3(.299,.587,.114);const float z=2.;vec3 n(vec4 a){float b=a.a*256.-128.;vec3 c=a.rgb;return exp2(b)*c*65536.;}vec2 x(vec3 a){float b=atan(a.x,a.z),c=acos(-a.y);return vec2(.5-.5*b/h,1.-c/h);}vec2 w(vec3 a,float b){vec2 c=vec2(1.,.5)/pow(2.,b),d=vec2(0.,1.-pow(.5,b));float g=atan(a.x,a.z),f=acos(-a.y);return d+vec2(.5-.5*g/h,1.-f/h)*c;}void main(){vec4 i=texture2D(u41,vv0);vec3 t=texture2D(u33,vec2(1.-vv0.x,vv0.y)).rgb;if(i.a<.01){gl_FragColor=vec4(t,0.);return;}float J=i.a;vec3 I=i.rgb,H=I+u47;vec4 b=texture2D(u44,vv0),r=texture2D(u42,vv0);vec3 d=r.rgb;float g=r.a;vec4 p=texture2D(u43,vv0);vec3 v=p.rgb;float o=b.r,L=b.g,m=floor(b.b*255.),c=floor(m/16.),G=(m-16.*c)/16.;c/=16.;float E=b.a;g=1.-(1.-g)*(1.-p.a);vec2 D=x(-d);vec3 l=(1.-E)*n(texture2D(u45,D)),k=normalize(H),f=B,s=reflect(-k,d);vec2 K=w(s,floor(L*u46));float F=acos(-s.z),C=smoothstep(u48-u50,u48+u50,F);f=mix(n(texture2D(u31,K)),u49,C);float a=o+(G-o)*pow(1.-dot(d,-k),c*16.),q=1.-u53*texture2D(u52,vv0).r;f*=pow(q,2.),l*=q,a=clamp(a,0.,1.);vec3 j=v*mix(l,f,a),M=mix(t,j,J*(g*(1.-a)+a));float y=dot(j,A),u=max(0.,(y-1.)/(z-1.));gl_FragColor=vec4(j,u);}",
                            f: a.concat(["u52", "u53"]),
                            precision: "highp"
                        });
                        A.s22 = {
                            name: "_",
                            c: "uniform sampler2D u41,u42,u43,u44,u31,u45,u33;uniform vec3 u47,u49;uniform float u46,u48,u50,u51,u54,u55;varying vec2 vv0;const float i=3.141592;const vec3 x=vec3(0.,0.,0.),h=vec3(1.,1.,1.),y=vec3(.299,.587,.114);const float z=2.;vec3 u(vec4 a){float b=a.a*256.-128.;vec3 c=a.rgb;return exp2(b)*c*65536.;}vec2 A(vec3 a){float b=atan(a.x,-a.z),c=acos(-a.y);return vec2(.5-.5*b/i,1.-c/i);}vec2 B(vec3 a,float b){vec2 c=vec2(1.,.5)/pow(2.,b),d=vec2(0.,1.-pow(.5,b));float g=atan(a.x,a.z),f=acos(-a.y);return d+vec2(.5+.5*g/i,.025+.95*f/i)*c;}void main(){vec4 g=texture2D(u41,vv0),k=texture2D(u33,vec2(1.-vv0.x,vv0.y));if(g.a<.01){gl_FragColor=vec4(k.rgb,0.);return;}float s=g.a;vec3 C=g.rgb,D=C+u47;vec4 b=texture2D(u44,vv0),r=texture2D(u42,vv0);vec3 f=r.rgb;float j=r.a;vec4 m=texture2D(u43,vv0);vec3 c=m.rgb;if(s>1.){gl_FragColor=vec4(mix(k.rgb,c,m.a),1.);return;}c=pow(c,u54*h);float w=b.r,E=b.g,F=b.a,v=floor(b.b*255.),l=floor(v/16.),G=(v-16.*l)/16.;l/=16.,j=1.-(1.-j)*(1.-m.a);vec2 H=A(f);vec3 I=u(texture2D(u45,H)),J=(1.-F)*I,t=normalize(D),q=x,n=reflect(-t,f);float K=floor(E*u46);vec2 L=B(n,K);float M=acos(-n.z),N=smoothstep(u48-u50,u48+u50,M);vec3 O=u(texture2D(u31,L));q=mix(O,u49,N*u51);float a=w+(G-w)*pow(1.+dot(f,t),l*15.);a=clamp(a,0.,1.);vec3 P=c*mix(J,q,a);float p=s*(j*(1.-a)+a);vec3 d=mix(k.rgb,pow(P,h/u54),p);float o=dot(d,y),Q=max(0.,(o-1.)/(z-1.));d=mix(o*h,d,mix(1.,u55,p)*h),gl_FragColor=vec4(d,Q);}",
                            f: a.concat(["u54", "u55"]),
                            precision: "highp"
                        };
                        u.Y && (A.s23 = {
                            name: "_",
                            c: "uniform sampler2D u41,u42;uniform mat4 u56;uniform vec2 u57,u24,u58;uniform float u59,u60,u61,u62,u63,u64,u65,u66,u53;varying vec2 vv0;const float PI=3.141593,HALFPI=1.570796,N=8888.8;void main(){vec2 uvt=vv0+u58;vec4 pos=texture2D(u41,uvt);if(pos.a<.01){gl_FragColor=vec4(0.,0.,0.,1.);return;}vec3 co0=pos.rgb;float c=cos(u59),s=sin(u59);vec3 no0=texture2D(u42,uvt).rgb;float zv=(u56*vec4(co0,1.)).z;vec3 co;vec2 scale=u57/abs(zv),uv,duv=u24*vec2(c,s)*scale;vec3 dp,dpn;float dzMax=0.,angleMin=0.,angle;for(float i=0.;i<N;i+=1.)uv=uvt+i*duv,co=texture2D(u41,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u65,u66,length(dp)),angleMin=max(angleMin,angle),dzMax=max(dzMax,sin(angle)*length(dp));float angleMinInv=0.;for(float i=0.;i<N;i+=1.)uv=uvt-i*duv,co=texture2D(u41,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u65,u66,length(dp)),dzMax=max(dzMax,sin(angle)*length(dp)),angleMinInv=max(angleMinInv,angle);duv=u24*vec2(s,c)*scale;float angleMin2=0.;for(float i=0.;i<N;i+=1.)uv=uvt+i*duv,co=texture2D(u41,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u65,u66,length(dp)),dzMax=max(dzMax,sin(angle)*length(dp)),angleMin2=max(angleMin2,angle);float angleMin2Inv=0.;for(float i=0.;i<N;i+=1.)uv=uvt-i*duv,co=texture2D(u41,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u65,u66,length(dp)),dzMax=max(dzMax,sin(angle)*length(dp)),angleMin2Inv=max(angleMin2Inv,angle);float omegaMin=PI/4.*(angleMin+angleMinInv)*(angleMin2+angleMin2Inv),dzFactor=clamp(dzMax/u62,u63,1.),ao=dzFactor*clamp(u61*omegaMin*u64,0.,u53);gl_FragColor=vec4(ao,ao,ao,u60);}",
                            f: "u41 u42 u61 u60 u59 u24 u67 u62 u63 u64 u65 u66 u56 u57 u53".split(" "),
                            ua: [{
                                search: "8888.8",
                                replace: u.Bh[L.R()].toFixed(1)
                            }],
                            precision: "lowp"
                        }, A.s24 = {
                            name: "_",
                            c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;const vec2 g=vec2(-.9,.4),h=vec2(.4,.9),i=vec2(-.4,-.9),j=vec2(.9,-.4),k=vec2(-1.9,.9),l=vec2(.9,1.9),m=vec2(-.9,-1.9),f=vec2(1.9,-.9);void main(){vec2 a=vv0;vec4 b=texture2D(u0,a)+texture2D(u0,a+u24*g)+texture2D(u0,a+u24*h)+texture2D(u0,a+u24*i)+texture2D(u0,a+u24*j);b+=texture2D(u0,a+u24*k)+texture2D(u0,a+u24*l)+texture2D(u0,a+u24*m)+texture2D(u0,a+u24*f),gl_FragColor=b/9.;}",
                            f: ["u0", "u24"],
                            precision: "lowp"
                        });
                        A.s25 = {
                            name: "_",
                            c: "varying vec3 vv0;void main(){gl_FragColor=vec4(vv0,1.);}",
                            l: "attribute vec3 a0;uniform mat4 u68,u56,u69;varying vec3 vv0;void main(){vec4 a=u68*u56*u69*vec4(a0,1.);gl_Position=a,vv0=a.xyz/a.w;}",
                            f: ["u68", "u56", "u69"],
                            precision: "lowp"
                        };
                        A.s26 = {
                            name: "_",
                            c: "uniform sampler2D u70,u45,u32;uniform mat4 u68,u71;uniform vec2 u72;uniform float u73;varying vec2 vv0;const float p=8888.8,q=9999.9,r=25.,v=50.,w=1.2,j=3.141592;const vec4 x=vec4(0.,0.,0.,0.),A=vec4(1.,1.,1.,1.);const vec2 i=vec2(.5,.5);vec2 y(vec3 a){float b=atan(a.x,a.z),c=acos(a.y);return vec2(.5-.5*b/j,1.-c/j);}void main(){float d,c,m;vec2 z=vec2(vv0.x,1.-vv0.y),a;vec3 s=vec3(u72*(z-i),0.),B=vec3(u71*vec4(s,1.)),h,t;vec4 u=x,f,b,n;vec3 l;int g;for(float k=0.;k<p;k+=1.){a.x=k,a.y=floor(a.x/64.),b=texture2D(u32,a/64.),d=j*b.r,c=2.*asin(sqrt(.25+b.g*.25)),h=vec3(cos(d)*sin(c),sin(d)*sin(c),-cos(c)),m=r+(.5+.5*b.b)*(v-r),g=0;for(float e=0.;e<=q;e+=1.){n=vec4(s+h*m*pow(e/q,w),1.),f=u68*n,l=f.xyz/f.w;if(texture2D(u70,i+i*l.xy).z<l.z){g=1;break;}}if(g==1)continue;t=vec3(u71*vec4(h,0.)),u+=texture2D(u45,y(t));}gl_FragColor=vec4(u73*u.rgb/p,1.);}",
                            f: "u70 u45 u32 u68 u71 u72 u73".split(" "),
                            ua: [{
                                search: "8888.8",
                                replace: u.Jk[L.R()].toFixed(1)
                            }, {
                                search: "9999.9",
                                replace: u.Kk[L.R()].toFixed(1)
                            }],
                            precision: "lowp"
                        };
                        A.s27 = {
                            name: "_",
                            c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;void main(){vec4 a=.285714*texture2D(u0,vv0-u24)+.428571*texture2D(u0,vv0)+.285714*texture2D(u0,vv0+u24);gl_FragColor=a;}",
                            f: ["u0", "u24"],
                            precision: "lowp"
                        };
                        A.s28 = {
                            name: "_",
                            c: "uniform sampler2D u0,u74;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                            l: "attribute vec3 a0;attribute vec2 a1;uniform mat4 u68,u56;varying vec2 vv0;void main(){vec4 a=u68*u56*vec4(a0,1.);gl_Position=a,vv0=a1;}",
                            f: ["u68", "u56", "u0"],
                            D: ["a0", "a1"],
                            precision: "lowp"
                        };
                        if (L.W()) {
                            a = "u25 u75 u76 u77 u78 u79 u44 u80 u81 u17 u82 u83 u6".split(" ").concat(T, h);
                            L.Jf() || (A.s29 = {
                                name: "_",
                                l: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                                c: "void main(){gl_FragData[0]=vec4(0.,0.,0.,0.),gl_FragData[1]=vec4(0.,0.,0.,0.),gl_FragData[2]=vec4(0.,0.,0.,0.),gl_FragData[3]=vec4(0.,0.,0.,0.);}",
                                f: [],
                                precision: "lowp",
                                $: !0
                            });
                            A.s30 = {
                                name: "_",
                                l: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                                c: "uniform vec4 color;void main(){gl_FragData[0]=color,gl_FragData[1]=color,gl_FragData[2]=color,gl_FragData[3]=color;}",
                                f: ["color"],
                                $: !0
                            };
                            A.s31NNGLcolor = {
                                name: "_",
                                c: "uniform vec4 u44,u17;uniform vec3 u80;uniform float u81;varying vec3 vv0,vv1;varying float vv2,vv3;void main(){float b=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv3),c=u81;vec4 a=u44;float d=floor(15.99*c),e=floor(15.99*a.b);a.b=(d+16.*e)/255.,gl_FragData[0]=vec4(vv0,vv2),gl_FragData[1]=vec4(normalize(vv1),b),gl_FragData[2]=vec4(u80,0.),gl_FragData[3]=a;}",
                                l: "attribute vec3 a0,a2;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u82,u83,u77,u78,u85;varying vec3 vv0,vv1;varying float vv2,vv3;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 x(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 v=mix(c.a*u79,e,f),d=(2.*c.gb-e)*(1.-f);d.x*=-1.;vec3 g=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 h=x(g);vec3 o=mix(u75,u11,a);float m=mix(u76,u14,u13);vec3 l=mix(u6,u12,a);float k=mix(u9,1.,u13);vec2 i=u8/v;vec3 j=a0;float t=max(0.,-a0.z-u77)*u78;j.x+=t*sign(a0.x)*(1.-u13);vec3 b=h*(j+o)*m+l;b.x+=u5*sin(g.y);vec2 w=i*k;vec3 u=vec3(d*w,-i)+b*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(u,1.)),vv1=h*a2*vec3(1.,-1.,-1.),vv2=smoothstep(u82,u83,a0.z),vv0=b,vv3=a0.y;}",
                                f: a,
                                D: ["a0", "a2"],
                                L: [3, 3],
                                $: !0
                            };
                            A.s31NNGLtexture = {
                                name: "_",
                                c: "uniform sampler2D u0;uniform vec4 u44,u17;uniform vec3 u80;uniform float u81,u1;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;void main(){float c=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv4),d=u81;vec4 b=u44;float k=floor(15.99*d),l=floor(15.99*b.b);b.b=(k+16.*l)/255.;vec4 a=texture2D(u0,vv2);vec3 m=mix(u80,a.rgb,a.a);vec4 e=vec4(mix(a.rgb*u80,m,u1),a.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),c),gl_FragData[2]=e,gl_FragData[3]=b;}",
                                l: "attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u82,u83,u77,u78,u85;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 z=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 y(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 w=mix(c.a*u79,e,f),d=(2.*c.gb-e)*(1.-f);d.x*=-1.;vec3 g=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 h=y(g);vec3 o=mix(u75,u11,a);float m=mix(u76,u14,u13);vec3 l=mix(u6,u12,a);float k=mix(u9,1.,u13);vec2 i=u8/w;vec3 j=a0;float u=max(0.,-a0.z-u77)*u78;j.x+=u*sign(a0.x)*(1.-u13);vec3 b=h*(j+o)*m+l;b.x+=u5*sin(g.y);vec2 x=i*k;vec3 v=vec3(d*x,-i)+b*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(v,1.)),vv1=h*a2*vec3(1.,-1.,-1.),vv3=smoothstep(u82,u83,a0.z),vv2=a1,vv0=b,vv4=a0.y;}",
                                f: a.concat(Q),
                                D: ["a0", "a2", "a1"],
                                L: [3, 3, 2],
                                $: !0
                            };
                            A.s31NNGLtextureNormalMap = {
                                name: "_",
                                c: "uniform vec4 u44,u17;uniform vec3 u80;uniform sampler2D u0,u86;uniform float u81,u1;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 l=vec3(1.,1.,1.);void main(){float m=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv5);vec3 v=vec3(0.,0.,-1.),d=normalize(vv2),b=texture2D(u86,vv3).xyz;b=normalize(b*255./127.-1.007874*l);vec3 e=vv0.xyz,o=cross(d,e)*vv0.w;mat3 p=mat3(e,o,d);vec3 q=p*b;float r=u81;vec4 c=u44;float s=floor(15.99*r),t=floor(15.99*c.b);c.b=(s+16.*t)/255.;vec4 a=texture2D(u0,vv3);vec3 u=mix(u80,a.rgb,a.a);vec4 n=vec4(mix(a.rgb*u80,u,u1),a.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(q,m),gl_FragData[2]=n,gl_FragData[3]=c;}",
                                l: "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u82,u83,u77,u78,u85;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 A=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 z(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 x=mix(c.a*u79,e,f),d=(2.*c.gb-e)*(1.-f);d.x*=-1.;vec3 g=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 h=z(g);vec3 o=mix(u75,u11,a);float m=mix(u76,u14,u13);vec3 l=mix(u6,u12,a);float k=mix(u9,1.,u13);vec2 i=u8/x;vec3 j=a0;float v=max(0.,-a0.z-u77)*u78;j.x+=v*sign(a0.x)*(1.-u13);vec3 b=h*(j+o)*m+l;b.x+=u5*sin(g.y);vec2 y=i*k;vec3 w=vec3(d*y,-i)+b*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(w,1.)),vv2=h*a2*vec3(1.,-1.,-1.),vv0=a3,vv4=smoothstep(u82,u83,a0.z),vv3=a1,vv1=b,vv5=a0.y;}",
                                f: a.concat(Q, ["u86"]),
                                D: ["a3", "a0", "a2", "a1"],
                                L: [4, 3, 3, 2],
                                $: !0
                            };
                            A.s31NNGLtextureParamsMap = {
                                name: "_",
                                c: "uniform sampler2D u0,u2;uniform vec4 u44,u17,u3;uniform vec3 u80;uniform float u81,u1;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;vec2 j(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float p=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv4),e=u81;vec4 a=u44,d=texture2D(u2,vv2);vec2 b=j(d.b,4.);float q=1.-b.x,g=b.y;b=j(d.a,1.);float h=b.x,f=b.y;vec4 r=vec4(d.rg,g,h);float s=q;a=mix(a,r,u3*f),e=mix(e,s,u3.b*f);float t=floor(15.99*e),u=floor(15.99*a.b);a.b=(t+16.*u)/255.;vec4 c=texture2D(u0,vv2);vec3 v=mix(u80,c.rgb,c.a);vec4 k=vec4(mix(c.rgb*u80,v,u1),c.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),p),gl_FragData[2]=k,gl_FragData[3]=a;}",
                                l: "attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u82,u83,u77,u78,u85;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 z=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 y(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 w=mix(c.a*u79,e,f),d=(2.*c.gb-e)*(1.-f);d.x*=-1.;vec3 g=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 h=y(g);vec3 o=mix(u75,u11,a);float m=mix(u76,u14,u13);vec3 l=mix(u6,u12,a);float k=mix(u9,1.,u13);vec2 i=u8/w;vec3 j=a0;float u=max(0.,-a0.z-u77)*u78;j.x+=u*sign(a0.x)*(1.-u13);vec3 b=h*(j+o)*m+l;b.x+=u5*sin(g.y);vec2 x=i*k;vec3 v=vec3(d*x,-i)+b*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(v,1.)),vv1=h*a2*vec3(1.,-1.,-1.),vv3=smoothstep(u82,u83,a0.z),vv2=a1,vv0=b,vv4=a0.y;}",
                                f: a.concat(Q, F),
                                D: ["a0", "a2", "a1"],
                                L: [3, 3, 2],
                                $: !0
                            };
                            A.s31NNGLtextureNormalParamsMap = {
                                name: "_",
                                c: "uniform sampler2D u0,u86,u2;uniform vec4 u44,u17,u3;uniform vec3 u80;uniform float u81,u1;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 q=vec3(1.,1.,1.);vec2 j(float d,float f){float e=floor(d*255.+.01),a=pow(2.,f),g=256./a,b=e/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float r=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv5);vec3 E=vec3(0.,0.,-1.),g=normalize(vv2),d=texture2D(u86,vv3).xyz;d=normalize(d*255./127.-1.007874*q);vec3 h=vv0.xyz,s=cross(g,h)*vv0.w;mat3 t=mat3(h,s,g);vec3 u=t*d;float f=u81;vec4 b=u44,e=texture2D(u2,vv3);vec2 a=j(e.b,4.);float v=1.-a.x,w=a.y;a=j(e.a,1.);float x=a.x,l=a.y;vec4 z=vec4(e.rg,w,x);float A=v;b=mix(b,z,u3*l),f=mix(f,A,u3.b*l);float B=floor(15.99*f),C=floor(15.99*b.b);b.b=(B+16.*C)/255.;vec4 c=texture2D(u0,vv3);vec3 D=mix(u80,c.rgb,c.a);vec4 y=vec4(mix(c.rgb*u80,D,u1),c.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(u,r),gl_FragData[2]=y,gl_FragData[3]=b;}",
                                l: "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u84;uniform float u76,u82,u83,u77,u78,u85;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 A=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 z(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 x=mix(c.a*u79,e,f),d=(2.*c.gb-e)*(1.-f);d.x*=-1.;vec3 g=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 h=z(g);vec3 o=mix(u75,u11,a);float m=mix(u76,u14,u13);vec3 l=mix(u6,u12,a);float k=mix(u9,1.,u13);vec2 i=u8/x;vec3 j=a0;float v=max(0.,-a0.z-u77)*u78;j.x+=v*sign(a0.x)*(1.-u13);vec3 b=h*(j+o)*m+l;b.x+=u5*sin(g.y);vec2 y=i*k;vec3 w=vec3(d*y,-i)+b*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(w,1.)),vv2=h*a2*vec3(1.,-1.,-1.),vv0=a3,vv4=smoothstep(u82,u83,a0.z),vv3=a1,vv1=b,vv5=a0.y;}",
                                f: a.concat(Q, ["u86"], F),
                                D: ["a3", "a0", "a2", "a1"],
                                L: [4, 3, 3, 2],
                                $: !0
                            };
                            a = "u68 u56 u69 u44 u80 u81 u17".split(" ");
                            A.s31color = {
                                name: "_",
                                c: "uniform vec4 u44,u17;uniform vec3 u80;uniform float u81;varying vec3 vv0,vv1;varying float vv2,vv3;void main(){float b=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv3),c=u81;vec4 a=u44;float d=floor(15.99*c),e=floor(15.99*a.b);a.b=(d+16.*e)/255.,gl_FragData[0]=vec4(vv0,vv2),gl_FragData[1]=vec4(normalize(vv1),b),gl_FragData[2]=vec4(u80,0.),gl_FragData[3]=a;}",
                                l: "attribute vec3 a0,a2;uniform mat4 u68,u56,u69;varying vec3 vv0,vv1;varying float vv2,vv3;const vec4 i=vec4(0.,0.,5e-4,0.);void main(){vec4 a=u69*vec4(a0,1.),b=u69*vec4(a2,0.);gl_Position=u68*u56*a,vv0=a.xyz,vv1=b.xyz,vv2=1.,vv3=a0.y;}",
                                f: a,
                                D: ["a0", "a2"],
                                $: !0
                            };
                            A.s31 = {
                                name: "_",
                                c: "uniform sampler2D u0;uniform vec4 u44,u17;uniform vec3 u80;uniform float u81,u1;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;void main(){float c=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv4),d=u81;vec4 b=u44;float k=floor(15.99*d),l=floor(15.99*b.b);b.b=(k+16.*l)/255.;vec4 a=texture2D(u0,vv2);vec3 m=mix(u80,a.rgb,a.a);vec4 e=vec4(mix(a.rgb*u80,m,u1),a.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),c),gl_FragData[2]=e,gl_FragData[3]=b;}",
                                l: "attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u68,u56,u69;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;const vec4 j=vec4(0.,0.,5e-4,0.);void main(){vec4 a=u69*vec4(a0,1.),b=u69*vec4(a2,0.);gl_Position=u68*u56*a,vv2=a1,vv0=a.xyz,vv1=b.xyz,vv3=1.,vv4=a0.y;}",
                                f: a.concat(Q),
                                D: ["a0", "a2", "a1"],
                                $: !0
                            };
                            var b = ["u86", "u87"];
                            A.s31NormalMap = {
                                name: "_",
                                c: "uniform sampler2D u0,u86;uniform vec4 u44,u17;uniform vec3 u87,u80;uniform float u81,u1;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 m=vec3(1.,1.,1.);void main(){float n=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv5);vec3 v=vec3(0.,0.,-1.),d=normalize(vv2),b=texture2D(u86,vv3).xyz;b=normalize(b*255./127.-1.007874*m);vec3 e=vv0.xyz,o=cross(d,e)*vv0.w;mat3 p=mat3(e,o,d);vec3 q=p*b;float r=u81;vec4 c=u44;float s=floor(15.99*r),t=floor(15.99*c.b);c.b=(s+16.*t)/255.;vec4 a=texture2D(u0,vv3);vec3 u=mix(u80,a.rgb,a.a);vec4 h=vec4(mix(a.rgb*u80,u,u1),a.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(q,n),gl_FragData[2]=h,gl_FragData[3]=c;}",
                                l: "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u68,u56,u69;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec4 k=vec4(0.,0.,5e-4,0.);void main(){vec4 a=u69*vec4(a0,1.),b=u69*vec4(a2,0.);gl_Position=u68*u56*a,vv0=a3,vv3=a1,vv1=a.xyz,vv2=b.xyz,vv4=1.,vv5=a0.y;}",
                                f: a.concat(Q, b),
                                D: ["a0", "a2", "a1", "a3"],
                                $: !0
                            };
                            A.s31ParamsMap = {
                                name: "_",
                                c: "uniform sampler2D u0,u2;uniform vec4 u44,u17,u3;uniform vec3 u80;uniform float u81,u1;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;vec2 j(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float p=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv4),e=u81;vec4 a=u44,d=texture2D(u2,vv2);vec2 b=j(d.b,4.);float q=1.-b.x,g=b.y;b=j(d.a,1.);float h=b.x,f=b.y;vec4 r=vec4(d.rg,g,h);float s=q;a=mix(a,r,u3*f),e=mix(e,s,u3.b*f);float t=floor(15.99*e),u=floor(15.99*a.b);a.b=(t+16.*u)/255.;vec4 c=texture2D(u0,vv2);vec3 v=mix(u80,c.rgb,c.a);vec4 k=vec4(mix(c.rgb*u80,v,u1),c.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),p),gl_FragData[2]=k,gl_FragData[3]=a;}",
                                l: "attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u68,u56,u69;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;const vec4 j=vec4(0.,0.,5e-4,0.);void main(){vec4 a=u69*vec4(a0,1.),b=u69*vec4(a2,0.);gl_Position=u68*u56*a,vv2=a1,vv0=a.xyz,vv1=b.xyz,vv3=1.,vv4=a0.y;}",
                                f: a.concat(Q, F),
                                D: ["a0", "a2", "a1"],
                                $: !0
                            };
                            A.s31NormalParamsMap = {
                                name: "_",
                                c: "uniform sampler2D u0,u86,u2;uniform vec4 u44,u17,u3;uniform vec3 u87,u80;uniform float u81,u1;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 q=vec3(1.,1.,1.);vec2 j(float d,float f){float e=floor(d*255.+.01),a=pow(2.,f),g=256./a,b=e/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float r=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv5);vec3 E=vec3(0.,0.,-1.),g=normalize(vv2),d=texture2D(u86,vv3).xyz;d=normalize(d*255./127.-1.007874*q);vec3 h=vv0.xyz,s=cross(g,h)*vv0.w;mat3 t=mat3(h,s,g);vec3 u=t*d;float f=u81;vec4 b=u44,e=texture2D(u2,vv3);vec2 a=j(e.b,4.);float v=1.-a.x,w=a.y;a=j(e.a,1.);float x=a.x,l=a.y;vec4 z=vec4(e.rg,w,x);float A=v;b=mix(b,z,u3*l),f=mix(f,A,u3.b*l);float B=floor(15.99*f),C=floor(15.99*b.b);b.b=(B+16.*C)/255.;vec4 c=texture2D(u0,vv3);vec3 D=mix(u80,c.rgb,c.a);vec4 y=vec4(mix(c.rgb*u80,D,u1),c.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(u,r),gl_FragData[2]=y,gl_FragData[3]=b;}",
                                l: "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u68,u56,u69;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec4 k=vec4(0.,0.,5e-4,0.);void main(){vec4 a=u69*vec4(a0,1.),b=u69*vec4(a2,0.);gl_Position=u68*u56*a,vv0=a3,vv3=a1,vv1=a.xyz,vv2=b.xyz,vv4=1.,vv5=a0.y;}",
                                f: a.concat(Q, b, F),
                                D: ["a0", "a2", "a1", "a3"],
                                $: !0
                            }
                        } else k();
                        g();
                        a = [{
                            type: "1i",
                            name: "u0",
                            value: 0
                        }];
                        N.g("s0", a);
                        N.g("s1", a);
                        N.g("s2", [{
                            type: "1i",
                            name: "u16",
                            value: 1
                        }].concat(a));
                        N.g("s3", [{
                            type: "1i",
                            name: "u16",
                            value: 1
                        }].concat(a));
                        N.g("s4", [{
                            type: "1i",
                            name: "u18",
                            value: 1
                        }].concat(a));
                        N.g("s5", [{
                            type: "1i",
                            name: "u18",
                            value: 1
                        }].concat(a));
                        N.g("s6", a);
                        N.g("s7", a);
                        N.g("s8", [{
                            type: "1i",
                            name: "u23",
                            value: 1
                        }, {
                            type: "1i",
                            name: "u25",
                            value: 2
                        }].concat(a));
                        N.g("s9", a);
                        N.g("s10", a);
                        N.g("s11", [{
                            type: "1i",
                            name: "u27",
                            value: 0
                        }, {
                            type: "1i",
                            name: "u28",
                            value: 1
                        }]);
                        N.g("s12", [{
                            type: "1i",
                            name: "u31",
                            value: 0
                        }, {
                            type: "1i",
                            name: "u32",
                            value: 1
                        }]);
                        N.g("s13", a);
                        N.g("s14", a);
                        N.g("s15", a);
                        N.g("s16", a);
                        N.g("s17", a);
                        N.g("s18", [{
                            type: "1i",
                            name: "u18",
                            value: 1
                        }].concat(a));
                        N.g("s19", [{
                            type: "1i",
                            name: "u18",
                            value: 1
                        }].concat(a));
                        u.Y && (N.g("s23", [{
                            type: "1i",
                            name: "u41",
                            value: 0
                        }, {
                            type: "1i",
                            name: "u42",
                            value: 1
                        }, {
                            type: "1f",
                            name: "u62",
                            value: u.ph
                        }, {
                            type: "1f",
                            name: "u63",
                            value: u.qh
                        }, {
                            type: "1f",
                            name: "u64",
                            value: u.Ch
                        }, {
                            type: "1f",
                            name: "u65",
                            value: u.th
                        }, {
                            type: "1f",
                            name: "u66",
                            value: u.uh
                        }, {
                            type: "1f",
                            name: "u61",
                            value: 1
                        }, {
                            type: "1f",
                            name: "u53",
                            value: 1
                        }]), N.g("s24", a));
                        b = [{
                            type: "1i",
                            name: "u41",
                            value: 0
                        }, {
                            type: "1i",
                            name: "u42",
                            value: 1
                        }, {
                            type: "1i",
                            name: "u43",
                            value: 2
                        }, {
                            type: "1i",
                            name: "u31",
                            value: 3
                        }, {
                            type: "1i",
                            name: "u45",
                            value: 4
                        }, {
                            type: "1i",
                            name: "u44",
                            value: 6
                        }, {
                            type: "1i",
                            name: "u33",
                            value: 7
                        }, {
                            type: "1f",
                            name: "u51",
                            value: 0
                        }, {
                            type: "1f",
                            name: "u48",
                            value: 0
                        }, {
                            type: "1f",
                            name: "u50",
                            value: 0
                        }];
                        u.Y && N.g("s21", b.concat([{
                            type: "1f",
                            name: "u53",
                            value: u.sh[L.R()]
                        }, {
                            type: "1i",
                            name: "u52",
                            value: 5
                        }]));
                        N.g("s22", b.concat([{
                            type: "1f",
                            name: "u54",
                            value: u.rb
                        }, {
                            type: "1f",
                            name: "u55",
                            value: u.Lc
                        }]));
                        N.g("s26", [{
                            type: "1i",
                            name: "u70",
                            value: 0
                        }, {
                            type: "1i",
                            name: "u45",
                            value: 1
                        }, {
                            type: "1i",
                            name: "u32",
                            value: 2
                        }, {
                            type: "1f",
                            name: "u73",
                            value: u.Ik
                        }]);
                        N.g("s27", a);
                        N.g("s28", a);
                        N.g("s20", [{
                            type: "1i",
                            name: "u34",
                            value: 1
                        }, {
                            type: "1i",
                            name: "u35",
                            value: 2
                        }, {
                            type: "1i",
                            name: "u33",
                            value: 3
                        }, {
                            type: "1f",
                            name: "u40",
                            value: 1
                        }, {
                            type: "2f",
                            name: "u37",
                            value: [0, 0]
                        }].concat(a));
                        L.W() ? (N.g("s31", a), N.g("s31NormalMap", [{
                            type: "1i",
                            name: "u86",
                            value: 1
                        }].concat(a)), N.g("s31ParamsMap", [{
                            type: "1i",
                            name: "u2",
                            value: 1
                        }].concat(a)), N.g("s31NormalParamsMap", [{
                            type: "1i",
                            name: "u86",
                            value: 1
                        }, {
                            type: "1i",
                            name: "u2",
                            value: 2
                        }].concat(a))) : f();
                        y = !0
                    },
                    xk: function() {
                        k();
                        g();
                        f()
                    },
                    vc: function() {
                        return B.id
                    },
                    Ld: function() {
                        return T
                    },
                    Md: function() {
                        return h
                    },
                    set: function(a) {
                        Cb.Jg(N);
                        A[a].set()
                    },
                    K: function() {
                        -1 !== ha && B.K()
                    },
                    Sc: function() {
                        var a = 0;
                        B.na.forEach(function(c, e) {
                            e = B.L[e];
                            b.vertexAttribPointer(c, e, b.FLOAT, !1, B.Ge, a);
                            a += 4 * e
                        })
                    },
                    Tc: function() {
                        b.vertexAttribPointer(B.na[0], 2, b.FLOAT, !1, 8, 0)
                    },
                    vm: function() {
                        b.vertexAttribPointer(B.attributes.a0, 3, b.FLOAT, !1, 12, 0)
                    },
                    Ea: function() {
                        b.vertexAttribPointer(B.attributes.a0, 3, b.FLOAT, !1, 32, 0)
                    },
                    Ja: function() {
                        b.vertexAttribPointer(B.attributes.a0, 3, b.FLOAT, !1, 24, 0)
                    },
                    Eg: function() {
                        b.vertexAttribPointer(B.attributes.a2, 3, b.FLOAT, !1, 32, 12)
                    },
                    Fg: function() {
                        b.vertexAttribPointer(B.attributes.a2, 3, b.FLOAT, !1, 24, 12)
                    },
                    ac: function() {
                        b.vertexAttribPointer(B.attributes.a1, 2, b.FLOAT, !1, 32, 24)
                    },
                    wm: function() {
                        b.vertexAttribPointer(B.attributes.a0, 3, b.FLOAT, !1, 20, 0);
                        b.vertexAttribPointer(B.attributes.a1, 2, b.FLOAT, !1, 20, 12)
                    },
                    pk: function() {
                        b.vertexAttribPointer(B.attributes.a0, 3, b.FLOAT, !1, 32, 0);
                        b.vertexAttribPointer(B.attributes.a2, 3, b.FLOAT, !1, 32, 12);
                        b.vertexAttribPointer(B.attributes.a1, 2, b.FLOAT, !1, 32, 24)
                    },
                    qk: function() {
                        b.vertexAttribPointer(B.attributes.a0, 3, b.FLOAT, !1, 32, 0);
                        b.vertexAttribPointer(B.attributes.a2, 3, b.FLOAT, !1, 32, 12)
                    },
                    rk: function() {
                        b.vertexAttribPointer(B.attributes.a0, 3, b.FLOAT, !1, 24, 0);
                        b.vertexAttribPointer(B.attributes.a2, 3, b.FLOAT, !1, 24, 12)
                    },
                    Oc: function() {
                        b.vertexAttribPointer(B.attributes.a3, 4, b.FLOAT, !1, 16, 0)
                    },
                    Qc: function(a, c) {
                        b.uniform1i(B.w[a], c)
                    },
                    A: function(a, c) {
                        b.uniform1f(B.w[a], c)
                    },
                    M: function(a, c, e) {
                        b.uniform2f(B.w[a], c, e)
                    },
                    Kg: function(a, c) {
                        b.uniform2fv(B.w[a], c)
                    },
                    Rc: function(a, c, e, k) {
                        b.uniform3f(B.w[a], c, e, k)
                    },
                    Lg: function(a, c) {
                        b.uniform3fv(B.w[a], c)
                    },
                    qa: function(a, c) {
                        b.uniform4fv(B.w[a], c)
                    },
                    Dk: function(a, c) {
                        b.uniformMatrix2fv(B.w[a], !1, c)
                    },
                    Ek: function(a, c) {
                        b.uniformMatrix3fv(B.w[a], !1, c)
                    },
                    dc: function(a, c) {
                        b.uniformMatrix4fv(B.w[a], !1, c)
                    },
                    g: function(a, c) {
                        N.set(a);
                        c.forEach(function(a) {
                            switch (a.type) {
                                case "4f":
                                    b.uniform4fv(B.w[a.name], a.value);
                                    break;
                                case "3f":
                                    b.uniform3fv(B.w[a.name], a.value);
                                    break;
                                case "2f":
                                    b.uniform2fv(B.w[a.name], a.value);
                                    break;
                                case "1f":
                                    b.uniform1f(B.w[a.name], a.value);
                                    break;
                                case "1i":
                                    b.uniform1i(B.w[a.name], a.value);
                                    break;
                                case "mat2":
                                    b.uniformMatrix2fv(B.w[a.name], !1, a.value);
                                    break;
                                case "mat4":
                                    b.uniformMatrix4fv(B.w[a.name], !1, a.value)
                            }
                        })
                    },
                    G: function() {
                        for (var a in A) {
                            var c = A[a];
                            b.detachShader(c.pa, c.Je);
                            b.detachShader(c.pa, c.Id);
                            b.deleteShader(c.Je);
                            b.deleteShader(c.Id);
                            b.deleteProgram(c.pa)
                        }
                    }
                };
            return N
        }(),
        J = function() {
            function a(d) {
                d()
            }

            function e() {
                ja && clearTimeout(ja);
                ja = setTimeout(function() {
                    ja = A = !1
                }, 16)
            }

            function w() {
                y.forEach(function(d) {
                    d.xi(H)
                })
            }

            function r() {
                y.forEach(function(d) {
                    d.rc(H)
                })
            }

            function x() {
                y.forEach(function(d) {
                    d.wi(H)
                })
            }

            function k() {
                y.forEach(function(d) {
                    d.sc(H)
                })
            }

            function h() {
                H ? (ma.b(1), y.forEach(function(d) {
                    d.ti()
                }), v && za.O()) : y.forEach(function(d) {
                    d.ui()
                })
            }
            var y = [],
                Q = [],
                F = {
                    Na: !1,
                    position: !1,
                    Ta: !1
                },
                T = 0,
                l = !1,
                I, p, ra, la, ha = !1,
                B = !1,
                C = !1,
                A = !1,
                N = !1,
                m = !1,
                M, na = !1,
                W = !1,
                U, H = !1,
                R = !1,
                ma = !1,
                v = !1,
                za, pa = !1,
                t = !1,
                J = !1,
                ea = !1,
                tb = !1,
                Gb = !1,
                ab = !1,
                ub = 1,
                Ta = !1,
                Bb = !1,
                ba = !1,
                d = [],
                n = !1,
                D = !1,
                z = {},
                S = 0,
                aa = 0,
                va, Xa, db, kb, mb, Ea, E = !1,
                Lb = !1,
                Kb, Aa, sa, P, K = !1,
                q = !1,
                V, ia = !1,
                X = [],
                Y = [],
                fa = !1,
                Z = !1,
                da = !1,
                ca = [{
                    type: "1f",
                    name: "u13",
                    value: 0
                }, {
                    type: "1f",
                    name: "u82",
                    value: 0
                }, {
                    type: "1f",
                    name: "u83",
                    value: 0
                }, {
                    type: "1f",
                    name: "u8",
                    value: 1
                }, {
                    type: "1f",
                    name: "u5",
                    value: 0
                }, {
                    type: "1f",
                    name: "u15",
                    value: 1
                }],
                Ja, ja = !1,
                Ka = {
                    i: function() {
                        b.enable(b.DEPTH_TEST);
                        b.depthFunc(b.LEQUAL);
                        b.clearDepth(1);
                        u.ci ? (b.enable(b.CULL_FACE), b.frontFace("CCW" === u.di ? b.CCW : b.CW), b.cullFace(b.BACK)) : b.disable(b.CULL_FACE);
                        Ja = function() {
                            L.W() ? F = eb.a({}) : (F.Na = Ra.a({
                                wb: u.Ca ? !1 : "s32",
                                isFloat: !1,
                                kb: !0,
                                clearColor: [0, 0, 0, 0],
                                v: 4
                            }), F.position = Ra.a({
                                wb: u.Ca ? !1 : "s42",
                                isFloat: !0,
                                kb: !0,
                                clearColor: [0, 0, 0, 0],
                                v: 4
                            }), F.Ta = Ra.a({
                                wb: !1,
                                isFloat: !0,
                                kb: !0,
                                clearColor: [0, 0, 0, 0],
                                v: 4
                            }), F.Wb = Ra.a({
                                wb: !1,
                                isFloat: !1,
                                kb: !0,
                                clearColor: [0, 0, 0, 0],
                                v: 4
                            }))
                        };
                        Ja();
                        var d = {
                            isPot: !1,
                            isLinear: !1,
                            width: L.jb(),
                            height: L.ib(),
                            v: 4,
                            isFloat: !1
                        };
                        I = G.a(d);
                        d = Object.assign({}, d, {
                            isLinear: !0,
                            width: L.H(),
                            height: L.S()
                        });
                        p = G.a(d);
                        ra = G.a(d);
                        u.Ca && (d = Object.assign({}, d, {
                            isLinear: !1
                        }), la = G.a(d));
                        M = wa.U();
                        u.Ca || (n = Ba.a({
                            Ma: u.Ma,
                            ab: u.ab,
                            bb: u.bb,
                            $a: u.$a
                        }));
                        D = !0
                    },
                    Wa: function(d) {
                        L.W() ? (f.g("s31NNGLcolor", d), f.g("s31NNGLtexture", d), f.g("s31NNGLtextureNormalMap", d), f.g("s31NNGLtextureParamsMap", d), f.g("s31NNGLtextureNormalParamsMap", d)) : (f.g("s35", d), f.g("s36", d), f.g("s37", d), f.g("s38", d), f.g("s39", d), f.g("s40", d), f.g("s41", d))
                    },
                    Qi: function() {
                        return n
                    },
                    ha: function(d) {
                        n = d
                    },
                    ub: function(d) {
                        function a() {
                            v && ka.La.toggle(!1);
                            K && f.g("s20", [{
                                type: "1f",
                                name: "u40",
                                value: 0
                            }])
                        }
                        0 >= d ? (aa = 0, 0 !== S && (S = 0, Ma.dk(), v && ka.La.toggle(!0), K && f.g("s20", [{
                            type: "1f",
                            name: "u40",
                            value: 1
                        }]))) : 1 <= d ? (aa = 1, 1 !== S && (S = 1, Ma.Qg(!0)), a()) : (aa = d, 2 !== S && (Ma.Qg(!1), S = 2, a()));
                        f.g("s22", [{
                            type: "1f",
                            name: "u51",
                            value: 1 - d
                        }]);
                        ca[0].value = aa;
                        ca[1].value = va[0] * (1 - d) + -300 * d;
                        ca[2].value = va[1] * (1 - d) + -300 * d;
                        ca[3].value = Xa * (1 - d) + d * db;
                        ca[4].value = mb * (1 - d);
                        ca[5].value = 1 - d + d * ub;
                        t && ka.ja.ue(aa, ca);
                        Ta && ka.ma.ue(aa, ca);
                        Ka.Wa(ca)
                    },
                    Qk: function(d) {
                        t = d && pa
                    },
                    Pk: function(d) {
                        ba = d && Bb
                    },
                    Jm: function() {},
                    uk: function(d) {
                        Ta && L.W() && ka.ma.Fk(d)
                    },
                    gc: function() {
                        L.W() && (pa && ka.ja.gc(), Ta && ka.ma.gc())
                    },
                    ek: function() {
                        Ka.zg(z.Da, z.Mj, z.el);
                        Ka.Ag(z.hj, z.Nj, z.fl);
                        Ka.Bg(z.Mc);
                        Ka.oe(z.we);
                        Ka.yg(z.Lh, z.oa)
                    },
                    zg: function(d, a, b) {
                        var n = [d[0] + a[0], d[1] + a[1], d[2] + a[2]];
                        n = [n[0] + b[0], n[1] + b[1], n[2] + b[2]];
                        z.Da = n;
                        z.Mj = a;
                        z.el = b;
                        Ka.Wa([{
                            type: "3f",
                            name: "u75",
                            value: n
                        }]);
                        L.W() && (pa && ka.ja.bc(d, a, b), Ta && ka.ma.bc(n));
                        v && ka.La.bc(d)
                    },
                    Ag: function(d, a, b) {
                        var n = d * a * b;
                        z.Nj = a;
                        z.fl = b;
                        z.hj = d;
                        Ka.Wa([{
                            type: "1f",
                            name: "u76",
                            value: n
                        }]);
                        L.W() && (pa && ka.ja.cc(d * a, b), Ta && ka.ma.cc(n));
                        v && ka.La.cc(d)
                    },
                    Bg: function(d) {
                        z.Mc = d;
                        Ka.Wa([{
                            type: "1f",
                            name: "u7",
                            value: d
                        }]);
                        L.W() && (pa && ka.ja.te(d), Ta && ka.ma.te(d))
                    },
                    yg: function(d, a) {
                        z.Lh = d;
                        z.oa = a;
                        Ka.Wa([{
                            type: "1f",
                            name: "u77",
                            value: d
                        }, {
                            type: "1f",
                            name: "u78",
                            value: a
                        }])
                    },
                    nk: function(d) {
                        va = d;
                        0 === S && Ka.Wa([{
                            type: "1f",
                            name: "u82",
                            value: va[0]
                        }, {
                            type: "1f",
                            name: "u83",
                            value: va[1]
                        }])
                    },
                    oe: function(a) {
                        z.we = a;
                        L.De();
                        c.Ed();
                        Ma.Ed(a.$c);
                        ia = !0;
                        Xa = a.Gd;
                        mb = a.Hc;
                        kb = a.ik;
                        db = a.rl;
                        ub = a.ol;
                        Ea = a.Yj;
                        var b = [{
                            type: "1f",
                            name: "u8",
                            value: Xa
                        }, {
                            type: "1f",
                            name: "u5",
                            value: mb
                        }, {
                            type: "1f",
                            name: "u9",
                            value: kb
                        }, {
                            type: "mat4",
                            name: "u4",
                            value: Ea
                        }, {
                            type: "2f",
                            name: "u79",
                            value: a.dh
                        }];
                        a.Ce = b;
                        var n = [{
                            type: "3f",
                            name: "u10",
                            value: [0, 0, 0]
                        }, {
                            type: "3f",
                            name: "u11",
                            value: a.Le
                        }, {
                            type: "3f",
                            name: "u12",
                            value: a.Ke
                        }, {
                            type: "1f",
                            name: "u13",
                            value: 0
                        }, {
                            type: "1f",
                            name: "u14",
                            value: a.$c
                        }, {
                            type: "1f",
                            name: "u15",
                            value: 1
                        }];
                        a.Wg = n;
                        void 0 !== ka.ja && a.xb && L.W() && (ka.ja.i(a), d.push(function(d) {
                            ka.ja.qe(d);
                            t = pa = !0
                        }), void 0 !== ka.ma && a.pc && (ka.ma.i(a), d.push(function(d) {
                            ka.ma.qe(d);
                            Ta = !0
                        })), void 0 !== ka.Db && a.pd && (ka.Db.i(a), ba = Bb = !0));
                        void 0 !== ka.La && (ka.La.i(a), za = ka.La.oj({
                            width: a.Rb,
                            height: 2 * a.Rb,
                            depth: 1.5 * a.Rb,
                            Ai: -a.Rd,
                            Ia: a.Pd,
                            ei: a.Qd
                        }), v = !0);
                        H || void 0 !== a.ta || (a.ta = [0, 0, 120]);
                        Lb = E = g.Nd;
                        if (!H && E) {
                            var D = 1 * L.jb(),
                                aa = 1 * L.ib(),
                                S = {
                                    isLinear: !0,
                                    isPot: !1,
                                    width: D,
                                    height: aa
                                };
                            Kb = G.a(S);
                            Aa = G.a(S);
                            sa = 1 / D;
                            P = 1 / aa
                        }
                        b = [{
                            type: "1i",
                            name: "u25",
                            value: 1
                        }, {
                            type: "3f",
                            name: "u6",
                            value: a.ta
                        }, {
                            type: "1f",
                            name: "u77",
                            value: a.za
                        }, {
                            type: "1f",
                            name: "u78",
                            value: a.oa
                        }].concat(b, n);
                        va = a.la;
                        n = [{
                            type: "1f",
                            name: "u82",
                            value: va[0]
                        }, {
                            type: "1f",
                            name: "u83",
                            value: va[1]
                        }];
                        L.W() ? (D = [{
                            type: "1i",
                            name: "u0",
                            value: 0
                        }], aa = [{
                            type: "1i",
                            name: "u86",
                            value: 2
                        }], f.g("s31NNGLcolor", b.concat(n)), f.g("s31NNGLtexture", [].concat(D, b, n)), f.g("s31NNGLtextureNormalMap", [].concat(D, aa, b, n)), f.g("s31NNGLtextureParamsMap", [{
                            type: "1i",
                            name: "u2",
                            value: 2
                        }].concat(D, b, n)), f.g("s31NNGLtextureNormalParamsMap", [{
                            type: "1i",
                            name: "u2",
                            value: 3
                        }].concat(D, aa, b, n))) : (F.Na.Ig(!1), F.position.Ig("s35"), f.g("s35", b.concat(n)), f.g("s36", [{
                            type: "1i",
                            name: "u0",
                            value: 0
                        }].concat(b)), f.g("s37", b), f.g("s38", b), f.g("s39", b.concat([{
                            type: "1i",
                            name: "u86",
                            value: 0
                        }])), f.g("s40", b), f.g("s41", b.concat([{
                            type: "1i",
                            name: "u2",
                            value: 0
                        }])));
                        f.g("s8", [{
                            type: "2f",
                            name: "u26",
                            value: a.Ae
                        }]);
                        f.g(u.Y ? "s21" : "s22", [{
                            type: "1f",
                            name: "u48",
                            value: a.ld
                        }, {
                            type: "3f",
                            name: "u49",
                            value: a.ke
                        }, {
                            type: "1f",
                            name: "u50",
                            value: a.vd
                        }, {
                            type: "1f",
                            name: "u51",
                            value: 1
                        }, {
                            type: "3f",
                            name: "u47",
                            value: a.hh
                        }]);
                        if (K = a.Fc) q = a.Ej, f.g("s20", [{
                            type: "4f",
                            name: "u36",
                            value: a.Ec
                        }, {
                            type: "1f",
                            name: "u39",
                            value: a.ce
                        }, {
                            type: "2f",
                            name: "u37",
                            value: a.Dj
                        }]), V = a.ee;
                        Y.forEach(function(d) {
                            d.oe(a)
                        });
                        H = !0
                    },
                    Al: function(d) {
                        Y.push(d)
                    },
                    Cg: function(d, a, b, n) {
                        d && (ma = d, pa && ka.ja.vb(d), Ta && ka.ma.vb(d), Bb && ka.Db.vb(d), Y.forEach(function(a) {
                            a.vb(d)
                        }));
                        a && Ka.sk(a, n ? !0 : !1);
                        b && (tb = b);
                        n && (Gb = n);
                        R = !0
                    },
                    Bl: function(d) {
                        W && (fa = !0, Z = G.a({
                            width: na.H(),
                            height: na.S(),
                            isPot: !1
                        }), da = d)
                    },
                    sk: function(d, a) {
                        na = "string" === typeof d ? G.a({
                            url: d,
                            isFloat: !1
                        }) : d;
                        d = na.H();
                        var b = na.S(),
                            n = {
                                width: d,
                                height: b,
                                isPot: !1
                            };
                        pa && (J && J.remove(), J = G.a(n));
                        ea = qa.a({
                            width: d,
                            height: b
                        });
                        Bb || Ta ? (ka.Db.pe(d, b), U && U.remove(), U = G.a(n)) : U = na;
                        t && ka.ja.pe(d, b);
                        a && (ab && ab.remove(), ab = G.a(n));
                        W = !0
                    },
                    mh: function(a) {
                        y.push(a);
                        0 !== d.length && (d.forEach(function(d) {
                            d(a)
                        }), d.splice(0, d.length))
                    },
                    qm: function(d) {
                        d = y.indexOf(d); - 1 !== d && y.splice(d, 1)
                    },
                    Cl: function(d) {
                        Q.push(d)
                    },
                    rm: function(d) {
                        d = Q.indexOf(d); - 1 !== d && Q.splice(d, 1)
                    },
                    Rg: function(d) {
                        H && (ha = d)
                    },
                    animate: function(d) {
                        !u.Ca || H && R ? ha && (A || T > u.Oj && C ? (N && clearTimeout(N), ++T, window.cancelAnimationFrame(Ka.animate), N = setTimeout(function() {
                            window.requestAnimationFrame(Ka.animate)
                        }, 16)) : (l && FPSCounter.Km(), Ka.qg(d), ++T, H || ha && window.requestAnimationFrame(Ka.animate))) : setTimeout(Ka.animate, 100)
                    },
                    El: function(d) {
                        X.push(d)
                    },
                    qg: function(d) {
                        if ((!u.Ca || H && R) && D) {
                            X.forEach(a);
                            if (L.W()) {
                                if (!F.set() && !L.N()) {
                                    L.Vk();
                                    Ja();
                                    Ra.kc();
                                    f.xk();
                                    u.Ca && Ka.ek();
                                    b.flush();
                                    window.requestAnimationFrame(Ka.animate);
                                    return
                                }
                                H || Wb.ck();
                                h();
                                F.K();
                                M && b.depthMask(!1)
                            } else H && ma.Kb(1), F.Na.set(!0, !0, !0), r(), F.Na.K(), M && b.depthMask(!1), F.Wb.set(!1, !M, !1), x(), F.Wb.K(), F.position.set(!0, !M, !1), Oa.O(), w(), F.position.K(), F.Ta.set(!1, !M, !1), k(), F.Ta.K();
                            b.disable(b.DEPTH_TEST);
                            M || b.depthMask(!1);
                            u.Y && rb.O();
                            if (fa && 1 !== S) {
                                f.set(da);
                                qa.fa();
                                Z.ec();
                                Z.j();
                                na.b(0);
                                var c = Z;
                                O.h(!0, !0)
                            } else c = na;
                            if (W) {
                                switch (S) {
                                    case 0:
                                        var z = c;
                                        break;
                                    case 2:
                                        ea.bind(!1, !0);
                                        ab.j();
                                        f.set("s2");
                                        f.A("u17", aa);
                                        c.b(1);
                                        Gb.b(0);
                                        O.h(!fa, !fa);
                                        z = ab;
                                        break;
                                    case 1:
                                        z = Gb
                                }
                                t && 1 !== S && L.W() ? (z.Kb(0), ba && ka.Db.O(z, U), ea.bind(!1, !ba), Ta && (ba ? z.b(0) : (U.j(), f.set("s1"), O.h(!0, !0)), ka.ma.O()), U.b(0), tb.Kb(2), ka.ja.O(), J.j(), f.set("s1"), ba || Ta ? U.b(0) : z.b(0), O.h(!0, !u.Y), ka.ja.add(), J.b(7)) : z.b(7)
                            } else G.yf().b(7);
                            f.set(u.Y ? "s21" : "s22");
                            Ra.Mh();
                            I.J();
                            u.Zj ? (b.enable(b.BLEND), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA)) : b.disable(b.BLEND);
                            H || Oa.Dd();
                            F.position.b(0);
                            F.Ta.b(1);
                            F.Na.b(2);
                            n.lc(3);
                            F.Wb.b(6);
                            n.mc(4);
                            n.ff();
                            u.Y && rb.b(5);
                            O.h(!0, !0);
                            qa.fa();
                            Lb ? (Kb.J(), I.b(0), f.set("s13"), f.M("u24", 0, P), O.h(!1, !1), Aa.j(), Kb.b(0), f.M("u24", sa, 0), O.h(!1, !1), f.set("s14"), p.J(), Aa.b(0)) : (f.set("s1"), p.J(), I.b(0));
                            O.h(!1, !1);
                            f.set("s9");
                            ra.J();
                            p.b(0);
                            O.h(!1, !1);
                            p.j();
                            ra.b(0);
                            ia ? (f.set("s8"), la.b(1), ma.b(2), O.h(!1, !1), f.set("s1"), la.J(), p.b(0), O.h(!1, !1)) : (f.set("s7"), O.h(!1, !1), p.b(0));
                            qa.X();
                            b.viewport(0, 0, L.H(), L.S());
                            K && H ? (f.set("s20"), f.A("u38", d * V), q.b(1), ma.b(2), z.b(3)) : f.set("s1");
                            O.h(!1, !1);
                            b.enable(b.DEPTH_TEST);
                            b.depthMask(!0);
                            b.flush()
                        }
                    },
                    Nk: function() {
                        u.ii || ha || (ha = !0, Ka.animate(Date.now()), B || Ob.Ok(), B || Ma.Cb(!1), m && clearTimeout(m), u.Y && rb.Pc(), m = setTimeout(Ka.ra, u.Hh), B || L.kj(), B = !0)
                    },
                    Gm: function() {
                        ha && (C = ha = !1, cancelAnimationFrame(Ka.animate))
                    },
                    ra: function() {
                        C || !B || A || u.cf || (C = A = !0, m && clearTimeout(m), ja && clearTimeout(ja), Oa.Kd().rg(), m = setTimeout(function() {
                            L.Ee(u.ge);
                            u.Y && rb.Xg();
                            T = 0;
                            e()
                        }, 24))
                    },
                    wake: function() {
                        C && B && !A && (A = !0, C = !1, T = 0, Oa.Kd().rg(), m && clearTimeout(m), ja && clearTimeout(ja), m = setTimeout(function() {
                            L.Ee(1);
                            u.Y && rb.Pc();
                            e()
                        }, 16))
                    },
                    gm: function() {
                        l = !0
                    },
                    oi: function() {
                        l && FPSCounter.remove();
                        l = !1
                    },
                    Im: function(d) {
                        Lb = d && E
                    },
                    Wc: function(d) {
                        ia = d
                    },
                    Om: function() {
                        f.g("s22", [{
                            type: "1f",
                            name: "u54",
                            value: u.rb
                        }, {
                            type: "1f",
                            name: "u55",
                            value: u.Lc
                        }])
                    },
                    resize: function(d, a, b) {
                        var n = d * b;
                        b *= a;
                        I.resize(n, b);
                        p.resize(d, a);
                        ra.resize(d, a);
                        u.Ca && la.resize(d, a);
                        E && (n *= 1, b *= 1, Kb.resize(n, b), Aa.resize(n, b), sa = 1 / n, P = 1 / b);
                        d = [{
                            type: "2f",
                            name: "u24",
                            value: [1 / d, 1 / a]
                        }];
                        f.g("s9", d);
                        f.g("s7", d)
                    },
                    G: function() {
                        y.concat(Q).forEach(function(d) {
                            d.G()
                        });
                        y.splice(0, y.length);
                        Q.splice(0, Q.length);
                        F.Na.remove();
                        F.Ta.remove();
                        F.Wb.remove();
                        F.position.remove();
                        I.remove();
                        p.remove();
                        ra.remove();
                        la && la.remove();
                        A = !0
                    }
                };
            return Ka
        }(),
        ka = {},
        L = function() {
            function a() {
                Ra.resize(w * I, r * I);
                C.W() && eb.resize(w * I, r * I);
                J.resize(w, r, I);
                u.Y && rb.resize(w * I, r * I, I);
                C.De()
            }
            var e, w, r, x = -1,
                k = !1,
                g = !1,
                y = !1,
                Q = !1,
                F = !1,
                T = !1,
                h = !1,
                I = 1,
                l = !1,
                ra = !1,
                la = !1,
                ha = !1,
                B = !1,
                C = {
                    i: function(a) {
                        void 0 !== a.onload && a.onload && (ra = a.onload);
                        void 0 === a.expand && (a.expand = !1);
                        void 0 === a.Bc && (a.Bc = !1);
                        void 0 === a.ba && (a.ba = !1);
                        void 0 === a.Ra && (a.Ra = !1);
                        void 0 === a.preserveDrawingBuffer && (a.preserveDrawingBuffer = !1);
                        a.Bc && (k = !0);
                        e = a.ba ? a.ba : document.getElementById(a.Zh);
                        a.expand && C.expand();
                        try {
                            window.wl = a.Ra ? a.Ra.Hi() : e.getContext("webgl", {
                                antialias: !1,
                                alpha: !1,
                                depth: !0,
                                premultipliedAlpha: !1,
                                stencil: !1,
                                preserveDrawingBuffer: a.preserveDrawingBuffer
                            });
                            la = !a.Ra || a.Ra && !a.Ra.N();
                            ha = !la;
                            8 > b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS) && C.Nb("too few texture image units");
                            if (!wa.i()) return C.Nb("invalid config");
                            u.bl && (g = b.getExtension("EXT_texture_filter_anisotropic")) && (F = !0);
                            u.cl && b.getExtension("WEBGL_compressed_texture_s3tc");
                            la && (b.getExtension("OES_element_index_uint") || b.getExtension("MOZ_OES_element_index_uint") || b.getExtension("WEBKIT_OES_element_index_uint"));
                            !ha && u.dl && (y = b.getExtension("EXT_sRGB")) && (T = !0);
                            la ? (Q = b.getExtension("WEBGL_draw_buffers")) && !u.bf && (h = !0) : h = 4 <= b.getParameter(b.MAX_DRAW_BUFFERS)
                        } catch (N) {
                            return C.Nb(N)
                        }
                        if (null === b || !b) return C.Nb("GL is null");
                        a.expand && window.addEventListener("resize", C.expand, !1);
                        e.addEventListener("contextmenu", function(a) {
                            a.preventDefault();
                            return !1
                        }, !1);
                        if (0 == b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.HIGH_FLOAT).precision) return C.Nb("Highp precision not supported");
                        w = e.width;
                        r = e.height;
                        C.Sb();
                        return !0
                    },
                    Sb: function() {
                        x = k ? 3 : 2;
                        wa.U() || (x = Math.min(x, 1));
                        wa.Uh() || (x = Math.min(x, 0));
                        c.i();
                        Ra.i();
                        for (var a in ka) ka[a].Zb();
                        f.i();
                        Oa.i();
                        Ma.i();
                        J.i();
                        Ob.i();
                        u.Y && rb.i();
                        "undefined" !== typeof FPSCounter && FPSCounter.i();
                        C.De();
                        C.li();
                        l = !0;
                        ra && ra();
                        return !0
                    },
                    li: function() {
                        if (ha || h) {
                            var a = eb.a({
                                width: 256,
                                height: 1
                            });
                            a.bind();
                            b.viewport(0, 0, 256, 1);
                            f.set("s30");
                            f.qa("color", [1, 0, 0, 1]);
                            O.h(!0, !0);
                            b.clearColor(0, 0, 0, 0);
                            b.clear(b.COLOR_BUFFER_BIT || b.DEPTH_BUFFER_BIT);
                            qa.X();
                            f.set("s1");
                            a.Ta.b(0);
                            O.h(!1, !1);
                            a = new Uint8Array(1024);
                            b.readPixels(0, 0, 256, 1, b.RGBA, b.UNSIGNED_BYTE, a);
                            B = 1 >= a[1020]
                        }
                    },
                    N: function() {
                        return ha
                    },
                    H: function() {
                        return w
                    },
                    S: function() {
                        return r
                    },
                    jb: function() {
                        return I * C.H()
                    },
                    ib: function() {
                        return I * C.S()
                    },
                    Ji: function() {
                        return w / r
                    },
                    R: function() {
                        return x
                    },
                    vj: function() {
                        return 3 === x
                    },
                    Jf: function() {
                        return B
                    },
                    W: function() {
                        return h
                    },
                    Vk: function() {
                        h = !1
                    },
                    km: function() {
                        return !1
                    },
                    Yh: function() {
                        return 0 < C.R()
                    },
                    Il: function() {
                        return C.W() && 0 < C.R()
                    },
                    Jd: function(a) {
                        var c = b,
                            e = "";
                        ha || (c = Q, e = "_WEBGL");
                        return [c["COLOR_ATTACHMENT0" + e], c["COLOR_ATTACHMENT1" + e], c["COLOR_ATTACHMENT2" + e], c["COLOR_ATTACHMENT3" + e]].splice(0, a)
                    },
                    uc: function(a) {
                        return C.Jd(4)[a]
                    },
                    cj: function() {
                        return ha ? b.SRGB ? b.SRGB : b.RGBA : T ? y.SRGB_ALPHA_EXT : b.RGBA
                    },
                    tj: function() {
                        return F
                    },
                    Ni: function() {
                        return g
                    },
                    Hj: function(a) {
                        C.N() ? b.drawBuffers(C.Jd(a)) : Q.drawBuffersWEBGL(C.Jd(a))
                    },
                    expand: function() {
                        J.wake();
                        C.resize(window.innerWidth, window.innerHeight);
                        J.ra()
                    },
                    resize: function(b, c) {
                        !e || b === w && c === r || (w = b, r = c, e.width = w, e.height = r, l && (Oa.resize(), a()))
                    },
                    De: function() {
                        var a = [{
                            type: "2f",
                            name: "u24",
                            value: [1 / L.jb(), 1 / L.ib()]
                        }];
                        f.g("s9", a);
                        f.g("s7", a)
                    },
                    Ee: function(b) {
                        I = b;
                        a()
                    },
                    ya: function(a, b) {
                        e.addEventListener(a, b, !1)
                    },
                    Nb: function() {
                        x = -1;
                        u.$f && (location.href = u.$f);
                        return !1
                    },
                    We: function() {
                        return 0 <= x
                    },
                    mm: function() {},
                    um: function() {},
                    Fm: function() {
                        var a = document.getElementById("loading");
                        a && (a.style.display = "block")
                    },
                    kj: function() {
                        var a = document.getElementById("loading");
                        a && (a.style.display = "none")
                    },
                    G: function() {
                        C.We() && (G.Uk(), J.G(), O.G(), Ra.G(), u.Y && rb.G(), Ba.G(), Ob.G(), f.G(), G.G(), b.flush(), b = null)
                    }
                };
            return C
        }(),
        Oa = function() {
            var a = !1,
                b = !1,
                c = [];
            return {
                i: function() {},
                a: function(e) {
                    void 0 === e.sg && (e.sg = !0);
                    void 0 === e.ed && (e.ed = .1);
                    void 0 === e.dd && (e.dd = 100);
                    void 0 === e.direction && (e.direction = [0, 0, -1]);
                    void 0 === e.pf && (e.pf = 45);
                    var w = new Ca,
                        k = new V(50, -50, -400),
                        r;
                    w.setPosition(k);
                    var y = new Int8Array(20),
                        g = new Int8Array(20),
                        F = 0,
                        T = 0,
                        h = 0,
                        I = 0,
                        l = {
                            O: function() {
                                g[f.vc()] || (f.dc("u56", w.elements), g[f.vc()] = 1);
                                y[f.vc()] || (f.dc("u68", r), y[f.vc()] = 1)
                            },
                            Cd: function() {
                                T || (f.dc("u56", w.elements), T = 1);
                                F || (f.M("u57", r[0], r[5]), F = 1)
                            },
                            Dd: function() {
                                h || (f.Rc("u47", k.x, k.y, k.z), h = 1)
                            },
                            fb: function() {
                                I || (f.Rc("u87", k.x, k.y, k.z), I = 1)
                            },
                            Ye: function() {
                                var a = e.ed,
                                    b = e.dd,
                                    c = Math.tan(.5 * e.pf * Math.PI / 180);
                                r = [.5 / c, 0, 0, 0, 0, .5 * L.Ji() / c, 0, 0, 0, 0, -(b + a) / (b - a), -1, 0, 0, -2 * b * a / (b - a), 0];
                                for (a = 0; 20 > a; ++a) y[a] = 0;
                                F = 0
                            },
                            wk: function(a, b) {
                                k.wg(b[0]).xg(b[1]).z = b[2];
                                w.elements.set(a);
                                for (a = 0; 20 > a; ++a) g[a] = 0;
                                I = h = T = 0
                            },
                            rg: function() {
                                for (var a = I = h = 0; 20 > a; ++a) g[a] = 0
                            }
                        };
                    l.Ye();
                    a = l;
                    b = !0;
                    e.sg && c.push(l);
                    return l
                },
                O: function() {
                    b && a.O()
                },
                Cd: function() {
                    b && a.Cd()
                },
                Dd: function() {
                    b && a.Dd()
                },
                fb: function() {
                    b && a.fb()
                },
                resize: function() {
                    c.forEach(function(a) {
                        a.Ye()
                    })
                },
                Kd: function() {
                    return a
                }
            }
        }(),
        Ra = function() {
            var a = [],
                c;
            return {
                i: function() {
                    c = qa.a({
                        width: L.jb(),
                        height: L.ib(),
                        Tb: !L.W()
                    })
                },
                a: function(e) {
                    void 0 === e.width && (e.width = L.jb());
                    void 0 === e.height && (e.height = L.ib());
                    void 0 === e.isFloat && (e.isFloat = !1);
                    void 0 === e.kb && (e.kb = !1);
                    void 0 === e.clearColor && (e.clearColor = [0, 0, 0, 0]);
                    void 0 === e.v && (e.v = 4);
                    var r = void 0 !== e.wb && e.wb ? !0 : !1,
                        w = G.a({
                            isFloat: e.isFloat && wa.U(),
                            I: e.isFloat,
                            width: e.width,
                            height: e.height,
                            isPot: !1,
                            isLinear: !1,
                            v: e.v
                        }),
                        k = e.wb,
                        g = {
                            set: function(a, x, F) {
                                F && c.bind(!1, F);
                                w.j();
                                a && (b.clearColor(e.clearColor[0], e.clearColor[1], e.clearColor[2], e.clearColor[3]), c.td());
                                x && c.Xe();
                                r && f.set(k)
                            },
                            Ig: function(a) {
                                r = (k = a) ? !0 : !1
                            },
                            K: function() {
                                w.Wk()
                            },
                            b: function(a) {
                                w.b(a)
                            },
                            resize: function(a, b) {
                                w.resize(a, b)
                            },
                            debug: function() {
                                w.debug()
                            },
                            remove: function() {
                                w.remove()
                            }
                        };
                    e.kb && a.push(g);
                    return g
                },
                resize: function(b, e) {
                    c.resize(b, e);
                    a.forEach(function(a) {
                        a.resize(b, e)
                    })
                },
                Mh: function() {
                    c.Se()
                },
                kc: function() {
                    c.kc()
                },
                ec: function() {
                    c.ec()
                },
                Ll: function() {
                    c.Xe()
                },
                Kl: function() {
                    c.td()
                },
                Jl: function() {
                    c.clear()
                },
                G: function() {
                    c.remove()
                }
            }
        }(),
        eb = function() {
            var a = [];
            return {
                a: function(c) {
                    void 0 === c.width && (c.width = L.jb());
                    void 0 === c.height && (c.height = L.ib());
                    var e = b.createFramebuffer(),
                        r = c.width,
                        x = c.height,
                        k = !0,
                        g = G.a({
                            isFloat: wa.U(),
                            I: !0,
                            width: r,
                            height: x,
                            isPot: !1,
                            isLinear: !1,
                            v: 4
                        }),
                        y = G.a({
                            isFloat: wa.U(),
                            I: !0,
                            width: r,
                            height: x,
                            isPot: !1,
                            isLinear: !1,
                            v: 4
                        }),
                        Q = G.a({
                            isFloat: !1,
                            I: !1,
                            width: r,
                            height: x,
                            isPot: !1,
                            isLinear: !1,
                            v: 4
                        }),
                        F = G.a({
                            isFloat: !1,
                            I: !1,
                            width: r,
                            height: x,
                            isPot: !1,
                            isLinear: !1,
                            v: 4
                        }),
                        T = qa.Oi(),
                        h = qa.wc();
                    b.bindFramebuffer(T, e);
                    var I = b.createRenderbuffer();
                    b.bindRenderbuffer(b.RENDERBUFFER, I);
                    b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, r, x);
                    b.framebufferRenderbuffer(T, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, I);
                    b.clearDepth(1);
                    b.framebufferTexture2D(T, L.uc(0), b.TEXTURE_2D, g.get(), 0);
                    b.framebufferTexture2D(T, L.uc(1), b.TEXTURE_2D, y.get(), 0);
                    b.framebufferTexture2D(T, L.uc(2), b.TEXTURE_2D, F.get(), 0);
                    b.framebufferTexture2D(T, L.uc(3), b.TEXTURE_2D, Q.get(), 0);
                    L.Hj(4);
                    b.bindFramebuffer(T, null);
                    qa.reset();
                    c = {
                        position: g,
                        Ta: y,
                        Wb: Q,
                        Na: F,
                        bind: function() {
                            b.bindFramebuffer(T, e);
                            qa.reset()
                        },
                        set: function() {
                            b.bindFramebuffer(T, e);
                            qa.reset();
                            if (k) {
                                if (b.checkFramebufferStatus(h) !== b.FRAMEBUFFER_COMPLETE) return !1;
                                k = !1
                            }
                            b.viewport(0, 0, r, x);
                            b.clearColor(0, 0, 0, 0);
                            L.Jf() || (f.set("s29"), O.h(!1, !1));
                            b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                            return !0
                        },
                        K: function() {},
                        resize: function(a, c) {
                            r = a;
                            x = c;
                            g.resize(a, c);
                            y.resize(a, c);
                            F.resize(a, c);
                            Q.resize(a, c);
                            b.bindRenderbuffer(b.RENDERBUFFER, I);
                            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, r, x);
                            b.bindRenderbuffer(b.RENDERBUFFER, null)
                        },
                        remove: function() {
                            g.remove();
                            y.remove();
                            F.remove();
                            Q.remove();
                            b.deleteRenderbuffer(I);
                            b.deleteFramebuffer(e)
                        }
                    };
                    a.push(c);
                    return c
                },
                resize: function(b, c) {
                    a.forEach(function(a) {
                        a.resize(b, c)
                    })
                }
            }
        }(),
        Ba = function() {
            var a = [],
                b = u.Qe;
            return {
                a: function(c) {
                    function e() {
                        g ? x() : (la = gc.a({
                            Fa: T,
                            rj: b
                        }), B = u.Ih[L.R()], h = G.a({
                            isFloat: wa.U(),
                            I: !0,
                            isPot: !0,
                            isLinear: !1,
                            aa: !0,
                            width: B,
                            height: B / 2,
                            v: 3
                        }), I = G.a({
                            isFloat: wa.U(),
                            I: !0,
                            isPot: !0,
                            isLinear: !1,
                            aa: !0,
                            width: B,
                            height: B / 2,
                            v: 3
                        }), l = G.a({
                            isFloat: wa.U(),
                            I: !0,
                            isPot: !0,
                            width: 1,
                            height: B / 2,
                            v: 3
                        }), p = G.a({
                            isFloat: wa.U() && !b,
                            I: !b,
                            isPot: !1,
                            isLinear: !0,
                            aa: !0,
                            isMipmap: !1,
                            width: B,
                            height: B / 2,
                            v: b ? 4 : 3
                        }), g = !0, x(), F.forEach(function(a) {
                            a()
                        }), F.splice(0, F.length))
                    }

                    function x() {
                        if (g) {
                            qa.fa();
                            la.$j();
                            h.J();
                            f.set("s12");
                            T.b(0);
                            f.A("u21", u.rb);
                            G.Ph(1);
                            O.h(!0, !0);
                            for (var a = u.pj[L.R()], c = 0; c < a; ++c) I.j(), f.set("s15"), f.M("u24", 1 / B, 0), h.b(0), O.h(!1, !1), h.j(), f.M("u24", 0, 2 / B), I.b(0), O.h(!1, !1);
                            l.J();
                            f.set("s17");
                            h.b(0);
                            O.h(!1, !1);
                            f.set(b ? "s19" : "s18");
                            p.J();
                            h.b(0);
                            l.b(1);
                            O.h(!1, !1);
                            G.X(0);
                            G.X(1)
                        }
                    }
                    c.Ma || (c.Ma = !1);
                    c.ab || (c.ab = !1);
                    c.bb || (c.bb = 0);
                    c.$a || (c.$a = 0);
                    var k, w = !1,
                        y = !1,
                        g = !1,
                        F = [],
                        T, h, I, l, p, la, ha, B, C = {
                            i: function() {
                                function a() {
                                    ++b;
                                    2 === b && (T = G.a({
                                        isFloat: wa.U(),
                                        I: !0,
                                        isPot: !1,
                                        isMipmap: !1,
                                        isLinear: !1,
                                        aa: !0,
                                        width: k,
                                        height: k / 2,
                                        v: 3
                                    }), qa.fa(), T.J(), f.set("s11"), f.A("u29", c.bb), f.A("u30", c.$a), w.b(0), y.b(1), O.h(!0, !0), e())
                                }
                                var b = 0;
                                k = u.Jh[L.R()];
                                ha = Math.log(k) / Math.log(2) - 1;
                                c.Ma && (w = G.a({
                                    isPot: !1,
                                    url: c.Ma,
                                    Z: a,
                                    v: 3,
                                    isFlipY: !1
                                }), y = G.a({
                                    isPot: !1,
                                    url: c.ab,
                                    Z: a,
                                    v: 3,
                                    isFlipY: !1
                                }))
                            },
                            Gg: function(a) {
                                T = a;
                                e()
                            },
                            lc: function(a) {
                                g && la.b(a)
                            },
                            mc: function(a) {
                                g && p.b(a)
                            },
                            ff: function() {
                                f.A("u46", ha)
                            },
                            rf: function() {
                                return ha
                            },
                            H: function() {
                                return k
                            },
                            eb: function(a) {
                                g ? a() : F.push(a)
                            },
                            G: function() {
                                w && w.remove();
                                y && y.remove();
                                h.remove();
                                l.remove();
                                I.remove();
                                la.remove();
                                p.remove();
                                T.remove()
                            }
                        };
                    a.push(C);
                    C.i();
                    return C
                },
                G: function() {
                    a.forEach(function(a) {
                        a.G()
                    })
                }
            }
        }(),
        pa = {
            a: function(a) {
                var c = a.Aj,
                    w = a.yj,
                    r = 0,
                    x = c.H();
                a = u.Qe;
                var k = G.a({
                        isFloat: wa.U() && !a,
                        I: !a,
                        isLinear: !0,
                        isMipmap: !1,
                        isPot: !1,
                        width: x,
                        v: a ? 4 : 3,
                        isFlipY: !1
                    }),
                    g = G.a({
                        isFloat: wa.U() && !a,
                        I: !a,
                        isPot: !1,
                        isLinear: !0,
                        aa: !0,
                        isMipmap: !1,
                        width: x,
                        height: x / 2,
                        v: a ? 4 : 3
                    }),
                    y = qa.a({
                        width: x,
                        height: x
                    }),
                    Q = a ? "s3" : "s2";
                return {
                    Ck: function(a) {
                        r = a;
                        f.set(Q);
                        b.viewport(0, 0, x, x);
                        y.j();
                        k.j();
                        f.A("u17", r);
                        c.lc(1);
                        w.lc(0);
                        O.h(!0, !0);
                        b.viewport(0, 0, x, x / 2);
                        g.j();
                        c.mc(1);
                        w.mc(0);
                        O.h(!1, !1);
                        b.flush()
                    },
                    lc: function(a) {
                        k.b(a)
                    },
                    mc: function(a) {
                        g.b(a)
                    },
                    ff: function() {
                        f.A("u46", c.rf() * (1 - r) + w.rf() * r)
                    }
                }
            }
        },
        Ma = function() {
            function a(a) {
                var b = (H - u.rd) / (u.Ue - u.rd);
                b = 1 - Math.pow(1 - b, u.ul);
                H += a * (1 + b * u.vl);
                H = Math.min(Math.max(H, u.rd), u.Ue);
                R.Cb()
            }

            function b(b) {
                -1 !== y && (B = ha = 0, g(), a(u.tl * b.deltaY / window.innerHeight), b.preventDefault())
            }

            function c() {
                A += ha;
                N += B;
                N = Math.min(Math.max(N, u.Uj), u.Tj);
                R.Cb()
            }

            function f(b) {
                if (0 === y || -1 === y) return !1;
                var e = void 0 !== b.touches && b.touches.length;
                b.preventDefault();
                if (2 === y) {
                    var k = K(b.touches[0].pageX, b.touches[0].pageY, b.touches[1].pageX, b.touches[1].pageY);
                    a(-(m - k) * u.Vj);
                    m = k
                } else k = e ? b.touches[0].clientX : b.clientX, b = e ? b.touches[0].clientY : b.clientY, ha = 2 * (k - l) * Math.PI / L.H(), B = 2 * (b - p) * Math.PI / L.S(), 4 === y ? (U[0] += ha * u.hg, U[1] -= B * u.hg, U[0] = Math.min(Math.max(U[0], -u.jg), u.jg), U[1] = Math.min(Math.max(U[1], -u.kg), u.kg), R.Cb()) : c(), l = k, p = b
            }

            function x() {
                0 !== y && -1 !== y && (0 === ha && 0 === B || 1 !== y || !G ? J.ra() : (g(), la = Date.now(), na = setInterval(R.xj, C)), y = 0)
            }

            function k(a) {
                if (2 !== y && -1 !== y) {
                    B = ha = 0;
                    g();
                    J.wake();
                    var b = void 0 !== a.changedTouches && a.touches.length;
                    a.preventDefault();
                    b && 2 === a.touches.length ? (y = 2, m = K(a.touches[0].pageX, a.touches[0].pageY, a.touches[1].pageX, a.touches[1].pageY)) : (y = b || 2 !== a.button ? 1 : 4, l = b ? a.touches[0].clientX : a.clientX, p = b ? a.touches[0].clientY : a.clientY);
                    return !1
                }
            }

            function g() {
                na && (clearInterval(na), na = !1);
                W && (clearTimeout(W), W = !1)
            }
            var y = 0,
                Q = !1,
                F = !1,
                T = !1,
                h = 1,
                l, p, m, la = 0,
                ha = 0,
                B = 0,
                C = 16,
                A = u.Tg,
                N = u.ig,
                H = u.qd,
                M = new Float32Array([0, 0, 0, 0, 0]),
                na = !1,
                W = !1,
                U = [u.Sh, u.Th],
                G, R = {
                    i: function() {
                        G = u.nh[L.R()];
                        C = u.zi[L.R()];
                        L.ya("mousedown", k);
                        L.ya("mouseup", x);
                        L.ya("mouseout", x);
                        L.ya("mousemove", f);
                        L.ya("mousemove", f);
                        L.ya("wheel", b);
                        L.ya("touchstart", k);
                        L.ya("touchend", x);
                        L.ya("touchmove", f)
                    },
                    Cb: function(a) {
                        Q ? (F[0] = -N, F[1] = A, T[1].value = h / u.qd * H, J.Wa(T)) : (M[0] = A, M[1] = N, M[2] = H, M[3] = U[0], M[4] = U[1], Ob.kk(M, a))
                    },
                    xj: function() {
                        if (1E-4 > ha && 1E-4 > B || -1 === y) g(), B = ha = 0, 0 === y && J.ra();
                        var a = Date.now(),
                            b = a - la;
                        la = a;
                        a = Math.pow(G, b / C);
                        ha *= a;
                        B *= a;
                        c()
                    },
                    Ed: function(a) {
                        Q || (Q = !0, y = -1, F = [0, 0, 0], T = [{
                            name: "u10",
                            type: "3f",
                            value: F
                        }, {
                            name: "u14",
                            type: "1f",
                            value: 1
                        }], h = a)
                    },
                    Qg: function(a) {
                        -1 === y && a && (y = 0);
                        a || (y = -1)
                    },
                    dk: function() {
                        B = ha = 0;
                        A = u.Tg;
                        N = u.ig;
                        H = u.qd;
                        R.Cb()
                    },
                    ym: function(a) {
                        H = a
                    },
                    zm: function(a) {
                        U[0] = a[0];
                        U[1] = a[1];
                        u.Ve = a[2]
                    },
                    xm: function(a, b) {
                        A = a;
                        N = b
                    }
                };
            return R
        }(),
        Wb = function() {
            var a = {
                s31: !1,
                s31color: !1,
                s31NormalMap: !1,
                s31ParamsMap: !1,
                s31NormalParamsMap: !1
            };
            return {
                a: function(b) {
                    function e(a) {
                        a.tweaker && window.JEEFITAPI && m.Me(a.tweaker);
                        W.splice(0, W.length);
                        W.push({
                            n: 0,
                            offset: 0
                        });
                        U.min.set(Infinity, Infinity, Infinity);
                        U.max.set(-Infinity, -Infinity, -Infinity);
                        var c, e;
                        "undefined" !== typeof R && "string" === typeof a.faces && (a.faces = R(a.faces));
                        "undefined" !== typeof ba && ("string" === typeof a.vertices && (a.vertices = ba(a.vertices)), za && a.uvs.forEach(function(d, b) {
                            "string" === typeof d && (a.uvs[b] = ba(d))
                        }));
                        za = 0 < a.uvs.length && 0 < a.uvs[0].length;
                        var k = a.metadata.faces,
                            f = 1 + (za ? 1 : 0);
                        k = (a.faces.length - k) / (a.metadata.faces * f);
                        6 !== k && 8 !== k || za || (za = !0, ++f, k /= 2);
                        if (4 === k) {
                            var y = 6 * f + 2,
                                C = 4 * f + 1,
                                d = Array(a.metadata.faces * y);
                            for (k = 0; k < a.metadata.faces; ++k)
                                for (c = 0; c < f; ++c) d[k * y + 4 * c] = a.faces[k * C + 5 * c], d[k * y + 4 * c + 1] = a.faces[k * C + 5 * c + 1], d[k * y + 4 * c + 2] = a.faces[k * C + 5 * c +
                                    2], 0 === c && (d[k * y + 3] = a.faces[k * C + 4]), d[k * y + 4 * c + 3 * f + 1] = a.faces[k * C + 5 * c], d[k * y + 4 * c + 3 * f + 2] = a.faces[k * C + 5 * c + 2], d[k * y + 4 * c + 3 * f + 3] = a.faces[k * C + 5 * c + 3], 0 === c && (d[k * y + 3 * f + 4] = a.faces[k * C + 4]);
                            a.faces = d;
                            a.metadata.faces *= 2
                        }
                        I = Array(a.metadata.vertices);
                        for (k = 0; k < a.metadata.vertices; ++k) c = a.vertices[3 * k], y = a.vertices[3 * k + 1], C = a.vertices[3 * k + 2], I[k] = new V(c, y, C), sb(U, I[k]);
                        G = Array(a.metadata.faces);
                        c = 3 * f + 1;
                        for (k = 0; k < a.metadata.faces; ++k) G[k] = new Sa(a.faces[c * k], a.faces[c * k + 1], a.faces[c * k + 2]), G[k].mb = a.faces[c * k + 3];
                        P = 3 < I.length;
                        q && (q.visible = P);
                        h(I, G);
                        ra = p(I, G);
                        if (za) {
                            f = Array(I.length);
                            d = ["a", "b", "c"];
                            for (k = 0; k < a.metadata.faces; ++k)
                                for (c = 0; 3 > c; ++c)
                                    if (y = a.faces[7 * k + c], C = a.faces[7 * k + 1 + c + 3], "undefined" === typeof f[y]) f[y] = [
                                        [y, C]
                                    ];
                                    else if (f[y][0][1] !== C) {
                                var n = -1;
                                for (e = 1; e < f[y].length; ++e)
                                    if (f[y][e][1] === C) {
                                        n = f[y][e][0];
                                        break
                                    } - 1 === n ? (e = I.length, I.push(I[y].clone()), ra.push(ra[y].clone()), f[y].push([e, C]), f[e] = [
                                    [e, C]
                                ]) : e = n;
                                a.faces[7 * k + c] = e;
                                G[k][d[c]] = e
                            }
                            la = Array(I.length);
                            for (k = 0; k < I.length; ++k) C = f[k][0][1], la[k] = new Y(a.uvs[0][2 * C], a.uvs[0][2 * C + 1])
                        }
                        var D = fa(U);
                        b.Ib && (I.forEach(function(a) {
                            a.x -= D.x;
                            a.z -= D.z;
                            a.y -= U.min.y
                        }), U.min.x -= D.x, U.max.x -= D.x, U.min.z -= D.z, U.max.z -= D.z, U.max.y -= U.min.y, U.min.y = 0);
                        if (b.Jb) {
                            var z = u.Gh / Math.max(U.max.x - U.min.x, U.max.y - U.min.y, U.max.z - U.min.z);
                            I.forEach(function(a) {
                                a.sa(z)
                            });
                            U.min.sa(z);
                            U.max.sa(z)
                        }
                        c = za ? 8 : 6;
                        f = new Float32Array(I.length * c);
                        for (k = 0; k < I.length; ++k) f[c * k] = I[k].x, f[c * k + 1] = I[k].y, f[c * k + 2] = I[k].z, f[c * k + 3] = ra[k].x, f[c * k + 4] = ra[k].y, f[c * k + 5] = ra[k].z, za && (f[c * k + 6] = la[k].x, f[c * k + 7] = la[k].y);
                        G.sort(function(a, d) {
                            return a.mb - d.mb
                        });
                        ha = new(65536 > 3 * G.length ? Uint16Array : Uint32Array)(3 * G.length);
                        var S = 0;
                        G.forEach(function(a, d) {
                            a.mb === S ? W[S].n += 3 : (W.push({
                                n: 3,
                                offset: 3 * d
                            }), ++S);
                            ha[3 * d] = a.xa;
                            ha[3 * d + 1] = a.F;
                            ha[3 * d + 2] = a.Aa
                        });
                        B && B.remove();
                        B = O.a({
                            Ga: f,
                            da: ha
                        });
                        N = A = !1;
                        ma && q.Ze();
                        ha = f = null;
                        t = !0;
                        q.Bd();
                        b.Z && (b.Z(), b.Z = !1)
                    }

                    function r(a) {
                        B.Ba(a.n, a.offset)
                    }

                    function g(a, b) {
                        v[b] && (f.set(v[b].Xi()), B.bind(!1), za ? (f.Ea(), f.Eg()) : (f.Ja(), f.Fg()), v[b].Vb() && (f.ac(), A.Lb(!1), f.Oc(), Oa.fb()), v[b].pi(), v[b].sc(), B.Ba(a.n, a.offset))
                    }

                    function k(a, b) {
                        v[b] && (f.set(v[b].Yi()), B.bind(!1), za ? (f.Ea(), f.Eg()) : (f.Ja(), f.Fg()), v[b].Vb() && (f.ac(), A.Lb(!1), f.Oc(), Oa.fb()), q.Ob(), v[b].sc(), B.Ba(a.n, a.offset))
                    }

                    function l(a, b) {
                        na && v[b] && (v[b].ri(), B.Ba(a.n, a.offset))
                    }

                    function y(a, b) {
                        na && v[b] && (v[b].si(za), B.Ba(a.n, a.offset))
                    }

                    function Q(a, b) {
                        v[b] && (f.set(v[b].Ti()), v[b].lf(), B.Ba(a.n, a.offset))
                    }

                    function F(a, b) {
                        v[b] && (f.set(v[b].Ui()), q.Ob(), v[b].lf(), B.Ba(a.n, a.offset))
                    }

                    function T(a, b) {
                        v[b] && (f.set(v[b].Vi()), v[b].Vb() && (A.Lb(!1), f.Oc(), Oa.fb()), B.bind(!1), v[b].hf(za), B.Ba(a.n, a.offset))
                    }

                    function H(b, c) {
                        if (v[c]) {
                            var e = v[c].Wi();
                            f.set(e);
                            v[c].Vb() && (A.Lb(!1), f.Oc(), Oa.fb(), B.bind(!1));
                            a[e] || (q.Ob(), B.bind(!1), a[e] = !0);
                            v[c].hf(za);
                            B.Ba(b.n, b.offset)
                        }
                    }
                    if (!L.We()) return !1;
                    void 0 === b.Ib && (b.Ib = !1);
                    void 0 === b.Jb && (b.Jb = !1);
                    void 0 === b.Te && (b.Te = !1);
                    var I, G, ra, la, ha, B = !1,
                        C, A = !1,
                        N = !1,
                        pa = new Ca,
                        v = [],
                        na = !1,
                        W = [{
                            n: 0,
                            offset: 0
                        }],
                        U = new Z,
                        t = !1,
                        ea = [],
                        ma = !1,
                        E = [],
                        za = !1,
                        K = [],
                        P = !1,
                        q = {
                            visible: P,
                            Ze: function() {
                                N || (C = M(I, ra, la, G), A = O.a({
                                    Ga: C,
                                    da: !1
                                }), la = ra = G = I = C = null, N = !0)
                            },
                            Ob: function() {
                                Oa.O();
                                q.kf()
                            },
                            kf: function() {
                                f.dc("u69", pa.elements)
                            },
                            Rl: function() {
                                P && (q.kf(), B.bind(!1), za ? f.Ea() : f.Ja(), B.O())
                            },
                            xi: function(a) {
                                P && (a || q.Ob(), B.bind(!1), za ? f.Ea() : f.Ja(), B.O())
                            },
                            yi: function() {
                                P && (B.bind(!1), za ? f.Ea() : f.Ja(), W.forEach(l))
                            },
                            gf: function() {
                                P && (B.bind(!1), za ? f.Ea() : f.Ja(), E.forEach(r))
                            },
                            wi: function(a) {
                                na && P && (B.bind(!1), za ? f.Ea() : f.Ja(), a ? W.forEach(Q) : W.forEach(F))
                            },
                            rc: function(a) {
                                P && (a || q.Ob(), B.bind(!1), a || (f.Ea(), f.ac()), na && W.forEach(y))
                            },
                            sc: function(a) {
                                na && P && (a ? W.forEach(g) : W.forEach(k))
                            },
                            ui: function() {
                                na && P && W.forEach(H)
                            },
                            ti: function() {
                                na && P && W.forEach(T)
                            },
                            wf: function() {
                                return ia
                            },
                            uf: function() {
                                return K
                            },
                            re: function(a, b) {
                                function e(a, e) {
                                    a && (a.Z = function() {
                                        ++f === k && (na = !0, ma && q.eb(q.Ze, 5), q.Bd(), b && q.eb(function() {
                                            b(q)
                                        }, 10))
                                    }, a = c.a(a), v[e] && v[e].G(), v[e] = a, ma = ma || a.Vb())
                                }
                                K = a;
                                na = !1;
                                var k = a.length,
                                    f = 0;
                                v = Array(k);
                                ma = !1;
                                a.forEach(function(a, b) {
                                    "string" === typeof a ? X(-1 === a.indexOf(".json") ? a + ".json" : a, function(d) {
                                        d.name = a;
                                        e(d, b, a)
                                    }) : e(a, b, !1)
                                });
                                q.eb(function() {
                                    q.$k();
                                    J.gc();
                                    J.Rg(!0)
                                }, 4)
                            },
                            $k: function() {
                                E.splice(0, E.length);
                                W.forEach(function(a, b) {
                                    v[b] && v[b].wj() && E.push(a)
                                })
                            },
                            eb: function(a, b) {
                                t && na ? a(q) : ea.push({
                                    Pa: a,
                                    order: b ? b : 0
                                })
                            },
                            Bd: function() {
                                t && na && (ea.sort(function(a, b) {
                                    return 0 > a.order - b.order ? 1 : -1
                                }), ea.forEach(function(a) {
                                    a.Pa(q)
                                }), ea.splice(0, ea.length))
                            },
                            remove: function() {
                                q.G();
                                q = null
                            },
                            G: function() {
                                B.remove();
                                v.forEach(function(a) {
                                    a.G()
                                });
                                N && A.remove()
                            },
                            aj: function() {
                                return U.size().x
                            },
                            bj: function() {
                                return U.size().y
                            },
                            em: function() {
                                return U.size().z
                            },
                            Ki: function() {
                                return fa(U).x
                            },
                            Li: function() {
                                return fa(U).y
                            },
                            Yl: function() {
                                return fa(U).z
                            },
                            cm: function() {
                                return U.min.y
                            },
                            replace: function(a, b, c) {
                                if (a === ia) return b && (q.Bd(), b(q)), !1;
                                ia = a;
                                J.Rg(!1);
                                X(a, function(a) {
                                    e(a);
                                    b && b(q)
                                }, c);
                                return !0
                            }
                        };
                    void 0 !== b.Xb && b.Xb && q.re(b.Xb, b.Te);
                    var ia = b.url;
                    da(b.url, e, void 0);
                    return q
                },
                ck: function() {
                    a.s31 = !1;
                    a.s31color = !1;
                    a.s31NormalMap = !1;
                    a.s31ParamsMap = !1;
                    a.s31NormalParamsMap = !1
                }
            }
        }(),
        Ob = function() {
            var a, b = !1,
                c = !1,
                f, g = new Float32Array(16),
                k = new Float32Array(3),
                h = {
                    data: 0
                },
                y = {
                    i: function() {
                        a = u.gb ? new Worker("js/worker.php") : {
                            postMessage: function(a) {
                                h.data = a;
                                ia.cg(h)
                            },
                            terminate: function() {}
                        };
                        a.onmessage = function(a) {
                            switch (a.data[0]) {
                                case 3:
                                    var c;
                                    for (c = 0; 16 > c; ++c) g[c] = a.data[c + 1];
                                    for (c = 0; 3 > c; ++c) k[c] = a.data[c + 17];
                                    Oa.Kd().wk(g, k);
                                    break;
                                case 6:
                                    y.tk(), b = !0, Ma.Cb(!1), u.Y && (rb.enable(), rb.Pc())
                            }
                        };
                        a.onerror = function() {};
                        f = new Float32Array(6);
                        f[0] = 2;
                        u.gb || ia.vk(a)
                    },
                    Ok: function() {
                        u.ef || (c = !0)
                    },
                    Hm: function() {
                        c = !1
                    },
                    kk: function(e, k) {
                        if (k || b && c) f[1] = e[0], f[2] = e[1], f[3] = e[2], f[4] = e[3], f[5] = e[4], a.postMessage(f)
                    },
                    tk: function() {
                        a.postMessage([5, u.Ve])
                    },
                    G: function() {
                        u.gb && a.terminate()
                    }
                };
            return y
        }(),
        ia = function() {
            var a = 0,
                b = 0,
                c = 0,
                f = [0, 0],
                g = new Ca,
                k = new q,
                h = new q,
                y = new V,
                Q = new V,
                F = new E,
                T = 0,
                l = new Float32Array(20);
            l[0] = 3;
            var I = !1,
                p = {
                    data: !1
                },
                m = {
                    i: function() {
                        "undefined" === typeof u && (self.xl = {
                            gb: !0
                        });
                        u.gb && (onmessage = m.cg, m.he([6]))
                    },
                    cg: function(a) {
                        switch (a.data[0]) {
                            case 2:
                                m.se(a.data);
                                break;
                            case 5:
                                T = a.data[1]
                        }
                    },
                    he: function(a) {
                        u.gb ? postMessage(a) : (p.data = a, I.onmessage(p))
                    },
                    se: function(e) {
                        a = e[1];
                        b = e[2];
                        c = e[3];
                        f[0] = e[4];
                        f[1] = e[5];
                        y.set(f[0], f[1], -c);
                        F.set(b, a, 0, "XYZ");
                        if (!1 === F instanceof E) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                        e = Math.cos(F.m / 2);
                        var r = Math.cos(F.o / 2),
                            x = Math.cos(F.s / 2),
                            C = Math.sin(F.m / 2),
                            A = Math.sin(F.o / 2),
                            w = Math.sin(F.s / 2),
                            I = F.order;
                        "XYZ" === I ? (k.m = C * r * x + e * A * w, k.o = e * A * x - C * r * w, k.s = e * r * w + C * A * x, k.C = e * r * x - C * A * w) : "YXZ" === I ? (k.m = C * r * x + e * A * w, k.o = e * A * x - C * r * w, k.s = e * r * w - C * A * x, k.C = e * r * x + C * A * w) : "ZXY" === I ? (k.m = C * r * x - e * A * w, k.o = e * A * x + C * r * w, k.s = e * r * w + C * A * x, k.C = e * r * x - C * A * w) : "ZYX" === I ? (k.m = C * r * x - e * A * w, k.o = e * A * x + C * r * w, k.s = e * r * w - C * A * x, k.C = e * r * x + C * A * w) : "YZX" === I ? (k.m = C * r * x + e * A * w, k.o = e * A * x + C * r * w, k.s = e * r * w - C * A * x, k.C = e * r * x - C * A * w) : "XZY" === I && (k.m = C * r * x - e * A * w, k.o = e * A * x - C * r * w, k.s = e * r * w + C * A * x, k.C = e * r * x + C * A * w);
                        y.y -= T;
                        e = g.elements;
                        w = k.x;
                        var p = k.y,
                            u = k.z;
                        C = k.ad;
                        var W = w + w,
                            U = p + p;
                        A = u + u;
                        r = w * W;
                        x = w * U;
                        w *= A;
                        I = p * U;
                        p *= A;
                        u *= A;
                        W *= C;
                        U *= C;
                        C *= A;
                        e[0] = 1 - (I + u);
                        e[4] = x - C;
                        e[8] = w + U;
                        e[1] = x + C;
                        e[5] = 1 - (r + u);
                        e[9] = p - W;
                        e[2] = w - U;
                        e[6] = p + W;
                        e[10] = 1 - (r + I);
                        e[3] = 0;
                        e[7] = 0;
                        e[11] = 0;
                        e[12] = 0;
                        e[13] = 0;
                        e[14] = 0;
                        e[15] = 1;
                        g.setPosition(y);
                        h.B(k).inverse();
                        e = Q.B(y);
                        p = e.x;
                        W = e.y;
                        u = e.z;
                        r = h.x;
                        x = h.y;
                        C = h.z;
                        A = h.ad;
                        w = A * p + x * u - C * W;
                        I = A * W + C * p - r * u;
                        U = A * u + r * W - x * p;
                        p = -r * p - x * W - C * u;
                        e.x = w * A + p * -r + I * -C - U * -x;
                        e.y = I * A + p * -x + U * -r - w * -C;
                        e.z = U * A + p * -C + w * -x - I * -r;
                        for (e = 1; 17 > e; ++e) l[e] = g.elements[e - 1];
                        l[17] = Q.x;
                        l[18] = Q.y;
                        l[19] = Q.z;
                        m.he(l)
                    },
                    vk: function(a) {
                        I = a;
                        m.he([6])
                    }
                };
            return m
        }();
    ia.i();
    var c = function() {
            function a() {
                return ("undefined" !== typeof g && g.T ? g : u).T +
                    u.Jj
            }

            function b(a, b) {
                return Math.min(b + a + b * a, 1)
            }
            var c = !1,
                r, x = 1;
            return {
                i: function() {
                    r = G.a({
                        width: 1,
                        height: 1,
                        isMipmap: !1,
                        v: 4,
                        array: new Uint8Array([255, 255, 255, 255]),
                        Ub: !1
                    })
                },
                Ed: function() {
                    c = !0;
                    x = 2
                },
                a: function(e) {
                    function k() {
                        ++h === g && e.Z && e.Z(O)
                    }
                    "undefined" === typeof e.diffuseTexture && (e.diffuseTexture = !1);
                    "undefined" === typeof e.normalTexture && (e.normalTexture = !1);
                    "undefined" === typeof e.paramsTexture && (e.paramsTexture = !1);
                    "undefined" === typeof e.colorTextureUsage && (e.colorTextureUsage = 0);
                    "undefined" === typeof e.metalness && (e.metalness = .5);
                    "undefined" === typeof e.roughness && (e.roughness = .5);
                    "undefined" === typeof e.fresnelMin && (e.fresnelMin = 0);
                    "undefined" === typeof e.fresnelMax && (e.fresnelMax = 1);
                    "undefined" === typeof e.fresnelPow && (e.fresnelPow = 5);
                    "undefined" === typeof e.alpha && (e.alpha = 1);
                    "undefined" === typeof e.diffuseColor && (e.diffuseColor = [255, 255, 255]);
                    "undefined" === typeof e.paramsMapMask && (e.paramsMapMask = [0, 0, 0, 0]);
                    var y = e.normalTexture && L.Yh() ? !0 : !1,
                        w = "number" === typeof e.alpha ? [e.alpha, 0, 0, 0] : [e.alpha[0], e.alpha[1] - e.alpha[0], e.alpha[2], e.alpha[3]],
                        g = 1,
                        h = 0,
                        l = 1 <= e.fresnelPow ? e.fresnelMin : e.fresnelMax,
                        I = [b(w[0], l), b(w[1], l), w[2], w[3]];
                    if (y) {
                        ++g;
                        var p = G.a({
                            url: a() + e.normalTexture,
                            isLinear: !0,
                            isMipmap: !0,
                            Sa: L.vj(),
                            isPot: !0,
                            v: 3,
                            Z: k
                        })
                    }
                    var u = e.diffuseTexture && "" !== e.diffuseTexture ? !0 : !1,
                        m = e.colorTextureUsage;
                    if (u) {
                        ++g;
                        var v = G.a({
                                url: a() + e.diffuseTexture,
                                isMipmap: !0,
                                isLinear: !0,
                                isPot: !0,
                                Sa: !0,
                                Ub: !1,
                                aa: !1,
                                Cc: !1,
                                v: 4,
                                Z: k
                            }),
                            B = "s36"
                    } else B = "s37", v = r;
                    var C = [e.diffuseColor[0] / 255, e.diffuseColor[1] / 255, e.diffuseColor[2] / 255],
                        A = e.paramsTexture ? !0 : !1;
                    if (A)
                        if (e.paramsTexture === e.diffuseTexture) var N = v;
                        else ++g, N = G.a({
                            url: a() + e.paramsTexture,
                            isMipmap: !0,
                            isLinear: !0,
                            isPot: !0,
                            Sa: !0,
                            Ub: !1,
                            aa: !1,
                            Cc: !1,
                            v: 4,
                            Z: k
                        });
                    var H = e.fresnelMax,
                        M = [e.fresnelMin, e.roughness, e.fresnelPow / 15, e.metalness],
                        R = e.paramsMapMask;
                    if (y || A || u)
                        if (y || A)
                            if (y && !A) var W = "s31NormalMap",
                                U = "s31NNGLtextureNormalMap";
                            else !y && A ? (W = "s31ParamsMap", U = "s31NNGLtextureParamsMap") : (W = "s31NormalParamsMap", U = "s31NNGLtextureNormalParamsMap");
                    else W = "s31", U = "s31NNGLtexture";
                    else W = "s31color", U = "s31NNGLcolor";
                    var pa = y ? "s39" : "s38",
                        t = y ? "s33" : "s43",
                        ma = A ? "s41" : "s40",
                        q = A ? "s34" : "s44",
                        O = {
                            Vb: function() {
                                return y
                            },
                            wj: function() {
                                return .99 > w[0]
                            },
                            Yi: function() {
                                return t
                            },
                            Xi: function() {
                                return pa
                            },
                            Ui: function() {
                                return q
                            },
                            Ti: function() {
                                return ma
                            },
                            Wi: function() {
                                return W
                            },
                            Vi: function() {
                                return U
                            },
                            sc: function() {
                                y && p.b(0)
                            },
                            si: function(a) {
                                c && f.set(B);
                                a ? f.Ea() : f.Ja();
                                u && f.ac();
                                O.rc()
                            },
                            rc: function() {
                                u && (f.A("u1", m), v.b(0));
                                f.Lg("u80", C)
                            },
                            lf: function() {
                                A && (N.b(0), f.qa("u3", R), f.ac());
                                f.qa("u44", M);
                                f.A("u81", H)
                            },
                            hf: function(a) {
                                A && !y ? N.b(x) : y && (u || r.b(0), p.b(x), A && N.b(x + 1));
                                A && f.qa("u3", R);
                                u || y ? f.pk() : a ? f.qk() : f.rk();
                                O.rc();
                                f.qa("u17", w);
                                f.qa("u44", M);
                                f.A("u81", H)
                            },
                            pi: function() {
                                f.qa("u17", w)
                            },
                            ri: function() {
                                f.qa("u17", I)
                            },
                            G: function() {
                                u && v.remove();
                                y && p.remove();
                                A && e.paramsTexture !== e.diffuseTexture && N.remove();
                                O = null
                            }
                        };
                    k();
                    return O
                }
            }
        }(),
        rb = function() {
            var a, c, w, r, x, k, g = u.Eh,
                y = u.Dh,
                h = u.Fh,
                F, T, l, I, p, m, v, H, B, C, A = 0,
                N = 0,
                M = 0,
                R = Date.now(),
                pa = !1,
                W = !1,
                U = !1,
                t = !1,
                q = 1,
                ma = !1,
                ea = {
                    i: function() {
                        a = u.zh[L.R()];
                        c = u.yh[L.R()];
                        w = u.xh[L.R()];
                        N = u.Ah[L.R()];
                        r = u.rh[L.R()];
                        x = u.vh[L.R()];
                        v = u.wh[L.R()];
                        H = L.H();
                        B = L.S();
                        F = Math.round(H * a);
                        T = Math.round(B * a);
                        I = qa.a({
                            width: F,
                            height: T,
                            Tb: !1
                        });
                        l = G.a({
                            width: F,
                            height: T,
                            isPot: !1,
                            isLinear: !0
                        });
                        C = G.a({
                            width: F,
                            height: T,
                            isPot: !1,
                            isLinear: !0,
                            v: 1
                        });
                        W = !0
                    },
                    resize: function(b, c, e) {
                        q = e;
                        H = b;
                        B = c;
                        F = Math.round(b * a);
                        T = Math.round(c * a);
                        I.resize(F, T);
                        U = !0
                    },
                    O: function() {
                        var a = Math.exp(-(Date.now() - R) / N);
                        A = t ? M + (1 - a) * (1 - M) : M * a;
                        p = c + A * (w - c);
                        m = r + (1 - A) * (1 - r);
                        k = x + (1 - A) * (1 - x);
                        G.X(5);
                        if (U && W) G.X(6), C.resize(F, T), f.set("s0"), f.Qc("u0", 6), I.bind(!1, !0), C.j(), I.td(), l.b(6), O.h(!0, !0), l.resize(F, T), l.j(), C.b(6), O.h(!1, !1), f.Qc("u0", 0), U = !1;
                        else {
                            b.enable(b.BLEND);
                            b.blendFunc(b.CONSTANT_ALPHA, b.ONE_MINUS_SRC_ALPHA);
                            a = p / v;
                            b.blendColor(a, a, a, a);
                            b.colorMask(!0, !1, !1, !0);
                            f.set("s23");
                            Oa.Cd();
                            f.A("u60", p);
                            N && (f.A("u61", m), f.A("u53", k));
                            var e = q * (g + Math.pow(Math.random(), h) * (y - g));
                            f.M("u24", e / H, e / B);
                            I.Se();
                            I.ec();
                            l.j();
                            e = 2 * Math.PI * Math.random();
                            for (var Q = !0, u = 0; u < v; ++u) 1 === u && (b.blendFunc(b.SRC_ALPHA, b.ONE), f.A("u60", a)), f.A("u59", e + u / v * (Math.PI / 2)), f.M("u58", (Math.random() - .5) / H, (Math.random() - .5) / B), O.h(Q, Q), Q = !1;
                            b.disable(b.BLEND);
                            f.set("s24");
                            f.M("u24", 1 / F, 1 / T);
                            C.j();
                            l.b(7);
                            O.h(!1, !1);
                            b.colorMask(!0, !0, !0, !0)
                        }
                    },
                    b: function(a) {
                        C.b(a)
                    },
                    enable: function() {
                        ma = !0
                    },
                    Wj: function() {
                        if (t || !ma) return !1;
                        pa && clearTimeout(pa);
                        ea.Pc();
                        pa = setTimeout(ea.Xg, 400)
                    },
                    Pc: function() {
                        pa && (clearTimeout(pa), pa = !1);
                        !t && ma && (JESSMP.disable(), t = !0, R = Date.now(), M = A)
                    },
                    Xg: function() {
                        t && ma && (pa && (clearTimeout(pa), pa = !1), JESSMP.enable(), t = !1, R = Date.now(), M = A)
                    },
                    G: function() {
                        l.remove();
                        C.remove();
                        I.remove()
                    }
                };
            ea.Wj();
            return ea
        }(),
        gc = {
            a: function(a) {
                var c = a.Fa.H(),
                    w = a.rj ? !0 : !1,
                    r = w ? "s5" : "s4",
                    x = G.a({
                        isFloat: a.Fa.Kf() && wa.U() && !w,
                        I: a.Fa.Lf() && !w,
                        isLinear: !0,
                        isMipmap: !1,
                        isPot: !1,
                        width: c,
                        height: c,
                        v: w ? 4 : 3
                    }),
                    k = G.a({
                        isFloat: a.Fa.Kf() && wa.U(),
                        I: a.Fa.Lf(),
                        isPot: !0,
                        width: 1,
                        height: c / 2,
                        v: 3
                    });
                k.j();
                f.set("s17");
                a.Fa.b(0);
                O.h(!0, !0);
                var g = Math.log(c) / Math.log(2);
                x.$j = function() {
                    x.j();
                    f.set(r);
                    f.A("u21", u.rb);
                    a.Fa.b(0);
                    k.b(1);
                    var e, w = 0;
                    for (e = 0; e <= g; ++e) {
                        var F = Math.pow(2, g - e),
                            h = F / 2;
                        b.viewport(0, w, c, h);
                        f.M("u19", c / F, 1);
                        f.A("u20", Math.min(6 / h, .6));
                        w += F / 2;
                        O.h(0 === e, 0 === e)
                    }
                };
                x.bk = x.remove;
                x.remove = function() {
                    x.bk();
                    k.remove()
                };
                return x
            }
        };
    ka.Xa = function() {
        var a = {
                Nc: 45,
                le: 1,
                tb: "../../images/debug/picsou.png",
                me: .8,
                $d: 3.14 / 6,
                ae: .314,
                be: 4,
                Yd: .5,
                Zd: -.25,
                zj: 1,
                cd: 256,
                Xd: .15
            },
            c, w, r, x = !1,
            k = !1,
            g, y, h = Math.PI / 180,
            F = {
                i: function(a) {
                    g = a.width;
                    a = {
                        isFloat: wa.U(),
                        I: !0,
                        isPot: !1,
                        isMipmap: !1,
                        isLinear: !1,
                        aa: !0,
                        width: g,
                        height: g / 2,
                        v: 3
                    };
                    c = G.a(a);
                    w = G.a(a);
                    f.g("s46", [{
                        type: "1i",
                        name: "u88",
                        value: 0
                    }]);
                    f.g("s47", [{
                        type: "1i",
                        name: "u94",
                        value: 0
                    }]);
                    F.al()
                },
                al: function() {
                    f.g("s47", [{
                        type: "1f",
                        name: "u95",
                        value: a.$d
                    }, {
                        type: "1f",
                        name: "u96",
                        value: a.ae
                    }, {
                        type: "1f",
                        name: "u97",
                        value: a.be
                    }, {
                        type: "1f",
                        name: "u98",
                        value: a.Yd
                    }, {
                        type: "1f",
                        name: "u99",
                        value: a.Zd
                    }])
                },
                lm: function() {
                    return k
                },
                ha: function(a) {
                    y = a
                },
                Zb: function() {
                    f.ea("s46", {
                        name: "_",
                        c: "uniform sampler2D u88;uniform vec2 u89,u90,u91;uniform int u92;uniform float u93,u73;varying vec2 vv0;const float h=3.141593;const vec2 i=vec2(.5,.5);const float e=1.2;const vec3 f=vec3(1.,1.,1.);void main(){vec2 c=vec2(vv0.x*2.,-vv0.y+.5)*h,a=i+u91*(c-u89)/u90;float b=1.;if(u92==0){if(a.x<0.||a.x>1.||a.y<0.||a.y>1.)discard;}else b*=smoothstep(-e,0.,a.x),b*=1.-smoothstep(1.,1.+e,a.x),b*=smoothstep(-e,0.,a.y),b*=1.-smoothstep(1.,1.+e,a.y);vec3 d=mix(u93*f,texture2D(u88,a).rgb*u73,b*f);gl_FragColor=vec4(d,1.);}",
                        f: "u88 u89 u92 u90 u93 u73 u91".split(" "),
                        precision: "highp"
                    });
                    f.ea("s47", {
                        name: "_",
                        c: "uniform sampler2D u94;uniform float u95,u96,u97,u98,u99;varying vec2 vv0;const float g=3.141593;const vec2 o=vec2(.5,.5);const vec3 i=vec3(1.,1.,1.);void main(){float j=(vv0.x*2.-1.)*g,d=(-vv0.y+.5)*g;vec4 a=texture2D(u94,vec2(.5,.5));float c=a.r,k=u97*a.g,l=u98*(a.b+u99),b=a.a,e=asin(cos(b)*cos(c)),m=atan(cos(b)*sin(c),-sin(b)),n=acos(sin(d)*sin(e)+cos(d)*cos(e)*cos(j-m)),h=1.-smoothstep(u95-u96,u95+u96,n);gl_FragColor=vec4(i*(max(l,0.)+max(k,0.)*h),1.);}",
                        f: "u94 u95 u96 u97 u98 u99".split(" "),
                        precision: "highp"
                    })
                },
                xe: function(a, b, c, e, k, y, r, w) {
                    f.M("u89", b, c);
                    f.Qc("u92", e ? 1 : 0);
                    f.M("u90", k, k / y);
                    f.Kg("u91", w);
                    r && a.b(0);
                    O.h(!1, !1)
                },
                lh: function(c) {
                    b.viewport(0, 0, a.cd, a.cd / 2);
                    f.set("s47");
                    c.b(0);
                    O.h(!1, !1)
                },
                dj: function() {
                    return c
                },
                Rh: function(b) {
                    F.i({
                        width: a.cd
                    });
                    F.Zg(b, !1, 1);
                    k = !0
                },
                Qh: function() {
                    x && r.ej() === a.tb || (x = !1, r = G.a({
                        url: a.tb,
                        isFloat: !1,
                        Z: function() {
                            x = !0
                        }
                    }))
                },
                se: function(b) {
                    for (var c in b) a[c] = b[c]
                },
                Zg: function(e, k, g) {
                    var l = a.cd;
                    qa.fa();
                    w.J();
                    f.set("s0");
                    c.b(0);
                    O.h(!0, !0);
                    G.X(0);
                    c.j();
                    f.set("s46");
                    f.A("u93", a.Xd);
                    f.A("u73", a.zj);
                    F.xe(e, Math.PI, 0, !0, 90 * h, e.H() / e.S(), !0, [1, 1]);
                    x && (f.A("u73", a.me), b.viewport(0, 0, l / 2, l / 2), F.xe(r, 0, 0, !1, 2 * a.Nc * h, 2 * a.le, !0, [1, 1]), b.viewport(l / 2, 0, l / 2, l / 2), F.xe(r, 2 * Math.PI, 0, !1, 2 * a.Nc * h, 2 * a.le, !1, [1, 1]));
                    b.enable(b.BLEND);
                    b.blendFunc(b.ONE, b.ONE);
                    k && F.lh(k);
                    f.set("s0");
                    b.blendColor(0, 0, 0, 1 - g);
                    b.blendFunc(b.CONSTANT_ALPHA, b.ONE_MINUS_CONSTANT_ALPHA);
                    w.b(0);
                    O.h(!1, !1);
                    b.disable(b.BLEND);
                    y.Gg(c)
                }
            };
        return F
    }();
    ka.La = function() {
        var a = !1,
            b = !0,
            c = !1,
            r = !1,
            g = {
                Zb: function() {
                    L.W() && (f.ea("s48", {
                        name: "_",
                        l: "attribute vec3 a0;uniform sampler2D u25;uniform vec2 u79;uniform vec3 u75;const float q=1.,p=0.,o=0.,x=1.;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 w(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*m;vec2 u=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 t=w(d);vec3 s=mix(u75,u11,a);float r=mix(q,u14,u13);vec3 n=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 g=u8/u;vec3 i=a0;float v=max(0.,-a0.z-p)*o;i.x+=v*sign(a0.x)*(1.-u13);vec3 h=t*(i+s)*r+n;h.x+=u5*sin(d.y);vec2 j=g*l;vec3 k=vec3(c*j,-g)+h*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.));}",
                        c: "void main(){gl_FragData[0]=vec4(0.,0.,0.,0.),gl_FragData[1]=vec4(0.,0.,1.,1.),gl_FragData[2]=vec4(1.,0.,0.,0.),gl_FragData[3]=vec4(0.,.5,1.,0.);}",
                        f: ["u25", "u79", "u6", "u75"].concat(f.Ld(), f.Md()),
                        D: ["a0"],
                        L: [3],
                        $: !0
                    }), a = !0)
                },
                i: function(b) {
                    a && f.g("s48", [{
                        type: "1i",
                        name: "u25",
                        value: 1
                    }, {
                        type: "3f",
                        name: "u6",
                        value: b.ta
                    }, {
                        type: "1f",
                        name: "u7",
                        value: 0
                    }, {
                        type: "1f",
                        name: "u15",
                        value: 1
                    }].concat(b.Ce))
                },
                cc: function(a) {
                    r = a;
                    c && g.Cf()
                },
                bc: function(a) {
                    c = a;
                    r && g.Cf()
                },
                Cf: function() {
                    L.W() && (f.g("s48", [{
                        type: "3f",
                        name: "u75",
                        value: [c[0] * r, c[1] * r, c[2] * r]
                    }]), f.K())
                },
                oj: function(a) {
                    var b = a.width / 2,
                        c = a.height / 2,
                        e = a.depth,
                        k = a.Ai,
                        f = a.height / 4,
                        r, w = a.ei,
                        x = 2 * w + 4,
                        h = [],
                        l = [],
                        p = -b + a.Ia,
                        u = -k - a.Ia,
                        C = b - a.Ia,
                        A = -k - a.Ia;
                    for (r = 0; r < x; ++r) {
                        if (0 === r) var N = -b,
                            m = -k - e;
                        else 1 <= r && r <= 1 + w ? (m = (r - 1) / w * Math.PI / 2, N = p - Math.cos(m) * a.Ia, m = u + Math.sin(m) * a.Ia) : r >= 2 + w && r <= 2 + 2 * w ? (m = (r - 2 - w) / w * Math.PI / 2, N = C + Math.sin(m) * a.Ia, m = A + Math.cos(m) * a.Ia) : r === x - 1 && (N = b, m = -k - e);
                        h.push(N, c + f, m, N, -c + f, m);
                        0 !== r && l.push(2 * r, 2 * r - 2, 2 * r - 1, 2 * r, 2 * r - 1, 2 * r + 1)
                    }
                    return g.a({
                        Ga: h,
                        da: l
                    })
                },
                toggle: function(a) {
                    b = a
                },
                a: function(c) {
                    var e = O.a({
                        Ga: c.Ga,
                        da: c.da
                    });
                    return {
                        O: function() {
                            a && b && (f.set("s48"), e.bind(!0), e.O())
                        }
                    }
                }
            };
        return g
    }();
    ka.ja = function() {
        var a = {
            Od: -87,
            jj: [85, 95],
            Bf: [90, 90],
            Af: [85, 70],
            oc: 24,
            fi: 12,
            gi: 2,
            je: [-80, 10],
            zf: [40, 140],
            zc: [1, 8],
            ij: 80,
            bg: [-120, -10],
            Qj: 2,
            Uc: [0, -15],
            bd: 1024,
            Ka: 256,
            Ic: 4,
            Lk: [6, 30],
            ag: 1.2
        };
        a.mg = a.je;
        var c = !1,
            w = !1,
            r = !1,
            g = !1,
            k = !1,
            h, y, l, F, T = .5,
            p, u = [{
                type: "1f",
                name: "u101",
                value: 1
            }],
            m, v = !1,
            H = !1,
            M = !1,
            B = !1,
            C, A, N, R, pa = !1,
            t = {
                Zi: function() {
                    return {
                        name: "_",
                        l: "attribute vec3 a0,a2;attribute vec2 a1;varying vec2 vv0;varying float vv1;uniform sampler2D u25;uniform vec2 u79;uniform float u76;uniform vec3 u75;const float q=0.,p=0.;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 z=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 y(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*n;vec2 w=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 g=y(d);vec3 u=mix(u75,u11,a);float r=mix(u76,u14,u13);vec3 o=mix(u6,u12,a);float m=mix(u9,1.,u13);vec2 i=u8/w;vec3 h=a0;float x=max(0.,-a0.z-q)*p;h.x+=x*sign(a0.x)*(1.-u13);vec3 j=g*(h+u)*r+o;j.x+=u5*sin(d.y);vec2 l=i*m;vec3 k=vec3(c*l,-i)+j*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.)),vv0=a1,gl_Position*=vec4(-1.,1.,1.,1.);vec3 v=g*a2;vv1=-v.z;}",
                        c: "uniform sampler2D u108,u94;uniform vec2 u19,u109;uniform float u110,u101;varying vec2 vv0;varying float vv1;void main(){vec2 b=u109*u110+u19*vv0;vec4 a=u101*texture2D(u108,b);a.r*=step(0.,vv0.y),gl_FragColor=vec4(0.,0.,0.,a.r*vv1);}",
                        f: "u25 u108 u94 u79 u6 u110 u109 u76 u75 u19 u101".split(" ").concat(f.Ld()).concat(f.Md()),
                        D: ["a0", "a2", "a1"],
                        L: [3, 3, 2],
                        precision: "lowp"
                    }
                },
                Zb: function() {
                    f.ea("s49", {
                        name: "_",
                        l: "attribute vec3 a0;uniform vec3 u75;uniform vec2 u102,u103;uniform float u76,u104,u105,u106;varying float vv0,vv1;void main(){vec3 a=(a0+u75)*u76;float b=atan(a.x,a.z-u104),d=2.*(a.y-u105)/(u106-u105)-1.;vv0=a0.y;float f=1.-u102.x*u102.x/(u102.y*u102.y),c=u102.x/sqrt(1.-f*pow(cos(b),2.));vec3 e=vec3(c*sin(b),a.y,c*cos(b)+u104);vv1=smoothstep(u103.x,u103.y,length(e-a)),gl_Position=vec4(b,d,0.,1.);}",
                        c: "uniform float u107;uniform vec4 u17;varying float vv0,vv1;void main(){float a=u17.x+u17.y*smoothstep(-u17.w,-u17.z,vv0),b=min(a,1.)*u107;gl_FragColor=vec4(b,vv1,1.,1.);}",
                        f: "u76 u75 u102 u103 u104 u105 u106 u17 u107".split(" "),
                        D: ["a0"],
                        L: [3],
                        precision: "highp"
                    });
                    f.ea("s50", t.Zi());
                    f.ea("s51", {
                        name: "_",
                        c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0),b=texture2D(u0,vv0-3.*u24),c=texture2D(u0,vv0-2.*u24),d=texture2D(u0,vv0-u24),h=texture2D(u0,vv0+u24),f=texture2D(u0,vv0+2.*u24),g=texture2D(u0,vv0+3.*u24);float j=.031496*b.r+.110236*c.r+.220472*d.r+.275591*a.r+.220472*h.r+.110236*f.r+.031496*g.r;vec2 i=b.gb*b.b+c.gb*c.b+d.gb*d.b+a.gb*a.b+h.gb*h.b+f.gb*f.b+g.gb*g.b;i/=b.b+c.b+d.b+a.b+h.b+f.b+g.b,gl_FragColor=vec4(mix(j,a.r,1.-i.x),i,1);}",
                        f: ["u0", "u24"],
                        precision: "lowp"
                    });
                    c = !0
                },
                i: function(b) {
                    if (c) {
                        if (void 0 === b.xb || !b.xb) return !1;
                        if (w) t.Dg(b);
                        else {
                            var e = a.Ka / 4;
                            M = G.a({
                                isFloat: !1,
                                isPot: !1,
                                isMipmap: !1,
                                isLinear: !0,
                                width: a.bd,
                                height: a.bd / 4,
                                v: 4
                            });
                            var k = {
                                isFloat: !1,
                                isPot: !1,
                                isMipmap: !1,
                                isLinear: !1,
                                width: a.Ka,
                                height: e,
                                v: 4
                            };
                            H = G.a(k);
                            R = G.a(k);
                            N = G.a({
                                isFloat: !1,
                                isPot: !1,
                                isMipmap: !1,
                                isLinear: !0,
                                width: a.Ka,
                                height: e * a.Ic,
                                v: 4
                            });
                            e = .5 - .5 / b.yb[1];
                            k = .5 + .5 / b.yb[1];
                            var r = a.fi + 1,
                                y = [],
                                g = [],
                                W = new Float32Array(16 * a.oc),
                                x = new Uint16Array(6 * (a.oc - 1)),
                                h, F = 0;
                            for (h = 0; h < a.oc; ++h) {
                                var l = 2 * h / (a.oc - 1) - 1;
                                l = Math.sign(l) * Math.pow(Math.abs(l), a.gi);
                                l = Math.PI * (l + 1) / 2 - Math.PI / 2;
                                var Q = Math.sin(l),
                                    T = Math.cos(l),
                                    p = Math.sin(l * a.ag),
                                    u = Math.cos(l * a.ag),
                                    m = l / (Math.PI * b.yb[0]) + .5,
                                    I = a.Af[0] * Q,
                                    B = a.mg[0],
                                    d = a.Af[1] * T + a.Od,
                                    n = m,
                                    D = e,
                                    z = a.Bf[0] * Q,
                                    S = a.mg[1],
                                    aa = a.Bf[1] * T + a.Od,
                                    va = m,
                                    Xa = k;
                                m = 16 * h;
                                W[m] = z;
                                W[m + 1] = S;
                                W[m + 2] = aa;
                                W[m + 3] = p;
                                W[m + 4] = 0;
                                W[m + 5] = u;
                                W[m + 6] = va;
                                W[m + 7] = Xa;
                                W[m + 8] = I;
                                W[m + 9] = B;
                                W[m + 10] = d;
                                W[m + 11] = p;
                                W[m + 12] = 0;
                                W[m + 13] = u;
                                W[m + 14] = n;
                                W[m + 15] = D;
                                0 !== h && (m = 2 * h, va = 6 * (h - 1), x[va] = m, x[va + 1] = m - 1, x[va + 2] = m - 2, x[va + 3] = m, x[va + 4] = m + 1, x[va + 5] = m - 1);
                                m = Math.pow(.5 * (1 + Math.cos(Math.min(Math.max(Math.PI / a.zf[0] * I, -Math.PI), Math.PI))), a.Qj);
                                B -= a.ij * m;
                                n = a.zf[1] * m;
                                I -= Q * a.zc[0];
                                d -= T * a.zc[1];
                                z -= Q * a.zc[0];
                                aa -= T * a.zc[1];
                                T = .001 > m ? 2 : r;
                                for (Q = 0; Q < T; ++Q) m = Q / (T - 1), D = B * (1 - m) + S * m, va = a.bg[0], va = Math.min(Math.max((D - va) / (a.bg[1] - va), 0), 1), va = va * va * (3 - 2 * va), y.push(I * (1 - m) + z * m, D, (d + n * Math.exp(400 * -Math.abs(l) * Math.pow(m, 4))) * (1 - va) + aa * va, p, 0, u, 0, 0);
                                u = 0 === h ? 0 : 2 < T && 2 < db ? T - 1 : 1;
                                for (Q = 1; Q <= u; ++Q) l = T < db ? db - 2 : 0, p = T > db ? T -
                                    2 : 0, g.push(F + Q + p, F + Q - 1, kb + Q - 1, kb + Q - 1, kb + Q + l, F + Q + p);
                                var db = T,
                                    kb = F;
                                F += T
                            }
                            C = O.a({
                                Ga: new Float32Array(y),
                                da: new Uint16Array(g)
                            });
                            A = O.a({
                                Ga: W,
                                da: x
                            });
                            t.Dg(b);
                            f.g("s51", [{
                                type: "1i",
                                name: "u0",
                                value: 0
                            }]);
                            w = !0
                        }
                    }
                },
                Dg: function(b) {
                    T = b.Gk;
                    F = b.Vc;
                    m = [{
                        type: "1i",
                        name: "u25",
                        value: 1
                    }, {
                        type: "1i",
                        name: "u108",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u94",
                        value: 2
                    }, {
                        type: "3f",
                        name: "u6",
                        value: [b.ta[0], b.ta[1] - a.Uc[0], b.ta[2] + a.Uc[1]]
                    }, {
                        type: "1f",
                        name: "u110",
                        value: b.Hk
                    }, {
                        type: "2f",
                        name: "u19",
                        value: [1, 1 / a.Ic]
                    }, {
                        type: "2f",
                        name: "u109",
                        value: [0, 1 / a.Ic]
                    }, {
                        type: "1f",
                        name: "u101",
                        value: 1
                    }].concat(b.Ce, b.Wg);
                    f.g("s50", m)
                },
                vb: function(a) {
                    r = a
                },
                qe: function(a) {
                    v = a;
                    v.eb(t.nc)
                },
                nc: function() {
                    if (!(pa || k && g)) return !1;
                    b.viewport(0, 0, a.bd, a.bd / 4);
                    qa.fa();
                    M.j();
                    b.clearColor(0, 0, 0, 0);
                    b.clear(b.COLOR_BUFFER_BIT);
                    f.g("s49", [{
                        type: "1f",
                        name: "u104",
                        value: a.Od
                    }, {
                        type: "1f",
                        name: "u105",
                        value: a.je[0]
                    }, {
                        type: "1f",
                        name: "u106",
                        value: a.je[1]
                    }, {
                        type: "3f",
                        name: "u75",
                        value: [h[0] + y[0], h[1] + y[1], h[2] + y[2]]
                    }, {
                        type: "1f",
                        name: "u107",
                        value: T
                    }, {
                        type: "2f",
                        name: "u102",
                        value: a.jj
                    }, {
                        type: "2f",
                        name: "u103",
                        value: a.Lk
                    }]);
                    v.yi();
                    f.set("s1");
                    var c = a.Ka / 4;
                    b.viewport(0, 0, a.Ka, c);
                    H.j();
                    M.b(0);
                    M.tc();
                    O.h(!0, !0);
                    for (var e = 0; e < a.Ic; ++e) f.set("s51"), 0 !== e && b.viewport(0, 0, a.Ka, c), R.j(), H.b(0), f.M("u24", 1 / a.Ka, 0), O.h(!1, !1), H.j(), R.b(0), f.M("u24", 0, 1 / c), O.h(!1, !1), a.hi && b.colorMask(0 === e, 1 === e, 2 === e, !0), f.set("s1"), N.j(), H.b(0), b.viewport(0, e * c, a.Ka, c), O.h(!1, !1), a.hi && b.colorMask(!0, !0, !0, !0);
                    return pa = !0
                },
                O: function() {
                    B.bind(!1, !1);
                    p.j();
                    b.clearColor(0, 0, 0, 0);
                    b.enable(b.DEPTH_TEST);
                    b.depthMask(!0);
                    b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                    f.set("s50");
                    r.b(1);
                    N.b(0);
                    C.bind(!0);
                    C.O();
                    A.bind(!0);
                    A.O();
                    b.disable(b.DEPTH_TEST);
                    b.depthMask(!1)
                },
                add: function() {
                    b.enable(b.BLEND);
                    b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
                    p.b(0);
                    O.h(!1, !1);
                    b.disable(b.BLEND)
                },
                pe: function(a, b) {
                    B = qa.a({
                        width: a,
                        height: b,
                        Tb: !0
                    });
                    p = G.a({
                        width: a,
                        height: b,
                        isFloat: !1,
                        isPot: !1
                    })
                },
                bc: function(b, c, e) {
                    b || (b = h, c = y, e = l);
                    f.g("s50", [{
                        type: "3f",
                        name: "u75",
                        value: [e[0] + F[0], e[1] + F[1] - a.Uc[0], e[2] + F[2] + a.Uc[1]]
                    }]);
                    h = b;
                    y = c;
                    l = e;
                    k = !0;
                    !pa && g && t.nc();
                    f.K()
                },
                cc: function(a, b) {
                    f.g("s49", [{
                        type: "1f",
                        name: "u76",
                        value: a
                    }]);
                    f.g("s50", [{
                        type: "1f",
                        name: "u76",
                        value: b
                    }]);
                    g = !0;
                    !pa && k && t.nc();
                    f.K()
                },
                te: function(a) {
                    f.g("s50", [{
                        type: "1f",
                        name: "u7",
                        value: a
                    }]);
                    f.K()
                },
                gc: function() {
                    t.nc()
                },
                ue: function(a, b) {
                    u[0].value = 1 - a;
                    f.g("s50", u);
                    f.g("s50", b)
                },
                G: function() {}
            };
        return t
    }();
    ka.ma = function() {
        var a = !1,
            c = !1,
            g, r, x, k = [{
                type: "1f",
                name: "u101",
                value: 1
            }],
            h = !1,
            y = !1,
            l, F = {
                Zb: function() {
                    f.ea("s52", {
                        name: "_",
                        l: "attribute vec3 a0;uniform vec2 u111,u112;varying vec2 vv0;void main(){vec2 a=2.*(a0.xy-u112)/u111;gl_Position=vec4(a,0.,1.),vv0=a0.xy;}",
                        c: "uniform vec2 u113;uniform float u114,u115,u116;varying vec2 vv0;void main(){vec2 b=vec2(sign(vv0.x)*.5*u114,u115),a=vv0-b,c=u116*a,d=(c-a)*u113;gl_FragColor=vec4(d,0.,1.);}",
                        f: "u111 u112 u114 u115 u116 u113".split(" "),
                        D: ["a0"],
                        L: [3],
                        precision: "highp"
                    });
                    f.ea("s53", {
                        name: "_",
                        l: "attribute vec3 a0;varying vec2 vv0,vv1;uniform sampler2D u25;uniform vec3 u75;uniform vec2 u79,u111,u112;uniform float u76;const float p=0.,o=0.;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u4;uniform vec3 u6,u10,u11,u12;uniform float u5,u13,u14,u7,u8,u9,u15;mat3 x(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u25,vec2(.25,.5));vec2 f=u13*e;vec3 a=u13*m;vec2 v=mix(b.a*u79,e,f),c=(2.*b.gb-e)*(1.-f);c.x*=-1.;vec3 d=mix(texture2D(u25,vec2(.75,.5)).rgb+vec3(u7,0.,0.),u10,a);mat3 u=x(d);vec3 t=mix(u75,u11,a);float q=mix(u76,u14,u13);vec3 n=mix(u6,u12,a);float l=mix(u9,1.,u13);vec2 g=u8/v;vec3 i=a0;float w=max(0.,-a0.z-p)*o;i.x+=w*sign(a0.x)*(1.-u13);vec3 h=u*(i+t)*q+n;h.x+=u5*sin(d.y);vec2 j=g*l;vec3 k=vec3(c*j,-g)+h*vec3(1.,-1.,-1.);gl_Position=u4*(vec4(u15*e,e)*vec4(k,1.)),gl_Position*=vec4(-1.,1.,1.,1.),vv0=vec2(.5,.5)+(a0.xy-u112)/u111,vv1=vec2(.5,.5)+.5*gl_Position.xy/gl_Position.w;}",
                        c: "uniform sampler2D u117,u118;uniform float u101;varying vec2 vv0,vv1;void main(){vec2 a=u101*texture2D(u117,vv0).rg;gl_FragColor=texture2D(u118,a+vv1);}",
                        f: "u101 u25 u117 u118 u111 u112 u79 u6 u76 u75".split(" ").concat(f.Ld(), f.Md()),
                        D: ["a0"],
                        L: [3],
                        precision: "lowp"
                    });
                    a = !0
                },
                i: function(b) {
                    if (a) {
                        if (void 0 === b.xb || !b.pc) return !1;
                        y = G.a({
                            isFloat: !0,
                            isPot: !1,
                            isMipmap: !1,
                            isLinear: !1,
                            width: 256,
                            height: 128,
                            v: 4
                        });
                        l = qa.a({
                            width: 256,
                            height: 128
                        });
                        f.g("s53", [{
                            type: "1i",
                            name: "u25",
                            value: 1
                        }, {
                            type: "1i",
                            name: "u117",
                            value: 2
                        }, {
                            type: "1i",
                            name: "u118",
                            value: 0
                        }, {
                            type: "3f",
                            name: "u6",
                            value: b.ta
                        }, {
                            type: "1f",
                            name: "u101",
                            value: 1
                        }].concat(b.Wg, b.Ce));
                        r = b.yd;
                        x = b.xd;
                        g = b.zd
                    }
                },
                vb: function(a) {
                    c = a
                },
                qe: function(a) {
                    h = a;
                    h.eb(F.ud)
                },
                ud: function() {
                    b.viewport(0, 0, 256, 128);
                    l.j();
                    y.j();
                    var a = h.aj(),
                        c = h.bj(),
                        e = [{
                            type: "2f",
                            name: "u111",
                            value: [a, c]
                        }, {
                            type: "2f",
                            name: "u112",
                            value: [h.Ki(), h.Li()]
                        }];
                    f.g("s52", e.concat([{
                        type: "1f",
                        name: "u114",
                        value: r
                    }, {
                        type: "1f",
                        name: "u115",
                        value: x
                    }, {
                        type: "1f",
                        name: "u116",
                        value: g
                    }, {
                        type: "2f",
                        name: "u113",
                        value: [1 / a, -1 / c]
                    }]));
                    h.gf();
                    f.g("s53", e)
                },
                O: function() {
                    f.set("s53");
                    c.b(1);
                    y.b(2);
                    h.gf()
                },
                bc: function(a) {
                    f.g("s53", [{
                        type: "3f",
                        name: "u75",
                        value: a
                    }]);
                    f.K()
                },
                cc: function(a) {
                    f.g("s53", [{
                        type: "1f",
                        name: "u76",
                        value: a
                    }]);
                    f.K()
                },
                te: function(a) {
                    f.g("s53", [{
                        type: "1f",
                        name: "u7",
                        value: a
                    }]);
                    f.K()
                },
                Fk: function(a) {
                    g = a;
                    F.ud();
                    f.K();
                    J.animate(Date.now())
                },
                gc: function() {
                    F.ud()
                },
                ue: function(a, b) {
                    k.u101 = 1 - a;
                    f.g("s53", k);
                    f.g("s53", b)
                },
                G: function() {}
            };
        return F
    }();
    ka.Db = function() {
        var a = [0, -.5],
            c = !1,
            g = !1,
            r = !1,
            x, k, h, y, l, F;
        return {
            Zb: function() {
                f.ea("s54", {
                    name: "_",
                    l: "attribute vec2 a0;uniform sampler2D u25;uniform vec2 u79,u119;uniform float u91;varying vec2 vv0;const vec2 f=vec2(1.,1.);void main(){vec4 a=texture2D(u25,vec2(.25,.5));vec2 b=a.a*u79,c=2.*a.gb-f,d=u119+a0*u91;gl_Position=vec4(c+b*d,0.,1.),vv0=vec2(.5,.5)+.5*a0;}",
                    c: "uniform sampler2D u120;varying vec2 vv0;void main(){gl_FragColor=texture2D(u120,vv0);}",
                    f: ["u25", "u120", "u79", "u119", "u91"],
                    precision: "lowp"
                });
                f.ea("s55", {
                    name: "_",
                    c: "uniform sampler2D u34,u121,u122;varying vec2 vv0;const vec3 f=vec3(1.,1.,1.);void main(){float a=texture2D(u34,vv0).r;vec3 b=texture2D(u122,vv0).rgb,c=texture2D(u121,vv0).rgb;gl_FragColor=vec4(mix(b,c,a*f),1.);}",
                    f: ["u34", "u122", "u121"],
                    precision: "lowp"
                });
                c = !0
            },
            i: function(b) {
                c && (y = G.a({
                    isFloat: !1,
                    isPot: !0,
                    url: b.od,
                    Z: function() {
                        r = !0
                    }
                }), f.g("s54", [{
                    type: "1i",
                    name: "u25",
                    value: 1
                }, {
                    type: "1i",
                    name: "u120",
                    value: 0
                }, {
                    type: "2f",
                    name: "u79",
                    value: b.dh
                }, {
                    type: "2f",
                    name: "u119",
                    value: a
                }, {
                    type: "1f",
                    name: "u91",
                    value: 3.8
                }]), f.g("s55", [{
                    type: "1i",
                    name: "u121",
                    value: 0
                }, {
                    type: "1i",
                    name: "u34",
                    value: 1
                }, {
                    type: "1i",
                    name: "u122",
                    value: 2
                }]))
            },
            vb: function(a) {
                g = a
            },
            pe: function(a, b) {
                var c = {
                    isFloat: !1,
                    isPot: !1,
                    isMipmap: !1,
                    isLinear: !1,
                    width: a,
                    height: b,
                    v: 4
                };
                l = 2 / a;
                F = 2 / b;
                k = G.a(c);
                h = G.a(c);
                x = qa.a({
                    width: a,
                    height: b
                })
            },
            O: function(a, c) {
                if (r) {
                    x.bind(!1, !0);
                    f.set("s16");
                    for (var e = 0; 2 > e; ++e) {
                        f.M("u24", l, 0);
                        k.j();
                        0 !== e && h.b(0);
                        var w = 0 === e && !u.Y;
                        O.h(w, w);
                        f.M("u24", 0, F);
                        h.j();
                        k.b(0);
                        O.h(!1, !1)
                    }
                    f.set("s54");
                    g.b(1);
                    y.b(0);
                    k.j();
                    b.clearColor(1, 0, 0, 1);
                    b.clear(b.COLOR_BUFFER_BIT);
                    O.h(!1, !1);
                    f.set("s55");
                    c.j();
                    h.b(0);
                    k.b(1);
                    a.b(2);
                    O.h(!1, !1)
                }
            },
            G: function() {}
        }
    }();
    var bc = {},
        H = function() {
            function a(a, c) {
                a = b.createShader(a);
                b.shaderSource(a, c);
                b.compileShader(a);
                return b.getShaderParameter(a, b.COMPILE_STATUS) ? a : !1
            }

            function c(c, e) {
                c = a(b.VERTEX_SHADER, c);
                e = a(b.FRAGMENT_SHADER, e);
                var k = b.createProgram();
                b.attachShader(k, c);
                b.attachShader(k, e);
                b.linkProgram(k);
                return k
            }

            function f(a) {
                void 0 === a.l && (a.l = "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}");
                void 0 === a.D && (a.D = ["a0"]);
                void 0 === a.L && (a.L = [2]);
                if (void 0 === a.precision || "highp" === a.precision) a.precision = l;
                a.id = h++;
                void 0 !== a.jk && a.jk.forEach(function(b, c) {
                    a.c = a.c.replace(b, a.ua[c])
                });
                a.Ie = 0;
                a.L.forEach(function(b) {
                    a.Ie += 4 * b
                });
                a.pa = c(a.l, "precision " + a.precision + " float;\n" + a.c);
                a.w = {};
                a.f.forEach(function(c) {
                    a.w[c] = b.getUniformLocation(a.pa, c)
                });
                a.attributes = {};
                a.na = [];
                a.D.forEach(function(c) {
                    var e = b.getAttribLocation(a.pa, c);
                    a.attributes[c] = e;
                    a.na.push(e)
                });
                if (a.u) {
                    b.useProgram(a.pa);
                    k = a;
                    g = a.id;
                    for (var e in a.u) b.uniform1i(a.w[e], a.u[e])
                }
                a.Ud = !0
            }

            function r(a) {
                Cb.Jg(B);
                g !== a.id && (B.K(), g = a.id, k = a, b.useProgram(a.pa), a.na.forEach(function(a) {
                    0 !== a && b.enableVertexAttribArray(a)
                }))
            }
            var g = -1,
                k = !1,
                h = 0,
                y = !1,
                l = "highp",
                F = ["u0"],
                m = ["u123"],
                p = {
                    u0: 0
                },
                u = {
                    u123: 0
                },
                v = {
                    u0: 0,
                    u34: 1
                },
                M = {
                    u124: 0
                },
                G = {
                    s0: {
                        c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                        f: F,
                        u: p
                    },
                    s1: {
                        c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vv0);}",
                        f: F,
                        u: p,
                        precision: "lowp"
                    },
                    s56: {
                        c: "uniform sampler2D u0,u34;varying vec2 vv0;void main(){vec4 a=texture2D(u34,vv0),b=texture2D(u0,vv0);gl_FragColor=a*b;}",
                        f: ["u0", "u34"],
                        u: v
                    },
                    s57: {
                        c: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a.r*f;}",
                        f: F,
                        u: p
                    },
                    s58: {
                        c: "uniform sampler2D u0,u34;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u34,vv0),b=texture2D(u0,vv0);gl_FragColor=a.a*b.r*f;}",
                        f: ["u0", "mask"],
                        u: v
                    },
                    s59: {
                        c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vec2(1.-vv0.x,vv0.y));}",
                        f: F,
                        u: p
                    },
                    s60: {
                        c: "uniform sampler2D u0;varying vec2 vv0;void main(){gl_FragColor=texture2D(u0,vec2(vv0.x,1.-vv0.y));}",
                        f: F,
                        u: p
                    },
                    s61: {
                        c: "uniform sampler2D u123;uniform float u91;varying vec2 vv0;void main(){vec4 a=texture2D(u123,vv0);gl_FragColor=a*u91;}",
                        f: ["u123", "u91"],
                        u: u
                    },
                    s62: {
                        c: "uniform sampler2D u123;uniform float u91;varying vec2 vv0;const vec4 g=vec4(.25,.25,.25,.25),e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u123,vv0);float b=dot(a*u91,g);gl_FragColor=b*e;}",
                        f: ["u123", "u91"],
                        u: u
                    },
                    s63: {
                        c: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u0,vv0));gl_FragColor=a*e;}",
                        f: F,
                        u: p
                    },
                    s64: {
                        c: "uniform sampler2D u0,u16;uniform float u17;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0),b=texture2D(u16,vv0);gl_FragColor=mix(b,a,u17*f);}",
                        f: ["u0", "u16", "u17"],
                        u: {
                            u0: 0,
                            u16: 1
                        }
                    },
                    s4: {
                        c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u0,vv0+u24)+texture2D(u0,vv0+u24*vec2(1.,-1.))+texture2D(u0,vv0+u24*vec2(-1.,-1.))+texture2D(u0,vv0+u24*vec2(-1.,1.)));}",
                        f: ["u0", "u24"],
                        u: p
                    },
                    s65: {
                        c: "uniform sampler2D u0;uniform vec4 u125;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 k(float a){if(a==0.)return vec4(0.,0.,0.,0.);float l=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),m=c+127.,b=(a/exp2(c)-1.)*8388608.,d=m/2.,n=fract(d)*2.,o=floor(d),p=e(b,0.,8.),q=e(b,8.,16.),r=n*128.+e(b,16.,23.),j=l+o;return vec4(p,q,r,j)/255.;}void main(){float a=dot(texture2D(u0,vv0),u125);gl_FragColor=k(a);}",
                        f: ["u0", "u125"],
                        u: p
                    },
                    s66: {
                        c: "uniform sampler2D u123;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u123,vv0),b=e/(e+exp(-a));gl_FragColor=b;}",
                        f: m,
                        u: u
                    },
                    s67: {
                        c: "uniform sampler2D u123;varying vec2 vv0;const vec4 e=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u123,vv0);gl_FragColor=max(e,a);}",
                        f: m,
                        u: u
                    },
                    s68: {
                        c: "uniform sampler2D u123;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u123,vv0);gl_FragColor=mix(exp(-abs(a))-e,a,step(0.,a));}",
                        f: m,
                        u: u
                    },
                    s69: {
                        c: "uniform sampler2D u123;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u123,vv0),b=exp(-abs(a))-e;gl_FragColor=mix(.1*b,a,step(0.,a));}",
                        f: m,
                        u: u
                    },
                    s70: {
                        c: "uniform sampler2D u123,u17,u126;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u123,vv0),c=texture2D(u17,vv0),d=texture2D(u126,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}",
                        f: ["u123", "u17", "u126"],
                        u: {
                            u123: 0,
                            u17: 1,
                            u126: 2
                        }
                    },
                    s71: {
                        c: "uniform sampler2D u123;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u123,vv0))/e;}",
                        f: m,
                        u: u
                    },
                    s72: {
                        c: "uniform sampler2D u123;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(.5,.5,.5,.5);void main(){vec4 a=texture2D(u123,vv0),b=log(e+a);gl_FragColor=b;}",
                        f: m,
                        u: u
                    },
                    s73: {
                        c: "uniform sampler2D u123;uniform float gain;varying vec2 vv0;void main(){vec4 a=texture2D(u123,vv0);gl_FragColor=exp(a);}",
                        f: ["u123", "u127"],
                        u: u
                    },
                    s74: {
                        c: "uniform sampler2D u123,u128;uniform float u129;const vec2 f=vec2(.5,.5);const float g=1e-5;const vec4 h=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u128,f);float b=u129*u129;vec4 c=max(b*a,g*h);gl_FragColor=texture2D(u123,vv0)/c;}",
                        f: ["u123", "u130", "u129"],
                        u: {
                            u123: 0,
                            u130: 1
                        }
                    },
                    s75: {
                        c: "uniform sampler2D u0;uniform vec2 u131;varying vec2 vv0;void main(){float a=u131.x*u131.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u131.y),g=floor(u131.x*fract(b*u131.y)),f=(g*u131.y+d)/a;gl_FragColor=texture2D(u0,f+c/a);}",
                        f: ["u0", "u131"],
                        u: p
                    },
                    s76: {
                        c: "uniform sampler2D u132,u133,u134;varying vec2 vv0;void main(){vec4 a=texture2D(u134,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u132,b),e=texture2D(u133,c);gl_FragColor=d*e;}",
                        f: ["u132", "u133", "u134"],
                        u: {
                            u133: 0,
                            u132: 1,
                            u134: 2
                        }
                    },
                    s77: {
                        c: "uniform float u135;uniform sampler2D u132,u133;varying vec2 vv0;void main(){vec2 a=fract(vv0*u135);vec4 b=texture2D(u132,vv0),c=texture2D(u133,a);gl_FragColor=b*c;}",
                        f: ["u133", "u132", "u135"],
                        u: {
                            u133: 0,
                            u132: 1
                        }
                    },
                    s78: {
                        c: "uniform float u135;uniform sampler2D u132,u133,u136,u137,u138,u139;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 i=vv0*u135,m=floor(i),c=i-m;vec4 n=texture2D(u132,vv0),d=texture2D(u133,c),a=texture2D(u139,vv0);a=a*255.;vec4 o=texture2D(u136,c),p=texture2D(u137,c),q=texture2D(u138,c),j=step(-g,-a),b=e-j,k=b*step(-e-g,-a);b*=e-k;vec4 h=b*step(-2.*e-g,-a);b*=e-h;vec4 l=b;d=j*d+k*o+h*p+l*q,gl_FragColor=n*d;}",
                        f: "u132 u133 u135 u139 u136 u137 u138".split(" "),
                        u: {
                            u133: 0,
                            u132: 1,
                            u139: 3,
                            u136: 4,
                            u137: 5,
                            u138: 6
                        }
                    },
                    s79: {
                        c: "uniform sampler2D u132,u133,u46;uniform float u135,u140,u141,u142;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u140*vv0),g=u140*vv0-a;float b=u135/u140;vec2 c=floor(g*b),d=g*b-c,h=(a+d)/u140;float l=u140*u142/u135;vec2 m=l*c,i=(m+d*u141)/u142,e=step(i,j);vec4 n=texture2D(u132,h),o=texture2D(u133,i),p=n*o*e.x*e.y,k=texture2D(u46,h);gl_FragColor=p*u141*u141+k;}",
                        f: "u132 u133 u135 u140 u141 u142 u46".split(" "),
                        u: {
                            u133: 0,
                            u132: 1,
                            u46: 2
                        }
                    },
                    s80: {
                        c: "uniform sampler2D u132,u133;varying vec2 vv0;void main(){vec4 a=texture2D(u132,vv0),b=texture2D(u133,vv0);gl_FragColor=a*b;}",
                        f: ["u132", "u133"],
                        u: {
                            u133: 0,
                            u132: 1
                        }
                    },
                    s81: {
                        c: "uniform sampler2D u0,u46;uniform float u143;varying vec2 vv0;void main(){gl_FragColor=texture2D(u46,vv0)+u143*texture2D(u0,vv0);}",
                        f: ["u0", "u46", "u143"],
                        u: {
                            u0: 0,
                            u46: 1
                        }
                    },
                    s82: {
                        c: "varying vec2 vv0;uniform sampler2D u0;const vec4 g=vec4(1.,1.,1.,1.),e=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=dot(a,e)*g;}",
                        f: F,
                        u: p,
                        precision: "lowp"
                    },
                    s83: {
                        c: "varying vec2 vv0;uniform sampler2D u0;uniform float u144;const vec3 e=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u0,vv0).rgb,b=texture2D(u0,vv0+vec2(0.,u144)).rgb,c=texture2D(u0,vv0+vec2(u144,u144)).rgb,d=texture2D(u0,vv0+vec2(u144,0.)).rgb;gl_FragColor=vec4(dot(a,e),dot(b,e),dot(c,e),dot(d,e));}",
                        f: ["u0", "u144"],
                        u: p,
                        precision: "lowp"
                    },
                    s84: {
                        c: "varying vec2 vv0;uniform sampler2D u0;uniform float u144;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u0,vv0).rgb,b=texture2D(u0,vv0+vec2(0.,u144)).rgb,c=texture2D(u0,vv0+vec2(u144,u144)).rgb,d=texture2D(u0,vv0+vec2(u144,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
                        f: ["u0", "u144"],
                        u: p,
                        precision: "lowp"
                    },
                    s85: {
                        c: "varying vec2 vv0;uniform sampler2D u0,u34;uniform float u145;const vec4 g=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u0,vec2(vv0.x-u145,vv0.y-u145))*1.,a-=texture2D(u0,vec2(vv0.x-u145,vv0.y))*2.,a-=texture2D(u0,vec2(vv0.x-u145,vv0.y+u145))*1.,a+=texture2D(u0,vec2(vv0.x+u145,vv0.y-u145))*1.,a+=texture2D(u0,vec2(vv0.x+u145,vv0.y))*2.,a+=texture2D(u0,vec2(vv0.x+u145,vv0.y+u145))*1.;vec4 b=vec4(0.);b-=texture2D(u0,vec2(vv0.x-u145,vv0.y-u145))*1.,b-=texture2D(u0,vec2(vv0.x,vv0.y-u145))*2.,b-=texture2D(u0,vec2(vv0.x+u145,vv0.y-u145))*1.,b+=texture2D(u0,vec2(vv0.x-u145,vv0.y+u145))*1.,b+=texture2D(u0,vec2(vv0.x,vv0.y+u145))*2.,b+=texture2D(u0,vec2(vv0.x+u145,vv0.y+u145))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u0,vv0).a),f=texture2D(u34,vv0);gl_FragColor=f.a*e.r*g;}",
                        f: ["u0", "u34", "u145"],
                        u: v
                    },
                    s86: {
                        c: "varying vec2 vv0;uniform sampler2D u0,u34;uniform float u145;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float i=0.;vec2 l=k*u145,b,c;float d,a,g=0.;for(float f=-4.;f<=4.;f+=1.)for(float e=-4.;e<=4.;e+=1.)b=vec2(f,e),d=length(b)/2.,a=exp(-d*d),c=vv0+l*b,a=1.,i+=a*texture2D(u0,c).r,g+=a;vec4 m=texture2D(u34,vv0);gl_FragColor=m.a*(texture2D(u0,c).r-i/g)*j;}",
                        f: ["u0", "u34", "u145"],
                        u: v
                    },
                    s87: {
                        c: "uniform sampler2D u124;uniform vec2 u24;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 h=vec2(.5,.5),i=vec2(1.,0.),j=vec2(0.,1.);void main(){vec2 a=vv0-u24*h;vec4 b=texture2D(u124,a),c=texture2D(u124,a+u24*i),d=texture2D(u124,a+u24*j),k=texture2D(u124,a+u24),l=e(b,c),g=e(d,k);gl_FragColor=e(l,g);}",
                        f: ["u124", "u24"],
                        u: M
                    },
                    s88: {
                        c: "uniform sampler2D u124;uniform vec2 u24;varying vec2 vv0;const vec2 j=vec2(1.,0.),k=vec2(0.,1.),l=vec2(2.,0.),m=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u124,a),c=texture2D(u124,a+u24*j),d=texture2D(u124,a+u24*k),g=texture2D(u124,a+u24),i=e(b,c),h=e(d,g);return e(i,h);}void main(){vec2 a=vv0+u24*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u24*l),d=f(a+u24*2.),g=f(a+u24*m),i=e(b,c),h=e(d,g);gl_FragColor=e(i,h);}",
                        f: ["u124", "u24"],
                        u: M
                    },
                    s89: {
                        c: "uniform sampler2D u0;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*a;}",
                        f: ["u0"],
                        u: p,
                        precision: "lowp"
                    },
                    s90: {
                        c: "uniform sampler2D u0;uniform vec2 u24;varying vec2 vv0;const vec4 g=vec4(1.,1.,1.,1.);const float d=15444.;void main(){vec4 a=1001./d*texture2D(u0,vv0-3.*u24)+2002./d*texture2D(u0,vv0-2.*u24)+3003./d*texture2D(u0,vv0-u24)+3432./d*texture2D(u0,vv0)+3003./d*texture2D(u0,vv0+u24)+2002./d*texture2D(u0,vv0+2.*u24)+1001./d*texture2D(u0,vv0+3.*u24);gl_FragColor=a;}",
                        f: ["u24", "u0"],
                        u: p,
                        precision: "lowp"
                    },
                    s91: {
                        c: "uniform sampler2D u0,u18,u146;varying vec2 vv0;const vec4 g=vec4(1.,1.,1.,1.);const float h=.1;void main(){vec4 a=texture2D(u18,vv0),b=texture2D(u146,vv0),c=texture2D(u0,vv0),d=max(g*h,b-a*a),f=sqrt(d);gl_FragColor=(c-a)/f;}",
                        f: ["u0", "u18", "u146"],
                        u: {
                            u0: 0,
                            u18: 1,
                            u146: 2
                        }
                    }
                },
                pa = {
                    s92: {
                        c: "uniform float u135,u147;uniform sampler2D u132,u133,u46;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(.01,.01);void main(){vec4 sum=texture2D(u46,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u135,xyTo=floor(vv0*u135+eps2);float weightSize=toSparsity*u135;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u147*(xyPatch-halfFromSparsity))/u135,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u132,uvWeight)*texture2D(u133,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                        f: ["u135", "u132", "u133", "u46", "u147"],
                        ua: ["1.1111", "gl_FragColor\\*=2.2222;"]
                    },
                    s93: {
                        c: "uniform float u135,u147,u142;uniform sampler2D u132,u133,u46;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(.01,.01);void main(){vec4 sum=texture2D(u46,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u142,xyTo=floor(vv0*u135+eps2);float weightSize=fromSparsity*u142;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u135;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u147*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u142,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u132,uvWeight)*texture2D(u133,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                        f: "u135 u142 u132 u133 u46 u147".split(" "),
                        ua: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"]
                    }
                },
                B = {
                    Dc: function() {
                        return y
                    },
                    i: function() {
                        if (!y) {
                            l = "highp";
                            for (var a in G) f(G[a], a);
                            H.set("s0");
                            b.enableVertexAttribArray(0);
                            a = Pb.i();
                            y = !0;
                            return a
                        }
                    },
                    Ne: function(a) {
                        a.forEach(function(a) {
                            B.ea(a)
                        })
                    },
                    ea: function(a) {
                        G[a.id] = a;
                        f(a, a.id)
                    },
                    Ef: function(a, b, c) {
                        b || (b = a);
                        G[b] = Object.create(pa[a]);
                        pa[a].ua && pa[a].ua.forEach(function(a, e) {
                            G[b].c = G[b].c.replace(new RegExp(a, "g"), c[e])
                        });
                        f(G[b], b)
                    },
                    set: function(a) {
                        r(G[a])
                    },
                    Ei: function(a) {
                        return "undefined" !== typeof G[a]
                    },
                    Zl: function() {
                        return k.Ul
                    },
                    K: function() {
                        -1 !== g && (g = -1, k.na.forEach(function(a) {
                            0 !== a && b.disableVertexAttribArray(a)
                        }))
                    },
                    Sc: function() {
                        var a = 0;
                        k.na.forEach(function(c, e) {
                            e = k.L[e];
                            b.vertexAttribPointer(c, e, b.FLOAT, !1, k.Ie, a);
                            a += 4 * e
                        })
                    },
                    Sl: function() {
                        b.enableVertexAttribArray(0)
                    },
                    Tc: function() {
                        b.vertexAttribPointer(k.na[0], 2, b.FLOAT, !1, 8, 0)
                    },
                    Qc: function(a, c) {
                        b.uniform1i(k.w[a], c)
                    },
                    A: function(a, c) {
                        b.uniform1f(k.w[a], c)
                    },
                    M: function(a, c, e) {
                        b.uniform2f(k.w[a], c, e)
                    },
                    Kg: function(a, c) {
                        b.uniform2fv(k.w[a], c)
                    },
                    Lg: function(a, c) {
                        b.uniform3fv(k.w[a], c)
                    },
                    Rc: function(a, c, e, f) {
                        b.uniform3f(k.w[a], c, e, f)
                    },
                    qa: function(a, c) {
                        b.uniform4fv(k.w[a], c)
                    },
                    Dk: function(a, c) {
                        b.uniformMatrix2fv(k.w[a], !1, c)
                    },
                    Ek: function(a, c) {
                        b.uniformMatrix3fv(k.w[a], !1, c)
                    },
                    dc: function(a, c) {
                        b.uniformMatrix4fv(k.w[a], !1, c)
                    },
                    g: function(a, c) {
                        B.set(a);
                        c.forEach(function(a) {
                            switch (a.type) {
                                case "4f":
                                    b.uniform4fv(k.w[a.name], a.value);
                                    break;
                                case "3f":
                                    b.uniform3fv(k.w[a.name], a.value);
                                    break;
                                case "2f":
                                    b.uniform2fv(k.w[a.name], a.value);
                                    break;
                                case "1f":
                                    b.uniform1f(k.w[a.name], a.value);
                                    break;
                                case "1i":
                                    b.uniform1i(k.w[a.name], a.value);
                                    break;
                                case "mat2":
                                    b.uniformMatrix2fv(k.w[a.name], !1, a.value);
                                    break;
                                case "mat3":
                                    b.uniformMatrix3fv(k.w[a.name], !1, a.value);
                                    break;
                                case "mat4":
                                    b.uniformMatrix4fv(k.w[a.name], !1, a.value)
                            }
                        })
                    }
                };
            return B
        }(),
        b = !1,
        Ha = function() {
            function a(a) {
                console.log("ERROR in ContextFeedForward : ", a);
                return !1
            }
            var c = !1,
                f = !1,
                r = !1,
                g = !0,
                k = !1,
                h = {
                    H: function() {
                        return c.width
                    },
                    S: function() {
                        return c.height
                    },
                    Qa: function() {
                        return c
                    },
                    Hi: function() {
                        return b
                    },
                    N: function() {
                        return g
                    },
                    flush: function() {
                        b.flush()
                    },
                    Mi: function() {
                        k || (k = new Uint8Array(c.width * c.height * 4));
                        b.readPixels(0, 0, c.width, c.height, b.RGBA, b.UNSIGNED_BYTE, k);
                        return k
                    },
                    $l: function() {
                        return c.toDataURL("image/jpeg")
                    },
                    am: function() {
                        qa.X();
                        f || (f = document.createElement("canvas"), r = f.getContext("2d"));
                        f.width = c.width;
                        f.height = c.height;
                        var a = h.Mi(),
                            b = r.createImageData(f.width, f.height),
                            e, k, g = f.width,
                            x = f.height,
                            w = b.data;
                        for (k = 0; k < x; ++k) {
                            var l = x - k - 1;
                            for (e = 0; e < g; ++e) {
                                var m = 4 * (k * g + e),
                                    p = 4 * (l * g + e);
                                w[m] = a[p];
                                w[m + 1] = a[p + 1];
                                w[m + 2] = a[p + 2];
                                w[m + 3] = a[p + 3]
                            }
                        }
                        r.putImageData(b, 0, 0);
                        return f.toDataURL("image/png")
                    },
                    sf: function(a) {
                        !f && a && (f = document.createElement("canvas"), r = f.getContext("2d"));
                        var b = a ? f : document.createElement("canvas");
                        b.width = c.width;
                        b.height = c.height;
                        (a ? r : b.getContext("2d")).drawImage(c, 0, 0);
                        return b
                    },
                    i: function(e) {
                        e.af && !e.ba ? c = document.getElementById(e.af) : e.ba && (c = e.ba);
                        c || (c = document.createElement("canvas"));
                        c.width = e && void 0 !== e.width ? e.width : 512;
                        c.height = e && void 0 !== e.height ? e.height : 512;
                        "undefined" === typeof e && (e = {});
                        void 0 === e.premultipliedAlpha && (e.premultipliedAlpha = !1);
                        void 0 === e.Hf && (e.Hf = !0);
                        void 0 === e.antialias && (e.antialias = !1);
                        var k = {
                            antialias: e.antialias,
                            alpha: !0,
                            preserveDrawingBuffer: !0,
                            premultipliedAlpha: e.premultipliedAlpha,
                            stencil: !1,
                            depth: e.Hf
                        };
                        a: {
                            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                                var f = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                f = [parseInt(f[1], 10), parseInt(f[2], 10), parseInt(f[3] || 0, 10)];
                                if (12 === f[0] || 13 === f[0]) {
                                    f = !0;
                                    break a
                                }
                            }
                            f = !1
                        }
                        f || (b = c.getContext("webgl2", k));
                        b ? g = !0 : ((b = c.getContext("webgl", k)) || (b = c.getContext("experimental-webgl", k)), g = !1);
                        if (!b) return a("WebGL is not enabled");
                        b.getExtension("WEBGL_lose_context") && c.addEventListener("webglcontextlost", e.Rj, !1);
                        if (!wa.i()) return a("Not enough capabilities");
                        if (!wa.Vh() && g) return a("Your configuration cannot process color buffer float");
                        b.clearColor(0, 0, 0, 0);
                        b.disable(b.DEPTH_TEST);
                        b.disable(b.BLEND);
                        b.disable(b.DITHER);
                        b.disable(b.STENCIL_TEST);
                        b.GENERATE_MIPMAP_HINT && b.hint(b.GENERATE_MIPMAP_HINT, b.FASTEST);
                        b.disable(b.SAMPLE_ALPHA_TO_COVERAGE);
                        b.disable(b.SAMPLE_COVERAGE);
                        return !0
                    },
                    Sb: function() {
                        if (!H.i()) return !1;
                        b.depthFunc(b.LEQUAL);
                        b.clearDepth(1);
                        return !0
                    }
                };
            return h
        }(),
        Cb = function() {
            var a = "undefined" === typeof H ? f : H;
            return {
                Jg: function(b) {
                    a !== b && (a.K(), a = b)
                },
                Dc: function() {
                    return a.Dc()
                },
                Tc: function() {
                    a.Tc()
                },
                Sc: function() {
                    a.Sc()
                },
                K: function() {
                    a.K()
                },
                set: function(b) {
                    a.set(b)
                }
            }
        }(),
        O = function() {
            var a, c, f = 0,
                g = -2,
                x = -2,
                k = !1,
                h = {
                    reset: function() {
                        x = g = -2
                    },
                    i: function() {
                        k || (a = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, a), b.bufferData(b.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), b.STATIC_DRAW), c = b.createBuffer(), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c), b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), b.STATIC_DRAW), h.nd(), k = !0)
                    },
                    a: function(a) {
                        var c = f++,
                            e = a.da ? a.da.length : 0,
                            k = "undefined" === typeof a.mode ? b.STATIC_DRAW : a.mode,
                            r = b.createBuffer();
                        b.bindBuffer(b.ARRAY_BUFFER, r);
                        b.bufferData(b.ARRAY_BUFFER, a.Ga instanceof Float32Array ? a.Ga : new Float32Array(a.Ga), k);
                        g = c;
                        if (a.da) {
                            var w = b.createBuffer();
                            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, w);
                            if (65536 > a.da.length) var h = Uint16Array,
                                y = b.UNSIGNED_SHORT,
                                l = 2;
                            else h = Uint32Array, y = b.UNSIGNED_INT, l = 4;
                            b.bufferData(b.ELEMENT_ARRAY_BUFFER, a.da instanceof h ? a.da : new h(a.da), k);
                            x = c
                        }
                        var m = {
                            Lb: function(a) {
                                g !== c && (b.bindBuffer(b.ARRAY_BUFFER, r), g = c);
                                a && Cb.Sc()
                            },
                            Nh: function() {
                                x !== c && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, w), x = c)
                            },
                            bind: function(a) {
                                m.Lb(a);
                                m.Nh()
                            },
                            O: function() {
                                b.drawElements(b.TRIANGLES, e, y, 0)
                            },
                            Ba: function(a, c) {
                                b.drawElements(b.TRIANGLES, a, y, c * l)
                            },
                            remove: function() {
                                b.deleteBuffer(r);
                                a.da && b.deleteBuffer(w);
                                m = null
                            }
                        };
                        return m
                    },
                    nd: function() {
                        -1 !== g && (b.bindBuffer(b.ARRAY_BUFFER, a), g = -1); - 1 !== x && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c), x = -1)
                    },
                    h: function(a, c) {
                        a && O.nd();
                        c && Cb.Tc();
                        b.drawElements(b.TRIANGLES, 3, b.UNSIGNED_SHORT, 0)
                    },
                    G: function() {
                        b.deleteBuffer(a);
                        b.deleteBuffer(c)
                    }
                };
            return h
        }(),
        qa = function() {
            var a, c, f, g = !1,
                x = {
                    ca: -2,
                    Fi: 1
                };
            return {
                i: function() {
                    if (!g) {
                        a = b.createFramebuffer();
                        var e = wa.N();
                        c = e && b.DRAW_FRAMEBUFFER ? b.DRAW_FRAMEBUFFER : b.FRAMEBUFFER;
                        f = e && b.READ_FRAMEBUFFER ? b.READ_FRAMEBUFFER : b.FRAMEBUFFER;
                        g = !0
                    }
                },
                Oi: function() {
                    return c
                },
                wc: function() {
                    return f
                },
                hb: function() {
                    return b.FRAMEBUFFER
                },
                dm: function() {
                    return x
                },
                Wl: function() {
                    return a
                },
                a: function(e) {
                    void 0 === e.Tb && (e.Tb = !1);
                    var k = e.Fa ? e.Fa : !1,
                        f = e.width,
                        g = void 0 !== e.height ? e.height : e.width,
                        r = a,
                        w = !1,
                        h = !1,
                        l = 0;
                    k && (f = f ? f : k.H(), g = g ? g : k.S());
                    var m = {
                        vg: function() {
                            h || (r = b.createFramebuffer(), h = !0, l = x.Fi++)
                        },
                        kc: function() {
                            m.vg();
                            m.j();
                            w = b.createRenderbuffer();
                            b.bindRenderbuffer(b.RENDERBUFFER, w);
                            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, f, g);
                            b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, w);
                            b.clearDepth(1)
                        },
                        bind: function(a, e) {
                            l !== x.ca && (b.bindFramebuffer(c, r), x.ca = l);
                            k && k.j();
                            e && b.viewport(0, 0, f, g);
                            a && b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT)
                        },
                        Se: function() {
                            l !== x.ca && (b.bindFramebuffer(c, r), x.ca = l)
                        },
                        clear: function() {
                            b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT)
                        },
                        td: function() {
                            b.clear(b.COLOR_BUFFER_BIT)
                        },
                        Xe: function() {
                            b.clear(b.DEPTH_BUFFER_BIT)
                        },
                        ec: function() {
                            b.viewport(0, 0, f, g)
                        },
                        j: function() {
                            l !== x.ca && (b.bindFramebuffer(c, r), x.ca = l)
                        },
                        rtt: function(a) {
                            k = a;
                            x.ca !== l && (b.bindFramebuffer(b.FRAMEBUFFER, r), x.ca = l);
                            a.j()
                        },
                        X: function() {
                            b.bindFramebuffer(c, null);
                            x.ca = -1
                        },
                        resize: function(a, c) {
                            f = a;
                            g = c;
                            w && (b.bindRenderbuffer(b.RENDERBUFFER, w), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, f, g))
                        },
                        remove: function() {
                            b.bindFramebuffer(c, r);
                            b.framebufferTexture2D(c, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0);
                            w && b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, null);
                            b.bindFramebuffer(c, null);
                            b.deleteFramebuffer(r);
                            w && b.deleteRenderbuffer(w);
                            m = null
                        }
                    };
                    e.Tb && m.kc();
                    return m
                },
                X: function() {
                    b.bindFramebuffer(c, null);
                    x.ca = -1
                },
                Lm: function() {
                    b.bindFramebuffer(c, null);
                    b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                    b.viewport(0, 0, wa.H(), wa.S());
                    x.ca = -1
                },
                reset: function() {
                    x.ca = -2
                },
                fa: function() {
                    0 !== x.ca && (b.bindFramebuffer(c, a), x.ca = 0)
                },
                clear: function() {
                    b.viewport(0, 0, wa.H(), wa.S());
                    b.clear(b.COLOR_BUFFER_BIT)
                }
            }
        }(),
        G = function() {
            function a(a) {
                b.bindTexture(b.TEXTURE_2D, a)
            }

            function c(a) {
                var b = new Uint16Array(a.length);
                a.forEach(function(a, c) {
                    N[0] = a;
                    var e = q[0];
                    var k = e >> 16 & 32768;
                    a = e >> 12 & 2047;
                    var f = e >> 23 & 255;
                    e = 103 > f ? k : 142 < f ? k | 31744 | ((255 == f ? 0 : 1) && e & 8388607) : 113 > f ? (a |= 2048, k | (a >> 114 - f) + (a >> 113 - f & 1)) : (k | f - 112 << 10 | a >> 1) + (a & 1);
                    b[c] = e
                });
                return b
            }

            function f() {
                if (null !== ea.Sd) return ea.Sd;
                var a = g(c([1, 1, 1, 1]));
                return null === a ? !0 : ea.Sd = a
            }

            function g(a) {
                if (!Cb.Dc() || !M) return null;
                a = J.a({
                    isFloat: !1,
                    I: !0,
                    array: a,
                    width: 1
                });
                qa.X();
                b.viewport(0, 0, 1, 1);
                b.clearColor(0, 0, 0, 0);
                b.clear(b.COLOR_BUFFER_BIT);
                Cb.set("s0");
                a.Kb(0);
                O.h(!1, !0);
                var c = new Uint8Array(4);
                b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, c);
                c = .9 < c[0];
                a.remove();
                qa.fa();
                return c
            }
            var x = 0,
                k, h = 0,
                y, l = !1,
                m, p, v, M = !1,
                G = !1,
                pa, t, R, B = [
                    [1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 1]
                ],
                C = !1,
                A = !1,
                N = new Float32Array(1),
                q = new Int32Array(N.buffer),
                ea = {
                    Sd: null,
                    Td: null
                },
                J = {
                    i: function() {
                        if (!M) {
                            p = [b.RGB, !1, b.RGB, b.RGBA];
                            v = [b.RGB, !1, b.RGB, b.RGBA];
                            k = [b.TEXTURE0, b.TEXTURE1, b.TEXTURE2, b.TEXTURE3, b.TEXTURE4, b.TEXTURE5, b.TEXTURE6, b.TEXTURE7];
                            C = "undefined" !== typeof L;
                            A = "undefined" !== typeof wa;
                            y = [-1, -1, -1, -1, -1, -1, -1, -1];
                            m = [b.UNSIGNED_BYTE, b.FLOAT, b.FLOAT];
                            if (!l) {
                                for (var a = new Float32Array(16384), c = 0; 16384 > c; ++c) a[c] = 2 * Math.random() - 1;
                                l = {
                                    random: J.a({
                                        isFloat: !0,
                                        isPot: !0,
                                        array: a,
                                        width: 64
                                    }),
                                    Vg: J.a({
                                        isFloat: !1,
                                        isPot: !0,
                                        width: 1,
                                        array: new Uint8Array([0, 0, 0, 0])
                                    })
                                }
                            }
                            M = !0
                        }
                    },
                    mj: function() {
                        J.Yk()
                    },
                    yf: function() {
                        return l.Vg
                    },
                    Yk: function() {
                        m[1] = wa.xc()
                    },
                    yk: function() {
                        v = p = [b.RGBA, b.RGBA, b.RGBA, b.RGBA]
                    },
                    pm: function(a, c) {
                        H.set("s1");
                        qa.X();
                        var e = a.H(),
                            k = a.S();
                        b.viewport(0, 0, e, k);
                        a.b(0);
                        O.h(!1, !1);
                        b.readPixels(0, 0, e, k, b.RGBA, b.UNSIGNED_BYTE, c)
                    },
                    Gi: function(c, e, k) {
                        b.activeTexture(b.TEXTURE0);
                        x = 0;
                        var f = b.createTexture();
                        a(f);
                        var g = wa.N() && b.RGBA32F ? b.RGBA32F : b.FLOAT;
                        e = e instanceof Float32Array ? e : new Float32Array(e);
                        var r = Math.log(e.length) / Math.log(2);
                        r !== Math.floor(r) && (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE));
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
                        b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, k);
                        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, c.H(), c.S(), 0, b.RGBA, g, e);
                        a(null);
                        b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                        qa.fa();
                        H.set("s0");
                        c.J();
                        b.clearColor(0, 0, 0, 0);
                        b.clear(b.COLOR_BUFFER_BIT);
                        a(f);
                        O.h(!0, !1);
                        b.deleteTexture(f)
                    },
                    a: function(e) {
                        function r() {
                            a(I);
                            va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, va);
                            e.isPot ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, e.Cc ? b.MIRRORED_REPEAT : b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, e.aa ? b.MIRRORED_REPEAT : b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE));
                            e.Sa && "undefined" !== typeof u && b.texParameterf(b.TEXTURE_2D, L.Ni().TEXTURE_MAX_ANISOTROPY_EXT, u.oh);
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, e.isLinear ? b.LINEAR : b.NEAREST);
                            e.isLinear ? b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, e.isMipmap && !Xa ? b.NEAREST_MIPMAP_LINEAR : b.LINEAR) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, e.isMipmap && !Xa ? b.NEAREST_MIPMAP_NEAREST : b.NEAREST);
                            S = p[e.v - 1];
                            z = v[e.v - 1];
                            aa = m[w];
                            if (wa.N()) {
                                var d = b.RGBA32F;
                                S === b.RGBA && aa === b.FLOAT && d && (z = d);
                                S === b.RGB && aa === b.FLOAT && d && (z = d, S = b.RGBA)
                            }
                            if (e.I && !e.isFloat || e.isFloat && e.isMipmap && Pb.uj())(d = b.RGBA16F) && (z = d), aa = wa.xc();
                            e.Uf && "undefined" !== typeof b.texStorage2D && (kb = e.Uf);
                            e.Ub && 4 === e.v && (S = L.cj());
                            if (e.ga_) b.texImage2D(b.TEXTURE_2D, 0, z, S, aa, e.ga_);
                            else if (e.url) b.texImage2D(b.TEXTURE_2D, 0, z, S, aa, W);
                            else if (q) {
                                try {
                                    b.getError(), b.texImage2D(b.TEXTURE_2D, 0, z, E, P, 0, S, aa, q), b.getError() !== b.NO_ERROR && (b.texImage2D(b.TEXTURE_2D, 0, z, E, P, 0, S, aa, null), b.getError() !== b.NO_ERROR && b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, E, P, 0, b.RGBA, b.UNSIGNED_BYTE, null))
                                } catch (ec) {
                                    b.texImage2D(b.TEXTURE_2D, 0, z, E, P, 0, S, aa, null)
                                }
                                e.isKeepArray || (q = null)
                            } else b.texImage2D(b.TEXTURE_2D, 0, z, E, P, 0, S, aa, null);
                            if (e.isMipmap)
                                if (!Xa && Ea) Ea.tc(), mb = !0;
                                else if (Xa) {
                                d = Math.log(Math.min(E, P)) / Math.log(2);
                                var c;
                                db = Array(1 + d);
                                db[0] = I;
                                for (c = 1; c <= d; ++c) {
                                    var n = Math.pow(2, c),
                                        D = E / n;
                                    n = P / n;
                                    var k = b.createTexture();
                                    a(k);
                                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
                                    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
                                    b.texImage2D(b.TEXTURE_2D, 0, z, D, n, 0, S, aa, null);
                                    a(null);
                                    db[c] = k
                                }
                                mb = !0
                            }
                            a(null);
                            y[x] = -1;
                            va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                            K = !0;
                            N && Ea && (N(Ea), N = !1)
                        }
                        "undefined" === typeof e.isFloat && (e.isFloat = !1);
                        "undefined" === typeof e.I && (e.I = !1);
                        "undefined" === typeof e.isPot && (e.isPot = !0);
                        "undefined" === typeof e.isLinear && (e.isLinear = !1);
                        "undefined" === typeof e.isMipmap && (e.isMipmap = !1);
                        "undefined" === typeof e.Z && (e.Z = !1);
                        void 0 === e.Sa && (e.Sa = !1);
                        void 0 === e.aa && (e.aa = !1);
                        void 0 === e.Cc && (e.Cc = !1);
                        void 0 === e.Ub && (e.Ub = !1);
                        void 0 === e.v && (e.v = 4);
                        void 0 === e.If && (e.If = !1);
                        "undefined" === typeof e.isFlipY && (e.isFlipY = e.url || e.array ? !0 : !1);
                        "undefined" === typeof e.isKeepArray && (e.isKeepArray = !1);
                        e.data && (e.array = "string" === typeof e.data ? ba(e.data) : e.isFloat ? new Float32Array(e.data) : new Uint8Array(e.data), e.isFlipY = !1);
                        var w = 0,
                            l = e.ga_ ? !0 : !1,
                            F = null,
                            Q = null,
                            M = !1,
                            T = null;
                        e.isFloat && (e.I = !0);
                        e.I && (w = 1);
                        e.If || wa.N() || !e.isFloat || !A || wa.U() || (e.isFloat = !1);
                        e.isFloat && (w = 2);
                        e.Sa && C && !L.tj() && (e.Sa = !1);
                        var I = b.createTexture(),
                            N = e.Z,
                            W = null,
                            q = !1,
                            E = 0,
                            P = 0,
                            K = !1,
                            la = h++,
                            na = !1,
                            ha, d, n, D, z, S, aa, va = e.isFlipY,
                            Xa = e.I && e.isMipmap && "undefined" !== typeof Pb && !Pb.Xh() ? !0 : !1,
                            db, kb = -1,
                            mb = !1;
                        "undefined" !== typeof e.width && e.width && (E = e.width, P = "undefined" !== typeof e.height && e.height ? e.height : E);
                        var Ea = {
                            get: function() {
                                return I
                            },
                            H: function() {
                                return E
                            },
                            S: function() {
                                return P
                            },
                            ej: function() {
                                return e.url
                            },
                            Kf: function() {
                                return e.isFloat
                            },
                            Lf: function() {
                                return e.I
                            },
                            jm: function() {
                                return e.isLinear
                            },
                            tc: function() {
                                b.generateMipmap(b.TEXTURE_2D)
                            },
                            Re: function(d, b) {
                                Xa ? (d || (d = Ea.vf()), Ea.jd(b), a(db[d]), y[b] = -1) : Ea.b(b)
                            },
                            vf: function() {
                                -1 === kb && (kb = Math.log(E) / Math.log(2));
                                return kb
                            },
                            qf: function(d) {
                                if (Xa) {
                                    d || (d = Ea.vf());
                                    H.set("s4");
                                    Ea.jd(0);
                                    var c, n = E,
                                        e = P;
                                    for (c = 1; c <= d; ++c) n /= 2, e /= 2, H.M("u24", .25 / n, .25 / e), b.viewport(0, 0, n, e), a(db[c - 1]), b.framebufferTexture2D(qa.hb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, db[c], 0), O.h(!1, 1 === c);
                                    y[0] = -1
                                } else Ea.tc()
                            },
                            jd: function(a) {
                                a !== x && (b.activeTexture(k[a]), x = a)
                            },
                            b: function(d) {
                                if (!K) return !1;
                                Ea.jd(d);
                                if (y[d] === la) return !1;
                                a(I);
                                y[d] = la;
                                return !0
                            },
                            Kb: function(d) {
                                b.activeTexture(k[d]);
                                x = d;
                                a(I);
                                y[d] = la
                            },
                            j: function() {
                                b.framebufferTexture2D(qa.hb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, I, 0)
                            },
                            J: function() {
                                b.viewport(0, 0, E, P);
                                b.framebufferTexture2D(qa.hb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, I, 0)
                            },
                            Wk: function() {
                                b.framebufferTexture2D(qa.hb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0)
                            },
                            resize: function(a, d) {
                                E = a;
                                P = d;
                                r()
                            },
                            clone: function(a) {
                                a = J.a({
                                    width: E,
                                    height: P,
                                    I: e.I,
                                    isFloat: e.isFloat,
                                    isLinear: e.isLinear,
                                    aa: e.aa,
                                    isFlipY: a ? !va : va,
                                    isPot: e.isPot
                                });
                                Cb.set("s0");
                                qa.fa();
                                a.j();
                                b.viewport(0, 0, E, P);
                                Ea.b(0);
                                O.h(!0, !0);
                                return a
                            },
                            ec: function() {
                                b.viewport(0, 0, E, P)
                            },
                            remove: function() {
                                b.deleteTexture(I);
                                Ea = null
                            },
                            refresh: function() {
                                Ea.Kb(0);
                                va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                                l ? b.texImage2D(b.TEXTURE_2D, 0, z, S, b.UNSIGNED_BYTE, e.ga_) : b.texImage2D(b.TEXTURE_2D, 0, z, E, P, 0, S, aa, q);
                                va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                            },
                            $e: function() {
                                var a = E * P * 4;
                                d = [new Uint8Array(a), new Uint8Array(a), new Uint8Array(a), new Uint8Array(a)];
                                ha = [new Float32Array(d[0].buffer), new Float32Array(d[1].buffer), new Float32Array(d[2].buffer), new Float32Array(d[3].buffer)];
                                n = new Uint8Array(4 * a);
                                D = new Float32Array(n.buffer);
                                na = !0
                            },
                            pg: function() {
                                na || Ea.$e();
                                b.readPixels(0, 0, E, 4 * P, b.RGBA, b.UNSIGNED_BYTE, n);
                                var a, d = E * P,
                                    c = 2 * d,
                                    e = 3 * d;
                                for (a = 0; a < d; ++a) ha[0][a] = D[a], ha[1][a] = D[a + d], ha[2][a] = D[a + c], ha[3][a] = D[a + e];
                                return ha
                            },
                            jf: function() {
                                qa.X();
                                H.set("s65");
                                Ea.b(0);
                                for (var a = 0; 4 > a; ++a) b.viewport(0, P * a, E, P), H.qa("u125", B[a]), O.h(!1, 0 === a)
                            },
                            Mm: function(d) {
                                var c;
                                if (c = aa === m[0]) null !== ea.Td ? c = ea.Td : (c = g(new Uint8Array([255, 255, 255, 255])), c = null === c ? !0 : ea.Td = c), c = !c;
                                a(I);
                                va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, va);
                                c ? (M || (F = document.createElement("canvas"), F.width = E, F.height = P, Q = F.getContext("2d"), T = Q.createImageData(E, P), M = !0), T.data.set(d), Q.putImageData(T, 0, 0), b.texImage2D(b.TEXTURE_2D, 0, z, S, aa, F)) : b.texImage2D(b.TEXTURE_2D, 0, z, E, P, 0, S, aa, d);
                                y[x] = la;
                                va && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                            },
                            Nm: function(d, c) {
                                a(I);
                                b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, c);
                                b.texImage2D(b.TEXTURE_2D, 0, z, S, aa, d);
                                y[x] = la;
                                c && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                            },
                            $b: function(a, c) {
                                var n = E * P,
                                    D = 4 * n;
                                a = e.I ? a ? "RGBE" : "JSON" : "RGBA";
                                c && (a = c);
                                c = wa.N() && !1;
                                switch (a) {
                                    case "RGBE":
                                        var z = "s10";
                                        break;
                                    case "JSON":
                                        z = c ? "s0" : "s65";
                                        break;
                                    case "RGBA":
                                    case "RGBAARRAY":
                                        z = "s60"
                                }
                                na || ("RGBA" === a || "RGBE" === a || "RGBAARRAY" === a ? (d = new Uint8Array(D), na = !0) : "JSON" !== a || c || Ea.$e());
                                qa.X();
                                H.set(z);
                                Ea.b(0);
                                if ("RGBA" === a || "RGBE" === a || "RGBAARRAY" === a) {
                                    b.viewport(0, 0, E, P);
                                    O.h(!0, !0);
                                    b.readPixels(0, 0, E, P, b.RGBA, b.UNSIGNED_BYTE, d);
                                    if ("RGBAARRAY" === a) return {
                                        data: d
                                    };
                                    G || (pa = document.createElement("canvas"), t = pa.getContext("2d"), G = !0);
                                    pa.width = E;
                                    pa.height = P;
                                    R = t.createImageData(E, P);
                                    R.data.set(d);
                                    t.putImageData(R, 0, 0);
                                    var aa = pa.toDataURL("image/png")
                                } else if ("JSON" === a)
                                    if (c) aa = new Float32Array(n), b.viewport(0, 0, E, P), O.h(!0, !0), b.readPixels(0, 0, E, P, b.RGBA, b.FLOAT, aa);
                                    else {
                                        for (aa = 0; 4 > aa; ++aa) b.viewport(0, P * aa, E, P), H.qa("u125", B[aa]), O.h(!aa, !aa);
                                        Ea.pg();
                                        aa = Array(n);
                                        for (z = 0; z < n; ++z) aa[4 * z] = ha[0][z], aa[4 * z + 1] = ha[1][z], aa[4 * z + 2] = ha[2][z], aa[4 * z + 3] = ha[3][z]
                                    }
                                return {
                                    format: a,
                                    data: aa,
                                    width: E,
                                    height: P,
                                    isMirrorY: e.aa,
                                    isFlipY: "RGBA" === a ? e.isFlipY : !e.isFlipY
                                }
                            }
                        };
                        e.isMipmap && !Xa && K && !mb && (Ea.tc(), mb = !0);
                        if (e.url) a(I), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 1, 1, 0, b.RGBA, b.UNSIGNED_BYTE, null), W = new Image, W.Ml = "Anonymous", W.crossOrigin = "Anonymous", W.src = e.url, W.onload = function() {
                            E = W.width;
                            P = W.height;
                            r()
                        };
                        else if (e.ga_) {
                            var ia = function() {
                                E = void 0 !== e.ga_.videoWidth ? e.ga_.videoWidth : e.ga_.width;
                                P = void 0 !== e.ga_.videoHeight ? e.ga_.videoHeight : e.ga_.height;
                                E ? r() : setTimeout(ia, 1)
                            };
                            ia()
                        } else e.array ? (e.I && !e.isFloat ? e.array instanceof Uint16Array ? (q = e.array, r()) : f() ? (q = c(e.array), r()) : (r(), J.Gi(Ea, e.array, va)) : (q = e.isFloat ? e.array instanceof Float32Array ? e.array : new Float32Array(e.array) : e.array instanceof Uint8Array ? e.array : new Uint8Array(e.array), r()), e.isKeepArray || (q && q !== e.array && (q = null), delete e.array)) : r();
                        Ea.$i = Ea.H;
                        N && K && (N(Ea), N = !1);
                        return Ea
                    },
                    X: function(c) {
                        c !== x && (b.activeTexture(k[c]), x = c);
                        y[c] = -1;
                        a(null)
                    },
                    Ph: function(a) {
                        l.random.b(a)
                    },
                    reset: function() {
                        for (var a = 0; a < k.length; ++a) y[a] = -1;
                        x = -1
                    },
                    tm: function() {
                        x = -1
                    },
                    Uk: function() {
                        for (var a = 0; a < k.length; ++a) J.X(a)
                    },
                    G: function() {
                        l && (l.random.remove(), l.Vg.remove())
                    },
                    fc: function(a, c) {
                        if ("RGBA" === a.format || "RGBE" === a.format) {
                            var e = new Image;
                            e.src = a.data;
                            e.onload = function() {
                                J.a({
                                    aa: a.isMirrorY,
                                    isFlipY: a.isFlipY,
                                    isFloat: !1,
                                    ga_: e,
                                    Z: function(e) {
                                        if ("RGBA" === a.format) c(e);
                                        else {
                                            var k = a.width,
                                                f = a.height,
                                                g = J.a({
                                                    aa: a.isMirrorY,
                                                    isFloat: !0,
                                                    width: k,
                                                    height: f,
                                                    isFlipY: a.isFlipY
                                                });
                                            qa.fa();
                                            b.viewport(0, 0, k, f);
                                            H.set("s94");
                                            g.j();
                                            e.b(0);
                                            O.h(!0, !0);
                                            J.X(0);
                                            c(g);
                                            b.flush();
                                            setTimeout(e.remove, 50)
                                        }
                                    }
                                })
                            }
                        } else "JSON" === a.format ? c(J.a({
                            isFloat: !0,
                            isFlipY: a.isFlipY,
                            width: a.width,
                            height: a.height,
                            array: new Float32Array(a.data)
                        })) : c(!1)
                    }
                };
            return J
        }(),
        fc = {
            a: function(a) {
                var b = [G.a(a), G.a(a)],
                    c = [b[1], b[0]],
                    f = c,
                    g = {
                        Bk: function(a) {
                            f[1].j();
                            f[0].b(a);
                            g.Pg()
                        },
                        Am: function(a) {
                            f[1].J();
                            f[0].b(a);
                            g.Pg()
                        },
                        Pg: function() {
                            f = f === b ? c : b
                        },
                        refresh: function() {
                            f[0].refresh();
                            f[1].refresh()
                        },
                        b: function(a) {
                            f[0].b(a)
                        },
                        bm: function() {
                            return f[0]
                        }
                    };
                return g
            }
        },
        wa = function() {
            function a() {
                c = "undefined" === typeof Ha ? L : Ha;
                f = !0
            }
            var c, f = !1,
                g = !1,
                h = !1,
                k = !1,
                l = !1,
                y = !1,
                m = !1,
                F = !1,
                p = !1,
                u = !1,
                v = !1,
                M = !0,
                H = !0,
                pa = !0,
                E = !1,
                B = "undefined" === typeof window ? {} : window,
                C = {
                    i: function() {
                        if (f) return !0;
                        a();
                        C.mf();
                        C.Fd();
                        C.Ci();
                        C.Di();
                        qa.i();
                        G.i();
                        if (!C.ki()) return !1;
                        O.i();
                        G.mj();
                        return !0
                    },
                    H: function() {
                        f || a();
                        return c.H()
                    },
                    S: function() {
                        f || a();
                        return c.S()
                    },
                    N: function() {
                        f || a();
                        return c.N()
                    },
                    Ci: function() {
                        v = (u = b.getExtension("EXT_color_buffer_float") || b.getExtension("WEBGL_color_buffer_float") || b.getExtension("OES_color_buffer_float")) ? !0 : !1;
                        B.GL_EXT_COLORBUFFERFLOAT = u
                    },
                    Di: function() {
                        b.getExtension("EXT_color_buffer_half_float") || b.getExtension("WEBGL_color_buffer_half_float") || b.getExtension("OES_color_buffer_half_float")
                    },
                    mf: function() {
                        if (!g) {
                            this.N() || (h = b.getExtension("OES_texture_float") || b.getExtension("MOZ_OES_texture_float") || b.getExtension("WEBKIT_OES_texture_float"), l = (B.GL_EXT_FLOAT = h) ? !0 : !1);
                            if (l || this.N()) k = b.getExtension("OES_texture_float_linear") || b.getExtension("MOZ_OES_texture_float_linear") || b.getExtension("WEBKIT_OES_texture_float_linear"), B.GL_EXT_FLOATLINEAR = k;
                            g = !0
                        }
                    },
                    Fd: function() {
                        if (!p) {
                            if (!this.N()) {
                                if (y = b.getExtension("OES_texture_half_float") || b.getExtension("MOZ_OES_texture_half_float") || b.getExtension("WEBKIT_OES_texture_half_float")) E = y.HALF_FLOAT_OES, m = !0;
                                !E && b.HALF_FLOAT && (E = b.HALF_FLOAT);
                                !E && b.FLOAT && (E = b.FLOAT);
                                B.GL_EXT_HALFFLOAT = y
                            }
                            if (m || this.N()) F = b.getExtension("OES_texture_half_float_linear") || b.getExtension("MOZ_OES_texture_half_float_linear") || b.getExtension("WEBKIT_OES_texture_half_float_linear"), B.GL_EXT_HALFFLOATLINEAR = F;
                            p = !0
                        }
                    },
                    xc: function() {
                        if (C.N()) return b.HALF_FLOAT;
                        C.Fd();
                        return m ? E : b.FLOAT
                    },
                    U: function() {
                        return M
                    },
                    Wh: function() {
                        return H
                    },
                    Uh: function() {
                        return pa
                    },
                    Vh: function() {
                        return v
                    },
                    ni: function() {
                        H = M = !0;
                        var a = b.createFramebuffer();
                        b.bindFramebuffer(b.FRAMEBUFFER, a);
                        var c = b.createTexture();
                        b.bindTexture(b.TEXTURE_2D, c);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
                        b.texImage2D(b.TEXTURE_2D, 0, C.N() && b.RGBA32F ? b.RGBA32F : b.RGBA, 1, 1, 0, b.RGBA, b.FLOAT, null);
                        b.framebufferTexture2D(qa.hb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, c, 0);
                        var e = b.checkFramebufferStatus(qa.wc());
                        e !== b.FRAMEBUFFER_COMPLETE && (M = !1);
                        b.texImage2D(b.TEXTURE_2D, 0, C.N() && b.RGBA16F ? b.RGBA16F : b.RGBA, 1, 1, 0, b.RGBA, C.xc(), null);
                        b.framebufferTexture2D(qa.hb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, c, 0);
                        e = b.checkFramebufferStatus(qa.wc());
                        e !== b.FRAMEBUFFER_COMPLETE && (H = !1);
                        b.bindTexture(b.TEXTURE_2D, null);
                        b.bindFramebuffer(b.FRAMEBUFFER, null);
                        b.deleteTexture(c);
                        b.deleteFramebuffer(a)
                    },
                    mi: function() {
                        var a = qa.a({
                            width: 1
                        });
                        a.vg();
                        var c = G.a({
                            width: 1,
                            isFloat: !0,
                            v: 3
                        });
                        a.j();
                        c.j();
                        b.flush();
                        b.checkFramebufferStatus(qa.wc()) !== b.FRAMEBUFFER_COMPLETE ? (G.yk(), pa = !1) : pa = !0;
                        a.remove();
                        c.remove()
                    },
                    ki: function() {
                        C.ni();
                        if (!M && !H) return !1;
                        C.mi();
                        return !0
                    }
                };
            return C
        }(),
        Pb = function() {
            var a = !1,
                c = [.8, 1, .8, 1],
                f = 0,
                g, h = new Uint8Array(4),
                k = c.concat(c, c, c),
                l = !0,
                y = {
                    i: function() {
                        function c(a, c, e, f) {
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, f ? b.NEAREST_MIPMAP_NEAREST : b.LINEAR);
                            try {
                                var k = b.getError();
                                k !== b.NO_ERROR && console.log("GLERR in test_mipmapping() :", k);
                                b.texImage2D(b.TEXTURE_2D, 0, a, 2, 2, 0, b.RGBA, c, e);
                                k = b.getError();
                                if (k !== b.NO_ERROR) return !1
                            } catch (A) {
                                return !1
                            }
                            f && b.generateMipmap(b.TEXTURE_2D);
                            O.nd();
                            O.h(!1, !0);
                            b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, h);
                            k = b.getError();
                            k === b.INVALID_OPERATION && "undefined" !== typeof b.PIXEL_PACK_BUFFER && (b.bindBuffer(b.PIXEL_PACK_BUFFER, null), b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, h), k = b.getError());
                            return k !== b.NO_ERROR ? !1 : 0 !== h[0]
                        }

                        function e(a) {
                            return wa.U() && c(w, b.FLOAT, new Float32Array(k), a) ? (f = 3, !0) : !1
                        }

                        function r(a) {
                            return wa.Wh() ? c(x, wa.xc(), new Uint16Array(k), a) || c(x, b.FLOAT, new Float32Array(k), a) ? (f = 2, !0) : !1 : !1
                        }
                        wa.mf();
                        wa.Fd();
                        var w = b.RGBA,
                            x = b.RGBA;
                        if (Ha.N()) {
                            var y = b.RGBA32F;
                            y && (w = y);
                            (y = b.RGBA16F) && (x = y)
                        }
                        O.i();
                        qa.reset();
                        qa.X();
                        b.viewport(0, 0, 1, 1);
                        H.set("s0");
                        a = !0;
                        g = b.createTexture();
                        b.activeTexture(b.TEXTURE0);
                        b.bindTexture(b.TEXTURE_2D, g);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
                        if (r(!0) || e(!0)) return !0;
                        l = !1;
                        if (r(!1) || e(!1)) return !0;
                        if (Ha.N()) {
                            x = w = b.RGBA;
                            if (r(!0) || e(!0)) return !0;
                            l = !1;
                            if (r(!1) || e(!1)) return !0
                        }
                        return !1
                    },
                    Xh: function() {
                        return l
                    },
                    R: function() {
                        return f
                    },
                    im: function() {
                        a || y.i();
                        return 3 === f
                    },
                    uj: function() {
                        a || y.i();
                        return 2 === f
                    }
                };
            return y
        }(),
        hc = {
            a: function(a) {
                var b = G.a(a.alpha),
                    c = G.a(a.beta);
                return {
                    vi: function() {
                        b.b(1);
                        c.b(2)
                    }
                }
            }
        },
        ib = {
            a: function(a) {
                var b = a.Mk;
                b.index = a.index;
                b.Ua = a.Ua;
                b.parent = a.parent;
                switch (b.type) {
                    case "input":
                        a = ic.a(b);
                        break;
                    default:
                        a = Xb.a(b)
                }
                return a
            }
        },
        ic = {
            a: function(a) {
                "undefined" === typeof a.sift && (a.sift = !1);
                "undefined" === typeof a.DWT && (a.DWT = !1);
                "undefined" === typeof a.blur && (a.blur = !1);
                "undefined" === typeof a.siftOutWidth && (a.siftOutWidth = !1);
                "undefined" === typeof a.density && (a.density = 1);
                var c = !1;
                if (a.mask) {
                    c = !0;
                    g && void 0 !== g.T && (a.mask = g.T + a.mask);
                    var f = G.a({
                        isFloat: !1,
                        url: a.mask
                    })
                }
                var r = !1,
                    h = "undefined" !== typeof a.preprocessing ? a.preprocessing : !1,
                    k = !1,
                    l = !1;
                a.sift ? Sift.i({
                    gj: b,
                    ba: !1,
                    width: a.size,
                    nm: a.siftOutWidth
                }) : a.DWT && DWT.i({
                    gj: b,
                    ba: !1,
                    width: a.size
                });
                var y = !1;
                a.customInputShader && (y = "s95", H.ea({
                    name: "_",
                    id: y,
                    c: a.customInputShader,
                    f: ["uSource"],
                    precision: "lowp"
                }), H.g(y, [{
                    type: "1i",
                    name: "_",
                    value: 0
                }]));
                switch (h) {
                    case "sobel":
                        var m = "s85";
                        k = !0;
                        break;
                    case "meanNormalization":
                        m = "s86";
                        k = !0;
                        break;
                    case "grayScale":
                        m = "s82";
                        k = !1;
                        break;
                    case "grayScaleTilt":
                        m = "s83";
                        l = !0;
                        k = !1;
                        break;
                    case "rgbGrayTilt":
                        m = "s84";
                        l = !0;
                        k = !1;
                        break;
                    case "copy":
                        m = y ? y : "s0";
                        break;
                    case "inputLightRegulation":
                        m = y ? y : "s82";
                        Qb.i({
                            width: a.size,
                            Xf: a.nBlurPass,
                            sj: !1
                        });
                        r = !0;
                        break;
                    case "direct":
                    case "none":
                        m = !1;
                        break;
                    default:
                        m = "s57"
                }
                l && H.g(m, [{
                    name: "u144",
                    type: "1f",
                    value: a.tilt
                }]);
                c && (m += "Mask");
                if (a.blur) var p = G.a({
                    isFloat: !1,
                    isPot: !1,
                    width: a.size
                });
                var u = G.a({
                        isFloat: !1,
                        isPot: !1,
                        width: a.size
                    }),
                    v = {
                        H: function() {
                            return a.sift ? Sift.Qb() : a.size
                        },
                        Qb: function() {
                            return v.H()
                        },
                        Si: function() {
                            return a.sift ? Sift.yc() : a.DWT ? DWT.yc() : r ? Qb.yc() : u
                        },
                        ka: function() {
                            qa.fa();
                            a.blur && (p.J(), H.set("s15"), H.M("u24", 1 / a.size, 1 / a.size), O.h(!1, !0), p.b(0));
                            m && (H.set(m), k && H.A("u145", 1 / a.size), u.J(), c && f.b(1), O.h(!1, !1), u.b(0), r ? Qb.ie(u) : a.sift ? (H.K(), Sift.ie()) : a.DWT && (H.K(), DWT.ie(4)))
                        }
                    };
                return v
            }
        },
        Xb = {
            a: function(a) {
                "undefined" === typeof a.disableNormalize && (a.disableNormalize = !1);
                var b = [],
                    c = [],
                    f, g, k = !1,
                    h, l = !0,
                    m, p, u = a.isReorganize ? a.isReorganize : !1,
                    v = a.kernelsNumber ? !0 : !1,
                    M = a.dynPelu ? hc.a(a.dynPelu) : !1,
                    pa = M ? !0 : !1,
                    E = {
                        isEnabled: !1
                    },
                    t;
                if ("softmax" === a.type) {
                    a.activation = "softmax";
                    a.size = Math.pow(2, Math.ceil(Math.log(Math.sqrt(a.num_classes)) / Math.log(2)));
                    a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.Ua.Qb();
                    a.gain = "undefined" !== typeof a.gain ? a.gain : 1;
                    H.g("s73", [{
                        type: "1f",
                        name: "u127",
                        value: a.gain
                    }]);
                    var P = G.a({
                            isFloat: !0,
                            isPot: !1,
                            width: a.size
                        }),
                        B = G.a({
                            isFloat: !0,
                            isPot: !1,
                            width: a.size,
                            isMipmap: !0
                        });
                    l = !1;
                    var C = new Uint8Array(Math.pow(4 * a.size, 2)),
                        A;
                    for (A = 0; A < a.size * a.size; ++A) {
                        var R = A < a.num_classes ? 255 : 0;
                        C[4 * A] = R;
                        C[4 * A + 1] = R;
                        C[4 * A + 2] = R;
                        C[4 * A + 3] = R
                    }
                    var q = G.a({
                        isFloat: !1,
                        isPot: !1,
                        width: a.size,
                        array: C
                    })
                } else a.cost ? (a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.Ua.Qb(), l = !1) : "full" === a.connectivityUp && (a.sparsity = a.Ua.Qb());
                var ea = {
                        elu: "s68",
                        elu01: "s69",
                        relu: "s67",
                        arctan: "s71",
                        sigmoid: "s66",
                        copy: "s0",
                        softplus: "s72",
                        softmax: "s73",
                        dynPelu: "s70"
                    }[a.activation],
                    J = a.sparsity * a.sparsity,
                    L = !1,
                    U = a.size;
                if (a.maxPooling) {
                    switch (a.maxPooling.size) {
                        case 2:
                            var ba = "s87";
                            break;
                        case 4:
                            ba = "s88"
                    }
                    L = !0;
                    U /= a.maxPooling.size;
                    var K = G.a({
                        isFloat: !0,
                        isPot: !1,
                        width: U
                    })
                }
                var ma = void 0 !== a.Pj && a.Pj ? !0 : !1,
                    ia = null,
                    V = null,
                    X = null;
                ma && (ia = "s96" + a.index.toString(), H.Ef("s96", ia, [((a.normalization.n - 1) / 2).toFixed(1)]), H.g(ia, [{
                    type: "1i",
                    name: "u0",
                    value: 0
                }, {
                    type: "2f",
                    name: "u24",
                    value: [1 / a.size, 1 / a.size]
                }, {
                    type: "1f",
                    name: "u17",
                    value: a.normalization.alpha
                }, {
                    type: "1f",
                    name: "u126",
                    value: a.normalization.beta
                }, {
                    type: "1f",
                    name: "u148",
                    value: a.normalization.k
                }]), V = G.a({
                    isFloat: !0,
                    isPot: !0,
                    width: a.size
                }), X = G.a({
                    isFloat: !0,
                    isPot: !0,
                    width: a.size
                }));
                var Y, fa, ca, Z;
                l && (Z = G.a({
                    isFloat: !0,
                    isPot: !1,
                    width: a.size
                }));
                var ja = G.a(a.bias),
                    da, Ma = {
                        H: function() {
                            return a.size
                        },
                        Qb: function() {
                            return U
                        },
                        xf: function() {
                            return a.num_classes
                        },
                        Oh: function(a) {
                            t.b(a)
                        },
                        Xj: function() {
                            a.remap && a.remap.isEnabled && (E = {
                                isEnabled: !0,
                                Ij: G.a({
                                    isFloat: !1,
                                    isFlipY: !1,
                                    array: new Uint8Array(a.remap.maskTexture.data),
                                    width: a.remap.maskTexture.width,
                                    isPot: !1
                                }),
                                layers: a.remap.layers.map(function(b) {
                                    return a.parent.Pi(b)
                                }),
                                depth: a.remap.depth
                            })
                        },
                        Ak: function() {
                            switch (a.connectivityUp) {
                                case "gaussian":
                                    da = ta.a(a.connectivity);
                                    break;
                                case "direct":
                                    da = zb.a(a.connectivity);
                                    break;
                                case "square":
                                    da = gb.a(a.connectivity);
                                    break;
                                case "squareFast":
                                    da = jc.a(a.connectivity, a.activation);
                                    break;
                                case "full":
                                    da = Rb.a(a.connectivity);
                                    break;
                                case "conv":
                                    p = a.kernelsNumber, da = kc.a(a.connectivity), u && (m = G.a({
                                        width: U,
                                        isFloat: !0,
                                        isFlipY: !1,
                                        isPot: !1
                                    }))
                            }
                            if (da.Va) {
                                var b = a.size * a.sparsity;
                                fa = Math.log(b / a.size) / Math.log(2);
                                Y = G.a({
                                    isMipmap: !0,
                                    isFloat: !0,
                                    isPot: !0,
                                    width: b,
                                    Uf: fa
                                });
                                ca = G.a({
                                    isFloat: !0,
                                    isPot: !0,
                                    width: a.size
                                })
                            }
                        },
                        ka: function(b, c) {
                            t = b;
                            da.Va ? (Y.J(), v && ja.b(2), da.ka(E), Y.b(0), Y.qf(fa), ca.J(), v ? H.set("s0") : (H.set("s81"), H.A("u143", J), ja.b(1)), Y.Re(fa, 0), O.h(!1, !1), H.set(ea), ma ? V.j() : Z.j(), ca.b(0), pa && M.vi(), O.h(!1, !1)) : (Z.J(), ja.b(1), da.ka());
                            ma && (H.set(ia), X.j(), V.b(0), O.h(!1, !1), H.set("s97"), H.A("u17", 1), Z.j(), X.b(1), O.h(!1, !1));
                            if (l) return L ? (K.J(), Z.b(0), H.set(ba), H.M("u24", 1 / a.size, 1 / a.size), O.h(!1, !1), c = K) : c = Z, c.b(0), u && (m.j(), H.set("s75"), H.M("u131", p, U / p), O.h(!1, !1), c = m, m.b(0)), c;
                            if ("softmax" === a.type) {
                                H.set("s73");
                                Z.b(0);
                                P.j();
                                O.h(!1, !1);
                                a.disableNormalize ? b = P : (H.set("s56"), P.b(0), q.b(1), B.j(), O.h(!1, !1), H.set("s0"), g.J(), B.b(0), B.qf(!1), O.h(!1, !1), H.set("s74"), f.J(), B.Re(!1, 0), H.A("u129", Z.$i()), g.b(1), O.h(!1, !1), b = f);
                                if (c) {
                                    switch (k) {
                                        case "cpuRGBAAvg":
                                            break;
                                        default:
                                            var e = Ma.lg(b)
                                    }
                                    return e
                                }
                                return !1
                            }
                            if (a.cost) {
                                H.set("gpuRawAvg" === k ? "s62" : "s61");
                                c = Z;
                                a.disableNormalize || (H.A("u91", 1 / a.size), f.J(), Z.b(0), O.h(!1, !1), c = f);
                                switch (k) {
                                    case "cpuRGBA2Float":
                                        c.jf();
                                        e = Ma.lg(c);
                                        h(e);
                                        break;
                                    case "gpuRawAvg":
                                    case "gpuRaw":
                                        c.b(0), h(c)
                                }
                                return !1
                            }
                        },
                        bi: function(e) {
                            e && "undefined" !== typeof e.dg && (k = e.dg, h = e.Sj);
                            Z = G.a({
                                isFloat: !0,
                                isPot: !0,
                                isMipmap: "softmax" === a.type,
                                width: a.size
                            });
                            "softmax" === a.type && (g = G.a({
                                isFloat: !0,
                                isPot: !0,
                                width: 1
                            }));
                            var r = 0,
                                l = 0,
                                d = "undefined" !== typeof a.num_classes && a.num_classes ? a.num_classes : a.size * a.size;
                            for (e = 0; e < d; ++e) b.push(r + (a.size - 1 - l) * a.size), c.push([-1, -1, -1, -1]), ++r, r === a.size && (r = 0, ++l);
                            a.disableNormalize || (f = G.a({
                                isFloat: !0,
                                isPot: !0,
                                width: a.size
                            }))
                        },
                        lg: function(a) {
                            a.jf();
                            var e = a.pg();
                            b.forEach(function(a, d) {
                                c[d][0] = e[0][a];
                                c[d][1] = e[1][a];
                                c[d][2] = e[2][a];
                                c[d][3] = e[3][a]
                            });
                            return c
                        }
                    };
                a.Ua && Ma.Ak(a.Ua);
                return Ma
            }
        },
        zb = {
            a: function(a) {
                var b = G.a(a.weights);
                delete a.weights.data;
                return {
                    Va: !0,
                    Pb: function() {
                        return 1
                    },
                    fj: function() {
                        return b
                    },
                    ka: function() {
                        H.set("s80");
                        b.b(1);
                        O.h(!1, !1)
                    }
                }
            }
        },
        Rb = {
            a: function(a) {
                var b = a.fromLayerSize,
                    c = G.a(a.weights);
                return {
                    Va: !0,
                    Pb: function() {
                        return b
                    },
                    ka: function(b) {
                        if (b.isEnabled) {
                            H.set("s78");
                            b.Ij.b(3);
                            var e, f = Math.min(b.layers.length, b.depth);
                            for (e = 0; e < f; ++e) b.layers[e].Oh(4 + e)
                        } else H.set("s77");
                        H.A("u135", a.toLayerSize);
                        c.b(1);
                        O.h(!1, !1)
                    }
                }
            }
        },
        ta = {
            a: function(a) {
                var b = a.toSparsity * a.toLayerSize,
                    c = b / a.fromLayerSize,
                    f = G.a(a.weights);
                G.a({
                    width: b,
                    isFloat: !0,
                    array: new Float32Array(a.fromBindings),
                    isPot: !0
                });
                var g = G.a({
                    width: b,
                    isFloat: !0,
                    array: new Float32Array(a.toBindings),
                    isPot: !0
                });
                return {
                    Va: !0,
                    Pb: function() {
                        return c
                    },
                    ka: function() {
                        H.set("s76");
                        f.b(1);
                        g.b(2);
                        O.h(!1, !0)
                    }
                }
            }
        },
        gb = {
            a: function(a) {
                var b = a.fromLayerSize,
                    c = a.toLayerSize,
                    f = a.toSparsity,
                    g = f * c,
                    k = g / b,
                    h = b / c,
                    l, m, p, u, v = 0,
                    M = 0,
                    pa = 0,
                    E = Array(f * c * f * c * 4),
                    R = Array(f * c * f * c * 4),
                    P = Array(b * b);
                for (l = 0; l < P.length; ++l) P[l] = 0;
                var B = Math.floor(f / 2),
                    C = .5 / c,
                    A = .5 / b,
                    t = .5 / g;
                for (l = 0; l < c; ++l)
                    for (m = 0; m < c; ++m) {
                        var q = Math.round(l * h),
                            ea = Math.round(m * h),
                            J = l / c,
                            L = m / c;
                        J += C;
                        L += C;
                        for (p = 0; p < f; ++p)
                            for (u = 0; u < f; ++u) {
                                var U = v / g,
                                    ba = M / g,
                                    K = q + p - B,
                                    ma = ea + u - B;
                                0 > K && (K += b);
                                0 > ma && (ma += b);
                                K >= b && (K -= b);
                                ma >= b && (ma -= b);
                                var ia = K / b,
                                    V = ma / b;
                                ba = 1 - ba - 1 / g;
                                ia += A;
                                V += A;
                                U += t;
                                ba += t;
                                var Z = l * f + p,
                                    X = m * f + u;
                                X = c * f - X - 1;
                                Z = X * c * f + Z;
                                E[4 * Z] = U;
                                E[4 * Z +
                                    1] = ba;
                                E[4 * Z + 2] = ia;
                                E[4 * Z + 3] = V;
                                ia = P[ma * b + K]++;
                                V = ia % k;
                                K = K * k + V;
                                ma = ma * k + (ia - V) / k;
                                ma = b * k - 1 - ma;
                                ma = ma * b * k + K;
                                R[4 * ma] = U;
                                R[4 * ma + 1] = ba;
                                R[4 * ma + 2] = J;
                                R[4 * ma + 3] = L;
                                ++v >= g && (v = 0, ++M);
                                ++pa
                            }
                    }
                var Y = G.a(a.weights);
                G.a({
                    width: g,
                    isFloat: !0,
                    array: new Float32Array(R),
                    isPot: !0
                });
                R = null;
                var fa = G.a({
                    width: g,
                    isFloat: !0,
                    array: new Float32Array(E),
                    isPot: !0
                });
                E = null;
                return {
                    Va: !0,
                    Pb: function() {
                        return k
                    },
                    ka: function() {
                        H.set("s76");
                        Y.b(1);
                        fa.b(2);
                        O.h(!1, !1)
                    }
                }
            }
        },
        kc = {
            a: function(a) {
                var b = a.kernelsNumber,
                    c = a.toSparsity,
                    f = c * a.toLayerSize / a.fromLayerSize,
                    g = G.a(a.weights);
                return {
                    Va: !0,
                    Pb: function() {
                        return f
                    },
                    fm: function() {
                        return c
                    },
                    fj: function() {
                        return g
                    },
                    ka: function() {
                        H.set("s79");
                        H.A("u140", b);
                        H.A("u141", c);
                        H.A("u135", a.toLayerSize);
                        H.A("u142", a.fromLayerSize);
                        g.b(1);
                        O.h(!1, !1)
                    }
                }
            }
        },
        jc = {
            a: function(a, b) {
                var c = a.fromLayerSize,
                    e = a.toLayerSize,
                    f = a.toSparsity,
                    k = a.stride ? a.stride : 1,
                    g = f * e / c,
                    h = e < c,
                    l = c / e,
                    m = G.a(a.weights),
                    p = "s98" + [c.toString(), e.toString(), f.toString(), k.toString(), b].join("_");
                H.Ei(p) || (a = ea(b), e = [{
                    type: "1f",
                    name: "u135",
                    value: e
                }, {
                    type: "1f",
                    name: "u147",
                    value: k
                }], h && e.push({
                    type: "1f",
                    name: "u142",
                    value: c
                }), c = [(h ? g : f).toFixed(1), a], h && c.push(l.toFixed(1)), H.Ef(h ? "s93" : "s92", p, c), H.g(p, e.concat([{
                    type: "1i",
                    name: "u133",
                    value: 0
                }, {
                    type: "1i",
                    name: "u46",
                    value: 1
                }, {
                    type: "1i",
                    name: "u132",
                    value: 3
                }])));
                return {
                    Va: !1,
                    Pb: function() {
                        return g
                    },
                    ka: function() {
                        H.set(p);
                        m.b(3);
                        O.h(!1, !1)
                    }
                }
            }
        },
        Qb = function() {
            var a, b, c, f, g, k, h, l, m;
            return {
                i: function(e) {
                    a = e.Xf ? e.Xf : 3;
                    b = e.width ? e.width : 64;
                    f = e.sj ? !0 : !1;
                    e = {
                        isFloat: !1,
                        width: b,
                        isPot: !1,
                        isFlipY: !1
                    };
                    g = G.a(e);
                    k = G.a(e);
                    h = G.a(e);
                    l = G.a(e);
                    m = G.a({
                        isFloat: !0,
                        width: b,
                        isPot: !1,
                        isFlipY: !1
                    });
                    c = 1 / b
                },
                ie: function(b) {
                    H.set("s90");
                    for (var e = 0; e < a; ++e) g.j(), H.M("u24", c, 0), O.h(f, !1), k.j(), g.b(0), H.M("u24", 0, c), O.h(f, !1), k.b(0);
                    H.set("s89");
                    l.j();
                    b.b(0);
                    O.h(f);
                    H.set("s90");
                    for (e = 0; e < a; ++e) h.j(), l.b(0), H.M("u24", c, 0), O.h(f, !1), l.j(), h.b(0), H.M("u24", 0, c), O.h(f, !1);
                    H.set("s91");
                    m.j();
                    b.b(0);
                    k.b(1);
                    l.b(2);
                    O.h(f, !1);
                    m.b(0)
                },
                yc: function() {
                    return m
                }
            }
        }(),
        m = {
            Fb: [],
            Eb: [],
            gd: !1,
            fd: !1,
            hd: !1,
            isFallback: !1,
            ready: !1,
            isBusy: !1
        },
        Ga = {
            idealWidth: 800,
            idealHeight: 600,
            minWidth: 480,
            maxWidth: 1280,
            minHeight: 480,
            maxHeight: 1280,
            FOVdesktop: 60,
            rotate: 0,
            gh: 23,
            ed: 10,
            dd: 8E3
        },
        g = {
            Wf: "models3D",
            Sf: "materials",
            Tk: "tweakers",
            save: "built/jeefitNNC.json",
            T: "",
            Hb: 0,
            ji: 20,
            Ac: 64,
            width: 1024,
            height: 1024,
            fg: 1,
            eg: {
                ge: 1.5,
                Kj: 2,
                gg: {}
            },
            tg: 500,
            md: .25,
            cb: [29, 53],
            Kh: 1 / 3.5,
            hc: 2,
            minScale: .2,
            maxScale: .75,
            borderWidth: .4,
            borderHeight: .35,
            nStepsX: 5,
            nStepsY: 3,
            nStepsScale: 3,
            Be: [.09, .09, .3],
            Sk: 55,
            ih: .7,
            eh: 1,
            og: [.2, .6],
            ng: 2,
            Ae: [0, .6],
            ia: [.73, 1.16, .28],
            Ug: [0, 0, 0],
            Da: [0, -66, 18],
            sb: 1,
            ta: [0, -60, 0],
            Hc: 10,
            df: 1,
            Gd: 73,
            kd: .08,
            Oe: .9,
            hk: 1.2,
            ug: .5,
            gl: 20,
            Bi: !1,
            Rb: 145,
            Rd: -18,
            Pd: 20,
            Qd: 3,
            la: [-110, 0],
            xb: 1,
            Mg: .4,
            Ng: 3,
            Vc: [0, 0, 0],
            yb: [1.1, 1],
            pc: 0,
            zd: .95,
            yd: 90,
            xd: 50,
            za: 30,
            oa: 0,
            Nd: !0,
            Fc: !0,
            de: "images/masks/target.jpg",
            Ec: [1 / 255, 175 / 255, 236 / 255, 0],
            ee: .001,
            ce: 3.14,
            pd: 0,
            od: "images/masks/burka.png",
            ld: Math.PI - Math.PI / 4,
            vd: Math.PI / 4,
            ke: [.3, .2, .1],
            lb: 1,
            Of: 700,
            Nf: 90,
            Bj: .2,
            Mf: .04,
            hl: "images/backgrounds/viewer3D.png",
            Le: [0, 0, 0],
            Ke: [0, 15, 60],
            $c: .3,
            ql: 50,
            ll: bc ? v : !1,
            ml: bc ? v : !1,
            pl: 1E3,
            sl: 1E3,
            nl: 40,
            kl: [0, 0, -400],
            Qf: .1,
            Gj: .5,
            Rf: [.5, 1.5],
            Gc: 30,
            Fj: !0
        };
    u.Yb = !1;
    u.rb = 1;
    u.Lc = 1;
    u.cf = !0;
    u.ef = !0;
    u.bf = !1;
    u.Ca = !0;
    var La = {
        me: 3.5,
        tb: "images/debug/picsou.png",
        Nc: 45,
        $d: .785,
        ae: .3925,
        be: 5,
        Yd: 2,
        Zd: 0,
        Xd: 0,
        il: "images/backgrounds/bg1.jpg",
        jl: "images/backgrounds/bg1_light.jpg",
        ah: 1,
        bh: 2
    };
    "undefined" === typeof g && (g = {});
    "undefined" === typeof u && (u = {});
    "undefined" === typeof La && (La = {});
    g.ia = [.7, 1.13, .262];
    g.Vl = [4, 50];
    g.la = [-110, 0];
    g.Mg = .3473;
    g.Ng = 3;
    g.Vc = [0, -3.6287, 25];
    g.yb = [.95, 1];
    u.rb = 2.1289;
    u.Lc = 1;
    La.me = 2.5858;
    La.$d = .4388;
    La.ae = .118;
    La.tb = "images/debug/hdri2.png";
    La.Nc = 180;
    La.le = .8065;
    La.be = 5.3887;
    La.Yd = .5351;
    La.Zd = -.3019;
    La.Xd = 0;
    La.ah = 3.5288;
    La.bh = 6.2168;
    g.df = .4;
    g.Hc = 42;
    g.kd = .02;
    g.Pe = [0, 20];
    g.Oe = .9;
    g.ia[0] *= .75;
    g.ia[1] *= .6;
    g.ia[2] *= 1;
    g.og = [.3, .65];
    g.ng = 1.3;
    g.ug = 1;
    var Wa = !1,
        Jb = !1,
        Nb, Sb = !1,
        Qa = !1,
        Vb, Mb, Zb, Hb, Ib, Yb, $a;
    m.onLoad = function(a) {
        m.ready ? a() : m.Fb.push(a)
    };
    m.onHalfLoad = function(a) {
        m.load_model ? a() : m.Eb.push(a)
    };
    m.onWebcamAsk = function(a) {
        m.gd = a
    };
    m.onContextLost = function(a) {
        m.fd = a
    };
    m.onWebcamGet = function(a) {
        m.hd = a
    };
    m.get_onHalfLoadCallstack = function() {
        return m.Eb
    };
    m.set_size = function(a, b) {
        var c = fb();
        g.width = a * c;
        g.height = b * c
    };
    m.get_videoDevices = function(a) {
        Eb(a)
    };
    m.set_videoDevice = function(a) {
        Sb = a
    };
    m.set_videoSizes = function(a, b, c, f, g, k) {
        Ga.idealWidth = a;
        Ga.idealHeight = b;
        Ga.minWidth = c;
        Ga.maxWidth = f;
        Ga.minHeight = g;
        Ga.maxHeight = k
    };
    m.set_loading = function(a, b) {
        a && (g.de = a);
        "number" === typeof b && (a = new t(b), g.Ec = [a.r, a.P, a.F, 0])
    };
    m.set_settings = function(a, b, c) {
        a && Object.keys(a).forEach(function(b) {
            g[b] = a[b]
        });
        b && Object.keys(b).forEach(function(a) {
            Ga[a] = b[a]
        });
        c && Object.keys(c).forEach(function(a) {
            La[a] = c[a]
        })
    };
    m.get_size = function() {
        return {
            width: g.width,
            height: g.height
        }
    };
    m.get_cv = function() {
        return Ha.Qa()
    };
    m.init = function(a, b, c, f) {
        $a = yb();
        m.wa = c ? function(a, b) {
            c(a, b);
            m.wa = !1
        } : function() {};
        m.zl = $a;
        a && (g.T = a);
        b && m.Fb.push(b);
        La.tb = g.T + La.tb;
        $a.Rk();
        if (!Ha.i({
                af: "jeefitCanvas",
                ba: f,
                width: Hb,
                height: Ib,
                debug: !1,
                Rj: function() {
                    m.fd && m.fd()
                },
                premultipliedAlpha: !0
            })) return m.wa && m.wa("GL_INCOMPATIBLE", "Cannot init Context"), !1;
        if (!Ha.Sb()) return m.wa && m.wa("GL_INCOMPATIBLE", "Cannot init_all Context"), !1;
        m.gd && m.gd();
        (a = {
            width: {
                min: Ga.minWidth,
                max: Ga.maxWidth,
                ideal: Ga.idealWidth
            },
            height: {
                min: Ga.minHeight,
                max: Ga.maxHeight,
                ideal: Ga.idealHeight
            }
        }, Sb) ? a.deviceId = Sb: a.facingMode = {
            ideal: "user"
        };
        qb(function(a) {
            m.hd && m.hd(a);
            Wa = a;
            a = Wa.videoWidth;
            var b = Wa.videoHeight;
            Nb = {
                ga_: Wa,
                isPot: !1,
                isFloat: !1,
                isFlipY: !0
            };
            Jb = G.a(Nb);
            $a.ve(a, b);
            $a.Sb(a, b) && $a.ze()
        }, function(a) {
            m.wa && m.wa("WEBCAM_UNAVAILABLE", a)
        }, {
            video: a,
            audio: !1
        });
        return !0
    };
    window.JEEFITAPI = m;
    var ac = function() {
            function a() {
                qa.X();
                b.viewport(0, 0, 1, 1);
                H.set("s110");
                g.b(0);
                O.h(!1);
                b.readPixels(0, 0, 1, 1, b.RGBA, b.UNSIGNED_BYTE, k);
                c(0 < k[0])
            }
            var c = null,
                f = !1,
                g, h = !1,
                k, l = {
                    i: function(a) {
                        if (h) return !1;
                        g = a;
                        H.Ne([{
                            id: "s110",
                            name: "_",
                            c: "uniform sampler2D u25;void main(){vec4 a=texture2D(u25,vec2(.25,.5));float b=step(1.99,a.r);gl_FragColor=vec4(b,0.,0.,1.);}",
                            f: ["u25"],
                            precision: "lowp"
                        }]);
                        H.g("s110", [{
                            type: "1i",
                            name: "u25",
                            value: 0
                        }]);
                        k = new Uint8Array(4);
                        return h = !0
                    },
                    start: function(b, e) {
                        l.stop();
                        c = e;
                        f = window.setInterval(a, b)
                    },
                    stop: function() {
                        f && (window.clearInterval(a), f = !1)
                    }
                };
            return l
        }(),
        $b = function() {
            var a = {
                a: function(a) {
                    var b = a.Vf,
                        c = a.Tf,
                        e = a.wd,
                        f = a.background ? a.background : G.yf(),
                        g = a.Wd,
                        h = {
                            scale: 1,
                            offsetX: 0,
                            offsetY: 0
                        },
                        l;
                    a.fe && (h.scale = a.fe.scale, h.offsetY = a.fe.offsetY);
                    return {
                        tf: function() {
                            return g
                        },
                        Xl: function() {
                            return f
                        },
                        set: function() {
                            l = $a.Ri();
                            $a.Hg(h);
                            $a.Xc();
                            $a.Yc();
                            J.Cg(e, f, !1, !1)
                        },
                        K: function() {
                            $a.Hg(l)
                        },
                        $b: function() {
                            return {
                                modelURL: b,
                                materialsURLs: c,
                                background: f.$b(!1),
                                wd: e.$b(!1),
                                Wd: g.$b(!0)
                            }
                        },
                        Dl: function(a) {
                            f.b(a)
                        }
                    }
                },
                fc: function(b, c, f) {
                    function e() {
                        if (3 === ++k && c) {
                            var e = a.a({
                                Vf: b.modelURL,
                                Tf: b.materialsURLs,
                                background: g,
                                wd: h,
                                Wd: l
                            });
                            c(e)
                        }
                    }
                    var k = 0,
                        g, h, l;
                    G.fc(b.background, function(a) {
                        !a && f ? f() : (g = a, e())
                    });
                    G.fc(b.dataState, function(a) {
                        !a && f ? f() : (h = a, e())
                    });
                    G.fc(b.light, function(a) {
                        !a && f ? f() : (l = a, e())
                    })
                }
            };
            return a
        }(),
        nb = function() {
            function a(a) {
                switch (t) {
                    case P.movePinch:
                        var b = -a.deltaY;
                        0 === q && G("pinch", -1, .001 * b, null)
                }
                a.deltaY;
                a.preventDefault()
            }

            function b(a) {
                if (-1 !== q) switch (t) {
                    case P.swipe:
                        if (1 !== q) break;
                        m();
                        u(a, J);
                        var b = J[0] -
                            ea[0];
                        g(b);
                        a = b / (20 * C.offsetWidth / 100);
                        G("swipeMove", Math.min(Math.max(a, -1), 1), a, null);
                        break;
                    case P.movePinch:
                        if (2 === q || 3 === q) {
                            u(a, J);
                            b = J[0] - ea[0];
                            var c = J[1] - ea[1];
                            2 === q ? (Ma += Math.sqrt(b * b + c * c), 10 > Ma ? (ea[0] = J[0], ea[1] = J[1]) : (d || (d = !0, G("moveStart", null, null, null)), ka[0] = b, ka[1] = c, L[0] = b - O[0], L[1] = c - O[1], G("move", ka, L, null), O[0] = ka[0], O[1] = ka[1])) : 3 === q && (a = p(a) / Ja, G("pinch", a, a - n, null), n = a)
                        }
                }
            }

            function c(a) {
                if (-1 !== q) switch (t) {
                    case P.swipe:
                        if (1 !== q) break;
                        m();
                        u(a, J);
                        a = J[0] - ea[0];
                        var b = 0 > a;
                        (a = 20 < 100 * Math.abs(a) / C.offsetWidth) && b ? G("swipeLeft", K, null, null) : a && !b && G("swipeRight", K, null, null);
                        var d = function() {
                            setTimeout(function() {
                                l();
                                q = 0;
                                G("swipeEnd", null, null, null)
                            }, 202)
                        };
                        a ? (a = function() {
                            var a = (b ? -1 : 1) * C.width,
                                c = (b ? 1 : -1) * a / C.width;
                            K.style.transitionDuration = "400ms";
                            K.style.left = X[0] + a + "px";
                            K.style.top = X[1] + "px";
                            K.style.transform = "rotate( " + c + "rad )";
                            d()
                        }, Z ? a() : Y = a) : (K.style.transitionDuration = "200ms", K.style.opacity = "0", K.style.left = X[0] + "px", K.style.top = X[1] + "px", K.style.transform = "", d());
                        q = -1;
                        break;
                    case P.movePinch:
                        if (2 === q || 3 === q) q === q.move ? G("moveEnd", null, null, null) : 3 === q && G("pinchEnd", null, null, null), q = 0
                }
            }

            function f(a) {
                a.preventDefault();
                if (-1 !== q) switch (t) {
                    case P.swipe:
                        if (0 !== q) break;
                        m();
                        q = 1;
                        fa = setTimeout(function() {
                            l();
                            fa = !1;
                            1 === q && (q = 0, G("swipeEnd", null, null, null))
                        }, 1E3);
                        k();
                        G("swipeStart", null, null, null);
                        G("swipeGetCanvas", K, ia, ba);
                        u(a, ea);
                        break;
                    case P.movePinch:
                        0 !== q ? 2 !== q || d || void 0 === a.changedTouches && void 0 === a.touches || (Ja = p(a), 20 < Ja && (q = 3, n = 1, G("pinchStart", null, null, null))) : 3 !== q && (d = !1, u(a, ea), O[0] = 0, O[1] = 0, q = 2, Ma = 0)
                }
            }

            function g(a) {
                var b = 0 > a;
                K.style.left = X[0] + a + "px";
                K.style.transformOrigin = b ? ca : da;
                K.style.transform = "rotate( " + (b ? 1 : -1) * a / C.width + "rad )"
            }

            function k() {
                Z = !1;
                var a = C.getBoundingClientRect();
                X[0] = a.left;
                X[1] = a.top;
                K.width = Math.round(C.width / 4);
                K.height = Math.round(C.height / 4);
                ba.width = K.width;
                ba.height = K.height;
                K.style.width = C.offsetWidth + "px";
                K.style.height = C.offsetHeight + "px";
                K.style.left = X[0] + "px";
                K.style.top = X[1] + "px";
                setTimeout(h, 0)
            }

            function h() {
                ia.drawImage(C, 0, 0, K.width, K.height);
                V.drawImage(K, 0, 0);
                Z = !0;
                document.body.appendChild(K);
                Y && (Y(), Y = !1)
            }

            function l() {
                K.style.transitionDuration = "0ms";
                K.style.opacity = "1";
                K.style.transform = "";
                Z && (document.body.removeChild(K), Z = !1)
            }

            function m() {
                fa && (window.clearTimeout(fa), fa = !1)
            }

            function p(a) {
                v(a, D, 0);
                v(a, z, 1);
                return Math.sqrt(D[0] * D[0] + z[0] * z[0])
            }

            function u(a, b) {
                void 0 !== a.changedTouches || void 0 !== a.touches ? v(a, b, 0) : (b[0] = a.pageX, b[1] = a.pageY)
            }

            function v(a, b, d) {
                a.touches.length > d ? (b[0] = a.touches[d].pageX, b[1] = a.touches[d].pageY) : (b[0] = a.changedTouches[d].pageX, b[1] = a.changedTouches[d].pageY)
            }

            function M() {
                R.forEach(function(a) {
                    C.removeEventListener(a.type, a.Pa, !1)
                });
                return R.splice(0, R.length)
            }

            function H(a) {
                a.forEach(function(a) {
                    E(a.type, a.Pa)
                })
            }

            function E(a, b) {
                C.removeEventListener(a, b, !1);
                K.removeEventListener(a, b, !1);
                C.addEventListener(a, b, !1);
                K.addEventListener(a, b, !1);
                0 === R.filter(function(d) {
                    return d.type === a && d.Pa === b
                }).length && R.push({
                    type: a,
                    Pa: b
                })
            }

            function G(a, b, d, c) {
                A[a].forEach(function(a) {
                    a.Pa(b, d, c)
                })
            }

            function pa(a) {
                return a[0] +
                    "% " + (100 - a[1]) + "%"
            }
            var B = !1,
                C = !1,
                A = {
                    swipeStart: [],
                    swipeEnd: [],
                    swipeLeft: [],
                    swipeRight: [],
                    swipeMove: [],
                    swipeGetCanvas: [],
                    pinch: [],
                    pinchStart: [],
                    pinchEnd: [],
                    move: [],
                    moveStart: [],
                    moveEnd: []
                },
                R = [],
                P = {
                    idle: 0,
                    swipe: 1,
                    movePinch: 2
                },
                t = P.idle,
                q = 0,
                ea = [0, 0],
                J = [0, 0],
                O = [0, 0],
                L = [0, 0],
                K = document.createElement("canvas"),
                ba = document.createElement("canvas"),
                ia = K.getContext("2d"),
                V = ba.getContext("2d");
            K.style.position = "fixed";
            K.style.zIndex = "800";
            K.style.cursor = "move";
            K.style.pointerEvents = "none";
            K.className = "swipeImage";
            K.setAttribute("draggable", !1);
            var Z = !1,
                X = [0, 0],
                Y = !1,
                fa = !1,
                da = pa([50, 100]),
                ca = pa([50, 0]),
                ja = !1,
                Ma = 0,
                ka = [0, 0],
                Ja = 0,
                d = !1,
                n = 1,
                D = [0, 0],
                z = [0, 0],
                S = {
                    init: function(d) {
                        if (B) S.switch_canvas(d.ba);
                        else return C = d.ba, E("mousedown", f), E("mouseup", c), E("mouseout", c), E("mousemove", b), E("mousemove", b), E("wheel", a), E("touchstart", f), E("touchend", c), E("touchmove", b), B = !0, S
                    },
                    switch_canvas: function(a) {
                        if (!B) S.init({
                            ba: a
                        });
                        else if (C !== a) {
                            var b = M();
                            C = a;
                            H(b);
                            for (var d in A)
                                for (a = A[d], b = a.length - 1; 0 <= b; --b) a[b].ak && a.splice(b, 1)
                        }
                    },
                    get_mode: function() {
                        for (var a in P)
                            if (P[a] === t) return a;
                        return !1
                    },
                    switch_mode: function(a) {
                        B && "undefined" !== typeof P[a] && (a = P[a], t !== a && (m(), t = a, q = 0))
                    },
                    add_listener: function(a, b, d) {
                        A[a].push({
                            Pa: b,
                            ak: "undefined" === typeof d ? !1 : d
                        });
                        return S
                    },
                    remove_listener: function(a) {
                        A[a].splice(0, A[a].length);
                        return S
                    },
                    animate_swipe: function(a, b) {
                        ja && (clearInterval(ja), ja = !1);
                        k();
                        var d = C.width / (b / 1E3) * ("left" === a ? -1 : 1),
                            c = 0,
                            n, e = Date.now(),
                            D;
                        ja = setInterval(function() {
                            ja && (n = Date.now(), D = (n - e) / 1E3, c += D * d, g(c), e = n, Math.abs(c) > .75 * C.width && ja && (clearInterval(ja), ja = !1, l()))
                        }, 16)
                    }
                };
            return S
        }();
    window.CanvasListeners = nb;
    return JEEFITAPI
}();
window.JeefitFallback = function() {
    function t() {
        window.CanvasListeners && (CanvasListeners.switch_canvas(oa), Ba.add_listener = CanvasListeners.add_listener, Ba.remove_listener = CanvasListeners.remove_listener, Ba.animate_swipe = CanvasListeners.animate_swipe, Ba.switch_modeInteractor = CanvasListeners.switch_mode, Ba.get_modeInteractor = CanvasListeners.get_mode, CanvasListeners.add_listener("move", function(f, h) {
            xb && (qb += h[0] * q.f, qb = Math.min(Math.max(qb, -q.a), q.a), Eb += h[1] * q.f, Eb = Math.min(Math.max(Eb, -q.a), q.a), xa())
        }, !0).add_listener("pinch", function(f, h) {
            xb && (jb += h * q.o, jb = Math.min(Math.max(jb, q.g[0]), q.g[1]), xa())
        }, !0))
    }

    function xa() {
        xb && Oa && (bb.save(), bb.translate(ja.width, 0), bb.scale(-1, 1), bb.drawImage(ja, 0, 0), bb.restore(), bb.save(), bb.translate(cb[0], cb[1]), bb.scale(jb, jb), bb.drawImage(Oa, 0, 0, Oa.width, Oa.height, -cb[0] + qb + ka, -cb[1] + Eb + L, f, J), bb.restore())
    }

    function ua(f, h) {
        M = f;
        K = h;
        oa.width = M;
        oa.height = K;
        ja.width = M;
        ja.height = K
    }
    var q = {
            b: "https://fallback.jeeliz.com",
            H: "jpeg",
            D: 800,
            C: 800,
            f: .3,
            o: .5,
            g: [.5, 1.5],
            a: 40,
            h: 500
        },
        ca = !1,
        Y = !1,
        V = !1,
        E = !1,
        Z = !1,
        fa, sb, Ca = !1,
        Ya = !1,
        Sa = !1,
        da = !1,
        X = !1,
        h = [],
        p = !1,
        M = !1,
        K = !1,
        l = {},
        v = !1,
        ea = !1,
        P, Ja, ja = !1,
        R = !1,
        ba = !1,
        vb = !1,
        Ia = !1,
        lb = !1,
        wb = [],
        oa = !1,
        bb, xb = !1,
        Ua = !1,
        Db = !1,
        Za = !1,
        jb = 1,
        qb = 0,
        Eb = 0,
        Va, fb, cb, yb, u, ob, pb, f, J, ka, L, Oa, Ra, eb, Ba = {
            switch_toFallbackMode: function(f, h) {
                if (vb || E) return !1;
                E = vb = !0;
                if (ba) return ba.switch_deepSleep(!0), Ia.style.display = "none", oa.style.display = "block", Ia.id = lb + "_old", oa.id = lb, t(), window.JEEFITAPI = Ba, Sa = Y = ca = E = !1, l = {}, f && f(), !0;
                ba = JEEFITAPI;
                var p = ba.get_size();
                ba.switch_deepSleep && ba.switch_deepSleep(!0);
                Ua = h;
                Ba.init({}, function() {
                    Ba.set_size(p.width, p.height);
                    Ia = JEEFITAPI.get_cv();
                    Ia.style.display = "none";
                    Ia.parentNode.insertBefore(oa, Ia);
                    oa.style.position = "absolute";
                    oa.className = Ia.className;
                    lb = Ia.id;
                    oa.id = lb;
                    Ia.id = lb + "_old";
                    wb = wb.concat(ba.get_onHalfLoadCallstack());
                    E = !1;
                    f && f();
                    t()
                }, function() {
                    E = !1;
                    h && h()
                });
                window.JEEFITAPI = Ba;
                return !0
            },
            switch_toFullMode: function(f) {
                if (!vb || E || !ba || !ba.ready) return !1;
                vb = !1;
                E = !0;
                Ia.style.display = "block";
                oa.style.display = "none";
                Ia.id = lb;
                oa.id = lb + "_old";
                window.JEEFITAPI = ba;
                JEEFITAPI.init_listeners();
                ba.switch_deepSleep(!1);
                f && (E = !1, f());
                return !0
            },
            set_serverURL: function(f) {
                q.b = f
            },
            call_onDetect: function(f) {
                ca ? f() : wb.push(f)
            },
            reset_adjust: function() {
                jb = 1;
                Eb = qb = 0
            },
            get_cv: function() {
                return oa
            },
            get_displayedCv: function() {
                return oa
            },
            set_size: function(f, h) {
                ua(f, h);
                bb = oa.getContext("2d");
                bb.globalCompositeOperation = "source-over";
                R = ja.getContext("2d");
                l = {}
            },
            resize: function(f, h) {
                function l() {
                    Z && (clearTimeout(Z), Z = !1);
                    if (E) Z = setTimeout(l, q.h);
                    else if (f !== M || h !== K) {
                        var p = CanvasListeners.get_mode();
                        ua(f, h);
                        ca && Y && Ba.detect(Y, V, function() {
                            CanvasListeners.switch_mode(p)
                        })
                    }
                }
                Z && (clearTimeout(Z), Z = !1);
                Z = setTimeout(l, q.h)
            },
            ready: !1,
            isFallback: !0,
            init: function(f, l) {
                for (var u in q) "undefined" !== typeof f[u] && (q[u] = f[u]);
                fa = document.createElement("canvas");
                fa.width = q.D;
                fa.height = q.C;
                sb = fa.getContext("2d");
                oa = document.createElement("canvas");
                v = document.createElement("canvas");
                ja = document.createElement("canvas");
                ea = v.getContext("2d");
                Va = document.createElement("canvas");
                fb = Va.getContext("2d");
                p = !0;
                l && l();
                h.forEach(function(f) {
                    f()
                });
                h.splice(0, h.length);
                Ba.ready = !0
            },
            onLoad: function(f) {
                p ? f() : h.push(f)
            },
            is_viewer3D: function() {
                return !1
            },
            switch_viewer3D: function(f, h) {
                h && h();
                return !1
            },
            switch_sleep: function() {},
            relieve_DOM: function() {},
            switch_slow: function() {},
            capture_image: function(f, h) {
                var l = new Image;
                l.src = oa.toDataURL("image/jpeg");
                l.onload = function() {
                    h(l)
                }
            },
            load_model: function(h, p, E, q) {
                X = E;
                if (q in l) xb = !0, h = l[q], Oa = h.u, yb = h.F, u = h.G, ob = h.B, pb = h.A, ka = h.l, L = h.m, f = h.j, J = h.i, P = h.w, Ja = h.v, cb = h.s, xa(), E && E();
                else Ba["try"](q, function(h) {
                    var c = M / K;
                    h.width / h.height > c ? (pb = h.height, ob = h.height * c, yb = Math.round((h.width - ob) / 2), u = 0) : (ob = h.width, pb = h.width / c, yb = 0, u = Math.round((h.height - pb) / 2));
                    J = f = c = 1 > v.width / v.height ? P : Ja;
                    ka = Math.round((M - c) / 2);
                    L = Math.round((K - c) / 2);
                    Oa = h;
                    xb = !0;
                    Va.width = oa.width;
                    Va.height = oa.height;
                    fb.clearRect(0, 0, oa.width, oa.height);
                    fb.drawImage(h, yb, u, ob, pb, 0, 0, M, K);
                    c = Va.width;
                    var p = Va.height,
                        R = fb.getImageData(0, 0, c, p).data,
                        t, H, b = 0,
                        ea = [0, 0];
                    for (t = 0; t < c; ++t)
                        for (H = 0; H < p; ++H) {
                            var ba = 4 * (t + H * c);
                            ba = R[ba + 3] / 255;
                            ea[0] += ba * t;
                            ea[1] += ba * H;
                            b += ba
                        }
                    ea[0] /= b;
                    ea[1] /= b;
                    cb = ea;
                    xa();
                    l[q] = {
                        u: h,
                        s: cb,
                        F: yb,
                        G: u,
                        B: ob,
                        A: pb,
                        l: ka,
                        m: L,
                        j: f,
                        i: J,
                        w: P,
                        v: Ja
                    };
                    E && E()
                })
            },
            detect: function(f, h, p, u) {
                if (E) setTimeout(function() {
                    Ba.detect(f, h, p, u)
                }, 1E3);
                else if ("IMG" !== f.tagName || f.complete) {
                    E = !0;
                    ca = !1;
                    Y = f;
                    V = h;
                    p && (Za = p);
                    u && (Db = u);
                    h ? Ra = f : (Ra && eb || (Ra = document.createElement("canvas"), eb = Ra.getContext("2d")), Ra.width = f.width, Ra.height = f.height, eb.save(), eb.translate(f.width, 0), eb.scale(-1, 1), eb.drawImage(f, 0, 0), eb.restore());
                    M || Ba.set_size(f.width, f.height);
                    Oa = !1;
                    l = {};
                    var t;
                    if (f.width >= f.height) var c = 0,
                        J = t = f.height,
                        ba = Math.round((f.width - f.height) / 2);
                    else ba = 0, J = t = f.width, c = Math.round((f.height - f.width) / 2);
                    sb.drawImage(Ra, ba, c, J, t, 0, 0, fa.width, fa.height);
                    Ba.c(q.b, {
                        action: "detect",
                        imageData: fa.toDataURL("image/" + q.H)
                    }, Ba.on_detect, function() {
                        E = !1
                    });
                    ba = M / K;
                    if (f.width / f.height > ba) {
                        t = f.height;
                        J = Math.round(f.height * ba);
                        ba = Math.round((f.width - J) / 2);
                        c = 0;
                        var L = K / f.height
                    } else J = f.width, t = Math.round(f.width / ba), ba = 0, c = Math.round((f.height - t) / 2), L = M / f.width;
                    P = Math.round(L * f.width);
                    Ja = Math.round(L * f.height);
                    L = Math.min(L, 1);
                    v.width = Math.round(L * f.width);
                    v.height = Math.round(L * f.height);
                    ea.drawImage(Ra, 0, 0, f.width, f.height, 0, 0, v.width, v.height);
                    R.drawImage(Ra, ba, c, J, t, 0, 0, M, K)
                } else f.onload = function() {
                    Ba.detect(f, h, p, u)
                }
            },
            get_reducedImage: function() {
                return v
            },
            on_detect: function(f) {
                E = !1;
                f = JSON.parse(f);
                f.detectionId ? (Ca = f.detectionId, ca = !0, wb.forEach(function(f) {
                    Ba.onLoad(f)
                }), wb.splice(0, wb.length), Za && Za(Ca), da && Sa && Ba.load_model(!1, !1, X, Sa)) : Db && Db()
            },
            "try": function(f, h) {
                if (E || !ca) return !1;
                E = !0;
                da = !1;
                Sa = f;
                Ya = h;
                Ba.c(q.b, {
                    action: "try",
                    sku: f,
                    detectionId: Ca
                }, Ba.on_try, function() {
                    E = !1
                });
                return !0
            },
            on_try: function(f) {
                E = !1;
                if ((f = JSON.parse(f)) && f.imageData) {
                    var h = new Image;
                    h.src = f.imageData;
                    da = !0;
                    Ya && (h.onload = function() {
                        Ya(h)
                    })
                } else Ua && Ua()
            },
            c: function(f, h, l, p) {
                var u = new XMLHttpRequest;
                u.open("POST", f, !0);
                u.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                p && (u.onerror = p);
                u.onreadystatechange = function() {
                    4 === u.readyState && 200 === u.status && l(u.responseText)
                };
                u.send(JSON.stringify(h))
            }
        };
    Ba.onHalfLoad = Ba.onLoad;
    return Ba
}();
! function(t, xa) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? xa(t, !0) : function(t) {
        if (!t.document) throw Error("jQuery requires a window with a document");
        return xa(t)
    } : xa(t)
}("undefined" != typeof window ? window : this, function(t, xa) {
    function ua(a, b) {
        b = b || J;
        var d = b.createElement("script");
        d.text = a;
        b.head.appendChild(d).parentNode.removeChild(d)
    }

    function q(a) {
        var b = !!a && "length" in a && a.length,
            d = c.type(a);
        return "function" !== d && !c.isWindow(a) && ("array" === d || 0 === b || "number" == typeof b && 0 < b && b - 1 in a)
    }

    function ca(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function Y(a, b, e) {
        return c.isFunction(b) ? c.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== e
        }) : b.nodeType ? c.grep(a, function(a) {
            return a === b !== e
        }) : "string" != typeof b ? c.grep(a, function(a) {
            return -1 < eb.call(b, a) !== e
        }) : G.test(b) ? c.filter(b, a, e) : (b = c.filter(b, a), c.grep(a, function(a) {
            return -1 < eb.call(b, a) !== e && 1 === a.nodeType
        }))
    }

    function V(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function E(a) {
        var b = {};
        return c.each(a.match(ib) || [], function(a, d) {
            b[d] = !0
        }), b
    }

    function Z(a) {
        return a
    }

    function fa(a) {
        throw a;
    }

    function sb(a, b, e, z) {
        var d;
        try {
            a && c.isFunction(d = a.promise) ? d.call(a).done(b).fail(e) : a && c.isFunction(d = a.then) ? d.call(a, b, e) : b.apply(void 0, [a].slice(z))
        } catch (aa) {
            e.apply(void 0, [aa])
        }
    }

    function Ca() {
        J.removeEventListener("DOMContentLoaded", Ca);
        t.removeEventListener("load", Ca);
        c.ready()
    }

    function Ya() {
        this.expando = c.expando + Ya.uid++
    }

    function Sa(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(jc, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    d = c, c = "true" === d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : kc.test(d) ? JSON.parse(d) : d)
                } catch (S) {}
                gb.set(a, b, c)
            } else c = void 0;
        return c
    }

    function da(a, b, e, z) {
        var d, n = 1,
            D = 20,
            f = z ? function() {
                return z.cur()
            } : function() {
                return c.css(a, b, "")
            },
            k = f(),
            g = e && e[3] || (c.cssNumber[b] ? "" : "px"),
            h = (c.cssNumber[b] || "px" !== g && +k) && m.exec(c.css(a, b));
        if (h && h[3] !== g) {
            g = g || h[3];
            e = e || [];
            h = +k || 1;
            do n = n || ".5", h /= n, c.style(a, b, h + g); while (n !== (n = f() / k) && 1 !== n && --D)
        }
        return e && (h = +h || +k || 0, d = e[1] ? h + (e[1] + 1) * e[2] : +e[2], z && (z.unit = g, z.start = h, z.end = d)), d
    }

    function X(a, b) {
        for (var d, n, e = [], f = 0, k = a.length; f < k; f++)
            if (n = a[f], n.style)
                if (d = n.style.display, b) {
                    if ("none" === d && (e[f] = ta.get(n, "display") || null, e[f] || (n.style.display = "")), "" === n.style.display && g(n)) {
                        d = f;
                        var h = void 0;
                        var l = n.ownerDocument;
                        var m = n.nodeName;
                        l = (n = Wa[m]) ? n : (h = l.body.appendChild(l.createElement(m)), n = c.css(h, "display"), h.parentNode.removeChild(h), "none" === n && (n = "block"), Wa[m] = n, n);
                        e[d] = l
                    }
                } else "none" !== d && (e[f] = "none", ta.set(n, "display", d));
        for (f = 0; f < k; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    function h(a, b) {
        var d;
        return d = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && ca(a, b) ? c.merge([a], d) : d
    }

    function p(a, b) {
        for (var d = 0, c = a.length; d < c; d++) ta.set(a[d], "globalEval", !b || ta.get(b[d], "globalEval"))
    }

    function M(a, b, e, f, S) {
        for (var d, n, D, z, k = b.createDocumentFragment(), g = [], l = 0, m = a.length; l < m; l++)
            if (d = a[l], d || 0 === d)
                if ("object" === c.type(d)) c.merge(g, d.nodeType ? [d] : d);
                else if (Vb.test(d)) {
            n = n || k.appendChild(b.createElement("div"));
            D = (Nb.exec(d) || ["", ""])[1].toLowerCase();
            D = Qa[D] || Qa._default;
            n.innerHTML = D[1] + c.htmlPrefilter(d) + D[2];
            for (D = D[0]; D--;) n = n.lastChild;
            c.merge(g, n.childNodes);
            n = k.firstChild;
            n.textContent = ""
        } else g.push(b.createTextNode(d));
        k.textContent = "";
        for (l = 0; d = g[l++];)
            if (f && -1 < c.inArray(d, f)) S && S.push(d);
            else if (z = c.contains(d.ownerDocument, d), n = h(k.appendChild(d), "script"), z && p(n), e)
            for (D = 0; d = n[D++];) Sb.test(d.type || "") && e.push(d);
        return k
    }

    function K() {
        return !0
    }

    function l() {
        return !1
    }

    function v() {
        try {
            return J.activeElement
        } catch (d) {}
    }

    function ea(a, b, e, f, S, k) {
        var d, n;
        if ("object" == typeof b) {
            "string" != typeof e && (f = f || e, e = void 0);
            for (n in b) ea(a, n, e, f, b[n], k);
            return a
        }
        if (null == f && null == S ? (S = e, f = e = void 0) : null == S && ("string" == typeof e ? (S = f, f = void 0) : (S = f, f = e, e = void 0)), !1 === S) S = l;
        else if (!S) return a;
        return 1 === k && (d = S, S = function(a) {
            return c().off(a), d.apply(this, arguments)
        }, S.guid = d.guid || (d.guid = c.guid++)), a.each(function() {
            c.event.add(this, b, S, f, e)
        })
    }

    function P(a, b) {
        return ca(a, "table") && ca(11 !== b.nodeType ? b : b.firstChild, "tr") ? c(">tbody", a)[0] || a : a
    }

    function Ja(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ja(a) {
        var b = $b.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function R(a, b) {
        var d, n, e, f, k, g;
        if (1 === b.nodeType) {
            if (ta.hasData(a) && (d = ta.access(a), n = ta.set(b, d), g = d.events))
                for (e in delete n.handle, n.events = {}, g)
                    for (d = 0, n = g[e].length; d < n; d++) c.event.add(b, e, g[e][d]);
            gb.hasData(a) && (f = gb.access(a), k = c.extend({}, f), gb.set(b, k))
        }
    }

    function ba(a, b, e, f) {
        b = Oa.apply([], b);
        var d, n, D, z = 0,
            k = a.length,
            g = k - 1,
            l = b[0],
            m = c.isFunction(l);
        if (m || 1 < k && "string" == typeof l && !ia.checkClone && ac.test(l)) return a.each(function(d) {
            var c = a.eq(d);
            m && (b[0] = l.call(this, d, c.html()));
            ba(c, b, e, f)
        });
        if (k && (d = M(b, a[0].ownerDocument, !1, a, f), n = d.firstChild, 1 === d.childNodes.length && (d = n), n || f)) {
            n = c.map(h(d, "script"), Ja);
            for (D = n.length; z < k; z++) {
                var p = d;
                z !== g && (p = c.clone(p, !0, !0), D && c.merge(n, h(p, "script")));
                e.call(a[z], p, z)
            }
            if (D)
                for (d = n[n.length - 1].ownerDocument, c.map(n, ja), z = 0; z < D; z++) p = n[z], Sb.test(p.type || "") && !ta.access(p, "globalEval") && c.contains(d, p) && (p.src ? c._evalUrl && c._evalUrl(p.src) : ua(p.textContent.replace(nb, ""), d))
        }
        return a
    }

    function vb(a, b, e) {
        for (var d = b ? c.filter(b, a) : a, n = 0; null != (b = d[n]); n++) e || 1 !== b.nodeType || c.cleanData(h(b)), b.parentNode && (e && c.contains(b.ownerDocument, b) && p(h(b, "script")), b.parentNode.removeChild(b));
        return a
    }

    function Ia(b, n, D) {
        var d, f, k, g, h = b.style;
        return D = D || w(b), D && (g = D.getPropertyValue(n) || D[n], "" !== g || c.contains(b.ownerDocument, b) || (g = c.style(b, n)), !ia.pixelMarginRight() && e.test(g) && a.test(n) && (d = h.width, f = h.minWidth, k = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = D.width, h.width = d, h.minWidth = f, h.maxWidth = k)), void 0 !== g ? g + "" : g
    }

    function lb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function wb(a) {
        var b = c.cssProps[a];
        if (!b) {
            b = c.cssProps;
            a: {
                var d = a;
                if (!(d in Q)) {
                    for (var e = d[0].toUpperCase() + d.slice(1), f = y.length; f--;)
                        if (d = y[f] + e, d in Q) break a;
                    d = void 0
                }
            }
            b = b[a] = d || a
        }
        return b
    }

    function oa(a, b, c) {
        return (a = m.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }

    function bb(a, b, e, f, S) {
        var d = 0;
        for (b = e === (f ? "border" : "content") ? 4 : "width" === b ? 1 : 0; 4 > b; b += 2) "margin" === e && (d += c.css(a, e + Ga[b], !0, S)), f ? ("content" === e && (d -= c.css(a, "padding" + Ga[b], !0, S)), "margin" !== e && (d -= c.css(a, "border" + Ga[b] + "Width", !0, S))) : (d += c.css(a, "padding" + Ga[b], !0, S), "padding" !== e && (d += c.css(a, "border" + Ga[b] + "Width", !0, S)));
        return d
    }

    function xb(a, b, f) {
        var d, n = w(a),
            D = Ia(a, b, n),
            k = "border-box" === c.css(a, "boxSizing", !1, n);
        return e.test(D) ? D : (d = k && (ia.boxSizingReliable() || D === a.style[b]), "auto" === D && (D = a["offset" + b[0].toUpperCase() + b.slice(1)]), D = parseFloat(D) || 0, D + bb(a, b, f || (k ? "border" : "content"), d, n) + "px")
    }

    function Ua(a, b, c, e, f) {
        return new Ua.prototype.init(a, b, c, e, f)
    }

    function Db() {
        T && (!1 === J.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(Db) : t.setTimeout(Db, c.fx.interval), c.fx.tick())
    }

    function Za() {
        return t.setTimeout(function() {
            F = void 0
        }), F = c.now()
    }

    function jb(a, b) {
        var d = 0,
            c = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            var n = Ga[d];
            c["margin" + n] = c["padding" + n] = a
        }
        return b && (c.opacity = c.width = a), c
    }

    function qb(a, b, c) {
        for (var d, n = (Va.tweeners[b] || []).concat(Va.tweeners["*"]), e = 0, f = n.length; e < f; e++)
            if (d = n[e].call(c, b, a)) return d
    }

    function Eb(a, b) {
        var d, n, e, f, k;
        for (d in a)
            if (n = c.camelCase(d), e = b[n], f = a[d], Array.isArray(f) && (e = f[1], f = a[d] = f[0]), d !== n && (a[n] = f, delete a[d]), k = c.cssHooks[n], k && "expand" in k)
                for (d in f = k.expand(f), delete a[n], f) d in a || (a[d] = f[d], b[d] = e);
            else b[n] = e
    }

    function Va(a, b, e) {
        var d, n = 0,
            f = Va.prefilters.length,
            D = c.Deferred().always(function() {
                delete k.elem
            }),
            k = function() {
                if (d) return !1;
                var b = F || Za();
                b = Math.max(0, g.startTime + g.duration - b);
                for (var c = 1 - (b / g.duration || 0), n = 0, e = g.tweens.length; n < e; n++) g.tweens[n].run(c);
                return D.notifyWith(a, [g, c, b]), 1 > c && e ? b : (e || D.notifyWith(a, [g, 1, 0]), D.resolveWith(a, [g]), !1)
            },
            g = D.promise({
                elem: a,
                props: c.extend({}, b),
                opts: c.extend(!0, {
                    specialEasing: {},
                    easing: c.easing._default
                }, e),
                originalProperties: b,
                originalOptions: e,
                startTime: F || Za(),
                duration: e.duration,
                tweens: [],
                createTween: function(b, d) {
                    b = c.Tween(a, g.opts, b, d, g.opts.specialEasing[b] || g.opts.easing);
                    return g.tweens.push(b), b
                },
                stop: function(b) {
                    var c = 0,
                        n = b ? g.tweens.length : 0;
                    if (d) return this;
                    for (d = !0; c < n; c++) g.tweens[c].run(1);
                    return b ? (D.notifyWith(a, [g, 1, 0]), D.resolveWith(a, [g, b])) : D.rejectWith(a, [g, b]), this
                }
            });
        e = g.props;
        for (Eb(e, g.opts.specialEasing); n < f; n++)
            if (b = Va.prefilters[n].call(g, a, e, g.opts)) return c.isFunction(b.stop) && (c._queueHooks(g.elem, g.opts.queue).stop = c.proxy(b.stop, b)), b;
        return c.map(e, qb, g), c.isFunction(g.opts.start) && g.opts.start.call(a, g), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always), c.fx.timer(c.extend(k, {
            elem: a,
            anim: g,
            queue: g.opts.queue
        })), g
    }

    function fb(a) {
        return (a.match(ib) || []).join(" ")
    }

    function cb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function yb(a, b, e, f) {
        var d;
        if (Array.isArray(b)) c.each(b, function(b, d) {
            e || hb.test(a) ? f(a, d) : yb(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, e, f)
        });
        else if (e || "object" !== c.type(b)) f(a, b);
        else
            for (d in b) yb(a + "[" + d + "]", b[d], e, f)
    }

    function u(a) {
        return function(b, d) {
            "string" != typeof b && (d = b, b = "*");
            var n = 0,
                e = b.toLowerCase().match(ib) || [];
            if (c.isFunction(d))
                for (; b = e[n++];) "+" === b[0] ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(d)) : (a[b] = a[b] || []).push(d)
        }
    }

    function ob(a, b, e, f) {
        function d(z) {
            var g;
            return n[z] = !0, c.each(a[z] || [], function(a, c) {
                a = c(b, e, f);
                return "string" != typeof a || D || n[a] ? D ? !(g = a) : void 0 : (b.dataTypes.unshift(a), d(a), !1)
            }), g
        }
        var n = {},
            D = a === cc;
        return d(b.dataTypes[0]) || !n["*"] && d("*")
    }

    function pb(a, b) {
        var d, n, e = c.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : n || (n = {}))[d] = b[d]);
        return n && c.extend(!0, a, n), a
    }
    var f = [],
        J = t.document,
        ka = Object.getPrototypeOf,
        L = f.slice,
        Oa = f.concat,
        Ra = f.push,
        eb = f.indexOf,
        Ba = {},
        pa = Ba.toString,
        Ma = Ba.hasOwnProperty,
        Wb = Ma.toString,
        Ob = Wb.call(Object),
        ia = {},
        c = function(a, b) {
            return new c.fn.init(a, b)
        },
        rb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gc = /^-ms-/,
        bc = /-([a-z])/g,
        H = function(a, b) {
            return b.toUpperCase()
        };
    $jscomp.initSymbol();
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    c.fn = c.prototype = {
        jquery: "3.2.1",
        constructor: c,
        length: 0,
        toArray: function() {
            return L.call(this)
        },
        get: function(a) {
            return null == a ? L.call(this) : 0 > a ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            a = c.merge(this.constructor(), a);
            return a.prevObject = this, a
        },
        each: function(a) {
            return c.each(this, a)
        },
        map: function(a) {
            return this.pushStack(c.map(this, function(b, d) {
                return a.call(b, d, b)
            }))
        },
        slice: function() {
            return this.pushStack(L.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Ra,
        sort: f.sort,
        splice: f.splice
    };
    c.extend = c.fn.extend = function() {
        var a, b, e, f, g = arguments[0] || {},
            k = 1,
            h = arguments.length,
            l = !1;
        "boolean" == typeof g && (l = g, g = arguments[k] || {}, k++);
        "object" == typeof g || c.isFunction(g) || (g = {});
        for (k === h && (g = this, k--); k < h; k++)
            if (null != (a = arguments[k]))
                for (b in a) {
                    var m = g[b];
                    var p = a[b];
                    g !== p && (l && p && (c.isPlainObject(p) || (e = Array.isArray(p))) ? (e ? (e = !1, f = m && Array.isArray(m) ? m : []) : f = m && c.isPlainObject(m) ? m : {}, g[b] = c.extend(l, f, p)) : void 0 !== p && (g[b] = p))
                }
            return g
    };
    c.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === c.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = c.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, d;
            return !(!a || "[object Object]" !== pa.call(a)) && (!(b = ka(a)) || (d = Ma.call(b, "constructor") && b.constructor, "function" == typeof d && Wb.call(d) === Ob))
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? Ba[pa.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            ua(a)
        },
        camelCase: function(a) {
            return a.replace(gc, "ms-").replace(bc, H)
        },
        each: function(a, b) {
            var d, c = 0;
            if (q(a))
                for (d = a.length; c < d && !1 !== b.call(a[c], c, a[c]); c++);
            else
                for (c in a)
                    if (!1 === b.call(a[c], c, a[c])) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(rb, "")
        },
        makeArray: function(a, b) {
            b = b || [];
            return null != a && (q(Object(a)) ? c.merge(b, "string" == typeof a ? [a] : a) : Ra.call(b, a)), b
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : eb.call(b, a, c)
        },
        merge: function(a, b) {
            for (var d = +b.length, c = 0, e = a.length; c < d; c++) a[e++] = b[c];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, n = a.length, f = !c; e < n; e++) c = !b(a[e], e), c !== f && d.push(a[e]);
            return d
        },
        map: function(a, b, c) {
            var d, e = 0,
                n = [];
            if (q(a))
                for (d = a.length; e < d; e++) {
                    var f = b(a[e], e, c);
                    null != f && n.push(f)
                } else
                    for (e in a) f = b(a[e], e, c), null != f && n.push(f);
            return Oa.apply([], n)
        },
        guid: 1,
        proxy: function(a, b) {
            var d, e, n;
            if ("string" == typeof b && (d = a[b], b = a, a = d), c.isFunction(a)) return e = L.call(arguments, 2), n = function() {
                return a.apply(b || this, e.concat(L.call(arguments)))
            }, n.guid = a.guid = a.guid || c.guid++, n
        },
        now: Date.now,
        support: ia
    });
    "function" == typeof Symbol && (c.fn[Symbol.iterator] = f[Symbol.iterator]);
    c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        Ba["[object " + b + "]"] = b.toLowerCase()
    });
    var b = function(a) {
        function b(a, b, d, c) {
            var e, n, f, D, g = b && b.ownerDocument,
                z = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== z && 9 !== z && 11 !== z) return d;
            if (!c && ((b ? b.ownerDocument || b : ba) !== B && Ca(b), b = b || B, P)) {
                if (11 !== z && (D = ta.exec(a)))
                    if (e = D[1])
                        if (9 === z) {
                            if (!(n = b.getElementById(e))) return d;
                            if (n.id === e) return d.push(n), d
                        } else {
                            if (g && (n = g.getElementById(e)) && J(b, n) && n.id === e) return d.push(n), d
                        } else {
                    if (D[2]) return Y.apply(d, b.getElementsByTagName(a)), d;
                    if ((e = D[3]) && oa.getElementsByClassName && b.getElementsByClassName) return Y.apply(d, b.getElementsByClassName(e)), d
                }
                if (!(!oa.qsa || T[a + " "] || R && R.test(a))) {
                    if (1 !== z) {
                        g = b;
                        var k = a
                    } else if ("object" !== b.nodeName.toLowerCase()) {
                        (f = b.getAttribute("id")) ? f = f.replace(Ia, xa): b.setAttribute("id", f = I);
                        n = Ha(a);
                        for (e = n.length; e--;) n[e] = "#" + f + " " + u(n[e]);
                        k = n.join(",");
                        g = wa.test(a) && p(b.parentNode) || b
                    }
                    if (k) try {
                        return Y.apply(d, g.querySelectorAll(k)), d
                    } catch (Ac) {} finally {
                        f === I && b.removeAttribute("id")
                    }
                }
            }
            return E(a.replace(ca, "$1"), b, d, c)
        }

        function d() {
            function a(d, c) {
                return b.push(d + " ") > Da.cacheLength && delete a[b.shift()], a[d + " "] = c
            }
            var b = [];
            return a
        }

        function c(a) {
            return a[I] = !0, a
        }

        function e(a) {
            var b = B.createElement("fieldset");
            try {
                return !!a(b)
            } catch (yc) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function f(a, b) {
            a = a.split("|");
            for (var d = a.length; d--;) Da.attrHandle[a[d]] = b
        }

        function g(a, b) {
            var d = b && a,
                c = d && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (c) return c;
            if (d)
                for (; d = d.nextSibling;)
                    if (d === b) return -1;
            return a ? 1 : -1
        }

        function k(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function h(a) {
            return function(b) {
                var d = b.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && b.type === a
            }
        }

        function l(a) {
            return function(b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && Ba(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function m(a) {
            return c(function(b) {
                return b = +b, c(function(d, c) {
                    for (var e, n = a([], d.length, b), f = n.length; f--;) d[e = n[f]] && (d[e] = !(c[e] = d[e]))
                })
            })
        }

        function p(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function r() {}

        function u(a) {
            for (var b = 0, d = a.length, c = ""; b < d; b++) c += a[b].value;
            return c
        }

        function x(a, b, d) {
            var c = b.dir,
                e = b.next,
                n = e || c,
                f = d && "parentNode" === n,
                D = O++;
            return b.first ? function(b, d, e) {
                for (; b = b[c];)
                    if (1 === b.nodeType || f) return a(b, d, e);
                return !1
            } : function(b, d, g) {
                var z, k, h, S = [L, D];
                if (g)
                    for (; b = b[c];) {
                        if ((1 === b.nodeType || f) && a(b, d, g)) return !0
                    } else
                        for (; b = b[c];)
                            if (1 === b.nodeType || f)
                                if (h = b[I] || (b[I] = {}), k = h[b.uniqueID] || (h[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[c] || b;
                                else {
                                    if ((z = k[n]) && z[0] === L && z[1] === D) return S[2] = z[2];
                                    if (k[n] = S, S[2] = a(b, d, g)) return !0
                                }
                return !1
            }
        }

        function y(a) {
            return 1 < a.length ? function(b, d, c) {
                for (var e = a.length; e--;)
                    if (!a[e](b, d, c)) return !1;
                return !0
            } : a[0]
        }

        function w(a, b, d, c, e) {
            for (var n, f = [], D = 0, g = a.length, z = null != b; D < g; D++)(n = a[D]) && (d && !d(n, c, e) || (f.push(n), z && b.push(D)));
            return f
        }

        function A(a, d, e, n, f, D) {
            return n && !n[I] && (n = A(n)), f && !f[I] && (f = A(f, D)), c(function(c, D, g, z) {
                var k, h = [],
                    S = [],
                    l = D.length,
                    aa;
                if (!(aa = c)) {
                    aa = d || "*";
                    for (var m = g.nodeType ? [g] : g, p = [], Tb = 0, va = m.length; Tb < va; Tb++) b(aa, m[Tb], p);
                    aa = p
                }
                aa = !a || !c && d ? aa : w(aa, h, a, g, z);
                m = e ? f || (c ? a : l || n) ? [] : D : aa;
                if (e && e(aa, m, g, z), n) {
                    var r = w(m, S);
                    n(r, [], g, z);
                    for (g = r.length; g--;)(k = r[g]) && (m[S[g]] = !(aa[S[g]] = k))
                }
                if (c) {
                    if (f || a) {
                        if (f) {
                            r = [];
                            for (g = m.length; g--;)(k = m[g]) && r.push(aa[g] = k);
                            f(null, m = [], r, z)
                        }
                        for (g = m.length; g--;)(k = m[g]) && -1 < (r = f ? ja(c, k) : h[g]) && (c[r] = !(D[r] = k))
                    }
                } else m = w(m === D ? m.splice(l, m.length) : m), f ? f(null, D, m, z) : Y.apply(D, m)
            })
        }

        function C(a) {
            var b, d, c = a.length,
                e = Da.relative[a[0].type];
            var n = e || Da.relative[" "];
            for (var f = e ? 1 : 0, D = x(function(a) {
                    return a === b
                }, n, !0), g = x(function(a) {
                    return -1 < ja(b, a)
                }, n, !0), z = [function(a, d, c) {
                    a = !e && (c || d !== t) || ((b = d).nodeType ? D(a, d, c) : g(a, d, c));
                    return b = null, a
                }]; f < c; f++)
                if (n = Da.relative[a[f].type]) z = [x(y(z), n)];
                else {
                    if (n = Da.filter[a[f].type].apply(null, a[f].matches), n[I]) {
                        for (d = ++f; d < c && !Da.relative[a[d].type]; d++);
                        return A(1 < f && y(z), 1 < f && u(a.slice(0, f - 1).concat({
                            value: " " === a[f - 2].type ? "*" : ""
                        })).replace(ca, "$1"), n, f < d && C(a.slice(f, d)), d < c && C(a = a.slice(d)), d < c && u(a))
                    }
                    z.push(n)
                }
            return y(z)
        }

        function v(a, d) {
            var e = 0 < d.length,
                n = 0 < a.length,
                f = function(c, f, D, g, z) {
                    var k, h, S = 0,
                        l = "0",
                        aa = c && [],
                        m = [],
                        p = t,
                        r = c || n && Da.find.TAG("*", z),
                        va = L += null == p ? 1 : Math.random() || .1,
                        Tb = r.length;
                    for (z && (t = f === B || f || z); l !== Tb && null != (k = r[l]); l++) {
                        if (n && k) {
                            var u = 0;
                            for (f || k.ownerDocument === B || (Ca(k), D = !P); h = a[u++];)
                                if (h(k, f || B, D)) {
                                    g.push(k);
                                    break
                                }
                            z && (L = va)
                        }
                        e && ((k = !h && k) && S--, c && aa.push(k))
                    }
                    if (S += l, e && l !== S) {
                        for (u = 0; h = d[u++];) h(aa, m, f, D);
                        if (c) {
                            if (0 < S)
                                for (; l--;) aa[l] || m[l] || (m[l] = X.call(g));
                            m = w(m)
                        }
                        Y.apply(g, m);
                        z && !c && 0 < m.length && 1 < S + d.length && b.uniqueSort(g)
                    }
                    return z && (L = va, t = p), aa
                };
            return e ? c(f) : f
        }
        var F, M, E, t, G, q, B, H, P, R, K, ea, J, I = "sizzle" + 1 * new Date,
            ba = a.document,
            L = 0,
            O = 0,
            N = d(),
            Q = d(),
            T = d(),
            U = function(a, b) {
                return a === b && (q = !0), 0
            },
            W = {}.hasOwnProperty,
            Z = [],
            X = Z.pop,
            V = Z.push,
            Y = Z.push,
            fa = Z.slice,
            ja = function(a, b) {
                for (var d = 0, c = a.length; d < c; d++)
                    if (a[d] === b) return d;
                return -1
            },
            da = /[\x20\t\r\n\f]+/g,
            ca = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ia = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            ka = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            ma = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            Ja = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            la = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            na = /^[^{]+\{\s*\[native \w/,
            ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wa = /[+~]/,
            ua = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            ra = function(a, b, d) {
                a = "0x" + b - 65536;
                return a !== a || d ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            Ia = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xa = function(a, b) {
                return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            za = function() {
                Ca()
            },
            Ba = x(function(a) {
                return !0 === a.disabled && ("form" in
                    a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Y.apply(Z = fa.call(ba.childNodes), ba.childNodes), Z[ba.childNodes.length].nodeType
        } catch (Tb) {
            Y = {
                apply: Z.length ? function(a, b) {
                    V.apply(a, fa.call(b))
                } : function(a, b) {
                    for (var d = a.length, c = 0; a[d++] = b[c++];);
                    a.length = d - 1
                }
            }
        }
        var oa = b.support = {};
        var vb = b.isXML = function(a) {
            a = a && (a.ownerDocument || a).documentElement;
            return !!a && "HTML" !== a.nodeName
        };
        var Ca = b.setDocument = function(a) {
            var b, d;
            a = a ? a.ownerDocument || a : ba;
            return a !== B && 9 === a.nodeType && a.documentElement ? (B = a, H = B.documentElement, P = !vb(B), ba !== B && (d = B.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", za, !1) : d.attachEvent && d.attachEvent("onunload", za)), oa.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), oa.getElementsByTagName = e(function(a) {
                return a.appendChild(B.createComment("")), !a.getElementsByTagName("*").length
            }), oa.getElementsByClassName = na.test(B.getElementsByClassName), oa.getById = e(function(a) {
                return H.appendChild(a).id = I, !B.getElementsByName || !B.getElementsByName(I).length
            }), oa.getById ? (Da.filter.ID = function(a) {
                var b = a.replace(ua, ra);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, Da.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && P) return (a = b.getElementById(a)) ? [a] : []
            }) : (Da.filter.ID = function(a) {
                var b = a.replace(ua, ra);
                return function(a) {
                    return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }, Da.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && P) {
                    var d, c = b.getElementById(a);
                    if (c) {
                        if (d = c.getAttributeNode("id"), d && d.value === a) return [c];
                        var e = b.getElementsByName(a);
                        for (b = 0; c = e[b++];)
                            if (d = c.getAttributeNode("id"), d && d.value === a) return [c]
                    }
                    return []
                }
            }), Da.find.TAG = oa.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : oa.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var d = [],
                    c = 0;
                b = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; a = b[c++];) 1 === a.nodeType && d.push(a);
                    return d
                }
                return b
            }, Da.find.CLASS = oa.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && P) return b.getElementsByClassName(a)
            }, K = [], R = [], (oa.qsa = na.test(B.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || R.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + I + "-]").length || R.push("~=");
                a.querySelectorAll(":checked").length || R.push(":checked");
                a.querySelectorAll("a#" + I + "+*").length || R.push(".#.+[+~]")
            }), e(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = B.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && R.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                2 !== a.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled");
                H.appendChild(a).disabled = !0;
                2 !== a.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                R.push(",.*:")
            })), (oa.matchesSelector = na.test(ea = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                oa.disconnectedMatch = ea.call(a, "*");
                ea.call(a, "[s!='']:x");
                K.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            }), R = R.length && new RegExp(R.join("|")), K = K.length && new RegExp(K.join("|")), b = na.test(H.compareDocumentPosition), J = b || na.test(H.contains) ? function(a, b) {
                var d = 9 === a.nodeType ? a.documentElement : a;
                b = b && b.parentNode;
                return a === b || !(!b || 1 !== b.nodeType || !(d.contains ? d.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return q = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !oa.sortDetached && b.compareDocumentPosition(a) === d ? a === B || a.ownerDocument === ba && J(ba, a) ? -1 : b === B || b.ownerDocument === ba && J(ba, b) ? 1 : G ? ja(G, a) - ja(G, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return q = !0, 0;
                var d = 0,
                    c = a.parentNode,
                    e = b.parentNode,
                    n = [a],
                    f = [b];
                if (!c || !e) return a === B ? -1 : b === B ? 1 : c ? -1 : e ? 1 : G ? ja(G, a) - ja(G, b) : 0;
                if (c === e) return g(a, b);
                for (; a = a.parentNode;) n.unshift(a);
                for (a = b; a = a.parentNode;) f.unshift(a);
                for (; n[d] === f[d];) d++;
                return d ? g(n[d], f[d]) : n[d] === ba ? -1 : f[d] === ba ? 1 : 0
            }, B) : B
        };
        b.matches = function(a, d) {
            return b(a, null, null, d)
        };
        b.matchesSelector = function(a, d) {
            if ((a.ownerDocument || a) !== B && Ca(a), d = d.replace(ka, "='$1']"), !(!oa.matchesSelector || !P || T[d + " "] || K && K.test(d) || R && R.test(d))) try {
                var c = ea.call(a, d);
                if (c || oa.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch (zc) {}
            return 0 < b(d, B, null, [a]).length
        };
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== B && Ca(a), J(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== B && Ca(a);
            var d = Da.attrHandle[b.toLowerCase()];
            d = d && W.call(Da.attrHandle, b.toLowerCase()) ? d(a, b, !P) : void 0;
            return void 0 !== d ? d : oa.attributes || !P ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        };
        b.escape = function(a) {
            return (a + "").replace(Ia, xa)
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, d = [],
                c = 0,
                e = 0;
            if (q = !oa.detectDuplicates, G = !oa.sortStable && a.slice(0), a.sort(U), q) {
                for (; b = a[e++];) b === a[e] && (c = d.push(e));
                for (; c--;) a.splice(d[c], 1)
            }
            return G = null, a
        };
        var Ga = b.getText = function(a) {
            var b, d = "",
                c = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) d += Ga(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                } else
                for (; b = a[c++];) d += Ga(b);
            return d
        };
        var Da = b.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: la,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ua, ra), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, ra), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, d = !a[6] && a[2];
                    return la.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : d && ma.test(d) && (b = Ha(d, !0)) && (b = d.indexOf(")", d.length - b) - d.length) && (a[0] = a[0].slice(0, b), a[2] = d.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ua, ra).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = N[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), N(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, d, c) {
                    return function(e) {
                        e = b.attr(e, a);
                        return null == e ? "!=" === d : !d || (e += "", "=" === d ? e === c : "!=" === d ? e !== c : "^=" === d ? c && 0 === e.indexOf(c) : "*=" === d ? c && -1 < e.indexOf(c) : "$=" === d ? c && e.slice(-c.length) === c : "~=" === d ? -1 < (" " + e.replace(da, " ") + " ").indexOf(c) : "|=" === d && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, d, c, e) {
                    var n = "nth" !== a.slice(0, 3),
                        f = "last" !== a.slice(-4),
                        D = "of-type" === b;
                    return 1 === c && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, d, g) {
                        var z, k;
                        d = n !== f ? "nextSibling" : "previousSibling";
                        var h = b.parentNode,
                            S = D && b.nodeName.toLowerCase();
                        g = !g && !D;
                        var l = !1;
                        if (h) {
                            if (n) {
                                for (; d;) {
                                    for (z = b; z = z[d];)
                                        if (D ? z.nodeName.toLowerCase() === S : 1 === z.nodeType) return !1;
                                    var m = d = "only" === a && !m && "nextSibling"
                                }
                                return !0
                            }
                            if (m = [f ? h.firstChild : h.lastChild], f && g) {
                                z = h;
                                var aa = z[I] || (z[I] = {});
                                var p = aa[z.uniqueID] || (aa[z.uniqueID] = {});
                                var r = p[a] || [];
                                l = (k = r[0] === L && r[1]) && r[2];
                                for (z = k && h.childNodes[k]; z = ++k && z && z[d] || (l = k = 0) || m.pop();)
                                    if (1 === z.nodeType && ++l && z === b) {
                                        p[a] = [L, k, l];
                                        break
                                    }
                            } else if (g && (z = b, aa = z[I] || (z[I] = {}), p = aa[z.uniqueID] || (aa[z.uniqueID] = {}), r = p[a] || [], k = r[0] === L && r[1], l = k), !1 === l)
                                for (;
                                    (z = ++k && z && z[d] || (l = k = 0) || m.pop()) && ((D ? z.nodeName.toLowerCase() !== S : 1 !== z.nodeType) || !++l || (g && (aa = z[I] || (z[I] = {}), p = aa[z.uniqueID] || (aa[z.uniqueID] = {}), p[a] = [L, l]), z !== b)););
                            return l -= e, l === c || 0 === l % c && 0 <= l / c
                        }
                    }
                },
                PSEUDO: function(a, d) {
                    var e, n = Da.pseudos[a] || Da.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return n[I] ? n(d) : 1 < n.length ? (e = [a, a, "", d], Da.setFilters.hasOwnProperty(a.toLowerCase()) ? c(function(a, b) {
                        for (var c, e = n(a, d), f = e.length; f--;) c = ja(a, e[f]), a[c] = !(b[c] = e[f])
                    }) : function(a) {
                        return n(a, 0, e)
                    }) : n
                }
            },
            pseudos: {
                not: c(function(a) {
                    var b = [],
                        d = [],
                        e = M(a.replace(ca, "$1"));
                    return e[I] ? c(function(a, b, d, c) {
                        var n;
                        d = e(a, null, c, []);
                        for (c = a.length; c--;)(n = d[c]) && (a[c] = !(b[c] = n))
                    }) : function(a, c, n) {
                        return b[0] = a, e(b, null, n, d), b[0] = null, !d.pop()
                    }
                }),
                has: c(function(a) {
                    return function(d) {
                        return 0 < b(a, d).length
                    }
                }),
                contains: c(function(a) {
                    return a = a.replace(ua, ra),
                        function(b) {
                            return -1 < (b.textContent || b.innerText || Ga(b)).indexOf(a)
                        }
                }),
                lang: c(function(a) {
                    return Ja.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, ra).toLowerCase(),
                        function(b) {
                            var d;
                            do
                                if (d = P ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return d = d.toLowerCase(), d === a || 0 === d.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var d = a.location && a.location.hash;
                    return d && d.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: l(!1),
                disabled: l(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !Da.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: m(function() {
                    return [0]
                }),
                last: m(function(a, b) {
                    return [b - 1]
                }),
                eq: m(function(a, b, d) {
                    return [0 > d ? d + b : d]
                }),
                even: m(function(a, b) {
                    for (var d = 0; d < b; d += 2) a.push(d);
                    return a
                }),
                odd: m(function(a, b) {
                    for (var d = 1; d < b; d += 2) a.push(d);
                    return a
                }),
                lt: m(function(a, b, d) {
                    for (b = 0 > d ? d + b : d; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: m(function(a, b, d) {
                    for (d = 0 > d ? d + b : d; ++d < b;) a.push(d);
                    return a
                })
            }
        };
        Da.pseudos.nth = Da.pseudos.eq;
        for (F in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) Da.pseudos[F] = k(F);
        for (F in {
                submit: !0,
                reset: !0
            }) Da.pseudos[F] = h(F);
        r.prototype = Da.filters = Da.pseudos;
        Da.setFilters = new r;
        var Ha = b.tokenize = function(a, d) {
            var c, e, n, f, D;
            if (f = Q[a + " "]) return d ? 0 : f.slice(0);
            f = a;
            var z = [];
            for (D = Da.preFilter; f;) {
                g && !(c = ha.exec(f)) || (c && (f = f.slice(c[0].length) || f), z.push(e = []));
                var g = !1;
                (c = ia.exec(f)) && (g = c.shift(), e.push({
                    value: g,
                    type: c[0].replace(ca, " ")
                }), f = f.slice(g.length));
                for (n in Da.filter) !(c = la[n].exec(f)) || D[n] && !(c = D[n](c)) || (g = c.shift(), e.push({
                    value: g,
                    type: n,
                    matches: c
                }), f = f.slice(g.length));
                if (!g) break
            }
            return d ? f.length : f ? b.error(a) : Q(a, z).slice(0)
        };
        return M = b.compile = function(a, b) {
            var d, c = [],
                e = [],
                n = T[a + " "];
            if (!n) {
                b || (b = Ha(a));
                for (d = b.length; d--;) n = C(b[d]), n[I] ? c.push(n) : e.push(n);
                n = T(a, v(e, c));
                n.selector = a
            }
            return n
        }, E = b.select = function(a, b, d, c) {
            var e, n, f, D, z, g = "function" == typeof a && a,
                k = !c && Ha(a = g.selector || a);
            if (d = d || [], 1 === k.length) {
                if (n = k[0] = k[0].slice(0), 2 < n.length && "ID" === (f = n[0]).type && 9 === b.nodeType && P && Da.relative[n[1].type]) {
                    if (b = (Da.find.ID(f.matches[0].replace(ua, ra), b) || [])[0], !b) return d;
                    g && (b = b.parentNode);
                    a = a.slice(n.shift().value.length)
                }
                for (e = la.needsContext.test(a) ? 0 : n.length; e-- && (f = n[e], !Da.relative[D = f.type]);)
                    if ((z = Da.find[D]) && (c = z(f.matches[0].replace(ua, ra), wa.test(n[0].type) && p(b.parentNode) || b))) {
                        if (n.splice(e, 1), a = c.length && u(n), !a) return Y.apply(d, c), d;
                        break
                    }
            }
            return (g || M(a, k))(c, b, !P, d, !b || wa.test(a) && p(b.parentNode) || b), d
        }, oa.sortStable = I.split("").sort(U).join("") === I, oa.detectDuplicates = !!q, Ca(), oa.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(B.createElement("fieldset"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, d) {
            if (!d) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), oa.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, d) {
            if (!d && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, d) {
            var c;
            if (!d) return !0 === a[b] ? b.toLowerCase() : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        }), b
    }(t);
    c.find = b;
    c.expr = b.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.uniqueSort = c.unique = b.uniqueSort;
    c.text = b.getText;
    c.isXMLDoc = b.isXML;
    c.contains = b.contains;
    c.escapeSelector = b.escape;
    var Ha = function(a, b, e) {
            for (var d = [], n = void 0 !== e;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (n && c(a).is(e)) break;
                    d.push(a)
                }
            return d
        },
        Cb = function(a, b) {
            for (var d = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && d.push(a);
            return d
        },
        O = c.expr.match.needsContext,
        qa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        G = /^.[^:#\[\.,]*$/;
    c.filter = function(a, b, e) {
        var d = b[0];
        return e && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? c.find.matchesSelector(d, a) ? [d] : [] : c.find.matches(a, c.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    };
    c.fn.extend({
        find: function(a) {
            var b, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(c(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (c.contains(e[b], this)) return !0
            }));
            var f = this.pushStack([]);
            for (b = 0; b < d; b++) c.find(a, e[b], f);
            return 1 < d ? c.uniqueSort(f) : f
        },
        filter: function(a) {
            return this.pushStack(Y(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(Y(this, a || [], !0))
        },
        is: function(a) {
            return !!Y(this, "string" == typeof a && O.test(a) ? c(a) : a || [], !1).length
        }
    });
    var fc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (c.fn.init = function(a, b, e) {
        var d, n;
        if (!a) return this;
        if (e = e || wa, "string" == typeof a) {
            if (d = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : fc.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || e).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof c ? b[0] : b, c.merge(this, c.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : J, !0)), qa.test(d[1]) && c.isPlainObject(b))
                    for (d in b) c.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return n = J.getElementById(d[2]), n && (this[0] = n, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : c.isFunction(a) ? void 0 !== e.ready ? e.ready(a) : a(c) : c.makeArray(a, this)
    }).prototype = c.fn;
    var wa = c(J);
    var Pb = /^(?:parents|prev(?:Until|All))/,
        hc = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    c.fn.extend({
        has: function(a) {
            var b = c(a, this),
                d = b.length;
            return this.filter(function() {
                for (var a = 0; a < d; a++)
                    if (c.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var d, e = 0,
                n = this.length,
                f = [],
                g = "string" != typeof a && c(a);
            if (!O.test(a))
                for (; e < n; e++)
                    for (d = this[e]; d && d !== b; d = d.parentNode)
                        if (11 > d.nodeType && (g ? -1 < g.index(d) : 1 === d.nodeType && c.find.matchesSelector(d, a))) {
                            f.push(d);
                            break
                        }
            return this.pushStack(1 < f.length ? c.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? eb.call(c(a), this[0]) : eb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(c.uniqueSort(c.merge(this.get(), c(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return Ha(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return Ha(a, "parentNode", c)
        },
        next: function(a) {
            return V(a, "nextSibling")
        },
        prev: function(a) {
            return V(a, "previousSibling")
        },
        nextAll: function(a) {
            return Ha(a, "nextSibling")
        },
        prevAll: function(a) {
            return Ha(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return Ha(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return Ha(a, "previousSibling", c)
        },
        siblings: function(a) {
            return Cb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return Cb(a.firstChild)
        },
        contents: function(a) {
            return ca(a, "iframe") ? a.contentDocument : (ca(a, "template") && (a = a.content || a), c.merge([], a.childNodes))
        }
    }, function(a, b) {
        c.fn[a] = function(d, e) {
            var n = c.map(this, b, d);
            return "Until" !== a.slice(-5) && (e = d), e && "string" == typeof e && (n = c.filter(e, n)), 1 < this.length && (hc[a] || c.uniqueSort(n), Pb.test(a) && n.reverse()), this.pushStack(n)
        }
    });
    var ib = /[^\x20\t\r\n\f]+/g;
    c.Callbacks = function(a) {
        a = "string" == typeof a ? E(a) : c.extend({}, a);
        var b, d, e, f, g = [],
            k = [],
            h = -1,
            l = function() {
                f = f || a.once;
                for (e = b = !0; k.length; h = -1)
                    for (d = k.shift(); ++h < g.length;) !1 === g[h].apply(d[0], d[1]) && a.stopOnFalse && (h = g.length, d = !1);
                a.memory || (d = !1);
                b = !1;
                f && (g = d ? [] : "")
            },
            m = {
                add: function() {
                    return g && (d && !b && (h = g.length - 1, k.push(d)), function vc(b) {
                        c.each(b, function(b, d) {
                            c.isFunction(d) ? a.unique && m.has(d) || g.push(d) : d && d.length && "string" !== c.type(d) && vc(d)
                        })
                    }(arguments), d && !b && l()), this
                },
                remove: function() {
                    return c.each(arguments, function(a, b) {
                        for (var d; - 1 < (d = c.inArray(b, g, d));) g.splice(d, 1), d <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? -1 < c.inArray(a, g) : 0 < g.length
                },
                empty: function() {
                    return g && (g = []), this
                },
                disable: function() {
                    return f = k = [], g = d = "", this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return f = k = [], d || b || (g = d = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(a, d) {
                    return f || (d = d || [], d = [a, d.slice ? d.slice() : d], k.push(d), b || l()), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return m
    };
    c.extend({
        Deferred: function(a) {
            var b = [
                    ["notify", "progress", c.Callbacks("memory"), c.Callbacks("memory"), 2],
                    ["resolve", "done", c.Callbacks("once memory"), c.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", c.Callbacks("once memory"), c.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return c.Deferred(function(d) {
                            c.each(b, function(b, e) {
                                var n = c.isFunction(a[e[4]]) && a[e[4]];
                                f[e[1]](function() {
                                    var a = n && n.apply(this, arguments);
                                    a && c.isFunction(a.promise) ? a.promise().progress(d.notify).done(d.resolve).fail(d.reject) : d[e[0] + "With"](this, n ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    then: function(a, d, e) {
                        function n(a, b, d, e) {
                            return function() {
                                var g = this,
                                    D = arguments,
                                    z = function() {
                                        var z;
                                        if (!(a < f)) {
                                            if (z = d.apply(g, D), z === b.promise()) throw new TypeError("Thenable self-resolution");
                                            var k = z && ("object" == typeof z || "function" == typeof z) && z.then;
                                            c.isFunction(k) ? e ? k.call(z, n(f, b, Z, e), n(f, b, fa, e)) : (f++, k.call(z, n(f, b, Z, e), n(f, b, fa, e), n(f, b, Z, b.notifyWith))) : (d !== Z && (g = void 0, D = [z]), (e || b.resolveWith)(g, D))
                                        }
                                    },
                                    k = e ? z : function() {
                                        try {
                                            z()
                                        } catch (ec) {
                                            c.Deferred.exceptionHook && c.Deferred.exceptionHook(ec, k.stackTrace), a + 1 >= f && (d !== fa && (g = void 0, D = [ec]), b.rejectWith(g, D))
                                        }
                                    };
                                a ? k() : (c.Deferred.getStackHook && (k.stackTrace = c.Deferred.getStackHook()), t.setTimeout(k))
                            }
                        }
                        var f = 0;
                        return c.Deferred(function(f) {
                            b[0][3].add(n(0, f, c.isFunction(e) ? e : Z, f.notifyWith));
                            b[1][3].add(n(0, f, c.isFunction(a) ? a : Z));
                            b[2][3].add(n(0, f, c.isFunction(d) ? d : fa))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? c.extend(a, e) : e
                    }
                },
                f = {};
            return c.each(b, function(a, c) {
                var n = c[2],
                    g = c[5];
                e[c[1]] = n.add;
                g && n.add(function() {
                    d = g
                }, b[3 - a][2].disable, b[0][2].lock);
                n.add(c[3].fire);
                f[c[0]] = function() {
                    return f[c[0] +
                        "With"](this === f ? void 0 : this, arguments), this
                };
                f[c[0] + "With"] = n.fireWith
            }), e.promise(f), a && a.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                d = b,
                e = Array(d),
                f = L.call(arguments),
                g = c.Deferred(),
                k = function(a) {
                    return function(d) {
                        e[a] = this;
                        f[a] = 1 < arguments.length ? L.call(arguments) : d;
                        --b || g.resolveWith(e, f)
                    }
                };
            if (1 >= b && (sb(a, g.done(k(d)).resolve, g.reject, !b), "pending" === g.state() || c.isFunction(f[d] && f[d].then))) return g.then();
            for (; d--;) sb(f[d], k(d), g.reject);
            return g.promise()
        }
    });
    var ic = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    c.Deferred.exceptionHook = function(a, b) {
        t.console && t.console.warn && a && ic.test(a.name) && t.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b)
    };
    c.readyException = function(a) {
        t.setTimeout(function() {
            throw a;
        })
    };
    var Xb = c.Deferred();
    c.fn.ready = function(a) {
        return Xb.then(a)["catch"](function(a) {
            c.readyException(a)
        }), this
    };
    c.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (!0 === a ? --c.readyWait : c.isReady) || (c.isReady = !0, !0 !== a && 0 < --c.readyWait || Xb.resolveWith(J, [c]))
        }
    });
    c.ready.then = Xb.then;
    "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? t.setTimeout(c.ready) : (J.addEventListener("DOMContentLoaded", Ca), t.addEventListener("load", Ca));
    var zb = function(a, b, e, f, g, k, h) {
            var d = 0,
                n = a.length,
                D = null == e;
            if ("object" === c.type(e))
                for (d in g = !0, e) zb(a, b, d, e[d], !0, k, h);
            else if (void 0 !== f && (g = !0, c.isFunction(f) || (h = !0), D && (h ? (b.call(a, f), b = null) : (D = b, b = function(a, b, d) {
                    return D.call(c(a), d)
                })), b))
                for (; d < n; d++) b(a[d], e, h ? f : f.call(a[d], d, b(a[d], e)));
            return g ? a : D ? b.call(a) : n ? b(a[0], e) : k
        },
        Rb = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    Ya.uid = 1;
    Ya.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, Rb(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, e) {
            var d;
            a = this.cache(a);
            if ("string" == typeof b) a[c.camelCase(b)] = e;
            else
                for (d in b) a[c.camelCase(d)] = b[d];
            return a
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][c.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var d, e = a[this.expando];
            if (void 0 !== e) {
                if (void 0 !== b)
                    for (Array.isArray(b) ? b = b.map(c.camelCase) : (b = c.camelCase(b), b = b in e ? [b] : b.match(ib) || []), d = b.length; d--;) delete e[b[d]];
                (void 0 === b || c.isEmptyObject(e)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            a = a[this.expando];
            return void 0 !== a && !c.isEmptyObject(a)
        }
    };
    var ta = new Ya,
        gb = new Ya,
        kc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        jc = /[A-Z]/g;
    c.extend({
        hasData: function(a) {
            return gb.hasData(a) || ta.hasData(a)
        },
        data: function(a, b, c) {
            return gb.access(a, b, c)
        },
        removeData: function(a, b) {
            gb.remove(a, b)
        },
        _data: function(a, b, c) {
            return ta.access(a, b, c)
        },
        _removeData: function(a, b) {
            ta.remove(a, b)
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var d, e, f, n = this[0],
                g = n && n.attributes;
            if (void 0 === a) {
                if (this.length && (f = gb.get(n), 1 === n.nodeType && !ta.get(n, "hasDataAttrs"))) {
                    for (d = g.length; d--;) g[d] && (e = g[d].name, 0 === e.indexOf("data-") && (e = c.camelCase(e.slice(5)), Sa(n, e, f[e])));
                    ta.set(n, "hasDataAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function() {
                gb.set(this, a)
            }) : zb(this, function(b) {
                var d;
                if (n && void 0 === b) {
                    if ((d = gb.get(n, a), void 0 !== d) || (d = Sa(n, a), void 0 !== d)) return d
                } else this.each(function() {
                    gb.set(this, a, b)
                })
            }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                gb.remove(this, a)
            })
        }
    });
    c.extend({
        queue: function(a, b, e) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = ta.get(a, b), e && (!d || Array.isArray(e) ? d = ta.access(a, b, c.makeArray(e)) : d.push(e)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var d = c.queue(a, b),
                e = d.length,
                f = d.shift(),
                n = c._queueHooks(a, b),
                g = function() {
                    c.dequeue(a, b)
                };
            "inprogress" === f && (f = d.shift(), e--);
            f && ("fx" === b && d.unshift("inprogress"), delete n.stop, f.call(a, g, n));
            !e && n && n.empty.fire()
        },
        _queueHooks: function(a, b) {
            var d = b + "queueHooks";
            return ta.get(a, d) || ta.access(a, d, {
                empty: c.Callbacks("once memory").add(function() {
                    ta.remove(a, [b + "queue", d])
                })
            })
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            var d = 2;
            return "string" != typeof a && (b = a, a = "fx", d--), arguments.length < d ? c.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var d = c.queue(this, a, b);
                c._queueHooks(this, a);
                "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var d, e = 1,
                f = c.Deferred(),
                n = this,
                g = this.length,
                k = function() {
                    --e || f.resolveWith(n, [n])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; g--;)(d = ta.get(n[g], a + "queueHooks")) && d.empty && (e++, d.empty.add(k));
            return k(), f.promise(b)
        }
    });
    var Qb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        m = new RegExp("^(?:([+-])=|)(" + Qb + ")([a-z%]*)$", "i"),
        Ga = ["Top", "Right", "Bottom", "Left"],
        g = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && c.contains(a.ownerDocument, a) && "none" === c.css(a, "display")
        },
        La = function(a, b, c, e) {
            var d, f = {};
            for (d in b) f[d] = a.style[d], a.style[d] = b[d];
            c = c.apply(a, e || []);
            for (d in b) a.style[d] = f[d];
            return c
        },
        Wa = {};
    c.fn.extend({
        show: function() {
            return X(this, !0)
        },
        hide: function() {
            return X(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                g(this) ? c(this).show() : c(this).hide()
            })
        }
    });
    var Jb = /^(?:checkbox|radio)$/i,
        Nb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Sb = /^$|\/(?:java|ecma)script/i,
        Qa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qa.optgroup = Qa.option;
    Qa.tbody = Qa.tfoot = Qa.colgroup = Qa.caption = Qa.thead;
    Qa.th = Qa.td;
    var Vb = /<|&#?\w+;/;
    ! function() {
        var a = J.createDocumentFragment().appendChild(J.createElement("div")),
            b = J.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        ia.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        ia.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }();
    var Mb = J.documentElement,
        Zb = /^key/,
        Hb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ib = /^([^.]*)(?:\.(.+)|)/;
    c.event = {
        global: {},
        add: function(a, b, e, f, g) {
            var d, n, k, z, D, h, l, m;
            if (z = ta.get(a))
                for (e.handler && (d = e, e = d.handler, g = d.selector), g && c.find.matchesSelector(Mb, g), e.guid || (e.guid = c.guid++), (k = z.events) || (k = z.events = {}), (n = z.handle) || (n = z.handle = function(b) {
                        return "undefined" != typeof c && c.event.triggered !== b.type ? c.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(ib) || [""], z = b.length; z--;) {
                    var S = Ib.exec(b[z]) || [];
                    var p = m = S[1];
                    S = (S[2] || "").split(".").sort();
                    p && (h = c.event.special[p] || {}, p = (g ? h.delegateType : h.bindType) || p, h = c.event.special[p] || {}, D = c.extend({
                        type: p,
                        origType: m,
                        data: f,
                        handler: e,
                        guid: e.guid,
                        selector: g,
                        needsContext: g && c.expr.match.needsContext.test(g),
                        namespace: S.join(".")
                    }, d), (l = k[p]) || (l = k[p] = [], l.delegateCount = 0, h.setup && !1 !== h.setup.call(a, f, S, n) || a.addEventListener && a.addEventListener(p, n)), h.add && (h.add.call(a, D), D.handler.guid || (D.handler.guid = e.guid)), g ? l.splice(l.delegateCount++, 0, D) : l.push(D), c.event.global[p] = !0)
                }
        },
        remove: function(a, b, e, f, g) {
            var d, n, k, z, D, h, l, m, S = ta.hasData(a) && ta.get(a);
            if (S && (z = S.events)) {
                b = (b || "").match(ib) || [""];
                for (D = b.length; D--;)
                    if (k = Ib.exec(b[D]) || [], h = m = k[1], l = (k[2] || "").split(".").sort(), h) {
                        var p = c.event.special[h] || {};
                        h = (f ? p.delegateType : p.bindType) || h;
                        var r = z[h] || [];
                        k = k[2] && new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (n = d = r.length; d--;) {
                            var u = r[d];
                            !g && m !== u.origType || e && e.guid !== u.guid || k && !k.test(u.namespace) || f && f !== u.selector && ("**" !== f || !u.selector) || (r.splice(d, 1), u.selector && r.delegateCount--, p.remove && p.remove.call(a, u))
                        }
                        n && !r.length && (p.teardown && !1 !== p.teardown.call(a, l, S.handle) || c.removeEvent(a, h, S.handle), delete z[h])
                    } else
                        for (h in z) c.event.remove(a, h + b[D], e, f, !0);
                c.isEmptyObject(z) && ta.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = c.event.fix(a),
                d, e, f, g, k = Array(arguments.length);
            var h = (ta.get(this, "events") || {})[b.type] || [];
            var l = c.event.special[b.type] || {};
            k[0] = b;
            for (d = 1; d < arguments.length; d++) k[d] = arguments[d];
            if (b.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, b)) {
                var m = c.event.handlers.call(this, b, h);
                for (d = 0;
                    (f = m[d++]) && !b.isPropagationStopped();)
                    for (b.currentTarget = f.elem, h = 0;
                        (g = f.handlers[h++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((c.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, k), void 0 !== e && !1 === (b.result = e) && (b.preventDefault(), b.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var d, e = [],
                f = b.delegateCount,
                n = a.target;
            if (f && n.nodeType && !("click" === a.type && 1 <= a.button))
                for (; n !== this; n = n.parentNode || this)
                    if (1 === n.nodeType && ("click" !== a.type || !0 !== n.disabled)) {
                        var g = [];
                        var k = {};
                        for (d = 0; d < f; d++) {
                            var h = b[d];
                            var l = h.selector + " ";
                            void 0 === k[l] && (k[l] = h.needsContext ? -1 < c(l, this).index(n) : c.find(l, this, null, [n]).length);
                            k[l] && g.push(h)
                        }
                        g.length && e.push({
                            elem: n,
                            handlers: g
                        })
                    }
            return n = this, f < b.length && e.push({
                elem: n,
                handlers: b.slice(f)
            }), e
        },
        addProp: function(a, b) {
            Object.defineProperty(c.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: c.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[c.expando] ? a : new c.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== v() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === v() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ca(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return ca(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    };
    c.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    };
    c.Event = function(a, b) {
        return this instanceof c.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? K : l, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && c.extend(this, b), this.timeStamp = a && a.timeStamp || c.now(), void(this[c.expando] = !0)) : new c.Event(a, b)
    };
    c.Event.prototype = {
        constructor: c.Event,
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = K;
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = K;
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = K;
            a && !this.isSimulated && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    c.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && Zb.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && Hb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, c.event.addProp);
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        c.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var d, e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === this || c.contains(this, e)) || (a.type = f.origType, d = f.handler.apply(this, arguments), a.type = b), d
            }
        }
    });
    c.fn.extend({
        on: function(a, b, c, e) {
            return ea(this, a, b, c, e)
        },
        one: function(a, b, c, e) {
            return ea(this, a, b, c, e, 1)
        },
        off: function(a, b, e) {
            var d, f;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, c(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, b, a[f]);
                return this
            }
            return !1 !== b && "function" != typeof b || (e = b, b = void 0), !1 === e && (e = l), this.each(function() {
                c.event.remove(this, a, e, b)
            })
        }
    });
    var Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        $a = /<script|<style|<link/i,
        ac = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $b = /^true\/(.*)/,
        nb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    c.extend({
        htmlPrefilter: function(a) {
            return a.replace(Yb, "<$1></$2>")
        },
        clone: function(a, b, e) {
            var d, f = a.cloneNode(!0),
                n = c.contains(a.ownerDocument, a);
            if (!(ia.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
                var g = h(f);
                var k = h(a);
                var D = 0;
                for (d = k.length; D < d; D++) {
                    var l = k[D],
                        m = g[D],
                        r = m.nodeName.toLowerCase();
                    "input" === r && Jb.test(l.type) ? m.checked = l.checked : "input" !== r && "textarea" !== r || (m.defaultValue = l.defaultValue)
                }
            }
            if (b)
                if (e)
                    for (k = k || h(a), g = g || h(f), D = 0, d = k.length; D < d; D++) R(k[D], g[D]);
                else R(a, f);
            return g = h(f, "script"), 0 < g.length && p(g, !n && h(a, "script")), f
        },
        cleanData: function(a) {
            for (var b, d, e, f = c.event.special, g = 0; void 0 !== (d = a[g]); g++)
                if (Rb(d)) {
                    if (b = d[ta.expando]) {
                        if (b.events)
                            for (e in b.events) f[e] ? c.event.remove(d, e) : c.removeEvent(d, e, b.handle);
                        d[ta.expando] = void 0
                    }
                    d[gb.expando] && (d[gb.expando] = void 0)
                }
        }
    });
    c.fn.extend({
        detach: function(a) {
            return vb(this, a, !0)
        },
        remove: function(a) {
            return vb(this, a)
        },
        text: function(a) {
            return zb(this, function(a) {
                return void 0 === a ? c.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ba(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || P(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return ba(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = P(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ba(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ba(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (c.cleanData(h(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return c.clone(this, a, b)
            })
        },
        html: function(a) {
            return zb(this, function(a) {
                var b = this[0] || {},
                    d = 0,
                    e = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !$a.test(a) && !Qa[(Nb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = c.htmlPrefilter(a);
                    try {
                        for (; d < e; d++) b = this[d] || {}, 1 === b.nodeType && (c.cleanData(h(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (aa) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ba(this, arguments, function(b) {
                var d = this.parentNode;
                0 > c.inArray(this, a) && (c.cleanData(h(this)), d && d.replaceChild(b, this))
            }, a)
        }
    });
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        c.fn[a] = function(a) {
            for (var d = [], e = c(a), f = e.length - 1, n = 0; n <= f; n++) a = n === f ? this : this.clone(!0), c(e[n])[b](a), Ra.apply(d, a.get());
            return this.pushStack(d)
        }
    });
    var a = /^margin/,
        e = new RegExp("^(" + Qb + ")(?!px)[a-z%]+$", "i"),
        w = function(a) {
            var b = a.ownerDocument.defaultView;
            return b && b.opener || (b = t), b.getComputedStyle(a)
        };
    ! function() {
        function a() {
            if (h) {
                h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                h.innerHTML = "";
                Mb.appendChild(k);
                var a = t.getComputedStyle(h);
                b = "1%" !== a.top;
                g = "2px" === a.marginLeft;
                e = "4px" === a.width;
                h.style.marginRight = "50%";
                f = "4px" === a.marginRight;
                Mb.removeChild(k);
                h = null
            }
        }
        var b, e, f, g, k = J.createElement("div"),
            h = J.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ia.clearCloneStyle = "content-box" === h.style.backgroundClip, k.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", k.appendChild(h), c.extend(ia, {
            pixelPosition: function() {
                return a(), b
            },
            boxSizingReliable: function() {
                return a(), e
            },
            pixelMarginRight: function() {
                return a(), f
            },
            reliableMarginLeft: function() {
                return a(), g
            }
        }))
    }();
    var r = /^(none|table(?!-c[ea]).+)/,
        x = /^--/,
        k = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ab = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        y = ["Webkit", "Moz", "ms"],
        Q = J.createElement("div").style;
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) return a = Ia(a, "opacity"), "" === a ? "1" : a
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, e, f) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, n, g, k = c.camelCase(b),
                    h = x.test(b),
                    z = a.style;
                return h || (b = wb(k)), g = c.cssHooks[b] || c.cssHooks[k], void 0 === e ? g && "get" in g && void 0 !== (d = g.get(a, !1, f)) ? d : z[b] : (n = typeof e, "string" === n && (d = m.exec(e)) && d[1] && (e = da(a, b, d), n = "number"), null != e && e === e && ("number" === n && (e += d && d[3] || (c.cssNumber[k] ? "" : "px")), ia.clearCloneStyle || "" !== e || 0 !== b.indexOf("background") || (z[b] = "inherit"), g && "set" in g && void 0 === (e = g.set(a, e, f)) || (h ? z.setProperty(b, e) : z[b] = e)), void 0)
            }
        },
        css: function(a, b, e, f) {
            var d, n, g, k = c.camelCase(b);
            return x.test(b) || (b = wb(k)), g = c.cssHooks[b] || c.cssHooks[k], g && "get" in g && (d = g.get(a, !0, e)), void 0 === d && (d = Ia(a, b, f)), "normal" === d && b in Ab && (d = Ab[b]), "" === e || e ? (n = parseFloat(d), !0 === e || isFinite(n) ? n || 0 : d) : d
        }
    });
    c.each(["height", "width"], function(a, b) {
        c.cssHooks[b] = {
            get: function(a, d, e) {
                if (d) return !r.test(c.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? xb(a, b, e) : La(a, k, function() {
                    return xb(a, b, e)
                })
            },
            set: function(a, d, e) {
                var f, n = e && w(a);
                e = e && bb(a, b, e, "border-box" === c.css(a, "boxSizing", !1, n), n);
                return e && (f = m.exec(d)) && "px" !== (f[3] || "px") && (a.style[b] = d, d = c.css(a, b)), oa(a, d, e)
            }
        }
    });
    c.cssHooks.marginLeft = lb(ia.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Ia(a, "marginLeft")) || a.getBoundingClientRect().left - La(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    });
    c.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, e) {
        c.cssHooks[b + e] = {
            expand: function(a) {
                var c = 0,
                    d = {};
                for (a = "string" == typeof a ? a.split(" ") : [a]; 4 > c; c++) d[b + Ga[c] + e] = a[c] || a[c - 2] || a[0];
                return d
            }
        };
        a.test(b) || (c.cssHooks[b + e].set = oa)
    });
    c.fn.extend({
        css: function(a, b) {
            return zb(this, function(a, b, d) {
                var e, f = {},
                    n = 0;
                if (Array.isArray(b)) {
                    d = w(a);
                    for (e = b.length; n < e; n++) f[b[n]] = c.css(a, b[n], !1, d);
                    return f
                }
                return void 0 !== d ? c.style(a, b, d) : c.css(a, b)
            }, a, b, 1 < arguments.length)
        }
    });
    c.Tween = Ua;
    Ua.prototype = {
        constructor: Ua,
        init: function(a, b, e, f, g, k) {
            this.elem = a;
            this.prop = e;
            this.easing = g || c.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = f;
            this.unit = k || (c.cssNumber[e] ? "" : "px")
        },
        cur: function() {
            var a = Ua.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ua.propHooks._default.get(this)
        },
        run: function(a) {
            var b, d = Ua.propHooks[this.prop];
            return this.options.duration ? this.pos = b = c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : Ua.propHooks._default.set(this), this
        }
    };
    Ua.prototype.init.prototype = Ua.prototype;
    Ua.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = c.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                c.fx.step[a.prop] ? c.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[c.cssProps[a.prop]] && !c.cssHooks[a.prop] ? a.elem[a.prop] = a.now : c.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    Ua.propHooks.scrollTop = Ua.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    c.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    c.fx = Ua.prototype.init;
    c.fx.step = {};
    var F, T, Fb = /^(?:toggle|show|hide)$/,
        I = /queueHooks$/;
    c.Animation = c.extend(Va, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return da(c.elem, a, m.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            c.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(ib);
            for (var d, e = 0, f = a.length; e < f; e++) d = a[e], Va.tweeners[d] = Va.tweeners[d] || [], Va.tweeners[d].unshift(b)
        },
        prefilters: [function(a, b, e) {
            var d, f, n, k, h, l, D, m, p = "width" in b || "height" in b,
                r = this,
                u = {},
                x = a.style,
                y = a.nodeType && g(a),
                w = ta.get(a, "fxshow");
            e.queue || (k = c._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, h = k.empty.fire, k.empty.fire = function() {
                k.unqueued || h()
            }), k.unqueued++, r.always(function() {
                r.always(function() {
                    k.unqueued--;
                    c.queue(a, "fx").length || k.empty.fire()
                })
            }));
            for (d in b)
                if (f = b[d], Fb.test(f)) {
                    if (delete b[d], n = n || "toggle" === f, f === (y ? "hide" : "show")) {
                        if ("show" !== f || !w || void 0 === w[d]) continue;
                        y = !0
                    }
                    u[d] = w && w[d] || c.style(a, d)
                }
            if (l = !c.isEmptyObject(b), l || !c.isEmptyObject(u))
                for (d in p && 1 === a.nodeType && (e.overflow = [x.overflow, x.overflowX, x.overflowY], D = w && w.display, null == D && (D = ta.get(a, "display")), m = c.css(a, "display"), "none" === m && (D ? m = D : (X([a], !0), D = a.style.display || D, m = c.css(a, "display"), X([a]))), ("inline" === m || "inline-block" === m && null != D) && "none" === c.css(a, "float") && (l || (r.done(function() {
                        x.display = D
                    }), null == D && (m = x.display, D = "none" === m ? "" : m)), x.display = "inline-block")), e.overflow && (x.overflow = "hidden", r.always(function() {
                        x.overflow = e.overflow[0];
                        x.overflowX = e.overflow[1];
                        x.overflowY = e.overflow[2]
                    })), l = !1, u) l || (w ? "hidden" in w && (y = w.hidden) : w = ta.access(a, "fxshow", {
                    display: D
                }), n && (w.hidden = !y), y && X([a], !0), r.done(function() {
                    y || X([a]);
                    ta.remove(a, "fxshow");
                    for (d in u) c.style(a, d, u[d])
                })), l = qb(y ? w[d] : 0, d, r), d in w || (w[d] = l.start, y && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(a, b) {
            b ? Va.prefilters.unshift(a) : Va.prefilters.push(a)
        }
    });
    c.speed = function(a, b, e) {
        var d = a && "object" == typeof a ? c.extend({}, a) : {
            complete: e || !e && b || c.isFunction(a) && a,
            duration: a,
            easing: e && b || b && !c.isFunction(b) && b
        };
        return c.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in c.fx.speeds ? d.duration = c.fx.speeds[d.duration] : d.duration = c.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            c.isFunction(d.old) && d.old.call(this);
            d.queue && c.dequeue(this, d.queue)
        }, d
    };
    c.fn.extend({
        fadeTo: function(a, b, c, e) {
            return this.filter(g).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, e)
        },
        animate: function(a, b, e, f) {
            var d = c.isEmptyObject(a),
                n = c.speed(b, e, f);
            b = function() {
                var b = Va(this, c.extend({}, a), n);
                (d || ta.get(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, d || !1 === n.queue ? this.each(b) : this.queue(n.queue, b)
        },
        stop: function(a, b, e) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(e)
            };
            return "string" != typeof a && (e = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    f = null != a && a + "queueHooks",
                    n = c.timers,
                    g = ta.get(this);
                if (f) g[f] && g[f].stop && d(g[f]);
                else
                    for (f in g) g[f] && g[f].stop && I.test(f) && d(g[f]);
                for (f = n.length; f--;) n[f].elem !== this || null != a && n[f].queue !== a || (n[f].anim.stop(e), b = !1, n.splice(f, 1));
                !b && e || c.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b = ta.get(this),
                    d = b[a + "queue"];
                var e = b[a + "queueHooks"];
                var f = c.timers,
                    g = d ? d.length : 0;
                b.finish = !0;
                c.queue(this, a, []);
                e && e.stop && e.stop.call(this, !0);
                for (e = f.length; e--;) f[e].elem === this && f[e].queue === a && (f[e].anim.stop(!0), f.splice(e, 1));
                for (e = 0; e < g; e++) d[e] && d[e].finish && d[e].finish.call(this);
                delete b.finish
            })
        }
    });
    c.each(["toggle", "show", "hide"], function(a, b) {
        var d = c.fn[b];
        c.fn[b] = function(a, c, e) {
            return null == a || "boolean" == typeof a ? d.apply(this, arguments) : this.animate(jb(b, !0), a, c, e)
        }
    });
    c.each({
        slideDown: jb("show"),
        slideUp: jb("hide"),
        slideToggle: jb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        c.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    });
    c.timers = [];
    c.fx.tick = function() {
        var a = 0,
            b = c.timers;
        for (F = c.now(); a < b.length; a++) {
            var e = b[a];
            e() || b[a] !== e || b.splice(a--, 1)
        }
        b.length || c.fx.stop();
        F = void 0
    };
    c.fx.timer = function(a) {
        c.timers.push(a);
        c.fx.start()
    };
    c.fx.interval = 13;
    c.fx.start = function() {
        T || (T = !0, Db())
    };
    c.fx.stop = function() {
        T = null
    };
    c.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    c.fn.delay = function(a, b) {
        return a = c.fx ? c.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = t.setTimeout(b, a);
            c.stop = function() {
                t.clearTimeout(d)
            }
        })
    };
    (function() {
        var a = J.createElement("input"),
            b = J.createElement("select").appendChild(J.createElement("option"));
        a.type = "checkbox";
        ia.checkOn = "" !== a.value;
        ia.optSelected = b.selected;
        a = J.createElement("input");
        a.value = "t";
        a.type = "radio";
        ia.radioValue = "t" === a.value
    })();
    var Ub = c.expr.attrHandle;
    c.fn.extend({
        attr: function(a, b) {
            return zb(this, c.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.removeAttr(this, a)
            })
        }
    });
    c.extend({
        attr: function(a, b, e) {
            var d, f, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) return "undefined" == typeof a.getAttribute ? c.prop(a, b, e) : (1 === g && c.isXMLDoc(a) || (f = c.attrHooks[b.toLowerCase()] || (c.expr.match.bool.test(b) ? ra : void 0)), void 0 !== e ? null === e ? void c.removeAttr(a, b) : f && "set" in f && void 0 !== (d = f.set(a, e, b)) ? d : (a.setAttribute(b, e + ""), e) : f && "get" in f && null !== (d = f.get(a, b)) ? d : (d = c.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ia.radioValue && "radio" === b && ca(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c = 0,
                d = b && b.match(ib);
            if (d && 1 === a.nodeType)
                for (; b = d[c++];) a.removeAttribute(b)
        }
    });
    var ra = {
        set: function(a, b, e) {
            return !1 === b ? c.removeAttr(a, e) : a.setAttribute(e, e), e
        }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var d = Ub[b] || c.find.attr;
        Ub[b] = function(a, b, c) {
            var e, f, g = b.toLowerCase();
            return c || (f = Ub[g], Ub[g] = e, e = null != d(a, b, c) ? g : null, Ub[g] = f), e
        }
    });
    var la = /^(?:input|select|textarea|button)$/i,
        ha = /^(?:a|area)$/i;
    c.fn.extend({
        prop: function(a, b) {
            return zb(this, c.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[c.propFix[a] || a]
            })
        }
    });
    c.extend({
        prop: function(a, b, e) {
            var d, f, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) return 1 === g && c.isXMLDoc(a) || (b = c.propFix[b] || b, f = c.propHooks[b]), void 0 !== e ? f && "set" in f && void 0 !== (d = f.set(a, e, b)) ? d : a[b] = e : f && "get" in f && null !== (d = f.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = c.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : la.test(a.nodeName) || ha.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    ia.optSelected || (c.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex, null
        },
        set: function(a) {
            a = a.parentNode;
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex)
        }
    });
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        c.propFix[this.toLowerCase()] = this
    });
    c.fn.extend({
        addClass: function(a) {
            var b, d, e, f, g, k, h = 0;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).addClass(a.call(this, b, cb(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(ib) || []; d = this[h++];)
                    if (f = cb(d), e = 1 === d.nodeType && " " + fb(f) + " ") {
                        for (k = 0; g = b[k++];) 0 > e.indexOf(" " + g + " ") && (e += g + " ");
                        e = fb(e);
                        f !== e && d.setAttribute("class", e)
                    }
            return this
        },
        removeClass: function(a) {
            var b, d, e, f, g, k, h = 0;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).removeClass(a.call(this, b, cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(ib) || []; d = this[h++];)
                    if (f = cb(d), e = 1 === d.nodeType && " " + fb(f) + " ") {
                        for (k = 0; g = b[k++];)
                            for (; - 1 < e.indexOf(" " + g + " ");) e = e.replace(" " + g + " ", " ");
                        e = fb(e);
                        f !== e && d.setAttribute("class", e)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var d = typeof a;
            return "boolean" == typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : c.isFunction(a) ? this.each(function(d) {
                c(this).toggleClass(a.call(this, d, cb(this), b), b)
            }) : this.each(function() {
                var b, e;
                if ("string" === d) {
                    var f = 0;
                    var g = c(this);
                    for (e = a.match(ib) || []; b = e[f++];) g.hasClass(b) ? g.removeClass(b) : g.addClass(b)
                } else void 0 !== a && "boolean" !== d || (b = cb(this), b && ta.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : ta.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + fb(cb(b)) + " ").indexOf(a)) return !0;
            return !1
        }
    });
    var B = /\r/g;
    c.fn.extend({
        val: function(a) {
            var b, d, e, f = this[0];
            if (arguments.length) return e = c.isFunction(a), this.each(function(d) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, d, c(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : Array.isArray(f) && (f = c.map(f, function(a) {
                    return null == a ? "" : a + ""
                })), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, f, "value") || (this.value = f))
            });
            if (f) return b = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()], b && "get" in b && void 0 !== (d = b.get(f, "value")) ? d : (d = f.value, "string" == typeof d ? d.replace(B, "") : null == d ? "" : d)
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = c.find.attr(a, "value");
                    return null != b ? b : fb(c.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        k = g ? null : [],
                        h = g ? f + 1 : e.length;
                    for (d = 0 > f ? h : g ? f : 0; d < h; d++)
                        if (b = e[d], !(!b.selected && d !== f || b.disabled || b.parentNode.disabled && ca(b.parentNode, "optgroup"))) {
                            if (a = c(b).val(), g) return a;
                            k.push(a)
                        }
                    return k
                },
                set: function(a, b) {
                    for (var d, e = a.options, f = c.makeArray(b), g = e.length; g--;) b = e[g], (b.selected = -1 < c.inArray(c.valHooks.option.get(b), f)) && (d = !0);
                    return d || (a.selectedIndex = -1), f
                }
            }
        }
    });
    c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = -1 < c.inArray(c(a).val(), b)
            }
        };
        ia.checkOn || (c.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var C = /^(?:focusinfocus|focusoutblur)$/;
    c.extend(c.event, {
        trigger: function(a, b, e, f) {
            var d, g, k, n, h, l = [e || J],
                m = Ma.call(a, "type") ? a.type : a;
            var p = Ma.call(a, "namespace") ? a.namespace.split(".") : [];
            if (d = g = e = e || J, 3 !== e.nodeType && 8 !== e.nodeType && !C.test(m + c.event.triggered) && (-1 < m.indexOf(".") && (p = m.split("."), m = p.shift(), p.sort()), k = 0 > m.indexOf(":") && "on" + m, a = a[c.expando] ? a : new c.Event(m, "object" == typeof a && a), a.isTrigger = f ? 2 : 3, a.namespace = p.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = e), b = null == b ? [a] : c.makeArray(b, [a]), h = c.event.special[m] || {}, f || !h.trigger || !1 !== h.trigger.apply(e, b))) {
                if (!f && !h.noBubble && !c.isWindow(e)) {
                    var z = h.delegateType || m;
                    for (C.test(z + m) || (d = d.parentNode); d; d = d.parentNode) l.push(d), g = d;
                    g === (e.ownerDocument || J) && l.push(g.defaultView || g.parentWindow || t)
                }
                for (p = 0;
                    (d = l[p++]) && !a.isPropagationStopped();) a.type = 1 < p ? z : h.bindType || m, (n = (ta.get(d, "events") || {})[a.type] && ta.get(d, "handle")) && n.apply(d, b), (n = k && d[k]) && n.apply && Rb(d) && (a.result = n.apply(d, b), !1 === a.result && a.preventDefault());
                return a.type = m, f || a.isDefaultPrevented() || h._default && !1 !== h._default.apply(l.pop(), b) || !Rb(e) || k && c.isFunction(e[m]) && !c.isWindow(e) && (g = e[k], g && (e[k] = null), c.event.triggered = m, e[m](), c.event.triggered = void 0, g && (e[k] = g)), a.result
            }
        },
        simulate: function(a, b, e) {
            a = c.extend(new c.Event, e, {
                type: a,
                isSimulated: !0
            });
            c.event.trigger(a, null, b)
        }
    });
    c.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var d = this[0];
            if (d) return c.event.trigger(a, b, d, !0)
        }
    });
    c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        c.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    c.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    ia.focusin = "onfocusin" in t;
    ia.focusin || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var d = function(a) {
            c.event.simulate(b, a.target, c.event.fix(a))
        };
        c.event.special[b] = {
            setup: function() {
                var c = this.ownerDocument || this,
                    e = ta.access(c, b);
                e || c.addEventListener(a, d, !0);
                ta.access(c, b, (e || 0) + 1)
            },
            teardown: function() {
                var c = this.ownerDocument || this,
                    e = ta.access(c, b) - 1;
                e ? ta.access(c, b, e) : (c.removeEventListener(a, d, !0), ta.remove(c, b))
            }
        }
    });
    var A = t.location,
        N = c.now(),
        Pa = /\?/;
    c.parseXML = function(a) {
        if (!a || "string" != typeof a) return null;
        try {
            var b = (new t.DOMParser).parseFromString(a, "text/xml")
        } catch (D) {
            b = void 0
        }
        return b && !b.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a), b
    };
    var hb = /\[\]$/,
        na = /\r?\n/g,
        W = /^(?:submit|button|image|reset|file)$/i,
        U = /^(?:input|select|textarea|keygen)/i;
    c.param = function(a, b) {
        var d, e = [],
            f = function(a, b) {
                b = c.isFunction(b) ? b() : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == b ? "" : b)
            };
        if (Array.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) yb(d, a[d], b, f);
        return e.join("&")
    };
    c.fn.extend({
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = c.prop(this, "elements");
                return a ? c.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !c(this).is(":disabled") && U.test(this.nodeName) && !W.test(a) && (this.checked || !Jb.test(a))
            }).map(function(a, b) {
                a = c(this).val();
                return null == a ? null : Array.isArray(a) ? c.map(a, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(na, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: a.replace(na, "\r\n")
                }
            }).get()
        }
    });
    var rc = /%20/g,
        sc = /#.*$/,
        ma = /([?&])_=[^&]*/,
        tc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        za = /^(?:GET|HEAD)$/,
        uc = /^\/\//,
        lc = {},
        cc = {},
        mc = "*/".concat("*"),
        tb = J.createElement("a");
    tb.href = A.href;
    c.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: A.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(A.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": mc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": c.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? pb(pb(a, c.ajaxSettings), b) : pb(c.ajaxSettings, a)
        },
        ajaxPrefilter: u(lc),
        ajaxTransport: u(cc),
        ajax: function(a, b) {
            function d(a, b, d, g) {
                var h, l, z, D = b;
                if (!M) {
                    M = !0;
                    k && t.clearTimeout(k);
                    e = void 0;
                    f = g || "";
                    v.readyState = 0 < a ? 4 : 0;
                    g = 200 <= a && 300 > a || 304 === a;
                    if (d) {
                        var w = m;
                        for (var A = v, B, C, H, G, E = w.contents, R = w.dataTypes;
                            "*" === R[0];) R.shift(), void 0 === B && (B = w.mimeType || A.getResponseHeader("Content-Type"));
                        if (B)
                            for (C in E)
                                if (E[C] && E[C].test(B)) {
                                    R.unshift(C);
                                    break
                                }
                        if (R[0] in d) H = R[0];
                        else {
                            for (C in d) {
                                if (!R[0] || w.converters[C + " " + R[0]]) {
                                    H = C;
                                    break
                                }
                                G || (G = C)
                            }
                            H = H || G
                        }
                        d = H ? (H !== R[0] && R.unshift(H), d[H]) : void 0;
                        w = d
                    }
                    a: {
                        d = m;
                        B = w;
                        C = v;
                        H = g;
                        var q, P, I;
                        w = {};
                        A = d.dataTypes.slice();
                        if (A[1])
                            for (q in d.converters) w[q.toLowerCase()] = d.converters[q];
                        for (G = A.shift(); G;)
                            if (d.responseFields[G] && (C[d.responseFields[G]] = B), !I && H && d.dataFilter && (B = d.dataFilter(B, d.dataType)), I = G, G = A.shift())
                                if ("*" === G) G = I;
                                else if ("*" !== I && I !== G) {
                            if (q = w[I + " " + G] || w["* " + G], !q)
                                for (K in w)
                                    if (P = K.split(" "), P[1] === G && (q = w[I + " " + P[0]] || w["* " + P[0]])) {
                                        !0 === q ? q = w[K] : !0 !== w[K] && (G = P[0], A.unshift(P[1]));
                                        break
                                    }
                            if (!0 !== q)
                                if (q && d["throws"]) B = q(B);
                                else try {
                                    B = q(B)
                                } catch (wc) {
                                    var K = {
                                        state: "parsererror",
                                        error: q ? wc : "No conversion from " + I + " to " + G
                                    };
                                    break a
                                }
                        }
                        K = {
                            state: "success",
                            data: B
                        }
                    }
                    w = K;
                    g ? (m.ifModified && (z = v.getResponseHeader("Last-Modified"), z && (c.lastModified[F] = z), z = v.getResponseHeader("etag"), z && (c.etag[F] = z)), 204 === a || "HEAD" === m.type ? D = "nocontent" : 304 === a ? D = "notmodified" : (D = w.state, h = w.data, l = w.error, g = !l)) : (l = D, !a && D || (D = "error", 0 > a && (a = 0)));
                    v.status = a;
                    v.statusText = (b || D) + "";
                    g ? u.resolveWith(p, [h, D, v]) : u.rejectWith(p, [v, D, l]);
                    v.statusCode(y);
                    y = void 0;
                    n && r.trigger(g ? "ajaxSuccess" : "ajaxError", [v, m, g ? h : l]);
                    x.fireWith(p, [v, D]);
                    n && (r.trigger("ajaxComplete", [v, m]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, g, k, n, h, l, m = c.ajaxSetup({}, b),
                p = m.context || m,
                r = m.context && (p.nodeType || p.jquery) ? c(p) : c.event,
                u = c.Deferred(),
                x = c.Callbacks("once memory"),
                y = m.statusCode || {},
                w = {},
                B = {},
                C = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (M) {
                            if (!g)
                                for (g = {}; b = tc.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return M ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == M && (a = B[a.toLowerCase()] = B[a.toLowerCase()] || a, w[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == M && (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (M) v.always(a[v.status]);
                            else
                                for (b in a) y[b] = [y[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        a = a || C;
                        return e && e.abort(a), d(0, a), this
                    }
                };
            if (u.promise(v), m.url = ((a || m.url || A.href) + "").replace(uc, A.protocol + "//"), m.type = b.method || b.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(ib) || [""], null == m.crossDomain) {
                a = J.createElement("a");
                try {
                    a.href = m.url, a.href = a.href, m.crossDomain = tb.protocol + "//" + tb.host != a.protocol + "//" + a.host
                } catch (dc) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = c.param(m.data, m.traditional)), ob(lc, m, b, v), M) return v;
            (n = c.event && m.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
            m.type = m.type.toUpperCase();
            m.hasContent = !za.test(m.type);
            var F = m.url.replace(sc, "");
            m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(rc, "+")) : (l = m.url.slice(F.length), m.data && (F += (Pa.test(F) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (F = F.replace(ma, "$1"), l = (Pa.test(F) ? "&" : "?") + "_=" + N++ + l), m.url = F + l);
            m.ifModified && (c.lastModified[F] && v.setRequestHeader("If-Modified-Since", c.lastModified[F]), c.etag[F] && v.setRequestHeader("If-None-Match", c.etag[F]));
            (m.data && m.hasContent && !1 !== m.contentType || b.contentType) && v.setRequestHeader("Content-Type", m.contentType);
            v.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + mc + "; q=0.01" : "") : m.accepts["*"]);
            for (h in m.headers) v.setRequestHeader(h, m.headers[h]);
            if (m.beforeSend && (!1 === m.beforeSend.call(p, v, m) || M)) return v.abort();
            if (C = "abort", x.add(m.complete), v.done(m.success), v.fail(m.error), e = ob(cc, m, b, v)) {
                if (v.readyState = 1, n && r.trigger("ajaxSend", [v, m]), M) return v;
                m.async && 0 < m.timeout && (k = t.setTimeout(function() {
                    v.abort("timeout")
                }, m.timeout));
                try {
                    var M = !1;
                    e.send(w, d)
                } catch (dc) {
                    if (M) throw dc;
                    d(-1, dc)
                }
            } else d(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, e) {
            return c.get(a, b, e, "json")
        },
        getScript: function(a, b) {
            return c.get(a, void 0, b, "script")
        }
    });
    c.each(["get", "post"], function(a, b) {
        c[b] = function(a, d, e, f) {
            return c.isFunction(d) && (f = f || e, e = d, d = void 0), c.ajax(c.extend({
                url: a,
                type: b,
                dataType: f,
                data: d,
                success: e
            }, c.isPlainObject(a) && a))
        }
    });
    c._evalUrl = function(a) {
        return c.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    c.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (c.isFunction(a) && (a = a.call(this[0])), b = c(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                c(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = c(this),
                    d = b.contents();
                d.length ? d.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = c.isFunction(a);
            return this.each(function(d) {
                c(this).wrapAll(b ? a.call(this, d) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                c(this).replaceWith(this.childNodes)
            }), this
        }
    });
    c.expr.pseudos.hidden = function(a) {
        return !c.expr.pseudos.visible(a)
    };
    c.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    };
    c.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (d) {}
    };
    var Gb = {
            0: 200,
            1223: 204
        },
        ab = c.ajaxSettings.xhr();
    ia.cors = !!ab && "withCredentials" in ab;
    ia.ajax = ab = !!ab;
    c.ajaxTransport(function(a) {
        var b, c;
        if (ia.cors || ab && !a.crossDomain) return {
            send: function(d, e) {
                var f, g = a.xhr();
                if (g.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (f in a.xhrFields) g[f] = a.xhrFields[f];
                a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType);
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d) g.setRequestHeader(f, d[f]);
                b = function(a) {
                    return function() {
                        b && (b = c = g.onload = g.onerror = g.onabort = g.onreadystatechange = null, "abort" === a ? g.abort() : "error" === a ? "number" != typeof g.status ? e(0, "error") : e(g.status, g.statusText) : e(Gb[g.status] || g.status, g.statusText, "text" !== (g.responseType || "text") || "string" != typeof g.responseText ? {
                            binary: g.response
                        } : {
                            text: g.responseText
                        }, g.getAllResponseHeaders()))
                    }
                };
                g.onload = b();
                c = g.onerror = b("error");
                void 0 !== g.onabort ? g.onabort = c : g.onreadystatechange = function() {
                    4 === g.readyState && t.setTimeout(function() {
                        b && c()
                    })
                };
                b = b("abort");
                try {
                    g.send(a.hasContent && a.data || null)
                } catch (Xa) {
                    if (b) throw Xa;
                }
            },
            abort: function() {
                b && b()
            }
        }
    });
    c.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return c.globalEval(a), a
            }
        }
    });
    c.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    c.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, d;
            return {
                send: function(e, f) {
                    b = c("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", d = function(a) {
                        b.remove();
                        d = null;
                        a && f("error" === a.type ? 404 : 200, a.type)
                    });
                    J.head.appendChild(b[0])
                },
                abort: function() {
                    d && d()
                }
            }
        }
    });
    var ub = [],
        Ta = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ub.pop() || c.expando + "_" + N++;
            return this[a] = !0, a
        }
    });
    c.ajaxPrefilter("json jsonp", function(a, b, e) {
        var d, f, g, k = !1 !== a.jsonp && (Ta.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && Ta.test(a.data) && "data");
        if (k || "jsonp" === a.dataTypes[0]) return d = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, k ? a[k] = a[k].replace(Ta, "$1" + d) : !1 !== a.jsonp && (a.url += (Pa.test(a.url) ? "&" : "?") + a.jsonp +
            "=" + d), a.converters["script json"] = function() {
            return g || c.error(d + " was not called"), g[0]
        }, a.dataTypes[0] = "json", f = t[d], t[d] = function() {
            g = arguments
        }, e.always(function() {
            void 0 === f ? c(t).removeProp(d) : t[d] = f;
            a[d] && (a.jsonpCallback = b.jsonpCallback, ub.push(d));
            g && c.isFunction(f) && f(g[0]);
            g = f = void 0
        }), "script"
    });
    ia.createHTMLDocument = function() {
        var a = J.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }();
    c.parseHTML = function(a, b, e) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (e = b, b = !1);
        var d, f, g;
        return b || (ia.createHTMLDocument ? (b = J.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = J.location.href, b.head.appendChild(d)) : b = J), f = qa.exec(a), g = !e && [], f ? [b.createElement(f[1])] : (f = M([a], b, g), g && g.length && c(g).remove(), c.merge([], f.childNodes))
    };
    c.fn.load = function(a, b, e) {
        var d, f, g, k = this,
            h = a.indexOf(" ");
        return -1 < h && (d = fb(a.slice(h)), a = a.slice(0, h)), c.isFunction(b) ? (e = b, b = void 0) : b && "object" == typeof b && (f = "POST"), 0 < k.length && c.ajax({
            url: a,
            type: f || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            g = arguments;
            k.html(d ? c("<div>").append(c.parseHTML(a)).find(d) : a)
        }).always(e && function(a, b) {
            k.each(function() {
                e.apply(this, g || [a.responseText, b, a])
            })
        }), this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        c.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    c.expr.pseudos.animated = function(a) {
        return c.grep(c.timers, function(b) {
            return a === b.elem
        }).length
    };
    c.offset = {
        setOffset: function(a, b, e) {
            var d, f, g, k = c.css(a, "position"),
                h = c(a),
                n = {};
            "static" === k && (a.style.position = "relative");
            var m = h.offset();
            var l = c.css(a, "top");
            var p = c.css(a, "left");
            ("absolute" === k || "fixed" === k) && -1 < (l + p).indexOf("auto") ? (d = h.position(), g = d.top, f = d.left) : (g = parseFloat(l) || 0, f = parseFloat(p) || 0);
            c.isFunction(b) && (b = b.call(a, e, c.extend({}, m)));
            null != b.top && (n.top = b.top - m.top + g);
            null != b.left && (n.left = b.left - m.left + f);
            "using" in b ? b.using.call(a, n) : h.css(n)
        }
    };
    c.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                c.offset.setOffset(this, a, b)
            });
            var b, d, e, f, g = this[0];
            if (g) return g.getClientRects().length ? (e = g.getBoundingClientRect(), b = g.ownerDocument, d = b.documentElement, f = b.defaultView, {
                top: e.top + f.pageYOffset - d.clientTop,
                left: e.left + f.pageXOffset - d.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, e = this[0],
                    f = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === c.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ca(a[0], "html") || (f = a.offset()), f = {
                    top: f.top + c.css(a[0], "borderTopWidth", !0),
                    left: f.left + c.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - f.top - c.css(e, "marginTop", !0),
                    left: b.left - f.left - c.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === c.css(a, "position");) a = a.offsetParent;
                return a || Mb
            })
        }
    });
    c.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var d = "pageYOffset" === b;
        c.fn[a] = function(e) {
            return zb(this, function(a, e, f) {
                var g;
                return c.isWindow(a) ? g = a : 9 === a.nodeType && (g = a.defaultView), void 0 === f ? g ? g[b] : a[e] : void(g ? g.scrollTo(d ? g.pageXOffset : f, d ? f : g.pageYOffset) : a[e] = f)
            }, a, e, arguments.length)
        }
    });
    c.each(["top", "left"], function(a, b) {
        c.cssHooks[b] = lb(ia.pixelPosition, function(a, d) {
            if (d) return d = Ia(a, b), e.test(d) ? c(a).position()[b] + "px" : d
        })
    });
    c.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        c.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(d, e) {
            c.fn[e] = function(f, g) {
                var k = arguments.length && (d || "boolean" != typeof f),
                    h = d || (!0 === f || !0 === g ? "margin" : "border");
                return zb(this, function(b, d, f) {
                    var g;
                    return c.isWindow(b) ? 0 === e.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (g = b.documentElement, Math.max(b.body["scroll" + a], g["scroll" + a], b.body["offset" + a], g["offset" + a], g["client" + a])) : void 0 === f ? c.css(b, d, h) : c.style(b, d, f, h)
                }, b, k ? f : void 0, k)
            }
        })
    });
    c.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    c.holdReady = function(a) {
        a ? c.readyWait++ : c.ready(!0)
    };
    c.isArray = Array.isArray;
    c.parseJSON = JSON.parse;
    c.nodeName = ca;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return c
    });
    var Bb = t.jQuery,
        xc = t.$;
    return c.noConflict = function(a) {
        return t.$ === c && (t.$ = xc), a && t.jQuery === c && (t.jQuery = Bb), c
    }, xa || (t.jQuery = t.$ = c), c
});
(function(t, xa) {
    "function" === typeof define && define.amd ? define(xa) : "object" === typeof exports ? module.exports = xa() : t.ResizeSensor = xa()
})("undefined" !== typeof window ? window : this, function() {
    function t(q, t) {
        var Y = Object.prototype.toString.call(q),
            V = 0,
            E = q.length;
        if ("[object Array]" === Y || "[object NodeList]" === Y || "[object HTMLCollection]" === Y || "[object Object]" === Y || "undefined" !== typeof jQuery && q instanceof jQuery || "undefined" !== typeof Elements && q instanceof Elements)
            for (; V < E; V++) t(q[V]);
        else t(q)
    }
    if ("undefined" === typeof window) return null;
    var xa = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(q) {
            return window.setTimeout(q, 20)
        },
        ua = function(q, ca) {
            function Y() {
                var q = [];
                this.add = function(t) {
                    q.push(t)
                };
                var t, Y;
                this.call = function() {
                    t = 0;
                    for (Y = q.length; t < Y; t++) q[t].call()
                };
                this.remove = function(E) {
                    var V = [];
                    t = 0;
                    for (Y = q.length; t < Y; t++) q[t] !== E && V.push(q[t]);
                    q = V
                };
                this.length = function() {
                    return q.length
                }
            }

            function V(q, t) {
                if (q)
                    if (q.resizedAttached) q.resizedAttached.add(t);
                    else {
                        q.resizedAttached = new Y;
                        q.resizedAttached.add(t);
                        q.resizeSensor = document.createElement("div");
                        q.resizeSensor.className = "resize-sensor";
                        q.resizeSensor.style.cssText = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";
                        q.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s;"></div></div><div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div></div>';
                        q.appendChild(q.resizeSensor);
                        q.resizeSensor.offsetParent !== q && (q.style.position = "relative");
                        var E = q.resizeSensor.childNodes[0],
                            V = E.childNodes[0],
                            Z = q.resizeSensor.childNodes[1],
                            ca, ua, da, X, h = q.offsetWidth,
                            p = q.offsetHeight,
                            M = function() {
                                V.style.width = "100000px";
                                V.style.height = "100000px";
                                E.scrollLeft = 1E5;
                                E.scrollTop = 1E5;
                                Z.scrollLeft = 1E5;
                                Z.scrollTop = 1E5
                            };
                        M();
                        var K = function() {
                            ua = 0;
                            ca && (h = da, p = X, q.resizedAttached && q.resizedAttached.call())
                        };
                        t = function() {
                            da = q.offsetWidth;
                            X = q.offsetHeight;
                            (ca = da != h || X != p) && !ua && (ua = xa(K));
                            M()
                        };
                        var l = function(h, l, p) {
                            h.attachEvent ? h.attachEvent("on" + l, p) : h.addEventListener(l, p)
                        };
                        l(E, "scroll", t);
                        l(Z, "scroll", t)
                    }
            }
            t(q, function(q) {
                V(q, ca)
            });
            this.detach = function(t) {
                ua.detach(q, t)
            }
        };
    ua.detach = function(q, ca) {
        t(q, function(q) {
            if (q) {
                if (q.resizedAttached && "function" == typeof ca && (q.resizedAttached.remove(ca), q.resizedAttached.length())) return;
                q.resizeSensor && (q.contains(q.resizeSensor) && q.removeChild(q.resizeSensor), delete q.resizeSensor, delete q.resizedAttached)
            }
        })
    };
    return ua
});
(function() {
    function t(h, p) {
        p || h.match(/^data:([^;]+);base64,/mi);
        h = h.replace(/^data:([^;]+);base64,/gmi, "");
        h = atob(h);
        p = h.length;
        for (var q = new ArrayBuffer(p), t = new Uint8Array(q), l = 0; l < p; l++) t[l] = h.charCodeAt(l);
        return q
    }

    function xa(h, p) {
        var q = new XMLHttpRequest;
        q.open("GET", h, !0);
        q.responseType = "blob";
        q.onload = function(h) {
            200 != this.status && 0 !== this.status || p(this.response)
        };
        q.send()
    }

    function ua(h, p) {
        function M(l) {
            var v = q(l);
            h.exifdata = v || {};
            a: if (v = new DataView(l), 255 != v.getUint8(0) || 216 != v.getUint8(1)) v = !1;
                else {
                    for (var t = 2, M = l.byteLength; t < M;) {
                        var R = v,
                            K = t;
                        if (56 === R.getUint8(K) && 66 === R.getUint8(K + 1) && 73 === R.getUint8(K + 2) && 77 === R.getUint8(K + 3) && 4 === R.getUint8(K + 4) && 4 === R.getUint8(K + 5)) {
                            R = v.getUint8(t + 7);
                            0 !== R % 2 && (R += 1);
                            0 === R && (R = 4);
                            M = t + 8 + R;
                            t = v.getUint16(t + 6 + R);
                            v = M;
                            M = new DataView(l);
                            R = {};
                            for (K = v; K < v + t;) {
                                if (28 === M.getUint8(K) && 2 === M.getUint8(K + 1)) {
                                    var E = M.getUint8(K + 2);
                                    if (E in X) {
                                        var ea = M.getInt16(K + 3);
                                        E = X[E];
                                        ea = V(M, K + 5, ea);
                                        R.hasOwnProperty(E) ? R[E] instanceof Array ? R[E].push(ea) : R[E] = [R[E], ea] : R[E] = ea
                                    }
                                }
                                K++
                            }
                            v = R;
                            break a
                        }
                        t++
                    }
                    v = void 0
                }
            h.iptcdata = v || {};
            if (fa.isXmpEnabled) {
                a: if ("DOMParser" in self)
                    if (v = new DataView(l), 255 != v.getUint8(0) || 216 != v.getUint8(1)) var Y = !1;
                    else {
                        t = 2;
                        M = l.byteLength;
                        for (l = new DOMParser; t < M - 4;)
                            if ("http" == V(v, t, 4)) {
                                M = t - 1;
                                t = v.getUint16(t - 2) - 1;
                                v = V(v, M, t);
                                t = v.indexOf("xmpmeta>") + 8;
                                v = v.substring(v.indexOf("<x:xmpmeta"), t);
                                t = v.indexOf("x:xmpmeta") + 10;
                                v = v.slice(0, t) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
                                    v.slice(t);
                                b: {
                                    l = l.parseFromString(v, "text/xml");
                                    try {
                                        v = {};
                                        if (0 < l.children.length)
                                            for (t = 0; t < l.children.length; t++) {
                                                var ca = l.children.item(t),
                                                    da = ca.attributes,
                                                    ua;
                                                for (ua in da) {
                                                    var xa = da[ua],
                                                        Ca = xa.nodeName,
                                                        Sa = xa.nodeValue;
                                                    void 0 !== Ca && (v[Ca] = Sa)
                                                }
                                                var Za = ca.nodeName;
                                                if ("undefined" == typeof v[Za]) v[Za] = Z(ca);
                                                else {
                                                    if ("undefined" == typeof v[Za].push) {
                                                        var Ya = v[Za];
                                                        v[Za] = [];
                                                        v[Za].push(Ya)
                                                    }
                                                    v[Za].push(Z(ca))
                                                }
                                            } else v = l.textContent;
                                        Y = v;
                                        break b
                                    } catch (qb) {
                                        console.log(qb.message)
                                    }
                                    Y = void 0
                                }
                                break a
                            } else t++;
                        Y = void 0
                    } else Y = void 0;h.xmpdata = Y || {}
            }
            p && p.call(h)
        }
        if (h.src)
            if (/^data:/i.test(h.src)) {
                var K = t(h.src);
                M(K)
            } else if (/^blob:/i.test(h.src)) {
            var l = new FileReader;
            l.onload = function(h) {
                M(h.target.result)
            };
            xa(h.src, function(h) {
                l.readAsArrayBuffer(h)
            })
        } else {
            var v = new XMLHttpRequest;
            v.onload = function() {
                if (200 == this.status || 0 === this.status) M(v.response);
                else throw "Could not load image";
                v = null
            };
            v.open("GET", h.src, !0);
            v.responseType = "arraybuffer";
            v.send(null)
        } else self.FileReader && (h instanceof self.Blob || h instanceof self.File) && (l = new FileReader, l.onload = function(h) {
            M(h.target.result)
        }, l.readAsArrayBuffer(h))
    }

    function q(h) {
        var p = new DataView(h);
        if (255 != p.getUint8(0) || 216 != p.getUint8(1)) return !1;
        var q = 2;
        h = h.byteLength;
        for (var t; q < h;) {
            if (255 != p.getUint8(q)) return !1;
            t = p.getUint8(q + 1);
            if (225 == t) return E(p, q + 4, p.getUint16(q + 2) - 2);
            q += 2 + p.getUint16(q + 2)
        }
    }

    function ca(h, p, q, t, l) {
        var v = h.getUint16(q, !l),
            M = {},
            K;
        for (K = 0; K < v; K++) {
            var E = q + 12 * K + 2;
            var V = t[h.getUint16(E, !l)];
            M[V] = Y(h, E, p, q, l)
        }
        return M
    }

    function Y(h, p, q, t, l) {
        var v = h.getUint16(p +
            2, !l);
        t = h.getUint32(p + 4, !l);
        q = h.getUint32(p + 8, !l) + q;
        switch (v) {
            case 1:
            case 7:
                if (1 == t) return h.getUint8(p + 8, !l);
                q = 4 < t ? q : p + 8;
                p = [];
                for (v = 0; v < t; v++) p[v] = h.getUint8(q + v);
                return p;
            case 2:
                return V(h, 4 < t ? q : p + 8, t - 1);
            case 3:
                if (1 == t) return h.getUint16(p + 8, !l);
                q = 2 < t ? q : p + 8;
                p = [];
                for (v = 0; v < t; v++) p[v] = h.getUint16(q + 2 * v, !l);
                return p;
            case 4:
                if (1 == t) return h.getUint32(p + 8, !l);
                p = [];
                for (v = 0; v < t; v++) p[v] = h.getUint32(q + 4 * v, !l);
                return p;
            case 5:
                if (1 == t) {
                    var M = h.getUint32(q, !l);
                    var E = h.getUint32(q + 4, !l);
                    h = new Number(M / E);
                    h.numerator = M;
                    h.denominator = E;
                    return h
                }
                p = [];
                for (v = 0; v < t; v++) M = h.getUint32(q + 8 * v, !l), E = h.getUint32(q + 4 + 8 * v, !l), p[v] = new Number(M / E), p[v].numerator = M, p[v].denominator = E;
                return p;
            case 9:
                if (1 == t) return h.getInt32(p + 8, !l);
                p = [];
                for (v = 0; v < t; v++) p[v] = h.getInt32(q + 4 * v, !l);
                return p;
            case 10:
                if (1 == t) return h.getInt32(q, !l) / h.getInt32(q + 4, !l);
                p = [];
                for (v = 0; v < t; v++) p[v] = h.getInt32(q + 8 * v, !l) / h.getInt32(q + 4 + 8 * v, !l);
                return p
        }
    }

    function V(h, p, q) {
        var t = "";
        for (q = p + q; p < q; ++p) t += String.fromCharCode(h.getUint8(p));
        return t
    }

    function E(h, p) {
        if ("Exif" != V(h, p, 4)) return !1;
        var q = p + 6;
        if (18761 == h.getUint16(q)) var t = !1;
        else if (19789 == h.getUint16(q)) t = !0;
        else return !1;
        if (42 != h.getUint16(q + 2, !t)) return !1;
        var l = h.getUint32(q + 4, !t);
        if (8 > l) return !1;
        p = ca(h, q, q + l, Ca, t);
        if (p.ExifIFDPointer) {
            var v = ca(h, q, q + p.ExifIFDPointer, sb, t);
            for (E in v) {
                switch (E) {
                    case "LightSource":
                    case "Flash":
                    case "MeteringMode":
                    case "ExposureProgram":
                    case "SensingMethod":
                    case "SceneCaptureType":
                    case "SceneType":
                    case "CustomRendered":
                    case "WhiteBalance":
                    case "GainControl":
                    case "Contrast":
                    case "Saturation":
                    case "Sharpness":
                    case "SubjectDistanceRange":
                    case "FileSource":
                        v[E] = da[E][v[E]];
                        break;
                    case "ExifVersion":
                    case "FlashpixVersion":
                        v[E] = String.fromCharCode(v[E][0], v[E][1], v[E][2], v[E][3]);
                        break;
                    case "ComponentsConfiguration":
                        v[E] = da.Components[v[E][0]] + da.Components[v[E][1]] + da.Components[v[E][2]] + da.Components[v[E][3]]
                }
                p[E] = v[E]
            }
        }
        if (p.GPSInfoIFDPointer)
            for (E in v = ca(h, q, q + p.GPSInfoIFDPointer, Ya, t), v) {
                switch (E) {
                    case "GPSVersionID":
                        v[E] = v[E][0] + "." + v[E][1] + "." + v[E][2] + "." + v[E][3]
                }
                p[E] = v[E]
            }
        var E = t;
        l = q + l;
        t = h.getUint16(l, !E);
        if (l = h.getUint32(l + 2 + 12 * t, !E))
            if (l > h.byteLength) h = {};
            else {
                E = ca(h, q, q + l, Sa, E);
                if (E.Compression) switch (E.Compression) {
                    case 6:
                        E.JpegIFOffset && E.JpegIFByteCount && (E.blob = new Blob([new Uint8Array(h.buffer, q + E.JpegIFOffset, E.JpegIFByteCount)], {
                            type: "image/jpeg"
                        }));
                        break;
                    case 1:
                        console.log("Thumbnail image format is TIFF, which is not implemented.");
                        break;
                    default:
                        console.log("Unknown thumbnail image format '%s'", E.Compression)
                } else 2 == E.PhotometricInterpretation && console.log("Thumbnail image format is RGB, which is not implemented.");
                h = E
            } else h = {};
        p.thumbnail = h;
        return p
    }

    function Z(h) {
        var p = {};
        if (1 == h.nodeType) {
            if (0 < h.attributes.length) {
                p["@attributes"] = {};
                for (var q = 0; q < h.attributes.length; q++) {
                    var t = h.attributes.item(q);
                    p["@attributes"][t.nodeName] = t.nodeValue
                }
            }
        } else if (3 == h.nodeType) return h.nodeValue;
        if (h.hasChildNodes())
            for (q = 0; q < h.childNodes.length; q++) {
                t = h.childNodes.item(q);
                var l = t.nodeName;
                if (null == p[l]) p[l] = Z(t);
                else {
                    if (null == p[l].push) {
                        var v = p[l];
                        p[l] = [];
                        p[l].push(v)
                    }
                    p[l].push(Z(t))
                }
            }
        return p
    }
    var fa = function(h) {
        if (h instanceof fa) return h;
        if (!(this instanceof fa)) return new fa(h);
        this.EXIFwrapped = h
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = fa), exports.EXIF = fa) : this.EXIF = fa;
    var sb = fa.Tags = {
            36864: "ExifVersion",
            40960: "FlashpixVersion",
            40961: "ColorSpace",
            40962: "PixelXDimension",
            40963: "PixelYDimension",
            37121: "ComponentsConfiguration",
            37122: "CompressedBitsPerPixel",
            37500: "MakerNote",
            37510: "UserComment",
            40964: "RelatedSoundFile",
            36867: "DateTimeOriginal",
            36868: "DateTimeDigitized",
            37520: "SubsecTime",
            37521: "SubsecTimeOriginal",
            37522: "SubsecTimeDigitized",
            33434: "ExposureTime",
            33437: "FNumber",
            34850: "ExposureProgram",
            34852: "SpectralSensitivity",
            34855: "ISOSpeedRatings",
            34856: "OECF",
            37377: "ShutterSpeedValue",
            37378: "ApertureValue",
            37379: "BrightnessValue",
            37380: "ExposureBias",
            37381: "MaxApertureValue",
            37382: "SubjectDistance",
            37383: "MeteringMode",
            37384: "LightSource",
            37385: "Flash",
            37396: "SubjectArea",
            37386: "FocalLength",
            41483: "FlashEnergy",
            41484: "SpatialFrequencyResponse",
            41486: "FocalPlaneXResolution",
            41487: "FocalPlaneYResolution",
            41488: "FocalPlaneResolutionUnit",
            41492: "SubjectLocation",
            41493: "ExposureIndex",
            41495: "SensingMethod",
            41728: "FileSource",
            41729: "SceneType",
            41730: "CFAPattern",
            41985: "CustomRendered",
            41986: "ExposureMode",
            41987: "WhiteBalance",
            41988: "DigitalZoomRation",
            41989: "FocalLengthIn35mmFilm",
            41990: "SceneCaptureType",
            41991: "GainControl",
            41992: "Contrast",
            41993: "Saturation",
            41994: "Sharpness",
            41995: "DeviceSettingDescription",
            41996: "SubjectDistanceRange",
            40965: "InteroperabilityIFDPointer",
            42016: "ImageUniqueID"
        },
        Ca = fa.TiffTags = {
            256: "ImageWidth",
            257: "ImageHeight",
            34665: "ExifIFDPointer",
            34853: "GPSInfoIFDPointer",
            40965: "InteroperabilityIFDPointer",
            258: "BitsPerSample",
            259: "Compression",
            262: "PhotometricInterpretation",
            274: "Orientation",
            277: "SamplesPerPixel",
            284: "PlanarConfiguration",
            530: "YCbCrSubSampling",
            531: "YCbCrPositioning",
            282: "XResolution",
            283: "YResolution",
            296: "ResolutionUnit",
            273: "StripOffsets",
            278: "RowsPerStrip",
            279: "StripByteCounts",
            513: "JPEGInterchangeFormat",
            514: "JPEGInterchangeFormatLength",
            301: "TransferFunction",
            318: "WhitePoint",
            319: "PrimaryChromaticities",
            529: "YCbCrCoefficients",
            532: "ReferenceBlackWhite",
            306: "DateTime",
            270: "ImageDescription",
            271: "Make",
            272: "Model",
            305: "Software",
            315: "Artist",
            33432: "Copyright"
        },
        Ya = fa.GPSTags = {
            0: "GPSVersionID",
            1: "GPSLatitudeRef",
            2: "GPSLatitude",
            3: "GPSLongitudeRef",
            4: "GPSLongitude",
            5: "GPSAltitudeRef",
            6: "GPSAltitude",
            7: "GPSTimeStamp",
            8: "GPSSatellites",
            9: "GPSStatus",
            10: "GPSMeasureMode",
            11: "GPSDOP",
            12: "GPSSpeedRef",
            13: "GPSSpeed",
            14: "GPSTrackRef",
            15: "GPSTrack",
            16: "GPSImgDirectionRef",
            17: "GPSImgDirection",
            18: "GPSMapDatum",
            19: "GPSDestLatitudeRef",
            20: "GPSDestLatitude",
            21: "GPSDestLongitudeRef",
            22: "GPSDestLongitude",
            23: "GPSDestBearingRef",
            24: "GPSDestBearing",
            25: "GPSDestDistanceRef",
            26: "GPSDestDistance",
            27: "GPSProcessingMethod",
            28: "GPSAreaInformation",
            29: "GPSDateStamp",
            30: "GPSDifferential"
        },
        Sa = fa.IFD1Tags = {
            256: "ImageWidth",
            257: "ImageHeight",
            258: "BitsPerSample",
            259: "Compression",
            262: "PhotometricInterpretation",
            273: "StripOffsets",
            274: "Orientation",
            277: "SamplesPerPixel",
            278: "RowsPerStrip",
            279: "StripByteCounts",
            282: "XResolution",
            283: "YResolution",
            284: "PlanarConfiguration",
            296: "ResolutionUnit",
            513: "JpegIFOffset",
            514: "JpegIFByteCount",
            529: "YCbCrCoefficients",
            530: "YCbCrSubSampling",
            531: "YCbCrPositioning",
            532: "ReferenceBlackWhite"
        },
        da = fa.StringValues = {
            ExposureProgram: {
                0: "Not defined",
                1: "Manual",
                2: "Normal program",
                3: "Aperture priority",
                4: "Shutter priority",
                5: "Creative program",
                6: "Action program",
                7: "Portrait mode",
                8: "Landscape mode"
            },
            MeteringMode: {
                0: "Unknown",
                1: "Average",
                2: "CenterWeightedAverage",
                3: "Spot",
                4: "MultiSpot",
                5: "Pattern",
                6: "Partial",
                255: "Other"
            },
            LightSource: {
                0: "Unknown",
                1: "Daylight",
                2: "Fluorescent",
                3: "Tungsten (incandescent light)",
                4: "Flash",
                9: "Fine weather",
                10: "Cloudy weather",
                11: "Shade",
                12: "Daylight fluorescent (D 5700 - 7100K)",
                13: "Day white fluorescent (N 4600 - 5400K)",
                14: "Cool white fluorescent (W 3900 - 4500K)",
                15: "White fluorescent (WW 3200 - 3700K)",
                17: "Standard light A",
                18: "Standard light B",
                19: "Standard light C",
                20: "D55",
                21: "D65",
                22: "D75",
                23: "D50",
                24: "ISO studio tungsten",
                255: "Other"
            },
            Flash: {
                0: "Flash did not fire",
                1: "Flash fired",
                5: "Strobe return light not detected",
                7: "Strobe return light detected",
                9: "Flash fired, compulsory flash mode",
                13: "Flash fired, compulsory flash mode, return light not detected",
                15: "Flash fired, compulsory flash mode, return light detected",
                16: "Flash did not fire, compulsory flash mode",
                24: "Flash did not fire, auto mode",
                25: "Flash fired, auto mode",
                29: "Flash fired, auto mode, return light not detected",
                31: "Flash fired, auto mode, return light detected",
                32: "No flash function",
                65: "Flash fired, red-eye reduction mode",
                69: "Flash fired, red-eye reduction mode, return light not detected",
                71: "Flash fired, red-eye reduction mode, return light detected",
                73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                89: "Flash fired, auto mode, red-eye reduction mode",
                93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
            },
            SensingMethod: {
                1: "Not defined",
                2: "One-chip color area sensor",
                3: "Two-chip color area sensor",
                4: "Three-chip color area sensor",
                5: "Color sequential area sensor",
                7: "Trilinear sensor",
                8: "Color sequential linear sensor"
            },
            SceneCaptureType: {
                0: "Standard",
                1: "Landscape",
                2: "Portrait",
                3: "Night scene"
            },
            SceneType: {
                1: "Directly photographed"
            },
            CustomRendered: {
                0: "Normal process",
                1: "Custom process"
            },
            WhiteBalance: {
                0: "Auto white balance",
                1: "Manual white balance"
            },
            GainControl: {
                0: "None",
                1: "Low gain up",
                2: "High gain up",
                3: "Low gain down",
                4: "High gain down"
            },
            Contrast: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            Saturation: {
                0: "Normal",
                1: "Low saturation",
                2: "High saturation"
            },
            Sharpness: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            SubjectDistanceRange: {
                0: "Unknown",
                1: "Macro",
                2: "Close view",
                3: "Distant view"
            },
            FileSource: {
                3: "DSC"
            },
            Components: {
                0: "",
                1: "Y",
                2: "Cb",
                3: "Cr",
                4: "R",
                5: "G",
                6: "B"
            }
        },
        X = {
            120: "caption",
            110: "credit",
            25: "keywords",
            55: "dateCreated",
            80: "byline",
            85: "bylineTitle",
            122: "captionWriter",
            105: "headline",
            116: "copyright",
            15: "category"
        };
    fa.enableXmp = function() {
        fa.isXmpEnabled = !0
    };
    fa.disableXmp = function() {
        fa.isXmpEnabled = !1
    };
    fa.getData = function(h, p) {
        if ((self.Image && h instanceof self.Image || self.HTMLImageElement && h instanceof self.HTMLImageElement) && !h.complete) return !1;
        h.exifdata ? p && p.call(h) : ua(h, p);
        return !0
    };
    fa.getTag = function(h, p) {
        if (h.exifdata) return h.exifdata[p]
    };
    fa.getIptcTag = function(h, p) {
        if (h.exifdata) return h.iptcdata[p]
    };
    fa.getAllTags = function(h) {
        if (!h.exifdata) return {};
        var p;
        h = h.exifdata;
        var q = {};
        for (p in h) h.hasOwnProperty(p) && (q[p] = h[p]);
        return q
    };
    fa.getAllIptcTags = function(h) {
        if (!h.exifdata) return {};
        var p;
        h = h.iptcdata;
        var q = {};
        for (p in h) h.hasOwnProperty(p) && (q[p] = h[p]);
        return q
    };
    fa.pretty = function(h) {
        if (!h.exifdata) return "";
        var p;
        h = h.exifdata;
        var q = "";
        for (p in h) h.hasOwnProperty(p) && (q = "object" == typeof h[p] ? h[p] instanceof Number ? q + (p + " : " + h[p] + " [" + h[p].numerator + "/" + h[p].denominator + "]\r\n") : q + (p + " : [" + h[p].length + " values]\r\n") : q + (p + " : " + h[p] + "\r\n"));
        return q
    };
    fa.readFromBinaryFile = function(h) {
        return q(h)
    };
    "function" === typeof define && define.amd && define("exif-js", [], function() {
        return fa
    })
}).call(this);
var ImageProcess = function() {
        function t(t, q, ca, Y) {
            var V = new FileReader;
            V.onload = function() {
                var q = new Image;
                q.src = V.result;
                q.onload = xa.process.bind(xa, t, q, ca, Y)
            };
            V.onerror = function() {
                Y("WRONGFILEFORMAT")
            };
            V.readAsDataURL(q)
        }
        var xa = {
            read: function(ua, q, ca) {
                if (ua.files && ua.files.length) {
                    var Y = ua.files[0];
                    ua = Y.name.split(".").pop().toLowerCase(); - 1 === ["jpg", "jpeg", "png"].indexOf(ua) ? ca("WRONGFILEFORMAT") : EXIF.getData(Y, function() {
                        console.log("INFO in ImageProcess - read() - EXIF data =", EXIF.pretty(Y));
                        var V = EXIF.getTag(Y, "Orientation");
                        t(V, Y, q, ca)
                    }) || t(-1, Y, q, ca)
                } else ca("NOFILE")
            },
            process: function(t, q, ca, Y) {
                if ("number" === typeof t && 2 <= t && 8 >= t) {
                    console.log("INFO in ImageProcess - process() : image needs to be reoriented. orientation =", t);
                    Y = q.width;
                    var V = q.height,
                        E = document.createElement("canvas"); - 1 < [5, 6, 7, 8].indexOf(t) ? (console.log("INFO in ImageProcess - process() : the image needs to be 90\u00b0 rotated"), E.width = V, E.height = Y) : (E.width = Y, E.height = V);
                    var Z = E.getContext("2d");
                    switch (t) {
                        case 2:
                            Z.transform(-1, 0, 0, 1, Y, 0);
                            break;
                        case 3:
                            Z.transform(-1, 0, 0, -1, Y, V);
                            break;
                        case 4:
                            Z.transform(1, 0, 0, -1, 0, V);
                            break;
                        case 5:
                            Z.transform(0, 1, 1, 0, 0, 0);
                            break;
                        case 6:
                            Z.transform(0, 1, -1, 0, V, 0);
                            break;
                        case 7:
                            Z.transform(0, -1, -1, 0, V, Y);
                            break;
                        case 8:
                            Z.transform(0, -1, 1, 0, 0, Y);
                            break;
                        default:
                            Z.transform(1, 0, 0, 1, 0, 0)
                    }
                    Z.drawImage(q, 0, 0);
                    t = E
                } else t = q;
                ca(t)
            }
        };
        return xa
    }(),
    JeeWidget = function() {
        function t() {
            X.mode = da.realtime;
            X.canRT = !0;
            X.isRT = !0;
            Y();
            V();
            v.enabled && JEEFITAPI.do_instantDetection(v.interval, v.callback);
            Ja && (Ja(!0), Ja = !1)
        }

        function xa() {
            X.canRT = !1;
            X.isRT = !1;
            l.uploadNotice = document.getElementById("JeeWidgetUploadNotice");
            ja.toggleLoading(!1);
            if (l.uploadNotice) {
                $(l.uploadNotice).show();
                var h = document.getElementById("JeeWidgetFileInputNotice"),
                    p = document.getElementById("JeeWidgetFileInputButtonNotice");
                h && p ? ($(p).click(function(l) {
                    $(h.click())
                }), $(h).change(function(p) {
                    ja.toggleLoading(!0);
                    ImageProcess.read(h, function(h) {
                        JeefitFallback.switch_toFallbackMode(function() {
                            console.log("INFO in JeeWidget - switch_toFallbackMode() : success callback launched");
                            JeefitFallback.set_serverURL(Sa.fallbackURL);
                            $(l.uploadNotice).hide();
                            V();
                            $(l.inputFileButton).show();
                            E(h, function() {
                                X.sku && ja.load_fallback(X.sku, !1)
                            });
                            Ja && (Ja(!1), Ja = !1)
                        }, function() {
                            q("FATAL")
                        })
                    }, function(h) {
                        ja.toggleLoading(!1);
                        q(h)
                    })
                })) : q("NOFILEINPUTNOTICE")
            }
        }

        function ua() {
            q("INVALIDSKU")
        }

        function q(h) {
            ea.error ? ea.error(h) : console.log("ERROR :", h)
        }

        function ca() {
            h = $(l.container).width();
            p = $(l.container).height();
            M = Math.round(1 * h);
            K = Math.round(1 * p);
            $(l.cv).css({
                width: h + "px",
                height: p + "px"
            });
            l.cv.width = M;
            l.cv.height = K;
            X.mode === da.zero ? JEEFITAPI.set_size(M, K) : JEEFITAPI.resize(M, K)
        }

        function Y() {
            l.adjust = document.getElementById("JeeWidgetAdjust");
            l.adjust && (l.adjustNotice = document.getElementById("JeeWidgetAdjustNotice"), l.adjustExit = document.getElementById("JeeWidgetAdjustExit"), l.changeModelContainer = document.getElementById("JeeWidgetChangeModelContainer"), l.buttonResizeCanvas = document.getElementById("buttonResizeCanvas"), $(l.adjust).click(function() {
                $(l.adjust).hide();
                $(l.inputFileButton).hide();
                $(l.backToRTButton).hide();
                l.changeModelContainer && $(l.changeModelContainer).hide();
                l.buttonResizeCanvas && $(l.buttonResizeCanvas).hide();
                X.mode = da.adjust;
                l.adjustNotice.style.display = "flex";
                $(l.adjustExit).show();
                l.cv.style.cursor = "move";
                JEEFITAPI.switch_modeInteractor("movePinch")
            }), $(l.adjustExit).click(function() {
                $(l.adjust).show();
                $(l.adjustNotice).hide();
                $(l.adjustExit).hide();
                $(l.inputFileButton).show();
                X.canRT && !X.isRT && $(l.backToRTButton).show();
                l.changeModelContainer && (l.changeModelContainer.style.display = "flex");
                l.buttonResizeCanvas && $(l.buttonResizeCanvas).show();
                l.cv.style.cursor = "auto";
                X.mode = X.isRT ? X.realtime : X.fallback;
                JEEFITAPI.switch_modeInteractor("idle")
            }), $(l.adjust).show())
        }

        function V() {
            l.inputFile = document.getElementById("JeeWidgetFileInput");
            l.inputFileButton = document.getElementById("JeeWidgetFileInputButton");
            l.inputFile && l.inputFileButton && ($(l.inputFileButton).click(function(h) {
                $(l.inputFile.click())
            }), $(l.inputFile).change(function(h) {
                ja.toggleLoading(!0);
                ImageProcess.read(l.inputFile, function(h) {
                    X.isRT ? Z(h, function() {
                        X.sku && ja.load_fallback(X.sku, !1)
                    }) : E(h, function() {
                        X.sku && ja.load_fallback(X.sku, !1)
                    })
                }, function(h) {
                    ja.toggleLoading(!1);
                    q(h)
                })
            }), $(l.inputFileButton).show())
        }

        function E(h, l) {
            JeefitFallback.reset_adjust();
            JeefitFallback.detect(h, !1, function() {
                console.log("INFO in JeeWidget - detect_fallback() : detection done successfully");
                l && l()
            })
        }

        function Z(h, p) {
            if (!X.isRT) return !1;
            JeefitFallback.switch_toFallbackMode(function() {
                console.log("INFO in JeeWidget - switch_toFallbackMode() : success callback launched");
                X.isRT = !1;
                JeefitFallback.set_serverURL(Sa.fallbackURL);
                E(h, function() {
                    X.canRT && l.backToRTButton && $(l.backToRTButton).show();
                    p()
                })
            }, function() {
                q("FALLBACKUNAVAILABLE")
            })
        }

        function fa() {
            l.backToRTButton = document.getElementById("JeeWidgetBackToRealtimeButton");
            $(l.backToRTButton).click(function() {
                $(l.backToRTButton).hide();
                JeefitFallback.switch_toFullMode(function() {
                    X.isRT = !0;
                    X.mode = da.realtime
                })
            })
        }

        function sb() {
            if (!l.trackIframe) {
                var h = Sa.appstaticURL + "jeewidget/";
                l.trackIframe = document.createElement("iframe");
                l.trackIframe.width = "10";
                l.trackIframe.height = "10";
                l.trackIframe.src = h + "trackIframe.html";
                $(l.trackIframe).css({
                    position: "absolute",
                    zIndex: -1,
                    bottom: "0px",
                    right: "0px"
                }).appendTo(l.container)
            }
        }

        function Ca(h) {
            if (l.trackIframe) {
                var p = location.href.split("?").shift().split("://").pop();
                p = p.split("/").shift();
                p = p.split("www.").pop();
                l.trackIframe.contentWindow.postMessage({
                    action: "COUNTTRYONSESSION",
                    domain: p,
                    sku: h
                }, "*")
            }
        }

        function Ya(h, l, p) {
            JEEFITAPI.load_model(l.mod + ".json", l.mats, function() {
                X.mode = da.realtime;
                p && p();
                ja.toggleLoading(!1);
                Ca(h)
            }, h)
        }
        var Sa = {
                glassesDBURL: "https://glassesdb.jeeliz.com/",
                appstaticURL: "https://appstatic.jeeliz.com/",
                fallbackURL: "https://fallbackglassesdb.jeeliz.com"
            },
            da = {
                zero: -1,
                init: 0,
                fallback: 1,
                realtime: 2,
                loadingModel: 3,
                paused: 4
            },
            X = {
                canRT: !0,
                isRT: !0,
                sku: !1,
                mode: da.zero
            },
            h, p, M, K, l = {
                cv: !1,
                container: !1,
                adjust: !1,
                adjustNotice: !1,
                adjustExit: !1,
                inputFile: !1,
                inputFileButton: !1,
                inputFileButtonFallbackMessage: !1,
                uploadNotice: !1,
                backToRTButton: !1,
                loading: !1,
                trackIframe: !1
            },
            v = {
                enabled: !1,
                callback: null,
                interval: 1E3
            },
            ea = {
                error: !1
            },
            P = !1,
            Ja = !1,
            ja = {
                start: function(h) {
                    if (X.mode !== da.zero) ja.resume();
                    else {
                        if (h.settings)
                            for (var p in h.settings) Sa[p] = h.settings[p];
                        h.faceDetectionCallback && (v.enabled = !0, v.callback = h.faceDetectionCallback, v.interval = "undefined" === typeof h.faceDetectionInterval ? 1E3 : h.faceDetectionInterval);
                        l.container = document.getElementById("JeeWidget");
                        l.cv = document.getElementById("JeeWidgetCanvas");
                        l.cv || (l.cv = document.createElement("canvas"), l.container.appendChild(l.cv));
                        l.loading = document.getElementById("JeeWidgetLoading");
                        fa();
                        h.onError && (ea.error = h.onError);
                        sb();
                        ca();
                        new ResizeSensor($(l.container), function(h) {
                            ca()
                        });
                        (h.searchImageMask || h.searchImageColor) && JEEFITAPI.set_loading(h.searchImageMask, h.searchImageColor);
                        h.callbackReady && (Ja = h.callbackReady);
                        X.mode = da.init;
                        p = "undefined" === typeof h.assetsPath ? Sa.appstaticURL + "jeefit/" : h.assetsPath;
                        "undefined" !== typeof h.catalog && (P = h.catalog);
                        if (h.onWebcamGet) JEEFITAPI.onWebcamGet(h.onWebcamGet);
                        JEEFITAPI.init(p, t, xa, l.cv);
                        if (h.sku) JEEFITAPI.onHalfLoad(ja.load.bind(ja, h.sku))
                    }
                },
                pause: function() {
                    X.isRT && (JEEFITAPI.switch_sleep(!0), X.mode = da.paused)
                },
                resume: function() {
                    X.isRT && (JEEFITAPI.switch_sleep(!1), X.mode = da.realtime)
                },
                set_videoRotation: function(h) {
                    X.isRT && JEEFITAPI.set_videoRotation(h)
                },
                set_videoSizes: function(h, l, p, q, t, v) {
                    X.isRT && JEEFITAPI.set_videoSizes(h, l, p, q, t, v)
                },
                resize: function() {
                    ca()
                },
                set_scale: function(h) {
                    JEEFITAPI.set_scale(h)
                },
                capture_image: function(h, l, p) {
                    JEEFITAPI && JEEFITAPI.ready ? JEEFITAPI.capture_image(h, l, p, !1) : l(!1)
                },
                toggleLoading: function(h) {
                    l.loading && (h ? $(l.loading).show() : $(l.loading).hide())
                },
                load: function(h, l) {
                    ja.toggleLoading(!0);
                    X.isRT ? ja.load_RT(h, l) : ja.load_fallback(h, l)
                },
                load_fallback: function(h, l) {
                    X.mode = da.loadingModel;
                    JEEFITAPI.load_model(null, null, function() {
                        X.mode = da.fallback;
                        ja.toggleLoading(!1);
                        l && l();
                        Ca(h)
                    }, h)
                },
                load_RT: function(h, l) {
                    h !== X.sku && (X.sku = h, X.mode = da.loadingModel, X.mode === da.paused && ja.resume(), P && P[h] ? Ya(h, P[h], l) : $.ajax({
                        method: "GET",
                        url: Sa.glassesDBURL + "GetBySKU?sku=" +
                            h,
                        dataType: "json"
                    }).then(function(p) {
                        if (p.error) return ua();
                        Ya(h, p.intrinsic, l)
                    }).fail(ua))
                }
            };
        return ja
    }();
window.JEEFITAPI = JEEFITAPI;
window.JeefitFallback = JeefitFallback;
window.JEEWIDGET = {
    start: JeeWidget.start,
    pause: JeeWidget.pause,
    resume: JeeWidget.resume,
    load: JeeWidget.load,
    capture_image: JeeWidget.capture_image,
    set_videoRotation: JeeWidget.set_videoRotation,
    resize: JeeWidget.resize,
    set_scale: JeeWidget.set_scale,
    set_videoSizes: JeeWidget.set_videoSizes
};

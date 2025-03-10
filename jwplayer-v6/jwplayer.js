"undefined" === typeof jwplayer && (jwplayer = function () {
        if (jwplayer.api) return jwplayer.api.selectPlayer.apply(this, arguments)
    }, jwplayer.version = "6.12.4956", jwplayer.vid = document.createElement("video"), jwplayer.audio = document.createElement(
        "audio"), jwplayer.source = document.createElement("source"), function () {
        var f = {},
            d = Array.prototype,
            l = Object.prototype,
            b = d.slice,
            j = d.concat,
            c = l.toString,
            g = l.hasOwnProperty,
            k = d.map,
            a = d.forEach,
            e = d.filter,
            r = d.every,
            q = d.some,
            h = d.indexOf,
            l = Array.isArray,
            p = Object.keys,
            m = function (a) {
                if (a instanceof m) return a;
                if (!(this instanceof m)) return new m(a)
            },
            w = m.each = m.forEach = function (e, b, h) {
                if (null == e) return e;
                if (a && e.forEach === a) e.forEach(b, h);
                else if (e.length === +e.length)
                    for (var c = 0, p = e.length; c < p; c++) {
                        if (b.call(h, e[c], c, e) === f) return
                    } else
                        for (var d = m.keys(e), c = 0, p = d.length; c < p; c++)
                            if (b.call(h, e[d[c]], d[c], e) === f) return;
                return e
            };
        m.map = m.collect = function (a, e, b) {
            var h = [];
            if (null == a) return h;
            if (k && a.map === k) return a.map(e, b);
            w(a, function (a, c, p) {
                h.push(e.call(b, a, c, p))
            });
            return h
        };
        m.find = m.detect = function (a,
            e, b) {
            var h;
            u(a, function (a, c, p) {
                if (e.call(b, a, c, p)) return h = a, !0
            });
            return h
        };
        m.filter = m.select = function (a, b, h) {
            var c = [];
            if (null == a) return c;
            if (e && a.filter === e) return a.filter(b, h);
            w(a, function (a, e, p) {
                b.call(h, a, e, p) && c.push(a)
            });
            return c
        };
        m.every = m.all = function (a, e, b) {
            e || (e = m.identity);
            var h = !0;
            if (null == a) return h;
            if (r && a.every === r) return a.every(e, b);
            w(a, function (a, c, p) {
                if (!(h = h && e.call(b, a, c, p))) return f
            });
            return !!h
        };
        var u = m.some = m.any = function (a, e, b) {
            e || (e = m.identity);
            var h = !1;
            if (null == a) return h;
            if (q && a.some === q) return a.some(e, b);
            w(a, function (a, c, p) {
                if (h || (h = e.call(b, a, c, p))) return f
            });
            return !!h
        };
        m.size = function (a) {
            return null == a ? 0 : a.length === +a.length ? a.length : m.keys(a).length
        };
        m.after = function (a, e) {
            return function () {
                if (1 > --a) return e.apply(this, arguments)
            }
        };
        m.sortedIndex = function (a, e, h, b) {
            h = null == h ? m.identity : m.isFunction(h) ? h : m.property(h);
            e = h.call(b, e);
            for (var c = 0, p = a.length; c < p;) {
                var d = c + p >>> 1;
                h.call(b, a[d]) < e ? c = d + 1 : p = d
            }
            return c
        };
        m.find = m.detect = function (a, e, h) {
            var b;
            u(a, function (a,
                c, p) {
                if (e.call(h, a, c, p)) return b = a, !0
            });
            return b
        };
        u = m.some = m.any = function (a, e, h) {
            e || (e = m.identity);
            var b = !1;
            if (null == a) return b;
            if (q && a.some === q) return a.some(e, h);
            w(a, function (a, c, p) {
                if (b || (b = e.call(h, a, c, p))) return f
            });
            return !!b
        };
        m.contains = m.include = function (a, e) {
            if (null == a) return !1;
            a.length !== +a.length && (a = m.values(a));
            return 0 <= m.indexOf(a, e)
        };
        m.where = function (a, e) {
            return m.filter(a, m.matches(e))
        };
        m.difference = function (a) {
            var e = j.apply(d, b.call(arguments, 1));
            return m.filter(a, function (a) {
                return !m.contains(e,
                    a)
            })
        };
        m.without = function (a) {
            return m.difference(a, b.call(arguments, 1))
        };
        m.indexOf = function (a, e, b) {
            if (null == a) return -1;
            var c = 0,
                p = a.length;
            if (b)
                if ("number" == typeof b) c = 0 > b ? Math.max(0, p + b) : b;
                else return c = m.sortedIndex(a, e), a[c] === e ? c : -1;
            if (h && a.indexOf === h) return a.indexOf(e, b);
            for (; c < p; c++)
                if (a[c] === e) return c;
            return -1
        };
        m.partial = function (a) {
            var e = b.call(arguments, 1);
            return function () {
                for (var b = 0, h = e.slice(), c = 0, p = h.length; c < p; c++) h[c] === m && (h[c] =
                    arguments[b++]);
                for (; b < arguments.length;) h.push(arguments[b++]);
                return a.apply(this, h)
            }
        };
        m.memoize = function (a, e) {
            var b = {};
            e || (e = m.identity);
            return function () {
                var h = e.apply(this, arguments);
                return m.has(b, h) ? b[h] : b[h] = a.apply(this, arguments)
            }
        };
        m.delay = function (a, e) {
            var h = b.call(arguments, 2);
            return setTimeout(function () {
                return a.apply(null, h)
            }, e)
        };
        m.defer = function (a) {
            return m.delay.apply(m, [a, 1].concat(b.call(arguments, 1)))
        };
        m.keys = function (a) {
            if (!m.isObject(a)) return [];
            if (p) return p(a);
            var e = [],
                b;
            for (b in a) m.has(a, b) && e.push(b);
            return e
        };
        m.pick = function (a) {
            var e = {},
                h = j.apply(d, b.call(arguments, 1));
            w(h, function (b) {
                b in a && (e[b] = a[b])
            });
            return e
        };
        m.isArray = l || function (a) {
            return "[object Array]" == c.call(a)
        };
        m.isObject = function (a) {
            return a === Object(a)
        };
        w("Arguments Function String Number Date RegExp".split(" "), function (a) {
            m["is" + a] = function (e) {
                return c.call(e) == "[object " + a + "]"
            }
        });
        m.isArguments(arguments) || (m.isArguments = function (a) {
            return !(!a || !m.has(a, "callee"))
        });
        "function" !== typeof /./ && (m.isFunction = function (a) {
            return "function" === typeof a
        });
        m.isFinite = function (a) {
            return isFinite(a) &&
                !isNaN(parseFloat(a))
        };
        m.isNaN = function (a) {
            return m.isNumber(a) && a != +a
        };
        m.isBoolean = function (a) {
            return !0 === a || !1 === a || "[object Boolean]" == c.call(a)
        };
        m.isNull = function (a) {
            return null === a
        };
        m.isUndefined = function (a) {
            return void 0 === a
        };
        m.has = function (a, e) {
            return g.call(a, e)
        };
        m.identity = function (a) {
            return a
        };
        m.constant = function (a) {
            return function () {
                return a
            }
        };
        m.property = function (a) {
            return function (e) {
                return e[a]
            }
        };
        m.matches = function (a) {
            return function (e) {
                if (e === a) return !0;
                for (var b in a)
                    if (a[b] !== e[b]) return !1;
                return !0
            }
        };
        m.result = function (a, e) {
            if (null != a) {
                var b = a[e];
                return m.isFunction(b) ? b.call(a) : b
            }
        };
        this._ = m
    }.call(jwplayer), function (f) {
        function d(a) {
            return function () {
                return g(a)
            }
        }

        function l(a, e, c, d, h) {
            return function () {
                var p, g;
                if (h) c(a);
                else {
                    try {
                        if (p = a.responseXML)
                            if (g = p.firstChild, p.lastChild && "parsererror" === p.lastChild.nodeName) {
                                d && d("Invalid XML", e, a);
                                return
                            }
                    } catch (k) {}
                    if (p && g) return c(a);
                    (p = b.parseXML(a.responseText)) && p.firstChild ? (a = b.extend({}, a, {
                        responseXML: p
                    }), c(a)) : d && d(a.responseText ? "Invalid XML" :
                        e, e, a)
                }
            }
        }
        var b = f.utils = {},
            j = f._;
        b.exists = function (a) {
            switch (typeof a) {
                case "string":
                    return 0 < a.length;
                case "object":
                    return null !== a;
                case "undefined":
                    return !1
            }
            return !0
        };
        b.styleDimension = function (a) {
            return a + (0 < a.toString().indexOf("%") ? "" : "px")
        };
        b.getAbsolutePath = function (a, e) {
            b.exists(e) || (e = document.location.href);
            if (b.exists(a)) {
                var c;
                if (b.exists(a)) {
                    c = a.indexOf("://");
                    var d = a.indexOf("?");
                    c = 0 < c && (0 > d || d > c)
                } else c = void 0;
                if (c) return a;
                c = e.substring(0, e.indexOf("://") + 3);
                var d = e.substring(c.length,
                        e.indexOf("/", c.length + 1)),
                    h;
                0 === a.indexOf("/") ? h = a.split("/") : (h = e.split("?")[0], h = h.substring(c.length + d.length +
                    1, h.lastIndexOf("/")), h = h.split("/").concat(a.split("/")));
                for (var p = [], g = 0; g < h.length; g++) h[g] && (b.exists(h[g]) && "." !== h[g]) && (".." ===
                    h[g] ? p.pop() : p.push(h[g]));
                return c + d + "/" + p.join("/")
            }
        };
        b.extend = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            if (1 < a.length) {
                for (var e = a[0], c = function (a, b) {
                        void 0 !== b && null !== b && (e[a] = b)
                    }, d = 1; d < a.length; d++) b.foreach(a[d], c);
                return e
            }
            return null
        };
        var c = window.console = window.console || {
            log: function () {}
        };
        b.log = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            "object" === typeof c.log ? c.log(a) : c.log.apply(c, a)
        };
        var g = j.memoize(function (a) {
            return null !== navigator.userAgent.toLowerCase().match(a)
        });
        b.isFF = d(/firefox/i);
        b.isChrome = d(/chrome/i);
        b.isIPod = d(/iP(hone|od)/i);
        b.isIPad = d(/iPad/i);
        b.isSafari602 = d(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);
        b.isIETrident = function (a) {
            return a ? (a = parseFloat(a).toFixed(1), g(RegExp("trident/.+rv:\\s*" +
                a, "i"))) : g(/trident/i)
        };
        b.isMSIE = function (a) {
            return a ? (a = parseFloat(a).toFixed(1), g(RegExp("msie\\s*" + a, "i"))) : g(/msie/i)
        };
        b.isIE = function (a) {
            return a ? (a = parseFloat(a).toFixed(1), 11 <= a ? b.isIETrident(a) : b.isMSIE(a)) : b.isMSIE() ||
                b.isIETrident()
        };
        b.isSafari = function () {
            return g(/safari/i) && !g(/chrome/i) && !g(/chromium/i) && !g(/android/i)
        };
        b.isIOS = function (a) {
            return a ? g(RegExp("iP(hone|ad|od).+\\sOS\\s" + a, "i")) : g(/iP(hone|ad|od)/i)
        };
        b.isAndroidNative = function (a) {
            return b.isAndroid(a, !0)
        };
        b.isAndroid = function (a,
            e) {
            return e && g(/chrome\/[123456789]/i) && !g(/chrome\/18/) ? !1 : a ? (b.isInt(a) && !/\./.test(a) &&
                (a = "" + a + "."), g(RegExp("Android\\s*" + a, "i"))) : g(/Android/i)
        };
        b.isMobile = function () {
            return b.isIOS() || b.isAndroid()
        };
        b.isIframe = function () {
            return window.frameElement && "IFRAME" === window.frameElement.nodeName
        };
        b.saveCookie = function (a, e) {
            document.cookie = "jwplayer." + a + "\x3d" + e + "; path\x3d/"
        };
        b.getCookies = function () {
            for (var a = {}, e = document.cookie.split("; "), b = 0; b < e.length; b++) {
                var c = e[b].split("\x3d");
                0 === c[0].indexOf("jwplayer.") &&
                    (a[c[0].substring(9, c[0].length)] = c[1])
            }
            return a
        };
        b.isInt = function (a) {
            return 0 === parseFloat(a) % 1
        };
        b.typeOf = function (a) {
            if (null === a) return "null";
            var e = typeof a;
            return "object" === e && j.isArray(a) ? "array" : e
        };
        b.translateEventResponse = function (a, e) {
            var c = b.extend({}, e);
            if (a === f.events.JWPLAYER_FULLSCREEN && !c.fullscreen) c.fullscreen = "true" === c.message,
                delete c.message;
            else if ("object" === typeof c.data) {
                var d = c.data;
                delete c.data;
                c = b.extend(c, d)
            } else "object" === typeof c.metadata && b.deepReplaceKeyName(c.metadata,
["__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-", "default"]);
            b.foreach(["position", "duration", "offset"], function (a, e) {
                c[e] && (c[e] = Math.round(1E3 * c[e]) / 1E3)
            });
            return c
        };
        b.flashVersion = function () {
            if (b.isAndroid()) return 0;
            var a = navigator.plugins,
                e;
            try {
                if ("undefined" !== a && (e = a["Shockwave Flash"])) return parseInt(e.description.replace(
                    /\D+(\d+)\..*/, "$1"), 10)
            } catch (c) {}
            if ("undefined" !== typeof window.ActiveXObject) try {
                if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseInt(e.GetVariable(
                        "$version").split(" ")[1].split(",")[0],
                    10)
            } catch (d) {}
            return 0
        };
        b.getScriptPath = function (a) {
            for (var e = document.getElementsByTagName("script"), c = 0; c < e.length; c++) {
                var b = e[c].src;
                if (b && 0 <= b.indexOf(a)) return b.substr(0, b.indexOf(a))
            }
            return ""
        };
        b.deepReplaceKeyName = function (a, e, c) {
            switch (f.utils.typeOf(a)) {
                case "array":
                    for (var d = 0; d < a.length; d++) a[d] = f.utils.deepReplaceKeyName(a[d], e, c);
                    break;
                case "object":
                    b.foreach(a, function (b, d) {
                        var g;
                        if (e instanceof Array && c instanceof Array) {
                            if (e.length !== c.length) return;
                            g = e
                        } else g = [e];
                        for (var k = b, j = 0; j <
                            g.length; j++) k = k.replace(RegExp(e[j], "g"), c[j]);
                        a[k] = f.utils.deepReplaceKeyName(d, e, c);
                        b !== k && delete a[b]
                    })
            }
            return a
        };
        var k = b.pluginPathType = {
            ABSOLUTE: 0,
            RELATIVE: 1,
            CDN: 2
        };
        b.getPluginPathType = function (a) {
            if ("string" === typeof a) {
                a = a.split("?")[0];
                var e = a.indexOf("://");
                if (0 < e) return k.ABSOLUTE;
                var c = a.indexOf("/");
                a = b.extension(a);
                return 0 > e && 0 > c && (!a || !isNaN(a)) ? k.CDN : k.RELATIVE
            }
        };
        b.getPluginName = function (a) {
            return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
        };
        b.getPluginVersion = function (a) {
            return a.replace(/[^-]*-?([^\.]*).*$/,
                "$1")
        };
        b.isYouTube = function (a, e) {
            return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(a)
        };
        b.youTubeID = function (a) {
            try {
                return /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(a).slice(1).join("").replace("?",
                    "")
            } catch (e) {
                return ""
            }
        };
        b.isRtmp = function (a, e) {
            return 0 === a.indexOf("rtmp") || "rtmp" === e
        };
        b.foreach = function (a, e) {
            var c, d;
            for (c in a) "function" === b.typeOf(a.hasOwnProperty) ? a.hasOwnProperty(c) && (d = a[c], e(c, d)) :
                (d = a[c], e(c, d))
        };
        b.isHTTPS = function () {
            return 0 === window.location.href.indexOf("https")
        };
        b.repo = function () {
            var a = "http://p.jwpcdn.com/" + f.version.split(/\W/).splice(0, 2).join("/") + "/";
            try {
                b.isHTTPS() && (a = a.replace("http://", "https://ssl."))
            } catch (c) {}
            return a
        };
        b.versionCheck = function (a) {
            a = ("0" + a).split(/\W/);
            var c = f.version.split(/\W/),
                b = parseFloat(a[0]),
                d = parseFloat(c[0]);
            return b > d || b === d && parseFloat("0" + a[1]) > parseFloat(c[1]) ? !1 : !0
        };
        b.ajax = function (a, c, d, g) {
            var h, p = !1;
            0 < a.indexOf("#") && (a = a.replace(/#.*$/, ""));
            if (a && 0 <= a.indexOf("://") && a.split("/")[2] !== window.location.href.split("/")[2] &&
                b.exists(window.XDomainRequest)) h = new window.XDomainRequest, h.onload = l(h, a, c, d, g), h.ontimeout =
                h.onprogress = function () {}, h.timeout = 5E3;
            else if (b.exists(window.XMLHttpRequest)) {
                var k = h = new window.XMLHttpRequest,
                    j = a;
                h.onreadystatechange = function () {
                    if (4 === k.readyState) switch (k.status) {
                        case 200:
                            l(k, j, c, d, g)();
                            break;
                        case 404:
                            d("File not found", j, k)
                    }
                }
            } else return d && d("", a, h), h;
            h.overrideMimeType && h.overrideMimeType("text/xml");
            var f = a,
                t = h;
            h.onerror = function () {
                d("Error loading file", f, t)
            };
            try {
                h.open("GET",
                    a, !0)
            } catch (n) {
                p = !0
            }
            setTimeout(function () {
                if (p) d && d(a, a, h);
                else try {
                    h.send()
                } catch (c) {
                    d && d(a, a, h)
                }
            }, 0);
            return h
        };
        b.parseXML = function (a) {
            var c;
            try {
                if (window.DOMParser) {
                    if (c = (new window.DOMParser).parseFromString(a, "text/xml"), c.childNodes && c.childNodes
                        .length && "parsererror" === c.childNodes[0].firstChild.nodeName) return
                } else c = new window.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a)
            } catch (b) {
                return
            }
            return c
        };
        b.between = function (a, c, b) {
            return Math.max(Math.min(a, b), c)
        };
        b.seconds = function (a) {
            if (j.isNumber(a)) return a;
            a = a.replace(",", ".");
            var c = a.split(":"),
                b = 0;
            "s" === a.slice(-1) ? b = parseFloat(a) : "m" === a.slice(-1) ? b = 60 * parseFloat(a) : "h" === a.slice(
                    -1) ? b = 3600 * parseFloat(a) : 1 < c.length ? (b = parseFloat(c[c.length - 1]), b += 60 *
                    parseFloat(c[c.length - 2]), 3 === c.length && (b += 3600 * parseFloat(c[c.length - 3]))) :
                b = parseFloat(a);
            return b
        };
        b.serialize = function (a) {
            return null === a ? null : "true" === a.toString().toLowerCase() ? !0 : "false" === a.toString().toLowerCase() ?
                !1 : isNaN(Number(a)) || 5 < a.length || 0 === a.length ? a : Number(a)
        };
        b.addClass = function (a,
            c) {
            var d = j.isString(a.className) ? a.className.split(" ") : [],
                g = j.isArray(c) ? c : c.split(" ");
            j.each(g, function (a) {
                j.contains(d, a) || d.push(a)
            });
            a.className = b.trim(d.join(" "))
        };
        b.removeClass = function (a, c) {
            var d = j.isString(a.className) ? a.className.split(" ") : [],
                g = j.isArray(c) ? c : c.split(" ");
            a.className = b.trim(j.difference(d, g).join(" "))
        };
        b.emptyElement = function (a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        };
        b.indexOf = j.indexOf;
        b.noop = function () {};
        b.canCast = function () {
            var a = f.cast;
            return !(!a || !j.isFunction(a.available) ||
                !a.available())
        }
    }(jwplayer), function (f) {
        function d(a) {
            var c = document.createElement("style");
            a && c.appendChild(document.createTextNode(a));
            c.type = "text/css";
            document.getElementsByTagName("head")[0].appendChild(c);
            return c
        }

        function l(a, b, e) {
            if (!c.exists(b)) return "";
            e = e ? " !important" : "";
            return "string" === typeof b && isNaN(b) ? /png|gif|jpe?g/i.test(b) && 0 > b.indexOf("url") ? "url(" +
                b + ")" : b + e : 0 === b || "z-index" === a || "opacity" === a ? "" + b + e : /color/i.test(a) ?
                "#" + c.pad(b.toString(16).replace(/^0x/i, ""), 6) + e : Math.ceil(b) +
                "px" + e
        }

        function b(a, c) {
            for (var b = 0; b < a.length; b++) {
                var e = a[b],
                    d, g;
                if (void 0 !== e && null !== e)
                    for (d in c) {
                        g = d;
                        g = g.split("-");
                        for (var k = 1; k < g.length; k++) g[k] = g[k].charAt(0).toUpperCase() + g[k].slice(1);
                        g = g.join("");
                        e.style[g] !== c[d] && (e.style[g] = c[d])
                    }
            }
        }

        function j(c) {
            var b = g[c].sheet,
                e, d, k;
            if (b) {
                e = b.cssRules;
                d = r[c];
                k = c;
                var j = a[k];
                k += " { ";
                for (var f in j) k += f + ": " + j[f] + "; ";
                k += "}";
                if (void 0 !== d && d < e.length && e[d].selectorText === c) {
                    if (k === e[d].cssText) return;
                    b.deleteRule(d)
                } else d = e.length, r[c] = d;
                try {
                    b.insertRule(k,
                        d)
                } catch (l) {}
            }
        }
        var c = f.utils,
            g = {},
            k, a = {},
            e = null,
            r = {};
        c.cssKeyframes = function (a, c) {
            var b = g.keyframes;
            b || (b = d(), g.keyframes = b);
            var b = b.sheet,
                e = "@keyframes " + a + " { " + c + " }";
            try {
                b.insertRule(e, b.cssRules.length)
            } catch (k) {}
            e = e.replace(/(keyframes|transform)/g, "-webkit-$1");
            try {
                b.insertRule(e, b.cssRules.length)
            } catch (j) {}
        };
        var q = c.css = function (c, b, f) {
            a[c] || (a[c] = {});
            var r = a[c];
            f = f || !1;
            var u = !1,
                q, n;
            for (q in b) n = l(q, b[q], f), "" !== n ? n !== r[q] && (r[q] = n, u = !0) : void 0 !== r[q] && (
                delete r[q], u = !0);
            if (u) {
                if (!g[c]) {
                    b =
                        k && k.sheet && k.sheet.cssRules && k.sheet.cssRules.length || 0;
                    if (!k || 5E4 < b) k = d();
                    g[c] = k
                }
                null !== e ? e.styleSheets[c] = a[c] : j(c)
            }
        };
        q.style = function (a, c, d) {
            if (!(void 0 === a || null === a)) {
                void 0 === a.length && (a = [a]);
                var g = {},
                    k;
                for (k in c) g[k] = l(k, c[k]);
                if (null !== e && !d) {
                    c = (c = a.__cssRules) || {};
                    for (var j in g) c[j] = g[j];
                    a.__cssRules = c;
                    0 > f._.indexOf(e.elements, a) && e.elements.push(a)
                } else b(a, g)
            }
        };
        q.block = function (a) {
            null === e && (e = {
                id: a,
                styleSheets: {},
                elements: []
            })
        };
        q.unblock = function (a) {
            if (e && (!a || e.id === a)) {
                for (var c in e.styleSheets) j(c);
                for (a = 0; a < e.elements.length; a++) c = e.elements[a], b(c, c.__cssRules);
                e = null
            }
        };
        c.clearCss = function (c) {
            for (var b in a) 0 <= b.indexOf(c) && delete a[b];
            for (var e in g) 0 <= e.indexOf(c) && j(e)
        };
        c.transform = function (a, c) {
            var b = {};
            c = c || "";
            b.transform = c;
            b["-webkit-transform"] = c;
            b["-ms-transform"] = c;
            b["-moz-transform"] = c;
            b["-o-transform"] = c;
            "string" === typeof a ? q(a, b) : q.style(a, b)
        };
        c.dragStyle = function (a, c) {
            q(a, {
                "-webkit-user-select": c,
                "-moz-user-select": c,
                "-ms-user-select": c,
                "-webkit-user-drag": c,
                "user-select": c,
                "user-drag": c
            })
        };
        c.transitionStyle = function (a, c) {
            navigator.userAgent.match(/5\.\d(\.\d)? safari/i) || q(a, {
                "-webkit-transition": c,
                "-moz-transition": c,
                "-o-transition": c,
                transition: c
            })
        };
        c.rotate = function (a, b) {
            c.transform(a, "rotate(" + b + "deg)")
        };
        c.rgbHex = function (a) {
            a = String(a).replace("#", "");
            3 === a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
            return "#" + a.substr(-6)
        };
        c.hexToRgba = function (a, c) {
            var b = "rgb",
                e = [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)];
            void 0 !== c && 100 !== c && (b += "a", e.push(c /
                100));
            return b + "(" + e.join(",") + ")"
        }
    }(jwplayer), function (f) {
        var d = jwplayer._,
            l = f.foreach,
            b = {
                mp4: "video/mp4",
                ogg: "video/ogg",
                oga: "audio/ogg",
                vorbis: "audio/ogg",
                webm: "video/webm",
                aac: "audio/mp4",
                mp3: "audio/mpeg",
                hls: "application/vnd.apple.mpegurl"
            },
            j = {
                mp4: b.mp4,
                f4v: b.mp4,
                m4v: b.mp4,
                mov: b.mp4,
                m4a: b.aac,
                f4a: b.aac,
                aac: b.aac,
                mp3: b.mp3,
                ogv: b.ogg,
                ogg: b.ogg,
                oga: b.vorbis,
                vorbis: b.vorbis,
                webm: b.webm,
                m3u8: b.hls,
                m3u: b.hls,
                hls: b.hls
            },
            c = f.extensionmap = {};
        l(j, function (b, d) {
            c[b] = {
                html5: d
            }
        });
        l({
            flv: "video",
            f4v: "video",
            mov: "video",
            m4a: "video",
            m4v: "video",
            mp4: "video",
            aac: "video",
            f4a: "video",
            mp3: "sound",
            smil: "rtmp",
            m3u8: "hls",
            hls: "hls"
        }, function (b, d) {
            c[b] || (c[b] = {});
            c[b].flash = d
        });
        c.types = b;
        c.mimeType = function (c) {
            var k;
            d.find(b, function (a, b) {
                if (a === c) return k = b, !0
            });
            return k
        };
        c.extType = function (b) {
            return c.mimeType(j[b])
        }
    }(jwplayer.utils), function (f) {
        var d = f.loaderstatus = {
            NEW: 0,
            LOADING: 1,
            ERROR: 2,
            COMPLETE: 3
        };
        f.scriptloader = function (l) {
            function b(a) {
                k = d.ERROR;
                g.sendEvent(c.ERROR, a)
            }

            function j(a) {
                k = d.COMPLETE;
                g.sendEvent(c.COMPLETE,
                    a)
            }
            var c = jwplayer.events,
                g = f.extend(this, new c.eventdispatcher),
                k = d.NEW;
            this.load = function () {
                if (k === d.NEW) {
                    var a = f.scriptloader.loaders[l];
                    if (a && (k = a.getStatus(), 2 > k)) {
                        a.addEventListener(c.ERROR, b);
                        a.addEventListener(c.COMPLETE, j);
                        return
                    }
                    var e = document.getElementsByTagName("head")[0] || document.documentElement,
                        g = document.createElement("script"),
                        q = !1;
                    g.onload = g.onreadystatechange = function (a) {
                        if (!q && (!this.readyState || "loaded" === this.readyState || "complete" ===
                                this.readyState)) q = !0, j(a), g.onload = g.onreadystatechange =
                            null, e && g.parentNode && e.removeChild(g)
                    };
                    g.onerror = b;
                    g.src = l;
                    e.insertBefore(g, e.firstChild);
                    k = d.LOADING;
                    f.scriptloader.loaders[l] = this
                }
            };
            this.getStatus = function () {
                return k
            }
        };
        f.scriptloader.loaders = {}
    }(jwplayer.utils), function (f) {
        f.trim = function (d) {
            return d.replace(/^\s+|\s+$/g, "")
        };
        f.pad = function (d, f, b) {
            for (b || (b = "0"); d.length < f;) d = b + d;
            return d
        };
        f.xmlAttribute = function (d, f) {
            for (var b = 0; b < d.attributes.length; b++)
                if (d.attributes[b].name && d.attributes[b].name.toLowerCase() === f.toLowerCase()) return d.attributes[
                    b].value.toString();
            return ""
        };
        f.extension = function (d) {
            if (!d || "rtmp" === d.substr(0, 4)) return "";
            var f;
            f = -1 < d.indexOf("(format\x3dm3u8-") ? "m3u8" : !1;
            if (f) return f;
            d = d.substring(d.lastIndexOf("/") + 1, d.length).split("?")[0].split("#")[0];
            if (-1 < d.lastIndexOf(".")) return d.substr(d.lastIndexOf(".") + 1, d.length).toLowerCase()
        };
        f.stringToColor = function (d) {
            d = d.replace(/(#|0x)?([0-9A-F]{3,6})$/gi, "$2");
            3 === d.length && (d = d.charAt(0) + d.charAt(0) + d.charAt(1) + d.charAt(1) + d.charAt(2) + d.charAt(
                2));
            return parseInt(d, 16)
        }
    }(jwplayer.utils),
    function (f) {
        var d = "touchmove",
            l = "touchstart";
        f.touch = function (b) {
            function j(b) {
                b.type === l ? (a = !0, r = g(h.DRAG_START, b)) : b.type === d ? a && (q || (c(h.DRAG_START, b,
                    r), q = !0), c(h.DRAG, b)) : (a && (q ? c(h.DRAG_END, b) : (b.cancelBubble = !0, c(h.TAP,
                    b))), a = q = !1, r = null)
            }

            function c(a, c, b) {
                if (e[a] && (c.preventManipulation && c.preventManipulation(), c.preventDefault && c.preventDefault(),
                        c = b ? b : g(a, c))) e[a](c)
            }

            function g(a, c) {
                var b = null;
                c.touches && c.touches.length ? b = c.touches[0] : c.changedTouches && c.changedTouches.length &&
                    (b = c.changedTouches[0]);
                if (!b) return null;
                var e = k.getBoundingClientRect(),
                    b = {
                        type: a,
                        target: k,
                        x: b.pageX - window.pageXOffset - e.left,
                        y: b.pageY,
                        deltaX: 0,
                        deltaY: 0
                    };
                a !== h.TAP && r && (b.deltaX = b.x - r.x, b.deltaY = b.y - r.y);
                return b
            }
            var k = b,
                a = !1,
                e = {},
                r = null,
                q = !1,
                h = f.touchEvents;
            document.addEventListener(d, j);
            document.addEventListener("touchend", function (b) {
                a && q && c(h.DRAG_END, b);
                a = q = !1;
                r = null
            });
            document.addEventListener("touchcancel", j);
            b.addEventListener(l, j);
            b.addEventListener("touchend", j);
            this.addEventListener = function (a, c) {
                e[a] = c
            };
            this.removeEventListener = function (a) {
                delete e[a]
            };
            return this
        }
    }(jwplayer.utils),
    function (f) {
        f.touchEvents = {
            DRAG: "jwplayerDrag",
            DRAG_START: "jwplayerDragStart",
            DRAG_END: "jwplayerDragEnd",
            TAP: "jwplayerTap"
        }
    }(jwplayer.utils),
    function (f) {
        f.key = function (d) {
            var l, b, j;
            this.edition = function () {
                return j && j.getTime() < (new Date).getTime() ? "invalid" : l
            };
            this.token = function () {
                return b
            };
            f.exists(d) || (d = "");
            try {
                d = f.tea.decrypt(d, "36QXq4W@GSBV^teR");
                var c = d.split("/");
                (l = c[0]) ? /^(free|pro|premium|enterprise|ads)$/i.test(l) ?
                    (b = c[1], c[2] && 0 < parseInt(c[2]) && (j = new Date, j.setTime(String(c[2])))) : l =
                    "invalid": l = "free"
            } catch (g) {
                l = "invalid"
            }
        }
    }(jwplayer.utils),
    function (f) {
        var d = f.tea = {};
        d.encrypt = function (j, c) {
            if (0 == j.length) return "";
            var g = d.strToLongs(b.encode(j));
            1 >= g.length && (g[1] = 0);
            for (var k = d.strToLongs(b.encode(c).slice(0, 16)), a = g.length, e = g[a - 1], f = g[0], q, h =
                    Math.floor(6 + 52 / a), p = 0; 0 < h--;) {
                p += 2654435769;
                q = p >>> 2 & 3;
                for (var m = 0; m < a; m++) f = g[(m + 1) % a], e = (e >>> 5 ^ f << 2) + (f >>> 3 ^ e << 4) ^ (
                    p ^ f) + (k[m & 3 ^ q] ^ e), e = g[m] += e
            }
            g = d.longsToStr(g);
            return l.encode(g)
        };
        d.decrypt = function (j, c) {
            if (0 == j.length) return "";
            for (var g = d.strToLongs(l.decode(j)), k = d.strToLongs(b.encode(c).slice(0, 16)), a = g.length, e =
                    g[a - 1], f = g[0], q, h = 2654435769 * Math.floor(6 + 52 / a); 0 != h;) {
                q = h >>> 2 & 3;
                for (var p = a - 1; 0 <= p; p--) e = g[0 < p ? p - 1 : a - 1], e = (e >>> 5 ^ f << 2) + (f >>>
                    3 ^ e << 4) ^ (h ^ f) + (k[p & 3 ^ q] ^ e), f = g[p] -= e;
                h -= 2654435769
            }
            g = d.longsToStr(g);
            g = g.replace(/\0+$/, "");
            return b.decode(g)
        };
        d.strToLongs = function (b) {
            for (var c = Array(Math.ceil(b.length / 4)), d = 0; d < c.length; d++) c[d] = b.charCodeAt(4 * d) +
                (b.charCodeAt(4 *
                    d + 1) << 8) + (b.charCodeAt(4 * d + 2) << 16) + (b.charCodeAt(4 * d + 3) << 24);
            return c
        };
        d.longsToStr = function (b) {
            for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = String.fromCharCode(b[d] & 255, b[d] >>>
                8 & 255, b[d] >>> 16 & 255, b[d] >>> 24 & 255);
            return c.join("")
        };
        var l = {
                code: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
                encode: function (d, c) {
                    var g, k, a, e, f = [],
                        q = "",
                        h, p, m = l.code;
                    p = ("undefined" == typeof c ? 0 : c) ? b.encode(d) : d;
                    h = p.length % 3;
                    if (0 < h)
                        for (; 3 > h++;) q += "\x3d", p += "\x00";
                    for (h = 0; h < p.length; h += 3) g = p.charCodeAt(h),
                        k = p.charCodeAt(h + 1), a = p.charCodeAt(h + 2), e = g << 16 | k << 8 | a, g = e >> 18 &
                        63, k = e >> 12 & 63, a = e >> 6 & 63, e &= 63, f[h / 3] = m.charAt(g) + m.charAt(k) +
                        m.charAt(a) + m.charAt(e);
                    f = f.join("");
                    return f = f.slice(0, f.length - q.length) + q
                },
                decode: function (d, c) {
                    c = "undefined" == typeof c ? !1 : c;
                    var g, k, a, e, f, q = [],
                        h, p = l.code;
                    h = c ? b.decode(d) : d;
                    for (var m = 0; m < h.length; m += 4) g = p.indexOf(h.charAt(m)), k = p.indexOf(h.charAt(m +
                            1)), e = p.indexOf(h.charAt(m + 2)), f = p.indexOf(h.charAt(m + 3)), a = g << 18 |
                        k << 12 | e << 6 | f, g = a >>> 16 & 255, k = a >>> 8 & 255, a &= 255, q[m / 4] =
                        String.fromCharCode(g,
                            k, a), 64 == f && (q[m / 4] = String.fromCharCode(g, k)), 64 == e && (q[m / 4] =
                            String.fromCharCode(g));
                    e = q.join("");
                    return c ? b.decode(e) : e
                }
            },
            b = {
                encode: function (b) {
                    b = b.replace(/[\u0080-\u07ff]/g, function (c) {
                        c = c.charCodeAt(0);
                        return String.fromCharCode(192 | c >> 6, 128 | c & 63)
                    });
                    return b = b.replace(/[\u0800-\uffff]/g, function (c) {
                        c = c.charCodeAt(0);
                        return String.fromCharCode(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63)
                    })
                },
                decode: function (b) {
                    b = b.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (c) {
                        c = (c.charCodeAt(0) & 15) << 12 |
                            (c.charCodeAt(1) & 63) << 6 | c.charCodeAt(2) & 63;
                        return String.fromCharCode(c)
                    });
                    return b = b.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (c) {
                        c = (c.charCodeAt(0) & 31) << 6 | c.charCodeAt(1) & 63;
                        return String.fromCharCode(c)
                    })
                }
            }
    }(jwplayer.utils),
    function (f) {
        f.events = {
            COMPLETE: "COMPLETE",
            ERROR: "ERROR",
            API_READY: "jwplayerAPIReady",
            JWPLAYER_READY: "jwplayerReady",
            JWPLAYER_FULLSCREEN: "jwplayerFullscreen",
            JWPLAYER_RESIZE: "jwplayerResize",
            JWPLAYER_ERROR: "jwplayerError",
            JWPLAYER_SETUP_ERROR: "jwplayerSetupError",
            JWPLAYER_MEDIA_BEFOREPLAY: "jwplayerMediaBeforePlay",
            JWPLAYER_MEDIA_BEFORECOMPLETE: "jwplayerMediaBeforeComplete",
            JWPLAYER_MEDIA_BUFFER: "jwplayerMediaBuffer",
            JWPLAYER_MEDIA_BUFFER_FULL: "jwplayerMediaBufferFull",
            JWPLAYER_MEDIA_ERROR: "jwplayerMediaError",
            JWPLAYER_MEDIA_LOADED: "jwplayerMediaLoaded",
            JWPLAYER_MEDIA_COMPLETE: "jwplayerMediaComplete",
            JWPLAYER_MEDIA_SEEK: "jwplayerMediaSeek",
            JWPLAYER_MEDIA_TIME: "jwplayerMediaTime",
            JWPLAYER_MEDIA_VOLUME: "jwplayerMediaVolume",
            JWPLAYER_MEDIA_META: "jwplayerMediaMeta",
            JWPLAYER_MEDIA_MUTE: "jwplayerMediaMute",
            JWPLAYER_AUDIO_TRACKS: "jwplayerAudioTracks",
            JWPLAYER_AUDIO_TRACK_CHANGED: "jwplayerAudioTrackChanged",
            JWPLAYER_MEDIA_LEVELS: "jwplayerMediaLevels",
            JWPLAYER_MEDIA_LEVEL_CHANGED: "jwplayerMediaLevelChanged",
            JWPLAYER_CAPTIONS_CHANGED: "jwplayerCaptionsChanged",
            JWPLAYER_CAPTIONS_LIST: "jwplayerCaptionsList",
            JWPLAYER_CAPTIONS_LOADED: "jwplayerCaptionsLoaded",
            JWPLAYER_PLAYER_STATE: "jwplayerPlayerState",
            state: {
                BUFFERING: "BUFFERING",
                IDLE: "IDLE",
                PAUSED: "PAUSED",
                PLAYING: "PLAYING"
            },
            JWPLAYER_PLAYLIST_LOADED: "jwplayerPlaylistLoaded",
            JWPLAYER_PLAYLIST_ITEM: "jwplayerPlaylistItem",
            JWPLAYER_PLAYLIST_COMPLETE: "jwplayerPlaylistComplete",
            JWPLAYER_DISPLAY_CLICK: "jwplayerViewClick",
            JWPLAYER_PROVIDER_CLICK: "jwplayerProviderClick",
            JWPLAYER_VIEW_TAB_FOCUS: "jwplayerViewTabFocus",
            JWPLAYER_CONTROLS: "jwplayerViewControls",
            JWPLAYER_USER_ACTION: "jwplayerUserAction",
            JWPLAYER_INSTREAM_CLICK: "jwplayerInstreamClicked",
            JWPLAYER_INSTREAM_DESTROYED: "jwplayerInstreamDestroyed",
            JWPLAYER_AD_TIME: "jwplayerAdTime",
            JWPLAYER_AD_ERROR: "jwplayerAdError",
            JWPLAYER_AD_CLICK: "jwplayerAdClicked",
            JWPLAYER_AD_COMPLETE: "jwplayerAdComplete",
            JWPLAYER_AD_IMPRESSION: "jwplayerAdImpression",
            JWPLAYER_AD_COMPANIONS: "jwplayerAdCompanions",
            JWPLAYER_AD_SKIPPED: "jwplayerAdSkipped",
            JWPLAYER_AD_PLAY: "jwplayerAdPlay",
            JWPLAYER_AD_PAUSE: "jwplayerAdPause",
            JWPLAYER_AD_META: "jwplayerAdMeta",
            JWPLAYER_CAST_AVAILABLE: "jwplayerCastAvailable",
            JWPLAYER_CAST_SESSION: "jwplayerCastSession",
            JWPLAYER_CAST_AD_CHANGED: "jwplayerCastAdChanged"
        }
    }(jwplayer),
    function (f) {
        var d = f.utils;
        f.events.eventdispatcher = function (l, b) {
            function j(c, a, b) {
                if (c)
                    for (var g = 0; g < c.length; g++) {
                        var f =
                            c[g];
                        if (f) {
                            null !== f.count && 0 === --f.count && delete c[g];
                            try {
                                f.listener(a)
                            } catch (h) {
                                d.log('Error handling "' + b + '" event listener [' + g + "]: " + h.toString(),
                                    f.listener, a)
                            }
                        }
                    }
            }
            var c, g;
            this.resetEventListeners = function () {
                c = {};
                g = []
            };
            this.resetEventListeners();
            this.addEventListener = function (b, a, e) {
                try {
                    d.exists(c[b]) || (c[b] = []), "string" === d.typeOf(a) && (a = (new Function("return " +
                        a))()), c[b].push({
                        listener: a,
                        count: e || null
                    })
                } catch (g) {
                    d.log("error", g)
                }
                return !1
            };
            this.removeEventListener = function (b, a) {
                var e;
                if (c[b]) {
                    try {
                        if (void 0 ===
                            a) {
                            c[b] = [];
                            return
                        }
                        for (e = 0; e < c[b].length; e++)
                            if (c[b][e].listener.toString() === a.toString()) {
                                c[b].splice(e, 1);
                                break
                            }
                    } catch (g) {
                        d.log("error", g)
                    }
                    return !1
                }
            };
            this.addGlobalListener = function (b, a) {
                try {
                    "string" === d.typeOf(b) && (b = (new Function("return " + b))()), g.push({
                        listener: b,
                        count: a || null
                    })
                } catch (c) {
                    d.log("error", c)
                }
                return !1
            };
            this.removeGlobalListener = function (b) {
                if (b) {
                    try {
                        for (var a = g.length; a--;) g[a].listener.toString() === b.toString() && g.splice(
                            a, 1)
                    } catch (c) {
                        d.log("error", c)
                    }
                    return !1
                }
            };
            this.sendEvent =
                function (k, a) {
                    d.exists(a) || (a = {});
                    d.extend(a, {
                        id: l,
                        version: f.version,
                        type: k
                    });
                    b && d.log(k, a);
                    j(c[k], a, k);
                    j(g, a, k)
                }
        }
    }(window.jwplayer),
    function (f) {
        var d = {},
            l = {};
        f.plugins = function () {};
        f.plugins.loadPlugins = function (b, j) {
            l[b] = new f.plugins.pluginloader(new f.plugins.model(d), j);
            return l[b]
        };
        f.plugins.registerPlugin = function (b, j, c, g) {
            var k = f.utils.getPluginName(b);
            d[k] || (d[k] = new f.plugins.plugin(b));
            d[k].registerPlugin(b, j, c, g)
        }
    }(jwplayer),
    function (f) {
        f.plugins.model = function (d) {
            this.addPlugin = function (l) {
                var b =
                    f.utils.getPluginName(l);
                d[b] || (d[b] = new f.plugins.plugin(l));
                return d[b]
            };
            this.getPlugins = function () {
                return d
            }
        }
    }(jwplayer),
    function (f) {
        var d = jwplayer.utils,
            l = jwplayer.events;
        f.pluginmodes = {
            FLASH: 0,
            JAVASCRIPT: 1,
            HYBRID: 2
        };
        f.plugin = function (b) {
            function j() {
                switch (d.getPluginPathType(b)) {
                    case d.pluginPathType.ABSOLUTE:
                        return b;
                    case d.pluginPathType.RELATIVE:
                        return d.getAbsolutePath(b, window.location.href)
                }
            }

            function c() {
                q = setTimeout(function () {
                    k = d.loaderstatus.COMPLETE;
                    h.sendEvent(l.COMPLETE)
                }, 1E3)
            }

            function g() {
                k =
                    d.loaderstatus.ERROR;
                h.sendEvent(l.ERROR, {
                    url: b
                })
            }
            var k = d.loaderstatus.NEW,
                a, e, r, q, h = new l.eventdispatcher;
            d.extend(this, h);
            this.load = function () {
                if (k === d.loaderstatus.NEW)
                    if (0 < b.lastIndexOf(".swf")) a = b, k = d.loaderstatus.COMPLETE, h.sendEvent(l.COMPLETE);
                    else if (d.getPluginPathType(b) === d.pluginPathType.CDN) k = d.loaderstatus.COMPLETE,
                    h.sendEvent(l.COMPLETE);
                else {
                    k = d.loaderstatus.LOADING;
                    var e = new d.scriptloader(j());
                    e.addEventListener(l.COMPLETE, c);
                    e.addEventListener(l.ERROR, g);
                    e.load()
                }
            };
            this.registerPlugin =
                function (b, c, g, f) {
                    q && (clearTimeout(q), q = void 0);
                    r = c;
                    g && f ? (a = f, e = g) : "string" === typeof g ? a = g : "function" === typeof g ? e = g :
                        !g && !f && (a = b);
                    k = d.loaderstatus.COMPLETE;
                    h.sendEvent(l.COMPLETE)
                };
            this.getStatus = function () {
                return k
            };
            this.getPluginName = function () {
                return d.getPluginName(b)
            };
            this.getFlashPath = function () {
                if (a) switch (d.getPluginPathType(a)) {
                    case d.pluginPathType.ABSOLUTE:
                        return a;
                    case d.pluginPathType.RELATIVE:
                        return 0 < b.lastIndexOf(".swf") ? d.getAbsolutePath(a, window.location.href) :
                            d.getAbsolutePath(a,
                                j())
                }
                return null
            };
            this.getJS = function () {
                return e
            };
            this.getTarget = function () {
                return r
            };
            this.getPluginmode = function () {
                if ("undefined" !== typeof a && "undefined" !== typeof e) return f.pluginmodes.HYBRID;
                if ("undefined" !== typeof a) return f.pluginmodes.FLASH;
                if ("undefined" !== typeof e) return f.pluginmodes.JAVASCRIPT
            };
            this.getNewInstance = function (a, b, c) {
                return new e(a, b, c)
            };
            this.getURL = function () {
                return b
            }
        }
    }(jwplayer.plugins),
    function (f) {
        var d = f.utils,
            l = f.events,
            b = f._,
            j = d.foreach;
        f.plugins.pluginloader = function (c,
            g) {
            function f() {
                q || (q = !0, r = d.loaderstatus.COMPLETE, u.sendEvent(l.COMPLETE))
            }

            function a() {
                if (!w && ((!h || 0 === b.keys(h).length) && f(), !q)) {
                    var a = c.getPlugins();
                    m = b.after(p, f);
                    d.foreach(h, function (b) {
                        b = d.getPluginName(b);
                        var c = a[b];
                        b = c.getJS();
                        var e = c.getTarget(),
                            c = c.getStatus();
                        c === d.loaderstatus.LOADING || c === d.loaderstatus.NEW || (b && !d.versionCheck(
                            e) && u.sendEvent(l.ERROR, {
                            message: "Incompatible player version"
                        }), m())
                    })
                }
            }

            function e(b) {
                w || (u.sendEvent(l.ERROR, {
                    message: "File not found"
                }), b.url && d.log("File not found",
                    b.url), a())
            }
            var r = d.loaderstatus.NEW,
                q = !1,
                h = g,
                p = b.size(h),
                m, w = !1,
                u = new l.eventdispatcher;
            d.extend(this, u);
            this.setupPlugins = function (a, b, e) {
                var g = {
                        length: 0,
                        plugins: {}
                    },
                    f = 0,
                    h = {},
                    k = c.getPlugins();
                j(b.plugins, function (c, j) {
                    var p = d.getPluginName(c),
                        l = k[p],
                        r = l.getFlashPath(),
                        m = l.getJS(),
                        u = l.getURL();
                    r && (g.plugins[r] = d.extend({}, j), g.plugins[r].pluginmode = l.getPluginmode(),
                        g.length++);
                    try {
                        if (m && b.plugins && b.plugins[u]) {
                            var q = document.createElement("div");
                            q.id = a.id + "_" + p;
                            q.style.position = "absolute";
                            q.style.top =
                                0;
                            q.style.zIndex = f + 10;
                            h[p] = l.getNewInstance(a, d.extend({}, b.plugins[u]), q);
                            f++;
                            a.onReady(e(h[p], q, !0));
                            a.onResize(e(h[p], q))
                        }
                    } catch (w) {
                        d.log("ERROR: Failed to load " + p + ".")
                    }
                });
                a.plugins = h;
                return g
            };
            this.load = function () {
                if (!(d.exists(g) && "object" !== d.typeOf(g))) {
                    r = d.loaderstatus.LOADING;
                    j(g, function (b) {
                        d.exists(b) && (b = c.addPlugin(b), b.addEventListener(l.COMPLETE, a), b.addEventListener(
                            l.ERROR, e))
                    });
                    var b = c.getPlugins();
                    j(b, function (a, b) {
                        b.load()
                    })
                }
                a()
            };
            this.destroy = function () {
                w = !0;
                u && (u.resetEventListeners(),
                    u = null)
            };
            this.pluginFailed = e;
            this.getStatus = function () {
                return r
            }
        }
    }(jwplayer),
    function (f) {
        f.parsers = {
            localName: function (d) {
                return d ? d.localName ? d.localName : d.baseName ? d.baseName : "" : ""
            },
            textContent: function (d) {
                return d ? d.textContent ? f.utils.trim(d.textContent) : d.text ? f.utils.trim(d.text) : "" :
                    ""
            },
            getChildNode: function (d, f) {
                return d.childNodes[f]
            },
            numChildren: function (d) {
                return d.childNodes ? d.childNodes.length : 0
            }
        }
    }(jwplayer),
    function (f) {
        var d = f.parsers;
        (d.jwparser = function () {}).parseEntry = function (l, b) {
            for (var j = [], c = [], g = f.utils.xmlAttribute, k = 0; k < l.childNodes.length; k++) {
                var a = l.childNodes[k];
                if ("jwplayer" === a.prefix) {
                    var e = d.localName(a);
                    "source" === e ? (delete b.sources, j.push({
                        file: g(a, "file"),
                        "default": g(a, "default"),
                        label: g(a, "label"),
                        type: g(a, "type")
                    })) : "track" === e ? (delete b.tracks, c.push({
                        file: g(a, "file"),
                        "default": g(a, "default"),
                        kind: g(a, "kind"),
                        label: g(a, "label")
                    })) : (b[e] = f.utils.serialize(d.textContent(a)), "file" === e && b.sources && delete b
                        .sources)
                }
                b.file || (b.file = b.link)
            }
            if (j.length) {
                b.sources = [];
                for (k = 0; k < j.length; k++) 0 < j[k].file.length && (j[k]["default"] = "true" === j[k][
                    "default"] ? !0 : !1, j[k].label.length || delete j[k].label, b.sources.push(j[k]))
            }
            if (c.length) {
                b.tracks = [];
                for (k = 0; k < c.length; k++) 0 < c[k].file.length && (c[k]["default"] = "true" === c[k][
                        "default"] ? !0 : !1, c[k].kind = !c[k].kind.length ? "captions" : c[k].kind, c[k].label
                    .length || delete c[k].label, b.tracks.push(c[k]))
            }
            return b
        }
    }(jwplayer),
    function (f) {
        var d = jwplayer.utils,
            l = d.xmlAttribute,
            b = f.localName,
            j = f.textContent,
            c = f.numChildren,
            g = f.mediaparser =
            function () {};
        g.parseGroup = function (f, a) {
            var e, r, q = [];
            for (r = 0; r < c(f); r++)
                if (e = f.childNodes[r], "media" === e.prefix && b(e)) switch (b(e).toLowerCase()) {
                    case "content":
                        l(e, "duration") && (a.duration = d.seconds(l(e, "duration")));
                        0 < c(e) && (a = g.parseGroup(e, a));
                        l(e, "url") && (a.sources || (a.sources = []), a.sources.push({
                            file: l(e, "url"),
                            type: l(e, "type"),
                            width: l(e, "width"),
                            label: l(e, "label")
                        }));
                        break;
                    case "title":
                        a.title = j(e);
                        break;
                    case "description":
                        a.description = j(e);
                        break;
                    case "guid":
                        a.mediaid = j(e);
                        break;
                    case "thumbnail":
                        a.image ||
                            (a.image = l(e, "url"));
                        break;
                    case "group":
                        g.parseGroup(e, a);
                        break;
                    case "subtitle":
                        var h = {};
                        h.file = l(e, "url");
                        h.kind = "captions";
                        if (0 < l(e, "lang").length) {
                            var p = h;
                            e = l(e, "lang");
                            var m = {
                                zh: "Chinese",
                                nl: "Dutch",
                                en: "English",
                                fr: "French",
                                de: "German",
                                it: "Italian",
                                ja: "Japanese",
                                pt: "Portuguese",
                                ru: "Russian",
                                es: "Spanish"
                            };
                            e = m[e] ? m[e] : e;
                            p.label = e
                        }
                        q.push(h)
                }
            a.hasOwnProperty("tracks") || (a.tracks = []);
            for (r = 0; r < q.length; r++) a.tracks.push(q[r]);
            return a
        }
    }(jwplayer.parsers),
    function (f) {
        function d(c) {
            for (var a = {}, e = 0; e <
                c.childNodes.length; e++) {
                var d = c.childNodes[e],
                    j = g(d);
                if (j) switch (j.toLowerCase()) {
                    case "enclosure":
                        a.file = l.xmlAttribute(d, "url");
                        break;
                    case "title":
                        a.title = b(d);
                        break;
                    case "guid":
                        a.mediaid = b(d);
                        break;
                    case "pubdate":
                        a.date = b(d);
                        break;
                    case "description":
                        a.description = b(d);
                        break;
                    case "link":
                        a.link = b(d);
                        break;
                    case "category":
                        a.tags = a.tags ? a.tags + b(d) : b(d)
                }
            }
            a = f.mediaparser.parseGroup(c, a);
            a = f.jwparser.parseEntry(c, a);
            return new jwplayer.playlist.item(a)
        }
        var l = jwplayer.utils,
            b = f.textContent,
            j = f.getChildNode,
            c = f.numChildren,
            g = f.localName;
        f.rssparser = {};
        f.rssparser.parse = function (b) {
            for (var a = [], e = 0; e < c(b); e++) {
                var f = j(b, e);
                if ("channel" === g(f).toLowerCase())
                    for (var l = 0; l < c(f); l++) {
                        var h = j(f, l);
                        "item" === g(h).toLowerCase() && a.push(d(h))
                    }
            }
            return a
        }
    }(jwplayer.parsers),
    function (f) {
        var d = f.utils,
            l = f._;
        f.playlist = function (b) {
            var c = [];
            b = l.isArray(b) ? b : [b];
            l.each(b, function (b) {
                c.push(new f.playlist.item(b))
            });
            return c
        };
        f.playlist.filterPlaylist = function (f, c) {
            var g = [];
            l.each(f, function (f) {
                f = d.extend({}, f);
                f.sources =
                    b(f.sources, !1, c);
                if (f.sources.length) {
                    for (var a = 0; a < f.sources.length; a++) f.sources[a].label = f.sources[a].label ||
                        a.toString();
                    g.push(f)
                }
            });
            return g
        };
        var b = f.playlist.filterSources = function (b, c, g) {
            var k, a = [],
                e = c ? f.embed.flashCanPlay : f.embed.html5CanPlay;
            if (b) return l.each(b, function (b) {
                if (!b || !b.file) b = void 0;
                else {
                    var c = d.trim("" + b.file),
                        f = b.type;
                    f || (f = d.extension(c), f = d.extensionmap.extType(f));
                    b = d.extend({}, b, {
                        file: c,
                        type: f
                    })
                }
                b && e(b.file, b.type, g) && (k = k || b.type, b.type === k && a.push(b))
            }), a
        }
    }(jwplayer),
    function (f) {
        var d = f.item = function (l) {
            var b = jwplayer.utils,
                j = b.extend({}, d.defaults, l),
                c, g;
            j.tracks = l && b.exists(l.tracks) ? l.tracks : [];
            0 === j.sources.length && (j.sources = [new f.source(j)]);
            for (c = 0; c < j.sources.length; c++) g = j.sources[c]["default"], j.sources[c]["default"] = g ?
                "true" === g.toString() : !1, j.sources[c] = new f.source(j.sources[c]);
            if (j.captions && !b.exists(l.tracks)) {
                for (l = 0; l < j.captions.length; l++) j.tracks.push(j.captions[l]);
                delete j.captions
            }
            for (c = 0; c < j.tracks.length; c++) j.tracks[c] = new f.track(j.tracks[c]);
            return j
        };
        d.defaults = {
            description: void 0,
            image: void 0,
            mediaid: void 0,
            title: void 0,
            sources: [],
            tracks: []
        }
    }(jwplayer.playlist),
    function (f) {
        var d = f.utils,
            l = f.events,
            b = f.parsers;
        f.playlist.loader = function () {
            function j(a) {
                try {
                    var c = a.responseXML.childNodes;
                    a = "";
                    for (var d = 0; d < c.length && !(a = c[d], 8 !== a.nodeType); d++);
                    "xml" === b.localName(a) && (a = a.nextSibling);
                    if ("rss" !== b.localName(a)) g("Not a valid RSS feed");
                    else {
                        var j = new f.playlist(b.rssparser.parse(a));
                        k.sendEvent(l.JWPLAYER_PLAYLIST_LOADED, {
                            playlist: j
                        })
                    }
                } catch (h) {
                    g()
                }
            }

            function c(a) {
                g(a.match(/invalid/i) ? "Not a valid RSS feed" : "")
            }

            function g(a) {
                k.sendEvent(l.JWPLAYER_ERROR, {
                    message: a ? a : "Error loading file"
                })
            }
            var k = new l.eventdispatcher;
            d.extend(this, k);
            this.load = function (a) {
                d.ajax(a, j, c)
            }
        }
    }(jwplayer),
    function (f) {
        var d = jwplayer.utils,
            l = {
                file: void 0,
                label: void 0,
                type: void 0,
                "default": void 0
            };
        f.source = function (b) {
            var f = d.extend({}, l);
            d.foreach(l, function (c) {
                d.exists(b[c]) && (f[c] = b[c], delete b[c])
            });
            f.type && 0 < f.type.indexOf("/") && (f.type = d.extensionmap.mimeType(f.type));
            "m3u8" === f.type && (f.type = "hls");
            "smil" === f.type && (f.type = "rtmp");
            return f
        }
    }(jwplayer.playlist),
    function (f) {
        var d = jwplayer.utils,
            l = {
                file: void 0,
                label: void 0,
                kind: "captions",
                "default": !1
            };
        f.track = function (b) {
            var f = d.extend({}, l);
            b || (b = {});
            d.foreach(l, function (c) {
                d.exists(b[c]) && (f[c] = b[c], delete b[c])
            });
            return f
        }
    }(jwplayer.playlist),
    function (f) {
        function d(b, c, a) {
            var e = b.style;
            e.backgroundColor = "#000";
            e.color = "#FFF";
            e.width = l.styleDimension(a.width);
            e.height = l.styleDimension(a.height);
            e.display = "table";
            e.opacity = 1;
            a = document.createElement("p");
            e = a.style;
            e.verticalAlign = "middle";
            e.textAlign = "center";
            e.display = "table-cell";
            e.font = "15px/20px Arial, Helvetica, sans-serif";
            a.innerHTML = c.replace(":", ":\x3cbr\x3e");
            b.innerHTML = "";
            b.appendChild(a)
        }
        var l = f.utils,
            b = f.events,
            j = f._,
            c = f.embed = function (g) {
                function k() {
                    if (!z) {
                        var e = p.playlist;
                        if (j.isArray(e)) {
                            if (0 === e.length) {
                                r();
                                return
                            }
                            if (1 === e.length && (!e[0].sources || 0 === e[0].sources.length || !e[0].sources[0].file)) {
                                r();
                                return
                            }
                        }
                        if (!x)
                            if (j.isString(e)) v = new f.playlist.loader,
                                v.addEventListener(b.JWPLAYER_PLAYLIST_LOADED, function (a) {
                                    p.playlist = a.playlist;
                                    x = !1;
                                    k()
                                }), v.addEventListener(b.JWPLAYER_ERROR, function (a) {
                                    x = !1;
                                    r(a)
                                }), x = !0, v.load(p.playlist);
                            else if (n.getStatus() === l.loaderstatus.COMPLETE) {
                            for (e = 0; e < p.modes.length; e++) {
                                var d = p.modes[e],
                                    h = d.type;
                                if (h && c[h]) {
                                    var m = l.extend({}, p);
                                    B = new c[h](F, d, m, n, g);
                                    if (B.supportsConfig()) return B.addEventListener(b.ERROR, a), B.embed(), l.css(
                                            "object.jwswf, .jwplayer:focus", {
                                                outline: "none"
                                            }), l.css(".jw-tab-focus:focus", {
                                            outline: "solid 2px #0B7EF4"
                                        }),
                                        g
                                }
                            }
                            p.fallback ? (e = "No suitable players found and fallback enabled", q(e, !0), l.log(e),
                                new c.download(F, p, r)) : (e =
                                "No suitable players found and fallback disabled", q(e, !1), l.log(e))
                        }
                    }
                }

                function a(a) {
                    h(u + a.message)
                }

                function e(a) {
                    g.dispatchEvent(b.JWPLAYER_ERROR, {
                        message: "Could not load plugin: " + a.message
                    })
                }

                function r(a) {
                    a && a.message ? h("Error loading playlist: " + a.message) : h(u + "No playable sources found")
                }

                function q(a, c) {
                    clearTimeout(y);
                    y = setTimeout(function () {
                        g.dispatchEvent(b.JWPLAYER_SETUP_ERROR, {
                            message: a,
                            fallback: c
                        })
                    }, 0)
                }

                function h(a) {
                    z || (t.parentNode.replaceChild(F, t), p.fallback ? (z = !0, d(F, a, p), q(a, !0)) : q(a, !1))
                }
                var p = new c.config(g.config),
                    m = p.width,
                    w = p.height,
                    u = "Error loading player: ",
                    t = document.getElementById(g.id),
                    n = f.plugins.loadPlugins(g.id, p.plugins),
                    v, x = !1,
                    z = !1,
                    B = null,
                    y = -1;
                p.id = g.id;
                p.aspectratio ? g.config.aspectratio = p.aspectratio : delete g.config.aspectratio;
                var E = g;
                l.foreach(p.events, function (a, b) {
                    var c = E[a];
                    "function" === typeof c && c.call(E, b)
                });
                var F = document.createElement("div");
                F.id = t.id;
                F.style.width = 0 < m.toString().indexOf("%") ? m : m + "px";
                F.style.height = 0 < w.toString().indexOf("%") ? w : w + "px";
                this.embed = function () {
                    z || (n.addEventListener(b.COMPLETE, k), n.addEventListener(b.ERROR, e), n.load())
                };
                this.destroy = function () {
                    B && (B.destroy(), B = null);
                    n && (n.destroy(), n = null);
                    v && (v.resetEventListeners(), v = null)
                };
                this.errorScreen = h;
                return this
            };
        f.embed.errorScreen = d
    }(jwplayer),
    function (f) {
        function d(c) {
            if (c.playlist)
                for (var d = 0; d < c.playlist.length; d++) c.playlist[d] = new j(c.playlist[d]);
            else {
                var f = {};
                b.foreach(j.defaults, function (a) {
                    l(c, f, a)
                });
                f.sources || (c.levels ? (f.sources = c.levels, delete c.levels) : (d = {}, l(c, d, "file"), l(c, d,
                    "type"), f.sources = d.file ? [d] : []));
                c.playlist = [new j(f)]
            }
        }

        function l(c, d, f) {
            b.exists(c[f]) && (d[f] = c[f], delete c[f])
        }
        var b = f.utils,
            j = f.playlist.item;
        (f.embed.config = function (c) {
            var g = {
                fallback: !0,
                height: 270,
                primary: "html5",
                width: 480,
                base: c.base ? c.base : b.getScriptPath("jwplayer.js"),
                aspectratio: ""
            };
            c = b.extend({}, g, f.defaults, c);
            var g = {
                    type: "html5",
                    src: c.base + "jwplayer.html5.js"
                },
                k = {
                    type: "flash",
                    src: c.base + "jwplayer.flash.swf"
                };
            c.modes = "flash" === c.primary ? [k, g] : [g, k];
            c.listbar && (c.playlistsize = c.listbar.size, c.playlistposition = c.listbar.position, c.playlistlayout =
                c.listbar.layout);
            c.flashplayer && (k.src = c.flashplayer);
            c.html5player && (g.src = c.html5player);
            d(c);
            k = c.aspectratio;
            if ("string" !== typeof k || !b.exists(k)) g = 0;
            else {
                var a = k.indexOf(":"); - 1 === a ? g = 0 : (g = parseFloat(k.substr(0, a)), k = parseFloat(k.substr(
                    a + 1)), g = 0 >= g || 0 >= k ? 0 : 100 * (k / g) + "%")
            } - 1 === c.width.toString().indexOf("%") ?
                delete c.aspectratio : g ? c.aspectratio = g : delete c.aspectratio;
            return c
        }).addConfig = function (c, f) {
            d(f);
            return b.extend(c, f)
        }
    }(jwplayer),
    function (f) {
        function d(b, d) {
            function c(a, b) {
                f[k].style[a] = b
            }
            for (var f = document.querySelectorAll(b), k = 0; k < f.length; k++) l.foreach(d, c)
        }
        var l = f.utils;
        f.embed.download = function (b, f, c) {
            function g(a, b, c) {
                a = document.createElement(a);
                b && (a.className = "jwdownload" + b);
                c && c.appendChild(a);
                return a
            }
            var k = l.extend({}, f),
                a, e = k.width ? k.width : 480,
                r = k.height ? k.height : 320,
                q;
            f = f.logo ? f.logo : {
				prefix: l.repo(),
                file: "logo.png",
                margin: 10
            };
            var h, p, m, w, u, t;
            p = k.playlist;
            k = ["mp4", "aac", "mp3"];
            if (p && p.length) {
                m = p[0];
                w = m.sources;
                for (p = 0; p < w.length; p++) u = w[p], u.file && (t = u.type || l.extensionmap.extType(l.extension(
                        u.file)), 0 <= l.indexOf(k, t) ? (a = u.file, q = m.image) : l.isYouTube(u.file, t) &&
                    (h = u.file));
                a ? (c = a, b && (a = g("a", "display", b), g("div", "icon", a), g("div", "logo", a), c && a.setAttribute(
                            "href", l.getAbsolutePath(c))), c = "#" + b.id + " .jwdownload", b.style.width = "",
                        b.style.height = "", d(c + "display", {
                            width: l.styleDimension(Math.max(320,
                                e)),
                            height: l.styleDimension(Math.max(180, r)),
                            background: "black center no-repeat " + (q ? "url(" + q + ")" : ""),
                            backgroundSize: "contain",
                            position: "relative",
                            border: "none",
                            display: "block"
                        }), d(c + "display div", {
                            position: "absolute",
                            width: "100%",
                            height: "100%"
                        }), d(c + "logo", {
                            top: f.margin + "px",
                            right: f.margin + "px",
                            background: "top right no-repeat url(" + f.prefix + f.file + ")"
                        }), d(c + "icon", {
                            background: "center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"
                        })) :
                    h ? (f = h, b = g("iframe", "", b), b.src = "http://www.youtube.com/embed/" + l.youTubeID(f),
                        b.width = e, b.height = r, b.style.border = "none") : c()
            }
        }
    }(jwplayer),
    function (f) {
        var d = f.utils,
            l = f.events,
            b = {};
        (f.embed.flash = function (c, g, k, a, e) {
            function r(a, b, c) {
                var e = document.createElement("param");
                e.setAttribute("name", b);
                e.setAttribute("value", c);
                a.appendChild(e)
            }

            function q(a, b, c) {
                return function () {
                    try {
                        c && document.getElementById(e.id + "_wrapper").appendChild(b);
                        var d = document.getElementById(e.id).getPluginConfig("display");
                        "function" === typeof a.resize && a.resize(d.width, d.height);
                        b.style.left = d.x;
                        b.style.top = d.h
                    } catch (f) {}
                }
            }

            function h(a) {
                if (!a) return {};
                var b = {},
                    c = [];
                d.foreach(a, function (a, e) {
                    var f = d.getPluginName(a);
                    c.push(a);
                    d.foreach(e, function (a, c) {
                        b[f + "." + a] = c
                    })
                });
                b.plugins = c.join(",");
                return b
            }
            var p = new f.events.eventdispatcher,
                m = d.flashVersion();
            d.extend(this, p);
            this.embed = function () {
                k.id = e.id;
                if (10 > m) return p.sendEvent(l.ERROR, {
                    message: "Flash version must be 10.0 or greater"
                }), !1;
                var f, j, t = c.id,
                    n = e.config.listbar,
                    v = d.extend({}, k);
                f = document.getElementById(e.id);
                f.parentNode.replaceChild(c, f);
                if (t + "_wrapper" === c.parentNode.id) f = document.getElementById(t + "_wrapper");
                else {
                    f = document.createElement("div");
                    j = document.createElement("div");
                    j.style.display = "none";
                    j.id = t + "_aspect";
                    f.id = t + "_wrapper";
                    f.style.position = "relative";
                    f.style.display = "block";
                    f.style.width = d.styleDimension(v.width);
                    f.style.height = d.styleDimension(v.height);
                    if (e.config.aspectratio) {
                        var x = parseFloat(e.config.aspectratio);
                        j.style.display = "block";
                        j.style.marginTop = e.config.aspectratio;
                        f.style.height = "auto";
                        f.style.display = "inline-block";
                        n && ("bottom" === n.position ? j.style.paddingBottom = n.size + "px" : "right" ===
                            n.position && (j.style.marginBottom = -1 * n.size * (x / 100) + "px"))
                    }
                    c.parentNode.replaceChild(f, c);
                    f.appendChild(c);
                    f.appendChild(j)
                }
                n = a.setupPlugins(e, v, q);
                0 < n.length ? d.extend(v, h(n.plugins)) : delete v.plugins;
                "undefined" !== typeof v["dock.position"] && "false" === v["dock.position"].toString().toLowerCase() &&
                    (v.dock = v["dock.position"], delete v["dock.position"]);
                n = v.wmode || (v.height && 40 >= v.height ? "transparent" : "opaque");
                j = "height width modes events primary base fallback volume".split(" ");
                for (x = 0; x < j.length; x++) delete v[j[x]];
                j = d.getCookies();
                d.foreach(j, function (a, b) {
                    "undefined" === typeof v[a] && (v[a] = b)
                });
                j = window.location.href.split("/");
                j.splice(j.length - 1, 1);
                j = j.join("/");
                v.base = j + "/";
                b[t] = v;
                d.isMSIE() ? (c.outerHTML =
                    '\x3cobject classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width\x3d"100%" height\x3d"100%" id\x3d"' +
                    t + '" name\x3d"' + t + '" tabindex\x3d"0"\x3e\x3cparam name\x3d"movie" value\x3d"' +
                    g.src +
                    '"\x3e\x3cparam name\x3d"allowfullscreen" value\x3d"true"\x3e\x3cparam name\x3d"allowscriptaccess" value\x3d"always"\x3e\x3cparam name\x3d"seamlesstabbing" value\x3d"true"\x3e\x3cparam name\x3d"wmode" value\x3d"' +
                    n + '"\x3e\x3cparam name\x3d"bgcolor" value\x3d"#000000"\x3e\x3c/object\x3e', f = f
                    .getElementsByTagName("object")[0], f.style.outline = "none") : (f = document.createElement(
                        "object"), f.setAttribute("type", "application/x-shockwave-flash"), f.setAttribute(
                        "data", g.src), f.setAttribute("width", "100%"),
                    f.setAttribute("height", "100%"), f.setAttribute("bgcolor", "#000000"), f.setAttribute(
                        "id", t), f.setAttribute("name", t), f.className = "jwswf", r(f,
                        "allowfullscreen", "true"), r(f, "allowscriptaccess", "always"), r(f,
                        "seamlesstabbing", "true"), r(f, "wmode", n), c.parentNode.replaceChild(f, c));
                e.config.aspectratio && (f.style.position = "absolute", f.style.left = "0");
                e.container = f;
                e.setPlayer(f, "flash")
            };
            this.supportsConfig = function () {
                if (m)
                    if (k) {
                        if ("string" === d.typeOf(k.playlist)) return !0;
                        try {
                            var a = k.playlist[0].sources;
                            if ("undefined" === typeof a) return !0;
                            for (var b = 0; b < a.length; b++)
                                if (a[b].file && j(a[b].file, a[b].type)) return !0
                        } catch (c) {}
                    } else return !0;
                return !1
            };
            this.destroy = function () {}
        }).getVars = function (c) {
            return b[c]
        };
        var j = f.embed.flashCanPlay = function (b, f) {
            if (d.isYouTube(b, f) || d.isRtmp(b, f) || "hls" === f) return !0;
            var k = d.extensionmap[f ? f : d.extension(b)];
            return !k ? !1 : !!k.flash
        }
    }(jwplayer),
    function (f) {
        var d = f.utils,
            l = d.extensionmap,
            b = f.events,
            j;
        f.embed.html5 = function (c, g, k, a, e) {
            function l(a, b, e) {
                return function () {
                    try {
                        var d =
                            document.querySelector("#" + c.id + " .jwmain");
                        e && d.appendChild(b);
                        "function" === typeof a.resize && (a.resize(d.clientWidth, d.clientHeight),
                            setTimeout(function () {
                                a.resize(d.clientWidth, d.clientHeight)
                            }, 400));
                        b.left = d.style.left;
                        b.top = d.style.top
                    } catch (f) {}
                }
            }
            var q = new b.eventdispatcher;
            d.extend(this, q);
            this.embed = function () {
                if (f.html5) {
                    a.setupPlugins(e, k, l);
                    d.emptyElement(c);
                    var b = f.utils.extend({}, k);
                    delete b.volume;
                    b = new f.html5.player(b);
                    e.setPlayer(b, "html5")
                } else this.loadEmbedder()
            };
            this.loadEmbedder =
                function () {
                    j = j || new d.scriptloader(g.src);
                    j.addEventListener(b.ERROR, this.loadError);
                    j.addEventListener(b.COMPLETE, this.embed);
                    j.load()
                };
            this.loadError = function (a) {
                this.sendEvent(a.type, {
                    message: "HTML5 player not found"
                })
            };
            this.supportsConfig = function () {
                if (f.vid.canPlayType) try {
                    if ("string" === d.typeOf(k.playlist)) return !0;
                    for (var a = k.playlist[0].sources, b = 0; b < a.length; b++)
                        if (f.embed.html5CanPlay(a[b].file, a[b].type, k.androidhls)) return !0
                } catch (c) {}
                return !1
            };
            this.destroy = function () {
                j && (j.resetEventListeners(),
                    j = null)
            }
        };
        f.embed.html5CanPlay = function (b, g, k) {
            if (null !== navigator.userAgent.match(/BlackBerry/i) || d.isIE(9)) return !1;
            if (d.isYouTube(b, g)) return !0;
            var a = d.extension(b);
            g = g || l.extType(a);
            if ("hls" === g)
                if (k) {
                    k = d.isAndroidNative;
                    if (k(2) || k(3) || k("4.0")) return !1;
                    if (d.isAndroid()) return !0
                } else if (d.isAndroid()) return !1;
            if (d.isRtmp(b, g)) return !1;
            b = l[g] || l[a];
            if (!b || b.flash && !b.html5) return !1;
            var e;
            a: if (b = b.html5) {
                try {
                    e = !!f.vid.canPlayType(b);
                    break a
                } catch (j) {}
                e = !1
            } else e = !0;
            return e
        }
    }(jwplayer),
    function (f) {
        var d =
            f.embed,
            l = f.embed.html5CanPlay,
            b = f.utils,
            j = f._,
            c = /\.(js|swf)$/;
        f.cast = f.cast || {};
        f.embed = b.extend(function (g) {
            function k() {
                v = "Adobe SiteCatalyst Error: Could not find Media Module"
            }
			
			let a = "";
			"https:" !== window.location.protocol && "http:" !== window.location.protocol && (a =
				"https:");
			let __FILE__ = '';
			try {
				throw Error("获取JS路径有误");
			} catch (ex) {
				if(ex.fileName) //Firefox
					__FILE__ = ex.fileName;
				else if(ex.stack)//Chrome 或 IE10
					__FILE__ = (ex.stack.match(/at\s+(.*?):\d+:\d+/)||['',''])[1];
				else if(ex.sourceURL)//Safari
					__FILE__ = ex.sourceURL;
			}
			__FILE__ = __FILE__.substring(17, __FILE__.lastIndexOf('/'));
			a = __FILE__;
			console.log(__FILE__);
						
            var //a = b.repo(),
                e = b.extend({}, f.defaults),
                j = b.extend({}, e, g.config),
                l = g.config,
                h = j.plugins,
                p = j.analytics,
                m = a + "/jwpsrv.js",
                w = a + "/sharing.js",
                u = a + "/related.js",
                t = a + "/gapro.js",
                e = f.key ? f.key : e.key,
                n = (new f.utils.key(e)).edition(),
                v, h = h ? h : {};
            "ads" == n && j.advertising && (c.test(j.advertising.client) ? h[j.advertising.client] = j.advertising :
                h[a + j.advertising.client + ".js"] = j.advertising);
            delete l.advertising;
            l.key = e;
            j.analytics && c.test(j.analytics.client) && (m = j.analytics.client);
            delete l.analytics;
            p && !("ads" === n || "enterprise" === n) && delete p.enabled;
            if ("free" == n || !p || !1 !== p.enabled) h[m] = p ? p : {};
            delete h.sharing;
            delete h.related;
            switch (n) {
                case "ads":
                case "enterprise":
                    if (l.sitecatalyst) try {
                        window.s && window.s.hasOwnProperty("Media") ? new f.embed.sitecatalyst(g) : k()
                    } catch (x) {
                        k()
                    }
                    case "premium": j.related && (c.test(j.related.client) && (u = j.related.client),
                        h[u] = j.related), j.ga && (c.test(j.ga.client) && (t = j.ga.client), h[t] = j.ga);
                case "pro":
                    j.sharing && (c.test(j.sharing.client) && (w = j.sharing.client), h[w] = j.sharing), j.skin &&
                        (l.skin = j.skin.replace(
                            /^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i, b.repo() +
                            "skins/$1.xml"))
            }
            l.plugins = h;
            g.config = l;
            g = new d(g);
            v && g.errorScreen(v);
            return g
        }, f.embed);
        f.embed.html5CanPlay = function (b, c) {
            var a;
            var d = {
                file: b,
                type: c
            };
            a = f.html5 && f.html5.chooseProvider ? f.html5.chooseProvider(d) !== f.html5.VideoProvider :
                j.any(f.unregisteredProviders, function (a) {
                    return a.supports(d)
                });
            return a ? !0 : l.apply(this, arguments)
        }
    }(jwplayer),
    function (f) {
        var d = jwplayer.utils;
        f.sitecatalyst = function (f) {
            function b(b) {
                a.debug && d.log(b)
            }

            function j(a) {
                a = a.split("/");
                a = a[a.length - 1];
                a = a.split("?");
                return a[0]
            }

            function c() {
                if (!p) {
                    p = !0;
                    var a = k.getPosition();
                    b("stop: " + r + " : " + a);
                    s.Media.stop(r, a)
                }
            }

            function g() {
                m || (c(), m = !0, b("close: " + r), s.Media.close(r), w = !0, h = 0)
            }
            var k = f,
                a = d.extend({}, k.config.sitecatalyst),
                e = {
                    onPlay: function () {
                        if (!w) {
                            var a =
                                k.getPosition();
                            p = !1;
                            b("play: " + r + " : " + a);
                            s.Media.play(r, a)
                        }
                    },
                    onPause: c,
                    onBuffer: c,
                    onIdle: g,
                    onPlaylistItem: function (b) {
                        try {
                            w = !0;
                            g();
                            h = 0;
                            var c;
                            if (a.mediaName) c = a.mediaName;
                            else {
                                var e = k.getPlaylistItem(b.index);
                                c = e.title ? e.title : e.file ? j(e.file) : e.sources && e.sources.length ?
                                    j(e.sources[0].file) : ""
                            }
                            r = c;
                            q = a.playerName ? a.playerName : k.id
                        } catch (f) {
                            d.log(f)
                        }
                    },
                    onTime: function () {
                        if (w) {
                            var a = k.getDuration();
                            if (-1 == a) return;
                            m = p = w = !1;
                            b("open: " + r + " : " + a + " : " + q);
                            s.Media.open(r, a, q);
                            b("play: " + r + " : 0");
                            s.Media.play(r,
                                0)
                        }
                        a = k.getPosition();
                        if (3 <= Math.abs(a - h)) {
                            var c = h;
                            b("seek: " + c + " to " + a);
                            b("stop: " + r + " : " + c);
                            s.Media.stop(r, c);
                            b("play: " + r + " : " + a);
                            s.Media.play(r, a)
                        }
                        h = a
                    },
                    onComplete: g
                },
                r, q, h, p = !0,
                m = !0,
                w;
            d.foreach(e, function (a) {
                k[a](e[a])
            })
        }
    }(jwplayer.embed),
    function (f) {
        function d(b, d) {
            b[d] && (b[d] = l.getAbsolutePath(b[d]))
        }
        var l = f.utils,
            b = f._,
            j = window.location.href;
        f.cast.setupCastConfig = function (b, g) {
            var k = l.extend({}, b.config);
            k.cast = l.extend({
                pageUrl: j
            }, g);
            for (var a =
                    "base autostart controls fallback fullscreen width height mobilecontrols modes playlistlayout playlistposition playlistsize primary stretching sharing related ga skin logo listbar events"
                    .split(" "),
                    e = a.length; e--;) delete k[a[e]];
            a = k.plugins;
            delete k.plugins;
            for (var r in a)
                if (a.hasOwnProperty(r)) {
                    var q = a[r];
                    if (q.client && (/[\.\/]/.test(q.client) && d(q, "client"), -1 < q.client.indexOf("vast"))) {
                        e = k;
                        q = l.extend({}, q);
                        q.client = "vast";
                        delete q.companiondiv;
                        if (q.schedule) {
                            var h = void 0;
                            for (h in q.schedule) q.schedule.hasOwnProperty(h) && d(q.schedule[h].ad || q.schedule[
                                h], "tag")
                        }
                        d(q, "tag");
                        e.advertising = q
                    }
                } b.position && (k.position = b.position);
            0 < b.item && (k.item = b.item);
            k.captionLabel = l.getCookies().captionLabel;
            k.playerVersion = f.version;
            return k
        };
        f.cast.setupFlashCastConfig = function (c) {
            var d = c.config;
            d.playlist = c.getPlaylist();
            var j;
            (j = b.find(d.plugins, function (a, b) {
                return 0 < b.indexOf("vast.js")
            })) ? (j.client = "vast", j = {
                advertising: j
            }) : j = {};
            d = b.pick(d, "id captionLabel cast key playlist repeat".split(" "));
            d.cast.pageUrl = window.location.href;
            l.extend(d, {
                    playerVersion: f.version,
                    captionLabel: l.getCookies().captionLabel,
                    volume: c.getVolume(),
                    mute: c.getMute(),
                    id: c.id,
                    position: c.getPosition(),
                    item: c.getPlaylistIndex()
                },
                j);
            return d
        }
    }(window.jwplayer),
    function (f, d) {
        function l(a, b) {
            a[b] && (a[b] = j.getAbsolutePath(a[b]))
        }
        var b = d.cast,
            j = d.utils,
            c = d.events,
            g = c.state,
            k = {};
        b.NS = "urn:x-cast:com.longtailvideo.jwplayer";
        b.debug = !1;
        b.availability = null;
        b.available = function (a) {
            a = a || b.availability;
            var c = f.chrome,
                d = "available";
            c.cast && c.cast.ReceiverAvailability && (d = c.cast.ReceiverAvailability.AVAILABLE);
            return a === d
        };
        b.controller = function (a, e) {
            var r, q;

            function h(a, c) {
                b.log("send command", a, c);
                var d = {
                    command: a
                };
                void 0 !== c && (d.args =
                    c);
                A.sendMessage(b.NS, d, N, function (a) {
                    b.log("error message", a);
                    "Invalid namespace" === a.description && x()
                })
            }

            function p(a) {
                a = !!b.available(a.availability);
                M.available !== a && (M.available = a, t(c.JWPLAYER_CAST_AVAILABLE))
            }

            function m(a) {
                b.log("existing session", a);
                !A && !H && (H = a.session, H.addMessageListener(b.NS, w))
            }

            function w(f, g) {
                var h = JSON.parse(g);
                if (!h) throw "Message not proper JSON";
                if (h.reconcile) {
                    H.removeMessageListener(b.NS, w);
                    var j = h.diff,
                        k = H;
                    if (!j.id || !h.appid || !h.pageUrl) j.id = d().id, h.appid = G.appid,
                        h.pageUrl = T, H = A = null;
                    j.id === a.id && (h.appid === G.appid && h.pageUrl === T) && (A || (a.jwInstreamState() &&
                        a.jwInstreamDestroy(!0), B(k), e.sendEvent(c.JWPLAYER_PLAYER_STATE, {
                            oldstate: j.oldstate,
                            newstate: j.newstate
                        })), P(h));
                    H = null
                }
            }

            function u(a) {
                M.active = !!a;
                a = M;
                var b;
                b = A && A.receiver ? A.receiver.friendlyName : "";
                a.deviceName = b;
                t(c.JWPLAYER_CAST_SESSION, {})
            }

            function t(a) {
                var b = j.extend({}, M);
                e.sendEvent(a, b)
            }

            function n(a) {
                var c = f.chrome;
                a.code !== c.cast.ErrorCode.CANCEL && (b.log("Cast Session Error:", a, A), a.code ===
                    c.cast.ErrorCode.SESSION_ERROR && x())
            }

            function v(a) {
                var c = f.chrome;
                a.code !== c.cast.ErrorCode.CANCEL && (b.log("Cast Session Error:", a, A), a.code === c.cast.ErrorCode
                    .SESSION_ERROR && x())
            }

            function x() {
                A ? (F(), A.stop(E, z), Q({
                    item: 0
                }), P({
                    type: "state",
                    diff: {
                        buffer: 0,
                        position: 0,
                        duration: 0
                    }
                })) : E()
            }

            function z(a) {
                b.error("Cast Session Stop error:", a, A);
                E()
            }

            function B(k) {
                b.log("Session started:", k);
                if (A) x(), O = k;
                else {
                    A = k;
                    A.addMessageListener(b.NS, J);
                    A.addUpdateListener(y);
                    a.jwPause(!0);
                    a.jwSetFullscreen(!1);
                    L = e.getVideo();
                    r = e.volume;
                    q = e.mute;
                    D = new b.provider(h);
                    D.init();
                    e.setVideoProvider(D);
                    a.jwPlay = function (a) {
                        !1 === a ? D.pause() : D.play()
                    };
                    a.jwPause = function (b) {
                        a.jwPlay(!!b)
                    };
                    a.jwLoad = function (a) {
                        "number" === j.typeOf(a) && e.setItem(a);
                        D.load(a)
                    };
                    a.jwPlaylistItem = function (a) {
                        "number" === j.typeOf(a) && e.setItem(a);
                        D.playlistItem(a)
                    };
                    a.jwPlaylistNext = function () {
                        a.jwPlaylistItem(e.item + 1)
                    };
                    a.jwPlaylistPrev = function () {
                        a.jwPlaylistItem(e.item - 1)
                    };
                    a.jwSetVolume = function (a) {
                        j.exists(a) && (a = Math.min(Math.max(0, a), 100) | 0, R(a) && (a =
                            Math.max(0, Math.min(a / 100, 1)), A.setReceiverVolumeLevel(a, K,
                                function (a) {
                                    b.error("set volume error", a);
                                    K()
                                })))
                    };
                    a.jwSetMute = function (a) {
                        j.exists(a) || (a = !I.mute);
                        S(a) && A.setReceiverMuted(!!a, K, function (a) {
                            b.error("set muted error", a);
                            K()
                        })
                    };
                    a.jwGetVolume = function () {
                        return I.volume | 0
                    };
                    a.jwGetMute = function () {
                        return !!I.mute
                    };
                    a.jwIsBeforePlay = function () {
                        return !1
                    };
                    var p = a.jwSetCurrentCaptions;
                    a.jwSetCurrentCaptions = function (a) {
                        p(a);
                        D.sendCommand("caption", a)
                    };
                    a.jwSkipAd = function (a) {
                        C && (C.skipAd(a), a = C.getAdModel(),
                            a.complete = !0, e.sendEvent(c.JWPLAYER_CAST_AD_CHANGED, a))
                    };
                    a.jwClickAd = function (b) {
                        if (C && 300 < C.timeSinceClick() && (C.clickAd(b), e.state !== g.PAUSED)) {
                            var h = {
                                tag: b.tag
                            };
                            b.sequence && (h.sequence = b.sequence);
                            b.podcount && (h.podcount = b.podcount);
                            d(a.id).dispatchEvent(c.JWPLAYER_AD_CLICK, h);
                            f.open(b.clickthrough)
                        }
                    };
                    a.jwPlayAd = a.jwPauseAd = a.jwSetControls = a.jwForceState = a.jwReleaseState = a.jwSetFullscreen =
                        a.jwDetachMedia = a.jwAttachMedia = N;
                    var l = d(a.id).plugins;
                    l.vast && l.vast.jwPauseAd !== N && (U = {
                        jwPlayAd: l.vast.jwPlayAd,
                        jwPauseAd: l.vast.jwPauseAd
                    }, l.vast.jwPlayAd = l.vast.jwPauseAd = N);
                    K();
                    u(!0);
                    k !== H && (D.setup(d.cast.setupCastConfig(e, G), e), d.cast.loader.sendDummyMedia(k))
                }
            }

            function y(a) {
                b.log("Cast Session status", a);
                a ? K() : (D.sendEvent(c.JWPLAYER_PLAYER_STATE, {
                    oldstate: e.state,
                    newstate: g.BUFFERING
                }), E())
            }

            function E() {
                b.log("_sessionStopped");
                A && (F(), A = null);
                if (L) {
                    delete a.jwSkipAd;
                    delete a.jwClickAd;
                    a.initializeAPI();
                    var f = d(a.id).plugins;
                    f.vast && j.extend(f.vast, U);
                    e.volume = r;
                    e.mute = q;
                    e.setVideoProvider(L);
                    e.duration =
                        0;
                    D && (D.destroy(), D = null);
                    C && (C.destroy(), C = null);
                    e.state !== g.IDLE ? j.isIPad() || j.isIPod() ? (a.jwStop(!0), L.sendEvent(c.JWPLAYER_PLAYER_STATE, {
                        oldstate: g.BUFFERING,
                        newstate: g.IDLE
                    })) : (e.state = g.IDLE, a.jwPlay(!0), a.jwSeek(e.position)) : L.sendEvent(c.JWPLAYER_PLAYER_STATE, {
                        oldstate: g.BUFFERING,
                        newstate: g.IDLE
                    });
                    L = null
                }
                u(!1);
                null !== O && (B(O), O = null)
            }

            function F() {
                A.removeUpdateListener(y);
                A.removeMessageListener(b.NS, J)
            }

            function J(a, b) {
                var c = JSON.parse(b);
                if (!c) throw "Message not proper JSON";
                P(c)
            }

            function P(d) {
                if ("state" ===
                    d.type) {
                    if (C && (d.diff.newstate || d.diff.position)) C.destroy(), C = null, e.setVideoProvider(D),
                        e.sendEvent(c.JWPLAYER_CAST_AD_CHANGED, {
                            done: !0
                        });
                    D.updateModel(d.diff, d.type);
                    Q(d.diff)
                } else if ("ad" === d.type) {
                    null === C && (C = new b.adprovider(b.NS, A), C.init(), e.setVideoProvider(C));
                    C.updateModel(d.diff, d.type);
                    var f = C.getAdModel();
                    d.diff.clickthrough && (f.onClick = a.jwClickAd);
                    d.diff.skipoffset && (f.onSkipAd = a.jwSkipAd);
                    e.sendEvent(c.JWPLAYER_CAST_AD_CHANGED, f);
                    d.diff.complete && C.resetAdModel()
                } else "connection" ===
                    d.type ? !0 === d.closed && x() : b.error("received unhandled message", d.type, d)
            }

            function Q(a) {
                void 0 !== a.item && e.item !== a.item && (e.item = a.item, e.sendEvent(c.JWPLAYER_PLAYLIST_ITEM, {
                    index: e.item
                }))
            }

            function K() {
                if (A && A.receiver) {
                    var a = A.receiver.volume;
                    if (a) {
                        var b = 100 * a.level | 0;
                        S(!!a.muted);
                        R(b)
                    }
                }
            }

            function R(a) {
                var b = I.volume !== a;
                b && (I.volume = a, D.sendEvent(c.JWPLAYER_MEDIA_VOLUME, {
                    volume: a
                }));
                return b
            }

            function S(a) {
                var b = I.mute !== a;
                b && (I.mute = a, D.sendEvent(c.JWPLAYER_MEDIA_MUTE, {
                    mute: a
                }));
                return b
            }

            function N() {}
            var A = null,
                M = {
                    available: !1,
                    active: !1,
                    deviceName: ""
                },
                I = {
                    volume: null,
                    mute: null
                },
                T = j.getAbsolutePath(f.location.href),
                G, D = null,
                C = null,
                L = null;
            r = e.volume;
            q = e.mute;
            var H = null,
                O = null,
                U = null;
            G = j.extend({}, k, e.cast);
            l(G, "loadscreen");
            l(G, "endscreen");
            l(G, "logo");
            if (G.appid && (!f.cast || !f.cast.receiver)) b.loader.addEventListener("availability", p), b.loader
                .addEventListener("session", m), b.loader.initialize(G.appid);
            this.startCasting = function () {
                A || a.jwInstreamState() || f.chrome.cast.requestSession(B, n)
            };
            this.stopCasting =
                x;
            this.openExtension = function () {
                a.jwInstreamState() || f.chrome.cast.requestSession(B, v)
            }
        };
        b.log = function () {
            if (b.debug) {
                var a = Array.prototype.slice.call(arguments, 0);
                console.log.apply(console, a)
            }
        };
        b.error = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            console.error.apply(console, a)
        }
    }(window, jwplayer),
    function (f) {
        function d(a) {
            h.log("existing session", a);
            !y && !x && (x = a.session, x.addMessageListener(h.NS, l))
        }

        function l(a, b) {
            var c = JSON.parse(b),
                d = x;
            if (!c) throw "Message not proper JSON";
            if (c.reconcile) {
                x.removeMessageListener(h.NS,
                    l);
                c.receiverFriendlyName = x.receiver.friendlyName;
                if (!c.pageUrl || !c.diff.id || !c.appid) c.pageUrl = B, c.diff.id = f().id, c.appid = v, x = y =
                    null;
                t[c.diff.id] && (v === c.appid && c.pageUrl === B) && (u = c.diff.id, v = c.appid, r(u,
                    "jwInstreamDestroy"), g(d), r(u, n.message, c), x = null)
            }
        }

        function b() {
            y && (y.removeUpdateListener(e), y.removeMessageListener(h.NS, k), y.stop(j.bind(this), a.bind(this)),
                y = null);
            r(u, n.cleanup)
        }

        function j() {
            "undefined" !== typeof z && null !== z && (g(z), z = null)
        }

        function c(a, b) {
            y.sendMessage(h.NS, {
                    command: a,
                    args: b
                },
                p.noop,
                function (a) {
                    h.error("message send error", a)
                })
        }

        function g(a) {
            var d = f(u);
            y ? (b(), z = a) : (y = a, y.addMessageListener(h.NS, k), y.addUpdateListener(e), d = f.cast.setupFlashCastConfig(
                d), x !== y && (c("setup", d), f.cast.loader.sendDummyMedia(y)), r(u, n.connected, {
                receiverFriendlyName: a.receiver.friendlyName
            }))
        }

        function k(a, b) {
            if (b) {
                var c = JSON.parse(b);
                if (!c) throw "Message not proper JSON";
                r(u, n.message, c)
            }
        }

        function a(a) {
            r(u, n.error, a || {})
        }

        function e(a) {
            a ? q() : b()
        }

        function r(a, b, c) {
            c ? f(a).callInternal(b, c) : f(a).callInternal(b)
        }

        function q() {
            if (y && y.receiver) {
                var a = y.receiver.volume;
                if (a) {
                    var b = 100 * a.level | 0,
                        a = !!a.muted;
                    f(u).setVolume(b).setMute(a)
                }
            }
        }
        var h = f.cast,
            p = f.utils,
            m = f._,
            w = window.chrome || {},
            u, t = {},
            n = {},
            v, x, z, B = p.getAbsolutePath(window.location.href),
            y;
        h.NS = "urn:x-cast:com.longtailvideo.jwplayer";
        h.flash = {
            checkAvailability: function (a, b, c) {
                n = c;
                v = b;
                t[a] = !0;
                h.loader.addEventListener("availability", function (b) {
                    "available" === b.availability && r(a, n.available, b)
                });
                h.loader.addEventListener("session", d);
                h.loader.initialize(b)
            },
            startCasting: function (b) {
                u = b;
                w.cast.requestSession(g.bind(this), a.bind(this))
            },
            stopCasting: b,
            openExtension: function (b) {
                u = b;
                w.cast.requestSession(g.bind(this), a.bind(this))
            },
            mute: function (a) {
                y.setReceiverMuted(a, q, function (a) {
                    h.error("set muted error", a)
                })
            },
            volume: function (a) {
                a = Math.max(0, Math.min(a / 100, 1));
                y.setReceiverVolumeLevel(a, q, function (a) {
                    h.error("set volume error", a)
                })
            },
            messageReceiver: c,
            canCastItem: function (a) {
                return m.any(a.levels, function (a) {
                    return f.embed.html5CanPlay(a.file, a.type) ||
                        "hls" === a.type
                })
            }
        }
    }(window.jwplayer),
    function (f, d) {
        function l(a) {
            var b = new d.cast.media.MediaInfo("");
            b.contentType = "video/mp4";
            b = new d.cast.media.LoadRequest(b);
            b.autoplay = !1;
            a.loadMedia(b)
        }

        function b() {
            d && d.cast && d.cast.isAvailable && !e.apiConfig ? (e.apiConfig = new d.cast.ApiConfig(new d.cast.SessionRequest(
                    m), k, a, d.cast.AutoJoinPolicy.ORIGIN_SCOPED), d.cast.initialize(e.apiConfig, g, c)) : 15 > p++
                && setTimeout(b, 1E3)
        }

        function j() {
            h && (h.resetEventListeners(), h = null)
        }

        function c() {
            e.apiConfig = null
        }

        function g() {}

        function k(a) {
            w.sendEvent("session", {
                session: a
            });
            a.sendMessage(e.NS, {
                whoami: 1
            });
            0 === a.media.length && l(a)
        }

        function a(a) {
            e.availability = a;
            w.sendEvent("availability", {
                availability: a
            })
        }
        window.chrome = d;
        var e = f.cast,
            r = f.utils,
            q = f.events,
            h, p = 0,
            m = null,
            w = r.extend({
                initialize: function (a) {
                    m = a;
                    null !== e.availability ? w.sendEvent("availability", {
                        availability: e.availability
                    }) : d && d.cast ? b() : h || (h = new r.scriptloader(
                        "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"), h.addEventListener(
                        q.ERROR, j), h.addEventListener(q.COMPLETE,
                        b), h.load())
                }
            }, new q.eventdispatcher("cast.loader"));
        f.cast.loader = w;
        f.cast.loader.sendDummyMedia = l
    }(window.jwplayer, window.chrome || {}),
    function (f, d) {
        var l = [],
            b = f.utils,
            j = f.events,
            c = f._,
            g = 0,
            k = j.state,
            a =
            "getBuffer getCaptionsList getControls getCurrentCaptions getCurrentQuality getCurrentAudioTrack getDuration getFullscreen getHeight getLockState getMute getPlaylistIndex getSafeRegion getPosition getQualityLevels getState getVolume getWidth isBeforeComplete isBeforePlay releaseState"
            .split(" "),
            e =
            "playlistNext stop forceState playlistPrev seek setCurrentCaptions setControls setCurrentQuality setVolume setCurrentAudioTrack"
            .split(" "),
            r = {
                onBufferChange: j.JWPLAYER_MEDIA_BUFFER,
                onBufferFull: j.JWPLAYER_MEDIA_BUFFER_FULL,
                onError: j.JWPLAYER_ERROR,
                onSetupError: j.JWPLAYER_SETUP_ERROR,
                onFullscreen: j.JWPLAYER_FULLSCREEN,
                onMeta: j.JWPLAYER_MEDIA_META,
                onMute: j.JWPLAYER_MEDIA_MUTE,
                onPlaylist: j.JWPLAYER_PLAYLIST_LOADED,
                onPlaylistItem: j.JWPLAYER_PLAYLIST_ITEM,
                onPlaylistComplete: j.JWPLAYER_PLAYLIST_COMPLETE,
                onReady: j.API_READY,
                onResize: j.JWPLAYER_RESIZE,
                onComplete: j.JWPLAYER_MEDIA_COMPLETE,
                onSeek: j.JWPLAYER_MEDIA_SEEK,
                onTime: j.JWPLAYER_MEDIA_TIME,
                onVolume: j.JWPLAYER_MEDIA_VOLUME,
                onBeforePlay: j.JWPLAYER_MEDIA_BEFOREPLAY,
                onBeforeComplete: j.JWPLAYER_MEDIA_BEFORECOMPLETE,
                onDisplayClick: j.JWPLAYER_DISPLAY_CLICK,
                onControls: j.JWPLAYER_CONTROLS,
                onQualityLevels: j.JWPLAYER_MEDIA_LEVELS,
                onQualityChange: j.JWPLAYER_MEDIA_LEVEL_CHANGED,
                onCaptionsList: j.JWPLAYER_CAPTIONS_LIST,
                onCaptionsChange: j.JWPLAYER_CAPTIONS_CHANGED,
                onAdError: j.JWPLAYER_AD_ERROR,
                onAdClick: j.JWPLAYER_AD_CLICK,
                onAdImpression: j.JWPLAYER_AD_IMPRESSION,
                onAdTime: j.JWPLAYER_AD_TIME,
                onAdComplete: j.JWPLAYER_AD_COMPLETE,
                onAdCompanions: j.JWPLAYER_AD_COMPANIONS,
                onAdSkipped: j.JWPLAYER_AD_SKIPPED,
                onAdPlay: j.JWPLAYER_AD_PLAY,
                onAdPause: j.JWPLAYER_AD_PAUSE,
                onAdMeta: j.JWPLAYER_AD_META,
                onCast: j.JWPLAYER_CAST_SESSION,
                onAudioTrackChange: j.JWPLAYER_AUDIO_TRACK_CHANGED,
                onAudioTracks: j.JWPLAYER_AUDIO_TRACKS
            },
            q = {
                onBuffer: k.BUFFERING,
                onPause: k.PAUSED,
                onPlay: k.PLAYING,
                onIdle: k.IDLE
            };
        f.api = function (h) {
            function g(a, c) {
                b.foreach(a, function (a, b) {
                    n[a] = function (a) {
                        return c(b, a)
                    }
                })
            }

            function m(a, b) {
                var c = "jw" + b.charAt(0).toUpperCase() + b.slice(1);
                n[b] = function () {
                    var b = t.apply(this, [c].concat(Array.prototype.slice.call(arguments, 0)));
                    return a ? n : b
                }
            }

            function w(a, c) {
                try {
                    a.jwAddEventListener(c, 'function(dat) { jwplayer("' + n.id + '").dispatchEvent("' + c +
                        '", dat); }')
                } catch (d) {
                    if ("flash" === n.renderingMode) {
                        var e = document.createElement("a");
                        e.href = z.data;
                        e.protocol !== location.protocol &&
                            b.log("Warning: Your site [" + location.protocol + "] and JWPlayer [" + e.protocol +
                                "] are hosted using different protocols")
                    }
                    b.log("Could not add internal listener")
                }
            }

            function u(a, b) {
                v[a] || (v[a] = [], z && B && w(z, a));
                v[a].push(b);
                return n
            }

            function t() {
                if (B) {
                    if (z) {
                        var a = Array.prototype.slice.call(arguments, 0),
                            b = a.shift();
                        if ("function" === typeof z[b]) {
                            switch (a.length) {
                                case 6:
                                    return z[b](a[0], a[1], a[2], a[3], a[4], a[5]);
                                case 5:
                                    return z[b](a[0], a[1], a[2], a[3], a[4]);
                                case 4:
                                    return z[b](a[0], a[1], a[2], a[3]);
                                case 3:
                                    return z[b](a[0],
                                        a[1], a[2]);
                                case 2:
                                    return z[b](a[0], a[1]);
                                case 1:
                                    return z[b](a[0])
                            }
                            return z[b]()
                        }
                    }
                    return null
                }
                y.push(arguments)
            }
            var n = this,
                v = {},
                x = {},
                z, B = !1,
                y = [],
                E, F = {},
                J = {};
            n.container = h;
            n.id = h.id;
            n.setup = function (a) {
                if (f.embed) {
                    f.api.destroyPlayer(n.id);
                    var b = new f.api(n.container);
                    f.api.addPlayer(b);
                    b.config = a;
                    b._embedder = new f.embed(b);
                    b._embedder.embed();
                    return b
                }
                return n
            };
            n.getContainer = function () {
                return n.container
            };
            n.addButton = function (a, c, d, e) {
                try {
                    J[e] = d, t("jwDockAddButton", a, c, 'jwplayer("' + n.id + '").callback("' +
                        e + '")', e)
                } catch (f) {
                    b.log("Could not add dock button" + f.message)
                }
            };
            n.removeButton = function (a) {
                t("jwDockRemoveButton", a)
            };
            n.callback = function (a) {
                if (J[a]) J[a]()
            };
            n.getMeta = function () {
                return n.getItemMeta()
            };
            n.getPlaylist = function () {
                var a = t("jwGetPlaylist");
                "flash" === n.renderingMode && b.deepReplaceKeyName(a, ["__dot__", "__spc__", "__dsh__",
                    "__default__"], [".", " ", "-", "default"]);
                return a
            };
            n.getPlaylistItem = function (a) {
                b.exists(a) || (a = n.getPlaylistIndex());
                return n.getPlaylist()[a]
            };
            n.getRenderingMode = function () {
                return n.renderingMode
            };
            n.setFullscreen = function (a) {
                b.exists(a) ? t("jwSetFullscreen", a) : t("jwSetFullscreen", !t("jwGetFullscreen"));
                return n
            };
            n.setMute = function (a) {
                b.exists(a) ? t("jwSetMute", a) : t("jwSetMute", !t("jwGetMute"));
                return n
            };
            n.lock = function () {
                return n
            };
            n.unlock = function () {
                return n
            };
            n.load = function (a) {
                t("jwInstreamDestroy");
                f(n.id).plugins.googima && t("jwDestroyGoogima");
                t("jwLoad", a);
                return n
            };
            n.playlistItem = function (a) {
                t("jwPlaylistItem", parseInt(a, 10));
                return n
            };
            n.resize = function (a, c) {
                if ("flash" !== n.renderingMode) t("jwResize",
                    a, c);
                else {
                    var d = document.getElementById(n.id + "_wrapper"),
                        e = document.getElementById(n.id + "_aspect");
                    e && (e.style.display = "none");
                    d && (d.style.display = "block", d.style.width = b.styleDimension(a), d.style.height =
                        b.styleDimension(c))
                }
                return n
            };
            n.play = function (a) {
                if (a !== d) return t("jwPlay", a), n;
                a = n.getState();
                var b = E && E.getState();
                b && (b === k.IDLE || b === k.PLAYING || b === k.BUFFERING ? t("jwInstreamPause") : t(
                    "jwInstreamPlay"));
                a === k.PLAYING || a === k.BUFFERING ? t("jwPause") : t("jwPlay");
                return n
            };
            n.pause = function (a) {
                a ===
                    d ? (a = n.getState(), a === k.PLAYING || a === k.BUFFERING ? t("jwPause") : t("jwPlay")) :
                    t("jwPause", a);
                return n
            };
            n.createInstream = function () {
                return new f.api.instream(this, z)
            };
            n.setInstream = function (a) {
                return E = a
            };
            n.loadInstream = function (a, b) {
                E = n.setInstream(n.createInstream()).init(b);
                E.loadItem(a);
                return E
            };
            n.destroyPlayer = function () {
                B = !0;
                t("jwPlayerDestroy")
            };
            n.playAd = function (a) {
                var b = f(n.id).plugins;
                b.vast ? b.vast.jwPlayAd(a) : t("jwPlayAd", a)
            };
            n.pauseAd = function () {
                var a = f(n.id).plugins;
                a.vast ? a.vast.jwPauseAd() :
                    t("jwPauseAd")
            };
            g(q, function (a, b) {
                x[a] || (x[a] = [], u(j.JWPLAYER_PLAYER_STATE, function (b) {
                    var c = b.newstate;
                    b = b.oldstate;
                    if (c === a) {
                        var d = x[c];
                        if (d)
                            for (var e = 0; e < d.length; e++) {
                                var f = d[e];
                                "function" === typeof f && f.call(this, {
                                    oldstate: b,
                                    newstate: c
                                })
                            }
                    }
                }));
                x[a].push(b);
                return n
            });
            g(r, u);
            b.foreach(a, function (a, b) {
                m(!1, b)
            });
            b.foreach(e, function (a, b) {
                m(!0, b)
            });
            n.remove = function () {
                this._embedder && this._embedder.destroy && this._embedder.destroy();
                y = [];
                var a = 1 < c.size(c.where(l, {
                    id: n.id
                }));
                a || b.clearCss("#" + n.id);
                var d = document.getElementById(n.id + ("flash" === n.renderingMode ? "_wrapper" : ""));
                if (d) {
                    if ("html5" === n.renderingMode) n.destroyPlayer();
                    else if (b.isMSIE(8)) {
                        var e = document.getElementById(n.id);
                        if (e && e.parentNode) {
                            e.style.display = "none";
                            for (var f in e) "function" === typeof e[f] && (e[f] = null);
                            e.parentNode.removeChild(e)
                        }
                    }
                    a || (a = document.createElement("div"), a.id = n.id, d.parentNode.replaceChild(a, d))
                }
                l = c.filter(l, function (a) {
                    return a.uniqueId !== n.uniqueId
                })
            };
            n.registerPlugin = function (a, b, c, d) {
                f.plugins.registerPlugin(a,
                    b, c, d)
            };
            n.setPlayer = function (a, b) {
                z = a;
                n.renderingMode = b
            };
            n.detachMedia = function () {
                if ("html5" === n.renderingMode) return t("jwDetachMedia")
            };
            n.attachMedia = function (a) {
                if ("html5" === n.renderingMode) return t("jwAttachMedia", a)
            };
            n.getAudioTracks = function () {
                return t("jwGetAudioTracks")
            };
            n.removeEventListener = function (a, b) {
                var c = v[a];
                if (c)
                    for (var d = c.length; d--;) c[d] === b && c.splice(d, 1)
            };
            n.dispatchEvent = function (a, c) {
                var d = v[a];
                if (d)
                    for (var d = d.slice(0), e = b.translateEventResponse(a, c), f = 0; f < d.length; f++) {
                        var h =
                            d[f];
                        if ("function" === typeof h) try {
                            a === j.JWPLAYER_PLAYLIST_LOADED && b.deepReplaceKeyName(e.playlist, [
                                "__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-",
                                "default"]), h.call(this, e)
                        } catch (g) {
                            b.log("There was an error calling back an event handler", g)
                        }
                    }
            };
            n.dispatchInstreamEvent = function (a) {
                E && E.dispatchEvent(a, arguments)
            };
            n.callInternal = t;
            n.playerReady = function (a) {
                B = !0;
                z || n.setPlayer(document.getElementById(a.id));
                n.container = document.getElementById(n.id);
                b.foreach(v, function (a) {
                    w(z, a)
                });
                u(j.JWPLAYER_PLAYLIST_ITEM,
                    function () {
                        F = {}
                    });
                u(j.JWPLAYER_MEDIA_META, function (a) {
                    b.extend(F, a.metadata)
                });
                u(j.JWPLAYER_VIEW_TAB_FOCUS, function (a) {
                    var c = n.getContainer();
                    !0 === a.hasFocus ? b.addClass(c, "jw-tab-focus") : b.removeClass(c,
                        "jw-tab-focus")
                });
                for (n.dispatchEvent(j.API_READY); 0 < y.length;) t.apply(n, y.shift())
            };
            n.getItemMeta = function () {
                return F
            };
            return n
        };
        f.playerReady = function (a) {
            var b = f.api.playerById(a.id);
            b || (b = f.api.selectPlayer(a.id));
            b.playerReady(a)
        };
        f.api.selectPlayer = function (a) {
            var c;
            b.exists(a) || (a = 0);
            a.nodeType ?
                c = a : "string" === typeof a && (c = document.getElementById(a));
            return c ? (a = f.api.playerById(c.id)) ? a : new f.api(c) : "number" === typeof a ? l[a] : null
        };
        f.api.playerById = function (a) {
            for (var b = 0; b < l.length; b++)
                if (l[b].id === a) return l[b];
            return null
        };
        f.api.addPlayer = function (a) {
            for (var b = 0; b < l.length; b++)
                if (l[b] === a) return a;
            g++;
            a.uniqueId = g;
            l.push(a);
            return a
        };
        f.api.destroyPlayer = function (a) {
            a = c.where(l, {
                id: a
            });
            c.each(a, c.partial(c.result, c, "remove"))
        }
    }(window.jwplayer),
    function (f) {
        var d = f.events,
            l = f.utils,
            b = d.state;
        f.api.instream = function (f, c) {
            function g(a, b) {
                r[a] || (r[a] = [], c.jwInstreamAddEventListener(a, 'function(dat) { jwplayer("' + f.id +
                    '").dispatchInstreamEvent("' + a + '", dat); }'));
                r[a].push(b);
                return this
            }

            function k(a, b) {
                q[a] || (q[a] = [], g(d.JWPLAYER_PLAYER_STATE, function (b) {
                    var c = b.newstate,
                        d = b.oldstate;
                    if (c === a) {
                        var e = q[c];
                        if (e)
                            for (var f = 0; f < e.length; f++) {
                                var g = e[f];
                                "function" === typeof g && g.call(this, {
                                    oldstate: d,
                                    newstate: c,
                                    type: b.type
                                })
                            }
                    }
                }));
                q[a].push(b);
                return this
            }
            var a, e, r = {},
                q = {},
                h = this;
            h.type = "instream";
            h.init = function () {
                f.callInternal("jwInitInstream");
                return h
            };
            h.loadItem = function (b, c) {
                a = b;
                e = c || {};
                "array" === l.typeOf(b) ? f.callInternal("jwLoadArrayInstream", a, e) : f.callInternal(
                    "jwLoadItemInstream", a, e)
            };
            h.removeEvents = function () {
                r = q = {}
            };
            h.removeEventListener = function (a, b) {
                var c = r[a];
                if (c)
                    for (var d = c.length; d--;) c[d] === b && c.splice(d, 1)
            };
            h.dispatchEvent = function (a, b) {
                var c = r[a];
                if (c)
                    for (var c = c.slice(0), d = l.translateEventResponse(a, b[1]), e = 0; e < c.length; e++) {
                        var f = c[e];
                        "function" === typeof f && f.call(this,
                            d)
                    }
            };
            h.onError = function (a) {
                return g(d.JWPLAYER_ERROR, a)
            };
            h.onMediaError = function (a) {
                return g(d.JWPLAYER_MEDIA_ERROR, a)
            };
            h.onFullscreen = function (a) {
                return g(d.JWPLAYER_FULLSCREEN, a)
            };
            h.onMeta = function (a) {
                return g(d.JWPLAYER_MEDIA_META, a)
            };
            h.onMute = function (a) {
                return g(d.JWPLAYER_MEDIA_MUTE, a)
            };
            h.onComplete = function (a) {
                return g(d.JWPLAYER_MEDIA_COMPLETE, a)
            };
            h.onPlaylistComplete = function (a) {
                return g(d.JWPLAYER_PLAYLIST_COMPLETE, a)
            };
            h.onPlaylistItem = function (a) {
                return g(d.JWPLAYER_PLAYLIST_ITEM, a)
            };
            h.onTime =
                function (a) {
                    return g(d.JWPLAYER_MEDIA_TIME, a)
                };
            h.onBuffer = function (a) {
                return k(b.BUFFERING, a)
            };
            h.onPause = function (a) {
                return k(b.PAUSED, a)
            };
            h.onPlay = function (a) {
                return k(b.PLAYING, a)
            };
            h.onIdle = function (a) {
                return k(b.IDLE, a)
            };
            h.onClick = function (a) {
                return g(d.JWPLAYER_INSTREAM_CLICK, a)
            };
            h.onInstreamDestroyed = function (a) {
                return g(d.JWPLAYER_INSTREAM_DESTROYED, a)
            };
            h.onAdSkipped = function (a) {
                return g(d.JWPLAYER_AD_SKIPPED, a)
            };
            h.play = function (a) {
                c.jwInstreamPlay(a)
            };
            h.pause = function (a) {
                c.jwInstreamPause(a)
            };
            h.hide = function () {
                f.callInternal("jwInstreamHide")
            };
            h.destroy = function () {
                h.removeEvents();
                f.callInternal("jwInstreamDestroy")
            };
            h.setText = function (a) {
                c.jwInstreamSetText(a ? a : "")
            };
            h.getState = function () {
                return c.jwInstreamState()
            };
            h.setClick = function (a) {
                c.jwInstreamClick && c.jwInstreamClick(a)
            }
        }
    }(jwplayer),
    function (f) {
        var d = f.api,
            l = d.selectPlayer,
            b = f._;
        d.selectPlayer = function (b) {
            var c = l.apply(this, arguments);
            return c ? c : {
                registerPlugin: function (b, c, a) {
                    "jwpsrv" !== b && f.plugins.registerPlugin(b, c, a)
                }
            }
        };
        f.unregisteredProviders = [];
        d.registerProvider = function (d) {
            f && f.html5 && b.isFunction(f.html5.registerProvider) ? f.html5.registerProvider(d) : f.unregisteredProviders
                .push(d)
        }
    }(jwplayer));
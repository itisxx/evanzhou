(function (d) {
    d.html5 = {};
    d.html5.version = "6.12.4956";
    d = d.utils.css;
    var l = ".jwplayer ;div;span;a;img;ul;li;video".split(";").join(", .jwplayer ");
    d(l + ", .jwclick", {
        margin: 0,
        padding: 0,
        border: 0,
        color: "#000000",
        "font-size": "100%",
        font: "inherit",
        "vertical-align": "baseline",
        "background-color": "transparent",
        "text-align": "left",
        direction: "ltr",
        "line-height": 20,
        "-webkit-tap-highlight-color": "rgba(255, 255, 255, 0)"
    });
    d(".jwplayer ,.jwplayer *", {
        "box-sizing": "content-box"
    });
    d(".jwplayer * button,.jwplayer * input,.jwplayer * select,.jwplayer * textarea", {
        "box-sizing": "border-box"
    });
    d(".jwplayer ul", {
        "list-style": "none"
    });
    d(".jwplayer .jwcontrols", {
        "pointer-events": "none"
    });
    d(".jwplayer.jw-user-inactive .jwcontrols", {
        "pointer-events": "all"
    });
    d(
        ".jwplayer .jwcontrols .jwdockbuttons, .jwplayer .jwcontrols .jwcontrolbar, .jwplayer .jwcontrols .jwskip, .jwplayer .jwcontrols .jwdisplayIcon, .jwplayer .jwcontrols .jwpreview, .jwplayer .jwcontrols .jwlogo", {
            "pointer-events": "all"
        })
})(jwplayer);
(function (d) {
    var l = document;
    d.parseDimension = function (a) {
        return "string" === typeof a ? "" === a ? 0 : -1 < a.lastIndexOf("%") ? a : parseInt(a.replace("px", ""),
            10) : a
    };
    d.timeFormat = function (a) {
        if (0 < a) {
            var c = Math.floor(a / 3600),
                f = Math.floor((a - 3600 * c) / 60);
            a = Math.floor(a % 60);
            return (c ? c + ":" : "") + (10 > f ? "0" : "") + f + ":" + (10 > a ? "0" : "") + a
        }
        return "00:00"
    };
    d.bounds = function (a) {
        var c = {
            left: 0,
            right: 0,
            width: 0,
            height: 0,
            top: 0,
            bottom: 0
        };
        if (!a || !l.body.contains(a)) return c;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect(a);
            var f =
                window.pageYOffset,
                e = window.pageXOffset;
            if (!a.width && !a.height && !a.left && !a.top) return c;
            c.left = a.left + e;
            c.right = a.right + e;
            c.top = a.top + f;
            c.bottom = a.bottom + f;
            c.width = a.right - a.left;
            c.height = a.bottom - a.top
        } else {
            c.width = a.offsetWidth | 0;
            c.height = a.offsetHeight | 0;
            do c.left += a.offsetLeft | 0, c.top += a.offsetTop | 0; while (a = a.offsetParent);
            c.right = c.left + c.width;
            c.bottom = c.top + c.height
        }
        return c
    };
    d.empty = function (a) {
        if (a)
            for (; 0 < a.childElementCount;) a.removeChild(a.children[0])
    }
})(jwplayer.utils);
(function (d) {
    var l = d.stretching = {
        NONE: "none",
        FILL: "fill",
        UNIFORM: "uniform",
        EXACTFIT: "exactfit"
    };
    d.scale = function (a, c, f, e, h) {
        var j = "";
        c = c || 1;
        f = f || 1;
        e |= 0;
        h |= 0;
        if (1 !== c || 1 !== f) j = "scale(" + c + ", " + f + ")";
        if (e || h) j = "translate(" + e + "px, " + h + "px)";
        d.transform(a, j)
    };
    d.stretch = function (a, c, f, e, h, j) {
        if (!c || !f || !e || !h || !j) return !1;
        a = a || l.UNIFORM;
        var b = 2 * Math.ceil(f / 2) / h,
            m = 2 * Math.ceil(e / 2) / j,
            g = "video" === c.tagName.toLowerCase(),
            k = !1,
            q = "jw" + a.toLowerCase();
        switch (a.toLowerCase()) {
            case l.FILL:
                b > m ? m = b : b = m;
                k = !0;
                break;
            case l.NONE:
                b = m = 1;
            case l.EXACTFIT:
                k = !0;
                break;
            default:
                b > m ? 0.95 < h * m / f ? (k = !0, q = "jwexactfit") : (h *= m, j *= m) : 0.95 < j * b / e ? (
                    k = !0, q = "jwexactfit") : (h *= b, j *= b), k && (b = 2 * Math.ceil(f / 2) / h, m = 2 *
                    Math.ceil(e / 2) / j)
        }
        g ? (a = {
            left: "",
            right: "",
            width: "",
            height: ""
        }, k ? (f < h && (a.left = a.right = Math.ceil((f - h) / 2)), e < j && (a.top = a.bottom = Math
            .ceil((e - j) / 2)), a.width = h, a.height = j, d.scale(c, b, m, 0, 0)) : (k = !1, d.transform(
            c)), d.css.style(c, a)) : c.className = c.className.replace(
            /\s*jw(none|exactfit|uniform|fill)/g, "") + " " + q;
        return k
    }
})(jwplayer.utils);
(function (d) {
    d.dfxp = function () {
        var d = jwplayer.utils.seconds;
        this.parse = function (a) {
            var c = [{
                begin: 0,
                text: ""
            }];
            a = a.replace(/^\s+/, "").replace(/\s+$/, "");
            var f = a.split("\x3c/p\x3e"),
                e = a.split("\x3c/tt:p\x3e"),
                h = [];
            for (a = 0; a < f.length; a++) 0 <= f[a].indexOf("\x3cp") && (f[a] = f[a].substr(f[a].indexOf(
                "\x3cp") + 2).replace(/^\s+/, "").replace(/\s+$/, ""), h.push(f[a]));
            for (a = 0; a < e.length; a++) 0 <= e[a].indexOf("\x3ctt:p") && (e[a] = e[a].substr(e[a].indexOf(
                "\x3ctt:p") + 5).replace(/^\s+/, "").replace(/\s+$/, ""), h.push(e[a]));
            f = h;
            for (a = 0; a < f.length; a++) {
                e = f[a];
                h = {};
                try {
                    var j = e.indexOf('begin\x3d"'),
                        e = e.substr(j + 7),
                        j = e.indexOf('" end\x3d"');
                    h.begin = d(e.substr(0, j));
                    e = e.substr(j + 7);
                    j = e.indexOf('"');
                    h.end = d(e.substr(0, j));
                    j = e.indexOf('"\x3e');
                    e = e.substr(j + 2);
                    h.text = e
                } catch (b) {}
                e = h;
                e.text && (c.push(e), e.end && (c.push({
                    begin: e.end,
                    text: ""
                }), delete e.end))
            }
            if (1 < c.length) return c;
            throw {
                message: "Invalid DFXP file:"
            };
        }
    }
})(jwplayer.parsers);
(function (d) {
    d.srt = function () {
        var d = jwplayer.utils,
            a = d.seconds;
        this.parse = function (c, f) {
            var e = f ? [] : [{
                begin: 0,
                text: ""
            }];
            c = d.trim(c);
            var h = c.split("\r\n\r\n");
            1 === h.length && (h = c.split("\n\n"));
            for (var j = 0; j < h.length; j++)
                if ("WEBVTT" !== h[j]) {
                    var b, m = h[j];
                    b = {};
                    var g = m.split("\r\n");
                    1 === g.length && (g = m.split("\n"));
                    try {
                        m = 1;
                        0 < g[0].indexOf(" --\x3e ") && (m = 0);
                        var k = g[m].indexOf(" --\x3e ");
                        0 < k && (b.begin = a(g[m].substr(0, k)), b.end = a(g[m].substr(k + 5)));
                        if (g[m + 1]) {
                            b.text = g[m + 1];
                            for (m += 2; m < g.length; m++) b.text +=
                                "\x3cbr/\x3e" + g[m]
                        }
                    } catch (q) {}
                    b.text && (e.push(b), b.end && !f && (e.push({
                        begin: b.end,
                        text: ""
                    }), delete b.end))
                } if (1 < e.length) return e;
            throw {
                message: "Invalid SRT file"
            };
        }
    }
})(jwplayer.parsers);
(function (d) {
    var l = d.utils.noop,
        a = d.events,
        c = d._.constant(!1);
    d.html5.DefaultProvider = {
        supports: c,
        play: l,
        load: l,
        stop: l,
        volume: l,
        mute: l,
        seek: l,
        seekDrag: l,
        resize: l,
        remove: l,
        destroy: l,
        setVisibility: l,
        setFullscreen: c,
        getFullscreen: l,
        getContainer: l,
        setContainer: c,
        isAudioFile: c,
        supportsFullscreen: c,
        getQualityLevels: l,
        getCurrentQuality: l,
        setCurrentQuality: l,
        getAudioTracks: l,
        getCurrentAudioTrack: l,
        setCurrentAudioTrack: l,
        checkComplete: l,
        setControls: l,
        attachMedia: l,
        detachMedia: l,
        setState: function (c) {
            if (c !==
                this.state) {
                var e = this.state || a.state.IDLE;
                this.state = c;
                this.sendEvent(a.JWPLAYER_PLAYER_STATE, {
                    oldstate: e,
                    newstate: c
                })
            }
        }
    }
})(jwplayer);
(function (d) {
    d.html5.chooseProvider = function (l) {
        return d._.isObject(l) && d.html5.YoutubeProvider.supports(l) ? d.html5.YoutubeProvider : d.html5.VideoProvider
    }
})(jwplayer);
(function (d) {
    function l(l) {
        function s() {}

        function r(a) {
            E(a);
            Y && (t.state === e.PLAYING && !T) && (K = Math.floor(10 * I.currentTime) / 10, a && (N = !0), t.sendEvent(
                f.JWPLAYER_MEDIA_TIME, {
                    position: K,
                    duration: H
                }))
        }

        function n() {
            t.sendEvent(f.JWPLAYER_MEDIA_META, {
                duration: I.duration,
                height: I.videoHeight,
                width: I.videoWidth
            })
        }

        function y(a) {
            Y && (N || (N = !0, u()), "loadedmetadata" === a.type && (I.muted && (I.muted = !1, I.muted = !0), n()))
        }

        function E() {
            N && (0 < S && !k) && (b ? setTimeout(function () {
                0 < S && t.seek(S)
            }, 200) : t.seek(S))
        }

        function u() {
            P ||
                (P = !0, t.sendEvent(f.JWPLAYER_MEDIA_BUFFER_FULL))
        }

        function p(b) {
            Y && !T && (I.paused ? I.currentTime === I.duration && 3 < I.duration || t.pause() : (!a.isFF() || !(
                "play" === b.type && t.state === e.BUFFERING)) && t.setState(e.PLAYING))
        }

        function z() {
            Y && (T || t.setState(e.BUFFERING))
        }

        function w(b) {
            var c;
            if ("array" === a.typeOf(b) && 0 < b.length) {
                c = [];
                for (var e = 0; e < b.length; e++) {
                    var f = b[e],
                        g = {};
                    g.label = f.label && f.label ? f.label ? f.label : 0 : e;
                    c[e] = g
                }
            }
            return c
        }

        function A(b, c) {
            J = da[ea];
            h(W);
            W = setInterval(F, 100);
            S = 0;
            I.src !== J.file || m || g ?
                (m || t.setState(e.BUFFERING), P = N = !1, H = c ? c : -1, I.src = J.file, I.load()) : (0 === b &&
                    (S = -1, t.seek(b)), n(), I.play());
            K = I.currentTime;
            m && u();
            a.isIOS() && t.getFullScreen() && (I.controls = !0);
            0 < b && t.seek(b)
        }

        function F() {
            if (Y) {
                var a;
                a = I.buffered;
                a = !a || !I.duration || 0 === a.length ? 0 : a.end(a.length - 1) / I.duration;
                1 <= a && h(W);
                a !== Z && (Z = a, t.sendEvent(f.JWPLAYER_MEDIA_BUFFER, {
                    bufferPercent: Math.round(100 * Z)
                }))
            }
        }

        function L(a) {
            t.sendEvent("fullscreenchange", {
                target: a.target,
                jwstate: ra
            })
        }
        this.state = e.IDLE;
        var G = new d.events.eventdispatcher("provider." +
            this.name);
        a.extend(this, G);
        var t = this,
            x = {
                abort: s,
                canplay: y,
                canplaythrough: s,
                click: function () {
                    t.sendEvent(f.JWPLAYER_PROVIDER_CLICK)
                },
                durationchange: function () {
                    if (Y) {
                        var a = Math.floor(10 * I.duration) / 10;
                        H !== a && (H = a);
                        k && (0 < S && a > S) && t.seek(S);
                        r()
                    }
                },
                emptied: s,
                ended: function () {
                    Y && t.state !== e.IDLE && (h(W), ea = -1, va = !0, t.sendEvent(f.JWPLAYER_MEDIA_BEFORECOMPLETE),
                        Y && (t.setState(e.IDLE), va = !1, t.sendEvent(f.JWPLAYER_MEDIA_COMPLETE)))
                },
                error: function () {
                    Y && (a.log("Error playing media: %o %s", I.error, I.src || J.file),
                        t.sendEvent(f.JWPLAYER_MEDIA_ERROR, {
                            message: "Error loading media: File could not be played"
                        }), t.setState(e.IDLE))
                },
                loadeddata: s,
                loadedmetadata: y,
                loadstart: s,
                pause: p,
                play: p,
                playing: p,
                progress: E,
                ratechange: s,
                readystatechange: s,
                seeked: function () {
                    !T && t.state !== e.PAUSED && t.setState(e.PLAYING)
                },
                seeking: b ? z : s,
                stalled: s,
                suspend: s,
                timeupdate: r,
                volumechange: function () {
                    t.sendEvent(f.JWPLAYER_MEDIA_VOLUME, {
                        volume: Math.round(100 * I.volume)
                    });
                    t.sendEvent(f.JWPLAYER_MEDIA_MUTE, {
                        mute: I.muted
                    })
                },
                waiting: z,
                webkitbeginfullscreen: function (b) {
                    ra = !0;
                    L(b);
                    a.isIOS() && (I.controls = !1)
                },
                webkitendfullscreen: function (b) {
                    ra = !1;
                    L(b);
                    a.isIOS() && (I.controls = !1)
                }
            },
            M, J, H, K, N = !1,
            P, S = 0,
            T = !1,
            D, W = -1,
            Z = -1,
            Y = !1,
            da, ea = -1,
            va = !1,
            ra = !1;
        this.sendEvent = function () {
            Y && G.sendEvent.apply(this, arguments)
        };
        var I = document.getElementById(l).querySelector("video"),
            Va = I = I || document.createElement("video");
        a.foreach(x, function (a, b) {
            Va.addEventListener(a, b, !1)
        });
        q || (I.controls = !0, I.controls = !1);
        I.setAttribute("x-webkit-airplay", "allow");
        I.setAttribute("webkit-playsinline", "");
        Y = !0;
        this.stop = function () {
            Y && (h(W), I.removeAttribute("src"), b || I.load(), ea = -1, this.setState(e.IDLE))
        };
        this.destroy = function () {
            var b = I;
            a.foreach(x, function (a, c) {
                b.removeEventListener(a, c, !1)
            });
            this.remove()
        };
        this.load = function (b) {
            if (Y) {
                da = b.sources;
                0 > ea && (ea = 0);
                if (da)
                    for (var c = a.getCookies().qualityLabel, e = 0; e < da.length; e++)
                        if (da[e]["default"] && (ea = e), c && da[e].label === c) {
                            ea = e;
                            break
                        }(c = w(da)) && t.sendEvent(f.JWPLAYER_MEDIA_LEVELS, {
                    levels: c,
                    currentQuality: ea
                });
                A(b.starttime || 0, b.duration)
            }
        };
        this.play =
            function () {
                Y && !T && I.play()
            };
        this.pause = function () {
            Y && (I.pause(), this.setState(e.PAUSED))
        };
        this.seekDrag = function (a) {
            Y && ((T = a) ? I.pause() : I.play())
        };
        this.seek = function (a) {
            if (Y)
                if (!T && 0 === S && this.sendEvent(f.JWPLAYER_MEDIA_SEEK, {
                        position: K,
                        offset: a
                    }), N) {
                    S = 0;
                    try {
                        I.currentTime = a
                    } catch (b) {
                        S = a
                    }
                } else S = a
        };
        this.volume = function (b) {
            a.exists(b) && (I.volume = Math.min(Math.max(0, b / 100), 1), D = 100 * I.volume)
        };
        this.mute = function (b) {
            a.exists(b) || (b = !I.muted);
            b ? (D = 100 * I.volume, I.muted = !0) : (this.volume(D), I.muted = !1)
        };
        this.setState =
            function (a) {
                a === e.PAUSED && this.state === e.IDLE || T || j.setState.apply(this, arguments)
            };
        this.checkComplete = function () {
            return va
        };
        this.detachMedia = function () {
            h(W);
            Y = !1;
            return I
        };
        this.attachMedia = function (a) {
            Y = !0;
            a || (N = !1);
            va && (this.setState(e.IDLE), this.sendEvent(f.JWPLAYER_MEDIA_COMPLETE), va = !1)
        };
        this.setContainer = function (a) {
            M = a;
            a.appendChild(I)
        };
        this.getContainer = function () {
            return M
        };
        this.remove = function () {
            I && (I.removeAttribute("src"), b || I.load());
            h(W);
            ea = -1;
            M === I.parentNode && M.removeChild(I)
        };
        this.setVisibility =
            function (b) {
                b || k ? a.css.style(M, {
                    visibility: "visible",
                    opacity: 1
                }) : a.css.style(M, {
                    visibility: "",
                    opacity: 0
                })
            };
        this.resize = function (b, c, e) {
            return a.stretch(e, I, b, c, I.videoWidth, I.videoHeight)
        };
        this.setControls = function (a) {
            I.controls = !!a
        };
        this.supportsFullscreen = c.constant(!0);
        this.setFullScreen = function (a) {
            if (a = !!a) {
                try {
                    var b = I.webkitEnterFullscreen || I.webkitEnterFullScreen;
                    b && b.apply(I)
                } catch (c) {
                    return !1
                }
                return t.getFullScreen()
            }(b = I.webkitExitFullscreen || I.webkitExitFullScreen) && b.apply(I);
            return a
        };
        t.getFullScreen = function () {
            return ra || !!I.webkitDisplayingFullscreen
        };
        this.isAudioFile = function () {
            if (!da) return !1;
            var a = da[0].type;
            return "oga" === a || "aac" === a || "mp3" === a || "vorbis" === a
        };
        this.setCurrentQuality = function (b) {
            if (ea !== b && (b = parseInt(b, 10), 0 <= b && da && da.length > b)) {
                ea = b;
                a.saveCookie("qualityLabel", da[b].label);
                this.sendEvent(f.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                    currentQuality: b,
                    levels: w(da)
                });
                b = Math.floor(10 * I.currentTime) / 10;
                var c = Math.floor(10 * I.duration) / 10;
                0 >= c && (c = H);
                A(b, c)
            }
        };
        this.getCurrentQuality =
            function () {
                return ea
            };
        this.getQualityLevels = function () {
            return w(da)
        }
    }
    var a = d.utils,
        c = d._,
        f = d.events,
        e = f.state,
        h = window.clearInterval,
        j = d.html5.DefaultProvider,
        b = a.isMSIE(),
        m = a.isMobile(),
        g = a.isSafari(),
        k = a.isAndroidNative(),
        q = a.isIOS(7),
        s = function () {};
    s.prototype = j;
    l.prototype = new s;
    l.supports = c.constant(!0);
    d.html5.VideoProvider = l
})(jwplayer);
(function (d) {
    function l(g) {
        function l() {
            window.YT && window.YT.loaded ? (t = window.YT, s()) : setTimeout(l, 100)
        }

        function m() {
            j = null
        }

        function s() {
            var a;
            if (a = t) a = M && M.parentNode, a || (K || (d(g).onReady(s), K = !0), a = !1);
            a && N && N.apply(G)
        }

        function v() {
            if (x && x.getPlayerState) {
                var a = x.getPlayerState();
                null !== a && (void 0 !== a && a !== T) && u({
                    data: a
                });
                var b = t.PlayerState;
                a === b.PLAYING ? (r(), G.sendEvent(f.JWPLAYER_MEDIA_TIME, {
                    position: C(x.getCurrentTime()),
                    duration: x.getDuration()
                })) : a === b.BUFFERING && r()
            }
        }

        function C(a) {
            return Math.round(10 *
                a) / 10
        }

        function r() {
            var a = 0;
            x && x.getVideoLoadedFraction && (a = Math.round(100 * x.getVideoLoadedFraction()));
            H !== a && (H = a, G.sendEvent(f.JWPLAYER_MEDIA_BUFFER, {
                bufferPercent: a
            }))
        }

        function n() {
            G.sendEvent(f.JWPLAYER_MEDIA_META, {
                duration: x.getDuration(),
                width: M.clientWidth,
                height: M.clientHeight
            })
        }

        function y() {
            var a = arguments,
                b = a.length - 1;
            return function () {
                for (var c = b, e = a[b].apply(this, arguments); c--;) e = a[c].call(this, e);
                return e
            }
        }

        function E() {
            P && (P.apply(G), P = null)
        }

        function u(a) {
            var b = t.PlayerState;
            T = a.data;
            switch (T) {
                case b.ENDED:
                    G.state !== e.IDLE && (W = !0, G.sendEvent(f.JWPLAYER_MEDIA_BEFORECOMPLETE), G.setState(e.IDLE),
                        W = !1, G.sendEvent(f.JWPLAYER_MEDIA_COMPLETE));
                    break;
                case b.PLAYING:
                    c.isFunction(x.unloadModule) && x.unloadModule("captions");
                    Z = !1;
                    n();
                    G.sendEvent(f.JWPLAYER_MEDIA_LEVELS, {
                        levels: G.getQualityLevels(),
                        currentQuality: G.getCurrentQuality()
                    });
                    G.setState(e.PLAYING);
                    break;
                case b.PAUSED:
                    G.setState(e.PAUSED);
                    break;
                case b.BUFFERING:
                    G.setState(e.BUFFERING);
                    break;
                case b.CUED:
                    G.setState(e.IDLE)
            }
        }

        function p() {
            T !==
                t.PlayerState.ENDED && G.play();
            G.sendEvent(f.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                currentQuality: G.getCurrentQuality(),
                levels: G.getQualityLevels()
            })
        }

        function z() {
            G.sendEvent(f.JWPLAYER_MEDIA_ERROR, {
                message: "Error loading YouTube: Video could not be played"
            })
        }

        function w() {
            b && (G.setVisibility(!0), a.css("#" + g + " .jwcontrols", {
                display: "none"
            }))
        }

        function A() {
            clearInterval(S);
            if (x && x.stopVideo) try {
                x.stopVideo(), x.clearVideo()
            } catch (a) {}
        }

        function F(b) {
            P = null;
            var c = a.youTubeID(b.sources[0].file);
            b.image || (b.image =
                "//i.ytimg.com/vi/" + c + "/0.jpg");
            G.setVisibility(!0);
            if (!t || !x) N = function () {
                if (!c) throw "invalid Youtube ID";
                if (M.parentNode) {
                    var b = {
                        height: "100%",
                        width: "100%",
                        videoId: c,
                        playerVars: a.extend({
                            html5: 1,
                            autoplay: 0,
                            controls: 0,
                            showinfo: 0,
                            rel: 0,
                            modestbranding: 0,
                            playsinline: 1,
                            origin: location.protocol + "//" + location.hostname
                        }, void 0),
                        events: {
                            onReady: E,
                            onStateChange: u,
                            onPlaybackQualityChange: p,
                            onError: z
                        }
                    };
                    G.setVisibility(!0);
                    x = new t.Player(M, b);
                    M = x.getIframe();
                    N = null;
                    w();
                    L()
                }
            }, s();
            else if (x.getPlayerState)
                if (x.getVideoData().video_id !==
                    c) {
                    Z ? (A(), x.cueVideoById(c)) : x.loadVideoById(c);
                    var e = x.getPlayerState(),
                        f = t.PlayerState;
                    (e === f.UNSTARTED || e === f.CUED) && w()
                } else 0 < x.getCurrentTime() && x.seekTo(0), n();
            else e = function () {
                L();
                G.load(b)
            }, P = P ? y(e, P) : e
        }

        function L() {
            x && x.getVolume && (G.sendEvent(f.JWPLAYER_MEDIA_VOLUME, {
                volume: Math.round(x.getVolume())
            }), G.sendEvent(f.JWPLAYER_MEDIA_MUTE, {
                mute: x.isMuted()
            }))
        }
        this.state = e.IDLE;
        var G = a.extend(this, new d.events.eventdispatcher("provider." + this.name)),
            t = window.YT,
            x = null,
            M = document.createElement("div"),
            J, H = -1,
            K = !1,
            N = null,
            P = null,
            S = -1,
            T = -1,
            D, W = !1,
            Z = b;
        this.setState = function (b) {
            clearInterval(S);
            b !== e.IDLE && (S = setInterval(v, 250), b === e.PLAYING ? a.css("#" + g + " .jwcontrols", {
                display: ""
            }) : b === e.BUFFERING && r());
            h.setState.apply(this, arguments)
        };
        !t && j && (j.addEventListener(f.COMPLETE, l), j.addEventListener(f.ERROR, m), j.load());
        M.id = g + "_youtube";
        this.init = function (a) {
            F(a)
        };
        this.destroy = function () {
            this.remove();
            J = M = t = G = null
        };
        this.load = function (a) {
            this.setState(e.BUFFERING);
            F(a);
            G.play()
        };
        this.stop = function () {
            A();
            this.setState(e.IDLE)
        };
        this.play = function () {
            Z || (x && x.playVideo ? x.playVideo() : P = P ? y(this.play, P) : this.play)
        };
        this.pause = function () {
            Z || x.pauseVideo && x.pauseVideo()
        };
        this.seek = function (a) {
            Z || x.seekTo && x.seekTo(a)
        };
        this.volume = function (b) {
            x && x.getVolume && a.exists(b) && (D = Math.min(Math.max(0, b), 100), x.setVolume(D))
        };
        this.mute = function (b) {
            x && x.getVolume && (a.exists(b) || (b = !x.isMuted()), b ? (D = x.getVolume(), x.mute()) : (this.volume(
                D), x.unMute()))
        };
        this.detachMedia = function () {
            return document.createElement("video")
        };
        this.attachMedia = function () {
            W && (this.setState(e.IDLE), this.sendEvent(f.JWPLAYER_MEDIA_COMPLETE), W = !1)
        };
        this.setContainer = function (a) {
            J = a;
            a.appendChild(M);
            this.setVisibility(!0)
        };
        this.getContainer = function () {
            return J
        };
        this.supportsFullscreen = function () {
            return !(!J || !J.requestFullscreen && !J.requestFullScreen && !J.webkitRequestFullscreen && !J.webkitRequestFullScreen &&
                !J.webkitEnterFullscreen && !J.webkitEnterFullScreen && !J.mozRequestFullScreen && !J.msRequestFullscreen
            )
        };
        this.remove = function () {
            A();
            M && (J && J ===
                M.parentNode) && J.removeChild(M);
            N = P = x = null
        };
        this.setVisibility = function (c) {
            c ? (a.css.style(M, {
                display: "block"
            }), a.css.style(J, {
                visibility: "visible",
                opacity: 1
            })) : b || a.css.style(J, {
                opacity: 0
            })
        };
        this.resize = function (b, c, e) {
            return a.stretch(e, M, b, c, M.clientWidth, M.clientHeight)
        };
        this.checkComplete = function () {
            return W
        };
        this.getCurrentQuality = function () {
            if (x) {
                if (x.getAvailableQualityLevels) {
                    var a = x.getPlaybackQuality();
                    return x.getAvailableQualityLevels().indexOf(a)
                }
                return -1
            }
        };
        this.getQualityLevels = function () {
            if (x) {
                if (!c.isFunction(x.getAvailableQualityLevels)) return [];
                var a = x.getAvailableQualityLevels();
                return 2 === a.length && c.contains(a, "auto") ? {
                    label: c.without(a, "auto")
                } : c.map(a, function (a) {
                    return {
                        label: a
                    }
                }).reverse()
            }
        };
        this.setCurrentQuality = function (a) {
            if (x && x.getAvailableQualityLevels) {
                var b = x.getAvailableQualityLevels();
                b.length && x.setPlaybackQuality(b[b.length - a - 1])
            }
        }
    }
    var a = d.utils,
        c = d._,
        f = d.events,
        e = f.state,
        h = d.html5.DefaultProvider,
        j = new a.scriptloader(window.location.protocol + "//www.youtube.com/iframe_api"),
        b = a.isMobile();
    window.onYouTubeIframeAPIReady =
        function () {
            j = null
        };
    var m = function () {};
    m.prototype = h;
    l.prototype = new m;
    l.supports = function (b) {
        return a.isYouTube(b.file, b.type)
    };
    d.html5.YoutubeProvider = l
})(jwplayer);
(function (d) {
    var l = d.utils,
        a = l.css,
        c = d.events,
        f = 80,
        e = 30;
    d.html5.adskipbutton = function (h, j, b, d) {
        function g(a) {
            0 > E || (a = b.replace(/xx/gi, Math.ceil(E - a)), s(a))
        }

        function k(a, b) {
            if ("number" === l.typeOf(z)) E = z;
            else if ("%" === z.slice(-1)) {
                var c = parseFloat(z.slice(0, -1));
                b && !isNaN(c) && (E = b * c / 100)
            } else "string" === l.typeOf(z) ? E = l.seconds(z) : isNaN(z) || (E = z)
        }

        function q() {
            u && L.sendEvent(c.JWPLAYER_AD_SKIPPED)
        }

        function s(a) {
            a = a || d;
            var b = y.getContext("2d");
            b.clearRect(0, 0, f, e);
            C(b, 0, 0, f, e, 5, !0, !1, !1);
            C(b, 0, 0, f, e, 5,
                !1, !0, !1);
            b.fillStyle = "#979797";
            b.globalAlpha = 1;
            var c = y.height / 2,
                g = y.width / 2;
            b.textAlign = "center";
            b.font = "Bold 12px Sans-Serif";
            a === d && (g -= w.width, b.drawImage(w, y.width - (y.width - b.measureText(d).width) / 2 - 4, (e -
                w.height) / 2));
            b.fillText(a, g, c + 4)
        }

        function v(a) {
            a = a || d;
            var b = y.getContext("2d");
            b.clearRect(0, 0, f, e);
            C(b, 0, 0, f, e, 5, !0, !1, !0);
            C(b, 0, 0, f, e, 5, !1, !0, !0);
            b.fillStyle = "#FFFFFF";
            b.globalAlpha = 1;
            var c = y.height / 2,
                g = y.width / 2;
            b.textAlign = "center";
            b.font = "Bold 12px Sans-Serif";
            a === d && (g -= w.width, b.drawImage(A,
                y.width - (y.width - b.measureText(d).width) / 2 - 4, (e - w.height) / 2));
            b.fillText(a, g, c + 4)
        }

        function C(a, b, c, e, f, g, h, j, r) {
            "undefined" === typeof j && (j = !0);
            "undefined" === typeof g && (g = 5);
            a.beginPath();
            a.moveTo(b + g, c);
            a.lineTo(b + e - g, c);
            a.quadraticCurveTo(b + e, c, b + e, c + g);
            a.lineTo(b + e, c + f - g);
            a.quadraticCurveTo(b + e, c + f, b + e - g, c + f);
            a.lineTo(b + g, c + f);
            a.quadraticCurveTo(b, c + f, b, c + f - g);
            a.lineTo(b, c + g);
            a.quadraticCurveTo(b, c, b + g, c);
            a.closePath();
            j && (a.strokeStyle = "white", a.globalAlpha = r ? 1 : 0.25, a.stroke());
            h && (a.fillStyle =
                "#000000", a.globalAlpha = 0.5, a.fill())
        }

        function r(a, b) {
            var c = document.createElement(a);
            b && (c.className = b);
            return c
        }
        var n, y, E = -1,
            u = !1,
            p, z = 0,
            w, A, F = !1,
            L = l.extend(this, new c.eventdispatcher);
        L.updateSkipTime = function (b, c) {
            k(b, c);
            0 <= E && (a.style(n, {
                visibility: p ? "visible" : "hidden"
            }), 0 < E - b ? (g(b), u && (u = !1, n.style.cursor = "default")) : u || (u || (u = !0,
                n.style.cursor = "pointer"), F ? v() : s()))
        };
        this.reset = function (a) {
            u = !1;
            z = a;
            k(0, 0);
            g(0)
        };
        L.show = function () {
            p = !0;
            0 < E && a.style(n, {
                visibility: "visible"
            })
        };
        L.hide = function () {
            p = !1;
            a.style(n, {
                visibility: "hidden"
            })
        };
        this.element = function () {
            return n
        };
        w = new Image;
        w.src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ODkzMWI3Ny04YjE5LTQzYzMtOGM2Ni0wYzdkODNmZTllNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDI0OTcxRkE0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDI0OTcxRjk0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA5ZGQxNDktNzdkMi00M2E3LWJjYWYtOTRjZmM2MWNkZDI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ4OTMxYjc3LThiMTktNDNjMy04YzY2LTBjN2Q4M2ZlOWU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqAZXX0AAABYSURBVHjafI2BCcAwCAQ/kr3ScRwjW+g2SSezCi0kYHpwKLy8JCLDbWaGTM+MAFzuVNXhNiTQsh+PS9QhZ7o9JuFMeUVNwjsamDma4K+3oy1cqX/hxyPAAAQwNKV27g9PAAAAAElFTkSuQmCC";
        w.className = "jwskipimage jwskipout";
        A = new Image;
        A.src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ODkzMWI3Ny04YjE5LTQzYzMtOGM2Ni0wYzdkODNmZTllNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDI0OTcxRkU0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDI0OTcxRkQ0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA5ZGQxNDktNzdkMi00M2E3LWJjYWYtOTRjZmM2MWNkZDI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ4OTMxYjc3LThiMTktNDNjMy04YzY2LTBjN2Q4M2ZlOWU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvgIj/QAAABYSURBVHjadI6BCcAgDAS/0jmyih2tm2lHSRZJX6hQQ3w4FP49LKraSHV3ZLDzAuAi3cwaqUhSfvft+EweznHneUdTzPGRmp5hEJFhAo3LaCnjn7blzCvAAH9YOSCL5RZKAAAAAElFTkSuQmCC";
        A.className = "jwskipimage jwskipover";
        n = r("div", "jwskip");
        n.id = h + "_skipcontainer";
        y = r("canvas");
        n.appendChild(y);
        L.width = y.width = f;
        L.height = y.height = e;
        n.appendChild(A);
        n.appendChild(w);
        a.style(n, {
            visibility: "hidden",
            bottom: j
        });
        n.addEventListener("mouseover", function () {
            F = !0;
            u && v()
        });
        n.addEventListener("mouseout", function () {
            F = !1;
            u && s()
        });
        l.isMobile() ? (new l.touch(n)).addEventListener(l.touchEvents.TAP, q) : n.addEventListener("click", q)
    };
    a(".jwskip", {
        position: "absolute",
        "float": "right",
        display: "inline-block",
        width: f,
        height: e,
        right: 10
    });
    a(".jwskipimage", {
        position: "relative",
        display: "none"
    })
})(window.jwplayer);
(function (d) {
    var l = d.html5,
        a = d.utils,
        c = d.events,
        f = c.state,
        e = d.parsers,
        h = a.css,
        j = a.isAndroid(4, !0),
        b = "playing";
    l.captions = function (h, g) {
        function l(b) {
            a.log("CAPTIONS(" + b + ")")
        }

        function q(a) {
            (H = a.fullscreen) ? (s(), setTimeout(s, 500)) : n(!0)
        }

        function s() {
            var a = z.offsetHeight,
                b = z.offsetWidth;
            0 !== a && 0 !== b && F.resize(b, Math.round(0.94 * a))
        }

        function v(b, c) {
            a.ajax(b, function (a) {
                var b = a.responseXML ? a.responseXML.firstChild : null;
                x++;
                if (b) {
                    "xml" === e.localName(b) && (b = b.nextSibling);
                    for (; b.nodeType === b.COMMENT_NODE;) b =
                        b.nextSibling
                }
                b = b && "tt" === e.localName(b) ? new d.parsers.dfxp : new d.parsers.srt;
                try {
                    var f = b.parse(a.responseText);
                    G < t.length && (t[c].data = f);
                    n(!1)
                } catch (g) {
                    l(g.message + ": " + t[c].file)
                }
                x === t.length && (0 < M && (E(M), M = -1), r())
            }, C, !0)
        }

        function C(a) {
            x++;
            l(a);
            x === t.length && (0 < M && (E(M), M = -1), r())
        }

        function r() {
            for (var a = [], b = 0; b < t.length; b++) a.push(t[b]);
            K.sendEvent(c.JWPLAYER_CAPTIONS_LOADED, {
                captionData: a
            })
        }

        function n(a) {
            t.length ? L === b && 0 < J ? (F.show(), H ? q({
                    fullscreen: !0
                }) : (y(), a && setTimeout(y, 500))) : F.hide() :
                F.hide()
        }

        function y() {
            F.resize()
        }

        function E(a) {
            0 < a ? (G = a - 1, J = Math.floor(a), G >= t.length || (t[G].data ? F.populate(t[G].data) : x ===
                t.length ? (l("file not loaded: " + t[G].file), 0 !== J && u(c.JWPLAYER_CAPTIONS_CHANGED,
                    t, 0), J = 0) : M = a, n(!1))) : (J = 0, n(!1))
        }

        function u(a, b, c) {
            K.sendEvent(a, {
                type: a,
                tracks: b,
                track: c
            })
        }

        function p() {
            for (var a = [{
                    label: "Off"
                }], b = 0; b < t.length; b++) a.push({
                label: t[b].label
            });
            return a
        }
        var z, w = {
                back: !0,
                color: "#FFFFFF",
                fontSize: 15,
                fontFamily: "Arial,sans-serif",
                fontOpacity: 100,
                backgroundColor: "#000",
                backgroundOpacity: 100,
                edgeStyle: null,
                windowColor: "#FFFFFF",
                windowOpacity: 0
            },
            A = {
                fontStyle: "normal",
                fontWeight: "normal",
                textDecoration: "none"
            },
            F, L, G, t = [],
            x = 0,
            M = -1,
            J = 0,
            H = !1,
            K = new c.eventdispatcher;
        a.extend(this, K);
        this.element = function () {
            return z
        };
        this.getCaptionsList = function () {
            return p()
        };
        this.getCurrentCaptions = function () {
            return J
        };
        this.setCurrentCaptions = function (b) {
            0 <= b && (J !== b && b <= t.length) && (E(b), b = p(), a.saveCookie("captionLabel", b[J].label),
                u(c.JWPLAYER_CAPTIONS_CHANGED, b, J))
        };
        z = document.createElement("div");
        z.id = h.id + "_caption";
        z.className = "jwcaptions";
        h.jwAddEventListener(c.JWPLAYER_PLAYER_STATE, function (a) {
            switch (a.newstate) {
                case f.IDLE:
                    L = "idle";
                    n(!1);
                    break;
                case f.PLAYING:
                    L = b, n(!1)
            }
        });
        h.jwAddEventListener(c.JWPLAYER_PLAYLIST_ITEM, function () {
            G = 0;
            t = [];
            F.update(0);
            x = 0;
            for (var b = h.jwGetPlaylist()[h.jwGetPlaylistIndex()].tracks, e = [], f = 0, g = "", r = 0,
                    g = "", f = 0; f < b.length; f++) g = b[f].kind.toLowerCase(), ("captions" === g ||
                "subtitles" === g) && e.push(b[f]);
            J = 0;
            if (!j) {
                for (f = 0; f < e.length; f++)
                    if (g = e[f].file) e[f].label ||
                        (e[f].label = f.toString()), t.push(e[f]), v(t[f].file, f);
                for (f = 0; f < t.length; f++)
                    if (t[f]["default"]) {
                        r = f + 1;
                        break
                    } b = a.getCookies();
                if (g = b.captionLabel) {
                    b = p();
                    for (f = 0; f < b.length; f++)
                        if (g === b[f].label) {
                            r = f;
                            break
                        }
                }
                0 < r && E(r);
                n(!1);
                u(c.JWPLAYER_CAPTIONS_LIST, p(), J)
            }
        });
        h.jwAddEventListener(c.JWPLAYER_MEDIA_ERROR, l);
        h.jwAddEventListener(c.JWPLAYER_ERROR, l);
        h.jwAddEventListener(c.JWPLAYER_READY, function () {
            a.foreach(w, function (a, b) {
                g && (void 0 !== g[a] ? b = g[a] : void 0 !== g[a.toLowerCase()] && (b = g[a.toLowerCase()]));
                A[a] =
                    b
            });
            F = new d.html5.captions.renderer(A, z);
            n(!1)
        });
        h.jwAddEventListener(c.JWPLAYER_MEDIA_TIME, function (a) {
            F.update(a.position)
        });
        h.jwAddEventListener(c.JWPLAYER_FULLSCREEN, q);
        h.jwAddEventListener(c.JWPLAYER_RESIZE, function () {
            n(!1)
        })
    };
    h(".jwcaptions", {
        position: "absolute",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        overflow: "hidden"
    })
})(jwplayer);
(function (d) {
    var l = d.utils,
        a = l.css.style;
    d.html5.captions.renderer = function (c, f) {
        function e(b) {
            b = b || "";
            C = "hidden";
            a(g, {
                visibility: C
            });
            q.innerHTML = b;
            b.length && (C = "visible", setTimeout(h, 16))
        }

        function h() {
            if ("visible" === C) {
                var b = g.clientWidth,
                    e = Math.pow(b / 400, 0.6),
                    f = c.fontSize * e;
                a(q, {
                    maxWidth: b + "px",
                    fontSize: Math.round(f) + "px",
                    lineHeight: Math.round(1.4 * f) + "px",
                    padding: Math.round(1 * e) + "px " + Math.round(8 * e) + "px"
                });
                c.windowOpacity && a(k, {
                    padding: Math.round(5 * e) + "px",
                    borderRadius: Math.round(5 * e) + "px"
                });
                a(g, {
                    visibility: C
                })
            }
        }

        function j() {
            for (var a = -1, b = 0; b < d.length; b++)
                if (d[b].begin <= v && (b === d.length - 1 || d[b + 1].begin >= v)) {
                    a = b;
                    break
                } - 1 === a ? e("") : a !== s && (s = a, e(d[b].text))
        }

        function b(a, b, c) {
            c = l.hexToRgba("#000000", c);
            "dropshadow" === a ? b.textShadow = "0 2px 1px " + c : "raised" === a ? b.textShadow = "0 0 5px " +
                c + ", 0 1px 5px " + c + ", 0 2px 5px " + c : "depressed" === a ? b.textShadow = "0 -2px 1px " +
                c : "uniform" === a && (b.textShadow = "-2px 0 1px " + c + ",2px 0 1px " + c + ",0 -2px 1px " +
                    c + ",0 2px 1px " + c + ",-1px 1px 1px " + c + ",1px 1px 1px " +
                    c + ",1px -1px 1px " + c + ",1px 1px 1px " + c)
        }
        var d, g, k, q, s, v, C = "visible",
            r = -1;
        this.hide = function () {
            clearInterval(r);
            a(g, {
                display: "none"
            })
        };
        this.populate = function (a) {
            s = -1;
            d = a;
            j()
        };
        this.resize = function () {
            h()
        };
        this.show = function () {
            a(g, {
                display: "block"
            });
            h();
            clearInterval(r);
            r = setInterval(h, 250)
        };
        this.update = function (a) {
            v = a;
            d && j()
        };
        var n = c.fontOpacity,
            y = c.windowOpacity,
            E = c.edgeStyle,
            u = c.backgroundColor,
            p = {
                display: "inline-block"
            },
            z = {
                color: l.hexToRgba(l.rgbHex(c.color), n),
                display: "inline-block",
                fontFamily: c.fontFamily,
                fontStyle: c.fontStyle,
                fontWeight: c.fontWeight,
                textAlign: "center",
                textDecoration: c.textDecoration,
                wordWrap: "break-word"
            };
        y && (p.backgroundColor = l.hexToRgba(l.rgbHex(c.windowColor), y));
        b(E, z, n);
        c.back ? z.backgroundColor = l.hexToRgba(l.rgbHex(u), c.backgroundOpacity) : null === E && b("uniform",
            z);
        g = document.createElement("div");
        k = document.createElement("div");
        q = document.createElement("span");
        a(g, {
            display: "block",
            height: "auto",
            position: "absolute",
            bottom: "20px",
            textAlign: "center",
            width: "100%"
        });
        a(k, p);
        a(q, z);
        k.appendChild(q);
        g.appendChild(k);
        f.appendChild(g)
    }
})(jwplayer);
(function (d, l, a) {
    function c(a) {
        return a ? parseInt(a.width, 10) + "px " + parseInt(a.height, 10) + "px" : "0 0"
    }
    var f = d.jwplayer,
        e = f.html5,
        h = f.utils,
        j = f._,
        b = f.events,
        m = b.state,
        g = h.css,
        k = h.transitionStyle,
        q = h.isMobile(),
        s = h.isAndroid(4, !0),
        v = d.top !== d.self,
        C = "button",
        r = "text",
        n = "slider",
        y = {
            display: "none"
        },
        E = {
            display: "block"
        },
        u = {
            display: ""
        };
    e.controlbar = function (p, k) {
        function w(a, b, c) {
            return {
                name: a,
                type: b,
                className: c
            }
        }

        function A(a) {
            g.block(aa);
            var b = a.duration === Number.POSITIVE_INFINITY,
                c = 0 === a.duration && 0 !== a.position &&
                h.isSafari() && !q;
            b || c ? (X.setText(p.jwGetPlaylist()[p.jwGetPlaylistIndex()].title || "Live broadcast"), D(!1)) :
                (B.elapsed && (b = h.timeFormat(a.position), B.elapsed.innerHTML = b), B.duration && (b = h.timeFormat(
                        a.duration), B.duration.innerHTML = b), 0 < a.duration ? Fa(a.position / a.duration) :
                    Fa(0), sa = a.duration, ma || X.setText())
        }

        function F() {
            var a = p.jwGetMute();
            Oa = p.jwGetVolume() / 100;
            Z("mute", a || 0 === Oa);
            Ha(a ? 0 : Oa)
        }

        function L() {
            g.style([B.hd, B.cc], y);
            ga();
            wa()
        }

        function G(a) {
            Pa = Math.floor(a.currentQuality);
            B.hd && (B.hd.querySelector("button").className =
                2 === ia.length && 0 === Pa ? "off" : "");
            oa && 0 <= Pa && oa.setActive(a.currentQuality)
        }

        function t(a) {
            fa && (Ba = Math.floor(a.track), B.cc && (B.cc.querySelector("button").className = 2 === fa.length &&
                0 === Ba ? "off" : ""), pa && 0 <= Ba && pa.setActive(a.track))
        }

        function x(a) {
            B.cast && (h.canCast() ? h.addClass(B.cast, "jwcancast") : h.removeClass(B.cast, "jwcancast"));
            M(a || Qa)
        }

        function M(a) {
            Qa = a;
            Z("cast", a.active);
            wa()
        }

        function J() {
            $ = h.extend({}, ca, V.getComponentSettings("controlbar"), k);
            Ia = U("background").height;
            var a = ta ? 0 : $.margin;
            g.style(R, {
                height: Ia,
                bottom: a,
                left: a,
                right: a,
                "max-width": ta ? "" : $.maxwidth
            });
            g(H(".jwtext"), {
                font: $.fontsize + "px/" + U("background").height + "px " + $.font,
                color: $.fontcolor,
                "font-weight": $.fontweight
            });
            g(H(".jwoverlay"), {
                bottom: Ia
            })
        }

        function H(a) {
            return "#" + aa + (a ? " " + a : "")
        }

        function K() {
            return l.createElement("span")
        }

        function N(a, b, e, f, j) {
            var r = K(),
                d = U(a);
            f = f ? " left center" : " center";
            var l = c(d);
            r.className = "jw" + a;
            r.innerHTML = "\x26nbsp;";
            if (d && d.src) return e = e ? {
                background: 'url("' + d.src + '") repeat-x ' + f,
                "background-size": l,
                height: j ? d.height : ""
            } : {
                background: 'url("' + d.src + '") no-repeat' + f,
                "background-size": l,
                width: d.width,
                height: j ? d.height : ""
            }, r.skin = d, g(H((j ? ".jwvertical " : "") + ".jw" + a), h.extend(e, b)), B[a] = r
        }

        function P(a, b, e, f) {
            b && b.src && (g(a, {
                width: b.width,
                background: "url(" + b.src + ") no-repeat center",
                "background-size": c(b)
            }), e.src && !q && g(a + ":hover," + a + ".off:hover", {
                background: "url(" + e.src + ") no-repeat center",
                "background-size": c(e)
            }), f && f.src && g(a + ".off", {
                background: "url(" + f.src + ") no-repeat center",
                "background-size": c(f)
            }))
        }

        function S(a) {
            return function (c) {
                rb[a] && (rb[a](), q && X.sendEvent(b.JWPLAYER_USER_ACTION));
                c.preventDefault && c.preventDefault()
            }
        }

        function T(b) {
            h.foreach(ib, function (c, e) {
                c !== b && ("cc" === c && (clearTimeout(Ja), Ja = a), "hd" === c && (clearTimeout(na),
                    na = a), e.hide())
            })
        }

        function D(b) {
            R && B.alt && (b === a && (b = R.parentNode && 320 <= R.parentNode.clientWidth), b && !ma ? g.style(
                Wa, u) : g.style(Wa, y))
        }

        function W() {
            !ta && !ma && (g.block(aa), qa.show(), Ka("volume", qa), T("volume"))
        }

        function Z(a, b) {
            j.isBoolean(b) || (b = !eb[a]);
            B[a] && (b ? h.addClass(B[a],
                    "jwtoggle") : h.removeClass(B[a], "jwtoggle"), h.addClass(B[a], "jwtoggling"),
                setTimeout(function () {
                    h.removeClass(B[a], "jwtoggling")
                }, 100));
            eb[a] = b
        }

        function Y() {
            2 < ia.length && (ha && (clearTimeout(ha), ha = a), g.block(aa), oa.show(), Ka("hd", oa), T("hd"))
        }

        function da() {
            fa && 2 < fa.length && (jb && (clearTimeout(jb), jb = a), g.block(aa), pa.show(), Ka("cc", pa), T(
                "cc"))
        }

        function ea(b) {
            0 <= b && b < ia.length && (p.jwSetCurrentQuality(b), clearTimeout(na), na = a, oa.hide())
        }

        function va(b) {
            0 <= b && b < fa.length && (p.jwSetCurrentCaptions(b), clearTimeout(Ja),
                Ja = a, pa.hide())
        }

        function ra() {
            2 === fa.length && va((Ba + 1) % 2)
        }

        function I() {
            2 === ia.length && ea((Pa + 1) % 2)
        }

        function Va(a) {
            a.preventDefault();
            l.onselectstart = function () {
                return !1
            }
        }

        function La(a) {
            Aa();
            Ca = a;
            d.addEventListener("mouseup", Da, !1);
            d.addEventListener("mousemove", Da, !1)
        }

        function Aa() {
            d.removeEventListener("mouseup", Da);
            d.removeEventListener("mousemove", Da);
            Ca = null
        }

        function Ma() {
            B.timeRail.className = "jwrail";
            p.jwGetState() !== m.IDLE && (p.jwSeekDrag(!0), La("time"), kb(), X.sendEvent(b.JWPLAYER_USER_ACTION))
        }

        function Na(a) {
            if (Ca) {
                var c = B[Ca].querySelector(".jwrail"),
                    c = h.bounds(c),
                    c = a.x / c.width;
                100 < c && (c = 100);
                a.type === h.touchEvents.DRAG_END ? (p.jwSeekDrag(!1), B.timeRail.className = "jwrail", Aa(),
                    fb.time(c), Xa()) : (Fa(c), a = (new Date).getTime(), 500 < a - lb && (lb = a, fb.time(
                    c)));
                X.sendEvent(b.JWPLAYER_USER_ACTION)
            }
        }

        function ob(a) {
            var c = B.time.querySelector(".jwrail"),
                c = h.bounds(c);
            a = a.x / c.width;
            100 < a && (a = 100);
            p.jwGetState() !== m.IDLE && (fb.time(a), X.sendEvent(b.JWPLAYER_USER_ACTION))
        }

        function pb(a) {
            return function (b) {
                b.button ||
                    (B[a + "Rail"].className = "jwrail", "time" === a ? p.jwGetState() !== m.IDLE && (p.jwSeekDrag(
                        !0), La(a)) : La(a))
            }
        }

        function Da(a) {
            if (Ca && !a.button) {
                var b = B[Ca].querySelector(".jwrail"),
                    c = h.bounds(b),
                    b = Ca,
                    c = xa() ? B[b].vertical ? (100 * c.bottom - a.pageY) / (100 * c.height) : (a.pageX - 100 *
                        c.left) / (100 * c.width) : B[b].vertical ? (c.bottom - a.pageY) / c.height : (a.pageX -
                        c.left) / c.width;
                "mouseup" === a.type ? ("time" === b && p.jwSeekDrag(!1), B[b + "Rail"].className = "jwrail",
                    Aa(), fb[b.replace("H", "")](c)) : ("time" === Ca ? Fa(c) : Ha(c), a = (new Date).getTime(),
                    500 < a - lb && (lb = a, fb[Ca.replace("H", "")](c)));
                return !1
            }
        }

        function kb(a) {
            a && ab.apply(this, arguments);
            ka && (sa && !ta && !q) && (g.block(aa), ka.show(), Ka("time", ka))
        }

        function Xa() {
            ka && ka.hide()
        }

        function ab(a) {
            ya = h.bounds(R);
            if ((ja = h.bounds(Ya)) && 0 !== ja.width) {
                var b;
                xa() ? (a = a.pageX ? a.pageX - 100 * ja.left : a.x, b = 100 * ja.width) : (a = a.pageX ? a.pageX -
                    ja.left : a.x, b = ja.width);
                ka.positionX(Math.round(a));
                qb(sa * a / b)
            }
        }

        function Za() {
            h.foreach(gb, function (a, b) {
                var c = {};
                "%" === b.position.toString().slice(-1) ? c.left = b.position : 0 <
                    sa ? (c.left = (100 * b.position / sa).toFixed(2) + "%", c.display = null) : (c.left =
                        0, c.display = "none");
                g.style(b.element, c)
            })
        }

        function Q() {
            jb = setTimeout(pa.hide, 500)
        }

        function Ga() {
            ha = setTimeout(oa.hide, 500)
        }

        function la(a, b, c, e) {
            if (!q) {
                var f = a.element();
                b.appendChild(f);
                b.addEventListener("mousemove", c, !1);
                e ? b.addEventListener("mouseout", e, !1) : b.addEventListener("mouseout", a.hide, !1);
                g.style(f, {
                    left: "50%"
                })
            }
        }

        function hb(c, e, f, g) {
            if (q) {
                var j = c.element();
                e.appendChild(j);
                (new h.touch(e)).addEventListener(h.touchEvents.TAP,
                    function () {
                        var e = f;
                        "cc" === g ? (2 === fa.length && (e = ra), Ja ? (clearTimeout(Ja), Ja = a, c.hide()) :
                            (Ja = setTimeout(function () {
                                c.hide();
                                Ja = a
                            }, 4E3), e()), X.sendEvent(b.JWPLAYER_USER_ACTION)) : "hd" === g && (2 ===
                            ia.length && (e = I), na ? (clearTimeout(na), na = a, c.hide()) : (na =
                                setTimeout(function () {
                                    c.hide();
                                    na = a
                                }, 4E3), e()), X.sendEvent(b.JWPLAYER_USER_ACTION))
                    })
            }
        }

        function Ra(a) {
            var b = K();
            b.className = "jwgroup jw" + a;
            Ea[a] = b;
            if (Sa[a]) {
                var b = Sa[a],
                    f = Ea[a];
                if (b && 0 < b.elements.length)
                    for (var j = 0; j < b.elements.length; j++) {
                        var d;
                        a: {
                            d = b.elements[j];
                            var k = a;
                            switch (d.type) {
                                case r:
                                    k = void 0;
                                    d = d.name;
                                    var k = {},
                                        p = U(("alt" === d ? "elapsed" : d) + "Background");
                                    if (p.src) {
                                        var t = K();
                                        t.id = aa + "_" + d;
                                        "elapsed" === d || "duration" === d ? (t.className = "jwtext jw" +
                                                d + " jwhidden", Wa.push(t)) : t.className = "jwtext jw" +
                                            d;
                                        k.background = "url(" + p.src + ") repeat-x center";
                                        k["background-size"] = c(U("background"));
                                        g.style(t, k);
                                        t.innerHTML = "alt" !== d ? "00:00" : "";
                                        k = B[d] = t
                                    } else k = null;
                                    d = k;
                                    break a;
                                case C:
                                    if ("blank" !== d.name) {
                                        d = d.name;
                                        p = k;
                                        if (!U(d + "Button").src || q && ("mute" === d || 0 === d.indexOf(
                                                "volume")) ||
                                            s && /hd|cc/.test(d)) d = null;
                                        else {
                                            var k = K(),
                                                t = K(),
                                                v = void 0,
                                                v = ba,
                                                m = N(v.name);
                                            m || (m = K(), m.className = "jwblankDivider");
                                            v.className && (m.className += " " + v.className);
                                            v = m;
                                            m = l.createElement("button");
                                            k.className = "jw" + d;
                                            "left" === p ? (k.appendChild(t), k.appendChild(v)) : (k.appendChild(
                                                v), k.appendChild(t));
                                            q ? "hd" !== d && "cc" !== d && (new h.touch(m)).addEventListener(
                                                h.touchEvents.TAP, S(d)) : m.addEventListener("click",
                                                S(d), !1);
                                            m.innerHTML = "\x26nbsp;";
                                            m.tabIndex = -1;
                                            m.setAttribute("type", "button");
                                            t.appendChild(m);
                                            p = U(d + "Button");
                                            t = U(d + "ButtonOver");
                                            v = U(d + "ButtonOff");
                                            P(H(".jw" + d + " button"), p, t, v);
                                            (p = xb[d]) && P(H(".jw" + d + ".jwtoggle button"), U(p +
                                                "Button"), U(p + "ButtonOver"));
                                            eb[d] ? h.addClass(k, "jwtoggle") : h.removeClass(k, "jwtoggle");
                                            d = B[d] = k
                                        }
                                        break a
                                    }
                                    break;
                                case n:
                                    k = void 0;
                                    v = d.name;
                                    if (q && 0 === v.indexOf("volume")) k = void 0;
                                    else {
                                        d = K();
                                        var t = "volume" === v,
                                            L = v + ("time" === v ? "Slider" : "") + "Cap",
                                            p = t ? "Top" : "Left",
                                            k = t ? "Bottom" : "Right",
                                            m = N(L + p, null, !1, !1, t),
                                            w = N(L + k, null, !1, !1, t),
                                            ha;
                                        ha = v;
                                        var u = t,
                                            x = p,
                                            G = k,
                                            z = K(),
                                            Y = ["Rail", "Buffer", "Progress"],
                                            E =
                                            void 0,
                                            W = void 0;
                                        z.className = "jwrail";
                                        for (var A = 0; A < Y.length; A++) {
                                            var W = "time" === ha ? "Slider" : "",
                                                M = ha + W + Y[A],
                                                D = N(M, null, !u, 0 === ha.indexOf("volume"), u),
                                                J = N(M + "Cap" + x, null, !1, !1, u),
                                                F = N(M + "Cap" + G, null, !1, !1, u),
                                                na = U(M + "Cap" + x),
                                                I = U(M + "Cap" + G);
                                            if (D) {
                                                var T = K();
                                                T.className = "jwrailgroup " + Y[A];
                                                J && T.appendChild(J);
                                                T.appendChild(D);
                                                F && (T.appendChild(F), F.className += " jwcap" + (u ?
                                                    "Bottom" : "Right"));
                                                g(H(".jwrailgroup." + Y[A]), {
                                                    "min-width": u ? "" : na.width + I.width
                                                });
                                                T.capSize = u ? na.height + I.height : na.width + I.width;
                                                g(H("." +
                                                    D.className), {
                                                    left: u ? "" : na.width,
                                                    right: u ? "" : I.width,
                                                    top: u ? na.height : "",
                                                    bottom: u ? I.height : "",
                                                    height: u ? "auto" : ""
                                                });
                                                2 === A && (E = T);
                                                2 === A && !u ? (D = K(), D.className =
                                                    "jwprogressOverflow", D.appendChild(T), B[M] = D, z
                                                    .appendChild(D)) : (B[M] = T, z.appendChild(T))
                                            }
                                        }
                                        if (x = N(ha + W + "Thumb", null, !1, !1, u)) g(H("." + x.className), {
                                            opacity: "time" === ha ? 0 : 1,
                                            "margin-top": u ? x.skin.height / -2 : ""
                                        }), x.className += " jwthumb", (u && E ? E : z).appendChild(x);
                                        q ? (u = new h.touch(z), u.addEventListener(h.touchEvents.DRAG_START,
                                            Ma), u.addEventListener(h.touchEvents.DRAG,
                                            Na), u.addEventListener(h.touchEvents.DRAG_END, Na), u.addEventListener(
                                            h.touchEvents.TAP, ob)) : (E = ha, "volume" === E && !u &&
                                            (E += "H"), z.addEventListener("mousedown", pb(E), !1));
                                        "time" === ha && !q && (z.addEventListener("mousemove", kb, !1), z.addEventListener(
                                            "mouseout", Xa, !1));
                                        ha = B[ha + "Rail"] = z;
                                        z = U(L + p);
                                        L = U(L + p);
                                        d.className = "jwslider jw" + v;
                                        m && d.appendChild(m);
                                        d.appendChild(ha);
                                        w && (t && (w.className += " jwcapBottom"), d.appendChild(w));
                                        g(H(".jw" + v + " .jwrail"), {
                                            left: t ? "" : z.width,
                                            right: t ? "" : L.width,
                                            top: t ? z.height : "",
                                            bottom: t ?
                                                L.height : "",
                                            width: t ? "100%" : "",
                                            height: t ? "auto" : ""
                                        });
                                        B[v] = d;
                                        d.vertical = t;
                                        "time" === v ? (ka = new e.overlay(aa + "_timetooltip", V), Ta =
                                                new e.thumbs(aa + "_thumb"), Ua = l.createElement("div"),
                                                Ua.className = "jwoverlaytext", bb = l.createElement("div"),
                                                k = Ta.element(), bb.appendChild(k), bb.appendChild(Ua), ka
                                                .setContents(bb), Ya = ha, qb(0), k = ka.element(), ha.appendChild(
                                                    k), B.timeSliderRail || g.style(B.time, y), B.timeSliderThumb &&
                                                g.style(B.timeSliderThumb, {
                                                    "margin-left": U("timeSliderThumb").width / -2
                                                }), k = U("timeSliderCue"), p = {
                                                    "z-index": 1
                                                },
                                                k && k.src ? (N("timeSliderCue"), p["margin-left"] = k.width /
                                                    -2) : p.display = "none", g(H(".jwtimeSliderCue"), p),
                                                $a(0), Fa(0), Fa(0), $a(0)) : 0 === v.indexOf("volume") &&
                                            (v = d, m = "volume" + (t ? "" : "H"), w = t ? "vertical" :
                                                "horizontal", g(H(".jw" + m + ".jw" + w), {
                                                    width: U(m + "Rail", t).width + (t ? 0 : U(m +
                                                            "Cap" + p).width + U(m + "RailCap" + p)
                                                        .width + U(m + "RailCap" + k).width + U(m +
                                                            "Cap" + k).width),
                                                    height: t ? U(m + "Cap" + p).height + U(m + "Rail")
                                                        .height + U(m + "RailCap" + p).height + U(m +
                                                            "RailCap" + k).height + U(m + "Cap" + k).height :
                                                        ""
                                                }), v.className += " jw" + w);
                                        k = d
                                    }
                                    d = k;
                                    break a
                            }
                            d =
                            void 0
                        }
                        d && ("volume" === b.elements[j].name && d.vertical ? (qa = new e.overlay(aa +
                            "_volumeOverlay", V), qa.setContents(d)) : f.appendChild(d))
                    }
            }
        }

        function xa() {
            return v && h.isIE() && p.jwGetFullscreen()
        }

        function wa() {
            clearTimeout(sb);
            sb = setTimeout(X.redraw, 0)
        }

        function ga() {
            !mb && 1 < p.jwGetPlaylist().length && (!l.querySelector("#" + p.id + " .jwplaylist") || p.jwGetFullscreen()) ?
                (g.style(B.next, u), g.style(B.prev, u)) : (g.style(B.next, y), g.style(B.prev, y))
        }

        function Ka(a, b) {
            ya || (ya = h.bounds(R));
            b.constrainX(ya, !0)
        }

        function $a(a) {
            B.timeSliderBuffer &&
                (a = Math.min(Math.max(0, a), 1), g.style(B.timeSliderBuffer, {
                    width: (100 * a).toFixed(1) + "%",
                    opacity: 0 < a ? 1 : 0
                }))
        }

        function za(a, b) {
            if (B[a]) {
                var c = B[a].vertical,
                    e = a + ("time" === a ? "Slider" : ""),
                    f = 100 * Math.min(Math.max(0, b), 1) + "%",
                    d = B[e + "Progress"],
                    e = B[e + "Thumb"],
                    h;
                d && (h = {}, c ? (h.height = f, h.bottom = 0) : h.width = f, "volume" !== a && (h.opacity = 0 <
                    b || Ca ? 1 : 0), g.style(d, h));
                e && (h = {}, c ? h.top = 0 : h.left = f, g.style(e, h))
            }
        }

        function Ha(a) {
            za("volume", a);
            za("volumeH", a)
        }

        function Fa(a) {
            za("time", a)
        }

        function U(b) {
            var c = "controlbar",
                e = b;
            0 === b.indexOf("volume") && (0 === b.indexOf("volumeH") ? e = b.replace("volumeH", "volume") : c =
                "tooltip");
            return (b = V.getSkinElement(c, e)) ? b : {
                width: 0,
                height: 0,
                src: "",
                image: a,
                ready: !1
            }
        }

        function ua(a) {
            a = (new f.parsers.srt).parse(a.responseText, !0);
            if (!j.isArray(a)) return O("Invalid data");
            X.addCues(a)
        }

        function O(a) {
            h.log("Cues failed to load: " + a)
        }
        k = k || {};
        var V, ba = w("divider", "divider"),
            ca = {
                margin: 8,
                maxwidth: 800,
                font: "Arial,sans-serif",
                fontsize: 11,
                fontcolor: 15658734,
                fontweight: "bold",
                layout: {
                    left: {
                        position: "left",
                        elements: [w("play", C), w("prev", C), w("next", C), w("elapsed", r)]
                    },
                    center: {
                        position: "center",
                        elements: [w("time", n), w("alt", r)]
                    },
                    right: {
                        position: "right",
                        elements: [w("duration", r), w("hd", C), w("cc", C), w("mute", C), w("volume", n), w(
                            "volumeH", n), w("cast", C), w("fullscreen", C)]
                    }
                }
            },
            $, Sa, B, Ia, R, aa, sa, ia = [],
            Pa, fa, Ba, Oa, Qa = {},
            qa, ya, Ya, ja, ka, bb, Ta, Ua, ha, na, oa, jb, Ja, pa, sb, cb = -1,
            ta = !1,
            ma = !1,
            mb = !1,
            nb = !1,
            Ca = null,
            lb = 0,
            gb = [],
            db, xb = {
                play: "pause",
                mute: "unmute",
                cast: "casting",
                fullscreen: "normalscreen"
            },
            eb = {
                play: !1,
                mute: !1,
                cast: !1,
                fullscreen: k.fullscreen || !1
            },
            rb = {
                play: function () {
                    eb.play ? p.jwPause() : p.jwPlay()
                },
                mute: function () {
                    var a = !eb.mute;
                    p.jwSetMute(a);
                    !a && 0 === Oa && p.jwSetVolume(20);
                    F()
                },
                fullscreen: function () {
                    p.jwSetFullscreen()
                },
                next: function () {
                    p.jwPlaylistNext()
                },
                prev: function () {
                    p.jwPlaylistPrev()
                },
                hd: I,
                cc: ra,
                cast: function () {
                    Qa.active ? p.jwOpenExtension() : p.jwStartCasting()
                }
            },
            fb = {
                time: function (a) {
                    db ? (a = db.position, a = "%" === a.toString().slice(-1) ? sa * parseFloat(a.slice(0,
                        -1)) / 100 : parseFloat(a)) : a *= sa;
                    p.jwSeek(a)
                },
                volume: function (a) {
                    Ha(a);
                    0.1 > a && (a = 0);
                    0.9 < a && (a = 1);
                    p.jwSetVolume(100 * a)
                }
            },
            ib = {},
            Wa = [],
            X = h.extend(this, new b.eventdispatcher),
            qb, tb, yb = function (a) {
                g.style(ka.element(), {
                    width: a
                });
                Ka("time", ka)
            };
        qb = function (a) {
            var b = Ta.updateTimeline(a, yb);
            if (db) {
                if ((a = db.text) && a !== tb) tb = a, g.style(ka.element(), {
                    width: 32 < a.length ? 160 : ""
                })
            } else a = h.timeFormat(a), b || g.style(ka.element(), {
                width: ""
            });
            Ua.innerHTML !== a && (Ua.innerHTML = a);
            Ka("time", ka)
        };
        X.setText = function (a) {
            g.block(aa);
            var b = B.alt,
                c = B.time;
            B.timeSliderRail ? g.style(c, a ? y : E) : g.style(c,
                y);
            b && (g.style(b, a ? E : y), b.innerHTML = a || "");
            wa()
        };
        var Ea = {};
        X.redraw = function (a) {
            g.block(aa);
            a && X.visible && X.show(!0);
            J();
            var b = v && h.isMSIE();
            a = Qa.active;
            g.style(B.fullscreen, {
                display: ta || a || nb || b ? "none" : ""
            });
            g.style(B.volumeH, {
                display: ta || ma ? "block" : "none"
            });
            (b = Math.floor($.maxwidth)) && R.parentNode && h.isIE() && (!ta && R.parentNode.clientWidth >
                b + 2 * Math.floor($.margin) ? g.style(R, {
                    width: b
                }) : g.style(R, {
                    width: ""
                }));
            qa && g.style(qa.element(), {
                display: !ta && !ma ? "block" : "none"
            });
            g.style(B.hd, {
                display: !ta && !a &&
                    !ma && 1 < ia.length && oa ? "" : "none"
            });
            g.style(B.cc, {
                display: !ta && !ma && fa && 1 < fa.length && pa ? "" : "none"
            });
            Za();
            g.unblock(aa);
            X.visible && (a = U("capLeft"), b = U("capRight"), a = xa() ? {
                left: Math.round(h.parseDimension(62 * Ea.left.offsetWidth) + a.width),
                right: Math.round(h.parseDimension(86 * Ea.right.offsetWidth) + b.width)
            } : {
                left: Math.round(h.parseDimension(Ea.left.offsetWidth) + a.width),
                right: Math.round(h.parseDimension(Ea.right.offsetWidth) + b.width)
            }, g.style(Ea.center, a))
        };
        X.audioMode = function (b) {
            b !== a && b !== ta && (ta = !!b,
                wa());
            return ta
        };
        X.instreamMode = function (b) {
            b !== a && b !== ma && (ma = !!b, g.style(B.cast, ma ? y : u));
            return ma
        };
        X.adMode = function (a) {
            if (j.isBoolean(a) && a !== mb) {
                if (mb = a) {
                    var b = Wa,
                        c = j.indexOf(b, B.elapsed); - 1 < c && b.splice(c, 1);
                    b = Wa;
                    c = j.indexOf(b, B.duration); - 1 < c && b.splice(c, 1)
                } else b = Wa, c = B.elapsed, -1 === j.indexOf(b, c) && b.push(c), b = Wa, c = B.duration,
                    -1 === j.indexOf(b, c) && b.push(c);
                g.style([B.cast, B.elapsed, B.duration], a ? y : u);
                ga()
            }
            return mb
        };
        X.hideFullscreen = function (b) {
            b !== a && b !== nb && (nb = !!b, wa());
            return nb
        };
        X.element =
            function () {
                return R
            };
        X.margin = function () {
            return parseInt($.margin, 10)
        };
        X.height = function () {
            return Ia
        };
        X.show = function (a) {
            if (!X.visible || a) X.visible = !0, g.style(R, {
                    display: "inline-block"
                }), ya = h.bounds(R), D(), g.block(aa), F(), wa(), clearTimeout(cb), cb = -1, cb =
                setTimeout(function () {
                    g.style(R, {
                        opacity: 1
                    })
                }, 0)
        };
        X.showTemp = function () {
            this.visible || (R.style.opacity = 0, R.style.display = "inline-block")
        };
        X.hideTemp = function () {
            this.visible || (R.style.display = "none")
        };
        X.addCues = function (a) {
            h.foreach(a, function (a, b) {
                if (b.text) {
                    var c =
                        b.begin,
                        e = b.text;
                    if (/^[\d\.]+%?$/.test(c.toString())) {
                        var f = N("timeSliderCue"),
                            d = B.timeSliderRail,
                            g = {
                                position: c,
                                text: e,
                                element: f
                            };
                        f && d && (d.appendChild(f), f.addEventListener("mouseover", function () {
                            db = g
                        }, !1), f.addEventListener("mouseout", function () {
                            db = null
                        }, !1), gb.push(g))
                    }
                    Za()
                }
            })
        };
        X.hide = function () {
            if (X.visible && (!ma || !q || !p.jwGetControls())) X.visible = !1, g.style(R, {
                opacity: 0
            }), clearTimeout(cb), cb = -1, cb = setTimeout(function () {
                g.style(R, {
                    display: "none"
                })
            }, 250)
        };
        B = {};
        aa = p.id + "_controlbar";
        sa = 0;
        R = K();
        R.id =
            aa;
        R.className = "jwcontrolbar";
        V = p.skin;
        Sa = V.getComponentLayout("controlbar");
        Sa || (Sa = ca.layout);
        h.clearCss(H());
        g.block(aa + "build");
        J();
        var ub = N("capLeft"),
            vb = N("capRight"),
            wb = N("background", {
                position: "absolute",
                left: U("capLeft").width,
                right: U("capRight").width,
                "background-repeat": "repeat-x"
            }, !0);
        wb && R.appendChild(wb);
        ub && R.appendChild(ub);
        Ra("left");
        Ra("center");
        Ra("right");
        R.appendChild(Ea.left);
        R.appendChild(Ea.center);
        R.appendChild(Ea.right);
        B.hd && (oa = new e.menu("hd", aa + "_hd", V, ea), q ? hb(oa, B.hd,
            Y, "hd") : la(oa, B.hd, Y, Ga), ib.hd = oa);
        B.cc && (pa = new e.menu("cc", aa + "_cc", V, va), q ? hb(pa, B.cc, da, "cc") : la(pa, B.cc, da, Q), ib
            .cc = pa);
        B.mute && (B.volume && B.volume.vertical) && (qa = new e.overlay(aa + "_volumeoverlay", V), qa.setContents(
            B.volume), la(qa, B.mute, W), ib.volume = qa);
        g.style(Ea.right, {
            right: U("capRight").width
        });
        vb && R.appendChild(vb);
        g.unblock(aa + "build");
        p.jwAddEventListener(b.JWPLAYER_MEDIA_TIME, A);
        p.jwAddEventListener(b.JWPLAYER_PLAYER_STATE, function (a) {
            switch (a.newstate) {
                case m.BUFFERING:
                case m.PLAYING:
                    B.timeSliderThumb &&
                        g.style(B.timeSliderThumb, {
                            opacity: 1
                        });
                    Z("play", !0);
                    break;
                case m.PAUSED:
                    Ca || Z("play", !1);
                    break;
                case m.IDLE:
                    Z("play", !1), B.timeSliderThumb && g.style(B.timeSliderThumb, {
                        opacity: 0
                    }), B.timeRail && (B.timeRail.className = "jwrail"), $a(0), A({
                        position: 0,
                        duration: 0
                    })
            }
        });
        p.jwAddEventListener(b.JWPLAYER_PLAYLIST_ITEM, function (a) {
            if (!ma) {
                a = p.jwGetPlaylist()[a.index].tracks;
                var b = !1,
                    c = B.timeSliderRail;
                h.foreach(gb, function (a, b) {
                    c.removeChild(b.element)
                });
                gb.length = 0;
                if (j.isArray(a) && !q)
                    for (var e = 0; e < a.length; e++)
                        if (!b &&
                            (a[e].file && a[e].kind && "thumbnails" === a[e].kind.toLowerCase()) && (Ta
                                .load(a[e].file), b = !0), a[e].file && a[e].kind && "chapters" === a[e]
                            .kind.toLowerCase()) {
                            var f = a[e].file;
                            f ? h.ajax(f, ua, O, !0) : gb.length = 0
                        } b || Ta.load()
            }
        });
        p.jwAddEventListener(b.JWPLAYER_MEDIA_MUTE, F);
        p.jwAddEventListener(b.JWPLAYER_MEDIA_VOLUME, F);
        p.jwAddEventListener(b.JWPLAYER_MEDIA_BUFFER, function (a) {
            $a(a.bufferPercent / 100)
        });
        p.jwAddEventListener(b.JWPLAYER_FULLSCREEN, function (a) {
            Z("fullscreen", a.fullscreen);
            ga();
            X.visible && X.show(!0)
        });
        p.jwAddEventListener(b.JWPLAYER_PLAYLIST_LOADED, L);
        p.jwAddEventListener(b.JWPLAYER_MEDIA_LEVELS, function (a) {
            ia = a.levels || [];
            if (!ma && 1 < ia.length && oa) {
                g.style(B.hd, u);
                oa.clearOptions();
                for (var b = 0; b < ia.length; b++) oa.addOption(ia[b].label, b);
                G(a)
            } else g.style(B.hd, y);
            wa()
        });
        p.jwAddEventListener(b.JWPLAYER_MEDIA_LEVEL_CHANGED, G);
        p.jwAddEventListener(b.JWPLAYER_CAPTIONS_LIST, function (a) {
            fa = a.tracks;
            if (!ma && fa && 1 < fa.length && pa) {
                g.style(B.cc, u);
                pa.clearOptions();
                for (var b = 0; b < fa.length; b++) pa.addOption(fa[b].label,
                    b);
                t(a)
            } else g.style(B.cc, y);
            wa()
        });
        p.jwAddEventListener(b.JWPLAYER_CAPTIONS_CHANGED, t);
        p.jwAddEventListener(b.JWPLAYER_RESIZE, function () {
            ya = h.bounds(R);
            0 < ya.width && X.show(!0)
        });
        p.jwAddEventListener(b.JWPLAYER_CAST_AVAILABLE, x);
        p.jwAddEventListener(b.JWPLAYER_CAST_SESSION, M);
        q || (R.addEventListener("mouseover", function () {
            d.addEventListener("mousedown", Va, !1)
        }, !1), R.addEventListener("mouseout", function () {
            d.removeEventListener("mousedown", Va);
            l.onselectstart = null
        }, !1));
        setTimeout(F, 0);
        L();
        X.visible = !1;
        x()
    };
    g("span.jwcontrolbar", {
        position: "absolute",
        margin: "auto",
        opacity: 0,
        display: "none"
    });
    g("span.jwcontrolbar span", {
        height: "100%"
    });
    h.dragStyle("span.jwcontrolbar span", "none");
    g("span.jwcontrolbar .jwgroup", {
        display: "inline"
    });
    g("span.jwcontrolbar span, span.jwcontrolbar .jwgroup button,span.jwcontrolbar .jwleft", {
        position: "relative",
        "float": "left"
    });
    g("span.jwcontrolbar .jwright", {
        position: "relative",
        "float": "right"
    });
    g("span.jwcontrolbar .jwcenter", {
        position: "absolute"
    });
    g("span.jwcontrolbar button", {
        display: "inline-block",
        height: "100%",
        border: "none",
        cursor: "pointer"
    });
    g("span.jwcontrolbar .jwcapRight,span.jwcontrolbar .jwtimeSliderCapRight,span.jwcontrolbar .jwvolumeCapRight", {
        right: 0,
        position: "absolute"
    });
    g("span.jwcontrolbar .jwcapBottom", {
        bottom: 0,
        position: "absolute"
    });
    g("span.jwcontrolbar .jwtime", {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0
    });
    g("span.jwcontrolbar .jwthumb", {
        position: "absolute",
        height: "100%",
        cursor: "pointer"
    });
    g("span.jwcontrolbar .jwrail", {
        position: "absolute",
        cursor: "pointer"
    });
    g("span.jwcontrolbar .jwrailgroup", {
        position: "absolute",
        width: "100%"
    });
    g("span.jwcontrolbar .jwrailgroup span", {
        position: "absolute"
    });
    g("span.jwcontrolbar .jwdivider+.jwdivider", {
        display: "none"
    });
    g("span.jwcontrolbar .jwtext", {
        padding: "0 5px",
        "text-align": "center"
    });
    g("span.jwcontrolbar .jwcast", {
        display: "none"
    });
    g("span.jwcontrolbar .jwcast.jwcancast", {
        display: "block"
    });
    g("span.jwcontrolbar .jwalt", {
        display: "none",
        overflow: "hidden"
    });
    g("span.jwcontrolbar .jwalt", {
        position: "absolute",
        left: 0,
        right: 0,
        "text-align": "left"
    }, !0);
    g("span.jwcontrolbar .jwoverlaytext", {
        padding: 3,
        "text-align": "center"
    });
    g("span.jwcontrolbar .jwvertical *", {
        display: "block"
    });
    g("span.jwcontrolbar .jwvertical .jwvolumeProgress", {
        height: "auto"
    }, !0);
    g("span.jwcontrolbar .jwprogressOverflow", {
        position: "absolute",
        overflow: "hidden"
    });
    k("span.jwcontrolbar", "opacity .25s, background .25s, visibility .25s");
    k("span.jwcontrolbar button", "opacity .25s, background .25s, visibility .25s");
    k("span.jwcontrolbar .jwtoggling",
        "none")
})(window, document);
(function (d) {
    var l = d.utils,
        a = d.events,
        c = a.state,
        f = d.playlist;
    d.html5.controller = function (e, h) {
        function j() {
            return e.getVideo()
        }

        function b(a) {
            F.sendEvent(a.type, a)
        }

        function m(c) {
            k(!0);
            switch (l.typeOf(c)) {
                case "string":
                    var g = new f.loader;
                    g.addEventListener(a.JWPLAYER_PLAYLIST_LOADED, function (a) {
                        m(a.playlist)
                    });
                    g.addEventListener(a.JWPLAYER_ERROR, function (a) {
                        m([]);
                        a.message = "Could not load playlist: " + a.message;
                        b(a)
                    });
                    g.load(c);
                    break;
                case "object":
                case "array":
                    e.setPlaylist(new d.playlist(c));
                    break;
                case "number":
                    e.setItem(c)
            }
        }

        function g(b) {
            if (l.exists(b) && !b) return q();
            try {
                0 <= E && (m(E), E = -1);
                if (!u && (u = !0, F.sendEvent(a.JWPLAYER_MEDIA_BEFOREPLAY), u = !1, w)) {
                    w = !1;
                    p = null;
                    return
                }
                if (e.state === c.IDLE) {
                    if (0 === e.playlist.length) return !1;
                    j().load(e.playlist[e.item])
                } else e.state === c.PAUSED && j().play();
                return !0
            } catch (f) {
                F.sendEvent(a.JWPLAYER_ERROR, f), p = null
            }
            return !1
        }

        function k(b) {
            p = null;
            try {
                return j().stop(), b || (z = !0), u && (w = !0), !0
            } catch (c) {
                F.sendEvent(a.JWPLAYER_ERROR, c)
            }
            return !1
        }

        function q(b) {
            p = null;
            if (l.exists(b) &&
                !b) return g();
            switch (e.state) {
                case c.PLAYING:
                case c.BUFFERING:
                    try {
                        j().pause()
                    } catch (f) {
                        return F.sendEvent(a.JWPLAYER_ERROR, f), !1
                    }
                    break;
                default:
                    u && (w = !0)
            }
            return !0
        }

        function s(a) {
            l.css.block(e.id + "_next");
            m(a);
            g();
            l.css.unblock(e.id + "_next")
        }

        function v() {
            s(e.item + 1)
        }

        function C() {
            e.state === c.IDLE && (z ? z = !1 : (p = C, e.repeat ? v() : e.item === e.playlist.length - 1 ? (E =
                0, k(!0), setTimeout(function () {
                    F.sendEvent(a.JWPLAYER_PLAYLIST_COMPLETE)
                }, 0)) : v()))
        }

        function r(a) {
            return function () {
                var b = Array.prototype.slice.call(arguments,
                    0);
                y ? n(a, b) : A.push({
                    method: a,
                    arguments: b
                })
            }
        }

        function n(a, b) {
            a.apply(this, b)
        }
        var y = !1,
            E = -1,
            u = !1,
            p, z = !1,
            w, A = [],
            F = l.extend(this, new a.eventdispatcher(e.id, e.config.debug));
        this.play = r(g);
        this.pause = r(q);
        this.seek = r(function (a) {
            e.state !== c.PLAYING && g(!0);
            j().seek(a)
        });
        this.stop = function () {
            e.state === c.IDLE && (z = !0);
            r(k)()
        };
        this.load = r(m);
        this.next = r(v);
        this.prev = r(function () {
            s(e.item - 1)
        });
        this.item = r(s);
        this.setVolume = r(e.setVolume);
        this.setMute = r(e.setMute);
        this.setFullscreen = r(function (a) {
            h.fullscreen(a)
        });
        this.detachMedia = function () {
            try {
                return e.getVideo().detachMedia()
            } catch (a) {
                l.log("Error calling detachMedia", a)
            }
            return null
        };
        this.attachMedia = function (a) {
            try {
                e.getVideo().attachMedia(a)
            } catch (b) {
                l.log("Error calling detachMedia", b);
                return
            }
            "function" === typeof p && p()
        };
        this.setCurrentQuality = r(function (a) {
            j().setCurrentQuality(a)
        });
        this.getCurrentQuality = function () {
            return j() ? j().getCurrentQuality() : -1
        };
        this.getQualityLevels = function () {
            return j() ? j().getQualityLevels() : null
        };
        this.setCurrentAudioTrack =
            function (a) {
                j().setCurrentAudioTrack(a)
            };
        this.getCurrentAudioTrack = function () {
            return j() ? j().getCurrentAudioTrack() : -1
        };
        this.getAudioTracks = function () {
            return j() ? j().getAudioTracks() : null
        };
        this.setCurrentCaptions = r(function (a) {
            h.setCurrentCaptions(a)
        });
        this.getCurrentCaptions = function () {
            return h.getCurrentCaptions()
        };
        this.getCaptionsList = function () {
            return h.getCaptionsList()
        };
        this.checkBeforePlay = function () {
            return u
        };
        this.playerReady = function (a) {
            if (!y) {
                h.completeSetup();
                F.sendEvent(a.type, a);
                d.utils.exists(d.playerReady) &&
                    d.playerReady(a);
                e.addGlobalListener(b);
                h.addGlobalListener(b);
                F.sendEvent(d.events.JWPLAYER_PLAYLIST_LOADED, {
                    playlist: d(e.id).getPlaylist()
                });
                F.sendEvent(d.events.JWPLAYER_PLAYLIST_ITEM, {
                    index: e.item
                });
                m();
                e.autostart && !l.isMobile() && g();
                for (y = !0; 0 < A.length;) a = A.shift(), n(a.method, a.arguments)
            }
        };
        e.addEventListener(a.JWPLAYER_MEDIA_BUFFER_FULL, function () {
            j().play()
        });
        e.addEventListener(a.JWPLAYER_MEDIA_COMPLETE, function () {
            setTimeout(C, 25)
        });
        e.addEventListener(a.JWPLAYER_MEDIA_ERROR, function (b) {
            b =
                l.extend({}, b);
            b.type = a.JWPLAYER_ERROR;
            F.sendEvent(b.type, b)
        })
    }
})(jwplayer);
(function (d) {
    var l;
    d.html5.defaultskin = function () {
        return l = l || d.utils.parseXML(
            '\x3c?xml version\x3d"1.0" ?\x3e\x3cskin author\x3d"JW Player" name\x3d"Six" target\x3d"6.7" version\x3d"3.0"\x3e\x3ccomponents\x3e\x3ccomponent name\x3d"controlbar"\x3e\x3csettings\x3e\x3csetting name\x3d"margin" value\x3d"10"/\x3e\x3csetting name\x3d"maxwidth" value\x3d"800"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xd2d2d2"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAANklEQVR4AWMUFRW/x2RiYqLI9O3bNwam////MzAxAAGcAImBWf9RuRAxnFyEUQgDCLKATLCDAFb+JfgLDLOxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAeCAYAAAARgF8NAAAAr0lEQVR4AWNhAAJRUXEFIFUOxNZAzMOABFiAkkpAeh0fH5+IgoKCKBsQoCgA4lJeXl5ReXl5qb9//zJ8+/aNAV2Btbi4uOifP39gYhgKeFiBAEjjUAAFlCn4/5+gCf9pbwVhNwxhKxAm/KdDZA16E778/v37DwsLKwsuBUdfvXopISUlLYpLQc+vX78snz17yigqKibAAgQoCuTlFe4+fPggCKio9OnTJzZAMW5kBQAEFD9DdqDrQQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAeCAYAAAARgF8NAAAArklEQVR4Ad2TMQrCQBBF/y5rYykEa++QxibRK3gr0dt4BPUSLiTbKMYUSlgt3IFxyogJsRHFB6/7/A+7jIqiYYZnvLgV56IzcRyPUOMuOOcGVVWNAcxUmk4ZNZRS0Fojz/O9936lkmTCaICIgrV2Z9CCMaYHoK/RQWfAMHcEAP7QxPsNAP/BBDN/+7N+uoEoEIBba0NRHM8A1i8vSUJZni4hhAOAZdPxXsWNuBCzB0E+V9jBVxF8AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAtElEQVR4AWOgLRgFnAyiDPwMzMRrkHuwuCSdQZ14Tbpv9v/cf2UN8ZoMHu5/uP/l/h9EazK4sx8Cn+7/RpQmg+v74RBo11eCmgwu7keFd/d/wavJ4PR+THhj/6f9N1ZODWTgxKLhyH7scMvK3iCsGvbtx4Tz1oZn4HTSjv2ocObakAy8nt60HwGnrA3KIBisa/dD4IS1/lDFBJLGiv0r9ves9YUpJpz4Ji72hiomNXnTH4wCAAxXpSnKMgKaAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAtElEQVR4AWOgLRgFPAwyDCIMLMRr0Hhws6SLwYR4TTZv/v/8f+UZ8ZocHv5/+P/l/x9Ea3K48x8Cn/7/RpQmh+v/4RBo11eCmhwu/keFd/9/wavJ4fR/THjj/6f/Nx5OzWHgwaLhyH/scMuj3lysGvb9x4Tznod343TSjv+ocObzkG68nt70HwGnPA/qJhisa/9D4ITn/lDFBJLGiv8r/vc894UpJpz4Jt7yhiomNXnTH4wCAHC8wQF60KqlAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"pauseButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAYElEQVR4AWOgNRgFPAwqDAZAqAJkofPhgBFJg8r/2VDBVIY7GHwoYEG24RmchcnHpoHhDxDj4WNq+I0m+ZvqGn6hSf6iuoafaJI/SbaB7hroHw9f/sBZ6HzSkzdtwSgAADNtJoABsotOAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"pauseButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAWklEQVR4AWOgNRgFAgwGDA5AaABkofOxAoP/UMBggMGHAxZkG57BWeh87BoY/gAxHj6mht9okr+pruEXmuQvqmv4iSb5k2Qb6K6B/vHw4Q+chc4nPXnTFowCADYgMi8+iyldAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"prevButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAQAAACLBYanAAAAmElEQVR4AWMYMDAKeBgkgBgGmBn4GUQZONEVqfzfz6ACV6Bekv5gMYMcuiKDR/sZDGAKrqz5sf/lfgZdDEW39jPYQxR82/94/y0gZDDAUHR+f3rpjZWf99/efx4CsSk6sj+pbMvKI/vhEJuiXWDrQjNmr921HwyxKVoPd3hAxsS16/evx+JwleUoQeCbMRkRBIQDk/5gFAAAvD5I9xunLg8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"prevButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAQAAACLBYanAAAAmUlEQVR4AWMYMDAKBBgUgBgGWBhEGGQYeNAVGfz/z2AAV2BS0vXgJoMGuiKHR/8ZHGAKrjz78f/lfwYbDEW3/jOEQBR8+//4/y0gZHDAUHT+f/qcGw8//7/9/zwEYlN05H/S3C2PjvyHQ2yKdoGtC+2e/XzXfzDEpmg93OEB3ROfr/+/HovDDZajBIFv9+RbDBpEByb9wSgAAHeuVc8xgA8jAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"nextButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAQAAABgMj2kAAAAlUlEQVR4AWOgAxgFnAyiDPwMzHA+D4MEEKMAuQeLS9IZ1OHKVP7vZ1BBVaL7cv+P/VfWwJUZPNrPYICqxODW/lv7H+//BlNmfwtTyfn9EHh7/+f9N1aml57HVHJkPwJuWZlUdgRTya79EDh7bWgGyKJdGEp01+9fv3/i2oAMmHPXYyiRm7zYNwPZ08vBniYcdDQHowAA/MZI93f1cSkAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"nextButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAQAAABgMj2kAAAAlUlEQVR4AWOgAxgFPAwyDCIMLHC+AIMCEKMAjQc3S7oYTODKDP7/ZzBAVWLz8v+P/1eewZU5PPrP4ICqxOHW/1v/H///BlMWcgtTyfn/EHj7/+f/Nx6mzzmPqeTIfwTc8ihp7hFMJbv+Q+Ds56HdIIt2YSixWf9//f+JzwO6Yc5dj6FEY/It325kTy8He5pw0NEcjAIAWP9Vz4mR7dgAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"elapsedBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAeCAYAAAAPSW++AAAAD0lEQVQoU2NgGAWjYKQAAALuAAGL6/H9AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"durationBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAeCAYAAAAPSW++AAAAD0lEQVQoU2NgGAWjYKQAAALuAAGL6/H9AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAALklEQVQI12NgIBmIior/ZxIVFWNgAgI4wcjAxMgI4zIyMkJYYMUM////5yXJCgBxnwX/1bpOMAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAnUlEQVR42t3NSwrCMBSF4TsQBHHaaklJKRTalKZJ+lAXoTPBDTlyUYprKo6PN4F2D3rgm/yQG/rfRdHuwp5smsNdCImiKKFUAx/OaSpR1xpNYwKK4/2rLBXa1s1CnIxxsLZbhGhtD+eGBSWJePt7fX9YUFXVVylzdN2IYTgGBGCVZfmDQWuDcTyB/ACsOdz8Kf7jQ/P8C7ZhW/rlfQGDz0pa/ncctQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAn0lEQVR42t3MTwqCQBTH8bcIgmirJYoiCOowzh8ds0PULjpRqw5VdCZr/WueMJfwC5/NezOP1lcUHWbv5V0o1LYSVVUjTXP4xYM4KTWYEB2ybFlcSSmLoK4F4vj4JmN6BFpbHs5krUNgzMDDLw3DCQHfTZL0Q85NYH0/Is9LNI240Tie0XUaRVGyJ4AN+Rs//qKUuQPYEgdg7+2WF2voDzqVSl5A2koAAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBuffer" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAAKElEQVQI12NgIA/IyMj9Z2JhYWFgAgIGJkZGRhDBwMDEwMAI5TKQDwCHIAF/C8ws/gAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderBufferCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAY0lEQVR42uXJyxGAIAxFUfrgI5CgzajdqlWxQffxaeiCzJyZ5MYMNtb6zTl/OhfuP2BZQ4h1mpLEmOWPCMd3pESSM2vE0YiKdBqJuDEXUT0yzydIp7GUZYMKAhr7Y4cLHjPGvMB5JcRMsOVwAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBufferCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAYElEQVQoz+WLyxGAIAwF6YM/CdqMlCtdcRHvMSIw9sCb2ctuIsQaU8pUpfQppT6mdC6QtZ6McYUPUpMhIHkP9EYOuUmASAOOV5OIkQYAWLvc6Mf3HuNOncKkIW8mT7HOHpUUJcPzmTX0AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAQAAABHnLxMAAAAH0lEQVQI12NgIAT+/2e6x8D0k4HpOxj9AJM/CWpjAACWQgi68LWdTgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAQAAABOdxw2AAAARUlEQVQYV2NkgANG+jP/+zJkMtgCmf99vi38KPQTJPpq6xsvqIKznxh4ocwjCOaebQyeUOZmX4YFDEJQw9b4QQ2DAfoyAVkTEmC7RwxJAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAQAAABOdxw2AAAASklEQVQYV8XLIRKAMAxE0R4QbhrXoQqJxWJxCGZqaKs/m1yi+80TSUqzRmNjCd48jMoqXnhvEU+iTzyImrgT+UFG1exv1q2YY95+oTIxx/xENX8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAQAAACP8FaaAAABMElEQVR4AeWSv0rzYBjFfy1NlU5RKC3dCjqZDwRXEapOuuik+BfbNLdUeg86pHSrm1Z3G3w7VAdbB+sNFFKIZ1FCjTjL95wQOOd3IC/vE/6vSZEmQ5Z5KUtGLhWjshYLbHCIKx2wLmcp/cJzOFTb/vtoGk7D8bDtc4GjNP2J/+ENzFv0FBnpORpHA4OnVBWwKFANTD96jKkfBYYqRVFyVC5bCr/pqsWmKDZHd8Okwv2IY1HyuL0wqRCE1EUp/lR4mFAT1XNym/iJ7pBTCpBnp5l4yGaLXVFsVqh1zCzuGGoiNuQoUcG7NjPYU1oSxVKrzDZuw+++BtPe5Oal4eOypdQWRVfNoswa+5xTl87YkysrjW3DpsQyDquSw5KcjXB83TlFeYoU9LbltO7ff5i/Mh+pOuncDFLYKwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderCue" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAcUlEQVQ4y2NgGAWjYBTgBaKi4llAfASKs0jWbGNj96S1tf03CIPYJBkCsrW6uu53bm7+fxAGsUFiJBmQlpbxOzMz5z8Ig9hAsaMkecHIyORJUlLq78TElN8gNlAsm9RwyAbZCsSHgDhzNFmNglGAHwAAo/gvURVBmFAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"hdButtonOff" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAABf0lEQVR42u2VvUoDQRSFA0awMIVCsv+z/1oE8yOE9MYmtb2P4AspSOyECFZqtU9gbZvK6CNoNZ6zMMuSQpxdEAJbHC737pz59mbmblpSyn9XA22gDXRLod2uMYfWkKwh+uc60LVtO9J1RWXBn4N1oNL3QxkEEcwuzYybOWMh07QJ4xqK/ryuBQ3DWEZRoowdx3FfhAgkI3NVp7IsO5xMpnPDsFae59NHvzaURgWlWpblPEOSkbmqQzfQK2DT8fj0HB0rrz40jlOqgA4Go1m/f3LJWIYC8uQ4nkSX94vF3S5qX8qrDU2SlCqgOMMrAK4Zy1B27nlCIj4i34G+lbcC9ChXuSNeFEbmpZe5RZdv+BU4ZjM8V159aJoe5yp3JIS/eaZcv7dcPhzghc6Qr3DZlLc6FOelRoTn9OvI4DKxw2rQXs/84KzRyLPhTSSQGzIyV2OBdYzIYz4rgKxjn88/Q4fD0QUNNT6BBL5zH50Pfhvahzo1RH+7+WtroA10O6E/bVCWtAEB8p4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"hdButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAQAAAB6Dt0qAAABPUlEQVR4Ae2SsUrDUBiF/0EFfYK8Rl4g5BUUHGILRWghUHAQHJzaUcjSgB1EtCApliDoUApSKggZRFSUQsVAawspElz1OunxhwtZcm0Ht9LzQfLByVluLs145lkkjXQyyPwTg3uNv0tFKzuR+MAkIlF2eJyKPhBjRBMZYyBIp1SMEV6nMgIZlIoZQkJuIw7RiMll36XN5e31k0AkramYdiGhQjPsohlSgT13GTy8WXurR0mrmt5BQla+ZJ/mS2SxF8+GT7joLRRvvmWrnAaQULbi1R4rHmXZi/VhAO9laev6R7bKaQcSsv3+Lfw+2ey548B/t/Yz3pVs1dMWJORW4xaqfEzsfEwrO2te5ytpFVPjHJJntPnZ5jc708M9muwS1c/Ra8LHNGrKK6FlnENRxyQOPjcc0v5z/Wc68/wCXWlzVKUYIC4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"ccButtonOff" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAABzUlEQVR42u1Uu0oDQRQVTCMopMjmtZvdJPswKCQbC6tYCEqMBDUGrf2NCDF+gmXEyiZWiTb+gMTGxtrGwmh8IOKjUoLjueNGfCBk10rYC4eZOey5Z+7M3O1zww033Og5BCGQA9oAcw6uz9kxbYfDIpMk2TGg58Z2TJmixFg0GueIRBQWDIZ5BX5/kIli5AcfCIS6PIH0nLdlGoupLB7XmCxHyegymTSXa7UdoVBYHBVFqQEDMjozzfRCvd7w5fNzKfD74ElHevumEHKEQiJD4nmYz4JvwWirWt30YiO36fTYNKotgj8Hv1GprPvAP1obtm+qqjqBhC/l8toAkh18uqs7rK8ZY/0Yj8AT90o80LG09k01TQe48Bnw4O6asqzw5DjGXVR2Qt9iPLb4Dh07NnGvqhq0jkwNQvehTCYSI0tIeIWqtq1jfAA/bhiJFcxvcPzVUmlVwPwJVZLWvqmuD3MgGYlbGHPN5qE3m52JYU0PifhTGEwRn8lMaFjvYVNdrXNT7BjGX1tGkvgL/dYyxMv0vTNTahH02ocY1cBEpTbgeL8z41eeNKSn6+jZNJUyiyT4y28Q+gvK07MpWsEDDAJDzsH1nj433HDjX8YbqHFYmhICTLsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"ccButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAQAAAB6Dt0qAAABWElEQVR4AWMY5mAUsDJIMBgy2DE44IR2QHkJoDoMINHQ/eTbl//44JNvDd1AzRjA8N63p/+f4IVP/9/7BrQZA9g9/H+fIHz4H+hsDOBw6z8EnvqZsJ6vznDCkke3/h/9Hr2ap9Z08oqnMFkGByxaL/+HwMiVafNufFl+hWvmiR+BC/IX3/yy4Bz/nJN/wbLYtZ75D4In/3GV7n56/v+1/zd/H/rGkHPgJYh94/fp/2B57FqP/AfBg/84SlY/O/L/8P+JLze/Z8je8PrI/0P/Jrza+Rcsj13r3v8guO9/+LKEhZu+9lzmn7zrl++c9BWbv7WfE5iy/S9YHrvWbf8hcP+P0FVsVSo9y57s+L/vm/9ytiqtvhVANlgWq1a79f8hcDPQR9eBAbIHyN7y/yyQfQnEhkCskWM4/9uq/4TgfKxJQiK6e/a3pf/xwZlfo4AJkZLkP6zBKAAAGMt/2TouFxQAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"muteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAABZ0lEQVR4AWMYjGAUMDEwMzCSpoUxju+kDQMXAW1AaRYGdiCGsFjchd/OWmELFMGrhd1a4UUTAy+QzXLSdKMhA1+Z/tuF0qIMTLjdz9tp+27ly/0M4kBbWGdqv1/gJcMgdLz6YAA2u9gYhBgkGGR2pH3ZfWf/1f0Mshdsk8UZBDYlXMthEJhqfbuVgQ9Tk9D//SD4dv/F/eeBkEHuaNjjegYBT/k78xiEOcWuLWIQxtQkcWI/MmSQYhC/shioUPjUAhB5cgFWTQf3I0MGaQ6JwyBNIofBmsAkpvN27UeGDPI349dXMghEKu2byyAsKLZ/IYMQzoBoTNm4e8v+LcCA2GBoKsQgcDFjcRqDwBr7dU0MfLiDnCfaavHKdaAgZ2ZgXWd4cZ6eJIPQ5YYZXgzseCNXQ35GPSRyt+lVaTLwTTA9NJdTmIGJ2GTEzMCSKPZifoklpj14jTDj6jJj4CI5nYOzxkCCUQAAMVp+znQAUSsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"muteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAABfUlEQVR4AWMYjGAUsDJwMLCQpoXRTnZZIoM0AzMBZQzcDCIMXEAWC5Dk0tZ6fK0uFyiCBzAziCh5Xd7PoAJkc64I7QxhUPWLf/yQ3xjoTByAjUExrvzB+5f/GewYOBn4cgOf3ddxYNDftH1OCza7BBgMGBwYfCas/fjnzv+r/xn8NiXYGTJoTZ25ZymDTn7W8UMMapiaDP6Dwdv/F/+fB0KGgJXtF3YyaGp7XLrLYMhqce4hgyGmJocT/5EhgxuD7ZknDEYMJgcfMBgzGB8AkZiaDv5HhgzuLPa7nwBNN90N1gQmMZ236z8yZAjcN3H+JgZNM+8tQOdxWm17yGCAMyBSV6//s+X/lv8Mvv2BChoM2hsXd89n0GnKn7+PQRV3kCvYlsx6v+4/gy0DOwNvU8SJO1LWDAb791bUMgjji1xhMc/u3QzKoMid6hPtxaCakrbzDqsBAytxyYgZmFQ5bfXu3Q1Lx7QHrxHykgWRDFJAA0gCLAzsQC0DCUYBAC3AlmbNhvr6AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAAAiklEQVR4AWMYWWAUMDKwMLADMUla2K0VnjUx8BKvhYmBt83m3cp3+xnEiFHOxiDEIMEgsz3l6+5H++/sB7KJAEL/94Pgu/1X918GQuI0SZzcjwSJ1XRgPxIk1nnb9iNBoCYSAqI6ZdXOtfvXAjWREuQ84VZzVi4DBjmJkassN7GegZe8ZDQSwSgAAJ/LQok1XVtuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAAAjUlEQVR4AWMYWWAUMDJwM4gwcJGihZlBRMnr0l4GZeK1sDEoxpQ+eP/uP4MVMcoFGAwYHBh8+ld/+vPo/53/QDYRwOA/GLz7f/X/ZSAkTpPDyf9IkFhNB/4jQWKdt+0/EgRqIiEgElct/7P2/1qgJlKCXMG6eNL7Zf8ZLEmLXGFhj5bdDMrkJaORCEYBAOZEUGMjl+JZAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"castButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAABuUlEQVR42mNggAA2IBYCYgkKsBDUHDAQevr06X5KMdRQMJDYvXs3SECLTNdpQfVLwA3cuXMnigCJAEO/xPbt2ykyEF2/8NatW0ECwuQaCNUPNpAZiAVqamqsgTQXuQZu2rQJYqCXl5cQ0LkpjY2Nbuzs7BJQQ5lINXD9+vUQA8PDwyWPHz++4/Lly/uvXr26btmyZUkCAgKiQElWIGYk1sC1a9fCvczNwcEhHxER4T59+vTuEydO7APiqS4uLkpQQ4kycNWqVRADQ0JCxIAu7JgwYUI0CwuLWlpaWtDmzZu3AsVmqaurSwIVsRBj4IoVKyAGurm5iQKdO/fUqVP7Tp48Odfe3t4wNjbWG2jo3o0bN5YAFfES4XUJYFDBvQyKBBmgIX5r1qzZBHTZAh4eHrWOjo6GPXv27ARaqApVI4wvpyxZsgRiIDDsZM6cOTPT19fXLDIy0hvo2n3z5s1L8fT0tF66dOm+uXPnxldXV+vdunVrPz68aNEiSF4OCgqSBUU50GXTgQLSU6dOnbFt27YpIFfPnj17JdCCalA6JeBClNKGHYgFgZgfiDmhYcYL9SaI5iEyYsAAACZV+irLroZ6AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"castButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAABuUlEQVR42mNggAAOIJYAYgUKsATUHDCQePr06X9KMdRQMFDYvXs3SMCCTNdZQPUrwA3cuXMnigCJAEO/wvbt2ykyEF2/1NatW0ECUuQaCNUPNpAFiEVramr8gTQfuQZu2rQJYqCXl5cE0LltjY2Ncezs7CAbeIGYmVQD169fDzEwPDxc8fjx498uX778/+rVqy+WLVvWLCAgIAOUZAdiRmINXLt2LdzL/BwcHFoRERHx06dP33nixIl/QHzcxcVFF2ooUQauWrUKYmBISIgs0IXbJkyYUMnCwmKclpaWt3nz5k9AsXPq6upKQEWsxBi4YsUKiIFubm4yQOdeOnXq1L+TJ09etLe3d4yNjU0BGvpn48aNs4GKBInwugIwqOBeBsWsGtCQjDVr1rwFuuwqDw+PcUdHx+o9e/Z8B1poBFUjiS+nLFmyBGIgMOxUzwCBr6+vR2RkZArQtf/mzZvX6unp6b906dJ/c+fOra+urra7devWf3x40aJFkLwcFBSkDopyoMtOAQVUpk6denrbtm3HQK6ePXv2I6AFS4BsMQIuRCltOIFYHIhFgJgHiIWgmBdKCxAZMWAAABFDD0iNkbKIAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"castingButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAB60lEQVR42mNggAAOIJYAYgUKsATUHDCQ+E8FADUUDBRevXoFEnAAYgsoTSwGq4fqV4Ab+OLFC5CABZkus4DqRxj49OlTsAtBNKkYpg/ZQKmHDx+CBCxBNKkYZCCUBhvIDMQis2fP9gfSKjdv3vx07969/6RgkIFQGmwg35kzZ+omTpwYxcPDo6mmpmaybNmy6devX/9569at/8RgkIFQGmyg8Nu3b39++/bt/9evX1/u3r27lYuLSy87Ozvy1KlTz65du/afEAYZCKXBBvKKiIhol5WVpe3cuXMX0PB/z58/P+3u7m4dFxfnD3T9x0uXLv3Hh0EGQmmwgYJPnjzZvGTJkkpOTk6TysrKbKB3P718+fKKvLy8QUNDQ965c+f+48MgA6E02EChy5cv33z37t3/N2/eXA4ODnYrKipKuXr16s8LFy4sAsprAl1+6vTp0/9xYVA6hNIQLwOxWnFxcd7Zs2ffvn79+q6cnJz5ggULFj148OBXUFCQNVBeCYjN8eWU48ePww0Uef/+/en09HRfYESkAJ3+Z//+/f1OTk7uR44cAbG7qqurCeYgoFp4XhYDBSgwL14FpcNNmzYdunHjxkWQq4FevXb+/PmNQLY4EEsSW9pwQDWIAjEPKJJA4QoNCiEon5WBSAAAryiVoYy0dtoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"castingButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAB60lEQVR42mNggAAOIJYAYgUKsATUHDCQ+E8FADUUDBRevXoFEnAAYgsoTSwGq4fqV4Ab+OLFC5CABZkus4DqRxj49OlTsAtBNKkYpg/ZQKmHDx+CBCxBNKkYZCCUBhvIDMQis2fP9gfSKjdv3vx07969/6RgkIFQGmwg35kzZ+omTpwYxcPDo6mmpmaybNmy6devX/9569at/8RgkIFQGmyg8Nu3b39++/bt/9evX1/u3r27lYuLSy87Ozvy1KlTz65du/afEAYZCKXBBvKKiIhol5WVpe3cuXMX0PB/z58/P+3u7m4dFxfnD3T9x0uXLv3Hh0EGQmmwgYJPnjzZvGTJkkpOTk6TysrKbKB3P718+fKKvLy8QUNDQ965c+f+48MgA6E02EChy5cv33z37t3/N2/eXA4ODnYrKipKuXr16s8LFy4sAsprAl1+6vTp0/9xYVA6hNIQLwOxWnFxcd7Zs2ffvn79+q6cnJz5ggULFj148OBXUFCQNVBeCYjN8eWU48ePww0Uef/+/en09HRfYESkAJ3+Z//+/f1OTk7uR44cAbG7qqurCeYgoFp4XhYDBSgwL14FpcNNmzYdunHjxkWQq4FevXb+/PmNQLY4EEsSW9pwQDWIAjEPKJJA4QoNCiEon5WBSAAAryiVoYy0dtoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"trackButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAB3ElEQVR42u2VP0sCYRzHLwiFUm4oIcUGz4ZMsRqkhhan2hzyBWSvwMXhAsGlFxA46y2JeJpDIeEfDnV1UhdX/+Du5mS/LzyC2F09KDjdAx94nuf3fZ6PPj53CovFQtglgik0habwX+FasxDHhJfwM7xsDjUbcUZc6YB5G69wj7C7XK5AqVSSR6NRfj6f1wD6xWLxBTXKXNMazQhIeYX2SCQSnk6naqfTySYSiZgkSXcAfZpTUAuFQrHxeKwZwSu04NNPJhM1k8m80thHiMQ+A30fasPh8EMUxQiNw0SUeFrhgTjhER6pqio3Gg2FySzC74Y5H2WyyFL/Zpsj9Xa73Xw8Hn9m38aoiZSJIUv9+16vp63DKwz0+/2G2+1+pL6HONCRYc6DDLLUv2U3M7rJkQaazWY9l8u9z2azCo0lHaGEGjKtVquONezbbHSkF7TR52Aw0NrtNhYFdYRB1JCh7BfWYHP6TbVVeIX+arVaq1QqGmBHtd6ulnVk2Qth/SXA/eCf04NdK5fLGjASLuvIYo3RzeIROlOpVLpQKGiAxpc6+1wu68lk8g2XYxuh1eFwBGRZTiuK8m10aVBDhrI4Tus2QoFt4CROiUOdfQ5ZzfmXjEto/gGbQlO4c+EPA9e3TyseGL0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"trackButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAB3ElEQVR42u2VvUsCYRzHj4awhq5AF3Mol5bSFjMSstYabGusuaVbHBwEsf9DpMDBF4QGB8FBhSYnvQahIfTEtsIg6AWevt94hLCzDoWm+8EHfi/fe74+j/eiCCGU/0SxDW1D2/BPw5FwgGXgBzsSv+xxtgg2wZ4J7C9aNZwBS263O1QoFC673e79qwzm+Xz+ijNo9sUvQVOrhkuRSOS43+8bjUZDj0ajSa/Xe0SYo3fLWSAQSBqGIcZh1dDBX9/r9YxUKnWNOgicYFbCPMhZp9N5UFX1DPUx0EDiG6dgxYqhO5fLXVYqlVtp5lB+BntBaHRqkR9Mc6T+ZrN5r2nahdzNuHBCk6QW+Umr1RKjWDUM6br+4fF4zpGvgwUTM/bWqaEW+aG8M7VJjjRUrVbfM5nM3WAweEa9YWK4wRk1tVrtndfI3Ux0pNtY6LHdbot6vc7GronhLmfUQPvEa7g4/lPxHauGO+Vy+a1UKgkij2o09oZzauULYfQlYPnB38KD/VosFgUZZzicU4s6MO7OsmK4mkgkbrLZrCCowybrhIfzeDxe5c0xjeG8y+UKxWKxm3Q6/YLaZ7KOjzNqoOVxzk1j+GXKnYI1oJqso8rZqtQqExvaH2Db0Db8d8NP8a/SZovcDd8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"fullscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA5ElEQVR4Ae3KsUrzYBhH8RPIFAJ5O3/ig5COgVyHW7N09x7aXSrESafuHeLi0A6iGEX+Y3edLMqnpe7egfbFMZCMXfo762GH9gIijIx8W0rcMQ9tU/3oL9KOGXdYLOuNfOS0CrGLyVr/fZ1zMht9a6VXqV6JjFa9efmiZ43PDoqnCqMh8BGS4IjpT8vTMYY7NiIaooHhsNnovqRPTA9HSOCjwT6ro+Jy8qV3PZT0aJUt9VavdadbnY9IaJUv9KiF5jqZYIQd87V80/rfAEdAq/RKvht9VEPrmmNS8m0ZRkTAzuz9AlNJVl+tEWchAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"fullscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA5klEQVR4Ae3MIUzDUACE4b8VlU1FaQWEBPlQna+oxqHm0dTicShQcyWZwSBWEgohEIKcB8UKAZbhcZXHmsw1eZUz+357OdZow8HHkJItSwiwcodmUWuFpO852s2nzUJtZFh5mPNyrq+23nE4Lv4007templIsYon1ZtedXKzkz/XGDocXBw8QiICBqPq9JJ9ogODT4d/aIgw4+KhYkBAzBbe6qLD/NR7+UX5q089VsRYpVN9NHPd605nBSFWWaknlZroqMTg9Yyv1TZqto+JcLBKrtR2q+96aHCxCkjIlqUYfBzWZuMfAHJlDLF+xFEAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"normalscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA50lEQVR4Ae3KsU6DUBhA4QMNAtsNFcJLyKBx8mXYmNxkculDuJG4OOOmcbr/QNS1xKaJqxJjTJpUk84KuHW4d+nY76yHvV1zxlx8AiZYeJeHBKgmX14wte1qXZ1l98VG/8iyJMQo+ZJVvdGddPohx8co7eRThvWmQOFa5ncZWtSnRwQ4GEVvMvQh62oW2+YDItK+BIW3PTt4KJJxiPrVyJnF39Wv/EdkmQlOsqd6IUOkGLmou+JVv0ifdfabfKVbaXVTt0KCUfhczmWur4rj7LFCYTRhelte5yiC8xgPbHuIj4sztrdbfxJjV3K8mZ7yAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"normalscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA7ElEQVR4Ae3Sr07DUBzF8e+daKaaiaYNAoH8uc43pK+AmsHimETxDAQBQZVkCQhAUFMBewkUCG4W/ib4haTykCYzmFszuc+xX3lYtw3HAEdEQsqQHvGekWKz6qFh3Jfbl9+Znta/WmrekBFU/GjRLvWuN11UJASVXh/yetVxjRH1xM/qNm+3D0lxBOVP6vaiTz8xBgSNyCkpKTBiHP84YoyiC8gZETSY2LfXCjlBjnRretk26kZJUISd1I+679YbJ7NqoTvd6Ly9FQVB2ay51pX262x65jGChoyPmoMKI901YujLMxKi1TnXa+MPEjlkhvYbWGMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAASElEQVRYCe3BsQ3AMAwDQRIW4Cqlkf031AZKVkg6An8nAQCAH3zOPQpQe28lqJcS1FpLCcpWhJKsBGVbCaq7lcAzcwkAAHz0AE0SB2llBfTtAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAAeElEQVR42tWKQQqDMBBFB3cFt9oQQ0wniW51b5f2ti30ZLX1AN+ZQA/hhwfz/zw6eZrmmoWn8NUyCh9jLJzzoLY1L2sd+v6GEBikmh7MCTHmYvyYI1LKBeo69/Y+SBkKtCz3SaztPxKAal0fs5ry2Emjo3ARajpNDtqHL/b2HUUVAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAAeUlEQVQYV9WKOw7CMBBEV3RItAmWYzlmbUMLfSjDbUHiZASFfpj1LTLSW+18RLarrjt+yZPUFoQQ4ZwHgw+5SEqKcTzB+4C+dy/JuUK1wAouVimlwlDNtvgxOMOIMWEYwrsFZtgu03S/Cp/Vmnl+3ADshOdA9s1sSn8goC/6ib5oHgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAQAAADwIURrAAAALElEQVRIx2NgGAWjYBSMRMD4/z/1DWW5TQOXsnwdMoZ+GyouHQWjYBSMTAAAnO8GxIQ7mhMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAQAAAChtXcIAAAANUlEQVQY02NkgAJGOjH+9zEkAxm/JrzJ/wYSufTxLx9Y6shHBghj10SGPKji9RMYkhjp6EIAcaIN1SJ2FnYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAQAAAChtXcIAAAANklEQVQYV2NgoCP4//F/H5hx5/+z/78mABnn/5//f+kzkHHkPxCCGLv+A+FEIGP9p/UgFXQFAHkZGwN2fDIsAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"display"\x3e\x3csettings\x3e\x3csetting name\x3d"bufferrotation" value\x3d"90"/\x3e\x3csetting name\x3d"bufferinterval" value\x3d"125"/\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xffffff"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA0CAYAAACQGfi1AAAAYklEQVR4Ae2VwQ2AMAwD/cgKVRbJuAyH+mOBfMMQyBKCuwWsxoaLtfKQkaiqtAZ0t5yEzMSMOUCa15+IAGZqgO+AFTFTSmZFnyyZv+kfjEYH+ABlIhz7Cx4n4GROtPd5ycgNe0AqrojABCoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"backgroundOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA0CAYAAACQGfi1AAAAY0lEQVR4Ae2VsQ2AQAwDXWSFF91Pkf1rxkAZIm0YAllCcF7Aiu3/i7WOU0ZFZm6rQXfLaiCzYkbuC+b1EWHATM3iHbAiZkrJrIiSP/ObQjQ6gAcg8w/AsV/w2AEmE1HVVTLqBmJaKtrlUvCnAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA4UlEQVR4Ae2XwUoDMRRFT17GTscIMoWOqwF1WUSFIv6Autf/X5TuxG6FBkOeHfAHpk+GLnI+4HBzLzyI44/l8uoBeAVugJqRuIMA4L1t24+u685DCGci4hhJBdwPkr7vL3POLsaIqnKM6G2xaJuUksPAILquqtlMFayiuYhzYDMJIygi+2qonloi0CkTldXK/NOXXVYrZRs6UgyUjsrxL6d28sP2b4n0xJ62z1nVHbCutolx/4MRH8LFt6o+Nc28tqTyq9Xd5273RUrpVsSL915gvNCt188MbLebR+Dl2K/oL+WmRveI4jXNAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeftOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA5ElEQVR4Ae2XMU7DQBBF346sIDAUDoqprNBCm4Im3IPcAE7EEbgId6BF6akQjheZGTYSF7DXQi7mSdM+zf4vjbSBP1arqy2wA26BUwZSJAHAY1VVT3VdX5RluZDEYBGwPUqaprlUVYkxYmaMEe2Wy+q873shgwK4KYrFiRnkis5EgkCeScjHRQNaw2xuG4HNYiNvzeufPmxvzcPOz8jIwDPy4++n9t8P22Qb2cye1qqahhAkt7W3GLvvKep/+Uyo/igYY0fW6+vXtv16/kgcDl2nagkYOmGzuePIfv9+DzyM/Yr+AujSfWZZzzLnAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA20lEQVR4Ae2XQUrEQBBFX4e29QJDVgFv4Cb7wSt4Ps8wLtw5B3A97mfmAFlkkbaZMpAynkBiBRGpd4Ci6j/4UGGzqR9ZjgBn4AV4A4ht29YsZJomzTnXXdfd9X2/A55iKYWlhJmU0nXTNAl4mIedwnZ7/4wBkcvH8Xh6jaqYiDFdAbcRFAtVFQJwU7ESPuh7zPrX3wj0T2zk1lz/+mG7NQ/bnpFixDPy8veq/dViW20j/W+drTOAmK2JXEbgbDrt628bhqEA+x+dpjMiMuY8lFLed8DB+orugQPAJ8i7bEsKl1PuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRightOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA2UlEQVR4Ae3XwUkEMRTG8X8eIaLgwYXF0xRgKYsVWIIVrR1sI3uwANkSvMxhDhOzRoZ5pgOZSZiDvF8Bjy/vgwdx+/3jO8tdgQtwAs4A7nB4/mShuYgx5r7v4zAMR+DNp5RYyjknIYTbrutugNcy7ENYQVUpoZimSXa7h3vgxatSxfsQgCcPdZNEnAB3QiM26G/V9bdPBLp9ImvN6t9y2daaLbtiR0ol25Edfzu1mx62Zon0v91sVZ2Bq1Ap5+8f4FL1tLkYC+C06mla5CLGcUzp6wicm31FfwHzmG90m7lXIAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABGElEQVR4Ae3Rr0pEQRSA8Zl1b1uDQTAt4j8QES1qURZvEf8lfYJVsfoAisYFq9mgyfUFVptgMtk3CAaD6DN8HoYbFhk9w9x0Yc6XDsv8LrNj0vgnTZo05LzzyR7m/wxafQC+sDHQENkv6DsG2uFV2i62nDc+2C82SybVwqAX+tIzxlOdzBUEPTnosTy0wgM9lryQpS7pVwutetAiN3RZU481mJYaf0PX9KR7rALNMCtNaVC3PLTALXesYpSGlatFVDFonnNOmfQeGKHFOqNhUIcr6cwLtdiVNkIgy6WDLrxQ7qBNrApJy0J1mCu2CY6k4qKMCbJFM/TPHvzeASfS8cBvtbhXazvosPzzN2lL4/GQXoISlKAqQz+eXnU2Tp6C2QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABGElEQVR4Ae3Rr0pEQRSA8Zl1b1uDQTAt4j8QES1qURZvEf8lfYJVsfoAisYFq9mgyfUFVptgMtk3CAaD6DN8HoYbFhk9w9x0Yc6XDsv8LrNj0vgnTZo05LzzyR7m/wxafQC+sDHQENkv6DsG2uFV2i62nDc+2C82SybVwqAX+tIzxlOdzBUEPTnosTy0wgM9lryQpS7pVwutetAiN3RZU481mJYaf0PX9KR7rALNMCtNaVC3PLTALXesYpSGlatFVDFonnNOmfQeGKHFOqNhUIcr6cwLtdiVNkIgy6WDLrxQ7qBNrApJy0J1mCu2CY6k4qKMCbJFM/TPHvzeASfS8cBvtbhXazvosPzzN2lL4/GQXoISlKAqQz+eXnU2Tp6C2QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"errorIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAAB3ElEQVR42u2Tv0sCYRzGv5WFJIVgkEVLSy1ObWGDUE0OgdRYtBZC/QENFv0DDTW0FEYJGkgEBUZCEFxYlJpnEMSpUxpBNAkiT++rlb+uvNOpuOcz3Pt+j3vgeN8PkRYtWv5Z2qmb0d58kXl7ZXuFzM3W6E3jybfUW+8E6ZupaaXB3ZNnPGPnlAbZruF02ebTuRRSSOds89TVaE0bWYJiEhIjiaBIFjZpKKaF1TSePknDuUamRmo6dKPRzCNKRDO6UepQW9NCAxseCXHGlHvKzZ8SNjw0wN6oSqfFIWXvwSE72YsrKWtxkEHdsQ/5hRjuCpCNbMVVDEdXNKzmGhhnlqT8DYrwoq+1lJ9ZIqNyu0aERAhXn/Cir3UIQoJGlJpndm2KuPyGF5V2IlxbyszTmybi7xcowYvK9/H3/sn65hXsEnBeBi8q3wuKzGN2PeQCKIcff+Xkoa55zK4zMYCTCubcs+7KSQBn3DzdL3Ytrt3iuIpXRvXsFs516vnFruuMH8oI/Whewa4gDmsY8435aqfBH81jdoWzXtTi8Dm8cvOwrHkFu/zwyJDBi+yc/aCMecyuUH4f6rjOTy9Xm9cXiRxgTyX7iESor7LIQENk5XdYFVb2lYG0aNHyF/MB+x5LQiE6gt8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"errorIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAAB3ElEQVR42u2Tv0sCYRzGv5WFJIVgkEVLSy1ObWGDUE0OgdRYtBZC/QENFv0DDTW0FEYJGkgEBUZCEFxYlJpnEMSpUxpBNAkiT++rlb+uvNOpuOcz3Pt+j3vgeN8PkRYtWv5Z2qmb0d58kXl7ZXuFzM3W6E3jybfUW+8E6ZupaaXB3ZNnPGPnlAbZruF02ebTuRRSSOds89TVaE0bWYJiEhIjiaBIFjZpKKaF1TSePknDuUamRmo6dKPRzCNKRDO6UepQW9NCAxseCXHGlHvKzZ8SNjw0wN6oSqfFIWXvwSE72YsrKWtxkEHdsQ/5hRjuCpCNbMVVDEdXNKzmGhhnlqT8DYrwoq+1lJ9ZIqNyu0aERAhXn/Cir3UIQoJGlJpndm2KuPyGF5V2IlxbyszTmybi7xcowYvK9/H3/sn65hXsEnBeBi8q3wuKzGN2PeQCKIcff+Xkoa55zK4zMYCTCubcs+7KSQBn3DzdL3Ytrt3iuIpXRvXsFs516vnFruuMH8oI/Whewa4gDmsY8435aqfBH81jdoWzXtTi8Dm8cvOwrHkFu/zwyJDBi+yc/aCMecyuUH4f6rjOTy9Xm9cXiRxgTyX7iESor7LIQENk5XdYFVb2lYG0aNHyF/MB+x5LQiE6gt8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"playIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABHUlEQVR4Ae2Vu0oDQRRAB2xSWVmmtQncLzFREUUsnW/wJ0SCWgQV8TUQBBEsjlgIFoJFCsFCCT5QgwZFtPGtncUWIcTZnd2pAnNOf2Bn5t5VgUCge8mpPtWrevxD+cbi1KTq948VXvjlbMM/Jk2aPPPjHZM7Ip88Y3JLy0e+M8fkmnYfMsbkkk7v+Uodkzr/2+AzVUxOsXvDh3NMToj3inenmByT7AVviTGp4WadV85XK0WVs4SOcHd3rVyyhg5xc91M6NhPOyDZFTOuEw97n3iXzZh2uv497C6YUe38ILFQMSM61Yjs0Om8Gdaph3abdmfNkM60RrZoWTaDOvNi2yRyxpQsETcKVapMm6JHJCI/tzTgEfH4QXYxgUDgD+1pwmmFlV3oAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABHklEQVR4Ae2VvUpDQRBGt7BMaekD5AEsU0zvL6KI76CdL6FDUItgIYJNEERIoVgIFoKFhWChBBNRYwwZRBv/tfostgghuXf37lSBPac/cHd35ppIJDK45MyIGTZDRk2+UVteNaP6WOEVf7hu62PUQgsv+FXHqAnrszJGD+go+AmO0R26bQfGqI5en/CdOUZV9LeBr0wxukKy9/j0jtEl0r3Fh1eMLuC2hndnjM7hZxVvuHksLZpcQugM/h42i0uJoVP4uSMLnPppJ3C7LfPsPOxjpLslc+x1/UdIdlNm2ftBHqC/JZnhTCNSQa8bMs2Zh3Yf3a7JFAetkT10LMokBy+2XVhZJgIjlkIZZazIuCJiya/Xx9QR/Q8yEokMFv9/Ax7UXjl24wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"replayIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAADOElEQVR4Ae2VUWhbVRjH/0nqdk0m0eTGITVZNsmiZCLTlooNPoWlbk27lzmGSIeyh7YgFSYaGO2yDZk4GMi65kG9d6kkbfCuyf1bqZmmlsYxCK51KwxkrpM4qBRla18cIngvw0qgN7ea1/z+L4fDn4/vO+c730G9NGjQQIALj8CKumn+afjIQWyDHRbUxTO/8w/Ojux9Bc0Q6gn27B3eoRZM5Zm2l7EVm/5bMAsEiPAjiFiFun7hXa5MjJ7Y1gI3mjYaxA5vZzSdmJeWlfvqz/xHFd7jr5+fP+rYgU0wpQlibE8peV+9yyVWeJuLVapwleU4tsCEh9B8sn8lt8SbBprJvHUEXrOMmuCVj61o9h81fXEhEY/GHAf09QOVlaF3N4fgNDsjCzxnBn7jDU3T2TfexE64IeC5G9Q1lz/7/vY2iBs5aHtndCm/wAXmUtvb8ShsD/pogdf46bm2CJ7Qr16THY87t0Iwzsf77ch1/sBCdmcYjrVuaZ4813UAPjwMC3SXsztS+ujqWTxp1E9CV8ct9Sq/56EeOGGpemtb1t6a9bXdq7nbvKV2dRjlJKaOl1lm+gICsME47x1jsu5LHYeIdfEXpCu8wsE43KiFezCu+woS/FiX4KxSYon7YhBQC2FfTPfNKghiXUIldYYzdLfChlpYxRbd952KkEGgr9Uii3z6JbNAnhbd941hoOBF5RIv8WC3SWmbuzt130XD0vyfSFOc4gfvwIVauD48qvs+Njxs8URikpOckmtevw2Br2Tdd9Lw+oVIR15VeZl91Q1Z3UXOvp7LVJlXI4YNaYHvdHKCE7ye3fXvE6l2OHaFr43rntNJ+IxHrj0czeQVFjifCrbDCRuqi3IG2+dTBSrM5MNR2GuOkcMD48xymotZrcAAXBBghQ0C3Aj09Sxmp5nlOA8PwAOLyWDrPZbhGL/kMufkkff2xx5rferFQ/vPx+fkZW13jBn2D8KrOc1H7av9ci7NNIu8yVX+xT95T1sVqe/J+dffhldzYUPD/4U9Q8lR9TNWa5RDyeej8BhkY/Qd7Y72Jk5Jw4qkSuqwckrqTbTuhc/44zb/IEOagtpK/N8fdoMGDf4G6kd7103/csoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"replayIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAADTElEQVR4Ae2VX2xTZRjGH1iBzDMrU6lxLdOFhLJ/CepwTWCJiUSTDTdilikxJmAo2GlJ9I7EsCgkw6jRG5ALtZNJy7QDiwxK0dZllSypssqatCHIMKdzM4uEnUUrtj2P57uAULNzOtltf8/Nl3OevHnf73u/70WJxVKiRAWqcD/KsGjsvyScb6EBZizFoth4nX9zJNn6KtZCwhLcNU9NcpJasPw3o80vogbl/y/YUkiwoRHNcMsUSvMGlX/6zz3SCiuWLzSIGXVbnN5gXJ7566b6K29J5ix///PwMWk9ylGUZVj93M5o6qZ6g9OUeY0TBZI5x9ggKlGEFbDvP6Jkp3lFR8PX93yEOpQXy6a2L6Bo9suaTv/2tv/ZPdLey7ylWKZnYEULLFhWbG+q3/f8waSmiPLKB3gSVkh4OkmhsdyHkZoO2Bay0eYtzulcggl+PVXTiYdggmBjgpf42XjzDqwRRy+OAo/eVwNJP5+675Pj/JkhZW0XVt7uFvvQePte1ONezSFclo4d0fjFH7FOr9Ol9l1X1Yv8idt6Ybmj6SRUofL2XSt76Zm57DVeVdt36eVkO3o2xhi9k9gAE/TzXn88LXxHz8KGeWkMyaMc5T4/rDDCus8vfCEZjZgXx0gmyijb3JBghNTmFr6RDByYl5ZofpjDfKANJhhR9mCr8P2QR4tOoG/zYYa57vligVa1Ct93uoEcJzLneZ4vvIEKGHFPx+vCd0K3tMZP5SCDfNeLKhjx8HvHhO8T3c22vRMc4hCDaTQZFGdC07m08O3XPX5p8+6AeooX2F3QkAUsgaW79wJPMaBu3g1Jr9XqD6ZO8iTHlYY7rkhBmJUNXZdmhedgCvX6w8C8yenLDTLE+JS9ExaY/lOUxd4ZnwpxkL7cJifMhs/Ids8Av2SEE4pWYBOqIKEMJlTAiqbu3gklov0d4HYPqo2H03LUugI+HucZznAs/fFXW92VbWu2bnvzsH8sPcMz2h8fXzuNWs1Z/KntOtKX9dLLMK9wjnlmOautwhTf+nIvf446zYUFPf5P7OxJ9atfsFD97Ek97kS1TjZ64+gxpyt4QD6U8age9VDmgOwKbnChXn9wFxuQDrRocmir1ai4y+lfokSJfwEhAcqxd5L4JgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"dock"\x3e\x3csettings\x3e\x3csetting name\x3d"iconalpha" value\x3d"1"/\x3e\x3csetting name\x3d"iconalphaactive" value\x3d"1"/\x3e\x3csetting name\x3d"iconalphaover" value\x3d"1"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"button" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAxklEQVR4Ae2YsQ3CMBBF7+yIximQSERSMgYNI1AxJgswAaMkLREpEnQ2Z6Chooqwpf+k65+evhtzXW8LIjrp7fUcpcmod9U7v2Sbpjm2bVtaa5kSRERC13V13/ePIpatqk05zzOHEChFWImOKnyIwk7EMyXMJyTrOUOZAeGlKd4byUtYCZjEN9gwCuPRYRKYBCbx18JLJ0bh3IQJk/gFHh0Ko3BWwqOID8YYpoTx3ofoap0r18y0WymspCo7DLf7NE2X7L5bnyz7UgI6sO7WAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAzklEQVR4Ae2YMU7FMBAFx04osQvyRQIX4nfcgRZOAxW3oMqRkhKbBkWyjVfiCiD7a0dKPxq9dZHxdLq9Al6AB8DRJl/ACryOwPM8z0/LsvhhGCwNklLK27bd7fv+LcLnabrxx3HYUgotYoyx4liFH0XYpZQtDfMb0orrSGeo8L8Il9Jd4dL5JFRYN6xHp5PQSegkLuwd/uPEWrg3YXQSenRaWAtfVOGYUs62QsPkiriK8Brj571z3ot0q7IxhgB8iPBbCMHU7wxcN/679f0HQzRYj4Eg/3AAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"buttonActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAwUlEQVR4Ae2YsQ3CMBBFD8e0CVESUcFMpGMKapgAKvagymKWiF3RxMe/IUDn6J70I5dPX98u4odhvyWiG3JCdqSTiEzI3eNz7fv+0nVdW1WVI4VkEEI4IB8RHjXLCg6II4TPXmbgADOTZhwQV0+F4ekPmDBzcQ2zTcKEC9+wXTqbhE3CJrGyd5jpp1jDxb0SNgm7dNawNbyqhudlydkBUkwG4irCU0rzsa6bVqt0BinFN44vEX7EGDfIiHOj/Hfr8wvCZ0/Xf6TpeQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAgCAYAAAA1zNleAAAAD0lEQVQoU2NgGAWjADcAAAIgAAEeEYatAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"playlist"\x3e\x3csettings\x3e\x3csetting name\x3d"backgroundcolor" value\x3d"0x3c3c3e"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0x848489"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"0xb2b2b6"/\x3e\x3csetting name\x3d"overcolor" value\x3d"0xb2b2b6"/\x3e\x3csetting name\x3d"titlecolor" value\x3d"0xb9b9be"/\x3e\x3csetting name\x3d"titlesize" value\x3d"12"/\x3e\x3csetting name\x3d"titleweight" value\x3d"bold"/\x3e\x3csetting name\x3d"titleactivecolor" value\x3d"0xececf4"/\x3e\x3csetting name\x3d"titleovercolor" value\x3d"0xececf4"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"item" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABMAQMAAAASt2oTAAAAA1BMVEU8PD44mUV6AAAAFklEQVR4AWMYMmAUjIJRMApGwSgYBQAHuAABIqNCjAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"itemActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABMAQMAAAASt2oTAAAAA1BMVEUvLzHXqQRQAAAAFklEQVR4AWMYMmAUjIJRMApGwSgYBQAHuAABIqNCjAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"itemImage" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA2CAMAAAAPkWzgAAAAk1BMVEU0NDcVFRcWFhgXFxknJyozMzYyMjUlJSgrKy4jIyYZGRssLC8YGBobGx0kJCcuLjAiIiQaGhwjIyUpKSwkJCYaGh0nJykiIiUgICIwMDMqKi0cHB8lJScdHSAtLTAuLjEdHR8VFRgxMTQvLzIvLzEoKCsZGRwqKiwbGx4gICMoKCofHyImJigmJikhISMeHiAhISRWJqoOAAAA/klEQVR4Ae3VNYLDMBQG4X8kme2QwwzLfP/TbeO0qfQ6zQW+coRxQqYl4HEJSEACEvA8NQamRkCoF40kNUxMgC3gc0lrtiZAB1BKuSOPDIzcXroB0EtL3hQXuIHLNboDC+aRgRnQ6GUAjtBEBmrgdcwA/OCyuMATraOvBiB3HBQTOJ8KZp5QwwXoA3xFBdrVjpPnHVgBfQfjqMChZSoAugDMwCsqUMFeAHwEwMFnXKDkshGAz5YAEOIC2fpbAqhUAMDG4AcO3HUAahkAHYykOQATC6Bsf7M7UNotswLwmR2wAviTHVAAHA2BMXCWIaDC7642wIMSkIAEJCABxv0D1B4Kmtm5dvAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAABCAIAAAAkUWeUAAAAEUlEQVR42mPQ1zccRaOIzggAmuR1T+nadMkAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAYAAADErm6rAAAAHklEQVQI12NgIABERcX/Kymp/FdWVkXBIDGQHCH9AAmVCvfMHD66AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKCAYAAACuaZ5oAAAAEUlEQVQoU2NgGAWjYBQMfQAAA8oAAZphnjsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKCAYAAACuaZ5oAAAAEUlEQVQoU2NgGAWjYBQMfQAAA8oAAZphnjsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAX0lEQVR42q2P4QqAIAyEewktLUy3pKevVwvpAdZO+q9Qgw+OO25jQ88YM2blUAp4dW71epfvyuXcLCGsFWh4yD4fsHY6vV8kRpKUGFQND9kfHxQsJNqEOYOq4Wl2t/oPXdoiX8vd60IAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAXElEQVQY02NgIADExCQ+KSmp/FdWVkXBIDGg3BcGSoG0tMxGWVl5DAtAYiA5ii2wsbE1ALr0A8hAkKtBGMQGiYHkKLbg////TK6uboYg1wIN/QzCIDZIDCRHSD8AB2YrZ5n2CLAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAAAAADhxTF3AAAAAnRSTlMA/1uRIrUAAAAUSURBVHjaY/oPA49unT+yaz2cCwAcKhapymVMMwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderThumbCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAQAAAA+ajeTAAAAMElEQVQI12NgwACPPt76f/7/kf+7/q//yEAMeNQH19DHQBy41Xf+/ZH3u4hVjh8AAJAYGojU8tLHAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderThumbCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAQAAAA+ajeTAAAANUlEQVQI12NgoAbY2rf+49KPs/uIVH54wrH/h/7v+L/y//QJRGm4/PHa/7NALdv+L/6MKQsAZV8ZczFGWjAAAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"tooltip"\x3e\x3csettings\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xacacac"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"0xffffff"/\x3e\x3csetting name\x3d"overcolor" value\x3d"0xffffff"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAACCAYAAABsfz2XAAAAEUlEQVR4AWOwtnV8RgomWQMAWvcm6W7AcF8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"arrow" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAADCAYAAACnI+4yAAAAEklEQVR42mP4//8/AymYgeYaABssa5WUTzsyAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAECAYAAAC6Jt6KAAAAHUlEQVR42mMUFRU/wUACYHR1935GkgZrW0faagAAqHQGCWgiU9QAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAECAYAAAC6Jt6KAAAAGElEQVR42mOwtnV8RgpmoL0GUVHxE6RgAO7IRsl4Cw8cAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAACCAYAAACUn8ZgAAAAFklEQVR42mMQFRU/YW3r+AwbZsAnCQBUPRWHq8l/fAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAACCAYAAACUn8ZgAAAAFklEQVR42mOwtnV8hg2LioqfYMAnCQBwXRWHw2Rr1wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capTopLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAPklEQVR4XmMQFRVnBeIiIN4FxCeQMQOQU6ijq3/VycXjiau79zNkDJLcZWvv9MTGzumZta0jCgZJnkAXhPEBnhkmTDF7/FAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAPklEQVR42mMQFRU/gYZ3A3ERELMyuLp7P0PGTi4eT3R09a8CJbMYrG0dnyFjGzunZ7b2Tk+AkrswJGEYZAUA8XwmRnLnEVMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottomLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAMUlEQVR4AWMQFRU/YW3r+AwbBknusrSye4JLslBdQ/uqpbX9E2ySrEBcBMS7QVYgYwAWViWcql/T2AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capBottomRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAANUlEQVR42mOwtnV8hg2LioqfYMAmYWll9wQouQtD0tLa/om6hvZVoGQ2A0g7Gt4NxEVAzAoAZzolltlSH50AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"menuOption" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAcklEQVQoz2NgGLFAVFRcDoh3AfFnKC2HVaGYmMQeSUnp/7Kycv9BNJB/AJeJn+XlFf8rKir/V1BQ+g/k/8SqEGjKPhkZuf/Kyqr/QTSQfwirQm9vX3WQYqCVX0G0p6e3BlaF////ZwJiLiDmgdJMwzr2ANEWKw6VGUzBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"menuOptionOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAcklEQVQoz2NgGLFAVFRcDoh3AfFnKC2HVaGYmMQeSUnp/7Kycv9BNJB/AJeJn+XlFf8rKir/V1BQ+g/k/8SqEGjKPhkZuf/Kyqr/QTSQfwirQm9vX3WQYqCVX0G0p6e3BlaF////ZwJiLiDmgdJMwzr2ANEWKw6VGUzBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"menuOptionActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAQAAABOKvVuAAAAdElEQVR4AWOgJ5BhcGQIBWIZhJCsW+6jS7+/P7rklssgBxN0un/59f+n/1//f3SVwQUmGPrs+6P/IPj8N0M4TNBl/+Vr/0Hw4FUGN5igkm3ursvnf+y6bJ/LoAwTZGZQY/BgCANiNSCbASHMwcANxMy09DcAxqMsxkMxUYIAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAYAAAB1j90SAAAAE0lEQVR42mP4//8/AzmYYQRoBADgm9EvDrkmuwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAYAAAB1j90SAAAAE0lEQVR42mP4//8/AzmYYQRoBADgm9EvDrkmuwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAAXklEQVR42n2NWwqAIBRE3YSmJT4KafW1tZAWMN2RPkSojwPDPO5VAFSP1lMRDqG+UJexN4524bJ2hvehQU2P2efQGHs6tyCEhBhzg5oes7+PlcWUVuS8Nah5QLK77z7Bcm/CZuJM1AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAAWklEQVQI12NgQAJiYhKfVFXV/6upaaBgkBhQ7gsDLiAtLbNRXl4RQyNIDCSHU6ONja0B0OQPIIUgW0AYxAaJgeRwavz//z+Tq6ubIch0oOLPIAxig8RAcshqARVfK+sjJ8UzAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA0CAYAAAC6qQkaAAAAXklEQVR42mP5//8/AwyIiUn85+bmZmBkZGRABiA1X79+ZXj16gVcgoUBDaBrwiWGoZFYMCg0MpKnkZFxCPlxVONw0MjIyDgaOCM7AdC7lBuNjtGiY1TjqMbRwooijQBUhw3jnmCdzgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA0CAAAAACfwlbGAAAAAnRSTlMA/1uRIrUAAAAmSURBVHgBY/gPBPdunT+yaw2IBeY+BHHXwbmPQNz1w5w7yh3lAgBeJpPWLirUWgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAQAAAAU2sY8AAAANElEQVQI12NgIA5s7Vv/cenH2X1YpA5POPb/0P8d/1f+nz4BQ/Lyx2v/zwKlt/1f/BkmBgDJshlzy7m4BgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAQAAAAU2sY8AAAAL0lEQVQI12NggIJHH2/9P///yP9d/9d/ZkAHjybCJScyYIJbE85/OvJp1wQG4gAADBkams/Cpm0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAQAAACMnYaxAAAA/klEQVR4AYXQoW7CUBjF8f9IYWkgq2l2k8llrmJBTOBxsyQlJENs4236CDhEywNUIEGh12WZuYDC4W9A3B2zhTVLds8VJ+fnPv5/FzQIaHGptNQaWn4ooM0DA56VgVpbi1hEk2vSvNjbozu6vc0LUi1NCQFXDBflwW/9p7L1B78oGRJJCOnN8o3/OMvGz3J6EiLStdX0K2tLKiFm8n6qY3XiVYL5C98cLxL90dLWcWkZSYjpZ0Uds4K+hIg7nqblOU1LxlojCDF0GWfz1a5ylVvtsrmoi5EQ0OGGhEdNE2WslmjpSND5VAy3mu6VRM1o0fm+Dx8SEWOUWC3UIvoCCFqphCwr/x8AAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3c/components\x3e\x3c/skin\x3e'
        )
    }
})(jwplayer);
(function (d) {
    var l = d.html5,
        a = d.utils,
        c = d.events,
        f = c.state,
        e = a.css,
        h = a.isMobile(),
        j = ".jwpreview",
        b = {
            showicons: !0,
            bufferrotation: 45,
            bufferinterval: 100,
            fontcolor: "#ccc",
            overcolor: "#fff",
            fontsize: 15,
            fontweight: ""
        };
    l.display = function (d, g) {
        function k(b) {
            if (D && (d.jwGetControls() || d.jwGetState() === f.PLAYING)) D(b);
            else if ((!h || !d.jwGetControls()) && T.sendEvent(c.JWPLAYER_DISPLAY_CLICK), d.jwGetControls()) {
                var e = (new Date).getTime();
                W && 500 > e - W ? (d.jwSetFullscreen(), W = void 0) : W = (new Date).getTime();
                var g = a.bounds(u.parentNode.querySelector(".jwcontrolbar")),
                    j = a.bounds(u),
                    e = g.left - 10 - j.left,
                    r = g.left + 30 - j.left,
                    k = j.bottom - 40,
                    l = j.bottom,
                    p = g.right - 30 - j.left,
                    g = g.right + 10 - j.left;
                if (h && !(b.x >= e && b.x <= r && b.y >= k && b.y <= l)) {
                    if (b.x >= p && b.x <= g && b.y >= k && b.y <= l) {
                        d.jwSetFullscreen();
                        return
                    }
                    T.sendEvent(c.JWPLAYER_DISPLAY_CLICK);
                    if (J) return
                }
                switch (d.jwGetState()) {
                    case f.PLAYING:
                    case f.BUFFERING:
                        d.jwPause();
                        break;
                    default:
                        d.jwPlay()
                }
            }
        }

        function q(a, b) {
            S.showicons && (a || b ? (K.setRotation("buffer" === a ? parseInt(S.bufferrotation, 10) : 0,
                    parseInt(S.bufferinterval, 10)), K.setIcon(a),
                K.setText(b)) : K.hide())
        }

        function s(a) {
            A !== a ? (A && E(j, !1), (A = a) ? (a = new Image, a.addEventListener("load", r, !1), a.src = A) :
                (e("#" + u.id + " " + j, {
                    "background-image": ""
                }), E(j, !1), F = L = 0)) : A && !J && E(j, !0);
            C(d.jwGetState())
        }

        function v(a) {
            clearTimeout(Z);
            Z = setTimeout(function () {
                C(a.newstate)
            }, 100)
        }

        function C(a) {
            a = N ? N : d ? d.jwGetState() : f.IDLE;
            if (a !== P) switch (P = a, K && K.setRotation(0), a) {
                case f.IDLE:
                    !x && !M && (A && !G && E(j, !0), a = !0, d._model && !1 === d._model.config.displaytitle &&
                        (a = !1), q("play", w && a ? w.title : ""));
                    break;
                case f.BUFFERING:
                    x = !1;
                    t.error && t.error.setText();
                    M = !1;
                    q("buffer");
                    break;
                case f.PLAYING:
                    q();
                    break;
                case f.PAUSED:
                    q("play")
            }
        }

        function r() {
            F = this.width;
            L = this.height;
            C(d.jwGetState());
            y();
            A && e("#" + u.id + " " + j, {
                "background-image": "url(" + A + ")"
            })
        }

        function n(a) {
            x = !0;
            q("error", a.message)
        }

        function y() {
            0 < u.clientWidth * u.clientHeight && a.stretch(d.jwGetStretching(), p, u.clientWidth, u.clientHeight,
                F, L)
        }

        function E(a, b) {
            e("#" + u.id + " " + a, {
                opacity: b ? 1 : 0,
                visibility: b ? "visible" : "hidden"
            })
        }
        var u, p, z, w, A, F, L, G = !1,
            t = {},
            x = !1,
            M = !1,
            J, H, K, N, P,
            S = a.extend({}, b, d.skin.getComponentSettings("display"), g),
            T = new c.eventdispatcher,
            D, W;
        a.extend(this, T);
        this.clickHandler = k;
        var Z;
        this.forceState = function (a) {
            N = a;
            C(a);
            this.show()
        };
        this.releaseState = function (a) {
            N = null;
            C(a);
            this.show()
        };
        this.hidePreview = function (a) {
            G = a;
            E(j, !a);
            a && (J = !0)
        };
        this.setHiding = function () {
            J = !0
        };
        this.element = function () {
            return u
        };
        this.redraw = y;
        this.show = function (a) {
            if (K && (a || (N ? N : d ? d.jwGetState() : f.IDLE) !== f.PLAYING)) clearTimeout(H), H = void 0,
                u.style.display = "block", K.show(), J = !1
        };
        this.hide = function () {
            K && (K.hide(), J = !0)
        };
        this.setAlternateClickHandler = function (a) {
            D = a
        };
        this.revertAlternateClickHandler = function () {
            D = null
        };
        u = document.createElement("div");
        u.id = d.id + "_display";
        u.className = "jwdisplay";
        p = document.createElement("div");
        p.className = "jwpreview jw" + d.jwGetStretching();
        u.appendChild(p);
        d.jwAddEventListener(c.JWPLAYER_PLAYER_STATE, v);
        d.jwAddEventListener(c.JWPLAYER_PLAYLIST_ITEM, function () {
            x = !1;
            t.error && t.error.setText();
            var a = (w = d.jwGetPlaylist()[d.jwGetPlaylistIndex()]) ?
                w.image : "";
            P = void 0;
            s(a)
        });
        d.jwAddEventListener(c.JWPLAYER_PLAYLIST_COMPLETE, function () {
            M = !0;
            q("replay");
            var a = d.jwGetPlaylist()[0];
            s(a.image)
        });
        d.jwAddEventListener(c.JWPLAYER_MEDIA_ERROR, n);
        d.jwAddEventListener(c.JWPLAYER_ERROR, n);
        d.jwAddEventListener(c.JWPLAYER_PROVIDER_CLICK, k);
        h ? (z = new a.touch(u), z.addEventListener(a.touchEvents.TAP, k)) : u.addEventListener("click", k, !1);
        z = {
            font: S.fontweight + " " + S.fontsize + "px/" + (parseInt(S.fontsize, 10) + 3) +
                "px Arial, Helvetica, sans-serif",
            color: S.fontcolor
        };
        K =
            new l.displayicon(u.id + "_button", d, z, {
                color: S.overcolor
            });
        u.appendChild(K.element());
        v({
            newstate: f.IDLE
        })
    };
    e(".jwdisplay", {
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden"
    });
    e(".jwdisplay " + j, {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "#000 no-repeat center",
        overflow: "hidden",
        opacity: 0
    });
    a.transitionStyle(".jwdisplay, .jwdisplay *", "opacity .25s, color .25s")
})(jwplayer);
(function (d) {
    var l = d.utils,
        a = l.css,
        c = document,
        f = "none",
        e = "100%";
    d.html5.displayicon = function (h, j, b, m) {
        function g(a, b, e, f) {
            var d = c.createElement("div");
            d.className = a;
            b && b.appendChild(d);
            y && k(a, "." + a, e, f);
            return d
        }

        function k(b, c, e, f) {
            var d = q(b);
            "replayIcon" === b && !d.src && (d = q("playIcon"));
            d.overSrc && (f = l.extend({}, f), f["background-image"] = "url(" + d.overSrc + ")");
            d.src ? (e = l.extend({}, e), 0 < b.indexOf("Icon") && (G = d.width | 0), e.width = d.width, e[
                    "background-image"] = "url(" + d.src + ")", e["background-size"] = d.width +
                "px " + d.height + "px", e["float"] = "none", a.style(y, {
                    display: "table"
                })) : a.style(y, {
                display: "none"
            });
            e && a("#" + n + " .jwdisplay " + c, e);
            f && a("#" + n + " .jwdisplay:hover " + c, f);
            L = d
        }

        function q(a) {
            var b = r.getSkinElement("display", a);
            a = r.getSkinElement("display", a + "Over");
            return b ? (b.overSrc = a && a.src ? a.src : "", b) : {
                src: "",
                overSrc: "",
                width: 0,
                height: 0
            }
        }

        function s() {
            var b = z || 0 === G;
            a.style(w, {
                display: w.innerHTML && b ? "" : f
            });
            x = b ? 30 : 0;
            v()
        }

        function v() {
            clearTimeout(t);
            0 < x-- && (t = setTimeout(v, 33));
            var b = "px " + e,
                c = Math.ceil(Math.max(L.width,
                    l.bounds(y).width - p.width - u.width)),
                b = {
                    "background-size": [u.width + b, c + b, p.width + b].join(", ")
                };
            y.parentNode && (b.left = 1 === y.parentNode.clientWidth % 2 ? "0.5px" : "");
            a.style(y, b)
        }

        function C() {
            H = (H + J) % 360;
            l.rotate(A, H)
        }
        var r = j.skin,
            n = j.id,
            y, E, u, p, z, w, A, F = {},
            L, G = 0,
            t = -1,
            x = 0;
        j instanceof d.html5.instream && (n = n.replace("_instream", ""));
        this.element = function () {
            return y
        };
        this.setText = function (a) {
            var b = w.style;
            w.innerHTML = a ? a.replace(":", ":\x3cbr\x3e") : "";
            b.height = "0";
            b.display = "block";
            if (a)
                for (; 2 < Math.floor(w.scrollHeight /
                        c.defaultView.getComputedStyle(w, null).lineHeight.replace("px", ""));) w.innerHTML =
                    w.innerHTML.replace(/(.*) .*$/, "$1...");
            b.height = "";
            b.display = "";
            s()
        };
        this.setIcon = function (a) {
            var b = F[a];
            b || (b = g("jwicon"), b.id = y.id + "_" + a, F[a] = b);
            k(a + "Icon", "#" + b.id);
            y.contains(A) ? y.replaceChild(b, A) : y.appendChild(b);
            A = b
        };
        var M, J = 0,
            H;
        this.setRotation = function (a, b) {
            clearInterval(M);
            H = 0;
            J = a | 0;
            0 === J ? C() : M = setInterval(C, b)
        };
        var K = this.hide = function () {
            y.style.opacity = 0;
            y.style.cursor = ""
        };
        this.show = function () {
            y.style.opacity =
                1;
            y.style.cursor = "pointer"
        };
        y = g("jwdisplayIcon");
        y.id = h;
        E = q("background");
        u = q("capLeft");
        p = q("capRight");
        z = 0 < u.width * p.width;
        var N = {
            "background-image": "url(" + u.src + "), url(" + E.src + "), url(" + p.src + ")",
            "background-position": "left,center,right",
            "background-repeat": "no-repeat",
            padding: "0 " + p.width + "px 0 " + u.width + "px",
            height: E.height,
            "margin-top": E.height / -2
        };
        a("#" + h, N);
        l.isMobile() || (E.overSrc && (N["background-image"] = "url(" + u.overSrc + "), url(" + E.overSrc +
            "), url(" + p.overSrc + ")"), a(".jw-tab-focus #" + h +
            ", #" + n + " .jwdisplay:hover " + ("#" + h), N));
        w = g("jwtext", y, b, m);
        A = g("jwicon", y);
        j.jwAddEventListener(d.events.JWPLAYER_RESIZE, v);
        K();
        s()
    };
    a(".jwplayer .jwdisplayIcon", {
        display: "table",
        position: "relative",
        "margin-left": "auto",
        "margin-right": "auto",
        top: "50%",
        "float": "none"
    });
    a(".jwplayer .jwdisplayIcon div", {
        position: "relative",
        display: "table-cell",
        "vertical-align": "middle",
        "background-repeat": "no-repeat",
        "background-position": "center"
    });
    a(".jwplayer .jwdisplayIcon div", {
        "vertical-align": "middle"
    }, !0);
    a(".jwplayer .jwdisplayIcon .jwtext", {
        color: "#fff",
        padding: "0 1px",
        "max-width": "300px",
        "overflow-y": "hidden",
        "text-align": "center",
        "-webkit-user-select": f,
        "-moz-user-select": f,
        "-ms-user-select": f,
        "user-select": f
    })
})(jwplayer);
(function (d) {
    var l = d.html5,
        a = d.utils,
        c = a.css,
        f = a.bounds,
        e = window.top !== window.self,
        h = ".jwdockbuttons";
    l.dock = function (d, b) {
        function m(a) {
            return !a || !a.src ? {} : {
                background: "url(" + a.src + ") center",
                "background-size": a.width + "px " + a.height + "px"
            }
        }

        function g(b, e) {
            var d = s(b);
            c(k("." + b), a.extend(m(d), {
                width: d.width
            }));
            return q("div", b, e)
        }

        function k(a) {
            return "#" + r + " " + (a ? a : "")
        }

        function q(a, b, c) {
            a = document.createElement(a);
            b && (a.className = b);
            c && c.appendChild(a);
            return a
        }

        function s(a) {
            return (a = n.getSkinElement("dock",
                a)) ? a : {
                width: 0,
                height: 0,
                src: ""
            }
        }

        function v() {
            c(h + " .capLeft, " + h + " .capRight", {
                display: y ? "block" : "none"
            })
        }
        var C = a.extend({}, {
                iconalpha: 0.75,
                iconalphaactive: 0.5,
                iconalphaover: 1,
                margin: 8
            }, b),
            r = d.id + "_dock",
            n = d.skin,
            y = 0,
            E = {},
            u = {},
            p, z, w, A = this;
        A.redraw = function () {
            f(p)
        };
        A.element = function () {
            return p
        };
        A.offset = function (a) {
            c(k(), {
                "margin-left": a
            })
        };
        A.hide = function () {
            A.visible && (A.visible = !1, p.style.opacity = 0, clearTimeout(w), w = setTimeout(function () {
                p.style.display = "none"
            }, 250))
        };
        A.showTemp = function () {
            A.visible ||
                (p.style.opacity = 0, p.style.display = "block")
        };
        A.hideTemp = function () {
            A.visible || (p.style.display = "none")
        };
        A.show = function () {
            !A.visible && y && (A.visible = !0, p.style.display = "block", clearTimeout(w), w = setTimeout(
                function () {
                    p.style.opacity = 1
                }, 0))
        };
        A.addButton = function (b, g, h, k) {
            if (!E[k]) {
                var w = q("div", "divider", z),
                    m = q("div", "button", z),
                    s = q("div", null, m);
                s.id = r + "_" + k;
                s.innerHTML = "\x26nbsp;";
                c("#" + s.id, {
                    "background-image": b
                });
                "string" === typeof h && (h = new Function(h));
                a.isMobile() ? (new a.touch(m)).addEventListener(a.touchEvents.TAP,
                    function (a) {
                        h(a)
                    }) : m.addEventListener("click", function (a) {
                    h(a);
                    a.preventDefault()
                });
                E[k] = {
                    element: m,
                    label: g,
                    divider: w,
                    icon: s
                };
                if (g) {
                    var C = new l.overlay(s.id + "_tooltip", n, !0);
                    b = q("div");
                    b.id = s.id + "_label";
                    b.innerHTML = g;
                    c("#" + b.id, {
                        padding: 3
                    });
                    C.setContents(b);
                    if (!a.isMobile()) {
                        var L;
                        m.addEventListener("mouseover", function () {
                            clearTimeout(L);
                            var b = u[k],
                                g, h;
                            g = f(E[k].icon);
                            b.offsetX(0);
                            h = f(p);
                            e && a.isIE() && d.jwGetFullscreen() ? c("#" + b.element().id, {
                                left: 100 * g.left + 50 + 100 * g.width / 2
                            }) : c("#" + b.element().id, {
                                left: g.left - h.left + g.width / 2
                            });
                            g = f(b.element());
                            h.left > g.left && b.offsetX(h.left - g.left + 8);
                            C.show();
                            a.foreach(u, function (a, b) {
                                a !== k && b.hide()
                            })
                        }, !1);
                        m.addEventListener("mouseout", function () {
                            L = setTimeout(C.hide, 100)
                        }, !1);
                        p.appendChild(C.element());
                        u[k] = C
                    }
                }
                y++;
                v()
            }
        };
        A.removeButton = function (a) {
            if (E[a]) {
                z.removeChild(E[a].element);
                z.removeChild(E[a].divider);
                var b = document.getElementById("" + r + "_" + a + "_tooltip");
                b && p.removeChild(b);
                delete E[a];
                y--;
                v()
            }
        };
        A.numButtons = function () {
            return y
        };
        A.visible = !1;
        p =
            q("div", "jwdock");
        z = q("div", "jwdockbuttons");
        p.appendChild(z);
        p.id = r;
        var F = s("button"),
            L = s("buttonOver"),
            G = s("buttonActive");
        F && (c(k(), {
                height: F.height,
                padding: C.margin
            }), c(h, {
                height: F.height
            }), c(k("div.button"), a.extend(m(F), {
                width: F.width,
                cursor: "pointer",
                border: "none"
            })), c(k("div.button:hover"), m(L)), c(k("div.button:active"), m(G)), c(k("div.button\x3ediv"), {
                opacity: C.iconalpha
            }), c(k("div.button:hover\x3ediv"), {
                opacity: C.iconalphaover
            }), c(k("div.button:active\x3ediv"), {
                opacity: C.iconalphaactive
            }),
            c(k(".jwoverlay"), {
                top: C.margin + F.height
            }), g("capLeft", z), g("capRight", z), g("divider"));
        setTimeout(function () {
            f(p)
        })
    };
    c(".jwdock", {
        opacity: 0,
        display: "none"
    });
    c(".jwdock \x3e *", {
        height: "100%",
        "float": "left"
    });
    c(".jwdock \x3e .jwoverlay", {
        height: "auto",
        "float": "none",
        "z-index": 99
    });
    c(h + " div.button", {
        position: "relative"
    });
    c(h + " \x3e *", {
        height: "100%",
        "float": "left"
    });
    c(h + " .divider", {
        display: "none"
    });
    c(h + " div.button ~ .divider", {
        display: "block"
    });
    c(h + " .capLeft, " + h + " .capRight", {
        display: "none"
    });
    c(h + " .capRight", {
        "float": "right"
    });
    c(h + " div.button \x3e div", {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 5,
        position: "absolute",
        "background-position": "center",
        "background-repeat": "no-repeat"
    });
    a.transitionStyle(".jwdock", "background .25s, opacity .25s");
    a.transitionStyle(".jwdock .jwoverlay", "opacity .25s");
    a.transitionStyle(h + " div.button div", "opacity .25s")
})(jwplayer);
(function (d) {
    var l = d.html5,
        a = d.utils,
        c = d._,
        f = d.events,
        e = f.state,
        h = d.playlist;
    l.instream = function (j, b, m, g) {
        function k(a) {
            E(a.type, a);
            H && j.jwInstreamDestroy(!1, D)
        }

        function q(a) {
            if (a.newstate !== H.state) switch (H.state = a.newstate, H.state) {
                case e.PLAYING:
                    D.jwInstreamPlay();
                    break;
                case e.PAUSED:
                    D.jwInstreamPause()
            }
        }

        function s(a) {
            E(a.type, a);
            n()
        }

        function v(a) {
            E(a.type, a)
        }

        function C(a) {
            b.sendEvent(a.type, a);
            E(f.JWPLAYER_FULLSCREEN, {
                fullscreen: a.jwstate
            })
        }

        function r() {
            P && P.releaseState(D.jwGetState());
            K.play()
        }

        function n() {
            if (w && A + 1 < w.length) {
                A++;
                var b = w[A];
                z = new h.item(b);
                H.setPlaylist([b]);
                var c;
                F && (c = F[A]);
                L = a.extend(p, c);
                K.load(H.playlist[0]);
                G.reset(L.skipoffset || -1);
                T = setTimeout(function () {
                    E(f.JWPLAYER_PLAYLIST_ITEM, {
                        index: A
                    }, !0)
                }, 0)
            } else T = setTimeout(function () {
                E(f.JWPLAYER_PLAYLIST_COMPLETE, {}, !0);
                j.jwInstreamDestroy(!0, D)
            }, 0)
        }

        function y(a) {
            a.width && a.height && (P && P.releaseState(D.jwGetState()), m.resizeMedia())
        }

        function E(a, b) {
            b = b || {};
            p.tag && !b.tag && (b.tag = p.tag);
            D.sendEvent(a, b)
        }

        function u() {
            N &&
                N.redraw();
            P && P.redraw()
        }
        var p = {
                controlbarseekable: "never",
                controlbarpausable: !0,
                controlbarstoppable: !0,
                loadingmessage: "Loading ad",
                playlistclickable: !0,
                skipoffset: null,
                tag: null
            },
            z, w, A = 0,
            F, L = {
                controlbarseekable: "never",
                controlbarpausable: !1,
                controlbarstoppable: !1
            },
            G, t, x, M, J, H, K, N, P, S, T = -1,
            D = a.extend(this, new f.eventdispatcher);
        j.jwAddEventListener(f.JWPLAYER_RESIZE, u);
        j.jwAddEventListener(f.JWPLAYER_FULLSCREEN, function (b) {
            v(b);
            H && (u(), !b.fullscreen && a.isIPad() && (H.state === e.PAUSED ? P.show(!0) : H.state ===
                e.PLAYING && P.hide()))
        });
        D.init = function () {
            t = g.detachMedia();
            K = new(d.html5.chooseProvider({}))(b.id);
            K.addGlobalListener(v);
            K.addEventListener(f.JWPLAYER_MEDIA_META, y);
            K.addEventListener(f.JWPLAYER_MEDIA_COMPLETE, n);
            K.addEventListener(f.JWPLAYER_MEDIA_BUFFER_FULL, r);
            K.addEventListener(f.JWPLAYER_MEDIA_ERROR, k);
            K.addEventListener(f.JWPLAYER_PLAYER_STATE, q);
            K.addEventListener(f.JWPLAYER_MEDIA_TIME, function (a) {
                G && G.updateSkipTime(a.position, a.duration)
            });
            K.attachMedia();
            K.mute(b.mute);
            K.volume(b.volume);
            H = new l.model({}, K);
            H.setVolume(b.volume);
            H.setFullscreen(b.fullscreen);
            H.setMute(b.mute);
            H.addEventListener("fullscreenchange", C);
            J = b.playlist[b.item];
            x = t.currentTime;
            g.checkBeforePlay() || 0 === x && !b.getVideo().checkComplete() ? (x = 0, M = e.PLAYING) : M =
                b.getVideo().checkComplete() ? e.IDLE : j.jwGetState() === e.IDLE ? e.IDLE : e.PLAYING;
            M === e.PLAYING && t.pause();
            P = new l.display(D);
            P.forceState(e.BUFFERING);
            S = document.createElement("div");
            S.id = D.id + "_instream_container";
            a.css.style(S, {
                width: "100%",
                height: "100%"
            });
            S.appendChild(P.element());
            N = new l.controlbar(D, {
                fullscreen: b.fullscreen
            });
            N.instreamMode(!0);
            S.appendChild(N.element());
            j.jwGetControls() ? (N.show(), P.show()) : (N.hide(), P.hide());
            m.setupInstream(S, N, P, H);
            u();
            D.jwInstreamSetText(p.loadingmessage)
        };
        D.load = function (b, d) {
            if (a.isAndroid(2.3)) k({
                type: f.JWPLAYER_ERROR,
                message: "Error loading instream: Cannot play instream on Android 2.3"
            });
            else {
                E(f.JWPLAYER_PLAYLIST_ITEM, {
                    index: A
                }, !0);
                var g = 10 + a.bounds(S.parentNode).bottom - a.bounds(N.element()).top;
                c.isArray(b) &&
                    (d && (F = d, d = d[A]), w = b, b = w[A]);
                L = a.extend(p, d);
                z = new h.item(b);
                H.setPlaylist([b]);
                G = new l.adskipbutton(j.id, g, L.skipMessage, L.skipText);
                G.addEventListener(f.JWPLAYER_AD_SKIPPED, s);
                G.reset(L.skipoffset || -1);
                j.jwGetControls() ? G.show() : G.hide();
                g = G.element();
                S.appendChild(g);
                H.addEventListener(f.JWPLAYER_ERROR, k);
                P.setAlternateClickHandler(function (a) {
                    a = a || {};
                    a.hasControls = !!j.jwGetControls();
                    E(f.JWPLAYER_INSTREAM_CLICK, a);
                    H.state === e.PAUSED ? a.hasControls && D.jwInstreamPlay() : D.jwInstreamPause()
                });
                a.isMSIE() &&
                    t.parentElement.addEventListener("click", P.clickHandler);
                m.addEventListener(f.JWPLAYER_AD_SKIPPED, s);
                K.load(H.playlist[0])
            }
        };
        D.jwInstreamDestroy = function (c) {
            if (H) {
                H.removeEventListener("fullscreenchange", C);
                clearTimeout(T);
                T = -1;
                K.detachMedia();
                g.attachMedia();
                if (M !== e.IDLE) {
                    var d = a.extend({}, J);
                    d.starttime = x;
                    b.getVideo().load(d)
                } else b.getVideo().stop();
                D.resetEventListeners();
                K.resetEventListeners();
                H.resetEventListeners();
                if (N) try {
                    N.element().parentNode.removeChild(N.element())
                } catch (h) {}
                P && (t &&
                    t.parentElement && t.parentElement.removeEventListener("click", P.clickHandler), P.revertAlternateClickHandler()
                );
                E(f.JWPLAYER_INSTREAM_DESTROYED, {
                    reason: c ? "complete" : "destroyed"
                }, !0);
                M === e.PLAYING && t.play();
                m.destroyInstream(K.isAudioFile());
                H = null
            }
        };
        D.jwInstreamAddEventListener = function (a, b) {
            D.addEventListener(a, b)
        };
        D.jwInstreamRemoveEventListener = function (a, b) {
            D.removeEventListener(a, b)
        };
        D.jwInstreamPlay = function () {
            K.play(!0);
            b.state = e.PLAYING;
            P.show()
        };
        D.jwInstreamPause = function () {
            K.pause(!0);
            b.state =
                e.PAUSED;
            j.jwGetControls() && (P.show(), N.show())
        };
        D.jwInstreamSeek = function (a) {
            K.seek(a)
        };
        D.jwInstreamSetText = function (a) {
            N.setText(a)
        };
        D.jwInstreamState = function () {
            return H.state
        };
        D.setControls = function (a) {
            a ? G.show() : G.hide()
        };
        D.jwPlay = function () {
            "true" === L.controlbarpausable.toString().toLowerCase() && D.jwInstreamPlay()
        };
        D.jwPause = function () {
            "true" === L.controlbarpausable.toString().toLowerCase() && D.jwInstreamPause()
        };
        D.jwStop = function () {
            "true" === L.controlbarstoppable.toString().toLowerCase() && (j.jwInstreamDestroy(!1,
                D), j.jwStop())
        };
        D.jwSeek = function (a) {
            switch (L.controlbarseekable.toLowerCase()) {
                case "always":
                    D.jwInstreamSeek(a);
                    break;
                case "backwards":
                    H.position > a && D.jwInstreamSeek(a)
            }
        };
        D.jwSeekDrag = function (a) {
            H.seekDrag(a)
        };
        D.jwGetPosition = function () {};
        D.jwGetDuration = function () {};
        D.jwGetWidth = j.jwGetWidth;
        D.jwGetHeight = j.jwGetHeight;
        D.jwGetFullscreen = j.jwGetFullscreen;
        D.jwSetFullscreen = j.jwSetFullscreen;
        D.jwGetVolume = function () {
            return b.volume
        };
        D.jwSetVolume = function (a) {
            H.setVolume(a);
            j.jwSetVolume(a)
        };
        D.jwGetMute =
            function () {
                return b.mute
            };
        D.jwSetMute = function (a) {
            H.setMute(a);
            j.jwSetMute(a)
        };
        D.jwGetState = function () {
            return !H ? e.IDLE : H.state
        };
        D.jwGetPlaylist = function () {
            return [z]
        };
        D.jwGetPlaylistIndex = function () {
            return 0
        };
        D.jwGetStretching = function () {
            return b.config.stretching
        };
        D.jwAddEventListener = function (a, b) {
            D.addEventListener(a, b)
        };
        D.jwRemoveEventListener = function (a, b) {
            D.removeEventListener(a, b)
        };
        D.jwSetCurrentQuality = function () {};
        D.jwGetQualityLevels = function () {
            return []
        };
        D.jwGetControls = function () {
            return j.jwGetControls()
        };
        D.skin = j.skin;
        D.id = j.id + "_instream";
        return D
    }
})(window.jwplayer);
(function (d) {
    var l = d.utils,
        a = l.css,
        c = d.events.state,
        f = d.html5.logo = function (e, h) {
            function j(a) {
                l.exists(a) && a.stopPropagation && a.stopPropagation();
                if (!s || !g.link) b.jwGetState() === c.IDLE || b.jwGetState() === c.PAUSED ? b.jwPlay() : b.jwPause();
                s && g.link && (b.jwPause(), b.jwSetFullscreen(!1), window.open(g.link, g.linktarget))
            }
            var b = e,
                m = b.id + "_logo",
                g, k, q = f.defaults,
                s = !1;
            this.resize = function () {};
            this.element = function () {
                return k
            };
            this.offset = function (b) {
                a("#" + m + " ", {
                    "margin-bottom": b
                })
            };
            this.position = function () {
                return g.position
            };
            this.margin = function () {
                return parseInt(g.margin, 10)
            };
            this.hide = function (a) {
                if (g.hide || a) s = !1, k.style.visibility = "hidden", k.style.opacity = 0
            };
            this.show = function () {
                s = !0;
                k.style.visibility = "visible";
                k.style.opacity = 1
            };
            var v = "o";
            b.edition && (v = b.edition(), v = "pro" === v ? "p" : "premium" === v ? "r" : "ads" === v ? "a" :
                "free" === v ? "f" : "o");
            if ("o" === v || "f" === v) q.link = "http://www.longtailvideo.com/jwpabout/?a\x3dl\x26v\x3d" + d.version +
                "\x26m\x3dh\x26e\x3d" + v;
            g = l.extend({}, q, h);
            g.hide = "true" === g.hide.toString();
            k = document.createElement("img");
            k.className = "jwlogo";
            k.id = m;
            if (g.file) {
                var q = /(\w+)-(\w+)/.exec(g.position),
                    v = {},
                    C = g.margin;
                3 === q.length ? (v[q[1]] = C, v[q[2]] = C) : v.top = v.right = C;
                a("#" + m + " ", v);
                k.src = (g.prefix ? g.prefix : "") + g.file;
                l.isMobile() ? (new l.touch(k)).addEventListener(l.touchEvents.TAP, j) : k.onclick = j
            } else k.style.display = "none";
            return this
        };
    f.defaults = {
        prefix: l.repo(),
        file: "logo.png",
        linktarget: "_top",
        margin: 8,
        hide: !1,
        position: "top-right"
    };
    a(".jwlogo", {
        cursor: "pointer",
        position: "absolute"
    })
})(jwplayer);
(function (d) {
    var l = d.html5,
        a = d.utils,
        c = a.css;
    l.menu = function (d, e, h, j) {
        function b(a) {
            return !a || !a.src ? {} : {
                background: "url(" + a.src + ") no-repeat left",
                "background-size": a.width + "px " + a.height + "px"
            }
        }

        function m(a, b) {
            return function () {
                r(a);
                q && q(b)
            }
        }

        function g(a, b) {
            var c = document.createElement("div");
            a && (c.className = a);
            b && b.appendChild(c);
            return c
        }

        function k(a) {
            return (a = h.getSkinElement("tooltip", a)) ? a : {
                width: 0,
                height: 0,
                src: void 0
            }
        }
        var q = j,
            s = new l.overlay(e + "_overlay", h);
        j = a.extend({
            fontcase: void 0,
            fontcolor: "#cccccc",
            fontsize: 11,
            fontweight: void 0,
            activecolor: "#ffffff",
            overcolor: "#ffffff"
        }, h.getComponentSettings("tooltip"));
        var v, C = [];
        this.element = function () {
            return s.element()
        };
        this.addOption = function (b, c) {
            var d = g("jwoption", v);
            d.id = e + "_option_" + c;
            d.innerHTML = b;
            a.isMobile() ? (new a.touch(d)).addEventListener(a.touchEvents.TAP, m(C.length, c)) : d.addEventListener(
                "click", m(C.length, c));
            C.push(d)
        };
        this.clearOptions = function () {
            for (; 0 < C.length;) v.removeChild(C.pop())
        };
        var r = this.setActive = function (a) {
            for (var b = 0; b < C.length; b++) {
                var c =
                    C[b];
                c.className = c.className.replace(" active", "");
                b === a && (c.className += " active")
            }
        };
        this.show = s.show;
        this.hide = s.hide;
        this.offsetX = s.offsetX;
        this.positionX = s.positionX;
        this.constrainX = s.constrainX;
        v = g("jwmenu");
        v.id = e;
        var n = k("menuTop" + d);
        d = k("menuOption");
        var y = k("menuOptionOver"),
            E = k("menuOptionActive");
        if (n && n.image) {
            var u = new Image;
            u.src = n.src;
            u.width = n.width;
            u.height = n.height;
            v.appendChild(u)
        }
        d && (n = "#" + e + " .jwoption", c(n, a.extend(b(d), {
            height: d.height,
            color: j.fontcolor,
            "padding-left": d.width,
            font: j.fontweight + " " + j.fontsize + "px Arial,Helvetica,sans-serif",
            "line-height": d.height,
            "text-transform": "upper" === j.fontcase ? "uppercase" : void 0
        })), c(n + ":hover", a.extend(b(y), {
            color: j.overcolor
        })), c(n + ".active", a.extend(b(E), {
            color: j.activecolor
        })));
        s.setContents(v)
    };
    c("." + "jwmenu jwoption".replace(/ /g, " ."), {
        cursor: "pointer",
        "white-space": "nowrap",
        position: "relative"
    })
})(jwplayer);
(function (d) {
    var l = d.html5,
        a = d.utils,
        c = d.events;
    l.model = function (f, e) {
        function h(a) {
            var b = s[a.type];
            if (b && b.length) {
                for (var c = !1, d = 0; d < b.length; d++) {
                    var e = b[d].split("-\x3e"),
                        f = e[0],
                        e = e[1] || f;
                    j[e] !== a[f] && (j[e] = a[f], c = !0)
                }
                c && j.sendEvent(a.type, a)
            } else j.sendEvent(a.type, a)
        }
        var j = this,
            b, m = a.getCookies(),
            g = {
                controlbar: {},
                display: {}
            },
            k = a.noop,
            q = {
                autostart: !1,
                controls: !0,
                fullscreen: !1,
                height: 320,
                mobilecontrols: !1,
                mute: !1,
                playlist: [],
                playlistposition: "none",
                playlistsize: 180,
                playlistlayout: "extended",
                repeat: !1,
                stretching: a.stretching.UNIFORM,
                width: 480,
                volume: 90
            },
            s = {};
        s[c.JWPLAYER_MEDIA_MUTE] = ["mute"];
        s[c.JWPLAYER_MEDIA_VOLUME] = ["volume"];
        s[c.JWPLAYER_PLAYER_STATE] = ["newstate-\x3estate"];
        s[c.JWPLAYER_MEDIA_BUFFER] = ["bufferPercent-\x3ebuffer"];
        s[c.JWPLAYER_MEDIA_TIME] = ["position", "duration"];
        j.setVideoProvider = function (a) {
            if (b) {
                b.removeGlobalListener(h);
                var c = b.getContainer();
                c && (b.remove(), a.setContainer(c))
            }
            b = a;
            b.volume(j.volume);
            b.mute(j.mute);
            b.addGlobalListener(h)
        };
        j.destroy = function () {
            b && (b.removeGlobalListener(h),
                b.destroy())
        };
        j.getVideo = function () {
            return b
        };
        j.seekDrag = function (a) {
            b.seekDrag(a)
        };
        j.setFullscreen = function (a) {
            a = !!a;
            a !== j.fullscreen && (j.fullscreen = a, j.sendEvent(c.JWPLAYER_FULLSCREEN, {
                fullscreen: a
            }))
        };
        j.setPlaylist = function (a) {
            j.playlist = d.playlist.filterPlaylist(a, j.androidhls);
            0 === j.playlist.length ? j.sendEvent(c.JWPLAYER_ERROR, {
                message: "Error loading playlist: No playable sources found"
            }) : (j.sendEvent(c.JWPLAYER_PLAYLIST_LOADED, {
                playlist: d(j.id).getPlaylist()
            }), j.item = -1, j.setItem(0))
        };
        j.setItem =
            function (a) {
                var b = !1;
                a === j.playlist.length || -1 > a ? (a = 0, b = !0) : a = -1 === a || a > j.playlist.length ? j
                    .playlist.length - 1 : a;
                if (b || a !== j.item) j.item = a, j.sendEvent(c.JWPLAYER_PLAYLIST_ITEM, {
                        index: j.item
                    }), b = j.playlist[a], a = l.chooseProvider(b && b.sources && b.sources[0]), k instanceof a ||
                    (k = e || new a(j.id), j.setVideoProvider(k)), k.init && k.init(b)
            };
        j.setVolume = function (e) {
            j.mute && 0 < e && j.setMute(!1);
            e = Math.round(e);
            j.mute || a.saveCookie("volume", e);
            h({
                type: c.JWPLAYER_MEDIA_VOLUME,
                volume: e
            });
            b.volume(e)
        };
        j.setMute = function (e) {
            a.exists(e) ||
                (e = !j.mute);
            a.saveCookie("mute", e);
            h({
                type: c.JWPLAYER_MEDIA_MUTE,
                mute: e
            });
            b.mute(e)
        };
        j.componentConfig = function (a) {
            return g[a]
        };
        a.extend(j, new c.eventdispatcher);
        var v = j,
            C = a.extend({}, q, m, f);
        a.foreach(C, function (b, c) {
            C[b] = a.serialize(c)
        });
        v.config = C;
        a.extend(j, {
            id: f.id,
            state: c.state.IDLE,
            duration: -1,
            position: 0,
            buffer: 0
        }, j.config);
        j.playlist = [];
        j.setItem(0)
    }
})(jwplayer);
(function (d) {
    var l = d.utils,
        a = l.css,
        c = l.transitionStyle,
        f = "top",
        e = "bottom",
        h = "right",
        j = "left",
        b = {
            fontcase: void 0,
            fontcolor: "#ffffff",
            fontsize: 12,
            fontweight: void 0,
            activecolor: "#ffffff",
            overcolor: "#ffffff"
        };
    d.html5.overlay = function (c, d, k) {
        function q(a) {
            return "#" + y + (a ? " ." + a : "")
        }

        function s(a, b) {
            var c = document.createElement("div");
            a && (c.className = a);
            b && b.appendChild(c);
            return c
        }

        function v(b, c) {
            var e;
            e = (e = E.getSkinElement("tooltip", b)) ? e : {
                width: 0,
                height: 0,
                src: "",
                image: void 0,
                ready: !1
            };
            var d = s(c, p);
            a.style(d,
                C(e));
            return [d, e]
        }

        function C(a) {
            return {
                background: "url(" + a.src + ") center",
                "background-size": a.width + "px " + a.height + "px"
            }
        }

        function r(b, c) {
            c || (c = "");
            var d = v("cap" + b + c, "jwborder jw" + b + (c ? c : "")),
                g = d[0],
                d = d[1],
                k = l.extend(C(d), {
                    width: b === j || c === j || b === h || c === h ? d.width : void 0,
                    height: b === f || c === f || b === e || c === e ? d.height : void 0
                });
            k[b] = b === e && !u || b === f && u ? w.height : 0;
            c && (k[c] = 0);
            a.style(g, k);
            g = {};
            k = {};
            d = {
                left: d.width,
                right: d.width,
                top: (u ? w.height : 0) + d.height,
                bottom: (u ? 0 : w.height) + d.height
            };
            c && (g[c] = d[c], g[b] =
                0, k[b] = d[b], k[c] = 0, a(q("jw" + b), g), a(q("jw" + c), k), F[b] = d[b], F[c] = d[c])
        }
        var n = this,
            y = c,
            E = d,
            u = k,
            p, z, w, A;
        c = l.extend({}, b, E.getComponentSettings("tooltip"));
        var F = {};
        n.element = function () {
            return p
        };
        n.setContents = function (a) {
            l.empty(z);
            z.appendChild(a)
        };
        n.positionX = function (b) {
            a.style(p, {
                left: Math.round(b)
            })
        };
        n.constrainX = function (b, c) {
            if (n.showing && 0 !== b.width && n.offsetX(0)) {
                c && a.unblock();
                var d = l.bounds(p);
                0 !== d.width && (d.right > b.right ? n.offsetX(b.right - d.right) : d.left < b.left && n.offsetX(
                    b.left - d.left))
            }
        };
        n.offsetX = function (b) {
            b = Math.round(b);
            var c = p.clientWidth;
            0 !== c && (a.style(p, {
                "margin-left": Math.round(-c / 2) + b
            }), a.style(A, {
                "margin-left": Math.round(-w.width / 2) - b
            }));
            return c
        };
        n.borderWidth = function () {
            return F.left
        };
        n.show = function () {
            n.showing = !0;
            a.style(p, {
                opacity: 1,
                visibility: "visible"
            })
        };
        n.hide = function () {
            n.showing = !1;
            a.style(p, {
                opacity: 0,
                visibility: "hidden"
            })
        };
        p = s(".jwoverlay".replace(".", ""));
        p.id = y;
        d = v("arrow", "jwarrow");
        A = d[0];
        w = d[1];
        a.style(A, {
            position: "absolute",
            bottom: u ? void 0 : 0,
            top: u ? 0 : void 0,
            width: w.width,
            height: w.height,
            left: "50%"
        });
        r(f, j);
        r(e, j);
        r(f, h);
        r(e, h);
        r(j);
        r(h);
        r(f);
        r(e);
        d = v("background", "jwback");
        a.style(d[0], {
            left: F.left,
            right: F.right,
            top: F.top,
            bottom: F.bottom
        });
        z = s("jwcontents", p);
        a(q("jwcontents") + " *", {
            color: c.fontcolor,
            font: c.fontweight + " " + c.fontsize + "px Arial,Helvetica,sans-serif",
            "text-transform": "upper" === c.fontcase ? "uppercase" : void 0
        });
        u && l.transform(q("jwarrow"), "rotate(180deg)");
        a.style(p, {
            padding: F.top + 1 + "px " + F.right + "px " + (F.bottom + 1) + "px " + F.left + "px"
        });
        n.showing = !1
    };
    a(".jwoverlay", {
        position: "absolute",
        visibility: "hidden",
        opacity: 0
    });
    a(".jwoverlay .jwcontents", {
        position: "relative",
        "z-index": 1
    });
    a(".jwoverlay .jwborder", {
        position: "absolute",
        "background-size": "100% 100%"
    }, !0);
    a(".jwoverlay .jwback", {
        position: "absolute",
        "background-size": "100% 100%"
    });
    c(".jwoverlay", "opacity .25s, visibility .25s")
})(jwplayer);
(function (d) {
    var l = d.html5,
        a = d.utils;
    l.player = function (c) {
        function f() {
            for (var a = m.playlist, b = [], c = 0; c < a.length; c++) b.push(e(a[c]));
            return b
        }

        function e(b) {
            var c = {
                description: b.description,
                file: b.file,
                image: b.image,
                mediaid: b.mediaid,
                title: b.title
            };
            a.foreach(b, function (a, b) {
                c[a] = b
            });
            c.sources = [];
            c.tracks = [];
            0 < b.sources.length && a.foreach(b.sources, function (a, b) {
                c.sources.push({
                    file: b.file,
                    type: b.type ? b.type : void 0,
                    label: b.label,
                    "default": b["default"] ? !0 : !1
                })
            });
            0 < b.tracks.length && a.foreach(b.tracks, function (a,
                b) {
                c.tracks.push({
                    file: b.file,
                    kind: b.kind ? b.kind : void 0,
                    label: b.label,
                    "default": b["default"] ? !0 : !1
                })
            });
            !b.file && 0 < b.sources.length && (c.file = b.sources[0].file);
            return c
        }

        function h() {
            b.jwPlay = k.play;
            b.jwPause = k.pause;
            b.jwStop = k.stop;
            b.jwSeek = k.seek;
            b.jwSetVolume = k.setVolume;
            b.jwSetMute = k.setMute;
            b.jwLoad = k.load;
            b.jwPlaylistNext = k.next;
            b.jwPlaylistPrev = k.prev;
            b.jwPlaylistItem = k.item;
            b.jwSetFullscreen = k.setFullscreen;
            b.jwResize = g.resize;
            b.jwSeekDrag = m.seekDrag;
            b.jwGetQualityLevels = k.getQualityLevels;
            b.jwGetCurrentQuality = k.getCurrentQuality;
            b.jwSetCurrentQuality = k.setCurrentQuality;
            b.jwGetAudioTracks = k.getAudioTracks;
            b.jwGetCurrentAudioTrack = k.getCurrentAudioTrack;
            b.jwSetCurrentAudioTrack = k.setCurrentAudioTrack;
            b.jwGetCaptionsList = k.getCaptionsList;
            b.jwGetCurrentCaptions = k.getCurrentCaptions;
            b.jwSetCurrentCaptions = k.setCurrentCaptions;
            b.jwGetSafeRegion = g.getSafeRegion;
            b.jwForceState = g.forceState;
            b.jwReleaseState = g.releaseState;
            b.jwGetPlaylistIndex = j("item");
            b.jwGetPosition = j("position");
            b.jwGetDuration =
                j("duration");
            b.jwGetBuffer = j("buffer");
            b.jwGetWidth = j("width");
            b.jwGetHeight = j("height");
            b.jwGetFullscreen = j("fullscreen");
            b.jwGetVolume = j("volume");
            b.jwGetMute = j("mute");
            b.jwGetState = j("state");
            b.jwGetStretching = j("stretching");
            b.jwGetPlaylist = f;
            b.jwGetControls = j("controls");
            b.jwDetachMedia = k.detachMedia;
            b.jwAttachMedia = k.attachMedia;
            b.jwPlayAd = function (a) {
                var c = d(b.id).plugins;
                c.vast && c.vast.jwPlayAd(a)
            };
            b.jwPauseAd = function () {
                var a = d(b.id).plugins;
                a.googima && a.googima.jwPauseAd()
            };
            b.jwDestroyGoogima =
                function () {
                    var a = d(b.id).plugins;
                    a.googima && a.googima.jwDestroyGoogima()
                };
            b.jwInitInstream = function () {
                b.jwInstreamDestroy();
                s = new l.instream(b, m, g, k);
                s.init()
            };
            b.jwLoadItemInstream = function (a, b) {
                if (!s) throw "Instream player undefined";
                s.load(a, b)
            };
            b.jwLoadArrayInstream = function (a, b) {
                if (!s) throw "Instream player undefined";
                s.load(a, b)
            };
            b.jwSetControls = function (a) {
                g.setControls(a);
                s && s.setControls(a)
            };
            b.jwInstreamPlay = function () {
                s && s.jwInstreamPlay()
            };
            b.jwInstreamPause = function () {
                s && s.jwInstreamPause()
            };
            b.jwInstreamState = function () {
                return s ? s.jwInstreamState() : ""
            };
            b.jwInstreamDestroy = function (a, b) {
                if (b = b || s) b.jwInstreamDestroy(a || !1), b === s && (s = void 0)
            };
            b.jwInstreamAddEventListener = function (a, b) {
                s && s.jwInstreamAddEventListener(a, b)
            };
            b.jwInstreamRemoveEventListener = function (a, b) {
                s && s.jwInstreamRemoveEventListener(a, b)
            };
            b.jwPlayerDestroy = function () {
                k && k.stop();
                g && g.destroy();
                m && m.destroy();
                q && (q.resetEventListeners(), q.destroy())
            };
            b.jwInstreamSetText = function (a) {
                s && s.jwInstreamSetText(a)
            };
            b.jwIsBeforePlay =
                function () {
                    return k.checkBeforePlay()
                };
            b.jwIsBeforeComplete = function () {
                return m.getVideo().checkComplete()
            };
            b.jwSetCues = g.addCues;
            b.jwAddEventListener = k.addEventListener;
            b.jwRemoveEventListener = k.removeEventListener;
            b.jwDockAddButton = g.addButton;
            b.jwDockRemoveButton = g.removeButton
        }

        function j(a) {
            return function () {
                return m[a]
            }
        }
        var b = this,
            m, g, k, q, s;
        m = new l.model(c);
        b.id = m.id;
        b._model = m;
        a.css.block(b.id);
        g = new l.view(b, m);
        k = new l.controller(m, g);
        h();
        b.initializeAPI = h;
        q = new l.setup(m, g);
        q.addEventListener(d.events.JWPLAYER_READY,
            function (c) {
                k.playerReady(c);
                a.css.unblock(b.id)
            });
        q.addEventListener(d.events.JWPLAYER_ERROR, function (c) {
            a.css.unblock(b.id);
            d(b.id).dispatchEvent(d.events.JWPLAYER_SETUP_ERROR, c)
        });
        q.start()
    }
})(window.jwplayer);
(function (d) {
    var l = {
            size: 180,
            backgroundcolor: "#333333",
            fontcolor: "#999999",
            overcolor: "#CCCCCC",
            activecolor: "#CCCCCC",
            titlecolor: "#CCCCCC",
            titleovercolor: "#FFFFFF",
            titleactivecolor: "#FFFFFF",
            fontweight: "normal",
            titleweight: "normal",
            fontsize: 11,
            titlesize: 13
        },
        a = d.html5,
        c = d.events,
        f = d.utils,
        e = f.css,
        h = f.isMobile();
    a.playlistcomponent = function (d, b) {
        function m(a) {
            return "#" + C.id + (a ? " ." + a : "")
        }

        function g(a, b) {
            var c = document.createElement(a);
            b && (c.className = b);
            return c
        }

        function k(a) {
            return function () {
                u = a;
                q.jwPlaylistItem(a);
                q.jwPlay(!0)
            }
        }
        var q = d,
            s = q.skin,
            v = f.extend({}, l, q.skin.getComponentSettings("playlist"), b),
            C, r, n, y, E = -1,
            u, p, z = 76,
            w = {
                background: void 0,
                divider: void 0,
                item: void 0,
                itemOver: void 0,
                itemImage: void 0,
                itemActive: void 0
            },
            A, F = this;
        F.element = function () {
            return C
        };
        F.redraw = function () {
            p && p.redraw()
        };
        F.show = function () {
            f.show(C)
        };
        F.hide = function () {
            f.hide(C)
        };
        C = g("div", "jwplaylist");
        C.id = q.id + "_jwplayer_playlistcomponent";
        A = "basic" === q._model.playlistlayout;
        r = g("div", "jwlistcontainer");
        C.appendChild(r);
        f.foreach(w,
            function (a) {
                w[a] = s.getSkinElement("playlist", a)
            });
        A && (z = 32);
        w.divider && (z += w.divider.height);
        var L = 0,
            G = 0,
            t = 0;
        f.clearCss(m());
        e(m(), {
            "background-color": v.backgroundcolor
        });
        e(m("jwlist"), {
            "background-image": w.background ? " url(" + w.background.src + ")" : ""
        });
        e(m("jwlist *"), {
            color: v.fontcolor,
            font: v.fontweight + " " + v.fontsize + "px Arial, Helvetica, sans-serif"
        });
        w.itemImage ? (L = (z - w.itemImage.height) / 2 + "px ", G = w.itemImage.width, t = w.itemImage.height) :
            (G = 4 * z / 3, t = z);
        w.divider && e(m("jwplaylistdivider"), {
            "background-image": "url(" +
                w.divider.src + ")",
            "background-size": "100% " + w.divider.height + "px",
            width: "100%",
            height: w.divider.height
        });
        e(m("jwplaylistimg"), {
            height: t,
            width: G,
            margin: L ? L + "0 " + L + L : "0 5px 0 0"
        });
        e(m("jwlist li"), {
            "background-image": w.item ? "url(" + w.item.src + ")" : "",
            height: z,
            overflow: "hidden",
            "background-size": "100% " + z + "px",
            cursor: "pointer"
        });
        L = {
            overflow: "hidden"
        };
        "" !== v.activecolor && (L.color = v.activecolor);
        w.itemActive && (L["background-image"] = "url(" + w.itemActive.src + ")");
        e(m("jwlist li.active"), L);
        e(m("jwlist li.active .jwtitle"), {
            color: v.titleactivecolor
        });
        e(m("jwlist li.active .jwdescription"), {
            color: v.activecolor
        });
        L = {
            overflow: "hidden"
        };
        "" !== v.overcolor && (L.color = v.overcolor);
        w.itemOver && (L["background-image"] = "url(" + w.itemOver.src + ")");
        h || (e(m("jwlist li:hover"), L), e(m("jwlist li:hover .jwtitle"), {
            color: v.titleovercolor
        }), e(m("jwlist li:hover .jwdescription"), {
            color: v.overcolor
        }));
        e(m("jwtextwrapper"), {
            height: z,
            position: "relative"
        });
        e(m("jwtitle"), {
            overflow: "hidden",
            display: "inline-block",
            height: A ? z : 20,
            color: v.titlecolor,
            "font-size": v.titlesize,
            "font-weight": v.titleweight,
            "margin-top": A ? "0 10px" : 10,
            "margin-left": 10,
            "margin-right": 10,
            "line-height": A ? z : 20
        });
        e(m("jwdescription"), {
            display: "block",
            "font-size": v.fontsize,
            "line-height": 18,
            "margin-left": 10,
            "margin-right": 10,
            overflow: "hidden",
            height: 36,
            position: "relative"
        });
        q.jwAddEventListener(c.JWPLAYER_PLAYLIST_LOADED, function () {
            r.innerHTML = "";
            for (var b = q.jwGetPlaylist(), c = [], d = 0; d < b.length; d++) b[d]["ova.hidden"] || c.push(
                b[d]);
            if (n = c) {
                b = g("ul", "jwlist");
                b.id = C.id + "_ul" +
                    Math.round(1E7 * Math.random());
                y = b;
                for (b = 0; b < n.length; b++) {
                    var j = b,
                        c = n[j],
                        d = g("li", "jwitem"),
                        l = void 0;
                    d.id = y.id + "_item_" + j;
                    0 < j ? (l = g("div", "jwplaylistdivider"), d.appendChild(l)) : (j = w.divider ? w.divider
                        .height : 0, d.style.height = z - j + "px", d.style["background-size"] =
                        "100% " + (z - j) + "px");
                    j = g("div", "jwplaylistimg jwfill");
                    l = void 0;
                    c["playlist.image"] && w.itemImage ? l = c["playlist.image"] : c.image && w.itemImage ?
                        l = c.image : w.itemImage && (l = w.itemImage.src);
                    l && !A && (e("#" + d.id + " .jwplaylistimg", {
                            "background-image": l
                        }),
                        d.appendChild(j));
                    j = g("div", "jwtextwrapper");
                    l = g("span", "jwtitle");
                    l.innerHTML = c && c.title ? c.title : "";
                    j.appendChild(l);
                    c.description && !A && (l = g("span", "jwdescription"), l.innerHTML = c.description,
                        j.appendChild(l));
                    d.appendChild(j);
                    c = d;
                    h ? (new f.touch(c)).addEventListener(f.touchEvents.TAP, k(b)) : c.onclick = k(b);
                    y.appendChild(c)
                }
                E = q.jwGetPlaylistIndex();
                r.appendChild(y);
                p = new a.playlistslider(C.id + "_slider", q.skin, C, y)
            }
        });
        q.jwAddEventListener(c.JWPLAYER_PLAYLIST_ITEM, function (a) {
            0 <= E && (document.getElementById(y.id +
                "_item_" + E).className = "jwitem", E = a.index);
            document.getElementById(y.id + "_item_" + a.index).className = "jwitem active";
            a = q.jwGetPlaylistIndex();
            a !== u && (u = -1, p && p.visible() && p.thumbPosition(a / (q.jwGetPlaylist().length - 1)))
        });
        q.jwAddEventListener(c.JWPLAYER_RESIZE, function () {
            F.redraw()
        });
        return this
    };
    e(".jwplaylist", {
        position: "absolute",
        width: "100%",
        height: "100%"
    });
    f.dragStyle(".jwplaylist", "none");
    e(".jwplaylist .jwplaylistimg", {
        position: "relative",
        width: "100%",
        "float": "left",
        margin: "0 5px 0 0",
        background: "#000",
        overflow: "hidden"
    });
    e(".jwplaylist .jwlist", {
        position: "absolute",
        width: "100%",
        "list-style": "none",
        margin: 0,
        padding: 0,
        overflow: "hidden"
    });
    e(".jwplaylist .jwlistcontainer", {
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        height: "100%"
    });
    e(".jwplaylist .jwlist li", {
        width: "100%"
    });
    e(".jwplaylist .jwtextwrapper", {
        overflow: "hidden"
    });
    e(".jwplaylist .jwplaylistdivider", {
        position: "absolute"
    });
    h && f.transitionStyle(".jwplaylist .jwlist", "top .35s")
})(jwplayer);
(function (d) {
    function l() {
        var a = [],
            b;
        for (b = 0; b < arguments.length; b++) a.push(".jwplaylist ." + arguments[b]);
        return a.join(",")
    }
    var a = jwplayer.utils,
        c = a.touchEvents,
        f = a.css,
        e = document,
        h = window;
    d.playlistslider = function (d, b, l, g) {
        function k(a) {
            return "#" + z.id + (a ? " ." + a : "")
        }

        function q(a, b, c, d) {
            var g = e.createElement("div");
            a && (g.className = a, b && f(k(a), {
                "background-image": b.src ? b.src : void 0,
                "background-repeat": d ? "repeat-y" : "no-repeat",
                height: d ? void 0 : b.height
            }));
            c && c.appendChild(g);
            return g
        }

        function s(a) {
            return (a =
                u.getSkinElement("playlist", a)) ? a : {
                width: 0,
                height: 0,
                src: void 0
            }
        }

        function v(a) {
            if (x) return a = a ? a : h.event, Z(L - (a.detail ? -1 * a.detail : a.wheelDelta / 40) / 10), a.stopPropagation &&
                a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.cancelBubble = !
                0, a.cancel = !0, !1
        }

        function C(a) {
            0 === a.button && (F = !0);
            e.onselectstart = function () {
                return !1
            };
            h.addEventListener("mousemove", n, !1);
            h.addEventListener("mouseup", E, !1)
        }

        function r(a) {
            Z(L - 2 * a.deltaY / p.clientHeight)
        }

        function n(b) {
            if (F || "click" === b.type) {
                var c =
                    a.bounds(w),
                    d = A.clientHeight / 2;
                Z((b.pageY - c.top - d) / (c.height - d - d))
            }
        }

        function y(a) {
            return function (b) {
                0 < b.button || (Z(L + 0.05 * a), G = setTimeout(function () {
                    t = setInterval(function () {
                        Z(L + 0.05 * a)
                    }, 50)
                }, 500))
            }
        }

        function E() {
            F = !1;
            h.removeEventListener("mousemove", n);
            h.removeEventListener("mouseup", E);
            e.onselectstart = void 0;
            clearTimeout(G);
            clearInterval(t)
        }
        var u = b,
            p = g,
            z, w, A, F, L = 0,
            G, t;
        b = a.isMobile();
        var x = !0,
            M, J, H, K, N, P, S, T, D;
        this.element = function () {
            return z
        };
        this.visible = function () {
            return x
        };
        var W = this.redraw =
            function () {
                clearTimeout(D);
                D = setTimeout(function () {
                    if (p && p.clientHeight) {
                        var a = p.parentNode.clientHeight / p.clientHeight;
                        0 > a && (a = 0);
                        1 < a ? x = !1 : (x = !0, f(k("jwthumb"), {
                            height: Math.max(w.clientHeight * a, N.height + P.height)
                        }));
                        f(k(), {
                            visibility: x ? "visible" : "hidden"
                        });
                        p && (p.style.width = x ? p.parentElement.clientWidth - H.width + "px" : "")
                    } else D = setTimeout(W, 10)
                }, 0)
            },
            Z = this.thumbPosition = function (a) {
                isNaN(a) && (a = 0);
                L = Math.max(0, Math.min(1, a));
                f(k("jwthumb"), {
                    top: S + (w.clientHeight - A.clientHeight) * L
                });
                g && (g.style.top =
                    Math.min(0, z.clientHeight - g.scrollHeight) * L + "px")
            };
        z = q("jwslider", null, l);
        z.id = d;
        d = new a.touch(p);
        b ? d.addEventListener(c.DRAG, r) : (z.addEventListener("mousedown", C, !1), z.addEventListener("click",
            n, !1));
        M = s("sliderCapTop");
        J = s("sliderCapBottom");
        H = s("sliderRail");
        d = s("sliderRailCapTop");
        l = s("sliderRailCapBottom");
        K = s("sliderThumb");
        N = s("sliderThumbCapTop");
        P = s("sliderThumbCapBottom");
        S = M.height;
        T = J.height;
        f(k(), {
            width: H.width
        });
        f(k("jwrail"), {
            top: S,
            bottom: T
        });
        f(k("jwthumb"), {
            top: S
        });
        M = q("jwslidertop",
            M, z);
        J = q("jwsliderbottom", J, z);
        w = q("jwrail", null, z);
        A = q("jwthumb", null, z);
        b || (M.addEventListener("mousedown", y(-1), !1), J.addEventListener("mousedown", y(1), !1));
        q("jwrailtop", d, w);
        q("jwrailback", H, w, !0);
        q("jwrailbottom", l, w);
        f(k("jwrailback"), {
            top: d.height,
            bottom: l.height
        });
        q("jwthumbtop", N, A);
        q("jwthumbback", K, A, !0);
        q("jwthumbbottom", P, A);
        f(k("jwthumbback"), {
            top: N.height,
            bottom: P.height
        });
        W();
        p && !b && (p.addEventListener("mousewheel", v, !1), p.addEventListener("DOMMouseScroll", v, !1));
        return this
    };
    f(l("jwslider"), {
        position: "absolute",
        height: "100%",
        visibility: "hidden",
        right: 0,
        top: 0,
        cursor: "pointer",
        "z-index": 1,
        overflow: "hidden"
    });
    f(l("jwslider") + " *", {
        position: "absolute",
        width: "100%",
        "background-position": "center",
        "background-size": "100% 100%",
        overflow: "hidden"
    });
    f(l("jwslidertop", "jwrailtop", "jwthumbtop"), {
        top: 0
    });
    f(l("jwsliderbottom", "jwrailbottom", "jwthumbbottom"), {
        bottom: 0
    })
})(jwplayer.html5);
(function (d) {
    var l = jwplayer.utils,
        a = l.css,
        c = document,
        f = "none";
    d.rightclick = function (a, h) {
        function j(a) {
            var b = c.createElement("div");
            b.className = a.replace(".", "");
            return b
        }

        function b() {
            k || (q.style.display = f)
        }
        var m, g = l.extend({
                aboutlink: "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + d.version +
                    "\x26m\x3dh\x26e\x3do",
                abouttext: "About JW Player " + d.version + "..."
            }, h),
            k = !1,
            q, s;
        this.element = function () {
            return q
        };
        this.destroy = function () {
            c.removeEventListener("mousedown", b, !1)
        };
        m = c.getElementById(a.id);
        q = j(".jwclick");
        q.id = a.id + "_menu";
        q.style.display = f;
        m.oncontextmenu = function (a) {
            var b, c;
            k || (a = a || window.event, b = a.target || a.srcElement, c = l.bounds(m), b = l.bounds(b), q.style
                .display = f, q.style.left = (a.offsetX ? a.offsetX : a.layerX) + b.left - c.left +
                "px", q.style.top = (a.offsetY ? a.offsetY : a.layerY) + b.top - c.top + "px", q.style.display =
                "block", a.preventDefault())
        };
        q.onmouseover = function () {
            k = !0
        };
        q.onmouseout = function () {
            k = !1
        };
        c.addEventListener("mousedown", b, !1);
        s = j(".jwclick_item");
        s.innerHTML = g.abouttext;
        s.onclick =
            function () {
                window.top.location = g.aboutlink
            };
        q.appendChild(s);
        m.appendChild(q)
    };
    a(".jwclick", {
        "background-color": "#FFF",
        "-webkit-border-radius": 5,
        "-moz-border-radius": 5,
        "border-radius": 5,
        height: "auto",
        border: "1px solid #bcbcbc",
        "font-family": "'MS Sans Serif', 'Geneva', sans-serif",
        "font-size": 10,
        width: 320,
        "-webkit-box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        "-moz-box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        "box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        position: "absolute",
        "z-index": 999
    }, !0);
    a(".jwclick div", {
        padding: "8px 21px",
        margin: "0px",
        "background-color": "#FFF",
        border: "none",
        "font-family": "'MS Sans Serif', 'Geneva', sans-serif",
        "font-size": 10,
        color: "inherit"
    }, !0);
    a(".jwclick_item", {
        padding: "8px 21px",
        "text-align": "left",
        cursor: "pointer"
    }, !0);
    a(".jwclick_item:hover", {
        "background-color": "#595959",
        color: "#FFF"
    }, !0);
    a(".jwclick_item a", {
        "text-decoration": f,
        color: "#000"
    }, !0);
    a(".jwclick hr", {
            width: "100%",
            padding: 0,
            margin: 0,
            border: "1px #e9e9e9 solid"
        },
        !0)
})(jwplayer.html5);
(function (d) {
    var l = d.html5,
        a = d.utils,
        c = d._,
        f = d.events;
    l.setup = function (e, h) {
        function j() {
            if (!this.cancelled)
                for (var a = 0; a < z.length; a++) {
                    var b = z[a];
                    c.all(c.map(b.depends, c.property("complete"))) && (z.splice(a, 1), b.method(), c.defer(j))
                }
        }

        function b(a) {
            a.complete = !0;
            0 < z.length && !C && c.defer(j)
        }

        function m() {
            b(n)
        }

        function g(a) {
            k("Error loading skin: " + a)
        }

        function k(a) {
            C = !0;
            v.sendEvent(f.JWPLAYER_ERROR, {
                message: a
            });
            q.setupError(a)
        }
        var q = h,
            s, v = new f.eventdispatcher,
            C = !1,
            r = {
                method: function () {
                    e.edition && "invalid" ===
                        e.edition() ? k("Error setting up player: Invalid license key") : b(r)
                },
                depends: []
            },
            n = {
                method: function () {
                    s = new l.skin;
                    s.load(e.config.skin, m, g)
                },
                depends: [r]
            },
            y = {
                method: function () {
                    var c = a.typeOf(e.config.playlist);
                    "array" === c ? (c = new d.playlist(e.config.playlist), e.setPlaylist(c), 0 === e.playlist
                        .length || 0 === e.playlist[0].sources.length ? k(
                            "Error loading playlist: No playable sources found") : b(y)) : k(
                        "Playlist type not supported: " + c)
                },
                depends: [r]
            },
            E = {
                method: function () {
                    q.setup(s);
                    b(E)
                },
                depends: [y, n]
            },
            u = {
                method: function () {
                    b(u)
                },
                depends: [E, y]
            },
            p = {
                method: function () {
                    this.cancelled || (v.sendEvent(f.JWPLAYER_READY), b(p))
                },
                depends: [u]
            },
            z = [r, n, y, E, u, p];
        this.start = function () {
            c.defer(j)
        };
        this.destroy = function () {
            this.cancelled = !0
        };
        a.extend(this, v)
    }
})(jwplayer);
(function (d) {
    d.skin = function () {
        var l = {},
            a = !1;
        this.load = function (c, f, e) {
            new d.skinloader(c, function (c) {
                a = !0;
                l = c;
                "function" === typeof f && f()
            }, function (a) {
                "function" === typeof e && e(a)
            })
        };
        this.getSkinElement = function (c, d) {
            c = c.toLowerCase();
            d = d.toLowerCase();
            if (a) try {
                return l[c].elements[d]
            } catch (e) {
                jwplayer.utils.log("No such skin component / element: ", [c, d])
            }
            return null
        };
        this.getComponentSettings = function (c) {
            c = c.toLowerCase();
            return a && l && l[c] ? l[c].settings : null
        };
        this.getComponentLayout = function (c) {
            c =
                c.toLowerCase();
            if (a) {
                var d = l[c].layout;
                if (d && (d.left || d.right || d.center)) return l[c].layout
            }
            return null
        }
    }
})(jwplayer.html5);
(function (d) {
    var l = jwplayer.utils,
        a = "Skin formatting error";
    d.skinloader = function (c, f, e) {
        function h(c) {
            q = c;
            l.ajax(l.getAbsolutePath(r), function (c) {
                try {
                    l.exists(c.responseXML) && b(c.responseXML)
                } catch (d) {
                    v(a)
                }
            }, function (a) {
                v(a)
            })
        }

        function j(a, b) {
            return a ? a.getElementsByTagName(b) : null
        }

        function b(a) {
            var b = j(a, "skin")[0];
            a = j(b, "component");
            var c = b.getAttribute("target"),
                b = parseFloat(b.getAttribute("pixelratio"));
            0 < b && (y = b);
            l.versionCheck(c) || v("Incompatible player version");
            if (0 === a.length) s(q);
            else
                for (c =
                    0; c < a.length; c++) {
                    var d = k(a[c].getAttribute("name")),
                        b = {
                            settings: {},
                            elements: {},
                            layout: {}
                        },
                        e = j(j(a[c], "elements")[0], "element");
                    q[d] = b;
                    for (var f = 0; f < e.length; f++) m(e[f], d);
                    if ((d = j(a[c], "settings")[0]) && 0 < d.childNodes.length) {
                        d = j(d, "setting");
                        for (e = 0; e < d.length; e++) {
                            var f = d[e].getAttribute("name"),
                                h = d[e].getAttribute("value");
                            /color$/.test(f) && (h = l.stringToColor(h));
                            b.settings[k(f)] = h
                        }
                    }
                    if ((d = j(a[c], "layout")[0]) && 0 < d.childNodes.length) {
                        d = j(d, "group");
                        for (e = 0; e < d.length; e++) {
                            h = d[e];
                            f = {
                                elements: []
                            };
                            b.layout[k(h.getAttribute("position"))] = f;
                            for (var n = 0; n < h.attributes.length; n++) {
                                var r = h.attributes[n];
                                f[r.name] = r.value
                            }
                            h = j(h, "*");
                            for (n = 0; n < h.length; n++) {
                                r = h[n];
                                f.elements.push({
                                    type: r.tagName
                                });
                                for (var t = 0; t < r.attributes.length; t++) {
                                    var x = r.attributes[t];
                                    f.elements[n][k(x.name)] = x.value
                                }
                                l.exists(f.elements[n].name) || (f.elements[n].name = r.tagName)
                            }
                        }
                    }
                    C = !1;
                    g()
                }
        }

        function m(a, b) {
            b = k(b);
            var c = new Image,
                d = k(a.getAttribute("name")),
                e = a.getAttribute("src");
            if (0 !== e.indexOf("data:image/png;base64,")) var f =
                l.getAbsolutePath(r),
                e = [f.substr(0, f.lastIndexOf("/")), b, e].join("/");
            q[b].elements[d] = {
                height: 0,
                width: 0,
                src: "",
                ready: !1,
                image: c
            };
            c.onload = function () {
                var a = b,
                    e = q[k(a)] ? q[k(a)].elements[k(d)] : null;
                e ? (e.height = Math.round(c.height / y * n), e.width = Math.round(c.width / y * n), e.src =
                    c.src, e.ready = !0, g()) : l.log("Loaded an image for a missing element: " + a +
                    "." + d)
            };
            c.onerror = function () {
                v("Skin image not found: " + this.src)
            };
            c.src = e
        }

        function g() {
            var a = !0,
                b;
            for (b in q)
                if ("properties" !== b && q.hasOwnProperty(b)) {
                    var c =
                        q[b].elements,
                        d;
                    for (d in c) c.hasOwnProperty(d) && (a &= (q[k(b)] ? q[k(b)].elements[k(d)] : null).ready)
                } a && (C || s(q))
        }

        function k(a) {
            return a ? a.toLowerCase() : ""
        }
        var q = {},
            s = f,
            v = e,
            C = !0,
            r = c,
            n = (jwplayer.utils.isMobile(), 1),
            y = 1;
        "string" !== typeof r || "" === r ? b(d.defaultskin()) : "xml" !== l.extension(r) ? v(
            "Skin not a valid file type") : new d.skinloader("", h, v)
    }
})(jwplayer.html5);
(function (d) {
    var l = d.utils,
        a = d.events,
        c = l.css;
    d.html5.thumbs = function (f) {
        function e(a) {
            k = null;
            try {
                a = (new d.parsers.srt).parse(a.responseText, !0)
            } catch (b) {
                h(b.message);
                return
            }
            if ("array" !== l.typeOf(a)) return h("Invalid data");
            m = a
        }

        function h(a) {
            k = null;
            l.log("Thumbnails could not be loaded: " + a)
        }

        function j(a, d, e) {
            a.onload = null;
            d.width || (d.width = a.width, d.height = a.height);
            d["background-image"] = a.src;
            c.style(b, d);
            e && e(d.width)
        }
        var b, m, g, k, q, s = {},
            v, C = new a.eventdispatcher;
        l.extend(this, C);
        b = document.createElement("div");
        b.id = f;
        this.load = function (a) {
            c.style(b, {
                display: "none"
            });
            k && (k.onload = null, k.onreadystatechange = null, k.onerror = null, k.abort && k.abort(), k =
                null);
            v && (v.onload = null);
            a ? (g = a.split("?")[0].split("/").slice(0, -1).join("/"), k = l.ajax(a, e, h, !0)) : (m = q =
                v = null, s = {})
        };
        this.element = function () {
            return b
        };
        this.updateTimeline = function (a, b) {
            if (m) {
                for (var c = 0; c < m.length && a > m[c].end;) c++;
                c === m.length && c--;
                c = m[c].text;
                a: {
                    var d = c;
                    if (d && d !== q) {
                        q = d;
                        0 > d.indexOf("://") && (d = g ? g + "/" + d : d);
                        var e = {
                            display: "block",
                            margin: "0 auto",
                            "background-position": "0 0",
                            width: 0,
                            height: 0
                        };
                        if (0 < d.indexOf("#xywh")) try {
                            var f = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(d),
                                d = f[1];
                            e["background-position"] = -1 * f[2] + "px " + -1 * f[3] + "px";
                            e.width = f[4];
                            e.height = f[5]
                        } catch (k) {
                            h("Could not parse thumbnail");
                            break a
                        }
                        var l = s[d];
                        l ? j(l, e, b) : (l = new Image, l.onload = function () {
                            j(l, e, b)
                        }, s[d] = l, l.src = d);
                        v && (v.onload = null);
                        v = l
                    }
                }
                return c
            }
        }
    }
})(jwplayer);
(function (d) {
    var l = d.jwplayer,
        a = l.html5,
        c = l.utils,
        f = l.events,
        e = f.state,
        h = c.css,
        j = c.bounds,
        b = c.isMobile(),
        m = c.isIPad(),
        g = c.isIPod(),
        k = "aspectMode",
        q = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
        s = "hidden",
        v = "none",
        C = "block";
    a.view = function (r, n) {
        function y(a) {
            a = c.between(n.position + a, 0, this.getDuration());
            this.seek(a)
        }

        function E(a) {
            a = c.between(this.getVolume() + a, 0, 100);
            this.setVolume(a)
        }

        function u(a) {
            var b;
            b = a.ctrlKey || a.metaKey ? !1 : n.controls ? !0 : !1;
            if (!b) return !0;
            O.adMode() || (ea(), x());
            b = l(r.id);
            switch (a.keyCode) {
                case 27:
                    b.setFullscreen(!1);
                    break;
                case 13:
                case 32:
                    b.play();
                    break;
                case 37:
                    O.adMode() || y.call(b, -5);
                    break;
                case 39:
                    O.adMode() || y.call(b, 5);
                    break;
                case 38:
                    E.call(b, 10);
                    break;
                case 40:
                    E.call(b, -10);
                    break;
                case 77:
                    b.setMute();
                    break;
                case 70:
                    b.setFullscreen();
                    break;
                default:
                    if (48 <= a.keyCode && 59 >= a.keyCode) {
                        var c = (a.keyCode - 48) / 10 * b.getDuration();
                        b.seek(c)
                    }
            }
            if (/13|32|37|38|39|40/.test(a.keyCode)) return a.preventDefault(), !1
        }

        function p() {
            Ya = !0;
            ja.sendEvent(f.JWPLAYER_VIEW_TAB_FOCUS, {
                hasFocus: !1
            })
        }

        function z() {
            var a = !Ya;
            Ya = !1;
            a && ja.sendEvent(f.JWPLAYER_VIEW_TAB_FOCUS, {
                hasFocus: !0
            });
            O.adMode() || (ea(), x())
        }

        function w() {
            Ya = !1;
            ja.sendEvent(f.JWPLAYER_VIEW_TAB_FOCUS, {
                hasFocus: !1
            })
        }

        function A() {
            var a = j(Q),
                c = Math.round(a.width),
                e = Math.round(a.height);
            if (document.body.contains(Q)) {
                if (c && e && (c !== Ka || e !== $a)) Ka = c, $a = e, V && V.redraw(), clearTimeout(Ba), Ba =
                    setTimeout(W, 50), ja.sendEvent(f.JWPLAYER_RESIZE, {
                        width: c,
                        height: e
                    })
            } else d.removeEventListener("resize", A), b && d.removeEventListener("orientationchange",
                A);
            return a
        }

        function F(a) {
            a && (a.element().addEventListener("mousemove", J, !1), a.element().addEventListener("mouseout", H,
                !1))
        }

        function L() {}

        function G() {
            clearTimeout(xa);
            xa = setTimeout(Aa, wa)
        }

        function t(a, b) {
            var c = document.createElement(a);
            b && (c.className = b);
            return c
        }

        function x() {
            clearTimeout(xa);
            xa = setTimeout(Aa, wa)
        }

        function M() {
            clearTimeout(xa);
            var a = r.jwGetState();
            if (a === e.PLAYING || a === e.PAUSED || ua) Ma(), Oa || (xa = setTimeout(Aa, wa))
        }

        function J() {
            clearTimeout(xa);
            Oa = !0
        }

        function H() {
            Oa = !1
        }

        function K(a) {
            ja.sendEvent(a.type,
                a)
        }

        function N(a) {
            if (a.done) P();
            else {
                if (!a.complete) {
                    O.adMode() || (O.instreamMode(!0), O.adMode(!0), O.show(!0));
                    O.setText(a.message);
                    var b = a.onClick;
                    void 0 !== b && V.setAlternateClickHandler(function () {
                        b(a)
                    });
                    void 0 !== a.onSkipAd && ba && ba.setSkipoffset(a, a.onSkipAd)
                }
                ba && ba.adChanged(a)
            }
        }

        function P() {
            O.setText("");
            O.adMode(!1);
            O.instreamMode(!1);
            O.show(!0);
            ba && (ba.adsEnded(), ba.setState(r.jwGetState()));
            V.revertAlternateClickHandler()
        }

        function S(a, b, d) {
            var e = Q.className,
                f, g, j = r.id + "_view";
            h.block(j);
            if (d = !!d) e = e.replace(/\s*aspectMode/, ""), Q.className !== e && (Q.className = e), h.style(Q, {
                display: C
            }, d);
            c.exists(a) && c.exists(b) && (n.width = a, n.height = b);
            d = {
                width: a
            }; - 1 === e.indexOf(k) && (d.height = b);
            h.style(Q, d, !0);
            V && V.redraw();
            O && O.redraw(!0);
            $ && ($.offset(O && 0 <= $.position().indexOf("bottom") ? O.height() + O.margin() : 0), setTimeout(
                function () {
                    ca && ca.offset("top-left" === $.position() ? $.element().clientWidth + $.margin() :
                        0)
                }, 500));
            R = T(b);
            O && (R ? (O.audioMode(!0), Ma(), V.hidePreview(!0), V && V.hide(), Na(!1)) : (O.audioMode(!1),
                Xa(r.jwGetState())));
            $ && R && Va();
            Q.style.backgroundColor = R ? "transparent" : "#000";
            f = n.playlistsize;
            g = n.playlistposition;
            if (Ia && f && ("right" === g || "bottom" === g)) Ia.redraw(), e = {
                display: C
            }, d = {}, e[g] = 0, d[g] = f, "right" === g ? e.width = f : e.height = f, h.style(Ra, e), h.style(
                Ga, d);
            W(a, b);
            h.unblock(j)
        }

        function T(a) {
            if (n.aspectratio) return !1;
            if (l._.isNumber(a)) return D(a);
            if (l._.isString(a) && -1 < a.indexOf("%")) return !1;
            a = j(Q);
            return D(a.height)
        }

        function D(a) {
            if (!a) return !1;
            "bottom" === n.playlistposition && (a -= n.playlistsize);
            return 40 >= a
        }

        function W(a, b) {
            if (!a || isNaN(Number(a))) {
                if (!ga) return;
                a = ga.clientWidth
            }
            if (!b || isNaN(Number(b))) {
                if (!ga) return;
                b = ga.clientHeight
            }
            c.isMSIE(9) && (document.all && !d.atob) && (a = b = "100%");
            n.getVideo().resize(a, b, n.stretching) && (clearTimeout(Ba), Ba = setTimeout(W, 250))
        }

        function Z(a) {
            void 0 !== a.jwstate ? a = a.jwstate : ya ? (a = document.fullscreenElement || document.webkitCurrentFullScreenElement ||
                    document.mozFullScreenElement || document.msFullscreenElement, a = !!(a && a.id === r.id)) :
                a = ua ? U.getVideo().getFullScreen() :
                n.getVideo().getFullScreen();
            ya ? Y(Q, a) : da(a)
        }

        function Y(a, b) {
            c.removeClass(a, "jwfullscreen");
            b ? (c.addClass(a, "jwfullscreen"), h.style(document.body, {
                "overflow-y": s
            }), x()) : h.style(document.body, {
                "overflow-y": ""
            });
            O && O.redraw();
            V && V.redraw();
            ca && ca.redraw();
            W();
            da(b)
        }

        function da(a) {
            n.setFullscreen(a);
            U && U.setFullscreen(a);
            a ? (clearTimeout(Ba), Ba = setTimeout(W, 200)) : m && r.jwGetState() === e.PAUSED && setTimeout(La,
                500)
        }

        function ea() {
            O && n.controls && (ua ? Ha.show() : O.show())
        }

        function va() {
            !0 !== ia && (O && !R && !n.getVideo().isAudioFile()) &&
                (ua && Ha.hide(), O.hide())
        }

        function ra() {
            ca && (!R && n.controls) && ca.show()
        }

        function I() {
            ca && (!Pa && !n.getVideo().isAudioFile()) && ca.hide()
        }

        function Va() {
            $ && (!n.getVideo().isAudioFile() || R) && $.hide(R)
        }

        function La() {
            V && n.controls && !R && (!g || r.jwGetState() === e.IDLE) && V.show();
            (!b || !n.fullscreen) && n.getVideo().setControls(!1)
        }

        function Aa() {
            clearTimeout(xa);
            if (!0 !== ia) {
                sa = !1;
                var a = r.jwGetState();
                (!n.controls || a !== e.PAUSED) && va();
                n.controls || I();
                a !== e.IDLE && a !== e.PAUSED && (I(), Va());
                c.addClass(Q, "jw-user-inactive")
            }
        }

        function Ma() {
            if (!1 !== ia) {
                sa = !0;
                if (n.controls || R) ea(), ra();
                Sa.hide && $ && !R && $.show();
                c.removeClass(Q, "jw-user-inactive")
            }
        }

        function Na(a) {
            a = a && !R;
            n.getVideo().setVisibility(a)
        }

        function ob() {
            Pa = !0;
            ka(!1);
            n.controls && ra()
        }

        function pb() {
            ba && ba.setState(r.jwGetState())
        }

        function Da(a) {
            Pa = !1;
            clearTimeout(Ta);
            Ta = setTimeout(function () {
                Xa(a.newstate)
            }, 100)
        }

        function kb() {
            va()
        }

        function Xa(a) {
            if (n.getVideo().isCaster) V && (V.show(), V.hidePreview(!1)), h.style(ga, {
                visibility: "visible",
                opacity: 1
            }), O && (O.show(), O.hideFullscreen(!0));
            else {
                switch (a) {
                    case e.PLAYING:
                        ia = !0 !== n.getVideo().isCaster ? null : !0;
                        (ua ? U : n).getVideo().isAudioFile() ? (Na(!1), V.hidePreview(R), V.setHiding(!0), O &&
                            (Ma(), O.hideFullscreen(!0)), ra()) : (Na(!0), W(), V.hidePreview(!0), O && O.hideFullscreen(
                            !n.getVideo().supportsFullscreen()));
                        break;
                    case e.IDLE:
                        Na(!1);
                        R || (V.hidePreview(!1), La(), ra(), O && O.hideFullscreen(!1));
                        break;
                    case e.BUFFERING:
                        La();
                        Aa();
                        b && Na(!0);
                        break;
                    case e.PAUSED:
                        La(), Ma()
                }
                $ && !R && $.show()
            }
        }

        function ab(a) {
            return "#" + r.id + (a ? " ." + a : "")
        }

        function Za(a, b) {
            h(a, {
                display: b ? C : v
            })
        }
        var Q, Ga, la, hb, Ra, xa = -1,
            wa = b ? 4E3 : 2E3,
            ga, Ka, $a, za, Ha, Fa, U, ua = !1,
            O, V, ba, ca, $, Sa = c.extend({}, n.componentConfig("logo")),
            B, Ia, R, aa = !1,
            sa = !1,
            ia = null,
            Pa, fa, Ba = -1,
            Oa = !1,
            Qa, qa, ya = !1,
            Ya = !1,
            ja = c.extend(this, new f.eventdispatcher);
        this.getCurrentCaptions = function () {
            return B.getCurrentCaptions()
        };
        this.setCurrentCaptions = function (a) {
            B.setCurrentCaptions(a)
        };
        this.getCaptionsList = function () {
            return B.getCaptionsList()
        };
        this.setup = function (j) {
            if (!aa) {
                r.skin = j;
                Ga = t("span", "jwmain");
                Ga.id = r.id + "_view";
                ga = t("span", "jwvideo");
                ga.id = r.id + "_media";
                la = t("span", "jwcontrols");
                za = t("span", "jwinstream");
                Ra = t("span", "jwplaylistcontainer");
                hb = t("span", "jwaspect");
                j = n.componentConfig("controlbar");
                var s = n.componentConfig("display");
                B = new a.captions(r, n.captions);
                B.addEventListener(f.JWPLAYER_CAPTIONS_LIST, K);
                B.addEventListener(f.JWPLAYER_CAPTIONS_CHANGED, K);
                B.addEventListener(f.JWPLAYER_CAPTIONS_LOADED, L);
                la.appendChild(B.element());
                V = new a.display(r, s);
                V.addEventListener(f.JWPLAYER_DISPLAY_CLICK, function (a) {
                    K(a);
                    b ? sa ? Aa() : Ma() : Da({
                        newstate: r.jwGetState()
                    });
                    sa && x()
                });
                la.appendChild(V.element());
                $ = new a.logo(r, Sa);
                la.appendChild($.element());
                ca = new a.dock(r, n.componentConfig("dock"));
                la.appendChild(ca.element());
                r.edition && !b ? fa = new a.rightclick(r, {
                    abouttext: n.abouttext,
                    aboutlink: n.aboutlink
                }) : b || (fa = new a.rightclick(r, {}));
                n.playlistsize && (n.playlistposition && n.playlistposition !== v) && (Ia = new a.playlistcomponent(
                    r, {}), Ra.appendChild(Ia.element()));
                O = new a.controlbar(r, j);
                O.addEventListener(f.JWPLAYER_USER_ACTION,
                    x);
                la.appendChild(O.element());
                g && va();
                c.canCast() && ja.forceControls(!0);
                Q.onmousedown = p;
                Q.onfocusin = z;
                Q.addEventListener("focus", z);
                Q.onfocusout = w;
                Q.addEventListener("blur", w);
                Q.addEventListener("keydown", u);
                Ga.appendChild(ga);
                Ga.appendChild(la);
                Ga.appendChild(za);
                Q.appendChild(Ga);
                Q.appendChild(hb);
                Q.appendChild(Ra);
                n.getVideo().setContainer(ga);
                n.addEventListener("fullscreenchange", Z);
                for (j = q.length; j--;) document.addEventListener(q[j], Z, !1);
                d.removeEventListener("resize", A);
                d.addEventListener("resize",
                    A, !1);
                b && (d.removeEventListener("orientationchange", A), d.addEventListener("orientationchange",
                    A, !1));
                l(r.id).onAdPlay(function () {
                    O.adMode(!0);
                    Xa(e.PLAYING);
                    x()
                });
                l(r.id).onAdSkipped(function () {
                    O.adMode(!1)
                });
                l(r.id).onAdComplete(function () {
                    O.adMode(!1)
                });
                l(r.id).onAdError(function () {
                    O.adMode(!1)
                });
                r.jwAddEventListener(f.JWPLAYER_PLAYER_STATE, Da);
                r.jwAddEventListener(f.JWPLAYER_MEDIA_ERROR, kb);
                r.jwAddEventListener(f.JWPLAYER_PLAYLIST_COMPLETE, ob);
                r.jwAddEventListener(f.JWPLAYER_PLAYLIST_ITEM, pb);
                r.jwAddEventListener(f.JWPLAYER_CAST_AVAILABLE,
                    function () {
                        c.canCast() ? ja.forceControls(!0) : ja.releaseControls()
                    });
                r.jwAddEventListener(f.JWPLAYER_CAST_SESSION, function (a) {
                    ba || (ba = new l.html5.castDisplay(r.id), ba.statusDelegate = function (a) {
                        ba.setState(a.newstate)
                    });
                    a.active ? (h.style(B.element(), {
                            display: "none"
                        }), ja.forceControls(!0), ba.setState("connecting").setName(a.deviceName)
                        .show(), r.jwAddEventListener(f.JWPLAYER_PLAYER_STATE, ba.statusDelegate),
                        r.jwAddEventListener(f.JWPLAYER_CAST_AD_CHANGED, N)) : (r.jwRemoveEventListener(
                        f.JWPLAYER_PLAYER_STATE,
                        ba.statusDelegate), r.jwRemoveEventListener(f.JWPLAYER_CAST_AD_CHANGED,
                        N), ba.hide(), O.adMode() && P(), h.style(B.element(), {
                        display: null
                    }), Da({
                        newstate: r.jwGetState()
                    }), A())
                });
                Da({
                    newstate: e.IDLE
                });
                b || (la.addEventListener("mouseout", G, !1), la.addEventListener("mousemove", M, !1), c.isMSIE() &&
                    (ga.addEventListener("mousemove", M, !1), ga.addEventListener("click", V.clickHandler))
                );
                F(O);
                F(ca);
                F($);
                h("#" + Q.id + "." + k + " .jwaspect", {
                    "margin-top": n.aspectratio,
                    display: C
                });
                j = c.exists(n.aspectratio) ? parseFloat(n.aspectratio) :
                    100;
                s = n.playlistsize;
                h("#" + Q.id + ".playlist-right .jwaspect", {
                    "margin-bottom": -1 * s * (j / 100) + "px"
                });
                h("#" + Q.id + ".playlist-right .jwplaylistcontainer", {
                    width: s + "px",
                    right: 0,
                    top: 0,
                    height: "100%"
                });
                h("#" + Q.id + ".playlist-bottom .jwaspect", {
                    "padding-bottom": s + "px"
                });
                h("#" + Q.id + ".playlist-bottom .jwplaylistcontainer", {
                    width: "100%",
                    height: s + "px",
                    bottom: 0
                });
                h("#" + Q.id + ".playlist-right .jwmain", {
                    right: s + "px"
                });
                h("#" + Q.id + ".playlist-bottom .jwmain", {
                    bottom: s + "px"
                });
                setTimeout(function () {
                    S(n.width, n.height)
                }, 0)
            }
        };
        var ka = this.fullscreen = function (a) {
            c.exists(a) || (a = !n.fullscreen);
            a = !!a;
            a !== n.fullscreen && (ya ? (a ? Qa.apply(Q) : qa.apply(document), Y(Q, a)) : c.isIE() ? Y(Q, a) :
                (U && U.getVideo().setFullScreen(a), n.getVideo().setFullScreen(a)))
        };
        this.resize = function (a, b) {
            S(a, b, !0);
            A()
        };
        this.resizeMedia = W;
        var bb = this.completeSetup = function () {
                h.style(Q, {
                    opacity: 1
                });
                d.addEventListener("beforeunload", function () {
                    n.getVideo().isCaster || r.jwStop()
                })
            },
            Ta;
        this.setupInstream = function (a, b, c, d) {
            h.unblock();
            Za(ab("jwinstream"), !0);
            Za(ab("jwcontrols"),
                !1);
            za.appendChild(a);
            Ha = b;
            Fa = c;
            U = d;
            Da({
                newstate: e.PLAYING
            });
            ua = !0;
            za.addEventListener("mousemove", M);
            za.addEventListener("mouseout", G)
        };
        this.destroyInstream = function () {
            h.unblock();
            Za(ab("jwinstream"), !1);
            Za(ab("jwcontrols"), !0);
            za.innerHTML = "";
            za.removeEventListener("mousemove", M);
            za.removeEventListener("mouseout", G);
            ua = !1
        };
        this.setupError = function (a) {
            aa = !0;
            l.embed.errorScreen(Q, a, n);
            bb()
        };
        this.addButton = function (a, b, c, d) {
            ca && (ca.addButton(a, b, c, d), r.jwGetState() === e.IDLE && ra())
        };
        this.removeButton =
            function (a) {
                ca && ca.removeButton(a)
            };
        this.setControls = function (a) {
            var b = !!a;
            b !== n.controls && (n.controls = b, ua ? a ? (Ha.show(), Fa.show()) : (Ha.hide(), Fa.hide()) :
                b && Da({
                    newstate: r.jwGetState()
                }), b || (Aa(), V && V.hide()), ja.sendEvent(f.JWPLAYER_CONTROLS, {
                    controls: b
                }))
        };
        this.forceControls = function (a) {
            ia = !!a;
            a ? Ma() : Aa()
        };
        this.releaseControls = function () {
            ia = null;
            Xa(r.jwGetState())
        };
        this.addCues = function (a) {
            O && O.addCues(a)
        };
        this.forceState = function (a) {
            V.forceState(a)
        };
        this.releaseState = function () {
            V.releaseState(r.jwGetState())
        };
        this.getSafeRegion = function (a) {
            var b = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            a = a || !c.exists(a);
            O.showTemp();
            ca.showTemp();
            var d = j(Ga),
                e = d.top,
                f = ua ? j(document.getElementById(r.id + "_instream_controlbar")) : j(O.element()),
                g = ua ? !1 : 0 < ca.numButtons(),
                h = 0 === $.position().indexOf("top"),
                k = j($.element());
            g && n.controls && (g = j(ca.element()), b.y = Math.max(0, g.bottom - e));
            h && (b.y = Math.max(b.y, k.bottom - e));
            b.width = d.width;
            b.height = f.height && a && n.controls ? (h ? f.top : k.top) - e - b.y : d.height - b.y;
            O.hideTemp();
            ca.hideTemp();
            return b
        };
        this.destroy =
            function () {
                d.removeEventListener("resize", A);
                d.removeEventListener("orientationchange", A);
                for (var a = q.length; a--;) document.removeEventListener(q[a], Z, !1);
                n.removeEventListener("fullscreenchange", Z);
                Q.removeEventListener("keydown", u, !1);
                fa && fa.destroy();
                ba && (r.jwRemoveEventListener(f.JWPLAYER_PLAYER_STATE, ba.statusDelegate), ba.destroy(), ba =
                    null);
                la && (la.removeEventListener("mousemove", M), la.removeEventListener("mouseout", G));
                ga && (ga.removeEventListener("mousemove", M), ga.removeEventListener("click",
                    V.clickHandler));
                ua && this.destroyInstream()
            };
        Q = t("div", "jwplayer playlist-" + n.playlistposition);
        Q.id = r.id;
        Q.tabIndex = 0;
        Qa = Q.requestFullscreen || Q.webkitRequestFullscreen || Q.webkitRequestFullScreen || Q.mozRequestFullScreen ||
            Q.msRequestFullscreen;
        qa = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen ||
            document.mozCancelFullScreen || document.msExitFullscreen;
        ya = Qa && qa;
        n.aspectratio && (h.style(Q, {
            display: "inline-block"
        }), Q.className = Q.className.replace("jwplayer", "jwplayer " +
            k));
        var Ua = document.getElementById(r.id);
        Ua.parentNode.replaceChild(Q, Ua)
    };
    h(".jwplayer", {
        position: "relative",
        display: "block",
        opacity: 0,
        "min-height": 0,
        "-webkit-transition": "opacity .25s ease",
        "-moz-transition": "opacity .25s ease",
        "-o-transition": "opacity .25s ease"
    });
    h(".jwmain", {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "-webkit-transition": "opacity .25s ease",
        "-moz-transition": "opacity .25s ease",
        "-o-transition": "opacity .25s ease"
    });
    h(".jwvideo, .jwcontrols", {
        position: "absolute",
        height: "100%",
        width: "100%",
        "-webkit-transition": "opacity .25s ease",
        "-moz-transition": "opacity .25s ease",
        "-o-transition": "opacity .25s ease"
    });
    h(".jwvideo", {
        overflow: s,
        visibility: s,
        opacity: 0
    });
    h(".jwvideo video", {
        background: "transparent",
        height: "100%",
        width: "100%",
        position: "absolute",
        margin: "auto",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    });
    h(".jwplaylistcontainer", {
        position: "absolute",
        height: "100%",
        width: "100%",
        display: v
    });
    h(".jwinstream", {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "none"
    });
    h(".jwaspect", {
        display: "none"
    });
    h(".jwplayer." + k, {
        height: "auto"
    });
    h(".jwplayer.jwfullscreen", {
        width: "100%",
        height: "100%",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "z-index": 1E3,
        margin: 0,
        position: "fixed"
    }, !0);
    h(".jwplayer.jwfullscreen.jw-user-inactive", {
        cursor: "none",
        "-webkit-cursor-visibility": "auto-hide"
    });
    h(".jwplayer.jwfullscreen .jwmain", {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, !0);
    h(".jwplayer.jwfullscreen .jwplaylistcontainer", {
        display: v
    }, !0);
    h(".jwplayer .jwuniform", {
        "background-size": "contain !important"
    });
    h(".jwplayer .jwfill", {
        "background-size": "cover !important",
        "background-position": "center"
    });
    h(".jwplayer .jwexactfit", {
        "background-size": "100% 100% !important"
    })
})(window);
(function (d, l) {
    function a(a) {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA" + q[a]
    }

    function c(a, b) {
        var c = l.createElement(a);
        b && f(c, b);
        return c
    }

    function f(a, b) {
        m.isArray(b) || (b = [b]);
        b = m.map(b, function (a) {
            return !a ? "" : "jwcast-" + a.toLowerCase()
        });
        a.className = b.join(" ")
    }

    function e(a, b) {
        b.join || (b = [b]);
        for (var c = 0; c < b.length; c++) a.appendChild(b[c])
    }
    var h = d.utils,
        j = d.html5,
        b = d.events,
        m = d._,
        g = b.state,
        k = h.css,
        q = {
            wheel: "DgAAAA4CAYAAACohjseAAACiUlEQVR42u3aP2sTYRzAcZ87Md6mhE5GhRqli0NC22yNKO1iaStSY+ggdKggal6BDXRoUuwbEG1LpE4B30LAxEGbKYgO7SVoUhJD04hOusRv4ZlCwP5LevfDgw9kCnzD5Z4/95xqtVqideNLTQzjKV4gCxtNtNwaqBBGCg3UkcYz3EUIV+F1W6AHj7CFb1hAEIbbb1GFByjjAyZgSvkPXkMGW7gt7SETwQ8swpL0FFV4jjpuShsmTiOFz7gobRxUWEceXokDfQKf0CdxJhNFFT6JU7Ur2MUtiXNRhXdYlDrZnkERZyUGerCNcanLpYfISV0PGtjEpNTAGyjBkBq4ggWpWxYmGghIDRzEDgypgTG8lbyrtoZ5yYFZ3JccWMKg5MCfGJAcuHf5/ge6xwX8lnyLDmCn/SEzJChwCKX2YSIqKDCKbPtAHxcUGAdNOhBPkBYUmAZNOhDXUYMSEKdQBU06EAp1BAUEBnWLgg4EXmJJQOASXnVa0YdRcfma0NAN4U6BCpu44+LASd2g0BYIPEbexYHvdQOfOwdaqLh063AcFVj73bq3XBRnoYiZ/b58ySDposAkMlD/DNT8aGLUBXGjaMJ/0Beg9/Dd4etEH2qIHOUVdgHnHRh3DgUkjnoIIYUNh0V6sYHXUIcO1Eyso4BLDoi7jC94A/O4DgIZWEYdYycYN4YalmF04yjXNJpIwOrxOJdAE9PdPoznRxZFTPUgbgI2svD38jjlLMrI61DjmFcFU/iICmZhnMSB2DOYg41tJBGAOuSPFkASZdiYg8cpR5pHsIIGqkgjjghC6Eef1o8QIphHGlU0sIYRGE4/lB7DKnL4il/Yu/5gFzZyWEUMwzC7sXUv2l9q1CPRZSGkLwAAAABJRU5ErkJggg\x3d\x3d",
            display: "UAAAAC4AQMAAACo6KcpAAAABlBMVEV6enp6enqEWMsmAAAAAXRSTlMAQObYZgAAAEdJREFUeF7t2bEJACAMRcGAg7j/Fo6VTkvbIKSRe/XBH+DHLlaHK0qN7yAIgiAIgiAIgiAIgiAIgiAIgiAIgg0PZHfzbuUjPCPnO5qQcE/AAAAAAElFTkSuQmCC",
            pause: "CoAAAA2CAQAAAAb3sMwAAAAMElEQVR4Ae3MMQEAMAzDsIY/6AxB9/aRfyvt7GX2Ph8UCoVCoVAo9AiFQqFQKBQKfdYvoctOjDeGAAAAAElFTkSuQmCC",
            play: "DYAAAA2BAMAAAB+a3fuAAAAFVBMVEX///////////////////////////9nSIHRAAAABnRSTlMAP79AwMFfxd6iAAAAX0lEQVR4Xn3JQQGAABAEoaliFiPYYftHMMHBl55uQw455JBDDjnkkEMOOeSQQw455JBDDjnkkEMOOeSQQ+5O3HffW6hQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKgfWHsiYI6VycIAAAAASUVORK5CYII\x3d",
            replay: "DQAAAA8CAYAAAApK5mGAAADkklEQVRoBd3BW2iVBRwA8P/cWHMsv9QilLCITLCU0khpST6JCEXrQbKMCgrKFwsfZq/LMnRRIdkFvBQUvmShgg9iV02zB7FScyWlqNHNqbCJ7PKLkFHp952dnZ3tfOv3ixgGSLAVt8b/ARIX9WADJsVIhsR/daIV42MkQiJdO5ZjdIwkSBR2Ek+gJkYCJIpzEE2Rd0gMzB7MibxCojRbcEtUGsZgJu7HYixVuh6sx6QYLrgSD+Fd/GhodKIV42Ko4B68h07Dpx3NGB3lgnnYpbJOYFoMBm7ANpW3D3NjMPAgzqqsn7EIVVEqVGOtymrHMtTGYKAeWxSvB3vxIh7ANIzFNUpzAa0YF4OFWuxUnFNYjkmRAomB6cX7uDHKAdX4QP/asRRXRAFIFO8TzI5yQov+bcO1UQQk+ncITVFumIce2XqxHFVRJCSy/YolqIlyQwOOy9aNR2KAkLhcJ1agIYYKVsvWi6eiBEj8owfrMDEGAVVYiMcjDa7HBdlejhIhcdF2TI9BQiP2uOgsro5LYa1sX6M2SoQ6zItBwmRsdrnn498wDuel68aMqDBMQZd0v6Mu+mCJbBsiJ7BdtkXRB7ul68HNkRNolO3D+BvGoke6HZEz+Fa6c6gJNMn2WOQMmmW7K/CSbBMiZ3CbbM8EPpKuLXIIo3BWujcCh6TbEjmFr6TbGfhDulcip7BJugOBbulaIqfwlnRHQ7bnIqewVrpjgU7pVkZOYaN0hwOnpFsfOYWt0u0LfCnd55FT+EG6zYEN0p1BdeQMEnRLtzKwTLZZkTO4V7bFgTtka4mcwTrZrgtU47R0P6E6cgINOCfdkeiDjbItipzAs7K1Rh/Mle0gaqLC0IBTsk2PPhiFI7ItiwrDKtl2xaXwqGwdmBoVgrvRJdv8uBRq0CbbISQxzDARJ2TbG1kwX2GfoT6GCa7CN7J1Y0YUgk0K+wJjY4hhAg4o7LXoD8bjuMIOY1oMETTiuMIOoj6KgTvRobDzaEZtlAnq8QK6FHYGU2IgcB+69e97LEJNlAh1eBrH9K8DjVEKPIxuxTmJVZiFmugHajEHa/Cb4nRiQQwGmtBpYM7hU7yNFjSjGSuwDrvRYWD+RGOUA25Hm8rZj8lRThiDd9Br+PTgVdTFUMFcfGfo7cHMGA4YhYXYr/x2YQGqohIwG2vwi9Idw2pMjzzBVCzBm/gYR3EaXbiA02jDDryOJ3FTlNFfAO8ENqnn13UAAAAASUVORK5CYII\x3d"
        },
        s = !1,
        v = 316 / 176;
    j.castDisplay = function (q) {
        function m() {
            if (J) {
                var a = J.element();
                a.parentNode && a.parentNode.removeChild(a);
                J.resetEventListeners();
                J = null
            }
        }

        function n() {
            K && (K.parentNode && K.parentNode.removeChild(K), K = null)
        }

        function y() {
            H && (H.parentNode && H.parentNode.removeChild(H), H = null)
        }
        s || (k(".jwplayer .jwcast-display", {
                display: "none",
                position: "absolute",
                width: "100%",
                height: "100%",
                "background-repeat": "no-repeat",
                "background-size": "auto",
                "background-position": "50% 50%",
                "background-image": a("display")
            }),
            k(".jwplayer .jwcast-label", {
                position: "absolute",
                left: 10,
                right: 10,
                bottom: "50%",
                "margin-bottom": 100,
                "text-align": "center"
            }), k(".jwplayer .jwcast-label span", {
                "font-family": '"Karbon", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                "font-size": 20,
                "font-weight": 300,
                color: "#7a7a7a"
            }), k(".jwplayer span.jwcast-name", {
                color: "#ccc"
            }), k(".jwcast-button", {
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: 0,
                "background-repeat": "no-repeat",
                "background-size": "auto",
                "background-position": "50% 50%"
            }), k(".jwcast-wheel", {
                "background-image": a("wheel")
            }), k(".jwcast-pause", {
                "background-image": a("pause")
            }), k(".jwcast-play", {
                "background-image": a("play")
            }), k(".jwcast-replay", {
                "background-image": a("replay")
            }), k(".jwcast-paused .jwcast-play", {
                opacity: 1
            }), k(".jwcast-playing .jwcast-pause", {
                opacity: 1
            }), k(".jwcast-idle .jwcast-replay", {
                opacity: 1
            }), h.cssKeyframes("spin", "from {transform: rotate(0deg);} to {transform: rotate(360deg);}"),
            k(".jwcast-connecting .jwcast-wheel, .jwcast-buffering .jwcast-wheel", {
                opacity: 1,
                "-webkit-animation": "spin 1.5s linear infinite",
                animation: "spin 1.5s linear infinite"
            }), k(".jwcast-companion", {
                position: "absolute",
                "background-position": "50% 50%",
                "background-size": "316px 176px",
                "background-repeat": "no-repeat",
                top: 0,
                left: 0,
                right: 0,
                bottom: 4
            }), k(".jwplayer .jwcast-click-label", {
                "font-family": '"Karbon", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                "font-size": 14,
                "font-weight": 300,
                "text-align": "center",
                position: "absolute",
                left: 10,
                right: 10,
                top: "50%",
                color: "#ccc",
                "margin-top": 100,
                "-webkit-user-select": "none",
                "user-select": "none",
                cursor: "pointer"
            }), k(".jwcast-paused .jwcast-click-label", {
                color: "#7a7a7a",
                cursor: "default"
            }), s = !0);
        var E = l.getElementById(q + "_display_button"),
            u = c("div", "display"),
            p = c("div", ["pause", "button"]),
            z = c("div", ["play", "button"]),
            w = c("div", ["replay", "button"]),
            A = c("div", ["wheel", "button"]),
            F = c("div", "label"),
            L = c("span"),
            G = c("span", "name"),
            t = "#" + q + "_display.jwdisplay",
            x = -1,
            M = null,
            J = null,
            H = null,
            K = null;
        e(u, [A, p, z, w, F]);
        e(F, [L, G]);
        E.parentNode.insertBefore(u, E);
        this.statusDelegate = null;
        this.setName = function (a) {
            G.innerText = a || "Google Cast";
            return this
        };
        this.setState = function (a) {
            var b = "Casting to ";
            if (null === M)
                if ("connecting" === a) b = "Loading on ";
                else if (a !== g.IDLE) {
                var c = d(q).getPlaylistItem().title || "";
                c && (b = b.replace("to", c + " to"))
            }
            L.innerText = b;
            clearTimeout(x);
            a === g.IDLE && (x = setTimeout(function () {
                f(u, ["display", "idle"])
            }, 3E3), a = "");
            f(u, ["display", a || ""]);
            return this
        };
        this.show = function () {
            k(t + " .jwpreview", {
                "background-size": "316px 176px !important",
                opacity: 0.6,
                "margin-top": -2
            });
            k(t + " .jwdisplayIcon", {
                display: "none !important"
            });
            k.style(u, {
                display: "block"
            });
            return this
        };
        this.hide = function () {
            h.clearCss(t + " .jwpreview");
            k(t + " .jwdisplayIcon", {
                display: ""
            });
            k.style(u, {
                display: "none"
            });
            return this
        };
        this.setSkipoffset = function (a, c) {
            if (null === J) {
                var d = l.getElementById(q + "_controlbar"),
                    e = 10 + h.bounds(u).bottom - h.bounds(d).top;
                J = new j.adskipbutton(q, e | 0, a.skipMessage, a.skipText);
                J.addEventListener(b.JWPLAYER_AD_SKIPPED,
                    function () {
                        c(a)
                    });
                J.reset(a.skipoffset || -1);
                J.show();
                d.parentNode.insertBefore(J.element(), d)
            } else J.reset(a.skipoffset || -1)
        };
        this.setCompanions = function (a) {
            var b, d, f, g = Number.MAX_VALUE,
                h = null;
            for (d = a.length; d--;)
                if (b = a[d], b.width && b.height && b.source) switch (b.type) {
                    case "html":
                    case "iframe":
                    case "application/x-shockwave-flash":
                        break;
                    default:
                        f = Math.abs(b.width / b.height - v), f < g && (g = f, 0.75 > f && (h = b))
                }(a = h) ? (null === H && (H = c("div", "companion"), e(u, H)), a.width / a.height > v ?
                    (b = 316, d = a.height * b / a.width) : (d = 176,
                        b = a.width * d / a.height), k.style(H, {
                        "background-image": a.source,
                        "background-size": b + "px " + d + "px"
                    })) : y()
        };
        this.adChanged = function (a) {
            if (a.complete) J && J.reset(-1), M = null;
            else {
                J && (void 0 === a.skipoffset ? m() : (a.position || a.duration) && J.updateSkipTime(a.position |
                    0, a.duration | 0));
                var b = a.tag + a.sequence;
                b !== M && (k(t + " .jwpreview", {
                        opacity: 0
                    }), a.companions ? this.setCompanions(a.companions) : y(), a.clickthrough ? null ===
                    K && (K = c("div", "click-label"), K.innerText = "Click here to learn more \x3e", e(
                        u, K)) : n(), M = b, this.setState(a.newstate))
            }
        };
        this.adsEnded = function () {
            m();
            y();
            n();
            k(t + " .jwpreview", {
                opacity: 0.6
            });
            M = null
        };
        this.destroy = function () {
            this.hide();
            u.parentNode && u.parentNode.removeChild(u)
        }
    }
})(jwplayer, document);
(function (d) {
    var l = jwplayer.utils.extend,
        a = d.logo;
    a.defaults.prefix = "";
    a.defaults.file =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAyCAMAAACkjD/XAAACnVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkSEhIAAAAaGhoAAAAiIiIrKysAAAAxMTEAAAA4ODg+Pj4AAABEREQAAABJSUkAAABOTk5TU1NXV1dcXFxiYmJmZmZqamptbW1xcXF0dHR3d3d9fX2AgICHh4eKioqMjIyOjo6QkJCSkpKUlJSWlpaYmJidnZ2enp6ioqKjo6OlpaWmpqanp6epqamqqqqurq6vr6+wsLCxsbG0tLS1tbW2tra3t7e6urq7u7u8vLy9vb2+vr6/v7/AwMDCwsLFxcXFxcXHx8fIyMjJycnKysrNzc3Ozs7Ozs7Pz8/Pz8/Q0NDR0dHR0dHS0tLU1NTV1dXW1tbW1tbW1tbX19fX19fa2trb29vb29vc3Nzc3Nzf39/f39/f39/f39/g4ODh4eHj4+Pj4+Pk5OTk5OTk5OTk5OTl5eXn5+fn5+fn5+fn5+fn5+fo6Ojo6Ojq6urq6urq6urr6+vr6+vr6+vt7e3t7e3t7e3t7e3u7u7u7u7v7+/v7+/w8PDw8PDw8PDw8PDy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL09PT09PT09PT09PT09PT09PT09PT29vb29vb29vb29vb29vb29vb29vb29vb39/f39/f39/f39/f39/f4+Pj4+Pj4+Pj5+fn5+fn5+fn5+fn5+fn5+fn5+fn6+vr6+vr6+vr6+vr6+vr6+vr8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9/f39/f39/f39/f39/f39/f39/f39/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////9kpi5JAAAA33RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhYWFxcYGBgZGRoaGhsbHBwdHR4eHx8gISIiIyQmJicoKSoqKywtLi4uMDEyMjM0NTU2Njc5Ojo7Ozw9Pj5AQUJCQ0ZGSElKSktMTU5PUFFRUlRVVlZXWFpbXV5eX2BhYmVmZ2hpamtsbW5vcHFyc3R2d3h5enx9fn+BgoKDhIWGiYmKi4yNjo+QkZKTlJWWl5eYmZqbnJ2enp+goaKkpaamp6ipqqusra6vsLKzs7W2t7i5uru8vb6/wMHCwsPExcbHyMnJysvMVK8y+QAAB5FJREFUeNrFmP2f3EQdx8kmm2yy2WQzmZkjl3bJ2Rb12mtp8SiKiBUUxVKFVisIihV62CKCIoK0UvVK1bP07mitBeVJUVso0Duw1Xo9ET0f6JN47bV3u9+/xe83kyzr0+vlL7t8Xq9ubpLpvHfm+7i54P+UVkBp2gWdFpGNYtFA+NtALpYcxzZ1rSM0TSvgv5xse0wwu1joxDYLulE0dKTTSLcqfOvMQ1WzoHXAtCadsGXqBCsUnWDxNBzmlq51wLSuz0LmOcTWClZFfA1ghLUbrUwbdq396kAvK5s6HoFdlb8FuLONB66RlGnD5S8BwKkNoVMsFEw3XIOj97hmoX2updP5kml7jgLp/Ec8yzBKntwDMCnwa7TPtUrkWLrliW2gtC+0TdNhvdMAu1hJ19plYNcP0LGKiJp/HJTeEI5V8sjJ4PZ2mTp1rb7Pf5C5JbvCN0Cuha7jpE5WX9oeU6us8YlTUH8grFQC+QzkWuKVvdTJXuWO0Z5Nk2tNkWNdzgLed+4tdNWrkpPBI20ytVYwK+LrQLpPcHk3vIVm1ZCcDD7jt8fUGmYNoeLpJzKW+1vQYSjJyc72ZKbWSOqqhpn+99r/rn99WDDLbJViHZbJirkWtJDkZPArbhta2jFg7LdKV1ID9aWaz5CTzTD0pvB2aypB9xYPKtaUXEC7bKKjeA1dHyJTU+xbFgY/RiAKP2lYsm28RaJmAtfTs6c4xP9g0gycUqKpeDGLegZPl3MqTL6oWCdl9EIrOol20/U6zyzgVJzpeV6l7Dhl18VP1/N8v1r1vQoNSziH1nPKKMdBChbAiprheygfL65tZmxazguYXDoL8BcyqlhRb0W/M3Wy412YRTUd7SKEFIKzIBQ8DBhHewgSjkLB7GwS54wxwcoORqYQ+QyhFGA9VIYxnfCKq2VtE3k3wTB1taLx+FVCNTRyxnU4YQ/8WEY9M7PvkvJHsEsAam5srRRwH0YBhml14Zv7pRz62+LAD/jWE0vHINU6OUGXyc0Mt5GiLW/+6blV8eO4tY8B6t3qvBsZOnUy+HJgFaiuMELfhQ6RrAe4JZGvwxcFPLx69YZDZ1ciOrB03ayEd52vr0x6/zokhbxs+p5o7Oc3kfrkxFOrV392d+NWFaeaXvK652Cw+xTAo9cS5ar0vKcfy9BrgNRfMVN0SOh+gPfWtgN8L7kM6pcI2FSrJUtm7kc0KxlF2xcHd/1xWxxvmv1QLB9/5cJobDiKIxklcmI4ShJ5eJ/qOTSqU6/BBC4JN6boQSAN71Doi1Mnm+B0Rjlavgabo/GZ2V/LL8FRSehkkfzzYIouoqXf31jz3de7kq5DB6JP1a+vSUQnOXrRoujpn2XogumJpwCeBfhDV4qeAdK1QwqdOhkMqdAyyyk6HoHR3tmD4/UlI/DDBNFxHK1tDBDaNrHODU7KDzTW16Lr6nccHZGxHNt3Jao/RrSU8pPTeX+JPYj4NpAGkxsg16FoWP1xP5Bu8UwdYxSXJXRyJ0zeCtsegdsm4QsLBBwcHf3l+fF5hHbscnDh1LeSaGwvModnTl7ChVRuNiblxIkjR6bq+9+R9RzkO7cBadWCdZBroDaq/jgDqHMLMYtSr8jkpwl9aaOxF9bdDHsb9T5Ev/rkk6N398SIDj3X5zfDzi1bDpxdHNWWwcOchS27funeR+EOyTI0RcyKLIM20VPzyOObeh4LJsZ/hYnaRpgRsTwG9TPzLz5XhyOSDlzykDEKLsEYl08cG0W9eW+U4B1eZZmtY7J13PXCeHeg0MrPjlH8yLiJ/mYtfqIFvQVNTaez/cMrfwHHpJC7APZH0csAP5ARokPPwXyIoEjKaOnM7UIIOfKKrJEJvEAguhZHUY1sHb3vH1tCxyS0OvGtAL+/iMubQOlMXyKfA6U8i+I0PqWyecA3AmyVEmPhczxEdBUbOKwCsHsAtfNUDyZNdiNcLQld8cTYgQHScjExjNPvOf9RSsrZtt3uB3f2s0Dku35MyiY6z6LYjbMdx+HvO7pd11/egBtCvh7mFvs+P70Rl8L0yU8r7WROyXb5b77Dxemv+I7L82wmxoeY53U9+/K8HE1ZvBq4eGQfh1SNa0Keo5tZVCXwXs7KluUwIZjrMsrHTsB95f4B50JwztGURtHywsBjvGphtIUiFeb9Kn4pjzHXUOhmlXPI3Ug/5QH6BjS1uWpRRdLNku3YWPNw4RKVSSqfpKLq3k3bIZXMvFha+NjQqXqlhYxKa9EgFJGVqKCrqD2ZloJrql7Qgq4vw9DKfn0ahp73B+ln3hPQY/xKJEO1CC2P6T49UOP/fD+R5qphSBvAslttQb8YZr1os7/5ry0P8VDNoZK6T8pnZpdW4bb9ZWPQ2NPtlhxf/A5yPUApt+0/MP2uqy5nLkaKLyZycuOKCp13u9mWXXasol4staAPYyprN1p5CvkR1nD5pxz9jQDPu1Pvbii3yklQmr2U/LtDUr9Fngelp0NqwDsmirPtoLRWJdxOiQrp9Yr8XGiTk3XyxF2eFuw3+ju5aRJl1Yu+f+LMM1eiexc6/lK0QuWpYhkd3XT+UsfOXhd2WKpO6W/TO3BUO8H/BB7RwuB6W7b7AAAAAElFTkSuQmCC";
    d.logo =
        function (c, d) {
            "free" == c.edition() ? d = null : (a.defaults.file = "", a.defaults.prefix = "");
            l(this, new a(c, d))
        }
})(jwplayer.html5);
(function (d) {
    var l = d.html5,
        a = l.model;
    l.model = function (c, f) {
        var e = new d.utils.key(c.key),
            h = new a(c, f),
            j = h.componentConfig;
        h.edition = function () {
            return e.edition()
        };
        h.componentConfig = function (a) {
            return "logo" == a ? h.logo : j(a)
        };
        return h
    }
})(jwplayer);
(function (d) {
    var l = d.html5,
        a = l.player;
    l.player = function (c) {
        c = new a(c);
        var f;
        f = c._model.edition();
        if ("enterprise" === f || "ads" === f) f = new d.cast.controller(c, c._model), c.jwStartCasting = f.startCasting,
            c.jwStopCasting = f.stopCasting, c.jwOpenExtension = f.openExtension;
        return c
    };
    a.prototype.edition = function () {
        return this._model.edition()
    }
})(jwplayer);
(function (d) {
    function l(f) {
        if (!a.isFunction(f.supports)) throw {
            message: "Tried to register a provider with an invalid object"
        };
        var e = function () {};
        e.prototype = d.html5.DefaultProvider;
        f.prototype = new e;
        c.unshift(f)
    }
    var a = d._,
        c = [d.html5.YoutubeProvider, d.html5.VideoProvider];
    a.each(d.unregisteredProviders, l);
    delete d.unregisteredProviders;
    d.html5.chooseProvider = function (d) {
        d = a.isObject(d) ? d : {};
        return a.find(c, function (a) {
            return a.supports(d)
        })
    };
    d.html5.registerProvider = l
})(jwplayer);
(function (d) {
    var l = jwplayer.utils.extend,
        a = d.rightclick;
    d.rightclick = function (c, f) {
        if ("free" == c.edition()) f.aboutlink = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + d.version +
            "\x26m\x3dh\x26e\x3df", delete f.abouttext;
        else {
            if (!f.aboutlink) {
                var e = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + d.version +
                    "\x26m\x3dh\x26e\x3d",
                    h = c.edition();
                f.aboutlink = e + ("pro" == h ? "p" : "premium" == h ? "r" : "enterprise" == h ? "e" : "ads" ==
                    h ? "a" : "f")
            }
            f.abouttext ? f.abouttext += " ..." : (e = c.edition(), e = e.charAt(0).toUpperCase() +
                e.substr(1), f.abouttext = "About JW Player " + d.version + " (" + e + " edition)")
        }
        l(this, new a(c, f))
    }
})(jwplayer.html5);
(function (d) {
    var l = d.cast,
        a = d.utils;
    l.adprovider = function (c, f) {
        function e() {
            m = {
                message: g,
                position: 0,
                duration: -1
            }
        }

        function h(b, d) {
            var e = {
                command: b
            };
            void 0 !== d && (e.args = d);
            f.sendMessage(c, e, a.noop, function (a) {
                l.error("message send error", a)
            })
        }
        var j = new l.provider(c, f),
            b = a.extend(this, j),
            m, g = "Loading ad",
            k = 0;
        b.init = function () {
            j.init();
            e()
        };
        b.destroy = function () {
            j.destroy()
        };
        b.updateModel = function (a, b) {
            (a.tag || a.newstate || a.sequence || a.companions) && l.log("received ad change:", a);
            a.tag && (m.tag && a.tag !==
                m.tag) && (l.error("ad messages not received in order. new model:", a, "old model:", m),
                e());
            d.utils.extend(m, a);
            j.updateModel(a, b)
        };
        b.getAdModel = function () {
            var b = a.extend({}, m);
            if (0 < m.duration) {
                var c = m,
                    d = c.message.replace(/xx/gi, "" + Math.min(c.duration | 0, Math.ceil(c.duration - c.position)));
                c.podMessage && 1 < c.podcount && (d = c.podMessage.replace(/__AD_POD_CURRENT__/g, "" + c.sequence)
                    .replace(/__AD_POD_LENGTH__/g, "" + c.podcount) + d);
                b.message = d
            } else b.message = g;
            return b
        };
        b.resetAdModel = function () {
            e()
        };
        b.skipAd = function (a) {
            h("skipAd", {
                tag: a.tag
            })
        };
        b.clickAd = function (a) {
            k = (new Date).getTime();
            h("clickAd", {
                tag: a.tag
            })
        };
        b.timeSinceClick = function () {
            return (new Date).getTime() - k
        }
    }
})(window.jwplayer);
(function (d) {
    var l = d.cast,
        a = d.utils,
        c = d.events,
        f = d._,
        e = c.state;
    l.provider = function (d) {
        function j(a) {
            g.oldstate = g.newstate;
            g.newstate = a;
            b.sendEvent(c.JWPLAYER_PLAYER_STATE, {
                oldstate: g.oldstate,
                newstate: g.newstate
            })
        }
        var b = a.extend(this, new c.eventdispatcher("cast.provider")),
            m = -1,
            g = {
                newstate: e.IDLE,
                oldstate: e.IDLE,
                buffer: 0,
                position: 0,
                duration: -1,
                audioMode: !1
            },
            k = document.createElement("div");
        k.className = "jwcast-screen";
        k.onclick = function () {
            b.sendEvent(c.JWPLAYER_PROVIDER_CLICK)
        };
        b.isCaster = !0;
        b.init =
            function () {};
        b.destroy = function () {
            clearTimeout(m);
            _castSession = null
        };
        b.updateModel = function (a, d) {
            a.newstate && (g.newstate = a.newstate, g.oldstate = a.oldstate || g.oldstate, b.sendEvent(c.JWPLAYER_PLAYER_STATE, {
                oldstate: g.oldstate,
                newstate: g.newstate
            }));
            if ("ad" !== d) {
                if (void 0 !== a.position || void 0 !== a.duration) void 0 !== a.position && (g.position =
                    a.position), void 0 !== a.duration && (g.duration = a.duration), b.sendEvent(c.JWPLAYER_MEDIA_TIME, {
                    position: g.position,
                    duration: g.duration
                });
                void 0 !== a.buffer && (g.buffer = a.buffer,
                    b.sendEvent(c.JWPLAYER_MEDIA_BUFFER, {
                        bufferPercent: g.buffer
                    }))
            }
        };
        b.supportsFullscreen = function () {
            return !1
        };
        b.setup = function (a, b) {
            b.state && (g.newstate = b.state);
            void 0 !== b.buffer && (g.buffer = b.buffer);
            void 0 !== a.position && (g.position = a.position);
            void 0 !== a.duration && (g.duration = a.duration);
            j(e.BUFFERING);
            d("setup", a)
        };
        b.playlistItem = function (a) {
            j(e.BUFFERING);
            d("item", a)
        };
        b.load = function (a) {
            j(e.BUFFERING);
            d("load", a)
        };
        b.stop = function () {
            clearTimeout(m);
            m = setTimeout(function () {
                j(e.IDLE);
                d("stop")
            }, 0)
        };
        b.play = function () {
            d("play")
        };
        b.pause = function () {
            j(e.PAUSED);
            d("pause")
        };
        b.seek = function (a) {
            j(e.BUFFERING);
            b.sendEvent(c.JWPLAYER_MEDIA_SEEK, {
                position: g.position,
                offset: a
            });
            d("seek", a)
        };
        b.audioMode = function () {
            return g.audioMode
        };
        b.sendCommand = function (a, b) {
            d(a, b)
        };
        b.detachMedia = function () {
            l.error("detachMedia called while casting");
            return document.createElement("video")
        };
        b.attachMedia = function () {
            l.error("attachMedia called while casting")
        };
        var q;
        b.setContainer = function (a) {
            a.appendChild(k);
            q = a
        };
        b.getContainer =
            function () {
                return q
            };
        b.remove = function () {
            q.removeChild(k)
        };
        b.volume = b.mute = b.setControls = b.setCurrentQuality = b.resize = b.seekDrag = b.addCaptions = b.resetCaptions =
            b.setVisibility = b.fsCaptions = a.noop;
        b.setFullScreen = b.getFullScreen = b.checkComplete = f.constant(!1);
        b.getWidth = b.getHeight = b.getCurrentQuality = f.constant(0);
        b.getQualityLevels = f.constant(["Auto"])
    };
    a.css(".jwplayer .jwcast-screen", {
        width: "100%",
        height: "100%"
    })
})(window.jwplayer);
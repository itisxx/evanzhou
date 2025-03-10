(function (k) {
    var m = k.sharing = {},
        h = k.utils;
    k().registerPlugin("sharing", "6.0", function (d, a, b) {
        function g(p) {
            setTimeout(j, 200);
            b.style.opacity = 0;
            d.setControls(!0);
            p = d.getPlaylist()[p.index];
            n = void 0;
            a.code && (0 < a.code.indexOf("MEDIAID") && p.mediaid ? n = a.code.replace("MEDIAID", p.mediaid) :
                -1 === a.code.indexOf("MEDIAID") && (n = a.code));
            n && "%3C" === n.substr(0, 3) && (n = decodeURIComponent(n));
            q = window.location.toString();
            window.top !== window && (q = document.referrer);
            a.link && (0 < a.link.indexOf("MEDIAID") && p.mediaid ? q =
                a.link.replace("MEDIAID", p.mediaid) : -1 === a.link.indexOf("MEDIAID") && (q = a.link)
            );
            l && (r.setText(n), u.setText(q), n ? (c(r.getDiv(), {
                left: "0px",
                top: "30px",
                display: "block"
            }), c(u.getDiv(), {
                left: "0px",
                top: "72px"
            }), c(v, {
                left: "80px",
                top: "114px"
            }), c(w, {
                left: "120px",
                top: "114px"
            }), c(x, {
                left: "160px",
                top: "114px"
            })) : (c(r.getDiv(), {
                display: "none"
            }), c(u.getDiv(), {
                left: "0px",
                top: "30px"
            }), c(v, {
                left: "80px",
                top: "72px"
            }), c(w, {
                left: "120px",
                top: "72px"
            }), c(x, {
                left: "160px",
                top: "72px"
            })), f())
        }

        function f() {
            s = [b.clientWidth, b.clientHeight];
            c(b, {
                backgroundPosition: s[0] - 32 + "px 18px,center center"
            });
            r.resize(s[0]);
            u.resize(s[0]);
            var p = Math.round(s[0] / 2 - r.getWidth() / 2),
                a = Math.round(s[1] / 2 - 50);
            n && (a -= 20);
            c(l, {
                left: p + "px",
                top: a + "px"
            })
        }

        function e() {
            z || ("PLAYING" === d.getState() && d.pause(), f(), A = setInterval(function () {
                b.clientWidth !== s[0] && f()
            }, 250), b.style.visibility = "visible", b.style.opacity = 1, d.setControls(!1))
        }

        function t(a) {
            A && clearInterval(A);
            a.target === b && (setTimeout(j, 200), b.style.opacity = 0, d.setControls(!0))
        }

        function j() {
            b.style.visibility =
                "hidden"
        }

        function c(a, b) {
            h.foreach(b, function (b, c) {
                a.style[b] = c
            })
        }

        function k() {
            var a = C + encodeURIComponent(q);
            window.open(a, "_blank");
            window.focus();
            return !1
        }

        function B() {
            var a = "mailto:?body\x3d" + encodeURIComponent(q);
            window.open(a, "_blank");
            window.focus();
            return !1
        }

        function D() {
            var a = E + encodeURIComponent(q);
            window.open(a, "_blank");
            window.focus();
            return !1
        }
        var n, r, s, v, E = "http://www.facebook.com/sharer/sharer.php?u\x3d",
            l, y, q, u, w, C = "http://twitter.com/intent/tweet?url\x3d",
            x, z = !1,
            A;
        this.resize = function () {
            "flash" !==
            d.getRenderingMode() && l && f()
        };
        d.onReady(function () {
            "flash" !== d.getRenderingMode() && (a.heading = "string" === h.typeOf(a.heading) ? a.heading :
                "Share Video", d.onPlaylistItem(g), d.addButton(
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMxJREFUeNpiYCAR/P//nx+I1/9HgP0gMQYyDKr/jwn2k2PQfSwG/WchwQB/IBUAxAp4FQHxfCDuB2J9JHF9qNj7//jBe5DieCwSIM3nsYiDAjkfi8HxjGDTGBgE8PjqAhAvAGFGRsaPUJfKA6kEqPwGoPhFBjzORfEmIcCERw4UqB9Iic75BAJyPtQrILX20HSUj5EIoSkVZth7qJfssaSX9egxBbOAGNfG40qAMNdSI1ugZA0mIs3awEAtgMOL8eQYpI9mWD+yPECAAQD6jshl3zhTjgAAAABJRU5ErkJggg\x3d\x3d",
                    a.heading,
                    function () {
                        e()
                    }, "share"), b.style.visibility = "hidden", h.isMobile() ? (new h.touch(b))
                .addEventListener(h.touchEvents.TAP, function (a) {
                    t(a)
                }) : b.onclick = t, c(b, {
                    backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAItJREFUeNp8kUEOABEMRXUysXQnJ5k5GidxAmcxsbQxmiAlLUlD/df6UDnn1KK2eJQwUOtMAlwQ7TXG+B1ukxv5hRDRHT1ph5EFSRgN9tPh0E2drO6Xo7E8xk2TGKPSWi9NSilLPi2FEI6WrLV+FjAwe2ksAg4e3TgNCyoHS1bx4z4JxtH3hsXvF2AAnU9uUtSy19QAAAAASUVORK5CYII\x3d),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAYAAAAp8ov1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEdJREFUeNpilpSUvMHEwMDwn+k/EEBY+LkwFgMuCWINwDCPVB30cBoDaTpgBMMoQU2CkYkRCCAsNC6pEgyUGoBHYvA6DSDAAOnHjLU15EHNAAAAAElFTkSuQmCC)",
                    backgroundPosition: "right top,center center",
                    backgroundRepeat: "no-repeat,no-repeat",
                    backgroundSize: "auto auto,100% 100%",
                    opacity: 0,
                    "z-index": 101,
                    webkitTransition: "opacity 250ms linear",
                    mozTransition: "opacity 250ms linear",
                    msTransition: "opacity 250ms linear",
                    oTransition: "opacity 250ms linear",
                    transition: "opacity 250ms linear",
                    cursor: "pointer",
                    width: "100%",
                    height: "100%"
                }), l = document.createElement("div"), b.appendChild(l), c(l, {
                    cursor: "default",
                    position: "absolute",
                    border: "none",
                    width: "320px"
                }), y = document.createElement("div"),
                y.innerHTML = a.heading, c(y, {
                    position: "absolute",
                    border: "none",
                    color: "#FFF",
                    display: "block",
                    font: "15px Arial",
                    overflow: "hidden",
                    width: "230px",
                    height: "20px",
                    left: "80px",
                    margin: "0 0 0 0",
                    textTransform: "none",
                    textShadow: "#000 1px 1px 0",
                    padding: "0 0 0 0"
                }), l.appendChild(y), r = new m.row("Embed code"), l.appendChild(r.getDiv()), u =
                new m.row("Video link"), l.appendChild(u.getDiv()), v = m.shortcut(
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARlJREFUeNpiTKzdzEAbwPL/PwPtjP4/FF3NQDOj/5Hl7O9fv3//9v3d63fIgipaKqiu/key0UATFSW5jSzVUyIskcWjKzZS5GqgY4Nc1VMjrDCl0Iwi2WhVWX6s5mIxmtTEpyYrgEvqP7qrSQzrZKTw/fP336odV24+/HD17musKYS0OGRiZERoZma68fDDlTuvqZn44ODS7VeUZvQndx5gFX98+z6cLaOiQE5Yn91SSlDcN28VNQOEmumaBKMpKVSBZsETzJJtVzDTNVGmuGUuhzB2TY9ETohwceonPjzaaWk0GYUqSrnxb0Bc/ePrV0qMxqOdRUVVmhKj8Whn+fXjFyVG49HORLMKfYgazUKqhtCytUSqBAgwAPLTpnqcD79pAAAAAElFTkSuQmCC",
                    "Facebook", D), l.appendChild(v), w = m.shortcut(
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUBEhkqy6UoOgAAAhxJREFUSMftlc1rE0EYxt93ZpLdJJukaRJoQUuVpkoQCo1YPUgRxYv04MGLx/YuBb2K4NEingShKPbgRfpHiAgFD2ILPVixtRBSCW01a5r9nHk9VXSzSTdCwEPnOB+/ed5nnplBWN6D/jQGfWvH6P8cTQDqn9HUeYWCvIYXC0JnhxuoXtBTeRHarzN4NWXszuRWrmSsm4MLE8lhnT04lxhJ8ghognGDv5nOzI5qGJCvYPlS+vZI/HfHvXG9dmPgcl4MxrG90BB0QUNJtDiZWqykhpMMfAICIKjkxdViSDUxhooogmqEjw3pK2AIs6Pa+rXsk4pRyjDwaEjDdkDdofvr1lpDAgaHRDu65dLjz/bDcgIBcnGcH9Pmx7SmTzs2xVkQ0JL03VPRjpHgQkGcz3HT+0uiIbBkMN4mzfQoMLObIe/3/XJaZGIYJeI1W1Utihw+guvvzH2XjuT6BG93femryGiErZ9q7sPBp6bsjv7h0suvDjDs5TYinNTZGYN3Rz/asHeaIdnokJBD9NMvdkvS3CltIsuTPGT10razsGGBwF7eEAIgUAqebzrPNp1Qy19X3Turre41BVUjQjnLSyk+OSBunYidTQc9MX1a2nbvrh14Rz1+QTQp+GbRzBCbLgrBYM+lBEdJZHpUs9VqQ77YclbqXhcf/jA19EeXxAWeTvGihjpHRWB6VLVk3VKACJES3wl9/Dceo/uP/gV+Hs1CtIpsKgAAAABJRU5ErkJggg\x3d\x3d",
                    "Twitter", k), l.appendChild(w), x = m.shortcut(
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9pJREFUeNqslllLa0EMxzvTqnVfaF9cUBRFBDf02e/pt3F/EtxAEEEUxA0fxF1Pa/2d82/jOL334cINeJqZJP9JMknG3Orq6t3dXbVa/fpPBBSAwLrb29uBgYFKRrmA8vm8GFT5eu8xy/0mdCQNTWq1Wltb2/39vQPx4+PDOYdSpGrGti9j439ELpf3PzqgtbS0eJxvbW2VR1I10PAk7UtNxhLJxNWcmcAUCgVgfblcXltbIwTD4kv4BhSmhWDFi7EgfN4jU6LBBbBUKnkWy8vLLAjBHJFTOqCx8ysbtm+eUgboF4vF9fV1ADnGg4LLQkdgqmEesMHL6MaijCkPgAAFA6x7fX1lN0mS9/f3w8PDlZWVz8/P3F8oKhvMLTJEGxsb8/PzOEoC5FAqY4HLU1NTiGFCg/B+olsl49rBHMPp6emOjg4lFpGn+Ezc19c3OTlJUNRMmJYwCc1BYIgJhp2dnVY5KbQcrGZEjvr7+ycmJnSrVjCqFrtkta54QhQuhvBA60ivHnMZwaghu7q6RkdHMdBtcA0Cko51M1/SitrY2Bh5AM6kSUY+aZBrENlob2/HgDIyAx2gr6mhgFoxI4lE8p2qSolF9vslvqenB4/wfWtri2OkQ0zKIF/ShQgF1EgxIu0bk0IrzFrWS0lSMe+6u7tJyMjIyObmJkBhNoSLiJhQUxAWuqXBRx5BOpkvSYcBYnt7m/ClCcOSTQ4GN6u/2FaO168xHLg6WSnq7e0ltKGhoZ2dHQInOTDDw8OIwFUVhKM+dN9dX19nnQN6LRrB8PQnjfD4+AjW1dUVm4ODg1jRAcfHx3Nzc2FziqxF06cgGjfGHB0dMRCY5syAl5cXNQKW+Kvu3d3dnZmZCdvHJnha2mElKjNiwF1aWnp+fmYHPSpX1Q1TKOQ54+3tbXFxEd/DlMJUKvVCcApT53xlgxH+5ORkYWEB4+bnJsoA2d/f38f38BmqD3HOt6JhzRdcBhhJkC/6UgZqd8UnHhGJinxX+frGhKtZ0ZyenuIvBio1lVHWAuncsY7QbJMCY5n7xFAVrFJOX4/Ly0s45fHs7Ax/wbU3UEnQ7UUvskj1p8s4ODgYHx+3BKZeCxpcDufetPxXwhBzQLRMT1Vo5+fns7OziKM8WKMaNaZNXU1PaJaBCuaAAFWfIfxdXFxwxQ8PD1aCclzXJSwrTU2bsNp0b/Qkxzw9PQEFYPofBD/UP/3W/KyEbflHHn/tDsJ9xgMPrKcb9b6EvaNCtNFMsFFtaWnRhC8GUAQNbGFvb895Vy6VaVzVo3mtZfO/egKVyL6mj083NzfAfgswACBs40J0KAZ5AAAAAElFTkSuQmCC",
                    "Email", B), l.appendChild(x))
        });
        d.onCast(function (b) {
            b.active ? (z = !0, d.removeButton("share")) : (z = !1, d.addButton(
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMxJREFUeNpiYCAR/P//nx+I1/9HgP0gMQYyDKr/jwn2k2PQfSwG/WchwQB/IBUAxAp4FQHxfCDuB2J9JHF9qNj7//jBe5DieCwSIM3nsYiDAjkfi8HxjGDTGBgE8PjqAhAvAGFGRsaPUJfKA6kEqPwGoPhFBjzORfEmIcCERw4UqB9Iic75BAJyPtQrILX20HSUj5EIoSkVZth7qJfssaSX9egxBbOAGNfG40qAMNdSI1ugZA0mIs3awEAtgMOL8eQYpI9mWD+yPECAAQD6jshl3zhTjgAAAABJRU5ErkJggg\x3d\x3d",
                a.heading,
                function () {
                    e()
                }, "share"))
        })
    })
})(jwplayer);
(function (k) {
    var m = jwplayer.utils;
    k.row = function (h) {
        function d() {
            g(e, c);
            g(j, c)
        }

        function a() {
            g(e, k);
            g(j, k)
        }

        function b(a) {
            e.select();
            a.preventDefault()
        }

        function g(a, b) {
            m.foreach(b, function (b, c) {
                a.style[b] = c
            })
        }
        var f, e, t, j, c = {
                webkitBoxShadow: "0 0 4px #FFFFFF",
                MozBoxShadow: "0 0 4px #FFFFFF",
                msBoxShadow: "0 0 4px #FFFFFF",
                oBoxShadow: "0 0 4px #FFFFFF",
                boxShadow: "0 0 4px #FFFFFF"
            },
            k = {
                webkitBoxShadow: "0 0 4px #000",
                MozBoxShadow: "0 0 4px #000",
                msBoxShadow: "0 0 4px #000",
                oBoxShadow: "0 0 4px #000",
                boxShadow: "0 0 4px #000"
            };
        this.getDiv = function () {
            return f
        };
        this.setText = function (a) {
            e.setAttribute("value", a)
        };
        this.getWidth = function () {
            return parseInt(j.style.left) + 50
        };
        this.resize = function (a) {
            a -= 230;
            100 > a ? a = 100 : 400 < a && (a = 400);
            var b = 89 + a;
            g(e, {
                width: a + "px"
            });
            g(j, {
                left: b + "px"
            })
        };
        f = document.createElement("div");
        g(f, {
            border: "none",
            position: "absolute",
            left: "0px",
            width: "312px",
            height: "30px",
            margin: "0 0 0 0",
            padding: "0 0 0 0"
        });
        t = document.createElement("label");
        t.innerHTML = h;
        f.appendChild(t);
        g(t, {
            border: "none",
            color: "#FFF",
            display: "block",
            font: "12px Arial",
            overflow: "hidden",
            width: "74px",
            position: "absolute",
            top: "10px",
            left: "0px",
            textAlign: "right",
            textTransform: "none",
            padding: "0 0 0 0"
        });
        e = document.createElement("input");
        e.setAttribute("type", "text");
        e.tabIndex = -1;
        try {
            document.createEvent("TouchEvent")
        } catch (B) {
            e.setAttribute("readonly", "readonly")
        }
        g(e, {
            position: "absolute",
            left: "80px",
            top: "0px",
            font: "11px Arial",
            webkitBoxShadow: "0 0 4px #000",
            MozBoxShadow: "0 0 4px #000",
            msBoxShadow: "0 0 4px #000",
            oBoxShadow: "0 0 4px #000",
            boxShadow: "0 0 4px #000",
            padding: "0px 5px",
            background: "#FFF",
            width: "190px",
            height: "28px",
            margin: "0 0 0 0",
            border: "none"
        });
        f.appendChild(e);
        j = document.createElement("div");
        j.innerHTML = "Select";
        m.isMobile() ? (new m.touch(j)).addEventListener(m.touchEvents.TAP, function (a) {
            b(a)
        }) : (j.onclick = b, j.onmouseover = d, j.onmouseout = a);
        g(j, {
            position: "absolute",
            left: "275px",
            background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcCAIAAAAvP0KbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeNpisre3Z/r37x8c////H4VPjjgeMYAAAwBV/1FjCd0OtgAAAABJRU5ErkJggg\x3d\x3d)",
            backgroundSize: "100% 100%",
            color: "#FFF",
            font: "11px Arial",
            width: "50px",
            height: "28px",
            "line-height": "28px",
            margin: "0 0 0 0",
            textAlign: "center",
            webkitBoxShadow: "0 0 4px #000",
            MozBoxShadow: "0 0 4px #000",
            msBoxShadow: "0 0 4px #000",
            oBoxShadow: "0 0 4px #000",
            boxShadow: "0 0 4px #000",
            padding: "0px 5px",
            "vertical-align": "center",
            border: "none",
            cursor: "pointer"
        });
        f.appendChild(j)
    }
})(jwplayer.sharing);
(function (k) {
    k.shortcut = function (k, h, d) {
        function a() {
            g(f, {
                webkitBoxShadow: "0 0 4px #FFF",
                MozBoxShadow: "0 0 4px #FFF",
                msBoxShadow: "0 0 4px #FFF",
                oBoxShadow: "0 0 4px #FFF",
                boxShadow: "0 0 4px #FFF"
            })
        }

        function b() {
            g(f, {
                webkitBoxShadow: "0 0 4px #000",
                MozBoxShadow: "0 0 4px #000",
                msBoxShadow: "0 0 4px #000",
                oBoxShadow: "0 0 4px #000",
                boxShadow: "0 0 4px #000"
            })
        }

        function g(a, b) {
            e.foreach(b, function (b, d) {
                a.style[b] = d
            })
        }
        var f, e = jwplayer.utils;
        h = document.createElement("div");
        e.isMobile() ? (new e.touch(h)).addEventListener(e.touchEvents.TAP,
            function (a) {
                d(a)
            }) : (h.onclick = d, h.onmouseout = b, h.onmouseover = a);
        g(h, {
            cursor: "pointer",
            position: "absolute",
            border: "none",
            color: "#FFF",
            display: "block",
            font: "11px/18px Arial,sans-serif",
            margin: "0 0 0 0",
            textAlign: "left",
            textDecoration: "none",
            textTransform: "none",
            padding: "0 0 0 10px",
            width: "30px",
            height: "30px"
        });
        f = document.createElement("img");
        f.setAttribute("src", k);
        g(f, {
            webkitBoxShadow: "0 0 4px #000",
            MozBoxShadow: "0 0 4px #000",
            msBoxShadow: "0 0 4px #000",
            oBoxShadow: "0 0 4px #000",
            boxShadow: "0 0 4px #000",
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "30px",
            height: "30px",
            margin: "0 0 0 0",
            padding: "0 0 0 0"
        });
        h.appendChild(f);
        return h
    }
})(jwplayer.sharing);
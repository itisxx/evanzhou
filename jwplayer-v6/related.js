(function (j) {
    var g = j.utils;
    j().registerPlugin("related", "6.0", function (b, e, f) {
        function v() {
            w || (t(), x = setInterval(function () {
                f.clientWidth !== a[2] && t()
            }, 250), b.pause(!0), f.style.visibility = "visible", f.style.opacity = 1, b.setControls(
                !1), !1 == y && (y = !0, r ? (n.innerHTML = "", g.ajax(r, D, h)) : h(
                "No related videos file found")))
        }

        function z(c) {
            "play" === e.onclick ? (b.load(c), b.play()) : window.top.location = c.link
        }

        function A() {
            !1 !== e.oncomplete && setTimeout(u, 50)
        }

        function u() {
            "IDLE" === b.getState() && v()
        }

        function h(c) {
            c ===
                r ? g.log("RELATED: Failed to load " + c) : g.log("RELATED: " + c);
            p.innerHTML = "";
            n.innerHTML = "No related videos found";
            a[4] = 200;
            a[5] = 0;
            B(a[2], a[3])
        }

        function d() {
            x && clearInterval(x);
            setTimeout(l, 200);
            f.style.opacity = 0;
            b.setControls(!0)
        }

        function l() {
            f.style.visibility = "hidden"
        }

        function m(c) {
            y = !1;
            r = void 0;
            s = [];
            p.innerHTML = "";
            d();
            c = b.getPlaylist()[c.index];
            e.file && (0 < e.file.indexOf("MEDIAID") && c.mediaid ? r = e.file.replace("MEDIAID", c.mediaid) :
                -1 === e.file.indexOf("MEDIAID") && (r = e.file));
            b.addButton(C, e.heading ?
                e.heading : "Related Videos", v, "related")
        }

        function D(c) {
            var a = [];
            try {
                a = j.parsers.rssparser.parse(c.responseXML.firstChild)
            } catch (b) {
                g.log(b);
                h("This feed is not valid XML and/or RSS.");
                return
            }
            for (c = 0; c < a.length; c++) a[c].image && (a[c].title && ("play" === e.onclick && a[c].sources[
                0].file || "play" !== e.onclick && a[c].link)) && s.push(a[c]);
            0 === a.length && h("RSS feed has 0 entries that contain title, link and image.");
            t()
        }

        function t() {
            p.innerHTML = "";
            if (void 0 !== s && s.length) {
                var c = 0,
                    b = 0;
                a[2] = f.clientWidth;
                a[3] = f.clientHeight;
                a[4] = 0;
                for (var d = a[5] = 0; d < s.length; d++) {
                    var g = j.related.thumb(a[0], a[1], s[d], z);
                    p.appendChild(g);
                    k(g, {
                        left: (a[0] + 10) * c + "px",
                        top: (a[1] + 10) * b + "px"
                    });
                    a[4] = Math.max(a[4], a[0] * (c + 1) + 10 * c);
                    a[5] = Math.max(a[5], a[1] * (b + 1) + 10 * b);
                    if ((a[0] + 10) * (c + 2) > a[2])
                        if ((a[1] + 10) * (b + 2) > a[3] - 80) break;
                        else b++, c = 0;
                    else c++
                }
                n.innerHTML = e.heading ? e.heading : "Related Videos";
                B(a[2], a[3])
            }
        }

        function B(c, b) {
            k(q, {
                left: c - 32 + "px"
            });
            k(p, {
                left: Math.round(c / 2 - a[4] / 2) + "px",
                top: Math.round(b / 2 - a[5] / 2) + "px"
            });
            k(n, {
                left: Math.round(c / 2 - a[4] /
                    2) + "px",
                width: a[4] + "px",
                top: Math.round(b / 2 - a[5] / 2 - 30) + "px"
            })
        }

        function k(c, a) {
            g.foreach(a, function (a, b) {
                c.style[a] = b
            })
        }
        var q, a, r, n, p, y, s, x, w = !1,
            E = {
                cursor: "pointer",
                position: "absolute",
                left: "120px",
                top: "20px",
                margin: "0px",
                padding: "0px",
                display: "block",
                width: "12px",
                height: "12px"
            },
            F = {
                backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAYAAAAp8ov1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEdJREFUeNpilpSUvMHEwMDwn+k/EEBY+LkwFgMuCWINwDCPVB30cBoDaTpgBMMoQU2CkYkRCCAsNC6pEgyUGoBHYvA6DSDAAOnHjLU15EHNAAAAAElFTkSuQmCC)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                opacity: 0,
                "z-index": 101,
                webkitTransition: "opacity 250ms linear",
                MozTransition: "opacity 250ms linear",
                msTransition: "opacity 250ms linear",
                transition: "opacity 250ms linear",
                cursor: "pointer",
                visibility: "hidden",
                width: "100%",
                height: "100%"
            },
            G = {
                position: "absolute",
                border: "none",
                color: "#FFF",
                display: "block",
                font: "15px Arial",
                overflow: "hidden",
                width: "240px",
                margin: "0 0 0 0",
                textAlign: "center",
                textTransform: "none",
                padding: "0 0 0 0"
            },
            C =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALVJREFUeNqsVMERhCAMzNmAJVgaJWAHlGIJluB1YAnYASXEwOVmctzCR3YmOia7a4IgkQEzO4nI/zg0amSuoxqSnCVOiSTh87Op7cZgrzReNafVkL79N/nJB9BVaDRz2DETMFu4jQWYpjK+rkMAy7B1DDfAz9NEUsIMCLFjGBvfgV/lIgAEpg5amuGG07ddoLk6fhcaOd8nLa5A9O4YotpavIZvm+Eb++HRc/DoPfw5eOtxCzAABeIMZWrWSG0AAAAASUVORK5CYII\x3d";
        b.onReady(function () {
            if ("flash" !== b.getRenderingMode()) {
                b.onPlaylistItem(m);
                b.onComplete(A);
                k(f, F);
                if (g.isMobile()) {
                    var a = new g.touch(f);
                    a.addEventListener(g.touchEvents.TAP, function (a) {
                        d(a)
                    })
                } else f.onclick = d;
                q = document.createElement("div");
                k(q, E);
                k(q, {
                    background: "transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAItJREFUeNp8kUEOABEMRXUysXQnJ5k5GidxAmcxsbQxmiAlLUlD/df6UDnn1KK2eJQwUOtMAlwQ7TXG+B1ukxv5hRDRHT1ph5EFSRgN9tPh0E2drO6Xo7E8xk2TGKPSWi9NSilLPi2FEI6WrLV+FjAwe2ksAg4e3TgNCyoHS1bx4z4JxtH3hsXvF2AAnU9uUtSy19QAAAAASUVORK5CYII\x3d)"
                });
                g.isMobile() ? (a = new g.touch(q), a.addEventListener(g.touchEvents.TAP, function (
                    a) {
                    d(a)
                })) : q.onclick = d;
                f.appendChild(q);
                n = document.createElement("div");
                n.innerHTML = e.heading ? e.heading : "Related Videos";
                k(n, G);
                f.appendChild(n);
                p = document.createElement("div");
                f.appendChild(p);
                k(p, {
                    position: "absolute"
                })
            }
        });
        b.onPlay(d);
        b.onCast(function (a) {
            a.active ? (w = !0, b.removeButton("related")) : (w = !1, b.addButton(C, e.heading ? e.heading :
                "Related Videos", v, "related"))
        });
        this.resize = function (c, d) {
            if ("flash" != b.getRenderingMode()) {
                a = [140, 90, c, d, 200, 0];
                k(q, {
                    left: c - 32 + "px"
                });
                if (e.dimensions)
                    for (var g = e.dimensions.split("x"), f = 0; 2 > f; f++) a[f] = parseInt(g[f]);
                t()
            }
        }
    })
})(jwplayer);
(function (j) {
    var g = j.utils;
    j.related || (j.related = {}, j.related.thumb = function (b, e, f, j) {
        function z() {
            h(d, {
                webkitBoxShadow: "0 0 4px #FFF",
                MozBoxShadow: "0 0 4px #FFF",
                msBoxShadow: "0 0 4px #FFF",
                boxShadow: "0 0 4px #FFF"
            });
            h(m, {
                color: "#FFF"
            })
        }

        function A() {
            h(d, {
                webkitBoxShadow: "0 0 4px #000",
                MozBoxShadow: "0 0 4px #000",
                msBoxShadow: "0 0 4px #000",
                boxShadow: "0 0 4px #000"
            });
            h(m, {
                color: "#CCC"
            })
        }

        function u() {
            j(f)
        }

        function h(b, d) {
            g.foreach(d, function (d, e) {
                b.style[d] = e
            })
        }
        var d, l, m;
        d = document.createElement("div");
        g.isMobile() ? (new g.touch(d)).addEventListener(g.touchEvents.TAP, function (b) {
            u(b)
        }) : (d.onclick = u, d.onmouseout = A, d.onmouseover = z);
        h(d, {
            webkitBoxShadow: "0 0 4px #000",
            MozBoxShadow: "0 0 4px #000",
            msBoxShadow: "0 0 4px #000",
            boxShadow: "0 0 4px #000",
            backgroundColor: "#000",
            backgroundSize: "cover",
            position: "absolute",
            textDecoration: "none",
            display: "block",
            margin: "0 0 0 0",
            padding: "0 0 0 0",
            overflow: "hidden"
        });
        h(d, {
            backgroundImage: "url(" + f.image + ")",
            width: b - 2 + "px",
            height: e - 2 + "px"
        });
        l = document.createElement("img");
        l.setAttribute("src",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABGCAYAAABL0p+yAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACF9JREFUeNrsXYtO20gUtccWILoIFgS0IKDQAoUusEBBS///c6IQqwIJoqAdT/z2PO487NjJvZIJNxBnYE7u48yxx/9+9PWCEOL5vs+O+HuhH3+fPOcnzyl9Ep8nPwfhPU/i1xV+XvOn75s9L/Tzx3zs0/eR+tnY8/FwfXZ+kT89Vzqe9G+c/r2A8ZD0/arjkYxPOp7qXObnIjwf9Cg6d35o2Ds9BmHxRKXJVvnFx3QCMj8HoxwMKbBVk0+4wK5NttQHgrEABp8UPjAp0AsTkE1izSecD15hElW+8P0lj+n7p/9P3vikwK7Mla/y87nSBN4fegzpOV5jJwyCoBKZ9MAommzloyjqEc5kC31RlFX5kKjrK8AgGZ8QjNXIIwcjOMpVo3Ap6laBzQ8SNaAD5jA2IPgmCfAG9HXj4g/CIrCqqbYc5UQD9hVgsABjEfhKMGpEIgswlic5PxfJokHFTya/6kujnBYYFFEZEnU1wagR9eI0+0yPEX3tB+8X4ClYI+U2DsZq/ecIjOk/O32/ul+s88RgFEZhk5TrHIwAcBIxGIFR74UeEX1tpPpFsxTMmfz8ky9qYAp1HdfnROEC+KQ+AUSiki+rpzh1FNfXTLktglEUdUt+YW7LPil/8IhWkzFK6rs3aEEoTcFyMHD+AE0wQrpZcdQV+LXuWu7Lu1lRlJOkYOnkE/4HURp1+d2s0NfoZqH1oAJ4cX03TCLe2NO0kNAIqAQfB4zcbtaku4V0r6UOzITa4Ly/KCprp1wVGCDg1AMjr6Fx0c1qUivvSVMReRYWBoRoDhhIrTQCRnueTZpypSlY3M3CqQ07Dq/a3WY+mEN0Qq2UaBRbYxFQRCA7o1a0GwhFai0V+SKS1STlWgK9RTDqNRBAqoU+7/ncJkNIo9gDENLdzrqbhRLKgkhgRigbdLNgDtFVNytb3ZCDERj1lDSKNQADKRjUYAR1t8putgFCGdxNmoARSiibjEcMRtNu1oBQBtMoTlKwiGqpURc6dV4J0C5TriWhbA1GCfWiAUZ5nQdvaGxSLifqadMobiKgDqGsmmSnS21mYJR2sxqEMoxaEVAtEGpFVedJga6XciWEshWN4qQG9B1EOSNC2WppSxV1Ad2sorsV11mVyfZFvizqVsdnSygTALBLUc8JjeIuBTtMudarG5pg7LM8SkUoy31IPZjPTQI8pzSK4y7YjVYPRijry6Oa1eoZ8my6qxuWWj1DQnlCj0ZoFDcAtNLqFf2OaPVMRAkgrR4w5XZHq/dOj0ZpFPsmhCdGcCKPklAXHdTqma8mmKRgt/IoTnf7Qo+Izm3kddzqcqwOyaOqEzSf8ijoeABg9PwR/TIMw/DN64nJ5VgtglHd0MC0ei6A3h2tHohqieu7YRzxKPDGXs8sLAKp+1o929UNS60emNBuXquX1HeDpaWlyOux5SkYrBJpSKunSyg71+qZy6NU4zG58kyyhvsnjnjLy8uv3hzYNAXPUB4F5xRno9XTJ5Rt5FrCBofRKPS5AQXe2Jsjq6dg68sidVc39LR6XZVHyTlE1bXUAjDSNEu/PFN/tLKy8uHNoRVSsIFWz3hpC6rVK/ouo24HtXp+6XUv9Hej1dXVyJtzy1JwtZt1Tij3UaunkEeZavVEKZc+jugzw09/fXrzFsRCEhCFPKrhi7+dyKNIZ7R6BvIoRqPQ5yIKvLG3YBYWU9zMtXpObosh4Bgbl0fppdy4voubirW1tchbYAsDElho9YBpsUmtnsllkaArz3QJZZhWz0tolPX19VcPbZqCXcujzC/+7opWzzmhPKF+DLwBBd4YYVeNgBqrG+CLv53Lo4DdrEN5lK1Wj61WEP85bi42NjY+EG4cAJY+qb3T6jm+E4GCWtGQRzE1yt+bmxFCTEnDkI5q9aAp10yrJ5JHcX0ooe2TUVzfbW5tviG0wF1wYKEaMetmtQnlLmn1KgCP6zv6OqZG2drawvrOJAI2qdXrvzxKGHWZGmV7exvTrPVaMHCtVny9rwt5lOXqRktavaSbHe7s7CCN4i4Fq7V67d6JQMIxNnhbDKEihqVZxt8NdnZ3Mc26T8GOL/5uVKtnurqh0OrxtXvsop6YRtn9/BlplHZSsGOtnpDQVmv13F/8Db4SjdEoX/a+YH032xQsoC56Jo/S0OoxGmVvbw9plFZTsPVGLS2B0dlGLaUaMruoZ39/H+u7WURAkYq43Y1a2tHqFYAdq40HBwcHmGZnXQM2K48y36hFBUbDjVoYjXJweIg0SjdScOBUq9dNeVScZj1GoxweHWGa7WQEnKFWr8HVjYxGOfp6hDRKJwEYEMuNWhTCgdls1MJolOPjY6zv+hIB3Wj12pNH8XwvoVFOTk6QRulNDZjwgO52DWpIqyfeNSijUU6+fcP6rn8pOKhr9WxSLkCrZyqPqvhMjfL99BTTbP9TcF+0en52b5TTszOkUeZmJaT78qhJArzB2fkZptn5ioBBl3cNSm4x64/Of5wjjTK/EbD9jVoUYGQ0yo+LC6zvFqEG7MpGLaka5eLyEmmUxUvBwO7WvVYvo1Euf/7E+m5Rm5AZyKNofecN/rm6wjS76BGwTa1eem+Uq+srpFHQch7QhTxKckPxCT0Do1Gubq4xzaIpeEAAGIEpN1OjXN/cII2CJucBHSpSGI3y7+0t1ndolilYA4wpjXJ7d4c0CppuCjau/ybx9lBxxLu7v8f6Ds00BWvLo5ga5f7hF6ZZNNsICN81iIkCPH/46/EBaRQ0ewD6NUU0t5vN1CgPj4+YZtEcRsA0BUs2PI536qHAQxoFrYEaMCC8bpbRKP89PWF9h9Z8BCxcB8w2PH76/RtpFLS2uuDk3ijEjyjwsL5Da9X+F2AAdhpbcs9KP5oAAAAASUVORK5CYII\x3d"
        );
        h(l, {
            position: "absolute",
            left: "0px",
            top: "0px",
            border: "none",
            margin: "0 0 0 0",
            padding: "0 0 0 0"
        });
        h(l, {
            width: b - 2 + "px",
            height: e - 20 + "px"
        });
        d.appendChild(l);
        m = document.createElement("div");
        m.innerHTML = f.title;
        h(m, {
            backgroundColor: "rgba(0,0,0,0.8)",
            left: "0px",
            position: "absolute",
            border: "none",
            color: "#CCC",
            display: "block",
            font: "11px Arial",
            margin: "0 0 0 0",
            textAlign: "center",
            textDecoration: "none",
            textTransform: "none",
            padding: "5px"
        });
        l = Math.ceil(6 * f.title.length / b);
        h(m, {
            width: b - 10 + "px",
            top: e - 8 - 16 * l + "px"
        });
        d.appendChild(m);
        return d
    })
})(jwplayer);
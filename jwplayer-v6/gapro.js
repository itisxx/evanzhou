(function (f) {
    var n = f.utils,
        w = {
            trackingobject: "_gaq",
            universalga: "ga",
            idstring: "file",
            label: "file"
        };
    f().registerPlugin("gapro", "6.0", function (b, p) {
        function g() {
            var a = window[c.universalga];
            return a ? (k || (k = {
                push: function (e) {
                    e.splice(0, 1, "send", "event");
                    a.apply(this, e)
                }
            }), k) : "string" === typeof c.trackingobject ? window[c.trackingobject] : c.trackingobject
        }

        function q(a, e) {
            if (!a) return "";
            if (e && a[e] && a[e].length) return "file" === e ? f.utils.getAbsolutePath(a[e]) : a[e];
            if (a.file) return a.file;
            if (a.sources) {
                for (var b =
                        a.sources, c = [], d = b.length - 1; d--;) b[d].file && c.push(b[d].file);
                c.sort();
                return f.utils.getAbsolutePath(c[0])
            }
            return ""
        }

        function r(a) {
            l || ("undefined" !== typeof g()._trackEvent ? s(a, d.mediaID, t) : "undefined" !== typeof g().push &&
                u(a, d.mediaID, t))
        }

        function h(a) {
            l || ("undefined" !== typeof g()._trackEvent ? s("JW Player Video", a, d.label) : "undefined" !==
                typeof g().push && u("JW Player Video", a, d.label))
        }

        function u(a, e, b) {
            m && v.push({
                type: "async",
                category: a,
                action: e,
                label: b
            });
            g().push(["_trackEvent", a, e, b])
        }

        function s(a,
            b, c) {
            m && v.push({
                type: "sync",
                category: a,
                action: b,
                label: c
            });
            g()._trackEvent(a, b, c)
        }
        var k, c = n.extend({}, w, p),
            d, m = p.debug || !1,
            v = m ? f._gaObj = [] : null,
            j, t = window.top === window ? window.location.href : document.referrer,
            l = !1;
        "string" === typeof c.trackingobject && "undefined" === typeof window[c.trackingobject] && !window[
            c.universalga] ? n.log("Could not setup because trackingobject is not defined.") : (b.onPlaylistItem(
            function (a) {
                d = f.utils.extend({
                    played: !1
                }, b.getPlaylistItem(a.index));
                d.label = q(b.getPlaylistItem(a.index),
                    c.label);
                d.mediaID = q(b.getPlaylistItem(a.index), c.idstring)
            }), b.onPlay(function () {
            d.played ? "paused" === j && (j = "playing", h("Resume")) : (j = "playing", d.played = !
                0, r("JW Player Video Plays"), h("Play"))
        }), b.onBuffer(function () {
            j = "buffering";
            h("Buffer")
        }), b.onPause(function () {
            j = "paused";
            h("Pause")
        }), b.onSeek(function () {
            h("Seek")
        }), b.onComplete(function () {
            r("JW Player Video Completes");
            h("Complete")
        }), b.onCast(function (a) {
            l = !!a.active
        }))
    })
})(jwplayer);
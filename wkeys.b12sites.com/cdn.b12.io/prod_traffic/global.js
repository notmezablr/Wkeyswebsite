! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}([function(e, t, n) {
    "use strict";
    (function(e) {
        var r;

        function a() {
            /*! * Snowplow - The world's most powerful web analytics platform
             *
             * @description JavaScript tracker for Snowplow
             * @version     2.9.0
             * @author      Alex Dean, Simon Andersson, Anthon Pang, Fred Blundun, Joshua Beemster
             * @copyright   Anthon Pang, Snowplow Analytics Ltd
             * @license     Simplified BSD
             */
            ! function e(t, n, a) {
                function o(c, s) {
                    if (!n[c]) {
                        if (!t[c]) {
                            if (!s && "function" == typeof r && r) return r(c, !0);
                            if (i) return i(c, !0);
                            var u = new Error("Cannot find module '" + c + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var l = n[c] = {
                            exports: {}
                        };
                        t[c][0].call(l.exports, (function(e) {
                            var n = t[c][1][e];
                            return o(n || e)
                        }), l, l.exports, e, t, n, a)
                    }
                    return n[c].exports
                }
                for (var i = "function" == typeof r && r, c = 0; c < a.length; c++) o(a[c]);
                return o
            }({
                1: [function(e, t, n) {
                    this.cookie = function(e, t, n, r, a, o) {
                        return arguments.length > 1 ? document.cookie = e + "=" + escape(t) + (n ? "; expires=" + new Date(+new Date + 1e3 * n).toUTCString() : "") + (r ? "; path=" + r : "") + (a ? "; domain=" + a : "") + (o ? "; secure" : "") : unescape((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
                    }
                }, {}],
                2: [function(e, t, n) {
                    var r = {
                        utf8: {
                            stringToBytes: function(e) {
                                return r.bin.stringToBytes(unescape(encodeURIComponent(e)))
                            },
                            bytesToString: function(e) {
                                return decodeURIComponent(escape(r.bin.bytesToString(e)))
                            }
                        },
                        bin: {
                            stringToBytes: function(e) {
                                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                                return t
                            },
                            bytesToString: function(e) {
                                for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                                return t.join("")
                            }
                        }
                    };
                    t.exports = r
                }, {}],
                3: [function(e, t, n) {
                    var r, a;
                    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = {
                        rotl: function(e, t) {
                            return e << t | e >>> 32 - t
                        },
                        rotr: function(e, t) {
                            return e << 32 - t | e >>> t
                        },
                        endian: function(e) {
                            if (e.constructor == Number) return 16711935 & a.rotl(e, 8) | 4278255360 & a.rotl(e, 24);
                            for (var t = 0; t < e.length; t++) e[t] = a.endian(e[t]);
                            return e
                        },
                        randomBytes: function(e) {
                            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                            return t
                        },
                        bytesToWords: function(e) {
                            for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                            return t
                        },
                        wordsToBytes: function(e) {
                            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                            return t
                        },
                        bytesToHex: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                            return t.join("")
                        },
                        hexToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                            return t
                        },
                        bytesToBase64: function(e) {
                            for (var t = [], n = 0; n < e.length; n += 3)
                                for (var a = e[n] << 16 | e[n + 1] << 8 | e[n + 2], o = 0; o < 4; o++) 8 * n + 6 * o <= 8 * e.length ? t.push(r.charAt(a >>> 6 * (3 - o) & 63)) : t.push("=");
                            return t.join("")
                        },
                        base64ToBytes: function(e) {
                            e = e.replace(/[^A-Z0-9+\/]/gi, "");
                            for (var t = [], n = 0, a = 0; n < e.length; a = ++n % 4) 0 != a && t.push((r.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | r.indexOf(e.charAt(n)) >>> 6 - 2 * a);
                            return t
                        }
                    }, t.exports = a
                }, {}],
                4: [function(e, t, n) {
                    var r, a, o, i, c, s;
                    r = this, a = function(e) {
                        var t = -e.getTimezoneOffset();
                        return null !== t ? t : 0
                    }, o = function(e, t, n) {
                        var r = new Date;
                        return void 0 !== e && r.setFullYear(e), r.setMonth(t), r.setDate(n), r
                    }, i = function(e) {
                        return a(o(e, 0, 2))
                    }, c = function(e) {
                        return a(o(e, 5, 2))
                    }, (s = {
                        determine: function() {
                            var e = function() {
                                var e = i(),
                                    t = c(),
                                    n = e - t;
                                return n < 0 ? e + ",1" : n > 0 ? t + ",1,s" : e + ",0"
                            }();
                            return new s.TimeZone(s.olson.timezones[e])
                        },
                        date_is_dst: function(e) {
                            var t = e.getMonth() > 7,
                                n = t ? c(e.getFullYear()) : i(e.getFullYear()),
                                r = n - a(e);
                            return n < 0 || t ? 0 !== r : r < 0
                        },
                        dst_start_for: function(e) {
                            var t = new Date(2010, 6, 15, 1, 0, 0, 0);
                            return {
                                "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                                "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                                "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                                "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                                "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                                "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                                "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                                "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                                "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                                "Europe/Helsinki": new Date(2013, 2, 31, 5, 0, 0, 0),
                                "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                                "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                                "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                                "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                                "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                                "Europe/Moscow": t,
                                "Asia/Amman": new Date(2013, 2, 29, 1, 0, 0, 0),
                                "Asia/Beirut": new Date(2013, 2, 31, 2, 0, 0, 0),
                                "Asia/Damascus": new Date(2013, 3, 6, 2, 0, 0, 0),
                                "Asia/Jerusalem": new Date(2013, 2, 29, 5, 0, 0, 0),
                                "Asia/Yekaterinburg": t,
                                "Asia/Omsk": t,
                                "Asia/Krasnoyarsk": t,
                                "Asia/Irkutsk": t,
                                "Asia/Yakutsk": t,
                                "Asia/Vladivostok": t,
                                "Asia/Baku": new Date(2013, 2, 31, 4, 0, 0),
                                "Asia/Yerevan": new Date(2013, 2, 31, 3, 0, 0),
                                "Asia/Kamchatka": t,
                                "Asia/Gaza": new Date(2010, 2, 27, 4, 0, 0),
                                "Africa/Cairo": new Date(2010, 4, 1, 3, 0, 0),
                                "Europe/Minsk": t,
                                "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                                "Pacific/Fiji": new Date(2010, 11, 1, 0, 0, 0),
                                "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
                            }[e]
                        }
                    }).TimeZone = function(e) {
                        var t = {
                                "America/Denver": ["America/Denver", "America/Mazatlan"],
                                "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                                "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                                "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                                "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Asia/Beirut", "Europe/Helsinki", "Asia/Damascus"],
                                "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                                "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                                "America/New_York": ["America/Havana", "America/New_York"],
                                "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                                "America/Godthab": ["America/Miquelon", "America/Godthab"],
                                "Asia/Dubai": ["Europe/Moscow"],
                                "Asia/Dhaka": ["Asia/Yekaterinburg"],
                                "Asia/Jakarta": ["Asia/Omsk"],
                                "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                                "Asia/Tokyo": ["Asia/Irkutsk"],
                                "Australia/Brisbane": ["Asia/Yakutsk"],
                                "Pacific/Noumea": ["Asia/Vladivostok"],
                                "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
                                "Pacific/Tongatapu": ["Pacific/Apia"],
                                "Asia/Baghdad": ["Europe/Minsk"],
                                "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
                                "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                            },
                            n = e;
                        return void 0 !== t[n] && function() {
                            for (var e = t[n], r = e.length, a = 0, o = e[0]; a < r; a += 1)
                                if (o = e[a], s.date_is_dst(s.dst_start_for(o))) return void(n = o)
                        }(), {
                            name: function() {
                                return n
                            }
                        }
                    }, s.olson = {}, s.olson.timezones = {
                        "-720,0": "Pacific/Majuro",
                        "-660,0": "Pacific/Pago_Pago",
                        "-600,1": "America/Adak",
                        "-600,0": "Pacific/Honolulu",
                        "-570,0": "Pacific/Marquesas",
                        "-540,0": "Pacific/Gambier",
                        "-540,1": "America/Anchorage",
                        "-480,1": "America/Los_Angeles",
                        "-480,0": "Pacific/Pitcairn",
                        "-420,0": "America/Phoenix",
                        "-420,1": "America/Denver",
                        "-360,0": "America/Guatemala",
                        "-360,1": "America/Chicago",
                        "-360,1,s": "Pacific/Easter",
                        "-300,0": "America/Bogota",
                        "-300,1": "America/New_York",
                        "-270,0": "America/Caracas",
                        "-240,1": "America/Halifax",
                        "-240,0": "America/Santo_Domingo",
                        "-240,1,s": "America/Santiago",
                        "-210,1": "America/St_Johns",
                        "-180,1": "America/Godthab",
                        "-180,0": "America/Argentina/Buenos_Aires",
                        "-180,1,s": "America/Montevideo",
                        "-120,0": "America/Noronha",
                        "-120,1": "America/Noronha",
                        "-60,1": "Atlantic/Azores",
                        "-60,0": "Atlantic/Cape_Verde",
                        "0,0": "UTC",
                        "0,1": "Europe/London",
                        "60,1": "Europe/Berlin",
                        "60,0": "Africa/Lagos",
                        "60,1,s": "Africa/Windhoek",
                        "120,1": "Asia/Beirut",
                        "120,0": "Africa/Johannesburg",
                        "180,0": "Asia/Baghdad",
                        "180,1": "Europe/Moscow",
                        "210,1": "Asia/Tehran",
                        "240,0": "Asia/Dubai",
                        "240,1": "Asia/Baku",
                        "270,0": "Asia/Kabul",
                        "300,1": "Asia/Yekaterinburg",
                        "300,0": "Asia/Karachi",
                        "330,0": "Asia/Kolkata",
                        "345,0": "Asia/Kathmandu",
                        "360,0": "Asia/Dhaka",
                        "360,1": "Asia/Omsk",
                        "390,0": "Asia/Rangoon",
                        "420,1": "Asia/Krasnoyarsk",
                        "420,0": "Asia/Jakarta",
                        "480,0": "Asia/Shanghai",
                        "480,1": "Asia/Irkutsk",
                        "525,0": "Australia/Eucla",
                        "525,1,s": "Australia/Eucla",
                        "540,1": "Asia/Yakutsk",
                        "540,0": "Asia/Tokyo",
                        "570,0": "Australia/Darwin",
                        "570,1,s": "Australia/Adelaide",
                        "600,0": "Australia/Brisbane",
                        "600,1": "Asia/Vladivostok",
                        "600,1,s": "Australia/Sydney",
                        "630,1,s": "Australia/Lord_Howe",
                        "660,1": "Asia/Kamchatka",
                        "660,0": "Pacific/Noumea",
                        "690,0": "Pacific/Norfolk",
                        "720,1,s": "Pacific/Auckland",
                        "720,0": "Pacific/Tarawa",
                        "765,1,s": "Pacific/Chatham",
                        "780,0": "Pacific/Tongatapu",
                        "780,1,s": "Pacific/Apia",
                        "840,0": "Pacific/Kiritimati"
                    }, void 0 !== n ? n.jstz = s : r.jstz = s
                }, {}],
                5: [function(e, t, n) {
                    ! function() {
                        var e = this;

                        function n(e, t) {
                            var n, r, a, o, i, c, s, u;
                            for (n = 3 & e.length, r = e.length - n, a = t, i = 3432918353, c = 461845907, u = 0; u < r;) s = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, a = 27492 + (65535 & (o = 5 * (65535 & (a = (a ^= s = (65535 & (s = (s = (65535 & s) * i + (((s >>> 16) * i & 65535) << 16) & 4294967295) << 15 | s >>> 17)) * c + (((s >>> 16) * c & 65535) << 16) & 4294967295) << 13 | a >>> 19)) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (o >>> 16) & 65535) << 16);
                            switch (s = 0, n) {
                                case 3:
                                    s ^= (255 & e.charCodeAt(u + 2)) << 16;
                                case 2:
                                    s ^= (255 & e.charCodeAt(u + 1)) << 8;
                                case 1:
                                    a ^= s = (65535 & (s = (s = (65535 & (s ^= 255 & e.charCodeAt(u))) * i + (((s >>> 16) * i & 65535) << 16) & 4294967295) << 15 | s >>> 17)) * c + (((s >>> 16) * c & 65535) << 16) & 4294967295
                            }
                            return a ^= e.length, a = 2246822507 * (65535 & (a ^= a >>> 16)) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295, a = 3266489909 * (65535 & (a ^= a >>> 13)) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295, (a ^= a >>> 16) >>> 0
                        }
                        var r = n;
                        if (r.v2 = function(e, t) {
                                for (var n, r = e.length, a = t ^ r, o = 0; r >= 4;) n = 1540483477 * (65535 & (n = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24)) + ((1540483477 * (n >>> 16) & 65535) << 16), a = 1540483477 * (65535 & a) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ (n = 1540483477 * (65535 & (n ^= n >>> 24)) + ((1540483477 * (n >>> 16) & 65535) << 16)), r -= 4, ++o;
                                switch (r) {
                                    case 3:
                                        a ^= (255 & e.charCodeAt(o + 2)) << 16;
                                    case 2:
                                        a ^= (255 & e.charCodeAt(o + 1)) << 8;
                                    case 1:
                                        a = 1540483477 * (65535 & (a ^= 255 & e.charCodeAt(o))) + ((1540483477 * (a >>> 16) & 65535) << 16)
                                }
                                return a = 1540483477 * (65535 & (a ^= a >>> 13)) + ((1540483477 * (a >>> 16) & 65535) << 16), (a ^= a >>> 15) >>> 0
                            }, r.v3 = n, void 0 !== t) t.exports = r;
                        else {
                            var a = e.murmur;
                            r.noConflict = function() {
                                return e.murmur = a, r
                            }, e.murmur = r
                        }
                    }()
                }, {}],
                6: [function(e, t, n) {
                    var r, a, o, i;
                    r = e("crypt"), a = e("charenc").utf8, o = e("charenc").bin, (i = function(e, t) {
                        var n = r.wordsToBytes(function(e) {
                            e.constructor == String && (e = a.stringToBytes(e));
                            var t = r.bytesToWords(e),
                                n = 8 * e.length,
                                o = [],
                                i = 1732584193,
                                c = -271733879,
                                s = -1732584194,
                                u = 271733878,
                                l = -1009589776;
                            t[n >> 5] |= 128 << 24 - n % 32, t[15 + (n + 64 >>> 9 << 4)] = n;
                            for (var f = 0; f < t.length; f += 16) {
                                for (var d = i, p = c, m = s, g = u, h = l, v = 0; v < 80; v++) {
                                    if (v < 16) o[v] = t[f + v];
                                    else {
                                        var w = o[v - 3] ^ o[v - 8] ^ o[v - 14] ^ o[v - 16];
                                        o[v] = w << 1 | w >>> 31
                                    }
                                    var y = (i << 5 | i >>> 27) + l + (o[v] >>> 0) + (v < 20 ? 1518500249 + (c & s | ~c & u) : v < 40 ? 1859775393 + (c ^ s ^ u) : v < 60 ? (c & s | c & u | s & u) - 1894007588 : (c ^ s ^ u) - 899497514);
                                    l = u, u = s, s = c << 30 | c >>> 2, c = i, i = y
                                }
                                i += d, c += p, s += m, u += g, l += h
                            }
                            return [i, c, s, u, l]
                        }(e));
                        return t && t.asBytes ? n : t && t.asString ? o.bytesToString(n) : r.bytesToHex(n)
                    })._blocksize = 16, i._digestsize = 20, t.exports = i
                }, {
                    charenc: 2,
                    crypt: 3
                }],
                7: [function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var r = e("./lib/core");
                    n.trackerCore = r.trackerCore
                }, {
                    "./lib/core": 9
                }],
                8: [function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.base64encode = function(e) {
                        var t, n, r, a, o, i, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            s = 0,
                            u = 0,
                            l = [];
                        if (!e) return e;
                        e = unescape(encodeURIComponent(e));
                        do {
                            t = (o = e.charCodeAt(s++) << 16 | e.charCodeAt(s++) << 8 | e.charCodeAt(s++)) >> 18 & 63, n = o >> 12 & 63, r = o >> 6 & 63, a = 63 & o, l[u++] = c.charAt(t) + c.charAt(n) + c.charAt(r) + c.charAt(a)
                        } while (s < e.length);
                        i = l.join("");
                        var f = e.length % 3;
                        return (f ? i.slice(0, f - 3) : i) + "===".slice(f || 3)
                    }
                }, {}],
                9: [function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var r = e("uuid"),
                        a = e("./payload");
                    n.trackerCore = function(e, t) {
                        void 0 === e && (e = !0);
                        var n = {};

                        function o(e, t) {
                            n[e] = t
                        }

                        function i(e, t) {
                            var n = {};
                            for (var r in t = t || {}, e)(t[r] || null !== e[r] && void 0 !== e[r]) && (n[r] = e[r]);
                            return n
                        }

                        function c(e, a, o) {
                            e.addDict(n), e.add("eid", r.v4());
                            var i = function(e) {
                                return null == e ? {
                                    type: "dtm",
                                    value: (new Date).getTime()
                                } : "number" == typeof e ? {
                                    type: "dtm",
                                    value: e
                                } : "ttm" === e.type ? {
                                    type: "ttm",
                                    value: e.value
                                } : {
                                    type: "dtm",
                                    value: e.value || (new Date).getTime()
                                }
                            }(o);
                            e.add(i.type, i.value.toString());
                            var c = function(e) {
                                if (e && e.length) return {
                                    schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                                    data: e
                                }
                            }(a);
                            return void 0 !== c && e.addJson("cx", "co", c), "function" == typeof t && t(e), e
                        }

                        function s(t, n, r) {
                            var o = a.payloadBuilder(e),
                                i = {
                                    schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                                    data: t
                                };
                            return o.add("e", "ue"), o.addJson("ue_px", "ue_pr", i), c(o, n, r)
                        }
                        return {
                            setBase64Encoding: function(t) {
                                e = t
                            },
                            addPayloadPair: o,
                            addPayloadDict: function(e) {
                                for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t])
                            },
                            resetPayloadPairs: function(e) {
                                n = a.isJson(e) ? e : {}
                            },
                            setTrackerVersion: function(e) {
                                o("tv", e)
                            },
                            setTrackerNamespace: function(e) {
                                o("tna", e)
                            },
                            setAppId: function(e) {
                                o("aid", e)
                            },
                            setPlatform: function(e) {
                                o("p", e)
                            },
                            setUserId: function(e) {
                                o("uid", e)
                            },
                            setScreenResolution: function(e, t) {
                                o("res", e + "x" + t)
                            },
                            setViewport: function(e, t) {
                                o("vp", e + "x" + t)
                            },
                            setColorDepth: function(e) {
                                o("cd", e)
                            },
                            setTimezone: function(e) {
                                o("tz", e)
                            },
                            setLang: function(e) {
                                o("lang", e)
                            },
                            setIpAddress: function(e) {
                                o("ip", e)
                            },
                            trackUnstructEvent: s,
                            trackSelfDescribingEvent: s,
                            trackPageView: function(t, n, r, o, i) {
                                var s = a.payloadBuilder(e);
                                return s.add("e", "pv"), s.add("url", t), s.add("page", n), s.add("refr", r), c(s, o, i)
                            },
                            trackPagePing: function(t, n, r, o, i, s, u, l, f) {
                                var d = a.payloadBuilder(e);
                                return d.add("e", "pp"), d.add("url", t), d.add("page", n), d.add("refr", r), d.add("pp_mix", o.toString()), d.add("pp_max", i.toString()), d.add("pp_miy", s.toString()), d.add("pp_may", u.toString()), c(d, l, f)
                            },
                            trackStructEvent: function(t, n, r, o, i, s, u) {
                                var l = a.payloadBuilder(e);
                                return l.add("e", "se"), l.add("se_ca", t), l.add("se_ac", n), l.add("se_la", r), l.add("se_pr", o), l.add("se_va", null == i ? void 0 : i.toString()), c(l, s, u)
                            },
                            trackEcommerceTransaction: function(t, n, r, o, i, s, u, l, f, d, p) {
                                var m = a.payloadBuilder(e);
                                return m.add("e", "tr"), m.add("tr_id", t), m.add("tr_af", n), m.add("tr_tt", r), m.add("tr_tx", o), m.add("tr_sh", i), m.add("tr_ci", s), m.add("tr_st", u), m.add("tr_co", l), m.add("tr_cu", f), c(m, d, p)
                            },
                            trackEcommerceTransactionItem: function(t, n, r, o, i, s, u, l, f) {
                                var d = a.payloadBuilder(e);
                                return d.add("e", "ti"), d.add("ti_id", t), d.add("ti_sk", n), d.add("ti_nm", r), d.add("ti_ca", o), d.add("ti_pr", i), d.add("ti_qu", s), d.add("ti_cu", u), c(d, l, f)
                            },
                            trackScreenView: function(e, t, n, r) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
                                    data: i({
                                        name: e,
                                        id: t
                                    })
                                }, n, r)
                            },
                            trackLinkClick: function(e, t, n, r, a, o, c) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                                    data: i({
                                        targetUrl: e,
                                        elementId: t,
                                        elementClasses: n,
                                        elementTarget: r,
                                        elementContent: a
                                    })
                                }, o, c)
                            },
                            trackAdImpression: function(e, t, n, r, a, o, c, u, l, f) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                                    data: i({
                                        impressionId: e,
                                        costModel: t,
                                        cost: n,
                                        targetUrl: r,
                                        bannerId: a,
                                        zoneId: o,
                                        advertiserId: c,
                                        campaignId: u
                                    })
                                }, l, f)
                            },
                            trackAdClick: function(e, t, n, r, a, o, c, u, l, f, d) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                                    data: i({
                                        targetUrl: e,
                                        clickId: t,
                                        costModel: n,
                                        cost: r,
                                        bannerId: a,
                                        zoneId: o,
                                        impressionId: c,
                                        advertiserId: u,
                                        campaignId: l
                                    })
                                }, f, d)
                            },
                            trackAdConversion: function(e, t, n, r, a, o, c, u, l, f, d) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                                    data: i({
                                        conversionId: e,
                                        costModel: t,
                                        cost: n,
                                        category: r,
                                        action: a,
                                        property: o,
                                        initialValue: c,
                                        advertiserId: u,
                                        campaignId: l
                                    })
                                }, f, d)
                            },
                            trackSocialInteraction: function(e, t, n, r, a) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                                    data: i({
                                        action: e,
                                        network: t,
                                        target: n
                                    })
                                }, r, a)
                            },
                            trackAddToCart: function(e, t, n, r, a, o, c, u) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                                    data: i({
                                        sku: e,
                                        name: t,
                                        category: n,
                                        unitPrice: r,
                                        quantity: a,
                                        currency: o
                                    })
                                }, c, u)
                            },
                            trackRemoveFromCart: function(e, t, n, r, a, o, c, u) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                                    data: i({
                                        sku: e,
                                        name: t,
                                        category: n,
                                        unitPrice: r,
                                        quantity: a,
                                        currency: o
                                    })
                                }, c, u)
                            },
                            trackFormChange: function(e, t, n, r, a, o, c, u) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0",
                                    data: i({
                                        formId: e,
                                        elementId: t,
                                        nodeName: n,
                                        type: r,
                                        elementClasses: a,
                                        value: o
                                    }, {
                                        value: !0
                                    })
                                }, c, u)
                            },
                            trackFormSubmission: function(e, t, n, r, a) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                                    data: i({
                                        formId: e,
                                        formClasses: t,
                                        elements: n
                                    })
                                }, r, a)
                            },
                            trackSiteSearch: function(e, t, n, r, a, o) {
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                                    data: i({
                                        terms: e,
                                        filters: t,
                                        totalResults: n,
                                        pageResults: r
                                    })
                                }, a, o)
                            },
                            trackConsentWithdrawn: function(e, t, n, r, a, o, c) {
                                var u = {
                                    schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                                    data: i({
                                        id: t,
                                        version: n,
                                        name: r,
                                        description: a
                                    })
                                };
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                                    data: i({
                                        all: e
                                    })
                                }, u.data && o ? o.concat([u]) : o, c)
                            },
                            trackConsentGranted: function(e, t, n, r, a, o, c) {
                                var u = {
                                    schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                                    data: i({
                                        id: e,
                                        version: t,
                                        name: n,
                                        description: r
                                    })
                                };
                                return s({
                                    schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                                    data: i({
                                        expiry: a
                                    })
                                }, o ? o.concat([u]) : [u], c)
                            }
                        }
                    }
                }, {
                    "./payload": 10,
                    uuid: 12
                }],
                10: [function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var r = e("./base64");

                    function a(e) {
                        if (!o(e)) return !1;
                        for (var t in e)
                            if (e.hasOwnProperty(t)) return !0;
                        return !1
                    }

                    function o(e) {
                        return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
                    }
                    n.isNonEmptyJson = a, n.isJson = o, n.payloadBuilder = function(e) {
                        var t = {},
                            n = function(e, n) {
                                null != n && "" !== n && (t[e] = n)
                            };
                        return {
                            add: n,
                            addDict: function(e) {
                                for (var t in e) e.hasOwnProperty(t) && n(t, e[t])
                            },
                            addJson: function(t, o, i) {
                                if (a(i)) {
                                    var c = JSON.stringify(i);
                                    e ? n(t, function(e) {
                                        return e ? r.base64encode(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_") : e
                                    }(c)) : n(o, c)
                                }
                            },
                            build: function() {
                                return t
                            }
                        }
                    }
                }, {
                    "./base64": 8
                }],
                11: [function(t, n, r) {
                    (function(e) {
                        var t, r = e.crypto || e.msCrypto;
                        if (r && r.getRandomValues) {
                            var a = new Uint8Array(16);
                            t = function() {
                                return r.getRandomValues(a), a
                            }
                        }
                        if (!t) {
                            var o = new Array(16);
                            t = function() {
                                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                                return o
                            }
                        }
                        n.exports = t
                    }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}],
                12: [function(e, t, n) {
                    for (var r = e("./rng"), a = [], o = {}, i = 0; i < 256; i++) a[i] = (i + 256).toString(16).substr(1), o[a[i]] = i;

                    function c(e, t) {
                        var n = t || 0,
                            r = a;
                        return r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]]
                    }
                    var s = r(),
                        u = [1 | s[0], s[1], s[2], s[3], s[4], s[5]],
                        l = 16383 & (s[6] << 8 | s[7]),
                        f = 0,
                        d = 0;

                    function p(e, t, n) {
                        var a = t && n || 0;
                        "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                        var o = (e = e || {}).random || (e.rng || r)();
                        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                            for (var i = 0; i < 16; i++) t[a + i] = o[i];
                        return t || c(o)
                    }
                    var m = p;
                    m.v1 = function(e, t, n) {
                        var r = t && n || 0,
                            a = t || [],
                            o = void 0 !== (e = e || {}).clockseq ? e.clockseq : l,
                            i = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                            s = void 0 !== e.nsecs ? e.nsecs : d + 1,
                            p = i - f + (s - d) / 1e4;
                        if (p < 0 && void 0 === e.clockseq && (o = o + 1 & 16383), (p < 0 || i > f) && void 0 === e.nsecs && (s = 0), s >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                        f = i, d = s, l = o;
                        var m = (1e4 * (268435455 & (i += 122192928e5)) + s) % 4294967296;
                        a[r++] = m >>> 24 & 255, a[r++] = m >>> 16 & 255, a[r++] = m >>> 8 & 255, a[r++] = 255 & m;
                        var g = i / 4294967296 * 1e4 & 268435455;
                        a[r++] = g >>> 8 & 255, a[r++] = 255 & g, a[r++] = g >>> 24 & 15 | 16, a[r++] = g >>> 16 & 255, a[r++] = o >>> 8 | 128, a[r++] = 255 & o;
                        for (var h = e.node || u, v = 0; v < 6; v++) a[r + v] = h[v];
                        return t || c(a)
                    }, m.v4 = p, m.parse = function(e, t, n) {
                        var r = t && n || 0,
                            a = 0;
                        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, (function(e) {
                                a < 16 && (t[r + a++] = o[e])
                            })); a < 16;) t[r + a++] = 0;
                        return t
                    }, m.unparse = c, t.exports = m
                }, {
                    "./rng": 11
                }],
                13: [function(e, t, n) {
                    var r = e("./lib_managed/lodash"),
                        a = e("./lib/helpers"),
                        o = window;
                    (void 0 !== n ? n : this).errorManager = function(e) {
                        function t(t, n, r, a, o, i) {
                            var c = o && o.stack ? o.stack : null;
                            e.trackSelfDescribingEvent({
                                schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                                data: {
                                    programmingLanguage: "JAVASCRIPT",
                                    message: t || "JS Exception. Browser doesn't support ErrorEvent API",
                                    stackTrace: c,
                                    lineNumber: r,
                                    lineColumn: a,
                                    fileName: n
                                }
                            }, i)
                        }
                        return {
                            trackError: t,
                            enableErrorTracking: function(e, n, i) {
                                a.addEventListener(o, "error", (function(a) {
                                    (r.isFunction(e) && e(a) || null == e) && function(e, n, a) {
                                        var o;
                                        o = r.isFunction(a) ? n.concat(a(e)) : n, t(e.message, e.filename, e.lineno, e.colno, e.error, o)
                                    }(a, i, n)
                                }), !0)
                            }
                        }
                    }
                }, {
                    "./lib/helpers": 18,
                    "./lib_managed/lodash": 20
                }],
                14: [function(e, t, n) {
                    var r = e("./lib_managed/lodash"),
                        a = e("./lib/helpers");
                    (void 0 !== n ? n : this).getFormTrackingManager = function(e, t, n) {
                        var o = ["textarea", "input", "select"],
                            i = t + "form",
                            c = function() {
                                return !0
                            },
                            s = function() {
                                return !0
                            },
                            u = function(e) {
                                return e
                            };

                        function l(e) {
                            return e[r.find(["name", "id", "type", "nodeName"], (function(t) {
                                return e[t] && "string" == typeof e[t]
                            }))]
                        }

                        function f(t) {
                            return function(r) {
                                var o = r.target,
                                    i = o.nodeName && "INPUT" === o.nodeName.toUpperCase() ? o.type : null,
                                    c = "checkbox" !== o.type || o.checked ? u(o.value) : null;
                                e.trackFormChange(function(e) {
                                    for (; e && e.nodeName && "HTML" !== e.nodeName.toUpperCase() && "FORM" !== e.nodeName.toUpperCase();) e = e.parentNode;
                                    if (e && e.nodeName && "FORM" === e.nodeName.toUpperCase()) return l(e)
                                }(o), l(o), o.nodeName, i, a.getCssClasses(o), c, n(t))
                            }
                        }

                        function d(t) {
                            return function(c) {
                                var s = c.target,
                                    f = function(e) {
                                        var t = [];
                                        return r.forEach(o, (function(n) {
                                            var a = r.filter(e.getElementsByTagName(n), (function(e) {
                                                return e.hasOwnProperty(i)
                                            }));
                                            r.forEach(a, (function(e) {
                                                if ("submit" !== e.type) {
                                                    var n = {
                                                        name: l(e),
                                                        value: e.value,
                                                        nodeName: e.nodeName
                                                    };
                                                    e.type && "INPUT" === e.nodeName.toUpperCase() && (n.type = e.type), "checkbox" !== e.type && "radio" !== e.type || e.checked || (n.value = null), t.push(n)
                                                }
                                            }))
                                        })), t
                                    }(s);
                                r.forEach(f, (function(e) {
                                    e.value = u(e.value)
                                })), e.trackFormSubmission(l(s), a.getCssClasses(s), f, n(t))
                            }
                        }
                        return {
                            configureFormTracking: function(e) {
                                e && (c = a.getFilter(e.forms, !0), s = a.getFilter(e.fields, !1), u = a.getTransform(e.fields))
                            },
                            addFormListeners: function(e) {
                                r.forEach(document.getElementsByTagName("form"), (function(t) {
                                    c(t) && !t[i] && (r.forEach(o, (function(n) {
                                        r.forEach(t.getElementsByTagName(n), (function(t) {
                                            s(t) && !t[i] && "password" !== t.type.toLowerCase() && (a.addEventListener(t, "change", f(e), !1), t[i] = !0)
                                        }))
                                    })), a.addEventListener(t, "submit", d(e)), t[i] = !0)
                                }))
                            }
                        }
                    }
                }, {
                    "./lib/helpers": 18,
                    "./lib_managed/lodash": 20
                }],
                15: [function(e, t, n) {
                    ! function() {
                        var t = e("./lib_managed/lodash"),
                            r = e("./lib/helpers");
                        (void 0 !== n ? n : this).InQueueManager = function(e, n, a, o, i) {
                            var c = {};

                            function s(e) {
                                var n = [];
                                if (e && 0 !== e.length)
                                    for (var a = 0; a < e.length; a++) c.hasOwnProperty(e[a]) ? n.push(c[e[a]]) : r.warn('Warning: Tracker namespace "' + e[a] + '" not configured');
                                else n = t.map(c);
                                return 0 === n.length && r.warn("Warning: No tracker configured"), n
                            }

                            function u(e, n, a) {
                                var o;
                                r.warn(e + " is deprecated. Set the collector when a new tracker instance using newTracker."), l(o = t.isUndefined(a) ? "sp" : a), c[o][e](n)
                            }

                            function l(t, o, s) {
                                s = s || {}, c.hasOwnProperty(t) ? r.warn("Tracker namespace " + t + " already exists.") : (c[t] = new e(i, t, n, a, s), c[t].setCollectorUrl(o))
                            }

                            function f(e) {
                                var t = e.split(":");
                                return [t[0], t.length > 1 ? t[1].split(";") : []]
                            }

                            function d() {
                                var e, n, r, a, o, i, d, p;
                                for (e = 0; e < arguments.length; e += 1)
                                    if (a = arguments[e], o = Array.prototype.shift.call(a), t.isFunction(o)) o.apply(c, a);
                                    else if (r = (i = f(o))[0], d = i[1], "newTracker" !== r)
                                    if ("setCollectorCf" !== r && "setCollectorUrl" !== r || d && 0 !== d.length)
                                        for (p = s(d), n = 0; n < p.length; n++) p[n][r].apply(p[n], a);
                                    else u(r, a[0], a[1]);
                                else l(a[0], a[1], a[2])
                            }
                            for (var p = 0; p < o.length; p++) d(o[p]);
                            return {
                                push: d
                            }
                        }
                    }()
                }, {
                    "./lib/helpers": 18,
                    "./lib_managed/lodash": 20
                }],
                16: [function(e, t, n) {
                    var r, a, o = e("./snowplow"),
                        i = window;
                    i.GlobalSnowplowNamespace && i.GlobalSnowplowNamespace.length > 0 ? (r = i.GlobalSnowplowNamespace.shift(), (a = i[r]).q = new o.Snowplow(a.q, r)) : (i._snaq = i._snaq || [], i._snaq = new o.Snowplow(i._snaq, "_snaq"))
                }, {
                    "./snowplow": 23
                }],
                17: [function(e, t, n) {
                    ! function() {
                        var t = e("../lib_managed/lodash"),
                            r = e("murmurhash").v3,
                            a = e("jstimezonedetect").jstz.determine(),
                            o = e("browser-cookie-lite"),
                            i = void 0 !== n ? n : this,
                            c = window,
                            s = navigator,
                            u = screen,
                            l = document;
                        i.hasSessionStorage = function() {
                            try {
                                return !!c.sessionStorage
                            } catch (e) {
                                return !0
                            }
                        }, i.hasLocalStorage = function() {
                            try {
                                return !!c.localStorage
                            } catch (e) {
                                return !0
                            }
                        }, i.localStorageAccessible = function() {
                            var e = "modernizr";
                            if (!i.hasLocalStorage()) return !1;
                            try {
                                return c.localStorage.setItem(e, e), c.localStorage.removeItem(e), !0
                            } catch (e) {
                                return !1
                            }
                        }, i.hasCookies = function(e) {
                            var n = e || "testcookie";
                            return t.isUndefined(s.cookieEnabled) ? (o.cookie(n, "1"), "1" === o.cookie(n) ? "1" : "0") : s.cookieEnabled ? "1" : "0"
                        }, i.detectSignature = function(e) {
                            var t = [s.userAgent, [u.height, u.width, u.colorDepth].join("x"), (new Date).getTimezoneOffset(), i.hasSessionStorage(), i.hasLocalStorage()],
                                n = [];
                            if (s.plugins)
                                for (var a = 0; a < s.plugins.length; a++)
                                    if (s.plugins[a]) {
                                        for (var o = [], c = 0; c < s.plugins[a].length; c++) o.push([s.plugins[a][c].type, s.plugins[a][c].suffixes]);
                                        n.push([s.plugins[a].name + "::" + s.plugins[a].description, o.join("~")])
                                    }
                            return r(t.join("###") + "###" + n.sort().join(";"), e)
                        }, i.detectTimezone = function() {
                            return void 0 === a ? "" : a.name()
                        }, i.detectViewport = function() {
                            var e = c,
                                t = "inner";
                            "innerWidth" in c || (t = "client", e = l.documentElement || l.body);
                            var n = e[t + "Width"],
                                r = e[t + "Height"];
                            return n >= 0 && r >= 0 ? n + "x" + r : null
                        }, i.detectDocumentSize = function() {
                            var e = l.documentElement,
                                t = l.body,
                                n = t ? Math.max(t.offsetHeight, t.scrollHeight) : 0,
                                r = Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth),
                                a = Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight, n);
                            return isNaN(r) || isNaN(a) ? "" : r + "x" + a
                        }, i.detectBrowserFeatures = function(e, n) {
                            var r, a, o = {
                                    pdf: "application/pdf",
                                    qt: "video/quicktime",
                                    realp: "audio/x-pn-realaudio-plugin",
                                    wma: "application/x-mplayer2",
                                    dir: "application/x-director",
                                    fla: "application/x-shockwave-flash",
                                    java: "application/x-java-vm",
                                    gears: "application/x-googlegears",
                                    ag: "application/x-silverlight"
                                },
                                l = {};
                            if (s.mimeTypes && s.mimeTypes.length)
                                for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (a = s.mimeTypes[o[r]], l[r] = a && a.enabledPlugin ? "1" : "0");
                            return s.constructor === window.Navigator && "unknown" != typeof s.javaEnabled && !t.isUndefined(s.javaEnabled) && s.javaEnabled() && (l.java = "1"), t.isFunction(c.GearsFactory) && (l.gears = "1"), l.res = u.width + "x" + u.height, l.cd = u.colorDepth, e && (l.cookie = i.hasCookies(n)), l
                        }
                    }()
                }, {
                    "../lib_managed/lodash": 20,
                    "browser-cookie-lite": 1,
                    jstimezonedetect: 4,
                    murmurhash: 5
                }],
                18: [function(e, t, n) {
                    ! function() {
                        var t = e("../lib_managed/lodash"),
                            r = e("browser-cookie-lite"),
                            a = void 0 !== n ? n : this;
                        a.fixupTitle = function(e) {
                            if (!t.isString(e)) {
                                e = e.text || "";
                                var n = document.getElementsByTagName("title");
                                n && !t.isUndefined(n[0]) && (e = n[0].text)
                            }
                            return e
                        }, a.getHostName = function(e) {
                            var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);
                            return t ? t[1] : e
                        }, a.fixupDomain = function(e) {
                            var t = e.length;
                            return "." === e.charAt(--t) && (e = e.slice(0, t)), "*." === e.slice(0, 2) && (e = e.slice(1)), e
                        }, a.getReferrer = function(e) {
                            var t = "",
                                n = a.fromQuerystring("referrer", window.location.href) || a.fromQuerystring("referer", window.location.href);
                            if (n) return n;
                            if (e) return e;
                            try {
                                t = window.top.document.referrer
                            } catch (e) {
                                if (window.parent) try {
                                    t = window.parent.document.referrer
                                } catch (e) {
                                    t = ""
                                }
                            }
                            return "" === t && (t = document.referrer), t
                        }, a.addEventListener = function(e, t, n, r) {
                            return e.addEventListener ? (e.addEventListener(t, n, r), !0) : e.attachEvent ? e.attachEvent("on" + t, n) : void(e["on" + t] = n)
                        }, a.fromQuerystring = function(e, t) {
                            var n = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(t);
                            return n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : null
                        }, a.warn = function(e) {
                            "undefined" != typeof console && console.warn("Snowplow: " + e)
                        }, a.getCssClasses = function(e) {
                            return e.className.match(/\S+/g) || []
                        }, a.getFilter = function(e, n) {
                            if (t.isArray(e) || !t.isObject(e)) return function() {
                                return !0
                            };
                            if (e.hasOwnProperty("filter")) return e.filter;
                            var r = e.hasOwnProperty("whitelist"),
                                o = e.whitelist || e.blacklist;
                            t.isArray(o) || (o = [o]);
                            for (var i = {}, c = 0; c < o.length; c++) i[o[c]] = !0;
                            return n ? function(e) {
                                return function(e, t) {
                                    var n, r = a.getCssClasses(e);
                                    for (n = 0; n < r.length; n++)
                                        if (t[r[n]]) return !0;
                                    return !1
                                }(e, i) === r
                            } : function(e) {
                                return e.name in i === r
                            }
                        }, a.getTransform = function(e) {
                            return t.isObject(e) && e.hasOwnProperty("transform") ? e.transform : function(e) {
                                return e
                            }
                        }, a.decorateQuerystring = function(e, t, n) {
                            var r = t + "=" + n,
                                a = e.split("#"),
                                o = a[0].split("?"),
                                i = o.shift(),
                                c = o.join("?");
                            if (c) {
                                for (var s = !0, u = c.split("&"), l = 0; l < u.length; l++)
                                    if (u[l].substr(0, t.length + 1) === t + "=") {
                                        s = !1, u[l] = r, c = u.join("&");
                                        break
                                    }
                                s && (c = r + "&" + c)
                            } else c = r;
                            return a[0] = i + "?" + c, a.join("#")
                        }, a.attemptGetLocalStorage = function(e) {
                            try {
                                return localStorage.getItem(e)
                            } catch (e) {}
                        }, a.attemptWriteLocalStorage = function(e, t) {
                            try {
                                return localStorage.setItem(e, t), !0
                            } catch (e) {
                                return !1
                            }
                        }, a.findRootDomain = function() {
                            for (var e = "_sp_root_domain_test_", t = e + (new Date).getTime(), n = "_test_value_" + (new Date).getTime(), o = window.location.hostname.split("."), i = o.length - 1; i >= 0;) {
                                var c = o.slice(i, o.length).join(".");
                                if (r.cookie(t, n, 0, "/", c), r.cookie(t) === n) {
                                    a.deleteCookie(t, c);
                                    for (var s = a.getCookiesWithPrefix(e), u = 0; u < s.length; u++) a.deleteCookie(s[u], c);
                                    return c
                                }
                                i -= 1
                            }
                            return window.location.hostname
                        }, a.isValueInArray = function(e, t) {
                            for (var n = 0; n < t.length; n++)
                                if (t[n] === e) return !0;
                            return !1
                        }, a.deleteCookie = function(e, t) {
                            r.cookie(e, "", -1, "/", t)
                        }, a.getCookiesWithPrefix = function(e) {
                            for (var t = document.cookie.split("; "), n = [], r = 0; r < t.length; r++) t[r].substring(0, e.length) === e && n.push(t[r]);
                            return n
                        }, a.parseInt = function(e) {
                            var t = parseInt(e);
                            return isNaN(t) ? void 0 : t
                        }, a.parseFloat = function(e) {
                            var t = parseFloat(e);
                            return isNaN(t) ? void 0 : t
                        }
                    }()
                }, {
                    "../lib_managed/lodash": 20,
                    "browser-cookie-lite": 1
                }],
                19: [function(e, t, n) {
                    ! function() {
                        var t = e("./helpers");

                        function r(e) {
                            var t, n;
                            if (function(e) {
                                    return new RegExp("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$").test(e)
                                }(e)) try {
                                return t = document.body.children[0].children[0].children[0].children[0].children[0].children[0].innerHTML, n = "You have reached the cached page for", t.slice(0, n.length) === n
                            } catch (e) {
                                return !1
                            }
                        }(void 0 !== n ? n : this).fixupUrl = function(e, n, a) {
                            return "translate.googleusercontent.com" === e ? ("" === a && (a = n), n = function(e, n) {
                                var r = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)").exec(e);
                                return t.fromQuerystring(n, r[1])
                            }(n, "u"), e = t.getHostName(n)) : ("cc.bingj.com" === e || "webcache.googleusercontent.com" === e || r(e)) && (n = document.links[0].href, e = t.getHostName(n)), [e, n, a]
                        }
                    }()
                }, {
                    "./helpers": 18
                }],
                20: [function(t, n, r) {
                    (function(e) {
                        (function() {
                            var t, a = "[object Arguments]",
                                o = "[object Array]",
                                i = "[object Boolean]",
                                c = "[object Date]",
                                s = "[object Error]",
                                u = "[object Function]",
                                l = "[object Map]",
                                f = "[object Number]",
                                d = "[object Object]",
                                p = "[object RegExp]",
                                m = "[object Set]",
                                g = "[object String]",
                                h = "[object WeakMap]",
                                v = "[object ArrayBuffer]",
                                w = "[object Float32Array]",
                                y = "[object Float64Array]",
                                k = "[object Int8Array]",
                                b = "[object Int16Array]",
                                A = "[object Int32Array]",
                                S = "[object Uint8Array]",
                                T = "[object Uint8ClampedArray]",
                                C = "[object Uint16Array]",
                                _ = "[object Uint32Array]",
                                E = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                                I = /^\w*$/,
                                x = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                                P = /\\(\\)?/g,
                                j = /\w*$/,
                                D = /^\[object .+?Constructor\]$/,
                                L = /^\d+$/,
                                O = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                                N = {};
                            N[w] = N[y] = N[k] = N[b] = N[A] = N[S] = N[T] = N[C] = N[_] = !0, N[a] = N[o] = N[v] = N[i] = N[c] = N[s] = N[u] = N[l] = N[f] = N[d] = N[p] = N[m] = N[g] = N[h] = !1;
                            var U = {};
                            U[a] = U[o] = U[v] = U[i] = U[c] = U[w] = U[y] = U[k] = U[b] = U[A] = U[f] = U[d] = U[p] = U[g] = U[S] = U[T] = U[C] = U[_] = !0, U[s] = U[u] = U[l] = U[m] = U[h] = !1;
                            var M = {
                                    function: !0,
                                    object: !0
                                },
                                F = M[typeof r] && r && !r.nodeType && r,
                                B = M[typeof n] && n && !n.nodeType && n,
                                z = F && B && "object" == typeof e && e && e.Object && e,
                                R = M[typeof self] && self && self.Object && self,
                                q = M[typeof window] && window && window.Object && window,
                                V = B && B.exports === F && F,
                                H = z || q !== (this && this.window) && q || R || this;
                            var W = function() {
                                try {
                                    Object({
                                        toString: 0
                                    } + "")
                                } catch (e) {
                                    return function() {
                                        return !1
                                    }
                                }
                                return function(e) {
                                    return "function" != typeof e.toString && "string" == typeof(e + "")
                                }
                            }();

                            function G(e) {
                                return !!e && "object" == typeof e
                            }
                            var J = Array.prototype,
                                Q = Error.prototype,
                                Y = Object.prototype,
                                K = String.prototype,
                                $ = Function.prototype.toString,
                                X = Y.hasOwnProperty,
                                Z = Y.toString,
                                ee = RegExp("^" + $.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                te = H.ArrayBuffer,
                                ne = Y.propertyIsEnumerable,
                                re = J.splice,
                                ae = H.Uint8Array,
                                oe = Ne(Array, "isArray"),
                                ie = Ne(Object, "keys"),
                                ce = 9007199254740991,
                                se = {};
                            se[w] = H.Float32Array, se[y] = H.Float64Array, se[k] = H.Int8Array, se[b] = H.Int16Array, se[A] = H.Int32Array, se[S] = ae, se[T] = H.Uint8ClampedArray, se[C] = H.Uint16Array, se[_] = H.Uint32Array;
                            var ue = {};

                            function le() {}
                            ue[o] = ue[c] = ue[f] = {
                                constructor: !0,
                                toLocaleString: !0,
                                toString: !0,
                                valueOf: !0
                            }, ue[i] = ue[g] = {
                                constructor: !0,
                                toString: !0,
                                valueOf: !0
                            }, ue[s] = ue[u] = ue[p] = {
                                constructor: !0,
                                toString: !0
                            }, ue[d] = {
                                constructor: !0
                            }, de(O, (function(e) {
                                for (var t in ue)
                                    if (X.call(ue, t)) {
                                        var n = ue[t];
                                        n[e] = X.call(n, e)
                                    }
                            }));
                            var fe = le.support = {};

                            function de(e, t) {
                                for (var n = -1, r = e.length; ++n < r && !1 !== t(e[n], n, e););
                                return e
                            }

                            function pe(e, t) {
                                for (var n = -1, r = e.length, a = -1, o = []; ++n < r;) {
                                    var i = e[n];
                                    t(i, n, e) && (o[++a] = i)
                                }
                                return o
                            }

                            function me(e, t) {
                                for (var n = -1, r = e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
                                return a
                            }

                            function ge(e, t) {
                                for (var n = -1, r = e.length; ++n < r;)
                                    if (t(e[n], n, e)) return !0;
                                return !1
                            }

                            function he(e, n, r) {
                                var a = typeof e;
                                return "function" == a ? n === t ? e : xe(e, n, r) : null == e ? ct : "object" == a ? Ee(e) : n === t ? ut(e) : function(e, n) {
                                    var r = Ke(e),
                                        a = Fe(e) && ze(n),
                                        o = e + "";
                                    return e = Ve(e),
                                        function(i) {
                                            if (null == i) return !1;
                                            var c = o;
                                            if (i = qe(i), (r || !a) && !(c in i)) {
                                                if (null == (i = 1 == e.length ? i : Te(i, function(e, n, r) {
                                                        var a = -1,
                                                            o = e.length;
                                                        (n = null == n ? 0 : +n || 0) < 0 && (n = -n > o ? 0 : o + n);
                                                        (r = r === t || r > o ? o : +r || 0) < 0 && (r += o);
                                                        o = n > r ? 0 : r - n >>> 0, n >>>= 0;
                                                        var i = Array(o);
                                                        for (; ++a < o;) i[a] = e[a + n];
                                                        return i
                                                    }(e, 0, -1)))) return !1;
                                                c = He(e), i = qe(i)
                                            }
                                            return i[c] === n ? n !== t || c in i : Ce(n, i[c], t, !0)
                                        }
                                }(e, n)
                            }

                            function ve(e, n, r, o, s, l, m) {
                                var h;
                                if (r && (h = s ? r(e, o, s) : r(e)), h !== t) return h;
                                if (!Xe(e)) return e;
                                var E = Ke(e);
                                if (E) {
                                    if (h = function(e) {
                                            var t = e.length,
                                                n = new e.constructor(t);
                                            t && "string" == typeof e[0] && X.call(e, "index") && (n.index = e.index, n.input = e.input);
                                            return n
                                        }(e), !n) return function(e, t) {
                                        var n = -1,
                                            r = e.length;
                                        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                                        return t
                                    }(e, h)
                                } else {
                                    var I = Z.call(e),
                                        x = I == u;
                                    if (I != d && I != a && (!x || s)) return U[I] ? function(e, t, n) {
                                        var r = e.constructor;
                                        switch (t) {
                                            case v:
                                                return Pe(e);
                                            case i:
                                            case c:
                                                return new r(+e);
                                            case w:
                                            case y:
                                            case k:
                                            case b:
                                            case A:
                                            case S:
                                            case T:
                                            case C:
                                            case _:
                                                r instanceof r && (r = se[t]);
                                                var a = e.buffer;
                                                return new r(n ? Pe(a) : a, e.byteOffset, e.length);
                                            case f:
                                            case g:
                                                return new r(e);
                                            case p:
                                                var o = new r(e.source, j.exec(e));
                                                o.lastIndex = e.lastIndex
                                        }
                                        return o
                                    }(e, I, n) : s ? e : {};
                                    if (W(e)) return s ? e : {};
                                    if (h = function(e) {
                                            var t = e.constructor;
                                            "function" == typeof t && t instanceof t || (t = Object);
                                            return new t
                                        }(x ? {} : e), !n) return function(e, t) {
                                        return null == t ? e : function(e, t, n) {
                                            n || (n = {});
                                            var r = -1,
                                                a = t.length;
                                            for (; ++r < a;) {
                                                var o = t[r];
                                                n[o] = e[o]
                                            }
                                            return n
                                        }(t, nt(t), e)
                                    }(h, e)
                                }
                                l || (l = []), m || (m = []);
                                for (var P = l.length; P--;)
                                    if (l[P] == e) return m[P];
                                return l.push(e), m.push(h), (E ? de : Se)(e, (function(t, a) {
                                    h[a] = ve(t, n, r, a, e, l, m)
                                })), h
                            }! function(e) {
                                var t = function() {
                                        this.x = 1
                                    },
                                    n = {
                                        0: 1,
                                        length: 1
                                    },
                                    r = [];
                                for (var a in t.prototype = {
                                        valueOf: 1,
                                        y: 1
                                    }, new t) r.push(a);
                                fe.enumErrorProps = ne.call(Q, "message") || ne.call(Q, "name"), fe.enumPrototypes = ne.call(t, "prototype"), fe.nonEnumShadows = !/valueOf/.test(r), fe.spliceObjects = (re.call(n, 0, 1), !n[0]), fe.unindexedChars = "x" [0] + Object("x")[0] != "xx"
                            }();
                            var we, ye, ke = (we = Se, function(e, t) {
                                var n = e ? Oe(e) : 0;
                                if (!Be(n)) return we(e, t);
                                for (var r = ye ? n : -1, a = qe(e);
                                    (ye ? r-- : ++r < n) && !1 !== t(a[r], r, a););
                                return e
                            });

                            function be(e, t) {
                                var n = [];
                                return ke(e, (function(e, r, a) {
                                    t(e, r, a) && n.push(e)
                                })), n
                            }
                            var Ae = function(e) {
                                return function(t, n, r) {
                                    for (var a = qe(t), o = r(t), i = o.length, c = e ? i : -1; e ? c-- : ++c < i;) {
                                        var s = o[c];
                                        if (!1 === n(a[s], s, a)) break
                                    }
                                    return t
                                }
                            }();

                            function Se(e, t) {
                                return Ae(e, t, nt)
                            }

                            function Te(e, n, r) {
                                if (null != e) {
                                    e = qe(e), r !== t && r in e && (n = [r]);
                                    for (var a = 0, o = n.length; null != e && a < o;) e = qe(e)[n[a++]];
                                    return a && a == o ? e : t
                                }
                            }

                            function Ce(e, t, n, r, u, l) {
                                return e === t || (null == e || null == t || !Xe(e) && !G(t) ? e != e && t != t : function(e, t, n, r, u, l, m) {
                                    var h = Ke(e),
                                        v = Ke(t),
                                        w = o,
                                        y = o;
                                    h || ((w = Z.call(e)) == a ? w = d : w != d && (h = tt(e)));
                                    v || ((y = Z.call(t)) == a ? y = d : y != d && (v = tt(t)));
                                    var k = w == d && !W(e),
                                        b = y == d && !W(t),
                                        A = w == y;
                                    if (A && !h && !k) return function(e, t, n) {
                                        switch (n) {
                                            case i:
                                            case c:
                                                return +e == +t;
                                            case s:
                                                return e.name == t.name && e.message == t.message;
                                            case f:
                                                return e != +e ? t != +t : e == +t;
                                            case p:
                                            case g:
                                                return e == t + ""
                                        }
                                        return !1
                                    }(e, t, w);
                                    if (!u) {
                                        var S = k && X.call(e, "__wrapped__"),
                                            T = b && X.call(t, "__wrapped__");
                                        if (S || T) return n(S ? e.value() : e, T ? t.value() : t, r, u, l, m)
                                    }
                                    if (!A) return !1;
                                    l || (l = []), m || (m = []);
                                    var C = l.length;
                                    for (; C--;)
                                        if (l[C] == e) return m[C] == t;
                                    l.push(e), m.push(t);
                                    var _ = (h ? je : De)(e, t, n, r, u, l, m);
                                    return l.pop(), m.pop(), _
                                }(e, t, Ce, n, r, u, l))
                            }

                            function _e(e, t) {
                                var n = -1,
                                    r = Ue(e) ? Array(e.length) : [];
                                return ke(e, (function(e, a, o) {
                                    r[++n] = t(e, a, o)
                                })), r
                            }

                            function Ee(e) {
                                var n = function(e) {
                                    var t = ot(e),
                                        n = t.length;
                                    for (; n--;) t[n][2] = ze(t[n][1]);
                                    return t
                                }(e);
                                if (1 == n.length && n[0][2]) {
                                    var r = n[0][0],
                                        a = n[0][1];
                                    return function(e) {
                                        return null != e && ((e = qe(e))[r] === a && (a !== t || r in e))
                                    }
                                }
                                return function(e) {
                                    return function(e, n, r) {
                                        var a = n.length,
                                            o = a,
                                            i = !r;
                                        if (null == e) return !o;
                                        for (e = qe(e); a--;) {
                                            var c = n[a];
                                            if (i && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                        }
                                        for (; ++a < o;) {
                                            var s = (c = n[a])[0],
                                                u = e[s],
                                                l = c[1];
                                            if (i && c[2]) {
                                                if (u === t && !(s in e)) return !1
                                            } else {
                                                var f = r ? r(u, l, s) : t;
                                                if (!(f === t ? Ce(l, u, r, !0) : f)) return !1
                                            }
                                        }
                                        return !0
                                    }(e, n)
                                }
                            }

                            function Ie(e) {
                                return function(n) {
                                    return null == n ? t : qe(n)[e]
                                }
                            }

                            function xe(e, n, r) {
                                if ("function" != typeof e) return ct;
                                if (n === t) return e;
                                switch (r) {
                                    case 1:
                                        return function(t) {
                                            return e.call(n, t)
                                        };
                                    case 3:
                                        return function(t, r, a) {
                                            return e.call(n, t, r, a)
                                        };
                                    case 4:
                                        return function(t, r, a, o) {
                                            return e.call(n, t, r, a, o)
                                        };
                                    case 5:
                                        return function(t, r, a, o, i) {
                                            return e.call(n, t, r, a, o, i)
                                        }
                                }
                                return function() {
                                    return e.apply(n, arguments)
                                }
                            }

                            function Pe(e) {
                                var t = new te(e.byteLength);
                                return new ae(t).set(new ae(e)), t
                            }

                            function je(e, n, r, a, o, i, c) {
                                var s = -1,
                                    u = e.length,
                                    l = n.length;
                                if (u != l && !(o && l > u)) return !1;
                                for (; ++s < u;) {
                                    var f = e[s],
                                        d = n[s],
                                        p = a ? a(o ? d : f, o ? f : d, s) : t;
                                    if (p !== t) {
                                        if (p) continue;
                                        return !1
                                    }
                                    if (o) {
                                        if (!ge(n, (function(e) {
                                                return f === e || r(f, e, a, o, i, c)
                                            }))) return !1
                                    } else if (f !== d && !r(f, d, a, o, i, c)) return !1
                                }
                                return !0
                            }

                            function De(e, n, r, a, o, i, c) {
                                var s = nt(e),
                                    u = s.length;
                                if (u != nt(n).length && !o) return !1;
                                for (var l = u; l--;) {
                                    var f = s[l];
                                    if (!(o ? f in n : X.call(n, f))) return !1
                                }
                                for (var d = o; ++l < u;) {
                                    var p = e[f = s[l]],
                                        m = n[f],
                                        g = a ? a(o ? m : p, o ? p : m, f) : t;
                                    if (!(g === t ? r(p, m, a, o, i, c) : g)) return !1;
                                    d || (d = "constructor" == f)
                                }
                                if (!d) {
                                    var h = e.constructor,
                                        v = n.constructor;
                                    if (h != v && "constructor" in e && "constructor" in n && !("function" == typeof h && h instanceof h && "function" == typeof v && v instanceof v)) return !1
                                }
                                return !0
                            }

                            function Le(e, t, n) {
                                var r = le.callback || it;
                                return r = r === it ? he : r, n ? r(e, t, n) : r
                            }
                            var Oe = Ie("length");

                            function Ne(e, n) {
                                var r = null == e ? t : e[n];
                                return Ze(r) ? r : t
                            }

                            function Ue(e) {
                                return null != e && Be(Oe(e))
                            }

                            function Me(e, t) {
                                return e = "number" == typeof e || L.test(e) ? +e : -1, t = null == t ? ce : t, e > -1 && e % 1 == 0 && e < t
                            }

                            function Fe(e, t) {
                                var n = typeof e;
                                return !!("string" == n && I.test(e) || "number" == n) || !Ke(e) && (!E.test(e) || null != t && e in qe(t))
                            }

                            function Be(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ce
                            }

                            function ze(e) {
                                return e == e && !Xe(e)
                            }

                            function Re(e) {
                                for (var t = rt(e), n = t.length, r = n && e.length, a = !!r && Be(r) && (Ke(e) || Ye(e) || et(e)), o = -1, i = []; ++o < n;) {
                                    var c = t[o];
                                    (a && Me(c, r) || X.call(e, c)) && i.push(c)
                                }
                                return i
                            }

                            function qe(e) {
                                if (le.support.unindexedChars && et(e)) {
                                    for (var t = -1, n = e.length, r = Object(e); ++t < n;) r[t] = e.charAt(t);
                                    return r
                                }
                                return Xe(e) ? e : Object(e)
                            }

                            function Ve(e) {
                                if (Ke(e)) return e;
                                var t = [];
                                return function(e) {
                                    return null == e ? "" : e + ""
                                }(e).replace(x, (function(e, n, r, a) {
                                    t.push(r ? a.replace(P, "$1") : n || e)
                                })), t
                            }

                            function He(e) {
                                var n = e ? e.length : 0;
                                return n ? e[n - 1] : t
                            }

                            function We(e, t, n) {
                                return (Ke(e) ? pe : be)(e, t = Le(t, n, 3))
                            }
                            var Ge = function(e, n) {
                                    return function(r, a, o) {
                                        if (a = Le(a, o, 3), Ke(r)) {
                                            var i = function(e, t, n) {
                                                for (var r = e.length, a = n ? r : -1; n ? a-- : ++a < r;)
                                                    if (t(e[a], a, e)) return a;
                                                return -1
                                            }(r, a, n);
                                            return i > -1 ? r[i] : t
                                        }
                                        return function(e, t, n, r) {
                                            var a;
                                            return n(e, (function(e, n, o) {
                                                if (t(e, n, o)) return a = r ? n : e, !1
                                            })), a
                                        }(r, a, e)
                                    }
                                }(ke),
                                Je = function(e, n) {
                                    return function(r, a, o) {
                                        return "function" == typeof a && o === t && Ke(r) ? e(r, a) : n(r, xe(a, o, 3))
                                    }
                                }(de, ke);

                            function Qe(e, t, n) {
                                return (Ke(e) ? me : _e)(e, t = Le(t, n, 3))
                            }

                            function Ye(e) {
                                return G(e) && Ue(e) && X.call(e, "callee") && !ne.call(e, "callee")
                            }
                            var Ke = oe || function(e) {
                                return G(e) && Be(e.length) && Z.call(e) == o
                            };

                            function $e(e) {
                                return Xe(e) && Z.call(e) == u
                            }

                            function Xe(e) {
                                var t = typeof e;
                                return !!e && ("object" == t || "function" == t)
                            }

                            function Ze(e) {
                                return null != e && ($e(e) ? ee.test($.call(e)) : G(e) && (W(e) ? ee : D).test(e))
                            }

                            function et(e) {
                                return "string" == typeof e || G(e) && Z.call(e) == g
                            }

                            function tt(e) {
                                return G(e) && Be(e.length) && !!N[Z.call(e)]
                            }
                            var nt = ie ? function(e) {
                                var n = null == e ? t : e.constructor;
                                return "function" == typeof n && n.prototype === e || ("function" == typeof e ? le.support.enumPrototypes : Ue(e)) ? Re(e) : Xe(e) ? ie(e) : []
                            } : Re;

                            function rt(e) {
                                if (null == e) return [];
                                Xe(e) || (e = Object(e));
                                var t = e.length,
                                    n = le.support;
                                t = t && Be(t) && (Ke(e) || Ye(e) || et(e)) && t || 0;
                                for (var r = e.constructor, a = -1, o = $e(r) && r.prototype || Y, i = o === e, c = Array(t), u = t > 0, l = n.enumErrorProps && (e === Q || e instanceof Error), f = n.enumPrototypes && $e(e); ++a < t;) c[a] = a + "";
                                for (var p in e) f && "prototype" == p || l && ("message" == p || "name" == p) || u && Me(p, t) || "constructor" == p && (i || !X.call(e, p)) || c.push(p);
                                if (n.nonEnumShadows && e !== Y) {
                                    var m = e === K ? g : e === Q ? s : Z.call(e),
                                        h = ue[m] || ue[d];
                                    for (m == d && (o = Y), t = O.length; t--;) {
                                        var v = h[p = O[t]];
                                        i && v || (v ? !X.call(e, p) : e[p] === o[p]) || c.push(p)
                                    }
                                }
                                return c
                            }
                            var at = function(e) {
                                return function(t, n, r) {
                                    var a = {};
                                    return n = Le(n, r, 3), Se(t, (function(t, r, o) {
                                        var i = n(t, r, o);
                                        t = e ? t : i, a[r = e ? i : r] = t
                                    })), a
                                }
                            }();

                            function ot(e) {
                                e = qe(e);
                                for (var t = -1, n = nt(e), r = n.length, a = Array(r); ++t < r;) {
                                    var o = n[t];
                                    a[t] = [o, e[o]]
                                }
                                return a
                            }

                            function it(e, n, r) {
                                return r && function(e, t, n) {
                                    if (!Xe(n)) return !1;
                                    var r = typeof t;
                                    if ("number" == r ? Ue(n) && Me(t, n.length) : "string" == r && t in n) {
                                        var a = n[t];
                                        return e == e ? e === a : a != a
                                    }
                                    return !1
                                }(e, n, r) && (n = t), G(e) ? st(e) : he(e, n)
                            }

                            function ct(e) {
                                return e
                            }

                            function st(e) {
                                return Ee(ve(e, !0))
                            }

                            function ut(e) {
                                return Fe(e) ? Ie(e) : function(e) {
                                    var t = e + "";
                                    return e = Ve(e),
                                        function(n) {
                                            return Te(n, e, t)
                                        }
                                }(e)
                            }
                            le.callback = it, le.filter = We, le.forEach = Je, le.keys = nt, le.keysIn = rt, le.map = Qe, le.mapValues = at, le.matches = st, le.pairs = ot, le.property = ut, le.collect = Qe, le.each = Je, le.iteratee = it, le.select = We, le.find = Ge, le.identity = ct, le.isArguments = Ye, le.isArray = Ke, le.isFunction = $e, le.isNative = Ze, le.isObject = Xe, le.isString = et, le.isTypedArray = tt, le.isUndefined = function(e) {
                                return e === t
                            }, le.last = He, le.detect = Ge, le.VERSION = "3.10.1", F && B && V && ((B.exports = le)._ = le)
                        }).call(this)
                    }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}],
                21: [function(e, t, n) {
                    var r = e("./lib_managed/lodash"),
                        a = e("./lib/helpers");
                    (void 0 !== n ? n : this).getLinkTrackingManager = function(e, t, n) {
                        var o, i, c, s, u, l;

                        function f(t, o) {
                            for (var i, s, u, l, f, d; null !== (i = t.parentNode) && !r.isUndefined(i) && "A" !== (s = t.tagName.toUpperCase()) && "AREA" !== s;) t = i;
                            if (!r.isUndefined(t.href)) {
                                var p = t.hostname || a.getHostName(t.href),
                                    m = p.toLowerCase(),
                                    g = t.href.replace(p, m);
                                new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i").test(g) || (u = t.id, l = a.getCssClasses(t), f = t.target, d = c ? t.innerHTML : null, g = unescape(g), e.trackLinkClick(g, u, l, f, d, n(o)))
                            }
                        }

                        function d(e) {
                            return function(t) {
                                var n, r;
                                n = (t = t || window.event).which || t.button, r = t.target || t.srcElement, "click" === t.type ? r && f(r, e) : "mousedown" === t.type ? 1 !== n && 2 !== n || !r ? u = l = null : (u = n, l = r) : "mouseup" === t.type && (n === u && r === l && f(r, e), u = l = null)
                            }
                        }

                        function p(e) {
                            i ? (a.addEventListener(e, "mouseup", d(s), !1), a.addEventListener(e, "mousedown", d(s), !1)) : a.addEventListener(e, "click", d(s), !1)
                        }
                        return {
                            configureLinkClickTracking: function(e, t, n, r) {
                                c = n, s = r, i = t, o = a.getFilter(e, !0)
                            },
                            addClickListeners: function() {
                                var e, n = document.links;
                                for (e = 0; e < n.length; e++) o(n[e]) && !n[e][t] && (p(n[e]), n[e][t] = !0)
                            }
                        }
                    }
                }, {
                    "./lib/helpers": 18,
                    "./lib_managed/lodash": 20
                }],
                22: [function(e, t, n) {
                    ! function() {
                        var t = e("./lib_managed/lodash"),
                            r = e("./lib/detectors").localStorageAccessible,
                            a = e("./lib/helpers");
                        (void 0 !== n ? n : this).OutQueueManager = function(e, n, o, i, c, s, u) {
                            var l, f, d, p = !1,
                                m = (c = c && window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest) ? "/com.snowplowanalytics.snowplow/tp2" : "/i";
                            if (s = r() && i && c && s || 1, l = ["snowplowOutQueue", e, n, c ? "post2" : "get"].join("_"), i) try {
                                d = JSON.parse(localStorage.getItem(l))
                            } catch (e) {}

                            function g(e) {
                                for (var t = 0, n = 0; n < e.length; n++) {
                                    var r = e.charCodeAt(n);
                                    r <= 127 ? t += 1 : r <= 2047 ? t += 2 : r >= 55296 && r <= 57343 ? (t += 4, n++) : t += r < 65535 ? 3 : 4
                                }
                                return t
                            }

                            function h() {
                                for (; d.length && "string" != typeof d[0] && "object" != typeof d[0];) d.shift();
                                if (d.length < 1) p = !1;
                                else {
                                    if (!t.isString(f)) throw "No Snowplow collector configured, cannot track";
                                    p = !0;
                                    var e = d[0];
                                    if (c) {
                                        var n = v(f),
                                            r = setTimeout((function() {
                                                n.abort(), p = !1
                                            }), 5e3);
                                        var o = function(e) {
                                            for (var t = 0, n = 0; t < e.length && !((n += e[t].bytes) >= u);) t += 1;
                                            return t
                                        }(d);
                                        n.onreadystatechange = function() {
                                            if (4 === n.readyState && n.status >= 200 && n.status < 400) {
                                                for (var e = 0; e < o; e++) d.shift();
                                                i && a.attemptWriteLocalStorage(l, JSON.stringify(d)), clearTimeout(r), h()
                                            } else 4 === n.readyState && n.status >= 400 && (clearTimeout(r), p = !1)
                                        };
                                        var s = t.map(d.slice(0, o), (function(e) {
                                            return e.evt
                                        }));
                                        s.length > 0 && n.send(w(y(s)))
                                    } else {
                                        var m = new Image(1, 1);
                                        m.onload = function() {
                                            d.shift(), i && a.attemptWriteLocalStorage(l, JSON.stringify(d)), h()
                                        }, m.onerror = function() {
                                            p = !1
                                        }, m.src = f + e.replace("?", "?stm=" + (new Date).getTime() + "&")
                                    }
                                }
                            }

                            function v(e) {
                                var t = new XMLHttpRequest;
                                return t.open("POST", e, !0), t.withCredentials = !0, t.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), t
                            }

                            function w(e) {
                                return JSON.stringify({
                                    schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                                    data: e
                                })
                            }

                            function y(e) {
                                for (var t = (new Date).getTime().toString(), n = 0; n < e.length; n++) e[n].stm = t;
                                return e
                            }
                            return t.isArray(d) || (d = []), o.outQueues.push(d), c && s > 1 && o.bufferFlushers.push((function() {
                                p || h()
                            })), {
                                enqueueRequest: function(e, n) {
                                    if (f = n + m, c) {
                                        var r = function(e) {
                                            var n = t.mapValues(e, (function(e) {
                                                return e.toString()
                                            }));
                                            return {
                                                evt: n,
                                                bytes: g(JSON.stringify(n))
                                            }
                                        }(e);
                                        if (r.bytes >= u) return a.warn("Event of size " + r.bytes + " is too long - the maximum size is " + u), void v(f).send(w(y([r.evt])));
                                        d.push(r)
                                    } else d.push(function(e) {
                                        var t = "?",
                                            n = {
                                                co: !0,
                                                cx: !0
                                            },
                                            r = !0;
                                        for (var a in e) e.hasOwnProperty(a) && !n.hasOwnProperty(a) && (r ? r = !1 : t += "&", t += encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
                                        for (var o in n) e.hasOwnProperty(o) && n.hasOwnProperty(o) && (t += "&" + o + "=" + encodeURIComponent(e[o]));
                                        return t
                                    }(e));
                                    var o = !1;
                                    i && (o = a.attemptWriteLocalStorage(l, JSON.stringify(d))), p || o && !(d.length >= s) || h()
                                },
                                executeQueue: h
                            }
                        }
                    }()
                }, {
                    "./lib/detectors": 17,
                    "./lib/helpers": 18,
                    "./lib_managed/lodash": 20
                }],
                23: [function(e, t, n) {
                    ! function() {
                        e("uuid");
                        var t = e("./lib_managed/lodash"),
                            r = e("./lib/helpers"),
                            a = e("./in_queue"),
                            o = e("./tracker");
                        (void 0 !== n ? n : this).Snowplow = function(e, n) {
                            var i, c = document,
                                s = window,
                                u = "js-2.9.0",
                                l = {
                                    outQueues: [],
                                    bufferFlushers: [],
                                    expireDateTime: null,
                                    hasLoaded: !1,
                                    registeredOnLoadHandlers: [],
                                    pageViewId: null
                                };

                            function f() {
                                var e;
                                if (!l.hasLoaded)
                                    for (l.hasLoaded = !0, e = 0; e < l.registeredOnLoadHandlers.length; e++) l.registeredOnLoadHandlers[e]();
                                return !0
                            }
                            return s.Snowplow = {
                                getTrackerCf: function(e) {
                                    var t = new o.Tracker(n, "", u, l, {});
                                    return t.setCollectorCf(e), t
                                },
                                getTrackerUrl: function(e) {
                                    var t = new o.Tracker(n, "", u, l, {});
                                    return t.setCollectorUrl(e), t
                                },
                                getAsyncTracker: function() {
                                    return new o.Tracker(n, "", u, l, {})
                                }
                            }, r.addEventListener(s, "beforeunload", (function() {
                                var e;
                                if (t.forEach(l.bufferFlushers, (function(e) {
                                        e()
                                    })), l.expireDateTime)
                                    do {
                                        if (e = new Date, 0 === t.filter(l.outQueues, (function(e) {
                                                return e.length > 0
                                            })).length) break
                                    } while (e.getTime() < l.expireDateTime)
                            }), !1), c.addEventListener ? r.addEventListener(c, "DOMContentLoaded", (function e() {
                                c.removeEventListener("DOMContentLoaded", e, !1), f()
                            })) : c.attachEvent && (c.attachEvent("onreadystatechange", (function e() {
                                "complete" === c.readyState && (c.detachEvent("onreadystatechange", e), f())
                            })), c.documentElement.doScroll && s === s.top && function e() {
                                if (!l.hasLoaded) {
                                    try {
                                        c.documentElement.doScroll("left")
                                    } catch (t) {
                                        return void setTimeout(e, 0)
                                    }
                                    f()
                                }
                            }()), new RegExp("WebKit").test(navigator.userAgent) && (i = setInterval((function() {
                                (l.hasLoaded || /loaded|complete/.test(c.readyState)) && (clearInterval(i), f())
                            }), 10)), r.addEventListener(s, "load", f, !1), new a.InQueueManager(o.Tracker, u, l, e, n)
                        }
                    }()
                }, {
                    "./in_queue": 15,
                    "./lib/helpers": 18,
                    "./lib_managed/lodash": 20,
                    "./tracker": 24,
                    uuid: 12
                }],
                24: [function(e, t, n) {
                    ! function() {
                        var t = e("./lib_managed/lodash"),
                            r = e("./lib/helpers"),
                            a = e("./lib/proxies"),
                            o = e("browser-cookie-lite"),
                            i = e("./lib/detectors"),
                            c = e("sha1"),
                            s = e("./links"),
                            u = e("./forms"),
                            l = e("./errors"),
                            f = e("./out_queue"),
                            d = e("snowplow-tracker-core").trackerCore,
                            p = e("uuid");
                        (void 0 !== n ? n : this).Tracker = function(e, n, m, g, h) {
                            var v, w, y, k, b, A, S, T, C, _, E, I, x, P, j, D, L, O, N, U, M = d(!0, (function(e) {
                                    ! function(e) {
                                        var t = Math.round((new Date).getTime() / 1e3),
                                            n = Ne("id"),
                                            a = Ne("ses"),
                                            c = Ue("ses"),
                                            s = Ge(),
                                            u = s[0],
                                            l = s[1],
                                            f = s[2],
                                            d = s[3],
                                            m = s[4],
                                            g = s[5],
                                            h = s[6],
                                            v = !!o.cookie(C);
                                        if ((ee || v) && "none" != ue) return void("localStorage" == ue ? (r.attemptWriteLocalStorage(n, ""), r.attemptWriteLocalStorage(sesName, "")) : "cookie" != ue && "cookieAndLocalStorage" != ue || (o.cookie(n, "", -1, X, $), o.cookie(a, "", -1, X, $)));
                                        "0" === u ? (O = h, c || "none" == ue || (d++, g = m, O = p.v4()), ve = d) : (new Date).getTime() - ge > 1e3 * ne && (O = p.v4(), ve++);
                                        e.add("vp", i.detectViewport()), e.add("ds", i.detectDocumentSize()), e.add("vid", ve), e.add("sid", O), e.add("duid", l), e.add("fp", de), e.add("uid", N), Pe(), e.add("refr", Le(w || H)), e.add("url", Le(k || V)), "none" != ue && (He(l, f, ve, t, g, O), Ve());
                                        ge = (new Date).getTime()
                                    }(e),
                                    function(e, t) {
                                        var n = new Date,
                                            r = !!o.cookie(C);
                                        ee || r || (Ae.enqueueRequest(e.build(), y), g.expireDateTime = n.getTime() + t)
                                    }(e, Q)
                                })),
                                F = document,
                                B = window,
                                z = navigator,
                                R = a.fixupUrl(F.domain, B.location.href, r.getReferrer()),
                                q = r.fixupDomain(R[0]),
                                V = R[1],
                                H = R[2],
                                W = (h = h || {}).hasOwnProperty("platform") ? h.platform : "web",
                                G = h.hasOwnProperty("appId") ? h.appId : "",
                                J = F.title,
                                Q = h.hasOwnProperty("pageUnloadTimer") ? h.pageUnloadTimer : 500,
                                Y = !1,
                                K = h.hasOwnProperty("cookieName") ? h.cookieName : "_sp_",
                                $ = h.hasOwnProperty("cookieDomain") ? h.cookieDomain : null,
                                X = "/",
                                Z = z.doNotTrack || z.msDoNotTrack || B.doNotTrack,
                                ee = !!h.hasOwnProperty("respectDoNotTrack") && (h.respectDoNotTrack && ("yes" === Z || "1" === Z)),
                                te = h.hasOwnProperty("cookieLifetime") ? h.cookieLifetime : 63072e3,
                                ne = h.hasOwnProperty("sessionCookieTimeout") ? h.sessionCookieTimeout : 1800,
                                re = h.hasOwnProperty("userFingerprintSeed") ? h.userFingerprintSeed : 123412414,
                                ae = F.characterSet || F.charset,
                                oe = !!h.hasOwnProperty("forceSecureTracker") && !0 === h.forceSecureTracker,
                                ie = !(oe || !h.hasOwnProperty("forceUnsecureTracker")) && !0 === h.forceUnsecureTracker,
                                ce = !h.hasOwnProperty("useLocalStorage") || (r.warn("argmap.useLocalStorage is deprecated. Use argmap.stateStorageStrategy instead."), h.useLocalStorage),
                                se = !h.hasOwnProperty("useCookies") || (r.warn("argmap.useCookies is deprecated. Use argmap.stateStorageStrategy instead."), h.useCookies),
                                ue = h.hasOwnProperty("stateStorageStrategy") ? h.stateStorageStrategy : se || ce ? se && ce ? "cookieAndLocalStorage" : se ? "cookie" : "localStorage" : "none",
                                le = z.userLanguage || z.language,
                                fe = i.detectBrowserFeatures("cookie" == ue || "cookieAndLocalStorage" == ue, Ne("testcookie")),
                                de = !1 === h.userFingerprint ? "" : i.detectSignature(re),
                                pe = e + "_" + n,
                                me = !1,
                                ge = (new Date).getTime(),
                                he = c,
                                ve = 1,
                                we = {
                                    transaction: {},
                                    items: []
                                },
                                ye = s.getLinkTrackingManager(M, pe, Qe),
                                ke = u.getFormTrackingManager(M, pe, Qe),
                                be = l.errorManager(M),
                                Ae = new f.OutQueueManager(e, n, g, "localStorage" == ue || "cookieAndLocalStorage" == ue, h.post, h.bufferSize, h.maxPostBytes || 4e4),
                                Se = !1,
                                Te = h.contexts || {},
                                Ce = [],
                                _e = [],
                                Ee = !1,
                                Ie = !1;
                            for (var xe in h.hasOwnProperty("discoverRootDomain") && h.discoverRootDomain && ($ = r.findRootDomain()), Te.gaCookies && Ce.push((U = {}, t.forEach(["__utma", "__utmb", "__utmc", "__utmv", "__utmz", "_ga"], (function(e) {
                                    var t = o.cookie(e);
                                    t && (U[e] = t)
                                })), {
                                    schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                                    data: U
                                })), Te.geolocation && Xe(), M.setBase64Encoding(!h.hasOwnProperty("encodeBase64") || h.encodeBase64), M.setTrackerVersion(m), M.setTrackerNamespace(n), M.setAppId(G), M.setPlatform(W), M.setTimezone(i.detectTimezone()), M.addPayloadPair("lang", le), M.addPayloadPair("cs", ae), fe) Object.prototype.hasOwnProperty.call(fe, xe) && ("res" === xe || "cd" === xe || "cookie" === xe ? M.addPayloadPair(xe, fe[xe]) : M.addPayloadPair("f_" + xe, fe[xe]));

                            function Pe() {
                                (R = a.fixupUrl(F.domain, B.location.href, r.getReferrer()))[1] !== V && (H = r.getReferrer(V)), q = r.fixupDomain(R[0]), V = R[1]
                            }

                            function je() {
                                var e = (new Date).getTime();
                                this.href && (this.href = r.decorateQuerystring(this.href, "_sp", L + "." + e))
                            }

                            function De(e) {
                                for (var t = 0; t < F.links.length; t++) {
                                    var n = F.links[t];
                                    !n.spDecorationEnabled && e(n) && (r.addEventListener(n, "click", je, !0), r.addEventListener(n, "mousedown", je, !0), n.spDecorationEnabled = !0)
                                }
                            }

                            function Le(e) {
                                var t;
                                return T ? (t = new RegExp("#.*"), e.replace(t, "")) : e
                            }

                            function Oe(e) {
                                var t = new RegExp("^([a-z]+):").exec(e);
                                return t ? t[1] : null
                            }

                            function Ne(e) {
                                return K + e + "." + D
                            }

                            function Ue(e) {
                                var t = Ne(e);
                                return "localStorage" == ue ? r.attemptGetLocalStorage(t) : "cookie" == ue || "cookieAndLocalStorage" == ue ? o.cookie(t) : void 0
                            }

                            function Me() {
                                Pe(), D = he(($ || q) + (X || "/")).slice(0, 4)
                            }

                            function Fe() {
                                var e = new Date;
                                E = e.getTime()
                            }

                            function Be() {
                                ! function() {
                                    var e = ze(),
                                        t = e[0];
                                    t < I ? I = t : t > x && (x = t);
                                    var n = e[1];
                                    n < P ? P = n : n > j && (j = n)
                                }(), Fe()
                            }

                            function ze() {
                                var e = F.compatMode && "BackCompat" !== F.compatMode ? F.documentElement : F.body;
                                return [e.scrollLeft || B.pageXOffset, e.scrollTop || B.pageYOffset]
                            }

                            function Re() {
                                var e = ze(),
                                    t = e[0];
                                I = t, x = t;
                                var n = e[1];
                                P = n, j = n
                            }

                            function qe(e) {
                                var t = Math.round(e);
                                if (!isNaN(t)) return t
                            }

                            function Ve() {
                                We(Ne("ses"), "*", ne)
                            }

                            function He(e, t, n, r, a, o) {
                                We(Ne("id"), e + "." + t + "." + n + "." + r + "." + a + "." + o, te)
                            }

                            function We(e, t, n) {
                                "localStorage" == ue ? r.attemptWriteLocalStorage(e, t) : "cookie" != ue && "cookieAndLocalStorage" != ue || o.cookie(e, t, n, X, $)
                            }

                            function Ge() {
                                if ("none" == ue) return [];
                                var e, t = new Date,
                                    n = Math.round(t.getTime() / 1e3),
                                    r = Ue("id");
                                return r ? (e = r.split(".")).unshift("0") : e = ["1", L, n, 0, n, ""], e[6] || (e[6] = p.v4()), e
                            }

                            function Je(e) {
                                return oe ? "https://" + e : ie ? "http://" + e : ("https:" === F.location.protocol ? "https" : "http") + "://" + e
                            }

                            function Qe(e) {
                                var n = Ce.concat(e || []);
                                if (Te.webPage && n.push({
                                        schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                                        data: {
                                            id: Ye()
                                        }
                                    }), Te.performanceTiming) {
                                    var a = function() {
                                        var e = ["navigationStart", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectionStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "msFirstPaint", "chromeFirstPaint", "requestEnd", "proxyStart", "proxyEnd"],
                                            t = B.performance || B.mozPerformance || B.msPerformance || B.webkitPerformance;
                                        if (t) {
                                            var n = {};
                                            for (var a in t.timing) r.isValueInArray(a, e) && (n[a] = t.timing[a]);
                                            return delete n.requestEnd, B.chrome && B.chrome.loadTimes && "number" == typeof B.chrome.loadTimes().firstPaintTime && (n.chromeFirstPaint = Math.round(1e3 * B.chrome.loadTimes().firstPaintTime)), {
                                                schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                                                data: n
                                            }
                                        }
                                    }();
                                    a && n.push(a)
                                }
                                if (B.optimizely) {
                                    if (Te.optimizelySummary) {
                                        var o = t.map(function() {
                                            var e = Ke("state"),
                                                n = Ke("experiments");
                                            return t.map(e && n && e.activeExperiments, (function(t) {
                                                var r = n[t];
                                                return {
                                                    activeExperimentId: t.toString(),
                                                    variation: e.variationIdsMap[t][0].toString(),
                                                    conditional: r && r.conditional,
                                                    manual: r && r.manual,
                                                    name: r && r.name
                                                }
                                            }))
                                        }(), (function(e) {
                                            return {
                                                schema: "iglu:com.optimizely.snowplow/optimizely_summary/jsonschema/1-0-0",
                                                data: e
                                            }
                                        }));
                                        t.each(o, (function(e) {
                                            n.push(e)
                                        }))
                                    }
                                    if (Te.optimizelyXSummary) {
                                        o = t.map(function() {
                                            var e = $e("state"),
                                                n = e.getActiveExperimentIds(),
                                                r = ($e("data", "experiments"), $e("visitor"));
                                            return t.map(n, (function(t) {
                                                return variation = e.getVariationMap()[t], variationName = variation.name, variationId = variation.id, visitorId = r.visitorId, {
                                                    experimentId: parseInt(t),
                                                    variationName: variationName,
                                                    variation: parseInt(variationId),
                                                    visitorId: visitorId
                                                }
                                            }))
                                        }(), (function(e) {
                                            return {
                                                schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                                                data: e
                                            }
                                        }));
                                        t.each(o, (function(e) {
                                            n.push(e)
                                        }))
                                    }
                                    if (Te.optimizelyExperiments)
                                        for (var i = function() {
                                                var e = Ke("experiments");
                                                if (e) {
                                                    var t = [];
                                                    for (var n in e)
                                                        if (e.hasOwnProperty(n)) {
                                                            var r = {};
                                                            r.id = n;
                                                            var a = e[n];
                                                            r.code = a.code, r.manual = a.manual, r.conditional = a.conditional, r.name = a.name, r.variationIds = a.variation_ids, t.push({
                                                                schema: "iglu:com.optimizely/experiment/jsonschema/1-0-0",
                                                                data: r
                                                            })
                                                        }
                                                    return t
                                                }
                                                return []
                                            }(), c = 0; c < i.length; c++) n.push(i[c]);
                                    if (Te.optimizelyStates) {
                                        var s = function() {
                                            var e = [],
                                                t = Ke("experiments");
                                            if (t)
                                                for (var n in t) t.hasOwnProperty(n) && e.push(n);
                                            var a = Ke("state");
                                            if (a) {
                                                for (var o = [], i = a.activeExperiments || [], c = 0; c < e.length; c++) {
                                                    var s = e[c],
                                                        u = {};
                                                    u.experimentId = s, u.isActive = r.isValueInArray(e[c], i);
                                                    var l = a.variationMap || {};
                                                    u.variationIndex = l[s];
                                                    var f = a.variationNamesMap || {};
                                                    u.variationName = f[s];
                                                    var d = a.variationIdsMap || {};
                                                    d[s] && 1 === d[s].length && (u.variationId = d[s][0]), o.push({
                                                        schema: "iglu:com.optimizely/state/jsonschema/1-0-0",
                                                        data: u
                                                    })
                                                }
                                                return o
                                            }
                                            return []
                                        }();
                                        for (c = 0; c < s.length; c++) n.push(s[c])
                                    }
                                    if (Te.optimizelyVariations) {
                                        var u = function() {
                                            var e = Ke("variations");
                                            if (e) {
                                                var t = [];
                                                for (var n in e)
                                                    if (e.hasOwnProperty(n)) {
                                                        var r = {};
                                                        r.id = n;
                                                        var a = e[n];
                                                        r.name = a.name, r.code = a.code, t.push({
                                                            schema: "iglu:com.optimizely/variation/jsonschema/1-0-0",
                                                            data: r
                                                        })
                                                    }
                                                return t
                                            }
                                            return []
                                        }();
                                        for (c = 0; c < u.length; c++) n.push(u[c])
                                    }
                                    if (Te.optimizelyVisitor) {
                                        var l = function() {
                                            var e = Ke("visitor");
                                            if (e) {
                                                var t = {};
                                                t.browser = e.browser, t.browserVersion = e.browserVersion, t.device = e.device, t.deviceType = e.deviceType, t.ip = e.ip;
                                                var n = e.platform || {};
                                                t.platformId = n.id, t.platformVersion = n.version;
                                                var r = e.location || {};
                                                return t.locationCity = r.city, t.locationRegion = r.region, t.locationCountry = r.country, t.mobile = e.mobile, t.mobileId = e.mobileId, t.referrer = e.referrer, t.os = e.os, {
                                                    schema: "iglu:com.optimizely/visitor/jsonschema/1-0-0",
                                                    data: t
                                                }
                                            }
                                        }();
                                        l && n.push(l)
                                    }
                                    if (Te.optimizelyAudiences) {
                                        var f = function() {
                                            var e = Ke("visitor", "audiences");
                                            if (e) {
                                                var t = [];
                                                for (var n in e)
                                                    if (e.hasOwnProperty(n)) {
                                                        var r = {
                                                            id: n,
                                                            isMember: e[n]
                                                        };
                                                        t.push({
                                                            schema: "iglu:com.optimizely/visitor_audience/jsonschema/1-0-0",
                                                            data: r
                                                        })
                                                    }
                                                return t
                                            }
                                            return []
                                        }();
                                        for (c = 0; c < f.length; c++) n.push(f[c])
                                    }
                                    if (Te.optimizelyDimensions) {
                                        var d = function() {
                                            var e = Ke("visitor", "dimensions");
                                            if (e) {
                                                var t = [];
                                                for (var n in e)
                                                    if (e.hasOwnProperty(n)) {
                                                        var r = {
                                                            id: n,
                                                            value: e[n]
                                                        };
                                                        t.push({
                                                            schema: "iglu:com.optimizely/visitor_dimension/jsonschema/1-0-0",
                                                            data: r
                                                        })
                                                    }
                                                return t
                                            }
                                            return []
                                        }();
                                        for (c = 0; c < d.length; c++) n.push(d[c])
                                    }
                                }
                                if (Te.augurIdentityLite) {
                                    var p = function() {
                                        var e = B.augur;
                                        if (e) {
                                            var t = {
                                                    consumer: {},
                                                    device: {}
                                                },
                                                n = e.consumer || {};
                                            t.consumer.UUID = n.UID;
                                            var r = e.device || {};
                                            t.device.ID = r.ID, t.device.isBot = r.isBot, t.device.isProxied = r.isProxied, t.device.isTor = r.isTor;
                                            var a = r.fingerprint || {};
                                            return t.device.isIncognito = a.browserHasIncognitoEnabled, {
                                                schema: "iglu:io.augur.snowplow/identity_lite/jsonschema/1-0-0",
                                                data: t
                                            }
                                        }
                                    }();
                                    p && n.push(p)
                                }
                                if (Te.parrable) {
                                    var m = function() {
                                        var e = window._hawk;
                                        if (e) {
                                            var t = {
                                                encryptedId: null,
                                                optout: null
                                            };
                                            t.encryptedId = e.browserid;
                                            var n = new RegExp("(?:^|;)\\s?" + "_parrable_hawk_optout".replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i"),
                                                r = document.cookie.match(n);
                                            return t.optout = r && decodeURIComponent(r[1]) ? r && decodeURIComponent(r[1]) : "false", {
                                                schema: "iglu:com.parrable/encrypted_payload/jsonschema/1-0-0",
                                                data: t
                                            }
                                        }
                                    }();
                                    m && n.push(m)
                                }
                                return n
                            }

                            function Ye() {
                                return null == g.pageViewId && (g.pageViewId = p.v4()), g.pageViewId
                            }

                            function Ke(e, t) {
                                var n;
                                return B.optimizely && B.optimizely.data && (n = B.optimizely.data[e], void 0 !== t && void 0 !== n && (n = n[t])), n
                            }

                            function $e(e, t) {
                                var n;
                                return B.optimizely && (n = B.optimizely.get(e), void 0 !== t && void 0 !== n && (n = n[t])), n
                            }

                            function Xe() {
                                !Se && z.geolocation && z.geolocation.getCurrentPosition && (Se = !0, z.geolocation.getCurrentPosition((function(e) {
                                    var t = e.coords,
                                        n = {
                                            schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                                            data: {
                                                latitude: t.latitude,
                                                longitude: t.longitude,
                                                latitudeLongitudeAccuracy: t.accuracy,
                                                altitude: t.altitude,
                                                altitudeAccuracy: t.altitudeAccuracy,
                                                bearing: t.heading,
                                                speed: t.speed,
                                                timestamp: Math.round(e.timestamp)
                                            }
                                        };
                                    Ce.push(n)
                                })))
                            }

                            function Ze(e, t) {
                                return (e || []).concat(t ? t() : [])
                            }

                            function et(e, t, n, a) {
                                Pe(), Ie && (Ee && null != g.pageViewId || (g.pageViewId = p.v4())), Ie = !0, J = F.title, b = e;
                                var o = r.fixupTitle(b || J);
                                M.trackPageView(Le(k || V), o, Le(w || H), Qe(Ze(t, n)), a);
                                var i = new Date;
                                Y && !me && (me = !0, Re(), r.addEventListener(F, "click", Fe), r.addEventListener(F, "mouseup", Fe), r.addEventListener(F, "mousedown", Fe), r.addEventListener(F, "mousemove", Fe), r.addEventListener(F, "mousewheel", Fe), r.addEventListener(B, "DOMMouseScroll", Fe), r.addEventListener(B, "scroll", Be), r.addEventListener(F, "keypress", Fe), r.addEventListener(F, "keydown", Fe), r.addEventListener(F, "keyup", Fe), r.addEventListener(B, "resize", Fe), r.addEventListener(B, "focus", Fe), r.addEventListener(B, "blur", Fe), E = i.getTime(), clearInterval(v), v = setInterval((function() {
                                    var e = new Date;
                                    E + S > e.getTime() && A < e.getTime() && function(e) {
                                        Pe();
                                        var t = F.title;
                                        t !== J && (J = t, b = null);
                                        M.trackPagePing(Le(k || V), r.fixupTitle(b || J), Le(w || H), qe(I), qe(x), qe(P), qe(j), Qe(e)), Re()
                                    }(Ze(t, n))
                                }), S))
                            }

                            function tt(e, t, n, r, a, o, i, c, s) {
                                M.trackEcommerceTransactionItem(e, t, n, r, a, o, i, Qe(c), s)
                            }

                            function nt(e, t) {
                                return "" !== e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t
                            }

                            function rt(e) {
                                var t, n, a, o = ["", "webkit", "ms", "moz"];
                                if (!_)
                                    for (n = 0; n < o.length; n++) {
                                        if (F[nt(a = o[n], "hidden")]) {
                                            "prerender" === F[nt(a, "visibilityState")] && (t = !0);
                                            break
                                        }
                                        if (!1 === F[nt(a, "hidden")]) break
                                    }
                                t ? r.addEventListener(F, a + "visibilitychange", (function t() {
                                    F.removeEventListener(a + "visibilitychange", t, !1), e()
                                })) : e()
                            }
                            return Me(),
                                function() {
                                    var e = "none" != ue && !!Ue("ses"),
                                        t = Ge();
                                    t[1] ? L = t[1] : (L = p.v4(), t[1] = L), O = t[6], e || (t[3]++, O = p.v4(), t[6] = O, t[5] = t[4]), "none" != ue && (Ve(), t[4] = Math.round((new Date).getTime() / 1e3), t.shift(), He.apply(null, t))
                                }(), h.crossDomainLinker && De(h.crossDomainLinker), {
                                    getDomainSessionIndex: function() {
                                        return ve
                                    },
                                    getPageViewId: function() {
                                        return Ye()
                                    },
                                    newSession: function() {
                                        var e = Math.round((new Date).getTime() / 1e3),
                                            t = (Ue("ses"), Ge()),
                                            n = t[0],
                                            r = t[1],
                                            a = t[2],
                                            o = t[3],
                                            i = t[4],
                                            c = t[5],
                                            s = t[6];
                                        "0" === n ? (O = s, "none" != ue && (o++, c = i, O = p.v4()), ve = o, Ve()) : (O = p.v4(), ve++), "none" != ue && (He(r, a, ve, e, c, O), Ve()), ge = (new Date).getTime()
                                    },
                                    getCookieName: function(e) {
                                        return Ne(e)
                                    },
                                    getUserId: function() {
                                        return N
                                    },
                                    getDomainUserId: function() {
                                        return Ge()[1]
                                    },
                                    getDomainUserInfo: function() {
                                        return Ge()
                                    },
                                    getUserFingerprint: function() {
                                        return de
                                    },
                                    setAppId: function(e) {
                                        r.warn('setAppId is deprecated. Instead add an "appId" field to the argmap argument of newTracker.'), M.setAppId(e)
                                    },
                                    setReferrerUrl: function(e) {
                                        w = e
                                    },
                                    setCustomUrl: function(e) {
                                        Pe(), k = function(e, t) {
                                            var n;
                                            return Oe(t) ? t : "/" === t.slice(0, 1) ? Oe(e) + "://" + r.getHostName(e) + t : ((n = (e = Le(e)).indexOf("?")) >= 0 && (e = e.slice(0, n)), (n = e.lastIndexOf("/")) !== e.length - 1 && (e = e.slice(0, n + 1)), e + t)
                                        }(V, e)
                                    },
                                    setDocumentTitle: function(e) {
                                        J = F.title, b = e
                                    },
                                    discardHashTag: function(e) {
                                        T = e
                                    },
                                    setCookieNamePrefix: function(e) {
                                        r.warn('setCookieNamePrefix is deprecated. Instead add a "cookieName" field to the argmap argument of newTracker.'), K = e
                                    },
                                    setCookieDomain: function(e) {
                                        r.warn('setCookieDomain is deprecated. Instead add a "cookieDomain" field to the argmap argument of newTracker.'), $ = r.fixupDomain(e), Me()
                                    },
                                    setCookiePath: function(e) {
                                        X = e, Me()
                                    },
                                    setVisitorCookieTimeout: function(e) {
                                        te = e
                                    },
                                    setSessionCookieTimeout: function(e) {
                                        r.warn('setSessionCookieTimeout is deprecated. Instead add a "sessionCookieTimeout" field to the argmap argument of newTracker.'), ne = e
                                    },
                                    setUserFingerprintSeed: function(e) {
                                        r.warn('setUserFingerprintSeed is deprecated. Instead add a "userFingerprintSeed" field to the argmap argument of newTracker.'), re = e, de = i.detectSignature(re)
                                    },
                                    enableUserFingerprint: function(e) {
                                        r.warn('enableUserFingerprintSeed is deprecated. Instead add a "userFingerprint" field to the argmap argument of newTracker.'), e || (de = "")
                                    },
                                    respectDoNotTrack: function(e) {
                                        r.warn('This usage of respectDoNotTrack is deprecated. Instead add a "respectDoNotTrack" field to the argmap argument of newTracker.');
                                        var t = z.doNotTrack || z.msDoNotTrack;
                                        ee = e && ("yes" === t || "1" === t)
                                    },
                                    crossDomainLinker: function(e) {
                                        De(e)
                                    },
                                    addListener: function(e, t, n) {
                                        addClickListener(e, t, n)
                                    },
                                    enableLinkClickTracking: function(e, t, n, r) {
                                        g.hasLoaded ? (ye.configureLinkClickTracking(e, t, n, r), ye.addClickListeners()) : g.registeredOnLoadHandlers.push((function() {
                                            ye.configureLinkClickTracking(e, t, n, r), ye.addClickListeners()
                                        }))
                                    },
                                    refreshLinkClickTracking: function() {
                                        g.hasLoaded ? ye.addClickListeners() : g.registeredOnLoadHandlers.push((function() {
                                            ye.addClickListeners()
                                        }))
                                    },
                                    enableActivityTracking: function(e, t) {
                                        e === parseInt(e, 10) && t === parseInt(t, 10) ? (Y = !0, A = (new Date).getTime() + 1e3 * e, S = 1e3 * t) : r.warn("Activity tracking not enabled, please provide integer values for minimumVisitLength and heartBeatDelay.")
                                    },
                                    updatePageActivity: function() {
                                        Fe()
                                    },
                                    enableFormTracking: function(e, t) {
                                        g.hasLoaded ? (ke.configureFormTracking(e), ke.addFormListeners(t)) : g.registeredOnLoadHandlers.push((function() {
                                            ke.configureFormTracking(e), ke.addFormListeners(t)
                                        }))
                                    },
                                    killFrame: function() {
                                        B.location !== B.top.location && (B.top.location = B.location)
                                    },
                                    redirectFile: function(e) {
                                        "file:" === B.location.protocol && (B.location = e)
                                    },
                                    setOptOutCookie: function(e) {
                                        C = e
                                    },
                                    setCountPreRendered: function(e) {
                                        _ = e
                                    },
                                    setUserId: function(e) {
                                        N = e
                                    },
                                    identifyUser: function(e) {
                                        setUserId(e)
                                    },
                                    setUserIdFromLocation: function(e) {
                                        Pe(), N = r.fromQuerystring(e, V)
                                    },
                                    setUserIdFromReferrer: function(e) {
                                        Pe(), N = r.fromQuerystring(e, H)
                                    },
                                    setUserIdFromCookie: function(e) {
                                        N = o.cookie(e)
                                    },
                                    setCollectorCf: function(e) {
                                        y = function(e) {
                                            return Je(e + ".cloudfront.net")
                                        }(e)
                                    },
                                    setCollectorUrl: function(e) {
                                        y = Je(e)
                                    },
                                    setPlatform: function(e) {
                                        r.warn('setPlatform is deprecated. Instead add a "platform" field to the argmap argument of newTracker.'), M.setPlatform(e)
                                    },
                                    encodeBase64: function(e) {
                                        r.warn('This usage of encodeBase64 is deprecated. Instead add an "encodeBase64" field to the argmap argument of newTracker.'), M.setBase64Encoding(e)
                                    },
                                    flushBuffer: function() {
                                        Ae.executeQueue()
                                    },
                                    enableGeolocationContext: Xe,
                                    trackPageView: function(e, t, n, r) {
                                        rt((function() {
                                            et(e, t, n, r)
                                        }))
                                    },
                                    trackStructEvent: function(e, t, n, r, a, o, i) {
                                        rt((function() {
                                            M.trackStructEvent(e, t, n, r, a, Qe(o), i)
                                        }))
                                    },
                                    trackSelfDescribingEvent: function(e, t, n) {
                                        rt((function() {
                                            M.trackSelfDescribingEvent(e, Qe(t), n)
                                        }))
                                    },
                                    trackUnstructEvent: function(e, t, n) {
                                        rt((function() {
                                            M.trackSelfDescribingEvent(e, Qe(t), n)
                                        }))
                                    },
                                    addTrans: function(e, t, n, r, a, o, i, c, s, u, l) {
                                        we.transaction = {
                                            orderId: e,
                                            affiliation: t,
                                            total: n,
                                            tax: r,
                                            shipping: a,
                                            city: o,
                                            state: i,
                                            country: c,
                                            currency: s,
                                            context: u,
                                            tstamp: l
                                        }
                                    },
                                    addItem: function(e, t, n, r, a, o, i, c, s) {
                                        we.items.push({
                                            orderId: e,
                                            sku: t,
                                            name: n,
                                            category: r,
                                            price: a,
                                            quantity: o,
                                            currency: i,
                                            context: c,
                                            tstamp: s
                                        })
                                    },
                                    trackTrans: function() {
                                        rt((function() {
                                            ! function(e, t, n, r, a, o, i, c, s, u, l) {
                                                M.trackEcommerceTransaction(e, t, n, r, a, o, i, c, s, Qe(u), l)
                                            }(we.transaction.orderId, we.transaction.affiliation, we.transaction.total, we.transaction.tax, we.transaction.shipping, we.transaction.city, we.transaction.state, we.transaction.country, we.transaction.currency, we.transaction.context, we.transaction.tstamp);
                                            for (var e = 0; e < we.items.length; e++) {
                                                var t = we.items[e];
                                                tt(t.orderId, t.sku, t.name, t.category, t.price, t.quantity, t.currency, t.context, t.tstamp)
                                            }
                                            we = {
                                                transaction: {},
                                                items: []
                                            }
                                        }))
                                    },
                                    trackLinkClick: function(e, t, n, r, a, o, i) {
                                        rt((function() {
                                            M.trackLinkClick(e, t, n, r, a, Qe(o), i)
                                        }))
                                    },
                                    trackAdImpression: function(e, t, n, r, a, o, i, c, s, u) {
                                        rt((function() {
                                            M.trackAdImpression(e, t, n, r, a, o, i, c, Qe(s), u)
                                        }))
                                    },
                                    trackAdClick: function(e, t, n, r, a, o, i, c, s, u, l) {
                                        rt((function() {
                                            M.trackAdClick(e, t, n, r, a, o, i, c, s, Qe(u), l)
                                        }))
                                    },
                                    trackAdConversion: function(e, t, n, r, a, o, i, c, s, u, l) {
                                        rt((function() {
                                            M.trackAdConversion(e, t, n, r, a, o, i, c, s, Qe(u), l)
                                        }))
                                    },
                                    trackSocialInteraction: function(e, t, n, r, a) {
                                        rt((function() {
                                            M.trackSocialInteraction(e, t, n, Qe(r), a)
                                        }))
                                    },
                                    trackAddToCart: function(e, t, n, r, a, o, i, c) {
                                        rt((function() {
                                            M.trackAddToCart(e, t, n, r, a, o, Qe(i), c)
                                        }))
                                    },
                                    trackRemoveFromCart: function(e, t, n, r, a, o, i, c) {
                                        rt((function() {
                                            M.trackRemoveFromCart(e, t, n, r, a, o, Qe(i), c)
                                        }))
                                    },
                                    trackSiteSearch: function(e, t, n, r, a, o) {
                                        rt((function() {
                                            M.trackSiteSearch(e, t, n, r, Qe(a), o)
                                        }))
                                    },
                                    trackTiming: function(e, t, n, r, a, o) {
                                        rt((function() {
                                            M.trackSelfDescribingEvent({
                                                schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                                                data: {
                                                    category: e,
                                                    variable: t,
                                                    timing: n,
                                                    label: r
                                                }
                                            }, Qe(a), o)
                                        }))
                                    },
                                    trackConsentWithdrawn: function(e, t, n, r, a, o, i) {
                                        rt((function() {
                                            M.trackConsentWithdrawn(e, t, n, r, a, Qe(o), i)
                                        }))
                                    },
                                    trackConsentGranted: function(e, t, n, r, a, o, i) {
                                        rt((function() {
                                            M.trackConsentGranted(e, t, n, r, a, Qe(o), i)
                                        }))
                                    },
                                    trackEnhancedEcommerceAction: function(e, t, n) {
                                        var r = _e.concat(t || []);
                                        _e.length = 0, rt((function() {
                                            M.trackSelfDescribingEvent({
                                                schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                                                data: {
                                                    action: e
                                                }
                                            }, Qe(r), n)
                                        }))
                                    },
                                    addEnhancedEcommerceActionContext: function(e, t, n, a, o, i, c, s, u, l) {
                                        _e.push({
                                            schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                                            data: {
                                                id: e,
                                                affiliation: t,
                                                revenue: r.parseFloat(n),
                                                tax: r.parseFloat(a),
                                                shipping: r.parseFloat(o),
                                                coupon: i,
                                                list: c,
                                                step: r.parseInt(s),
                                                option: u,
                                                currency: l
                                            }
                                        })
                                    },
                                    addEnhancedEcommerceImpressionContext: function(e, t, n, a, o, i, c, s, u) {
                                        _e.push({
                                            schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                                            data: {
                                                id: e,
                                                name: t,
                                                list: n,
                                                brand: a,
                                                category: o,
                                                variant: i,
                                                position: r.parseInt(c),
                                                price: r.parseFloat(s),
                                                currency: u
                                            }
                                        })
                                    },
                                    addEnhancedEcommerceProductContext: function(e, t, n, a, o, i, c, s, u, l, f) {
                                        _e.push({
                                            schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                                            data: {
                                                id: e,
                                                name: t,
                                                list: n,
                                                brand: a,
                                                category: o,
                                                variant: i,
                                                price: r.parseFloat(c),
                                                quantity: r.parseInt(s),
                                                coupon: u,
                                                position: r.parseInt(l),
                                                currency: f
                                            }
                                        })
                                    },
                                    addEnhancedEcommercePromoContext: function(e, t, n, r, a) {
                                        _e.push({
                                            schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                                            data: {
                                                id: e,
                                                name: t,
                                                creative: n,
                                                position: r,
                                                currency: a
                                            }
                                        })
                                    },
                                    enableErrorTracking: function(e, t) {
                                        be.enableErrorTracking(e, t, Qe())
                                    },
                                    trackError: function(e, t, n, r, a, o) {
                                        var i = Qe(o);
                                        be.trackError(e, t, n, r, a, i)
                                    },
                                    preservePageViewId: function() {
                                        Ee = !0
                                    }
                                }
                        }
                    }()
                }, {
                    "./errors": 13,
                    "./forms": 14,
                    "./lib/detectors": 17,
                    "./lib/helpers": 18,
                    "./lib/proxies": 19,
                    "./lib_managed/lodash": 20,
                    "./links": 21,
                    "./out_queue": 22,
                    "browser-cookie-lite": 1,
                    sha1: 6,
                    "snowplow-tracker-core": 7,
                    uuid: 12
                }]
            }, {}, [16])
        }
        n.d(t, "a", (function() {
            return a
        }))
    }).call(this, n(1))
}, function(e, t) {
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
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    ! function(e, t) {
        e.snowplow || (e.GlobalSnowplowNamespace = e.GlobalSnowplowNamespace || [], e.GlobalSnowplowNamespace.push("snowplow"), e.snowplow = function() {
            (e.snowplow.q = e.snowplow.q || []).push(arguments)
        }, e.snowplow.q = e.snowplow.q || []);
        var n = "cf",
            r = document.location.host;
        r.endsWith("-dev-staging.b12sites.com") || r.endsWith("-dev-production.b12sites.com") ? n = "cf-dev" : (r.endsWith("-staging-staging.b12sites.com") || r.endsWith("-staging-production.b12sites.com")) && (n = "cf-staging"), e.snowplow("newTracker", n, "//prod-traffic.b12.io", {
            appId: "ca/" + t
        }), e.snowplow("trackPageView")
    }(window, __CLIENT_UID__), Object(r.a)()
}]);
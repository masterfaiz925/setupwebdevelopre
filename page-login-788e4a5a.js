import {
    r as m,
    K as Q,
    P as K,
    J as B,
    _ as A,
    a2 as E,
    o as f,
    j as S,
    a4 as we,
    a5 as Ze,
    a9 as O,
    H as a,
    l as e,
    a0 as r,
    a6 as w,
    a7 as j,
    F as xe,
    a3 as me,
    aa as N,
    a8 as L,
    a1 as q,
    am as ue,
    n as M,
    A as ae,
    D as Qe,
    ae as ie,
    $ as J,
    ak as G,
    B as Z,
    af as ce,
    ag as de,
    G as be,
    O as ge,
    aA as et,
    aM as Ee,
    N as Be,
    ad as tt
} from "./modules-7f822252.js";
import {
    G as Re,
    S as Ve,
    a$ as Fe,
    b0 as st,
    g as he,
    b1 as ot,
    b2 as nt,
    b3 as at,
    J as pe,
    h as ye,
    _ as H,
    u as ee,
    b4 as rt,
    A as oe,
    b5 as lt,
    b6 as Le,
    b7 as Ne,
    b8 as it,
    a as Ue,
    D as qe,
    b9 as De,
    ba as Me,
    bb as ut,
    bc as ct,
    aZ as dt
} from "./page-activity-730ec554.js";
import {
    v as ke,
    a as pt
} from "./page-home-377b607d.js";
const Te = m(!1);

function Ae() {
    const {
        locale: p
    } = Q(), k = Re(), i = K();
    async function t(u, n) {
        ot(u), p.value = u, k.updateLanguage(u), await nt(u), at(pe.global.t), localStorage.setItem("needUpd", "1"), n === 1 ? c() : Te.value = !1
    }
    const c = () => {
            i.back()
        },
        s = B(() => {
            let u = 0;
            const n = Ve().getLanguage,
                v = [];
            if (n) {
                const h = n == null ? void 0 : n.replace("th", "tha").split("|");
                h == null || h.forEach(d => {
                    Fe.forEach(g => {
                        (d.toLowerCase().indexOf(g.key.toLowerCase()) !== -1 || g.key.toLowerCase().indexOf(d.toLowerCase()) !== -1) && (v.push(g), u++)
                    })
                })
            }
            return k.getLanguage || k.updateLanguage(st()), u == 0 ? Fe : v
        });
    return {
        onClick: t,
        languagesList: s,
        getIcons: he,
        locale: p,
        goBack: c,
        getLangName: u => {
            const n = s.value.find(v => v.key === u);
            return (n == null ? void 0 : n.key.toLocaleUpperCase()) || ""
        },
        show: Te
    }
}
const vt = ["onClick"],
    _t = {
        class: "item-title"
    },
    mt = ["src"],
    gt = {
        key: 0
    },
    ht = {
        key: 1
    },
    ft = A({
        __name: "index",
        props: {
            type: {
                type: Number,
                default: 1
            }
        },
        setup(p) {
            const {
                onClick: k,
                languagesList: i,
                locale: t
            } = Ae();
            return (c, s) => {
                const o = E("van-radio"),
                    u = E("van-radio-group");
                return f(), S("div", {
                    class: O(p.type === 2 ? "list info" : "list")
                }, [(f(!0), S(we, null, Ze(a(i), (n, v) => (f(), S("div", {
                    class: O(["item ar-1px-b", n.key == a(t) ? "checked" : ""]),
                    key: v,
                    onClick: h => a(k)(n.key, p.type)
                }, [e("div", _t, [e("img", {
                    src: a(ye)("languages", n.key)
                }, null, 8, mt), p.type === 2 ? (f(), S("span", gt, r(n.key.toLocaleUpperCase()), 1)) : (f(), S("span", ht, r(n.name), 1))]), w(u, {
                    modelValue: a(t),
                    "onUpdate:modelValue": s[0] || (s[0] = h => xe(t) ? t.value = h : null)
                }, {
                    default: j(() => [w(o, {
                        name: n.key
                    }, null, 8, ["name"])]),
                    _: 2
                }, 1032, ["modelValue"])], 10, vt))), 128))], 2)
            }
        }
    });
const wt = H(ft, [
        ["__scopeId", "data-v-29e221c4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Main/LanguageList/index.vue"]
    ]),
    bt = {
        class: "img"
    },
    yt = A({
        __name: "LangPopup",
        setup(p) {
            const {
                getLangName: k,
                locale: i,
                show: t
            } = Ae(), c = Ve(), s = B(() => c.getLoginChangeLanguage == "1");
            return (o, u) => {
                const n = E("van-popup"),
                    v = me("lazy");
                return f(), S("div", null, [s.value ? (f(), S("div", {
                    key: 0,
                    class: "right",
                    onClick: u[0] || (u[0] = h => t.value = !0)
                }, [e("div", bt, [N(e("img", null, null, 512), [
                    [v, a(ye)("languages", a(i))]
                ])]), L(" " + r(a(k)(a(i))), 1)])) : q("v-if", !0), w(n, {
                    show: a(t),
                    "onUpdate:show": u[1] || (u[1] = h => xe(t) ? t.value = h : null),
                    class: "popup",
                    position: "bottom",
                    teleport: "body"
                }, {
                    default: j(() => [w(wt, {
                        type: 2
                    })]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const kt = H(yt, [
        ["__scopeId", "data-v-8610bd15"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/LangPopup.vue"]
    ]),
    St = {
        class: "popups"
    },
    $t = {
        class: "popup-content"
    },
    Ct = {
        class: "tit"
    },
    It = {
        class: "con"
    },
    Pt = {
        class: "info"
    },
    Ft = {
        class: "txt"
    },
    Tt = {
        class: "txt"
    },
    xt = {
        class: "box"
    },
    Et = ["placeholder"],
    Bt = {
        class: "lab"
    },
    Rt = {
        class: "popup-foot"
    },
    Vt = A({
        __name: "index",
        props: {
            showPopup: {
                type: Boolean,
                default: m(!1)
            }
        },
        emits: ["update:showPopup", "onConfirm", "onBack"],
        setup(p, {
            emit: k
        }) {
            const i = p,
                t = K(),
                {
                    t: c
                } = Q(),
                s = B({
                    get() {
                        return i.showPopup || !1
                    },
                    set(h) {
                        k("update:showPopup", h)
                    }
                }),
                o = m(""),
                u = () => {
                    if (!o.value) return M(c("googleKey"));
                    k("onConfirm", o.value.toString())
                },
                n = () => {
                    o.value = "", k("onBack")
                };

            function v() {
                t.push({
                    name: "CustomerService"
                })
            }
            return (h, d) => {
                const g = E("van-icon"),
                    C = E("van-popup"),
                    l = me("throttle-click"),
                    b = me("lazy");
                return f(), S("div", St, [w(C, {
                    show: s.value,
                    "onUpdate:show": d[1] || (d[1] = P => s.value = P),
                    position: "center",
                    round: "",
                    class: "popup",
                    "close-on-click-overlay": !1
                }, {
                    default: j(() => [e("div", $t, [e("div", Ct, r(a(c)("googleVerification")), 1), e("div", It, [e("div", Pt, [e("p", Ft, r(a(c)("googleTip5")), 1), e("p", Tt, r(a(c)("googleTip6")), 1)]), e("div", xt, [N(e("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": d[0] || (d[0] = P => o.value = P),
                        maxlength: "6",
                        oninput: "value=value.replace(/\\D/g,'')",
                        placeholder: a(c)("PgoogleVerification")
                    }, null, 8, Et), [
                        [ue, o.value]
                    ]), e("p", Bt, [w(g, {
                        class: "icon",
                        name: "warning-o"
                    }), L(r(a(c)("PVerificationCode")) + " ", 1), e("span", {
                        onClick: v
                    }, r(a(c)("contactServicer")), 1)])]), e("div", Rt, [N((f(), S("div", null, [L(r(a(c)("confirm")), 1)])), [
                        [l, {
                            handler: u,
                            wait: 1e3
                        }]
                    ]), e("div", {
                        onClick: n
                    }, r(a(c)("withdrawDialogDesc6")), 1)])]), N(e("img", {
                        class: "close",
                        onClick: n
                    }, null, 512), [
                        [b, a(ye)("main", "close")]
                    ])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const He = H(Vt, [
        ["__scopeId", "data-v-96e240c3"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Main/VerifyPopup/index.vue"]
    ]),
    Y = p => (ce("data-v-869b9ee0"), p = p(), de(), p),
    Lt = ["src"],
    Nt = ["src"],
    Ut = {
        key: 1,
        class: "captcha_message"
    },
    qt = {
        class: "captcha_message__icon"
    },
    Dt = {
        key: 0,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Mt = Y(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5"
    }, [e("path", {
        d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845"
    }), e("path", {
        d: "M7 12.5l7 7 13-13"
    })], -1)),
    At = [Mt],
    Ht = {
        key: 1,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Ot = Y(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-width": "1.5"
    }, [e("circle", {
        cx: "14",
        cy: "14",
        r: "13.25"
    }), e("path", {
        d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    jt = [Ot],
    Wt = {
        class: "captcha_message__text"
    },
    Gt = {
        key: 2,
        class: "captcha_message loadding"
    },
    zt = Y(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    Xt = Y(() => e("div", {
        class: "captcha_message__text"
    }, "加载中...", -1)),
    Kt = [zt, Xt],
    Yt = {
        key: 3,
        class: "captcha_message"
    },
    Jt = Y(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    Zt = Y(() => e("div", {
        class: "captcha_message__text"
    }, null, -1)),
    Qt = [Jt, Zt],
    es = Y(() => e("path", {
        d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
        "p-id": "820"
    }, null, -1)),
    ts = Y(() => e("path", {
        d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
        "p-id": "821"
    }, null, -1)),
    ss = [es, ts],
    os = {
        key: 0,
        class: "captcha__actions"
    },
    ns = ["fill"],
    as = Y(() => e("path", {
        d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
        "fill-rule": "nonzero"
    }, null, -1)),
    rs = [as],
    ls = A({
        __name: "SlideCaptcha",
        props: {
            width: {
                type: Number,
                default: 340
            },
            height: {
                type: Number,
                default: 212
            },
            barHeight: {
                type: Number,
                default: 40
            },
            handlerIconWidth: {
                type: Number,
                default: 16
            },
            handlerIconHeigth: {
                type: Number,
                default: 16
            },
            background: {
                type: String,
                default: "#eee"
            },
            circle: {
                type: Boolean,
                default: !1
            },
            radius: {
                type: String,
                default: "4px"
            },
            text: {
                type: String,
                default: "按住滑块拖动"
            },
            progressBarBg: {
                type: String,
                default: "#76c61d"
            },
            successTip: {
                type: String,
                default: "验证通过，超过80%用户"
            },
            failTip: {
                type: String,
                default: "验证未通过，拖动滑块将悬浮图像正确合并"
            },
            showRefresh: {
                type: Boolean,
                default: !1
            },
            refreshColor: {
                type: String,
                default: "#505050"
            }
        },
        emits: ["finish", "refresh"],
        setup(p, {
            expose: k,
            emit: i
        }) {
            const t = p,
                c = m(!1),
                s = m(!1),
                o = m(0),
                u = m(0),
                n = m(!1),
                v = m(!1),
                h = m(!1),
                d = m([]),
                g = m(void 0),
                C = m(!1),
                l = m(!1),
                b = m(!1),
                P = m(""),
                I = m(""),
                R = m(!1),
                $ = B(() => ({
                    width: t.width + "px",
                    height: t.height + "px",
                    position: "relative",
                    overflow: "hidden"
                })),
                x = B(() => ({
                    width: t.width + "px"
                })),
                V = B(() => ({
                    width: t.width + "px",
                    height: t.barHeight + "px",
                    lineHeight: t.barHeight + "px",
                    background: t.background,
                    borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius
                })),
                W = B(() => ({
                    background: t.progressBarBg,
                    height: t.barHeight + "px",
                    borderRadius: t.circle ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px" : t.radius
                })),
                te = B(() => ({
                    height: t.barHeight + "px",
                    width: t.width + "px"
                })),
                y = B(() => ({
                    width: t.barHeight + "px",
                    height: t.barHeight - 2 + "px"
                })),
                T = B(() => ({
                    width: t.handlerIconWidth + "px",
                    height: t.handlerIconHeigth + "px"
                })),
                re = B(() => t.refreshColor),
                se = B(() => ({
                    color: t.refreshColor
                })),
                _ = m(),
                F = m(),
                le = m(),
                z = m(),
                D = m();
            ae(() => {});
            const je = () => {
                    c.value = !0, Z(() => {
                        Ce(), Ke()
                    }), b.value = !0
                },
                We = (U, X) => {
                    b.value = !1, P.value = U, I.value = X
                },
                Ge = () => {
                    l.value = !0
                },
                ze = U => {
                    U.value = U, l.value = !1, C.value = !0
                },
                Ce = () => {
                    o.value = 0, u.value = 0, d.value = [], s.value = !1, h.value = !1, b.value = !1, l.value = !1, C.value = !1, R.value = !1, F && (F.value.style.width = 0), z && (z.value.style.left = 0), D && (D.value.style.left = 0)
                },
                Ie = () => {
                    window.removeEventListener("touchmove", ve), window.removeEventListener("touchend", _e), window.removeEventListener("mousemove", ve), window.removeEventListener("mouseup", _e)
                },
                Pe = U => {
                    !R.value && P.value && I.value && !h.value && (window.addEventListener("touchmove", ve), window.addEventListener("touchend", _e), window.addEventListener("mousemove", ve), window.addEventListener("mouseup", _e), s.value = !0, g.value = new Date, o.value = U.pageX || U.touches[0].pageX, u.value = U.pageY || U.touches[0].pageY)
                },
                ve = U => {
                    if (s.value && !R.value && P.value && I.value && !h.value) {
                        const X = (U.pageX || U.touches[0].pageX) - o.value,
                            fe = (U.pageY || U.touches[0].pageY) - u.value;
                        D.value.style.left = X + "px", F.value.style.width = X + t.barHeight / 2 + "px", z.value.style.left = X + "px", d.value.push({
                            x: Math.round(X),
                            y: Math.round(fe),
                            t: new Date().getTime() - g.value.getTime()
                        })
                    }
                },
                _e = () => {
                    s.value && !R.value && P.value && I.value && !h.value && (s.value = !1, h.value = !0, Ie(), i("finish", {
                        backgroundImageWidth: le.value.offsetWidth,
                        backgroundImageHeight: le.value.offsetHeight,
                        sliderImageWidth: z.value.offsetWidth,
                        sliderImageHeight: z.value.offsetHeight,
                        startTime: g.value,
                        endTime: new Date,
                        tracks: d.value
                    }))
                },
                Xe = U => {
                    c.value = U
                },
                Ke = () => {
                    _.value.style.setProperty("--textColor", "#333"), _.value.style.setProperty("--width", Math.floor(t.width / 2) + "px"), _.value.style.setProperty("--pwidth", -Math.floor(t.width / 2) + "px")
                },
                Ye = () => {
                    Ce(), i("refresh")
                };
            return k({
                startRequestVerify: Ge,
                endRequestVerify: ze,
                startRequestGenerate: je,
                endRequestGenerate: We,
                setShowHiden: Xe
            }), Qe(() => {
                Ie()
            }), (U, X) => {
                const fe = E("van-popup");
                return f(), ie(fe, {
                    show: c.value,
                    "onUpdate:show": X[0] || (X[0] = Je => c.value = Je),
                    teleport: "body"
                }, {
                    default: j(() => [e("div", {
                        class: "captcha",
                        style: J(x.value)
                    }, [e("div", {
                        class: "captcha__main",
                        style: J($.value)
                    }, [P.value ? (f(), S("img", {
                        key: 0,
                        ref_key: "backgroundRef",
                        ref: le,
                        alt: "background",
                        class: "captcha_background",
                        src: P.value
                    }, null, 8, Lt)) : q("v-if", !0), N(e("img", {
                        ref_key: "sliderRef",
                        ref: z,
                        alt: "slider",
                        class: O(["captcha_slider", {
                            goFirst: n.value,
                            goKeep: v.value
                        }]),
                        src: I.value
                    }, null, 10, Nt), [
                        [G, I.value]
                    ]), C.value ? (f(), S("div", Ut, [e("div", qt, [R.value ? (f(), S("svg", Dt, At)) : (f(), S("svg", Ht, jt))]), e("div", Wt, r(R.value ? p.successTip : p.failTip), 1)])) : q("v-if", !0), b.value ? (f(), S("div", Gt, Kt)) : q("v-if", !0), l.value ? (f(), S("div", Yt, Qt)) : q("v-if", !0)], 4), e("div", {
                        ref_key: "dragVerifyRef",
                        ref: _,
                        class: "captcha__bar",
                        style: J(V.value)
                    }, [e("div", {
                        ref_key: "progressBarRef",
                        ref: F,
                        class: O(["captcha_progress_bar", {
                            goFirst2: n.value
                        }]),
                        style: J(W.value)
                    }, null, 6), e("div", {
                        class: "captcha_progress_bar__text",
                        style: J(te.value)
                    }, r(p.text), 5), e("div", {
                        ref_key: "handlerRef",
                        ref: D,
                        class: O(["captcha_handler", {
                            goFirst: n.value
                        }]),
                        style: J(y.value),
                        onMousedown: Pe,
                        onTouchstart: Pe
                    }, [(f(), S("svg", {
                        "p-id": "819",
                        style: J(T.value),
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, ss, 4))], 38)], 4), p.showRefresh ? (f(), S("div", os, [e("a", {
                        class: "captcha__action",
                        style: J(se.value),
                        onClick: Ye
                    }, [(f(), S("svg", {
                        fill: re.value,
                        height: "20px",
                        version: "1.1",
                        viewBox: "0 0 20 20",
                        width: "20px",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, rs, 8, ns)), q(' <span class="captcha__action__text">刷新</span> ')], 4)])) : q("v-if", !0)], 4)]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const Oe = H(ls, [
        ["__scopeId", "data-v-869b9ee0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/SlideCaptcha.vue"]
    ]),
    is = {
        class: "verifyInput__container"
    },
    us = {
        class: "verifyInput__container-label"
    },
    cs = {
        key: 0
    },
    ds = {
        key: 1
    },
    ps = {
        class: "verifyInput__container-input"
    },
    vs = ["placeholder"],
    _s = {
        key: 0
    },
    ms = {
        key: 1
    },
    gs = {
        class: "verifyInput__container-tip"
    },
    hs = A({
        __name: "VerifyInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: pe.global.t("registerTip1")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1,
                default: ""
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1
            },
            loginType: {
                type: String,
                required: !1
            }
        },
        emits: ["update:value"],
        setup(p, {
            emit: k
        }) {
            const i = p,
                {
                    t
                } = Q(),
                c = ee(),
                o = Re().getUserInfo,
                u = K(),
                n = B({
                    get() {
                        return i.value || ""
                    },
                    set(l) {
                        k("update:value", l)
                    }
                }),
                v = m(!0);
            async function h() {
                var b;
                if (v.value && (v.value = !1), c.countDown > 0) return;
                if (u.currentRoute.value.name === "rpwd" || u.currentRoute.value.name === "register" || u.currentRoute.value.name === "SettingC-UpdatePhone" && !i.isShowVerifyT) {
                    if (!((b = i.number) != null && b.trim())) return M({
                        message: t("telUndetected"),
                        wordBreak: "break-word"
                    });
                    const P = (i.number.trim() + i.numberType.trim()).length;
                    if (P < 10 || P > 14) return M({
                        message: t("wrongTel"),
                        wordBreak: "break-word"
                    })
                } else if (!localStorage.getItem("numberType") && localStorage.getItem("number")) return M({
                    message: t("telUndetected"),
                    wordBreak: "break-word"
                });
                !i.sendFunc || await i.sendFunc() === -1 || c.sendCode()
            }
            const d = B(() => {
                    var l;
                    return i.number ? i.numberType + i.number : ((l = o == null ? void 0 : o.verifyMethods) == null ? void 0 : l.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number")
                }),
                g = l => {
                    const b = l.target;
                    b.value = b.value.replace(/\s+/g, ""), b.value = b.value.replace(/[^\d]/g, "")
                };

            function C() {
                u.push({
                    name: "CustomerService"
                })
            }
            return (l, b) => {
                const P = E("svg-icon"),
                    I = E("van-icon");
                return N((f(), S("div", is, [N(e("div", us, [w(P, {
                    name: "verify"
                }), l.typeP === "updatePhone" || l.typeP === "lock" ? (f(), S("span", cs, r(l.$t("sendVerifyCodeTo")) + " " + r(a(rt)(d.value)), 1)) : (f(), S("span", ds, r(l.$t("verifyCode")), 1))], 512), [
                    [G, !(l.isShowVerifyT === !1 && l.typeP === "updatePhone")]
                ]), e("div", ps, [N(e("input", {
                    type: "text",
                    "onUpdate:modelValue": b[0] || (b[0] = R => n.value = R),
                    placeholder: l.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: g
                }, null, 40, vs), [
                    [ue, n.value]
                ]), e("button", {
                    onClick: h,
                    class: O({
                        inActive: a(c).countDown > 0
                    })
                }, [a(c).countDown === 0 ? (f(), S("span", _s, r(l.$t("send")), 1)) : (f(), S("span", ms, r(a(c).countDown) + "S ", 1))], 2)]), N(e("div", gs, [w(I, {
                    name: "warning-o"
                }), e("span", null, r(l.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: b[1] || (b[1] = R => C())
                }, r(l.$t("contactServicer")), 1)], 512), [
                    [G, !v.value]
                ])], 512)), [
                    [G, l.showVerify]
                ])
            }
        }
    });
const fs = H(hs, [
        ["__scopeId", "data-v-c17848a2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/VerifyInput.vue"]
    ]),
    ws = {
        class: "passwordInput__container"
    },
    bs = {
        class: "passwordInput__container-label"
    },
    ys = {
        class: "passwordInput__container-input"
    },
    ks = ["type", "placeholder", "maxlength", "value"],
    Ss = ["src"],
    $s = A({
        __name: "PasswordInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            maxlength: {
                type: Number,
                required: !1,
                default: 15
            },
            label: {
                type: String,
                required: !0
            }
        },
        emits: ["update:value"],
        setup(p, {
            emit: k
        }) {
            const i = p,
                t = pe.global.t,
                c = m(),
                s = m(""),
                o = m(!1);
            be(s, $ => {
                k("update:value", $)
            }, {
                flush: "post"
            });
            const u = $ => {
                    if (o.value) return;
                    let x = h();
                    const V = $.target;
                    V.value = V.value.replace(/\s+/g, "");
                    const W = /[\u4e00-\u9fa5]/g;
                    V.value = V.value.replace(W, ""), d(x, V.value), g(V.value), C(x)
                },
                n = m(!1),
                v = B(() => he("main", `${n.value?"eyeVisible":"eyeInvisible"}`)),
                h = () => {
                    var $ = {
                        start: 0,
                        end: 0
                    };
                    return $.start = c.value.selectionStart, $.end = c.value.selectionEnd, $
                },
                d = ($, x) => {
                    if (x.length > 1 && !x.includes("•")) {
                        s.value = x;
                        return
                    }
                    let V = x.split("•").join("");
                    if (V) {
                        let W = s.value.length - (x.length - $.end);
                        s.value = s.value.slice(0, $.end - V.length) + V + s.value.slice(W)
                    } else s.value = s.value.slice(0, $.end) + s.value.slice($.end + s.value.length - x.length)
                },
                g = $ => {
                    if (n.value) return;
                    if (!$) {
                        c.value.value = "";
                        return
                    }
                    let x = "";
                    for (let V = 0; V < $.length; V++) x += "•";
                    c.value.value = x
                },
                C = $ => {
                    c.value.setSelectionRange($.start, $.end)
                },
                l = () => {
                    o.value = !0
                },
                b = $ => {
                    o.value && (o.value = !1, u($))
                },
                P = () => {
                    n.value = !n.value, n.value ? c.value.value = s.value : g(s.value)
                };
            ae(() => {
                s.value = i.value || "", g(s.value)
            });
            const I = localStorage.getItem("language"),
                R = B(() => {
                    let $, x = i.label;
                    switch (I) {
                        case "vi":
                            switch (x) {
                                case "Đặt mật khẩu":
                                    $ = t("setLoginPSW");
                                    break;
                                case "Xác nhận mật khẩu":
                                    $ = t("enterPswConfirmation");
                                    break;
                                default:
                                    $ = t("phEnter") + x;
                                    break
                            }
                            break;
                        default:
                            $ = x
                    }
                    return $
                });
            return ($, x) => {
                const V = E("svg-icon");
                return f(), S("div", ws, [e("div", bs, [w(V, {
                    name: "editPswIcon",
                    class: "passwordInput__container-label__icon"
                }), e("span", null, r($.label), 1)]), e("div", ys, [e("input", {
                    type: n.value ? "text" : "password",
                    placeholder: R.value,
                    maxlength: $.maxlength,
                    onInput: u,
                    onCompositionstart: l,
                    onCompositionend: b,
                    ref_key: "inputPwd",
                    ref: c,
                    value: $.value,
                    autocomplete: "new-password"
                }, null, 40, ks), e("img", {
                    src: v.value,
                    class: "eye",
                    onClick: P
                }, null, 8, Ss)])])
            }
        }
    });
const ne = H($s, [
        ["__scopeId", "data-v-ea5b66c8"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/PasswordInput.vue"]
    ]),
    Se = p => (ce("data-v-ab583a3a"), p = p(), de(), p),
    Cs = {
        class: "RpwdPopup"
    },
    Is = {
        class: "RpwdPopup-head"
    },
    Ps = {
        class: "RpwdPopup-topTip"
    },
    Fs = Se(() => e("br", null, null, -1)),
    Ts = {
        class: "RpwdPopup-tip"
    },
    xs = Se(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    Es = {
        class: "RpwdPopup-errorTip"
    },
    Bs = {
        key: 0
    },
    Rs = {
        class: "errorTip"
    },
    Vs = Se(() => e("br", null, null, -1)),
    Ls = {
        class: "RpwdPopup-foot"
    },
    Ns = A({
        __name: "RpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            phoneNumber: {
                type: String,
                default: ""
            },
            phoneNumberType: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(p, {
            emit: k
        }) {
            const i = p,
                {
                    t
                } = Q(),
                c = K(),
                s = m(!1),
                o = ee(),
                u = m(!1),
                n = m({
                    smsvcode: "",
                    password: "",
                    rePassword: ""
                }),
                v = B({
                    get() {
                        return i.show || !1
                    },
                    set(C) {
                        C || k("update:show", !1)
                    }
                }),
                h = async () => {
                    if (!i.phoneNumber) return;
                    await oe(lt({
                        phone: i.phoneNumberType + i.phoneNumber,
                        codeType: Le.resetPassword
                    })) ? ge(t("sendSuccess")) : setTimeout(() => {
                        o.setCountDown(0)
                    }, 500)
                },
                d = async () => {
                    if (!n.value.smsvcode.trim()) return M({
                        message: t("registerTip1"),
                        wordBreak: "break-word"
                    });
                    if (n.value.smsvcode.trim().length != 6) return M({
                        message: t("verifyCode6Digits"),
                        wordBreak: "break-word"
                    });
                    if (!n.value.password.trim()) return M({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!ke.passReg3.test(n.value.password)) {
                        s.value = !0;
                        return
                    }
                    if (!n.value.rePassword.trim()) return M({
                        message: t("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (n.value.password !== n.value.rePassword) {
                        u.value = !0;
                        return
                    } else u.value = !1;
                    const {
                        password: C,
                        smsvcode: l
                    } = n.value;
                    let b = {
                        username: i.phoneNumberType + i.phoneNumber,
                        password: C,
                        type: "mobile",
                        smsvcode: l
                    };
                    await oe(Ne(b)) && (ge(t("rpdsucceed")), localStorage.clear(), k("update:show", !1))
                },
                g = () => {
                    c.push({
                        name: "CustomerService"
                    })
                };
            return (C, l) => {
                const b = E("svg-icon"),
                    P = E("van-popup");
                return f(), S(we, null, [q(" 规则弹层 begin"), w(P, {
                    show: v.value,
                    "onUpdate:show": l[4] || (l[4] = I => v.value = I),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: j(() => [e("div", Cs, [e("div", Is, r(a(t)("idlockTitle")), 1), e("div", Ps, [L(r(a(t)("idlockTip1", [p.passwordErrorMaxNum])), 1), Fs, L(r(a(t)("idlockTip3")), 1)]), w(fs, {
                        value: n.value.smsvcode,
                        "onUpdate:value": l[0] || (l[0] = I => n.value.smsvcode = I),
                        number: p.phoneNumber,
                        sendFunc: h,
                        numberType: p.phoneNumberType,
                        "type-p": "lock"
                    }, null, 8, ["value", "number", "numberType"]), w(ne, {
                        value: n.value.password,
                        "onUpdate:value": l[1] || (l[1] = I => n.value.password = I),
                        label: a(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), N(e("div", Ts, [xs, e("span", null, r(a(t)("pswRule")), 1)], 512), [
                        [G, s.value]
                    ]), w(ne, {
                        value: n.value.rePassword,
                        "onUpdate:value": l[2] || (l[2] = I => n.value.rePassword = I),
                        label: a(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", Es, [u.value ? (f(), S("span", Bs, r(a(t)("unmatchedInput")), 1)) : q("v-if", !0)]), e("div", {
                        class: "gotuserver van-hairline--surround",
                        onClick: g
                    }, [w(b, {
                        name: "customer1"
                    }), L(r(a(t)("contactServicer")), 1)]), e("div", Rs, [L(r(a(t)("wrongTel")), 1), Vs, L(r(a(t)("rpwdPopupTip")), 1)]), e("div", Ls, [e("button", {
                        class: "dialogBtn",
                        onClick: d
                    }, r(a(t)("confirm")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: l[3] || (l[3] = I => k("update:show", !1))
                    }, r(a(t)("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Us = H(Ns, [
        ["__scopeId", "data-v-ab583a3a"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/RpwdPopup.vue"]
    ]),
    qs = {
        class: "phoneInput__container"
    },
    Ds = {
        class: "phoneInput__container-label"
    },
    Ms = {
        class: "phoneInput__container-input"
    },
    As = ["placeholder"],
    Hs = A({
        __name: "PhoneInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            showValidate: {
                type: Boolean,
                required: !0
            },
            typeP: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !0
            },
            number: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeT", "changeN"],
        setup(p, {
            expose: k,
            emit: i
        }) {
            const t = p,
                c = m(),
                s = B({
                    get() {
                        return t.number
                    },
                    set(d) {
                        i("changeN", d.replace(/[^0-9]/g, ""))
                    }
                });

            function o(d) {
                d.target.value.length < 6 && i("update:show-validate", !0)
            }

            function u(d) {
                const g = d.target,
                    C = /[\u4e00-\u9fa5]/g;
                g.value = g.value.replace(C, ""), g.value.length > 0 && i("update:show-validate", !1)
            }
            const n = d => {
                i("changeT", d)
            };
            et(c, () => {
                c.value.close()
            }), ae(() => {});
            const v = m();

            function h() {
                Z(() => {
                    v.value.focus()
                })
            }
            return k({
                getFocus: h
            }), (d, g) => {
                const C = E("svg-icon"),
                    l = me("only-num");
                return f(), S("div", qs, [e("div", Ds, [w(C, {
                    name: "phone"
                }), e("span", null, r(d.$t("phone")), 1)]), e("div", Ms, [w(it, {
                    typeValue: t.numberType,
                    ref_key: "dropDown",
                    ref: c,
                    onChangeT: n
                }, null, 8, ["typeValue"]), N(e("input", {
                    type: "text",
                    name: "userNumber",
                    "onUpdate:modelValue": g[0] || (g[0] = b => s.value = b),
                    placeholder: d.$t("plsEnterTel"),
                    onBlur: o,
                    onInput: u,
                    ref_key: "number",
                    ref: v
                }, null, 40, As), [
                    [l],
                    [ue, s.value]
                ])])])
            }
        }
    });
const Os = H(Hs, [
        ["__scopeId", "data-v-50aa8bb0"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/PhoneInput.vue"]
    ]),
    js = p => (ce("data-v-33f88764"), p = p(), de(), p),
    Ws = {
        class: "signIn__container"
    },
    Gs = {
        class: "signIn__container-button"
    },
    zs = {
        class: "signIn_footer"
    },
    Xs = {
        class: "font24"
    },
    Ks = {
        class: "font24"
    },
    Ys = {
        class: "idlockTip"
    },
    Js = js(() => e("br", null, null, -1)),
    Zs = ["src"],
    Qs = A({
        __name: "SignIn",
        setup(p, {
            expose: k
        }) {
            const i = K(),
                {
                    t
                } = Q(),
                c = m("login"),
                {
                    setLoading: s
                } = Ue(),
                o = ee(),
                u = m(!1),
                n = m(!1),
                v = m(10),
                h = m();
            let d = !1;
            async function g() {
                if (!d) {
                    if (d = !0, De() && await new Promise(_ => setTimeout(_, 1e3)), d = !1, !o.userForm.number || o.userForm.number.toString().trim() === "") {
                        n.value = !0;
                        return
                    }
                    if (!o.userForm.password || o.userForm.password.toString().trim() === "") return M({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    o.userForm.numberType = o.getUserForm.numberType.replace("+", ""), o.userForm.remember && o.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", o.userForm.password) : localStorage.setItem("remember", ""), o.isOpenCaptcha ? te() : (s(!0), await o.signIn(o.userForm).then(_ => {
                        o.userForm.vCode = ""
                    }).catch(_ => {
                        var F;
                        _.code === 1 && (v.value = ((F = _.data) == null ? void 0 : F.passwordErrorMaxNum) || 10), _.msgCode === 33 ? Z(() => T.value = !0) : y(_.msgCode || 0)
                    }).finally(() => {
                        R.value.setShowHiden(!1), s(!1)
                    }))
                }
            }
            const C = () => {
                i.push({
                    name: "register"
                })
            };

            function l() {
                i.push({
                    name: "rpwd"
                }), o.setCurrentView("ResetPassword")
            }

            function b() {
                i.push({
                    name: "CustomerService"
                })
            }
            const P = _ => {
                    o.getUserForm.numberType = _
                },
                I = _ => {
                    o.getUserForm.number = _
                },
                R = m(),
                $ = m(""),
                x = () => {
                    u.value = !1, i.push({
                        name: "CustomerService"
                    })
                };
            Ee(window, "keydown", _ => {
                _.key == "Enter" && g()
            }), ae(async () => {
                var F;
                const _ = o.getUserForm;
                localStorage.getItem("remember") != null && ((F = localStorage.getItem("remember")) == null ? void 0 : F.toString().trim()) != "" ? _.password = localStorage.getItem("remember") : _.password = "", o.setUserForm({ ..._
                })
            });
            let V = be(() => o.userForm.number, _ => {
                o.setCountDown(0)
            }, {
                flush: "post"
            });
            const W = async _ => {
                    Z(async () => {
                        R.value.startRequestVerify(), s(!0), o.signIn(Object.assign(o.userForm, {
                            captchaId: $.value,
                            track: _
                        })).then(F => {}).catch(F => {
                            y(F.msgCode || 0)
                        }).finally(() => {
                            R.value.setShowHiden(!1), s(!1)
                        })
                    })
                },
                te = () => {
                    Z(async () => {
                        R.value.startRequestGenerate();
                        const _ = await oe(Me());
                        _ ? ($.value = _.data.captchaId, R.value.endRequestGenerate(_.data.backgroundImage, _.data.sliderImage)) : R.value.endRequestGenerate(null, null)
                    })
                },
                y = _ => {
                    _ == 122 && (u.value = !0)
                };
            Be(() => {
                V(), o.getUserForm.remember || (o.getUserForm.password = "")
            });
            const T = m(!1),
                re = _ => {
                    o.userForm.vCode = _, g()
                },
                se = () => {
                    T.value = !1, o.userForm.vCode = ""
                };
            return k({
                showPhoneValidate: n
            }), (_, F) => {
                const le = E("van-checkbox"),
                    z = E("svg-icon");
                return f(), S("div", Ws, [w(Os, {
                    "show-validate": n.value,
                    "onUpdate:showValidate": F[0] || (F[0] = D => n.value = D),
                    ref_key: "phone",
                    ref: h,
                    type: c.value,
                    "number-type": a(o).getUserForm.numberType,
                    number: a(o).userForm.number,
                    onChangeT: P,
                    onChangeN: I
                }, null, 8, ["show-validate", "type", "number-type", "number"]), w(ne, {
                    value: a(o).userForm.password,
                    "onUpdate:value": F[1] || (F[1] = D => a(o).userForm.password = D),
                    label: _.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [w(le, {
                    modelValue: a(o).userForm.rememberpwd,
                    "onUpdate:modelValue": F[2] || (F[2] = D => a(o).userForm.rememberpwd = D)
                }, {
                    default: j(() => [L(r(_.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Gs, [e("button", {
                    class: O([a(o).userForm.number != "" ? "active" : ""]),
                    onClick: g
                }, r(_.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: C
                }, r(_.$t("register")), 1)]), e("div", zs, [a(o).isOpenForgetPasswordSMSState || a(o).isOpenForgetPasswordEmailState ? (f(), S("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: l
                }, [w(z, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Xs, r(_.$t("forgetPSW")), 1)])) : q("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: b
                }, [w(z, {
                    name: "customer_b",
                    class: "forgetbg"
                }), e("div", Ks, r(_.$t("customerServiceTitle")), 1)])]), w(Oe, {
                    ref_key: "captchaRef",
                    ref: R,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: a(t)("slideCaptchaText"),
                    onFinish: W,
                    onRefresh: te
                }, null, 8, ["text"]), q("10锁定密码弹窗"), a(o).isOpenForgetPasswordSMSState && u.value ? (f(), ie(Us, {
                    key: 0,
                    show: u.value,
                    "onUpdate:show": F[3] || (F[3] = D => u.value = D),
                    phoneNumber: a(o).getUserForm.number,
                    phoneNumberType: a(o).getUserForm.numberType,
                    passwordErrorMaxNum: v.value
                }, null, 8, ["show", "phoneNumber", "phoneNumberType", "passwordErrorMaxNum"])) : (f(), ie(qe, {
                    key: 1,
                    show: u.value,
                    "onUpdate:show": F[5] || (F[5] = D => u.value = D),
                    "show-cancel-btn": !0,
                    title: _.$t("idlockTitle")
                }, {
                    content: j(() => [e("div", Ys, [L(r(_.$t("idlockTip1", [v.value])) + " ", 1), Js, L(r(_.$t("idlockTip2")), 1)])]),
                    footer: j(() => [e("button", {
                        class: "dialogBtn",
                        onClick: F[4] || (F[4] = D => u.value = !1)
                    }, r(_.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: x
                    }, [e("img", {
                        src: a(he)("main", "iconservr")
                    }, null, 8, Zs), L(" " + r(_.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), q(" 验证弹窗 "), w(He, {
                    showPopup: T.value,
                    onOnConfirm: re,
                    onOnBack: se
                }, null, 8, ["showPopup"])])
            }
        }
    });
const eo = H(Qs, [
        ["__scopeId", "data-v-33f88764"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/SignIn.vue"]
    ]),
    to = {
        class: "verifyInput__container"
    },
    so = {
        class: "verifyInput__container-label"
    },
    oo = {
        key: 0
    },
    no = {
        key: 1
    },
    ao = {
        class: "verifyInput__container-input"
    },
    ro = ["placeholder"],
    lo = {
        key: 0
    },
    io = {
        key: 1
    },
    uo = {
        class: "verifyInput__container-tip"
    },
    co = A({
        __name: "VerifyEmailInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: pe.global.t("registerTip6")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1,
                default: ""
            },
            loginType: {
                type: String,
                required: !1
            }
        },
        emits: ["update:value"],
        setup(p, {
            emit: k
        }) {
            const i = p;
            Q();
            const t = ee(),
                c = K(),
                s = B({
                    get() {
                        return i.value || ""
                    },
                    set(d) {
                        k("update:value", d)
                    }
                }),
                o = m(!0);
            async function u() {
                o.value && (o.value = !1), !(t.countEmailDown > 0) && (t.sendEmailCode(), i.sendFunc && i.sendFunc())
            }
            const n = B(() => localStorage.getItem("email") || i.email),
                v = d => {
                    const g = d.target;
                    g.value = g.value.replace(/\s+/g, ""), g.value = g.value.replace(/[^\d]/g, "")
                };

            function h() {
                c.push({
                    name: "CustomerService"
                })
            }
            return (d, g) => {
                const C = E("svg-icon"),
                    l = E("van-icon");
                return N((f(), S("div", to, [N(e("div", so, [w(C, {
                    name: "safeIcon",
                    class: "verifyInput__container-label__icon"
                }), d.typeP === "updateEmail" || d.typeP === "lock" ? (f(), S("span", oo, r(d.$t("sendVerifyCodeTo")) + " " + r(a(ut)(n.value)), 1)) : (f(), S("span", no, r(d.$t("verifyCode")), 1))], 512), [
                    [G, !(d.isShowVerifyT === !1 && d.typeP === "updateEmail")]
                ]), e("div", ao, [N(e("input", {
                    type: "text",
                    "onUpdate:modelValue": g[0] || (g[0] = b => s.value = b),
                    placeholder: d.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: v
                }, null, 40, ro), [
                    [ue, s.value]
                ]), e("button", {
                    onClick: u,
                    class: O({
                        inActive: a(t).countEmailDown > 0
                    })
                }, [a(t).countEmailDown === 0 ? (f(), S("span", lo, r(d.$t("send")), 1)) : (f(), S("span", io, r(a(t).countEmailDown) + "S ", 1))], 2)]), N(e("div", uo, [w(l, {
                    name: "warning-o"
                }), e("span", null, r(d.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: g[1] || (g[1] = b => h())
                }, r(d.$t("contactServicer")), 1)], 512), [
                    [G, !o.value]
                ])], 512)), [
                    [G, d.showVerify]
                ])
            }
        }
    });
const po = H(co, [
        ["__scopeId", "data-v-484b25b1"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/VerifyEmailInput.vue"]
    ]),
    $e = p => (ce("data-v-95ce4137"), p = p(), de(), p),
    vo = {
        class: "RpwdPopup"
    },
    _o = {
        class: "RpwdPopup-head"
    },
    mo = {
        class: "RpwdPopup-topTip"
    },
    go = $e(() => e("br", null, null, -1)),
    ho = {
        class: "RpwdPopup-tip"
    },
    fo = $e(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    wo = {
        class: "RpwdPopup-errorTip"
    },
    bo = {
        key: 0
    },
    yo = {
        class: "errorTip"
    },
    ko = $e(() => e("br", null, null, -1)),
    So = {
        class: "RpwdPopup-foot"
    },
    $o = A({
        __name: "EmailRpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            email: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(p, {
            emit: k
        }) {
            const i = p,
                {
                    t
                } = Q(),
                c = K(),
                s = m(!1),
                o = ee(),
                u = m(!1),
                n = m({
                    smsvcode: "",
                    password: "",
                    rePassword: ""
                }),
                v = B({
                    get() {
                        return i.show || !1
                    },
                    set(C) {
                        C || k("update:show", !1)
                    }
                }),
                h = async () => {
                    if (!i.email) return;
                    await oe(ct({
                        email: i.email,
                        emailType: Le.resetPassword
                    })) ? ge(t("sendSuccess")) : setTimeout(() => {
                        o.setCountEmailDown(0)
                    }, 500)
                },
                d = async () => {
                    if (!n.value.smsvcode.trim()) return M({
                        message: t("registerTip6"),
                        wordBreak: "break-word"
                    });
                    if (n.value.smsvcode.trim().length != 6) return M({
                        message: t("verifyCode6Digits"),
                        wordBreak: "break-word"
                    });
                    if (!n.value.password.trim()) return M({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!ke.passReg3.test(n.value.password)) {
                        s.value = !0;
                        return
                    }
                    if (!n.value.rePassword.trim()) return M({
                        message: t("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (n.value.password !== n.value.rePassword) {
                        u.value = !0;
                        return
                    } else u.value = !1;
                    const {
                        password: C,
                        smsvcode: l
                    } = n.value;
                    let b = {
                        username: i.email,
                        type: "email",
                        password: C,
                        smsvcode: l
                    };
                    await oe(Ne(b)) && (ge(t("rpdsucceed")), localStorage.clear(), k("update:show", !1))
                },
                g = () => {
                    c.push({
                        name: "CustomerService"
                    })
                };
            return (C, l) => {
                const b = E("svg-icon"),
                    P = E("van-popup");
                return f(), S(we, null, [q(" 规则弹层 begin"), w(P, {
                    show: v.value,
                    "onUpdate:show": l[4] || (l[4] = I => v.value = I),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: j(() => [e("div", vo, [e("div", _o, r(a(t)("idlockTitle")), 1), e("div", mo, [L(r(a(t)("idlockTip1", [p.passwordErrorMaxNum])), 1), go, L(r(a(t)("idlockTip3")), 1)]), w(po, {
                        value: n.value.smsvcode,
                        "onUpdate:value": l[0] || (l[0] = I => n.value.smsvcode = I),
                        sendFunc: h,
                        email: p.email,
                        "type-p": "lock"
                    }, null, 8, ["value", "email"]), w(ne, {
                        value: n.value.password,
                        "onUpdate:value": l[1] || (l[1] = I => n.value.password = I),
                        label: a(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), N(e("div", ho, [fo, e("span", null, r(a(t)("pswRule")), 1)], 512), [
                        [G, s.value]
                    ]), w(ne, {
                        value: n.value.rePassword,
                        "onUpdate:value": l[2] || (l[2] = I => n.value.rePassword = I),
                        label: a(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", wo, [u.value ? (f(), S("span", bo, r(a(t)("unmatchedInput")), 1)) : q("v-if", !0)]), e("div", {
                        class: "gotuserver",
                        onClick: g
                    }, [w(b, {
                        name: "customer1"
                    }), L(r(a(t)("contactServicer")), 1)]), e("div", yo, [L(r(a(t)("wrongemail")), 1), ko, L(r(a(t)("rpwdEmailPopupTip")), 1)]), e("div", So, [e("button", {
                        class: "dialogBtn",
                        onClick: d
                    }, r(a(t)("confirm")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: l[3] || (l[3] = I => k("update:show", !1))
                    }, r(a(t)("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Co = H($o, [
        ["__scopeId", "data-v-95ce4137"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/EmailRpwdPopup.vue"]
    ]),
    Io = {
        class: "emailcontainer"
    },
    Po = {
        class: "emailinput__container"
    },
    Fo = {
        class: "emailinput__container-label"
    },
    To = {
        class: "emailinput__container-input"
    },
    xo = ["placeholder"],
    Eo = A({
        __name: "EmailInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            email: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeN"],
        setup(p, {
            expose: k,
            emit: i
        }) {
            const t = p,
                c = ee(),
                s = B({
                    get() {
                        return t.email
                    },
                    set(v) {
                        i("changeN", v)
                    }
                });

            function o(v) {
                const h = v.target,
                    d = /[\u4e00-\u9fa5]/g;
                h.value = h.value.replace(d, ""), h.value.length > 0 && i("update:show-validate", !1)
            }
            const u = m();

            function n() {
                Z(() => {
                    u.value.focus()
                })
            }
            return k({
                getFocus: n
            }), (v, h) => {
                const d = E("svg-icon");
                return f(), S("div", Io, [e("div", Po, [e("div", Fo, [w(d, {
                    name: "email",
                    class: "emailinput__container-label__icon"
                }), e("span", null, r(a(c).isOpenExternalAccount ? `${v.$t("otherlogin")} ${v.$t("login")}` : v.$t("email")), 1)]), e("div", To, [N(e("input", {
                    type: "text",
                    name: "userEmail",
                    maxlength: "250",
                    "onUpdate:modelValue": h[0] || (h[0] = g => s.value = g),
                    placeholder: v.$t("inputemail"),
                    onInput: o,
                    ref_key: "email",
                    ref: u
                }, null, 40, xo), [
                    [ue, s.value]
                ])])])])
            }
        }
    });
const Bo = H(Eo, [
        ["__scopeId", "data-v-4499df08"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/EmailInput.vue"]
    ]),
    Ro = p => (ce("data-v-436a69c4"), p = p(), de(), p),
    Vo = {
        class: "signIn__container"
    },
    Lo = {
        class: "signIn__container-button"
    },
    No = {
        class: "signIn_footer"
    },
    Uo = {
        class: "font24"
    },
    qo = {
        class: "font24"
    },
    Do = {
        class: "idlockTip"
    },
    Mo = Ro(() => e("br", null, null, -1)),
    Ao = ["src"],
    Ho = A({
        __name: "EmailSignIn",
        setup(p) {
            const k = K(),
                {
                    t: i
                } = Q(),
                t = m(10),
                {
                    setLoading: c
                } = Ue(),
                s = ee(),
                o = m(!1),
                u = m(!1),
                n = m(),
                v = m("login");
            async function h() {
                if (De() && await new Promise(y => setTimeout(y, 500)), !(!s.userForm.email || s.userForm.email.toString().trim() === "")) {
                    if (!s.isOpenExternalAccount && !ke.email1.test(s.userForm.email)) return M({
                        message: i(pt.email),
                        wordBreak: "break-word"
                    });
                    if (!s.userForm.password || s.userForm.password.toString().trim() === "") return M({
                        message: i("registerTip2"),
                        wordBreak: "break-word"
                    });
                    s.userForm.remember && s.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", s.userForm.password) : localStorage.setItem("remember", ""), s.isOpenCaptcha ? W() : (c(!0), await s.signIn(s.userForm).then(y => {}).catch(y => {
                        var T;
                        y.code === 1 && (t.value = ((T = y.data) == null ? void 0 : T.passwordErrorMaxNum) || 10), y.msgCode === 33 ? u.value = !0 : te(y.msgCode || 0)
                    }).finally(() => {
                        b.value.setShowHiden(!1), c(!1)
                    }))
                }
            }
            const d = () => {
                k.push({
                    name: "register"
                })
            };

            function g() {
                k.push({
                    name: "rpwd"
                }), s.setCurrentView("ResetPassword")
            }

            function C() {
                k.push({
                    name: "CustomerService"
                })
            }
            const l = y => {
                    s.getUserForm.email = y
                },
                b = m(),
                P = m(""),
                I = () => {
                    o.value = !1, k.push({
                        name: "CustomerService"
                    })
                };
            Ee(window, "keydown", y => {
                y.key == "Enter" && h()
            });
            const R = y => {
                    s.userForm.vCode = y, h()
                },
                $ = () => {
                    u.value = !1, s.userForm.vCode = ""
                };
            ae(async () => {
                var T;
                const y = s.getUserForm;
                localStorage.getItem("remember") != null && ((T = localStorage.getItem("remember")) == null ? void 0 : T.toString().trim()) != "" ? y.password = localStorage.getItem("remember") : y.password = "", s.setUserForm({ ...y
                })
            });
            let x = be(() => s.userForm.number, y => {
                s.setCountDown(0)
            }, {
                flush: "post"
            });
            const V = async y => {
                    Z(async () => {
                        b.value.startRequestVerify(), c(!0), s.signIn(Object.assign(s.userForm, {
                            captchaId: P.value,
                            track: y
                        })).then(T => {
                            s.userForm.vCode = ""
                        }).catch(T => {
                            te(T.msgCode || 0)
                        }).finally(() => {
                            b.value.setShowHiden(!1), c(!1)
                        })
                    })
                },
                W = () => {
                    Z(async () => {
                        b.value.startRequestGenerate();
                        const y = await oe(Me());
                        y ? (P.value = y.data.captchaId, b.value.endRequestGenerate(y.data.backgroundImage, y.data.sliderImage)) : b.value.endRequestGenerate(null, null)
                    })
                },
                te = y => {
                    y == 122 && (o.value = !0)
                };
            return Be(() => {
                x(), s.getUserForm.remember || (s.getUserForm.password = "")
            }), (y, T) => {
                const re = E("van-checkbox"),
                    se = E("svg-icon");
                return f(), S("div", Vo, [w(Bo, {
                    ref_key: "email",
                    ref: n,
                    type: v.value,
                    email: a(s).userForm.email,
                    onChangeN: l
                }, null, 8, ["type", "email"]), w(ne, {
                    value: a(s).userForm.password,
                    "onUpdate:value": T[0] || (T[0] = _ => a(s).userForm.password = _),
                    label: y.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [w(re, {
                    modelValue: a(s).userForm.rememberpwd,
                    "onUpdate:modelValue": T[1] || (T[1] = _ => a(s).userForm.rememberpwd = _)
                }, {
                    default: j(() => [L(r(y.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Lo, [e("button", {
                    class: O([a(s).userForm.email != "" ? "active" : ""]),
                    onClick: h
                }, r(y.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: d
                }, r(y.$t("register")), 1)]), e("div", No, [a(s).isOpenForgetPasswordSMSState || a(s).isOpenForgetPasswordEmailState ? (f(), S("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: g
                }, [w(se, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Uo, r(y.$t("forgetPSW")), 1)])) : q("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: C
                }, [w(se, {
                    name: "customer_b",
                    class: "forgetbg"
                }), e("div", qo, r(y.$t("customerServiceTitle")), 1)])]), w(Oe, {
                    ref_key: "captchaRef",
                    ref: b,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: a(i)("slideCaptchaText"),
                    onFinish: V,
                    onRefresh: W
                }, null, 8, ["text"]), q("10锁定密码弹窗"), a(s).isOpenForgetPasswordEmailState && o.value ? (f(), ie(Co, {
                    key: 0,
                    show: o.value,
                    "onUpdate:show": T[2] || (T[2] = _ => o.value = _),
                    email: a(s).getUserForm.email,
                    passwordErrorMaxNum: t.value
                }, null, 8, ["show", "email", "passwordErrorMaxNum"])) : (f(), ie(qe, {
                    key: 1,
                    show: o.value,
                    "onUpdate:show": T[4] || (T[4] = _ => o.value = _),
                    "show-cancel-btn": !0,
                    title: y.$t("idlockTitle")
                }, {
                    content: j(() => [e("div", Do, [L(r(y.$t("idlockTip1", [t.value])) + " ", 1), Mo, L(r(y.$t("idlockTip2")), 1)])]),
                    footer: j(() => [e("button", {
                        class: "dialogBtn",
                        onClick: T[3] || (T[3] = _ => o.value = !1)
                    }, r(y.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: I
                    }, [e("img", {
                        src: a(he)("main", "iconservr")
                    }, null, 8, Ao), L(" " + r(y.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), q(" 验证弹窗 "), w(He, {
                    showPopup: u.value,
                    onOnConfirm: R,
                    onOnBack: $
                }, null, 8, ["showPopup"])])
            }
        }
    });
const Oo = H(Ho, [
        ["__scopeId", "data-v-436a69c4"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/components/Login/EmailSignIn.vue"]
    ]),
    jo = {
        class: "login__container-heading"
    },
    Wo = {
        class: "login__container-heading__title"
    },
    Go = {
        class: "login__container-heading__subTitle"
    },
    zo = {
        class: "login_container-tab"
    },
    Xo = {
        class: "login__container-form"
    },
    Ko = A({
        __name: "index",
        setup(p) {
            const {
                t: k
            } = pe.global, i = K(), t = ee();
            t.getRegisterState();
            const c = m("mobile"),
                s = m(void 0);
            t.userForm.logintype = c.value;
            const {
                openAll: o
            } = dt();

            function u() {
                i.replace("/")
            }
            const n = v => {
                c.value = v, t.userForm.logintype = v, t.userForm.password = "", t.remember(!0)
            };
            return tt((v, h, d) => {
                d(), v.name === "home" && o()
            }), ae(() => {
                t.remember(!0), t.getIp()
            }), (v, h) => {
                const d = E("NavBar"),
                    g = E("svg-icon");
                return f(), S("div", {
                    class: "login__container",
                    ref_key: "loginContainerRef",
                    ref: s
                }, [w(d, {
                    onClickLeft: u,
                    class: "main",
                    leftArrow: !0,
                    headLogo: !0
                }, {
                    right: j(() => [w(kt)]),
                    _: 1
                }), e("div", jo, [e("h1", Wo, r(a(k)("login")), 1), e("div", Go, [e("div", null, r(v.$t("pleaseloginphoneoremail")), 1), e("div", null, r(v.$t("forgetyourpassword")), 1)])]), e("div", zo, [e("div", {
                    class: O(["tab", [c.value == "mobile" ? "active" : ""]]),
                    onClick: h[0] || (h[0] = C => n("mobile"))
                }, [w(g, {
                    name: "phone"
                }), e("div", null, r(v.$t("mobilelogin")), 1)], 2), e("div", {
                    class: O(["tab", [c.value == "email" ? "active" : ""]]),
                    onClick: h[1] || (h[1] = C => n("email"))
                }, [e("div", null, [w(g, {
                    name: "email"
                }), N(w(g, {
                    name: "user"
                }, null, 512), [
                    [G, a(t).isOpenExternalAccount]
                ])]), e("div", null, r(a(t).isOpenExternalAccount ? v.$t("otherlogin") : v.$t("emaillogin")), 1)], 2)]), e("div", Xo, [e("div", {
                    class: O(["tab-content", [c.value == "mobile" ? "activecontent" : ""]])
                }, [w(eo, {
                    ref: "signIn"
                }, null, 512)], 2), e("div", {
                    class: O(["tab-content", [c.value == "email" ? "activecontent" : ""]])
                }, [w(Oo, {
                    ref: "signIn"
                }, null, 512)], 2)])], 512)
            }
        }
    });
const Yo = H(Ko, [
        ["__scopeId", "data-v-47f4cc84"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-Bharatclub-webnew/src/views/login/index.vue"]
    ]),
    en = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Yo
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Bo as E, wt as L, ne as P, Oe as S, fs as V, He as a, po as b, Os as c, kt as d, en as i
};
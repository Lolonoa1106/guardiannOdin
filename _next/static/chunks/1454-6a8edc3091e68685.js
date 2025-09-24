"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1454],
  {
    1335: (t, e, i) => {
      i.d(e, { u: () => r });
      var n = i(9064);
      let r = {
        test: (0, i(55920).$)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.B.transform,
      };
    },
    4272: (t, e, i) => {
      i.d(e, { y: () => o });
      var n = i(1335),
        r = i(18476),
        s = i(9064);
      let o = {
        test: (t) => s.B.test(t) || n.u.test(t) || r.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : r.V.test(t)
            ? r.V.parse(t)
            : n.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.B.transform(t)
            : r.V.transform(t),
        getAnimatableNone: (t) => {
          let e = o.parse(t);
          return (e.alpha = 0), o.transform(e);
        },
      };
    },
    6654: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = i(12115);
      function r(t, e) {
        let i = (0, n.useRef)(null),
          r = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let t = i.current;
              t && ((i.current = null), t());
              let e = r.current;
              e && ((r.current = null), e());
            } else t && (i.current = s(t, n)), e && (r.current = s(e, n));
          },
          [t, e]
        );
      }
      function s(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let i = t(e);
          return "function" == typeof i ? i : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6775: (t, e, i) => {
      i.d(e, { G: () => h });
      var n = i(23387),
        r = i(19827),
        s = i(53191),
        o = i(54542),
        a = i(45818),
        l = i(53678),
        u = i(26087);
      function h(t, e, { clamp: i = !0, ease: d, mixer: c } = {}) {
        let p = t.length;
        if (
          ((0, o.V)(
            p === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === p)
        )
          return () => e[0];
        if (2 === p && e[0] === e[1]) return () => e[1];
        let f = t[0] === t[1];
        t[0] > t[p - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let m = (function (t, e, i) {
            let o = [],
              a = i || n.W.mix || u.j,
              l = t.length - 1;
            for (let i = 0; i < l; i++) {
              let n = a(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || r.l : e;
                n = (0, s.F)(t, n);
              }
              o.push(n);
            }
            return o;
          })(e, d, c),
          g = m.length,
          y = (i) => {
            if (f && i < t[0]) return e[0];
            let n = 0;
            if (g > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
            let r = (0, a.q)(t[n], t[n + 1], i);
            return m[n](r);
          };
        return i ? (e) => y((0, l.q)(t[0], t[p - 1], e)) : y;
      }
    },
    6874: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return g;
          },
          useLinkStatus: function () {
            return v;
          },
        });
      let n = i(6966),
        r = i(95155),
        s = n._(i(12115)),
        o = i(82757),
        a = i(95227),
        l = i(69818),
        u = i(6654),
        h = i(69991),
        d = i(85929);
      i(43230);
      let c = i(24930),
        p = i(92664),
        f = i(6634);
      function m(t) {
        return "string" == typeof t ? t : (0, o.formatUrl)(t);
      }
      function g(t) {
        let e,
          i,
          n,
          [o, g] = (0, s.useOptimistic)(c.IDLE_LINK_STATUS),
          v = (0, s.useRef)(null),
          {
            href: x,
            as: b,
            children: w,
            prefetch: P = null,
            passHref: S,
            replace: T,
            shallow: E,
            scroll: A,
            onClick: M,
            onMouseEnter: j,
            onTouchStart: C,
            legacyBehavior: O = !1,
            onNavigate: k,
            ref: V,
            unstable_dynamicOnHover: R,
            ...D
          } = t;
        (e = w),
          O &&
            ("string" == typeof e || "number" == typeof e) &&
            (e = (0, r.jsx)("a", { children: e }));
        let L = s.default.useContext(a.AppRouterContext),
          _ = !1 !== P,
          I = null === P ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
          { href: F, as: B } = s.default.useMemo(() => {
            let t = m(x);
            return { href: t, as: b ? m(b) : t };
          }, [x, b]);
        O && (i = s.default.Children.only(e));
        let N = O ? i && "object" == typeof i && i.ref : V,
          U = s.default.useCallback(
            (t) => (
              null !== L &&
                (v.current = (0, c.mountLinkInstance)(t, F, L, I, _, g)),
              () => {
                v.current &&
                  ((0, c.unmountLinkForCurrentNavigation)(v.current),
                  (v.current = null)),
                  (0, c.unmountPrefetchableInstance)(t);
              }
            ),
            [_, F, L, I, g]
          ),
          W = {
            ref: (0, u.useMergedRef)(U, N),
            onClick(t) {
              O || "function" != typeof M || M(t),
                O &&
                  i.props &&
                  "function" == typeof i.props.onClick &&
                  i.props.onClick(t),
                L &&
                  (t.defaultPrevented ||
                    (function (t, e, i, n, r, o, a) {
                      let { nodeName: l } = t.currentTarget;
                      if (
                        !(
                          ("A" === l.toUpperCase() &&
                            (function (t) {
                              let e = t.currentTarget.getAttribute("target");
                              return (
                                (e && "_self" !== e) ||
                                t.metaKey ||
                                t.ctrlKey ||
                                t.shiftKey ||
                                t.altKey ||
                                (t.nativeEvent && 2 === t.nativeEvent.which)
                              );
                            })(t)) ||
                          t.currentTarget.hasAttribute("download")
                        )
                      ) {
                        if (!(0, p.isLocalURL)(e)) {
                          r && (t.preventDefault(), location.replace(e));
                          return;
                        }
                        t.preventDefault(),
                          s.default.startTransition(() => {
                            if (a) {
                              let t = !1;
                              if (
                                (a({
                                  preventDefault: () => {
                                    t = !0;
                                  },
                                }),
                                t)
                              )
                                return;
                            }
                            (0, f.dispatchNavigateAction)(
                              i || e,
                              r ? "replace" : "push",
                              null == o || o,
                              n.current
                            );
                          });
                      }
                    })(t, F, B, v, T, A, k));
            },
            onMouseEnter(t) {
              O || "function" != typeof j || j(t),
                O &&
                  i.props &&
                  "function" == typeof i.props.onMouseEnter &&
                  i.props.onMouseEnter(t),
                L && _ && (0, c.onNavigationIntent)(t.currentTarget, !0 === R);
            },
            onTouchStart: function (t) {
              O || "function" != typeof C || C(t),
                O &&
                  i.props &&
                  "function" == typeof i.props.onTouchStart &&
                  i.props.onTouchStart(t),
                L && _ && (0, c.onNavigationIntent)(t.currentTarget, !0 === R);
            },
          };
        return (
          (0, h.isAbsoluteUrl)(B)
            ? (W.href = B)
            : (O && !S && ("a" !== i.type || "href" in i.props)) ||
              (W.href = (0, d.addBasePath)(B)),
          (n = O
            ? s.default.cloneElement(i, W)
            : (0, r.jsx)("a", { ...D, ...W, children: e })),
          (0, r.jsx)(y.Provider, { value: o, children: n })
        );
      }
      i(73180);
      let y = (0, s.createContext)(c.IDLE_LINK_STATUS),
        v = () => (0, s.useContext)(y);
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6983: (t, e, i) => {
      i.d(e, { G: () => n });
      function n(t) {
        return "object" == typeof t && null !== t;
      }
    },
    7712: (t, e, i) => {
      i.d(e, { po: () => s, tn: () => a, yT: () => o });
      var n = i(91765),
        r = i(54180);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.G)(s),
        a = (0, n.V)(s);
    },
    8467: (t, e, i) => {
      i.d(e, { i: () => x });
      var n = i(62483);
      let r = (0, n.A)(0.42, 0, 1, 1),
        s = (0, n.A)(0, 0, 0.58, 1),
        o = (0, n.A)(0.42, 0, 0.58, 1),
        a = (t) => Array.isArray(t) && "number" != typeof t[0];
      var l = i(54542),
        u = i(19827),
        h = i(46009),
        d = i(33972),
        c = i(7712),
        p = i(68589);
      let f = {
          linear: u.l,
          easeIn: r,
          easeInOut: o,
          easeOut: s,
          circIn: c.po,
          circInOut: c.tn,
          circOut: c.yT,
          backIn: d.dg,
          backInOut: d.ZZ,
          backOut: d.Sz,
          anticipate: h.b,
        },
        m = (t) => "string" == typeof t,
        g = (t) => {
          if ((0, p.D)(t)) {
            (0, l.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, s] = t;
            return (0, n.A)(e, i, r, s);
          }
          return m(t)
            ? ((0, l.V)(void 0 !== f[t], `Invalid easing type '${t}'`), f[t])
            : t;
        };
      var y = i(6775),
        v = i(71784);
      function x({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        var r;
        let s = a(n) ? n.map(g) : g(n),
          l = { done: !1, value: e[0] },
          u =
            ((r = i && i.length === e.length ? i : (0, v.Z)(e)),
            r.map((e) => e * t)),
          h = (0, y.G)(u, e, {
            ease: Array.isArray(s)
              ? s
              : e.map(() => s || o).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((l.value = h(e)), (l.done = e >= t), l),
        };
      }
    },
    8619: (t, e, i) => {
      i.d(e, { d: () => a });
      var n = i(60098),
        r = i(12115),
        s = i(51508),
        o = i(82885);
      function a(t) {
        let e = (0, o.M)(() => (0, n.OQ)(t)),
          { isStatic: i } = (0, r.useContext)(s.Q);
        if (i) {
          let [, i] = (0, r.useState)(t);
          (0, r.useEffect)(() => e.on("change", i), []);
        }
        return e;
      }
    },
    9064: (t, e, i) => {
      i.d(e, { B: () => u });
      var n = i(53678),
        r = i(57887),
        s = i(11557),
        o = i(55920);
      let a = (t) => (0, n.q)(0, 255, t),
        l = { ...r.ai, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.$)("rgb", "red"),
          parse: (0, o.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.a)(r.X4.transform(n)) +
            ")",
        };
    },
    10255: (t, e, i) => {
      function n(t) {
        let { moduleIds: e } = t;
        return null;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(95155),
        i(47650),
        i(85744),
        i(20589);
    },
    11557: (t, e, i) => {
      i.d(e, { a: () => n });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    14407: (t, e, i) => {
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function r(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, i) => {
            (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
          }),
          e
        );
      }
      function s(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, o] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      function o(t, e, i) {
        let n = t.getProps();
        return s(n, e, void 0 !== i ? i : n.custom, t);
      }
      function a(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      i.d(e, { P: () => ro });
      var l,
        u,
        h = i(69515);
      let d = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        c = new Set(d),
        p = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...d,
        ]);
      var f = i(60098);
      let m = (t) => Array.isArray(t);
      var g = i(23387),
        y = i(64803);
      function v(t, e) {
        let i = t.getValue("willChange");
        if ((0, y.S)(i) && i.add) return i.add(e);
        if (!i && g.W.WillChange) {
          let i = new g.W.WillChange("auto");
          t.addValue("willChange", i), i.add(e);
        }
      }
      let x = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        b = "data-" + x("framerAppearId");
      var w = i(30532),
        P = i(19827),
        S = i(74261),
        T = i(76778);
      let E = (t) => (180 * t) / Math.PI,
        A = (t) => j(E(Math.atan2(t[1], t[0]))),
        M = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: A,
          rotateZ: A,
          skewX: (t) => E(Math.atan(t[1])),
          skewY: (t) => E(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        j = (t) => ((t %= 360) < 0 && (t += 360), t),
        C = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        O = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        k = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: C,
          scaleY: O,
          scale: (t) => (C(t) + O(t)) / 2,
          rotateX: (t) => j(E(Math.atan2(t[6], t[5]))),
          rotateY: (t) => j(E(Math.atan2(-t[2], t[0]))),
          rotateZ: A,
          rotate: A,
          skewX: (t) => E(Math.atan(t[4])),
          skewY: (t) => E(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function V(t) {
        return +!!t.includes("scale");
      }
      function R(t, e) {
        let i, n;
        if (!t || "none" === t) return V(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) (i = k), (n = r);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (i = M), (n = e);
        }
        if (!n) return V(e);
        let s = i[e],
          o = n[1].split(",").map(L);
        return "function" == typeof s ? s(o) : o[s];
      }
      let D = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return R(i, e);
      };
      function L(t) {
        return parseFloat(t.trim());
      }
      var _ = i(57887),
        I = i(34158);
      let F = (t) => t === _.ai || t === I.px,
        B = new Set(["x", "y", "z"]),
        N = d.filter((t) => !B.has(t)),
        U = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => R(e, "x"),
          y: (t, { transform: e }) => R(e, "y"),
        };
      (U.translateX = U.x), (U.translateY = U.y);
      let W = new Set(),
        z = !1,
        G = !1,
        q = !1;
      function $() {
        if (G) {
          let t = Array.from(W).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                N.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (G = !1), (z = !1), W.forEach((t) => t.complete(q)), W.clear();
      }
      function X() {
        W.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (G = !0);
        });
      }
      class H {
        constructor(t, e, i, n, r, s = !1) {
          (this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.state = "scheduled"),
            this.isAsync
              ? (W.add(this),
                z || ((z = !0), h.Gt.read(X), h.Gt.resolveKeyframes($)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          if (null === t[0]) {
            let r = n?.get(),
              s = t[t.length - 1];
            if (void 0 !== r) t[0] = r;
            else if (i && e) {
              let n = i.readValue(e, s);
              null != n && (t[0] = n);
            }
            void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          (this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            W.delete(this);
        }
        cancel() {
          "scheduled" === this.state &&
            (W.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      var K = i(47215),
        Y = i(54542);
      let Q = (t) => t.startsWith("--");
      var Z = i(91116),
        J = i(63894),
        tt = i(63704),
        te = i(24744),
        ti = i(68589),
        tn = i(41917);
      let tr = {},
        ts = (function (t, e) {
          let i = (0, tn.p)(t);
          return () => tr[e] ?? i();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var to = i(47705);
      let ta = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tl = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ta([0, 0.65, 0.55, 1]),
          circOut: ta([0.55, 0, 1, 0.45]),
          backIn: ta([0.31, 0.01, 0.66, -0.59]),
          backOut: ta([0.33, 1.53, 0.69, 0.99]),
        };
      function tu(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class th extends J.q {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: r,
            allowFlatten: s = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          (this.isPseudoElement = !!r),
            (this.allowFlatten = s),
            (this.options = t),
            (0, Y.V)(
              "string" != typeof t.type,
              'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?'
            );
          let l = (function ({ type: t, ...e }) {
            return tu(t) && ts()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          (this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            u
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? ts()
                    ? (0, to.K)(e, i)
                    : "ease-out"
                  : (0, ti.D)(e)
                  ? ta(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || tl.easeOut)
                  : tl[e];
            })(a, r);
            Array.isArray(d) && (h.easing = d), te.Q.value && tt.q.waapi++;
            let c = {
              delay: n,
              duration: r,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            u && (c.pseudoElement = u);
            let p = t.animate(h, c);
            return (
              te.Q.value &&
                p.finished.finally(() => {
                  tt.q.waapi--;
                }),
              p
            );
          })(e, i, n, l, r)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !r)) {
                let t = (0, T.X)(n, this.options, o, this.speed);
                this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : (function (t, e, i) {
                      Q(e) ? t.style.setProperty(e, i) : (t.style[e] = i);
                    })(e, i, t),
                  this.animation.cancel();
              }
              a?.(), this.notifyFinished();
            });
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          let t = this.animation.effect?.getComputedTiming?.().duration || 0;
          return (0, K.X)(Number(t));
        }
        get time() {
          return (0, K.X)(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          (this.finishedTime = null),
            (this.animation.currentTime = (0, K.f)(t));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t);
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && (0, Z.J)())
            ? ((this.animation.timeline = t), P.l)
            : e(this);
        }
      }
      var td = i(70144),
        tc = i(46009),
        tp = i(33972),
        tf = i(7712);
      let tm = { anticipate: tc.b, backInOut: tp.ZZ, circInOut: tf.tn };
      class tg extends th {
        constructor(t) {
          !(function (t) {
            "string" == typeof t.ease && t.ease in tm && (t.ease = tm[t.ease]);
          })(t),
            (0, td.E)(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t);
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: r,
            ...s
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          let o = new w.s({ ...s, autoplay: !1 }),
            a = (0, K.f)(this.finishedTime ?? this.time);
          e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10),
            o.stop();
        }
      }
      var ty = i(60010);
      let tv = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (ty.f.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var tx = i(27351);
      let tb = new Set(["opacity", "clipPath", "filter", "transform"]),
        tw = (0, tn.p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        );
      class tP extends J.q {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          keyframes: o,
          name: a,
          motionValue: l,
          element: u,
          ...h
        }) {
          super(),
            (this.stop = () => {
              this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel();
            }),
            (this.createdAt = S.k.now());
          let d = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              name: a,
              motionValue: l,
              element: u,
              ...h,
            },
            c = u?.KeyframeResolver || H;
          (this.keyframeResolver = new c(
            o,
            (t, e, i) => this.onKeyframesResolved(t, e, d, !i),
            a,
            l,
            u
          )),
            this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, i, n) {
          this.keyframeResolver = void 0;
          let {
            name: r,
            type: s,
            velocity: o,
            delay: a,
            isHandoff: l,
            onUpdate: u,
          } = i;
          (this.resolvedAt = S.k.now()),
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = tv(r, e),
                a = tv(s, e);
              return (
                (0, Y.$)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || tu(i)) && n))
              );
            })(t, r, s, o) &&
              ((g.W.instantAnimations || !a) && u?.((0, T.X)(t, i, e)),
              (t[0] = t[t.length - 1]),
              (i.duration = 0),
              (i.repeat = 0));
          let h = {
              startTime: n
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            d =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: n,
                  repeatType: r,
                  damping: s,
                  type: o,
                } = t;
                if (!(0, tx.s)(e?.owner?.current)) return !1;
                let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
                return (
                  tw() &&
                  i &&
                  tb.has(i) &&
                  ("transform" !== i || !l) &&
                  !a &&
                  !n &&
                  "mirror" !== r &&
                  0 !== s &&
                  "inertia" !== o
                );
              })(h)
                ? new tg({ ...h, element: h.motionValue.owner.current })
                : new w.s(h);
          d.finished.then(() => this.notifyFinished()).catch(P.l),
            this.pendingTimeline &&
              ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = d);
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(), (q = !0), X(), $(), (q = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel();
        }
      }
      let tS = (t) => null !== t,
        tT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tE = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tA = { type: "keyframes", duration: 0.8 },
        tM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tj = (t, { keyframes: e }) =>
          e.length > 2
            ? tA
            : c.has(t)
            ? t.startsWith("scale")
              ? tE(e[1])
              : tT
            : tM,
        tC =
          (t, e, i, n = {}, r, s) =>
          (o) => {
            let l = a(n, t) || {},
              u = l.delay || n.delay || 0,
              { elapsed: d = 0 } = n;
            d -= (0, K.f)(u);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -d,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                o(), l.onComplete && l.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(l) && Object.assign(c, tj(t, c)),
              c.duration && (c.duration = (0, K.f)(c.duration)),
              c.repeatDelay && (c.repeatDelay = (0, K.f)(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let p = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 === c.delay && (p = !0)),
              (g.W.instantAnimations || g.W.skipAnimations) &&
                ((p = !0), (c.duration = 0), (c.delay = 0)),
              (c.allowFlatten = !l.type && !l.ease),
              p && !s && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, n) {
                let r = t.filter(tS),
                  s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return r[s];
              })(c.keyframes, l);
              if (void 0 !== t)
                return void h.Gt.update(() => {
                  c.onUpdate(t), c.onComplete();
                });
            }
            return l.isSync ? new w.s(c) : new tP(c);
          };
      function tO(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: l,
          ...u
        } = e;
        n && (s = n);
        let d = [],
          c = r && t.animationState && t.animationState.getState()[r];
        for (let e in u) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            r = u[e];
          if (
            void 0 === r ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(c, e))
          )
            continue;
          let o = { delay: i, ...a(s || {}, e) },
            l = n.get();
          if (
            void 0 !== l &&
            !n.isAnimating &&
            !Array.isArray(r) &&
            r === l &&
            !o.velocity
          )
            continue;
          let f = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[b];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, h.Gt);
              null !== t && ((o.startTime = t), (f = !0));
            }
          }
          v(t, e),
            n.start(
              tC(
                e,
                n,
                r,
                t.shouldReduceMotion && p.has(e) ? { type: !1 } : o,
                t,
                f
              )
            );
          let m = n.animation;
          m && d.push(m);
        }
        return (
          l &&
            Promise.all(d).then(() => {
              h.Gt.update(() => {
                l &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = o(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      var s;
                      let i = m((s = r[e])) ? s[s.length - 1] || 0 : s;
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, f.OQ)(i));
                    }
                  })(t, l);
              });
            }),
          d
        );
      }
      function tk(t, e, i = {}) {
        let n = o(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n ? () => Promise.all(tO(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, r = 0, s = 1, o) {
                    let a = [],
                      l = t.variantChildren.size,
                      u = (l - 1) * r,
                      h = "function" == typeof n,
                      d = h
                        ? (t) => n(t, l)
                        : 1 === s
                        ? (t = 0) => t * r
                        : (t = 0) => u - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tV)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            a.push(
                              tk(t, e, {
                                ...o,
                                delay: i + (h ? 0 : n) + d(r),
                              }).then(() => t.notify("AnimationComplete", e))
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, n, s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([s(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      function tV(t, e) {
        return t.sortNodePosition(e);
      }
      function tR(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function tD(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let tL = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        t_ = ["initial", ...tL],
        tI = t_.length,
        tF = [...tL].reverse(),
        tB = tL.length;
      function tN(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function tU() {
        return {
          animate: tN(!0),
          whileInView: tN(),
          whileHover: tN(),
          whileTap: tN(),
          whileDrag: tN(),
          whileFocus: tN(),
          exit: tN(),
        };
      }
      class tW {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class tz extends tW {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => tk(t, e, i)));
                          else if ("string" == typeof e) n = tk(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? o(t, e, i.custom) : e;
                            n = Promise.all(tO(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = tU(),
                  r = !0,
                  s = (e) => (i, n) => {
                    let r = o(
                      t,
                      n,
                      "exit" === e ? t.presenceContext?.custom : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...n } = r;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function a(a) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < tI; t++) {
                          let n = t_[t],
                            r = e.props[n];
                          (tD(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    h = [],
                    d = new Set(),
                    c = {},
                    p = 1 / 0;
                  for (let e = 0; e < tB; e++) {
                    var f, g;
                    let o = tF[e],
                      y = i[o],
                      v = void 0 !== l[o] ? l[o] : u[o],
                      x = tD(v),
                      b = o === a ? y.isActive : null;
                    !1 === b && (p = e);
                    let w = v === u[o] && v !== l[o] && x;
                    if (
                      (w && r && t.manuallyAnimateOnMount && (w = !1),
                      (y.protectedKeys = { ...c }),
                      (!y.isActive && null === b) ||
                        (!v && !y.prevProp) ||
                        n(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let P =
                        ((f = y.prevProp),
                        "string" == typeof (g = v)
                          ? g !== f
                          : !!Array.isArray(g) && !tR(g, f)),
                      S =
                        P || (o === a && y.isActive && !w && x) || (e > p && x),
                      T = !1,
                      E = Array.isArray(v) ? v : [v],
                      A = E.reduce(s(o), {});
                    !1 === b && (A = {});
                    let { prevResolvedValues: M = {} } = y,
                      j = { ...M, ...A },
                      C = (e) => {
                        (S = !0),
                          d.has(e) && ((T = !0), d.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in j) {
                      let e = A[t],
                        i = M[t];
                      if (c.hasOwnProperty(t)) continue;
                      let n = !1;
                      (m(e) && m(i) ? tR(e, i) : e === i)
                        ? void 0 !== e && d.has(t)
                          ? C(t)
                          : (y.protectedKeys[t] = !0)
                        : null != e
                        ? C(t)
                        : d.add(t);
                    }
                    (y.prevProp = v),
                      (y.prevResolvedValues = A),
                      y.isActive && (c = { ...c, ...A }),
                      r && t.blockInitialAnimation && (S = !1);
                    let O = !(w && P) || T;
                    S &&
                      O &&
                      h.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: o },
                        }))
                      );
                  }
                  if (d.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let i = o(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    d.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = n ?? null);
                    }),
                      h.push({ animation: e });
                  }
                  let y = !!h.length;
                  return (
                    r &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (r = !1),
                    y ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: a,
                  setActive: function (e, n) {
                    if (i[e].isActive === n) return Promise.resolve();
                    t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, n)
                    ),
                      (i[e].isActive = n);
                    let r = a(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = tU()), (r = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.();
        }
      }
      let tG = 0;
      class tq extends tW {
        constructor() {
          super(...arguments), (this.id = tG++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let t$ = { x: !1, y: !1 };
      var tX = i(33210);
      function tH(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let tK = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tY(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let tQ = (t) => (e) => tK(e) && t(e, tY(e));
      function tZ(t, e, i, n) {
        return tH(t, e, tQ(i), n);
      }
      function tJ({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function t0(t) {
        return t.max - t.min;
      }
      function t1(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, tX.k)(e.min, e.max, t.origin)),
          (t.scale = t0(i) / t0(e)),
          (t.translate = (0, tX.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function t5(t, e, i, n) {
        t1(t.x, e.x, i.x, n ? n.originX : void 0),
          t1(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function t2(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + t0(e));
      }
      function t8(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + t0(e));
      }
      function t3(t, e, i) {
        t8(t.x, e.x, i.x), t8(t.y, e.y, i.y);
      }
      let t4 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        t6 = () => ({ x: t4(), y: t4() }),
        t9 = () => ({ min: 0, max: 0 }),
        t7 = () => ({ x: t9(), y: t9() });
      function et(t) {
        return [t("x"), t("y")];
      }
      function ee(t) {
        return void 0 === t || 1 === t;
      }
      function ei({ scale: t, scaleX: e, scaleY: i }) {
        return !ee(t) || !ee(e) || !ee(i);
      }
      function en(t) {
        return (
          ei(t) ||
          er(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function er(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function es(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function eo(t, e = 0, i = 1, n, r) {
        (t.min = es(t.min, e, i, n, r)), (t.max = es(t.max, e, i, n, r));
      }
      function ea(t, { x: e, y: i }) {
        eo(t.x, e.translate, e.scale, e.originPoint),
          eo(t.y, i.translate, i.scale, i.originPoint);
      }
      function el(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function eu(t, e, i, n, r = 0.5) {
        let s = (0, tX.k)(t.min, t.max, r);
        eo(t, e, i, s, n);
      }
      function eh(t, e) {
        eu(t.x, e.x, e.scaleX, e.scale, e.originX),
          eu(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function ed(t, e) {
        return tJ(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ec = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      function ep(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var ef = i(53191);
      let em = (t, e) => Math.abs(t - e);
      class eg {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: r = !1,
            distanceThreshold: s = 3,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = ex(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(em(t.x, e.x) ** 2 + em(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = h.uv;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = ey(e, this.transformPagePoint)),
                h.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = ex(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : ey(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !tK(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = s),
            (this.contextWindow = n || window);
          let o = ey(tY(t), this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = h.uv;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: u } = e;
          u && u(t, ex(o, this.history)),
            (this.removeListeners = (0, ef.F)(
              tZ(this.contextWindow, "pointermove", this.handlePointerMove),
              tZ(this.contextWindow, "pointerup", this.handlePointerUp),
              tZ(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, h.WG)(this.updatePoint);
        }
      }
      function ey(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ev(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ex({ point: t }, e) {
        return {
          point: t,
          delta: ev(t, eb(e)),
          offset: ev(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = eb(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, K.f)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, K.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0.1),
        };
      }
      function eb(t) {
        return t[t.length - 1];
      }
      var ew = i(45818),
        eP = i(53678);
      function eS(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function eT(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function eE(t, e, i) {
        return { min: eA(t, e), max: eA(t, i) };
      }
      function eA(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eM = new WeakMap();
      class ej {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = t7()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new eg(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tY(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (function (t) {
                    if ("x" === t || "y" === t)
                      if (t$[t]) return null;
                      else
                        return (
                          (t$[t] = !0),
                          () => {
                            t$[t] = !1;
                          }
                        );
                    return t$.x || t$.y
                      ? null
                      : ((t$.x = t$.y = !0),
                        () => {
                          t$.x = t$.y = !1;
                        });
                  })(i)),
                  !this.openDragLock)
                )
                  return;
                (this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  et((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (I.KN.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        n && (e = t0(n) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && h.Gt.postRender(() => r(t, e)),
                  v(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                (this.latestPointerEvent = t), (this.latestPanInfo = e);
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => {
                (this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  this.stop(t, e),
                  (this.latestPointerEvent = null),
                  (this.latestPanInfo = null);
              },
              resumeAnimation: () =>
                et(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play()
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              distanceThreshold: i,
              contextWindow: ec(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            r = this.isDragging;
          if ((this.cancel(), !r || !n || !i)) return;
          let { velocity: s } = n;
          this.startAnimation(s);
          let { onDragEnd: o } = this.getProps();
          o && h.Gt.postRender(() => o(i, n));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !eC(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, tX.k)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, tX.k)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            n = this.constraints;
          t && ep(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: eS(t.x, i, r), y: eS(t.y, e, n) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: eE(t, "left", "right"), y: eE(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              et((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !ep(e)) return !1;
          let n = e.current;
          (0, Y.V)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = ed(t, i),
                { scroll: r } = e;
              return r && (el(n.x, r.offset.x), el(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o =
              ((t = r.layout.layoutBox), { x: eT(t.x, s.x), y: eT(t.y, s.y) });
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = tJ(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            et((o) => {
              if (!eC(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            v(this.visualElement, t),
            i.start(tC(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          et((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          et((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          et((e) => {
            let { drag: i } = this.getProps();
            if (!eC(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, tX.k)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!ep(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          et((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = t0(t),
                  r = t0(e);
                return (
                  r > n
                    ? (i = (0, ew.q)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, ew.q)(t.min, t.max - r, e.min)),
                  (0, eP.q)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            et((e) => {
              if (!eC(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, tX.k)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          eM.set(this.visualElement, this);
          let t = tZ(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              ep(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            h.Gt.read(e);
          let r = tH(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (et((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function eC(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class eO extends tW {
        constructor(t) {
          super(t),
            (this.removeGroupControls = P.l),
            (this.removeListeners = P.l),
            (this.controls = new ej(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || P.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let ek = (t) => (e, i) => {
        t && h.Gt.postRender(() => t(e, i));
      };
      class eV extends tW {
        constructor() {
          super(...arguments), (this.removePointerDownListener = P.l);
        }
        onPointerDown(t) {
          this.session = new eg(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ec(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: ek(t),
            onStart: ek(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && h.Gt.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tZ(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var eR = i(95155);
      let { schedule: eD } = (0, i(58437).I)(queueMicrotask, !1);
      var eL = i(12115),
        e_ = i(32082),
        eI = i(90869);
      let eF = (0, eL.createContext)({}),
        eB = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eN(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let eU = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t)
            if (!I.px.test(t)) return t;
            else t = parseFloat(t);
          let i = eN(t, e.target.x),
            n = eN(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var eW = i(78606);
      let ez = {},
        eG = !1;
      class eq extends eL.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          for (let t in eX)
            (ez[t] = eX[t]), (0, eW.j)(t) && (ez[t].isCSSVariable = !0);
          r &&
            (e.group && e.group.add(r),
            i && i.register && n && i.register(r),
            eG && r.root.didUpdate(),
            r.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            r.setOptions({
              ...r.options,
              onExitComplete: () => this.safeToRemove(),
            })),
            (eB.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            { projection: s } = i;
          return (
            s &&
              ((s.isPresent = r),
              (eG = !0),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== r
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== r &&
                (r
                  ? s.promote()
                  : s.relegate() ||
                    h.Gt.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            eD.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function e$(t) {
        let [e, i] = (0, e_.xQ)(),
          n = (0, eL.useContext)(eI.L);
        return (0, eR.jsx)(eq, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, eL.useContext)(eF),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let eX = {
        borderRadius: {
          ...eU,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eU,
        borderTopRightRadius: eU,
        borderBottomLeftRadius: eU,
        borderBottomRightRadius: eU,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = ty.f.parse(t);
            if (n.length > 5) return t;
            let r = ty.f.createTransformer(t),
              s = +("number" != typeof n[0]),
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, tX.k)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var eH = i(69782),
        eK = i(75626),
        eY = i(56668);
      let eQ = (t, e) => t.depth - e.depth;
      class eZ {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, eY.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, eY.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eQ),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function eJ(t) {
        return (0, y.S)(t) ? t.get() : t;
      }
      let e0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        e1 = e0.length,
        e5 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        e2 = (t) => "number" == typeof t || I.px.test(t);
      function e8(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let e3 = e6(0, 0.5, tf.yT),
        e4 = e6(0.5, 0.95, P.l);
      function e6(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, ew.q)(t, e, n)));
      }
      function e9(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function e7(t, e) {
        e9(t.x, e.x), e9(t.y, e.y);
      }
      function it(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function ie(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function ii(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (I.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, tX.k)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, tX.k)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = ie(t.min, e, i, a, r)),
            (t.max = ie(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let ir = ["x", "scaleX", "originX"],
        is = ["y", "scaleY", "originY"];
      function io(t, e, i, n) {
        ii(t.x, e, ir, i ? i.x : void 0, n ? n.x : void 0),
          ii(t.y, e, is, i ? i.y : void 0, n ? n.y : void 0);
      }
      function ia(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function il(t) {
        return ia(t.x) && ia(t.y);
      }
      function iu(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function ih(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function id(t, e) {
        return ih(t.x, e.x) && ih(t.y, e.y);
      }
      function ic(t) {
        return t0(t.x) / t0(t.y);
      }
      function ip(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class im {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, eY.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, eY.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let ig = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        iy = ["", "X", "Y", "Z"],
        iv = 0;
      function ix(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function ib({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            (this.id = iv++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  te.Q.value &&
                    (ig.nodes =
                      ig.calculatedTargetDeltas =
                      ig.calculatedProjections =
                        0),
                  this.nodes.forEach(iS),
                  this.nodes.forEach(iO),
                  this.nodes.forEach(ik),
                  this.nodes.forEach(iT),
                  te.Q.addProjectionMetrics && te.Q.addProjectionMetrics(ig);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eZ());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new eK.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            (this.isSVG =
              (0, eH.x)(e) && (!(0, eH.x)(e) || "svg" !== e.tagName)),
              (this.instance = e);
            let { layoutId: i, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (n || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                n = 0,
                r = () => (this.root.updateBlockedByResize = !1);
              h.Gt.read(() => {
                n = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  t !== n &&
                    ((n = t),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (i = (function (t, e) {
                      let i = S.k.now(),
                        n = ({ timestamp: r }) => {
                          let s = r - i;
                          s >= 250 && ((0, h.WG)(n), t(s - e));
                        };
                      return h.Gt.setup(n, !0), () => (0, h.WG)(n);
                    })(r, 250)),
                    eB.hasAnimatedSinceResize &&
                      ((eB.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(iC)));
                });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                r &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let s =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        iI,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: l,
                      } = r.getProps(),
                      u = !this.targetLayout || !id(this.targetLayout, n),
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (u || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...a(s, "layout"), onPlay: o, onComplete: l };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, h);
                    } else
                      e || iC(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              (0, h.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(iV),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[b];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      h.Gt,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(iA);
              return;
            }
            if (this.animationId <= this.animationCommitId)
              return void this.nodes.forEach(iM);
            (this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(ij),
                  this.nodes.forEach(iw),
                  this.nodes.forEach(iP))
                : this.nodes.forEach(iM),
              this.clearAllSnapshots();
            let t = S.k.now();
            (h.uv.delta = (0, eP.q)(0, 1e3 / 60, t - h.uv.timestamp)),
              (h.uv.timestamp = t),
              (h.uv.isProcessing = !0),
              h.PP.update.process(h.uv),
              h.PP.preRender.process(h.uv),
              h.PP.render.process(h.uv),
              (h.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), eD.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(iE), this.sharedNodes.forEach(iR);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              h.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            h.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                t0(this.snapshot.measuredBox.x) ||
                t0(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = t7()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !il(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || en(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              iN((e = n).x),
              iN(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return t7();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(iW))) {
              let { scroll: t } = this.root;
              t && (el(e.x, t.offset.x), el(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = t7();
            if ((e7(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && e7(e, t),
                el(e.x, r.offset.x),
                el(e.y, r.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = t7();
            e7(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                eh(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                en(n.latestValues) && eh(i, n.latestValues);
            }
            return en(this.latestValues) && eh(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = t7();
            e7(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !en(i.latestValues)) continue;
              ei(i.latestValues) && i.updateSnapshot();
              let n = t7();
              e7(n, i.measurePageBox()),
                io(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return en(this.latestValues) && io(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== h.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (this.layout && (n || r)) {
              if (
                ((this.resolvedRelativeTargetAt = h.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = t7()),
                    (this.relativeTargetOrigin = t7()),
                    t3(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    e7(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = t7()), (this.targetWithTransforms = t7())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var s, o, a;
                  this.forceRelativeParentToResolveTarget(),
                    (s = this.target),
                    (o = this.relativeTarget),
                    (a = this.relativeParent.target),
                    t2(s.x, o.x, a.x),
                    t2(s.y, o.y, a.y);
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : e7(this.target, this.layout.layoutBox),
                      ea(this.target, this.targetDelta))
                    : e7(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = t7()),
                      (this.relativeTargetOrigin = t7()),
                      t3(this.relativeTargetOrigin, this.target, t.target),
                      e7(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                te.Q.value && ig.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                ei(this.parent.latestValues) ||
                er(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === h.uv.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            e7(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              o = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r,
                s,
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      eh(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), ea(t, s)),
                    n && en(r.latestValues) && eh(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = t7()));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (it(this.prevProjectionDelta.x, this.projectionDelta.x),
                it(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              t5(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === o &&
                ip(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                ip(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)),
              te.Q.value && ig.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = t6()),
              (this.projectionDelta = t6()),
              (this.projectionDeltaWithTransform = t6());
          }
          setAnimationOrigin(t, e = !1) {
            let i,
              n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = t6();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = t7(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(i_)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (iD(o.x, t.x, n),
                  iD(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, f, m, g;
                  t3(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    (m = a),
                    (g = n),
                    iL(p.x, f.x, m.x, g),
                    iL(p.y, f.y, m.y, g),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      iu(u.x, c.x) && iu(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = t7()),
                    e7(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, tX.k)(0, i.opacity ?? 1, e3(n))),
                        (t.opacityExit = (0, tX.k)(e.opacity ?? 1, 0, e4(n))))
                      : s &&
                        (t.opacity = (0, tX.k)(
                          e.opacity ?? 1,
                          i.opacity ?? 1,
                          n
                        ));
                    for (let r = 0; r < e1; r++) {
                      let s = `border${e0[r]}Radius`,
                        o = e8(e, s),
                        a = e8(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || e2(o) === e2(a)
                          ? ((t[s] = Math.max((0, tX.k)(e5(o), e5(a), n), 0)),
                            (I.KN.test(a) || I.KN.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, tX.k)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                ((0, h.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = h.Gt.update(() => {
                (eB.hasAnimatedSinceResize = !0),
                  tt.q.layout++,
                  this.motionValue || (this.motionValue = (0, f.OQ)(0)),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, y.S)(t) ? t : (0, f.OQ)(t);
                    return n.start(tC("", n, e, i)), n.animation;
                  })(this.motionValue, [0, 1e3], {
                    ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      tt.q.layout--;
                    },
                    onComplete: () => {
                      tt.q.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                iU(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || t7();
                let e = t0(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = t0(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              e7(e, i),
                eh(e, r),
                t5(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new im()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && ix("z", t, n, this.animationValues);
            for (let e = 0; e < iy.length; e++)
              ix(`rotate${iy[e]}`, t, n, this.animationValues),
                ix(`skew${iy[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              (this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = eJ(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none");
              return;
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = eJ(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !en(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1));
              return;
            }
            t.visibility = "";
            let r = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let s = (function (t, e, i) {
              let n = "",
                r = t.x.translate / e.x,
                s = t.y.translate / e.y,
                o = i?.z || 0;
              if (
                ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: r,
                  rotateY: s,
                  skewX: o,
                  skewY: a,
                } = i;
                t && (n = `perspective(${t}px) ${n}`),
                  e && (n += `rotate(${e}deg) `),
                  r && (n += `rotateX(${r}deg) `),
                  s && (n += `rotateY(${s}deg) `),
                  o && (n += `skewX(${o}deg) `),
                  a && (n += `skewY(${a}deg) `);
              }
              let a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, r);
            i && (s = i(r, s)), (t.transform = s);
            let { x: o, y: a } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * o.origin}% ${
              100 * a.origin
            }% 0`),
            n.animationValues
              ? (t.opacity =
                  n === this
                    ? r.opacity ?? this.latestValues.opacity ?? 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : r.opacityExit)
              : (t.opacity =
                  n === this
                    ? void 0 !== r.opacity
                      ? r.opacity
                      : ""
                    : void 0 !== r.opacityExit
                    ? r.opacityExit
                    : 0),
            ez)) {
              if (void 0 === r[e]) continue;
              let { correct: i, applyTo: o, isCSSVariable: a } = ez[e],
                l = "none" === s ? r[e] : i(r[e], n);
              if (o) {
                let e = o.length;
                for (let i = 0; i < e; i++) t[o[i]] = l;
              } else
                a
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                n === this ? eJ(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(iA),
              this.root.sharedNodes.clear();
          }
        };
      }
      function iw(t) {
        t.updateLayout();
      }
      function iP(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = e.source !== t.layout.source;
          "size" === r
            ? et((t) => {
                let n = s ? e.measuredBox[t] : e.layoutBox[t],
                  r = t0(n);
                (n.min = i[t].min), (n.max = n.min + r);
              })
            : iU(r, e.layoutBox, i) &&
              et((n) => {
                let r = s ? e.measuredBox[n] : e.layoutBox[n],
                  o = t0(i[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = t6();
          t5(o, i, e.layoutBox);
          let a = t6();
          s
            ? t5(a, t.applyTransform(n, !0), e.measuredBox)
            : t5(a, i, e.layoutBox);
          let l = !il(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = t7();
                t3(o, e.layoutBox, r.layoutBox);
                let a = t7();
                t3(a, i, s.layoutBox),
                  id(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function iS(t) {
        te.Q.value && ig.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function iT(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function iE(t) {
        t.clearSnapshot();
      }
      function iA(t) {
        t.clearMeasurements();
      }
      function iM(t) {
        t.isLayoutDirty = !1;
      }
      function ij(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function iC(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function iO(t) {
        t.resolveTargetDelta();
      }
      function ik(t) {
        t.calcProjection();
      }
      function iV(t) {
        t.resetSkewAndRotation();
      }
      function iR(t) {
        t.removeLeadSnapshot();
      }
      function iD(t, e, i) {
        (t.translate = (0, tX.k)(e.translate, 0, i)),
          (t.scale = (0, tX.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function iL(t, e, i, n) {
        (t.min = (0, tX.k)(e.min, i.min, n)),
          (t.max = (0, tX.k)(e.max, i.max, n));
      }
      function i_(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let iI = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        iF = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        iB = iF("applewebkit/") && !iF("chrome/") ? Math.round : P.l;
      function iN(t) {
        (t.min = iB(t.min)), (t.max = iB(t.max));
      }
      function iU(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(ic(e) - ic(i))))
        );
      }
      function iW(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let iz = ib({
          attachResizeListener: (t, e) => tH(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iG = { current: void 0 },
        iq = ib({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!iG.current) {
              let t = new iz({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (iG.current = t);
            }
            return iG.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var i$ = i(42198);
      function iX(t, e) {
        let i = (0, i$.K)(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function iH(t) {
        return !("touch" === t.pointerType || t$.x || t$.y);
      }
      function iK(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && h.Gt.postRender(() => r(e, tY(e)));
      }
      class iY extends tW {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = iX(t, i),
                o = (t) => {
                  if (!iH(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let s = (t) => {
                    iH(t) && (n(t), i.removeEventListener("pointerleave", s));
                  };
                  i.addEventListener("pointerleave", s, r);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", o, r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                iK(this.node, e, "Start"), (t) => iK(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class iQ extends tW {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, ef.F)(
            tH(this.node.current, "focus", () => this.onFocus()),
            tH(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let iZ = (t, e) => !!e && (t === e || iZ(t, e.parentElement)),
        iJ = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        i0 = new WeakSet();
      function i1(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function i5(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let i2 = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = i1(() => {
          if (i0.has(i)) return;
          i5(i, "down");
          let t = i1(() => {
            i5(i, "up");
          });
          i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => i5(i, "cancel"), e);
        });
        i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e
          );
      };
      function i8(t) {
        return tK(t) && !(t$.x || t$.y);
      }
      function i3(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && h.Gt.postRender(() => r(e, tY(e)));
      }
      class i4 extends tW {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = iX(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!i8(t)) return;
                  i0.add(n);
                  let s = e(n, t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        i0.has(n) && i0.delete(n),
                        i8(t) && "function" == typeof s && s(t, { success: e });
                    },
                    a = (t) => {
                      o(
                        t,
                        n === window ||
                          n === document ||
                          i.useGlobalTarget ||
                          iZ(n, t.target)
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, r),
                    window.addEventListener("pointercancel", l, r);
                };
              return (
                n.forEach((t) => {
                  ((i.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    o,
                    r
                  ),
                  (0, tx.s)(t)) &&
                    (t.addEventListener("focus", (t) => i2(t, r)),
                    iJ.has(t.tagName) ||
                      -1 !== t.tabIndex ||
                      t.hasAttribute("tabindex") ||
                      (t.tabIndex = 0));
                }),
                s
              );
            })(
              t,
              (t, e) => (
                i3(this.node, e, "Start"),
                (t, { success: e }) => i3(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let i6 = new WeakMap(),
        i9 = new WeakMap(),
        i7 = (t) => {
          let e = i6.get(t.target);
          e && e(t);
        },
        nt = (t) => {
          t.forEach(i7);
        },
        ne = { some: 0, all: 1 };
      class ni extends tW {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : ne[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              i9.has(i) || i9.set(i, {});
              let n = i9.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(nt, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              i6.set(t, i),
              n.observe(t),
              () => {
                i6.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nn = (0, eL.createContext)({ strict: !1 });
      var nr = i(51508);
      let ns = (0, eL.createContext)({});
      function no(t) {
        return n(t.animate) || t_.some((e) => tD(t[e]));
      }
      function na(t) {
        return !!(no(t) || t.variants);
      }
      function nl(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var nu = i(68972);
      let nh = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nd = {};
      for (let t in nh) nd[t] = { isEnabled: (e) => nh[t].some((t) => !!e[t]) };
      let nc = Symbol.for("motionComponentSymbol");
      var np = i(80845),
        nf = i(97494);
      function nm(t, { layout: e, layoutId: i }) {
        return (
          c.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!ez[t] || "opacity" === t))
        );
      }
      let ng = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        ny = { ..._.ai, transform: Math.round },
        nv = {
          rotate: I.uj,
          rotateX: I.uj,
          rotateY: I.uj,
          rotateZ: I.uj,
          scale: _.hs,
          scaleX: _.hs,
          scaleY: _.hs,
          scaleZ: _.hs,
          skew: I.uj,
          skewX: I.uj,
          skewY: I.uj,
          distance: I.px,
          translateX: I.px,
          translateY: I.px,
          translateZ: I.px,
          x: I.px,
          y: I.px,
          z: I.px,
          perspective: I.px,
          transformPerspective: I.px,
          opacity: _.X4,
          originX: I.gQ,
          originY: I.gQ,
          originZ: I.px,
        },
        nx = {
          borderWidth: I.px,
          borderTopWidth: I.px,
          borderRightWidth: I.px,
          borderBottomWidth: I.px,
          borderLeftWidth: I.px,
          borderRadius: I.px,
          radius: I.px,
          borderTopLeftRadius: I.px,
          borderTopRightRadius: I.px,
          borderBottomRightRadius: I.px,
          borderBottomLeftRadius: I.px,
          width: I.px,
          maxWidth: I.px,
          height: I.px,
          maxHeight: I.px,
          top: I.px,
          right: I.px,
          bottom: I.px,
          left: I.px,
          padding: I.px,
          paddingTop: I.px,
          paddingRight: I.px,
          paddingBottom: I.px,
          paddingLeft: I.px,
          margin: I.px,
          marginTop: I.px,
          marginRight: I.px,
          marginBottom: I.px,
          marginLeft: I.px,
          backgroundPositionX: I.px,
          backgroundPositionY: I.px,
          ...nv,
          zIndex: ny,
          fillOpacity: _.X4,
          strokeOpacity: _.X4,
          numOctaves: ny,
        },
        nb = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        nw = d.length;
      function nP(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (c.has(t)) {
            o = !0;
            continue;
          }
          if ((0, eW.j)(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = ng(i, nx[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < nw; s++) {
                    let o = d[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === +!!o.startsWith("scale")
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = ng(a, nx[o]);
                      if (!l) {
                        r = !1;
                        let e = nb[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let nS = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function nT(t, e, i) {
        for (let n in e) (0, y.S)(e[n]) || nm(n, i) || (t[n] = e[n]);
      }
      let nE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        nA = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nM(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          pathLength: r,
          pathSpacing: s = 1,
          pathOffset: o = 0,
          ...a
        },
        l,
        u,
        h
      ) {
        if ((nP(t, a, u), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: c } = t;
        d.transform && ((c.transform = d.transform), delete d.transform),
          (c.transform || d.transformOrigin) &&
            ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
            delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = h?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== r &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? nE : nA;
              t[s.offset] = I.px.transform(-n);
              let o = I.px.transform(e),
                a = I.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, r, s, o, !1);
      }
      let nj = () => ({ ...nS(), attrs: {} }),
        nC = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        nO = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
      function nk(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          nO.has(t)
        );
      }
      let nV = (t) => !nk(t);
      try {
        !(function (t) {
          "function" == typeof t &&
            (nV = (e) => (e.startsWith("on") ? !nk(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      let nR = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function nD(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (nR.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var nL = i(82885);
      let n_ = (t) => (e, i) => {
        let r = (0, eL.useContext)(ns),
          o = (0, eL.useContext)(np.t),
          a = () =>
            (function (
              { scrapeMotionValuesFromProps: t, createRenderState: e },
              i,
              r,
              o
            ) {
              return {
                latestValues: (function (t, e, i, r) {
                  let o = {},
                    a = r(t, {});
                  for (let t in a) o[t] = eJ(a[t]);
                  let { initial: l, animate: u } = t,
                    h = no(t),
                    d = na(t);
                  e &&
                    d &&
                    !h &&
                    !1 !== t.inherit &&
                    (void 0 === l && (l = e.initial),
                    void 0 === u && (u = e.animate));
                  let c = !!i && !1 === i.initial,
                    p = (c = c || !1 === l) ? u : l;
                  if (p && "boolean" != typeof p && !n(p)) {
                    let e = Array.isArray(p) ? p : [p];
                    for (let i = 0; i < e.length; i++) {
                      let n = s(t, e[i]);
                      if (n) {
                        let { transitionEnd: t, transition: e, ...i } = n;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = c ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (o[t] = e);
                        }
                        for (let e in t) o[e] = t[e];
                      }
                    }
                  }
                  return o;
                })(i, r, o, t),
                renderState: e(),
              };
            })(t, e, r, o);
        return i ? a() : (0, nL.M)(a);
      };
      function nI(t, e, i) {
        let { style: n } = t,
          r = {};
        for (let s in n)
          ((0, y.S)(n[s]) ||
            (e.style && (0, y.S)(e.style[s])) ||
            nm(s, t) ||
            i?.getValue(s)?.liveStyle !== void 0) &&
            (r[s] = n[s]);
        return r;
      }
      let nF = {
        useVisualState: n_({
          scrapeMotionValuesFromProps: nI,
          createRenderState: nS,
        }),
      };
      function nB(t, e, i) {
        let n = nI(t, e, i);
        for (let i in t)
          ((0, y.S)(t[i]) || (0, y.S)(e[i])) &&
            (n[
              -1 !== d.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      let nN = {
          useVisualState: n_({
            scrapeMotionValuesFromProps: nB,
            createRenderState: nj,
          }),
        },
        nU = (t) => (e) => e.test(t),
        nW = [
          _.ai,
          I.px,
          I.KN,
          I.uj,
          I.vw,
          I.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        nz = (t) => nW.find(nU(t)),
        nG = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        nq = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        n$ = (t) => /^0[^.\s]+$/u.test(t);
      var nX = i(30614);
      let nH = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function nK(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(nX.S) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = +!!nH.has(e);
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let nY = /\b([a-z-]*)\(.*?\)/gu,
        nQ = {
          ...ty.f,
          getAnimatableNone: (t) => {
            let e = t.match(nY);
            return e ? e.map(nK).join(" ") : t;
          },
        };
      var nZ = i(4272);
      let nJ = {
          ...nx,
          color: nZ.y,
          backgroundColor: nZ.y,
          outlineColor: nZ.y,
          fill: nZ.y,
          stroke: nZ.y,
          borderColor: nZ.y,
          borderTopColor: nZ.y,
          borderRightColor: nZ.y,
          borderBottomColor: nZ.y,
          borderLeftColor: nZ.y,
          filter: nQ,
          WebkitFilter: nQ,
        },
        n0 = (t) => nJ[t];
      function n1(t, e) {
        let i = n0(t);
        return (
          i !== nQ && (i = ty.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let n5 = new Set(["auto", "none", "0"]);
      class n2 extends H {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, eW.p)(n))) {
              let r = (function t(e, i, n = 1) {
                (0, Y.V)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = nq.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${i ?? n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return nG(t) ? parseFloat(t) : t;
                }
                return (0, eW.p)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !p.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = nz(n),
            o = nz(r);
          if (s !== o)
            if (F(s) && F(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else U[i] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            (null === t[e] ||
              ("number" == typeof (n = t[e])
                ? 0 === n
                : null === n || "none" === n || "0" === n || n$(n))) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !n5.has(e) &&
                  (0, ty.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = n1(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = U[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let n = t.getValue(e);
          n && n.jump(this.measuredOrigin, !1);
          let r = i.length - 1,
            s = i[r];
          (i[r] = U[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let n8 = [...nW, nZ.y, ty.f],
        n3 = (t) => n8.find(nU(t)),
        n4 = { current: null },
        n6 = { current: !1 },
        n9 = new WeakMap(),
        n7 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rt {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = H),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = S.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                h.Gt.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = no(e)),
            (this.isVariantNode = na(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] && (0, y.S)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            n9.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            n6.current ||
              (function () {
                if (((n6.current = !0), nu.B))
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (n4.current = t.matches);
                    t.addEventListener("change", e), e();
                  } else n4.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || n4.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, h.WG)(this.notifyUpdate),
          (0, h.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = c.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && h.Gt.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in nd) {
            let e = nd[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : t7();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < n7.length; e++) {
            let i = n7[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, y.S)(r)) t.addValue(n, r);
              else if ((0, y.S)(s)) t.addValue(n, (0, f.OQ)(r, { owner: t }));
              else if (s !== r)
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, f.OQ)(void 0 !== e ? e : r, { owner: t }));
                }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, f.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && (nG(i) || n$(i))
                ? (i = parseFloat(i))
                : !n3(i) && ty.f.test(e) && (i = n1(t, e)),
              this.setBaseTarget(t, (0, y.S)(i) ? i.get() : i)),
            (0, y.S)(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e,
            { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = s(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, y.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new eK.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class re extends rt {
        constructor() {
          super(...arguments), (this.KeyframeResolver = n2);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, y.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function ri(t, { style: e, vars: i }, n, r) {
        let s,
          o = t.style;
        for (s in e) o[s] = e[s];
        for (s in (r?.applyProjectionStyles(o, n), i)) o.setProperty(s, i[s]);
      }
      class rn extends re {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = ri);
        }
        readValueFromInstance(t, e) {
          if (c.has(e)) return this.projection?.isProjecting ? V(e) : D(t, e);
          {
            let i = window.getComputedStyle(t),
              n = ((0, eW.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return ed(t, e);
        }
        build(t, e, i) {
          nP(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nI(t, e, i);
        }
      }
      let rr = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      class rs extends re {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = t7);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (c.has(e)) {
            let t = n0(e);
            return (t && t.default) || 0;
          }
          return (e = rr.has(e) ? e : x(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nB(t, e, i);
        }
        build(t, e, i) {
          nM(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          for (let i in (ri(t, e, void 0, n), e.attrs))
            t.setAttribute(rr.has(i) ? i : x(i), e.attrs[i]);
        }
        mount(t) {
          (this.isSVGTag = nC(t.tagName)), super.mount(t);
        }
      }
      let ro = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((l = {
          animation: { Feature: tz },
          exit: { Feature: tq },
          inView: { Feature: ni },
          tap: { Feature: i4 },
          focus: { Feature: iQ },
          hover: { Feature: iY },
          pan: { Feature: eV },
          drag: { Feature: eO, ProjectionNode: iq, MeasureLayout: e$ },
          layout: { ProjectionNode: iq, MeasureLayout: e$ },
        }),
        (u = (t, e) =>
          nD(t)
            ? new rs(e)
            : new rn(e, { allowProjection: t !== eL.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, i;
            let {
              preloadedFeatures: n,
              createVisualElement: r,
              useRender: s,
              useVisualState: o,
              Component: a,
            } = t;
            function l(t, e) {
              var i, n, l;
              let u,
                h = {
                  ...(0, eL.useContext)(nr.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, eL.useContext)(eI.L).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: d } = h,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (no(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || tD(e) ? e : void 0,
                        animate: tD(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, eL.useContext)(ns));
                  return (0, eL.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [nl(e), nl(i)]
                  );
                })(t),
                p = o(t, d);
              if (!d && nu.B) {
                (n = 0), (l = 0), (0, eL.useContext)(nn).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = nd;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(h);
                (u = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, n, r) {
                    let { visualElement: s } = (0, eL.useContext)(ns),
                      o = (0, eL.useContext)(nn),
                      a = (0, eL.useContext)(np.t),
                      l = (0, eL.useContext)(nr.Q).reducedMotion,
                      u = (0, eL.useRef)(null);
                    (n = n || o.renderer),
                      !u.current &&
                        n &&
                        (u.current = n(t, {
                          visualState: e,
                          parent: s,
                          props: i,
                          presenceContext: a,
                          blockInitialAnimation: !!a && !1 === a.initial,
                          reducedMotionConfig: l,
                        }));
                    let h = u.current,
                      d = (0, eL.useContext)(eF);
                    h &&
                      !h.projection &&
                      r &&
                      ("html" === h.type || "svg" === h.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                          layoutCrossfade: h,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && ep(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            crossfade: h,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(u.current, i, r, d);
                    let c = (0, eL.useRef)(!1);
                    (0, eL.useInsertionEffect)(() => {
                      h && c.current && h.update(i, a);
                    });
                    let p = i[b],
                      f = (0, eL.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete?.(p) &&
                          window.MotionHasOptimisedAnimation?.(p)
                      );
                    return (
                      (0, nf.E)(() => {
                        h &&
                          ((c.current = !0),
                          (window.MotionIsMounted = !0),
                          h.updateFeatures(),
                          eD.render(h.render),
                          f.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, eL.useEffect)(() => {
                        h &&
                          (!f.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          f.current &&
                            (queueMicrotask(() => {
                              window.MotionHandoffMarkAsComplete?.(p);
                            }),
                            (f.current = !1)));
                      }),
                      h
                    );
                  })(a, p, h, r, t.ProjectionNode));
              }
              return (0, eR.jsxs)(ns.Provider, {
                value: c,
                children: [
                  u && c.visualElement
                    ? (0, eR.jsx)(u, { visualElement: c.visualElement, ...h })
                    : null,
                  s(
                    a,
                    t,
                    ((i = c.visualElement),
                    (0, eL.useCallback)(
                      (t) => {
                        t && p.onMount && p.onMount(t),
                          i && (t ? i.mount(t) : i.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : ep(e) && (e.current = t));
                      },
                      [i]
                    )),
                    p,
                    d,
                    c.visualElement
                  ),
                ],
              });
            }
            n &&
              (function (t) {
                for (let e in t) nd[e] = { ...nd[e], ...t[e] };
              })(n),
              (l.displayName = "motion.".concat(
                "string" == typeof a
                  ? a
                  : "create(".concat(
                      null != (i = null != (e = a.displayName) ? e : a.name)
                        ? i
                        : "",
                      ")"
                    )
              ));
            let u = (0, eL.forwardRef)(l);
            return (u[nc] = a), u;
          })({
            ...(nD(t) ? nN : nF),
            preloadedFeatures: l,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    nD(e)
                      ? function (t, e, i, n) {
                          let r = (0, eL.useMemo)(() => {
                            let i = nj();
                            return (
                              nM(i, e, nC(n), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            nT(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                nT(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, eL.useMemo)(() => {
                                      let i = nS();
                                      return (
                                        nP(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (nV(r) ||
                          (!0 === i && nk(r)) ||
                          (!e && !nk(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== eL.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, eL.useMemo)(() => ((0, y.S)(u) ? u.get() : u), [u]);
                return (0, eL.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: u,
            Component: t,
          });
        })
      );
    },
    15564: (t, e, i) => {
      var n = i(49509);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return c;
          },
        });
      let r = i(88229),
        s = i(6966),
        o = i(95155),
        a = s._(i(12115)),
        l = r._(i(85029)),
        u = i(42464),
        h = i(82830),
        d = i(17544);
      function c(t) {
        void 0 === t && (t = !1);
        let e = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          t ||
            e.push(
              (0, o.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          e
        );
      }
      function p(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === a.default.Fragment
          ? t.concat(
              a.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(43230);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(p, [])
          .reverse()
          .concat(c(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                n = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (s = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (let t = 0, e = f.length; t < e; t++) {
                      let e = f[t];
                      if (r.props.hasOwnProperty(e))
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = r.props[e],
                            i = n[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (n[e] = i));
                        }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let r = t.key || e;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                a.default.cloneElement(t, e)
              );
            }
            return a.default.cloneElement(t, { key: r });
          });
      }
      let g = function (t) {
        let { children: e } = t,
          i = (0, a.useContext)(u.AmpStateContext),
          n = (0, a.useContext)(h.HeadManagerContext);
        return (0, o.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    17544: (t, e) => {
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (i && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    17828: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, i(64054).createAsyncLocalStorage)();
    },
    18476: (t, e, i) => {
      i.d(e, { V: () => a });
      var n = i(57887),
        r = i(34158),
        s = i(11557),
        o = i(55920);
      let a = {
        test: (0, o.$)("hsl", "hue"),
        parse: (0, o.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.KN.transform((0, s.a)(e)) +
          ", " +
          r.KN.transform((0, s.a)(i)) +
          ", " +
          (0, s.a)(n.X4.transform(o)) +
          ")",
      };
    },
    19827: (t, e, i) => {
      i.d(e, { l: () => n });
      let n = (t) => t;
    },
    23387: (t, e, i) => {
      i.d(e, { W: () => n });
      let n = {};
    },
    24744: (t, e, i) => {
      i.d(e, { Q: () => n });
      let n = { value: null, addProjectionMetrics: null };
    },
    26087: (t, e, i) => {
      i.d(e, { j: () => E });
      var n = i(53191),
        r = i(54542),
        s = i(78606),
        o = i(4272),
        a = i(60010),
        l = i(1335),
        u = i(18476);
      function h(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var d = i(9064);
      function c(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      var p = i(33210);
      let f = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        m = [l.u, d.B, u.V],
        g = (t) => m.find((e) => e.test(t));
      function y(t) {
        let e = g(t);
        if (
          ((0, r.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === u.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = h(a, n, t + 1 / 3)),
                  (s = h(a, n, t)),
                  (o = h(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let v = (t, e) => {
          let i = y(t),
            n = y(e);
          if (!i || !n) return c(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = f(i.red, n.red, t)),
            (r.green = f(i.green, n.green, t)),
            (r.blue = f(i.blue, n.blue, t)),
            (r.alpha = (0, p.k)(i.alpha, n.alpha, t)),
            d.B.transform(r)
          );
        },
        x = new Set(["none", "hidden"]);
      function b(t, e) {
        return (i) => (0, p.k)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? b
          : "string" == typeof t
          ? (0, s.p)(t)
            ? c
            : o.y.test(t)
            ? v
            : T
          : Array.isArray(t)
          ? P
          : "object" == typeof t
          ? o.y.test(t)
            ? v
            : S
          : c;
      }
      function P(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function S(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let T = (t, e) => {
        let i = a.f.createTransformer(e),
          s = (0, a.V)(t),
          o = (0, a.V)(e);
        return s.indexes.var.length === o.indexes.var.length &&
          s.indexes.color.length === o.indexes.color.length &&
          s.indexes.number.length >= o.indexes.number.length
          ? (x.has(t) && !o.values.length) || (x.has(e) && !s.values.length)
            ? (function (t, e) {
                return x.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, n.F)(
                P(
                  (function (t, e) {
                    let i = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let s = e.types[r],
                        o = t.indexes[s][n[s]],
                        a = t.values[o] ?? 0;
                      (i[r] = a), n[s]++;
                    }
                    return i;
                  })(s, o),
                  o.values
                ),
                i
              )
          : ((0, r.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            c(t, e));
      };
      function E(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, p.k)(t, e, i)
          : w(t)(t, e);
      }
    },
    27351: (t, e, i) => {
      i.d(e, { s: () => r });
      var n = i(6983);
      function r(t) {
        return (0, n.G)(t) && "offsetHeight" in t;
      }
    },
    30532: (t, e, i) => {
      i.d(e, { s: () => v });
      var n = i(53191),
        r = i(53678),
        s = i(47215),
        o = i(74261),
        a = i(63704),
        l = i(26087),
        u = i(69515);
      let h = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: (t = !0) => u.Gt.update(e, t),
          stop: () => (0, u.WG)(e),
          now: () => (u.uv.isProcessing ? u.uv.timestamp : o.k.now()),
        };
      };
      var d = i(56330),
        c = i(8467),
        p = i(52458),
        f = i(76778),
        m = i(70144),
        g = i(63894);
      let y = (t) => t / 100;
      class v extends g.q {
        constructor(t) {
          super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              t && t.updatedAt !== o.k.now() && this.tick(o.k.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.());
            }),
            a.q.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause();
        }
        initAnimation() {
          let { options: t } = this;
          (0, m.E)(t);
          let {
              type: e = c.i,
              repeat: i = 0,
              repeatDelay: r = 0,
              repeatType: s,
              velocity: o = 0,
            } = t,
            { keyframes: a } = t,
            u = e || c.i;
          u !== c.i &&
            "number" != typeof a[0] &&
            ((this.mixKeyframes = (0, n.F)(y, (0, l.j)(a[0], a[1]))),
            (a = [0, 100]));
          let h = u({ ...t, keyframes: a });
          "mirror" === s &&
            (this.mirroredGenerator = u({
              ...t,
              keyframes: [...a].reverse(),
              velocity: -o,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (0, p.t)(h));
          let { calculatedDuration: d } = h;
          (this.calculatedDuration = d),
            (this.resolvedDuration = d + r),
            (this.totalDuration = this.resolvedDuration * (i + 1) - r),
            (this.generator = h);
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: n,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: a,
            calculatedDuration: l,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: u = 0,
            keyframes: h,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            type: g,
            onUpdate: y,
            finalKeyframe: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - n / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t);
          let x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            b = this.playbackSpeed >= 0 ? x < 0 : x > n;
          (this.currentTime = Math.max(x, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = n);
          let w = this.currentTime,
            P = i;
          if (c) {
            let t = Math.min(this.currentTime, n) / a,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / a))
                  : "mirror" === p && (P = o)),
              (w = (0, r.q)(0, 1, i) * a);
          }
          let S = b ? { done: !1, value: h[0] } : P.next(w);
          s && (S.value = s(S.value));
          let { done: T } = S;
          b ||
            null === l ||
            (T =
              this.playbackSpeed >= 0
                ? this.currentTime >= n
                : this.currentTime <= 0);
          let E =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            E &&
              g !== d.B &&
              (S.value = (0, f.X)(h, this.options, v, this.speed)),
            y && y(S.value),
            E && this.finish(),
            S
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return (0, s.X)(this.calculatedDuration);
        }
        get time() {
          return (0, s.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, s.f)(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(o.k.now());
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, s.X)(this.currentTime));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = h, startTime: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.();
          let i = this.driver.now();
          "finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          (this.state = "paused"),
            this.updateTime(o.k.now()),
            (this.holdTime = this.currentTime);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.();
        }
        cancel() {
          (this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            a.q.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
    },
    30614: (t, e, i) => {
      i.d(e, { S: () => n });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    32082: (t, e, i) => {
      i.d(e, { xQ: () => s });
      var n = i(12115),
        r = i(80845);
      function s(t = !0) {
        let e = (0, n.useContext)(r.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: o, register: a } = e,
          l = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let u = (0, n.useCallback)(() => t && o && o(l), [l, o, t]);
        return !i && o ? [!1, u] : [!0];
      }
    },
    33063: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = i(88229),
        r = i(6966),
        s = i(95155),
        o = r._(i(12115)),
        a = n._(i(47650)),
        l = n._(i(15564)),
        u = i(38883),
        h = i(95840),
        d = i(86752);
      i(43230);
      let c = i(70901),
        p = n._(i(51193)),
        f = i(6654),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(t, e, i, n, r, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && r(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    r = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function y(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      let v = (0, o.forwardRef)((t, e) => {
        let {
            src: i,
            srcSet: n,
            sizes: r,
            height: a,
            width: l,
            decoding: u,
            className: h,
            style: d,
            fetchPriority: c,
            placeholder: p,
            loading: m,
            unoptimized: v,
            fill: x,
            onLoadRef: b,
            onLoadingCompleteRef: w,
            setBlurComplete: P,
            setShowAltText: S,
            sizesInput: T,
            onLoad: E,
            onError: A,
            ...M
          } = t,
          j = (0, o.useCallback)(
            (t) => {
              t && (A && (t.src = t.src), t.complete && g(t, p, b, w, P, v, T));
            },
            [i, p, b, w, P, A, v, T]
          ),
          C = (0, f.useMergedRef)(e, j);
        return (0, s.jsx)("img", {
          ...M,
          ...y(c),
          loading: m,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": x ? "fill" : "1",
          className: h,
          style: d,
          sizes: r,
          srcSet: n,
          src: i,
          ref: C,
          onLoad: (t) => {
            g(t.currentTarget, p, b, w, P, v, T);
          },
          onError: (t) => {
            S(!0), "empty" !== p && P(!0), A && A(t);
          },
        });
      });
      function x(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          n = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...y(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, n), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...n },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let b = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(c.RouterContext),
          n = (0, o.useContext)(d.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            var t;
            let e = m || n || h.imageConfigDefault,
              i = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
              r = e.deviceSizes.sort((t, e) => t - e),
              s = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
            return { ...e, allSizes: i, deviceSizes: r, qualities: s };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = t,
          f = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          f.current = a;
        }, [a]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [y, b] = (0, o.useState)(!1),
          [w, P] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: r,
            blurComplete: y,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: f,
              onLoadingCompleteRef: g,
              setBlurComplete: b,
              setShowAltText: P,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(x, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    33210: (t, e, i) => {
      i.d(e, { k: () => n });
      let n = (t, e, i) => t + (e - t) * i;
    },
    33972: (t, e, i) => {
      i.d(e, { Sz: () => o, ZZ: () => l, dg: () => a });
      var n = i(62483),
        r = i(91765),
        s = i(54180);
      let o = (0, n.A)(0.33, 1.53, 0.69, 0.99),
        a = (0, s.G)(o),
        l = (0, r.V)(a);
    },
    34158: (t, e, i) => {
      i.d(e, {
        KN: () => s,
        gQ: () => u,
        px: () => o,
        uj: () => r,
        vh: () => a,
        vw: () => l,
      });
      let n = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        r = n("deg"),
        s = n("%"),
        o = n("px"),
        a = n("vh"),
        l = n("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    36645: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = i(88229)._(i(67357));
      function r(t, e) {
        var i;
        let r = {};
        "function" == typeof t && (r.loader = t);
        let s = { ...r, ...e };
        return (0, n.default)({
          ...s,
          modules: null == (i = s.loadableGenerated) ? void 0 : i.modules,
        });
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    37602: (t, e, i) => {
      i.d(e, { z: () => d });
      var n = i(64803),
        r = i(30532),
        s = i(69515);
      function o(t) {
        return "number" == typeof t ? t : parseFloat(t);
      }
      var a = i(12115),
        l = i(51508),
        u = i(8619),
        h = i(58829);
      function d(t, e = {}) {
        let { isStatic: i } = (0, a.useContext)(l.Q),
          c = () => ((0, n.S)(t) ? t.get() : t);
        if (i) return (0, h.G)(c);
        let p = (0, u.d)(c());
        return (
          (0, a.useInsertionEffect)(
            () =>
              (function (t, e, i) {
                let a,
                  l,
                  u = t.get(),
                  h = null,
                  d = u,
                  c = "string" == typeof u ? u.replace(/[\d.-]/g, "") : void 0,
                  p = () => {
                    h && (h.stop(), (h = null));
                  },
                  f = () => {
                    p(),
                      (h = new r.s({
                        keyframes: [o(t.get()), o(d)],
                        velocity: t.getVelocity(),
                        type: "spring",
                        restDelta: 0.001,
                        restSpeed: 0.01,
                        ...i,
                        onUpdate: a,
                      }));
                  };
                return (
                  t.attach(
                    (e, i) => (
                      (d = e),
                      (a = (t) => {
                        var e, n;
                        return i(((e = t), (n = c) ? e + n : e));
                      }),
                      s.Gt.postRender(f),
                      t.get()
                    ),
                    p
                  ),
                  (0, n.S)(e) &&
                    ((l = e.on("change", (e) => {
                      var i, n;
                      return t.set(((i = e), (n = c) ? i + n : i));
                    })),
                    t.on("destroy", l)),
                  l
                );
              })(p, t, e),
            [p, JSON.stringify(e)]
          ),
          p
        );
      }
    },
    38883: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        i(43230);
      let n = i(75100),
        r = i(95840),
        s = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function o(t) {
        return void 0 !== t.default;
      }
      function a(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function l(t, e) {
        var i, l;
        let u,
          h,
          d,
          {
            src: c,
            sizes: p,
            unoptimized: f = !1,
            priority: m = !1,
            loading: g,
            className: y,
            quality: v,
            width: x,
            height: b,
            fill: w = !1,
            style: P,
            overrideSrc: S,
            onLoad: T,
            onLoadingComplete: E,
            placeholder: A = "empty",
            blurDataURL: M,
            fetchPriority: j,
            decoding: C = "async",
            layout: O,
            objectFit: k,
            objectPosition: V,
            lazyBoundary: R,
            lazyRoot: D,
            ...L
          } = t,
          { imgConf: _, showAltText: I, blurComplete: F, defaultLoader: B } = e,
          N = _ || r.imageConfigDefault;
        if ("allSizes" in N) u = N;
        else {
          let t = [...N.deviceSizes, ...N.imageSizes].sort((t, e) => t - e),
            e = N.deviceSizes.sort((t, e) => t - e),
            n = null == (i = N.qualities) ? void 0 : i.sort((t, e) => t - e);
          u = { ...N, allSizes: t, deviceSizes: e, qualities: n };
        }
        if (void 0 === B)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let U = L.loader || B;
        delete L.loader, delete L.srcSet;
        let W = "__next_img_default" in U;
        if (W) {
          if ("custom" === u.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  c +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let t = U;
          U = (e) => {
            let { config: i, ...n } = e;
            return t(n);
          };
        }
        if (O) {
          "fill" === O && (w = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          t && (P = { ...P, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[O];
          e && !p && (p = e);
        }
        let z = "",
          G = a(x),
          q = a(b);
        if ((l = c) && "object" == typeof l && (o(l) || void 0 !== l.src)) {
          let t = o(c) ? c.default : c;
          if (!t.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(t)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!t.height || !t.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(t)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((h = t.blurWidth),
            (d = t.blurHeight),
            (M = M || t.blurDataURL),
            (z = t.src),
            !w)
          )
            if (G || q) {
              if (G && !q) {
                let e = G / t.width;
                q = Math.round(t.height * e);
              } else if (!G && q) {
                let e = q / t.height;
                G = Math.round(t.width * e);
              }
            } else (G = t.width), (q = t.height);
        }
        let $ = !m && ("lazy" === g || void 0 === g);
        (!(c = "string" == typeof c ? c : z) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), ($ = !1)),
          u.unoptimized && (f = !0),
          W &&
            !u.dangerouslyAllowSVG &&
            c.split("?", 1)[0].endsWith(".svg") &&
            (f = !0);
        let X = a(v),
          H = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: k,
                  objectPosition: V,
                }
              : {},
            I ? {} : { color: "transparent" },
            P
          ),
          K =
            F || "empty" === A
              ? null
              : "blur" === A
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: G,
                  heightInt: q,
                  blurWidth: h,
                  blurHeight: d,
                  blurDataURL: M || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + A + '")',
          Y = s.includes(H.objectFit)
            ? "fill" === H.objectFit
              ? "100% 100%"
              : "cover"
            : H.objectFit,
          Q = K
            ? {
                backgroundSize: Y,
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K,
              }
            : {},
          Z = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: n,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (n) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: n, allSizes: r } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(i)); ) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, r, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, n) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: u,
            src: c,
            unoptimized: f,
            width: G,
            quality: X,
            sizes: p,
            loader: U,
          });
        return {
          props: {
            ...L,
            loading: $ ? "lazy" : g,
            fetchPriority: j,
            width: G,
            height: q,
            decoding: C,
            className: y,
            style: { ...H, ...Q },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: S || Z.src,
          },
          meta: { unoptimized: f, priority: m, placeholder: A, fill: w },
        };
      }
    },
    41917: (t, e, i) => {
      i.d(e, { p: () => n });
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    42198: (t, e, i) => {
      i.d(e, { K: () => n });
      function n(t, e, i) {
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let n = document;
          e && (n = e.current);
          let r = i?.[t] ?? n.querySelectorAll(t);
          return r ? Array.from(r) : [];
        }
        return Array.from(t);
      }
    },
    42464: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(88229)._(i(12115)).default.createContext({});
    },
    42714: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        n = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function r(t) {
        return ["async", "defer", "noModule"].includes(t);
      }
      function s(t, e) {
        for (let [s, o] of Object.entries(e)) {
          if (!e.hasOwnProperty(s) || n.includes(s) || void 0 === o) continue;
          let a = i[s] || s.toLowerCase();
          "SCRIPT" === t.tagName && r(a)
            ? (t[a] = !!o)
            : t.setAttribute(a, String(o)),
            (!1 === o ||
              ("SCRIPT" === t.tagName && r(a) && (!o || "false" === o))) &&
              (t.setAttribute(a, ""), t.removeAttribute(a));
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    45818: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    46009: (t, e, i) => {
      i.d(e, { b: () => r });
      var n = i(33972);
      let r = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, n.dg)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    47215: (t, e, i) => {
      i.d(e, { X: () => r, f: () => n });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    47705: (t, e, i) => {
      i.d(e, { K: () => n });
      let n = (t, e, i = 10) => {
        let n = "",
          r = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < r; e++)
          n += Math.round(1e4 * t(e / (r - 1))) / 1e4 + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      };
    },
    51193: (t, e) => {
      function i(t) {
        var e;
        let { config: i, src: n, width: r, quality: s } = t,
          o =
            s ||
            (null == (e = i.qualities)
              ? void 0
              : e.reduce((t, e) =>
                  Math.abs(e - 75) < Math.abs(t - 75) ? e : t
                )) ||
            75;
        return (
          i.path + n
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (i.__next_img_default = !0);
      let n = i;
    },
    51508: (t, e, i) => {
      i.d(e, { Q: () => n });
      let n = (0, i(12115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    52458: (t, e, i) => {
      i.d(e, { Y: () => n, t: () => r });
      let n = 2e4;
      function r(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) (e += 50), (i = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    53191: (t, e, i) => {
      i.d(e, { F: () => r });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    53678: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    54180: (t, e, i) => {
      i.d(e, { G: () => n });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    54542: (t, e, i) => {
      i.d(e, { $: () => n, V: () => r });
      let n = () => {},
        r = () => {};
    },
    55028: (t, e, i) => {
      i.d(e, { default: () => r.a });
      var n = i(36645),
        r = i.n(n);
    },
    55920: (t, e, i) => {
      i.d(e, { $: () => s, q: () => o });
      var n = i(30614);
      let r =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (i) =>
          !!(
            ("string" == typeof i && r.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        o = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [s, o, a, l] = r.match(n.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    56330: (t, e, i) => {
      i.d(e, { B: () => s });
      var n = i(82886),
        r = i(73945);
      function s({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: o = 10,
        bounceStiffness: a = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: d = 0.5,
        restSpeed: c,
      }) {
        let p,
          f,
          m = t[0],
          g = { done: !1, value: m },
          y = (t) => (void 0 !== u && t < u) || (void 0 !== h && t > h),
          v = (t) =>
            void 0 === u
              ? h
              : void 0 === h || Math.abs(u - t) < Math.abs(h - t)
              ? u
              : h,
          x = i * e,
          b = m + x,
          w = void 0 === l ? b : l(b);
        w !== b && (x = w - m);
        let P = (t) => -x * Math.exp(-t / s),
          S = (t) => w + P(t),
          T = (t) => {
            let e = P(t),
              i = S(t);
            (g.done = Math.abs(e) <= d), (g.value = g.done ? w : i);
          },
          E = (t) => {
            y(g.value) &&
              ((p = t),
              (f = (0, n.o)({
                keyframes: [g.value, v(g.value)],
                velocity: (0, r.Y)(S, t, g.value),
                damping: o,
                stiffness: a,
                restDelta: d,
                restSpeed: c,
              })));
          };
        return (
          E(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (f || void 0 !== p || ((e = !0), T(t), E(t)),
              void 0 !== p && t >= p)
                ? f.next(t - p)
                : (e || T(t), g);
            },
          }
        );
      }
    },
    56668: (t, e, i) => {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => r, Kq: () => n });
    },
    57887: (t, e, i) => {
      i.d(e, { X4: () => s, ai: () => r, hs: () => o });
      var n = i(53678);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.q)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    58437: (t, e, i) => {
      i.d(e, { I: () => o });
      var n = i(23387);
      let r = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var s = i(24744);
      function o(t, e) {
        let i = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = () => (i = !0),
          u = r.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  n = new Set(),
                  r = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = { delta: 0, timestamp: 0, isProcessing: !1 },
                  u = 0;
                function h(e) {
                  a.has(e) && (d.schedule(e), t()), u++, e(l);
                }
                let d = {
                  schedule: (t, e = !1, s = !1) => {
                    let o = s && r ? i : n;
                    return e && a.add(t), o.has(t) || o.add(t), t;
                  },
                  cancel: (t) => {
                    n.delete(t), a.delete(t);
                  },
                  process: (t) => {
                    if (((l = t), r)) {
                      o = !0;
                      return;
                    }
                    (r = !0),
                      ([i, n] = [n, i]),
                      i.forEach(h),
                      e && s.Q.value && s.Q.value.frameloop[e].push(u),
                      (u = 0),
                      i.clear(),
                      (r = !1),
                      o && ((o = !1), d.process(t));
                  },
                };
                return d;
              })(l, e ? i : void 0)),
              t
            ),
            {}
          ),
          {
            setup: h,
            read: d,
            resolveKeyframes: c,
            preUpdate: p,
            update: f,
            preRender: m,
            render: g,
            postRender: y,
          } = u,
          v = () => {
            let r = n.W.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              n.W.useManualTiming ||
                (a.delta = o
                  ? 1e3 / 60
                  : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              h.process(a),
              d.process(a),
              c.process(a),
              p.process(a),
              f.process(a),
              m.process(a),
              g.process(a),
              y.process(a),
              (a.isProcessing = !1),
              i && e && ((o = !1), t(v));
          },
          x = () => {
            (i = !0), (o = !0), a.isProcessing || t(v);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = u[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || x(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) u[r[e]].cancel(t);
          },
          state: a,
          steps: u,
        };
      }
    },
    58829: (t, e, i) => {
      i.d(e, { G: () => h });
      var n = i(6775),
        r = i(82885),
        s = i(69515),
        o = i(97494),
        a = i(8619);
      function l(t, e) {
        let i = (0, a.d)(e()),
          n = () => i.set(e());
        return (
          n(),
          (0, o.E)(() => {
            let e = () => s.Gt.preRender(n, !1, !0),
              i = t.map((t) => t.on("change", e));
            return () => {
              i.forEach((t) => t()), (0, s.WG)(n);
            };
          }),
          i
        );
      }
      var u = i(60098);
      function h(t, e, i, r) {
        if ("function" == typeof t) {
          (u.bt.current = []), t();
          let e = l(u.bt.current, t);
          return (u.bt.current = void 0), e;
        }
        let s =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  i = e ? 0 : -1,
                  r = t[0 + i],
                  s = t[1 + i],
                  o = t[2 + i],
                  a = t[3 + i],
                  l = (0, n.G)(s, o, a);
                return e ? l(r) : l;
              })(e, i, r);
        return Array.isArray(t) ? d(t, s) : d([t], ([t]) => s(t));
      }
      function d(t, e) {
        let i = (0, r.M)(() => []);
        return l(t, () => {
          i.length = 0;
          let n = t.length;
          for (let e = 0; e < n; e++) i[e] = t[e].get();
          return e(i);
        });
      }
    },
    60010: (t, e, i) => {
      i.d(e, { V: () => h, f: () => f });
      var n = i(4272);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = i(30614),
        o = i(11557);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          h = e
            .replace(
              u,
              (t) => (
                n.y.test(t)
                  ? (r.color.push(o), s.push(l), i.push(n.y.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(o), s.push("var"), i.push(t))
                  : (r.number.push(o), s.push(a), i.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: s };
      }
      function d(t) {
        return h(t).values;
      }
      function c(t) {
        let { split: e, types: i } = h(t),
          r = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < r; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === a
                ? (s += (0, o.a)(t[u]))
                : e === l
                ? (s += n.y.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) =>
          "number" == typeof t ? 0 : n.y.test(t) ? n.y.getAnimatableNone(t) : t,
        f = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(s.S)?.length || 0) + (t.match(r)?.length || 0) > 0
            );
          },
          parse: d,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = d(t);
            return c(t)(e.map(p));
          },
        };
    },
    60098: (t, e, i) => {
      i.d(e, { OQ: () => h, bt: () => l });
      var n = i(75626),
        r = i(62923),
        s = i(74261),
        o = i(69515);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.k.now();
              if (
                (this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
              e && this.events.renderRequest?.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set()),
            this.dependents.add(t);
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    60760: (t, e, i) => {
      i.d(e, { N: () => v });
      var n = i(95155),
        r = i(12115),
        s = i(90869),
        o = i(82885),
        a = i(97494),
        l = i(80845),
        u = i(27351),
        h = i(51508);
      class d extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              i = ((0, u.s)(t) && t.offsetWidth) || 0,
              n = this.props.sizeRef.current;
            (n.height = e.offsetHeight || 0),
              (n.width = e.offsetWidth || 0),
              (n.top = e.offsetTop),
              (n.left = e.offsetLeft),
              (n.right = i - n.width - n.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(t) {
        let { children: e, isPresent: i, anchorX: s, root: o } = t,
          a = (0, r.useId)(),
          l = (0, r.useRef)(null),
          u = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: c } = (0, r.useContext)(h.Q);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: r, right: h } = u.current;
            if (i || !l.current || !t || !e) return;
            l.current.dataset.motionPopId = a;
            let d = document.createElement("style");
            c && (d.nonce = c);
            let p = null != o ? o : document.head;
            return (
              p.appendChild(d),
              d.sheet &&
                d.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      a,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            ")
                    .concat(
                      "left" === s ? "left: ".concat(r) : "right: ".concat(h),
                      "px !important;\n            top: "
                    )
                    .concat(n, "px !important;\n          }\n        ")
                ),
              () => {
                p.removeChild(d), p.contains(d) && p.removeChild(d);
              }
            );
          }, [i]),
          (0, n.jsx)(d, {
            isPresent: i,
            childRef: l,
            sizeRef: u,
            children: r.cloneElement(e, { ref: l }),
          })
        );
      }
      let p = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: s,
            onExitComplete: a,
            custom: u,
            presenceAffectsLayout: h,
            mode: d,
            anchorX: p,
            root: m,
          } = t,
          g = (0, o.M)(f),
          y = (0, r.useId)(),
          v = !0,
          x = (0, r.useMemo)(
            () => (
              (v = !1),
              {
                id: y,
                initial: i,
                isPresent: s,
                custom: u,
                onExitComplete: (t) => {
                  for (let e of (g.set(t, !0), g.values())) if (!e) return;
                  a && a();
                },
                register: (t) => (g.set(t, !1), () => g.delete(t)),
              }
            ),
            [s, g, a]
          );
        return (
          h && v && (x = { ...x }),
          (0, r.useMemo)(() => {
            g.forEach((t, e) => g.set(e, !1));
          }, [s]),
          r.useEffect(() => {
            s || g.size || !a || a();
          }, [s]),
          "popLayout" === d &&
            (e = (0, n.jsx)(c, {
              isPresent: s,
              anchorX: p,
              root: m,
              children: e,
            })),
          (0, n.jsx)(l.t.Provider, { value: x, children: e })
        );
      };
      function f() {
        return new Map();
      }
      var m = i(32082);
      let g = (t) => t.key || "";
      function y(t) {
        let e = [];
        return (
          r.Children.forEach(t, (t) => {
            (0, r.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let v = (t) => {
        let {
            children: e,
            custom: i,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: h = !0,
            mode: d = "sync",
            propagate: c = !1,
            anchorX: f = "left",
            root: v,
          } = t,
          [x, b] = (0, m.xQ)(c),
          w = (0, r.useMemo)(() => y(e), [e]),
          P = c && !x ? [] : w.map(g),
          S = (0, r.useRef)(!0),
          T = (0, r.useRef)(w),
          E = (0, o.M)(() => new Map()),
          [A, M] = (0, r.useState)(w),
          [j, C] = (0, r.useState)(w);
        (0, a.E)(() => {
          (S.current = !1), (T.current = w);
          for (let t = 0; t < j.length; t++) {
            let e = g(j[t]);
            P.includes(e) ? E.delete(e) : !0 !== E.get(e) && E.set(e, !1);
          }
        }, [j, P.length, P.join("-")]);
        let O = [];
        if (w !== A) {
          let t = [...w];
          for (let e = 0; e < j.length; e++) {
            let i = j[e],
              n = g(i);
            P.includes(n) || (t.splice(e, 0, i), O.push(i));
          }
          return "wait" === d && O.length && (t = O), C(y(t)), M(w), null;
        }
        let { forceRender: k } = (0, r.useContext)(s.L);
        return (0, n.jsx)(n.Fragment, {
          children: j.map((t) => {
            let e = g(t),
              r = (!c || !!x) && (w === j || P.includes(e));
            return (0, n.jsx)(
              p,
              {
                isPresent: r,
                initial: (!S.current || !!l) && void 0,
                custom: i,
                presenceAffectsLayout: h,
                mode: d,
                root: v,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!E.has(e)) return;
                      E.set(e, !0);
                      let t = !0;
                      E.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == k || k(),
                          C(T.current),
                          c && (null == b || b()),
                          u && u());
                    },
                anchorX: f,
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    62146: (t, e, i) => {
      function n(t) {
        let { reason: e, children: i } = t;
        return i;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(45262);
    },
    62483: (t, e, i) => {
      i.d(e, { A: () => s });
      var n = i(19827);
      let r = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function s(t, e, i, s) {
        if (t === e && i === s) return n.l;
        let o = (e) =>
          (function (t, e, i, n, s) {
            let o,
              a,
              l = 0;
            do (o = r((a = e + (i - e) / 2), n, s) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
    },
    62720: (t, e, i) => {
      let n, r;
      i.d(e, { L: () => X });
      var s = i(60098),
        o = i(54542),
        a = i(12115),
        l = i(19827),
        u = i(69515);
      function h(t, e) {
        let i,
          n = () => {
            let { currentTime: n } = e,
              r = (null === n ? 0 : n.value) / 100;
            i !== r && t(r), (i = r);
          };
        return u.Gt.preUpdate(n, !0), () => (0, u.WG)(n);
      }
      var d = i(91116),
        c = i(69782),
        p = i(42198);
      let f = new WeakMap(),
        m = (t, e, i) => (n, r) =>
          r && r[0]
            ? r[0][t + "Size"]
            : (0, c.x)(n) && "getBBox" in n
            ? n.getBBox()[e]
            : n[i],
        g = m("inline", "width", "offsetWidth"),
        y = m("block", "height", "offsetHeight");
      function v({ target: t, borderBoxSize: e }) {
        f.get(t)?.forEach((i) => {
          i(t, {
            get width() {
              return g(t, e);
            },
            get height() {
              return y(t, e);
            },
          });
        });
      }
      function x(t) {
        t.forEach(v);
      }
      let b = new Set();
      var w = i(45818),
        P = i(62923);
      let S = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        T = () => ({ time: 0, x: S(), y: S() }),
        E = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function A(t, e, i, n) {
        let r = i[e],
          { length: s, position: o } = E[e],
          a = r.current,
          l = i.time;
        (r.current = t[`scroll${o}`]),
          (r.scrollLength = t[`scroll${s}`] - t[`client${s}`]),
          (r.offset.length = 0),
          (r.offset[0] = 0),
          (r.offset[1] = r.scrollLength),
          (r.progress = (0, w.q)(0, r.scrollLength, r.current));
        let u = n - l;
        r.velocity = u > 50 ? 0 : (0, P.f)(r.current - a, u);
      }
      var M = i(6775),
        j = i(71784),
        C = i(53678),
        O = i(27351);
      let k = { start: 0, center: 0.5, end: 1 };
      function V(t, e, i = 0) {
        let n = 0;
        if ((t in k && (t = k[t]), "string" == typeof t)) {
          let e = parseFloat(t);
          t.endsWith("px")
            ? (n = e)
            : t.endsWith("%")
            ? (t = e / 100)
            : t.endsWith("vw")
            ? (n = (e / 100) * document.documentElement.clientWidth)
            : t.endsWith("vh")
            ? (n = (e / 100) * document.documentElement.clientHeight)
            : (t = e);
        }
        return "number" == typeof t && (n = e * t), i + n;
      }
      let R = [0, 0],
        D = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        L = { x: 0, y: 0 },
        _ = new WeakMap(),
        I = new WeakMap(),
        F = new WeakMap(),
        B = (t) => (t === document.scrollingElement ? window : t);
      function N(t, { container: e = document.scrollingElement, ...i } = {}) {
        if (!e) return l.l;
        let s = F.get(e);
        s || ((s = new Set()), F.set(e, s));
        let o = (function (t, e, i, n = {}) {
          return {
            measure: (e) => {
              !(function (t, e = t, i) {
                if (((i.x.targetOffset = 0), (i.y.targetOffset = 0), e !== t)) {
                  let n = e;
                  for (; n && n !== t; )
                    (i.x.targetOffset += n.offsetLeft),
                      (i.y.targetOffset += n.offsetTop),
                      (n = n.offsetParent);
                }
                (i.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
                  (i.y.targetLength =
                    e === t ? e.scrollHeight : e.clientHeight),
                  (i.x.containerLength = t.clientWidth),
                  (i.y.containerLength = t.clientHeight);
              })(t, n.target, i),
                A(t, "x", i, e),
                A(t, "y", i, e),
                (i.time = e),
                (n.offset || n.target) &&
                  (function (t, e, i) {
                    let { offset: n = D.All } = i,
                      { target: r = t, axis: s = "y" } = i,
                      o = "y" === s ? "height" : "width",
                      a =
                        r !== t
                          ? (function (t, e) {
                              let i = { x: 0, y: 0 },
                                n = t;
                              for (; n && n !== e; )
                                if ((0, O.s)(n))
                                  (i.x += n.offsetLeft),
                                    (i.y += n.offsetTop),
                                    (n = n.offsetParent);
                                else if ("svg" === n.tagName) {
                                  let t = n.getBoundingClientRect(),
                                    e = (n =
                                      n.parentElement).getBoundingClientRect();
                                  (i.x += t.left - e.left),
                                    (i.y += t.top - e.top);
                                } else if (n instanceof SVGGraphicsElement) {
                                  let { x: t, y: e } = n.getBBox();
                                  (i.x += t), (i.y += e);
                                  let r = null,
                                    s = n.parentNode;
                                  for (; !r; )
                                    "svg" === s.tagName && (r = s),
                                      (s = n.parentNode);
                                  n = r;
                                } else break;
                              return i;
                            })(r, t)
                          : L,
                      l =
                        r === t
                          ? { width: t.scrollWidth, height: t.scrollHeight }
                          : "getBBox" in r && "svg" !== r.tagName
                          ? r.getBBox()
                          : { width: r.clientWidth, height: r.clientHeight },
                      u = { width: t.clientWidth, height: t.clientHeight };
                    e[s].offset.length = 0;
                    let h = !e[s].interpolate,
                      d = n.length;
                    for (let t = 0; t < d; t++) {
                      let i = (function (t, e, i, n) {
                        let r = Array.isArray(t) ? t : R,
                          s = 0,
                          o = 0;
                        return (
                          "number" == typeof t
                            ? (r = [t, t])
                            : "string" == typeof t &&
                              (r = (t = t.trim()).includes(" ")
                                ? t.split(" ")
                                : [t, k[t] ? t : "0"]),
                          (s = V(r[0], i, n)) - V(r[1], e)
                        );
                      })(n[t], u[o], l[o], a[s]);
                      h || i === e[s].interpolatorOffsets[t] || (h = !0),
                        (e[s].offset[t] = i);
                    }
                    h &&
                      ((e[s].interpolate = (0, M.G)(e[s].offset, (0, j.Z)(n), {
                        clamp: !1,
                      })),
                      (e[s].interpolatorOffsets = [...e[s].offset])),
                      (e[s].progress = (0, C.q)(
                        0,
                        1,
                        e[s].interpolate(e[s].current)
                      ));
                  })(t, i, n);
            },
            notify: () => e(i),
          };
        })(e, t, T(), i);
        if ((s.add(o), !_.has(e))) {
          let t = () => {
              for (let t of s) t.measure(u.uv.timestamp);
              u.Gt.preUpdate(i);
            },
            i = () => {
              for (let t of s) t.notify();
            },
            o = () => u.Gt.read(t);
          _.set(e, o);
          let a = B(e);
          window.addEventListener("resize", o, { passive: !0 }),
            e !== document.documentElement &&
              I.set(
                e,
                "function" == typeof e
                  ? (b.add(e),
                    r ||
                      ((r = () => {
                        let t = {
                          get width() {
                            return window.innerWidth;
                          },
                          get height() {
                            return window.innerHeight;
                          },
                        };
                        b.forEach((e) => e(t));
                      }),
                      window.addEventListener("resize", r)),
                    () => {
                      b.delete(e),
                        b.size ||
                          "function" != typeof r ||
                          (window.removeEventListener("resize", r),
                          (r = void 0));
                    })
                  : (function (t, e) {
                      n ||
                        ("undefined" != typeof ResizeObserver &&
                          (n = new ResizeObserver(x)));
                      let i = (0, p.K)(t);
                      return (
                        i.forEach((t) => {
                          let i = f.get(t);
                          i || ((i = new Set()), f.set(t, i)),
                            i.add(e),
                            n?.observe(t);
                        }),
                        () => {
                          i.forEach((t) => {
                            let i = f.get(t);
                            i?.delete(e), i?.size || n?.unobserve(t);
                          });
                        }
                      );
                    })(e, o)
              ),
            a.addEventListener("scroll", o, { passive: !0 }),
            o();
        }
        let a = _.get(e);
        return (
          u.Gt.read(a, !1, !0),
          () => {
            (0, u.WG)(a);
            let t = F.get(e);
            if (!t || (t.delete(o), t.size)) return;
            let i = _.get(e);
            _.delete(e),
              i &&
                (B(e).removeEventListener("scroll", i),
                I.get(e)?.(),
                window.removeEventListener("resize", i));
          }
        );
      }
      let U = new Map();
      function W({ source: t, container: e, ...i }) {
        let { axis: n } = i;
        t && (e = t);
        let r = U.get(e) ?? new Map();
        U.set(e, r);
        let s = i.target ?? "self",
          o = r.get(s) ?? {},
          a = n + (i.offset ?? []).join(",");
        return (
          o[a] ||
            (o[a] =
              !i.target && (0, d.J)()
                ? new ScrollTimeline({ source: e, axis: n })
                : (function (t) {
                    let e = { value: 0 },
                      i = N((i) => {
                        e.value = 100 * i[t.axis].progress;
                      }, t);
                    return { currentTime: e, cancel: i };
                  })({ container: e, ...i })),
          o[a]
        );
      }
      var z = i(82885),
        G = i(97494);
      function q(t, e) {
        (0, o.$)(
          !!(!e || e.current),
          `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let $ = () => ({
        scrollX: (0, s.OQ)(0),
        scrollY: (0, s.OQ)(0),
        scrollXProgress: (0, s.OQ)(0),
        scrollYProgress: (0, s.OQ)(0),
      });
      function X({ container: t, target: e, layoutEffect: i = !0, ...n } = {}) {
        let r = (0, z.M)($);
        return (
          (i ? G.E : a.useEffect)(
            () => (
              q("target", e),
              q("container", t),
              (function (
                t,
                {
                  axis: e = "y",
                  container: i = document.scrollingElement,
                  ...n
                } = {}
              ) {
                var r, s;
                if (!i) return l.l;
                let o = { axis: e, container: i, ...n };
                return "function" == typeof t
                  ? ((r = t),
                    (s = o),
                    2 === r.length
                      ? N((t) => {
                          r(t[s.axis].progress, t);
                        }, s)
                      : h(r, W(s)))
                  : (function (t, e) {
                      let i = W(e);
                      return t.attachTimeline({
                        timeline: e.target ? void 0 : i,
                        observe: (t) => (
                          t.pause(),
                          h((e) => {
                            t.time = t.duration * e;
                          }, i)
                        ),
                      });
                    })(t, o);
              })(
                (t, { x: e, y: i }) => {
                  r.scrollX.set(e.current),
                    r.scrollXProgress.set(e.progress),
                    r.scrollY.set(i.current),
                    r.scrollYProgress.set(i.progress);
                },
                {
                  ...n,
                  container: t?.current || void 0,
                  target: e?.current || void 0,
                }
              )
            ),
            [t, e, JSON.stringify(n.offset)]
          ),
          r
        );
      }
    },
    62923: (t, e, i) => {
      i.d(e, { f: () => n });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    63704: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = { layout: 0, mainThread: 0, waapi: 0 };
    },
    63894: (t, e, i) => {
      i.d(e, { q: () => n });
      class n {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
    },
    64054: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          bindSnapshot: function () {
            return o;
          },
          createAsyncLocalStorage: function () {
            return s;
          },
          createSnapshot: function () {
            return a;
          },
        });
      let i = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class n {
        disable() {
          throw i;
        }
        getStore() {}
        run() {
          throw i;
        }
        exit() {
          throw i;
        }
        enterWith() {
          throw i;
        }
        static bind(t) {
          return t;
        }
      }
      let r = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function s() {
        return r ? new r() : new n();
      }
      function o(t) {
        return r ? r.bind(t) : n.bind(t);
      }
      function a() {
        return r
          ? r.snapshot()
          : function (t, ...e) {
              return t(...e);
            };
      }
    },
    64803: (t, e, i) => {
      i.d(e, { S: () => n });
      let n = (t) => !!(t && t.getVelocity);
    },
    66766: (t, e, i) => {
      i.d(e, { default: () => r.a });
      var n = i(71469),
        r = i.n(n);
    },
    67357: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = i(95155),
        r = i(12115),
        s = i(62146);
      function o(t) {
        return { default: t && "default" in t ? t.default : t };
      }
      i(10255);
      let a = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        l = function (t) {
          let e = { ...a, ...t },
            i = (0, r.lazy)(() => e.loader().then(o)),
            l = e.loading;
          function u(t) {
            let o = l
                ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              a = !e.ssr || !!e.loading,
              u = a ? r.Suspense : r.Fragment,
              h = e.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [null, (0, n.jsx)(i, { ...t })],
                  })
                : (0, n.jsx)(s.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(i, { ...t }),
                  });
            return (0, n.jsx)(u, {
              ...(a ? { fallback: o } : {}),
              children: h,
            });
          }
          return (u.displayName = "LoadableComponent"), u;
        };
    },
    68589: (t, e, i) => {
      i.d(e, { D: () => n });
      let n = (t) => Array.isArray(t) && "number" == typeof t[0];
    },
    68972: (t, e, i) => {
      i.d(e, { B: () => n });
      let n = "undefined" != typeof window;
    },
    69243: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return v;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let n = i(88229),
        r = i(6966),
        s = i(95155),
        o = n._(i(47650)),
        a = r._(i(12115)),
        l = i(82830),
        u = i(42714),
        h = i(92374),
        d = new Map(),
        c = new Set(),
        p = (t) => {
          if (o.default.preinit)
            return void t.forEach((t) => {
              o.default.preinit(t, { as: "style" });
            });
          {
            let e = document.head;
            t.forEach((t) => {
              let i = document.createElement("link");
              (i.type = "text/css"),
                (i.rel = "stylesheet"),
                (i.href = t),
                e.appendChild(i);
            });
          }
        },
        f = (t) => {
          let {
              src: e,
              id: i,
              onLoad: n = () => {},
              onReady: r = null,
              dangerouslySetInnerHTML: s,
              children: o = "",
              strategy: a = "afterInteractive",
              onError: l,
              stylesheets: h,
            } = t,
            f = i || e;
          if (f && c.has(f)) return;
          if (d.has(e)) {
            c.add(f), d.get(e).then(n, l);
            return;
          }
          let m = () => {
              r && r(), c.add(f);
            },
            g = document.createElement("script"),
            y = new Promise((t, e) => {
              g.addEventListener("load", function (e) {
                t(), n && n.call(this, e), m();
              }),
                g.addEventListener("error", function (t) {
                  e(t);
                });
            }).catch(function (t) {
              l && l(t);
            });
          s
            ? ((g.innerHTML = s.__html || ""), m())
            : o
            ? ((g.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
              m())
            : e && ((g.src = e), d.set(e, y)),
            (0, u.setAttributesFromProps)(g, t),
            "worker" === a && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", a),
            h && p(h),
            document.body.appendChild(g);
        };
      function m(t) {
        let { strategy: e = "afterInteractive" } = t;
        "lazyOnload" === e
          ? window.addEventListener("load", () => {
              (0, h.requestIdleCallback)(() => f(t));
            })
          : f(t);
      }
      function g(t) {
        t.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((t) => {
            let e = t.id || t.getAttribute("src");
            c.add(e);
          });
      }
      function y(t) {
        let {
            id: e,
            src: i = "",
            onLoad: n = () => {},
            onReady: r = null,
            strategy: u = "afterInteractive",
            onError: d,
            stylesheets: p,
            ...m
          } = t,
          {
            updateScripts: g,
            scripts: y,
            getIsSsr: v,
            appDir: x,
            nonce: b,
          } = (0, a.useContext)(l.HeadManagerContext),
          w = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          let t = e || i;
          w.current || (r && t && c.has(t) && r(), (w.current = !0));
        }, [r, e, i]);
        let P = (0, a.useRef)(!1);
        if (
          ((0, a.useEffect)(() => {
            if (!P.current) {
              if ("afterInteractive" === u) f(t);
              else
                "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? (0, h.requestIdleCallback)(() => f(t))
                    : window.addEventListener("load", () => {
                        (0, h.requestIdleCallback)(() => f(t));
                      }));
              P.current = !0;
            }
          }, [t, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (g
              ? ((y[u] = (y[u] || []).concat([
                  { id: e, src: i, onLoad: n, onReady: r, onError: d, ...m },
                ])),
                g(y))
              : v && v()
              ? c.add(e || i)
              : v && !v() && f(t)),
          x)
        ) {
          if (
            (p &&
              p.forEach((t) => {
                o.default.preinit(t, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            if (!i)
              return (
                m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, s.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: e }]) +
                      ")",
                  },
                })
              );
            else
              return (
                o.default.preload(
                  i,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: b,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: b, crossOrigin: m.crossOrigin }
                ),
                (0, s.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([i, { ...m, id: e }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === u &&
            i &&
            o.default.preload(
              i,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: b,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: b, crossOrigin: m.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(y, "__nextScript", { value: !0 });
      let v = y;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    69515: (t, e, i) => {
      i.d(e, { Gt: () => r, PP: () => a, WG: () => s, uv: () => o });
      var n = i(19827);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(58437).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0
      );
    },
    69782: (t, e, i) => {
      i.d(e, { x: () => r });
      var n = i(6983);
      function r(t) {
        return (0, n.G)(t) && "ownerSVGElement" in t;
      }
    },
    69991: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          DecodeError: function () {
            return f;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return c;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return i;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          stringifyError: function () {
            return x;
          },
        });
      let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(t) {
        let e,
          i = !1;
        return function () {
          for (var n = arguments.length, r = Array(n), s = 0; s < n; s++)
            r[s] = arguments[s];
          return i || ((i = !0), (e = t(...r))), e;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (t) => r.test(t);
      function o() {
        let { protocol: t, hostname: e, port: i } = window.location;
        return t + "//" + e + (i ? ":" + i : "");
      }
      function a() {
        let { href: t } = window.location,
          e = o();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function d(t, e) {
        let i = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await d(e.Component, e.ctx) }
            : {};
        let n = await t.getInitialProps(e);
        if (i && u(i)) return n;
        if (!n)
          throw Object.defineProperty(
            Error(
              '"' +
                l(t) +
                '.getInitialProps()" should resolve to an object. But found "' +
                n +
                '" instead.'
            ),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 }
          );
        return n;
      }
      let c = "undefined" != typeof performance,
        p =
          c &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class f extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class y extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class v extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function x(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    70144: (t, e, i) => {
      i.d(e, { E: () => a });
      var n = i(56330),
        r = i(8467),
        s = i(82886);
      let o = {
        decay: n.B,
        inertia: n.B,
        tween: r.i,
        keyframes: r.i,
        spring: s.o,
      };
      function a(t) {
        "string" == typeof t.type && (t.type = o[t.type]);
      }
    },
    70901: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(88229)._(i(12115)).default.createContext(null);
    },
    71469: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = i(88229),
        r = i(38883),
        s = i(33063),
        o = n._(i(51193));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    71784: (t, e, i) => {
      i.d(e, { Z: () => s });
      var n = i(45818),
        r = i(33210);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, n.q)(0, e, s);
              t.push((0, r.k)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    73180: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "errorOnce", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = (t) => {};
    },
    73945: (t, e, i) => {
      i.d(e, { Y: () => r });
      var n = i(62923);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.f)(i - t(r), e - r);
      }
    },
    74261: (t, e, i) => {
      let n;
      i.d(e, { k: () => a });
      var r = i(23387),
        s = i(69515);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.uv.isProcessing || r.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    74436: (t, e, i) => {
      i.d(e, { k5: () => h });
      var n = i(12115),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = n.createContext && n.createContext(r),
        o = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                var n, r, s;
                (n = t),
                  (r = e),
                  (s = i[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(r)) in n
                    ? Object.defineProperty(n, r, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[r] = s);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function h(t) {
        return (e) =>
          n.createElement(
            d,
            a({ attr: u({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, i) =>
                  n.createElement(e.tag, u({ key: i }, e.attr), t(e.child))
                )
              );
            })(t.child)
          );
      }
      function d(t) {
        var e = (e) => {
          var i,
            { attr: r, size: s, title: l } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var i,
                n,
                r = (function (t, e) {
                  if (null == t) return {};
                  var i = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      i[n] = t[n];
                    }
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++)
                  (i = s[n]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (r[i] = t[i]);
              }
              return r;
            })(t, o),
            d = s || e.size || "1em";
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + " " : "") + t.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                r,
                h,
                {
                  className: i,
                  style: u(u({ color: t.color || e.color }, e.style), t.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && n.createElement("title", null, l),
              t.children
            )
          );
        };
        return void 0 !== s
          ? n.createElement(s.Consumer, null, (t) => e(t))
          : e(r);
      }
    },
    75100: (t, e) => {
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: n,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = n ? 40 * n : e,
          l = r ? 40 * r : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    75626: (t, e, i) => {
      i.d(e, { v: () => r });
      var n = i(56668);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.Kq)(this.subscriptions, t),
            () => (0, n.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n)
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    76778: (t, e, i) => {
      i.d(e, { X: () => r });
      let n = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, s, o = 1) {
        let a = t.filter(n),
          l = o < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : a.length - 1;
        return l && void 0 !== s ? s : a[l];
      }
    },
    78606: (t, e, i) => {
      i.d(e, { j: () => r, p: () => o });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    78859: (t, e) => {
      function i(t) {
        let e = {};
        for (let [i, n] of t.entries()) {
          let t = e[i];
          void 0 === t
            ? (e[i] = n)
            : Array.isArray(t)
            ? t.push(n)
            : (e[i] = [t, n]);
        }
        return e;
      }
      function n(t) {
        return "string" == typeof t
          ? t
          : ("number" != typeof t || isNaN(t)) && "boolean" != typeof t
          ? ""
          : String(t);
      }
      function r(t) {
        let e = new URLSearchParams();
        for (let [i, r] of Object.entries(t))
          if (Array.isArray(r)) for (let t of r) e.append(i, n(t));
          else e.set(i, n(r));
        return e;
      }
      function s(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        for (let e of i) {
          for (let i of e.keys()) t.delete(i);
          for (let [i, n] of e.entries()) t.append(i, n);
        }
        return t;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          assign: function () {
            return s;
          },
          searchParamsToUrlQuery: function () {
            return i;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
        });
    },
    80845: (t, e, i) => {
      i.d(e, { t: () => n });
      let n = (0, i(12115).createContext)(null);
    },
    82757: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          formatUrl: function () {
            return s;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return o;
          },
        });
      let n = i(6966)._(i(78859)),
        r = /https?|ftp|gopher|file/;
      function s(t) {
        let { auth: e, hostname: i } = t,
          s = t.protocol || "",
          o = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : i &&
              ((u = e + (~i.indexOf(":") ? "[" + i + "]" : i)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l)));
        let h = t.search || (l && "?" + l) || "";
        return (
          s && !s.endsWith(":") && (s += ":"),
          t.slashes || ((!s || r.test(s)) && !1 !== u)
            ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          h && "?" !== h[0] && (h = "?" + h),
          "" +
            s +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace("#", "%23")) +
            a
        );
      }
      let o = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(t) {
        return s(t);
      }
    },
    82885: (t, e, i) => {
      i.d(e, { M: () => r });
      var n = i(12115);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    82886: (t, e, i) => {
      i.d(e, { o: () => f });
      var n = i(53678),
        r = i(47215),
        s = i(47705),
        o = i(52458),
        a = i(73945);
      let l = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var u = i(54542);
      function h(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let d = ["duration", "bounce"],
        c = ["stiffness", "damping", "mass"];
      function p(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function f(t = l.visualDuration, e = l.bounce) {
        let i,
          m =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: g, restDelta: y } = m,
          v = m.keyframes[0],
          x = m.keyframes[m.keyframes.length - 1],
          b = { done: !1, value: v },
          {
            stiffness: w,
            damping: P,
            mass: S,
            duration: T,
            velocity: E,
            isResolvedFromDuration: A,
          } = (function (t) {
            let e = {
              velocity: l.velocity,
              stiffness: l.stiffness,
              damping: l.damping,
              mass: l.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!p(t, c) && p(t, d))
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  s = 2 * (0, n.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: l.mass, stiffness: r, damping: s };
              } else {
                let i = (function ({
                  duration: t = l.duration,
                  bounce: e = l.bounce,
                  velocity: i = l.velocity,
                  mass: s = l.mass,
                }) {
                  let o, a;
                  (0, u.$)(
                    t <= (0, r.f)(l.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let d = 1 - e;
                  (d = (0, n.q)(l.minDamping, l.maxDamping, d)),
                    (t = (0, n.q)(l.minDuration, l.maxDuration, (0, r.X)(t))),
                    d < 1
                      ? ((o = (e) => {
                          let n = e * d,
                            r = n * t;
                          return 0.001 - ((n - i) / h(e, d)) * Math.exp(-r);
                        }),
                        (a = (e) => {
                          let n = e * d * t,
                            r = Math.pow(d, 2) * Math.pow(e, 2) * t,
                            s = Math.exp(-n),
                            a = h(Math.pow(e, 2), d);
                          return (
                            ((n * i + i - r) *
                              s *
                              (-o(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((o = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (a = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let c = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(o, a, 5 / t);
                  if (((t = (0, r.f)(t)), isNaN(c)))
                    return {
                      stiffness: l.stiffness,
                      damping: l.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(c, 2) * s;
                    return {
                      stiffness: e,
                      damping: 2 * d * Math.sqrt(s * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: l.mass }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...m, velocity: -(0, r.X)(m.velocity || 0) }),
          M = E || 0,
          j = P / (2 * Math.sqrt(w * S)),
          C = x - v,
          O = (0, r.X)(Math.sqrt(w / S)),
          k = 5 > Math.abs(C);
        if (
          (g || (g = k ? l.restSpeed.granular : l.restSpeed.default),
          y || (y = k ? l.restDelta.granular : l.restDelta.default),
          j < 1)
        ) {
          let t = h(O, j);
          i = (e) =>
            x -
            Math.exp(-j * O * e) *
              (((M + j * O * C) / t) * Math.sin(t * e) + C * Math.cos(t * e));
        } else if (1 === j)
          i = (t) => x - Math.exp(-O * t) * (C + (M + O * C) * t);
        else {
          let t = O * Math.sqrt(j * j - 1);
          i = (e) => {
            let i = Math.exp(-j * O * e),
              n = Math.min(t * e, 300);
            return (
              x -
              (i * ((M + j * O * C) * Math.sinh(n) + t * C * Math.cosh(n))) / t
            );
          };
        }
        let V = {
          calculatedDuration: (A && T) || null,
          next: (t) => {
            let e = i(t);
            if (A) b.done = t >= T;
            else {
              let n = 0 === t ? M : 0;
              j < 1 && (n = 0 === t ? (0, r.f)(M) : (0, a.Y)(i, t, e));
              let s = Math.abs(x - e) <= y;
              b.done = Math.abs(n) <= g && s;
            }
            return (b.value = b.done ? x : e), b;
          },
          toString: () => {
            let t = Math.min((0, o.t)(V), o.Y),
              e = (0, s.K)((e) => V.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return V;
      }
      f.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let n = i({ ...t, keyframes: [0, e] }),
            s = Math.min((0, o.t)(n), o.Y);
          return {
            type: "keyframes",
            ease: (t) => n.next(s * t).value / e,
            duration: (0, r.X)(s),
          };
        })(t, 100, f);
        return (
          (t.ease = e.ease),
          (t.duration = (0, r.f)(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
    },
    85029: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = i(12115),
        r = n.useLayoutEffect,
        s = n.useEffect;
      function o(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function o() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(r, t));
          }
        }
        return (
          r(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          r(
            () => (
              e && (e._pendingUpdate = o),
              () => {
                e && (e._pendingUpdate = o);
              }
            )
          ),
          s(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    85744: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        });
      let n = i(17828);
    },
    86752: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(88229)._(i(12115)),
        r = i(95840),
        s = n.default.createContext(r.imageConfigDefault);
    },
    90869: (t, e, i) => {
      i.d(e, { L: () => n });
      let n = (0, i(12115).createContext)({});
    },
    91116: (t, e, i) => {
      i.d(e, { J: () => n });
      let n = (0, i(41917).p)(() => void 0 !== window.ScrollTimeline);
    },
    91765: (t, e, i) => {
      i.d(e, { V: () => n });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    92374: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return i;
          },
        });
      let i =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    92664: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(69991),
        r = i(87102);
      function s(t) {
        if (!(0, n.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, n.getLocationOrigin)(),
            i = new URL(t, e);
          return i.origin === e && (0, r.hasBasePath)(i.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    95840: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    97494: (t, e, i) => {
      i.d(e, { E: () => r });
      var n = i(12115);
      let r = i(68972).B ? n.useLayoutEffect : n.useEffect;
    },
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4370],
  {
    8314: (e, t, n) => {
      var r = n(44134).Buffer;
      let a = n(96236),
        i = n(59828),
        s = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, s = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (s) {
              let u = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : a.keccak(this.encodeData(t, o, n, s)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", a.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = r.from(o, "utf8")),
                    ["bytes32", a.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    r = o.map((t) => u(e, n, t));
                  return [
                    "bytes32",
                    a.keccak(
                      i.rawEncode(
                        r.map(([e]) => e),
                        r.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let r of n[e]) {
                let [e, n] = u(r.name, r.type, t[r.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let i of n[e]) {
                let e = t[i.name];
                if (void 0 !== e)
                  if ("bytes" === i.type)
                    o.push("bytes32"), (e = a.keccak(e)), c.push(e);
                  else if ("string" === i.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = r.from(e, "utf8")),
                      (e = a.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[i.type])
                    o.push("bytes32"),
                      (e = a.keccak(this.encodeData(i.type, e, n, s))),
                      c.push(e);
                  else if (i.type.lastIndexOf("]") === i.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(i.type), c.push(e);
              }
            return i.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              r = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let a of (r = [e].concat(r.sort()))) {
              if (!t[a]) throw Error("No type definition specified: " + a);
              n +=
                a +
                "(" +
                t[a].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let r of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(r.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, r = !0) {
            return a.keccak(this.encodeData(e, t, n, r));
          },
          hashType(e, t) {
            return a.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in s.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              i = [r.from("1901", "hex")];
            return (
              i.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                i.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              a.keccak(r.concat(i))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: s,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? a.toBuffer(e.value) : e.value;
              }),
              r = e.map(function (e) {
                return e.type;
              }),
              s = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return i.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                i.soliditySHA3(Array(e.length).fill("string"), s),
                i.soliditySHA3(r, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    19039: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.add =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
          t.split =
          t.fromBig =
            void 0);
      let n = BigInt(0x100000000 - 1),
        r = BigInt(32);
      function a(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> r) & n) }
          : { h: 0 | Number((e >> r) & n), l: 0 | Number(e & n) };
      }
      function i(e, t = !1) {
        let n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: s, l: o } = a(e[i], t);
          [n[i], r[i]] = [s, o];
        }
        return [n, r];
      }
      (t.fromBig = a), (t.split = i);
      let s = (e, t) => (BigInt(e >>> 0) << r) | BigInt(t >>> 0);
      t.toBig = s;
      let o = (e, t, n) => e >>> n;
      t.shrSH = o;
      let c = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = c;
      let u = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = u;
      let l = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = l;
      let d = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = d;
      let f = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = f;
      let p = (e, t) => t;
      t.rotr32H = p;
      let h = (e, t) => e;
      t.rotr32L = h;
      let m = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = m;
      let y = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = y;
      let b = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = b;
      let g = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function w(e, t, n, r) {
        let a = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((a / 0x100000000) | 0)) | 0, l: 0 | a };
      }
      (t.rotlBL = g), (t.add = w);
      let v = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = v;
      let _ = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0;
      t.add3H = _;
      let x = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
      t.add4L = x;
      let k = (e, t, n, r, a) => (t + n + r + a + ((e / 0x100000000) | 0)) | 0;
      t.add4H = k;
      let E = (e, t, n, r, a) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (a >>> 0);
      t.add5L = E;
      let A = (e, t, n, r, a, i) =>
        (t + n + r + a + i + ((e / 0x100000000) | 0)) | 0;
      (t.add5H = A),
        (t.default = {
          fromBig: a,
          split: i,
          toBig: s,
          shrSH: o,
          shrSL: c,
          rotrSH: u,
          rotrSL: l,
          rotrBH: d,
          rotrBL: f,
          rotr32H: p,
          rotr32L: h,
          rotlSH: m,
          rotlSL: y,
          rotlBH: b,
          rotlBL: g,
          add: w,
          add3L: v,
          add3H: _,
          add4L: x,
          add4H: k,
          add5H: A,
          add5L: E,
        });
    },
    26952: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    50755: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          useCallback: () => A,
          useContext: () => S,
          useDebugValue: () => I,
          useEffect: () => v,
          useErrorBoundary: () => O,
          useId: () => P,
          useImperativeHandle: () => k,
          useLayoutEffect: () => _,
          useMemo: () => E,
          useReducer: () => w,
          useRef: () => x,
          useState: () => g,
        });
      var r,
        a,
        i,
        s,
        o = n(66117),
        c = 0,
        u = [],
        l = o.options,
        d = l.__b,
        f = l.__r,
        p = l.diffed,
        h = l.__c,
        m = l.unmount,
        y = l.__;
      function b(e, t) {
        l.__h && l.__h(a, e, c || t), (c = 0);
        var n = a.__H || (a.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function g(e) {
        return (c = 1), w(N, e);
      }
      function w(e, t, n) {
        var i = b(r++, 2);
        if (
          ((i.t = e),
          !i.__c &&
            ((i.__ = [
              n ? n(t) : N(void 0, t),
              function (e) {
                var t = i.__N ? i.__N[0] : i.__[0],
                  n = i.t(t, e);
                t !== n && ((i.__N = [n, i.__[1]]), i.__c.setState({}));
              },
            ]),
            (i.__c = a),
            !a.u))
        ) {
          var s = function (e, t, n) {
            if (!i.__c.__H) return !0;
            var r = i.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var a = !1;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                }
              }),
              !(!a && i.__c.props === e) && (!o || o.call(this, e, t, n))
            );
          };
          a.u = !0;
          var o = a.shouldComponentUpdate,
            c = a.componentWillUpdate;
          (a.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var r = o;
              (o = void 0), s(e, t, n), (o = r);
            }
            c && c.call(this, e, t, n);
          }),
            (a.shouldComponentUpdate = s);
        }
        return i.__N || i.__;
      }
      function v(e, t) {
        var n = b(r++, 3);
        !l.__s && L(n.__H, t) && ((n.__ = e), (n.i = t), a.__H.__h.push(n));
      }
      function _(e, t) {
        var n = b(r++, 4);
        !l.__s && L(n.__H, t) && ((n.__ = e), (n.i = t), a.__h.push(n));
      }
      function x(e) {
        return (
          (c = 5),
          E(function () {
            return { current: e };
          }, [])
        );
      }
      function k(e, t, n) {
        (c = 6),
          _(
            function () {
              return "function" == typeof e
                ? (e(t()),
                  function () {
                    return e(null);
                  })
                : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
            },
            null == n ? n : n.concat(e)
          );
      }
      function E(e, t) {
        var n = b(r++, 7);
        return L(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
      }
      function A(e, t) {
        return (
          (c = 8),
          E(function () {
            return e;
          }, t)
        );
      }
      function S(e) {
        var t = a.context[e.__c],
          n = b(r++, 9);
        return (
          (n.c = e),
          t ? (null == n.__ && ((n.__ = !0), t.sub(a)), t.props.value) : e.__
        );
      }
      function I(e, t) {
        l.useDebugValue && l.useDebugValue(t ? t(e) : e);
      }
      function O(e) {
        var t = b(r++, 10),
          n = g();
        return (
          (t.__ = e),
          a.componentDidCatch ||
            (a.componentDidCatch = function (e, r) {
              t.__ && t.__(e, r), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function P() {
        var e = b(r++, 11);
        if (!e.__) {
          for (var t = a.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
      }
      function C() {
        for (var e; (e = u.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(j), e.__H.__h.forEach(M), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), l.__e(t, e.__v);
            }
      }
      (l.__b = function (e) {
        (a = null), d && d(e);
      }),
        (l.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), y && y(e, t);
        }),
        (l.__r = function (e) {
          f && f(e), (r = 0);
          var t = (a = e.__c).__H;
          t &&
            (i === a
              ? ((t.__h = []),
                (a.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                }))
              : (t.__h.forEach(j), t.__h.forEach(M), (t.__h = []), (r = 0))),
            (i = a);
        }),
        (l.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== u.push(t) && s === l.requestAnimationFrame) ||
                (
                  (s = l.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r),
                          T && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      r = setTimeout(n, 100);
                    T && (t = requestAnimationFrame(n));
                  }
                )(C)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i), (e.i = void 0);
            })),
            (i = a = null);
        }),
        (l.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(j),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || M(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                l.__e(n, e.__v);
            }
          }),
            h && h(e, t);
        }),
        (l.unmount = function (e) {
          m && m(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                j(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && l.__e(t, n.__v));
        });
      var T = "function" == typeof requestAnimationFrame;
      function j(e) {
        var t = a,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (a = t);
      }
      function M(e) {
        var t = a;
        (e.__c = e.__()), (a = t);
      }
      function L(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function N(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    59828: (e, t, n) => {
      var r = n(44134).Buffer;
      let a = n(96236);
      function i(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        else if ("fixed" === e) return "fixed128x128";
        else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function s(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function u(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function l(e, t) {
        if ("address" === e) return l("uint160", u(t));
        if ("bool" === e) return l("uint8", +!!t);
        if ("string" === e) return l("bytes", new r(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (f in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(l(e, t[f]));
          if ("dynamic" === n) {
            var n,
              i,
              d,
              f,
              p,
              h = l("uint256", t.length);
            d.unshift(h);
          }
          return r.concat(d);
        } else if ("bytes" === e)
          return (
            (t = new r(t)),
            (d = r.concat([l("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = r.concat([d, a.zeros(32 - (t.length % 32))])),
            d
          );
        else if (e.startsWith("bytes")) {
          if ((n = s(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return a.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = s(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          i = u(t);
          let r = a.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + r);
          if (i < 0) throw Error("Supplied uint is negative");
          return a.bufferBEFromBigInt(i, 32);
        } else if (e.startsWith("int")) {
          if ((n = s(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          i = u(t);
          let r = a.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + r);
          let o = a.twosFromBigInt(i, 256);
          return a.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (i = u(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return l("uint256", i * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), l("int256", u(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], l = 0; l < e.length; l++) {
          var d = i(e[l]),
            f = t[l];
          if ("bytes" === d) c.push(f);
          else if ("string" === d) c.push(new r(f, "utf8"));
          else if ("bool" === d) c.push(new r(f ? "01" : "00", "hex"));
          else if ("address" === d) c.push(a.setLength(f, 20));
          else if (d.startsWith("bytes")) {
            if ((n = s(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(a.setLengthRight(f, n));
          } else if (d.startsWith("uint")) {
            if ((n = s(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = u(f);
            let e = a.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(a.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = s(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = u(f);
            let e = a.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = a.twosFromBigInt(o, n);
            c.push(a.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return r.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            a = [],
            s = 32 * e.length;
          for (var o in e) {
            var u = i(e[o]),
              d = l(u, t[o]);
            "string" === u || "bytes" === u || "dynamic" === c(u)
              ? (n.push(l("uint256", s)), a.push(d), (s += d.length))
              : n.push(d);
          }
          return r.concat(n.concat(a));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return a.keccak(d(e, t));
        },
      };
    },
    64582: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes =
          t.wrapXOFConstructorWithOpts =
          t.wrapConstructorWithOpts =
          t.wrapConstructor =
          t.checkOpts =
          t.Hash =
          t.concatBytes =
          t.toBytes =
          t.utf8ToBytes =
          t.asyncLoop =
          t.nextTick =
          t.hexToBytes =
          t.bytesToHex =
          t.byteSwap32 =
          t.byteSwapIfBE =
          t.byteSwap =
          t.isLE =
          t.rotl =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
          t.isBytes =
            void 0);
      let r = n(26952),
        a = n(88612);
      (t.isBytes = function (e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }),
        (t.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
        (t.u32 = (e) =>
          new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          )),
        (t.createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (t.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
        (t.rotl = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0)),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
        (t.byteSwap = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => (0, t.byteSwap)(e)),
        (t.byteSwap32 = function (e) {
          for (let n = 0; n < e.length; n++) e[n] = (0, t.byteSwap)(e[n]);
        });
      let i = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      t.bytesToHex = function (e) {
        (0, a.bytes)(e);
        let t = "";
        for (let n = 0; n < e.length; n++) t += i[e[n]];
        return t;
      };
      let s = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function o(e) {
        return e >= s._0 && e <= s._9
          ? e - s._0
          : e >= s._A && e <= s._F
          ? e - (s._A - 10)
          : e >= s._a && e <= s._f
          ? e - (s._a - 10)
          : void 0;
      }
      async function c(e, n, r) {
        let a = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          let e = Date.now() - a;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (a += e));
        }
      }
      function u(e) {
        if ("string" != typeof e)
          throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function l(e) {
        return "string" == typeof e && (e = u(e)), (0, a.bytes)(e), e;
      }
      (t.hexToBytes = function (e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + t
          );
        let r = new Uint8Array(n);
        for (let t = 0, a = 0; t < n; t++, a += 2) {
          let n = o(e.charCodeAt(a)),
            i = o(e.charCodeAt(a + 1));
          if (void 0 === n || void 0 === i)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[a] + e[a + 1]) +
                '" at index ' +
                a
            );
          r[t] = 16 * n + i;
        }
        return r;
      }),
        (t.nextTick = async () => {}),
        (t.asyncLoop = c),
        (t.utf8ToBytes = u),
        (t.toBytes = l),
        (t.concatBytes = function (...e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            (0, a.bytes)(r), (t += r.length);
          }
          let n = new Uint8Array(t);
          for (let t = 0, r = 0; t < e.length; t++) {
            let a = e[t];
            n.set(a, r), (r += a.length);
          }
          return n;
        });
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      t.Hash = d;
      let f = {}.toString;
      (t.checkOpts = function (e, t) {
        if (void 0 !== t && "[object Object]" !== f.call(t))
          throw Error("Options should be object or undefined");
        return Object.assign(e, t);
      }),
        (t.wrapConstructor = function (e) {
          let t = (t) => e().update(l(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(l(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          let t = (t, n) => e(n).update(l(t)).digest(),
            n = e({});
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        }),
        (t.randomBytes = function (e = 32) {
          if (r.crypto && "function" == typeof r.crypto.getRandomValues)
            return r.crypto.getRandomValues(new Uint8Array(e));
          throw Error("crypto.getRandomValues must be defined");
        });
    },
    66117: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          Component: () => A,
          Fragment: () => E,
          cloneElement: () => R,
          createContext: () => q,
          createElement: () => _,
          createRef: () => k,
          h: () => _,
          hydrate: () => U,
          isValidElement: () => s,
          options: () => a,
          render: () => B,
          toChildArray: () =>
            function e(t, n) {
              return (
                (n = n || []),
                null == t ||
                  "boolean" == typeof t ||
                  (g(t)
                    ? t.some(function (t) {
                        e(t, n);
                      })
                    : n.push(t)),
                n
              );
            },
        });
      var r,
        a,
        i,
        s,
        o,
        c,
        u,
        l,
        d,
        f,
        p,
        h,
        m = {},
        y = [],
        b = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        g = Array.isArray;
      function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function v(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function _(e, t, n) {
        var a,
          i,
          s,
          o = {};
        for (s in t)
          "key" == s ? (a = t[s]) : "ref" == s ? (i = t[s]) : (o[s] = t[s]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (s in e.defaultProps)
            void 0 === o[s] && (o[s] = e.defaultProps[s]);
        return x(e, o, a, i, null);
      }
      function x(e, t, n, r, s) {
        var o = {
          type: e,
          props: t,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == s ? ++i : s,
          __i: -1,
          __u: 0,
        };
        return null == s && null != a.vnode && a.vnode(o), o;
      }
      function k() {
        return { current: null };
      }
      function E(e) {
        return e.children;
      }
      function A(e, t) {
        (this.props = e), (this.context = t);
      }
      function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? S(e) : null;
      }
      function I(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !O.__r++) ||
          c !== a.debounceRendering) &&
          ((c = a.debounceRendering) || u)(O);
      }
      function O() {
        var e, t, n, r, i, s, c, u;
        for (o.sort(l); (e = o.shift()); )
          e.__d &&
            ((t = o.length),
            (r = void 0),
            (s = (i = (n = e).__v).__e),
            (c = []),
            (u = []),
            n.__P &&
              (((r = w({}, i)).__v = i.__v + 1),
              a.vnode && a.vnode(r),
              M(
                n.__P,
                r,
                i,
                n.__n,
                n.__P.namespaceURI,
                32 & i.__u ? [s] : null,
                c,
                null == s ? S(i) : s,
                !!(32 & i.__u),
                u
              ),
              (r.__v = i.__v),
              (r.__.__k[r.__i] = r),
              L(c, r, u),
              r.__e != s &&
                (function e(t) {
                  var n, r;
                  if (null != (t = t.__) && null != t.__c) {
                    for (
                      t.__e = t.__c.base = null, n = 0;
                      n < t.__k.length;
                      n++
                    )
                      if (null != (r = t.__k[n]) && null != r.__e) {
                        t.__e = t.__c.base = r.__e;
                        break;
                      }
                    return e(t);
                  }
                })(r)),
            o.length > t && o.sort(l));
        O.__r = 0;
      }
      function P(e, t, n, r, i, s, o, c, u, l, d) {
        var f,
          p,
          h,
          b,
          w,
          _ = (r && r.__k) || y,
          k = t.length;
        for (
          n.__d = u,
            (function (e, t, n) {
              var r,
                i,
                s,
                o,
                c,
                u = t.length,
                l = n.length,
                d = l,
                f = 0;
              for (e.__k = [], r = 0; r < u; r++)
                null != (i = t[r]) &&
                "boolean" != typeof i &&
                "function" != typeof i
                  ? ((o = r + f),
                    ((i = e.__k[r] =
                      "string" == typeof i ||
                      "number" == typeof i ||
                      "bigint" == typeof i ||
                      i.constructor == String
                        ? x(null, i, null, null, null)
                        : g(i)
                        ? x(E, { children: i }, null, null, null)
                        : void 0 === i.constructor && i.__b > 0
                        ? x(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                        : i).__ = e),
                    (i.__b = e.__b + 1),
                    (s = null),
                    -1 !==
                      (c = i.__i =
                        (function (e, t, n, r) {
                          var a = e.key,
                            i = e.type,
                            s = n - 1,
                            o = n + 1,
                            c = t[n];
                          if (
                            null === c ||
                            (c &&
                              a == c.key &&
                              i === c.type &&
                              0 == (131072 & c.__u))
                          )
                            return n;
                          if (r > +(null != c && 0 == (131072 & c.__u)))
                            for (; s >= 0 || o < t.length; ) {
                              if (s >= 0) {
                                if (
                                  (c = t[s]) &&
                                  0 == (131072 & c.__u) &&
                                  a == c.key &&
                                  i === c.type
                                )
                                  return s;
                                s--;
                              }
                              if (o < t.length) {
                                if (
                                  (c = t[o]) &&
                                  0 == (131072 & c.__u) &&
                                  a == c.key &&
                                  i === c.type
                                )
                                  return o;
                                o++;
                              }
                            }
                          return -1;
                        })(i, n, o, d)) &&
                      (d--, (s = n[c]) && (s.__u |= 131072)),
                    null == s || null === s.__v
                      ? (-1 == c && f--,
                        "function" != typeof i.type && (i.__u |= 65536))
                      : c !== o &&
                        (c == o - 1
                          ? f--
                          : c == o + 1
                          ? f++
                          : (c > o ? f-- : f++, (i.__u |= 65536))))
                  : (i = e.__k[r] = null);
              if (d)
                for (r = 0; r < l; r++)
                  null != (s = n[r]) &&
                    0 == (131072 & s.__u) &&
                    (s.__e == e.__d && (e.__d = S(s)),
                    (function e(t, n, r) {
                      var i, s;
                      if (
                        (a.unmount && a.unmount(t),
                        (i = t.ref) &&
                          ((i.current && i.current !== t.__e) || N(i, null, n)),
                        null != (i = t.__c))
                      ) {
                        if (i.componentWillUnmount)
                          try {
                            i.componentWillUnmount();
                          } catch (e) {
                            a.__e(e, n);
                          }
                        i.base = i.__P = null;
                      }
                      if ((i = t.__k))
                        for (s = 0; s < i.length; s++)
                          i[s] && e(i[s], n, r || "function" != typeof t.type);
                      r || v(t.__e), (t.__c = t.__ = t.__e = t.__d = void 0);
                    })(s, s));
            })(n, t, _),
            u = n.__d,
            f = 0;
          f < k;
          f++
        )
          null != (h = n.__k[f]) &&
            ((p = -1 === h.__i ? m : _[h.__i] || m),
            (h.__i = f),
            M(e, h, p, i, s, o, c, u, l, d),
            (b = h.__e),
            h.ref &&
              p.ref != h.ref &&
              (p.ref && N(p.ref, null, h), d.push(h.ref, h.__c || b, h)),
            null == w && null != b && (w = b),
            65536 & h.__u || p.__k === h.__k
              ? (u = (function e(t, n, r) {
                  var a, i;
                  if ("function" == typeof t.type) {
                    for (a = t.__k, i = 0; a && i < a.length; i++)
                      a[i] && ((a[i].__ = t), (n = e(a[i], n, r)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !r.contains(n) && (n = S(t)),
                    r.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 === n.nodeType);
                  return n;
                })(h, u, e))
              : "function" == typeof h.type && void 0 !== h.__d
              ? (u = h.__d)
              : b && (u = b.nextSibling),
            (h.__d = void 0),
            (h.__u &= -196609));
        (n.__d = u), (n.__e = w);
      }
      function C(e, t, n) {
        "-" === t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || b.test(t)
                ? n
                : n + "px");
      }
      function T(e, t, n, r, a) {
        var i;
        e: if ("style" === t)
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (t in r) (n && t in n) || C(e.style, t, "");
            if (n) for (t in n) (r && n[t] === r[t]) || C(e.style, t, n[t]);
          }
        else if ("o" === t[0] && "n" === t[1])
          (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + i] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = d), e.addEventListener(t, i ? p : f, i))
              : e.removeEventListener(t, i ? p : f, i);
        else {
          if ("http://www.w3.org/2000/svg" == a)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function j(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = d++;
            else if (t.t < n.u) return;
            return n(a.event ? a.event(t) : t);
          }
        };
      }
      function M(e, t, n, i, s, o, c, u, l, d) {
        var f,
          p,
          h,
          y,
          b,
          _,
          x,
          k,
          I,
          O,
          C,
          j,
          M,
          L,
          N,
          B,
          U = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((l = !!(32 & n.__u)), (o = [(u = t.__e = n.__e)])),
          (f = a.__b) && f(t);
        e: if ("function" == typeof U)
          try {
            if (
              ((k = t.props),
              (I = "prototype" in U && U.prototype.render),
              (O = (f = U.contextType) && i[f.__c]),
              (C = f ? (O ? O.props.value : f.__) : i),
              n.__c
                ? (x = (p = t.__c = n.__c).__ = p.__E)
                : (I
                    ? (t.__c = p = new U(k, C))
                    : ((t.__c = p = new A(k, C)),
                      (p.constructor = U),
                      (p.render = D)),
                  O && O.sub(p),
                  (p.props = k),
                  p.state || (p.state = {}),
                  (p.context = C),
                  (p.__n = i),
                  (h = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              I && null == p.__s && (p.__s = p.state),
              I &&
                null != U.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = w({}, p.__s)),
                w(p.__s, U.getDerivedStateFromProps(k, p.__s))),
              (y = p.props),
              (b = p.state),
              (p.__v = t),
              h)
            )
              I &&
                null == U.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                I &&
                  null != p.componentDidMount &&
                  p.__h.push(p.componentDidMount);
            else {
              if (
                (I &&
                  null == U.getDerivedStateFromProps &&
                  k !== y &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(k, C),
                !p.__e &&
                  ((null != p.shouldComponentUpdate &&
                    !1 === p.shouldComponentUpdate(k, p.__s, C)) ||
                    t.__v === n.__v))
              ) {
                for (
                  t.__v !== n.__v &&
                    ((p.props = k), (p.state = p.__s), (p.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    j = 0;
                  j < p._sb.length;
                  j++
                )
                  p.__h.push(p._sb[j]);
                (p._sb = []), p.__h.length && c.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(k, p.__s, C),
                I &&
                  null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(y, b, _);
                  });
            }
            if (
              ((p.context = C),
              (p.props = k),
              (p.__P = e),
              (p.__e = !1),
              (M = a.__r),
              (L = 0),
              I)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  M && M(t),
                  f = p.render(p.props, p.state, p.context),
                  N = 0;
                N < p._sb.length;
                N++
              )
                p.__h.push(p._sb[N]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  M && M(t),
                  (f = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++L < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (i = w(w({}, i), p.getChildContext())),
              I &&
                !h &&
                null != p.getSnapshotBeforeUpdate &&
                (_ = p.getSnapshotBeforeUpdate(y, b)),
              P(
                e,
                g(
                  (B =
                    null != f && f.type === E && null == f.key
                      ? f.props.children
                      : f)
                )
                  ? B
                  : [B],
                t,
                n,
                i,
                s,
                o,
                c,
                u,
                l,
                d
              ),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && c.push(p),
              x && (p.__E = p.__ = null);
          } catch (e) {
            if (((t.__v = null), l || null != o)) {
              for (
                t.__u |= l ? 160 : 32;
                u && 8 === u.nodeType && u.nextSibling;

              )
                u = u.nextSibling;
              (o[o.indexOf(u)] = null), (t.__e = u);
            } else (t.__e = n.__e), (t.__k = n.__k);
            a.__e(e, t, n);
          }
        else
          null == o && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = (function (e, t, n, i, s, o, c, u, l) {
                var d,
                  f,
                  p,
                  h,
                  y,
                  b,
                  w,
                  _ = n.props,
                  x = t.props,
                  k = t.type;
                if (
                  ("svg" === k
                    ? (s = "http://www.w3.org/2000/svg")
                    : "math" === k
                    ? (s = "http://www.w3.org/1998/Math/MathML")
                    : s || (s = "http://www.w3.org/1999/xhtml"),
                  null != o)
                ) {
                  for (d = 0; d < o.length; d++)
                    if (
                      (y = o[d]) &&
                      "setAttribute" in y == !!k &&
                      (k ? y.localName === k : 3 === y.nodeType)
                    ) {
                      (e = y), (o[d] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === k) return document.createTextNode(x);
                  (e = document.createElementNS(s, k, x.is && x)),
                    u && (a.__m && a.__m(t, o), (u = !1)),
                    (o = null);
                }
                if (null === k) _ === x || (u && e.data === x) || (e.data = x);
                else {
                  if (
                    ((o = o && r.call(e.childNodes)),
                    (_ = n.props || m),
                    !u && null != o)
                  )
                    for (_ = {}, d = 0; d < e.attributes.length; d++)
                      _[(y = e.attributes[d]).name] = y.value;
                  for (d in _)
                    if (((y = _[d]), "children" == d));
                    else if ("dangerouslySetInnerHTML" == d) p = y;
                    else if (!(d in x)) {
                      if (
                        ("value" == d && "defaultValue" in x) ||
                        ("checked" == d && "defaultChecked" in x)
                      )
                        continue;
                      T(e, d, null, y, s);
                    }
                  for (d in x)
                    (y = x[d]),
                      "children" == d
                        ? (h = y)
                        : "dangerouslySetInnerHTML" == d
                        ? (f = y)
                        : "value" == d
                        ? (b = y)
                        : "checked" == d
                        ? (w = y)
                        : (u && "function" != typeof y) ||
                          _[d] === y ||
                          T(e, d, y, _[d], s);
                  if (f)
                    u ||
                      (p &&
                        (f.__html === p.__html || f.__html === e.innerHTML)) ||
                      (e.innerHTML = f.__html),
                      (t.__k = []);
                  else if (
                    (p && (e.innerHTML = ""),
                    P(
                      e,
                      g(h) ? h : [h],
                      t,
                      n,
                      i,
                      "foreignObject" === k
                        ? "http://www.w3.org/1999/xhtml"
                        : s,
                      o,
                      c,
                      o ? o[0] : n.__k && S(n, 0),
                      u,
                      l
                    ),
                    null != o)
                  )
                    for (d = o.length; d--; ) v(o[d]);
                  u ||
                    ((d = "value"),
                    "progress" === k && null == b
                      ? e.removeAttribute("value")
                      : void 0 === b ||
                        (b === e[d] &&
                          ("progress" !== k || b) &&
                          ("option" !== k || b === _[d])) ||
                        T(e, d, b, _[d], s),
                    (d = "checked"),
                    void 0 !== w && w !== e[d] && T(e, d, w, _[d], s));
                }
                return e;
              })(n.__e, t, n, i, s, o, c, l, d));
        (f = a.diffed) && f(t);
      }
      function L(e, t, n) {
        t.__d = void 0;
        for (var r = 0; r < n.length; r++) N(n[r], n[++r], n[++r]);
        a.__c && a.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              a.__e(e, t.__v);
            }
          });
      }
      function N(e, t, n) {
        try {
          if ("function" == typeof e) {
            var r = "function" == typeof e.__u;
            r && e.__u(), (r && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          a.__e(e, n);
        }
      }
      function D(e, t, n) {
        return this.constructor(e, n);
      }
      function B(e, t, n) {
        var i, s, o, c;
        a.__ && a.__(e, t),
          (s = (i = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (o = []),
          (c = []),
          M(
            t,
            (e = ((!i && n) || t).__k = _(E, null, [e])),
            s || m,
            m,
            t.namespaceURI,
            !i && n
              ? [n]
              : s
              ? null
              : t.firstChild
              ? r.call(t.childNodes)
              : null,
            o,
            !i && n ? n : s ? s.__e : t.firstChild,
            i,
            c
          ),
          L(o, e, c);
      }
      function U(e, t) {
        B(e, t, U);
      }
      function R(e, t, n) {
        var a,
          i,
          s,
          o,
          c = w({}, e.props);
        for (s in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          "key" == s
            ? (a = t[s])
            : "ref" == s
            ? (i = t[s])
            : (c[s] = void 0 === t[s] && void 0 !== o ? o[s] : t[s]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          x(e.type, c, a || e.key, i || e.ref, null)
        );
      }
      function q(e, t) {
        var n = {
          __c: (t = "__cC" + h++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[t] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.componentWillUnmount = function () {
                  n = null;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    n.some(function (e) {
                      (e.__e = !0), I(e);
                    });
                }),
                (this.sub = function (e) {
                  n.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    n && n.splice(n.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (r = y.slice),
        (a = {
          __e: function (e, t, n, r) {
            for (var a, i, s; (t = t.__); )
              if ((a = t.__c) && !a.__)
                try {
                  if (
                    ((i = a.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (a.setState(i.getDerivedStateFromError(e)), (s = a.__d)),
                    null != a.componentDidCatch &&
                      (a.componentDidCatch(e, r || {}), (s = a.__d)),
                    s)
                  )
                    return (a.__E = a);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (i = 0),
        (s = function (e) {
          return null != e && null == e.constructor;
        }),
        (A.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = w({}, this.state))),
            "function" == typeof e && (e = e(w({}, n), this.props)),
            e && w(n, e),
            null != e && this.__v && (t && this._sb.push(t), I(this));
        }),
        (A.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), I(this));
        }),
        (A.prototype.render = E),
        (o = []),
        (u =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (l = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (O.__r = 0),
        (d = 0),
        (f = j(!1)),
        (p = j(!0)),
        (h = 0);
    },
    84370: (e, t, n) => {
      "use strict";
      n.d(t, { createCoinbaseWalletSDK: () => od });
      var r,
        a,
        i,
        s,
        o = n(43935),
        c = n(60367),
        u = n(67622);
      function l(e, t) {
        let n;
        try {
          n = e();
        } catch (e) {
          return;
        }
        return {
          getItem: (e) => {
            var r;
            let a = (e) =>
                null === e
                  ? null
                  : JSON.parse(e, null == t ? void 0 : t.reviver),
              i = null != (r = n.getItem(e)) ? r : null;
            return i instanceof Promise ? i.then(a) : a(i);
          },
          setItem: (e, r) =>
            n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
          removeItem: (e) => n.removeItem(e),
        };
      }
      let d = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => d(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => d(t)(e),
            };
          }
        },
        f = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let a = "function" == typeof e ? e(t) : e;
              if (!Object.is(a, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof a || null === a)
                  ? a
                  : Object.assign({}, t, a)),
                  n.forEach((n) => n(t, e));
              }
            },
            a = () => t,
            i = {
              setState: r,
              getState: a,
              getInitialState: () => s,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            s = (t = e(r, a, i));
          return i;
        },
        p = (e) => (e ? f(e) : f),
        h = "4.3.6",
        m = "@coinbase/wallet-sdk",
        y = () => ({ chains: [] }),
        b = () => ({ keys: {} }),
        g = () => ({ account: {} }),
        w = () => ({ subAccount: void 0 }),
        v = () => ({ subAccountConfig: {} }),
        _ = () => ({ spendPermissions: [] }),
        x = () => ({ config: { version: h } }),
        k = p(
          ((e, t) => (n, r, a) => {
            let i,
              s = {
                storage: l(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
              },
              o = !1,
              c = new Set(),
              u = new Set(),
              f = s.storage;
            if (!f)
              return e(
                (...e) => {
                  console.warn(
                    `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                  ),
                    n(...e);
                },
                r,
                a
              );
            let p = () => {
                let e = s.partialize({ ...r() });
                return f.setItem(s.name, { state: e, version: s.version });
              },
              h = a.setState;
            a.setState = (e, t) => {
              h(e, t), p();
            };
            let m = e(
              (...e) => {
                n(...e), p();
              },
              r,
              a
            );
            a.getInitialState = () => m;
            let y = () => {
              var e, t;
              if (!f) return;
              (o = !1),
                c.forEach((e) => {
                  var t;
                  return e(null != (t = r()) ? t : m);
                });
              let a =
                (null == (t = s.onRehydrateStorage)
                  ? void 0
                  : t.call(s, null != (e = r()) ? e : m)) || void 0;
              return d(f.getItem.bind(f))(s.name)
                .then((e) => {
                  if (e)
                    if ("number" != typeof e.version || e.version === s.version)
                      return [!1, e.state];
                    else {
                      if (s.migrate) {
                        let t = s.migrate(e.state, e.version);
                        return t instanceof Promise
                          ? t.then((e) => [!0, e])
                          : [!0, t];
                      }
                      console.error(
                        "State loaded from storage couldn't be migrated since no migrate function was provided"
                      );
                    }
                  return [!1, void 0];
                })
                .then((e) => {
                  var t;
                  let [a, o] = e;
                  if ((n((i = s.merge(o, null != (t = r()) ? t : m)), !0), a))
                    return p();
                })
                .then(() => {
                  null == a || a(i, void 0),
                    (i = r()),
                    (o = !0),
                    u.forEach((e) => e(i));
                })
                .catch((e) => {
                  null == a || a(void 0, e);
                });
            };
            return (
              (a.persist = {
                setOptions: (e) => {
                  (s = { ...s, ...e }), e.storage && (f = e.storage);
                },
                clearStorage: () => {
                  null == f || f.removeItem(s.name);
                },
                getOptions: () => s,
                rehydrate: () => y(),
                hasHydrated: () => o,
                onHydrate: (e) => (
                  c.add(e),
                  () => {
                    c.delete(e);
                  }
                ),
                onFinishHydration: (e) => (
                  u.add(e),
                  () => {
                    u.delete(e);
                  }
                ),
              }),
              s.skipHydration || y(),
              i || m
            );
          })(
            (...e) =>
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(Object.assign({}, y(...e)), b(...e)),
                        g(...e)
                      ),
                      w(...e)
                    ),
                    _(...e)
                  ),
                  x(...e)
                ),
                v(...e)
              ),
            {
              name: "cbwsdk.store",
              storage: l(() => localStorage),
              partialize: (e) => ({
                chains: e.chains,
                keys: e.keys,
                account: e.account,
                subAccount: e.subAccount,
                spendPermissions: e.spendPermissions,
                config: e.config,
              }),
            }
          )
        ),
        E = {
          get: () => k.getState().config,
          set: (e) => {
            k.setState((t) => ({
              config: Object.assign(Object.assign({}, t.config), e),
            }));
          },
        },
        A = Object.assign(Object.assign({}, k), {
          subAccounts: {
            get: () => k.getState().subAccount,
            set: (e) => {
              k.setState((t) => ({
                subAccount: t.subAccount
                  ? Object.assign(Object.assign({}, t.subAccount), e)
                  : Object.assign({ address: e.address }, e),
              }));
            },
            clear: () => {
              k.setState({ subAccount: void 0 });
            },
          },
          subAccountsConfig: {
            get: () => k.getState().subAccountConfig,
            set: (e) => {
              k.setState((t) => ({
                subAccountConfig: Object.assign(
                  Object.assign({}, t.subAccountConfig),
                  e
                ),
              }));
            },
            clear: () => {
              k.setState({ subAccountConfig: {} });
            },
          },
          spendPermissions: {
            get: () => k.getState().spendPermissions,
            set: (e) => {
              k.setState({ spendPermissions: e });
            },
            clear: () => {
              k.setState({ spendPermissions: [] });
            },
          },
          account: {
            get: () => k.getState().account,
            set: (e) => {
              k.setState((t) => ({
                account: Object.assign(Object.assign({}, t.account), e),
              }));
            },
            clear: () => {
              k.setState({ account: {} });
            },
          },
          chains: {
            get: () => k.getState().chains,
            set: (e) => {
              k.setState({ chains: e });
            },
            clear: () => {
              k.setState({ chains: [] });
            },
          },
          keys: {
            get: (e) => k.getState().keys[e],
            set: (e, t) => {
              k.setState((n) => ({
                keys: Object.assign(Object.assign({}, n.keys), { [e]: t }),
              }));
            },
            clear: () => {
              k.setState({ keys: {} });
            },
          },
          config: E,
        }),
        S = () =>
          new Promise((e, t) => {
            if (window.ClientAnalytics) return e();
            try {
              let t = document.createElement("script");
              (t.textContent =
                '!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClientAnalytics=t():e.ClientAnalytics=t()}(this,(function(){return(()=>{var e={792:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},562:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(i>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}},e.exports=n},335:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},762:(e,t,n)=>{var r,i,a,o,s;r=n(562),i=n(792).utf8,a=n(335),o=n(792).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):i.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,v=s._gg,g=s._hh,b=s._ii;for(m=0;m<n.length;m+=16){var h=u,w=l,y=d,T=p;u=f(u,l,d,p,n[m+0],7,-680876936),p=f(p,u,l,d,n[m+1],12,-389564586),d=f(d,p,u,l,n[m+2],17,606105819),l=f(l,d,p,u,n[m+3],22,-1044525330),u=f(u,l,d,p,n[m+4],7,-176418897),p=f(p,u,l,d,n[m+5],12,1200080426),d=f(d,p,u,l,n[m+6],17,-1473231341),l=f(l,d,p,u,n[m+7],22,-45705983),u=f(u,l,d,p,n[m+8],7,1770035416),p=f(p,u,l,d,n[m+9],12,-1958414417),d=f(d,p,u,l,n[m+10],17,-42063),l=f(l,d,p,u,n[m+11],22,-1990404162),u=f(u,l,d,p,n[m+12],7,1804603682),p=f(p,u,l,d,n[m+13],12,-40341101),d=f(d,p,u,l,n[m+14],17,-1502002290),u=v(u,l=f(l,d,p,u,n[m+15],22,1236535329),d,p,n[m+1],5,-165796510),p=v(p,u,l,d,n[m+6],9,-1069501632),d=v(d,p,u,l,n[m+11],14,643717713),l=v(l,d,p,u,n[m+0],20,-373897302),u=v(u,l,d,p,n[m+5],5,-701558691),p=v(p,u,l,d,n[m+10],9,38016083),d=v(d,p,u,l,n[m+15],14,-660478335),l=v(l,d,p,u,n[m+4],20,-405537848),u=v(u,l,d,p,n[m+9],5,568446438),p=v(p,u,l,d,n[m+14],9,-1019803690),d=v(d,p,u,l,n[m+3],14,-187363961),l=v(l,d,p,u,n[m+8],20,1163531501),u=v(u,l,d,p,n[m+13],5,-1444681467),p=v(p,u,l,d,n[m+2],9,-51403784),d=v(d,p,u,l,n[m+7],14,1735328473),u=g(u,l=v(l,d,p,u,n[m+12],20,-1926607734),d,p,n[m+5],4,-378558),p=g(p,u,l,d,n[m+8],11,-2022574463),d=g(d,p,u,l,n[m+11],16,1839030562),l=g(l,d,p,u,n[m+14],23,-35309556),u=g(u,l,d,p,n[m+1],4,-1530992060),p=g(p,u,l,d,n[m+4],11,1272893353),d=g(d,p,u,l,n[m+7],16,-155497632),l=g(l,d,p,u,n[m+10],23,-1094730640),u=g(u,l,d,p,n[m+13],4,681279174),p=g(p,u,l,d,n[m+0],11,-358537222),d=g(d,p,u,l,n[m+3],16,-722521979),l=g(l,d,p,u,n[m+6],23,76029189),u=g(u,l,d,p,n[m+9],4,-640364487),p=g(p,u,l,d,n[m+12],11,-421815835),d=g(d,p,u,l,n[m+15],16,530742520),u=b(u,l=g(l,d,p,u,n[m+2],23,-995338651),d,p,n[m+0],6,-198630844),p=b(p,u,l,d,n[m+7],10,1126891415),d=b(d,p,u,l,n[m+14],15,-1416354905),l=b(l,d,p,u,n[m+5],21,-57434055),u=b(u,l,d,p,n[m+12],6,1700485571),p=b(p,u,l,d,n[m+3],10,-1894986606),d=b(d,p,u,l,n[m+10],15,-1051523),l=b(l,d,p,u,n[m+1],21,-2054922799),u=b(u,l,d,p,n[m+8],6,1873313359),p=b(p,u,l,d,n[m+15],10,-30611744),d=b(d,p,u,l,n[m+6],15,-1560198380),l=b(l,d,p,u,n[m+13],21,1309151649),u=b(u,l,d,p,n[m+4],6,-145523070),p=b(p,u,l,d,n[m+11],10,-1120210379),d=b(d,p,u,l,n[m+2],15,718787259),l=b(l,d,p,u,n[m+9],21,-343485551),u=u+h>>>0,l=l+w>>>0,d=d+y>>>0,p=p+T>>>0}return r.endian([u,l,d,p])})._ff=function(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,r,i,a,o){var s=e+(t^n^r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},2:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Perfume:()=>ze,incrementUjNavigation:()=>Le,markStep:()=>Re,markStepOnce:()=>qe});var r,i,a={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{},enableNavigationTracking:!0},o=window,s=o.console,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},p="mark.",m=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},f="4g",v=!1,g={},b={value:0},h={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},w={value:0},y={value:0},T={},k={isHidden:!1,didChange:!1},_=function(){k.isHidden=!1,document.hidden&&(k.isHidden=document.hidden,k.didChange=!0)},S=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){s.warn("Perfume.js:",e)}return null},E=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},x=function(e,t){switch(e){case"slow-2g":case"2g":case"3g":return!0;default:return E()||t}},O=function(e){return parseFloat(e.toFixed(4))},j=function(e){return"number"!=typeof e?null:O(e/Math.pow(1024,2))},N=function(e,t,n,r,i){var s,u=function(){a.analyticsTracker&&(k.isHidden&&!["CLS","INP"].includes(e)||a.analyticsTracker({attribution:r,metricName:e,data:t,navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:E(),isLowEndExperience:x(f,v)}:{},rating:n,navigationType:i}))};["CLS","INP"].includes(e)?u():(s=u,"requestIdleCallback"in o?o.requestIdleCallback(s,{timeout:3e3}):s())},I=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<b.value)){var t=e.duration-50;t>0&&(w.value+=t,y.value+=t)}}))};!function(e){e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable"}(r||(r={}));var P,M,B,C,D,A=((i={})[r.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},i[r.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},i[r.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},i[r.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},i[r.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4},i),L={RT:[100,200],TBT:[200,600],NTBT:[200,600]},U=function(e,t){return L[e]?t<=L[e][0]?"good":t<=L[e][1]?"needsImprovement":"poor":null},R=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=O(t[e]))})),N(e,t,null,n||{})},q=function(e){var t=e.attribution,n=e.name,r=e.rating,i=e.value,o=e.navigationType;"FCP"===n&&(b.value=i),["FCP","LCP"].includes(n)&&!T[0]&&(T[0]=S("longtask",I)),"FID"===n&&setTimeout((function(){k.didChange||(q({attribution:t,name:"TBT",rating:U("TBT",w.value),value:w.value,navigationType:o}),R("dataConsumption",h.value))}),1e4);var s=O(i);s<=a.maxTime&&s>=0&&N(n,s,r,t,o)},F=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},z=function(e){if("loading"===document.readyState)return"loading";var t=F();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},K=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},$=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:K(r)+(r.className&&r.className.length?"."+r.className.replace(/\\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},Q=-1,W=function(){return Q},H=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Q=t.timeStamp,e(t))}),!0)},V=function(){var e=F();return e&&e.activationStart||0},J=function(e,t){var n=F(),r="navigate";return W()>=0?r="back-forward-cache":n&&(r=document.prerendering||V()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},X=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Z=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},te=-1,ne=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},re=function(e){"hidden"===document.visibilityState&&te>-1&&(te="visibilitychange"===e.type?e.timeStamp:0,ae())},ie=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},ae=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},oe=function(){return te<0&&(te=ne(),ie(),H((function(){setTimeout((function(){te=ne(),ie()}),0)}))),{get firstHiddenTime(){return te}}},se=function(e,t){t=t||{},ee((function(){var n,r=[1800,3e3],i=oe(),a=J("FCP"),o=X("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-V(),0),a.entries.push(e),n(!0)))}))}));o&&(n=Z(e,a,r,t.reportAllChanges),H((function(i){a=J("FCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,n(!0)}))})))}))},ce={passive:!0,capture:!0},ue=new Date,le=function(e,t){P||(P=t,M=e,B=new Date,me(removeEventListener),de())},de=function(){if(M>=0&&M<B-ue){var e={entryType:"first-input",name:P.type,target:P.target,cancelable:P.cancelable,startTime:P.timeStamp,processingStart:P.timeStamp+M};C.forEach((function(t){t(e)})),C=[]}},pe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){le(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ce),removeEventListener("pointercancel",r,ce)};addEventListener("pointerup",n,ce),addEventListener("pointercancel",r,ce)}(t,e):le(t,e)}},me=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,pe,ce)}))},fe=0,ve=1/0,ge=0,be=function(e){e.forEach((function(e){e.interactionId&&(ve=Math.min(ve,e.interactionId),ge=Math.max(ge,e.interactionId),fe=ge?(ge-ve)/7+1:0)}))},he=function(){return D?fe:performance.interactionCount||0},we=0,ye=function(){return he()-we},Te=[],ke={},_e=function(e){var t=Te[Te.length-1],n=ke[e.interactionId];if(n||Te.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ke[r.id]=r,Te.push(r)}Te.sort((function(e,t){return t.latency-e.latency})),Te.splice(10).forEach((function(e){delete ke[e.id]}))}},Se={},Ee=function e(t){document.prerendering?ee((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},xe=function(e,t){t=t||{};var n=[800,1800],r=J("TTFB"),i=Z(e,r,n,t.reportAllChanges);Ee((function(){var a=F();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;r.value=Math.max(o-V(),0),r.entries=[a],i(!0),H((function(){r=J("TTFB",0),(i=Z(e,r,n,t.reportAllChanges))(!0)}))}}))},Oe=function(e){e.forEach((function(e){e.identifier&&q({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},je=function(e){e.forEach((function(e){if(a.isResourceTiming&&R("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;h.value[e.initiatorType]+=t,h.value.total+=t}}))},Ne=function(){!function(e,t){xe((function(e){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),function(e){e.value>0&&q(e)}(e)}),t)}(0,a.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},ee((function(){var e,n=[.1,.25],r=J("CLS"),i=-1,a=0,o=[],s=function(e){i>-1&&function(e){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:$(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:z(t.startTime)})}}var r;e.attribution={}}(e),function(e){q(e)}(e)}(e)},c=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],i=o[o.length-1];a&&t.startTime-i.startTime<1e3&&t.startTime-n.startTime<5e3?(a+=t.value,o.push(t)):(a=t.value,o=[t]),a>r.value&&(r.value=a,r.entries=o,e())}}))},u=X("layout-shift",c);u&&(e=Z(s,r,n,t.reportAllChanges),se((function(t){i=t.value,r.value<0&&(r.value=0,e())})),G((function(){c(u.takeRecords()),e(!0)})),H((function(){a=0,i=-1,r=J("CLS",0),e=Z(s,r,n,t.reportAllChanges),Y((function(){return e()}))})))}))}(0,t)}(0,a.reportOptions.cls),function(e,t){se((function(e){!function(e){if(e.entries.length){var t=F(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:z(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:z(W())}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[100,300],i=oe(),a=J("FID"),o=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=X("first-input",s);n=Z(e,a,r,t.reportAllChanges),c&&G((function(){s(c.takeRecords()),c.disconnect()}),!0),c&&H((function(){var i;a=J("FID"),n=Z(e,a,r,t.reportAllChanges),C=[],M=-1,P=null,me(addEventListener),i=o,C.push(i),de()}))}))}((function(e){!function(e){var t=e.entries[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fid),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[2500,4e3],i=oe(),a=J("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-V(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},s=X("largest-contentful-paint",o);if(s){n=Z(e,a,r,t.reportAllChanges);var c=function(){Se[a.id]||(o(s.takeRecords()),s.disconnect(),Se[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),G(c,!0),H((function(i){a=J("LCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,Se[a.id]=!0,n(!0)}))}))}}))}((function(e){!function(e){if(e.entries.length){var t=F();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),o=Math.max(a,i?(i.requestStart||i.startTime)-n:0),s=Math.max(o,i?i.responseEnd-n:0),c=Math.max(s,r?r.startTime-n:0),u={element:$(r.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:s-o,elementRenderDelay:c-s,navigationEntry:t,lcpEntry:r};return r.url&&(u.url=r.url),i&&(u.lcpResourceEntry=i),void(e.attribution=u)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.lcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n=[200,500];"interactionCount"in performance||D||(D=X("event",be,{type:"event",buffered:!0,durationThreshold:0}));var r,i=J("INP"),a=function(e){e.forEach((function(e){e.interactionId&&_e(e),"first-input"===e.entryType&&!Te.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&_e(e)}));var t,n=(t=Math.min(Te.length-1,Math.floor(ye()/50)),Te[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=X("event",a,{durationThreshold:t.durationThreshold||40});r=Z(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),G((function(){a(o.takeRecords()),i.value<0&&ye()>0&&(i.value=0,i.entries=[]),r(!0)})),H((function(){Te=[],we=he(),i=J("INP"),r=Z(e,i,n,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}((function(e){return q(e)}),a.reportOptions.inp),a.isResourceTiming&&S("resource",je),a.isElementTiming&&S("element",Oe)},Ie=function(e){var t="usageDetails"in e?e.usageDetails:{};R("storageEstimate",{quota:j(e.quota),usage:j(e.usage),caches:j(t.caches),indexedDB:j(t.indexedDB),serviceWorker:j(t.serviceWorkerRegistrations)})},Pe={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},Me=function(e){delete Pe.active[e]},Be=function(){return Pe.navigationSteps},Ce=function(e){var t;return null!==(t=Be()[e])&&void 0!==t?t:{}},De=function(e,t,n){var r="step."+e,i=u.getEntriesByName(p+t).length>0;if(u.getEntriesByName(p+n).length>0&&a.steps){var o=A[a.steps[e].threshold],s=o.maxOutlierThreshold,c=o.vitalsThresholds;if(i){var l=u.measure(r,p+t,p+n),d=l.duration;if(d<=s){var m=function(e,t){return e<=t[0]?"good":e<=t[1]?"needsImprovement":"poor"}(d,c);d>=0&&(N("userJourneyStep",d,m,{stepName:e},void 0),u.measure("step.".concat(e,"_vitals_").concat(m),{start:l.startTime+l.duration,end:l.startTime+l.duration,detail:{type:"stepVital",duration:d}}))}}}},Ae=function(){var e=Be(),t=Pe.startMarkToStepsMap,n=Object.keys(e).length;if(0===n)return{};var r={},i=n-1,a=Ce(i);if(Object.keys(a).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))})),n>1){var o=Ce(i-1);Object.keys(o).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))}))}return r},Le=function(){var e,t=Object.keys(Pe.navigationSteps).length;Pe.navigationSteps[t]={};var n=Ae();null===(e=a.onMarkStep)||void 0===e||e.call(a,"",Object.keys(n))},Ue=function(e){var t,n,r,i,o,s,c;if(Pe.finalMarkToStepsMap[e]){!function(e){var t=Pe.navigationSteps,n=Pe.finalMarkToStepsMap,r=Object.keys(t).length;if(0!==r){var i=r-1,a=Ce(i);if(a&&n[e]){var o=n[e];o&&Object.keys(o).forEach((function(e){if(a[e]){var n=Ce(i)||{};n[e]=!1,t[i]=n}if(r>1){var o=i-1,s=Ce(o);s[e]&&(s[e]=!1,t[o]=s)}}))}}}(e);var u=Pe.finalMarkToStepsMap[e];Object.keys(u).forEach((function(t){var n=u[t];n.forEach(Me),Promise.all(n.map((function(n){return function(e,t,n,r){return new(n||(n=Promise))((function(e,t){function i(e){try{o(r.next(e))}catch(e){t(e)}}function a(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}o((r=r.apply(undefined,[])).next())}))}(0,0,void 0,(function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(r){switch(r.label){case 0:return[4,De(n,t,e)];case 1:return r.sent(),[2]}}))}))}))).catch((function(){}))}))}else r=e,i=Pe.navigationSteps,o=Object.keys(i).length,(c=Ce(s=(o>0?o:1)-1)||[])[r]=!0,i[s]=c,function(e){var t,n=null!==(t=Pe.startMarkToStepsMap[e])&&void 0!==t?t:[];Object.keys(n).forEach((function(e){Pe.active[e]||(Pe.active[e]=!0)}))}(e);if(a.enableNavigationTracking){var l=Ae();null===(t=a.onMarkStep)||void 0===t||t.call(a,e,Object.keys(l))}else null===(n=a.onMarkStep)||void 0===n||n.call(a,e,Object.keys(Pe.active))},Re=function(e){u.mark(p+e),Ue(e)},qe=function(e){0===u.getEntriesByName(p+e).length&&(u.mark(p+e),Ue(e))},Fe=0,ze=function(){function e(e){if(void 0===e&&(e={}),this.v="9.0.0-rc.3",a.analyticsTracker=e.analyticsTracker,a.isResourceTiming=!!e.resourceTiming,a.isElementTiming=!!e.elementTiming,a.maxTime=e.maxMeasureTime||a.maxTime,a.reportOptions=e.reportOptions||a.reportOptions,a.steps=e.steps,a.onMarkStep=e.onMarkStep,a.enableNavigationTracking=e.enableNavigationTracking,m()){"PerformanceObserver"in o&&Ne(),void 0!==document.hidden&&document.addEventListener("visibilitychange",_);var t=function(){if(!m())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectTime:e.redirectEnd-e.redirectStart}}();R("navigationTiming",t),t.redirectTime&&q({attribution:{},name:"RT",rating:U("RT",t.redirectTime),value:t.redirectTime}),R("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(f=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(Ie),a.steps&&a.steps&&(Pe.startMarkToStepsMap={},Pe.finalMarkToStepsMap={},Pe.active={},Pe.navigationSteps={},Object.entries(a.steps).forEach((function(e){var t,n,r=e[0],i=e[1].marks,a=i[0],o=i[1],s=null!==(n=Pe.startMarkToStepsMap[a])&&void 0!==n?n:{};if(s[r]=!0,Pe.startMarkToStepsMap[a]=s,Pe.finalMarkToStepsMap[o]){var c=Pe.finalMarkToStepsMap[o][a]||[];c.push(r),Pe.finalMarkToStepsMap[o][a]=c}else Pe.finalMarkToStepsMap[o]=((t={})[a]=[r],t)})))}}return e.prototype.start=function(e){m()&&!g[e]&&(g[e]=!0,u.mark("mark_".concat(e,"_start")))},e.prototype.end=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n=!0),m()&&g[e]){u.mark("mark_".concat(e,"_end")),delete g[e];var r=function(e){u.measure(e,"mark_".concat(e,"_start"),"mark_".concat(e,"_end"));var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e);n&&R(e,O(r),t)}},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete g[e],u.clearMarks&&(u.clearMarks("mark_".concat(e,"_start")),u.clearMarks("mark_".concat(e,"_end")))},e.prototype.markNTBT=function(){var e=this;this.start("ntbt"),y.value=0,clearTimeout(Fe),Fe=setTimeout((function(){e.end("ntbt",{},!1),q({attribution:{},name:"NTBT",rating:U("NTBT",y.value),value:y.value}),y.value=0}),2e3)},e}()},426:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,i={};function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function o(){}function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var c=s.prototype=new o;c.constructor=s,r(c,a.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var u={current:null};t.useCallback=function(e,t){return u.current.useCallback(e,t)},t.useEffect=function(e,t){return u.current.useEffect(e,t)},t.useRef=function(e){return u.current.useRef(e)}},784:(e,t,n)=>{"use strict";e.exports=n(426)},353:function(e,t,n){var r;!function(i,a){"use strict";var o="function",s="undefined",c="object",u="string",l="major",d="model",p="name",m="type",f="vendor",v="version",g="architecture",b="console",h="mobile",w="tablet",y="smarttv",T="wearable",k="embedded",_="Amazon",S="Apple",E="ASUS",x="BlackBerry",O="Browser",j="Chrome",N="Firefox",I="Google",P="Huawei",M="LG",B="Microsoft",C="Motorola",D="Opera",A="Samsung",L="Sharp",U="Sony",R="Xiaomi",q="Zebra",F="Facebook",z="Chromium OS",K="Mac OS",$=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},Q=function(e,t){return typeof e===u&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===u)return e=e.replace(/^\\s\\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var n,r,i,s,u,l,d=0;d<t.length&&!u;){var p=t[d],m=t[d+1];for(n=r=0;n<p.length&&!u&&p[n];)if(u=p[n++].exec(e))for(i=0;i<m.length;i++)l=u[++r],typeof(s=m[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):a:this[s[0]]=l?s[1].call(this,l,s[2]):a:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):a):this[s]=l||a;d+=2}},J=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(Q(t[n][r],e))return"?"===n?a:n}else if(Q(t[n],e))return"?"===n?a:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[v,[p,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[v,[p,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[p,v],[/opios[\\/ ]+([\\w\\.]+)/i],[v,[p,D+" Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[v,[p,D]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\\/([-\\w\\.]+)/i,/(heytap|ovi)browser\\/([\\d\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[p,v],[/(?:\\buc? ?browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[v,[p,"UC"+O]],[/microm.+\\bqbcore\\/([\\w\\.]+)/i,/\\bqbcore\\/([\\w\\.]+).+microm/i],[v,[p,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[v,[p,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[v,[p,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[v,[p,"IE"]],[/ya(?:search)?browser\\/([\\w\\.]+)/i],[v,[p,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],v],[/\\bfocus\\/([\\w\\.]+)/i],[v,[p,N+" Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[v,[p,D+" Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[v,[p,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[v,[p,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[v,[p,D+" Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[v,[p,"MIUI "+O]],[/fxios\\/([-\\w\\.]+)/i],[v,[p,N]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 "+O],v],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[p,/_/g," "],v],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[p,v],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i,/\\[(linkedin)app\\]/i],[p],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[p,F],v],[/(kakao(?:talk|story))[\\/ ]([\\w\\.]+)/i,/(naver)\\(.*?(\\d+\\.[\\w\\.]+).*\\)/i,/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[p,v],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[v,[p,"GSA"]],[/musical_ly(?:.+app_?version\\/|_)([\\w\\.]+)/i],[v,[p,"TikTok"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[v,[p,j+" Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[p,j+" WebView"],v],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[v,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[p,v],[/version\\/([\\w\\.\\,]+) .*mobile\\/\\w+ (safari)/i],[v,[p,"Mobile Safari"]],[/version\\/([\\w(\\.|\\,)]+) .*(mobile ?safari|safari)/i],[v,p],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[p,[v,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[p,v],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[p,"Netscape"],v],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[v,[p,N+" Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i,/panasonic;(viera)/i],[p,v],[/(cobalt)\\/([\\w\\.]+)/i],[p,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\\)]/i],[[g,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[g,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[g,/ower/,"",W]],[/(sun4\\w)[;\\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[g,W]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[ptx]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[f,A],[m,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|sc[g-]?[\\d]+a?|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[d,[f,A],[m,h]],[/(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)/i],[d,[f,S],[m,h]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[d,[f,S],[m,w]],[/(macintosh);/i],[d,[f,S]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[d,[f,L],[m,h]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[d,[f,P],[m,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}e?-[atu]?[ln][\\dx][012359c][adn]?)\\b(?!.+d\\/s)/i],[d,[f,P],[m,h]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,h]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007|a101op)\\b/i],[d,[f,"OPPO"],[m,h]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[d,[f,"Vivo"],[m,h]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[d,[f,"Realme"],[m,h]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[d,[f,C],[m,h]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[d,[f,C],[m,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[f,M],[m,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[d,[f,M],[m,h]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[d,[f,"Lenovo"],[m,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[d,/_/g," "],[f,"Nokia"],[m,h]],[/(pixel c)\\b/i],[d,[f,I],[m,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[d,[f,I],[m,h]],[/droid.+ (a?\\d[0-2]{2}so|[c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[d,[f,U],[m,h]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[d,"Xperia Tablet"],[f,U],[m,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[d,[f,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[d,[f,_],[m,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[d,/(.+)/g,"Fire Phone $1"],[f,_],[m,h]],[/(playbook);[-\\w\\),; ]+(rim)/i],[d,f,[m,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[d,[f,x],[m,h]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[d,[f,E],[m,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[d,[f,E],[m,h]],[/(nexus 9)/i],[d,[f,"HTC"],[m,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\\.))|sony(?!-bra))[-_ ]?([-\\w]*)/i],[f,[d,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[d,[f,"Acer"],[m,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[d,[f,"Meizu"],[m,h]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[f,d,[m,h]],[/(kobo)\\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[f,d,[m,w]],[/(surface duo)/i],[d,[f,B],[m,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[d,[f,"Fairphone"],[m,h]],[/(u304aa)/i],[d,[f,"AT&T"],[m,h]],[/\\bsie-(\\w*)/i],[d,[f,"Siemens"],[m,h]],[/\\b(rct\\w+) b/i],[d,[f,"RCA"],[m,w]],[/\\b(venue[\\d ]{2,7}) b/i],[d,[f,"Dell"],[m,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[d,[f,"Verizon"],[m,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[d,[f,"Barnes & Noble"],[m,w]],[/\\b(tm\\d{3}\\w+) b/i],[d,[f,"NuVision"],[m,w]],[/\\b(k88) b/i],[d,[f,"ZTE"],[m,w]],[/\\b(nx\\d{3}j) b/i],[d,[f,"ZTE"],[m,h]],[/\\b(gen\\d{3}) b.+49h/i],[d,[f,"Swiss"],[m,h]],[/\\b(zur\\d{3}) b/i],[d,[f,"Swiss"],[m,w]],[/\\b((zeki)?tb.*\\b) b/i],[d,[f,"Zeki"],[m,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[f,"Dragon Touch"],d,[m,w]],[/\\b(ns-?\\w{0,9}) b/i],[d,[f,"Insignia"],[m,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[d,[f,"NextBook"],[m,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],d,[m,h]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[f,"LvTel"],d,[m,h]],[/\\b(ph-1) /i],[d,[f,"Essential"],[m,h]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[d,[f,"Envizen"],[m,w]],[/\\b(trio[-\\w\\. ]+) b/i],[d,[f,"MachSpeed"],[m,w]],[/\\btu_(1491) b/i],[d,[f,"Rotor"],[m,w]],[/(shield[\\w ]+) b/i],[d,[f,"Nvidia"],[m,w]],[/(sprint) (\\w+)/i],[f,d,[m,h]],[/(kin\\.[onetw]{3})/i],[[d,/\\./g," "],[f,B],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[d,[f,q],[m,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[d,[f,q],[m,h]],[/smart-tv.+(samsung)/i],[f,[m,y]],[/hbbtv.+maple;(\\d+)/i],[[d,/^/,"SmartTV"],[f,A],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[f,M],[m,y]],[/(apple) ?tv/i],[f,[d,S+" TV"],[m,y]],[/crkey/i],[[d,j+"cast"],[f,I],[m,y]],[/droid.+aft(\\w)( bui|\\))/i],[d,[f,_],[m,y]],[/\\(dtv[\\);].+(aquos)/i,/(aquos-tv[\\w ]+)\\)/i],[d,[f,L],[m,y]],[/(bravia[\\w ]+)( bui|\\))/i],[d,[f,U],[m,y]],[/(mitv-\\w{5}) bui/i],[d,[f,R],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[f,d,[m,y]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w\\+ ]*; *([\\w\\d][^;]*);([^;]*)/i],[[f,H],[d,H],[m,y]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,d,[m,b]],[/droid.+; (shield) bui/i],[d,[f,"Nvidia"],[m,b]],[/(playstation [345portablevi]+)/i],[d,[f,U],[m,b]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[d,[f,B],[m,b]],[/((pebble))app/i],[f,d,[m,T]],[/(watch)(?: ?os[,\\/]|\\d,\\d\\/)[\\d\\.]+/i],[d,[f,S],[m,T]],[/droid.+; (glass) \\d/i],[d,[f,I],[m,T]],[/droid.+; (wt63?0{2,3})\\)/i],[d,[f,q],[m,T]],[/(quest( 2| pro)?)/i],[d,[f,F],[m,T]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[f,[m,k]],[/(aeobc)\\b/i],[d,[f,_],[m,k]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[d,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[d,[m,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[m,w]],[/(phone|mobile(?:[;\\/]| [ \\w\\/\\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\\w\\. ]{0,9});.+buil/i],[d,[f,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[v,[p,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[v,[p,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i,/\\b(libweb)/i],[p,v],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[v,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,v],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[p,[v,J,X]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[p,"Windows"],[v,J,X]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/ios;fbsv\\/([\\d\\.]+)/i,/cfnetwork\\/.+darwin/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[p,K],[v,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86|harmonyos)/i],[v,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[p,v],[/\\(bb(10);/i],[v,[p,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[v,[p,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[v,[p,N+" OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[v,[p,"webOS"]],[/watch(?: ?os[,\\/]|\\d,\\d\\/)([\\d\\.]+)/i],[v,[p,"watchOS"]],[/crkey\\/([\\d\\.]+)/i],[v,[p,j+"cast"]],[/(cros) [\\w]+(?:\\)| ([\\w\\.]+)\\b)/i],[[p,z],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\\/(\\d+\\.[\\w\\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[p,v],[/(sunos) ?([\\w\\.\\d]*)/i],[[p,"Solaris"],v],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\\w\\.]*)/i],[p,v]]},Z=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof Z))return new Z(e,t).getResult();var n=typeof i!==s&&i.navigator?i.navigator:a,r=e||(n&&n.userAgent?n.userAgent:""),b=n&&n.userAgentData?n.userAgentData:a,y=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(G,t):G,T=n&&n.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=a,t[v]=a,V.call(t,r,y.browser),t[l]=typeof(e=t[v])===u?e.replace(/[^\\d\\.]/g,"").split(".")[0]:a,T&&n&&n.brave&&typeof n.brave.isBrave==o&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,V.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[f]=a,e[d]=a,e[m]=a,V.call(e,r,y.device),T&&!e[m]&&b&&b.mobile&&(e[m]=h),T&&"Macintosh"==e[d]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[d]="iPad",e[m]=w),e},this.getEngine=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.os),T&&!e[p]&&b&&"Unknown"!=b.platform&&(e[p]=b.platform.replace(/chrome os/i,z).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>350?H(e,350):e,this},this.setUA(r),this};Z.VERSION="1.0.35",Z.BROWSER=$([p,v,l]),Z.CPU=$([g]),Z.DEVICE=$([d,f,m,b,h,y,w,T,k]),Z.ENGINE=Z.OS=$([p,v]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):n.amdO?(r=function(){return Z}.call(t,n,t,e))===a||(e.exports=r):typeof i!==s&&(i.UAParser=Z);var Y=typeof i!==s&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var ee=new Z;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var n in t)Y.ua[n]=t[n]}}}("object"==typeof window?window:this)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionType:()=>f,AmplitudePlatformName:()=>g,AnalyticsEventImportance:()=>l,AnalyticsQueries:()=>e,AuthStatus:()=>b,ComponentType:()=>m,IThresholdTier:()=>Jt,MetricType:()=>d,PlatformName:()=>v,SessionActions:()=>h,SessionAutomatedEvents:()=>w,SessionRank:()=>y,SubjectType:()=>p,UserTypeCommerce:()=>c,UserTypeInsto:()=>i,UserTypeRetail:()=>t,UserTypeRetailBusinessBanking:()=>s,UserTypeRetailEmployeeInternal:()=>a,UserTypeRetailEmployeePersonal:()=>o,UserTypeWallet:()=>u,automatedEvents:()=>xn,automatedMappingConfig:()=>In,clearMarkEntry:()=>Vn,clearPerformanceMarkEntries:()=>Xn,config:()=>A,createEventConfig:()=>On,createNewSpan:()=>Ln,createNewTrace:()=>Un,device:()=>W,endPerfMark:()=>Jn,exposeExperiment:()=>wn,flushQueue:()=>or,generateUUID:()=>V,getAnalyticsHeaders:()=>sr,getReferrerData:()=>le,getTracingHeaders:()=>An,getTracingId:()=>Dn,getUrlHostname:()=>pe,getUrlParams:()=>me,getUrlPathname:()=>fe,getUserContext:()=>ar,identify:()=>Tn,identifyFlow:()=>xe,identity:()=>H,identityFlow:()=>Se,incrementUjNavigation:()=>an,init:()=>yn,initNextJsTrackPageview:()=>_n,initTrackPageview:()=>kn,isEventKeyFormatValid:()=>we,isSessionEnded:()=>pt,location:()=>re,logEvent:()=>$t,logMetric:()=>Ht,logPageView:()=>on,logTrace:()=>Rn,markNTBT:()=>tn,markStep:()=>nn,markStepOnce:()=>rn,onVisibilityChange:()=>ln,optIn:()=>En,optOut:()=>Sn,perfMark:()=>Wn,persistentData:()=>oe,postMessage:()=>K,recordSessionDuration:()=>pn,removeFromIdentifyFlow:()=>Ee,savePersistentData:()=>st,sendScheduledEvents:()=>Bt,setBreadcrumbs:()=>ie,setConfig:()=>U,setLocation:()=>ae,setPagePath:()=>ve,setPageview:()=>Kt,setPersistentData:()=>se,setSessionStart:()=>dt,setTime:()=>Ue,startPerfMark:()=>Hn,timeStone:()=>Le,useEventLogger:()=>Yn,useLogEventOnMount:()=>tr,usePerformanceMarks:()=>rr});let e=function(e){return e.fbclid="fbclid",e.gclid="gclid",e.msclkid="msclkid",e.ptclid="ptclid",e.ttclid="ttclid",e.utm_source="utm_source",e.utm_medium="utm_medium",e.utm_campaign="utm_campaign",e.utm_term="utm_term",e.utm_content="utm_content",e}({});const t=0,i=1,a=2,o=3,s=4,c=5,u=6;let l=function(e){return e.low="low",e.high="high",e}({}),d=function(e){return e.count="count",e.rate="rate",e.gauge="gauge",e.distribution="distribution",e.histogram="histogram",e}({}),p=function(e){return e.commerce_merchant="commerce_merchant",e.device="device",e.edp_fingerprint_id="edp_fingerprint_id",e.nft_user="nft_user",e.user="user",e.wallet_user="wallet_user",e.uuid="user_uuid",e}({}),m=function(e){return e.unknown="unknown",e.banner="banner",e.button="button",e.card="card",e.chart="chart",e.content_script="content_script",e.dropdown="dropdown",e.link="link",e.page="page",e.modal="modal",e.table="table",e.search_bar="search_bar",e.service_worker="service_worker",e.text="text",e.text_input="text_input",e.tray="tray",e.checkbox="checkbox",e.icon="icon",e}({}),f=function(e){return e.unknown="unknown",e.blur="blur",e.click="click",e.change="change",e.dismiss="dismiss",e.focus="focus",e.hover="hover",e.select="select",e.measurement="measurement",e.move="move",e.process="process",e.render="render",e.scroll="scroll",e.view="view",e.search="search",e.keyPress="keyPress",e}({}),v=function(e){return e.unknown="unknown",e.web="web",e.android="android",e.ios="ios",e.mobile_web="mobile_web",e.tablet_web="tablet_web",e.server="server",e.windows="windows",e.macos="macos",e.extension="extension",e}({}),g=function(e){return e.web="Web",e.ios="iOS",e.android="Android",e}({}),b=function(e){return e[e.notLoggedIn=0]="notLoggedIn",e[e.loggedIn=1]="loggedIn",e}({}),h=function(e){return e.ac="ac",e.af="af",e.ah="ah",e.al="al",e.am="am",e.ar="ar",e.as="as",e}({}),w=function(e){return e.pv="pv",e}({}),y=function(e){return e.xs="xs",e.s="s",e.m="m",e.l="l",e.xl="xl",e.xxl="xxl",e}({});const T="https://analytics-service-dev.cbhq.net",k=3e5,_=5e3,S="analytics-db",E="experiment-exposure-db",x="Analytics SDK:",O=Object.values(e),j="pageview",N="session_duration",I={navigationTiming:{eventName:"perf_navigation_timing"},redirectTime:{eventName:"perf_redirect_time"},RT:{eventName:"perf_redirect_time"},TTFB:{eventName:"perf_time_to_first_byte"},networkInformation:{eventName:"perf_network_information"},storageEstimate:{eventName:"perf_storage_estimate"},FCP:{eventName:"perf_first_contentful_paint"},FID:{eventName:"perf_first_input_delay"},LCP:{eventName:"perf_largest_contentful_paint"},CLS:{eventName:"perf_cumulative_layout_shift"},TBT:{eventName:"perf_total_blocking_time"},NTBT:{eventName:"perf_navigation_total_blocking_time"},INP:{eventName:"perf_interact_to_next_paint"},ET:{eventName:"perf_element_timing"},userJourneyStep:{eventName:"perf_user_journey_step"}},P="1",M="web";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const C=/^(https?:\\/\\/)/;function D(e){return{eventsEndpoint:e+"/amp",metricsEndPoint:e+"/metrics",exposureEndpoint:e+"/track-exposures",tracesEndpoint:e+"/traces"}}const A=B({authCookie:"logged_in",amplitudeApiKey:"",batchEventsPeriod:_,batchEventsThreshold:30,batchMetricsPeriod:_,batchMetricsThreshold:30,batchTracesPeriod:_,batchTracesThreshold:30,headers:{},interactionManager:null,isAlwaysAuthed:!1,isProd:!1,isInternalApplication:!1,onError:(e,t)=>{console.error(x,e,t)},platform:v.unknown,projectName:"",ricTimeoutScheduleEvent:1e3,ricTimeoutSetDevice:500,showDebugLogging:!1,trackUserId:!1,version:null,apiEndpoint:T},D(T),{steps:{}}),L=[].reduce(((e,t)=>n=>e(t(n))),(e=>{if(!e.isProd)return e.isInternalApplication?(e.apiEndpoint="https://analytics-service-internal-dev.cbhq.net",B({},e,D(e.apiEndpoint))):e;const t=(e=>e.apiEndpoint?C.test(e.apiEndpoint)?e.apiEndpoint:`https://${e.apiEndpoint}`:e.isInternalApplication?"https://analytics-service-internal.cbhq.net":"https://as.coinbase.com")(e);return B({},e,{apiEndpoint:t},D(t))})),U=e=>{const{batchEventsThreshold:t,batchMetricsThreshold:n,batchTracesThreshold:r}=e,i=[t,n,r];for(const e of i)if((e||0)>30){console.warn("You are setting the threshhold for the batch limit to be greater than 30. This may cause request overload.");break}Object.assign(A,L(e))},R=[v.web,v.mobile_web,v.tablet_web];function q(){return"android"===A.platform}function F(){return"ios"===A.platform}function z(){return R.includes(A.platform)}function K(e){if(z()&&navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.controller)try{navigator.serviceWorker.controller.postMessage(e)}catch(e){e instanceof Error&&A.onError(e)}}var $=n(353),Q=n.n($);const W={amplitudeOSName:null,amplitudeOSVersion:null,amplitudeDeviceModel:null,amplitudePlatform:null,browserName:null,browserMajor:null,osName:null,userAgent:null,width:null,height:null},H={countryCode:null,deviceId:null,device_os:null,isOptOut:!1,languageCode:null,locale:null,jwt:null,session_lcc_id:null,userAgent:null,userId:null},V=e=>e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,V),J=()=>A.isAlwaysAuthed||!!H.userId,X=()=>{const e={};return H.countryCode&&(e.country_code=H.countryCode),e},G=()=>{const{platform:e}=A;if(e===v.web)switch(!0){case window.matchMedia("(max-width: 560px)").matches:return v.mobile_web;case window.matchMedia("(max-width: 1024px, min-width: 561px)").matches:return v.tablet_web}return e},Z=()=>{var e,t,n,r,i;z()?("requestIdleCallback"in window?window.requestIdleCallback(ne,{timeout:A.ricTimeoutSetDevice}):ne(),W.amplitudePlatform=g.web,W.userAgent=(null==(e=window)||null==(e=e.navigator)?void 0:e.userAgent)||null,ee({height:null!=(t=null==(n=window)?void 0:n.innerHeight)?t:null,width:null!=(r=null==(i=window)?void 0:i.innerWidth)?r:null})):F()?(W.amplitudePlatform=g.ios,W.userAgent=H.userAgent,W.userAgent&&ne()):q()&&(W.userAgent=H.userAgent,W.amplitudePlatform=g.android,W.userAgent&&ne())},Y=e=>{Object.assign(H,e),z()&&K({identity:{isAuthed:!!H.userId,locale:H.locale||null}})},ee=e=>{W.height=e.height,W.width=e.width},te=()=>{U({platform:G()}),z()&&K({config:{platform:A.platform}})},ne=()=>{var e;performance.mark&&performance.mark("ua_parser_start");const t=new(Q())(null!=(e=W.userAgent)?e:"").getResult();W.browserName=t.browser.name||null,W.browserMajor=t.browser.major||null,W.osName=t.os.name||null,W.amplitudeOSName=W.browserName,W.amplitudeOSVersion=W.browserMajor,W.amplitudeDeviceModel=W.osName,K({device:{browserName:W.browserName,osName:W.osName}}),performance.mark&&(performance.mark("ua_parser_end"),performance.measure("ua_parser","ua_parser_start","ua_parser_end"))},re={breadcrumbs:[],initialUAAData:{},pageKey:"",pageKeyRegex:{},pagePath:"",prevPageKey:"",prevPagePath:""};function ie(e){Object.assign(re,{breadcrumbs:e})}function ae(e){Object.assign(re,e)}const oe={eventId:0,sequenceNumber:0,sessionId:0,lastEventTime:0,sessionStart:0,sessionUUID:null,userId:null,ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0};function se(e){Object.assign(oe,e)}function ce(){var e,t;return null!=(e=null==(t=document)?void 0:t.referrer)?e:""}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const le=()=>{const e=ce();if(!e)return{};const t=new URL(e);return t.hostname===pe()?{}:{referrer:e,referring_domain:t.hostname}},de=()=>{const e=new URLSearchParams(me()),t={};return O.forEach((n=>{e.has(n)&&(t[n]=(e.get(n)||"").toLowerCase())})),t},pe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.hostname)||""},me=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.search)||""},fe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.pathname)||""},ve=()=>{const e=A.overrideWindowLocation?re.pagePath:fe()+me();e&&e!==re.pagePath&&(e!==re.pagePath&&ge(),re.pagePath=e,re.pageKeyRegex&&Object.keys(re.pageKeyRegex).some((e=>{if(re.pageKeyRegex[e].test(re.pagePath))return re.pageKey=e,!0})))},ge=()=>{if(z()){const e=ce();if(!re.prevPagePath&&e){const t=new URL(e);if(t.hostname===pe())return void(re.prevPagePath=t.pathname)}}re.prevPagePath=re.pagePath,re.prevPageKey=re.pageKey},be=e=>{z()&&Object.assign(e,z()?(Object.keys(re.initialUAAData).length>0||(new URLSearchParams(me()),re.initialUAAData=ue({},(()=>{const e={};return O.forEach((t=>{oe[t]&&(e[t]=oe[t])})),e})(),de(),le())),re.initialUAAData):re.initialUAAData)},he=/^[a-zd]+(_[a-zd]+)*$/;function we(e){return he.test(e)}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}const Te=["action","component_type","component_name","context","logging_id"],ke=["num_non_hardware_accounts","ujs"],_e="ujs_",Se={};function Ee(e){e.forEach((e=>{ke.includes(e)&&delete Se[e]}))}function xe(e){var t;const n=Object.entries(e).reduce(((e,t)=>{const[n,r]=t;return!Te.includes(n)&&ke.includes(n)?we(n)?ye({},e,{[n]:r}):(A.onError(new Error("IdentityFlow property names must have snake case format"),{[n]:r}),e):e}),{});null!=(t=n.ujs)&&t.length&&(n.ujs=n.ujs.map((e=>`${_e}${e}`))),Object.assign(Se,n)}function Oe(){return A.platform!==v.unknown||(A.onError(new Error("SDK platform not initialized")),!1)}const je={eventsQueue:[],eventsScheduled:!1,metricsQueue:[],metricsScheduled:!1,tracesQueue:[],tracesScheduled:!1};function Ne(e){Object.assign(je,e)}const Ie={ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0},Pe={ac:20,af:5,ah:1,al:1,am:0,ar:10,as:20},Me={pv:25},Be={xs:0,s:1,m:1,l:2,xl:2,xxl:2},Ce=e=>e<15?y.xs:e<60?y.s:e<240?y.m:e<960?y.l:e<3840?y.xl:y.xxl,De=e=>{Object.assign(Ie,e)};function Ae(){return(new Date).getTime()}const Le={timeStart:Ae(),timeOnPagePath:0,timeOnPageKey:0,prevTimeOnPagePath:0,prevTimeOnPageKey:0,sessionDuration:0,sessionEnd:0,sessionStart:0,prevSessionDuration:0};function Ue(e){Object.assign(Le,e)}const Re=(e,t)=>t.some((t=>e instanceof t));let qe,Fe;const ze=new WeakMap,Ke=new WeakMap,$e=new WeakMap,Qe=new WeakMap,We=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Xe(this),e),Je(ze.get(this))}:function(...e){return Je(t.apply(Xe(this),e))}:function(e,...n){const r=t.call(Xe(this),e,...n);return $e.set(r,e.sort?e.sort():[e]),Je(r)}:(e instanceof IDBTransaction&&function(e){if(Ke.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}(e),Re(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,He):e);var t}function Je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Je(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ze.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=Ve(e);return t!==e&&(Qe.set(e,t),We.set(t,e)),t}const Xe=e=>We.get(e),Ge=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],Ye=new Map;function et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Ye.set(t,a),a}var tt;tt=He,He={...tt,get:(e,t,n)=>et(e,t)||tt.get(e,t,n),has:(e,t)=>!!et(e,t)||tt.has(e,t)};const nt={isReady:!1,idbKeyval:null};function rt(e){Object.assign(nt,e)}const it={},at=async e=>{if(!nt.idbKeyval)return Promise.resolve(null);try{return await nt.idbKeyval.get(e)}catch(e){return A.onError(new Error("IndexedDB:Get:InternalError")),Promise.resolve(null)}},ot=async(e,t)=>{if(nt.idbKeyval)try{await nt.idbKeyval.set(e,t)}catch(e){A.onError(new Error("IndexedDB:Set:InternalError"))}},st=()=>{"server"!==A.platform&&(se({sessionStart:Le.sessionStart,ac:Ie.ac,af:Ie.af,ah:Ie.ah,al:Ie.al,am:Ie.am,ar:Ie.ar,as:Ie.as,pv:Ie.pv}),H.userId&&se({userId:H.userId}),ot(S,oe))},ct="rgb(5,177,105)",ut=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`%c ${x}`,a=`color:${ct};font-size:11px;`,o=`Importance: ${r}`;console.group(i,a,t,o),n.forEach((e=>{e.event_type?console.log(e.event_type,e):console.log(e)})),console.groupEnd()},lt=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`color:${ct};font-size:11px;`,a=`%c ${x}`,o=`Importance: ${r}`;console.log(a,i,t,n,o)},dt=()=>{const e=Ae();oe.sessionId&&oe.lastEventTime&&oe.sessionUUID&&!pt(e)||(oe.sessionId=e,oe.sessionUUID=V(),Ue({sessionStart:e}),lt({metricName:"Started new session:",data:{persistentData:oe,timeStone:Le}})),oe.lastEventTime=e},pt=e=>e-oe.lastEventTime>18e5;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const ft=e=>{var t;(e=>{switch(e.action){case f.click:Ie.ac+=1;break;case f.focus:Ie.af+=1;break;case f.hover:Ie.ah+=1;break;case f.move:Ie.am+=1;break;case f.scroll:Ie.al+=1;break;case f.search:Ie.ar+=1;break;case f.select:Ie.as+=1}})(t=e),t.event_type!==j?t.event_type===N&&((e=>{if(!e.session_rank)return;const t=e.session_rank;Object.values(h).forEach((e=>{Ie.sqs+=Ie[e]*Pe[e]})),Object.values(w).forEach((e=>{Ie.sqs+=Ie[e]*Me[e]})),Ie.sqs*=Be[t]})(t),Object.assign(t,Ie),De({ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0})):Ie.pv+=1;const n=e.event_type;delete e.event_type;const r=e.deviceId?e.deviceId:null,i=e.timestamp;return delete e.timestamp,se({eventId:oe.eventId+1}),se({sequenceNumber:oe.sequenceNumber+1}),dt(),st(),{device_id:H.deviceId||r||null,user_id:H.userId,timestamp:i,event_id:oe.eventId,session_id:oe.sessionId||-1,event_type:n,version_name:A.version||null,platform:W.amplitudePlatform,os_name:W.amplitudeOSName,os_version:W.amplitudeOSVersion,device_model:W.amplitudeDeviceModel,language:H.languageCode,event_properties:mt({},e,{session_uuid:oe.sessionUUID,height:W.height,width:W.width}),user_properties:X(),uuid:V(),library:{name:"@cbhq/client-analytics",version:"10.6.0"},sequence_number:oe.sequenceNumber,user_agent:W.userAgent||H.userAgent}},vt=e=>e.map((e=>ft(e)));function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}const bt=e=>e.map((e=>(e=>{const t=e.tags||{},n=gt({authed:J()?"true":"false",platform:A.platform},t,{project_name:A.projectName,version_name:A.version||null});return{metric_name:e.metricName,page_path:e.pagePath||null,value:e.value,tags:n,type:e.metricType}})(e))),ht=e=>0!==je.metricsQueue.length&&(je.metricsQueue.length>=A.batchMetricsThreshold||(je.metricsScheduled||(je.metricsScheduled=!0,setTimeout((()=>{je.metricsScheduled=!1,e(bt(je.metricsQueue)),je.metricsQueue=[]}),A.batchMetricsPeriod)),!1)),wt=e=>0!==je.tracesQueue.length&&(je.tracesQueue.length>=A.batchTracesThreshold||(je.tracesScheduled||(je.tracesScheduled=!0,setTimeout((()=>{je.tracesScheduled=!1,e(je.tracesQueue),je.tracesQueue=[]}),A.batchTracesPeriod)),!1)),yt=e=>{var t;z()&&null!=(t=window)&&t.requestIdleCallback?window.requestIdleCallback(e,{timeout:A.ricTimeoutScheduleEvent}):(q()||F())&&A.interactionManager?A.interactionManager.runAfterInteractions(e):e()};function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}const kt="application/x-www-form-urlencoded; charset=UTF-8",_t=e=>{const{data:t,importance:n,isJSON:r,onError:i,url:a}=e,o=r?"application/json":kt,s=n||l.low,c=r?JSON.stringify(t):new URLSearchParams(t).toString();function u(){const e=new XMLHttpRequest;e.open("POST",a,!0),Object.keys(A.headers||{}).forEach((t=>{e.setRequestHeader(t,A.headers[t])})),e.setRequestHeader("Content-Type",kt),H.jwt&&e.setRequestHeader("authorization",`Bearer ${H.jwt}`),e.send(c)}if(!z()||r||!("sendBeacon"in navigator)||s!==l.low||A.headers&&0!==Object.keys(A.headers).length)if(z()&&!r)u();else{const e=Tt({},A.headers,{"Content-Type":o});H.jwt&&(e.Authorization=`Bearer ${H.jwt}`),fetch(a,{method:"POST",mode:"no-cors",headers:e,body:c}).catch((e=>{i(e,{context:"AnalyticsSDKApiError"})}))}else{const e=new Blob([c],{type:kt});try{navigator.sendBeacon.bind(navigator)(a,e)||u()}catch(e){console.error(e),u()}}};var St=n(762),Et=n.n(St);const xt=(e,t,n)=>{const r=e||"";return Et()("2"+r+t+n)};function Ot(){return Ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ot.apply(this,arguments)}class jt extends Error{constructor(e){super(e),this.name="CircularJsonReference",this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class Nt extends jt{constructor(...e){super(...e),this.name="DomReferenceInAnalyticsEvent"}}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}const Pt=(e,t=l.low)=>{var n;e&&je.eventsQueue.push(e),nt.isReady&&(!A.trackUserId||H.userId?(t===l.high||(n=Mt,0!==je.eventsQueue.length&&(je.eventsQueue.length>=A.batchEventsThreshold||(je.eventsScheduled||(je.eventsScheduled=!0,setTimeout((()=>{je.eventsScheduled=!1,n(vt(je.eventsQueue)),je.eventsQueue=[]}),A.batchEventsPeriod)),0))))&&Bt():je.eventsQueue.length>10&&(A.trackUserId=!1,A.onError(new Error("userId not set in Logged-in"))))},Mt=(e,t=l.low)=>{if(H.isOptOut||0===e.length)return;let n;try{n=JSON.stringify(e)}catch(t){const r=e.map((e=>e.event_type)).join(", "),[i,a]=(e=>{try{const n=[];for(const r of e){const e=Ot({},r);r.event_properties&&(e.event_properties=Ot({},e.event_properties,{currentTarget:null,target:null,relatedTarget:null,_dispatchInstances:null,_targetInst:null,view:(t=r.event_properties.view,["string","number","boolean"].includes(typeof t)?r.event_properties.view:null)})),n.push(e)}return[!0,JSON.stringify(n)]}catch(e){return[!1,""]}var t})(e);if(!i)return void A.onError(new jt(t instanceof Error?t.message:"unknown"),{listEventType:r});n=a,A.onError(new Nt("Found DOM element reference"),{listEventType:r,stringifiedEventData:n})}const r=Ae().toString(),i=It({},{e:n,v:"2",upload_time:r},{client:A.amplitudeApiKey,checksum:xt(A.amplitudeApiKey,n,r)});_t({url:A.eventsEndpoint,data:i,importance:t,onError:A.onError}),ut({metricName:"Batch Events",data:e,importance:t})},Bt=()=>{Mt(vt(je.eventsQueue)),Ne({eventsQueue:[]})};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ct.apply(this,arguments)}const Dt=Object.values(f),At=Object.values(m),Lt=e=>Dt.includes(e)?e:f.unknown,Ut=e=>At.includes(e)?e:m.unknown,Rt=(e,t,n)=>{const r={auth:J()?b.loggedIn:b.notLoggedIn,action:Lt(e),component_type:Ut(t),logging_id:n,platform:A.platform,project_name:A.projectName};return"number"==typeof H.userTypeEnum&&(r.user_type_enum=H.userTypeEnum),r},qt=e=>{const t=Ae();if(!e)return A.onError(new Error("missing logData")),Ct({},Rt(f.unknown,m.unknown),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});const n=Ct({},e,Rt(e.action,e.componentType,e.loggingId),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});return delete n.componentType,delete n.loggingId,n},Ft={blacklistRegex:[],isEnabled:!1};function zt(){return{page_key:re.pageKey,page_path:re.pagePath,prev_page_key:re.prevPageKey,prev_page_path:re.prevPagePath}}function Kt(e){Object.assign(Ft,e)}function $t(e,t,n=l.low){if(H.isOptOut)return;if(!Oe())return;const r=qt(t);!function(e){Ft.isEnabled&&(ve(),Object.assign(e,zt()))}(r),be(r),function(e){Object.keys(Se).length>0&&Object.assign(e,Se)}(r),r.has_double_fired=!1,r.event_type=e,n===l.high?Pt(r,n):yt((()=>{Pt(r)}))}function Qt(e,t=!1){t?_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Metrics",data:e})}function Wt(){return Wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wt.apply(this,arguments)}function Ht(e){if(!Oe())return;v.server!==A.platform&&!e.pagePath&&re.pagePath&&(e.pagePath=re.pagePath);const t=Object.keys(Se).length?Wt({},e.tags,Se):e.tags;t&&Object.assign(e,{tags:t}),je.metricsQueue.push(e),ht(Qt)&&(Qt(bt(je.metricsQueue)),je.metricsQueue=[])}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(this,arguments)}let Jt=function(e){return e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable",e}({});function Xt(e){return e.toLowerCase()}let Gt={};const Zt=(e,t)=>{null!=A&&A.onMarkStep&&A.onMarkStep(e,t),xe({ujs:t})};let Yt;const en={Perfume:()=>{},markStep:e=>{},markStepOnce:e=>{},incrementUjNavigation:()=>{}},tn=()=>{z()&&Yt&&Yt.markNTBT&&Yt.markNTBT()},nn=e=>{z()&&Yt&&en.markStep&&en.markStep(e)},rn=e=>{z()&&Yt&&en.markStepOnce&&en.markStepOnce(e)},an=()=>{z()&&Yt&&en.incrementUjNavigation&&en.incrementUjNavigation()};function on(e={callMarkNTBT:!0}){"unknown"!==A.platform&&(Ft.blacklistRegex.some((e=>e.test(fe())))||($t(j,{action:f.render,componentType:m.page}),e.callMarkNTBT&&tn()))}let sn=!1,cn=!1;const un=e=>{sn=!e.persisted},ln=(e,t="hidden",n=!1)=>{cn||(addEventListener("pagehide",un),addEventListener("beforeunload",(()=>{})),cn=!0),addEventListener("visibilitychange",(({timeStamp:n})=>{document.visibilityState===t&&e({timeStamp:n,isUnloading:sn})}),{capture:!0,once:n})},dn=36e3;function pn(){const e=pt(Ae());if(e&&(O.forEach((e=>{oe[e]&&delete oe[e]})),st()),!oe.lastEventTime||!Le.sessionStart||!e)return;const t=Math.round((oe.lastEventTime-Le.sessionStart)/1e3);if(t<1||t>dn)return;const n=Ce(t);$t(N,{action:f.measurement,componentType:m.page,session_duration:t,session_end:oe.lastEventTime,session_start:Le.sessionStart,session_rank:n})}function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)}const fn=[],vn=[],gn=()=>{const e=fn.shift();e&&e()},bn=()=>{const e=vn.shift();e&&e()};let hn={};function wn(e){const t=function(e){return{test_name:e.testName,group_name:e.group,subject_id:e.subjectId,exposed_at:Ae(),subject_type:e.subjectType,platform:A.platform}}(e);hn[e.testName]=hn[e.testName]||0,hn[e.testName]+k>Ae()?lt({metricName:`Event: exposeExperiment ${e.testName} not sent`,data:t}):(hn[e.testName]=Ae(),ot(E,hn),lt({metricName:`Event: exposeExperiment ${e.testName} sent`,data:t}),_t({url:A.exposureEndpoint,data:[t],onError:(t,n)=>{hn[e.testName]=0,ot(E,hn),A.onError(t,n)},isJSON:!0,importance:l.high}))}const yn=e=>{var t,r,i;U(e),z()&&(H.languageCode=(null==(t=navigator)?void 0:t.languages[0])||(null==(r=navigator)?void 0:r.language)||""),te(),(()=>{var e;if(z()&&null!=(e=window)&&e.indexedDB){const e=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}});rt({idbKeyval:{get:async t=>(await e).get("keyval",t),set:async(t,n)=>(await e).put("keyval",n,t),delete:async t=>(await e).delete("keyval",t),keys:async()=>(await e).getAllKeys("keyval")}})}else rt({idbKeyval:{get:async e=>new Promise((t=>{t(it[e])})),set:async(e,t)=>new Promise((n=>{it[e]=t,n(e)})),delete:async e=>new Promise((()=>{delete it[e]})),keys:async()=>new Promise((e=>{e(Object.keys(it))}))}})})(),lt({metricName:"Initialized Analytics:",data:{deviceId:H.deviceId}}),fn.push((()=>{Pt()})),(async()=>{const e=await at(S);rt({isReady:!0}),gn(),e&&(bn(),se({eventId:e.eventId||oe.eventId,sequenceNumber:e.sequenceNumber||oe.sequenceNumber,sessionId:e.sessionId||oe.sessionId,lastEventTime:e.lastEventTime||oe.lastEventTime,sessionUUID:e.sessionUUID||oe.sessionUUID}),function(e){se(mn({},function(e){const t={};return O.forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e),de()))}(e),Ue({sessionStart:e.sessionStart||oe.sessionStart}),De({ac:e.ac||Ie.ac,af:e.af||Ie.af,ah:e.ah||Ie.ah,al:e.al||Ie.al,am:e.am||Ie.am,ar:e.ar||Ie.ar,as:e.as||Ie.as,pv:e.pv||Ie.pv}),A.trackUserId&&Y({userId:e.userId||H.userId}),pn(),lt({metricName:"Initialized Analytics IndexedDB:",data:e}))})(),async function(){at(E).then((e=>{hn=null!=e?e:{}})).catch((e=>{e instanceof Error&&A.onError(e)}))}(),Z(),z()&&(ln((()=>{se({lastEventTime:Ae()}),st(),Bt()}),"hidden"),ln((()=>{pn()}),"visible")),z()&&(i=()=>{var e,t,n,r;te(),ee({width:null!=(e=null==(t=window)?void 0:t.innerWidth)?e:null,height:null!=(n=null==(r=window)?void 0:r.innerHeight)?n:null})},addEventListener("resize",(()=>{requestAnimationFrame((()=>{i()}))}))),(()=>{if(z())try{const e=n(2);en.markStep=e.markStep,en.markStepOnce=e.markStepOnce,en.incrementUjNavigation=e.incrementUjNavigation,Yt=new e.Perfume({analyticsTracker:e=>{const{data:t,attribution:n,metricName:r,navigatorInformation:i,rating:a}=e,o=I[r],s=(null==n?void 0:n.category)||null;if(!o&&!s)return;const c=(null==i?void 0:i.deviceMemory)||0,u=(null==i?void 0:i.hardwareConcurrency)||0,l=(null==i?void 0:i.isLowEndDevice)||!1,p=(null==i?void 0:i.isLowEndExperience)||!1,v=(null==i?void 0:i.serviceWorkerStatus)||"unsupported",g=Vt({deviceMemory:c,hardwareConcurrency:u,isLowEndDevice:l,isLowEndExperience:p,serviceWorkerStatus:v},Gt),b={is_low_end_device:l,is_low_end_experience:p,page_key:re.pageKey||"",save_data:t.saveData||!1,service_worker:v,is_perf_metric:!0};if("navigationTiming"===r)t&&"number"==typeof t.redirectTime&&Ht({metricName:I.redirectTime.eventName,metricType:d.histogram,tags:b,value:t.redirectTime||0});else if("TTFB"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),Ht({metricName:I.TTFB.eventName,metricType:d.histogram,tags:Vt({},b),value:t}),a&&Ht({metricName:`perf_web_vitals_ttfb_${a}`,metricType:d.count,tags:b,value:1});else if("networkInformation"===r)null!=t&&t.effectiveType&&(Gt=t,$t(o.eventName,{action:f.measurement,componentType:m.page,networkInformationDownlink:t.downlink,networkInformationEffectiveType:t.effectiveType,networkInformationRtt:t.rtt,networkInformationSaveData:t.saveData,navigatorDeviceMemory:c,navigatorHardwareConcurrency:u}));else if("storageEstimate"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page},t,g)),Ht({metricName:"perf_storage_estimate_caches",metricType:d.histogram,tags:b,value:t.caches}),Ht({metricName:"perf_storage_estimate_indexed_db",metricType:d.histogram,tags:b,value:t.indexedDB});else if("CLS"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,score:100*t||null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_cls_${a}`,metricType:d.count,tags:b,value:1});else if("FID"===r){const e=(null==n?void 0:n.performanceEntry)||null,r=parseInt((null==e?void 0:e.processingStart)||"");$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,processingStart:null!=e&&e.processingStart?r:null,startTime:null!=e&&e.startTime?parseInt(e.startTime):null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_fidVitals_${a}`,metricType:d.count,tags:b,value:1})}else"userJourneyStep"===r?($t("perf_user_journey_step",Vt({action:f.measurement,componentType:m.page,duration:t||null,rating:null!=a?a:null,step_name:(null==n?void 0:n.stepName)||""},g)),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}_vitals_${a}`,metricType:d.count,tags:b,value:1}),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}`,metricType:d.distribution,tags:b,value:t||null})):I[r]&&t&&($t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),a&&(Ht({metricName:`perf_web_vitals_${Xt(r)}_${a}`,metricType:d.count,tags:b,value:1}),"LCP"===r&&Ht({metricName:`perf_web_vitals_${Xt(r)}`,metricType:d.distribution,tags:b,value:t})))},maxMeasureTime:3e4,steps:A.steps,onMarkStep:Zt})}catch(e){e instanceof Error&&A.onError(e)}})()},Tn=e=>{Y(e),e.userAgent&&Z(),lt({metricName:"Identify:",data:{countryCode:H.countryCode,deviceId:H.deviceId,userId:H.userId}})},kn=({blacklistRegex:e,pageKeyRegex:t,browserHistory:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.listen((()=>{on()}))},_n=({blacklistRegex:e,pageKeyRegex:t,nextJsRouter:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.events.on("routeChangeComplete",(()=>{on()}))},Sn=()=>{Y({isOptOut:!0}),ot(S,{})},En=()=>{Y({isOptOut:!1})},xn={Button:{label:"cb_button",uuid:"e921a074-40e6-4371-8700-134d5cd633e6",componentType:m.button}};function On(e,t,n){return{componentName:e,actions:t,data:n}}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Nn(e,t,n){const{componentName:r,data:i}=n;$t(e.label,jn({componentType:e.componentType,action:t,loggingId:e.uuid,component_name:r},i))}const In={actionMapping:{onPress:f.click,onHover:f.hover},handlers:{Button:{[f.click]:e=>Nn(xn.Button,f.click,e),[f.hover]:e=>Nn(xn.Button,f.hover,e)}}};function Pn(e,t=!1){t?_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Traces",data:e})}function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}const Bn=1e6;function Cn(e){return e*Bn}function Dn(e=function(){var e;return null==(e=window)?void 0:e.crypto}()){const t=new Uint32Array(2);return null==e||e.getRandomValues(t),((BigInt(t[0])<<BigInt(32))+BigInt(t[1])).toString()}function An(e,t){return{"x-datadog-origin":"rum","x-datadog-parent-id":t,"x-datadog-sampling-priority":"1","x-datadog-trace-id":e}}function Ln(e){var t;const{name:n,traceId:r,spanId:i,start:a,duration:o,resource:s,meta:c}=e;return{duration:o?Cn(o):0,name:n,resource:s,service:A.projectName,span_id:null!=i?i:Dn(),start:a?Cn(a):0,trace_id:null!=r?r:Dn(),parent_id:P,type:M,meta:Mn({platform:A.platform},re.pageKey?{page_key:re.pageKey}:{},null!=(t=Se.ujs)&&t.length?{last_ujs:Se.ujs[Se.ujs.length-1]}:{},null!=c?c:{})}}function Un(e){return[Ln(e)]}function Rn(e,t){Oe()&&function(e){return e.length>0}(e)&&(t&&function(e,t){e.forEach((e=>function(e,t){const n=Mn({},e.meta,t.meta),r={start:t.start?Cn(t.start):e.start,duration:t.duration?Cn(t.duration):e.duration};Object.assign(e,t,Mn({meta:n},r))}(e,t)))}(e,t),je.tracesQueue.push(e),wt(Pn)&&(Pn(je.tracesQueue),je.tracesQueue=[]))}function qn(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function Fn(){return Fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fn.apply(this,arguments)}function zn(){return void 0!==typeof window&&"performance"in window&&"mark"in performance&&"getEntriesByName"in performance}function Kn(e,t){return`perf_${e}${null!=t&&t.label?`_${t.label}`:""}`}function $n(e,t,n){return`${Kn(e,n)}__${t}`}let Qn={};function Wn(e,t,n){if(!zn())return;const r=$n(e,t,n);if(performance.mark(r),"end"===t){const t=Kn(e,n);!function(e,t,n){try{performance.measure(e,t,n)}catch(e){A.onError(e)}}(t,$n(e,"start",n),r);const i=performance.getEntriesByName(t).pop();i&&Ht(Fn({metricName:e,metricType:d.distribution,value:i.duration},null!=n&&n.tags?{tags:n.tags}:{}))}}function Hn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]||(Wn(e,"start",t),Qn[n]=!0)}function Vn(e,t){const n=$n(e,"start",t),r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(Qn,[n].map(qn));Qn=r}function Jn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]&&(Wn(e,"end",t),Vn(e,t))}function Xn(){zn()&&(performance.clearMarks(),Qn={})}var Gn=n(784);function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}function Yn(e,t,n=l.low){const r=(0,Gn.useRef)(t);return(0,Gn.useEffect)((()=>{r.current=t}),[t]),(0,Gn.useCallback)((t=>{$t(e,Zn({},r.current,t),n)}),[e,n])}function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t,n=l.low){(0,Gn.useEffect)((()=>{const r=er({},t,{action:f.render});$t(e,r,n)}),[])}function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=function(e,t){return{markStartPerf:(0,Gn.useCallback)((()=>Hn(e,t)),[e,t]),markEndPerf:(0,Gn.useCallback)((n=>Jn(e,nr({},t,n))),[e,t])}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function ar(){return Object.entries(ir({},Se,zt(),{sessionUUID:oe.sessionUUID,userId:oe.userId})).reduce(((e,t)=>{return null!=(n=t[1])&&""!==n?ir({},e,{[t[0]]:t[1]}):e;var n}),{})}async function or(){return new Promise((e=>{Mt(vt(je.eventsQueue)),Qt(bt(je.metricsQueue),!0),Pn(je.tracesQueue,!0),Ne({eventsQueue:[],metricsQueue:[],tracesQueue:[]}),e()}))}function sr(){return{"X-CB-Device-ID":H.deviceId||"unknown","X-CB-Is-Logged-In":H.userId?"true":"false","X-CB-Pagekey":re.pageKey||"unknown","X-CB-UJS":(e=Se.ujs,void 0===e||0===e.length?"":e.join(",")),"X-CB-Platform":A.platform||"unknown","X-CB-Project-Name":A.projectName||"unknown","X-CB-Session-UUID":oe.sessionUUID||"unknown","X-CB-Version-Name":A.version?String(A.version):"unknown"};var e}})(),r})()}));'),
                (t.type = "text/javascript"),
                document.head.appendChild(t),
                I(),
                document.head.removeChild(t),
                e();
            } catch (e) {
              console.error("Failed to execute inlined telemetry script"), t();
            }
          }),
        I = () => {
          var e, t, n;
          if ("undefined" != typeof window) {
            let r =
              null !=
              (n =
                null != (e = A.config.get().deviceId)
                  ? e
                  : null == (t = window.crypto)
                  ? void 0
                  : t.randomUUID())
                ? n
                : "";
            if (window.ClientAnalytics) {
              let {
                init: e,
                identify: t,
                PlatformName: n,
              } = window.ClientAnalytics;
              e({
                isProd: !0,
                amplitudeApiKey: "c66737ad47ec354ced777935b0af822e",
                platform: n.web,
                projectName: "base_account_sdk",
                showDebugLogging: !1,
                version: "1.0.0",
                apiEndpoint: "https://cca-lite.coinbase.com",
              }),
                t({ deviceId: r }),
                A.config.set({ deviceId: r });
            }
          }
        },
        O = "0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a",
        P = "0xf85210B21cC50302F477BA56686d2019dC9b67Ad",
        C = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "AlreadyOwner",
            type: "error",
          },
          { inputs: [], name: "Initialized", type: "error" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidEthereumAddressOwner",
            type: "error",
          },
          {
            inputs: [{ name: "key", type: "uint256" }],
            name: "InvalidNonceKey",
            type: "error",
          },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidOwnerBytesLength",
            type: "error",
          },
          { inputs: [], name: "LastOwner", type: "error" },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "NoOwnerAtIndex",
            type: "error",
          },
          {
            inputs: [{ name: "ownersRemaining", type: "uint256" }],
            name: "NotLastOwner",
            type: "error",
          },
          {
            inputs: [{ name: "selector", type: "bytes4" }],
            name: "SelectorNotAllowed",
            type: "error",
          },
          { inputs: [], name: "Unauthorized", type: "error" },
          { inputs: [], name: "UnauthorizedCallContext", type: "error" },
          { inputs: [], name: "UpgradeFailed", type: "error" },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "expectedOwner", type: "bytes" },
              { name: "actualOwner", type: "bytes" },
            ],
            name: "WrongOwnerAtIndex",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "AddOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "RemoveOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !0, name: "implementation", type: "address" }],
            name: "Upgraded",
            type: "event",
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "REPLAYABLE_NONCE_KEY",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owner", type: "address" }],
            name: "addOwnerAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "addOwnerPublicKey",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "functionSelector", type: "bytes4" }],
            name: "canSkipChainIdValidation",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "domainSeparator",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { name: "fields", type: "bytes1" },
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
              { name: "salt", type: "bytes32" },
              { name: "extensions", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "entryPoint",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "target", type: "address" },
              { name: "value", type: "uint256" },
              { name: "data", type: "bytes" },
            ],
            name: "execute",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "value", type: "uint256" },
                  { name: "data", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "executeBatch",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "calls", type: "bytes[]" }],
            name: "executeWithoutChainIdValidation",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
            ],
            name: "getUserOpHashWithoutChainId",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "$", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owners", type: "bytes[]" }],
            name: "initialize",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "isOwnerAddress",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "bytes" }],
            name: "isOwnerBytes",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "isOwnerPublicKey",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "hash", type: "bytes32" },
              { name: "signature", type: "bytes" },
            ],
            name: "isValidSignature",
            outputs: [{ name: "result", type: "bytes4" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "nextOwnerIndex",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "ownerAtIndex",
            outputs: [{ name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ownerCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "proxiableUUID",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeLastOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeOwnerAtIndex",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "removedOwnersCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "hash", type: "bytes32" }],
            name: "replaySafeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "newImplementation", type: "address" },
              { name: "data", type: "bytes" },
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
              { name: "userOpHash", type: "bytes32" },
              { name: "missingAccountFunds", type: "uint256" },
            ],
            name: "validateUserOp",
            outputs: [{ name: "validationData", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        T = [
          {
            inputs: [{ name: "implementation_", type: "address" }],
            stateMutability: "payable",
            type: "constructor",
          },
          { inputs: [], name: "OwnerRequired", type: "error" },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "createAccount",
            outputs: [{ name: "account", type: "address" }],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "getAddress",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "initCodeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        j = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        M = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        L = "Unspecified error message.";
      function N(e, t = L) {
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (B(M, t)) return M[t].message;
          if ((n = e) >= -32099 && n <= -32e3)
            return "Unspecified server error.";
        }
        return t;
      }
      function D(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function B(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function U(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let R = {
        rpc: {
          parse: (e) => q(j.rpc.parse, e),
          invalidRequest: (e) => q(j.rpc.invalidRequest, e),
          invalidParams: (e) => q(j.rpc.invalidParams, e),
          methodNotFound: (e) => q(j.rpc.methodNotFound, e),
          internal: (e) => q(j.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return q(t, e);
          },
          invalidInput: (e) => q(j.rpc.invalidInput, e),
          resourceNotFound: (e) => q(j.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => q(j.rpc.resourceUnavailable, e),
          transactionRejected: (e) => q(j.rpc.transactionRejected, e),
          methodNotSupported: (e) => q(j.rpc.methodNotSupported, e),
          limitExceeded: (e) => q(j.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => H(j.provider.userRejectedRequest, e),
          unauthorized: (e) => H(j.provider.unauthorized, e),
          unsupportedMethod: (e) => H(j.provider.unsupportedMethod, e),
          disconnected: (e) => H(j.provider.disconnected, e),
          chainDisconnected: (e) => H(j.provider.chainDisconnected, e),
          unsupportedChain: (e) => H(j.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new z(t, n, r);
          },
        },
      };
      function q(e, t) {
        let [n, r] = F(t);
        return new G(e, n || N(e), r);
      }
      function H(e, t) {
        let [n, r] = F(t);
        return new z(e, n || N(e), r);
      }
      function F(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class G extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class z extends G {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      function W(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "code" in e &&
          "data" in e &&
          -32090 === e.code &&
          "object" == typeof e.data &&
          null !== e.data &&
          "type" in e.data &&
          "INSUFFICIENT_FUNDS" === e.data.type
        );
      }
      function $(e) {
        return "object" == typeof e && null !== e && "details" in e;
      }
      function K(e, t, n) {
        if (null == e)
          throw null != t
            ? t
            : R.rpc.invalidParams({
                message: null != n ? n : "value must be present",
                data: e,
              });
      }
      function V(e, t) {
        if (!Array.isArray(e))
          throw R.rpc.invalidParams({
            message: null != t ? t : "value must be an array",
            data: e,
          });
      }
      let Z = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: J, getCrossOriginOpenerPolicy: Q } =
          (() => {
            let e;
            return {
              getCrossOriginOpenerPolicy: () =>
                void 0 === e ? "undefined" : e,
              checkCrossOriginOpenerPolicy: async () => {
                if ("undefined" == typeof window) {
                  e = "non-browser-env";
                  return;
                }
                try {
                  let t = `${window.location.origin}${window.location.pathname}`,
                    n = await fetch(t, { method: "HEAD" });
                  if (!n.ok) throw Error(`HTTP error! status: ${n.status}`);
                  let r = n.headers.get("Cross-Origin-Opener-Policy");
                  (e = null != r ? r : "null"),
                    "same-origin" === e && console.error(Z);
                } catch (t) {
                  console.error(
                    "Error checking Cross-Origin-Opener-Policy:",
                    t.message
                  ),
                    (e = "error");
                }
              },
            };
          })();
      function Y(e) {
        if ("function" != typeof e) throw Error("toAccount is not a function");
      }
      async function X(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          r = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": h,
              "X-Cbw-Sdk-Platform": m,
            },
          }),
          { result: a, error: i } = await r.json();
        if (i) throw i;
        return a;
      }
      let ee = "https://rpc.wallet.coinbase.com",
        et = "https://www.walletlink.org";
      function en(e, t, n) {
        var r, a, i, s;
        window.ClientAnalytics &&
          (null == (r = window.ClientAnalytics) ||
            r.logEvent(
              e,
              Object.assign(Object.assign({}, t), {
                sdkVersion: h,
                appName:
                  null !=
                  (i =
                    null == (a = A.config.get().metadata) ? void 0 : a.appName)
                    ? i
                    : "",
                appOrigin: window.location.origin,
                appPreferredSigner:
                  null == (s = A.config.get().preference) ? void 0 : s.options,
              }),
              n
            ));
      }
      !(function (e) {
        (e.unknown = "unknown"),
          (e.banner = "banner"),
          (e.button = "button"),
          (e.card = "card"),
          (e.chart = "chart"),
          (e.content_script = "content_script"),
          (e.dropdown = "dropdown"),
          (e.link = "link"),
          (e.page = "page"),
          (e.modal = "modal"),
          (e.table = "table"),
          (e.search_bar = "search_bar"),
          (e.service_worker = "service_worker"),
          (e.text = "text"),
          (e.text_input = "text_input"),
          (e.tray = "tray"),
          (e.checkbox = "checkbox"),
          (e.icon = "icon");
      })(r || (r = {})),
        (function (e) {
          (e.unknown = "unknown"),
            (e.blur = "blur"),
            (e.click = "click"),
            (e.change = "change"),
            (e.dismiss = "dismiss"),
            (e.focus = "focus"),
            (e.hover = "hover"),
            (e.select = "select"),
            (e.measurement = "measurement"),
            (e.move = "move"),
            (e.process = "process"),
            (e.render = "render"),
            (e.scroll = "scroll"),
            (e.view = "view"),
            (e.search = "search"),
            (e.keyPress = "keyPress"),
            (e.error = "error");
        })(a || (a = {})),
        (function (e) {
          (e.low = "low"), (e.high = "high");
        })(i || (i = {}));
      let er = () => {
          en(
            "communicator.popup_setup.started",
            { action: a.unknown, componentType: r.unknown },
            i.high
          );
        },
        ea = () => {
          en(
            "communicator.popup_setup.completed",
            { action: a.unknown, componentType: r.unknown },
            i.high
          );
        },
        ei = () => {
          en(
            "communicator.popup_unload.received",
            { action: a.unknown, componentType: r.unknown },
            i.high
          );
        },
        es = ({ snackbarContext: e }) => {
          en(
            `snackbar.${e}.shown`,
            { action: a.render, componentType: r.modal, snackbarContext: e },
            i.high
          );
        },
        eo = ({ snackbarContext: e, snackbarAction: t }) => {
          en(
            `snackbar.${e}.action_clicked`,
            {
              action: a.click,
              componentType: r.button,
              snackbarContext: e,
              snackbarAction: t,
            },
            i.high
          );
        };
      function ec() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function eu() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t)
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                else for (n in t) t[n] && (a && (a += " "), (a += n));
              return a;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      var el = n(66117),
        ed = n(50755);
      function ef() {
        var e, t;
        return (
          null !=
            (t =
              null == (e = null == window ? void 0 : window.matchMedia)
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) && t
        );
      }
      class ep {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ef());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, el.render)(
              (0, el.h)(
                "div",
                null,
                (0, el.h)(
                  eh,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, el.h)(em, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let eh = (e) =>
          (0, el.h)(
            "div",
            { class: eu("-cbwsdk-snackbar-container") },
            (0, el.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, el.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        em = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [r, a] = (0, ed.useState)(!0),
            [i, s] = (0, ed.useState)(null != e && e);
          return (
            (0, ed.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  a(!1);
                }, 1),
                window.setTimeout(() => {
                  s(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, el.h)(
              "div",
              {
                class: eu(
                  "-cbwsdk-snackbar-instance",
                  r && "-cbwsdk-snackbar-instance-hidden",
                  i && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, el.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    s(!i);
                  },
                },
                (0, el.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, el.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, el.h)(
                  "div",
                  { class: "-gear-container" },
                  !i &&
                    (0, el.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, el.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, el.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, el.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    (0, el.h)(
                      "div",
                      {
                        class: eu(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, el.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, el.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, el.h)(
                        "span",
                        {
                          class: eu(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        },
        ey =
          "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
      class eb {
        constructor() {
          (this.attached = !1), (this.snackbar = new ep());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            ec();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: ey,
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      let eg = {
          isRed: !1,
          info: "Retry",
          svgWidth: "10",
          svgHeight: "11",
          path: ey,
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
        },
        ew = null;
      function ev() {
        if (!ew) {
          let e = document.createElement("div");
          (e.className = "-cbwsdk-css-reset"),
            document.body.appendChild(e),
            (ew = new ep()).attach(e);
        }
        return ew;
      }
      class e_ {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let r = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let a = n.data;
                  e(a) &&
                    (t(a),
                    window.removeEventListener("message", r),
                    this.listeners.delete(r));
                };
                window.addEventListener("message", r),
                  this.listeners.set(r, { reject: n });
              })),
            (this.disconnect = () => {
              !(function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(R.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : (er(),
                  (this.popup = await (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 700) / 2 + window.screenY;
                    function r() {
                      let r = `wallet_${crypto.randomUUID()}`,
                        a = window.open(
                          e,
                          r,
                          `width=420, height=700, left=${t}, top=${n}`
                        );
                      return (null == a || a.focus(), a) ? a : null;
                    }
                    var a = e;
                    for (let [e, t] of Object.entries({
                      sdkName: m,
                      sdkVersion: h,
                      origin: window.location.origin,
                      coop: Q(),
                    }))
                      a.searchParams.has(e) ||
                        a.searchParams.append(e, t.toString());
                    let i = r();
                    if (!i) {
                      let e = ev();
                      return new Promise((t, n) => {
                        es({ snackbarContext: "popup_blocked" }),
                          e.presentItem({
                            autoExpand: !0,
                            message: "Popup was blocked. Try again.",
                            menuItems: [
                              Object.assign(Object.assign({}, eg), {
                                onClick: () => {
                                  eo({
                                    snackbarContext: "popup_blocked",
                                    snackbarAction: "confirm",
                                  }),
                                    (i = r())
                                      ? t(i)
                                      : n(
                                          R.rpc.internal(
                                            "Popup window was blocked"
                                          )
                                        ),
                                    e.clear();
                                },
                              }),
                            ],
                          });
                      });
                    }
                    return Promise.resolve(i);
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(() => {
                      this.disconnect(), ei();
                    })
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: h,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw R.rpc.internal();
                      return ea(), this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      function ex(e) {
        return void 0 !== e.errorMessage;
      }
      var ek = n(15484);
      class eE extends ek.b {}
      class eA {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let r = localStorage.key(n);
            "string" == typeof r && r.startsWith(e) && t.push(r);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new eA("CBWSDK").clear(), new eA("walletlink").clear();
        }
      }
      let eS = ({ signerType: e }) => {
          en(
            "provider.signer.loaded_from_storage",
            { action: a.measurement, componentType: r.unknown, signerType: e },
            i.low
          );
        },
        eI = ({ method: e, correlationId: t }) => {
          en(
            "provider.request.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
            },
            i.high
          );
        },
        eO = ({
          method: e,
          correlationId: t,
          signerType: n,
          errorMessage: s,
        }) => {
          en(
            "provider.request.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              signerType: n,
              correlationId: t,
              errorMessage: s,
            },
            i.high
          );
        },
        eP = ({ method: e, signerType: t, correlationId: n }) => {
          en(
            "provider.request.responded",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              signerType: t,
              correlationId: n,
            },
            i.high
          );
        },
        eC = () => {
          en(
            "provider.enable_function.called",
            { action: a.measurement, componentType: r.unknown },
            i.high
          );
        },
        eT = () => {
          en(
            "signer.selection.requested",
            { action: a.unknown, componentType: r.unknown },
            i.high
          );
        },
        ej = (e) => {
          en(
            "signer.selection.responded",
            { action: a.unknown, componentType: r.unknown, signerType: e },
            i.high
          );
        },
        eM = (e) => e,
        eL = (e) => e;
      function eN(e) {
        return Math.floor(e);
      }
      var eD = n(44134).Buffer;
      let eB = /^[0-9]*$/,
        eU = /^[a-f0-9]*$/;
      function eR(e) {
        return eq(crypto.getRandomValues(new Uint8Array(e)));
      }
      function eq(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function eH(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function eF(e, t = !1) {
        let n = e.toString("hex");
        return eM(t ? `0x${n}` : n);
      }
      function eG(e) {
        return eF(eX(e), !0);
      }
      function ez(e) {
        return eL(e.toString(10));
      }
      function eW(e) {
        return eM(`0x${BigInt(e).toString(16)}`);
      }
      function e$(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function eK(e) {
        return e$(e) ? e.slice(2) : e;
      }
      function eV(e) {
        return e$(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function eZ(e) {
        if ("string" != typeof e) return !1;
        let t = eK(e).toLowerCase();
        return eU.test(t);
      }
      function eJ(e, t = !1) {
        if ("string" == typeof e) {
          let n = eK(e).toLowerCase();
          if (eU.test(n)) return eM(t ? `0x${n}` : n);
        }
        throw R.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`);
      }
      function eQ(e, t = !1) {
        let n = eJ(e, !1);
        return n.length % 2 == 1 && (n = eM(`0${n}`)), t ? eM(`0x${n}`) : n;
      }
      function eY(e) {
        if ("string" == typeof e) {
          let t = eK(e).toLowerCase();
          if (eZ(t) && 40 === t.length) return eV(t);
        }
        throw R.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function eX(e) {
        if (eD.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (eZ(e)) {
            let t = eQ(e, !1);
            return eD.from(t, "hex");
          }
          return eD.from(e, "utf8");
        }
        throw R.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function e0(e) {
        if ("number" == typeof e && Number.isInteger(e)) return eN(e);
        if ("string" == typeof e) {
          if (eB.test(e)) return eN(Number(e));
          if (eZ(e)) return eN(Number(BigInt(eQ(e, !0))));
        }
        throw R.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function e1(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(e0(e));
        if ("string" == typeof e) {
          if (eB.test(e)) return BigInt(e);
          if (eZ(e)) return BigInt(eQ(e, !0));
        }
        throw R.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      let e2 = p(() => ({ correlationIds: new Map() })),
        e3 = {
          get: (e) => e2.getState().correlationIds.get(e),
          set: (e, t) => {
            e2.setState((n) => {
              let r = new Map(n.correlationIds);
              return r.set(e, t), { correlationIds: r };
            });
          },
          delete: (e) => {
            e2.setState((t) => {
              let n = new Map(t.correlationIds);
              return n.delete(e), { correlationIds: n };
            });
          },
          clear: () => {
            e2.setState({ correlationIds: new Map() });
          },
        };
      var e6 = n(27493),
        e5 = n(17255);
      let e4 = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_signer.handshake.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        e8 = ({ method: e, correlationId: t, errorMessage: n }) => {
          var s;
          en(
            "scw_signer.handshake.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              errorMessage: n,
              enableAutoSubAccounts:
                null == (s = A.subAccountsConfig.get())
                  ? void 0
                  : s.enableAutoSubAccounts,
            },
            i.high
          );
        },
        e7 = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_signer.handshake.completed",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        e9 = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_signer.request.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        te = ({ method: e, correlationId: t, errorMessage: n }) => {
          var s;
          en(
            "scw_signer.request.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              errorMessage: n,
              enableAutoSubAccounts:
                null == (s = A.subAccountsConfig.get())
                  ? void 0
                  : s.enableAutoSubAccounts,
            },
            i.high
          );
        },
        tt = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_signer.request.completed",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        tn = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_sub_account.request.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        tr = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_sub_account.request.completed",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        ta = ({ method: e, correlationId: t, errorMessage: n }) => {
          var s;
          en(
            "scw_sub_account.request.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              errorMessage: n,
              enableAutoSubAccounts:
                null == (s = A.subAccountsConfig.get())
                  ? void 0
                  : s.enableAutoSubAccounts,
            },
            i.high
          );
        },
        ti = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_sub_account.add_owner.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        ts = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_sub_account.add_owner.completed",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        to = ({ method: e, correlationId: t, errorMessage: n }) => {
          var s;
          en(
            "scw_sub_account.add_owner.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              errorMessage: n,
              enableAutoSubAccounts:
                null == (s = A.subAccountsConfig.get())
                  ? void 0
                  : s.enableAutoSubAccounts,
            },
            i.high
          );
        },
        tc = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_sub_account.insufficient_balance.error_handling.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        tu = ({ method: e, correlationId: t }) => {
          var n;
          en(
            "scw_sub_account.insufficient_balance.error_handling.completed",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              enableAutoSubAccounts:
                null == (n = A.subAccountsConfig.get())
                  ? void 0
                  : n.enableAutoSubAccounts,
            },
            i.high
          );
        },
        tl = ({ method: e, correlationId: t, errorMessage: n }) => {
          var s;
          en(
            "scw_sub_account.insufficient_balance.error_handling.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              errorMessage: n,
              enableAutoSubAccounts:
                null == (s = A.subAccountsConfig.get())
                  ? void 0
                  : s.enableAutoSubAccounts,
            },
            i.high
          );
        },
        td = (e) =>
          "message" in e && "string" == typeof e.message ? e.message : "";
      var tf = n(22732),
        tp = n(98078),
        th = n(17644),
        tm = n(36241),
        ty = n(926),
        tb = n(19405),
        tg = n(50431),
        tw = n(34524),
        tv = n(25507),
        t_ = n(7441),
        tx = n(35109),
        tk = n(47826);
      class tE extends t_.C {
        constructor({ cause: e }) {
          super("Smart Account is not deployed.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
              "- An incorrect `sender` address is provided.",
            ],
            name: "AccountNotDeployedError",
          });
        }
      }
      Object.defineProperty(tE, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa20/,
      });
      class tA extends t_.C {
        constructor({ cause: e, data: t, message: n } = {}) {
          let r = n
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t);
        }
      }
      Object.defineProperty(tA, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32521,
      }),
        Object.defineProperty(tA, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class tS extends t_.C {
        constructor({ cause: e }) {
          super("Failed to send funds to beneficiary.", {
            cause: e,
            name: "FailedToSendToBeneficiaryError",
          });
        }
      }
      Object.defineProperty(tS, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa91/,
      });
      class tI extends t_.C {
        constructor({ cause: e }) {
          super("Gas value overflowed.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- one of the gas values exceeded 2**120 (uint120)",
            ].filter(Boolean),
            name: "GasValuesOverflowError",
          });
        }
      }
      Object.defineProperty(tI, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa94/,
      });
      class tO extends t_.C {
        constructor({ cause: e }) {
          super(
            "The `handleOps` function was called by the Bundler with a gas limit too low.",
            { cause: e, name: "HandleOpsOutOfGasError" }
          );
        }
      }
      Object.defineProperty(tO, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa95/,
      });
      class tP extends t_.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super("Failed to simulate deployment for Smart Account.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- Invalid `factory`/`factoryData` or `initCode` properties are present",
              "- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
              "- Smart Account deployment execution reverted with an error\n",
              t && `factory: ${t}`,
              n && `factoryData: ${n}`,
              r && `initCode: ${r}`,
            ].filter(Boolean),
            name: "InitCodeFailedError",
          });
        }
      }
      Object.defineProperty(tP, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa13/,
      });
      class tC extends t_.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super(
            "Smart Account initialization implementation did not create an account.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- `factory`/`factoryData` or `initCode` properties are invalid",
                "- Smart Account initialization implementation is incorrect\n",
                t && `factory: ${t}`,
                n && `factoryData: ${n}`,
                r && `initCode: ${r}`,
              ].filter(Boolean),
              name: "InitCodeMustCreateSenderError",
            }
          );
        }
      }
      Object.defineProperty(tC, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa15/,
      });
      class tT extends t_.C {
        constructor({
          cause: e,
          factory: t,
          factoryData: n,
          initCode: r,
          sender: a,
        }) {
          super(
            "Smart Account initialization implementation does not return the expected sender.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "Smart Account initialization implementation does not return a sender address\n",
                t && `factory: ${t}`,
                n && `factoryData: ${n}`,
                r && `initCode: ${r}`,
                a && `sender: ${a}`,
              ].filter(Boolean),
              name: "InitCodeMustReturnSenderError",
            }
          );
        }
      }
      Object.defineProperty(tT, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa14/,
      });
      class tj extends t_.C {
        constructor({ cause: e }) {
          super(
            "Smart Account does not have sufficient funds to execute the User Operation.",
            {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the Smart Account does not have sufficient funds to cover the required prefund, or",
                "- a Paymaster was not provided",
              ].filter(Boolean),
              name: "InsufficientPrefundError",
            }
          );
        }
      }
      Object.defineProperty(tj, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa21/,
      });
      class tM extends t_.C {
        constructor({ cause: e }) {
          super(
            "Bundler attempted to call an invalid function on the EntryPoint.",
            { cause: e, name: "InternalCallOnlyError" }
          );
        }
      }
      Object.defineProperty(tM, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa92/,
      });
      class tL extends t_.C {
        constructor({ cause: e }) {
          super(
            "Bundler used an invalid aggregator for handling aggregated User Operations.",
            { cause: e, name: "InvalidAggregatorError" }
          );
        }
      }
      Object.defineProperty(tL, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa96/,
      });
      class tN extends t_.C {
        constructor({ cause: e, nonce: t }) {
          super("Invalid Smart Account nonce used for User Operation.", {
            cause: e,
            metaMessages: [t && `nonce: ${t}`].filter(Boolean),
            name: "InvalidAccountNonceError",
          });
        }
      }
      Object.defineProperty(tN, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa25/,
      });
      class tD extends t_.C {
        constructor({ cause: e }) {
          super("Bundler has not set a beneficiary address.", {
            cause: e,
            name: "InvalidBeneficiaryError",
          });
        }
      }
      Object.defineProperty(tD, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa90/,
      });
      class tB extends t_.C {
        constructor({ cause: e }) {
          super("Invalid fields set on User Operation.", {
            cause: e,
            name: "InvalidFieldsError",
          });
        }
      }
      Object.defineProperty(tB, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class tU extends t_.C {
        constructor({ cause: e, paymasterAndData: t }) {
          super("Paymaster properties provided are invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `paymasterAndData` property is of an incorrect length\n",
              t && `paymasterAndData: ${t}`,
            ].filter(Boolean),
            name: "InvalidPaymasterAndDataError",
          });
        }
      }
      Object.defineProperty(tU, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa93/,
      });
      class tR extends t_.C {
        constructor({ cause: e }) {
          super("Paymaster deposit for the User Operation is too low.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the Paymaster has deposited less than the expected amount via the `deposit` function",
            ].filter(Boolean),
            name: "PaymasterDepositTooLowError",
          });
        }
      }
      Object.defineProperty(tR, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32508,
      }),
        Object.defineProperty(tR, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa31/,
        });
      class tq extends t_.C {
        constructor({ cause: e }) {
          super(
            "The `validatePaymasterUserOp` function on the Paymaster reverted.",
            { cause: e, name: "PaymasterFunctionRevertedError" }
          );
        }
      }
      Object.defineProperty(tq, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa33/,
      });
      class tH extends t_.C {
        constructor({ cause: e }) {
          super("The Paymaster contract has not been deployed.", {
            cause: e,
            name: "PaymasterNotDeployedError",
          });
        }
      }
      Object.defineProperty(tH, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa30/,
      });
      class tF extends t_.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
            { cause: e, name: "PaymasterRateLimitError" }
          );
        }
      }
      Object.defineProperty(tF, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32504,
      });
      class tG extends t_.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
            { cause: e, name: "PaymasterStakeTooLowError" }
          );
        }
      }
      Object.defineProperty(tG, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32505,
      });
      class tz extends t_.C {
        constructor({ cause: e }) {
          super("Paymaster `postOp` function reverted.", {
            cause: e,
            name: "PaymasterPostOpFunctionRevertedError",
          });
        }
      }
      Object.defineProperty(tz, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa50/,
      });
      class tW extends t_.C {
        constructor({ cause: e, factory: t, factoryData: n, initCode: r }) {
          super("Smart Account has already been deployed.", {
            cause: e,
            metaMessages: [
              "Remove the following properties and try again:",
              t && "`factory`",
              n && "`factoryData`",
              r && "`initCode`",
            ].filter(Boolean),
            name: "SenderAlreadyConstructedError",
          });
        }
      }
      Object.defineProperty(tW, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa10/,
      });
      class t$ extends t_.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).",
            { cause: e, name: "SignatureCheckFailedError" }
          );
        }
      }
      Object.defineProperty(t$, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32507,
      });
      class tK extends t_.C {
        constructor({ cause: e }) {
          super(
            "The `validateUserOp` function on the Smart Account reverted.",
            { cause: e, name: "SmartAccountFunctionRevertedError" }
          );
        }
      }
      Object.defineProperty(tK, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa23/,
      });
      class tV extends t_.C {
        constructor({ cause: e }) {
          super(
            "UserOperation rejected because account specified unsupported signature aggregator.",
            { cause: e, name: "UnsupportedSignatureAggregatorError" }
          );
        }
      }
      Object.defineProperty(tV, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32506,
      });
      class tZ extends t_.C {
        constructor({ cause: e }) {
          super("User Operation expired.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied",
            ].filter(Boolean),
            name: "UserOperationExpiredError",
          });
        }
      }
      Object.defineProperty(tZ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa22/,
      });
      class tJ extends t_.C {
        constructor({ cause: e }) {
          super("Paymaster for User Operation expired.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied",
            ].filter(Boolean),
            name: "UserOperationPaymasterExpiredError",
          });
        }
      }
      Object.defineProperty(tJ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa32/,
      });
      class tQ extends t_.C {
        constructor({ cause: e }) {
          super("Signature provided for the User Operation is invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account",
            ].filter(Boolean),
            name: "UserOperationSignatureError",
          });
        }
      }
      Object.defineProperty(tQ, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa24/,
      });
      class tY extends t_.C {
        constructor({ cause: e }) {
          super("Signature provided for the User Operation is invalid.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster",
            ].filter(Boolean),
            name: "UserOperationPaymasterSignatureError",
          });
        }
      }
      Object.defineProperty(tY, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa34/,
      });
      class tX extends t_.C {
        constructor({ cause: e }) {
          super(
            "User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.",
            { cause: e, name: "UserOperationRejectedByEntryPointError" }
          );
        }
      }
      Object.defineProperty(tX, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32500,
      });
      class t0 extends t_.C {
        constructor({ cause: e }) {
          super(
            "User Operation rejected by Paymaster's `validatePaymasterUserOp`.",
            { cause: e, name: "UserOperationRejectedByPaymasterError" }
          );
        }
      }
      Object.defineProperty(t0, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32501,
      });
      class t1 extends t_.C {
        constructor({ cause: e }) {
          super("User Operation rejected with op code validation error.", {
            cause: e,
            name: "UserOperationRejectedByOpCodeError",
          });
        }
      }
      Object.defineProperty(t1, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32502,
      });
      class t2 extends t_.C {
        constructor({ cause: e }) {
          super(
            "UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).",
            { cause: e, name: "UserOperationOutOfTimeRangeError" }
          );
        }
      }
      Object.defineProperty(t2, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32503,
      });
      class t3 extends t_.C {
        constructor({ cause: e }) {
          super(
            `An error occurred while executing user operation: ${e?.shortMessage}`,
            { cause: e, name: "UnknownBundlerError" }
          );
        }
      }
      class t6 extends t_.C {
        constructor({ cause: e }) {
          super("User Operation verification gas limit exceeded.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the gas used for verification exceeded the `verificationGasLimit`",
            ].filter(Boolean),
            name: "VerificationGasLimitExceededError",
          });
        }
      }
      Object.defineProperty(t6, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa40/,
      });
      class t5 extends t_.C {
        constructor({ cause: e }) {
          super("User Operation verification gas limit is too low.", {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the `verificationGasLimit` is too low to verify the User Operation",
            ].filter(Boolean),
            name: "VerificationGasLimitTooLowError",
          });
        }
      }
      Object.defineProperty(t5, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa41/,
      });
      var t4 = n(69432),
        t8 = n(31942);
      class t7 extends t_.C {
        constructor(
          e,
          {
            callData: t,
            callGasLimit: n,
            docsPath: r,
            factory: a,
            factoryData: i,
            initCode: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            nonce: u,
            paymaster: l,
            paymasterAndData: d,
            paymasterData: f,
            paymasterPostOpGasLimit: p,
            paymasterVerificationGasLimit: h,
            preVerificationGas: m,
            sender: y,
            signature: b,
            verificationGasLimit: g,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              (0, t4.aO)({
                callData: t,
                callGasLimit: n,
                factory: a,
                factoryData: i,
                initCode: s,
                maxFeePerGas: void 0 !== o && `${(0, t8.Q)(o)} gwei`,
                maxPriorityFeePerGas: void 0 !== c && `${(0, t8.Q)(c)} gwei`,
                nonce: u,
                paymaster: l,
                paymasterAndData: d,
                paymasterData: f,
                paymasterPostOpGasLimit: p,
                paymasterVerificationGasLimit: h,
                preVerificationGas: m,
                sender: y,
                signature: b,
                verificationGasLimit: g,
              }),
            ].filter(Boolean),
            name: "UserOperationExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class t9 extends t_.C {
        constructor({ hash: e }) {
          super(
            `User Operation receipt with hash "${e}" could not be found. The User Operation may not have been processed yet.`,
            { name: "UserOperationReceiptNotFoundError" }
          );
        }
      }
      class ne extends t_.C {
        constructor({ hash: e }) {
          super(`User Operation with hash "${e}" could not be found.`, {
            name: "UserOperationNotFoundError",
          });
        }
      }
      class nt extends t_.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for User Operation with hash "${e}" to be confirmed.`,
            { name: "WaitForUserOperationReceiptTimeoutError" }
          );
        }
      }
      let nn = [tA, tB, tR, tF, tG, t$, tV, t2, tX, t0, t1];
      function nr(e, { calls: t, docsPath: n, ...r }) {
        return new t7(
          (() => {
            let n = (function (e, t) {
              let n = (e.details || "").toLowerCase();
              if (tE.message.test(n)) return new tE({ cause: e });
              if (tS.message.test(n)) return new tS({ cause: e });
              if (tI.message.test(n)) return new tI({ cause: e });
              if (tO.message.test(n)) return new tO({ cause: e });
              if (tP.message.test(n))
                return new tP({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (tC.message.test(n))
                return new tC({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (tT.message.test(n))
                return new tT({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                  sender: t.sender,
                });
              if (tj.message.test(n)) return new tj({ cause: e });
              if (tM.message.test(n)) return new tM({ cause: e });
              if (tN.message.test(n))
                return new tN({ cause: e, nonce: t.nonce });
              if (tL.message.test(n)) return new tL({ cause: e });
              if (tD.message.test(n)) return new tD({ cause: e });
              if (tU.message.test(n)) return new tU({ cause: e });
              if (tR.message.test(n)) return new tR({ cause: e });
              if (tq.message.test(n)) return new tq({ cause: e });
              if (tH.message.test(n)) return new tH({ cause: e });
              if (tz.message.test(n)) return new tz({ cause: e });
              if (tK.message.test(n)) return new tK({ cause: e });
              if (tW.message.test(n))
                return new tW({
                  cause: e,
                  factory: t.factory,
                  factoryData: t.factoryData,
                  initCode: t.initCode,
                });
              if (tZ.message.test(n)) return new tZ({ cause: e });
              if (tJ.message.test(n)) return new tJ({ cause: e });
              if (tY.message.test(n)) return new tY({ cause: e });
              if (tQ.message.test(n)) return new tQ({ cause: e });
              if (t6.message.test(n)) return new t6({ cause: e });
              if (t5.message.test(n)) return new t5({ cause: e });
              let r = e.walk((e) => nn.some((t) => t.code === e.code));
              if (r) {
                if (r.code === tA.code)
                  return new tA({ cause: e, data: r.data, message: r.details });
                if (r.code === tB.code) return new tB({ cause: e });
                if (r.code === tR.code) return new tR({ cause: e });
                if (r.code === tF.code) return new tF({ cause: e });
                if (r.code === tG.code) return new tG({ cause: e });
                if (r.code === t$.code) return new t$({ cause: e });
                if (r.code === tV.code) return new tV({ cause: e });
                if (r.code === t2.code) return new t2({ cause: e });
                if (r.code === tX.code) return new tX({ cause: e });
                if (r.code === t0.code) return new t0({ cause: e });
                if (r.code === t1.code) return new t1({ cause: e });
              }
              return new t3({ cause: e });
            })(e, r);
            if (t && n instanceof tA) {
              let e,
                r =
                  (n.walk((t) => {
                    if (
                      "string" == typeof t.data ||
                      "string" == typeof t.data?.revertData ||
                      (!(t instanceof t_.C) && "string" == typeof t.message)
                    ) {
                      let n = (
                        t.data?.revertData ||
                        t.data ||
                        t.message
                      ).match?.(/(0x[A-Za-z0-9]*)/);
                      if (n) return (e = n[1]), !0;
                    }
                    return !1;
                  }),
                  e),
                a = t?.filter((e) => e.abi);
              if (r && a.length > 0)
                return (function (e) {
                  let { calls: t, revertData: n } = e,
                    {
                      abi: r,
                      functionName: a,
                      args: i,
                      to: s,
                    } = (() => {
                      let e = t?.filter((e) => !!e.abi);
                      if (1 === e.length) return e[0];
                      let r = e.filter((e) => {
                        try {
                          return !!(0, tk.W)({ abi: e.abi, data: n });
                        } catch {
                          return !1;
                        }
                      });
                      return 1 === r.length
                        ? r[0]
                        : {
                            abi: [],
                            functionName: e.reduce(
                              (e, t) =>
                                `${e ? `${e} | ` : ""}${t.functionName}`,
                              ""
                            ),
                            args: void 0,
                            to: void 0,
                          };
                    })(),
                    o =
                      "0x" === n
                        ? new tx.rR({ functionName: a })
                        : new tx.M({ abi: r, data: n, functionName: a });
                  return new tx.bG(o, {
                    abi: r,
                    args: i,
                    contractAddress: s,
                    functionName: a,
                  });
                })({ calls: a, revertData: r });
            }
            return n;
          })(),
          { docsPath: n, ...r }
        );
      }
      var na = n(36984);
      function ni(e) {
        var t;
        let n = {};
        return (
          void 0 !== e.callData && (n.callData = e.callData),
          void 0 !== e.callGasLimit &&
            (n.callGasLimit = (0, u.cK)(e.callGasLimit)),
          void 0 !== e.factory && (n.factory = e.factory),
          void 0 !== e.factoryData && (n.factoryData = e.factoryData),
          void 0 !== e.initCode && (n.initCode = e.initCode),
          void 0 !== e.maxFeePerGas &&
            (n.maxFeePerGas = (0, u.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (n.maxPriorityFeePerGas = (0, u.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (n.nonce = (0, u.cK)(e.nonce)),
          void 0 !== e.paymaster && (n.paymaster = e.paymaster),
          void 0 !== e.paymasterAndData &&
            (n.paymasterAndData = e.paymasterAndData || "0x"),
          void 0 !== e.paymasterData && (n.paymasterData = e.paymasterData),
          void 0 !== e.paymasterPostOpGasLimit &&
            (n.paymasterPostOpGasLimit = (0, u.cK)(e.paymasterPostOpGasLimit)),
          void 0 !== e.paymasterVerificationGasLimit &&
            (n.paymasterVerificationGasLimit = (0, u.cK)(
              e.paymasterVerificationGasLimit
            )),
          void 0 !== e.preVerificationGas &&
            (n.preVerificationGas = (0, u.cK)(e.preVerificationGas)),
          void 0 !== e.sender && (n.sender = e.sender),
          void 0 !== e.signature && (n.signature = e.signature),
          void 0 !== e.verificationGasLimit &&
            (n.verificationGasLimit = (0, u.cK)(e.verificationGasLimit)),
          void 0 !== e.authorization &&
            (n.eip7702Auth = {
              address: (t = e.authorization).address,
              chainId: (0, u.cK)(t.chainId),
              nonce: (0, u.cK)(t.nonce),
              r: t.r
                ? (0, u.cK)(BigInt(t.r), { size: 32 })
                : (0, na.eV)("0x", { size: 32 }),
              s: t.s
                ? (0, u.cK)(BigInt(t.s), { size: 32 })
                : (0, na.eV)("0x", { size: 32 }),
              yParity: t.yParity
                ? (0, u.cK)(t.yParity, { size: 1 })
                : (0, na.eV)("0x", { size: 32 }),
            }),
          n
        );
      }
      var ns = n(5666),
        no = n(24573),
        nc = n(79731);
      async function nu(e, t) {
        let { chainId: n, entryPointAddress: r, context: a, ...i } = t,
          s = ni(i),
          {
            paymasterPostOpGasLimit: o,
            paymasterVerificationGasLimit: c,
            ...l
          } = await e.request({
            method: "pm_getPaymasterData",
            params: [
              {
                ...s,
                callGasLimit: s.callGasLimit ?? "0x0",
                verificationGasLimit: s.verificationGasLimit ?? "0x0",
                preVerificationGas: s.preVerificationGas ?? "0x0",
              },
              r,
              (0, u.cK)(n),
              a,
            ],
          });
        return {
          ...l,
          ...(o && { paymasterPostOpGasLimit: (0, e6.uU)(o) }),
          ...(c && { paymasterVerificationGasLimit: (0, e6.uU)(c) }),
        };
      }
      async function nl(e, t) {
        let { chainId: n, entryPointAddress: r, context: a, ...i } = t,
          s = ni(i),
          {
            paymasterPostOpGasLimit: o,
            paymasterVerificationGasLimit: c,
            ...l
          } = await e.request({
            method: "pm_getPaymasterStubData",
            params: [
              {
                ...s,
                callGasLimit: s.callGasLimit ?? "0x0",
                verificationGasLimit: s.verificationGasLimit ?? "0x0",
                preVerificationGas: s.preVerificationGas ?? "0x0",
              },
              r,
              (0, u.cK)(n),
              a,
            ],
          });
        return {
          ...l,
          ...(o && { paymasterPostOpGasLimit: (0, e6.uU)(o) }),
          ...(c && { paymasterVerificationGasLimit: (0, e6.uU)(c) }),
        };
      }
      let nd = [
        "factory",
        "fees",
        "gas",
        "paymaster",
        "nonce",
        "signature",
        "authorization",
      ];
      async function nf(e, t) {
        let n,
          { account: r = e.account, parameters: a = nd, stateOverride: i } = t;
        if (!r) throw new tg.T();
        let s = (0, tb.J)(r),
          o = t.paymaster ?? e?.paymaster,
          u = "string" == typeof o ? o : void 0,
          { getPaymasterStubData: l, getPaymasterData: d } = (() => {
            if (!0 === o)
              return {
                getPaymasterStubData: (t) =>
                  (0, tw.T)(e, nl, "getPaymasterStubData")(t),
                getPaymasterData: (t) =>
                  (0, tw.T)(e, nu, "getPaymasterData")(t),
              };
            if ("object" == typeof o) {
              let { getPaymasterStubData: e, getPaymasterData: t } = o;
              return {
                getPaymasterStubData: t && e ? e : t,
                getPaymasterData: t && e ? t : void 0,
              };
            }
            return { getPaymasterStubData: void 0, getPaymasterData: void 0 };
          })(),
          f = t.paymasterContext ? t.paymasterContext : e?.paymasterContext,
          p = { ...t, paymaster: u, sender: s.address },
          [h, m, y, b, g] = await Promise.all([
            (async () =>
              t.calls
                ? s.encodeCalls(
                    t.calls.map((e) =>
                      e.abi
                        ? { data: (0, c.p)(e), to: e.to, value: e.value }
                        : e
                    )
                  )
                : t.callData)(),
            (async () => {
              if (!a.includes("factory")) return;
              if (t.initCode) return { initCode: t.initCode };
              if (t.factory && t.factoryData)
                return { factory: t.factory, factoryData: t.factoryData };
              let { factory: e, factoryData: n } = await s.getFactoryArgs();
              return "0.6" === s.entryPoint.version
                ? { initCode: e && n ? (0, nc.xW)([e, n]) : void 0 }
                : { factory: e, factoryData: n };
            })(),
            (async () => {
              if (a.includes("fees")) {
                if (
                  "bigint" == typeof t.maxFeePerGas &&
                  "bigint" == typeof t.maxPriorityFeePerGas
                )
                  return p;
                if (e?.userOperation?.estimateFeesPerGas) {
                  let t = await e.userOperation.estimateFeesPerGas({
                    account: s,
                    bundlerClient: e,
                    userOperation: p,
                  });
                  return { ...p, ...t };
                }
                try {
                  let n = e.client ?? e,
                    r = await (0, tw.T)(
                      n,
                      no._,
                      "estimateFeesPerGas"
                    )({ chain: n.chain, type: "eip1559" });
                  return {
                    maxFeePerGas:
                      "bigint" == typeof t.maxFeePerGas
                        ? t.maxFeePerGas
                        : BigInt(2n * r.maxFeePerGas),
                    maxPriorityFeePerGas:
                      "bigint" == typeof t.maxPriorityFeePerGas
                        ? t.maxPriorityFeePerGas
                        : BigInt(2n * r.maxPriorityFeePerGas),
                  };
                } catch {
                  return;
                }
              }
            })(),
            (async () => {
              if (a.includes("nonce"))
                return "bigint" == typeof t.nonce ? t.nonce : s.getNonce();
            })(),
            (async () => {
              if (a.includes("authorization")) {
                if ("object" == typeof t.authorization) return t.authorization;
                if (s.authorization && !(await s.isDeployed()))
                  return {
                    ...(await (0, ns.h)(s.client, s.authorization)),
                    r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
                    s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    yParity: 1,
                  };
              }
            })(),
          ]);
        async function w() {
          return (
            n ||
            (e.chain
              ? e.chain.id
              : (n = await (0, tw.T)(e, ty.T, "getChainId")({})))
          );
        }
        void 0 !== h && (p.callData = h),
          void 0 !== m && (p = { ...p, ...m }),
          void 0 !== y && (p = { ...p, ...y }),
          void 0 !== b && (p.nonce = b),
          void 0 !== g && (p.authorization = g),
          a.includes("signature") &&
            (void 0 !== t.signature
              ? (p.signature = t.signature)
              : (p.signature = await s.getStubSignature(p))),
          "0.6" !== s.entryPoint.version || p.initCode || (p.initCode = "0x");
        let v = !1;
        if (a.includes("paymaster") && l && !u && !t.paymasterAndData) {
          let {
            isFinal: e = !1,
            sponsor: t,
            ...n
          } = await l({
            chainId: await w(),
            entryPointAddress: s.entryPoint.address,
            context: f,
            ...p,
          });
          (v = e), (p = { ...p, ...n });
        }
        if (
          ("0.6" !== s.entryPoint.version ||
            p.paymasterAndData ||
            (p.paymasterAndData = "0x"),
          a.includes("gas"))
        ) {
          if (s.userOperation?.estimateGas) {
            let e = await s.userOperation.estimateGas(p);
            p = { ...p, ...e };
          }
          if (
            void 0 === p.callGasLimit ||
            void 0 === p.preVerificationGas ||
            void 0 === p.verificationGasLimit ||
            (p.paymaster && void 0 === p.paymasterPostOpGasLimit) ||
            (p.paymaster && void 0 === p.paymasterVerificationGasLimit)
          ) {
            let t = await (0, tw.T)(
              e,
              np,
              "estimateUserOperationGas"
            )({
              account: s,
              callGasLimit: 0n,
              preVerificationGas: 0n,
              verificationGasLimit: 0n,
              stateOverride: i,
              ...(p.paymaster
                ? {
                    paymasterPostOpGasLimit: 0n,
                    paymasterVerificationGasLimit: 0n,
                  }
                : {}),
              ...p,
            });
            p = {
              ...p,
              callGasLimit: p.callGasLimit ?? t.callGasLimit,
              preVerificationGas: p.preVerificationGas ?? t.preVerificationGas,
              verificationGasLimit:
                p.verificationGasLimit ?? t.verificationGasLimit,
              paymasterPostOpGasLimit:
                p.paymasterPostOpGasLimit ?? t.paymasterPostOpGasLimit,
              paymasterVerificationGasLimit:
                p.paymasterVerificationGasLimit ??
                t.paymasterVerificationGasLimit,
            };
          }
        }
        if (a.includes("paymaster") && d && !u && !t.paymasterAndData && !v) {
          let e = await d({
            chainId: await w(),
            entryPointAddress: s.entryPoint.address,
            context: f,
            ...p,
          });
          p = { ...p, ...e };
        }
        return (
          delete p.calls,
          delete p.parameters,
          delete p.paymasterContext,
          "string" != typeof p.paymaster && delete p.paymaster,
          p
        );
      }
      async function np(e, t) {
        let {
          account: n = e.account,
          entryPointAddress: r,
          stateOverride: a,
        } = t;
        if (!n && !t.sender) throw new tg.T();
        let i = n ? (0, tb.J)(n) : void 0,
          s = (0, tv.yH)(a),
          o = i
            ? await (0, tw.T)(
                e,
                nf,
                "prepareUserOperation"
              )({
                ...t,
                parameters: [
                  "authorization",
                  "factory",
                  "nonce",
                  "paymaster",
                  "signature",
                ],
              })
            : t;
        try {
          let t = [ni(o), r ?? i?.entryPoint?.address];
          var c = await e.request({
            method: "eth_estimateUserOperationGas",
            params: s ? [...t, s] : [...t],
          });
          let n = {};
          return (
            c.callGasLimit && (n.callGasLimit = BigInt(c.callGasLimit)),
            c.preVerificationGas &&
              (n.preVerificationGas = BigInt(c.preVerificationGas)),
            c.verificationGasLimit &&
              (n.verificationGasLimit = BigInt(c.verificationGasLimit)),
            c.paymasterPostOpGasLimit &&
              (n.paymasterPostOpGasLimit = BigInt(c.paymasterPostOpGasLimit)),
            c.paymasterVerificationGasLimit &&
              (n.paymasterVerificationGasLimit = BigInt(
                c.paymasterVerificationGasLimit
              )),
            n
          );
        } catch (n) {
          let e = t.calls;
          throw nr(n, { ...o, ...(e ? { calls: e } : {}) });
        }
      }
      async function nh(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getUserOperationByHash", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new ne({ hash: t });
        let {
          blockHash: r,
          blockNumber: a,
          entryPoint: i,
          transactionHash: s,
          userOperation: o,
        } = n;
        return {
          blockHash: r,
          blockNumber: BigInt(a),
          entryPoint: i,
          transactionHash: s,
          userOperation: (function (e) {
            let t = { ...e };
            return (
              e.callGasLimit && (t.callGasLimit = BigInt(e.callGasLimit)),
              e.maxFeePerGas && (t.maxFeePerGas = BigInt(e.maxFeePerGas)),
              e.maxPriorityFeePerGas &&
                (t.maxPriorityFeePerGas = BigInt(e.maxPriorityFeePerGas)),
              e.nonce && (t.nonce = BigInt(e.nonce)),
              e.paymasterPostOpGasLimit &&
                (t.paymasterPostOpGasLimit = BigInt(e.paymasterPostOpGasLimit)),
              e.paymasterVerificationGasLimit &&
                (t.paymasterVerificationGasLimit = BigInt(
                  e.paymasterVerificationGasLimit
                )),
              e.preVerificationGas &&
                (t.preVerificationGas = BigInt(e.preVerificationGas)),
              e.verificationGasLimit &&
                (t.verificationGasLimit = BigInt(e.verificationGasLimit)),
              t
            );
          })(o),
        };
      }
      var nm = n(87632),
        ny = n(35886);
      async function nb(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getUserOperationReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new t9({ hash: t });
        let r = { ...n };
        return (
          n.actualGasCost && (r.actualGasCost = BigInt(n.actualGasCost)),
          n.actualGasUsed && (r.actualGasUsed = BigInt(n.actualGasUsed)),
          n.logs && (r.logs = n.logs.map((e) => (0, nm.e)(e))),
          n.receipt && (r.receipt = (0, ny.uL)(r.receipt)),
          r
        );
      }
      async function ng(e, t) {
        let { account: n = e.account, entryPointAddress: r } = t;
        if (!n && !t.sender) throw new tg.T();
        let a = n ? (0, tb.J)(n) : void 0,
          i = a ? await (0, tw.T)(e, nf, "prepareUserOperation")(t) : t,
          s = t.signature || (await a?.signUserOperation?.(i)),
          o = ni({ ...i, signature: s });
        try {
          return await e.request(
            {
              method: "eth_sendUserOperation",
              params: [o, r ?? a?.entryPoint?.address],
            },
            { retryCount: 0 }
          );
        } catch (n) {
          let e = t.calls;
          throw nr(n, { ...i, ...(e ? { calls: e } : {}), signature: s });
        }
      }
      var nw = n(72342),
        nv = n(86435),
        n_ = n(79183);
      function nx(e) {
        return {
          estimateUserOperationGas: (t) => np(e, t),
          getChainId: () => (0, ty.T)(e),
          getSupportedEntryPoints: () =>
            e.request({ method: "eth_supportedEntryPoints" }),
          getUserOperation: (t) => nh(e, t),
          getUserOperationReceipt: (t) => nb(e, t),
          prepareUserOperation: (t) => nf(e, t),
          sendUserOperation: (t) => ng(e, t),
          waitForUserOperationReceipt: (t) =>
            (function (e, t) {
              let {
                  hash: n,
                  pollingInterval: r = e.pollingInterval,
                  retryCount: a,
                  timeout: i = 12e4,
                } = t,
                s = 0,
                o = (0, n_.A)(["waitForUserOperationReceipt", e.uid, n]);
              return new Promise((t, c) => {
                let u = (0, nw.lB)(o, { resolve: t, reject: c }, (t) => {
                  let o = (e) => {
                      c(), e(), u();
                    },
                    c = (0, nv.w)(
                      async () => {
                        a && s >= a && o(() => t.reject(new nt({ hash: n })));
                        try {
                          let r = await (0, tw.T)(
                            e,
                            nb,
                            "getUserOperationReceipt"
                          )({ hash: n });
                          o(() => t.resolve(r));
                        } catch (e) {
                          "UserOperationReceiptNotFoundError" !== e.name &&
                            o(() => t.reject(e));
                        }
                        s++;
                      },
                      { emitOnBegin: !0, interval: r }
                    );
                  return (
                    i &&
                      setTimeout(
                        () => o(() => t.reject(new nt({ hash: n }))),
                        i
                      ),
                    c
                  );
                });
              });
            })(e, t),
        };
      }
      let nk = p(() => ({}));
      function nE(e) {
        e.forEach((e) => {
          var t, n, r, a, i, s, o, c;
          if (!e.rpcUrl) return;
          let u = (function (e) {
              let { key: t = "public", name: n = "Public Client" } = e;
              return (0, tp.U)({
                ...e,
                key: t,
                name: n,
                type: "publicClient",
              }).extend(th.$);
            })({
              chain: (0, tf.x)({
                id: e.id,
                rpcUrls: { default: { http: [e.rpcUrl] } },
                name:
                  null != (n = null == (t = e.nativeCurrency) ? void 0 : t.name)
                    ? n
                    : "",
                nativeCurrency: {
                  name:
                    null !=
                    (a = null == (r = e.nativeCurrency) ? void 0 : r.name)
                      ? a
                      : "",
                  symbol:
                    null !=
                    (s = null == (i = e.nativeCurrency) ? void 0 : i.symbol)
                      ? s
                      : "",
                  decimals:
                    null !=
                    (c = null == (o = e.nativeCurrency) ? void 0 : o.decimal)
                      ? c
                      : 18,
                },
              }),
              transport: (0, tm.L)(e.rpcUrl),
            }),
            l = (function (e) {
              let {
                client: t,
                key: n = "bundler",
                name: r = "Bundler Client",
                paymaster: a,
                paymasterContext: i,
                transport: s,
                userOperation: o,
              } = e;
              return Object.assign(
                (0, tp.U)({
                  ...e,
                  chain: e.chain ?? t?.chain,
                  key: n,
                  name: r,
                  transport: s,
                  type: "bundlerClient",
                }),
                {
                  client: t,
                  paymaster: a,
                  paymasterContext: i,
                  userOperation: o,
                }
              ).extend(nx);
            })({ client: u, transport: (0, tm.L)(e.rpcUrl) });
          nk.setState({ [e.id]: { client: u, bundlerClient: l } });
        });
      }
      function nA(e) {
        var t;
        return null == (t = nk.getState()[e]) ? void 0 : t.client;
      }
      var nS = n(81757),
        nI = n(32840);
      function nO(e) {
        if ("object" != typeof e || null === e)
          throw R.rpc.internal("sub account info is not an object");
        if (!("address" in e)) throw R.rpc.internal("sub account is invalid");
        if (
          "address" in e &&
          "string" == typeof e.address &&
          !(0, nS.P)(e.address)
        )
          throw R.rpc.internal("sub account address is invalid");
        if (
          "factory" in e &&
          "string" == typeof e.factory &&
          !(0, nS.P)(e.factory)
        )
          throw R.rpc.internal("sub account factory address is invalid");
        if (
          "factoryData" in e &&
          "string" == typeof e.factoryData &&
          !(0, nI.q)(e.factoryData)
        )
          throw R.rpc.internal("sub account factory data is invalid");
      }
      async function nP() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function nC(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function nT(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: r };
      }
      async function nj(e, { iv: t, cipherText: n }) {
        let r = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(r);
      }
      function nM(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function nL(e, t) {
        let n = nM(e);
        return eq(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function nN(e, t) {
        let n = nM(e),
          r = eH(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(r),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function nD(e, t) {
        return nT(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function nB(e, t) {
        return JSON.parse(await nj(t, e));
      }
      let nU =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function nR(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function nq(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function nH(e, ...t) {
        if (!nR(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function nF(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        nq(e.outputLen), nq(e.blockLen);
      }
      function nG(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function nz(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function nW(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function n$(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let nK =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        nV = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function nZ(e) {
        if ((nH(e), nK)) return e.toHex();
        let t = "";
        for (let n = 0; n < e.length; n++) t += nV[e[n]];
        return t;
      }
      let nJ = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function nQ(e) {
        return e >= nJ._0 && e <= nJ._9
          ? e - nJ._0
          : e >= nJ.A && e <= nJ.F
          ? e - (nJ.A - 10)
          : e >= nJ.a && e <= nJ.f
          ? e - (nJ.a - 10)
          : void 0;
      }
      function nY(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (nK) return Uint8Array.fromHex(e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(n);
        for (let t = 0, a = 0; t < n; t++, a += 2) {
          let n = nQ(e.charCodeAt(a)),
            i = nQ(e.charCodeAt(a + 1));
          if (void 0 === n || void 0 === i)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[a] + e[a + 1]) +
                '" at index ' +
                a
            );
          r[t] = 16 * n + i;
        }
        return r;
      }
      function nX(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          nH(e),
          e
        );
      }
      function n0(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          nH(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let a = e[t];
          n.set(a, r), (r += a.length);
        }
        return n;
      }
      class n1 {}
      function n2(e) {
        let t = (t) => e().update(nX(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function n3(e = 32) {
        if (nU && "function" == typeof nU.getRandomValues)
          return nU.getRandomValues(new Uint8Array(e));
        if (nU && "function" == typeof nU.randomBytes)
          return Uint8Array.from(nU.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
      class n6 extends n1 {
        constructor(e, t, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = nW(this.buffer));
        }
        update(e) {
          nG(this), nH((e = nX(e)));
          let { view: t, buffer: n, blockLen: r } = this,
            a = e.length;
          for (let i = 0; i < a; ) {
            let s = Math.min(r - this.pos, a - i);
            if (s === r) {
              let t = nW(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          nG(this);
          nH(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              "digestInto() expects output buffer of length at least " + t
            );
          this.finished = !0;
          let { buffer: n, view: r, blockLen: a, isLE: i } = this,
            { pos: s } = this;
          (n[s++] = 128),
            nz(this.buffer.subarray(s)),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < a; e++) n[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((n >> a) & i),
              o = Number(n & i),
              c = 4 * !!r,
              u = 4 * !r;
            e.setUint32(t + c, s, r), e.setUint32(t + u, o, r);
          })(r, a - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = nW(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            l = this.get();
          if (u > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: a,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.destroyed = i),
            (e.finished = a),
            (e.length = r),
            (e.pos = s),
            r % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let n5 = Uint32Array.from([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        n4 = Uint32Array.from([
          0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
          0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
          0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
          0xbefa4fa4,
        ]),
        n8 = Uint32Array.from([
          0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
          0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
          0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
          0x137e2179,
        ]),
        n7 = BigInt(0x100000000 - 1),
        n9 = BigInt(32),
        re = (e, t, n) => e >>> n,
        rt = (e, t, n) => (e << (32 - n)) | (t >>> n),
        rn = (e, t, n) => (e >>> n) | (t << (32 - n)),
        rr = (e, t, n) => (e << (32 - n)) | (t >>> n),
        ra = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        ri = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      function rs(e, t, n, r) {
        let a = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((a / 0x100000000) | 0)) | 0, l: 0 | a };
      }
      let ro = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        rc = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0,
        ru = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        rl = (e, t, n, r, a) => (t + n + r + a + ((e / 0x100000000) | 0)) | 0,
        rd = (e, t, n, r, a) =>
          (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (a >>> 0),
        rf = (e, t, n, r, a, i) =>
          (t + n + r + a + i + ((e / 0x100000000) | 0)) | 0,
        rp = Uint32Array.from([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        rh = new Uint32Array(64);
      class rm extends n6 {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | n5[0]),
            (this.B = 0 | n5[1]),
            (this.C = 0 | n5[2]),
            (this.D = 0 | n5[3]),
            (this.E = 0 | n5[4]),
            (this.F = 0 | n5[5]),
            (this.G = 0 | n5[6]),
            (this.H = 0 | n5[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: s, H: o } = this;
          return [e, t, n, r, a, i, s, o];
        }
        set(e, t, n, r, a, i, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) rh[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = rh[e - 15],
              n = rh[e - 2],
              r = n$(t, 7) ^ n$(t, 18) ^ (t >>> 3),
              a = n$(n, 17) ^ n$(n, 19) ^ (n >>> 10);
            rh[e] = (a + rh[e - 7] + r + rh[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: s, F: o, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            var l, d, f, p;
            let t =
                (u +
                  (n$(s, 6) ^ n$(s, 11) ^ n$(s, 25)) +
                  (((l = s) & o) ^ (~l & c)) +
                  rp[e] +
                  rh[e]) |
                0,
              h =
                ((n$(n, 2) ^ n$(n, 13) ^ n$(n, 22)) +
                  (((d = n) & (f = r)) ^ (d & (p = a)) ^ (f & p))) |
                0;
            (u = c),
              (c = o),
              (o = s),
              (s = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + h) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, a, i, s, o, c, u);
        }
        roundClean() {
          nz(rh);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), nz(this.buffer);
        }
      }
      let ry = (function (e, t = !1) {
          let n = e.length,
            r = new Uint32Array(n),
            a = new Uint32Array(n);
          for (let i = 0; i < n; i++) {
            let { h: n, l: s } = (function (e, t = !1) {
              return t
                ? { h: Number(e & n7), l: Number((e >> n9) & n7) }
                : { h: 0 | Number((e >> n9) & n7), l: 0 | Number(e & n7) };
            })(e[i], t);
            [r[i], a[i]] = [n, s];
          }
          return [r, a];
        })(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        rb = ry[0],
        rg = ry[1],
        rw = new Uint32Array(80),
        rv = new Uint32Array(80);
      class r_ extends n6 {
        constructor(e = 64) {
          super(128, e, 16, !1),
            (this.Ah = 0 | n8[0]),
            (this.Al = 0 | n8[1]),
            (this.Bh = 0 | n8[2]),
            (this.Bl = 0 | n8[3]),
            (this.Ch = 0 | n8[4]),
            (this.Cl = 0 | n8[5]),
            (this.Dh = 0 | n8[6]),
            (this.Dl = 0 | n8[7]),
            (this.Eh = 0 | n8[8]),
            (this.El = 0 | n8[9]),
            (this.Fh = 0 | n8[10]),
            (this.Fl = 0 | n8[11]),
            (this.Gh = 0 | n8[12]),
            (this.Gl = 0 | n8[13]),
            (this.Hh = 0 | n8[14]),
            (this.Hl = 0 | n8[15]);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: n,
            Bl: r,
            Ch: a,
            Cl: i,
            Dh: s,
            Dl: o,
            Eh: c,
            El: u,
            Fh: l,
            Fl: d,
            Gh: f,
            Gl: p,
            Hh: h,
            Hl: m,
          } = this;
          return [e, t, n, r, a, i, s, o, c, u, l, d, f, p, h, m];
        }
        set(e, t, n, r, a, i, s, o, c, u, l, d, f, p, h, m) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | a),
            (this.Cl = 0 | i),
            (this.Dh = 0 | s),
            (this.Dl = 0 | o),
            (this.Eh = 0 | c),
            (this.El = 0 | u),
            (this.Fh = 0 | l),
            (this.Fl = 0 | d),
            (this.Gh = 0 | f),
            (this.Gl = 0 | p),
            (this.Hh = 0 | h),
            (this.Hl = 0 | m);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4)
            (rw[n] = e.getUint32(t)), (rv[n] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | rw[e - 15],
              n = 0 | rv[e - 15],
              r = rn(t, n, 1) ^ rn(t, n, 8) ^ re(t, n, 7),
              a = rr(t, n, 1) ^ rr(t, n, 8) ^ rt(t, n, 7),
              i = 0 | rw[e - 2],
              s = 0 | rv[e - 2],
              o = rn(i, s, 19) ^ ra(i, s, 61) ^ re(i, s, 6),
              c = ru(
                a,
                rr(i, s, 19) ^ ri(i, s, 61) ^ rt(i, s, 6),
                rv[e - 7],
                rv[e - 16]
              ),
              u = rl(c, r, o, rw[e - 7], rw[e - 16]);
            (rw[e] = 0 | u), (rv[e] = 0 | c);
          }
          let {
            Ah: n,
            Al: r,
            Bh: a,
            Bl: i,
            Ch: s,
            Cl: o,
            Dh: c,
            Dl: u,
            Eh: l,
            El: d,
            Fh: f,
            Fl: p,
            Gh: h,
            Gl: m,
            Hh: y,
            Hl: b,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t = rn(l, d, 14) ^ rn(l, d, 18) ^ ra(l, d, 41),
              g = rr(l, d, 14) ^ rr(l, d, 18) ^ ri(l, d, 41),
              w = (l & f) ^ (~l & h),
              v = rd(b, g, (d & p) ^ (~d & m), rg[e], rv[e]),
              _ = rf(v, y, t, w, rb[e], rw[e]),
              x = 0 | v,
              k = rn(n, r, 28) ^ ra(n, r, 34) ^ ra(n, r, 39),
              E = rr(n, r, 28) ^ ri(n, r, 34) ^ ri(n, r, 39),
              A = (n & a) ^ (n & s) ^ (a & s),
              S = (r & i) ^ (r & o) ^ (i & o);
            (y = 0 | h),
              (b = 0 | m),
              (h = 0 | f),
              (m = 0 | p),
              (f = 0 | l),
              (p = 0 | d),
              ({ h: l, l: d } = rs(0 | c, 0 | u, 0 | _, 0 | x)),
              (c = 0 | s),
              (u = 0 | o),
              (s = 0 | a),
              (o = 0 | i),
              (a = 0 | n),
              (i = 0 | r);
            let I = ro(x, E, S);
            (n = rc(I, _, k, A)), (r = 0 | I);
          }
          ({ h: n, l: r } = rs(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)),
            ({ h: a, l: i } = rs(0 | this.Bh, 0 | this.Bl, 0 | a, 0 | i)),
            ({ h: s, l: o } = rs(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | o)),
            ({ h: c, l: u } = rs(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | u)),
            ({ h: l, l: d } = rs(0 | this.Eh, 0 | this.El, 0 | l, 0 | d)),
            ({ h: f, l: p } = rs(0 | this.Fh, 0 | this.Fl, 0 | f, 0 | p)),
            ({ h: h, l: m } = rs(0 | this.Gh, 0 | this.Gl, 0 | h, 0 | m)),
            ({ h: y, l: b } = rs(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | b)),
            this.set(n, r, a, i, s, o, c, u, l, d, f, p, h, m, y, b);
        }
        roundClean() {
          nz(rw, rv);
        }
        destroy() {
          nz(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      class rx extends r_ {
        constructor() {
          super(48),
            (this.Ah = 0 | n4[0]),
            (this.Al = 0 | n4[1]),
            (this.Bh = 0 | n4[2]),
            (this.Bl = 0 | n4[3]),
            (this.Ch = 0 | n4[4]),
            (this.Cl = 0 | n4[5]),
            (this.Dh = 0 | n4[6]),
            (this.Dl = 0 | n4[7]),
            (this.Eh = 0 | n4[8]),
            (this.El = 0 | n4[9]),
            (this.Fh = 0 | n4[10]),
            (this.Fl = 0 | n4[11]),
            (this.Gh = 0 | n4[12]),
            (this.Gl = 0 | n4[13]),
            (this.Hh = 0 | n4[14]),
            (this.Hl = 0 | n4[15]);
        }
      }
      let rk = n2(() => new rm()),
        rE = n2(() => new r_()),
        rA = n2(() => new rx());
      class rS extends n1 {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), nF(e);
          let n = nX(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            a = new Uint8Array(r);
          a.set(n.length > r ? e.create().update(n).digest() : n);
          for (let e = 0; e < a.length; e++) a[e] ^= 54;
          this.iHash.update(a), (this.oHash = e.create());
          for (let e = 0; e < a.length; e++) a[e] ^= 106;
          this.oHash.update(a), nz(a);
        }
        update(e) {
          return nG(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          nG(this),
            nH(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: n,
            finished: r,
            destroyed: a,
            blockLen: i,
            outputLen: s,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = a),
            (e.blockLen = i),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let rI = (e, t, n) => new rS(e, t).update(n).digest();
      rI.create = (e, t) => new rS(e, t);
      let rO = BigInt(0),
        rP = BigInt(1);
      function rC(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      function rT(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function rj(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? rO : BigInt("0x" + e);
      }
      function rM(e) {
        return nH(e), rj(nZ(Uint8Array.from(e).reverse()));
      }
      function rL(e, t) {
        return nY(e.toString(16).padStart(2 * t, "0"));
      }
      function rN(e, t) {
        return rL(e, t).reverse();
      }
      function rD(e, t, n) {
        let r;
        if ("string" == typeof t)
          try {
            r = nY(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (nR(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let a = r.length;
        if ("number" == typeof n && a !== n)
          throw Error(e + " of length " + n + " expected, got " + a);
        return r;
      }
      let rB = (e) => "bigint" == typeof e && rO <= e;
      function rU(e) {
        let t;
        for (t = 0; e > rO; e >>= rP, t += 1);
        return t;
      }
      let rR = (e) => (rP << BigInt(e)) - rP;
      function rq(e, t, n = {}) {
        if (!e || "object" != typeof e)
          throw Error("expected valid options object");
        function r(t, n, r) {
          let a = e[t];
          if (r && void 0 === a) return;
          let i = typeof a;
          if (i !== n || null === a)
            throw Error(`param "${t}" is invalid: expected ${n}, got ${i}`);
        }
        Object.entries(t).forEach(([e, t]) => r(e, t, !1)),
          Object.entries(n).forEach(([e, t]) => r(e, t, !0));
      }
      function rH(e) {
        let t = new WeakMap();
        return (n, ...r) => {
          let a = t.get(n);
          if (void 0 !== a) return a;
          let i = e(n, ...r);
          return t.set(n, i), i;
        };
      }
      let rF = BigInt(0),
        rG = BigInt(1),
        rz = BigInt(2),
        rW = BigInt(3),
        r$ = BigInt(4),
        rK = BigInt(5),
        rV = BigInt(7),
        rZ = BigInt(8),
        rJ = BigInt(9),
        rQ = BigInt(16);
      function rY(e, t) {
        let n = e % t;
        return n >= rF ? n : t + n;
      }
      function rX(e, t) {
        if (e === rF) throw Error("invert: expected non-zero number");
        if (t <= rF) throw Error("invert: expected positive modulus, got " + t);
        let n = rY(e, t),
          r = t,
          a = rF,
          i = rG,
          s = rG,
          o = rF;
        for (; n !== rF; ) {
          let e = r / n,
            t = r % n,
            c = a - s * e,
            u = i - o * e;
          (r = n), (n = t), (a = s), (i = o), (s = c), (o = u);
        }
        if (r !== rG) throw Error("invert: does not exist");
        return rY(a, t);
      }
      function r0(e, t, n) {
        if (!e.eql(e.sqr(t), n)) throw Error("Cannot find square root");
      }
      function r1(e, t) {
        let n = (e.ORDER + rG) / r$,
          r = e.pow(t, n);
        return r0(e, r, t), r;
      }
      function r2(e, t) {
        let n = (e.ORDER - rK) / rZ,
          r = e.mul(t, rz),
          a = e.pow(r, n),
          i = e.mul(t, a),
          s = e.mul(e.mul(i, rz), a),
          o = e.mul(i, e.sub(s, e.ONE));
        return r0(e, o, t), o;
      }
      function r3(e) {
        if (e < rW) throw Error("sqrt is not defined for small field");
        let t = e - rG,
          n = 0;
        for (; t % rz === rF; ) (t /= rz), n++;
        let r = rz,
          a = r8(e);
        for (; 1 === r4(a, r); )
          if (r++ > 1e3)
            throw Error("Cannot find square root: probably non-prime P");
        if (1 === n) return r1;
        let i = a.pow(r, t),
          s = (t + rG) / rz;
        return function (e, r) {
          if (e.is0(r)) return r;
          if (1 !== r4(e, r)) throw Error("Cannot find square root");
          let a = n,
            o = e.mul(e.ONE, i),
            c = e.pow(r, t),
            u = e.pow(r, s);
          for (; !e.eql(c, e.ONE); ) {
            if (e.is0(c)) return e.ZERO;
            let t = 1,
              n = e.sqr(c);
            for (; !e.eql(n, e.ONE); )
              if ((t++, (n = e.sqr(n)), t === a))
                throw Error("Cannot find square root");
            let r = rG << BigInt(a - t - 1),
              i = e.pow(o, r);
            (a = t), (o = e.sqr(i)), (c = e.mul(c, o)), (u = e.mul(u, i));
          }
          return u;
        };
      }
      let r6 = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function r5(e, t, n = !1) {
        let r = Array(t.length).fill(n ? e.ZERO : void 0),
          a = t.reduce(
            (t, n, a) => (e.is0(n) ? t : ((r[a] = t), e.mul(t, n))),
            e.ONE
          ),
          i = e.inv(a);
        return (
          t.reduceRight(
            (t, n, a) =>
              e.is0(n) ? t : ((r[a] = e.mul(t, r[a])), e.mul(t, n)),
            i
          ),
          r
        );
      }
      function r4(e, t) {
        let n = (e.ORDER - rG) / rz,
          r = e.pow(t, n),
          a = e.eql(r, e.ONE),
          i = e.eql(r, e.ZERO),
          s = e.eql(r, e.neg(e.ONE));
        if (!a && !i && !s) throw Error("invalid Legendre symbol result");
        return a ? 1 : i ? 0 : -1;
      }
      function r8(e, t, n = !1, r = {}) {
        let a, i, s, o;
        if (e <= rF) throw Error("invalid field: expected ORDER > 0, got " + e);
        let c = !1;
        if ("object" == typeof t && null != t) {
          if (r.sqrt || n) throw Error("cannot specify opts in two arguments");
          t.BITS && (i = t.BITS),
            t.sqrt && (s = t.sqrt),
            "boolean" == typeof t.isLE && (n = t.isLE),
            "boolean" == typeof t.modOnDecode && (c = t.modOnDecode),
            (o = t.allowedLengths);
        } else "number" == typeof t && (i = t), r.sqrt && (s = r.sqrt);
        let { nBitLength: u, nByteLength: l } = (function (e, t) {
          void 0 !== t && nq(t);
          let n = void 0 !== t ? t : e.toString(2).length,
            r = Math.ceil(n / 8);
          return { nBitLength: n, nByteLength: r };
        })(e, i);
        if (l > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let d = Object.freeze({
          ORDER: e,
          isLE: n,
          BITS: u,
          BYTES: l,
          MASK: rR(u),
          ZERO: rF,
          ONE: rG,
          allowedLengths: o,
          create: (t) => rY(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return rF <= t && t < e;
          },
          is0: (e) => e === rF,
          isValidNot0: (e) => !d.is0(e) && d.isValid(e),
          isOdd: (e) => (e & rG) === rG,
          neg: (t) => rY(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => rY(t * t, e),
          add: (t, n) => rY(t + n, e),
          sub: (t, n) => rY(t - n, e),
          mul: (t, n) => rY(t * n, e),
          pow: (e, t) =>
            (function (e, t, n) {
              if (n < rF)
                throw Error("invalid exponent, negatives unsupported");
              if (n === rF) return e.ONE;
              if (n === rG) return t;
              let r = e.ONE,
                a = t;
              for (; n > rF; )
                n & rG && (r = e.mul(r, a)), (a = e.sqr(a)), (n >>= rG);
              return r;
            })(d, e, t),
          div: (t, n) => rY(t * rX(n, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => rX(t, e),
          sqrt:
            s ||
            ((t) => (
              a ||
                (a =
                  e % r$ === rW
                    ? r1
                    : e % rZ === rK
                    ? r2
                    : e % rQ === rJ
                    ? (function (e) {
                        let t = r8(e),
                          n = r3(e),
                          r = n(t, t.neg(t.ONE)),
                          a = n(t, r),
                          i = n(t, t.neg(r)),
                          s = (e + rV) / rQ;
                        return (e, t) => {
                          let n = e.pow(t, s),
                            o = e.mul(n, r),
                            c = e.mul(n, a),
                            u = e.mul(n, i),
                            l = e.eql(e.sqr(o), t),
                            d = e.eql(e.sqr(c), t);
                          (n = e.cmov(n, o, l)), (o = e.cmov(u, c, d));
                          let f = e.eql(e.sqr(o), t),
                            p = e.cmov(n, o, f);
                          return r0(e, p, t), p;
                        };
                      })(e)
                    : r3(e)),
              a(d, t)
            )),
          toBytes: (e) => (n ? rN(e, l) : rL(e, l)),
          fromBytes: (t, r = !0) => {
            if (o) {
              if (!o.includes(t.length) || t.length > l)
                throw Error(
                  "Field.fromBytes: expected " + o + " bytes, got " + t.length
                );
              let e = new Uint8Array(l);
              e.set(t, n ? 0 : e.length - t.length), (t = e);
            }
            if (t.length !== l)
              throw Error(
                "Field.fromBytes: expected " + l + " bytes, got " + t.length
              );
            let a = n ? rM(t) : rj(nZ(t));
            if ((c && (a = rY(a, e)), !r && !d.isValid(a)))
              throw Error("invalid field element: outside of range 0..ORDER");
            return a;
          },
          invertBatch: (e) => r5(d, e),
          cmov: (e, t, n) => (n ? t : e),
        });
        return Object.freeze(d);
      }
      function r7(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function r9(e) {
        let t = r7(e);
        return t + Math.ceil(t / 2);
      }
      let ae = BigInt(0),
        at = BigInt(1);
      function an(e, t) {
        let n = t.negate();
        return e ? n : t;
      }
      function ar(e, t) {
        let n = r5(
          e.Fp,
          t.map((e) => e.Z)
        );
        return t.map((t, r) => e.fromAffine(t.toAffine(n[r])));
      }
      function aa(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function ai(e, t) {
        aa(e, t);
        let n = Math.ceil(t / e) + 1,
          r = 2 ** (e - 1),
          a = 2 ** e;
        return {
          windows: n,
          windowSize: r,
          mask: rR(e),
          maxNumber: a,
          shiftBy: BigInt(e),
        };
      }
      function as(e, t, n) {
        let { windowSize: r, mask: a, maxNumber: i, shiftBy: s } = n,
          o = Number(e & a),
          c = e >> s;
        o > r && ((o -= i), (c += at));
        let u = t * r,
          l = u + Math.abs(o) - 1,
          d = 0 === o;
        return {
          nextN: c,
          offset: l,
          isZero: d,
          isNeg: o < 0,
          isNegF: t % 2 != 0,
          offsetF: u,
        };
      }
      let ao = new WeakMap(),
        ac = new WeakMap();
      function au(e) {
        return ac.get(e) || 1;
      }
      function al(e) {
        if (e !== ae) throw Error("invalid wNAF");
      }
      class ad {
        constructor(e, t) {
          (this.BASE = e.BASE),
            (this.ZERO = e.ZERO),
            (this.Fn = e.Fn),
            (this.bits = t);
        }
        _unsafeLadder(e, t, n = this.ZERO) {
          let r = e;
          for (; t > ae; )
            t & at && (n = n.add(r)), (r = r.double()), (t >>= at);
          return n;
        }
        precomputeWindow(e, t) {
          let { windows: n, windowSize: r } = ai(t, this.bits),
            a = [],
            i = e,
            s = i;
          for (let e = 0; e < n; e++) {
            (s = i), a.push(s);
            for (let e = 1; e < r; e++) (s = s.add(i)), a.push(s);
            i = s.double();
          }
          return a;
        }
        wNAF(e, t, n) {
          if (!this.Fn.isValid(n)) throw Error("invalid scalar");
          let r = this.ZERO,
            a = this.BASE,
            i = ai(e, this.bits);
          for (let e = 0; e < i.windows; e++) {
            let {
              nextN: s,
              offset: o,
              isZero: c,
              isNeg: u,
              isNegF: l,
              offsetF: d,
            } = as(n, e, i);
            (n = s), c ? (a = a.add(an(l, t[d]))) : (r = r.add(an(u, t[o])));
          }
          return al(n), { p: r, f: a };
        }
        wNAFUnsafe(e, t, n, r = this.ZERO) {
          let a = ai(e, this.bits);
          for (let e = 0; e < a.windows && n !== ae; e++) {
            let { nextN: i, offset: s, isZero: o, isNeg: c } = as(n, e, a);
            if (((n = i), !o)) {
              let e = t[s];
              r = r.add(c ? e.negate() : e);
            }
          }
          return al(n), r;
        }
        getPrecomputes(e, t, n) {
          let r = ao.get(t);
          return (
            r ||
              ((r = this.precomputeWindow(t, e)),
              1 !== e && ("function" == typeof n && (r = n(r)), ao.set(t, r))),
            r
          );
        }
        cached(e, t, n) {
          let r = au(e);
          return this.wNAF(r, this.getPrecomputes(r, e, n), t);
        }
        unsafe(e, t, n, r) {
          let a = au(e);
          return 1 === a
            ? this._unsafeLadder(e, t, r)
            : this.wNAFUnsafe(a, this.getPrecomputes(a, e, n), t, r);
        }
        createCache(e, t) {
          aa(t, this.bits), ac.set(e, t), ao.delete(e);
        }
        hasCache(e) {
          return 1 !== au(e);
        }
      }
      function af(e, t) {
        if (!t) return r8(e);
        if (t.ORDER !== e)
          throw Error("Field.ORDER must match order: Fp == p, Fn == n");
        return (
          rq(
            t,
            r6.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "number",
              BITS: "number",
            })
          ),
          t
        );
      }
      let ap = (e, t) => (e + (e >= 0 ? t : -t) / aw) / t;
      function ah(e) {
        void 0 !== e.lowS && rC("lowS", e.lowS),
          void 0 !== e.prehash && rC("prehash", e.prehash);
      }
      class am extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let ay = {
          Err: am,
          _tlv: {
            encode: (e, t) => {
              let { Err: n } = ay;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (1 & t.length) throw new n("tlv.encode: unpadded data");
              let r = t.length / 2,
                a = rT(r);
              if ((a.length / 2) & 128)
                throw new n("tlv.encode: long form length too big");
              let i = r > 127 ? rT((a.length / 2) | 128) : "";
              return rT(e) + i + a + t;
            },
            decode(e, t) {
              let { Err: n } = ay,
                r = 0;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (t.length < 2 || t[r++] !== e)
                throw new n("tlv.decode: wrong tlv");
              let a = t[r++],
                i = 0;
              if (128 & a) {
                let e = 127 & a;
                if (!e)
                  throw new n(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new n("tlv.decode(long): byte length is too big");
                let s = t.subarray(r, r + e);
                if (s.length !== e)
                  throw new n("tlv.decode: length bytes not complete");
                if (0 === s[0])
                  throw new n("tlv.decode(long): zero leftmost byte");
                for (let e of s) i = (i << 8) | e;
                if (((r += e), i < 128))
                  throw new n("tlv.decode(long): not minimal encoding");
              } else i = a;
              let s = t.subarray(r, r + i);
              if (s.length !== i) throw new n("tlv.decode: wrong value length");
              return { v: s, l: t.subarray(r + i) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = ay;
              if (e < ab)
                throw new t("integer: negative integers are not allowed");
              let n = rT(e);
              if (
                (8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return n;
            },
            decode(e) {
              let { Err: t } = ay;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return rj(nZ(e));
            },
          },
          toSig(e) {
            let { Err: t, _int: n, _tlv: r } = ay,
              a = rD("signature", e),
              { v: i, l: s } = r.decode(48, a);
            if (s.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: o, l: c } = r.decode(2, i),
              { v: u, l: l } = r.decode(2, c);
            if (l.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: n.decode(o), s: n.decode(u) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: n } = ay,
              r = t.encode(2, n.encode(e.r)),
              a = t.encode(2, n.encode(e.s));
            return t.encode(48, r + a);
          },
        },
        ab = BigInt(0),
        ag = BigInt(1),
        aw = BigInt(2),
        av = BigInt(3),
        a_ = BigInt(4);
      function ax(e, t) {
        let n,
          { BYTES: r } = e;
        if ("bigint" == typeof t) n = t;
        else {
          let a = rD("private key", t);
          try {
            n = e.fromBytes(a);
          } catch (e) {
            throw Error(
              `invalid private key: expected ui8a of size ${r}, got ${typeof t}`
            );
          }
        }
        if (!e.isValidNot0(n))
          throw Error("invalid private key: out of range [1..N-1]");
        return n;
      }
      function ak(e) {
        return Uint8Array.of(e ? 2 : 3);
      }
      function aE(e, t) {
        let n = (t) =>
          (function (e) {
            let {
                CURVE: t,
                curveOpts: n,
                hash: r,
                ecdsaOpts: a,
              } = (function (e) {
                let { CURVE: t, curveOpts: n } = (function (e) {
                    let t = {
                        a: e.a,
                        b: e.b,
                        p: e.Fp.ORDER,
                        n: e.n,
                        h: e.h,
                        Gx: e.Gx,
                        Gy: e.Gy,
                      },
                      n = e.Fp,
                      r = e.allowedPrivateKeyLengths
                        ? Array.from(
                            new Set(
                              e.allowedPrivateKeyLengths.map((e) =>
                                Math.ceil(e / 2)
                              )
                            )
                          )
                        : void 0,
                      a = {
                        Fp: n,
                        Fn: r8(t.n, {
                          BITS: e.nBitLength,
                          allowedLengths: r,
                          modOnDecode: e.wrapPrivateKey,
                        }),
                        allowInfinityPoint: e.allowInfinityPoint,
                        endo: e.endo,
                        isTorsionFree: e.isTorsionFree,
                        clearCofactor: e.clearCofactor,
                        fromBytes: e.fromBytes,
                        toBytes: e.toBytes,
                      };
                    return { CURVE: t, curveOpts: a };
                  })(e),
                  r = {
                    hmac: e.hmac,
                    randomBytes: e.randomBytes,
                    lowS: e.lowS,
                    bits2int: e.bits2int,
                    bits2int_modN: e.bits2int_modN,
                  };
                return { CURVE: t, curveOpts: n, hash: e.hash, ecdsaOpts: r };
              })(e),
              i = (function (e, t, n = {}) {
                nF(t),
                  rq(
                    n,
                    {},
                    {
                      hmac: "function",
                      lowS: "boolean",
                      randomBytes: "function",
                      bits2int: "function",
                      bits2int_modN: "function",
                    }
                  );
                let r = n.randomBytes || n3,
                  a = n.hmac || ((e, ...n) => rI(t, e, n0(...n))),
                  { Fp: i, Fn: s } = e,
                  { ORDER: o, BITS: c } = s,
                  u = r9(o),
                  l = {
                    secret: s.BYTES,
                    public: 1 + i.BYTES,
                    publicUncompressed: 1 + 2 * i.BYTES,
                    signature: 2 * s.BYTES,
                    seed: u,
                  };
                function d(e, t) {
                  if (!s.isValidNot0(t))
                    throw Error(
                      `invalid signature ${e}: out of range 1..CURVE.n`
                    );
                }
                class f {
                  constructor(e, t, n) {
                    d("r", e),
                      d("s", t),
                      (this.r = e),
                      (this.s = t),
                      null != n && (this.recovery = n),
                      Object.freeze(this);
                  }
                  static fromBytes(e, t = "compact") {
                    if ("compact" === t) {
                      let t = s.BYTES;
                      nH(e, 2 * t);
                      let n = e.subarray(0, t),
                        r = e.subarray(t, 2 * t);
                      return new f(s.fromBytes(n), s.fromBytes(r));
                    }
                    if ("der" === t) {
                      nH(e);
                      let { r: t, s: n } = ay.toSig(e);
                      return new f(t, n);
                    }
                    throw Error("invalid format");
                  }
                  static fromHex(e, t) {
                    return this.fromBytes(nY(e), t);
                  }
                  addRecoveryBit(e) {
                    return new f(this.r, this.s, e);
                  }
                  recoverPublicKey(t) {
                    let n = i.ORDER,
                      { r, s: a, recovery: c } = this;
                    if (null == c || ![0, 1, 2, 3].includes(c))
                      throw Error("recovery id invalid");
                    if (o * aw < n && c > 1)
                      throw Error("recovery id is ambiguous for h>1 curve");
                    let u = 2 === c || 3 === c ? r + o : r;
                    if (!i.isValid(u))
                      throw Error("recovery id 2 or 3 invalid");
                    let l = i.toBytes(u),
                      d = e.fromHex(n0(ak((1 & c) == 0), l)),
                      f = s.inv(u),
                      p = w(rD("msgHash", t)),
                      h = s.create(-p * f),
                      m = s.create(a * f),
                      y = e.BASE.multiplyUnsafe(h).add(d.multiplyUnsafe(m));
                    if (y.is0()) throw Error("point at infinify");
                    return y.assertValidity(), y;
                  }
                  hasHighS() {
                    return this.s > o >> ag;
                  }
                  normalizeS() {
                    return this.hasHighS()
                      ? new f(this.r, s.neg(this.s), this.recovery)
                      : this;
                  }
                  toBytes(e = "compact") {
                    if ("compact" === e)
                      return n0(s.toBytes(this.r), s.toBytes(this.s));
                    if ("der" === e) return nY(ay.hexFromSig(this));
                    throw Error("invalid format");
                  }
                  toHex(e) {
                    return nZ(this.toBytes(e));
                  }
                  assertValidity() {}
                  static fromCompact(e) {
                    return f.fromBytes(rD("sig", e), "compact");
                  }
                  static fromDER(e) {
                    return f.fromBytes(rD("sig", e), "der");
                  }
                  toDERRawBytes() {
                    return this.toBytes("der");
                  }
                  toDERHex() {
                    return nZ(this.toBytes("der"));
                  }
                  toCompactRawBytes() {
                    return this.toBytes("compact");
                  }
                  toCompactHex() {
                    return nZ(this.toBytes("compact"));
                  }
                }
                function p(e) {
                  try {
                    return !!ax(s, e);
                  } catch (e) {
                    return !1;
                  }
                }
                function h(e = r(u)) {
                  return (function (e, t, n = !1) {
                    let r = e.length,
                      a = r7(t),
                      i = r9(t);
                    if (r < 16 || r < i || r > 1024)
                      throw Error(
                        "expected " + i + "-1024 bytes of input, got " + r
                      );
                    let s = rY(n ? rM(e) : rj(nZ(e)), t - rG) + rG;
                    return n ? rN(s, a) : rL(s, a);
                  })(e, o);
                }
                let m = {
                  isValidSecretKey: p,
                  isValidPublicKey: function (t, n) {
                    try {
                      let r = t.length;
                      if (
                        (!0 === n && r !== l.public) ||
                        (!1 === n && r !== l.publicUncompressed)
                      )
                        return !1;
                      return !!e.fromBytes(t);
                    } catch (e) {
                      return !1;
                    }
                  },
                  randomSecretKey: h,
                  isValidPrivateKey: p,
                  randomPrivateKey: h,
                  normPrivateKeyToScalar: (e) => ax(s, e),
                  precompute: (t = 8, n = e.BASE) => n.precompute(t, !1),
                };
                function y(t, n = !0) {
                  return e.BASE.multiply(ax(s, t)).toBytes(n);
                }
                function b(t) {
                  if ("bigint" == typeof t) return !1;
                  if (t instanceof e) return !0;
                  if (s.allowedLengths || l.secret === l.public) return;
                  let n = rD("key", t).length;
                  return n === l.public || n === l.publicUncompressed;
                }
                let g =
                    n.bits2int ||
                    function (e) {
                      if (e.length > 8192) throw Error("input is too large");
                      let t = rj(nZ(e)),
                        n = 8 * e.length - c;
                      return n > 0 ? t >> BigInt(n) : t;
                    },
                  w =
                    n.bits2int_modN ||
                    function (e) {
                      return s.create(g(e));
                    },
                  v = rR(c);
                function _(e) {
                  return (
                    !(function (e, t, n, r) {
                      if (!(rB(t) && rB(n) && rB(r)) || !(n <= t) || !(t < r))
                        throw Error(
                          "expected valid " +
                            e +
                            ": " +
                            n +
                            " <= n < " +
                            r +
                            ", got " +
                            t
                        );
                    })("num < 2^" + c, e, ab, v),
                    s.toBytes(e)
                  );
                }
                let x = { lowS: n.lowS, prehash: !1 },
                  k = { lowS: n.lowS, prehash: !1 };
                return (
                  e.BASE.precompute(8),
                  Object.freeze({
                    keygen: function (e) {
                      let t = m.randomSecretKey(e);
                      return { secretKey: t, publicKey: y(t) };
                    },
                    getPublicKey: y,
                    sign: function (n, i, c = x) {
                      let { seed: u, k2sig: d } = (function (n, a, i = x) {
                        if (["recovered", "canonical"].some((e) => e in i))
                          throw Error("sign() legacy options not supported");
                        let { lowS: c, prehash: u, extraEntropy: d } = i;
                        null == c && (c = !0),
                          (n = rD("msgHash", n)),
                          ah(i),
                          u && (n = rD("prehashed msgHash", t(n)));
                        let p = w(n),
                          h = ax(s, a),
                          m = [_(h), _(p)];
                        if (null != d && !1 !== d) {
                          let e = !0 === d ? r(l.secret) : d;
                          m.push(rD("extraEntropy", e));
                        }
                        return {
                          seed: n0(...m),
                          k2sig: function (t) {
                            var n;
                            let r = g(t);
                            if (!s.isValidNot0(r)) return;
                            let a = s.inv(r),
                              i = e.BASE.multiply(r).toAffine(),
                              u = s.create(i.x);
                            if (u === ab) return;
                            let l = s.create(a * s.create(p + u * h));
                            if (l === ab) return;
                            let d = (2 * (i.x !== u)) | Number(i.y & ag),
                              m = l;
                            return (
                              c &&
                                l > o >> ag &&
                                ((m = (n = l) > o >> ag ? s.neg(n) : n),
                                (d ^= 1)),
                              new f(u, m, d)
                            );
                          },
                        };
                      })(n, i, c);
                      return (function (e, t, n) {
                        if ("number" != typeof e || e < 2)
                          throw Error("hashLen must be a number");
                        if ("number" != typeof t || t < 2)
                          throw Error("qByteLen must be a number");
                        if ("function" != typeof n)
                          throw Error("hmacFn must be a function");
                        let r = (e) => new Uint8Array(e),
                          a = (e) => Uint8Array.of(e),
                          i = r(e),
                          s = r(e),
                          o = 0,
                          c = () => {
                            i.fill(1), s.fill(0), (o = 0);
                          },
                          u = (...e) => n(s, i, ...e),
                          l = (e = r(0)) => {
                            (s = u(a(0), e)),
                              (i = u()),
                              0 !== e.length && ((s = u(a(1), e)), (i = u()));
                          },
                          d = () => {
                            if (o++ >= 1e3)
                              throw Error("drbg: tried 1000 values");
                            let e = 0,
                              n = [];
                            for (; e < t; ) {
                              let t = (i = u()).slice();
                              n.push(t), (e += i.length);
                            }
                            return n0(...n);
                          };
                        return (e, t) => {
                          let n;
                          for (c(), l(e); !(n = t(d())); ) l();
                          return c(), n;
                        };
                      })(
                        t.outputLen,
                        s.BYTES,
                        a
                      )(u, d);
                    },
                    verify: function (n, r, a, i = k) {
                      let o, c;
                      (r = rD("msgHash", r)), (a = rD("publicKey", a)), ah(i);
                      let { lowS: u, prehash: l, format: d } = i;
                      if ("strict" in i)
                        throw Error("options.strict was renamed to lowS");
                      if (void 0 === d) {
                        let e = "string" == typeof n || nR(n),
                          t =
                            !e &&
                            null !== n &&
                            "object" == typeof n &&
                            "bigint" == typeof n.r &&
                            "bigint" == typeof n.s;
                        if (!e && !t)
                          throw Error(
                            "invalid signature, expected Uint8Array, hex string or Signature instance"
                          );
                        if (t) c = new f(n.r, n.s);
                        else if (e) {
                          try {
                            c = f.fromDER(n);
                          } catch (e) {
                            if (!(e instanceof ay.Err)) throw e;
                          }
                          if (!c)
                            try {
                              c = f.fromCompact(n);
                            } catch (e) {
                              return !1;
                            }
                        }
                      } else if ("compact" === d || "der" === d) {
                        if ("string" != typeof n && !nR(n))
                          throw Error(
                            '"der" / "compact" format expects Uint8Array signature'
                          );
                        c = f.fromBytes(rD("sig", n), d);
                      } else if ("js" === d) {
                        if (!(n instanceof f))
                          throw Error('"js" format expects Signature instance');
                        c = n;
                      } else
                        throw Error('format must be "compact", "der" or "js"');
                      if (!c) return !1;
                      try {
                        if (((o = e.fromHex(a)), u && c.hasHighS())) return !1;
                        l && (r = t(r));
                        let { r: n, s: i } = c,
                          d = w(r),
                          f = s.inv(i),
                          p = s.create(d * f),
                          h = s.create(n * f),
                          m = e.BASE.multiplyUnsafe(p).add(o.multiplyUnsafe(h));
                        if (m.is0()) return !1;
                        return s.create(m.x) === n;
                      } catch (e) {
                        return !1;
                      }
                    },
                    getSharedSecret: function (t, n, r = !0) {
                      if (!0 === b(t))
                        throw Error("first arg must be private key");
                      if (!1 === b(n))
                        throw Error("second arg must be public key");
                      let a = ax(s, t);
                      return e.fromHex(n).multiply(a).toBytes(r);
                    },
                    utils: m,
                    Point: e,
                    Signature: f,
                    info: {
                      type: "weierstrass",
                      lengths: l,
                      publicKeyHasPrefix: !0,
                    },
                  })
                );
              })(
                (function (e, t = {}) {
                  var n, r, a;
                  let { Fp: i, Fn: s } = (function (e, t, n = {}) {
                      if (!t || "object" != typeof t)
                        throw Error(`expected valid ${e} CURVE object`);
                      for (let e of ["p", "n", "h"]) {
                        let n = t[e];
                        if (!("bigint" == typeof n && n > ae))
                          throw Error(`CURVE.${e} must be positive bigint`);
                      }
                      let r = af(t.p, n.Fp),
                        a = af(t.n, n.Fn);
                      for (let n of [
                        "Gx",
                        "Gy",
                        "a",
                        "weierstrass" === e ? "b" : "d",
                      ])
                        if (!r.isValid(t[n]))
                          throw Error(
                            `CURVE.${n} must be valid field element of CURVE.Fp`
                          );
                      return { Fp: r, Fn: a };
                    })("weierstrass", e, t),
                    { h: o, n: c } = e;
                  rq(
                    t,
                    {},
                    {
                      allowInfinityPoint: "boolean",
                      clearCofactor: "function",
                      isTorsionFree: "function",
                      fromBytes: "function",
                      toBytes: "function",
                      endo: "object",
                      wrapPrivateKey: "boolean",
                    }
                  );
                  let { endo: u } = t;
                  if (
                    u &&
                    (!i.is0(e.a) ||
                      "bigint" != typeof u.beta ||
                      !Array.isArray(u.basises))
                  )
                    throw Error(
                      'invalid endo: expected "beta": bigint and "basises": array'
                    );
                  function l() {
                    if (!i.isOdd)
                      throw Error(
                        "compression is not supported: Field does not have .isOdd()"
                      );
                  }
                  let d =
                      t.toBytes ||
                      function (e, t, n) {
                        let { x: r, y: a } = t.toAffine(),
                          s = i.toBytes(r);
                        return (rC("isCompressed", n), n)
                          ? (l(), n0(ak(!i.isOdd(a)), s))
                          : n0(Uint8Array.of(4), s, i.toBytes(a));
                      },
                    f =
                      t.fromBytes ||
                      function (e) {
                        nH(e);
                        let t = i.BYTES,
                          n = t + 1,
                          r = 2 * t + 1,
                          a = e.length,
                          s = e[0],
                          o = e.subarray(1);
                        if (a === n && (2 === s || 3 === s)) {
                          let e,
                            t = i.fromBytes(o);
                          if (!i.isValid(t))
                            throw Error("bad point: is not on curve, wrong x");
                          let n = p(t);
                          try {
                            e = i.sqrt(n);
                          } catch (e) {
                            throw Error(
                              "bad point: is not on curve, sqrt error" +
                                (e instanceof Error ? ": " + e.message : "")
                            );
                          }
                          return (
                            l(),
                            ((1 & s) == 1) !== i.isOdd(e) && (e = i.neg(e)),
                            { x: t, y: e }
                          );
                        }
                        if (a === r && 4 === s) {
                          let e = i.fromBytes(o.subarray(0 * t, +t)),
                            n = i.fromBytes(o.subarray(+t, 2 * t));
                          if (!h(e, n))
                            throw Error("bad point: is not on curve");
                          return { x: e, y: n };
                        }
                        throw Error(
                          `bad point: got length ${a}, expected compressed=${n} or uncompressed=${r}`
                        );
                      },
                    p =
                      ((n = i),
                      (r = e.a),
                      (a = e.b),
                      function (e) {
                        let t = n.sqr(e),
                          i = n.mul(t, e);
                        return n.add(n.add(i, n.mul(e, r)), a);
                      });
                  function h(e, t) {
                    let n = i.sqr(t),
                      r = p(e);
                    return i.eql(n, r);
                  }
                  if (!h(e.Gx, e.Gy))
                    throw Error("bad curve params: generator point");
                  let m = i.mul(i.pow(e.a, av), a_),
                    y = i.mul(i.sqr(e.b), BigInt(27));
                  if (i.is0(i.add(m, y)))
                    throw Error("bad curve params: a or b");
                  function b(e, t, n = !1) {
                    if (!i.isValid(t) || (n && i.is0(t)))
                      throw Error(`bad point coordinate ${e}`);
                    return t;
                  }
                  function g(e) {
                    if (!(e instanceof k))
                      throw Error("ProjectivePoint expected");
                  }
                  function w(e) {
                    if (!u || !u.basises) throw Error("no endo");
                    return (function (e, t, n) {
                      let [[r, a], [i, s]] = t,
                        o = ap(s * e, n),
                        c = ap(-a * e, n),
                        u = e - o * r - c * i,
                        l = -o * a - c * s,
                        d = u < ab,
                        f = l < ab;
                      d && (u = -u), f && (l = -l);
                      let p = rR(Math.ceil(rU(n) / 2)) + ag;
                      if (u < ab || u >= p || l < ab || l >= p)
                        throw Error(
                          "splitScalar (endomorphism): failed, k=" + e
                        );
                      return { k1neg: d, k1: u, k2neg: f, k2: l };
                    })(e, u.basises, s.ORDER);
                  }
                  let v = rH((e, t) => {
                      let { X: n, Y: r, Z: a } = e;
                      if (i.eql(a, i.ONE)) return { x: n, y: r };
                      let s = e.is0();
                      null == t && (t = s ? i.ONE : i.inv(a));
                      let o = i.mul(n, t),
                        c = i.mul(r, t),
                        u = i.mul(a, t);
                      if (s) return { x: i.ZERO, y: i.ZERO };
                      if (!i.eql(u, i.ONE)) throw Error("invZ was invalid");
                      return { x: o, y: c };
                    }),
                    _ = rH((e) => {
                      if (e.is0()) {
                        if (t.allowInfinityPoint && !i.is0(e.Y)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: n, y: r } = e.toAffine();
                      if (!i.isValid(n) || !i.isValid(r))
                        throw Error("bad point: x or y not field elements");
                      if (!h(n, r))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  function x(e, t, n, r, a) {
                    return (
                      (n = new k(i.mul(n.X, e), n.Y, n.Z)),
                      (t = an(r, t)),
                      (n = an(a, n)),
                      t.add(n)
                    );
                  }
                  class k {
                    constructor(e, t, n) {
                      (this.X = b("x", e)),
                        (this.Y = b("y", t, !0)),
                        (this.Z = b("z", n)),
                        Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: n } = e || {};
                      if (!e || !i.isValid(t) || !i.isValid(n))
                        throw Error("invalid affine point");
                      if (e instanceof k)
                        throw Error("projective point not allowed");
                      return i.is0(t) && i.is0(n) ? k.ZERO : new k(t, n, i.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    get px() {
                      return this.X;
                    }
                    get py() {
                      return this.X;
                    }
                    get pz() {
                      return this.Z;
                    }
                    static normalizeZ(e) {
                      return ar(k, e);
                    }
                    static fromBytes(e) {
                      return nH(e), k.fromHex(e);
                    }
                    static fromHex(e) {
                      let t = k.fromAffine(f(rD("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return k.BASE.multiply(ax(s, e));
                    }
                    static msm(e, t) {
                      return (function (e, t, n, r) {
                        (function (e, t) {
                          if (!Array.isArray(e)) throw Error("array expected");
                          e.forEach((e, n) => {
                            if (!(e instanceof t))
                              throw Error("invalid point at index " + n);
                          });
                        })(n, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, n) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + n);
                            });
                          })(r, t);
                        let a = n.length,
                          i = r.length;
                        if (a !== i)
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let s = e.ZERO,
                          o = rU(BigInt(a)),
                          c = 1;
                        o > 12
                          ? (c = o - 3)
                          : o > 4
                          ? (c = o - 2)
                          : o > 0 && (c = 2);
                        let u = rR(c),
                          l = Array(Number(u) + 1).fill(s),
                          d = Math.floor((t.BITS - 1) / c) * c,
                          f = s;
                        for (let e = d; e >= 0; e -= c) {
                          l.fill(s);
                          for (let t = 0; t < i; t++) {
                            let a = Number((r[t] >> BigInt(e)) & u);
                            l[a] = l[a].add(n[t]);
                          }
                          let t = s;
                          for (let e = l.length - 1, n = s; e > 0; e--)
                            (n = n.add(l[e])), (t = t.add(n));
                          if (((f = f.add(t)), 0 !== e))
                            for (let e = 0; e < c; e++) f = f.double();
                        }
                        return f;
                      })(k, s, e, t);
                    }
                    _setWindowSize(e) {
                      this.precompute(e);
                    }
                    precompute(e = 8, t = !0) {
                      return (
                        A.createCache(this, e), t || this.multiply(av), this
                      );
                    }
                    assertValidity() {
                      _(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (!i.isOdd) throw Error("Field doesn't support isOdd");
                      return !i.isOdd(e);
                    }
                    equals(e) {
                      g(e);
                      let { X: t, Y: n, Z: r } = this,
                        { X: a, Y: s, Z: o } = e,
                        c = i.eql(i.mul(t, o), i.mul(a, r)),
                        u = i.eql(i.mul(n, o), i.mul(s, r));
                      return c && u;
                    }
                    negate() {
                      return new k(this.X, i.neg(this.Y), this.Z);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        r = i.mul(n, av),
                        { X: a, Y: s, Z: o } = this,
                        c = i.ZERO,
                        u = i.ZERO,
                        l = i.ZERO,
                        d = i.mul(a, a),
                        f = i.mul(s, s),
                        p = i.mul(o, o),
                        h = i.mul(a, s);
                      return (
                        (h = i.add(h, h)),
                        (l = i.mul(a, o)),
                        (l = i.add(l, l)),
                        (c = i.mul(t, l)),
                        (u = i.mul(r, p)),
                        (u = i.add(c, u)),
                        (c = i.sub(f, u)),
                        (u = i.add(f, u)),
                        (u = i.mul(c, u)),
                        (c = i.mul(h, c)),
                        (l = i.mul(r, l)),
                        (p = i.mul(t, p)),
                        (h = i.sub(d, p)),
                        (h = i.mul(t, h)),
                        (h = i.add(h, l)),
                        (l = i.add(d, d)),
                        (d = i.add(l, d)),
                        (d = i.add(d, p)),
                        (d = i.mul(d, h)),
                        (u = i.add(u, d)),
                        (p = i.mul(s, o)),
                        (p = i.add(p, p)),
                        (d = i.mul(p, h)),
                        (c = i.sub(c, d)),
                        (l = i.mul(p, f)),
                        (l = i.add(l, l)),
                        new k(c, u, (l = i.add(l, l)))
                      );
                    }
                    add(t) {
                      g(t);
                      let { X: n, Y: r, Z: a } = this,
                        { X: s, Y: o, Z: c } = t,
                        u = i.ZERO,
                        l = i.ZERO,
                        d = i.ZERO,
                        f = e.a,
                        p = i.mul(e.b, av),
                        h = i.mul(n, s),
                        m = i.mul(r, o),
                        y = i.mul(a, c),
                        b = i.add(n, r),
                        w = i.add(s, o);
                      (b = i.mul(b, w)),
                        (w = i.add(h, m)),
                        (b = i.sub(b, w)),
                        (w = i.add(n, a));
                      let v = i.add(s, c);
                      return (
                        (w = i.mul(w, v)),
                        (v = i.add(h, y)),
                        (w = i.sub(w, v)),
                        (v = i.add(r, a)),
                        (u = i.add(o, c)),
                        (v = i.mul(v, u)),
                        (u = i.add(m, y)),
                        (v = i.sub(v, u)),
                        (d = i.mul(f, w)),
                        (u = i.mul(p, y)),
                        (d = i.add(u, d)),
                        (u = i.sub(m, d)),
                        (d = i.add(m, d)),
                        (l = i.mul(u, d)),
                        (m = i.add(h, h)),
                        (m = i.add(m, h)),
                        (y = i.mul(f, y)),
                        (w = i.mul(p, w)),
                        (m = i.add(m, y)),
                        (y = i.sub(h, y)),
                        (y = i.mul(f, y)),
                        (w = i.add(w, y)),
                        (h = i.mul(m, w)),
                        (l = i.add(l, h)),
                        (h = i.mul(v, w)),
                        (u = i.mul(b, u)),
                        (u = i.sub(u, h)),
                        (h = i.mul(b, m)),
                        (d = i.mul(v, d)),
                        new k(u, l, (d = i.add(d, h)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(k.ZERO);
                    }
                    multiply(e) {
                      let n,
                        r,
                        { endo: a } = t;
                      if (!s.isValidNot0(e))
                        throw Error("invalid scalar: out of range");
                      let i = (e) => A.cached(this, e, (e) => ar(k, e));
                      if (a) {
                        let { k1neg: t, k1: s, k2neg: o, k2: c } = w(e),
                          { p: u, f: l } = i(s),
                          { p: d, f: f } = i(c);
                        (r = l.add(f)), (n = x(a.beta, u, d, t, o));
                      } else {
                        let { p: t, f: a } = i(e);
                        (n = t), (r = a);
                      }
                      return ar(k, [n, r])[0];
                    }
                    multiplyUnsafe(e) {
                      let { endo: n } = t;
                      if (!s.isValid(e))
                        throw Error("invalid scalar: out of range");
                      if (e === ab || this.is0()) return k.ZERO;
                      if (e === ag) return this;
                      if (A.hasCache(this)) return this.multiply(e);
                      if (!n) return A.unsafe(this, e);
                      {
                        let { k1neg: t, k1: r, k2neg: a, k2: i } = w(e),
                          { p1: s, p2: o } = (function (e, t, n, r) {
                            let a = t,
                              i = e.ZERO,
                              s = e.ZERO;
                            for (; n > ae || r > ae; )
                              n & at && (i = i.add(a)),
                                r & at && (s = s.add(a)),
                                (a = a.double()),
                                (n >>= at),
                                (r >>= at);
                            return { p1: i, p2: s };
                          })(k, this, r, i);
                        return x(n.beta, s, o, t, a);
                      }
                    }
                    multiplyAndAddUnsafe(e, t, n) {
                      let r = this.multiplyUnsafe(t).add(e.multiplyUnsafe(n));
                      return r.is0() ? void 0 : r;
                    }
                    toAffine(e) {
                      return v(this, e);
                    }
                    isTorsionFree() {
                      let { isTorsionFree: e } = t;
                      return (
                        o === ag || (e ? e(k, this) : A.unsafe(this, c).is0())
                      );
                    }
                    clearCofactor() {
                      let { clearCofactor: e } = t;
                      return o === ag
                        ? this
                        : e
                        ? e(k, this)
                        : this.multiplyUnsafe(o);
                    }
                    isSmallOrder() {
                      return this.multiplyUnsafe(o).is0();
                    }
                    toBytes(e = !0) {
                      return (
                        rC("isCompressed", e),
                        this.assertValidity(),
                        d(k, this, e)
                      );
                    }
                    toRawBytes(e = !0) {
                      return this.toBytes(e);
                    }
                    toHex(e = !0) {
                      return nZ(this.toBytes(e));
                    }
                    toString() {
                      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
                    }
                  }
                  (k.BASE = new k(e.Gx, e.Gy, i.ONE)),
                    (k.ZERO = new k(i.ZERO, i.ONE, i.ZERO)),
                    (k.Fp = i),
                    (k.Fn = s);
                  let E = s.BITS,
                    A = new ad(k, t.endo ? Math.ceil(E / 2) : E);
                  return k;
                })(t, n),
                r,
                a
              );
            return Object.assign({}, i, { ProjectivePoint: i.Point, CURVE: e });
          })({ ...e, hash: t });
        return { ...n(t), create: n };
      }
      let aA = {
          p: BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          ),
          n: BigInt(
            "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
          ),
          h: BigInt(1),
          a: BigInt(
            "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
          ),
          b: BigInt(
            "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
          ),
          Gx: BigInt(
            "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
          ),
          Gy: BigInt(
            "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
          ),
        },
        aS = {
          p: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
          ),
          n: BigInt(
            "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
          ),
          h: BigInt(1),
          a: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
          ),
          b: BigInt(
            "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
          ),
          Gx: BigInt(
            "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
          ),
          Gy: BigInt(
            "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
          ),
        },
        aI = {
          p: BigInt(
            "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          ),
          n: BigInt(
            "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
          ),
          h: BigInt(1),
          a: BigInt(
            "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
          ),
          b: BigInt(
            "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
          ),
          Gx: BigInt(
            "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
          ),
          Gy: BigInt(
            "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
          ),
        },
        aO = r8(aA.p),
        aP = r8(aS.p),
        aC = r8(aI.p),
        aT = aE({ ...aA, Fp: aO, lowS: !1 }, rk);
      aE({ ...aS, Fp: aP, lowS: !1 }, rA),
        aE(
          {
            ...aI,
            Fp: aC,
            lowS: !1,
            allowedPrivateKeyLengths: [130, 131, 132],
          },
          rE
        );
      class aj extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof aj) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            r = (t.cause instanceof aj && t.cause.docsPath) || t.docsPath,
            a = `https://oxlib.sh${r ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || r
                ? ["", n ? `Details: ${n}` : void 0, r ? `See: ${a}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = a),
            (this.docsPath = r),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
      function aM(e, t, n) {
        return JSON.stringify(
          e,
          (e, n) =>
            "function" == typeof t
              ? t(e, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
      function aL(e, t) {
        if (aW(e) > t) throw new aZ({ givenSize: aW(e), maxSize: t });
      }
      function aN(e, t = {}) {
        let { dir: n, size: r = 32 } = t;
        if (0 === r) return e;
        let a = e.replace("0x", "");
        if (a.length > 2 * r)
          throw new aQ({
            size: Math.ceil(a.length / 2),
            targetSize: r,
            type: "Hex",
          });
        return `0x${a["right" === n ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
      let aD = new TextEncoder(),
        aB = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function aU(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function aR(e) {
        return e instanceof Uint8Array
          ? aq(e)
          : Array.isArray(e)
          ? aq(new Uint8Array(e))
          : e;
      }
      function aq(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += aB[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (aL(r, t.size), aG(r, t.size)) : r;
      }
      function aH(e, t = {}) {
        let n,
          { signed: r, size: a } = t,
          i = BigInt(e);
        a
          ? (n = r
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let s = "bigint" == typeof n && r ? -n - 1n : 0;
        if ((n && i > n) || i < s) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new a$({
            max: n ? `${n}${t}` : void 0,
            min: `${s}${t}`,
            signed: r,
            size: a,
            value: `${e}${t}`,
          });
        }
        let o = (r && i < 0 ? (1n << BigInt(8 * a)) + BigInt(i) : i).toString(
            16
          ),
          c = `0x${o}`;
        return a
          ? (function (e, t) {
              return aN(e, { dir: "left", size: t });
            })(c, a)
          : c;
      }
      function aF(e, t = {}) {
        return aq(aD.encode(e), t);
      }
      function aG(e, t) {
        return aN(e, { dir: "right", size: t });
      }
      function az(e, t, n, r = {}) {
        let { strict: a } = r;
        if ("number" == typeof t && t > 0 && t > aW(e) - 1)
          throw new aJ({ offset: t, position: "start", size: aW(e) });
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return (
          a &&
            (function (e, t, n) {
              if (
                "number" == typeof t &&
                "number" == typeof n &&
                aW(e) !== n - t
              )
                throw new aJ({ offset: n, position: "end", size: aW(e) });
            })(i, t, n),
          i
        );
      }
      function aW(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      class a$ extends aj {
        constructor({ max: e, min: t, signed: n, size: r, value: a }) {
          super(
            `Number \`${a}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class aK extends aj {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? aM(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class aV extends aj {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      class aZ extends aj {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class aJ extends aj {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class aQ extends aj {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
      let aY = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function aX(e) {
        return e >= aY.zero && e <= aY.nine
          ? e - aY.zero
          : e >= aY.A && e <= aY.F
          ? e - (aY.A - 10)
          : e >= aY.a && e <= aY.f
          ? e - (aY.a - 10)
          : void 0;
      }
      function a0(e) {
        return e instanceof Uint8Array
          ? e
          : "string" == typeof e
          ? a2(e)
          : a1(e);
      }
      function a1(e) {
        return e instanceof Uint8Array ? e : new Uint8Array(e);
      }
      function a2(e, t = {}) {
        let { size: n } = t,
          r = e;
        n && (aL(e, n), (r = aG(e, n)));
        let a = r.slice(2);
        a.length % 2 && (a = `0${a}`);
        let i = a.length / 2,
          s = new Uint8Array(i);
        for (let e = 0, t = 0; e < i; e++) {
          let n = aX(a.charCodeAt(t++)),
            r = aX(a.charCodeAt(t++));
          if (void 0 === n || void 0 === r)
            throw new aj(
              `Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`
            );
          s[e] = 16 * n + r;
        }
        return s;
      }
      function a3(e) {
        return e.length;
      }
      function a6(e, t, n, r = {}) {
        let { strict: a } = r;
        if ("number" == typeof t && t > 0 && t > a3(e) - 1)
          throw new a7({ offset: t, position: "start", size: a3(e) });
        let i = e.slice(t, n);
        return (
          a &&
            (function (e, t, n) {
              if (
                "number" == typeof t &&
                "number" == typeof n &&
                a3(e) !== n - t
              )
                throw new a7({ offset: n, position: "end", size: a3(e) });
            })(i, t, n),
          i
        );
      }
      function a5(e, t = {}) {
        let { size: n } = t;
        return (
          void 0 !== n &&
            (function (e, t) {
              if (a3(e) > t) throw new a8({ givenSize: a3(e), maxSize: t });
            })(e, n),
          (function (e, t = {}) {
            let { signed: n } = t;
            t.size && aL(e, t.size);
            let r = BigInt(e);
            if (!n) return r;
            let a = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
            return r <= a >> 1n ? r : r - a - 1n;
          })(aq(e, t), t)
        );
      }
      class a4 extends aj {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? aM(e) : e
            }\` of type \`${typeof e}\` is an invalid Bytes value.`,
            { metaMessages: ["Bytes values must be of type `Bytes`."] }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.InvalidBytesTypeError",
            });
        }
      }
      class a8 extends aj {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class a7 extends aj {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SliceOffsetOutOfBoundsError",
            });
        }
      }
      function a9(e, t = {}) {
        let { compressed: n } = t,
          { prefix: r, x: a, y: i } = e;
        if (!1 === n || ("bigint" == typeof a && "bigint" == typeof i)) {
          if (4 !== r) throw new ia({ prefix: r, cause: new is() });
          return;
        }
        if (!0 === n || ("bigint" == typeof a && void 0 === i)) {
          if (3 !== r && 2 !== r) throw new ia({ prefix: r, cause: new ii() });
          return;
        }
        throw new ir({ publicKey: e });
      }
      function ie(e) {
        if (132 !== e.length && 130 !== e.length && 68 !== e.length)
          throw new io({ publicKey: e });
        if (130 === e.length)
          return {
            prefix: 4,
            x: BigInt(az(e, 0, 32)),
            y: BigInt(az(e, 32, 64)),
          };
        if (132 === e.length) {
          let t = Number(az(e, 0, 1));
          return {
            prefix: t,
            x: BigInt(az(e, 1, 33)),
            y: BigInt(az(e, 33, 65)),
          };
        }
        return { prefix: Number(az(e, 0, 1)), x: BigInt(az(e, 1, 33)) };
      }
      function it(e, t = {}) {
        a9(e);
        let { prefix: n, x: r, y: a } = e,
          { includePrefix: i = !0 } = t;
        return aU(
          i ? aH(n, { size: 1 }) : "0x",
          aH(r, { size: 32 }),
          "bigint" == typeof a ? aH(a, { size: 32 }) : "0x"
        );
      }
      class ir extends aj {
        constructor({ publicKey: e }) {
          super(`Value \`${aM(e)}\` is not a valid public key.`, {
            metaMessages: [
              "Public key must contain:",
              "- an `x` and `prefix` value (compressed)",
              "- an `x`, `y`, and `prefix` value (uncompressed)",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidError",
            });
        }
      }
      class ia extends aj {
        constructor({ prefix: e, cause: t }) {
          super(`Prefix "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidPrefixError",
            });
        }
      }
      class ii extends aj {
        constructor() {
          super("Prefix must be 2 or 3 for compressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidCompressedPrefixError",
            });
        }
      }
      class is extends aj {
        constructor() {
          super("Prefix must be 4 for uncompressed public keys."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidUncompressedPrefixError",
            });
        }
      }
      class io extends aj {
        constructor({ publicKey: e }) {
          super(`Value \`${e}\` is an invalid public key size.`, {
            metaMessages: [
              "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
              `Received ${aW(aR(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PublicKey.InvalidSerializedSizeError",
            });
        }
      }
      async function ic(e = {}) {
        let { extractable: t = !1 } = e,
          n = await globalThis.crypto.subtle.generateKey(
            { name: "ECDSA", namedCurve: "P-256" },
            t,
            ["sign", "verify"]
          ),
          r = (function (e) {
            let t = (() => {
              if (
                (function (e, t = {}) {
                  let { strict: n = !1 } = t;
                  try {
                    return (
                      !(function (e, t = {}) {
                        let { strict: n = !1 } = t;
                        if (!e || "string" != typeof e) throw new aK(e);
                        if (
                          (n && !/^0x[0-9a-fA-F]*$/.test(e)) ||
                          !e.startsWith("0x")
                        )
                          throw new aV(e);
                      })(e, { strict: n }),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })(e)
              )
                return ie(e);
              if (
                (function (e) {
                  try {
                    if (
                      !(e instanceof Uint8Array) &&
                      (!e ||
                        "object" != typeof e ||
                        !("BYTES_PER_ELEMENT" in e) ||
                        1 !== e.BYTES_PER_ELEMENT ||
                        "Uint8Array" !== e.constructor.name)
                    )
                      throw new a4(e);
                    return !0;
                  } catch {
                    return !1;
                  }
                })(e)
              )
                return ie(aq(e));
              let { prefix: t, x: n, y: r } = e;
              return "bigint" == typeof n && "bigint" == typeof r
                ? { prefix: t ?? 4, x: n, y: r }
                : { prefix: t, x: n };
            })();
            return a9(t), t;
          })(
            new Uint8Array(
              await globalThis.crypto.subtle.exportKey("raw", n.publicKey)
            )
          );
        return { privateKey: n.privateKey, publicKey: r };
      }
      async function iu(e) {
        let { payload: t, privateKey: n } = e,
          r = a1(
            new Uint8Array(
              await globalThis.crypto.subtle.sign(
                { name: "ECDSA", hash: "SHA-256" },
                n,
                a0(t)
              )
            )
          ),
          a = a5(a6(r, 0, 32)),
          i = a5(a6(r, 32, 64));
        return i > aT.CURVE.n / 2n && (i = aT.CURVE.n - i), { r: a, s: i };
      }
      let il = new TextEncoder(),
        id = new TextDecoder(),
        ip = Object.fromEntries(
          Array.from(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ).map((e, t) => [t, e.charCodeAt(0)])
        ),
        ih = {
          ...Object.fromEntries(
            Array.from(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            ).map((e, t) => [e.charCodeAt(0), t])
          ),
          61: 0,
          45: 62,
          95: 63,
        };
      function im(e, t = {}) {
        let { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
          r = rk(a0(e));
        return "Bytes" === n ? r : aq(r);
      }
      Uint8Array.from([
        105, 171, 180, 181, 160, 222, 75, 198, 42, 42, 32, 31, 141, 37, 186,
        233,
      ]);
      let iy = 2n ** 256n - 1n;
      function ib(e, t = {}) {
        let { recovered: n } = t;
        if (void 0 === e.r || void 0 === e.s || (n && void 0 === e.yParity))
          throw new i_({ signature: e });
        if (e.r < 0n || e.r > iy) throw new ix({ value: e.r });
        if (e.s < 0n || e.s > iy) throw new ik({ value: e.s });
        if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
          throw new iE({ value: e.yParity });
      }
      function ig(e) {
        if (130 !== e.length && 132 !== e.length)
          throw new iv({ signature: e });
        let t = BigInt(az(e, 0, 32)),
          n = BigInt(az(e, 32, 64)),
          r = (() => {
            let t = Number(`0x${e.slice(130)}`);
            if (!Number.isNaN(t))
              try {
                return iw(t);
              } catch {
                throw new iE({ value: t });
              }
          })();
        return void 0 === r ? { r: t, s: n } : { r: t, s: n, yParity: r };
      }
      function iw(e) {
        if (0 === e || 27 === e) return 0;
        if (1 === e || 28 === e) return 1;
        if (e >= 35) return +(e % 2 == 0);
        throw new iA({ value: e });
      }
      class iv extends aj {
        constructor({ signature: e }) {
          super(`Value \`${e}\` is an invalid signature size.`, {
            metaMessages: [
              "Expected: 64 bytes or 65 bytes.",
              `Received ${aW(aR(e))} bytes.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSerializedSizeError",
            });
        }
      }
      class i_ extends aj {
        constructor({ signature: e }) {
          super(
            `Signature \`${aM(
              e
            )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.MissingPropertiesError",
            });
        }
      }
      class ix extends aj {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidRError",
            });
        }
      }
      class ik extends aj {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidSError",
            });
        }
      }
      class iE extends aj {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidYParityError",
            });
        }
      }
      class iA extends aj {
        constructor({ value: e }) {
          super(
            `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Signature.InvalidVError",
            });
        }
      }
      var iS = n(59243),
        iI = n(7900),
        iO = n(2671);
      let iP = "activeId",
        iC = (function (e, t) {
          let n = "undefined" != typeof indexedDB ? (0, iO.y$)(e, t) : void 0;
          return {
            getItem: async (e) => {
              let t = await (0, iO.Jt)(e, n);
              return t || null;
            },
            removeItem: async (e) => (0, iO.yH)(e, n),
            setItem: async (e, t) => (0, iO.hZ)(e, t, n),
          };
        })("cbwsdk", "keys");
      async function iT() {
        let e = await ic({ extractable: !1 }),
          t = az(it(e.publicKey), 1);
        return await iC.setItem(t, e), await iC.setItem(iP, t), e;
      }
      async function ij() {
        let e = await iC.getItem(iP);
        if (!e) return null;
        let t = await iC.getItem(e);
        return t || null;
      }
      async function iM() {
        let e = await ij();
        if (!e) {
          let e = await iT(),
            t = az(it(e.publicKey), 1);
          return await iC.setItem(t, e), await iC.setItem(iP, t), e;
        }
        return e;
      }
      async function iL() {
        let e = await iM(),
          t = az(it(e.publicKey), 1),
          n = async (t) => {
            let { payload: n, metadata: r } = (function (e) {
              let {
                  challenge: t,
                  crossOrigin: n,
                  extraClientData: r,
                  flag: a,
                  origin: i,
                  rpId: s,
                  signCount: o,
                  userVerification: c = "required",
                } = e,
                u = (function (e = {}) {
                  let {
                      flag: t = 5,
                      rpId: n = window.location.hostname,
                      signCount: r = 0,
                    } = e,
                    a = im(aF(n));
                  return aU(a, aH(t, { size: 1 }), aH(r, { size: 4 }));
                })({ flag: a, rpId: s, signCount: o }),
                l = (function (e) {
                  let {
                    challenge: t,
                    crossOrigin: n = !1,
                    extraClientData: r,
                    origin: a = window.location.origin,
                  } = e;
                  return JSON.stringify({
                    type: "webauthn.get",
                    challenge: (function (e, t = {}) {
                      return (function (e, t = {}) {
                        let { pad: n = !0, url: r = !1 } = t,
                          a = new Uint8Array(4 * Math.ceil(e.length / 3));
                        for (let t = 0, n = 0; n < e.length; t += 4, n += 3) {
                          let r =
                            (e[n] << 16) + (e[n + 1] << 8) + (0 | e[n + 2]);
                          (a[t] = ip[r >> 18]),
                            (a[t + 1] = ip[(r >> 12) & 63]),
                            (a[t + 2] = ip[(r >> 6) & 63]),
                            (a[t + 3] = ip[63 & r]);
                        }
                        let i = e.length % 3,
                          s = 4 * Math.floor(e.length / 3) + (i && i + 1),
                          o = id.decode(new Uint8Array(a.buffer, 0, s));
                        return (
                          n && 1 === i && (o += "=="),
                          n && 2 === i && (o += "="),
                          r &&
                            (o = o.replaceAll("+", "-").replaceAll("/", "_")),
                          o
                        );
                      })(a2(e), t);
                    })(t, { url: !0, pad: !1 }),
                    origin: a,
                    crossOrigin: n,
                    ...r,
                  });
                })({
                  challenge: t,
                  crossOrigin: n,
                  extraClientData: r,
                  origin: i,
                }),
                d = im(aF(l)),
                f = l.indexOf('"challenge"'),
                p = l.indexOf('"type"'),
                h = aU(u, d);
              return {
                metadata: {
                  authenticatorData: u,
                  clientDataJSON: l,
                  challengeIndex: f,
                  typeIndex: p,
                  userVerificationRequired: "required" === c,
                },
                payload: h,
              };
            })({
              challenge: t,
              origin: "https://keys.coinbase.com",
              userVerification: "preferred",
            });
            return {
              signature: (function (e) {
                ib(e);
                let t = e.r,
                  n = e.s;
                return aU(
                  aH(t, { size: 32 }),
                  aH(n, { size: 32 }),
                  "number" == typeof e.yParity
                    ? aH(
                        (function (e) {
                          if (0 === e) return 27;
                          if (1 === e) return 28;
                          throw new iE({ value: e });
                        })(e.yParity),
                        { size: 1 }
                      )
                    : "0x"
                );
              })(await iu({ payload: n, privateKey: e.privateKey })),
              raw: {},
              webauthn: r,
            };
          };
        return {
          id: t,
          publicKey: t,
          sign: async ({ hash: e }) => n(e),
          signMessage: async ({ message: e }) => n((0, iS.A)(e)),
          signTypedData: async (e) => n((0, iI.Zh)(e)),
          type: "webAuthn",
        };
      }
      async function iN() {
        return { account: await iL() };
      }
      let iD = { storageKey: "ownPrivateKey", keyType: "private" },
        iB = { storageKey: "ownPublicKey", keyType: "public" },
        iU = { storageKey: "peerPublicKey", keyType: "public" };
      class iR {
        constructor() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(iU, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            A.keys.clear();
        }
        async generateKeyPair() {
          let e = await nP();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(iD, e.privateKey),
            await this.storeKey(iB, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(iD)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(iB)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(iU)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await nC(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = A.keys.get(e.storageKey);
          return t ? nN(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await nL(e.keyType, t);
          A.keys.set(e.storageKey, n);
        }
      }
      var iq = n(93727),
        iH = n(24578);
      function iF(e, t) {
        if ("object" == typeof e && null !== e)
          return t
            .split(/[.[\]]+/)
            .filter(Boolean)
            .reduce((e, t) => {
              if ("object" == typeof e && null !== e) return e[t];
            }, e);
      }
      var iG = n(84869);
      function iz(e) {
        var t;
        if (!Array.isArray(e.params)) return null;
        switch (e.method) {
          case "personal_sign":
            return e.params[1];
          case "eth_signTypedData_v4":
            return e.params[0];
          case "eth_signTransaction":
          case "eth_sendTransaction":
          case "wallet_sendCalls":
            return null == (t = e.params[0]) ? void 0 : t.from;
          default:
            return null;
        }
      }
      function iW(e) {
        var t;
        if (
          !e ||
          !Array.isArray(e) ||
          !(null == (t = e[0]) ? void 0 : t.chainId) ||
          ("string" != typeof e[0].chainId && "number" != typeof e[0].chainId)
        )
          throw R.rpc.invalidParams();
      }
      function i$(e, t) {
        let n = Object.assign({}, e);
        if (t && e.method.startsWith("wallet_")) {
          let e = iF(n, "params.0.capabilities");
          if ((void 0 === e && (e = {}), "object" != typeof e))
            throw R.rpc.invalidParams();
          (e = Object.assign(Object.assign({}, t), e)),
            n.params &&
              Array.isArray(n.params) &&
              (n.params[0] = Object.assign(Object.assign({}, n.params[0]), {
                capabilities: e,
              }));
        }
        return n;
      }
      async function iK() {
        var e;
        let t = null != (e = A.subAccountsConfig.get()) ? e : {},
          n = {};
        if (t.enableAutoSubAccounts) {
          let { account: e } = t.toOwnerAccount
            ? await t.toOwnerAccount()
            : await iN();
          if (!e) throw R.provider.unauthorized("No owner account found");
          n.addSubAccount = {
            account: {
              type: "create",
              keys: [
                {
                  type: e.address ? "address" : "webauthn-p256",
                  publicKey: e.address || e.publicKey,
                },
              ],
            },
          };
        }
        A.subAccountsConfig.set({ capabilities: n });
      }
      async function iV({ client: e, id: t }) {
        var n;
        let r = await (0, iG.c)(e, { id: t });
        if ("success" === r.status)
          return null == (n = r.receipts) ? void 0 : n[0].transactionHash;
        throw R.rpc.internal("failed to send transaction");
      }
      function iZ({ calls: e, from: t, chainId: n, capabilities: r }) {
        let a = E.get().paymasterUrls,
          i = {
            method: "wallet_sendCalls",
            params: [
              {
                version: "1.0",
                calls: e,
                chainId: (0, u.cK)(n),
                from: t,
                atomicRequired: !0,
                capabilities: r,
              },
            ],
          };
        return (
          (null == a ? void 0 : a[n]) &&
            (i = i$(i, {
              paymasterService: { url: null == a ? void 0 : a[n] },
            })),
          i
        );
      }
      async function iJ() {
        let e = ev();
        return await new Promise((t) => {
          es({ snackbarContext: "sub_account_insufficient_balance" }),
            e.presentItem({
              autoExpand: !0,
              message: "Insufficient spend permission. Choose how to proceed:",
              menuItems: [
                {
                  isRed: !1,
                  info: "Create new Spend Permission",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    eo({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "create_permission",
                    }),
                      e.clear(),
                      t("update_permission");
                  },
                },
                {
                  isRed: !1,
                  info: "Continue in Popup",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    eo({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "continue_in_popup",
                    }),
                      e.clear(),
                      t("continue_popup");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    eo({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      function iQ(e, t) {
        let n = e.filter((e) => e !== t);
        return [t, ...n];
      }
      function iY(e, t) {
        return [...e.filter((e) => e !== t), t];
      }
      async function iX() {
        let e = A.spendPermissions.get(),
          t = A.subAccounts.get(),
          n = A.account.get().accounts;
        return n
          ? {
              accounts:
                null == n
                  ? void 0
                  : n.map((n) => ({
                      address: n,
                      capabilities: {
                        subAccounts: t ? [t] : void 0,
                        spendPermissions:
                          e.length > 0 ? { permissions: e } : void 0,
                      },
                    })),
            }
          : null;
      }
      var i0 = n(80844),
        i1 = n(54335);
      function i2(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e)))
          .replaceAll("+", "-")
          .replaceAll("/", "_")
          .replace(/=+$/, "");
      }
      var i3 = n(879),
        i6 = n(13423),
        i5 = n(87094),
        i4 = n(42228),
        i8 = n(99702),
        i7 = n(36444),
        i9 = n(38697);
      let se = [
        {
          inputs: [
            { name: "preOpGas", type: "uint256" },
            { name: "paid", type: "uint256" },
            { name: "validAfter", type: "uint48" },
            { name: "validUntil", type: "uint48" },
            { name: "targetSuccess", type: "bool" },
            { name: "targetResult", type: "bytes" },
          ],
          name: "ExecutionResult",
          type: "error",
        },
        {
          inputs: [
            { name: "opIndex", type: "uint256" },
            { name: "reason", type: "string" },
          ],
          name: "FailedOp",
          type: "error",
        },
        {
          inputs: [{ name: "sender", type: "address" }],
          name: "SenderAddressResult",
          type: "error",
        },
        {
          inputs: [{ name: "aggregator", type: "address" }],
          name: "SignatureValidationFailed",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResult",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "aggregator", type: "address" },
                {
                  components: [
                    { name: "stake", type: "uint256" },
                    { name: "unstakeDelaySec", type: "uint256" },
                  ],
                  name: "stakeInfo",
                  type: "tuple",
                },
              ],
              name: "aggregatorInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResultWithAggregation",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "factory", type: "address" },
            { indexed: !1, name: "paymaster", type: "address" },
          ],
          name: "AccountDeployed",
          type: "event",
        },
        { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalDeposit", type: "uint256" },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
          name: "SignatureAggregatorChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalStaked", type: "uint256" },
            { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
          ],
          name: "StakeLocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawTime", type: "uint256" },
          ],
          name: "StakeUnlocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "StakeWithdrawn",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !0, name: "paymaster", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "success", type: "bool" },
            { indexed: !1, name: "actualGasCost", type: "uint256" },
            { indexed: !1, name: "actualGasUsed", type: "uint256" },
          ],
          name: "UserOperationEvent",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "revertReason", type: "bytes" },
          ],
          name: "UserOperationRevertReason",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "Withdrawn",
          type: "event",
        },
        {
          inputs: [],
          name: "SIG_VALIDATION_FAILED",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "initCode", type: "bytes" },
            { name: "sender", type: "address" },
            { name: "paymasterAndData", type: "bytes" },
          ],
          name: "_validateSenderAndPaymaster",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
          name: "addStake",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "depositTo",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "", type: "address" }],
          name: "deposits",
          outputs: [
            { name: "deposit", type: "uint112" },
            { name: "staked", type: "bool" },
            { name: "stake", type: "uint112" },
            { name: "unstakeDelaySec", type: "uint32" },
            { name: "withdrawTime", type: "uint48" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "getDepositInfo",
          outputs: [
            {
              components: [
                { name: "deposit", type: "uint112" },
                { name: "staked", type: "bool" },
                { name: "stake", type: "uint112" },
                { name: "unstakeDelaySec", type: "uint32" },
                { name: "withdrawTime", type: "uint48" },
              ],
              name: "info",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "sender", type: "address" },
            { name: "key", type: "uint192" },
          ],
          name: "getNonce",
          outputs: [{ name: "nonce", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "initCode", type: "bytes" }],
          name: "getSenderAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "getUserOpHash",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "initCode", type: "bytes" },
                    { name: "callData", type: "bytes" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                    { name: "paymasterAndData", type: "bytes" },
                    { name: "signature", type: "bytes" },
                  ],
                  name: "userOps",
                  type: "tuple[]",
                },
                { name: "aggregator", type: "address" },
                { name: "signature", type: "bytes" },
              ],
              name: "opsPerAggregator",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleAggregatedOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "ops",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "key", type: "uint192" }],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "callData", type: "bytes" },
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "paymaster", type: "address" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                  ],
                  name: "mUserOp",
                  type: "tuple",
                },
                { name: "userOpHash", type: "bytes32" },
                { name: "prefund", type: "uint256" },
                { name: "contextOffset", type: "uint256" },
                { name: "preOpGas", type: "uint256" },
              ],
              name: "opInfo",
              type: "tuple",
            },
            { name: "context", type: "bytes" },
          ],
          name: "innerHandleOp",
          outputs: [{ name: "actualGasCost", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "uint192" },
          ],
          name: "nonceSequenceNumber",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "op",
              type: "tuple",
            },
            { name: "target", type: "address" },
            { name: "targetCallData", type: "bytes" },
          ],
          name: "simulateHandleOp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "simulateValidation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "withdrawAddress", type: "address" }],
          name: "withdrawStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "withdrawAddress", type: "address" },
            { name: "withdrawAmount", type: "uint256" },
          ],
          name: "withdrawTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ];
      var st = n(17199),
        sn = n(49539),
        sr = n(3488),
        sa = (n(13649), n(65003)),
        si = n(20788);
      async function ss(e) {
        let {
            extend: t,
            nonceKeyManager: n = (function (e) {
              let { source: t } = e,
                n = new Map(),
                r = new sa.A(8192),
                a = new Map(),
                i = ({ address: e, chainId: t }) => `${e}.${t}`;
              return {
                async consume({ address: e, chainId: n, client: a }) {
                  let s = i({ address: e, chainId: n }),
                    o = this.get({ address: e, chainId: n, client: a });
                  this.increment({ address: e, chainId: n });
                  let c = await o;
                  return (
                    await t.set({ address: e, chainId: n }, c), r.set(s, c), c
                  );
                },
                async increment({ address: e, chainId: t }) {
                  let r = i({ address: e, chainId: t }),
                    a = n.get(r) ?? 0;
                  n.set(r, a + 1);
                },
                async get({ address: e, chainId: s, client: o }) {
                  let c = i({ address: e, chainId: s }),
                    u = a.get(c);
                  return (
                    u ||
                      ((u = (async () => {
                        try {
                          let n = await t.get({
                              address: e,
                              chainId: s,
                              client: o,
                            }),
                            a = r.get(c) ?? 0;
                          if (a > 0 && n <= a) return a + 1;
                          return r.delete(c), n;
                        } finally {
                          this.reset({ address: e, chainId: s });
                        }
                      })()),
                      a.set(c, u)),
                    (n.get(c) ?? 0) + (await u)
                  );
                },
                reset({ address: e, chainId: t }) {
                  let r = i({ address: e, chainId: t });
                  n.delete(r), a.delete(r);
                },
              };
            })({ source: { get: () => Date.now(), set() {} } }),
            ...r
          } = e,
          a = !1,
          i = await e.getAddress();
        return {
          ...t,
          ...r,
          address: i,
          async getFactoryArgs() {
            return "isDeployed" in this && (await this.isDeployed())
              ? { factory: void 0, factoryData: void 0 }
              : e.getFactoryArgs();
          },
          async getNonce(t) {
            let r =
              t?.key ??
              BigInt(
                await n.consume({
                  address: i,
                  chainId: e.client.chain.id,
                  client: e.client,
                })
              );
            return e.getNonce
              ? await e.getNonce({ ...t, key: r })
              : await (0, sr.J)(e.client, {
                  abi: (0, st.U)([
                    "function getNonce(address, uint192) pure returns (uint256)",
                  ]),
                  address: e.entryPoint.address,
                  functionName: "getNonce",
                  args: [i, r],
                });
          },
          isDeployed: async () =>
            !!a ||
            (a = !!(await (0, tw.T)(
              e.client,
              sn.Q,
              "getCode"
            )({ address: i }))),
          ...(e.sign
            ? {
                async sign(t) {
                  let [{ factory: n, factoryData: r }, a] = await Promise.all([
                    this.getFactoryArgs(),
                    e.sign(t),
                  ]);
                  return n && r
                    ? (0, si.E)({ address: n, data: r, signature: a })
                    : a;
                },
              }
            : {}),
          async signMessage(t) {
            let [{ factory: n, factoryData: r }, a] = await Promise.all([
              this.getFactoryArgs(),
              e.signMessage(t),
            ]);
            return n && r && "0x7702" !== n
              ? (0, si.E)({ address: n, data: r, signature: a })
              : a;
          },
          async signTypedData(t) {
            let [{ factory: n, factoryData: r }, a] = await Promise.all([
              this.getFactoryArgs(),
              e.signTypedData(t),
            ]);
            return n && r && "0x7702" !== n
              ? (0, si.E)({ address: n, data: r, signature: a })
              : a;
          },
          type: "smart",
        };
      }
      function so(e) {
        let { authorization: t, factory: n, factoryData: r } = e;
        if (
          "0x7702" === n ||
          "0x7702000000000000000000000000000000000000" === n
        ) {
          if (!t) return "0x7702000000000000000000000000000000000000";
          let e = t.address;
          return (0, nc.xW)([e, r ?? "0x"]);
        }
        return n ? (0, nc.xW)([n, r ?? "0x"]) : "0x";
      }
      function sc(e) {
        let {
            callGasLimit: t,
            callData: n,
            maxPriorityFeePerGas: r,
            maxFeePerGas: a,
            paymaster: i,
            paymasterData: s,
            paymasterPostOpGasLimit: o,
            paymasterVerificationGasLimit: c,
            sender: l,
            signature: d = "0x",
            verificationGasLimit: f,
          } = e,
          p = (0, nc.xW)([
            (0, na.eV)((0, u.cK)(f || 0n), { size: 16 }),
            (0, na.eV)((0, u.cK)(t || 0n), { size: 16 }),
          ]),
          h = so(e),
          m = (0, nc.xW)([
            (0, na.eV)((0, u.cK)(r || 0n), { size: 16 }),
            (0, na.eV)((0, u.cK)(a || 0n), { size: 16 }),
          ]),
          y = e.nonce ?? 0n;
        return {
          accountGasLimits: p,
          callData: n,
          initCode: h,
          gasFees: m,
          nonce: y,
          paymasterAndData: i
            ? (0, nc.xW)([
                i,
                (0, na.eV)((0, u.cK)(c || 0n), { size: 16 }),
                (0, na.eV)((0, u.cK)(o || 0n), { size: 16 }),
                s || "0x",
              ])
            : "0x",
          preVerificationGas: e.preVerificationGas ?? 0n,
          sender: l,
          signature: d,
        };
      }
      let su = {
        PackedUserOperation: [
          { type: "address", name: "sender" },
          { type: "uint256", name: "nonce" },
          { type: "bytes", name: "initCode" },
          { type: "bytes", name: "callData" },
          { type: "bytes32", name: "accountGasLimits" },
          { type: "uint256", name: "preVerificationGas" },
          { type: "bytes32", name: "gasFees" },
          { type: "bytes", name: "paymasterAndData" },
        ],
      };
      var sl = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, r = Object.getOwnPropertySymbols(e);
            a < r.length;
            a++
          )
            0 > t.indexOf(r[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        return n;
      };
      async function sd(e) {
        let {
            owner: t,
            ownerIndex: n,
            address: r,
            client: a,
            factoryData: i,
          } = e,
          s = {
            abi: se,
            address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
            version: "0.6",
          },
          o = { abi: T, address: O };
        return ss({
          client: a,
          entryPoint: s,
          extend: { abi: C, factory: o },
          async decodeCalls(e) {
            let t = (0, i3.J)({ abi: C, data: e });
            if ("execute" === t.functionName)
              return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
            if ("executeBatch" === t.functionName)
              return t.args[0].map((e) => ({
                to: e.target,
                value: e.value,
                data: e.data,
              }));
            throw new t_.C(`unable to decode calls for "${t.functionName}"`);
          },
          async encodeCalls(e) {
            var t, n;
            return 1 === e.length
              ? (0, c.p)({
                  abi: C,
                  functionName: "execute",
                  args: [
                    e[0].to,
                    null != (t = e[0].value) ? t : BigInt(0),
                    null != (n = e[0].data) ? n : "0x",
                  ],
                })
              : (0, c.p)({
                  abi: C,
                  functionName: "executeBatch",
                  args: [
                    e.map((e) => {
                      var t, n;
                      return {
                        data: null != (t = e.data) ? t : "0x",
                        target: e.to,
                        value: null != (n = e.value) ? n : BigInt(0),
                      };
                    }),
                  ],
                });
          },
          getAddress: async () => r,
          getFactoryArgs: async () => ({ factory: o.address, factoryData: i }),
          getStubSignature: async () =>
            "webAuthn" === t.type
              ? "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000"
              : sh({
                  ownerIndex: n,
                  signature:
                    "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
                }),
          async sign(e) {
            let r = sp({
              address: await this.getAddress(),
              chainId: a.chain.id,
              hash: e.hash,
            });
            return sh({
              ownerIndex: n,
              signature: await sf({ hash: r, owner: t }),
            });
          },
          async signMessage(e) {
            let { message: r } = e,
              i = sp({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: (0, iS.A)(r),
              });
            return sh({
              ownerIndex: n,
              signature: await sf({ hash: i, owner: t }),
            });
          },
          async signTypedData(e) {
            let { domain: r, types: i, primaryType: s, message: o } = e,
              c = sp({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: (0, iI.Zh)({
                  domain: r,
                  message: o,
                  primaryType: s,
                  types: i,
                }),
              });
            return sh({
              ownerIndex: n,
              signature: await sf({ hash: c, owner: t }),
            });
          },
          async signUserOperation(e) {
            let { chainId: r = a.chain.id } = e,
              i = sl(e, ["chainId"]),
              o = await this.getAddress(),
              c = (function (e) {
                let {
                    chainId: t,
                    entryPointAddress: n,
                    entryPointVersion: r,
                  } = e,
                  a = e.userOperation,
                  {
                    authorization: i,
                    callData: s = "0x",
                    callGasLimit: o,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u,
                    nonce: l,
                    paymasterAndData: d = "0x",
                    preVerificationGas: f,
                    sender: p,
                    verificationGasLimit: h,
                  } = a;
                if ("0.8" === r)
                  return (0, iI.Zh)(
                    (function (e) {
                      let {
                        chainId: t,
                        entryPointAddress: n,
                        userOperation: r,
                      } = e;
                      return {
                        types: su,
                        primaryType: "PackedUserOperation",
                        domain: {
                          name: "ERC4337",
                          version: "1",
                          chainId: t,
                          verifyingContract: n,
                        },
                        message: sc(r),
                      };
                    })({ chainId: t, entryPointAddress: n, userOperation: a })
                  );
                let m = (() => {
                  if ("0.6" === r) {
                    let e = so({
                      authorization: i,
                      factory: a.initCode?.slice(0, 42),
                      factoryData: a.initCode?.slice(42),
                    });
                    return (0, i6.h)(
                      [
                        { type: "address" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "uint256" },
                        { type: "bytes32" },
                      ],
                      [
                        p,
                        l,
                        (0, iH.S)(e),
                        (0, iH.S)(s),
                        o,
                        h,
                        f,
                        c,
                        u,
                        (0, iH.S)(d),
                      ]
                    );
                  }
                  if ("0.7" === r) {
                    let e = sc(a);
                    return (0, i6.h)(
                      [
                        { type: "address" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                        { type: "uint256" },
                        { type: "bytes32" },
                        { type: "bytes32" },
                      ],
                      [
                        e.sender,
                        e.nonce,
                        (0, iH.S)(e.initCode),
                        (0, iH.S)(e.callData),
                        e.accountGasLimits,
                        e.preVerificationGas,
                        e.gasFees,
                        (0, iH.S)(e.paymasterAndData),
                      ]
                    );
                  }
                  throw Error(`entryPointVersion "${r}" not supported.`);
                })();
                return (0, iH.S)(
                  (0, i6.h)(
                    [
                      { type: "bytes32" },
                      { type: "address" },
                      { type: "uint256" },
                    ],
                    [(0, iH.S)(m), n, BigInt(t)]
                  )
                );
              })({
                chainId: r,
                entryPointAddress: s.address,
                entryPointVersion: s.version,
                userOperation: Object.assign(Object.assign({}, i), {
                  sender: o,
                }),
              });
            return sh({
              ownerIndex: n,
              signature: await sf({ hash: c, owner: t }),
            });
          },
          userOperation: {
            async estimateGas(e) {
              var n;
              if ("webAuthn" === t.type)
                return {
                  verificationGasLimit: BigInt(
                    Math.max(
                      Number(
                        null != (n = e.verificationGasLimit) ? n : BigInt(0)
                      ),
                      8e5
                    )
                  ),
                };
            },
          },
        });
      }
      async function sf({ hash: e, owner: t }) {
        if ("webAuthn" === t.type) {
          let { signature: n, webauthn: r } = await t.sign({ hash: e });
          return (function ({ webauthn: e, signature: t }) {
            let { r: n, s: r } = ig(t);
            return (0, i6.h)(
              [
                {
                  components: [
                    { name: "authenticatorData", type: "bytes" },
                    { name: "clientDataJSON", type: "bytes" },
                    { name: "challengeIndex", type: "uint256" },
                    { name: "typeIndex", type: "uint256" },
                    { name: "r", type: "uint256" },
                    { name: "s", type: "uint256" },
                  ],
                  type: "tuple",
                },
              ],
              [
                {
                  authenticatorData: e.authenticatorData,
                  clientDataJSON: (0, u.i3)(e.clientDataJSON),
                  challengeIndex: BigInt(e.challengeIndex),
                  typeIndex: BigInt(e.typeIndex),
                  r: n,
                  s: r,
                },
              ]
            );
          })({ signature: n, webauthn: r });
        }
        if (t.sign) return t.sign({ hash: e });
        throw new t_.C("`owner` does not support raw sign.");
      }
      function sp({ address: e, chainId: t, hash: n }) {
        return (0, iI.Zh)({
          domain: {
            chainId: t,
            name: "Coinbase Smart Wallet",
            verifyingContract: e,
            version: "1",
          },
          types: {
            CoinbaseSmartWalletMessage: [{ name: "hash", type: "bytes32" }],
          },
          primaryType: "CoinbaseSmartWalletMessage",
          message: { hash: n },
        });
      }
      function sh(e) {
        let { ownerIndex: t = 0 } = e,
          n = (() => {
            if (65 !== (0, i5.E)(e.signature)) return e.signature;
            let t = (function (e) {
              let { r: t, s: n } = i4.secp256k1.Signature.fromCompact(
                  e.slice(2, 130)
                ),
                r = Number(`0x${e.slice(130)}`),
                [a, i] = (() => {
                  if (0 === r || 1 === r) return [void 0, r];
                  if (27 === r) return [BigInt(r), 0];
                  if (28 === r) return [BigInt(r), 1];
                  throw Error("Invalid yParityOrV value");
                })();
              return void 0 !== a
                ? {
                    r: (0, u.cK)(t, { size: 32 }),
                    s: (0, u.cK)(n, { size: 32 }),
                    v: a,
                    yParity: i,
                  }
                : {
                    r: (0, u.cK)(t, { size: 32 }),
                    s: (0, u.cK)(n, { size: 32 }),
                    yParity: i,
                  };
            })(e.signature);
            return (function (e, t) {
              if (e.length !== t.length)
                throw new i8.YE({
                  expectedLength: e.length,
                  givenLength: t.length,
                });
              let n = [];
              for (let r = 0; r < e.length; r++) {
                let a = e[r],
                  i = t[r];
                n.push(
                  (function e(t, n, r = !1) {
                    if ("address" === t) {
                      if (!(0, nS.P)(n)) throw new i7.M({ address: n });
                      return (0, na.eV)(n.toLowerCase(), {
                        size: r ? 32 : null,
                      });
                    }
                    if ("string" === t) return (0, u.i3)(n);
                    if ("bytes" === t) return n;
                    if ("bool" === t)
                      return (0, na.eV)((0, u.$P)(n), { size: r ? 32 : 1 });
                    let a = t.match(i9.Ge);
                    if (a) {
                      let [e, t, i = "256"] = a,
                        s = Number.parseInt(i) / 8;
                      return (0, u.cK)(n, {
                        size: r ? 32 : s,
                        signed: "int" === t,
                      });
                    }
                    let i = t.match(i9.BD);
                    if (i) {
                      let [e, t] = i;
                      if (Number.parseInt(t) !== (n.length - 2) / 2)
                        throw new i8.BI({
                          expectedSize: Number.parseInt(t),
                          givenSize: (n.length - 2) / 2,
                        });
                      return (0, na.eV)(n, {
                        dir: "right",
                        size: r ? 32 : null,
                      });
                    }
                    let s = t.match(i9.D5);
                    if (s && Array.isArray(n)) {
                      let [t, r] = s,
                        a = [];
                      for (let t = 0; t < n.length; t++) a.push(e(r, n[t], !0));
                      return 0 === a.length ? "0x" : (0, nc.aP)(a);
                    }
                    throw new i8.Wl(t);
                  })(a, i)
                );
              }
              return (0, nc.aP)(n);
            })(
              ["bytes32", "bytes32", "uint8"],
              [t.r, t.s, 0 === t.yParity ? 27 : 28]
            );
          })();
        return (0, i6.h)(
          [
            {
              components: [
                { name: "ownerIndex", type: "uint8" },
                { name: "signatureData", type: "bytes" },
              ],
              type: "tuple",
            },
          ],
          [{ ownerIndex: t, signatureData: n }]
        );
      }
      async function sm({
        address: e,
        client: t,
        factory: n,
        factoryData: r,
        owner: a,
        ownerIndex: i,
        parentAddress: s,
        attribution: o,
      }) {
        var c;
        let l = { address: e, factory: n, factoryData: r },
          d = null == (c = t.chain) ? void 0 : c.id;
        if (!d) throw R.rpc.internal("chainId not found");
        let f = await sd({
            owner: a,
            ownerIndex: null != i ? i : 1,
            address: e,
            client: t,
            factoryData: r,
          }),
          p = async (e) => {
            var n, r, i, c, h;
            try {
              switch (e.method) {
                case "wallet_addSubAccount":
                  return l;
                case "eth_accounts":
                  return [l.address];
                case "eth_coinbase":
                  return l.address;
                case "net_version":
                  return d.toString();
                case "eth_chainId":
                  return (0, u.cK)(d);
                case "eth_sendTransaction": {
                  V(e.params);
                  let a = e.params[0];
                  K(a.to, R.rpc.invalidParams("to is required"));
                  let s = {
                      to: a.to,
                      data: eJ(null != (n = a.data) ? n : "0x", !0),
                      value: eJ(null != (r = a.value) ? r : "0x", !0),
                      from: null != (i = a.from) ? i : l.address,
                    },
                    o = iZ({ calls: [s], chainId: d, from: s.from }),
                    c = await p(o);
                  return iV({ client: t, id: c });
                }
                case "wallet_sendCalls": {
                  let t;
                  V(e.params);
                  let n = iF(e.params[0], "chainId");
                  if (!n) throw R.rpc.invalidParams("chainId is required");
                  if (!(0, nI.q)(n))
                    throw R.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw R.rpc.invalidParams("params are required");
                  if (!("calls" in e.params[0]))
                    throw R.rpc.invalidParams("calls are required");
                  let r = {
                    method: "wallet_prepareCalls",
                    params: [
                      {
                        version: "1.0",
                        calls: e.params[0].calls,
                        chainId: n,
                        from: l.address,
                        capabilities:
                          "capabilities" in e.params[0]
                            ? e.params[0].capabilities
                            : {},
                      },
                    ],
                  };
                  s &&
                    (r = i$(r, {
                      funding: [
                        {
                          type: "spendPermission",
                          data: {
                            autoApply: !0,
                            sources: [s],
                            preference: "PREFER_DIRECT_BALANCE",
                          },
                        },
                      ],
                    }));
                  let i = await p(r),
                    o = await (null == (c = a.sign)
                      ? void 0
                      : c.call(a, {
                          hash: (0, e6.IQ)(i.signatureRequest.hash),
                        }));
                  if (!o) throw R.rpc.internal("signature not found");
                  return (
                    (t = (0, nI.q)(o)
                      ? {
                          type: "secp256k1",
                          data: { address: a.address, signature: o },
                        }
                      : {
                          type: "webauthn",
                          data: {
                            signature: JSON.stringify(
                              (function ({ webauthn: e, signature: t, id: n }) {
                                let r = ig(t);
                                return {
                                  id: n,
                                  rawId: i2((0, i0.Af)(n)),
                                  response: {
                                    authenticatorData: i2(
                                      (0, i0.aT)(e.authenticatorData)
                                    ),
                                    clientDataJSON: i2(
                                      (0, i0.Af)(e.clientDataJSON)
                                    ),
                                    signature: i2(
                                      (function (e, t) {
                                        let n = (0, i0.aT)(
                                            (0, i1.B)((0, u.cK)(e))
                                          ),
                                          r = (0, i0.aT)(
                                            (0, i1.B)((0, u.cK)(t))
                                          ),
                                          a = n.length,
                                          i = r.length,
                                          s = a + i + 4,
                                          o = new Uint8Array(s + 2);
                                        return (
                                          (o[0] = 48),
                                          (o[1] = s),
                                          (o[2] = 2),
                                          (o[3] = a),
                                          o.set(n, 4),
                                          (o[a + 4] = 2),
                                          (o[a + 5] = i),
                                          o.set(r, a + 6),
                                          o
                                        );
                                      })(r.r, r.s)
                                    ),
                                  },
                                  type: JSON.parse(e.clientDataJSON).type,
                                };
                              })(
                                Object.assign(
                                  { id: null != (h = a.id) ? h : "1" },
                                  o
                                )
                              )
                            ),
                            publicKey: a.publicKey,
                          },
                        }),
                    (
                      await p({
                        method: "wallet_sendPreparedCalls",
                        params: [
                          {
                            version: "1.0",
                            type: i.type,
                            data: i.userOp,
                            chainId: i.chainId,
                            signature: t,
                          },
                        ],
                      })
                    )[0]
                  );
                }
                case "wallet_sendPreparedCalls": {
                  V(e.params);
                  let n = iF(e.params[0], "chainId");
                  if (!n) throw R.rpc.invalidParams("chainId is required");
                  if (!(0, nI.q)(n))
                    throw R.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  return await t.request({
                    method: "wallet_sendPreparedCalls",
                    params: e.params,
                  });
                }
                case "wallet_prepareCalls": {
                  V(e.params);
                  let n = iF(e.params[0], "chainId");
                  if (!n) throw R.rpc.invalidParams("chainId is required");
                  if (!(0, nI.q)(n))
                    throw R.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw R.rpc.invalidParams("params are required");
                  if (!iF(e.params[0], "calls"))
                    throw R.rpc.invalidParams("calls are required");
                  let r = e.params[0];
                  return (
                    !o ||
                      !r.capabilities ||
                      "attribution" in r.capabilities ||
                      (r.capabilities.attribution = o),
                    await t.request({
                      method: "wallet_prepareCalls",
                      params: [
                        Object.assign(Object.assign({}, e.params[0]), {
                          chainId: n,
                        }),
                      ],
                    })
                  );
                }
                case "personal_sign": {
                  if ((V(e.params), !(0, nI.q)(e.params[0])))
                    throw R.rpc.invalidParams(
                      "message must be a hex encoded string"
                    );
                  let t = (0, e6.IQ)(e.params[0]);
                  return f.signMessage({ message: t });
                }
                case "eth_signTypedData_v4": {
                  V(e.params);
                  let t =
                    "string" == typeof e.params[1]
                      ? JSON.parse(e.params[1])
                      : e.params[1];
                  return f.signTypedData(t);
                }
                default:
                  throw R.rpc.methodNotSupported();
              }
            } catch (e) {
              if ($(e)) {
                let t = (function (e) {
                  try {
                    let t = JSON.parse(e.details);
                    return new G(t.code, t.message, t.data);
                  } catch (e) {
                    return null;
                  }
                })(e);
                if (t) throw t;
              }
              throw e;
            }
          };
        return { request: p };
      }
      var sy = n(35883);
      async function sb({
        address: e,
        client: t,
        publicKey: n,
        factory: r,
        factoryData: a,
      }) {
        if (!(await (0, sn.Q)(t, { address: e })) && r && a) {
          if ((0, sy.b)(r) !== (0, sy.b)(O))
            throw R.rpc.internal("unknown factory address");
          let e = (0, i3.J)({ abi: T, data: a });
          if ("createAccount" !== e.functionName)
            throw R.rpc.internal("unknown factory function");
          let [t] = e.args;
          return t.findIndex((e) => e.toLowerCase() === sg(n).toLowerCase());
        }
        let i = await (0, sr.J)(t, {
          address: e,
          abi: C,
          functionName: "ownerCount",
        });
        for (let r = Number(i) - 1; r >= 0; r--) {
          let a = await (0, sr.J)(t, {
              address: e,
              abi: C,
              functionName: "ownerAtIndex",
              args: [BigInt(r)],
            }),
            i = sg(n);
          if (a.toLowerCase() === i.toLowerCase()) return r;
        }
        return -1;
      }
      function sg(e) {
        return (0, nS.P)(e) ? (0, na.eV)(e) : e;
      }
      async function sw() {
        let e = ev();
        return new Promise((t) => {
          es({ snackbarContext: "sub_account_add_owner" }),
            e.presentItem({
              autoExpand: !0,
              message: "App requires a signer update",
              menuItems: [
                {
                  isRed: !1,
                  info: "Confirm",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    eo({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "confirm",
                    }),
                      e.clear(),
                      t("authenticate");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    eo({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      async function sv({ ownerAccount: e, globalAccountRequest: t }) {
        var n, r;
        let a = A.account.get(),
          i = A.subAccounts.get(),
          s =
            null == (n = a.accounts)
              ? void 0
              : n.find(
                  (e) =>
                    e.toLowerCase() !==
                    (null == i ? void 0 : i.address.toLowerCase())
                );
        K(s, R.provider.unauthorized("no global account")),
          K(
            null == (r = a.chain) ? void 0 : r.id,
            R.provider.unauthorized("no chain id")
          ),
          K(
            null == i ? void 0 : i.address,
            R.provider.unauthorized("no sub account")
          );
        let l = [];
        if (
          ("local" === e.type &&
            e.address &&
            l.push({
              to: i.address,
              data: (0, c.p)({
                abi: C,
                functionName: "addOwnerAddress",
                args: [e.address],
              }),
              value: (0, u.nj)(0),
            }),
          e.publicKey)
        ) {
          let [t, n] = (0, o.n)(
            [{ type: "bytes32" }, { type: "bytes32" }],
            e.publicKey
          );
          l.push({
            to: i.address,
            data: (0, c.p)({
              abi: C,
              functionName: "addOwnerPublicKey",
              args: [t, n],
            }),
            value: (0, u.nj)(0),
          });
        }
        let d = {
          method: "wallet_sendCalls",
          params: [
            { version: "1", calls: l, chainId: (0, u.cK)(84532), from: s },
          ],
        };
        if ("cancel" === (await sw()))
          throw R.provider.unauthorized("user cancelled");
        let f = await t(d),
          p = nA(a.chain.id);
        if (
          (K(p, R.rpc.internal(`client not found for chainId ${a.chain.id}`)),
          "success" !== (await (0, iG.c)(p, { id: f })).status)
        )
          throw R.rpc.internal("add owner call failed");
        let h = await sb({
          address: i.address,
          publicKey: "local" === e.type && e.address ? e.address : e.publicKey,
          client: p,
        });
        if (-1 === h) throw R.rpc.internal("failed to find owner index");
        return h;
      }
      var s_ = n(14493);
      async function sx({
        errorData: e,
        globalAccountAddress: t,
        subAccountAddress: n,
        client: r,
        request: a,
        subAccountRequest: i,
        globalAccountRequest: s,
      }) {
        var o, l, d;
        let f,
          p,
          h = null == (o = r.chain) ? void 0 : o.id;
        K(h, R.rpc.internal("invalid chainId"));
        let m = (function ({ errorData: e, sourceAddress: t }) {
            var n;
            let r = [];
            for (let [a, { amount: i, sources: s }] of Object.entries(
              null != (n = null == e ? void 0 : e.required) ? n : {}
            )) {
              if (
                0 ===
                s.filter(
                  (e) =>
                    (0, e6.uU)(e.balance) >= (0, e6.uU)(i) &&
                    e.address.toLowerCase() ===
                      (null == t ? void 0 : t.toLowerCase())
                ).length
              )
                throw Error(
                  "Source address has insufficient balance for a token"
                );
              r.push({ token: a, requiredAmount: (0, e6.uU)(i) });
            }
            return r;
          })({ errorData: e, sourceAddress: t }),
          y = await iJ();
        if ("cancel" === y) throw Error("User cancelled funding");
        if ("update_permission" === y) {
          if (1 === m.length) {
            let e = m[0],
              r = (function ({ spendPermission: e, chainId: t }) {
                return {
                  domain: {
                    name: "Spend Permission Manager",
                    version: "1",
                    chainId: t,
                    verifyingContract: P,
                  },
                  types: {
                    SpendPermission: [
                      { name: "account", type: "address" },
                      { name: "spender", type: "address" },
                      { name: "token", type: "address" },
                      { name: "allowance", type: "uint160" },
                      { name: "period", type: "uint48" },
                      { name: "start", type: "uint48" },
                      { name: "end", type: "uint48" },
                      { name: "salt", type: "uint256" },
                      { name: "extraData", type: "bytes" },
                    ],
                  },
                  primaryType: "SpendPermission",
                  message: {
                    account: e.account,
                    spender: e.spender,
                    token: e.token,
                    allowance: e.allowance,
                    period: e.period,
                    start: e.start,
                    end: e.end,
                    salt: e.salt,
                    extraData: e.extraData,
                  },
                };
              })({
                spendPermission: {
                  token: e.token,
                  allowance: (0, u.cK)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: t,
                  spender: n,
                  start: 0,
                  end: 0xffffffffffff,
                  salt: (0, u.cK)(
                    BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
                  ),
                  extraData: "0x",
                },
                chainId: h,
              });
            f = { method: "eth_signTypedData_v4", params: [t, r] };
          } else {
            let e = (function ({ spendPermissionBatch: e, chainId: t }) {
              return {
                domain: {
                  name: "Spend Permission Manager",
                  version: "1",
                  chainId: t,
                  verifyingContract: P,
                },
                types: {
                  SpendPermissionBatch: [
                    { name: "account", type: "address" },
                    { name: "period", type: "uint48" },
                    { name: "start", type: "uint48" },
                    { name: "end", type: "uint48" },
                    { name: "permissions", type: "PermissionDetails[]" },
                  ],
                  PermissionDetails: [
                    { name: "spender", type: "address" },
                    { name: "token", type: "address" },
                    { name: "allowance", type: "uint160" },
                    { name: "salt", type: "uint256" },
                    { name: "extraData", type: "bytes" },
                  ],
                },
                primaryType: "SpendPermissionBatch",
                message: {
                  account: e.account,
                  period: e.period,
                  start: e.start,
                  end: e.end,
                  permissions: e.permissions.map((e) => ({
                    spender: e.spender,
                    token: e.token,
                    allowance: e.allowance,
                    salt: e.salt,
                    extraData: e.extraData,
                  })),
                },
              };
            })({
              spendPermissionBatch: {
                account: t,
                period: 86400,
                start: 0,
                end: 0xffffffffffff,
                permissions: m.map((e) => ({
                  token: e.token,
                  allowance: (0, u.cK)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: t,
                  spender: n,
                  salt: "0x0",
                  extraData: "0x",
                })),
              },
              chainId: h,
            });
            f = { method: "eth_signTypedData_v4", params: [t, e] };
          }
          try {
            await s(f);
          } catch (e) {
            throw (
              (console.error(e), Error("User denied spend permission request"))
            );
          }
          return i(a);
        }
        let b = m.map((e) =>
          "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" === e.token.toLowerCase()
            ? { to: n, value: (0, u.cK)(e.requiredAmount), data: "0x" }
            : {
                to: e.token,
                value: "0x0",
                data: (0, c.p)({
                  abi: s_.xw,
                  functionName: "transfer",
                  args: [n, e.requiredAmount],
                }),
              }
        );
        if (
          "wallet_sendCalls" === a.method &&
          "object" == typeof (l = a.params) &&
          null !== l &&
          "calls" in l
        )
          p = a.params[0];
        else if (
          "eth_sendTransaction" === a.method &&
          Array.isArray((d = a.params)) &&
          1 === d.length &&
          "object" == typeof d[0] &&
          null !== d[0] &&
          "to" in d[0]
        )
          p = iZ({ calls: [a.params[0]], chainId: h, from: a.params[0].from })
            .params[0];
        else throw Error("Could not get original call");
        let g = [
            ...b,
            {
              data: (0, c.p)({
                abi: C,
                functionName: "executeBatch",
                args: [
                  p.calls.map((e) => {
                    var t, n;
                    return {
                      target: e.to,
                      value: (0, e6.uU)(null != (t = e.value) ? t : "0x0"),
                      data: null != (n = e.data) ? n : "0x",
                    };
                  }),
                ],
              }),
              to: n,
              value: "0x0",
            },
          ],
          w = await s({
            method: "wallet_sendCalls",
            params: [
              Object.assign(Object.assign({}, p), { calls: g, from: t }),
            ],
          });
        return "eth_sendTransaction" === a.method
          ? iV({ client: r, id: w })
          : w;
      }
      class sk {
        constructor(e) {
          var t, n, r, a;
          (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new iR());
          let { account: i, chains: s } = A.getState();
          (this.accounts = null != (t = i.accounts) ? t : []),
            (this.chain =
              null != (n = i.chain)
                ? n
                : {
                    id:
                      null !=
                      (a = null == (r = e.metadata.appChainIds) ? void 0 : r[0])
                        ? a
                        : 1,
                  }),
            s && nE(s);
        }
        async handshake(e) {
          var t, n, r;
          let a = e3.get(e);
          e4({ method: e.method, correlationId: a });
          try {
            await (null == (n = (t = this.communicator).waitForPopupLoaded)
              ? void 0
              : n.call(t));
            let i = await this.createRequestMessage(
                {
                  handshake: {
                    method: e.method,
                    params: null != (r = e.params) ? r : [],
                  },
                },
                a
              ),
              s = await this.communicator.postRequestAndWaitForResponse(i);
            if ("failure" in s.content) throw s.content.failure;
            let o = await nN("public", s.sender);
            await this.keyManager.setPeerPublicKey(o);
            let c = await this.decryptResponseMessage(s);
            this.handleResponse(e, c),
              e7({ method: e.method, correlationId: a });
          } catch (t) {
            throw (
              (e8({ method: e.method, correlationId: a, errorMessage: td(t) }),
              t)
            );
          }
        }
        async request(e) {
          let t = e3.get(e);
          e9({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return tt({ method: e.method, correlationId: t }), n;
          } catch (n) {
            throw (
              (te({ method: e.method, correlationId: t, errorMessage: td(n) }),
              n)
            );
          }
        }
        async _request(e) {
          var t, n, r, a, i, s, o, c, l, d, f, p, h, m;
          if (0 === this.accounts.length)
            switch (e.method) {
              case "eth_requestAccounts":
                return (
                  await (null ==
                  (n = (t = this.communicator).waitForPopupLoaded)
                    ? void 0
                    : n.call(t)),
                  await iK(),
                  await this.request({
                    method: "wallet_connect",
                    params: [
                      {
                        version: "1",
                        capabilities: Object.assign(
                          {},
                          null !=
                            (a =
                              null == (r = A.subAccountsConfig.get())
                                ? void 0
                                : r.capabilities)
                            ? a
                            : {}
                        ),
                      },
                    ],
                  }),
                  this.accounts
                );
              case "wallet_switchEthereumChain":
                iW(e.params), (this.chain.id = Number(e.params[0].chainId));
                return;
              case "wallet_connect": {
                await (null == (s = (i = this.communicator).waitForPopupLoaded)
                  ? void 0
                  : s.call(i)),
                  await iK();
                let t = {};
                (function (e, t) {
                  var n;
                  if (!Array.isArray(null == e ? void 0 : e.params)) return !1;
                  let r = null == (n = e.params[0]) ? void 0 : n.capabilities;
                  return !!r && "object" == typeof r && t in r;
                })(e, "addSubAccount") &&
                  (t =
                    null !=
                    (c =
                      null == (o = A.subAccountsConfig.get())
                        ? void 0
                        : o.capabilities)
                      ? c
                      : {});
                let n = i$(e, t);
                return this.sendRequestToPopup(n);
              }
              case "wallet_sendCalls":
              case "wallet_sign":
                return this.sendRequestToPopup(e);
              default:
                throw R.provider.unauthorized();
            }
          if (this.shouldRequestUseSubAccountSigner(e)) {
            let t = e3.get(e);
            tn({ method: e.method, correlationId: t });
            try {
              let n = await this.sendRequestToSubAccountSigner(e);
              return tr({ method: e.method, correlationId: t }), n;
            } catch (n) {
              throw (
                (ta({
                  method: e.method,
                  correlationId: t,
                  errorMessage: td(n),
                }),
                n)
              );
            }
          }
          switch (e.method) {
            case "eth_requestAccounts":
            case "eth_accounts": {
              let e = A.subAccounts.get(),
                t = A.subAccountsConfig.get();
              return (
                (null == e ? void 0 : e.address) &&
                  (this.accounts = (
                    null == t ? void 0 : t.enableAutoSubAccounts
                  )
                    ? iQ(this.accounts, e.address)
                    : iY(this.accounts, e.address)),
                null == (l = this.callback) ||
                  l.call(this, "connect", {
                    chainId: (0, u.cK)(this.chain.id),
                  }),
                this.accounts
              );
            }
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return (0, u.cK)(this.chain.id);
            case "wallet_getCapabilities":
              return this.handleGetCapabilitiesRequest(e);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            case "wallet_connect": {
              let t = await iX();
              if (t) return t;
              await (null == (f = (d = this.communicator).waitForPopupLoaded)
                ? void 0
                : f.call(d)),
                await iK();
              let n = A.subAccountsConfig.get(),
                r = i$(
                  e,
                  null != (p = null == n ? void 0 : n.capabilities) ? p : {}
                );
              return (
                null == (h = this.callback) ||
                  h.call(this, "connect", {
                    chainId: (0, u.cK)(this.chain.id),
                  }),
                this.sendRequestToPopup(r)
              );
            }
            case "wallet_getSubAccounts": {
              let t = A.subAccounts.get();
              if (null == t ? void 0 : t.address) return { subAccounts: [t] };
              if (!this.chain.rpcUrl)
                throw R.rpc.internal("No RPC URL set for chain");
              let n = await X(e, this.chain.rpcUrl);
              if ((V(n.subAccounts, "subAccounts"), n.subAccounts.length > 0)) {
                nO(n.subAccounts[0]);
                let e = n.subAccounts[0];
                A.subAccounts.set({
                  address: e.address,
                  factory: e.factory,
                  factoryData: e.factoryData,
                });
              }
              return n;
            }
            case "wallet_addSubAccount":
              return this.addSubAccount(e);
            case "coinbase_fetchPermissions": {
              !(function (e) {
                if (
                  "coinbase_fetchPermissions" !== e.method ||
                  void 0 !== e.params
                ) {
                  if (
                    "coinbase_fetchPermissions" === e.method &&
                    Array.isArray(e.params) &&
                    1 === e.params.length &&
                    "object" == typeof e.params[0]
                  ) {
                    if (
                      "string" != typeof e.params[0].account ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw R.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].account must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].chainId ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw R.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].chainId must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].spender ||
                      !e.params[0].spender.startsWith("0x")
                    )
                      throw R.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].spender must be a hex string"
                      );
                    return;
                  }
                  throw R.rpc.invalidParams();
                }
              })(e);
              let t = (function (e) {
                  var t, n, r;
                  if (void 0 !== e.params) return e;
                  let a =
                      null == (t = A.getState().account.accounts)
                        ? void 0
                        : t[0],
                    i =
                      null == (n = A.getState().account.chain) ? void 0 : n.id,
                    s =
                      null == (r = A.getState().subAccount)
                        ? void 0
                        : r.address;
                  if (!a || !s || !i)
                    throw R.rpc.invalidParams(
                      "FetchPermissions - one or more of account, sub account, or chain id is missing, connect to sub account via wallet_connect first"
                    );
                  return {
                    method: "coinbase_fetchPermissions",
                    params: [{ account: a, chainId: (0, u.cK)(i), spender: s }],
                  };
                })(e),
                n = await X(t, ee),
                r = (0, e6.ME)(null == (m = t.params) ? void 0 : m[0].chainId);
              return (
                A.spendPermissions.set(
                  n.permissions.map((e) =>
                    Object.assign(Object.assign({}, e), { chainId: r })
                  )
                ),
                n
              );
            }
            default:
              if (!this.chain.rpcUrl)
                throw R.rpc.internal("No RPC URL set for chain");
              return X(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let r = await this.sendEncryptedRequest(e),
            a = await this.decryptResponseMessage(r);
          return this.handleResponse(e, a);
        }
        async handleResponse(e, t) {
          var n, r, a, i, s;
          let o = t.result;
          if ("error" in o) throw o.error;
          switch (e.method) {
            case "eth_requestAccounts": {
              let e = o.value;
              (this.accounts = e),
                A.account.set({ accounts: e, chain: this.chain }),
                null == (n = this.callback) ||
                  n.call(this, "accountsChanged", e);
              break;
            }
            case "wallet_connect": {
              let e = o.value,
                t = e.accounts.map((e) => e.address);
              (this.accounts = t), A.account.set({ accounts: t });
              let n = e.accounts.at(0),
                s = null == n ? void 0 : n.capabilities;
              if (null == s ? void 0 : s.subAccounts) {
                let e = null == s ? void 0 : s.subAccounts;
                V(e, "subAccounts"),
                  nO(e[0]),
                  A.subAccounts.set({
                    address: e[0].address,
                    factory: e[0].factory,
                    factoryData: e[0].factoryData,
                  });
              }
              let c = [this.accounts[0]],
                u = A.subAccounts.get(),
                l = A.subAccountsConfig.get();
              (null == u ? void 0 : u.address) &&
                (this.accounts = (null == l ? void 0 : l.enableAutoSubAccounts)
                  ? iQ(this.accounts, u.address)
                  : iY(this.accounts, u.address));
              let d =
                null ==
                (a =
                  null == (r = null == e ? void 0 : e.accounts)
                    ? void 0
                    : r[0].capabilities)
                  ? void 0
                  : a.spendPermissions;
              d &&
                "permissions" in d &&
                A.spendPermissions.set(null == d ? void 0 : d.permissions),
                null == (i = this.callback) ||
                  i.call(this, "accountsChanged", c);
              break;
            }
            case "wallet_addSubAccount": {
              nO(o.value);
              let e = o.value;
              A.subAccounts.set(e);
              let t = A.subAccountsConfig.get();
              (this.accounts = (null == t ? void 0 : t.enableAutoSubAccounts)
                ? iQ(this.accounts, e.address)
                : iY(this.accounts, e.address)),
                null == (s = this.callback) ||
                  s.call(this, "accountsChanged", this.accounts);
            }
          }
          return o.value;
        }
        async cleanup() {
          var e, t;
          let n = A.config.get().metadata;
          await this.keyManager.clear(),
            A.account.clear(),
            A.subAccounts.clear(),
            A.spendPermissions.clear(),
            A.chains.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !=
                (t =
                  null == (e = null == n ? void 0 : n.appChainIds)
                    ? void 0
                    : e[0])
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          iW(e.params);
          let t = e0(e.params[0].chainId);
          if (this.updateChain(t)) return null;
          let n = await this.sendRequestToPopup(e);
          return null === n && this.updateChain(t), n;
        }
        async handleGetCapabilitiesRequest(e) {
          var t = e.params;
          if (
            !t ||
            !Array.isArray(t) ||
            (1 !== t.length && 2 !== t.length) ||
            "string" != typeof t[0] ||
            !(0, nS.P)(t[0])
          )
            throw R.rpc.invalidParams();
          if (2 === t.length) {
            if (!Array.isArray(t[1])) throw R.rpc.invalidParams();
            for (let e of t[1])
              if ("string" != typeof e || !e.startsWith("0x"))
                throw R.rpc.invalidParams();
          }
          let n = e.params[0],
            r = e.params[1];
          if (!this.accounts.some((e) => (0, e5.h)(e, n)))
            throw R.provider.unauthorized(
              "no active account found when getting capabilities"
            );
          let a = A.getState().account.capabilities;
          if (!a) return {};
          if (!r || 0 === r.length) return a;
          let i = new Set(r.map((e) => (0, e6.ME)(e)));
          return Object.fromEntries(
            Object.entries(a).filter(([e]) => {
              try {
                let t = (0, e6.ME)(e);
                return i.has(t);
              } catch (e) {
                return !1;
              }
            })
          );
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw R.provider.unauthorized(
              "No shared secret found when encrypting request"
            );
          let n = await nD({ action: e, chainId: this.chain.id }, t),
            r = e3.get(e),
            a = await this.createRequestMessage({ encrypted: n }, r);
          return this.communicator.postRequestAndWaitForResponse(a);
        }
        async createRequestMessage(e, t) {
          let n = await nL("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            correlationId: t,
            sender: n,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n, r;
          let a = e.content;
          if ("failure" in a) throw a.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i)
            throw R.provider.unauthorized(
              "Invalid session: no shared secret found when decrypting response"
            );
          let s = await nB(a.encrypted, i),
            o = null == (t = s.data) ? void 0 : t.chains;
          if (o) {
            let e = null == (n = s.data) ? void 0 : n.nativeCurrencies,
              t = Object.entries(o).map(([t, n]) => {
                let r = null == e ? void 0 : e[Number(t)];
                return Object.assign(
                  { id: Number(t), rpcUrl: n },
                  r ? { nativeCurrency: r } : {}
                );
              });
            A.chains.set(t), this.updateChain(this.chain.id, t), nE(t);
          }
          let c = null == (r = s.data) ? void 0 : r.capabilities;
          return c && A.account.set({ capabilities: c }), s;
        }
        updateChain(e, t) {
          var n;
          let r = A.getState(),
            a = null != t ? t : r.chains,
            i = null == a ? void 0 : a.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              A.account.set({ chain: i }),
              null == (n = this.callback) ||
                n.call(this, "chainChanged", eW(i.id))),
            !0)
          );
        }
        async addSubAccount(e) {
          var t, n, r, a;
          let i = A.getState().subAccount,
            s = A.subAccountsConfig.get();
          if (null == i ? void 0 : i.address)
            return (
              (this.accounts = (null == s ? void 0 : s.enableAutoSubAccounts)
                ? iQ(this.accounts, i.address)
                : iY(this.accounts, i.address)),
              null == (t = this.callback) ||
                t.call(this, "accountsChanged", this.accounts),
              i
            );
          if (
            (await (null == (r = (n = this.communicator).waitForPopupLoaded)
              ? void 0
              : r.call(n)),
            Array.isArray(e.params) &&
              e.params.length > 0 &&
              e.params[0].account &&
              "create" === e.params[0].account.type)
          ) {
            let t;
            if (e.params[0].account.keys && e.params[0].account.keys.length > 0)
              t = e.params[0].account.keys;
            else {
              let e = null != (a = A.subAccountsConfig.get()) ? a : {},
                { account: n } = e.toOwnerAccount
                  ? await e.toOwnerAccount()
                  : await iN();
              if (!n)
                throw R.provider.unauthorized(
                  "could not get subaccount owner account when adding sub account"
                );
              t = [
                {
                  type: n.address ? "address" : "webauthn-p256",
                  publicKey: n.address || n.publicKey,
                },
              ];
            }
            e.params[0].account.keys = t;
          }
          let o = await this.sendRequestToPopup(e);
          return nO(o), o;
        }
        shouldRequestUseSubAccountSigner(e) {
          let t = iz(e),
            n = A.subAccounts.get();
          return (
            !!t &&
            t.toLowerCase() === (null == n ? void 0 : n.address.toLowerCase())
          );
        }
        async sendRequestToSubAccountSigner(e) {
          var t;
          let n = A.subAccounts.get(),
            r = A.subAccountsConfig.get(),
            a = A.config.get();
          K(
            null == n ? void 0 : n.address,
            R.provider.unauthorized(
              "no active sub account when sending request to sub account signer"
            )
          );
          let i = (null == r ? void 0 : r.toOwnerAccount)
            ? await r.toOwnerAccount()
            : await iN();
          K(
            null == i ? void 0 : i.account,
            R.provider.unauthorized(
              "no active sub account owner when sending request to sub account signer"
            )
          ),
            void 0 === iz(e) &&
              (e = (function (e, t) {
                if (!Array.isArray(e.params)) throw R.rpc.invalidParams();
                let n = [...e.params];
                switch (e.method) {
                  case "eth_signTransaction":
                  case "eth_sendTransaction":
                  case "wallet_sendCalls":
                    n[0].from = t;
                    break;
                  case "eth_signTypedData_v4":
                    n[0] = t;
                    break;
                  case "personal_sign":
                    n[1] = t;
                }
                return Object.assign(Object.assign({}, e), { params: n });
              })(e, n.address));
          let s = nA(this.chain.id);
          K(
            s,
            R.rpc.internal(
              `client not found for chainId ${this.chain.id} when sending request to sub account signer`
            )
          );
          let o = this.accounts.find(
            (e) => e.toLowerCase() !== n.address.toLowerCase()
          );
          K(
            o,
            R.provider.unauthorized(
              "no global account found when sending request to sub account signer"
            )
          );
          let c = (function ({ attribution: e, dappOrigin: t }) {
              if (e) {
                if ("auto" in e && e.auto && t)
                  return (0, iq.di)((0, iH.S)((0, u.nj)(t)), 0, 16);
                if ("dataSuffix" in e) return e.dataSuffix;
              }
            })({
              attribution: null == (t = a.preference) ? void 0 : t.attribution,
              dappOrigin: window.location.origin,
            }),
            l =
              "local" === i.account.type
                ? i.account.address
                : i.account.publicKey,
            d = await sb({
              address: n.address,
              factory: n.factory,
              factoryData: n.factoryData,
              publicKey: l,
              client: s,
            });
          if (-1 === d) {
            let t = e3.get(e);
            ti({ method: e.method, correlationId: t });
            try {
              (d = await sv({
                ownerAccount: i.account,
                globalAccountRequest: this.sendRequestToPopup.bind(this),
              })),
                ts({ method: e.method, correlationId: t });
            } catch (n) {
              return (
                to({ method: e.method, correlationId: t, errorMessage: td(n) }),
                R.provider.unauthorized(
                  "failed to add sub account owner when sending request to sub account signer"
                )
              );
            }
          }
          let { request: f } = await sm({
            address: n.address,
            owner: i.account,
            client: s,
            factory: n.factory,
            factoryData: n.factoryData,
            parentAddress: o,
            attribution: c ? { suffix: c } : void 0,
            ownerIndex: d,
          });
          try {
            return await f(e);
          } catch (a) {
            let t;
            if ($(a)) t = JSON.parse(a.details);
            else if (W(a)) t = a;
            else throw a;
            if (!(W(t) && t.data) || !t.data) throw a;
            let r = e3.get(e);
            tc({ method: e.method, correlationId: r });
            try {
              let a = await sx({
                errorData: t.data,
                globalAccountAddress: o,
                subAccountAddress: n.address,
                client: s,
                request: e,
                subAccountRequest: f,
                globalAccountRequest: this.request.bind(this),
              });
              return tu({ method: e.method, correlationId: r }), a;
            } catch (t) {
              throw (
                (console.error(t),
                tl({ method: e.method, correlationId: r, errorMessage: td(t) }),
                a)
              );
            }
          }
        }
      }
      let sE = ({ method: e, correlationId: t }) => {
          en(
            "walletlink_signer.handshake.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
            },
            i.high
          );
        },
        sA = ({ method: e, correlationId: t, errorMessage: n }) => {
          en(
            "walletlink_signer.handshake.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              errorMessage: n,
            },
            i.high
          );
        },
        sS = ({ method: e, correlationId: t }) => {
          en(
            "walletlink_signer.handshake.completed",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
            },
            i.high
          );
        },
        sI = ({ method: e, correlationId: t }) => {
          en(
            "walletlink_signer.request.started",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
            },
            i.high
          );
        },
        sO = ({ method: e, correlationId: t, errorMessage: n }) => {
          en(
            "walletlink_signer.request.error",
            {
              action: a.error,
              componentType: r.unknown,
              method: e,
              correlationId: t,
              errorMessage: n,
            },
            i.high
          );
        },
        sP = ({ method: e, correlationId: t }) => {
          en(
            "walletlink_signer.request.completed",
            {
              action: a.unknown,
              componentType: r.unknown,
              method: e,
              correlationId: t,
            },
            i.high
          );
        },
        sC = () => {
          en(
            "walletlink_signer.walletlink_connection.connection_failed",
            { action: a.measurement, componentType: r.unknown },
            i.high
          );
        },
        sT = () => {
          en(
            "walletlink_signer.walletlink_connection.fetch_unseen_events_failed",
            { action: a.measurement, componentType: r.unknown },
            i.high
          );
        };
      var sj = n(8314);
      let sM = "Addresses";
      class sL {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            r = await crypto.subtle.importKey(
              "raw",
              eH(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            a = new TextEncoder(),
            i = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              r,
              a.encode(e)
            ),
            s = i.slice(i.byteLength - 16),
            o = i.slice(0, i.byteLength - 16),
            c = new Uint8Array(s),
            u = new Uint8Array(o);
          return eq(new Uint8Array([...n, ...c, ...u]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, r) => {
            (async () => {
              let a = await crypto.subtle.importKey(
                  "raw",
                  eH(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                i = eH(e),
                s = i.slice(0, 12),
                o = i.slice(12, 28),
                c = new Uint8Array([...i.slice(28), ...o]),
                u = { name: "AES-GCM", iv: new Uint8Array(s) };
              try {
                let e = await window.crypto.subtle.decrypt(u, a, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                r(e);
              }
            })();
          });
        }
      }
      class sN {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let r = `${t}:${n}`;
          this.auth = `Basic ${btoa(r)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unable to mark events as seen:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: r } = await t.json();
            if (r) throw Error(`Check unseen events failed: ${r}`);
            let a =
              null !=
              (e =
                null == n
                  ? void 0
                  : n
                      .filter((e) => "Web3Response" === e.event)
                      .map((e) => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data,
                      })))
                ? e
                : [];
            return this.markUnseenEventsAsSeen(a), a;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(s || (s = {}));
      class sD {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.isDisconnecting = !1),
            (this.url = e.replace(/^http/, "ws")),
            (this.instanceId = sD.instanceCounter++),
            sD.activeInstances.add(this.instanceId);
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          if (this.isDisconnecting)
            throw Error(
              "WebSocket is disconnecting, cannot reconnect on same instance"
            );
          return new Promise((e, t) => {
            var n;
            let r;
            try {
              this.webSocket = r = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null == (n = this.connectionStateListener) ||
              n.call(this, s.CONNECTING),
              (r.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  r.readyState !== WebSocket.OPEN &&
                    t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, s.DISCONNECTED);
              }),
              (r.onopen = (t) => {
                var n;
                e(),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, s.CONNECTED),
                  sD.pendingData.length > 0 &&
                    ([...sD.pendingData].forEach((e) => this.sendData(e)),
                    (sD.pendingData = []));
              }),
              (r.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null == (t = this.incomingDataListener) ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null == (n = this.incomingDataListener) || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            (this.isDisconnecting = !0),
              this.clearWebSocket(),
              null == (e = this.connectionStateListener) ||
                e.call(this, s.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            sD.pendingData.push(e), this.isDisconnecting || this.connect();
            return;
          }
          if (t.readyState !== WebSocket.OPEN)
            return void sD.pendingData.push(e);
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
        cleanup() {
          sD.activeInstances.delete(this.instanceId);
        }
      }
      (sD.instanceCounter = 0),
        (sD.activeInstances = new Set()),
        (sD.pendingData = []);
      class sB {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = eN(1)),
            (this.reconnectAttempts = 0),
            (this.isReconnecting = !1),
            (this._connected = !1),
            (this._linked = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let r = e[n];
                  void 0 !== r && t(r);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e && (null == (t = this.listener) || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              try {
                let n = await this.cipher.decrypt(e);
                null == (t = this.listener) || t.accountUpdated(n);
              } catch (e) {}
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.metadataUpdated(e, r);
              } catch (e) {}
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(e),
                  a = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.chainUpdated(r, a);
              } catch (e) {}
            }),
            (this.session = e),
            (this.cipher = new sL(e.secret)),
            (this.listener = n),
            (this.linkAPIUrl = t),
            (this.WebSocketClass = WebSocket);
          let r = this.createWebSocket();
          (this.ws = r),
            (this.http = new sN(t, e.id, e.key)),
            this.setupVisibilityChangeHandler();
        }
        createWebSocket() {
          let e = new sD(`${this.linkAPIUrl}/rpc`, this.WebSocketClass);
          return (
            (this.activeWsInstance = e),
            e.setConnectionStateListener(async (t) => {
              if (e !== this.activeWsInstance) return;
              let n = !1;
              switch (t) {
                case s.DISCONNECTED:
                  this.heartbeatIntervalId &&
                    (clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = void 0)),
                    (this.lastHeartbeatResponse = 0),
                    (n = !1),
                    this.destroyed ||
                      (async () => {
                        if (this.isReconnecting) return;
                        this.isReconnecting = !0;
                        let t = 3e3 * (0 !== this.reconnectAttempts);
                        await new Promise((e) => setTimeout(e, t)),
                          this.destroyed || e !== this.activeWsInstance
                            ? (this.isReconnecting = !1)
                            : (this.reconnectAttempts++,
                              "cleanup" in this.ws &&
                                "function" == typeof this.ws.cleanup &&
                                this.ws.cleanup(),
                              (this.ws = this.createWebSocket()),
                              this.ws
                                .connect()
                                .catch(() => {
                                  sC();
                                })
                                .finally(() => {
                                  this.isReconnecting = !1;
                                }));
                      })();
                  break;
                case s.CONNECTED:
                  this.reconnectAttempts = 0;
                  try {
                    (n = await this.handleConnected()),
                      this.fetchUnseenEventsAPI().catch(() => {});
                  } catch (e) {
                    break;
                  }
                  (this.connected = n),
                    this.updateLastHeartbeat(),
                    this.heartbeatIntervalId &&
                      clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = window.setInterval(() => {
                      this.heartbeat();
                    }, 1e4)),
                    setTimeout(() => {
                      this.heartbeat();
                    }, 100);
                case s.CONNECTING:
              }
              t !== s.CONNECTED && (this.connected = n);
            }),
            e.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null == (t = this.requestResolutions.get(e.id)) || t(e));
            }),
            e
          );
        }
        setupVisibilityChangeHandler() {
          (this.visibilityChangeHandler = () => {
            document.hidden ||
              this.destroyed ||
              (this.connected
                ? this.heartbeat()
                : this.reconnectWithFreshWebSocket());
          }),
            (this.focusHandler = () => {
              this.destroyed ||
                this.connected ||
                this.reconnectWithFreshWebSocket();
            }),
            document.addEventListener(
              "visibilitychange",
              this.visibilityChangeHandler
            ),
            window.addEventListener("focus", this.focusHandler),
            window.addEventListener("pageshow", (e) => {
              e.persisted && this.focusHandler && this.focusHandler();
            });
        }
        reconnectWithFreshWebSocket() {
          if (this.destroyed) return;
          let e = this.ws;
          (this.activeWsInstance = void 0),
            e.disconnect(),
            "cleanup" in e && "function" == typeof e.cleanup && e.cleanup(),
            (this.ws = this.createWebSocket()),
            this.ws.connect().catch(() => {
              sC();
            });
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: eN(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            (this.activeWsInstance = void 0),
            this.heartbeatIntervalId &&
              (clearInterval(this.heartbeatIntervalId),
              (this.heartbeatIntervalId = void 0)),
            this.visibilityChangeHandler &&
              document.removeEventListener(
                "visibilitychange",
                this.visibilityChangeHandler
              ),
            this.focusHandler &&
              window.removeEventListener("focus", this.focusHandler),
            this.ws.disconnect(),
            "cleanup" in this.ws &&
              "function" == typeof this.ws.cleanup &&
              this.ws.cleanup(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null == (t = this.onceLinked) || t.call(this)),
            null == (n = this.listener) || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" === e.type && "Web3Response" === e.event)
            try {
              let n = await this.cipher.decrypt(e.data),
                r = JSON.parse(n);
              if ("WEB3_RESPONSE" !== r.type) return;
              null == (t = this.listener) ||
                t.handleWeb3ResponseMessage(r.id, r.response);
            } catch (e) {}
        }
        async checkUnseenEvents() {
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          try {
            (await this.http.fetchUnseenEvents()).forEach((e) => {
              this.handleIncomingEvent(e);
            });
          } catch (e) {
            sT();
          }
        }
        async publishEvent(e, t, n = !1) {
          let r = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            a = {
              type: "PublishEvent",
              id: eN(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: r,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(a);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            return void this.ws.disconnect();
          if (this.connected)
            try {
              this.ws.sendData("h");
            } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n,
            r = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, a) => {
                n = window.setTimeout(() => {
                  a(Error(`request ${r} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(r, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(r);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: eN(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: eN(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: eN(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class sU {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = eV(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      function sR(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function sq(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let sH = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        sF = (e, t) => (e << (32 - t)) | (e >>> t);
      new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      let sG = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        ),
        sz = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function sW(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          sR(e),
          e
        );
      }
      class s$ {
        clone() {
          return this._cloneInto();
        }
      }
      let sK = (e, t, n) => (e & t) ^ (~e & n),
        sV = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
      class sZ extends s$ {
        constructor(e, t, n, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = sH(this.buffer));
        }
        update(e) {
          sq(this);
          let { view: t, buffer: n, blockLen: r } = this,
            a = (e = sW(e)).length;
          for (let i = 0; i < a; ) {
            let s = Math.min(r - this.pos, a - i);
            if (s === r) {
              let t = sH(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          sq(this);
          sR(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              `digestInto() expects output buffer of length at least ${t}`
            );
          this.finished = !0;
          let { buffer: n, view: r, blockLen: a, isLE: i } = this,
            { pos: s } = this;
          (n[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < a; e++) n[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((n >> a) & i),
              o = Number(n & i),
              c = 4 * !!r,
              u = 4 * !r;
            e.setUint32(t + c, s, r), e.setUint32(t + u, o, r);
          })(r, a - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = sH(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            l = this.get();
          if (u > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: a,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = a),
            (e.destroyed = i),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let sJ = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        sQ = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        sY = new Uint32Array(64);
      class sX extends sZ {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | sQ[0]),
            (this.B = 0 | sQ[1]),
            (this.C = 0 | sQ[2]),
            (this.D = 0 | sQ[3]),
            (this.E = 0 | sQ[4]),
            (this.F = 0 | sQ[5]),
            (this.G = 0 | sQ[6]),
            (this.H = 0 | sQ[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: s, H: o } = this;
          return [e, t, n, r, a, i, s, o];
        }
        set(e, t, n, r, a, i, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) sY[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = sY[e - 15],
              n = sY[e - 2],
              r = sF(t, 7) ^ sF(t, 18) ^ (t >>> 3),
              a = sF(n, 17) ^ sF(n, 19) ^ (n >>> 10);
            sY[e] = (a + sY[e - 7] + r + sY[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: s, F: o, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (u +
                  (sF(s, 6) ^ sF(s, 11) ^ sF(s, 25)) +
                  sK(s, o, c) +
                  sJ[e] +
                  sY[e]) |
                0,
              l = ((sF(n, 2) ^ sF(n, 13) ^ sF(n, 22)) + sV(n, r, a)) | 0;
            (u = c),
              (c = o),
              (o = s),
              (s = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + l) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, a, i, s, o, c, u);
        }
        roundClean() {
          sY.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let s0 = (function (e) {
          let t = (t) => e().update(sW(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new sX()),
        s1 = "session:id",
        s2 = "session:secret",
        s3 = "session:linked";
      class s6 {
        constructor(e, t, n, r = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (function (e) {
              sR(e);
              let t = "";
              for (let n = 0; n < e.length; n++) t += sG[e[n]];
              return t;
            })(s0(`${t}, ${n} WalletLink`))),
            (this._linked = !!r);
        }
        static create(e) {
          return new s6(e, eR(16), eR(32)).save();
        }
        static load(e) {
          let t = e.getItem(s1),
            n = e.getItem(s3),
            r = e.getItem(s2);
          return t && r ? new s6(e, t, r, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(s1, this.id),
            this.storage.setItem(s2, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(s3, this._linked ? "1" : "0");
        }
      }
      class s5 {
        constructor() {
          (this.root = null), (this.darkMode = ef());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            ec();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, el.render)(null, this.root),
            e &&
              (0, el.render)(
                (0, el.h)(
                  s4,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let s4 = ({
        title: e,
        buttonText: t,
        darkMode: n,
        onButtonClick: r,
        onDismiss: a,
      }) =>
        (0, el.h)(
          eh,
          { darkMode: n },
          (0, el.h)(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            (0, el.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
            ),
            (0, el.h)("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: a,
            }),
            (0, el.h)(
              "div",
              {
                class: eu("-cbwsdk-redirect-dialog-box", n ? "dark" : "light"),
              },
              (0, el.h)("p", null, e),
              (0, el.h)("button", { onClick: r }, t)
            )
          )
        );
      class s8 {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new s5());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectToCoinbaseWallet(e),
            setTimeout(() => {
              this.redirectDialog.present({
                title: "Redirecting to Coinbase Wallet...",
                buttonText: "Open",
                onButtonClick: () => {
                  this.redirectToCoinbaseWallet(e);
                },
              });
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class s7 {
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null == (e = null == window ? void 0 : window.navigator)
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(sM);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  r = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  r ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                s7.accountRequestCallbackIds.size > 0 &&
                  (Array.from(s7.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  s7.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: r } = this.subscribe();
          (this._session = t),
            (this.connection = r),
            (this.relayEventManager = new sU()),
            (this.ui = n),
            this.ui.attach();
        }
        subscribe() {
          let e = s6.load(this.storage) || s6.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new sB({ session: e, linkAPIUrl: t, listener: this }),
            r = this.isMobileWeb ? new s8() : new eb();
          return n.connect(), { session: e, ui: r, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = s6.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && eA.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: ez(e.weiValue),
              data: eF(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? ez(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? ez(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? ez(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit ? ez(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: ez(e.weiValue),
              data: eF(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? ez(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? ez(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? ez(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? ez(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: eF(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = eR(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, r),
                null == t || t();
            };
          return new Promise((a, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), ex(e))) return i(Error(e.errorMessage));
                a(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof s8)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            s7.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              s7.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var r;
          let a =
            null != (r = null == n ? void 0 : n.message)
              ? r
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: a });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            r = eR(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(r, (n) => {
              if (ex(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              s7.accountRequestCallbackIds.add(r),
              this.publishWeb3RequestEvent(r, n);
          });
        }
        watchAsset(e, t, n, r, a, i) {
          let s = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: r, image: a },
                chainId: i,
              },
            },
            o = null,
            c = eR(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, s.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ex(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        addEthereumChain(e, t, n, r, a, i) {
          let s = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: r,
                chainName: a,
                iconUrls: n,
                nativeCurrency: i,
              },
            },
            o = null,
            c = eR(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, s.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ex(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            r = null,
            a = eR(8);
          return (
            (r = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(a),
                  this.handleErrorResponse(a, n.method, e),
                  null == r || r();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(a, (n) =>
                (null == r || r(), ex(n) && n.errorCode)
                  ? t(
                      R.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : ex(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(a, n);
            })
          );
        }
      }
      s7.accountRequestCallbackIds = new Set();
      var s9 = n(44134).Buffer;
      let oe = "DefaultChainId",
        ot = "DefaultJsonRpcUrl";
      class on {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new eA("walletlink", et)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(sM);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => eY(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake(e) {
          let t = "eth_requestAccounts",
            n = e3.get(e);
          sE({ method: t, correlationId: n });
          try {
            await this._eth_requestAccounts(),
              sS({ method: t, correlationId: n });
          } catch (e) {
            throw (sA({ method: t, correlationId: n, errorMessage: td(e) }), e);
          }
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null != (e = this._storage.getItem(ot)) ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(ot, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let r = this.getChainId();
          this._storage.setItem(oe, t.toString(10)),
            e0(t) !== r &&
              (null == (n = this.callback) ||
                n.call(this, "chainChanged", eW(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw R.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw R.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw R.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw R.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: r, symbol: a, image: i, decimals: s } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              r,
              a,
              s,
              i,
              null == n ? void 0 : n.toString()
            );
          return !ex(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let r = e[0];
          if ((null == (t = r.rpcUrls) ? void 0 : t.length) === 0)
            throw R.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!r.chainName || "" === r.chainName.trim())
            throw R.rpc.invalidParams("chainName is a required field");
          if (!r.nativeCurrency)
            throw R.rpc.invalidParams("nativeCurrency is a required field");
          let a = Number.parseInt(r.chainId, 16);
          if (a === this.getChainId()) return !1;
          let i = this.initializeRelay(),
            {
              rpcUrls: s = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: u = [],
              nativeCurrency: l,
            } = r,
            d = await i.addEthereumChain(a.toString(), s, u, o, c, l);
          if (ex(d)) return !1;
          if ((null == (n = d.result) ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(s[0], a), null;
          throw R.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            r = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (ex(r)) throw r;
          let a = r.result;
          return (
            a.isApproved &&
              a.rpcUrl.length > 0 &&
              this.updateProviderInfo(a.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let r = e.map((e) => eY(e));
          JSON.stringify(r) !== JSON.stringify(this._addresses) &&
            ((this._addresses = r),
            null == (n = this.callback) || n.call(this, "accountsChanged", r),
            this._storage.setItem(sM, r.join(" ")));
        }
        async request(e) {
          let t = e3.get(e);
          sI({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return sP({ method: e.method, correlationId: t }), n;
          } catch (n) {
            throw (
              (sO({ method: e.method, correlationId: t, errorMessage: td(n) }),
              n)
            );
          }
        }
        async _request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return eW(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw R.rpc.internal("No RPC URL set for chain");
              return X(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = eY(e);
          if (!this._addresses.map((e) => eY(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? eY(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? eY(e.to) : null,
            r = null != e.value ? e1(e.value) : BigInt(0),
            a = e.data ? eX(e.data) : s9.alloc(0),
            i = null != e.nonce ? e0(e.nonce) : null,
            s = null != e.gasPrice ? e1(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? e1(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas
                ? e1(e.maxPriorityFeePerGas)
                : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: r,
            data: a,
            nonce: i,
            gasPriceInWei: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: null != e.gas ? e1(e.gas) : null,
            chainId: e.chainId ? e0(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw R.rpc.invalidParams();
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: eG(n[0]),
                signature: eG(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (ex(a)) throw a;
          return a.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null != (e = this._storage.getItem(oe)) ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null == (e = this.callback) ||
                e.call(this, "connect", { chainId: eW(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            r = await n.requestEthereumAccounts();
          if (ex(r)) throw r;
          if (!r.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(r.result),
            null == (t = this.callback) ||
              t.call(this, "connect", { chainId: eW(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw R.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: eY(t),
                message: eG(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (ex(a)) throw a;
          return a.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signEthereumTransaction(t);
          if (ex(r)) throw r;
          return r.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = eX(e[0]),
            n = this.initializeRelay(),
            r = await n.submitEthereumTransaction(t, this.getChainId());
          if (ex(r)) throw r;
          return r.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signAndSubmitEthereumTransaction(t);
          if (ex(r)) throw r;
          return r.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw R.rpc.invalidParams();
          let r = n[+("eth_signTypedData_v1" === t)],
            a = n[+("eth_signTypedData_v1" !== t)];
          this._ensureKnownAddress(r);
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: eY(r),
                message: eF(
                  {
                    eth_signTypedData_v1: sj.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: sj.hashForSignTypedData_v3,
                    eth_signTypedData_v4: sj.hashForSignTypedData_v4,
                    eth_signTypedData: sj.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw R.rpc.invalidParams(
                        `Not a JSON string or an object: ${String(e)}`
                      );
                    })(a),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(a, null, 2),
                addPrefix: !1,
              },
            });
          if (ex(s)) throw s;
          return s.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new s7({
                linkAPIUrl: et,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let or = "SignerType",
        oa = new eA("CBWSDK", "SignerConfigurator");
      function oi(e) {
        if (e) return e instanceof sk ? "scw" : "walletlink";
      }
      async function os(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: r,
          callback: a,
        } = e;
        oo(t, n, a, r).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: r,
            }),
          },
          { data: s } = await t.postRequestAndWaitForResponse(i);
        return s;
      }
      async function oo(e, t, n, r) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let a = new on({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: a.getSession() },
        }),
          await a.handshake(r),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      var oc = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, r = Object.getOwnPropertySymbols(e);
            a < r.length;
            a++
          )
            0 > t.indexOf(r[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        return n;
      };
      class ou extends eE {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: r } = n,
            a = oc(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = a),
            (this.communicator = new e_({
              url: r,
              metadata: t,
              preference: a,
            }));
          let i = oa.getItem(or);
          i && ((this.signer = this.initSigner(i)), eS({ signerType: i }));
        }
        async request(e) {
          let t = crypto.randomUUID();
          e3.set(e, t), eI({ method: e.method, correlationId: t });
          try {
            let n = await this._request(e);
            return (
              eP({
                method: e.method,
                signerType: oi(this.signer),
                correlationId: t,
              }),
              n
            );
          } catch (n) {
            throw (
              (eO({
                method: e.method,
                correlationId: t,
                signerType: oi(this.signer),
                errorMessage: n instanceof Error ? n.message : "",
              }),
              n)
            );
          } finally {
            e3.delete(e);
          }
        }
        async _request(e) {
          try {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw R.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: n } = e;
            if ("string" != typeof t || 0 === t.length)
              throw R.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ("object" != typeof n || null === n)
            )
              throw R.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            switch (t) {
              case "eth_sign":
              case "eth_signTypedData_v2":
              case "eth_subscribe":
              case "eth_unsubscribe":
                throw R.provider.unsupportedMethod();
            }
            if (!this.signer)
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t,
                    n = A.subAccountsConfig.get();
                  t = (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? "scw"
                    : await this.requestSignerSelection(e);
                  let r = this.initSigner(t);
                  "scw" === t && (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? (await r.handshake({ method: "handshake" }),
                      await r.request(e))
                    : await r.handshake(e),
                    (this.signer = r),
                    oa.setItem(or, t);
                  break;
                }
                case "wallet_connect": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return (this.signer = t), n;
                }
                case "wallet_sendCalls":
                case "wallet_sign": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return await X(e, ee);
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return eW(1);
                default:
                  throw R.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === j.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, r;
                      let a = {};
                      if (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        B(e, "code") &&
                        Number.isInteger((n = e.code)) &&
                        (M[n.toString()] || ((r = n) >= -32099 && r <= -32e3))
                      )
                        (a.code = e.code),
                          e.message && "string" == typeof e.message
                            ? ((a.message = e.message),
                              B(e, "data") && (a.data = e.data))
                            : ((a.message = N(a.code)),
                              (a.data = { originalError: D(e) }));
                      else
                        (a.code = j.rpc.internal),
                          (a.message = U(e, "message") ? e.message : L),
                          (a.data = { originalError: D(e) });
                      return (
                        t && (a.stack = U(e, "stack") ? e.stack : void 0), a
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: j.rpc.internal };
                        if (ex(e)) {
                          let n = e.errorMessage,
                            r =
                              null != (t = e.errorCode)
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? j.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", h),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            eC(),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null == (e = this.signer) ? void 0 : e.cleanup()),
            (this.signer = null),
            eA.clearAll(),
            e3.clear(),
            this.emit(
              "disconnect",
              R.provider.disconnected("User initiated disconnection")
            );
        }
        async requestSignerSelection(e) {
          eT();
          let t = await os({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
          return ej(t), t;
        }
        initSigner(e) {
          let {
            signerType: t,
            metadata: n,
            communicator: r,
            callback: a,
          } = {
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          };
          switch (t) {
            case "scw":
              return new sk({ metadata: n, callback: a, communicator: r });
            case "walletlink":
              return new on({ metadata: n, callback: a });
          }
        }
      }
      let ol = { options: "all" };
      function od(e) {
        let t = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(ol, null != (n = e.preference) ? n : {}),
          paymasterUrls: e.paymasterUrls,
        };
        (null == (r = e.subAccounts) ? void 0 : r.toOwnerAccount) &&
          Y(e.subAccounts.toOwnerAccount),
          A.subAccountsConfig.set({
            toOwnerAccount:
              null == (a = e.subAccounts) ? void 0 : a.toOwnerAccount,
            enableAutoSubAccounts:
              null == (i = e.subAccounts) ? void 0 : i.enableAutoSubAccounts,
          }),
          A.config.set(t),
          A.persist.rehydrate(),
          J(),
          !1 !== t.preference.telemetry && S();
        var n,
          r,
          a,
          i,
          s = t.preference;
        if (s) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(s.options))
            throw Error(`Invalid options: ${s.options}`);
          if (
            s.attribution &&
            void 0 !== s.attribution.auto &&
            void 0 !== s.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
          if (s.telemetry && "boolean" != typeof s.telemetry)
            throw Error("Telemetry must be a boolean");
        }
        let l = null,
          d = {
            getProvider: () => (
              l ||
                (l = (function (e) {
                  var t;
                  let n = { metadata: e.metadata, preference: e.preference };
                  return null !=
                    (t = (function ({ metadata: e, preference: t }) {
                      var n, r;
                      let { appName: a, appLogoUrl: i, appChainIds: s } = e;
                      if ("smartWalletOnly" !== t.options) {
                        let e = globalThis.coinbaseWalletExtension;
                        if (e)
                          return (
                            null == (n = e.setAppInfo) || n.call(e, a, i, s, t),
                            e
                          );
                      }
                      let o = (function () {
                        var e, t;
                        try {
                          let n = globalThis;
                          return null != (e = n.ethereum)
                            ? e
                            : null == (t = n.top)
                            ? void 0
                            : t.ethereum;
                        } catch (e) {
                          return;
                        }
                      })();
                      if (null == o ? void 0 : o.isCoinbaseBrowser)
                        return (
                          null == (r = o.setAppInfo) || r.call(o, a, i, s, t), o
                        );
                    })(n))
                    ? t
                    : new ou(n);
                })(t)),
              (l.sdk = d),
              l
            ),
            subAccount: {
              async create(e) {
                var t, n;
                return (
                  K(
                    null == (t = A.getState().subAccount) ? void 0 : t.address,
                    Error("subaccount already exists")
                  ),
                  await (null == (n = d.getProvider())
                    ? void 0
                    : n.request({
                        method: "wallet_addSubAccount",
                        params: [{ version: "1", account: e }],
                      }))
                );
              },
              async get() {
                var e, t;
                let n = A.subAccounts.get();
                if (null == n ? void 0 : n.address) return n;
                let r =
                  null ==
                  (t = (
                    await (null == (e = d.getProvider())
                      ? void 0
                      : e.request({
                          method: "wallet_connect",
                          params: [{ version: "1", capabilities: {} }],
                        }))
                  ).accounts[0].capabilities)
                    ? void 0
                    : t.subAccounts;
                return Array.isArray(r) ? r[0] : null;
              },
              async addOwner({ address: e, publicKey: t, chainId: n }) {
                var r, a;
                let i = A.subAccounts.get(),
                  s = A.account.get();
                K(s, Error("account does not exist")),
                  K(
                    null == i ? void 0 : i.address,
                    Error("subaccount does not exist")
                  );
                let l = [];
                if (t) {
                  let [e, n] = (0, o.n)(
                    [{ type: "bytes32" }, { type: "bytes32" }],
                    t
                  );
                  l.push({
                    to: i.address,
                    data: (0, c.p)({
                      abi: C,
                      functionName: "addOwnerPublicKey",
                      args: [e, n],
                    }),
                    value: (0, u.nj)(0),
                  });
                }
                return (
                  e &&
                    l.push({
                      to: i.address,
                      data: (0, c.p)({
                        abi: C,
                        functionName: "addOwnerAddress",
                        args: [e],
                      }),
                      value: (0, u.nj)(0),
                    }),
                  await (null == (r = d.getProvider())
                    ? void 0
                    : r.request({
                        method: "wallet_sendCalls",
                        params: [
                          {
                            calls: l,
                            chainId: (0, u.nj)(n),
                            from: null == (a = s.accounts) ? void 0 : a[0],
                            version: "1",
                          },
                        ],
                      }))
                );
              },
              setToOwnerAccount(e) {
                Y(e), A.subAccountsConfig.set({ toOwnerAccount: e });
              },
            },
          };
        return d;
      }
    },
    88612: (e, t) => {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function r(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      function a(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function i(e, ...t) {
        if (!a(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function s(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(e.outputLen), n(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.output =
          t.exists =
          t.hash =
          t.bytes =
          t.bool =
          t.number =
          t.isBytes =
            void 0),
        (t.number = n),
        (t.bool = r),
        (t.isBytes = a),
        (t.bytes = i),
        (t.hash = s),
        (t.exists = o),
        (t.output = c),
        (t.default = {
          number: n,
          bool: r,
          bytes: i,
          hash: s,
          exists: o,
          output: c,
        });
    },
    91034: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shake256 =
          t.shake128 =
          t.keccak_512 =
          t.keccak_384 =
          t.keccak_256 =
          t.keccak_224 =
          t.sha3_512 =
          t.sha3_384 =
          t.sha3_256 =
          t.sha3_224 =
          t.Keccak =
          t.keccakP =
            void 0);
      let r = n(88612),
        a = n(19039),
        i = n(64582),
        s = [],
        o = [],
        c = [],
        u = BigInt(0),
        l = BigInt(1),
        d = BigInt(2),
        f = BigInt(7),
        p = BigInt(256),
        h = BigInt(113);
      for (let e = 0, t = l, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          s.push(2 * (5 * r + n)),
          o.push((((e + 1) * (e + 2)) / 2) % 64);
        let a = u;
        for (let e = 0; e < 7; e++)
          (t = ((t << l) ^ ((t >> f) * h)) % p) & d &&
            (a ^= l << ((l << BigInt(e)) - l));
        c.push(a);
      }
      let [m, y] = (0, a.split)(c, !0),
        b = (e, t, n) =>
          n > 32 ? (0, a.rotlBH)(e, t, n) : (0, a.rotlSH)(e, t, n),
        g = (e, t, n) =>
          n > 32 ? (0, a.rotlBL)(e, t, n) : (0, a.rotlSL)(e, t, n);
      function w(e, t = 24) {
        let n = new Uint32Array(10);
        for (let r = 24 - t; r < 24; r++) {
          for (let t = 0; t < 10; t++)
            n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
          for (let t = 0; t < 10; t += 2) {
            let r = (t + 8) % 10,
              a = (t + 2) % 10,
              i = n[a],
              s = n[a + 1],
              o = b(i, s, 1) ^ n[r],
              c = g(i, s, 1) ^ n[r + 1];
            for (let n = 0; n < 50; n += 10)
              (e[t + n] ^= o), (e[t + n + 1] ^= c);
          }
          let t = e[2],
            a = e[3];
          for (let n = 0; n < 24; n++) {
            let r = o[n],
              i = b(t, a, r),
              c = g(t, a, r),
              u = s[n];
            (t = e[u]), (a = e[u + 1]), (e[u] = i), (e[u + 1] = c);
          }
          for (let t = 0; t < 50; t += 10) {
            for (let r = 0; r < 10; r++) n[r] = e[t + r];
            for (let r = 0; r < 10; r++)
              e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
          }
          (e[0] ^= m[r]), (e[1] ^= y[r]);
        }
        n.fill(0);
      }
      t.keccakP = w;
      class v extends i.Hash {
        constructor(e, t, n, a = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = a),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.number)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, i.u32)(this.state));
        }
        keccak() {
          i.isLE || (0, i.byteSwap32)(this.state32),
            w(this.state32, this.rounds),
            i.isLE || (0, i.byteSwap32)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.exists)(this);
          let { blockLen: t, state: n } = this,
            a = (e = (0, i.toBytes)(e)).length;
          for (let r = 0; r < a; ) {
            let i = Math.min(t - this.pos, a - r);
            for (let t = 0; t < i; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.exists)(this, !1), (0, r.bytes)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, a = e.length; r < a; ) {
            this.posOut >= n && this.keccak();
            let i = Math.min(n - this.posOut, a - r);
            e.set(t.subarray(this.posOut, this.posOut + i), r),
              (this.posOut += i),
              (r += i);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.number)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.output)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: a,
            enableXOF: i,
          } = this;
          return (
            e || (e = new v(t, n, r, i, a)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = a),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = i),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      t.Keccak = v;
      let _ = (e, t, n) => (0, i.wrapConstructor)(() => new v(t, e, n));
      (t.sha3_224 = _(6, 144, 28)),
        (t.sha3_256 = _(6, 136, 32)),
        (t.sha3_384 = _(6, 104, 48)),
        (t.sha3_512 = _(6, 72, 64)),
        (t.keccak_224 = _(1, 144, 28)),
        (t.keccak_256 = _(1, 136, 32)),
        (t.keccak_384 = _(1, 104, 48)),
        (t.keccak_512 = _(1, 72, 64));
      let x = (e, t, n) =>
        (0, i.wrapXOFConstructorWithOpts)(
          (r = {}) => new v(t, e, void 0 === r.dkLen ? n : r.dkLen, !0)
        );
      (t.shake128 = x(31, 168, 16)), (t.shake256 = x(31, 136, 32));
    },
    96236: (e, t, n) => {
      var r = n(44134).Buffer;
      let { keccak_256: a } = n(91034);
      function i(e) {
        return r.allocUnsafe(e).fill(0);
      }
      function s(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let a = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; a.length < t; ) a.unshift(0);
        return r.from(a);
      }
      function o(e, t, n) {
        let r = i(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(r), r)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(r, t - e.length), r)
          : e.slice(-t);
      }
      function c(e) {
        if (!r.isBuffer(e))
          if (Array.isArray(e)) e = r.from(e);
          else if ("string" == typeof e)
            e = l(e) ? r.from(u(d(e)), "hex") : r.from(e);
          else if ("number" == typeof e)
            e = new r(
              u(
                (function (e) {
                  let t = e.toString(16);
                  return `0x${t}`;
                })(e).slice(2)
              ),
              "hex"
            );
          else if (null == e) e = r.allocUnsafe(0);
          else if ("bigint" == typeof e) e = s(e);
          else if (e.toArray) e = r.from(e.toArray());
          else throw Error("invalid type");
        return e;
      }
      function u(e) {
        return e.length % 2 ? "0" + e : e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function d(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: i,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: d,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return r.from(a(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: s,
        twosFromBigInt: function (e, t) {
          let n;
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
  },
]);

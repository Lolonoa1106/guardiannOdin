(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2546],
  {
    35804: (e, t, a) => {
      "use strict";
      a.d(t, { useConnections: () => s });
      var n = a(34250),
        r = a(97587),
        i = a(12115),
        o = a(53031);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useConfig)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: a } = t;
              return e.subscribe(() => (0, r.W)(e), a, { equalityFn: n.b });
            })(t, { onChange: e }),
          () => (0, r.W)(t),
          () => (0, r.W)(t)
        );
      }
    },
    48292: (e, t, a) => {
      "use strict";
      a.d(t, { useDisconnect: () => s });
      var n = a(5041),
        r = a(37968),
        i = a(53031),
        o = a(35804);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          a = (0, i.useConfig)(e),
          s = {
            mutationFn: (e) => (0, r.Z)(a, e),
            mutationKey: ["disconnect"],
          },
          { mutate: l, mutateAsync: c, ...d } = (0, n.n)({ ...t, ...s });
        return {
          ...d,
          connectors: (0, o.useConnections)({ config: a }).map(
            (e) => e.connector
          ),
          disconnect: l,
          disconnectAsync: c,
        };
      }
    },
    73776: () => {},
    79368: () => {},
    87535: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { ConnectWalletButton: () => c });
      var n = a(95155),
        r = a(66899),
        i = a(2145),
        o = a(48292),
        s = a(14407),
        l = a(12115);
      function c() {
        let [e, t] = (0, l.useState)(!1),
          {
            isMobile: a,
            isDesktop: c,
            isMetaMaskBrowser: d,
          } = (function () {
            let [e, t] = (0, l.useState)({
              isMobile: !1,
              isDesktop: !1,
              isMetaMaskBrowser: !1,
            });
            return (
              (0, l.useEffect)(() => {
                let e = window.navigator.userAgent.toLowerCase(),
                  a =
                    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
                      e
                    );
                t({
                  isMobile: a,
                  isDesktop: !a,
                  isMetaMaskBrowser:
                    e.includes("metamask") ||
                    (void 0 !== window.ethereum && window.ethereum.isMetaMask),
                });
              }, []),
              e
            );
          })(),
          { open: u } = (0, r.o1)(),
          { address: p, isConnected: g } = (0, i.useAccount)(),
          { disconnect: v } = (0, o.useDisconnect)();
        (0, l.useEffect)(() => {
          t(!0);
        }, []);
        let m = (0, l.useCallback)(async () => {
          try {
            console.log("Device info:", {
              isMobile: a,
              isDesktop: c,
              isMetaMaskBrowser: d,
            }),
              await u();
          } catch (e) {
            console.error("Wallet connection error:", e);
          }
        }, [u, a, c, d]);
        if (!e)
          return (0, n.jsx)(s.P.div, {
            className: "relative",
            whileHover: { scale: 1.05 },
            animate: { y: [0, -2, 0] },
            transition: {
              y: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
            },
            children: (0, n.jsxs)("div", {
              className: "relative group",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 animate-pulse transition duration-300",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "relative px-8 py-3 bg-black rounded-xl overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-20 transition duration-300",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "relative font-pretendard font-bold text-lg bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent",
                      children: "Buy $ODIN",
                    }),
                  ],
                }),
              ],
            }),
          });
        if (g && p)
          return (0, n.jsx)(s.P.div, {
            className: "relative",
            whileHover: { scale: 1.05 },
            animate: { y: [0, -2, 0] },
            transition: {
              y: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
            },
            children: (0, n.jsxs)("div", {
              className: "relative group",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 animate-pulse transition duration-300",
                }),
                (0, n.jsxs)("button", {
                    onClick: () => {
                        window.open("https://app.uniswap.org", "_blank")
                      },
                  className:
                    "relative px-8 py-3 bg-black rounded-xl overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition duration-300",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "relative font-pretendard font-bold text-lg bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent group-hover:hidden",
                      children: ""
                        .concat(p.slice(0, 6), "...")
                        .concat(p.slice(-4)),
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "hidden relative font-pretendard font-bold text-lg bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent group-hover:inline",
                      children: "Disconnect",
                    }),
                    (0, n.jsx)(s.P.span, {
                      className: "absolute -top-2 -right-2 text-2xl",
                      animate: { rotate: [0, 360], y: [0, -5, 0] },
                      transition: {
                        rotate: { duration: 3, repeat: 1 / 0, ease: "linear" },
                        y: { duration: 1, repeat: 1 / 0, ease: "easeInOut" },
                      },
                      children: "\uD83E\uDD77",
                    }),
                  ],
                }),
              ],
            }),
          });
        return (0, n.jsx)(s.P.div, {
          className: "relative",
          whileHover: { scale: 1.05 },
          animate: { y: [0, -2, 0] },
          transition: { y: { duration: 2, repeat: 1 / 0, ease: "easeInOut" } },
          children: (0, n.jsxs)("div", {
            className: "relative group",
            children: [
              (0, n.jsx)("div", {
                className:
                  "absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 animate-pulse transition duration-300",
              }),
              (0, n.jsxs)("button", {
                onClick: () => {
                    window.open("https://app.uniswap.org", "_blank")
                  },
                className:
                  "relative px-8 py-3 bg-black rounded-xl overflow-hidden",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-20 transition duration-300",
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "relative font-pretendard font-bold text-lg bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent",
                    children: "Buy $ODIN",
                  }),
                  (0, n.jsx)(s.P.span, {
                    className: "absolute -top-2 -right-2 text-2xl",
                    animate: { rotate: [0, 360], y: [0, -5, 0] },
                    transition: {
                      rotate: { duration: 3, repeat: 1 / 0, ease: "linear" },
                      y: { duration: 1, repeat: 1 / 0, ease: "easeInOut" },
                    },
                    children: "\uD83E\uDD77",
                  }),
                  (0, n.jsx)(s.P.span, {
                    className: "absolute -bottom-2 -left-2 text-lg",
                    animate: { rotate: [-360, 0], y: [0, -3, 0] },
                    transition: {
                      rotate: { duration: 4, repeat: 1 / 0, ease: "linear" },
                      y: {
                        duration: 0.8,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    },
                    children: "\uD83E\uDD77",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    99432: () => {},
  },
]);

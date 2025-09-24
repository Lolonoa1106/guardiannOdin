(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1403],
  {
    2322: (t, e, a) => {
      "use strict";
      a.r(e), a.d(e, { RaffleSection: () => h });
      var i = a(95155),
        n = a(12115),
        s = a(14407),
        r = a(24357);
      a(3612);
      var l = a(2145),
        d = a(18224),
        c = a(13244),
        o = a(53412),
        p = a(84661),
        u = a(37120);
      let y = JSON.parse(
          '{"HV":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"participant","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalCount","type":"uint256"}],"name":"ParticipantAdded","type":"event"},{"inputs":[{"internalType":"address","name":"participant","type":"address"}],"name":"checkParticipation","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getParticipant","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getParticipants","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasParticipated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"participants","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalParticipants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}'
        ),
        m = "0x0faD2486B1d395339945e4B3c8B3FCB4013C9762";
      var x = a(61888),
        f = a(66899);
      let h = () => {
        let { address: t, isConnected: e } = (0, l.useAccount)();
        (0, d.useChainId)();
        let { switchChain: a } = (0, x.useSwitchChain)(),
          { open: h } = (0, f.o1)(),
          [b, g] = (0, n.useState)(!1),
          {
            hasParticipated: N,
            isCheckingParticipation: v,
            totalParticipants: w,
            isLoadingCount: j,
            participate: P,
            isParticipating: T,
            isSuccess: C,
            error: k,
            isOnCorrectNetwork: E,
            refetchAll: F,
          } = (function () {
            let { address: t } = (0, l.useAccount)(),
              e = (0, d.useChainId)(),
              {
                data: a,
                isLoading: i,
                refetch: n,
              } = (0, c.useReadContract)({
                address: m,
                abi: y.HV,
                functionName: "hasParticipated",
                args: t ? [t] : void 0,
                chainId: u.N.id,
              }),
              {
                data: s,
                isLoading: r,
                refetch: x,
              } = (0, c.useReadContract)({
                address: m,
                abi: y.HV,
                functionName: "totalParticipants",
                chainId: u.N.id,
              }),
              { data: f, isLoading: h } = (0, c.useReadContract)({
                address: m,
                abi: y.HV,
                functionName: "getParticipants",
                chainId: u.N.id,
              }),
              {
                writeContract: b,
                data: g,
                isPending: N,
                error: v,
              } = (0, o.useWriteContract)(),
              { isSuccess: w } = (0, p.useWaitForTransactionReceipt)({
                hash: g,
              }),
              j = async () => {
                if (!t) throw Error("Please connect your wallet first");
                if (e !== u.N.id) throw Error("Please switch to BSC network");
                await b({
                  address: m,
                  abi: y.HV,
                  functionName: "tokenomics",
                  chainId: u.N.id,
                });
              },
              P = async () => {
                await Promise.all([n(), x()]);
              };
            return {
              hasParticipated: !!a,
              isCheckingParticipation: i,
              totalParticipants: Number(s || 0),
              isLoadingCount: r,
              participants: f || [],
              isLoadingParticipants: h,
              participate: j,
              isParticipating: N,
              isSuccess: w,
              error: v,
              isOnCorrectNetwork: e === u.N.id,
              refetchAll: P,
            };
          })();
        (0, n.useEffect)(() => {
          C && (g(!0), F(), setTimeout(() => g(!1), 5e3));
        }, [C, F]);
        let R = async () => {
          try {
            if (!e) return void (await h());
            if (!E) return void (await a({ chainId: u.N.id }));
            await P();
          } catch (t) {
            console.error("Error participating:", t);
          }
        };
        return (0, i.jsx)(r.wn, {
          id: "tokenomics",
          className:
            "py-20 bg-gradient-to-b from-black via-orange-950/20 to-black",
          children: (0, i.jsx)(r.mc, {
            children: (0, i.jsx)(r._A, {
              children: (0, i.jsxs)("div", {
                className: "text-center max-w-4xl mx-auto",
                children: [
                  (0, i.jsxs)(s.P.div, {
                    initial: { y: 20, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.6 },
                    children: [
                      (0, i.jsx)("h2", {
                        className:
                          "text-5xl md:text-7xl font-bold font-bebas mb-6",
                        children: (0, i.jsx)("span", {
                          className:
                            "bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent",
                          children: "TOKENOMICS",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(s.P.div, {
                    initial: { scale: 0.8, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className: "mb-12",
                    children: (0, i.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-600/50",
                          children: [
                            (0, i.jsx)("span", {
                              className: "relative flex h-3 w-3",
                              children: (0, i.jsx)("span", {
                                className:
                                  "relative inline-flex rounded-full h-3 w-3 bg-gray-500",
                              }),
                            }),
                            (0, i.jsx)("p", {
                              className: "text-lg font-bold text-gray-400",
                              children: "Total Supply: 1B",
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.P.p, {
                          animate: { opacity: [0.7, 1, 0.7] },
                          transition: { duration: 2, repeat: 1 / 0 },
                          className:
                            "text-2xl md:text-3xl font-bold text-white",
                          children: "",
                        }),
                        (0, i.jsxs)("div", {
                            className:
                              "inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-600/50",
                            children: [
                              (0, i.jsx)("span", {
                                className: "relative flex h-3 w-3",
                                children: (0, i.jsx)("span", {
                                  className:
                                    "relative inline-flex rounded-full h-3 w-3 bg-gray-500",
                                }),
                              }),
                              (0, i.jsx)("p", {
                                className: "text-lg font-bold text-gray-400",
                                children: "LP: 100% Locked",
                              }),
                        ],
                        }),
                        (0, i.jsx)(s.P.p, {
                        animate: { opacity: [0.7, 1, 0.7] },
                        transition: { duration: 2, repeat: 1 / 0 },
                        className:
                            "text-2xl md:text-3xl font-bold text-white",
                        children: "",
                        }),
                        (0, i.jsxs)("div", {
                            className:
                              "inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-600/50",
                            children: [
                              (0, i.jsx)("span", {
                                className: "relative flex h-3 w-3",
                                children: (0, i.jsx)("span", {
                                  className:
                                    "relative inline-flex rounded-full h-3 w-3 bg-gray-500",
                                }),
                              }),
                              (0, i.jsx)("p", {
                                className: "text-lg font-bold text-gray-400",
                                children: "Ownership: Renounced",
                              }),
                        ],
                        }),
                        (0, i.jsx)(s.P.p, {
                        animate: { opacity: [0.7, 1, 0.7] },
                        transition: { duration: 2, repeat: 1 / 0 },
                        className:
                            "text-2xl md:text-3xl font-bold text-white",
                        children: "",
                        }),
                        (0, i.jsxs)("div", {
                            className:
                              "inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-600/50",
                            children: [
                              (0, i.jsx)("span", {
                                className: "relative flex h-3 w-3",
                                children: (0, i.jsx)("span", {
                                  className:
                                    "relative inline-flex rounded-full h-3 w-3 bg-gray-500",
                                }),
                              }),
                              (0, i.jsx)("p", {
                                className: "text-lg font-bold text-gray-400",
                                children: "Tax: 0% Buy/Sell Tax",
                              }),
                        ],
                        }),
                      ],
                    }),
                  }),
                //   (0, i.jsx)(s.P.div, {
                //     initial: { y: 20, opacity: 0 },
                //     animate: { y: 0, opacity: 1 },
                //     transition: { duration: 0.6, delay: 0.4 },
                //     children: (0, i.jsxs)(s.P.button, {
                //       onClick: R,
                //       disabled: !0,
                //       whileHover: {},
                //       whileTap: {},
                //       className:
                //         "\n                  relative px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300\n                  ".concat(
                //           "bg-gray-800 text-gray-500 cursor-not-allowed",
                //           "\n                "
                //         ),
                //       children: [
                //         (0, i.jsx)("span", {
                //           className: "relative z-10",
                //           children: "CA: 0xTBA",
                //         }),
                //         !1,
                //       ],
                //     }),
                //   }),
                ],
              }),
            }),
          }),
        });
      };
    },
    73776: () => {},
    79368: () => {},
    99432: () => {},
  },
]);

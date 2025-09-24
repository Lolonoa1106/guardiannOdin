(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        19324: () => {},
        68857: (e, n, i) => {
            Promise.resolve().then(i.t.bind(i, 31193, 23)), Promise.resolve().then(i.t.bind(i, 94918, 23)), Promise.resolve().then(i.t.bind(i, 41069, 23)), Promise.resolve().then(i.t.bind(i, 27860, 23)), Promise.resolve().then(i.t.bind(i, 19324, 23)), Promise.resolve().then(i.bind(i, 63401)), Promise.resolve().then(i.bind(i, 2145)), Promise.resolve().then(i.bind(i, 87332)), Promise.resolve().then(i.bind(i, 74596)), Promise.resolve().then(i.bind(i, 65840)), Promise.resolve().then(i.bind(i, 37725)), Promise.resolve().then(i.bind(i, 25235)), Promise.resolve().then(i.bind(i, 51084)), Promise.resolve().then(i.bind(i, 81328)), Promise.resolve().then(i.bind(i, 83908)), Promise.resolve().then(i.bind(i, 82588)), Promise.resolve().then(i.bind(i, 18224)), Promise.resolve().then(i.bind(i, 87651)), Promise.resolve().then(i.bind(i, 94739)), Promise.resolve().then(i.bind(i, 53031)), Promise.resolve().then(i.bind(i, 82175)), Promise.resolve().then(i.bind(i, 35804)), Promise.resolve().then(i.bind(i, 48129)), Promise.resolve().then(i.bind(i, 12715)), Promise.resolve().then(i.bind(i, 75933)), Promise.resolve().then(i.bind(i, 48292)), Promise.resolve().then(i.bind(i, 88059)), Promise.resolve().then(i.bind(i, 96968)), Promise.resolve().then(i.bind(i, 5275)), Promise.resolve().then(i.bind(i, 42026)), Promise.resolve().then(i.bind(i, 84881)), Promise.resolve().then(i.bind(i, 41897)), Promise.resolve().then(i.bind(i, 16752)), Promise.resolve().then(i.bind(i, 46176)), Promise.resolve().then(i.bind(i, 91287)), Promise.resolve().then(i.bind(i, 43809)), Promise.resolve().then(i.bind(i, 47990)), Promise.resolve().then(i.bind(i, 75613)), Promise.resolve().then(i.bind(i, 80364)), Promise.resolve().then(i.bind(i, 45494)), Promise.resolve().then(i.bind(i, 13244)), Promise.resolve().then(i.bind(i, 95052)), Promise.resolve().then(i.bind(i, 58389)), Promise.resolve().then(i.bind(i, 25089)), Promise.resolve().then(i.bind(i, 24340)), Promise.resolve().then(i.bind(i, 43600)), Promise.resolve().then(i.bind(i, 17410)), Promise.resolve().then(i.bind(i, 83902)), Promise.resolve().then(i.bind(i, 30513)), Promise.resolve().then(i.bind(i, 28118)), Promise.resolve().then(i.bind(i, 90594)), Promise.resolve().then(i.bind(i, 61888)), Promise.resolve().then(i.bind(i, 93212)), Promise.resolve().then(i.bind(i, 55389)), Promise.resolve().then(i.bind(i, 92934)), Promise.resolve().then(i.bind(i, 91035)), Promise.resolve().then(i.bind(i, 6790)), Promise.resolve().then(i.bind(i, 70272)), Promise.resolve().then(i.bind(i, 69493)), Promise.resolve().then(i.bind(i, 29646)), Promise.resolve().then(i.bind(i, 84661)), Promise.resolve().then(i.bind(i, 78161)), Promise.resolve().then(i.bind(i, 47692)), Promise.resolve().then(i.bind(i, 57377)), Promise.resolve().then(i.bind(i, 94329)), Promise.resolve().then(i.bind(i, 62854)), Promise.resolve().then(i.bind(i, 59450)), Promise.resolve().then(i.bind(i, 53412)), Promise.resolve().then(i.bind(i, 55259)), Promise.resolve().then(i.bind(i, 81107))
        },
        73776: () => {},
        79368: () => {},
        81107: (e, n, i) => {
            "use strict";
            i.d(n, {
                Web3Provider: () => p
            });
            var r = i(95155),
                s = i(66899),
                o = i(52775),
                t = i(26715),
                l = i(63401),
                d = i(50981),
                b = i(37200),
                m = i(65730),
                h = i(56886),
                P = i(14903),
                v = i(37120);
            let a = "f09bb8f86d032d20575496f1d99d37a1",
                c = [b.r, m.n, h.D, P.R, v.N],
                f = (0, d.Bn)({
                    chains: c,
                    projectId: a,
                    metadata: {
                        name: "GUARDIAN ODIN",
                        description: "The revolutionary Web3 online basketball game",
                        url: "/",
                        icons: ["/icon.png"]
                    },
                    enableWalletConnect: !0,
                    enableInjected: !0,
                    enableEIP6963: !0,
                    enableCoinbase: !0
                }),
                w = new o.E({
                    defaultOptions: {
                        queries: {
                            retry: 2,
                            refetchOnWindowFocus: !1
                        }
                    }
                }),
                u = null; {
                let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
                (0, s.Pg)({
                    wagmiConfig: f,
                    projectId: a,
                    themeMode: "dark",
                    themeVariables: {
                        "--w3m-font-family": "Inter, sans-serif",
                        "--w3m-accent": "#00ff88",
                        "--w3m-color-mix": "#000000",
                        "--w3m-color-mix-strength": 40,
                        "--w3m-border-radius-master": "8px"
                    },
                    enableAnalytics: !1,
                    enableOnramp: !1,
                    defaultChain: v.N,
                    featuredWalletIds: ["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0"],
                    ...e && {
                        modalZIndex: 99999
                    }
                })
            }

            function p(e) {
                let {
                    children: n,
                    initialState: i
                } = e;
                return (0, r.jsx)(l.WagmiProvider, {
                    config: f,
                    initialState: i,
                    children: (0, r.jsx)(t.Ht, {
                        client: w,
                        children: n
                    })
                })
            }
        },
        99432: () => {}
    },
    e => {
        var n = n => e(e.s = n);
        e.O(0, [9297, 4946, 6183, 2228, 5325, 3665, 2145, 2247, 8441, 1684, 7358], () => n(68857)), _N_E = e.O()
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        3612: (e, t, a) => {
            "use strict";
            a.d(t, {
                M: () => l
            });
            var i = a(12115);
            let l = () => {
                let [e, t] = (0, i.useState)(0), [a, l] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    let e, a = () => {
                        t(window.scrollY), l(!0), clearTimeout(e), e = setTimeout(() => {
                            l(!1)
                        }, 150)
                    };
                    return window.addEventListener("scroll", a), () => {
                        window.removeEventListener("scroll", a), clearTimeout(e)
                    }
                }, []), {
                    scrollPosition: e,
                    isScrolling: a
                }
            }
        },
        8212: (e, t, a) => {
            "use strict";
            a.d(t, {
                Timeline: () => o
            });
            var i = a(95155),
                l = a(62720),
                r = a(37602),
                s = a(14407),
                n = a(12115);
            let o = e => {
                let {
                    items: t
                } = e, a = (0, n.useRef)(null), {
                    scrollYProgress: o
                } = (0, l.L)({
                    target: a,
                    offset: ["start center", "end center"]
                }), c = (0, r.z)(o, {
                    stiffness: 100,
                    damping: 30,
                    restDelta: .001
                });
                return (0, i.jsxs)("div", {
                    ref: a,
                    className: "absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden lg:block",
                    children: [(0, i.jsx)("div", {
                        className: "absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2"
                    }), (0, i.jsx)(s.P.div, {
                        className: "absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-neon-green to-neon-blue -translate-x-1/2 origin-top",
                        style: {
                            height: "100%",
                            scaleY: c
                        }
                    }), [...Array(t)].map((e, a) => (0, i.jsx)(s.P.div, {
                        className: "absolute left-1/2 -translate-x-1/2",
                        style: {
                            top: "".concat(a / (t - 1) * 100, "%")
                        },
                        children: (0, i.jsxs)(s.P.div, {
                            initial: {
                                scale: 0
                            },
                            whileInView: {
                                scale: 1
                            },
                            transition: {
                                duration: .5,
                                delay: .1 * a
                            },
                            viewport: {
                                once: !0
                            },
                            className: "relative",
                            children: [(0, i.jsx)("div", {
                                className: "w-4 h-4 bg-black border-2 border-gray-800 rounded-full"
                            }), (0, i.jsx)(s.P.div, {
                                className: "absolute inset-0 w-4 h-4 bg-neon-green rounded-full",
                                initial: {
                                    scale: 0
                                },
                                whileInView: {
                                    scale: [0, 1.5, 1]
                                },
                                transition: {
                                    duration: .5,
                                    delay: .1 * a + .2
                                },
                                viewport: {
                                    once: !0
                                }
                            })]
                        })
                    }, a))]
                })
            }
        },
        16523: (e, t, a) => {
            "use strict";
            a.d(t, {
                TypeWriter: () => s
            });
            var i = a(95155),
                l = a(12115),
                r = a(14407);
            let s = e => {
                let {
                    words: t,
                    className: a = "",
                    typingSpeed: s = 100,
                    deletingSpeed: n = 50,
                    pauseDuration: o = 2e3
                } = e, [c, d] = (0, l.useState)(0), [x, m] = (0, l.useState)(""), [h, p] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    let e = t[c],
                        a = setTimeout(() => {
                            h ? x.length > 0 ? m(x.slice(0, -1)) : (p(!1), d(e => (e + 1) % t.length)) : x.length < e.length ? m(e.slice(0, x.length + 1)) : setTimeout(() => p(!0), o)
                        }, h ? n : s);
                    return () => clearTimeout(a)
                }, [x, c, h, t, s, n, o]), (0, i.jsxs)("span", {
                    className: a,
                    children: [x, (0, i.jsx)(r.P.span, {
                        animate: {
                            opacity: [1, 0]
                        },
                        transition: {
                            duration: .5,
                            repeat: 1 / 0,
                            repeatType: "reverse"
                        },
                        className: "inline-block w-[3px] h-[1.2em] bg-neon-green ml-1"
                    })]
                })
            }
        },
        16589: (e, t, a) => {
            "use strict";
            a.d(t, {
                StorySection: () => b
            });
            var i = a(95155),
                l = a(14407),
                r = a(66766),
                s = a(84148),
                n = a(36244),
                o = a(85370),
                c = a(19058),
                d = a(8212);
            let x = [{
                id: "chapter1",
                title: "Foundation",
                description: "We introduce ODIN’s lore as one of the ASTER Guardians, deploy the ODIN token smart contract on Binance Smart Chain, launch the official website and socials.",
                image: "/1st.webp",
                order: 1,
                link: "https://x.com/status/1939587419176898598"
            }, {
                id: "chapter2",
                title: "Growth",
                description: "We list ODIN on BSC DEXs like PancakeSwap, apply to CoinGecko and CoinMarketCap, release ODIN-themed NFT art drops, host AMAs and influencer campaigns.",
                image: "/2nd.webp",
                order: 2,
                link: "https://x.com/status/1939655091096781280"
            }, {
                id: "chapter3",
                title: "Ecosystem",
                description: "We expand the ASTER Guardians universe with more tokens and characters, build cross-chain bridges from BSC to Ethereum and Solana, launch DAO governance, scale up marketing, and pursue major CEX listings.",
                image: "/story_3.webp",
                order: 3
            }];
            var m = a(62720),
                h = a(58829),
                p = a(12115);
            let u = e => {
                    let {
                        children: t,
                        speed: a = .5
                    } = e, r = (0, p.useRef)(null), {
                        scrollYProgress: s
                    } = (0, m.L)({
                        target: r,
                        offset: ["start end", "end start"]
                    }), n = (0, h.G)(s, [0, 1], [-50 * a, 50 * a]);
                    return (0, i.jsx)("div", {
                        ref: r,
                        className: "relative overflow-hidden",
                        children: (0, i.jsx)(l.P.div, {
                            style: {
                                y: n
                            },
                            className: "relative",
                            children: t
                        })
                    })
                },
                b = () => (0, i.jsx)(n.w, {
                    id: "roadmap",
                    padding: "xl",
                    className: "relative",
                    children: (0, i.jsxs)(s.m, {
                        children: [(0, i.jsx)(o._, {
                            children: (0, i.jsxs)("div", {
                                className: "text-center mb-16",
                                children: [
                                //     (0, i.jsx)(l.P.div, {
                                //     initial: {
                                //         scale: 0
                                //     },
                                //     whileInView: {
                                //         scale: 1
                                //     },
                                //     transition: {
                                //         duration: .5
                                //     },
                                //     viewport: {
                                //         once: !0
                                //     },
                                //     className: "inline-block px-4 py-2 bg-black rounded-full mb-4",
                                //     children: (0, i.jsx)("span", {
                                //         className: "text-white text-sm font-heading uppercase tracking-wider",
                                //         children: "Roadmap"
                                //     })
                                // })
                                , (0, i.jsx)("h2", {
                                    className: "text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-black",
                                    children: "Odin Roadmap"
                                }),
                                //  (0, i.jsxs)("p", {
                                //     className: "text-sm md:text-xl text-black/70 max-w-2xl mx-auto",
                                //     children: ["Born from vision. Fueled by the crowd.", (0, i.jsx)("br", {}), "We're not just building Web3 — we're leveling it up."]
                                // })
                            ]
                            })
                        }), (0, i.jsx)(l.P.div, {
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: 1.2,
                                ease: "easeOut"
                            },
                            className: "mb-16",
                            children: (0, i.jsx)(u, {
                                speed: .3,
                                children: (0, i.jsxs)("div", {
                                    className: "relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl",
                                    children: [(0, i.jsx)(r.default, {
                                        src: "/story.webp",
                                        alt: "Our Story",
                                        fill: !0,
                                        className: "object-cover",
                                        quality: 90
                                    }), (0, i.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                    }), (0, i.jsxs)(l.P.div, {
                                        className: "absolute bottom-8 left-8 right-8 text-white",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            delay: .5,
                                            duration: .8
                                        },
                                        children: [(0, i.jsx)("h3", {
                                            className: "text-2xl md:text-3xl font-bold mb-2",
                                            children: "Our Journey Begins"
                                        }), 
                                        // (0, i.jsx)("p", {
                                        //     className: "text-lg opacity-90",
                                        //     children: "From vision to reality, building the future together"
                                        // })
                                    ]
                                    })]
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: "relative",
                            children: [(0, i.jsx)(d.Timeline, {
                                items: x.length
                            }), (0, i.jsx)("div", {
                                className: "space-y-32",
                                children: x.map((e, t) => (0, i.jsx)(c.StoryCard, {
                                    story: e,
                                    index: t
                                }, e.id))
                            })]
                        }), (0, i.jsxs)(l.P.div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            viewport: {
                                once: !0
                            },
                            className: "text-center mt-24",
                            children: [(0, i.jsx)("h3", {
                                className: "text-2xl md:text-3xl font-display text-black mb-4",
                                children: "Ready to join Us?"
                            }), 
                            // (0, i.jsx)("p", {
                            //     className: "text-black/70 mb-8",
                            //     children: "Benchwarmers don't make history. Step up. Join the team. Shape the game."
                            // }), 
                            (0, i.jsx)(l.P.a, {
                                href: "https://app.uniswap.org",
                                target:"_blank",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: .95
                                },
                                className: "inline-block px-8 py-4 bg-black text-white font-heading uppercase tracking-wider border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300",
                                children: "Join Our Community"
                            })]
                        })]
                    })
                })
        },
        18317: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                Footer: () => c
            });
            var i = a(95155),
                l = a(66766),
                r = a(14407),
                s = a(29911),
                n = a(84148),
                o = a(23312);
            let c = () => {
                new Date().getFullYear();
                let e = [{
                    icon: s.feZ,
                    href: o.j.links.twitter,
                    label: "X (Twitter)"
                }, {
                    icon: s.hFS,
                    href: o.j.links.telegram,
                    label: "Telegram"
                }];
                return (0, i.jsxs)("footer", {
                    id: "footer",
                    className: "bg-orange-500 border-t border-orange-600",
                    children: [(0, i.jsxs)(r.P.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .8
                        },
                        className: "relative h-64 md:h-80 overflow-hidden",
                        children: [(0, i.jsx)(l.default, {
                            src: "/footer.webp",
                            alt: "Join Our Community",
                            fill: !0,
                            className: "object-cover",
                            quality: 90
                        }), (0, i.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-orange-500 via-orange-500/80 to-transparent"
                        }), (0, i.jsx)(r.P.div, {
                            className: "absolute inset-0 flex items-center justify-center text-center",
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .3,
                                duration: .8
                            },
                            children: (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                    children: "Ready to Join $ODIN?"
                                }), (0, i.jsx)("p", {
                                    className: "text-lg text-white/90 mb-6",
                                    children: "Be part of something bigger. Be part of $ODIN."
                                })]
                            })
                        })]
                    }), (0, i.jsx)(n.m, {
                        children: (0, i.jsx)("div", {
                            className: "py-16",
                            children: (0, i.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex items-center justify-center gap-8 mt-12 mb-8",
                                    children: [(0, i.jsx)(r.P.div, {
                                        className: "h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 max-w-xs",
                                        initial: {
                                            scaleX: 0
                                        },
                                        whileInView: {
                                            scaleX: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            duration: .8,
                                            delay: .4
                                        }
                                    }), (0, i.jsx)(r.P.div, {
                                        initial: {
                                            opacity: 0,
                                            rotate: 0
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            rotate: 360
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: .5
                                        },
                                        className: "w-2 h-2 bg-white/50 rounded-full"
                                    }), (0, i.jsx)(r.P.div, {
                                        className: "h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 max-w-xs",
                                        initial: {
                                            scaleX: 0
                                        },
                                        whileInView: {
                                            scaleX: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            duration: .8,
                                            delay: .4
                                        }
                                    })]
                                }), (0, i.jsx)(r.P.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        duration: .6,
                                        delay: .2
                                    },
                                    className: "flex justify-center gap-4 mb-8",
                                    children: e.map((e, t) => (0, i.jsxs)(r.P.a, {
                                        href: e.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "group relative",
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            duration: .5,
                                            delay: .3 + .1 * t
                                        },
                                        whileHover: {
                                            y: -5
                                        },
                                        children: [(0, i.jsx)("div", {
                                            className: "absolute inset-0 bg-white rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                        }), (0, i.jsx)("div", {
                                            className: "relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300",
                                            children: (0, i.jsx)(e.icon, {
                                                size: 24
                                            })
                                        }), (0, i.jsx)("span", {
                                            className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap",
                                            children: e.label
                                        })]
                                    }, e.label))
                                })]
                            })
                        })
                    })]
                })
            }
        },
        18403: (e, t, a) => {
            "use strict";
            a.d(t, {
                GameEventSection: () => s
            });
            var i = a(95155),
                l = a(66766),
                r = a(14407);
            let s = () => (0, i.jsxs)("section", {
                id: "about",
                className: "relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center py-20",
                children: [(0, i.jsx)("div", {
                    className: "absolute inset-0 opacity-10",
                    children: (0, i.jsx)("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: "repeating-linear-gradient(\n              45deg,\n              #fbdfb0,\n              #fbdfb0 10px,\n              transparent 10px,\n              transparent 20px\n            )"
                        }
                    })
                }), (0, i.jsx)("div", {
                    className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: (0, i.jsxs)(r.P.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0,
                            amount: .3
                        },
                        transition: {
                            duration: .8
                        },
                        className: "text-center space-y-8",
                        children: [(0, i.jsx)(r.P.h2, {
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .6,
                                delay: .2
                            },
                            className: "font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#fbdfb0] uppercase tracking-tight",
                            style: {
                                fontFamily: "Graduate, cursive",
                                textShadow: "3px 3px 0 #fff, 6px 6px 0 #000"
                            },
                            children: "ODIN is one of the Aster Guardians."
                        }), (0, i.jsx)(r.P.div, {
                            initial: {
                                opacity: 0,
                                scale: .95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .8,
                                delay: .3
                            },
                            className: "relative w-full max-w-4xl mx-auto",
                            children: (0, i.jsxs)("div", {
                                className: "relative aspect-[16/10] w-full rounded-lg overflow-hidden border-4 border-[#fbdfb0] shadow-2xl",
                                children: [(0, i.jsx)(l.default, {
                                    src: "/fsc_event.webp",
                                    alt: "Basketball Court with Players",
                                    fill: !0,
                                    className: "object-cover",
                                    priority: !0
                                }), (0, i.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                })]
                            })
                        }), (0, i.jsxs)(r.P.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .6,
                                delay: .4
                            },
                            className: "space-y-6",
                            children: [(0, i.jsx)("p", {
                                className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white",
                                children: "ODIN is one of the two Aster Guardians, "
                            }), (0, i.jsx)("p", {
                                className: "text-xl sm:text-2xl md:text-3xl text-[#fbdfb0] font-semibold",
                                children: "standing alongside Dust in the guardian duo."
                            }), (0, i.jsx)(r.P.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .9
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .6,
                                    delay: .5
                                },
                                className: "pt-8",
                                children: (0, i.jsxs)(r.P.button, {
                                    onClick: () => {
                                        window.open("https://x.com", "_blank");
                                    },
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: "relative group",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-[#fbdfb0] via-yellow-500 to-[#fbdfb0] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"
                                    }), (0, i.jsx)("div", {
                                        className: "relative bg-black border-4 border-[#fbdfb0] hover:bg-[#fbdfb0] hover:border-white px-12 py-5 rounded-full transition-all duration-300",
                                        children: (0, i.jsx)("span", {
                                            className: "font-black text-2xl sm:text-3xl uppercase text-[#fbdfb0] group-hover:text-black tracking-wider",
                                            style: {
                                                fontFamily: "Graduate, cursive"
                                            },
                                            children: "Join Us",
                                            href:"https://x.com"
                                        })
                                    })]
                                })
                            }), 
                            // (0, i.jsx)(r.P.p, {
                            //     initial: {
                            //         opacity: 0
                            //     },
                            //     whileInView: {
                            //         opacity: 1
                            //     },
                            //     viewport: {
                            //         once: !0
                            //     },
                            //     transition: {
                            //         duration: .6,
                            //         delay: .6
                            //     },
                            //     className: "text-base sm:text-lg md:text-xl text-gray-300 font-medium pt-4",
                            //     children: "Make Sure Checking Credentials Before Playing the Game"
                            // })
                        ]
                        })]
                    })
                }), (0, i.jsx)("div", {
                    className: "absolute top-10 left-10 w-20 h-20 border-4 border-[#fbdfb0] rotate-45 opacity-20 animate-spin-slow"
                }), (0, i.jsx)("div", {
                    className: "absolute bottom-10 right-10 w-32 h-32 border-4 border-yellow-500 rotate-12 opacity-20 animate-spin-slow"
                })]
            })
        },
        19058: (e, t, a) => {
            "use strict";
            a.d(t, {
                StoryCard: () => c
            });
            var i = a(95155),
                l = a(62720),
                r = a(58829),
                s = a(14407),
                n = a(12115),
                o = a(66766);
            let c = e => {
                let {
                    story: t,
                    index: a
                } = e, c = (0, n.useRef)(null), {
                    scrollYProgress: d
                } = (0, l.L)({
                    target: c,
                    offset: ["start end", "end start"]
                }), x = (0, r.G)(d, [0, .3, .7, 1], [0, 1, 1, 0]), m = (0, r.G)(d, [0, .3, .7, 1], [100, 0, 0, -100]), h = (0, r.G)(d, [0, .3, .7, 1], [.8, 1, 1, .8]), p = (0, r.G)(d, [0, .5, 1], [5, 0, -5]), u = a % 2 == 0;
                return (0, i.jsxs)(s.P.div, {
                    ref: c,
                    style: {
                        opacity: x,
                        y: m,
                        scale: h
                    },
                    className: "flex flex-col ".concat(u ? "lg:flex-row" : "lg:flex-row-reverse", " gap-8 items-center"),
                    children: [(0, i.jsx)(s.P.div, {
                        style: {
                            rotate: p
                        },
                        className: "flex-1 w-full",
                        children: (0, i.jsx)("div", {
                            className: "relative aspect-video rounded-2xl overflow-hidden group shadow-xl",
                            children: "Coming Soon" === t.title ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "absolute inset-0 bg-black z-10"
                                }), (0, i.jsx)("div", {
                                    className: "w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center",
                                    children: (0, i.jsx)(s.P.div, {
                                        animate: {
                                            rotate: 360
                                        },
                                        transition: {
                                            duration: 8,
                                            repeat: 1 / 0,
                                            ease: "linear"
                                        },
                                        className: "text-5xl font-display text-white/20",
                                        children: "?"
                                    })
                                })]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"
                                }), t.image && (0, i.jsx)(o.default, {
                                    src: t.image,
                                    alt: t.title,
                                    width: 800,
                                    height: 450,
                                    className: "w-full h-full object-cover",
                                    quality: 90
                                }), (0, i.jsx)(s.P.div, {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    style: {
                                        background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 0, 0, 0.1) 0%, transparent 50%)"
                                    }
                                })]
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "flex-1 w-full",
                        children: (0, i.jsxs)(s.P.div, {
                            initial: {
                                opacity: 0,
                                x: u ? -50 : 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .2
                            },
                            viewport: {
                                once: !0
                            },
                            children: [(0, i.jsxs)("div", {
                                className: "text-white text-xs font-heading uppercase tracking-wider mb-4 bg-black inline-block px-3 py-1",
                                children: ["Chapter ", t.order]
                            }), (0, i.jsx)("h3", {
                                className: "text-3xl md:text-4xl lg:text-5xl font-display text-black mb-6",
                                children: t.title
                            }), (0, i.jsx)("p", {
                                className: "text-sm md:text-lg text-black/80 leading-relaxed mb-6",
                                children: t.description
                            }), "Coming Soon" !== t.title && t.link && (0, i.jsx)("a", {
                                href: t.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, i.jsxs)(s.P.div, {
                                    whileHover: {
                                        x: 10
                                    },
                                    // className: "inline-flex items-center gap-2 text-black cursor-pointer group border-b-2 border-black pb-1 hover:border-black/60 transition-all",
                                    // children: [(0, i.jsx)("span", {
                                    //     className: "font-heading uppercase tracking-wider text-sm",
                                    //     children: "Learn More"
                                    // }), (0, i.jsx)("span", {
                                    //     className: "group-hover:translate-x-1 transition-transform",
                                    //     children: "→"
                                    // })]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        19835: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 41582)), Promise.resolve().then(a.bind(a, 99240)), Promise.resolve().then(a.bind(a, 18403)), Promise.resolve().then(a.bind(a, 80262)), Promise.resolve().then(a.bind(a, 37187)), Promise.resolve().then(a.bind(a, 16523)), Promise.resolve().then(a.bind(a, 18317)), Promise.resolve().then(a.bind(a, 95435)), Promise.resolve().then(a.bind(a, 28048)), Promise.resolve().then(a.bind(a, 81069)), Promise.resolve().then(a.bind(a, 71587)), Promise.resolve().then(a.bind(a, 98428)), Promise.resolve().then(a.bind(a, 19058)), Promise.resolve().then(a.bind(a, 16589)), Promise.resolve().then(a.bind(a, 8212)), Promise.resolve().then(a.bind(a, 57654)), Promise.resolve().then(a.bind(a, 95270)), Promise.resolve().then(a.bind(a, 69332)), Promise.resolve().then(a.bind(a, 49473)), Promise.resolve().then(a.bind(a, 39465)), Promise.resolve().then(a.t.bind(a, 69243, 23))
        },
        23312: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => l,
                j: () => i
            });
            let i = {
                    name: "Free Style",
                    description: "A modern, trendy website with dark theme and Web3 community feel",
                    url: "https://freestyle.example.com",
                    ogImage: "/og-image.png",
                    links: {
                        twitter: "https://x.com",
                        telegram: "https://t.me",
                        github: "#",
                        discord: "#"
                    }
                },
                l = [{
                    id: "home",
                    label: "Odin",
                    href: "#home",
                    emphasized: !0
                }, {
                    id: "about",
                    label: "About",
                    href: "#about"
                }, {
                    id: "tokenomics",
                    label: "Tokenomics",
                    href: "#tokenomics"
                }, {
                    id: "roadmap",
                    label: "Roadmap",
                    href: "#roadmap"
                }, {
                    id: "blog",
                    label: "Blog",
                    href: "#blog"
                }, {
                    id: "partners",
                    label: "Partners",
                    href: "#partners"
                }, {
                    id: "footer",
                    label: "Community",
                    href: "#footer"
                }]
        },
        24357: (e, t, a) => {
            "use strict";
            a.d(t, {
                mc: () => i.m,
                _A: () => r._,
                wn: () => l.w
            }), a(95155), a(59293);
            var i = a(84148),
                l = a(36244);
            a(71587), a(41582);
            var r = a(85370);
            a(12115), a(95435), a(18317), a(99240)
        },
        28048: (e, t, a) => {
            "use strict";
            a.d(t, {
                RaffleSection: () => l
            });
            var i = a(95155);
            let l = (0, a(55028).default)(() => Promise.all([a.e(4946), a.e(6183), a.e(3665), a.e(1403)]).then(a.bind(a, 2322)).then(e => e.RaffleSection), {
                loadableGenerated: {
                    webpack: () => [2322]
                },
                ssr: !1,
                loading: () => (0, i.jsx)("div", {
                    className: "py-20 bg-gradient-to-b from-black via-orange-950/20 to-black",
                    children: (0, i.jsx)("div", {
                        className: "container mx-auto px-4",
                        children: (0, i.jsxs)("div", {
                            className: "text-center max-w-4xl mx-auto",
                            children: [(0, i.jsx)("h2", {
                                className: "text-5xl md:text-7xl font-bold font-bebas mb-6",
                                children: (0, i.jsx)("span", {
                                    className: "bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent",
                                    children: "TOKENOMICS"
                                })
                            }), (0, i.jsx)("p", {
                                className: "text-xl md:text-2xl text-gray-300 mb-8",
                                children: "Join the exclusive early access raffle for GUARDIAN ODIN!"
                            })]
                        })
                    })
                })
            })
        },
        36244: (e, t, a) => {
            "use strict";
            a.d(t, {
                w: () => s
            });
            var i = a(95155),
                l = a(14407),
                r = a(36748);
            let s = e => {
                let {
                    children: t,
                    padding: a = "lg",
                    background: s = "default",
                    className: n,
                    id: o,
                    ...c
                } = e;
                return (0, i.jsx)(l.P.section, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0,
                        margin: "-100px"
                    },
                    className: (0, r.cn)("relative overflow-hidden", {
                        none: "",
                        sm: "py-8 md:py-12",
                        md: "py-12 md:py-16",
                        lg: "py-16 md:py-24",
                        xl: "py-24 md:py-32"
                    } [a], {
                        default: "",
                        gradient: "bg-gradient-to-b from-black to-dark-gray",
                        radial: "relative before:absolute before:inset-0 before:bg-gradient-radial before:from-neon-green/10 before:to-transparent before:pointer-events-none"
                    } [s], n),
                    id: o,
                    ...c,
                    children: t
                })
            }
        },
        36748: (e, t, a) => {
            "use strict";
            a.d(t, {
                cn: () => i
            });
            let i = function () {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return t.filter(Boolean).join(" ")
            }
        },
        37187: (e, t, a) => {
            "use strict";
            a.d(t, {
                HeroSection: () => d
            });
            var i = a(95155),
                l = a(12115),
                r = a(66766),
                s = a(14407),
                n = a(60760),
                o = a(2145),
                c = a(29911);
            let d = () => {
                let [e, t] = (0, l.useState)(!1), [a, d] = (0, l.useState)(!1), [x, m] = (0, l.useState)(!1), [h, p] = (0, l.useState)(""), [u, b] = (0, l.useState)(!1), [g, f] = (0, l.useState)(!1), [w, v] = (0, l.useState)(!1), [y, j] = (0, l.useState)(null), [N, k] = (0, l.useState)({
                    email: "",
                    emailConfirm: "",
                    username: "",
                    telegram: "",
                    twitter: ""
                }), {
                    isConnected: P,
                    address: S
                } = (0, o.useAccount)();
                (0, l.useEffect)(() => {
                    d(!0)
                }, []);
                let C = async e => {
                    try {
                        console.log("Checking registration for wallet:", e);
                        let t = await fetch("/api/auth/signup?wallet=".concat(e));
                        console.log("Response status:", t.status);
                        let a = await t.json();
                        return console.log("Registration check response:", a), a.exists
                    } catch (e) {
                        return console.error("Error checking registration:", e), !1
                    }
                }, E = async e => {
                    try {
                        let t = await fetch("/api/game/credentials?wallet=".concat(e)),
                            a = await t.json();
                        a.exists && a.credentials ? j(a.credentials) : j(null)
                    } catch (e) {
                        console.error("Error fetching game credentials:", e), j(null)
                    }
                }, T = async () => {
                    if (a)
                        if (P) {
                            if (f(!0), S) {
                                let e = await C(S);
                                b(e), e && await E(S)
                            }
                            f(!1), t(!0)
                        } else {
                            var e;
                            let t = null == (e = document.querySelector('[class*="Connect Wallet"]')) ? void 0 : e.closest("button");
                            t ? t.click() : document.querySelectorAll("button").forEach(e => {
                                var t;
                                (null == (t = e.textContent) ? void 0 : t.includes("Connect Wallet")) && e.click()
                            })
                        }
                };
                return (0, i.jsxs)("div", {
                    id: "home",
                    className: "relative h-dvh w-full overflow-hidden text-zinc-950",
                    style: {
                        backgroundColor: "#fbdfb0"
                    },
                    children: [(0, i.jsx)("div", {
                        className: "absolute top-0 left-0 right-0 overflow-hidden py-4 md:py-8",
                        children: (0, i.jsxs)("div", {
                            className: "flex animate-marquee",
                            children: [(0, i.jsx)("div", {
                                className: "flex shrink-0",
                                children: (0, i.jsx)("p", {
                                    className: "font-graduate font-black mr-[60px] md:mr-[120px] text-[180px] md:text-[360px] leading-[1] tracking-[-6px] md:tracking-[-12px] text-black",
                                    style: {
                                        fontWeight: 900
                                    },
                                    children: "GUARDIAN ODIN"
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex shrink-0",
                                children: (0, i.jsx)("p", {
                                    className: "font-graduate font-black mr-[60px] md:mr-[120px] text-[180px] md:text-[360px] leading-[1] tracking-[-6px] md:tracking-[-12px] text-black",
                                    style: {
                                        fontWeight: 900
                                    },
                                    children: "GUARDIAN ODIN"
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex shrink-0",
                                children: (0, i.jsx)("p", {
                                    className: "font-graduate font-black mr-[60px] md:mr-[120px] text-[180px] md:text-[360px] leading-[1] tracking-[-6px] md:tracking-[-12px] text-black",
                                    style: {
                                        fontWeight: 900
                                    },
                                    children: "GUARDIAN ODIN"
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex shrink-0",
                                children: (0, i.jsx)("p", {
                                    className: "font-graduate font-black mr-[60px] md:mr-[120px] text-[180px] md:text-[360px] leading-[1] tracking-[-6px] md:tracking-[-12px] text-black",
                                    style: {
                                        fontWeight: 900
                                    },
                                    children: "GUARDIAN ODIN"
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex shrink-0",
                                children: (0, i.jsx)("p", {
                                    className: "font-graduate font-black mr-[60px] md:mr-[120px] text-[180px] md:text-[360px] leading-[1] tracking-[-6px] md:tracking-[-12px] text-black",
                                    style: {
                                        fontWeight: 900
                                    },
                                    children: "GUARDIAN ODIN"
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex shrink-0",
                                children: (0, i.jsx)("p", {
                                    className: "font-graduate font-black mr-[60px] md:mr-[120px] text-[180px] md:text-[360px] leading-[1] tracking-[-6px] md:tracking-[-12px] text-black",
                                    style: {
                                        fontWeight: 900
                                    },
                                    children: "GUARDIAN ODIN"
                                })
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "relative h-full z-10",
                        children: [(0, i.jsx)("div", {
                            className: "absolute inset-0 flex justify-end items-end overflow-hidden",
                            children: (0, i.jsx)(r.default, {
                                alt: "main-character",
                                width: 600,
                                height: 800,
                                decoding: "async",
                                className: "relative h-full max-h-[150%] w-auto object-contain object-bottom",
                                src: "/main-character2.webp",
                                style: {
                                    color: "transparent"
                                },
                                priority: !0
                            })
                        }), (0, i.jsx)("div", {
                            className: "absolute top-[50%] md:top-[55%] left-0 z-20 w-full px-4 sm:px-8 lg:px-16",
                            children: (0, i.jsx)("div", {
                                className: "max-w-7xl",
                                children: (0, i.jsx)("div", {
                                    className: "max-w-[90%] sm:max-w-[70%] md:max-w-[50%]",
                                    children: (0, i.jsxs)("div", {
                                        className: "relative p-4",
                                        children: [(0, i.jsx)("div", {
                                            className: "absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg"
                                        }), (0, i.jsxs)(s.P.button, {
                                            onClick: () => {
                                                window.open("https://app.uniswap.org", "_blank");
                                              },
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            className: "relative group w-full",
                                            children: [(0, i.jsxs)("div", {
                                                className: "absolute inset-0 overflow-hidden pointer-events-none",
                                                children: [(0, i.jsx)(s.P.div, {
                                                    className: "absolute top-0 h-[3px] w-[100px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent",
                                                    style: {
                                                        boxShadow: "0 0 20px #fbbf24, 0 0 40px #fbbf24"
                                                    },
                                                    animate: {
                                                        left: ["-100px", "calc(100% + 100px)"]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: 1 / 0,
                                                        ease: "linear",
                                                        repeatDelay: 0
                                                    }
                                                }), (0, i.jsx)(s.P.div, {
                                                    className: "absolute right-0 w-[3px] h-[100px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent",
                                                    style: {
                                                        boxShadow: "0 0 20px #fbbf24, 0 0 40px #fbbf24"
                                                    },
                                                    animate: {
                                                        top: ["-100px", "calc(100% + 100px)"]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: 1 / 0,
                                                        ease: "linear",
                                                        delay: .5,
                                                        repeatDelay: 0
                                                    }
                                                }), (0, i.jsx)(s.P.div, {
                                                    className: "absolute bottom-0 h-[3px] w-[100px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent",
                                                    style: {
                                                        boxShadow: "0 0 20px #fbbf24, 0 0 40px #fbbf24"
                                                    },
                                                    animate: {
                                                        right: ["-100px", "calc(100% + 100px)"]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: 1 / 0,
                                                        ease: "linear",
                                                        delay: 1,
                                                        repeatDelay: 0
                                                    }
                                                }), (0, i.jsx)(s.P.div, {
                                                    className: "absolute left-0 w-[3px] h-[100px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent",
                                                    style: {
                                                        boxShadow: "0 0 20px #fbbf24, 0 0 40px #fbbf24"
                                                    },
                                                    animate: {
                                                        bottom: ["-100px", "calc(100% + 100px)"]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: 1 / 0,
                                                        ease: "linear",
                                                        delay: 1.5,
                                                        repeatDelay: 0
                                                    }
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "relative bg-transparent border-2 border-white/50 group-hover:bg-[#fbdfb0] group-hover:border-[#fbdfb0] transition-all duration-300 py-3 sm:py-4 md:py-5 lg:py-6",
                                                children: (0, i.jsx)("div", {
                                                    className: "relative flex justify-center items-center w-full px-4",
                                                    children: (0, i.jsx)("span", {
                                                        className: "font-pretendard font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white group-hover:text-black transition-colors duration-300 tracking-[0.1em] whitespace-nowrap",
                                                        style: {
                                                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                                                        },
                                                        children: "Buy $ODIN"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, i.jsx)(n.N, {
                        children: e && (0, i.jsx)(s.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                            onClick: () => t(!1),
                            children: (0, i.jsxs)(s.P.div, {
                                initial: {
                                    scale: .9,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: .9,
                                    opacity: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .5
                                },
                                className: "relative max-w-2xl w-full bg-black border-4 border-[#fbdfb0] rounded-xl p-8 md:p-12 shadow-2xl",
                                onClick: e => e.stopPropagation(),
                                style: {
                                    boxShadow: "0 0 50px rgba(255, 112, 1, 0.5)"
                                },
                                children: [(0, i.jsx)("button", {
                                    onClick: () => t(!1),
                                    className: "absolute top-4 right-4 text-white hover:text-[#fbdfb0] transition-colors",
                                    children: (0, i.jsx)(c.QCr, {
                                        size: 24
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "text-center space-y-6",
                                    children: g ? (0, i.jsx)("div", {
                                        className: "flex justify-center items-center py-20",
                                        children: (0, i.jsx)("div", {
                                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#fbdfb0]"
                                        })
                                    }) : u ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("h2", {
                                            className: "font-black text-3xl md:text-5xl text-[#fbdfb0] uppercase tracking-wider",
                                            style: {
                                                fontFamily: "Graduate, cursive",
                                                textShadow: "2px 2px 0 #fff, 4px 4px 0 #000"
                                            },
                                            children: "Welcome Back, Baller!"
                                        }), (0, i.jsxs)("div", {
                                            className: "space-y-4 text-white",
                                            children: [(0, i.jsx)("p", {
                                                className: "text-xl md:text-2xl font-bold text-[#fbdfb0]",
                                                children: "You're Already in the Game!"
                                            }), (0, i.jsx)("p", {
                                                className: "text-lg md:text-xl",
                                                children: "Download the Game Client to Start Playing"
                                            }), y ? (0, i.jsxs)("div", {
                                                className: "bg-black/50 border-2 border-[#fbdfb0] rounded-lg p-4 mt-4",
                                                children: [(0, i.jsx)("p", {
                                                    className: "text-lg font-bold text-[#fbdfb0] mb-3",
                                                    children: "Your Game Login Credentials:"
                                                }), (0, i.jsxs)("div", {
                                                    className: "space-y-2 text-left",
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-white font-semibold",
                                                            children: "Game ID:"
                                                        }), (0, i.jsx)("span", {
                                                            className: "text-[#fbdfb0] font-mono bg-black/50 px-3 py-1 rounded",
                                                            children: y.game_id
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "text-white font-semibold",
                                                            children: "Password:"
                                                        }), (0, i.jsx)("span", {
                                                            className: "text-[#fbdfb0] font-mono bg-black/50 px-3 py-1 rounded",
                                                            children: y.game_pw
                                                        })]
                                                    })]
                                                }), (0, i.jsx)("p", {
                                                    className: "text-sm text-gray-400 mt-3",
                                                    children: "⚠️ Keep these credentials safe! Use them to log into the game."
                                                })]
                                            }) : (0, i.jsxs)("div", {
                                                className: "bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-4 mt-4",
                                                children: [(0, i.jsx)("p", {
                                                    className: "text-yellow-400 font-semibold",
                                                    children: "⏳ Game credentials are being generated..."
                                                }), (0, i.jsx)("p", {
                                                    className: "text-sm text-gray-300 mt-2",
                                                    children: "Game Play Credentials will show up within the next 3 hours."
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "flex flex-col gap-4 mt-6",
                                                children: (0, i.jsx)("p", {
                                                    className: "text-lg md:text-xl font-semibold",
                                                    children: "Choose Your Platform:"
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row gap-4 justify-center mt-8",
                                            children: [(0, i.jsx)(s.P.button, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: .95
                                                },
                                                className: "bg-white text-black hover:bg-[#fbdfb0] hover:text-white border-4 border-white px-8 py-4 rounded-full font-black text-lg md:text-xl uppercase tracking-wider transition-all duration-300 shadow-lg",
                                                style: {
                                                    fontFamily: "Graduate, cursive",
                                                    boxShadow: "4px 4px 0 #000"
                                                },
                                                onClick: () => {
                                                    window.open("https://fs-3on3.s3.ap-northeast-1.amazonaws.com/REBOUND/TRALA/Download/3on3FreeStyleSetupVer2.zip", "_blank")
                                                },
                                                children: "\uD83E\uDE9F Windows Download"
                                            }), (0, i.jsx)(s.P.button, {
                                                disabled: !0,
                                                className: "bg-gray-500 text-gray-300 border-4 border-gray-500 px-8 py-4 rounded-full font-black text-lg md:text-xl uppercase tracking-wider shadow-lg opacity-50 cursor-not-allowed",
                                                style: {
                                                    fontFamily: "Graduate, cursive",
                                                    boxShadow: "4px 4px 0 #000"
                                                },
                                                children: "\uD83C\uDF4E MacOS (Coming Soon)"
                                            })]
                                        })]
                                    }) : w ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("h2", {
                                            className: "font-black text-3xl md:text-5xl text-[#fbdfb0] uppercase tracking-wider",
                                            style: {
                                                fontFamily: "Graduate, cursive",
                                                textShadow: "2px 2px 0 #fff, 4px 4px 0 #000"
                                            },
                                            children: "Join the Court!"
                                        }), (0, i.jsxs)("div", {
                                            className: "space-y-6 w-full max-w-md mx-auto",
                                            children: [(0, i.jsxs)("div", {
                                                className: "space-y-4",
                                                children: [(0, i.jsxs)("div", {
                                                    children: [(0, i.jsxs)("label", {
                                                        className: "block text-white text-sm font-bold mb-2",
                                                        children: ["Email ", (0, i.jsx)("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        })]
                                                    }), (0, i.jsx)("input", {
                                                        type: "email",
                                                        placeholder: "your@email.com",
                                                        value: N.email,
                                                        onChange: e => k({
                                                            ...N,
                                                            email: e.target.value
                                                        }),
                                                        className: "w-full px-4 py-3 bg-black/50 border-2 border-white/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#fbdfb0] transition-colors",
                                                        required: !0
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    children: [(0, i.jsxs)("label", {
                                                        className: "block text-white text-sm font-bold mb-2",
                                                        children: ["Confirm Email", " ", (0, i.jsx)("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        })]
                                                    }), (0, i.jsx)("input", {
                                                        type: "email",
                                                        placeholder: "Confirm your email",
                                                        value: N.emailConfirm,
                                                        onChange: e => k({
                                                            ...N,
                                                            emailConfirm: e.target.value
                                                        }),
                                                        className: "w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ".concat(N.emailConfirm && N.email !== N.emailConfirm ? "border-red-500 focus:border-red-500" : "border-white/50 focus:border-[#fbdfb0]"),
                                                        required: !0
                                                    }), N.emailConfirm && N.email !== N.emailConfirm && (0, i.jsx)("p", {
                                                        className: "text-red-500 text-xs mt-1",
                                                        children: "Emails do not match"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    children: [(0, i.jsxs)("label", {
                                                        className: "block text-white text-sm font-bold mb-2",
                                                        children: ["Username ", (0, i.jsx)("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        })]
                                                    }), (0, i.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "YourGameName (3-20 characters)",
                                                        value: N.username,
                                                        onChange: e => {
                                                            let t = e.target.value.replace(/[^a-zA-Z0-9_]/g, "");
                                                            k({
                                                                ...N,
                                                                username: t
                                                            })
                                                        },
                                                        className: "w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ".concat(N.username && (N.username.length < 3 || N.username.length > 20) ? "border-red-500 focus:border-red-500" : "border-white/50 focus:border-[#fbdfb0]"),
                                                        maxLength: 20,
                                                        required: !0
                                                    }), (0, i.jsx)("div", {
                                                        className: "flex justify-between items-center mt-1",
                                                        children: (0, i.jsxs)("p", {
                                                            className: "text-xs ".concat(N.username && (N.username.length < 3 || N.username.length > 20) ? "text-red-500" : "text-gray-400"),
                                                            children: [N.username.length, "/20 characters (min 3, max 20)"]
                                                        })
                                                    }), N.username && N.username.length < 3 && (0, i.jsx)("p", {
                                                        className: "text-red-500 text-xs mt-1",
                                                        children: "Username must be at least 3 characters"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    children: [(0, i.jsxs)("label", {
                                                        className: "block text-white text-sm font-bold mb-2",
                                                        children: ["Telegram ID", " ", (0, i.jsx)("span", {
                                                            className: "text-gray-400",
                                                            children: "(Optional)"
                                                        })]
                                                    }), (0, i.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "@yourtelegram",
                                                        value: N.telegram,
                                                        onChange: e => {
                                                            let t = e.target.value;
                                                            t = t.startsWith("@") ? "@" + t.slice(1).replace(/[^a-zA-Z0-9_]/g, "") : t.replace(/[^a-zA-Z0-9_]/g, ""), k({
                                                                ...N,
                                                                telegram: t
                                                            })
                                                        },
                                                        className: "w-full px-4 py-3 bg-black/50 border-2 border-white/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#fbdfb0] transition-colors",
                                                        maxLength: 33
                                                    }), (0, i.jsx)("p", {
                                                        className: "text-gray-400 text-xs mt-1",
                                                        children: "Only letters, numbers, and underscore allowed"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    children: [(0, i.jsxs)("label", {
                                                        className: "block text-white text-sm font-bold mb-2",
                                                        children: ["Twitter/X ID", " ", (0, i.jsx)("span", {
                                                            className: "text-gray-400",
                                                            children: "(Optional)"
                                                        })]
                                                    }), (0, i.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "@yourtwitter",
                                                        value: N.twitter,
                                                        onChange: e => {
                                                            let t = e.target.value;
                                                            t = t.startsWith("@") ? "@" + t.slice(1).replace(/[^a-zA-Z0-9_]/g, "") : t.replace(/[^a-zA-Z0-9_]/g, ""), k({
                                                                ...N,
                                                                twitter: t
                                                            })
                                                        },
                                                        className: "w-full px-4 py-3 bg-black/50 border-2 border-white/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#fbdfb0] transition-colors",
                                                        maxLength: 16
                                                    }), (0, i.jsx)("p", {
                                                        className: "text-gray-400 text-xs mt-1",
                                                        children: "Only letters, numbers, and underscore allowed (max 15 chars)"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "bg-black/30 p-4 rounded-lg",
                                                    children: (0, i.jsxs)("p", {
                                                        className: "text-sm text-gray-300",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "font-bold",
                                                            children: "Wallet Address:"
                                                        }), (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                                            className: "text-xs break-all",
                                                            children: S
                                                        })]
                                                    })
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex gap-4",
                                                children: [(0, i.jsx)(s.P.button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: .95
                                                    },
                                                    className: "flex-1 bg-gray-600 text-white hover:bg-gray-700 border-4 border-gray-600 hover:border-gray-700 px-6 py-3 rounded-full font-black text-lg uppercase tracking-wider transition-all duration-300 shadow-lg",
                                                    style: {
                                                        fontFamily: "Graduate, cursive",
                                                        boxShadow: "4px 4px 0 #000"
                                                    },
                                                    onClick: () => {
                                                        v(!1), k({
                                                            email: "",
                                                            emailConfirm: "",
                                                            username: "",
                                                            telegram: "",
                                                            twitter: ""
                                                        }), p("")
                                                    },
                                                    children: "Back"
                                                }), (0, i.jsx)(s.P.button, {
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: .95
                                                    },
                                                    className: "flex-1 bg-[#fbdfb0] text-black hover:bg-white hover:text-black border-4 border-[#fbdfb0] hover:border-white px-6 py-3 rounded-full font-black text-lg uppercase tracking-wider transition-all duration-300 shadow-lg",
                                                    style: {
                                                        fontFamily: "Graduate, cursive",
                                                        boxShadow: "4px 4px 0 #000"
                                                    },
                                                    onClick: async () => {
                                                        if (!S) return void p("Please connect your wallet first");
                                                        if (!N.email || !N.emailConfirm || !N.username) return void p("Please fill in all required fields");
                                                        if (N.email !== N.emailConfirm) return void p("Email addresses do not match");
                                                        if (!N.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return void p("Please enter a valid email address");
                                                        if (N.username.length < 3) return void p("Username must be at least 3 characters");
                                                        if (N.username.length > 20) return void p("Username must be 20 characters or less");
                                                        if (!N.username.match(/^[a-zA-Z0-9_]+$/)) return void p("Username can only contain letters, numbers, and underscores");
                                                        m(!0), p("");
                                                        try {
                                                            let e = N.telegram ? N.telegram.replace("@", "") : "",
                                                                t = N.twitter ? N.twitter.replace("@", "") : "",
                                                                a = await fetch("/api/auth/signup", {
                                                                    method: "POST",
                                                                    headers: {
                                                                        "Content-Type": "application/json"
                                                                    },
                                                                    body: JSON.stringify({
                                                                        walletAddress: S,
                                                                        email: N.email,
                                                                        username: N.username,
                                                                        telegram: e,
                                                                        twitter: t
                                                                    })
                                                                }),
                                                                i = await a.json();
                                                            a.ok ? (p("Successfully signed up! Welcome to GUARDIAN ODIN!"), b(!0), v(!1), setTimeout(() => {
                                                                p("")
                                                            }, 2e3)) : p(i.error || "Signup failed. Please try again.")
                                                        } catch (e) {
                                                            console.error("Signup error:", e), p("Network error. Please try again.")
                                                        } finally {
                                                            m(!1)
                                                        }
                                                    },
                                                    disabled: x,
                                                    children: x ? "Signing up..." : "Complete Signup"
                                                })]
                                            })]
                                        }), h && (0, i.jsx)(s.P.p, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            className: "mt-4 text-lg font-semibold ".concat(h.includes("Success") ? "text-green-400" : "text-yellow-400"),
                                            children: h
                                        })]
                                    }) : (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("h2", {
                                            className: "font-black text-3xl md:text-5xl text-[#fbdfb0] uppercase tracking-wider",
                                            style: {
                                                fontFamily: "Graduate, cursive",
                                                textShadow: "2px 2px 0 #fff, 4px 4px 0 #000"
                                            },
                                            children: "Are You Ready to Tip-off ?!"
                                        }), (0, i.jsxs)("div", {
                                            className: "space-y-4 text-white",
                                            children: [(0, i.jsx)("p", {
                                                className: "text-lg md:text-xl font-semibold",
                                                children: "ODIN is one of the two Aster Guardians, "
                                            }), (0, i.jsx)("p", {
                                                className: "text-lg md:text-xl",
                                                children: "Sign Up Now and Get Ready to Slam the Rim"
                                            })]
                                        }), (0, i.jsx)(s.P.button, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: .95
                                            },
                                            className: "mt-8 bg-[#fbdfb0] text-black hover:bg-white hover:text-black border-4 border-[#fbdfb0] hover:border-white px-12 py-4 rounded-full font-black text-xl md:text-2xl uppercase tracking-wider transition-all duration-300 shadow-lg",
                                            style: {
                                                fontFamily: "Graduate, cursive",
                                                boxShadow: "4px 4px 0 #000"
                                            },
                                            onClick: () => {
                                                if (!S) return void p("Please connect your wallet first");
                                                v(!0)
                                            },
                                            children: "Sign Up Now"
                                        }), h && (0, i.jsx)(s.P.p, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            className: "mt-4 text-lg font-semibold ".concat(h.includes("Success") ? "text-green-400" : "text-yellow-400"),
                                            children: h
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        39465: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => c
            });
            var i = a(95155),
                l = a(12115),
                r = a(14407),
                s = a(66766),
                n = a(24357),
                o = a(29911);

            function c() {
                let [e, t] = (0, l.useState)(!1), [a, c] = (0, l.useState)(!0), d = (0, l.useRef)(null), x = () => {
                    d.current && (e ? d.current.pause() : (window.dispatchEvent(new Event("pauseBGM")), d.current.play()), t(!e))
                };
                // return (0, i.jsxs)(n.wn, {
                //     id: "trailer",
                //     className: "bg-gradient-to-b from-orange-50 to-white relative overflow-hidden",
                //     children: [(0, i.jsxs)("div", {
                //         className: "absolute inset-0 z-0",
                //         children: [(0, i.jsxs)("div", {
                //             className: "hidden lg:block",
                //             children: [(0, i.jsx)(s.default, {
                //                 src: "/activities-character-1.webp",
                //                 alt: "Character 1",
                //                 width: 600,
                //                 height: 800,
                //                 className: "absolute left-0 bottom-0 h-[72%] w-auto object-contain"
                //             }), (0, i.jsx)(s.default, {
                //                 src: "/activities-character-2.webp",
                //                 alt: "Character 2",
                //                 width: 600,
                //                 height: 800,
                //                 className: "absolute right-0 bottom-0 h-[72%] w-auto object-contain"
                //             })]
                //         }), (0, i.jsx)("div", {
                //             className: "lg:hidden",
                //             children: (0, i.jsx)(s.default, {
                //                 src: "/activities-character-1.webp",
                //                 alt: "Characters",
                //                 width: 800,
                //                 height: 600,
                //                 className: "absolute left-0 bottom-0 h-[70%] w-auto object-contain opacity-30"
                //             })
                //         })]
                //     }), (0, i.jsxs)("div", {
                //         className: "container-max relative z-10",
                //         children: [(0, i.jsxs)(r.P.div, {
                //             initial: {
                //                 opacity: 0,
                //                 y: 20
                //             },
                //             whileInView: {
                //                 opacity: 1,
                //                 y: 0
                //             },
                //             viewport: {
                //                 once: !0
                //             },
                //             transition: {
                //                 duration: .6
                //             },
                //             className: "text-center mb-12",
                //             children: [(0, i.jsx)(r.P.div, {
                //                 initial: {
                //                     scale: 0
                //                 },
                //                 whileInView: {
                //                     scale: 1
                //                 },
                //                 transition: {
                //                     duration: .5
                //                 },
                //                 viewport: {
                //                     once: !0
                //                 },
                //                 className: "inline-block px-4 py-2 bg-black rounded-full mb-4",
                //                 children: (0, i.jsx)("span", {
                //                     className: "text-white text-sm font-heading uppercase tracking-wider",
                //                     children: "Experience"
                //                 })
                //             }), (0, i.jsx)("h2", {
                //                 className: "text-4xl md:text-5xl lg:text-6xl font-display mb-4 text-black",
                //                 children: "Watch Trailer"
                //             }), (0, i.jsxs)("p", {
                //                 className: "text-sm md:text-lg text-black/70 max-w-2xl mx-auto font-medium",
                //                 children: ["The Court Never Dies. Same Fire with New Rules.", (0, i.jsx)("br", {}), "Join our community and dominate the court."]
                //             })]
                //         }), (0, i.jsx)(r.P.div, {
                //             initial: {
                //                 opacity: 0,
                //                 scale: .95
                //             },
                //             whileInView: {
                //                 opacity: 1,
                //                 scale: 1
                //             },
                //             viewport: {
                //                 once: !0
                //             },
                //             transition: {
                //                 duration: .6,
                //                 delay: .2
                //             },
                //             className: "relative max-w-4xl mx-auto",
                //             children: (0, i.jsxs)("div", {
                //                 className: "relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black",
                //                 children: [(0, i.jsx)("video", {
                //                     ref: d,
                //                     className: "w-full h-full object-cover",
                //                     src: "/trailer_mv.mp4",
                //                     loop: !0,
                //                     muted: a,
                //                     playsInline: !0,
                //                     onEnded: () => t(!1)
                //                 }), (0, i.jsxs)("div", {
                //                     className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
                //                     children: [!e && (0, i.jsx)(r.P.button, {
                //                         initial: {
                //                             opacity: 0,
                //                             scale: .8
                //                         },
                //                         animate: {
                //                             opacity: 1,
                //                             scale: 1
                //                         },
                //                         exit: {
                //                             opacity: 0,
                //                             scale: .8
                //                         },
                //                         onClick: x,
                //                         className: "absolute inset-0 flex items-center justify-center group",
                //                         children: (0, i.jsxs)("div", {
                //                             className: "relative",
                //                             children: [(0, i.jsx)("div", {
                //                                 className: "absolute inset-0 bg-white rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60"
                //                             }), (0, i.jsx)("div", {
                //                                 className: "relative bg-black border-2 border-white rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform duration-300",
                //                                 children: (0, i.jsx)(o.gSK, {
                //                                     className: "w-8 h-8 text-white ml-1"
                //                                 })
                //                             })]
                //                         })
                //                     }), (0, i.jsxs)("div", {
                //                         className: "absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between",
                //                         children: [(0, i.jsx)("button", {
                //                             onClick: x,
                //                             className: "p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors",
                //                             children: e ? (0, i.jsx)(o.kwt, {
                //                                 size: 20
                //                             }) : (0, i.jsx)(o.gSK, {
                //                                 size: 20
                //                             })
                //                         }), (0, i.jsx)("button", {
                //                             onClick: () => {
                //                                 d.current && (d.current.muted = !a, c(!a))
                //                             },
                //                             className: "p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors",
                //                             children: a ? (0, i.jsx)(o.FZ2, {
                //                                 size: 20
                //                             }) : (0, i.jsx)(o.pPd, {
                //                                 size: 20
                //                             })
                //                         })]
                //                     })]
                //                 })]
                //             })
                //         }), (0, i.jsx)(r.P.div, {
                //             initial: {
                //                 opacity: 0,
                //                 y: 20
                //             },
                //             whileInView: {
                //                 opacity: 1,
                //                 y: 0
                //             },
                //             viewport: {
                //                 once: !0
                //             },
                //             transition: {
                //                 duration: .6,
                //                 delay: .4
                //             },
                //             className: "mt-8 text-center",
                //             children: (0, i.jsx)("p", {
                //                 className: "text-black/60 font-heading uppercase tracking-wider text-sm",
                //                 children: "Official Trailer • Click to Experience"
                //             })
                //         })]
                //     })]
                // })
            }
        },
        41582: (e, t, a) => {
            "use strict";
            a.d(t, {
                BackToTop: () => o
            });
            var i = a(95155),
                l = a(60760),
                r = a(14407),
                s = a(29911),
                n = a(3612);
            let o = () => {
                let {
                    scrollPosition: e
                } = (0, n.M)();
                return (0, i.jsx)(l.N, {
                    children: e > 300 && (0, i.jsx)(r.P.button, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 20
                        },
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: .9
                        },
                        onClick: () => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        className: "fixed bottom-8 right-8 p-4 bg-gradient-to-r from-neon-green to-neon-blue text-black rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-shadow duration-200 z-40",
                        "aria-label": "Back to top",
                        children: (0, i.jsx)(s.uCC, {
                            size: 20
                        })
                    })
                })
            }
        },
        49473: (e, t, a) => {
            "use strict";
            a.d(t, {
                TeamSection: () => x
            });
            var i = a(95155),
                l = a(14407),
                r = a(84148),
                s = a(36244),
                n = a(85370),
                o = a(69332);
            let c = [{
                id: "ceo",
                name: "Alex Chen",
                role: "CEO & Founder",
                image: "/images/team/alex.jpg",
                bio: "Serial entrepreneur with 10+ years in blockchain technology",
                social: {
                    twitter: "https://twitter.com/alexchen",
                    linkedin: "https://linkedin.com/in/alexchen",
                    github: "https://github.com/alexchen"
                }
            }, {
                id: "cto",
                name: "Sarah Kim",
                role: "CTO",
                image: "/images/team/sarah.jpg",
                bio: "Former tech lead at major DeFi protocols, smart contract expert",
                social: {
                    twitter: "https://twitter.com/sarahkim",
                    linkedin: "https://linkedin.com/in/sarahkim",
                    github: "https://github.com/sarahkim"
                }
            }, {
                id: "designer",
                name: "Mike Johnson",
                role: "Head of Design",
                image: "/images/team/mike.jpg",
                bio: "Award-winning designer focused on Web3 user experiences",
                social: {
                    twitter: "https://twitter.com/mikejohnson",
                    linkedin: "https://linkedin.com/in/mikejohnson"
                }
            }, {
                id: "community",
                name: "Emma Lee",
                role: "Community Manager",
                image: "/images/team/emma.jpg",
                bio: "Building and nurturing Web3 communities since 2018",
                social: {
                    twitter: "https://twitter.com/emmalee",
                    linkedin: "https://linkedin.com/in/emmalee"
                }
            }, {
                id: "developer",
                name: "David Park",
                role: "Lead Developer",
                image: "/images/team/david.jpg",
                bio: "Full-stack developer specializing in blockchain applications",
                social: {
                    twitter: "https://twitter.com/davidpark",
                    github: "https://github.com/davidpark"
                }
            }, {
                id: "marketing",
                name: "Lisa Wang",
                role: "Marketing Director",
                image: "/images/team/lisa.jpg",
                bio: "Growth hacker with expertise in crypto marketing strategies",
                social: {
                    twitter: "https://twitter.com/lisawang",
                    linkedin: "https://linkedin.com/in/lisawang"
                }
            }];
            var d = a(29911);
            let x = () => (0, i.jsx)(s.w, {
                id: "team",
                padding: "xl",
                background: "gradient",
                children: (0, i.jsxs)(r.m, {
                    children: [(0, i.jsx)(n._, {
                        children: (0, i.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, i.jsxs)(l.P.div, {
                                initial: {
                                    scale: 0
                                },
                                whileInView: {
                                    scale: 1
                                },
                                transition: {
                                    duration: .5
                                },
                                viewport: {
                                    once: !0
                                },
                                className: "inline-flex items-center gap-2 px-4 py-2 bg-dark-gray rounded-full mb-4",
                                children: [(0, i.jsx)(d.YXz, {
                                    className: "text-neon-green"
                                }), (0, i.jsx)("span", {
                                    className: "text-neon-green text-sm font-medium",
                                    children: "Meet the Team"
                                })]
                            }), (0, i.jsx)("h2", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4",
                                children: "The Visionaries Behind Free Style"
                            }), (0, i.jsx)("p", {
                                className: "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto",
                                children: "A diverse team of blockchain experts, developers, and community builders united by a shared vision"
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: c.map((e, t) => (0, i.jsx)(o.TeamMemberCard, {
                            member: e,
                            index: t
                        }, e.id))
                    }), (0, i.jsxs)(l.P.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        viewport: {
                            once: !0
                        },
                        className: "text-center mt-16",
                        children: [(0, i.jsx)("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: "Want to join our team?"
                        }), (0, i.jsx)("p", {
                            className: "text-gray-400 mb-8",
                            children: "We're always looking for talented individuals who share our passion for Web3"
                        }), (0, i.jsx)(l.P.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            className: "px-8 py-4 bg-gradient-to-r from-neon-green to-neon-blue text-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-shadow duration-200",
                            children: "View Open Positions"
                        })]
                    })]
                })
            })
        },
        57654: (e, t, a) => {
            "use strict";
            a.d(t, {
                PartnerLogo: () => r
            });
            var i = a(95155),
                l = a(14407);
            let r = e => {
                let {
                    partner: t,
                    index: a
                } = e;
                return (0, i.jsx)(l.P.div, {
                    initial: {
                        opacity: 0,
                        scale: .8
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .5,
                        delay: .05 * a
                    },
                    viewport: {
                        once: !0
                    },
                    children: (0, i.jsx)(l.P.a, {
                        href: t.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: {
                            scale: 1.1,
                            y: -5
                        },
                        whileTap: {
                            scale: .95
                        },
                        className: "block p-8 bg-dark-gray rounded-xl border border-gray-800 hover:border-neon-green/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-all duration-300 group",
                        children: (0, i.jsxs)("div", {
                            className: "relative h-16 flex items-center justify-center",
                            children: [(0, i.jsx)("div", {
                                className: "text-gray-600 group-hover:text-gray-400 transition-colors",
                                children: (0, i.jsxs)("svg", {
                                    width: "120",
                                    height: "40",
                                    viewBox: "0 0 120 40",
                                    fill: "currentColor",
                                    className: "w-full h-full",
                                    children: [(0, i.jsx)("rect", {
                                        x: "10",
                                        y: "10",
                                        width: "100",
                                        height: "20",
                                        rx: "4",
                                        opacity: "0.3"
                                    }), (0, i.jsx)("circle", {
                                        cx: "25",
                                        cy: "20",
                                        r: "8",
                                        opacity: "0.5"
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                children: (0, i.jsx)("span", {
                                    className: "text-xs text-neon-green font-medium",
                                    children: t.name
                                })
                            })]
                        })
                    })
                })
            }
        },
        59293: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var i = a(95155),
                l = a(14407),
                r = a(36748);
            let s = e => {
                let {
                    children: t,
                    variant: a = "default",
                    hover: s = !0,
                    padding: n = "md",
                    className: o,
                    onClick: c,
                    ...d
                } = e;
                return (0, i.jsx)(l.P.div, {
                    whileHover: s ? {
                        y: -4,
                        scale: 1.01
                    } : void 0,
                    className: (0, r.cn)("relative rounded-2xl overflow-hidden transition-all duration-300 shadow-lg", {
                        default: "bg-white border border-orange-100",
                        gradient: "bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200",
                        glass: "bg-white/80 backdrop-blur-md border border-orange-200/50"
                    } [a], {
                        none: "",
                        sm: "p-4",
                        md: "p-6",
                        lg: "p-8"
                    } [n], s ? "hover:shadow-xl hover:shadow-orange-200/50 hover:border-orange-300" : "", o),
                    onClick: c,
                    ...d,
                    children: t
                })
            }
        },
        69332: (e, t, a) => {
            "use strict";
            a.d(t, {
                TeamMemberCard: () => o
            });
            var i = a(95155),
                l = a(12115),
                r = a(14407),
                s = a(29911),
                n = a(59293);
            let o = e => {
                let {
                    member: t,
                    index: a
                } = e, [o, c] = (0, l.useState)(!1), d = {
                    twitter: s.feZ,
                    linkedin: s.QEs,
                    github: s.hL4
                };
                return (0, i.jsx)(r.P.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .1 * a
                    },
                    viewport: {
                        once: !0
                    },
                    className: "relative h-[400px] preserve-3d",
                    onHoverStart: () => c(!0),
                    onHoverEnd: () => c(!1),
                    children: (0, i.jsxs)(r.P.div, {
                        className: "absolute inset-0 w-full h-full",
                        animate: {
                            rotateY: 180 * !!o
                        },
                        transition: {
                            duration: .6
                        },
                        style: {
                            transformStyle: "preserve-3d"
                        },
                        children: [(0, i.jsx)(n.Z, {
                            variant: "default",
                            className: "absolute inset-0 w-full h-full backface-hidden",
                            padding: "none",
                            children: (0, i.jsxs)("div", {
                                className: "relative h-full flex flex-col",
                                children: [(0, i.jsxs)("div", {
                                    className: "relative h-56 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center",
                                        children: (0, i.jsx)("div", {
                                            className: "w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-1 shadow-lg",
                                            children: (0, i.jsx)("div", {
                                                className: "w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-orange-600",
                                                children: t.name.split(" ").map(e => e[0]).join("")
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex-1 p-6 flex flex-col",
                                    children: [(0, i.jsx)("h3", {
                                        className: "text-xl font-bold text-gray-900 mb-1",
                                        children: t.name
                                    }), (0, i.jsx)("p", {
                                        className: "text-orange-600 text-sm font-medium mb-4",
                                        children: t.role
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-600 text-sm flex-1",
                                        children: t.bio
                                    }), (0, i.jsx)("div", {
                                        className: "text-xs text-gray-500 text-center mt-4",
                                        children: "Hover to connect →"
                                    })]
                                })]
                            })
                        }), (0, i.jsx)(n.Z, {
                            variant: "default",
                            className: "absolute inset-0 w-full h-full backface-hidden rotate-y-180",
                            padding: "none",
                            children: (0, i.jsxs)("div", {
                                className: "h-full flex flex-col items-center justify-center p-6",
                                children: [(0, i.jsx)("div", {
                                    className: "text-6xl mb-6",
                                    children: "\uD83D\uDE80"
                                }), (0, i.jsx)("h3", {
                                    className: "text-xl font-bold text-gray-900 mb-2",
                                    children: t.name
                                }), (0, i.jsx)("p", {
                                    className: "text-orange-600 text-sm font-medium mb-6",
                                    children: t.role
                                }), (0, i.jsx)("div", {
                                    className: "flex gap-4",
                                    children: t.social && Object.entries(t.social).map(e => {
                                        let [t, a] = e, l = d[t];
                                        return (0, i.jsx)(r.P.a, {
                                            href: a,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            whileHover: {
                                                scale: 1.2,
                                                rotate: 5
                                            },
                                            whileTap: {
                                                scale: .9
                                            },
                                            className: "p-3 bg-white rounded-xl shadow-md text-gray-700 hover:text-orange-600 hover:shadow-lg transition-all duration-300",
                                            children: (0, i.jsx)(l, {
                                                size: 20
                                            })
                                        }, t)
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        71587: (e, t, a) => {
            "use strict";
            a.d(t, {
                ScrollIndicator: () => n
            });
            var i = a(95155),
                l = a(62720),
                r = a(37602),
                s = a(14407);
            let n = () => {
                let {
                    scrollYProgress: e
                } = (0, l.L)(), t = (0, r.z)(e, {
                    stiffness: 100,
                    damping: 30,
                    restDelta: .001
                });
                return (0, i.jsx)(s.P.div, {
                    className: "fixed top-0 left-0 right-0 h-1 bg-dark-gray origin-left z-[60]",
                    style: {
                        scaleX: t
                    },
                    children: (0, i.jsx)("div", {
                        className: "h-full bg-gradient-to-r from-neon-green to-neon-blue"
                    })
                })
            }
        },
        80262: (e, t, a) => {
            "use strict";
            a.d(t, {
                HeroBackground: () => r
            });
            var i = a(95155),
                l = a(14407);
            let r = () => (0, i.jsxs)("div", {
                className: "absolute inset-0 overflow-hidden bg-[#fbdfb0]",
                children: [(0, i.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-[#fbdfb0] to-[#fbdfb0]/80"
                }), (0, i.jsx)(l.P.div, {
                    className: "absolute -top-40 -left-40 w-96 h-96 bg-[#fbdfb0]/60 rounded-full blur-3xl opacity-20",
                    animate: {
                        x: [0, 100, 0],
                        y: [0, -100, 0]
                    },
                    transition: {
                        duration: 25,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    }
                }), (0, i.jsx)(l.P.div, {
                    className: "absolute -bottom-40 -right-40 w-96 h-96 bg-[#fbdfb0]/40 rounded-full blur-3xl opacity-20",
                    animate: {
                        x: [0, -100, 0],
                        y: [0, 100, 0]
                    },
                    transition: {
                        duration: 20,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    }
                })]
            })
        },
        81069: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => n
            });
            var i = a(95155),
                l = a(14407),
                r = a(66766),
                s = a(24357);

            function n() {
                return (0, i.jsx)(s.wn, {
                    id: "blog",
                    className: "bg-gradient-to-b from-white to-orange-50",
                    children: (0, i.jsxs)("div", {
                        className: "container-max",
                        children: [(0, i.jsxs)(l.P.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .6
                            },
                            className: "text-center mb-12",
                            children: [(0, i.jsx)(l.P.div, {
                                initial: {
                                    scale: 0
                                },
                                whileInView: {
                                    scale: 1
                                },
                                transition: {
                                    duration: .5
                                },
                                viewport: {
                                    once: !0
                                },
                                // className: "inline-block px-4 py-2 bg-black rounded-full mb-4",
                                // children: (0, i.jsx)("span", {
                                //     className: "text-white text-sm font-heading uppercase tracking-wider",
                                //     children: "The Journey"
                                // })
                            }), (0, i.jsx)("h2", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-black",
                                children: "Blog"
                            }),
                             (0, i.jsx)("p", {
                                className: "text-sm md:text-xl text-black/70 max-w-2xl mx-auto",
                                children: "Here is Aster Guardian ODIN"
                            })
                        ]
                        }), (0, i.jsx)(l.P.div, {
                            initial: {
                                opacity: 0,
                                y: 50,
                                scale: .9
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: 1,
                                ease: "easeOut"
                            },
                            className: "relative max-w-4xl mx-auto mb-12",
                            children: (0, i.jsxs)("div", {
                                className: "relative rounded-3xl overflow-hidden shadow-2xl",
                                children: [(0, i.jsx)(r.default, {
                                    src: "/roadmap.webp",
                                    alt: "Free",
                                    width: 1200,
                                    height: 800,
                                    className: "w-full h-auto",
                                    quality: 90
                                }), (0, i.jsx)(l.P.div, {
                                    className: "absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent",
                                    initial: {
                                        opacity: 0
                                    },
                                    whileInView: {
                                        opacity: 1
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        delay: .5,
                                        duration: 1
                                    }
                                }), (0, i.jsxs)(l.P.div, {
                                    className: "absolute bottom-0 left-0 right-0 p-8 text-white",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        delay: .8,
                                        duration: .8
                                    },
                                    children: [(0, i.jsx)("h3", {
                                        className: "text-2xl md:text-3xl font-bold mb-2",
                                        children: "To The Moon"
                                    }), (0, i.jsx)("p", {
                                        className: "text-lg opacity-90",
                                        children: "The moon is coming for Odin."
                                    })]
                                })]
                            })
                        }), (0, i.jsxs)(l.P.div, {
                            initial: {
                                scale: .9,
                                opacity: 0
                            },
                            whileInView: {
                                scale: 1,
                                opacity: 1
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .8,
                                delay: .3
                            },
                            className: "bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-2xl mx-auto text-center",
                            children: [(0, i.jsx)("h3", {
                                className: "text-2xl md:text-3xl font-bold text-black mb-4",
                                children: "More Blog Coming Soon"
                            }), 
                            // (0, i.jsx)("p", {
                            //     className: "text-sm md:text-lg text-black/70 mb-6",
                            //     children: ". Join our community to be the first to know!"
                            // }),
                             (0, i.jsx)(l.P.div, {
                                animate: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                },
                                className: "w-12 h-12 mx-auto",
                                children: (0, i.jsx)("div", {
                                    className: "w-full h-full border-4 border-black border-t-transparent rounded-full"
                                })
                            })]
                        })]
                    })
                })
            }
        },
        84148: (e, t, a) => {
            "use strict";
            a.d(t, {
                m: () => r
            });
            var i = a(95155),
                l = a(36748);
            let r = e => {
                let {
                    children: t,
                    size: a = "lg",
                    className: r,
                    ...s
                } = e;
                return (0, i.jsx)("div", {
                    className: (0, l.cn)("mx-auto px-4 md:px-8 lg:px-16", {
                        sm: "max-w-3xl",
                        md: "max-w-5xl",
                        lg: "max-w-7xl",
                        xl: "max-w-[1400px]",
                        full: "max-w-full"
                    } [a], r),
                    ...s,
                    children: t
                })
            }
        },
        85370: (e, t, a) => {
            "use strict";
            a.d(t, {
                _: () => r
            });
            var i = a(95155),
                l = a(14407);
            let r = e => {
                let {
                    children: t,
                    delay: a = 0,
                    duration: r = .6,
                    direction: s = "up",
                    className: n
                } = e, o = {
                    hidden: {
                        opacity: 0,
                        ...{
                            up: {
                                y: 40
                            },
                            down: {
                                y: -40
                            },
                            left: {
                                x: 40
                            },
                            right: {
                                x: -40
                            }
                        } [s]
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            duration: r,
                            delay: a,
                            ease: "easeOut"
                        }
                    }
                };
                return (0, i.jsx)(l.P.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0,
                        margin: "-50px"
                    },
                    variants: o,
                    className: n,
                    children: t
                })
            }
        },
        95270: (e, t, a) => {
            "use strict";
            a.d(t, {
                PartnersSection: () => d
            });
            var i = a(95155),
                l = a(14407),
                r = a(66766),
                s = a(84148),
                n = a(36244),
                o = a(85370);
            let c = [{
                    id: "investment",
                    // title: "Investment & Strategic Partnership",
                    partners: [{
                        id: "chain-capital",
                        name: "Chain Capital",
                        logo: "/investment_partner/Chain Capital.webp"
                    }, {
                        id: "m77",
                        name: "M77",
                        logo: "/investment_partner/M77.webp"
                    }, {
                        id: "rfd",
                        name: "RFD",
                        logo: "/investment_partner/RFD.webp"
                    }, {
                        id: "ternary",
                        name: "Ternary",
                        logo: "/investment_partner/Ternary.webp"
                    }, {
                        id: "animoca",
                        name: "Animoca Brands",
                        logo: "/investment_partner/animoca.webp"
                    }, {
                        id: "kaia",
                        name: "KAIA",
                        logo: "/investment_partner/kaia.webp"
                    }, {
                        id: "ygg",
                        name: "YGG",
                        logo: "/investment_partner/ygg.webp"
                    }]
                }, 
                // {
                //     id: "mainnet",
                //     title: "Mainnet Partners",
                //     partners: [{
                //         id: "bnb",
                //         name: "BNB Chain",
                //         logo: "/mainnet_partner/Mainnet_BNB_Chain.webp"
                //     }, {
                //         id: "arbitrum",
                //         name: "Arbitrum",
                //         logo: "/mainnet_partner/Mainnet_ Arbitrum.webp"
                //     }, {
                //         id: "kaia",
                //         name: "KAIA",
                //         logo: "/mainnet_partner/Mainnet_ KAIA.webp"
                //     }, {
                //         id: "soneium",
                //         name: "Soneium",
                //         logo: "/mainnet_partner/Mainnet_ Soneium.webp"
                //     }, {
                //         id: "avalanche",
                //         name: "Avalanche",
                //         logo: "/mainnet_partner/Mainnet_ avalanche.webp"
                //     }]
                // },
                //  {
                //     id: "ecosystem",
                //     title: "Ecosystem Partners",
                //     partners: [{
                //         id: "abga",
                //         name: "ABGA",
                //         logo: "/ecosystem_partner/ABGA.webp"
                //     }, {
                //         id: "daily84",
                //         name: "Daily84",
                //         logo: "/ecosystem_partner/Daily84.webp"
                //     }, {
                //         id: "guildqb",
                //         name: "GuildQB",
                //         logo: "/ecosystem_partner/GuildQB.webp"
                //     }, {
                //         id: "ygg",
                //         name: "YGG",
                //         logo: "/ecosystem_partner/ygg.webp"
                //     }]
                // }
            ],
                d = () => (0, i.jsx)(n.w, {
                    id: "partners",
                    padding: "xl",
                    children: (0, i.jsxs)(s.m, {
                        children: [(0, i.jsx)(o._, {
                            children: (0, i.jsxs)("div", {
                                className: "text-center mb-16",
                                children: [(0, i.jsx)(l.P.div, {
                                    initial: {
                                        scale: 0
                                    },
                                    whileInView: {
                                        scale: 1
                                    },
                                    transition: {
                                        duration: .5
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    className: "inline-block px-4 py-2 bg-black rounded-full mb-4",
                                    children: (0, i.jsx)("span", {
                                        className: "text-white text-sm font-heading uppercase tracking-wider",
                                        children: "Our Partners"
                                    })
                                }), (0, i.jsx)("h2", {
                                    className: "text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-black",
                                    children: "Building Together"
                                }),
                                //  (0, i.jsx)("p", {
                                //     className: "text-sm md:text-xl text-black/70 max-w-2xl mx-auto",
                                //     children: "Partnering with the best in the blockchain ecosystem"
                                // })
                            ]
                            })
                        }), (0, i.jsx)("div", {
                            className: "space-y-16",
                            children: c.map((e, t) => (0, i.jsxs)(l.P.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: .6,
                                    delay: .1 * t
                                },
                                children: [(0, i.jsx)("h3", {
                                    className: "text-2xl md:text-3xl font-display text-black mb-8 text-center",
                                    children: e.title
                                }), e.partners.length > 0 ? (0, i.jsx)("div", {
                                    className: "flex flex-wrap justify-center gap-6",
                                    children: e.partners.map((e, t) => (0, i.jsx)(l.P.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: !0
                                        },
                                        transition: {
                                            duration: .5,
                                            delay: .05 * t
                                        },
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        className: "group",
                                        children: (0, i.jsx)("div", {
                                            className: "bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 w-[180px] h-[100px] flex items-center justify-center",
                                            children: (0, i.jsx)(r.default, {
                                                src: e.logo,
                                                alt: e.name,
                                                width: 150,
                                                height: 80,
                                                className: "w-full h-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                                            })
                                        })
                                    }, e.id))
                                }) : (0, i.jsx)("div", {
                                    className: "text-center py-12 bg-gray-800 rounded-xl",
                                    children: (0, i.jsx)("p", {
                                        className: "text-gray-400 text-lg font-semibold",
                                        children: "Coming Soon"
                                    })
                                })]
                            }, e.id))
                        })]
                    })
                })
        },
        95435: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                Header: () => u
            });
            var i = a(95155),
                l = a(12115),
                r = a(6874),
                s = a.n(r),
                n = a(66766),
                o = a(14407),
                c = a(60760),
                d = a(29911);
            let x = (0, a(55028).default)(() => Promise.all([a.e(4946), a.e(6183), a.e(2546)]).then(a.bind(a, 87535)).then(e => e.ConnectWalletButton), {
                loadableGenerated: {
                    webpack: () => [87535]
                },
                ssr: !1,
                loading: () => (0, i.jsx)("div", {
                    className: "relative",
                    children: (0, i.jsxs)("div", {
                        className: "relative group",
                        children: [(0, i.jsx)("div", {
                            className: "absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl blur-md opacity-75 animate-pulse"
                        }), (0, i.jsx)("div", {
                            className: "relative px-8 py-3 bg-black rounded-xl overflow-hidden",
                            children: (0, i.jsx)("span", {
                                className: "relative font-pretendard font-bold text-lg bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent",
                                children: "Buy $ODIN"
                            })
                        })]
                    })
                })
            });
            var m = a(36748),
                h = a(23312),
                p = a(3612);
            let u = () => {
                let [e, t] = (0, l.useState)(!1), [a, r] = (0, l.useState)(""), {
                    scrollPosition: u
                } = (0, p.M)();
                (0, l.useEffect)(() => {
                    let e = () => {
                        let e = h.I.map(e => document.getElementById(e.id)).filter(Boolean).find(e => {
                            if (!e) return !1;
                            let t = e.getBoundingClientRect();
                            return t.top <= 100 && t.bottom >= 100
                        });
                        e && r(e.id)
                    };
                    return window.addEventListener("scroll", e), e(), () => window.removeEventListener("scroll", e)
                }, []);
                let b = e => {
                    let a = e.replace("#", ""),
                        i = document.getElementById(a);
                    i && (t(!1), setTimeout(() => {
                        let e = i.getBoundingClientRect().top + window.pageYOffset - 80;
                        window.scrollTo({
                            top: e,
                            behavior: "smooth"
                        })
                    }, 100))
                };
                return (0, i.jsxs)("header", {
                    className: (0, m.cn)("fixed top-0 left-0 right-0 z-50 transition-all duration-300 antialiased", u > 50 ? "bg-[#fbdfb0]/100 backdrop-blur-md shadow-lg border-b border-[#fbdfb0]/80" : "bg-[#fbdfb0]/100 backdrop-blur-sm"),
                    children: [(0, i.jsx)("div", {
                        className: "container mx-auto px-4 md:px-8",
                        children: (0, i.jsxs)("nav", {
                            className: "flex items-center justify-between h-20",
                            children: [(0, i.jsx)(s(), {
                                href: "/",
                                className: "flex items-center",
                                children: (0, i.jsx)(o.P.div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    className: "relative",
                                    children: (0, i.jsx)(n.default, {
                                        src: "/header-logo.webp",
                                        alt: "Free Style",
                                        width: 140,
                                        height: 40,
                                        priority: !0,
                                        className: "h-auto"
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: "hidden lg:flex items-center space-x-8",
                                children: [h.I.map(e => (0, i.jsx)(o.P.a, {
                                    href: e.href,
                                    onClick: t => {
                                        t.preventDefault(), b(e.href)
                                    },
                                    whileHover: {
                                        y: -2
                                    },
                                    className: (0, m.cn)("text-lg font-medium font-pretendard transition-all duration-200 relative", a === e.id ? "text-white font-semibold" : e.emphasized ? "text-white" : "text-black hover:text-white"),
                                    children: e.emphasized ? (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsxs)("span", {
                                            className: "relative inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-pulse"
                                            }), (0, i.jsx)("span", {
                                                className: "text-2xl font-black font-pretendard tracking-wider",
                                                style: {
                                                    textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 0, 0.6), 0 0 30px rgba(255, 255, 0, 0.4)"
                                                },
                                                children: e.label
                                            }), (0, i.jsx)("span", {
                                                className: "ml-1 text-xl animate-bounce",
                                                children: "\uD83D\uDD25"
                                            })]
                                        })
                                    }) : (0, i.jsx)("span", {
                                        children: e.label
                                    })
                                }, e.id)), (0, i.jsx)(x, {})]
                            }), (0, i.jsx)("button", {
                                onClick: () => t(!e),
                                className: "lg:hidden p-2 text-black hover:text-white transition-colors",
                                "aria-label": "Toggle mobile menu",
                                children: e ? (0, i.jsx)(d.QCr, {
                                    size: 24
                                }) : (0, i.jsx)(d.OXb, {
                                    size: 24
                                })
                            })]
                        })
                    }), (0, i.jsx)(c.N, {
                        children: e && (0, i.jsx)(o.P.div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            transition: {
                                duration: .3
                            },
                            className: "lg:hidden bg-[#fbdfb0]/95 backdrop-blur-md shadow-lg border-t border-[#fbdfb0]/80",
                            children: (0, i.jsx)("div", {
                                className: "container mx-auto px-4 py-4",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col space-y-4",
                                    children: [h.I.map(e => (0, i.jsx)("a", {
                                        href: e.href,
                                        onClick: t => {
                                            t.preventDefault(), b(e.href)
                                        },
                                        className: (0, m.cn)("py-2 text-2xl font-medium font-pretendard transition-colors duration-200 relative block", a === e.id ? "text-white font-semibold" : e.emphasized ? "text-white" : "text-black hover:text-white"),
                                        children: e.emphasized ? (0, i.jsxs)("span", {
                                            className: "relative inline-flex items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-3xl font-black font-pretendard tracking-wider",
                                                style: {
                                                    textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 0, 0.6)"
                                                },
                                                children: e.label
                                            }), (0, i.jsx)("span", {
                                                className: "ml-2 text-2xl",
                                                children: "\uD83D\uDD25"
                                            }), (0, i.jsx)("span", {
                                                className: "absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"
                                            })]
                                        }) : (0, i.jsx)("span", {
                                            children: e.label
                                        })
                                    }, e.id)), (0, i.jsx)("div", {
                                        className: "flex items-center space-x-4 pt-4 border-t border-[#fbdfb0]/80",
                                        children: (0, i.jsx)("div", {
                                            className: "w-full",
                                            children: (0, i.jsx)(x, {})
                                        })
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
        },
        98428: (e, t, a) => {
            "use strict";
            a.d(t, {
                ScrollingTextDivider: () => s
            });
            var i = a(95155),
                l = a(14407);
            let r = () => (0, i.jsx)(l.P.span, {
                    className: "inline-block mx-4",
                    animate: {
                        y: [0, -20, 0]
                    },
                    transition: {
                        duration: .6,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    },
                    children: "🥷"
                }),
                s = e => {
                    let {
                        text: t = "GUARDIAN ODIN",
                        speed: a = 20
                    } = e;
                    return (0, i.jsx)("div", {
                        className: "relative w-full overflow-hidden bg-black py-4",
                        children: (0, i.jsxs)(l.P.div, {
                            animate: {
                                x: [0, "-100%"]
                            },
                            transition: {
                                duration: a,
                                repeat: 1 / 0,
                                ease: "linear"
                            },
                            className: "flex whitespace-nowrap items-center",
                            children: [(0, i.jsxs)("span", {
                                className: "inline-flex items-center text-[8vw] lg:text-[6vw] font-black text-orange-500 font-display",
                                children: [t, " ", (0, i.jsx)(r, {}), " ", t, " ", (0, i.jsx)(r, {}), " ", t, " ", (0, i.jsx)(r, {}), " ", t, " ", (0, i.jsx)(r, {})]
                            }), (0, i.jsxs)("span", {
                                className: "inline-flex items-center text-[8vw] lg:text-[6vw] font-black text-orange-500 font-display",
                                children: [t, " ", (0, i.jsx)(r, {}), " ", t, " ", (0, i.jsx)(r, {}), " ", t, " ", (0, i.jsx)(r, {}), " ", t, " ", (0, i.jsx)(r, {})]
                            })]
                        })
                    })
                }
        },
        99240: (e, t, a) => {
            "use strict";
            a.d(t, {
                BGMPlayer: () => o
            });
            var i = a(95155),
                l = a(12115),
                r = a(14407),
                s = a(60760),
                n = a(29911);
            let o = () => {
                let [e, t] = (0, l.useState)(!1), [a, o] = (0, l.useState)(!1), [c, d] = (0, l.useState)(0), [x, m] = (0, l.useState)(!1), [h, p] = (0, l.useState)(!1), u = (0, l.useRef)(null), b = l.useMemo(() => ["/neva_lose.mp3", "/move_on.mp3"], []);
                return (0, l.useEffect)(() => {
                    let a = new Audio;
                    u.current = a, a.src = b[0], a.volume = .5, a.addEventListener("ended", () => {
                        let e = (c + 1) % b.length;
                        d(e), a.src = b[e], h || a.play()
                    });
                    let i = () => {
                        x || (m(!0), a.play().then(() => t(!0)).catch(() => {
                            t(!1)
                        }))
                    };
                    "complete" === document.readyState ? i() : window.addEventListener("load", i);
                    let l = () => {
                        u.current && !e && x && !h && u.current.play().then(() => t(!0)).catch(() => {})
                    };
                    return document.addEventListener("click", l, {
                        once: !0
                    }), document.addEventListener("touchstart", l, {
                        once: !0
                    }), () => {
                        a.pause(), a.removeEventListener("ended", () => {}), document.removeEventListener("click", l), document.removeEventListener("touchstart", l)
                    }
                }, [c, x, e, b, h]), (0, l.useEffect)(() => {
                    u.current && (u.current.src = b[c], e && u.current.play())
                }, [c, e, b]), (0, l.useEffect)(() => {
                    let a = () => {
                        u.current && e && (u.current.pause(), t(!1))
                    };
                    return window.addEventListener("pauseBGM", a), () => window.removeEventListener("pauseBGM", a)
                }, [e]), (0, i.jsx)(r.P.div, {
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: 1,
                        duration: .5
                    },
                    className: "fixed bottom-8 right-8 z-50",
                    children: (0, i.jsxs)(r.P.div, {
                        whileHover: {
                            scale: 1.1
                        },
                        className: "relative",
                        children: [(0, i.jsx)(s.N, {
                            children: e && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(r.P.div, {
                                    className: "absolute inset-0 bg-black rounded-full",
                                    initial: {
                                        scale: 1,
                                        opacity: .5
                                    },
                                    animate: {
                                        scale: 1.5,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: 1 / 0
                                    }
                                }), (0, i.jsx)(r.P.div, {
                                    className: "absolute inset-0 bg-black rounded-full",
                                    initial: {
                                        scale: 1,
                                        opacity: .5
                                    },
                                    animate: {
                                        scale: 1.3,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: 1 / 0,
                                        delay: .5
                                    }
                                })]
                            })
                        }), (0, i.jsxs)(r.P.button, {
                            onClick: () => {
                                u.current && (e ? (u.current.pause(), p(!0)) : (u.current.play(), p(!1)), t(!e))
                            },
                            className: "relative w-16 h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center group overflow-hidden border-2 border-white",
                            whileTap: {
                                scale: .95
                            },
                            children: [(0, i.jsx)(r.P.div, {
                                animate: e ? {
                                    rotate: 360
                                } : {
                                    rotate: 0
                                },
                                transition: {
                                    duration: 3,
                                    repeat: e ? 1 / 0 : 0,
                                    ease: "linear"
                                },
                                children: e ? (0, i.jsx)(n.BHn, {
                                    size: 24
                                }) : (0, i.jsx)(n.gSK, {
                                    size: 20
                                })
                            }), (0, i.jsx)("div", {
                                className: "absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1",
                                children: b.map((e, t) => (0, i.jsx)("div", {
                                    className: "w-1 h-1 rounded-full transition-colors duration-300 ".concat(t === c ? "bg-white" : "bg-white/30")
                                }, t))
                            })]
                        }), (0, i.jsx)(r.P.button, {
                            onClick: () => {
                                u.current && (u.current.muted = !a, o(!a))
                            },
                            className: "absolute -top-2 -left-2 w-8 h-8 bg-white text-black rounded-full shadow-lg flex items-center justify-center border border-black",
                            initial: {
                                scale: 0
                            },
                            animate: {
                                scale: +!!e
                            },
                            whileTap: {
                                scale: .9
                            },
                            children: a ? (0, i.jsx)(n.FZ2, {
                                size: 14
                            }) : (0, i.jsx)(n.pPd, {
                                size: 14
                            })
                        })]
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [6711, 2145, 1454, 8441, 1684, 7358], () => t(19835)), _N_E = e.O()
    }
]);
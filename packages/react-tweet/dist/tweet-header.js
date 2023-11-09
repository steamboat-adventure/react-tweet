import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { getFollowUrl, getUserUrl } from './utils.js';
import { defaultComponents } from './components.js';
import s from './tweet-header.module.css';
export const TweetHeader = ({ tweet , components  })=>{
    const url = getUserUrl(tweet);
    var _components_AvatarImg;
    const AvatarImg = (_components_AvatarImg = components == null ? void 0 : components.AvatarImg) != null ? _components_AvatarImg : defaultComponents.AvatarImg;
    return /*#__PURE__*/ _jsxs("div", {
        className: s.header,
        children: [
            /*#__PURE__*/ _jsxs("a", {
                href: url,
                className: s.avatar,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: s.avatarOverflow,
                        children: /*#__PURE__*/ _jsx(AvatarImg, {
                            src: tweet.user.profile_image_url_https,
                            alt: tweet.user.name,
                            width: 48,
                            height: 48
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: s.avatarOverflow,
                        children: /*#__PURE__*/ _jsx("div", {
                            className: s.avatarShadow
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: s.author,
                children: [
                    /*#__PURE__*/ _jsxs("a", {
                        href: url,
                        className: s.authorLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: s.authorLinkText,
                                children: /*#__PURE__*/ _jsx("span", {
                                    title: tweet.user.name,
                                    children: tweet.user.name
                                })
                            }),
                            tweet.user.verified || tweet.user.is_blue_verified && /*#__PURE__*/ _jsx("div", {
                                className: clsx(s.authorVerified, tweet.user.is_blue_verified ? s.verifiedBlue : s.verifiedOld),
                                children: /*#__PURE__*/ _jsx("svg", {
                                    viewBox: "0 0 24 24",
                                    "aria-label": "Verified account",
                                    role: "img",
                                    className: s.authorVerifiedIcon,
                                    children: /*#__PURE__*/ _jsx("g", {
                                        children: /*#__PURE__*/ _jsx("path", {
                                            d: "M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: s.authorMeta,
                        children: [
                            /*#__PURE__*/ _jsx("a", {
                                href: url,
                                className: s.username,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ _jsxs("span", {
                                    title: `@${tweet.user.screen_name}`,
                                    children: [
                                        "@",
                                        tweet.user.screen_name
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: s.authorFollow,
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: s.separator,
                                        children: "\xb7"
                                    }),
                                    /*#__PURE__*/ _jsx("a", {
                                        href: getFollowUrl(tweet),
                                        className: s.follow,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Follow"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("a", {
                href: url,
                className: s.brand,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "View on Twitter",
                children: /*#__PURE__*/ _jsx("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    className: s.twitterIcon,
                    children: /*#__PURE__*/ _jsx("g", {
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                        })
                    })
                })
            })
        ]
    });
};

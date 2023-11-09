import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import s from './tweet-link.module.css';
export const TweetLink = ({ href , className , children , ...props })=>/*#__PURE__*/ _jsx("a", {
        href: href,
        className: clsx(s.root, className),
        target: "_blank",
        rel: "noopener noreferrer",
        ...props,
        children: children
    });

'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import format from 'date-fns/format/index.js';
import { getTweetUrl } from './utils.js';
import useMounted from './lib/use-mounted.js';
import s from './tweet-info-created-at.module.css';
export const TweetInfoCreatedAt = ({ tweet  })=>{
    const mounted = useMounted();
    const createdAt = typeof window !== 'undefined' && mounted ? new Date(tweet.created_at) : null;
    return !createdAt ? null : /*#__PURE__*/ _jsx("a", {
        className: s.root,
        href: getTweetUrl(tweet),
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": format(createdAt, 'h:mm a · MMM d, y'),
        children: /*#__PURE__*/ _jsx("time", {
            dateTime: createdAt.toISOString(),
            children: format(createdAt, 'h:mm a · MMM d, y')
        })
    });
};

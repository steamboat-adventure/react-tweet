import { jsx as _jsx } from "react/jsx-runtime";
import { getTweetUrl, formatNumber } from './utils.js';
import s from './tweet-replies.module.css';
export const TweetReplies = ({ tweet  })=>/*#__PURE__*/ _jsx("div", {
        className: s.replies,
        children: /*#__PURE__*/ _jsx("a", {
            className: s.link,
            href: getTweetUrl(tweet),
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ _jsx("span", {
                className: s.text,
                children: tweet.conversation_count > 0 ? `Read ${formatNumber(tweet.conversation_count)} replies` : 'Read more on Twitter'
            })
        })
    });

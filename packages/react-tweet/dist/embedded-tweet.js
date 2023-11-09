import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TweetContainer } from './tweet-container.js';
import { TweetHeader } from './tweet-header.js';
import { TweetInReplyTo } from './tweet-in-reply-to.js';
import { TweetBody } from './tweet-body.js';
import { TweetMedia } from './tweet-media.js';
import { TweetInfo } from './tweet-info.js';
export const EmbeddedTweet = ({ tweet , components  })=>{
    var _tweet_mediaDetails;
    /*#__PURE__*/ return _jsxs(TweetContainer, {
        children: [
            /*#__PURE__*/ _jsx(TweetHeader, {
                tweet: tweet,
                components: components
            }),
            tweet.in_reply_to_status_id_str && /*#__PURE__*/ _jsx(TweetInReplyTo, {
                tweet: tweet
            }),
            /*#__PURE__*/ _jsx(TweetBody, {
                tweet: tweet
            }),
            ((_tweet_mediaDetails = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails.length) ? /*#__PURE__*/ _jsx(TweetMedia, {
                tweet: tweet,
                components: components
            }) : null,
            /*#__PURE__*/ _jsx(TweetInfo, {
                tweet: tweet
            })
        ]
    });
};

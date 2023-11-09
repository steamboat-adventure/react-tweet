import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { getMediaUrl, getTweetUrl } from './utils.js';
import { defaultComponents } from './components.js';
import { TweetMediaVideo } from './tweet-media-video.js';
import s from './tweet-media.module.css';
export const TweetMedia = ({ tweet , components  })=>{
    var _tweet_mediaDetails, _tweet_mediaDetails1;
    var _tweet_mediaDetails_length;
    const length = (_tweet_mediaDetails_length = (_tweet_mediaDetails = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails.length) != null ? _tweet_mediaDetails_length : 0;
    var _components_MediaImg;
    const MediaImg = (_components_MediaImg = components == null ? void 0 : components.MediaImg) != null ? _components_MediaImg : defaultComponents.MediaImg;
    return /*#__PURE__*/ _jsxs("div", {
        className: s.root,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: s.skeleton
            }),
            /*#__PURE__*/ _jsx("div", {
                className: clsx(s.mediaWrapper, length > 1 && s.grid2Columns, length === 3 && s.grid3, length > 4 && s.grid2x2),
                children: (_tweet_mediaDetails1 = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails1.map((media)=>media.type === 'photo' ? /*#__PURE__*/ _jsx("a", {
                        href: getTweetUrl(tweet),
                        className: clsx(s.mediaContainer, s.mediaLink),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ _jsx(MediaImg, {
                            src: getMediaUrl(media, 'small'),
                            alt: media.ext_alt_text || 'Image',
                            className: s.image,
                            draggable: true
                        })
                    }, media.media_url_https) : /*#__PURE__*/ _jsx("div", {
                        className: s.mediaContainer,
                        children: /*#__PURE__*/ _jsx(TweetMediaVideo, {
                            media: media
                        })
                    }, media.media_url_https))
            })
        ]
    });
};

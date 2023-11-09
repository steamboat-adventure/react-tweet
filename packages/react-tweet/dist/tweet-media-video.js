'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { getMediaUrl } from './utils.js';
import mediaStyles from './tweet-media.module.css';
import s from './tweet-media-video.module.css';
export const TweetMediaVideo = ({ media  })=>{
    const [playButton, setPlayButton] = useState(true);
    const { variants  } = media.video_info;
    const mp4Video = useMemo(()=>{
        var _b_bitrate, _a_bitrate;
        const sortedMp4Videos = variants.filter((vid)=>vid.content_type === 'video/mp4').sort((a, b)=>((_b_bitrate = b.bitrate) != null ? _b_bitrate : 0) - ((_a_bitrate = a.bitrate) != null ? _a_bitrate : 0));
        // Skip the highest quality video and use the next quality
        return sortedMp4Videos.length > 1 ? sortedMp4Videos[1] : sortedMp4Videos[0];
    }, [
        variants
    ]);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("video", {
                className: mediaStyles.image,
                poster: getMediaUrl(media, 'small'),
                controls: !playButton,
                draggable: true,
                muted: true,
                preload: "metadata",
                tabIndex: playButton ? -1 : 0,
                children: /*#__PURE__*/ _jsx("source", {
                    src: mp4Video.url,
                    type: mp4Video.content_type
                })
            }),
            playButton && /*#__PURE__*/ _jsx("button", {
                type: "button",
                className: s.videoButton,
                "aria-label": "View video on Twitter",
                onClick: (e)=>{
                    const video = e.currentTarget.previousSibling;
                    e.preventDefault();
                    setPlayButton(false);
                    video.play();
                    video.focus();
                },
                children: /*#__PURE__*/ _jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: s.videoButtonIcon,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ _jsx("g", {
                        children: /*#__PURE__*/ _jsx("path", {
                            d: "M21 12L4 2v20l17-10z"
                        })
                    })
                })
            })
        ]
    });
};

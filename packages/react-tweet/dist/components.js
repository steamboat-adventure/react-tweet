import { jsx as _jsx } from "react/jsx-runtime";
import { TweetNotFound } from './tweet-not-found.js';
// Export the not found component as it could be useful to manually import it for SSG
export { TweetNotFound };
const AvatarImg = (props)=>/*#__PURE__*/ _jsx("img", {
        ...props
    });
const MediaImg = (props)=>/*#__PURE__*/ _jsx("img", {
        ...props
    });
export const defaultComponents = {
    TweetNotFound,
    AvatarImg,
    MediaImg
};

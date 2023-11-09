import { jsx as _jsx } from "react/jsx-runtime";
import { getHashtagUrl, getUserUrl, getSymbolUrl } from './utils.js';
import { TweetLink } from './tweet-link.js';
import s from './tweet-body.module.css';
function addEntities(result, entities, type) {
    for (const entity of entities){
        for (const [i, item] of result.entries()){
            if (entity.indices[0] < item.indices[0] || entity.indices[1] > item.indices[1]) {
                continue;
            }
            const items = [
                {
                    ...entity,
                    type
                }
            ];
            if (item.indices[0] < entity.indices[0]) {
                items.unshift({
                    indices: [
                        item.indices[0],
                        entity.indices[0]
                    ],
                    type: 'text'
                });
            }
            if (item.indices[1] > entity.indices[1]) {
                items.push({
                    indices: [
                        entity.indices[1],
                        item.indices[1]
                    ],
                    type: 'text'
                });
            }
            result.splice(i, 1, ...items);
            break; // Break out of the loop to avoid iterating over the new items
        }
    }
}
function getEntities(tweet) {
    const result = [
        {
            indices: tweet.display_text_range,
            type: 'text'
        }
    ];
    addEntities(result, tweet.entities.hashtags, 'hashtag');
    addEntities(result, tweet.entities.user_mentions, 'mention');
    addEntities(result, tweet.entities.urls, 'url');
    addEntities(result, tweet.entities.symbols, 'symbol');
    if (tweet.entities.media) {
        addEntities(result, tweet.entities.media, 'media');
    }
    return result;
}
export const TweetBody = ({ tweet  })=>{
    const entities = getEntities(tweet);
    // Update display_text_range to work w/ Array.from
    // Array.from is unicode aware, unlike string.slice()
    if (tweet.entities.media && tweet.entities.media[0].indices[0] < tweet.display_text_range[1]) {
        tweet.display_text_range[1] = tweet.entities.media[0].indices[0];
    }
    const lastEntity = entities.at(-1);
    if (lastEntity && lastEntity.indices[1] > tweet.display_text_range[1]) {
        lastEntity.indices[1] = tweet.display_text_range[1];
    }
    return /*#__PURE__*/ _jsx("p", {
        className: s.root,
        children: entities.map((item, i)=>{
            const text = Array.from(tweet.text).splice(item.indices[0], item.indices[1] - item.indices[0]).join('');
            switch(item.type){
                case 'hashtag':
                    return /*#__PURE__*/ _jsx(TweetLink, {
                        href: getHashtagUrl(item),
                        children: text
                    }, i);
                case 'mention':
                    return /*#__PURE__*/ _jsx(TweetLink, {
                        href: getUserUrl(item.screen_name),
                        children: text
                    }, i);
                case 'url':
                    return /*#__PURE__*/ _jsx(TweetLink, {
                        href: item.expanded_url,
                        children: item.display_url
                    }, i);
                case 'symbol':
                    return /*#__PURE__*/ _jsx(TweetLink, {
                        href: getSymbolUrl(item),
                        children: text
                    }, i);
                case 'media':
                    // Media text is currently never displayed, some tweets however might have indices
                    // that do match `display_text_range` so for those cases we ignore the content.
                    return undefined;
                default:
                    return /*#__PURE__*/ _jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: text
                        }
                    }, i);
            }
        })
    });
};

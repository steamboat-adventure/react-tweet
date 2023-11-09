/// <reference types="react" />
import type { Tweet } from './api/index.js';
import { type TweetComponents } from './components.js';
type Props = {
    tweet: Tweet;
    components?: TweetComponents;
};
export declare const TweetMedia: ({ tweet, components }: Props) => JSX.Element;
export {};

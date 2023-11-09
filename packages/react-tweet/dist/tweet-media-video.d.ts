/// <reference types="react" />
import type { MediaAnimatedGif, MediaVideo } from './api/index.js';
type Props = {
    media: MediaAnimatedGif | MediaVideo;
};
export declare const TweetMediaVideo: ({ media }: Props) => JSX.Element;
export {};

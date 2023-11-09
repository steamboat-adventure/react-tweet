/// <reference types="react" />
import { TweetNotFound } from './tweet-not-found.js';
type AvatarImgProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};
type MediaImgProps = {
    src: string;
    alt: string;
    className?: string;
    draggable?: boolean;
};
export type TweetComponents = Partial<typeof defaultComponents>;
export { TweetNotFound };
export declare const defaultComponents: {
    TweetNotFound: (_props: {
        error?: any;
    }) => JSX.Element;
    AvatarImg: (props: AvatarImgProps) => JSX.Element;
    MediaImg: (props: MediaImgProps) => JSX.Element;
};

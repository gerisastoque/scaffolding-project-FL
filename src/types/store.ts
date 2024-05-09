import { PostData } from './postData';
import { TweetData } from './tweetData';

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
	accountSettings = 'accountSettings',
	changePassword = 'changePassword',
	createAccount = 'createAccount',
	creatPostImage = 'creatPostImage',
	creatPostTweet = 'creatPostTweet',
	dashboard = 'dashboard',
	login = 'login',
	profilePost = 'profilePost',
	profileTweet = 'profileTweet',
}

export type AppState = {
	PostData: PostData[];
	tweetData: TweetData[];
	screens: Screens;
};

// tipado de lo general (ESCRIBIR EN MAYUSCULA)

export enum NavigationActions {
	'NAVIGATE' = 'NAVIGATE',
}

export interface navigationAction {
	action: NavigationActions.NAVIGATE;
	payload: Screens;
}

export enum PostDataActions {
	'ADD' = 'ADD',
	'GET' = 'GET',
}

export interface AddPostAction {
	action: PostDataActions.ADD;
	payload: PostData;
}

export interface GetPostAction {
	action: PostDataActions.GET;
	payload: PostData;
}

export enum TweetDataActions {
	'ADD' = 'ADD',
	'GET' = 'GET',
}

export interface AddTweetAction {
	action: TweetDataActions.ADD;
	payload: TweetData;
}

export interface GetTweetAction {
	action: TweetDataActions.GET;
	payload: TweetData;
}

export type Actions = navigationAction | AddPostAction | GetPostAction | AddTweetAction | GetTweetAction;

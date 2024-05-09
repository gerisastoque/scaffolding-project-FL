import {
	navigationAction,
	NavigationActions,
	Screens,
	PostDataActions,
	GetPostAction,
	AddPostAction,
	TweetDataActions,
	AddTweetAction,
	GetTweetAction,
	Actions,
} from '../types/store';
//import PostsService from '../services/Posts'
//import firebase from "../utils/firebase";

// export const navigate = (screen: Screens): navigationAction => {
// 	return {
// 		action: NavigationActions.NAVIGATE,
// 		payload: screen,
// 	};
// };

//export const getPosts = async (): Promise<GetPostAction> => {
//const posts = await PostsService.get();
//const posts =await firebase.getPostFromDB();
// return {
//action: PostDataActions.GET,
//payload: posts
// }
//};

// export const addNewPost = async ({ payload }: Pick<AddPostAction, 'payload'>): Promise<Actions> => {
// 	//await firebase.postDB(payload);
// 	// return {
// 	//    action: PostDataActions.ADD,
// 	//   payload
// 	//}
// };

// export const getTweets = async (): Promise<GetTweetAction> => {
// 	//const tweet = await TweetService.get();
// 	//const tweet =await firebase.getPostFromDB();
// 	// return {
// 	//action: TweetDataActions.GET,
// 	//payload: tweet
// 	// }
// };

// export const addNewTweet = async ({ payload }: Pick<GetTweetAction, 'payload'>): Promise<Actions> => {
// 	//await firebase.postDB(payload);
// 	// return {
// 	//   action: TweetDataActions.ADD,
// 	// payload
// 	//}
// };

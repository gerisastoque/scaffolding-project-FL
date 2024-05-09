import { Actions, AppState, NavigationActions, PostDataActions, TweetDataActions } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case NavigationActions.NAVIGATE:
			return {
				...currentState,
				screen: payload,
			};

		case PostDataActions.ADD:
			return {
				...currentState,
				posts: [payload, ...currentState.posts],
			};

		case PostDataActions.GET:
			return {
				...currentState,
				posts: payload,
			};

		case TweetDataActions.ADD:
			return {
				...currentState,
				posts: [payload, ...currentState.posts],
			};
		case TweetDataActions.GET:
			return {
				...currentState,
				posts: payload,
			};

		case 'SETUSER':
			currentState.user = action.payload;
			break;

		default:
			return currentState;
	}
};

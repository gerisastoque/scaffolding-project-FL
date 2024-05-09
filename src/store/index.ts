//import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer, Screens } from '../types/store';
import { reducer } from './reducer';
import { navigate } from './actions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { navigate, setUserCredentials } from './actions';

onAuthStateChanged(auth, (user) => {
	if (user) {
		user.uid !== null ? dispatch(setUserCredentials(user.uid)) : '';
		dispatch(navigate(Screens.dashboard));
	} else {
		dispatch(navigate(Screens.login));
	}
});

const emptyState: AppState = {
	screens: Screens.dashboard,
	PostData: [],
	tweetData: [],
};

export let appState = emptyState,

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};

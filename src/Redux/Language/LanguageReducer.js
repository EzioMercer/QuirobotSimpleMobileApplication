import {SET_LANGUAGE} from './LanguageAction';

const LANGUAGE_INITIAL_STATE = 'en';

export default function languageReducer(state = LANGUAGE_INITIAL_STATE, action) {
	switch (action.type) {
		case SET_LANGUAGE:
			return action.payload;
		default:
			return state;
	}
}

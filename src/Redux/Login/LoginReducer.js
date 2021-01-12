import {LOGIN} from './LoginAction';

const LOGIN_INITIAL_STATE = {
	provider: '',
	recaptcha_response: '',
};

export default function loginReducer(state = LOGIN_INITIAL_STATE, action) {
	switch (action.type) {
		case LOGIN:
			return {...action.payload};
		default:
			return state;
	}
}

import {combineReducers} from 'redux';
import languageReducer from './Language/LanguageReducer';
import loginReducer from './Login/LoginReducer';

export default combineReducers({
	languageReducer,
	loginReducer
});

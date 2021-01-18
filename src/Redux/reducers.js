import {combineReducers} from 'redux';
import languageReducer from './Language/LanguageReducer';
import loginReducer from './Login/LoginReducer';
import organizationsReducer from './Organizations/OrganizationsReducer';
import botsReducer from './Bots/BotsReducer';

export default combineReducers({
	botsReducer,
	languageReducer,
	loginReducer,
	organizationsReducer
});

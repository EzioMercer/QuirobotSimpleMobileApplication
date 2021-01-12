import TranslationEN from '../Translations/TranslationEN.json';
import TranslationRU from '../Translations/TranslationRU.json';
import TranslationAZ from '../Translations/TranslationAZ.json';
import {useSelector} from 'react-redux';

export default function useTranslate(target) {
	const lang = useSelector(state => state.languageReducer);
	const file = {
		'en': TranslationEN,
		'ru': TranslationRU,
		'az': TranslationAZ
	};

	return file[lang][target];
}

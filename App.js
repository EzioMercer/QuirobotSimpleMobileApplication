import React from 'react';
import rootReducer from './src/Redux/reducers';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import Router from './src/Router/Router';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: [
		'languageReducer',
		'loginReducer'
	],
	blacklist: [
	],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
	persistedReducer,
	applyMiddleware(thunk)
);

const persistor = persistStore(store);

export default function App () {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router/>
			</PersistGate>
		</Provider>
	);
};

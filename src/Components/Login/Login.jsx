import React, {useState} from 'react';
import {Button, Body, CheckBox, Container, Content, Form, Input, Item, Label, ListItem, Text, View} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import useTranslate from '../../CustomHooks/useTranslate';
import Hedaer from '../Header/Hedaer';
import {signIn} from '../../Redux/Login/LoginAction';
import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';

export default function Login() {

	const dispatch = useDispatch();
	const lang = useSelector(state => state.languageReducer);
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [terms, setTerms] = useState(false);
	const loginLabel = useTranslate('loginPage.login');
	const passwordLabel = useTranslate('loginPage.password');
	const siteKey = '6LdJfysUAAAAAMH8Uudw74USsZfF1QKCFzHUOxUv';
	// const baseUrl = 'https://www.google.com/recaptcha/api2/userverify';
	const baseUrl = 'https://control.quriobot.com';
	let recaptcha;

	const onMessage = event => {
		if (event && event.nativeEvent.data) {
			if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
				recaptcha.hide();
				return;
			} else {
				console.log('Verified code from Google', event.nativeEvent.data);
				setTimeout(() => {
					recaptcha.hide();
					dispatch(signIn(login, password, event.nativeEvent.data))
				}, 1500);
			}
		}
	};

	return (
		<Container>
			<Hedaer title="loginPage"/>
			<Content>
				{
					terms ? (
						<Form>
							<Item floatingLabel>
								<Label>{loginLabel}</Label>
								<Input onChangeText={(value) => setLogin(value)}/>
							</Item>
							<Item floatingLabel>
								<Label>{passwordLabel}</Label>
								<Input secureTextEntry onChangeText={(value) => setPassword(value)}/>
							</Item>
							<ListItem>
								<CheckBox checked={terms} onPress={() => setTerms(!terms)}/>
								<Body>
									<Text>Apply terms and conditions</Text>
								</Body>
							</ListItem>
							<ConfirmGoogleCaptcha
								ref={_ref => recaptcha = _ref}
								siteKey={siteKey}
								baseUrl={baseUrl}
								languageCode={lang}
								onMessage={onMessage}
							/>
							<Button full style={{marginTop: 16}} onPress={() => recaptcha.show()}>
								<Text>Sign in</Text>
							</Button>
						</Form>
					) : (
						<Form>
							<ListItem>
								<CheckBox checked={terms} onPress={() => setTerms(!terms)}/>
								<Body>
									<Text>Apply terms and conditions</Text>
								</Body>
							</ListItem>
						</Form>
					)
				}
			</Content>
		</Container>
	);
}

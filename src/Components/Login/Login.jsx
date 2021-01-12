import React, {useState} from 'react';
import {Button, Body, CheckBox, Container, Content, Form, Input, Item, Label, ListItem, Text, View} from 'native-base';
import { useDispatch } from 'react-redux';
import useTranslate from '../../CustomHooks/useTranslate';
import Hedaer from '../Header/Hedaer';
import {signIn} from '../../Redux/Login/LoginAction';

export default function Login() {

	const dispatch = useDispatch();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [terms, setTerms] = useState(false);
	const loginLabel = useTranslate('loginPage.login');
	const passwordLabel = useTranslate('loginPage.password');

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
							<Button full style={{marginTop: 16}} onPress={() => dispatch(signIn(login, password))}>
								<Text>Sign in</Text>
							</Button>
						</Form>
					) : (
						<Form>
							<ListItem>
								<CheckBox checked={terms} onPress={() => setTerms(true)}/>
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

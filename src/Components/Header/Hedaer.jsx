import React from 'react';
import {Body, Button, Header, Icon, Left, Picker, Right, Title, View} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setLanguage} from '../../Redux/Language/LanguageAction';
import useTranslate from '../../CustomHooks/useTranslate';

export default function Hedaer (props) {
	const dispatch = useDispatch();
	const lang = useSelector(state => state.languageReducer);
	const navigation = useNavigation();

	return (
			<Header>
				{
					navigation.canGoBack() ?
						<Left>
							<Button transparent onPress={() => navigation.goBack()}>
								<Icon name='arrow-back'/>
							</Button>
						</Left> : null
				}
				<Body>
					<Title>{useTranslate(`pages.${props.title}`)}</Title>
				</Body>
				<Right>
					<View style={{
						width: 85
					}}>
						<Picker
							style={{
								color: 'white'
							}}
							mode="dropdown"
							selectedValue={lang}
							onValueChange={(value) => dispatch(setLanguage(value))}
						>
							<Picker.Item label="EN" value="en" />
							<Picker.Item label="RU" value="ru" />
							<Picker.Item label="AZ" value="az" />
						</Picker>
					</View>
				</Right>
			</Header>
	);
}

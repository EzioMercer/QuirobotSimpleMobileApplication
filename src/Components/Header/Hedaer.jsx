import React from 'react';
import {Body, Button, Header, Icon, Left, Picker, Right, Title, View} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setLanguage} from '../../Redux/Language/LanguageAction';
import useTranslate from '../../CustomHooks/useTranslate';
import Organizations from '../Organizations/Organizations';

export default function MyHeader (props) {
	const dispatch = useDispatch();
	const lang = useSelector(state => state.languageReducer);
	const isSigned = useSelector(state => state.loginReducer).isSigned;
	const navigation = useNavigation();

	return (
			<Header>
				{
					navigation.canGoBack() &&
						<Left style={{flex: 1}}>
							<Button transparent onPress={() => navigation.goBack()}>
								<Icon name='arrow-back'/>
							</Button>
						</Left>
				}
				<Body style={{flex: 5}}>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<View style={{flex: 1, justifyContent: 'center'}}>
							<Title>{useTranslate(`pages.${props.title}`)}</Title>
						</View>
						<View style={{flex: 2}}>
							{isSigned && <Organizations/>}
						</View>
					</View>
				</Body>
				<Right style={{flex: 2}}>
					<View style={{width: '85%', backgroundColor: 'transparent'}}>
						<Picker
							style={{
								color: 'white'
							}}
							mode="dropdown"
							selectedValue={lang}
							onValueChange={(value) => dispatch(setLanguage(value))}
						>
							<Picker.Item label="EN" value="en"/>
							<Picker.Item label="RU" value="ru"/>
							<Picker.Item label="AZ" value="az"/>
						</Picker>
					</View>
				</Right>
			</Header>
	);
}

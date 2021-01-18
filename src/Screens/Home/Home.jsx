import React from 'react';
import {Container, Content, Text} from 'native-base';
import MyHeader from '../../Components/Header/Hedaer';
import Bots from '../../Components/Bots/Bots';

export default function Home() {
	return (
		<Container>
			<MyHeader title="homePage"/>
			<Content>
				<Bots/>
			</Content>
		</Container>
	)
}

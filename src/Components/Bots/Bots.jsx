import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'native-base';
import {getBots} from '../../Redux/Bots/BotsAction';

export default function Bots() {

	const dispatch = useDispatch();
	const selectedOrganization = useSelector(state => state.organizationsReducer).selected;
	const bots = useSelector(state => state.botsReducer).items || [];

	useEffect(() => {
		dispatch(getBots(selectedOrganization));
	}, [selectedOrganization]);

	return bots.map((bot, index) => <Text key={index}>{bot.name}</Text>);
}

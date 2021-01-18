import React, {useEffect, useState} from 'react';
import {Picker} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {changeSelectedOrganization, getOrganizations} from '../../Redux/Organizations/OrganizationsAction';

export default function Organizations() {

	const dispatch = useDispatch();
	const organizations = useSelector(state => state.organizationsReducer).items || [];
	const [selectedOrganization, setSelectedOrganization] = useState(organizations[0]);

	useEffect(() => {
		dispatch(getOrganizations());
	}, []);

	return (
		<Picker
			style={{
				color: 'white',
			}}
			mode="dropdown"
			selectedValue={selectedOrganization}
			onValueChange={value => {
				setSelectedOrganization(value);
				dispatch(changeSelectedOrganization(value));
			}}
		>
			{
				organizations.map((organization, index) => <Picker.Item key={index} label={organization.name} value={organization.id}/>)
			}
		</Picker>
	);

}

import {CHANGE_SELECTED_ORGANIZATION, RECEIVED_ORGANIZATIONS} from './OrganizationsAction';

const ORGANIZATIONS_INITIAL_STATE = {selected: ''};

export default function organizationsReducer(state = ORGANIZATIONS_INITIAL_STATE, action) {
	switch (action.type) {
		case RECEIVED_ORGANIZATIONS:
			return {selected: action.payload.items[0].id, ...action.payload};
		case CHANGE_SELECTED_ORGANIZATION:
			return {...state, selected: action.payload}
		default:
			return state;
	}
}

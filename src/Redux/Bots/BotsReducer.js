import {RECEIVED_BOTS} from './BotsAction';

const BOTS_INITIAL_STATE = {};

export default function botsReducer(state = BOTS_INITIAL_STATE, action) {
	switch (action.type) {
		case RECEIVED_BOTS:
			return {...action.payload};
		default:
			return state;
	}
}

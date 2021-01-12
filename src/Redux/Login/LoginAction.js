import {useDispatch} from 'react-redux';

export const LOGIN = 'LOGIN';

function signInAction(data) {
	return {
		type: LOGIN,
		payload: data
	};
}

export function signIn(login, password) {
	return (dispatch = useDispatch()) => {
		(async () => {
			try {
				let response = await fetch('https://api.quriobot.com/0.0.1/backoffice/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: login,
						password: password,
						recaptcha_response: ''
					}),
				});

				if (response.ok) {

					let json = await response.json();

					dispatch(signInAction(json));

				} else {
					console.log('(POST SIGN IN) HTTP Error: ' + response.status);
				}

			} catch (e) {
				console.log(e);
			}
		})();
	};
}

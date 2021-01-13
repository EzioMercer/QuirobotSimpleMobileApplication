import {useDispatch} from 'react-redux';

export const LOGIN = 'LOGIN';

function signInAction(data) {
	return {
		type: LOGIN,
		payload: data,
	};
}

export function signIn(login, password, recaptcha) {
	return (dispatch = useDispatch()) => {
		(async () => {
			try {

				console.log(login, password, recaptcha);

				let response = await fetch('https://api.quriobot.com/0.0.1/backoffice/login', {
					method: 'POST',
					headers: {
						'Accept': 'application/vnd.authorized+json',
						'Accept-Encoding': 'gzip, deflate, br',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: login,
						password: password,
						recaptcha_response: recaptcha,
					}),
				});

				if (response.ok) {

					let json = await response.json();

					console.log(json);

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

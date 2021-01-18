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

					dispatch(signInAction(json));

					try {
						let response = await fetch('https://api.quriobot.com/0.0.1/backoffice/organisations/list', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJCb1VzZXJUb2tlbiI6IjEzODY4IiwiYXVkIjoiUXVyaW9ib3QgQ29udHJvbCBSb29tIiwiZXhwIjoxNjEzMzg4MjM5LCJpYXQiOjE2MTA3OTYyMzksImlwIjoiMTc4LjIzNy42Ny4zNCIsImlzcyI6IlF1cmlvYm90IEFQSSIsImp0aSI6IjUxOGNiZTQ1LWZlY2QtNGFkMC05ZDU5LTJkNTAwNjViNjY2MSIsIm5iZiI6Miwic2NvcGVzIjoiYXBpOmFjY2VzcyIsInN1YiI6InN1YmplY3QifQ.LmBx5LTW_ajE7CsCS4GQ4iwKkcagGbojlFghSgV0H73bWk4Uw-mAZ1PdklhBJ2BCebREg09Fdwsycs6ylER1Bg'
							},
							body: JSON.stringify({
								"page_number": 1,
								"page_size": 20,
								"search": null,
								"sort_on": "id",
								"sort_order": "desc"
							}),
						});

						if (response.ok) {

							let json = await response.json();

							for (let organization of json.items) console.log(organization.name);

						} else {
							console.log('(POST 22 SIGN IN) HTTP Error: ' + response.status);
						}

					} catch (e) {
						console.log(e);
					}

				} else {
					console.log('(POST SIGN IN) HTTP Error: ' + response.status);
				}

			} catch (e) {
				console.log(e);
			}
		})();
	};
}

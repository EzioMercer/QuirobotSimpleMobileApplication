import {useDispatch} from 'react-redux';

export const RECEIVED_ORGANIZATIONS = 'RECEIVED_ORGANIZATIONS';
export const CHANGE_SELECTED_ORGANIZATION = 'CHANGE_SELECTED_ORGANIZATION';

function getOrganizationsAction(data) {
	return {
		type: RECEIVED_ORGANIZATIONS,
		payload: data,
	};
}

export function getOrganizations() {
	return (dispatch = useDispatch()) => {
		(async () => {
			try {
				let response = await fetch('https://api.quriobot.com/0.0.1/backoffice/organisations/list', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJCb1VzZXJUb2tlbiI6IjEzODY4IiwiYXVkIjoiUXVyaW9ib3QgQ29udHJvbCBSb29tIiwiZXhwIjoxNjEzMzg4MjM5LCJpYXQiOjE2MTA3OTYyMzksImlwIjoiMTc4LjIzNy42Ny4zNCIsImlzcyI6IlF1cmlvYm90IEFQSSIsImp0aSI6IjUxOGNiZTQ1LWZlY2QtNGFkMC05ZDU5LTJkNTAwNjViNjY2MSIsIm5iZiI6Miwic2NvcGVzIjoiYXBpOmFjY2VzcyIsInN1YiI6InN1YmplY3QifQ.LmBx5LTW_ajE7CsCS4GQ4iwKkcagGbojlFghSgV0H73bWk4Uw-mAZ1PdklhBJ2BCebREg09Fdwsycs6ylER1Bg'
					},
					body: JSON.stringify({
						"page_number": 1,
						"page_size": 32,
						"search": null,
						"sort_on": "id",
						"sort_order": "desc"
					}),
				});

				if (response.ok) {

					let json = await response.json();

					dispatch(getOrganizationsAction(json));

				} else {
					console.log('(POST GET ORGANIZATIONS) HTTP Error: ' + response.status);
				}

			} catch (e) {
				console.log(e);
			}
		})();
	};
}

export function changeSelectedOrganization(id) {
	return {
		type: CHANGE_SELECTED_ORGANIZATION,
		payload: id,
	};
}


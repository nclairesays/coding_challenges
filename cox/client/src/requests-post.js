const fetch = require('node-fetch');

const { api } = require('./constants')

const postAnswers = async (datasetId, dealers) => {
	const data = [];
	for (let dealer in dealers) {
		data.push(dealers[dealer]);
	}

	console.log('ANSWER/PAYLOAD:', JSON.stringify({ dealers: data }));

	return await fetch(`${api}/${datasetId}/answer`, {
		method: 'POST',
		// mode: "no-cors",		// I'm currently getting CORS errors; error suggested that I add mode: no-cors. When I do, it then gives me a Media Type error. Commenting out mode for now...
		headers: {
			'content-type': 'application/json',
			accept: 'application/json',
		},
		body: JSON.stringify({ dealers: data }),
	})
		.then(res => res.json())
		.then(res => console.log('POST RESPONSE: ', res));
};

module.exports = {
	postAnswers
};
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
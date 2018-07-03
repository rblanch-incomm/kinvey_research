const service = require('../../utils/services.js');
const request = require('request');

const getAllBalances = (context, complete, modules) => {
	let objectBody = context.body;
	let token = objectBody.token;
	let promiseArray = [];
	for (card of objectBody.cards) {
		let data = {
			'serialNumber': card.serialNumber,
			'apiVersion': '2.0',
			'mobileAppVersion': '1.0'
		}
		let endpoint = 'getMemberDetails';
		let opts = service.getOptions(endpoint, data, token);
		let promise = new Promise((resolve, reject) => {
			request(opts, function( err, resp, body ) {
				console.log(`body: ${JSON.stringify(body, null, 2)}`);
				if (err) {
					// return complete().setBody(err).badRequest().done();
				} else if (body != null) {
					let data = {
						'balance': body.cardBalance
					}
					return complete().setBody(data).ok().done();
				} else {
					// return complete().setBody({'message': 'There is no data'}).badRequest().done();
				}
			});
		});
		promiseArray.push(promise);
	}

	Promise.all(promiseArray).then(response => {
		console.log("POST PROMISE")
		console.log(promise);
	});
};

module.exports = getAllBalances;
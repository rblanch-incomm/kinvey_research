const service = require('../../utils/services.js');
const request = require('request');
const rp = require('request-promise');

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

		let myPromise = new Promise((resolve, reject) => {
			let newRequest = rp(opts).then( parsedBody => {
				resolve({'body': parsedBody});
			}).catch( err => {
				reject({'error': err});
			});
		});
		promiseArray.push(myPromise);
	}

	Promise.all(promiseArray).then(data => {
		let dataArray = [];
		for (card of data) {
			data = {
				'serialNumber': card.body.serialNumber,
				'balance': card.body.cardBalance
			}
			dataArray.push(data);
		}
		complete().setBody(dataArray).ok().next();
	});
};

module.exports = getAllBalances;
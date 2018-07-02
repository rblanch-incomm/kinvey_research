const service = require('../../utils/services.js');
const request = require('request');

const balance = (context, complete, modules) => {
		let body = context.body;
		let token = body.token;
		let data = {
			'cardNumber': body.cardNumber || '',
			'serialNumber': body.serialNumber || '',
			'apiVersion': '2.0',
			'mobileAppVersion': '1.0'
		}
		let endpoint = 'GetMemberDetails';
		let opts = service.getOptions(endpoint, data, token);

		request(opts, function( err, resp, body ) {
		console.log(body)
		if (err) {
			return complete().setBody(err).badRequest().done();
		} else if (body != null) {
			let data = {
				'balance': body.cardBalance
			}
			return complete().setBody(data).ok().done();
		} else {
			return complete().setBody({'message': 'There is no data'}).badRequest().done();
		}
	});
};

const member = (context, complete, modules) => {
		let body = context.body;
		let token = body.token;
		let data = {
			'cardNumber': body.cardNumber || '',
			'serialNumber': body.serialNumber || '',
			'apiVersion': '2.0',
			'mobileAppVersion': '1.0'
		}
		let endpoint = 'GetMemberDetails';
		let opts = service.getOptions(endpoint, data, token);

		request(opts, function( err, resp, body ) {
		console.log(body)
		if (err) {
			return complete().setBody(err).badRequest().done();
		} else if (body != null) {
			let data = {
				'balance': body
			}
			return complete().setBody(data).ok().done();
		} else {
			return complete().setBody({'message': 'There is no data'}).badRequest().done();
		}
	});
};

module.exports = {
	'balance':balance,
	'member': member
};
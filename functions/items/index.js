const service = require('../../utils/services.js');
const request = require('request');

let endpoint = 'getItemEligibility';

const item = (context, complete, modules) => {
	let body = context.body;
	let token = body.token;
	let data = {
		'serialNumber': body.serialNumber,
		'retailer': body.retailer,
		'uPC': body.uPC,
		'apiVersion': '2.0',
		'mobileAppVersion': '1.0',
		'success': 'true'
	}
	let opts = service.getOptions(endpoint, data, token);

	request(opts, function( err, resp, body ) {
		console.log(body)
		if (err) {
			return complete().setBody(err).badRequest().done();
		} else if (body != null) {
			return complete().setBody(body).ok().done();
		} else {
			return complete().setBody({'message': 'There is no data'}).badRequest().done();
		}
	});
}

module.exports = {
	'item':item
};
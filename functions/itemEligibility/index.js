const service = require('../../utils/services.js');
const request = require('request');

const getItemEligibility = (context, complete, modules) =>  {
	let responseBody = context.body;
	let token = responseBody.token;
	let data = {
		'SerialNumber' : responseBody.serialNumber,
		'Retailer' : responseBody.retailer,
		'UPC' : responseBody.upc,
		'apiVersion' : '2.0',
		'mobileAppVersion' : '1.0'
	}
	let endpoint = 'GetItemEligibility';
	let opts = service.getOptions(endpoint, data, token);

	request(opts, function(err, resp, body) {
		console.log(body);
		if(err) {
			return complete().setBody(err).badRequest().done();
		} else if(body != null) {
			return complete().setBody(body).ok().done();
		} else {
			return complete().setBody({'message': 'There is no data'}).badRequest().done();
		}
	})
}

module.exports = getItemEligibility;
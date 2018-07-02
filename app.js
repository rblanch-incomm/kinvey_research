// Dependencies
let sdk = require('kinvey-flex-sdk');

// Functions
const members = require('./functions/members');
const item = require('./functions/items')

sdk.service({}, (err, flex) => {
	const functions = flex.functions;

	// Endpoints
	functions.register('balance', members.balance);
	functions.register('member', members.member);
	functions.register('item', item.item);
	// functions.register('survey', survey);

})
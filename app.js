// Dependencies
let sdk = require('kinvey-flex-sdk');

// Functions
const members = require('./functions/members');
const item = require('./functions/items')
const itemEligibility = require('./functions/itemEligibility');
const getAllBalances = require('./functions/getAllBalances');

sdk.service({}, (err, flex) => {
	const functions = flex.functions;

	// Endpoints
	functions.register('balance', members.balance);
	functions.register('member', members.member);
	functions.register('retailers', members.retailers);
	functions.register('item', item.item);
	functions.register('getItemEligibility', itemEligibility);
	functions.register('getAllBalances', getAllBalances);
	// functions.register('survey', survey);
})
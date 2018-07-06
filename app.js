// Dependencies
let sdk = require('kinvey-flex-sdk');

// Functions
const members = require('./functions/members');
const items = require('./functions/items/')
const itemEligibility = require('./functions/itemEligibility');
const getAllBalances = require('./functions/getAllBalances');

sdk.service({}, (err, flex) => {
	const functions = flex.functions;

	// Endpoints
	functions.register('members', members);
	functions.register('items', items);
	functions.register('getItemEligibility', itemEligibility);
	functions.register('getAllBalances', getAllBalances);
	// functions.register('survey', survey);

})

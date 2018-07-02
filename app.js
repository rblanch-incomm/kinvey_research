// Dependencies
let sdk = require('kinvey-flex-sdk');

// Functions
const members = require('./functions/members');
const items = require('./functions/items/')

sdk.service({}, (err, flex) => {
	const functions = flex.functions;

	// Endpoints
	functions.register('members', members);
	functions.register('items', items);
	// functions.register('survey', survey);

})
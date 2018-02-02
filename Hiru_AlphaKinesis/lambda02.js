let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {
	sns.publish({
		Message: 'this is a test message',
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Transactional'
			},
			'AWS.SNS.SMS.SenderID': {
				DataType: 'String',
				StringValue: 'Hirudinee'
			},
		},
		PhoneNumber: '+94715397214'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');
}